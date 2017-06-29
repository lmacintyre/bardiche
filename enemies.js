enemy_skeleton = {
	name: 'skeleton',
	sheet: 'skeleton-data.json',

	hitpoints: 30,

	hitbox: {
		width: 24,
		height: 110
	},

	weaponBoxes: {
		stab: [{
			name: 'stab',
			offsetX: 44, offsetY: -4,
			width: 20, height: 14
		}, {
			name: 'stab',
			offsetX: 48, offsetY: -4,
			width: 20, height: 14
		}]
	},

	weight: 0.5,

	frameIds: {
		idle: ['skeleton-walk-1'],
		walk: ['skeleton-walk-1', 'skeleton-walk-2'],
		stab: ['skeleton-stab-1', 'skeleton-stab-2']
	},

	animations: {

	},

	onhit() {},

	onstep() {
		if (this.grounded) this.sprite.vy = 0.1;
		this.grounded = false;

		if (this.eventQueue.length === 0) {
			pushEvent(this, {
				run(enemy) {
					if (Math.random() > 0.5) walkEnemy(enemy, 2);
					else walkEnemy(enemy, -2);
				},

				delay: 700
			})

			pushEvent(this, {
				run(enemy) {
					walkEnemy(enemy, 0)
				},

				delay: 700
			})
		}

		manageEvent(this);
	}
}

buildEnemy = function(enemy) {
	
	// Build animations
	Object.keys(enemy.frameIds).forEach(function(key) {
		enemy.animations[key] = [];
		enemy.frameIds[key].forEach(function(frame) {
			enemy.animations[key].push(PIXI.Texture.fromFrame(frame));
		});
	});

	return enemy;
}

/*
	Event structure:

	{
		run        (function)
		delay      (time in ms)
	}
*/

spawnEnemy = function(enemy, x, y, spawnFunction=(e)=>{}, deathFunction=(e)=>{}, facing="left") {
	enemy.hitbox.x = x - enemy.hitbox.width/2;
	enemy.hitbox.y = y - enemy.hitbox.height/2;
	buildHitbox(enemy.hitbox);
	let spawnHitbox = cloneHitbox(enemy.hitbox);

	spawn = {
		name: enemy.name,
		hitpoints: enemy.hitpoints,

		hitbox: spawnHitbox,
		footLine: {
			p1: {x: x, y: y + 45},
			p2: {x: x, y: y + 55}
		},
		weaponBoxes: enemy.weaponBoxes,
		weaponbox: 0,
		animations: enemy.animations,

		eventQueue: [],

		resolveCollision(collision) {

			let side = collision.side, overlap = collision.overlap;

			if (side == "top") {
				moveActor(this, 0, overlap);

			} else if (side == "bottom") {
				moveActor(this, 0, overlap * -1);
				this.grounded = true;

			} else if (side == "left") {
				moveActor(this, overlap, 0);

			} else if (side == "right") {
				moveActor(this, overlap * -1, 0);
			}
		},

		onhit: enemy.onhit,
		onstep: enemy.onstep,
		ondeath: deathFunction
	};

	spawn.activeAnimation = spawn.animations.stab;
	spawn.sprite = new PIXI.extras.AnimatedSprite(spawn.activeAnimation);
	spawn.sprite.animationSpeed = 0.1;

	spawn.sprite.position.set(x, y);
	spawn.sprite.anchor.set(0.5, 0.5);
	spawn.sprite.vx = 0;
	spawn.sprite.vy = 0;
	spawn.weight = enemy.weight;
	spawn.grounded = false;
	spawn.colliding = true;
	spawn.vulnerable = true;
	spawn.active = true;

	if (facing === "left") spawn.sprite.scale.x = -1;
	else spawn.sprite.scale.x = 1;

	spawn.sprite.play();
	spawnFunction(spawn);
	return spawn;
}

jumpEnemy = function(enemy, vy) {
	if (enemy.grounded) {
		enemy.sprite.vy = vy;
		enemy.grounded = false;
		enemy.activeAnimation = enemy.animations.jump;
	}
}

walkEnemy = function(enemy, vx) {
	
	enemy.sprite.vx = vx;

	if (vx !== 0) {
		enemy.activeAnimation = enemy.animations.walk;
		enemy.sprite.textures = enemy.animations.walk;
		enemy.sprite.gotoAndPlay(0);

		if (vx < 0) enemy.sprite.scale.x = -1;
		else if (vx > 0) enemy.sprite.scale.x = 1;
	} else {
		enemy.activeAnimation = enemy.animations.idle;
		enemy.sprite.textures = enemy.animations.idle;

		enemy.sprite.gotoAndPlay(0);
	}
}

pushEvent = function(enemy, event) {
	enemy.eventQueue.push(event);
	if (enemy.eventQueue.length === 1) enemy.eventStart = now;
}

manageEvent = function(enemy) {
	if (enemy.eventQueue.length > 0) {
		let event = enemy.eventQueue[0];
		if (now - enemy.eventStart >= event.delay) {
			event.run(enemy);
			enemy.eventQueue.splice(0, 1);

			enemy.eventStart = now;
		}
	}
}

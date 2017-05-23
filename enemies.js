enemy_nuttboy = {
	name: 'nuttboy',
	sheet: 'nuttboydata.json',

	hitbox: {
		width: 64,
		height: 64
	},

	weaponBoxes: {
		attack1: [{
			name: 'stab',
			offsetX: 44, offsetY: -4,
			width: 20, height: 14
		}, {
			name: 'stab',
			offsetX: 48, offsetY: -4,
			width: 20, height: 14,
		}]
	},

	weight: 1,

	frameIds: {
		idle: ['nuttboy-walk-1', 'nuttboy-walk-1'],
		walk: ['nuttboy-walk-1', 'nuttboy-walk-2'],
		stuck: ['nuttboy-stuck-1', 'nuttboy-stuck-2'],
		attack1: ['nuttboy-stab-1', 'nuttboy-stab-2'],
		attack2: ['nuttboy-spikes-1', 'nuttboy-spikes-2', 'nuttboy-spikes-3',
				  'nuttboy-spikes-3', 'nuttboy-spikes-2', 'nuttboy-spikes-1']
	},

	animations: {
		// populated by buildEnemy
	}
}

buildEnemy = function(enemy) {
	
	// Build animations
	enemy.animations.idle = []; enemy.animations.walk = []; enemy.animations.stuck = [];
	enemy.animations.attack1 = []; enemy.animations.attack2 = [];

	enemy.frameIds.idle.forEach(function(frame) {
		enemy.animations.idle.push(PIXI.Texture.fromFrame(frame));
	});

	enemy.frameIds.walk.forEach(function(frame) {
		enemy.animations.walk.push(PIXI.Texture.fromFrame(frame));
	});

	enemy.frameIds.stuck.forEach(function(frame) {
		enemy.animations.stuck.push(PIXI.Texture.fromFrame(frame));
	});

	enemy.frameIds.attack1.forEach(function(frame) {
		enemy.animations.attack1.push(PIXI.Texture.fromFrame(frame));
	});
	
	enemy.frameIds.attack2.forEach(function(frame) {
		enemy.animations.attack2.push(PIXI.Texture.fromFrame(frame));
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

spawnEnemy = function(enemy, x, y, spawnFunction=(e)=>{}, facing="left") {

	enemy.hitbox.x = x - enemy.hitbox.width/2;
	enemy.hitbox.y = y - enemy.hitbox.height/2;
	buildHitbox(enemy.hitbox);
	spawnHitbox = cloneHitbox(enemy.hitbox);

	spawn = {
		name: enemy.name,
		hitbox: spawnHitbox,
		weaponBoxes: enemy.weaponBoxes,
		weaponbox: 0,
		animations: enemy.animations,

		eventQueue: []
	};

	spawn.activeAnimation = spawn.animations.idle;
	spawn.sprite = new PIXI.extras.AnimatedSprite(spawn.activeAnimation);
	spawn.sprite.animationSpeed = 0.1;

	spawn.sprite.position.set(x, y);
	spawn.sprite.anchor.set(0.5, 0.5);
	spawn.sprite.vx = 0;
	spawn.sprite.vy = 0;
	spawn.grounded = false;
	spawn.vulnerable = true;

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
	enemy.activeAnimation = enemy.animations.walk;
	enemy.sprite.textures = enemy.animations.walk;

	if (vx < 0) enemy.sprite.scale.x = -1;
	else if (vx > 0) enemy.sprite.scale.x = 1;
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

nuttboyCharge = function(enemy, player) {
	setAnimation(enemy.sprite, enemy.animations.attack1);
	enemy.weaponbox = enemy.weaponBoxes.attack1;

	if (enemy.sprite.x < player.sprite.x) {
		enemy.sprite.scale.x = 1;
	} else {
		enemy.sprite.scale.x = -1;
	}

	enemy.sprite.vx = 4 * enemy.sprite.scale.x;
}
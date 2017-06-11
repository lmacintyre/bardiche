playerBase_pinkKnight = {
	name: "pink knight",
	sheet: 'playerdata.json',

	hitbox: {
		width: 24,
		height: 110
	},

	jumptimer: 20,

	weaponBoxes: {
		stab: [{
			name: 'stab',
			offsetX: 12, offsetY: -2,
			width: 28, height: 12
		}, {
			name: 'stab',
			offsetX: 22, offsetY: -2,
			width: 28, height: 12,
		}],

		slash: [{
			name: 'slash',
			offsetX: 14, offsetY: -36,
			width: 14, height: 22
		}, {
			name: 'slash',
			offsetX: 22, offsetY: 0,
			width: 28, height: 12,
		}],

		lunge: [{
			name: 'lunge',
			offsetX: 26, offsetY: -4,
			width: 28, height: 12
		}, {
			name: 'lunge',  
			offsetX: 30, offsetY: -4,
			width: 28, height: 12,
		}],

		drill: [{
			name: 'drill',
			offsetX: -8, offsetY: 24,
			width: 16, height: 16
		}, {
			name: 'drill',  
			offsetX: -8, offsetY: 24,
			width: 16, height: 16,
		}]
	},

	frameIds: {
		idle: ['pink-knight-stand'],
		walk: ['pink-knight-walk-1', 'pink-knight-walk-2', 'pink-knight-walk-3', 'pink-knight-walk-4',
			   'pink-knight-walk-5', 'pink-knight-walk-6', 'pink-knight-walk-7', 'pink-knight-walk-8'],
		jump: ['pink-knight-walk-8'],
		damage: ['pink-knight-damage'],

		stab: ['pink-knight-stab-1', 'pink-knight-stab-2'],
		slash: ['pink-knight-slash-1', 'pink-knight-slash-2'],
		lunge: ['pink-knight-lunge-1'],
		drill: ['pink-knight-drill-2', 'pink-knight-drill-1']
	},

	animations: {
		// populated by buildPlayer
	}
}

buildPlayer = function(playerBase) {

	Object.keys(playerBase.frameIds).forEach(function(key) {
		playerBase.animations[key] = [];
		playerBase.frameIds[key].forEach(function(frame) {
			playerBase.animations[key].push(PIXI.Texture.fromFrame(frame));
		});
	});

	return playerBase;
}

spawnPlayer = function(playerBase, x, y) {
	playerBase.hitbox.x = x - playerBase.hitbox.width/2;
	playerBase.hitbox.y = y - playerBase.hitbox.height/2;
	buildHitbox(playerBase.hitbox);
	spawnHitbox = cloneHitbox(playerBase.hitbox);

	spawn = {
		name: playerBase.name,
		
		hitbox: spawnHitbox,
		footLine: {
			p1: {x: x, y: y + 45},
			p2: {x: x, y: y + 55}
		},
		weaponBoxes: playerBase.weaponBoxes,
		animations: playerBase.animations,

		jumptimer: playerBase.jumptimer,
		maxjumptimer: playerBase.jumptimer,

		controlMode: 'free',

		resolveCollision(collision) {

			let side = collision.side, overlap = collision.overlap;

			if (side == "top") {
				movePlayer(this, activeScreen.platforms, 0, overlap);

			} else if (side == "bottom") {
				movePlayer(this, activeScreen.platforms, 0, overlap * -1);
				this.grounded = true;

			} else if (side == "left") {
				movePlayer(this, activeScreen.platforms, overlap, 0);

			} else if (side == "right") {
				movePlayer(this, activeScreen.platforms, overlap * -1, 0);
			}
		}
	}

	spawn.activeAnimation = spawn.animations.idle;
	spawn.sprite = new PIXI.extras.AnimatedSprite(spawn.activeAnimation);
	spawn.sprite.animationSpeed = 0.1;

	spawn.sprite.position.set(x, y);
	spawn.sprite.anchor.set(0.5, 0.5);
	spawn.sprite.vx = 0;
	spawn.sprite.vy = 0;
	spawn.grounded = false;
	spawn.vulnerable = true;

	spawn.activePlatform = undefined;

	spawn.keyObjectUp = keyboard(38);
	spawn.keyObjectUp.press = function() {
		if (player.controlMode === 'stuck' || player.grounded) {
			player.grounded = false;
			player.jumptimer = player.maxjumptimer;
			player.controlMode = 'free';
			player.weaponbox = 0;
			player.sprite.vy = -6;
		}
	}
	spawn.keyObjectUp.release = function() {
		player.jumptimer = 0;
	}

	spawn.keyObjectDown = keyboard(40);
	spawn.keyObjectDown.press = function() {
		if (player.activePlatform) {
			if (player.activePlatform.type === 'platform') {
				console.log('drop it')
				activeScreen.stage.removeChild(player.sprite);
				activeScreen.stage.addChildAt(player.sprite, activeScreen.stage.getChildIndex(player.activePlatform.tileGroup) + 1);

				player.activePlatform = undefined;
			}
		}
	}

	spawn.sprite.play();
	return spawn;
}

movePlayer = function(player, platforms, dx, dy) {
	moveActor(player, dx, dy);
	platforms.forEach(function(platform) {
		platform.tileGroup.children.forEach(function(tile) {
			tile.position.x -= dx;
			tile.position.y -= dy;
		});
	});
}

damagePlayer = function(player, damage) {
	player.controlMode = 'hit';
	player.damageTimer = now;
	player.grounded = false;
	player.weaponbox = 0;

	setAnimation(player, player.animations.damage);
	invlunerablePlayer(player);
}

invlunerablePlayer = function(player) {
	player.vulnerable = false;
	player.invulnTimer = now;
}

attackPlayer = function(player, attack) {
	player.weaponbox = player.weaponBoxes[attack];
	setAnimation(player, player.animations[attack]);
}
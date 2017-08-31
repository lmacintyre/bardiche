playerBase_pinkKnight = {
	name: "pink knight",
	sheet: 'playerdata.json',

	hitbox: {
		width: 24,
		height: 110
	},

	jumptimer: 20,
	terminalVelocity: 12,

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
		terminalVelocity: playerBase.terminalVelocity,

		controlMode: 'free',

		resolveCollision(collision) {

			let side = collision.side, overlap = collision.overlap;

			if (side == "top") {
				movePlayer(this, 0, overlap);

			} else if (side == "bottom") {
				movePlayer(this, 0, overlap * -1);
				this.grounded = true;

			} else if (side == "left") {
				movePlayer(this, overlap, 0);

			} else if (side == "right") {
				movePlayer(this, overlap * -1, 0);
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

	spawn.speechSprite = 0;

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
				activeScreen.stage.removeChild(player.sprite);
				activeScreen.stage.addChildAt(player.sprite, activeScreen.stage.getChildIndex(player.activePlatform.tileGroup) + 1);

				player.activePlatform = 0;
			}
		} 

		if (!player.grounded) {
			player.sprite.vy = 8;
		}
	}

	spawn.sprite.play();
	return spawn;
}

movePlayer = function(player, dx, dy) {
	moveActor(player, dx, dy, true);

	activeScreen.platforms.forEach(function(platform) {

		platform.tileGroup.children.forEach(function(tile) {
			tile.position.x -= dx;
			tile.position.y -= dy;
		});

		platform.backgroundGroup.children.forEach(function(tile) {
			tile.position.x -= dx;
			tile.position.y -= dy;
		});
	});

	activeScreen.background.forEach(function(item) {
		item.tilePosition.x -= dx * item.scrollRate;
		item.position.y -= dy * item.scrollRate;
	});

	activeScreen.scenery.forEach(function(item) {
		item.position.x -= dx;
		item.position.y -= dy;
	});

	activeScreen.enemies.forEach(function(item) {
		item.sprite.position.x -= dx;
		item.sprite.position.y -= dy;
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

animatePlayer = function() {
	if (player.controlMode === 'free') {
		if (player.weaponbox) {

		} else {
			if (player.grounded) {
				if (player.sprite.vx === 0) setAnimation(player, player.animations.idle);
				else setAnimation(player, player.animations.walk);
			} else {
				setAnimation(player, player.animations.jump);
			}
		}
	} else if (player.controlMode === 'hit') {
		setAnimation(player, player.animations.damage);
	}
}

turnPlayer = function() {
	if (keyObjectLeft.isDown) {
		player.sprite.scale.x = -1;

	} else if (keyObjectRight.isDown) {
		player.sprite.scale.x = 1;
	}
}

walkPlayer = function() {
	if (keyObjectRight.isDown || keyObjectLeft.isDown) {
		//either left or right is pressed

		if (!keyObjectLeft.isDown) {
			//only right pressed
			player.sprite.vx = 3;
			
		} else if (!keyObjectRight.isDown) {
			//only left pressed
			player.sprite.vx = -3;
			
		} else {
			// Left and right pressed
			player.sprite.vx = 0;

		}
	} else {
		//neither left nor right pressed
		player.sprite.vx = 0;
	}
}

controlPlayer = function() {
	if (player.controlMode === 'free') {
		if (player.grounded && player.weaponbox) {
			player.sprite.vx = 0;

		} else {
			walkPlayer();
		}

		turnPlayer();

	} else if (player.controlMode === 'hit') {

		if (player.grounded) {
			player.sprite.vx = 0;
			player.controlMode = 'free';
			setAnimation(player, player.animations.idle);
		}

		if (player.damageTimer < now - 1000) {
			player.controlMode = 'free';
			setAnimation(player, player.animations.idle);
		}
	} else if (player.controlMode === 'stuck') {
		player.sprite.vx = 0;
		player.sprite.vy = 0;

	} else if (player.controlMode === 'attack') {
		if (!player.grounded) {
			walkPlayer();
		}
		if (!keyObjectX.isDown && !keyObjectZ.isDown) {
			player.weaponbox = 0;
			player.controlMode = 'free';
		}

		turnPlayer();
	}

	if (player.vulnerable === false && player.invulnTimer < now - 1000) {
		player.vulnerable = true;
	}
}
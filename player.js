playerBase_pinkKnight = {
	name: "pink knight",
	sheet: 'playerdata.json',

	hitbox: {
		width: 24,
		height: 48
	},

	jumptimer: 0,

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
		walk: ['pink-knight-walk-2', 'pink-knight-walk-1'],
		jump: ['pink-knight-walk-2'],
		damage: ['pink-knight-damage'],

		stab: ['pink-knight-stab-1', 'pink-knight-stab-2'],
		slash: ['pink-knight-slash-1', 'pink-knight-slash-2'],
		lunge: ['pink-knight-lunge-1', 'pink-knight-lunge-2'],
		drill: ['pink-knight-drill-2', 'pink-knight-drill-1']
	},

	animations: {
		// populated by buildPlayer
	}
}

buildPlayer = function(playerBase) {

	playerBase.animations.idle = []; playerBase.animations.walk = []; playerBase.animations.jump = []; playerBase.animations.damage = [];
	playerBase.animations.stab = []; playerBase.animations.slash = [];
	playerBase.animations.lunge = []; playerBase.animations.drill = [];

	playerBase.frameIds.idle.forEach(function(frame) {
		playerBase.animations.idle.push(PIXI.Texture.fromFrame(frame));
	});

	playerBase.frameIds.walk.forEach(function(frame) {
		playerBase.animations.walk.push(PIXI.Texture.fromFrame(frame));
	});

	playerBase.frameIds.jump.forEach(function(frame) {
		playerBase.animations.jump.push(PIXI.Texture.fromFrame(frame));
	});

	playerBase.frameIds.damage.forEach(function(frame) {
		playerBase.animations.damage.push(PIXI.Texture.fromFrame(frame));
	});

	playerBase.frameIds.stab.forEach(function(frame) {
		playerBase.animations.stab.push(PIXI.Texture.fromFrame(frame));
	});

	playerBase.frameIds.slash.forEach(function(frame) {
		playerBase.animations.slash.push(PIXI.Texture.fromFrame(frame));
	});

	playerBase.frameIds.lunge.forEach(function(frame) {
		playerBase.animations.lunge.push(PIXI.Texture.fromFrame(frame));
	});

	playerBase.frameIds.drill.forEach(function(frame) {
		playerBase.animations.drill.push(PIXI.Texture.fromFrame(frame));
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
			p1: {x: x, y: y + 14},
			p2: {x: x, y: y + 24}
		},
		weaponBoxes: playerBase.weaponBoxes,
		animations: playerBase.animations,

		jumptimer: playerBase.jumptimer,
		maxjumptimer: playerBase.jumptimer,

		controlMode: 'free'
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

	spawn.sprite.play();
	return spawn;
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

playerStick = function(player, groundBoxes) {
	if (checkAttackWall(player, groundBoxes)) {
		player.sprite.loop = false;
		player.sprite.onComplete = function() {
			if (collisionList = getCollisions(player.activeWeaponbox, groundBoxes)) {
				player.controlMode = 'stuck';
			} else {
				player.sprite.loop = true;
				player.sprite.gotoAndPlay(0);
			}
		}
	}
}
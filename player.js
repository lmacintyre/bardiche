playerBase_pinkKnight = {
	name: "pink knight",
	sheet: 'playerdata.json',

	hitbox: {
		width: 24,
		height: 48
	},

	frameIds: {
		idle: ['pink-knight-stand'],
		walk: ['pink-knight-walk-1', 'pink-knight-walk-2'],
		jump: ['pink-knight-walk-2'],

		stab: ['pink-knight-stab-1', 'pink-knight-stab-2'],
		slash: ['pink-knight-slash-1', 'pink-knight-slash-2'],
	},

	animations: {
		// populated by buildPlayer
	}
}

buildPlayer = function(playerBase) {

	playerBase.animations.idle = []; playerBase.animations.walk = []; playerBase.animations.jump = [];
	playerBase.animations.stab = []; playerBase.animations.slash = [];

	playerBase.frameIds.idle.forEach(function(frame) {
		playerBase.animations.idle.push(PIXI.Texture.fromFrame(frame));
	});

	playerBase.frameIds.walk.forEach(function(frame) {
		playerBase.animations.walk.push(PIXI.Texture.fromFrame(frame));
	});

	playerBase.frameIds.jump.forEach(function(frame) {
		playerBase.animations.jump.push(PIXI.Texture.fromFrame(frame));
	});

	playerBase.frameIds.stab.forEach(function(frame) {
		playerBase.animations.stab.push(PIXI.Texture.fromFrame(frame));
	});

	playerBase.frameIds.slash.forEach(function(frame) {
		playerBase.animations.slash.push(PIXI.Texture.fromFrame(frame));
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
		animations: playerBase.animations
	}

	spawn.activeAnimation = spawn.animations.idle;
	spawn.sprite = new PIXI.extras.AnimatedSprite(spawn.activeAnimation);
	spawn.sprite.animationSpeed = 0.1;

	spawn.sprite.position.set(x, y);
	spawn.sprite.anchor.set(0.5, 0.5);
	spawn.sprite.vx = 0;
	spawn.sprite.vy = 0;
	spawn.grounded = false;

	spawn.sprite.play();
	return spawn;
}
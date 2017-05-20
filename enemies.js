enemy_nuttboy = {
	name: 'nuttboy',
	sheet: 'nuttboydata.json',

	hitbox: {
		offsetX: 0,
		offsetY: 0,

		width: 128,
		height: 64
	},

	weight: 1,
	grounded: false,

	frameIds: {
		idle: ['nuttboy-walk-1', 'nuttboy-walk-1'],
		walk: ['nuttboy-walk-1', 'nuttboy-walk-2'],
		attack: ['nuttboy-stab-1', 'nuttboy-stab-2']
	},

	animations: {
		// populated by buildEnemy
	},

	activeAnimation: undefined,

	sprite: undefined
}

buildEnemy = function(enemy) {
	
	// Build animations
	enemy.animations.idle = []; enemy.animations.walk = []; enemy.animations.attack = [];

	enemy.frameIds.idle.forEach(function(frame) {
		enemy.animations.idle.push(PIXI.Texture.fromFrame(frame));
	});

	enemy.frameIds.walk.forEach(function(frame) {
		enemy.animations.walk.push(PIXI.Texture.fromFrame(frame));
	});

	enemy.frameIds.attack.forEach(function(frame) {
		enemy.animations.attack.push(PIXI.Texture.fromFrame(frame));
	});

	enemy.activeAnimation = enemy.animations.idle;

	enemy.sprite = new PIXI.extras.AnimatedSprite(enemy.activeAnimation);
	enemy.sprite.anchor.set(0.5, 0.5);
	enemy.sprite.play();
	
	return enemy;
}

placeEnemy = function(enemy, x, y) {
	console.log("PA: " + x);
	enemy.sprite.position.set(x, y);

	//Build hitbox
	enemy.hitbox.x = x;
	enemy.hitbox.y = y;
	buildHitbox(enemy.hitbox);

	return enemy;
}
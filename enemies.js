enemy_nuttboy = {
	name: 'nuttboy',
	sheet: 'nuttboydata.json',

	hitbox: {
		width: 64,
		height: 64
	},

	weight: 1,

	frameIds: {
		idle: ['nuttboy-walk-1', 'nuttboy-walk-1'],
		walk: ['nuttboy-walk-1', 'nuttboy-walk-2'],
		attack: ['nuttboy-stab-1', 'nuttboy-stab-2']
	},

	animations: {
		// populated by buildEnemy
	}
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
	
	return enemy;
}

spawnEnemy = function(enemy, x, y, facing="left") {

	enemy.hitbox.x = x - enemy.hitbox.width/2;
	enemy.hitbox.y = y - enemy.hitbox.height/2;
	buildHitbox(enemy.hitbox);
	spawnHitbox = cloneHitbox(enemy.hitbox);

	spawn = {
		name: enemy.name,
		hitbox: spawnHitbox,
		animations: enemy.animations,
	};

	spawn.activeAnimation = spawn.animations.idle;
	spawn.sprite = new PIXI.extras.AnimatedSprite(spawn.activeAnimation);
	spawn.sprite.animationSpeed = 0.1;

	spawn.sprite.position.set(x, y);
	spawn.sprite.anchor.set(0.5, 0.5);
	spawn.sprite.vx = 0;
	spawn.sprite.vy = 0;
	spawn.grounded = false;

	if (facing === "left") spawn.sprite.scale.x = -1;
	else spawn.sprite.scale.x = 1;

	spawn.sprite.play();
	return spawn;
}

jumpEnemy = function(enemy, vy) {
	enemy.sprite.vy = vy;
	enemy.grounded = false;
	enemy.activeAnimation = enemy.animations.jump;
}

walkEnemy = function(enemy, vx) {
	enemy.sprite.vx = vx;
	enemy.activeAnimation = enemy.animations.walk;
	enemy.sprite.textures = enemy.animations.walk;

	if (vx < 0) enemy.sprite.scale.x = -1;
	else enemy.sprite.scale.x = 1;
}
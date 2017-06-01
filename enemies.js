hazard_wax = {
	name: 'hot wax',
	sheet: 'hotwax.json',

	hitbox: {
		width: 64,
		height: 64
	},

	frameIds: {
		active: ['hotwax-1', 'hotwax-2']
	},

	animations: {
		// populated by buildHazard
	}
}

buildHazard = function(hazardBase) {
	Object.keys(hazardBase.frameIds).forEach(function(key) {
		hazardBase.animations[key] = [];
		hazardBase.frameIds[key].forEach(function(frame) {
			hazardBase.animations[key].push(PIXI.Texture.fromFrame(frame));
		});
	});

	return hazardBase;
}

spawnHazard = function(hazard, x, y) {
	hazard.hitbox.x = x - hazard.hitbox.width/2;
	hazard.hitbox.y = y - hazard.hitbox.height/2;
	buildHitbox(hazard.hitbox);
	let spawnHitbox = cloneHitbox(hazard.hitbox);
	
	

	spawn = {
		name: hazard.name,

		hitbox: spawnHitbox,
		weaponBoxes: hazard.weaponBoxes,
		animations: hazard.animations,
	};

	spawn.sprite = new PIXI.extras.AnimatedSprite(spawn.animations.active);
	spawn.sprite.animationSpeed = 0.1;

	spawn.sprite.position.set(x, y);
	spawn.sprite.anchor.set(0.5, 0.5);

	spawn.sprite.play();
	return spawn;
}

enemy_tiamat = {
	name: 'tiamat',
	sheet: 'waxtiamat.json',

	hitpoints: 500,

	hitbox: {
		width: 10,
		height: 10
	},

	weaponBoxes: {

	},

	weight: 0,

	frameIds: {
		idle: ['tiamat-idle'],
		light: ['tiamat-wake-1', 'tiamat-wake-2', 'tiamat-wake-3', 'tiamat-wake-4'],
		sleep: ['tiamat-sleep']
	},

	animations: {
		// populated by buildEnemy
	},

	onhit() {},

	onstep() {}
}

enemy_nuttboy = {
	name: 'nuttboy',
	sheet: 'nuttboydata.json',

	hitpoints: 3,

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
			width: 20, height: 14
		}],

		attack2: [{
			name:'spikes',
			offsetX: -32, offsetY: -32,
			width: 64, height: 0
		}, {
			name:'spikes',
			offsetX: -32, offsetY: -42,
			width: 64, height: 32
		}, {
			name:'spikes',
			offsetX: -32, offsetY: -52,
			width: 64, height: 42
		}, {
			name:'spikes',
			offsetX: -32, offsetY: -52,
			width: 64, height: 42
		}, {
			name:'spikes',
			offsetX: -32, offsetY: -42,
			width: 64, height: 32
		}, {
			name:'spikes',
			offsetX: -32, offsetY: -32,
			width: 64, height: 0
		}]
	},

	weight: 1,

	frameIds: {
		idle: ['nuttboy-walk-1', 'nuttboy-walk-1'],
		walk: ['nuttboy-walk-1', 'nuttboy-walk-2'],
		stuck: ['nuttboy-stuck-1', 'nuttboy-stuck-2'],
		attack1: ['nuttboy-stab-1', 'nuttboy-stab-2'],
		attack2: ['nuttboy-spikes-1', 'nuttboy-spikes-2', 'nuttboy-spikes-3',
				  'nuttboy-spikes-3', 'nuttboy-spikes-2', 'nuttboy-spikes-1'],
		death: ['nuttboy-death-1', 'nuttboy-death-2', 'nuttboy-death-3',
				'nuttboy-death-4', 'nuttboy-death-5']
	},

	animations: {
		// populated by buildEnemy
	},

	onhit(attack, damage) {
		if (attack === 'drill') {
			console.log("drilling")
			if (this.vulnerable) {
				this.vulnerable = false;

				this.sprite.vx = 0;
				setAnimation(this, this.animations.walk, true);
				pushEvent(this, {
					run(enemy) {
						nuttboySpikes(enemy);
						enemy.sprite.onComplete = function() {
							enemy.vulnerable = true;

							nuttboyCharge(enemy, player);
						}
					},

					delay: 250
				});

				if (damage > 3) {
					this.hitpoints -= damage;
					console.log(this.hitpoints)
					if (this.hitpoints <= 0) {
						console.log('die')
						nuttboyDie(this);
					}
				}
			}
		}
	},

	onstep() {
		if (this.weaponbox) {
			if (this.activeWeaponbox.name === 'stab') {
				if (checkAttackWall(this, groundBoxes)) {
					nuttboyStick(this); 
				}

				if (player.vulnerable) {
					if (collisionList = getCollisions(this.activeWeaponbox, [player.hitbox])) {
						this.sprite.vx = 0;
						damagePlayer(player, 1);
						player.sprite.vx = this.sprite.scale.x * 5;
						player.sprite.vy = -3;

						this.eventQueue = [];
						pushEvent(this, {
							run(enemy) {
								nuttboyCharge(enemy, player);
							},

							delay: 1000
						});
					}
				}
			} else if (enemy.activeWeaponbox.name === 'spikes') {
				if (player.vulnerable) {
					if (collisionList = getCollisions(this.activeWeaponbox, [player.hitbox])) {
						damagePlayer(player, 1);
						player.sprite.vy = -4;

						this.eventQueue = [];
						pushEvent(this, {
							run(enemy) {
								nuttboyCharge(enemy, player);
							},

							delay: 1000
						});
					}
				}
			}
		}
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
		weaponBoxes: enemy.weaponBoxes,
		weaponbox: 0,
		animations: enemy.animations,

		eventQueue: [],

		onhit: enemy.onhit,
		onstep: enemy.onstep,
		ondeath: deathFunction
	};

	console.log("DF");
	console.log(spawn.ondeath);

	spawn.activeAnimation = spawn.animations.idle;
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
	setAnimation(enemy, enemy.animations.attack1);
	enemy.weaponbox = enemy.weaponBoxes.attack1;

	if (enemy.sprite.x < player.sprite.x) {
		enemy.sprite.scale.x = 1;
	} else {
		enemy.sprite.scale.x = -1;
	}

	enemy.sprite.vx = 4 * enemy.sprite.scale.x;
}

nuttboySpikes = function(enemy) {
	setAnimation(enemy, enemy.animations.attack2, false);
	enemy.weaponbox = enemy.weaponBoxes.attack2;

	enemy.sprite.vx = 0;
}

nuttboyDie = function(enemy) {
	console.log(enemy)
	setAnimation(enemy, enemy.animations.death, false);
	enemy.sprite.onComplete = function() {};
	enemy.weaponbox = 0;
	enemy.eventQueue = [];
	enemy.sprite.vx = 0;
	enemy.sprite.vy = 0;
	enemy.active = false;

	enemy.ondeath(enemy);
}

nuttboyStick = function(enemy) {
	setAnimation(enemy, enemy.animations.stuck);
	enemy.weaponbox = 0;

	pushEvent(enemy, {
		run(enemy) {
			setAnimation(enemy, enemy.animations.stuck, true);
			enemy.sprite.vx = 0;
		},

		delay: 50
	});

	pushEvent(enemy, {
		run(enemy) {
			nuttboySpikes(enemy);
			enemy.sprite.onComplete = function() {
				nuttboyCharge(enemy, player);
			}
		},

		delay: 1000
	});
}
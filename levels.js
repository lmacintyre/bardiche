
const tileEnum = {
	FIL_AIR: 0,

	STR_BOT: "bottom.png",
	STR_TOP: "top.png",
	STR_LEF: "left.png",
	STR_RIG: "right.png",

	CRN_ITR: "inside-tr.png",
	CRN_ITL: "inside-tl.png",
	CRN_IBR: "inside-br.png",
	CRN_IBL: "inside-bl.png",
	
	CRN_OTR: "outside-tr.png",
	CRN_OTL: "outside-tl.png",
	CRN_OBR: "outside-br.png",
	CRN_OBL: "outside-bl.png",

	FIL_DRT: "fill.png"
};

screenTiles = [

	[[tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.CRN_OTL, tileEnum.STR_BOT, tileEnum.STR_BOT],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.CRN_OTL, tileEnum.STR_BOT, tileEnum.CRN_IBR, tileEnum.FIL_DRT, tileEnum.FIL_DRT],
	 [tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.CRN_IBR, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT],
	 [tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT]],

	[[tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.STR_BOT, tileEnum.CRN_OTR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.CRN_OTL, tileEnum.STR_BOT, tileEnum.CRN_OTR],
	 [tileEnum.FIL_DRT, tileEnum.STR_LEF, tileEnum.CRN_OTL, tileEnum.STR_BOT, tileEnum.CRN_OTR, tileEnum.STR_RIG, tileEnum.FIL_DRT, tileEnum.CRN_IBL],
	 [tileEnum.FIL_DRT, tileEnum.CRN_IBL, tileEnum.CRN_IBR, tileEnum.FIL_DRT, tileEnum.CRN_IBL, tileEnum.CRN_IBR, tileEnum.FIL_DRT, tileEnum.FIL_DRT],
	 [tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT]],

	[[tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.CRN_OTL, tileEnum.STR_BOT],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.CRN_OTL, tileEnum.CRN_IBR, tileEnum.FIL_DRT],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.STR_RIG, tileEnum.FIL_DRT, tileEnum.FIL_DRT],
	 [tileEnum.STR_BOT, tileEnum.CRN_OTR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.STR_RIG, tileEnum.FIL_DRT, tileEnum.FIL_DRT],
	 [tileEnum.FIL_DRT, tileEnum.CRN_IBL, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.CRN_IBR, tileEnum.FIL_DRT, tileEnum.FIL_DRT],
	 [tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT]],

	 [[tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.STR_BOT, tileEnum.CRN_OTR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.CRN_OTL, tileEnum.STR_BOT],
	 [tileEnum.CRN_ITL, tileEnum.CRN_OBR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.CRN_OBL, tileEnum.CRN_ITR],
	 [tileEnum.STR_LEF, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.STR_RIG],
	 [tileEnum.STR_LEF, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.STR_RIG],
	 [tileEnum.CRN_IBL, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.CRN_IBR],
	 [tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT]]

];

screenDecorations = [

	[
		{ path: 'res/candlehouse.png', x: 64, y: 160 },
		{ path: 'res/candles.png', x: 224, y: 224 }
	],

	[],

	[],

	[]

]

screenBoxes = [

	[{x: -64, y: 416, width: 288, height: 32},
	{x: 224, y: 352, width: 128, height: 96},
	{x: 352, y: 288, width: 192, height: 160}],

	[{x: -32, y: 288, width: 128, height: 128},
	{x: -32, y: 416, width: 544, height: 32},
	{x: 160, y: 352, width: 128, height: 64},
	{x: 480, y: 352, width: 64, height: 64},
	{x: 352, y: 288, width: 128, height: 128}],

	[{x: -32, y: 352, width: 128, height: 64},
	{x: -32, y: 416, width: 544, height: 32},
	{x: 352, y: 224, width: 320, height: 192},
	{x: 418, y: 160, width: 160, height: 64}],

	[{x: -32, y: 160, width: 128, height: 64},
	{x: 0, y: 416, width: 512, height: 32},
	{x: 0, y: 224, width: 32, height: 192},
	{x: 480, y: 224, width: 32, height: 192},
	{x: 416, y: 160, width: 128, height: 64}]

];

eventBoxes = [
	[{
		x: 128, y: 352, width: 96, height: 64,
		playerPresent: false, active: true,

		onPlayerEnter: function() {
			walkEnemy(activeScreen.enemies[0], 2);

			this.playerPresent = true;
		}
	}],

	[],

	[],

	[{
		x: 96, y: 160, width: 320, height: 32,
		playerPresent: false, active: true,

		onPlayerEnter: function() {
			jumpEnemy(activeScreen.enemies[0], -4);
			walkEnemy(activeScreen.enemies[0], -2);
			pushEvent(activeScreen.enemies[0], {
				run(enemy) {
					walkEnemy(enemy, 0);
				},

				delay: 750
			});

			pushEvent(activeScreen.enemies[0], {
				run(enemy) {
					setAnimation(enemy.sprite, enemy.animations.attack1);
					enemy.weaponbox = enemy.weaponBoxes.attack1;
					enemy.sprite.vx = -4;
				},

				delay: 1000
			});

			this.playerPresent = true;
			this.active = false;
		}
	}]
];

screenEnemies = [
	/* SCREEN 1 */
	[
		{
			name: enemy_nuttboy,
			position: {x: 396, y: 256}
		}
	],

	/* SCREEN 2 */
	[
		{
			name: enemy_nuttboy,
			position: {x: 396, y: 256},
			spawnFunction(enemy) {
				pushEvent(enemy, {
					run(enemy) {
						walkEnemy(enemy, 2);
					},

					delay: 1000
				});
			}
		}
	],

	/* SCREEN 3 */
	[
		{
			name: enemy_nuttboy,
			position: {x: 380, y: 96},
			spawnFunction(enemy) {
				walkEnemy(enemy, 2);
				jumpEnemy(enemy, -2);
				pushEvent(enemy, {
					run(enemy) {
						walkEnemy(enemy, 0);
						enemy.sprite.scale.x = -1;
					},

					delay: 500
				});

				pushEvent(enemy, {
					run(enemy) {
						walkEnemy(enemy, 2);
					},

					delay: 1000
				});
			}
		}
	],

	/* SCREEN 4 */
	[
		{
			name: enemy_nuttboy,
			position: {x: 444, y: 128},
			spawnFunction(enemy) {
				enemy.sprite.scale.x = -1;
			}
		}
	]
]

screens = [

	{
		tiles: screenTiles[0],
		groundBoxes: screenBoxes[0],
		eventBoxes: eventBoxes[0],
		enemies: screenEnemies[0]
	},

	{
		tiles: screenTiles[1],
		groundBoxes: screenBoxes[1],
		eventBoxes: eventBoxes[1],
		enemies: screenEnemies[1]
	},

	{
		tiles: screenTiles[2],
		groundBoxes: screenBoxes[2],
		eventBoxes: eventBoxes[2],
		enemies: screenEnemies[2]
	},

	{
		tiles: screenTiles[3],
		groundBoxes: screenBoxes[3],
		eventBoxes: eventBoxes[3],
		enemies: screenEnemies[3]
	}

]

let getSpriteSet = function(tileset, screen) {
	tileGroup = new Container();
	
	for (let i = 0; i < screen.length; i++) {
		for (let j = 0; j < screen[i].length; j++) {

			if (screen[i][j] != 0) {
				let newTile = new Sprite(tileset[screen[i][j]]);

				newTile.position.set(j*64, i*64);
				tileGroup.addChild(newTile);
			}
			
		}
	}
	
	return tileGroup;
}

let buildScreenBoxes = function(screenBoxes) {
	for (let i=0; i<screenBoxes.length; i++) {
		let box = screenBoxes[i];

		buildHitbox(box);
	}
}
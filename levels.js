
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
	 [tileEnum.STR_BOT, tileEnum.CRN_OTR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_DRT, tileEnum.STR_LEF, tileEnum.CRN_OTL, tileEnum.STR_BOT, tileEnum.CRN_OTR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_DRT, tileEnum.CRN_IBL, tileEnum.CRN_IBR, tileEnum.FIL_DRT, tileEnum.CRN_IBL, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT],
	 [tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT]]

];

screenBoxes = [

	[{x: -64, y: 416, width: 288, height: 32},
	{x: 224, y: 352, width: 128, height: 96},
	{x: 352, y: 288, width: 160, height: 96}],

	[{x: 0, y: 288, width: 96, height: 128},
	{x: 0, y: 416, width: 512, height: 32},
	{x: 160, y: 352, width: 128, height: 64}]

];

eventBoxes = [
	[{
		x: 128, y: 352, width: 96, height: 64,
		playerPresent: false,
		onPlayerEnter: function() {
			walkEnemy(activeScreen.enemies[0], 2);

			this.playerPresent = true;
		}
	}],

	[]
];

screenEnemies = [
	[{name: enemy_nuttboy, position: {x: 396, y: 256}}],

	[]
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
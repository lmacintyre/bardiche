
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
	 [tileEnum.FIL_DRT, tileEnum.STR_LEF, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_DRT, tileEnum.CRN_IBL, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT],
	 [tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT]
]

];

screenBoxes = [

	[{x: 0, y: 416, width: 224, height: 32},
	{x: 224, y: 352, width: 128, height: 96},
	{x: 352, y: 288, width: 160, height: 96}],

	[{x: 0, y: 288, width: 96, height: 128},
	{x: 0, y: 416, width: 512, height: 32}]

];

eventBoxes = [
	[],

	[{
		x: 96, y: 384, width: 416, height: 32,
		playerPresent: false,
		onPlayerEnter: function() {
			if (bigdummySprite.textures === kingSleepFrames) {
				setAnimation(bigdummySprite, kingWakeFrames, false);
				bigdummySprite.onComplete = function() {
					setAnimation(bigdummySprite, kingIdleFrames);
				}
			}
			this.playerPresent = true;
		}
	}]
];

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
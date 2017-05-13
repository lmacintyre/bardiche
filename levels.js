
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
alert("built")


const screen_0 = [[tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.CRN_OTL, tileEnum.CRN_IBR, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT],
				  [tileEnum.FIL_AIR, tileEnum.CRN_OTL, tileEnum.STR_BOT, tileEnum.CRN_IBR, tileEnum.CRN_ITL, tileEnum.STR_TOP, tileEnum.STR_TOP, tileEnum.STR_TOP],
				  [tileEnum.FIL_AIR, tileEnum.CRN_OBL, tileEnum.STR_TOP, tileEnum.STR_TOP, tileEnum.CRN_OBR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
				  [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.CRN_OTL, tileEnum.STR_BOT, tileEnum.STR_BOT],
				  [tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.STR_BOT, tileEnum.CRN_IBR, tileEnum.FIL_DRT, tileEnum.FIL_DRT],
				  [tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT],
				  [tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT],
				  [tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT, tileEnum.FIL_DRT]];

let getSpriteSet = function(tileset, screen) {

	tileGroup = new Container();
	for (let i = 0; i < tileset.length; i++) {
		for (let j = 0; j < tileset[i].length; j++) {
			if (tileSet[i][j] != 0) {
				let newTile = new Sprite(tileTextures[tileset[i][j]]);;


				newTile.position.set(j*64, i*64);
				tileGroup.addChild(newTile);
			}
		}

		return tileGroup;
}
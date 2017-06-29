
const tileEnum = {
	FIL_AIR: 0,

	STR_BOT: "bottom",
	STR_TOP: "top",
	STR_LEF: "left",
	STR_RIG: "right",

	CRN_ITR: "inside-tr",
	CRN_ITL: "inside-tl",
	CRN_IBR: "inside-br",
	CRN_IBL: "inside-bl",
	
	CRN_OTR: "outside-tr",
	CRN_OTL: "outside-tl",
	CRN_OBR: "outside-br",
	CRN_OBL: "outside-bl",

	FIL_DRT: "fill"
};

level_forest = {
	'platformGroups': [
		{
			'x': 0,
			'y': 0,
			'w': 256,
			'h': 256,

			'platforms': [
				{
					'type': 'platform',
					'p1': {'x': 994, 'y': 162},
					'p2': {'x': 1044, 'y': 162},

					'tilesSrc': [],

					'scenerySrc': [
						{'x': 768, 'y': 0, 'path': 'res/goddess.png'},
						{'x': 768, 'y': 0, 'path': 'res/marble.png'}
					],

					'backgroundSrc': []
				}, {
					'type': 'platform',
					'p1': {'x': 1056, 'y': 96},
					'p2': {'x': 1200, 'y': 96},

					'tilesSrc': [],

					'scenerySrc': [
						{'x': 768, 'y': -512, 'path':'res/climbtree.png'}
					],

					'backgroundSrc': [
						{'x': 768, 'y': -512, 'path':'res/climbtree-bg.png'}
					]
				}, {
					'type': 'platform',
					'p1': {'x': 192, 'y': 64},
					'p2': {'x': 448, 'y': 64},

					'tilesSrc': [
						{'x': 128, 'y': 384, id:tileEnum.STR_RIG},
						{'x': 256, 'y': 384, id:tileEnum.FIL_DRT},
						{'x': 384, 'y': 384, id:tileEnum.STR_LEF},
						{'x': 128, 'y': 256, id:tileEnum.STR_RIG},
						{'x': 256, 'y': 256, id:tileEnum.FIL_DRT},
						{'x': 384, 'y': 256, id:tileEnum.STR_LEF},
						{'x': 128, 'y': 128, id:tileEnum.STR_RIG},
						{'x': 256, 'y': 128, id:tileEnum.FIL_DRT},
						{'x': 384, 'y': 128, id:tileEnum.STR_LEF},
						{'x': 128, 'y': 0, id:tileEnum.CRN_OTL},
						{'x': 256, 'y': 0, id:tileEnum.STR_BOT},
						{'x': 384, 'y': 0, id:tileEnum.CRN_OTR}
					],

					'scenerySrc': [],
					'backgroundSrc': []
				}, {
					'type': 'platform',
					'p1': {'x': 1216, 'y': 320},
					'p2': {'x': 1600, 'y': 320},

					'tilesSrc': [
						{'x': 1152, 'y': 256, id:tileEnum.CRN_OTL},
						{'x': 1280, 'y': 256, id:tileEnum.STR_BOT},
						{'x': 1408, 'y': 256, id:tileEnum.STR_BOT},
						{'x': 1536, 'y': 256, id:tileEnum.CRN_OTR},
						{'x': 1152, 'y': 384, id:tileEnum.STR_RIG},
						{'x': 1280, 'y': 384, id:tileEnum.FIL_DRT},
						{'x': 1408, 'y': 384, id:tileEnum.FIL_DRT},
						{'x': 1536, 'y': 384, id:tileEnum.STR_LEF},
					],

					'scenerySrc': [],
					'backgroundSrc': []
				}, {
					'type': 'block',
					'hitbox': {
						'x': 0, 'y': 448, 'width': 576, 'height': 64
					},

					'tilesSrc': [
						{'x': 0, 'y': 384, id:tileEnum.STR_BOT},
						{'x': 128, 'y': 384, id:tileEnum.STR_BOT},
						{'x': 256, 'y': 384, id:tileEnum.STR_BOT},
						{'x': 384, 'y': 384, id:tileEnum.STR_BOT},
						{'x': 0, 'y': 512, id:tileEnum.FIL_DRT},
						{'x': 128, 'y': 512, id:tileEnum.FIL_DRT},
						{'x': 256, 'y': 512, id:tileEnum.FIL_DRT},
						{'x': 384, 'y': 512, id:tileEnum.FIL_DRT}
					],

					'scenerySrc': [],
					'backgroundSrc': []
				}, {
					'type': 'block',
					'hitbox': {
						'x': -512, 'y': 448, 'width': 512, 'height': 64
					},

					'tilesSrc': [
						{'x': -512, 'y': 384, id:tileEnum.STR_BOT},
						{'x': -384, 'y': 384, id:tileEnum.STR_BOT},
						{'x': -256, 'y': 384, id:tileEnum.STR_BOT},
						{'x': -128, 'y': 384, id:tileEnum.STR_BOT},
						{'x': -512, 'y': 512, id:tileEnum.FIL_DRT},
						{'x': -384, 'y': 512, id:tileEnum.FIL_DRT},
						{'x': -256, 'y': 512, id:tileEnum.FIL_DRT},
						{'x': -128, 'y': 512, id:tileEnum.FIL_DRT}
					],

					'scenerySrc': [],
					'backgroundSrc': []
				}, {
					'type': 'block',
					'hitbox': {
						'x': 576, 'y': 320, 'width': 256, 'height': 192
					},

					'tilesSrc': [
						{'x': 512, 'y': 256, id:tileEnum.CRN_OTL},
						{'x': 512, 'y': 384, id:tileEnum.CRN_IBR},
						{'x': 512, 'y': 512, id:tileEnum.FIL_DRT},
						{'x': 640, 'y': 256, id:tileEnum.STR_BOT},
						{'x': 640, 'y': 384, id:tileEnum.FIL_DRT},
						{'x': 640, 'y': 512, id:tileEnum.FIL_DRT},
						{'x': 768, 'y': 256, id:tileEnum.CRN_OTR},
						{'x': 768, 'y': 384, id:tileEnum.CRN_IBL},
						{'x': 768, 'y': 512, id:tileEnum.FIL_DRT}
					],

					'scenerySrc': [],
					'backgroundSrc': []
				}, {
					'type': 'block',
					'hitbox': {
						'x': 832, 'y': 448, 'width': 512, 'height': 64
					},

					'tilesSrc': [
						{'x': 832, 'y': 384, id:tileEnum.STR_BOT},
						{'x': 960, 'y': 384, id:tileEnum.STR_BOT},
						{'x': 1088, 'y': 384, id:tileEnum.STR_BOT},
						{'x': 1216, 'y': 384, id:tileEnum.STR_BOT},
						{'x': 832, 'y': 512, id:tileEnum.FIL_DRT},
						{'x': 960, 'y': 512, id:tileEnum.FIL_DRT},
						{'x': 1088, 'y': 512, id:tileEnum.FIL_DRT},
						{'x': 1216, 'y': 512, id:tileEnum.FIL_DRT}
					],

					'scenerySrc': [],
					'backgroundSrc': []
				}
			]
		}
	],

	'scenery': [
		{'x': -512, 'y': 0, 'path':'res/bigtree.png'}
	],

	'background': [
		{'path': 'res/mountainscroll-1.png', 'scrollRate': 0.1},
		{'path': 'res/mountainscroll-2.png', 'scrollRate': 0.2}
	],

	'enemies': [
		{'base': enemy_skeleton, 'x': 0, 'y': 256},
		{'base': enemy_skeleton, 'x': 32, 'y': 256},
		{'base': enemy_skeleton, 'x': 64, 'y': 256}
	]
}

let setPlatformTiles = function(tileset, platform) {
	let backgroundGroup = new Container();
	let tileGroup = new Container();

	platform.backgroundSrc.forEach(function(scenery) {
		let newSprite = new Sprite(resources[scenery.path].texture);

		newSprite.position.set(scenery.x, scenery.y);
		newSprite.scale.set(2, 2);
		backgroundGroup.addChild(newSprite);
	});

	platform.scenerySrc.forEach(function(scenery) {
		let newSprite = new Sprite(resources[scenery.path].texture);

		newSprite.position.set(scenery.x, scenery.y);
		newSprite.scale.set(2, 2);
		tileGroup.addChild(newSprite);
	});

	platform.tilesSrc.forEach(function(tile) {
		let newTile = new Sprite(tileset[tile.id]);

		newTile.position.set(tile.x, tile.y);
		newTile.scale.set(2, 2);
		tileGroup.addChild(newTile);
	});

	platform.tileGroup = tileGroup;
	platform.backgroundGroup = backgroundGroup;
}
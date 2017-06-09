
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

screenTiles = [

	[[tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR]],

	[[tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR]],

	[[tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR]],

	[[tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR],
	 [tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR, tileEnum.FIL_AIR]]

];

screenDecorations = [

	[{x:0, y:0, path: 'res/bigtree.png'}],

	[],

	[{x:0, y:0, path: 'res/marble.png'},
	 {x:0, y:0, path: 'res/goddess.png'}],

	[]

]

screenPlatforms = [

	/* SCREEN 1 */
	[{
		type: 'platform',

		tilesSrc: [
			{x:0, y:3, id:tileEnum.STR_BOT},
			{x:1, y:3, id:tileEnum.STR_BOT},
			{x:2, y:3, id:tileEnum.STR_BOT},
			{x:3, y:3, id:tileEnum.STR_BOT}
		],

		p1: {x: 0, y: 456},
		p2: {x: 512, y: 456}
	}],

	/* SCREEN 2 */
	[{
		type: 'platform',

		tilesSrc: [
			{x:0, y:3, id:tileEnum.STR_RIG},
			{x:1, y:3, id:tileEnum.FIL_DRT},
			{x:2, y:3, id:tileEnum.STR_LEF},
			{x:0, y:2, id:tileEnum.STR_RIG},
			{x:1, y:2, id:tileEnum.FIL_DRT},
			{x:2, y:2, id:tileEnum.STR_LEF},
			{x:0, y:1, id:tileEnum.CRN_OTL},
			{x:1, y:1, id:tileEnum.STR_BOT},
			{x:2, y:1, id:tileEnum.CRN_OTR}
		],

		p1: {x: 64, y: 196},
		p2: {x: 320, y: 196}
	},

	{
		type: 'platform',

		tilesSrc: [
			{x:3, y:2, id:tileEnum.CRN_OTL},
			{x:3, y:3, id:tileEnum.STR_RIG}
		],

		p1: {x: 456, y: 320},
		p2: {x: 512, y: 320}
	},

	{
		type: 'platform',

		tilesSrc: [
			{x:0, y:3, id:tileEnum.STR_BOT},
			{x:1, y:3, id:tileEnum.STR_BOT},
			{x:2, y:3, id:tileEnum.STR_BOT},
			{x:3, y:3, id:tileEnum.STR_BOT}
		],

		p1: {x: 0, y: 456},
		p2: {x: 512, y: 456}
	}],

	/* SCREEN 3 */
	[{
		type: 'platform',

		tilesSrc: [
			{x:3, y:2, id:tileEnum.CRN_OTL},
			{x:3, y:3, id:tileEnum.STR_RIG}
		],

		p1: {x: 456, y: 320},
		p2: {x: 512, y: 320}
	},

	{
		type: 'platform',

		tilesSrc: [
			{x:0, y:2, id:tileEnum.CRN_OTR},
			{x:0, y:3, id:tileEnum.STR_LEF}
		],

		p1: {x: 0, y: 320},
		p2: {x: 64, y: 320}
	},

	{
		type: 'platform',

		tilesSrc: [
			{x:0, y:3, id:tileEnum.STR_BOT},
			{x:1, y:3, id:tileEnum.STR_BOT},
			{x:2, y:3, id:tileEnum.STR_BOT},
			{x:3, y:3, id:tileEnum.STR_BOT}
		],

		p1: {x: 0, y: 456},
		p2: {x: 512, y: 456}
	},

	{
		type: 'platform',

		tilesSrc: [],

		p1: {x: 226, y: 162},
		p2: {x: 272, y: 162}
	},

	{
		type: 'platform',

		tilesSrc: [],

		p1: {x: 282, y: 232},
		p2: {x: 308, y: 232}
	}],

	/* SCREEN 4 */
	[{
		type: 'platform',

		tilesSrc: [
			{x:0, y:2, id:tileEnum.STR_BOT},
			{x:1, y:2, id:tileEnum.STR_BOT},
			{x:2, y:2, id:tileEnum.CRN_OTR},
			{x:0, y:3, id:tileEnum.FIL_DRT},
			{x:1, y:3, id:tileEnum.FIL_DRT},
			{x:2, y:3, id:tileEnum.STR_LEF}
		],

		p1: {x: 0, y: 320},
		p2: {x: 320, y: 320}

	},

	{
		type: 'platform',

		tilesSrc: [
			{x:0, y:3, id:tileEnum.STR_BOT},
			{x:1, y:3, id:tileEnum.STR_BOT},
			{x:2, y:3, id:tileEnum.STR_BOT},
			{x:3, y:3, id:tileEnum.STR_BOT}
		],

		p1: {x: 0, y: 456},
		p2: {x: 512, y: 456}
	}]

]

screenBoxes = [

	[],

	[],

	[],

	[]

];

eventBoxes = [
	[],

	[],

	[],

	[]
];

screenHazards = [
	[],

	[],

	[],

	[]
]

screenEnemies = [
	/* SCREEN 1 */
	[],

	/* SCREEN 2 */
	[],

	/* SCREEN 3 */
	[],

	/* SCREEN 4 */
	[]
]

screens = [

	{
		tiles: screenTiles[0],
		groundBoxes: screenBoxes[0],
		eventBoxes: eventBoxes[0],
		hazards: screenHazards[0],
		enemies: screenEnemies[0],
		platforms: screenPlatforms[0]
	},

	{
		tiles: screenTiles[1],
		groundBoxes: screenBoxes[1],
		eventBoxes: eventBoxes[1],
		hazards: screenHazards[1],
		enemies: screenEnemies[1],
		platforms: screenPlatforms[1]
	},

	{
		tiles: screenTiles[2],
		groundBoxes: screenBoxes[2],
		eventBoxes: eventBoxes[2],
		hazards: screenHazards[2],
		enemies: screenEnemies[2],
		platforms: screenPlatforms[2]
	},

	{
		tiles: screenTiles[3],
		groundBoxes: screenBoxes[3],
		eventBoxes: eventBoxes[3],
		hazards: screenHazards[3],
		enemies: screenEnemies[3],
		platforms: screenPlatforms[3]
	}

]

let getSpriteSet = function(tileset, screen) {
	tileGroup = new Container();
	
	for (let i = 0; i < screen.length; i++) {
		for (let j = 0; j < screen[i].length; j++) {

			if (screen[i][j] != 0) {
				let newTile = new Sprite(tileset[screen[i][j]]);

				newTile.position.set(j*128, i*128);
				newTile.scale.set(2, 2);
				tileGroup.addChild(newTile);
			}
			
		}
	}

	return tileGroup;
}

let setPlatformTiles = function(tileset, platform) {
	let tileGroup = new Container();

	platform.tilesSrc.forEach(function(tile) {
		let newTile = new Sprite(tileset[tile.id]);

		newTile.position.set(tile.x * 128, tile.y * 128);
		newTile.scale.set(2, 2);
		tileGroup.addChild(newTile);
	});

	platform.tileGroup = tileGroup;
}

let buildScreenBoxes = function(screenBoxes) {
	for (let i=0; i<screenBoxes.length; i++) {
		let box = screenBoxes[i];

		buildHitbox(box);
	}
}
var Main = function(game){

};

Main.prototype = {

	create: function() {

		var me = this;

		me.game.stage.backgroundColor = "34495f";

		//Declare assets that will be used as tiles
		me.tileLetters = [
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			'w', 'x', 'y', 'z'
		];

		//What colours will be used for our tiles?
		me.tileColors = [
			'#ffffff'
		];

		//Set the width and height for the tiles
		me.tileWidth = 150;
		me.tileHeight = 150;

		//This will hold all of the tile sprites
		me.tiles = me.game.add.group();

		//Initialise tile grid, this array will hold the positions of the tiles
		//Create whatever shape you'd like
		me.tileGrid = [
			[null, null, null, null, null, null],
			[null, null, null, null, null, null],
			[null, null, null, null, null, null],
			[null, null, null, null, null, null],
			[null, null, null, null, null, null],
			[null, null, null, null, null, null]
		];

		//Keep a reference to the total grid width and height
		me.boardWidth = me.tileGrid[0].length * me.tileWidth;
		me.boardHeight = me.tileGrid.length  * me.tileHeight;

		//We want to keep a buffer on the left and top so that the grid
		//can be centered
		me.leftBuffer = (me.game.width - me.boardWidth) / 2;
		me.topBuffer = (me.game.height - me.boardHeight) / 2;

		//Create a random data generator to use later
		var seed = Date.now();
		me.random = new Phaser.RandomDataGenerator([seed]);

		//Set up some initial tiles and the score label
		me.initTiles();
		
	},

	update: function() {

	},

	initTiles: function(){

		var me = this;

		//Loop through each column in the grid
		for(var i = 0; i < me.tileGrid.length; i++){

			//Loop through each position in a specific column, starting from the top
			for(var j = 0; j < me.tileGrid.length; j++){

				//Add the tile to the game at this grid position
				var tile = me.addTile(i, j);

				//Keep a track of the tiles position in our tileGrid
				me.tileGrid[i][j] = tile;

			}
		}

	},

	addTile: function(x, y){

		var me = this;

		//Choose a random tile to add
		var tileLetter = me.tileLetters[me.random.integerInRange(0, me.tileLetters.length - 1)];
		var tileColor = me.tileColors[me.random.integerInRange(0, me.tileColors.length - 1)];
		var tileToAdd = me.createTile(tileLetter, tileColor);	

		//Add the tile at the correct x position, but add it to the top of the game (so we can slide it in)
		var tile = me.tiles.create(me.leftBuffer + (x * me.tileWidth) + me.tileWidth / 2, 0, tileToAdd);

		//Animate the tile into the correct vertical position
		me.game.add.tween(tile).to({y:me.topBuffer + (y*me.tileHeight+(me.tileHeight/2))}, 500, Phaser.Easing.Linear.In, true)

		//Set the tiles anchor point to the center
		tile.anchor.setTo(0.5, 0.5);

		//Keep track of the type of tile that was added
		tile.tileLetter = tileLetter;

		return tile;

	},

	createTile: function(letter, color){

		var me = this;

		var tile = me.game.add.bitmapData(me.tileWidth, me.tileHeight);

		tile.ctx.rect(5, 5, me.tileWidth - 5, me.tileHeight - 5);
		tile.ctx.fillStyle = color;
		tile.ctx.fill();

		tile.ctx.font = '30px Arial';
		tile.ctx.textAlign = 'center';
		tile.ctx.textBaseline = 'middle';
		tile.ctx.fillStyle = '#fff';
		if(color == '#ffffff'){
			tile.ctx.fillStyle = '#000000';
		}
		tile.ctx.fillText(letter, me.tileWidth / 2, me.tileHeight / 2);

		return tile;

	}

};
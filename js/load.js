var loadState = {

	preload: function(){
		debug ? d('Loading assets...') : null;
		game.load.tilemap('level_map', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tileset_image', 'assets/tileset.png');
        game.load.image('ship_sprite', 'assets/ship.png');
        game.load.image('space', 'assets/space.png');
	},

	create: function(){
		game.state.start('level');
	}
};
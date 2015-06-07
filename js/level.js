var levelState = {

	controls : null,
	ship : null ,
	map: null ,
	walls : null,

	create: function(){

		debug ? d('Creating level...') : null;
		this.createWorld();
		this.createPlayerShip();
		this.createControls();
		game.camera.follow(this.ship.sprite);
		debug ? d('Ready to rock biatch...') : null;
	},

	update: function(){
		// ship movement
		// rotation
		if (this.controls.turn_left.isDown) {
            this.ship.turn(-1);
        }
        else if (this.controls.turn_right.isDown) {
            this.ship.turn(1);
        }
        else {
            this.ship.turn(0);
        }

        // thrust
        if (this.controls.forward.isDown) {
            this.ship.accelerate(1);
        }
        else if (this.controls.reverse.isDown) {
            this.ship.accelerate(-1);
        }

        this.ship.update();
	},

	createWorld : function(){
		//add background
		game.add.image(0,0,'space');

		// load level map
        this.map = game.add.tilemap('level_map');
        this.map.addTilesetImage('tileset', 'tileset_image');

        // walls created from .json's 'walls' layer
        this.walls = this.map.createLayer('walls');
        this.walls.resizeWorld();

        // set collisions on the blocking(walls) layer
        this.map.setCollisionBetween(1, 1, true, 'walls');

        // convert the blocking tiles into bodies
        game.physics.p2.convertTilemap(this.map, this.walls);

        debug ? this.walls.debug = true : null ;
        debug ? d('Map loaded..') : null;
	},

	createPlayerShip: function(){

		//load the ship sprite and enable physics
		var sprite = game.add.sprite(80, 80, 'ship_sprite');
        game.physics.p2.enable(sprite);

        //create the ship object
		this.ship = new Ship(sprite);
	},

	createControls: function(){
		// create controls
        this.controls = {
            forward: game.input.keyboard.addKey(Phaser.Keyboard.W),
            reverse: game.input.keyboard.addKey(Phaser.Keyboard.S),
            turn_left: game.input.keyboard.addKey(Phaser.Keyboard.A),
            turn_right: game.input.keyboard.addKey(Phaser.Keyboard.D),
            strafe_left: game.input.keyboard.addKey(Phaser.Keyboard.Q),
            strafe_right: game.input.keyboard.addKey(Phaser.Keyboard.E),
        };
	}
};
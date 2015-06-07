var bootState = {	
	preload: function(){
		debug ? d('Booting...') : null ;
	},
	create: function(){

		//start the physics system
		game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.setImpactEvents(true);

        game.state.start('load');
	}
};
// debugging on/off
debug = false;

// create the game
game = new Phaser.Game(800,800,Phaser.AUTO,'game_window');
debug ? d('Created the game') : null ;

// add the game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('level',levelState);

// start booting
game.state.start('boot');
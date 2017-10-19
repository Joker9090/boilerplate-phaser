
export default class Preloader extends Phaser.State {

  preload(){
    this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.

    //this.load.image('titlepage', 'assets/img/water_texture.jpg');
		//this.load.image('mazetiles', 'assets/img/tileset.png');
		//this.load.atlas('playButton', 'assets/img/x.png', 'assets/img/button_texture_atlas.json');

		//this.load.audio('titleMusic', ['assets/audio/title.mp3']);
		//this.load.bitmapFont('caslon', 'assets/img/desyrel-pink.png', 'asstes/img/desyrel-pink.xml');
  }

  create(){
      this.preloadBar.cropEnabled = false;
  }

  update(){
    this.ready = true;
    this.game.state.start('Main');
  }

}

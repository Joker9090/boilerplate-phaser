/**
 * Setup the pre-game boot sequence.
 */
export default class Boot extends Phaser.State {
  /**
   * Preload any assets needed for the preload state.
   */
  preload() {

  }

  /**
   * Setup anything that is needed before the preload state begins.
   */
  create() {
    // Scale the game to fill the entire page.
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    // Don't pause the game on blur.
    //this.game.stage.disableVisibilityChange = true;

    // Disable clearing the canvas on each tick (usually not needed).
    this.game.clearBeforeRender = false;

    // Disable right click.
    this.game.canvas.oncontextmenu = e => e.preventDefault();

    // Move on to the preload state.

    this.game.state.start('Preload');
  }
  scaleStage() {

    this.scale.hasResized.add(this.gameResized, this);
    console.log(this.game.device.desktop);
    /*
    if (this.game.device.desktop){
       this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    }else{
      this.scale.scaleMode = Phaser.ScaleManager.NO_BORDER;
      this.scale.forceOrientation(true, false);
      this.scale.hasResized.add(this.gameResized, this);
      this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
      this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
      this.scale.setScreenSize(true);
    }

      this.scale.minWidth = BasicGame.gameWidth/2;
      this.scale.minHeight = BasicGame.gameHeight/2;
      this.scale.maxWidth = BasicGame.gameWidth;
      this.scale.maxHeight = BasicGame.gameHeight;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
      this.scale.setScreenSize(true);

		if(this.scale.scaleMode==Phaser.ScaleManager.NO_BORDER){
			BasicGame.viewX = (this.scale.width/2 - window.innerWidth/2)*this.scale.scaleFactor.x;
			BasicGame.viewY = (this.scale.height/2 - window.innerHeight/2 - 1)*this.scale.scaleFactor.y;
			BasicGame.viewWidth = BasicGame.gameWidth-BasicGame.viewX;
			BasicGame.viewHeight = BasicGame.gameHeight-BasicGame.viewY;
		}else{
			BasicGame.viewX = 0;
			BasicGame.viewY = 0;
			BasicGame.viewWidth = BasicGame.gameWidth;
			BasicGame.viewHeight = BasicGame.gameHeight;
		}

		// document.getElementById("game").style.width = window.innerWidth+"px";
		// document.getElementById("game").style.height = window.innerHeight-1+"px";//The css for body includes 1px top margin, I believe this is the cause for this -1
		document.getElementById("game").style.overflow = "hidden";
    */
  }
  gameResized(width, height) {

    //  This could be handy if you need to do any extra processing if the game resizes.
    //  A resize could happen if for example swapping orientation on a device.

    //this.scale.setGameSize(window.innerWidth * window.devicePixelRatio, indow.innerHeight * window.devicePixelRatio);
    console.log(12312);

  }

  enterIncorrectOrientation() {

    BasicGame.orientated = false;

    document.getElementById('orientation').style.display = 'block';

  }

  leaveIncorrectOrientatio() {

    BasicGame.orientated = true;

    document.getElementById('orientation').style.display = 'none';
		this.scaleStage();
  }
}

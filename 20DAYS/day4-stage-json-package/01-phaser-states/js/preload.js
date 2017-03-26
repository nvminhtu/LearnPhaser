var preload = function(game) {}

preload.prototype = {
  preload: function() {
    var loadingBar = this.add.sprite(160,240,"loading");
         loadingBar.anchor.setTo(0.5,0.5);
         this.load.setPreloadSprite(loadingBar);
         //Phaser sẽ cho phép load 1 sprite như 1 loading bar
    // preload các file assets của chúng ta
        this.game.load.spritesheet("numbers","assets/numbers.png",100,100);
        this.game.load.image("gametitle","assets/gametitle.png");
        this.game.load.image("play","assets/play.png");
        this.game.load.image("higher","assets/higher.png");
        this.game.load.image("lower","assets/lower.png");
        this.game.load.image("gameover","assets/gameover.png");
  },
  create: function() {
    this.game.state.start("GameTitle");
  }
}

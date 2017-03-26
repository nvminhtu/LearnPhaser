var boot = function(game)  {
    console.log("%cStarting my awesome game", "color:white; background:red");
}

// khai báo kiểu prototype

boot.prototype = {
  preload: function() {
    this.game.load.image("loading","assets/loading.png");
  },
  create: function() {
    // khai báo các thuộc tính chung cần khởi tạo
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
  //  this.scale.setScreenSize();

    this.game.state.start("Preload");
  }
}

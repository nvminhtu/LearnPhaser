// Màn hình chờ của game - trước khi play
var gameTitle = function(game){}

gameTitle.prototype = {
  create: function() {
   //  var gameTitle = this.game.add.sprite(160,160,"gametitle");
  	// gameTitle.anchor.setTo(0.5,0.5);

   //  var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
   //  playButton.anchor.setTo(0.5,0.5);
    // tạo ra 1 button play, và cho click chay đến hàm PlayTheGame
  },
  playTheGame: function() {
    this.game.state.start("TheGame");
  }
}

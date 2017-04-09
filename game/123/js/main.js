(function(){
  var game = new Phaser.Game(320,480,Phaser.CANVAS,"game");
  // khai báo các state
  game.state.add("Boot",boot); // argument 1 là tên của state, argument 2 là tên function mà cần gọi tới state đó
  game.state.add("Preload",preload);
  game.state.add("GameTitle",gameTitle);
  game.state.add("TheGame",theGame);
  game.state.add("GameOver",gameOver);
  game.state.start("Boot"); // Để khởi tạo state dùng lệnh này
})();
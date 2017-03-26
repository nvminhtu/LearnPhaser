
// #màn hình chính của game chúng ta sẽ chơi

var theGame = function(game){
  //khởi tạo các giá trị
  spriteNumber = null;
  number = 0;
  workingButtons = true;
  higher = true;
  score = 0;
}

theGame.prototype = {
  create: function() {
    number = Math.floor(Math.random()*10); // khởi tạo 1 con số ngẫu nhiên
    // thiết lập vị trí hiển thị con số ra màn hình
    // number chính là 1 spritesheet ta đã khai báo: this.game.load.spritesheet("numbers","assets/numbers.png",100,100);
    // kích thước mỗi sprite là 100x100

    spriteNumber = this.game.add.sprite(160,240,"numbers");
		spriteNumber.anchor.setTo(0.5,0.5);

    // cho chạy các frame của dãy số (lấy ra từ 1 hình)
    spriteNumber.frame = number;
    // hiện tại frame ban đầu là sprite thứ 0
    // nhưng number phía trên ta đã cho chạy random trong khoảng 0->10
    // tạo ra các button để chơi - higher và lower

    var higherButton = this.game.add.button(160,100,"higher",this.clickedHigher,this);
		higherButton.anchor.setTo(0.5,0.5);
		var lowerButton = this.game.add.button(160,380,"lower",this.clickedLower,this);
		lowerButton.anchor.setTo(0.5,0.5);

  },
  enterNumber: function(){
    workingButtons=true;
    if((higher && spriteNumber.frame<number)||(!higher && spriteNumber.frame>number)){
      this.game.state.start("GameOver",true,false,score);
      // vượt quá số giới hạn cho phép ta cho chạy thẳng vào state: Game Over
    }
    else{
      score++; //tăng điểm cho thím chơi
      number = spriteNumber.frame;
    }
  },
  tweenNumber: function(higher) { // hàm hoán đổi - chuyển động cho dãy số
    if(workingButtons) {
      workingButtons = false;
      var exitTween = this.game.add.tween(spriteNumber);
          exitTween.to({x:420}, 500); //chạy ra khỏi screen width của màn hình
          exitTween.onComplete.add(this.exitNumber, this);
          exitTween.start();
    }
  },
  exitNumber: function(){
    spriteNumber.x = -180;
       spriteNumber.frame = Math.floor(Math.random()*10);
       var enterTween = this.game.add.tween(spriteNumber);
       enterTween.to({x:160},500); // chạy tới khoảng giữa màn hình
       enterTween.onComplete.add(this.enterNumber,this);
       enterTween.start();
  },
  clickedHigher: function() {
    higher = true;
    this.tweenNumber(true); // truyền tham số cho hàm tạo ra số = true
  },
  clickedLower: function() {
    higher = false;
    this.tweenNumber(false); // truyền tham số cho hàm tạo ra số = false
  }
}

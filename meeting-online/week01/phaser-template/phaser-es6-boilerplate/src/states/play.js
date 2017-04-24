class Play extends Phaser.State {

  //
  init() {
    // khởi tạo các giá trị dùng chung
    this.greeting = 'hello'; // test thử console
    this.sprite = null;
    this.sprites = null;
  }

  create() {
    // TODO
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.stage.backgroundColor = '#0072bc';
    this.sprite = this.game.add.sprite(200,150,'pinwheel');

    console.log(this.sprite); // xuất object sprite mói khai báo

    this.sprites = this.game.add.physicsGroup(Phaser.Physics.ARCADE);

    var delay = 0;

    for (var i = 0; i < 40; i++){
      this.sprite = this.game.add.sprite(-100 + (this.game.world.randomX), 600, 'ball');

      this.sprite.scale.set(this.game.rnd.realInRange(0.1, 0.6));

      var speed = this.game.rnd.between(4000, 6000);

      this.game.add.tween(this.sprite).to({y: -256}, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

      delay += 200;
    }
    this.sprites.setAll('body.collideWorldBounds', true);
    this.sprites.setAll('body.bounce.x', 1);
    this.sprites.setAll('body.bounce.y', 1);
  }

  update() {
    // TODO
    //console.log(this.greeting); //(update when calling and continuosly )
  }
}

export default Play;

console.log(Phaser.State);

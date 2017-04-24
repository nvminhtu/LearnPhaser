class Play extends Phaser.State {

  create() {
    // TODO
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.stage.backgroundColor = '#0072bc';
    this.sprite = this.game.add.sprite(200,150,'pinwheel');
    var sprites = this.game.add.physicsGroup(Phaser.Physics.ARCADE);

    var delay = 0;

    for (var i = 0; i < 40; i++){
      var sprite = this.game.add.sprite(-100 + (this.game.world.randomX), 600, 'ball');

      sprite.scale.set(this.game.rnd.realInRange(0.1, 0.6));

      var speed = this.game.rnd.between(4000, 6000);

      this.game.add.tween(sprite).to({y: -256}, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

      delay += 200;
    }
    sprites.setAll('body.collideWorldBounds', true);
    sprites.setAll('body.bounce.x', 1);
    sprites.setAll('body.bounce.y', 1);
  }

  update() {
    // TODO
  }
}

export default Play;

var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser-demo',{
  preload: preload,
  create: create,
  update: update,
  render: render
});

function preload() {
    game.load.image('fish','fish.png');
}

var sprite;

function create() {
  // add Physic ARCADE
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = '#0072bc';

  sprite = game.add.sprite(400,300,'fish');
  sprite.anchor.setTo(0.5);

  // Set Arcade Physics cho Sprite
  game.physics.enable(sprite, Phaser.Physics.ARCADE);

  // cho phép sprite chạy
  //sprite.body.allowRotation = false;
}

function update() {
  sprite.rotation = game.physics.arcade.moveToPointer(sprite, 60, game.input.activePointer, 1500);
}

function render() {
  // using for debugging
  game.debug.spriteInfo(sprite, 32, 32);
}

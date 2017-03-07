var game = new Phaser.Game(800,600,Phaser.AUTO,'phaser-game', { preload: preload, create: create });

function preload() {
  game.load.atlas('test', '../assets/sprites/atlas_hash_trim.png', '../assets/sprites/atlas_json_array_trim.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);


    //  These are just a few images to use in our underwater scene.
    game.load.image('undersea', '../assets/pics/undersea.jpg');
    game.load.image('coral', '../assets/pics/seabed.png');

}

var octopus;

function create() {
  game.add.sprite(0,0, 'undersea');
  game.add.sprite(0,0, 'test');
  game.add.sprite(0,466, 'coral');
}

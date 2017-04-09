import Boot from './states/boot';
import Preload from './states/preload';
import Play from './states/play';

// Tìm hiểu về import trong ES6
// Import statement => được sử dụng để import functions, objects - mà được exprot ở 1 module khác hoặc 1 file script khác
// http://exploringjs.com/es6/ch_modules.html#sec_importing-exporting-details 

// Khai báo Class
class Game extends Phaser.Game {
  constructor() {
    super(800, 600, Phaser.AUTO, 'game');

    this.state.add('boot', Boot);
    this.state.add('preload', Preload);
    this.state.add('play', Play);

    this.state.start('boot');
  }
}

new Game();

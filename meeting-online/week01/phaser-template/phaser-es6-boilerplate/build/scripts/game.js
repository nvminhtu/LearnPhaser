(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _boot = require('./states/boot');

var _boot2 = _interopRequireDefault(_boot);

var _preload = require('./states/preload');

var _preload2 = _interopRequireDefault(_preload);

var _play = require('./states/play');

var _play2 = _interopRequireDefault(_play);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Tìm hiểu về import trong ES6
// Import statement => được sử dụng để import functions, objects - mà được exprot ở 1 module khác hoặc 1 file script khác
// http://exploringjs.com/es6/ch_modules.html#sec_importing-exporting-details

// Khai báo Class
var Game = function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game() {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 800, 600, Phaser.AUTO, 'game'));

    _this.state.add('boot', _boot2.default);
    _this.state.add('preload', _preload2.default);
    _this.state.add('play', _play2.default);

    _this.state.start('boot');
    return _this;
  }

  return Game;
}(Phaser.Game);

new Game();

},{"./states/boot":2,"./states/play":3,"./states/preload":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = function (_Phaser$State) {
  _inherits(Boot, _Phaser$State);

  function Boot() {
    _classCallCheck(this, Boot);

    return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).apply(this, arguments));
  }

  _createClass(Boot, [{
    key: 'create',
    value: function create() {
      this.game.stage.backgroundColor = '#000';
      this.game.state.start('preload');
    }
  }]);

  return Boot;
}(Phaser.State);

// export statement được sử dụng để export functions, objects từ 1 module
// ví dụ ở dưới là mặc định của export
// tham khảo thêm ở: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export


exports.default = Boot;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Play = function (_Phaser$State) {
  _inherits(Play, _Phaser$State);

  function Play() {
    _classCallCheck(this, Play);

    return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).apply(this, arguments));
  }

  _createClass(Play, [{
    key: 'create',
    value: function create() {
      // TODO
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.stage.backgroundColor = '#0072bc';
      this.sprite = this.game.add.sprite(200, 150, 'pinwheel');
      var sprites = this.game.add.physicsGroup(Phaser.Physics.ARCADE);

      var delay = 0;

      for (var i = 0; i < 40; i++) {
        var sprite = this.game.add.sprite(-100 + this.game.world.randomX, 600, 'ball');

        sprite.scale.set(this.game.rnd.realInRange(0.1, 0.6));

        var speed = this.game.rnd.between(4000, 6000);

        this.game.add.tween(sprite).to({ y: -256 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        delay += 200;
      }
      sprites.setAll('body.collideWorldBounds', true);
      sprites.setAll('body.bounce.x', 1);
      sprites.setAll('body.bounce.y', 1);
    }
  }, {
    key: 'update',
    value: function update() {
      // TODO
    }
  }]);

  return Play;
}(Phaser.State);

exports.default = Play;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = function (_Phaser$State) {
  _inherits(Preload, _Phaser$State);

  function Preload() {
    _classCallCheck(this, Preload);

    return _possibleConstructorReturn(this, (Preload.__proto__ || Object.getPrototypeOf(Preload)).apply(this, arguments));
  }

  _createClass(Preload, [{
    key: 'create',
    value: function create() {
      this.game.load.onLoadStart.add(this.loadStart, this);
      this.game.load.onFileComplete.add(this.fileComplete, this);
      this.game.load.onLoadComplete.add(this.loadComplete, this);

      this.loadingText = this.game.add.text(32, 32, 'Loading...', { fill: '#fff' });

      // Load your assets here
      //this.loadingImage = this.game.load.image('pinwheel','/assets/pinwheel.png');
      this.game.load.image('pinwheel', '/assets/pinwheel.png');

      this.game.load.start();
    }
  }, {
    key: 'loadStart',
    value: function loadStart() {
      this.loadingText.setText('Loading...');
    }
  }, {
    key: 'fileComplete',
    value: function fileComplete(progress) {
      this.loadingText.setText('Loading: ' + progress + '%');
    }
  }, {
    key: 'loadComplete',
    value: function loadComplete() {
      this.loadingText.setText('Load Complete');
      this.game.state.start('play');
    }
  }]);

  return Preload;
}(Phaser.State);

exports.default = Preload;

},{}]},{},[1]);

//# sourceMappingURL=game.js.map

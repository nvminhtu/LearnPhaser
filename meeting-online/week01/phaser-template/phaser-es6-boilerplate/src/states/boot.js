class Boot extends Phaser.State {
  create() {
    this.game.stage.backgroundColor = '#000';
    this.game.state.start('preload');
  }
}

// export statement được sử dụng để export functions, objects từ 1 module
// ví dụ ở dưới là mặc định của export
// tham khảo thêm ở: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
export default Boot;

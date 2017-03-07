var game;

window.onload = function() {
	game = new Phaser.Game(480, 60, Phaser.AUTO, "");
     game.state.add("PlayGame", playGame);
     game.state.start("PlayGame");
}

var playGame = function(game){};
playGame.prototype = {
     preload: function(){
          // the hero is a spritesheet with all animation frames
          game.load.spritesheet("hero", "hero.png", 20, 32);
     },
     create: function(){
          // the hero is initally placed like a normal sprite
          this.hero = game.add.sprite(game.width / 2, game.height / 2, "hero");
          // flag to determine if the hero is supposed to move right
          this.hero.goingRight = false;
          // flag to determine if the hero is supposed to move left
          this.hero.goingLeft = false;
          // default idle frame, with the hero facing right
          this.hero.idleFrame = 0;
          // this is how we set an animation, we give it a name and an array with the frames.
          var walkRightAnimation = this.hero.animations.add("walkRight", [0, 1, 2, 3]);
          var walkLeftAnimation = this.hero.animations.add("walkLeft", [4, 5, 6, 7]);
          // these are just listeners for X and Z keys
          this.rightKeyPressed = game.input.keyboard.addKey(Phaser.Keyboard.X);
          this.leftKeyPressed = game.input.keyboard.addKey(Phaser.Keyboard.Z);          
          // setting goingRight to true if X is pressed
          this.rightKeyPressed.onDown.add(function(){
               this.hero.goingRight = true;     
          }, this);
          // setting goingRight to false if X is released
          this.rightKeyPressed.onUp.add(function(){
               this.hero.goingRight = false;     
          }, this);  
          // setting goingLeft to true if Y is pressed
          this.leftKeyPressed.onDown.add(function(){
               this.hero.goingLeft = true;     
          }, this);
          // setting goingLeft to false if Y is released
          this.leftKeyPressed.onUp.add(function(){
               this.hero.goingLeft = false;     
          }, this);
     },
     update: function(){
          // if we are going left and not right (we don't want two keys to be pressed at the same time)
          if(this.hero.goingRight && !this.hero.goingLeft){
               this.hero.animations.play("walkRight", 10, true);
               // idle frame with hero facing right
               this.hero.idleFrame = 0;     
          }
          else{
               // if we are going right and not left
               if(!this.hero.goingRight && this.hero.goingLeft){
                    this.hero.animations.play("walkLeft", 10, true); 
                    // idle frame with hero facing left
                    this.hero.idleFrame = 4;      
               }
               else{
                    // show idle frame
                    this.hero.frame = this.hero.idleFrame;         
               }
          }
     }            
}
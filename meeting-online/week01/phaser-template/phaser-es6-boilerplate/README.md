# Phaser ES6 Boilerplate
This repository provides a stylish boilerplate for using Phaser with ES6!

After creating my first Phaser game for the Ludum Dare I decided it would be a
lot faster to have a boilerplate on hand. I looked around for existing Phaser -
ES6 boilerplates, and while I found a couple of really good ones, I felt they
didn't quite match my workflow. So I decided to make my own, which is this!

## Getting Started
In order to use this boilerplate you will need to have Node.js, npm and gulp
installed as these will be used to install the required dependencies for
building the game.

### Installation
Clone the repository (or download the zip):
```
$ git clone https://github.com/nerdenough/phaser-es6-boilerplate.git
```

Navigate into the project directory and install all the required dependencies
for the project along with gulp (used to run the build tasks for the game):
```
$ npm install -g gulp
$ npm install
```

### Usage
#### Serving
To serve the game so you can access it on your browser, you will need to run
`npm start` or `gulp`. This will build the game and serve it on a web server
using Browser Sync.

Once the game is running, the address and port to access the page will be
displayed in the terminal window. Any changes to the code of the game will
trigger a rebuild and the web page will refresh.

#### Building
You are able to build the game in 2 different modes: development or production.
The development build will write sourcemaps for your game's code and will also
copy phaser.js and its sourcemap instead of just phaser.min.js to allow easier
debugging.

To build the game in development mode, simply run `gulp build`. A production
build can be achieved by running `gulp build --production`.

#### Arguments
- `--production` builds the application in production mode, minifying the
javascript and excluding sourcemaps from the build.
- `--strict` enforces the code styling rules defined in .eslintrc.json. The
build will fail if the code does not meet the style guide's requirements.

## In Depth
### Source Code
By default, source code for your game is located in the `src` directory. Inside
is a base minimal game boilerplate that you can use/adapt/delete based on what
you need. The boilerplate consists of a main Game class and several game states
to modulate the initial setup for the game.

#### Game
You can declare your states in the main Game class along with any other global
game config.

#### Boot
Boot allows you to declare the initial settings of the game, such as the stage
colour.

#### Preload
Preload can be used to load all of your assets, show a loading screen, and
switch to the next state when loading is complete.

#### Play
Play serves as the main game state in this example.

### Static
The `static` folder contains the web page and styling that your game will be
embedded into.

### Gulp
The gulpfile that contains all the tasks for building the game can be customised
to your requirements. You can customise the paths for all the files being read
or written through the `paths` variable declared near the top of the file.

### ESLint
You can customise the rules for ESLint to use when linting your project by
editing .eslintrc.json.

## License
This repository is licensed under the MIT license.

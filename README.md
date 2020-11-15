# Scoober

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Game description

When a player starts, they incept a random (whole) number and send it to the second player as an
approach of starting the game. The receiving player can then choose between adding one of {-1,0,1} in
order to get to a number that is divisible by 3. If the remainder is 0 then the resulting whole number is then sent back to the original
sender. Otherwise the number is not divided and the original number is sent back.
The same rules are applied until one player reaches the number 1. That player wins the game.

## Requirements

- Node.js - Use LTS version

## Setup game

`npm install` - install dependencies

`cd ./src/server` - go to the server directory

`npm install` - install server dependencies

`cd ../..` - go to the root directory

`npm start` - start the game ;)

The Scoober app will open in a new browser tab.\
For multiplayer mode, please open the game in another browser tab for the second player: [http://localhost:3000](http://localhost:3000).

## Available npm scripts

### `npm start`

Runs the Scoober client app in the development mode and run the game server concurrently.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run start:server`

Runs the server only.

### `npm run start:ui`

Runs the client app in development mode. It opens a new browser tab.

### `npm test`

Launches the test runner in the interactive watch mode.

import Game from './base/game'
import MainScene from './main/scene'
;(function() {
  const mainScene = new MainScene()
  const game = new Game({
    images: {
      ball: 'ball.png',
      block: 'block.png',
      paddle: 'paddle.png'
    },
    mainScene,
    fps: 60
  })
  console.log(game)
})()

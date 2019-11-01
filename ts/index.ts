import Game from './base/game'
import MainScene from './main/scene'
;(function() {
  const mainScene = new MainScene()
  const game = new Game({
    images: {
      ball: 'img/ball.png',
      block: 'img/block.png',
      paddle: 'img/paddle.png'
    },
    mainScene
  })
})()

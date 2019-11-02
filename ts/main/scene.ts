import Scene from '../base/scene'
import Drawable, { ImageDrawable } from '../base/drawable'
import { Block, Paddle, Ball } from './drawable'

export default class MainScene extends Scene {
  block: Block
  paddle: Paddle
  ball: Ball
  
  init() {
    this.paddle = <Paddle>(
      this.newImageDrawable(
        'paddle',
        this.game.canvas.width / 2,
        this.game.canvas.height * 0.8
      )
    )
    this.block = this.newRandomBlock()
    this.ball = <Ball>this.newImageDrawable('ball', 150, 150)
    this.ball.fire()
    this.addDrawable(this.paddle, this.block, this.ball)
  }
  update() {
    this.ball.move()
    if (this.paddle.isCollidedWith(this.ball)) this.ball.bounce()
    if (this.block.isCollidedWith(this.ball)) {
      this.removeDrawable(this.block.uid)
      this.block = this.newRandomBlock()
      this.addDrawable(this.block)
    }
  }

  // 这是一个工厂函数
  newImageDrawable(
    type: 'block' | 'paddle' | 'ball',
    x: number,
    y: number
  ): ImageDrawable {
    const classMap = {
      block: Block,
      paddle: Paddle,
      ball: Ball
    }
    return new classMap[type](this, x, y, this.game.images[type])
  }
  newRandomBlock(): Block {
    const x = Math.random() * this.game.canvas.width
    const y = Math.random() * this.game.canvas.height * 0.3
    return <Block>this.newImageDrawable('block', x, y)
  }
}

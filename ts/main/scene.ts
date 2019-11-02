import Scene from '../base/scene'
import Drawable, { ImageDrawable } from '../base/drawable'
import { Block, Paddle, Ball } from './drawable'

export default class MainScene extends Scene {
  block: Block
  paddle: Paddle
  ball: Ball
  init() {
    this.paddle = <Paddle>this.newImageDrawable('paddle', 100, 100)
    this.block = <Block>this.newImageDrawable('block', 200, 200)
    this.ball = <Ball>this.newImageDrawable('ball', 150, 150)
    this.ball.fire()
    this.addDrawable(this.paddle, this.block, this.ball)
  }
  update() {
    this.ball.move()
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
}

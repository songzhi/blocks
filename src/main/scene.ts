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
    this.addDrawable(this.paddle, this.block, this.ball)

    this.game.registerAction('a', () => this.paddle.moveLeft())
    this.game.registerAction('d', () => this.paddle.moveRight())
    this.game.registerAction('f', () => this.ball.fire())
  }
  update() {
    this.ball.move()
    if (this.paddle.isCollidedWith(this.ball)) {
      const [x1, y1, w1, h1] = [
        this.ball.x,
        this.ball.y,
        this.ball.w,
        this.ball.y
      ]
      const [x2, y2, w2, h2] = [
        this.paddle.x,
        this.paddle.y,
        this.paddle.w,
        this.paddle.h
      ]
      // 判断撞击位置是paddle的上下还是左右
      if (x1 + w1 >= x2 && (y1 <= y2 || y1 + h1 >= y2 + h2))
        this.ball.speedY *= -1
      if (y1 + h1 >= y2 && (x1 <= x2 || x1 + w1 >= x2 + w2))
        this.ball.speedX *= -1
    }
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
    const x = (0.1 + 0.9 * Math.random()) * this.game.canvas.width
    const y = (0.1 + 0.3 * Math.random()) * this.game.canvas.height
    return <Block>this.newImageDrawable('block', x, y)
  }
}

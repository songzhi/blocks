import { ImageDrawable } from '../base/drawable'

export class Block extends ImageDrawable {
}

export class Paddle extends ImageDrawable {}

export class Ball extends ImageDrawable {
  speedX: number = 2
  speedY: number = 2
  fired: boolean = false
  move() {
    if (this.fired) {
      const o = this
      if (o.x < 0 || o.x > o.game.canvas.width - o.w) {
        o.speedX = -o.speedX
      }
      if (o.y < 0 || o.y > o.game.canvas.height - o.h) {
        o.speedY = -o.speedY
      }
      o.x += o.speedX
      o.y += o.speedY
    }
  }
  fire() {
    this.fired = true
  }
  bounce() {
    this.speedY *= -1
  }
}

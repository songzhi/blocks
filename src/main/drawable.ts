import { ImageDrawable } from '../base/drawable'

export class Block extends ImageDrawable {}

export class Paddle extends ImageDrawable {
  speed: number = 15
  move(delta: number): void {
    let x = this.x + delta
    if (x < 0) x = 0
    if (x > this.game.canvas.width - this.w) x = this.game.canvas.width - this.w
    this.x = x
  }
  moveLeft(): void {
    this.move(-this.speed)
  }
  moveRight(): void {
    this.move(this.speed)
  }
}

export class Ball extends ImageDrawable {
  speedX: number = 5
  speedY: number = 5
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
}

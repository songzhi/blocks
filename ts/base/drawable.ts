import Game from './game'

export default abstract class Drawable {
  game: Game
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  abstract draw(): void
}

export class ImageDrawable extends Drawable {
  image: string
  constructor(x: number, y: number, image: string) {
    super(x, y)
    this.image = image
  }
  draw() {
    this.game.ctx.drawImage(this.game.images[this.image], this.x, this.y)
  }
}

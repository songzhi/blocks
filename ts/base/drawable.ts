import Game from './game'
import { Uid } from './utils'
import Scene from './scene'

export default abstract class Drawable {
  game: Game
  scene: Scene
  x: number
  y: number
  uid: string
  constructor(x: number, y: number) {
    this.uid = Uid()
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

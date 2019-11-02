import Game from './game'
import { Uid } from './utils'
import Scene from './scene'

export default abstract class Drawable {
  game: Game
  scene: Scene
  x: number
  y: number
  uid: string
  constructor(scene: Scene, x: number, y: number) {
    this.uid = Uid()
    this.x = x
    this.y = y
    this.scene = scene
    this.game = scene.game
  }
  abstract draw(): void
}

export class ImageDrawable extends Drawable {
  image: HTMLImageElement
  w: number
  h: number
  constructor(scene: Scene, x: number, y: number, image: HTMLImageElement) {
    super(scene, x, y)
    this.image = image
    this.w = image.width
    this.h = image.height
  }
  draw() {
    this.game.ctx.drawImage(this.image, this.x, this.y)
  }
  isCollidedWith(other: ImageDrawable): boolean {
    const [x1, y1, w1, h1] = [this.x, this.y, this.w, this.h]
    const [x2, y2, w2, h2] = [other.x, other.y, other.w, other.h]
    return !(
      (x1 >= x2 && x1 >= x2 + w2) ||
      (x1 <= x2 && x1 + w1 <= x2) ||
      (y1 >= y2 && y1 >= y2 + h2) ||
      (y1 <= y2 && y1 + h1 <= y2)
    )
  }
}

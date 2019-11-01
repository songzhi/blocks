import Scene from '../base/scene'
import { ImageDrawable } from '../base/drawable'

export default class MainScene extends Scene {
  init() {
    this.addDrawable(new ImageDrawable(100, 100, 'paddle'))
  }
  update() {}
}

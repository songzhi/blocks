import Scene, { LoadingScene } from './scene'

export interface GameOptions {
  fps?: number // 默认30
  images?: { [key: string]: string }
  mainScene?: Scene
  canvas?: HTMLCanvasElement // 默认为'#main-canvas'元素
}

export default class Game {
  fps: number
  images: { [key: string]: HTMLImageElement }
  scene: Scene
  ctx: CanvasRenderingContext2D
  canvas: HTMLCanvasElement
  keydowns: { [key: string]: boolean }
  actions: { [key: string]: () => {} }
  mainScene: Scene
  constructor(options: GameOptions) {
    this.fps = options.fps || 30
    this.images = {}

    this.replaceScene(new LoadingScene())
    this.mainScene = options.mainScene || this.scene

    this.canvas =
      options.canvas ||
      <HTMLCanvasElement>document.getElementById('main-canvas')
    this.ctx = this.canvas.getContext('2d')

    this.keydowns = {}
    this.actions = {}
    window.addEventListener('keydown', event => {
      this.keydowns[event.key] = true
    })
    window.addEventListener('keyup', event => {
      this.keydowns[event.key] = false
    })

    this.init(options)
  }
  init(options: GameOptions) {
    if (options.images) {
      // 预载所有图片
      for (let name of Object.keys(options.images)) {
        let image = new Image()
        image.src = options.images[name]
        image.onload = () => {
          this.images[name] = image
          if (
            Object.keys(this.images).length ===
            Object.keys(options.images).length
          ) {
            this.replaceScene(this.mainScene)
            this.runLoop()
          }
        }
      }
    } else {
      this.replaceScene(this.mainScene)
      this.runLoop()
    }
  }

  update() {
    this.scene.update()
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  draw() {
    this.scene.draw()
  }

  runLoop() {
    this.update()
    this.clear()
    this.draw()
    setTimeout(() => {
      this.runLoop()
    }, 1000 / this.fps)
  }
  replaceScene(scene: Scene) {
    scene.game = this
    scene.init()
    this.scene = scene
  }
}

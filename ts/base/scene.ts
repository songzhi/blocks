import Game from './game'
import Drawable from './drawable'

export default abstract class Scene {
  game: Game
  drawables: { [key: string]: Drawable } = {}
  // 初始化资源,比如添加drawable
  abstract init(): void
  // 每更新一帧的时候被调用,但是这里应该写数据更新的操作
  abstract update(): void
  // 绘制一帧
  draw(): void {
    for (let uid of Object.keys(this.drawables)) {
      this.drawables[uid].draw()
    }
  }
  addDrawable(drawable: Drawable): void {
    drawable.game = this.game
    drawable.scene = this
    this.drawables[drawable.uid] = drawable
  }
  removeDrawable(uid: string): void {
    delete this.drawables[uid]
  }
}

export class LoadingScene extends Scene {
  init() {}
  update() {}
  draw() {
    const font = this.game.ctx.font
    this.game.ctx.font = '36px serif'
    this.game.ctx.fillText('资源加载中', 360, 280)
    this.game.ctx.font = font
  }
}

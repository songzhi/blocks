import Game from './game'

export default abstract class Scene {
  game: Game
  abstract draw(): void
  abstract update(): void
}

export class LoadingScene extends Scene {
  update() {}
  draw() {
    const font = this.game.ctx.font
    this.game.ctx.font = '36px serif'
    this.game.ctx.fillText('资源加载中', 360, 280)
    this.game.ctx.font = font
  }
}

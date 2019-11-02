var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../base/scene", "./drawable"], function (require, exports, scene_1, drawable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MainScene = (function (_super) {
        __extends(MainScene, _super);
        function MainScene() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainScene.prototype.init = function () {
            var _this = this;
            this.paddle = (this.newImageDrawable('paddle', this.game.canvas.width / 2, this.game.canvas.height * 0.8));
            this.block = this.newRandomBlock();
            this.ball = this.newImageDrawable('ball', 150, 150);
            this.addDrawable(this.paddle, this.block, this.ball);
            this.game.registerAction('a', function () { return _this.paddle.moveLeft(); });
            this.game.registerAction('d', function () { return _this.paddle.moveRight(); });
            this.game.registerAction('f', function () { return _this.ball.fire(); });
        };
        MainScene.prototype.update = function () {
            this.ball.move();
            if (this.paddle.isCollidedWith(this.ball)) {
                var _a = [
                    this.ball.x,
                    this.ball.y,
                    this.ball.w,
                    this.ball.y
                ], x1 = _a[0], y1 = _a[1], w1 = _a[2], h1 = _a[3];
                var _b = [
                    this.paddle.x,
                    this.paddle.y,
                    this.paddle.w,
                    this.paddle.h
                ], x2 = _b[0], y2 = _b[1], w2 = _b[2], h2 = _b[3];
                if (x1 + w1 >= x2 && (y1 <= y2 || y1 + h1 >= y2 + h2))
                    this.ball.speedY *= -1;
                if (y1 + h1 >= y2 && (x1 <= x2 || x1 + w1 >= x2 + w2))
                    this.ball.speedX *= -1;
            }
            if (this.block.isCollidedWith(this.ball)) {
                this.removeDrawable(this.block.uid);
                this.block = this.newRandomBlock();
                this.addDrawable(this.block);
            }
        };
        MainScene.prototype.newImageDrawable = function (type, x, y) {
            var classMap = {
                block: drawable_1.Block,
                paddle: drawable_1.Paddle,
                ball: drawable_1.Ball
            };
            return new classMap[type](this, x, y, this.game.images[type]);
        };
        MainScene.prototype.newRandomBlock = function () {
            var x = (0.1 + 0.9 * Math.random()) * this.game.canvas.width;
            var y = (0.1 + 0.3 * Math.random()) * this.game.canvas.height;
            return this.newImageDrawable('block', x, y);
        };
        return MainScene;
    }(scene_1.default));
    exports.default = MainScene;
});

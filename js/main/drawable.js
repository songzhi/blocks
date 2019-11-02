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
define(["require", "exports", "../base/drawable"], function (require, exports, drawable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Block = (function (_super) {
        __extends(Block, _super);
        function Block() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Block;
    }(drawable_1.ImageDrawable));
    exports.Block = Block;
    var Paddle = (function (_super) {
        __extends(Paddle, _super);
        function Paddle() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.speed = 15;
            return _this;
        }
        Paddle.prototype.move = function (delta) {
            var x = this.x + delta;
            if (x < 0)
                x = 0;
            if (x > this.game.canvas.width - this.w)
                x = this.game.canvas.width - this.w;
            this.x = x;
        };
        Paddle.prototype.moveLeft = function () {
            this.move(-this.speed);
        };
        Paddle.prototype.moveRight = function () {
            this.move(this.speed);
        };
        return Paddle;
    }(drawable_1.ImageDrawable));
    exports.Paddle = Paddle;
    var Ball = (function (_super) {
        __extends(Ball, _super);
        function Ball() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.speedX = 5;
            _this.speedY = 5;
            _this.fired = false;
            return _this;
        }
        Ball.prototype.move = function () {
            if (this.fired) {
                var o = this;
                if (o.x < 0 || o.x > o.game.canvas.width - o.w) {
                    o.speedX = -o.speedX;
                }
                if (o.y < 0 || o.y > o.game.canvas.height - o.h) {
                    o.speedY = -o.speedY;
                }
                o.x += o.speedX;
                o.y += o.speedY;
            }
        };
        Ball.prototype.fire = function () {
            this.fired = true;
        };
        return Ball;
    }(drawable_1.ImageDrawable));
    exports.Ball = Ball;
});

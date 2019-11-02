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
define(["require", "exports", "./utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Drawable = (function () {
        function Drawable(scene, x, y) {
            this.uid = utils_1.Uid();
            this.x = x;
            this.y = y;
            this.scene = scene;
            this.game = scene.game;
        }
        return Drawable;
    }());
    exports.default = Drawable;
    var ImageDrawable = (function (_super) {
        __extends(ImageDrawable, _super);
        function ImageDrawable(scene, x, y, image) {
            var _this = _super.call(this, scene, x, y) || this;
            _this.image = image;
            _this.w = image.width;
            _this.h = image.height;
            return _this;
        }
        ImageDrawable.prototype.draw = function () {
            this.game.ctx.drawImage(this.image, this.x, this.y);
        };
        ImageDrawable.prototype.isCollidedWith = function (other) {
            var _a = [this.x, this.y, this.w, this.h], x1 = _a[0], y1 = _a[1], w1 = _a[2], h1 = _a[3];
            var _b = [other.x, other.y, other.w, other.h], x2 = _b[0], y2 = _b[1], w2 = _b[2], h2 = _b[3];
            return !((x1 >= x2 && x1 >= x2 + w2) ||
                (x1 <= x2 && x1 + w1 <= x2) ||
                (y1 >= y2 && y1 >= y2 + h2) ||
                (y1 <= y2 && y1 + h1 <= y2));
        };
        return ImageDrawable;
    }(Drawable));
    exports.ImageDrawable = ImageDrawable;
});

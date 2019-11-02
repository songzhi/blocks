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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Scene = (function () {
        function Scene() {
            this.drawables = {};
        }
        Scene.prototype.draw = function () {
            for (var _i = 0, _a = Object.keys(this.drawables); _i < _a.length; _i++) {
                var uid = _a[_i];
                this.drawables[uid].draw();
            }
        };
        Scene.prototype.addDrawable = function (drawable) {
            var others = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                others[_i - 1] = arguments[_i];
            }
            drawable.game = this.game;
            drawable.scene = this;
            this.drawables[drawable.uid] = drawable;
            for (var _a = 0, others_1 = others; _a < others_1.length; _a++) {
                var d = others_1[_a];
                this.drawables[d.uid] = d;
            }
        };
        Scene.prototype.removeDrawable = function (uid) {
            delete this.drawables[uid];
        };
        return Scene;
    }());
    exports.default = Scene;
    var LoadingScene = (function (_super) {
        __extends(LoadingScene, _super);
        function LoadingScene() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LoadingScene.prototype.init = function () { };
        LoadingScene.prototype.update = function () { };
        LoadingScene.prototype.draw = function () {
            var font = this.game.ctx.font;
            this.game.ctx.font = '36px serif';
            this.game.ctx.fillText('资源加载中', 360, 280);
            this.game.ctx.font = font;
        };
        return LoadingScene;
    }(Scene));
    exports.LoadingScene = LoadingScene;
});

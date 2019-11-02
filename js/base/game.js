define(["require", "exports", "./scene"], function (require, exports, scene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = (function () {
        function Game(options) {
            var _this = this;
            this.paused = false;
            this.fps = options.fps || 30;
            this.images = {};
            this.replaceScene(new scene_1.LoadingScene());
            this.mainScene = options.mainScene || this.scene;
            this.canvas =
                options.canvas ||
                    document.getElementById('main-canvas');
            this.ctx = this.canvas.getContext('2d');
            this.keydowns = {};
            this.actions = {};
            window.addEventListener('keydown', function (event) {
                if (event.key === 'p') {
                    _this.paused = !_this.paused;
                    return;
                }
                _this.keydowns[event.key] = true;
            });
            window.addEventListener('keyup', function (event) {
                _this.keydowns[event.key] = false;
            });
            this.init(options);
        }
        Game.prototype.init = function (options) {
            var _this = this;
            if (options.images) {
                var _loop_1 = function (name_1) {
                    var image = new Image();
                    image.src = options.images[name_1];
                    image.onload = function () {
                        _this.images[name_1] = image;
                        if (Object.keys(_this.images).length ===
                            Object.keys(options.images).length) {
                            _this.replaceScene(_this.mainScene);
                            _this.runLoop();
                        }
                    };
                };
                for (var _i = 0, _a = Object.keys(options.images); _i < _a.length; _i++) {
                    var name_1 = _a[_i];
                    _loop_1(name_1);
                }
            }
            else {
                this.replaceScene(this.mainScene);
                this.runLoop();
            }
        };
        Game.prototype.update = function () {
            this.scene.update();
        };
        Game.prototype.clear = function () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        };
        Game.prototype.draw = function () {
            this.scene.draw();
        };
        Game.prototype.registerAction = function (key, action) {
            this.actions[key] = action;
        };
        Game.prototype.runLoop = function () {
            var _this = this;
            if (!this.paused) {
                for (var _i = 0, _a = Object.keys(this.actions); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (this.keydowns[key]) {
                        this.actions[key]();
                    }
                }
                this.update();
                this.clear();
                this.draw();
            }
            setTimeout(function () {
                _this.runLoop();
            }, 1000 / this.fps);
        };
        Game.prototype.replaceScene = function (scene) {
            scene.game = this;
            scene.init();
            this.scene = scene;
        };
        return Game;
    }());
    exports.default = Game;
});

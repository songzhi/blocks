define(["require", "exports", "./base/game", "./main/scene"], function (require, exports, game_1, scene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var mainScene = new scene_1.default();
        var game = new game_1.default({
            images: {
                ball: 'img/ball.png',
                block: 'img/block.png',
                paddle: 'img/paddle.png'
            },
            mainScene: mainScene,
            fps: 60
        });
        console.log(game);
    })();
});

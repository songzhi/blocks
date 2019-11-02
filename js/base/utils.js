define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Uid(len) {
        len = len || 7;
        return Math.random()
            .toString(35)
            .substr(2, len);
    }
    exports.Uid = Uid;
});

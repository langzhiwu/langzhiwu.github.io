/**
 *
 * @author
 *
 */
var GameConst = (function () {
    function GameConst() {
    }
    var d = __define,c=GameConst;p=c.prototype;
    GameConst._getInstance = function () {
        if (null == GameConst._instance) {
            GameConst._instance = new GameConst();
        }
        return GameConst._instance;
    };
    p.setLayer = function (layer) {
        this._viewLayer = layer;
    };
    p.getLayer = function () {
        return this._viewLayer;
    };
    return GameConst;
})();
egret.registerClass(GameConst,"GameConst");

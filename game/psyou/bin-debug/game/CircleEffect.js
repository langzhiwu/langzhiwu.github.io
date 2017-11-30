/**
 *
 * @author
 *
 */
var CircleEffect = (function (_super) {
    __extends(CircleEffect, _super);
    function CircleEffect() {
        _super.call(this);
        this.initView();
    }
    var d = __define,c=CircleEffect;p=c.prototype;
    p.initView = function () {
        var sp_bg = new egret.Shape();
        sp_bg.graphics.lineStyle(1, 0x000000);
        sp_bg.graphics.beginFill(0xffffff);
        sp_bg.graphics.drawCircle(100, 100, 100);
        sp_bg.graphics.endFill();
        this.addChild(sp_bg);
        this._eff_sp = new egret.Shape();
        this.addChild(this._eff_sp);
        var sp_top = new egret.Shape();
        sp_top.graphics.lineStyle(1, 0x000000);
        sp_top.graphics.beginFill(0xffffff);
        sp_top.graphics.drawCircle(100, 100, 96);
        sp_top.graphics.endFill();
        this.addChild(sp_top);
    };
    p.onSetEffectAngle = function (angle) {
        CommonGraphics.DrawSector(this._eff_sp, 100, 100, 99, angle, -90, 0x00ff00);
    };
    return CircleEffect;
})(egret.DisplayObjectContainer);
egret.registerClass(CircleEffect,"CircleEffect");

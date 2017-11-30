/**
 *
 * @author
 *
 */
var CommonButton = (function (_super) {
    __extends(CommonButton, _super);
    function CommonButton() {
        _super.call(this);
        this.initLayout();
    }
    var d = __define,c=CommonButton;p=c.prototype;
    p.initLayout = function () {
        var sp = new egret.Shape();
        sp.graphics.lineStyle(1, 0x000000, 0.6);
        sp.graphics.beginFill(0xffffff);
        sp.graphics.drawRect(0, 0, 80, 40);
        sp.graphics.endFill();
        this.addChild(sp);
        this._textField = new egret.TextField();
        this._textField.size = 20;
        this._textField.textColor = 0x000000;
        this._textField.verticalAlign = "middle";
        this._textField.textAlign = "center";
        this._textField.width = 80;
        this._textField.height = 40;
        this.addChild(this._textField);
    };
    p.setText = function (text) {
        this._textField.text = text;
    };
    return CommonButton;
})(egret.DisplayObjectContainer);
egret.registerClass(CommonButton,"CommonButton");

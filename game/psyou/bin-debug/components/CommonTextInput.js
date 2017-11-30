/**
 *
 * @author
 *
 */
var CommonTextInput = (function (_super) {
    __extends(CommonTextInput, _super);
    function CommonTextInput() {
        _super.call(this);
        this.initLayout();
    }
    var d = __define,c=CommonTextInput;p=c.prototype;
    p.initLayout = function () {
        var sp = new egret.Shape();
        sp.graphics.beginFill(0xffffff);
        sp.graphics.drawRect(0, 0, 200, 30);
        sp.graphics.endFill();
        this.addChild(sp);
        this._textfield = new egret.TextField();
        this._textfield.type = egret.TextFieldType.INPUT;
        this._textfield.width = 200;
        this._textfield.height = 30;
        this.addChild(this._textfield);
        this._textfield.size = 20;
        this._textfield.textColor = 0x000000;
        this._textfield.verticalAlign = "middle";
    };
    p.setText = function (text) {
        this._textfield.text = text;
    };
    p.getText = function () {
        return this._textfield.text;
    };
    return CommonTextInput;
})(egret.DisplayObjectContainer);
egret.registerClass(CommonTextInput,"CommonTextInput");

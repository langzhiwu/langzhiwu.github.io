/**
 *
 * @author
 *
 */
var CommonInfoDialog = (function (_super) {
    __extends(CommonInfoDialog, _super);
    function CommonInfoDialog(ts) {
        _super.call(this);
        this.initLayout(ts);
    }
    var d = __define,c=CommonInfoDialog;p=c.prototype;
    p.initLayout = function (ts) {
        var sp = new egret.Shape();
        sp.graphics.lineStyle(1, 0x000000, 0.8);
        sp.graphics.beginFill(0xffffff, 0.6);
        sp.graphics.drawRect(0, 0, 400, 150);
        sp.graphics.endFill();
        this.addChild(sp);
        var tf = new egret.TextField();
        tf.textColor = 0x000000;
        tf.textAlign = "center";
        tf.size = 24;
        tf.bold = true;
        tf.width = 390;
        tf.height = 40;
        tf.wordWrap = true;
        this.addChild(tf);
        tf.x = 5;
        tf.y = 50;
        tf.text = ts;
        var sbtn = new CommonButton();
        sbtn.setText("确 定");
        sbtn.x = 150;
        sbtn.y = 110;
        this.addChild(sbtn);
        sbtn.touchEnabled = true;
        sbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseView, this);
    };
    p.onCloseView = function (evt) {
        this.parent.removeChild(this);
    };
    return CommonInfoDialog;
})(egret.DisplayObjectContainer);
egret.registerClass(CommonInfoDialog,"CommonInfoDialog");

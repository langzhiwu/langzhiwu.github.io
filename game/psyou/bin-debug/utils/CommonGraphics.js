/**
 *
 * @author
 *
 */
var CommonGraphics = (function () {
    function CommonGraphics() {
    }
    var d = __define,c=CommonGraphics;p=c.prototype;
    CommonGraphics.DrawSector = function (mc, x, y, r, angle, startFrom, color) {
        if (x === void 0) { x = 200; }
        if (y === void 0) { y = 200; }
        if (r === void 0) { r = 100; }
        if (angle === void 0) { angle = 27; }
        if (startFrom === void 0) { startFrom = 270; }
        if (color === void 0) { color = 0xff0000; }
        mc.graphics.clear();
        mc.graphics.beginFill(color, 50);
        //remove this line to unfill the sector
        /* the border of the secetor with color 0xff0000 (red) , you could replace it with any color
        * you want like 0x00ff00(green) or 0x0000ff (blue).
        */
        // mc.graphics.lineStyle(0,0xff0000);  //自定义颜色
        mc.graphics.lineStyle(0, color); //使用传递进来的颜色
        mc.graphics.moveTo(x, y);
        angle = (Math.abs(angle) > 360) ? 360 : angle;
        var n = Math.ceil(Math.abs(angle) / 45);
        var angleA = angle / n;
        angleA = angleA * Math.PI / 180;
        startFrom = startFrom * Math.PI / 180;
        mc.graphics.lineTo(x + r * Math.cos(startFrom), y + r * Math.sin(startFrom));
        for (var i = 1; i <= n; i++) {
            startFrom += angleA;
            var angleMid = startFrom - angleA / 2;
            var bx = x + r / Math.cos(angleA / 2) * Math.cos(angleMid);
            var by = y + r / Math.cos(angleA / 2) * Math.sin(angleMid);
            var cx = x + r * Math.cos(startFrom);
            var cy = y + r * Math.sin(startFrom);
            mc.graphics.curveTo(bx, by, cx, cy);
        }
        if (angle != 360) {
            mc.graphics.lineTo(x, y);
        }
        mc.graphics.endFill(); // if you want a sector without filling color , please remove this line.
    };
    return CommonGraphics;
})();
egret.registerClass(CommonGraphics,"CommonGraphics");

/**
 *
 * @author 
 *
 */
class CircleEffect extends egret.DisplayObjectContainer{
	public constructor() {
        super();
        
        this.initView();
	}
    private _eff_sp: egret.Shape;
	private initView():void{
        var sp_bg: egret.Shape = new egret.Shape();
        sp_bg.graphics.lineStyle(1,0x000000);
        sp_bg.graphics.beginFill(0xffffff);
        sp_bg.graphics.drawCircle(100,100,100);
        sp_bg.graphics.endFill();
        this.addChild(sp_bg);
        
        this._eff_sp = new egret.Shape();
        this.addChild(this._eff_sp);
        
        var sp_top: egret.Shape = new egret.Shape();
        sp_top.graphics.lineStyle(1,0x000000);
        sp_top.graphics.beginFill(0xffffff);
        sp_top.graphics.drawCircle(100,100,96);
        sp_top.graphics.endFill();
        this.addChild(sp_top);
	}
	
	public onSetEffectAngle(angle:number):void{
        CommonGraphics.DrawSector(this._eff_sp,100,100,99,angle,-90,0x00ff00);
	}
}

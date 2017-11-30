/**
 *
 * @author 
 *
 */
class CommonButton extends egret.DisplayObjectContainer{
	public constructor() {
        super();
        this.initLayout();
	}
	
    private _textField: egret.TextField;
	private initLayout():void{
        var sp: egret.Shape = new egret.Shape();
        sp.graphics.lineStyle(1,0x000000,0.6);
        sp.graphics.beginFill(0xffffff);
        sp.graphics.drawRect(0,0,80,40);
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
	}
	
	public setText(text:string):void{
        this._textField.text = text;
	}
}

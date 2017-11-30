/**
 *
 * @author 
 *
 */
class CommonTextInput extends egret.DisplayObjectContainer{
	public constructor() {
        super();
        this.initLayout();
	}
    private _textfield: egret.TextField;
	private initLayout():void{
        var sp: egret.Shape = new egret.Shape();
        sp.graphics.beginFill(0xffffff);
        sp.graphics.drawRect(0,0,200,30);
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
	}
	
	public setText(text:string):void{
        this._textfield.text = text;
	}
	
	public getText():string{
        return this._textfield.text;
	}
	
}

/**
 *
 * @author 
 *
 */
class GameView extends egret.DisplayObjectContainer{
	public constructor() {
        super();
        
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.initView,this);
	}
	
    private initView():void{
        var stageW: number = this.stage.stageWidth;
        var stageH: number = this.stage.stageHeight;
        var click_btn: egret.TextField = new egret.TextField();
        click_btn.textColor = 0xffffff;
        click_btn.textAlign = 'center';
        click_btn.text = 'click me';
        click_btn.size = 20;
        click_btn.x = stageW / 2 - click_btn.width / 2;
        click_btn.y = stageH / 2 + 10;
        click_btn.touchEnabled = true;
        click_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickTapHandler,this);
        this.addChild(click_btn);
        this.graphicsShape();
        
        this._circleEffect = new CircleEffect();
        this.addChild(this._circleEffect);
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
	}
	
    //点击处理
    private _addheight: number = 0;
    private _addgap: number = 7;
    private _hp_height: number = 0;
    private _default_hp_angle: number = 360;
    private _circleEffect: CircleEffect;
    private onClickTapHandler(evt: egret.TouchEvent): void {
        this._addheight = this._addgap;
        this._default_hp_angle -= this._addgap;
    }
    
    //每一帧处理
    private onEnterFrameHandler(evt: egret.Event): void {
        if(this._addheight != 0) {
            this._hp_height += this._addheight;
            this._addheight = 0;
        } else {
            this._hp_height--;
        }

        if(this._hp_height > 196) {
            this._hp_height = 196;
        }

        if(this._hp_height < 0) {
            this._hp_height = 0;
        }
        
        if(this._default_hp_angle < 360){
            this._default_hp_angle++;
        }
        
        this.refreshGraphics();

    }
    
    //根据时间间隔从新绘制图形
    private _preheight: number = 0;
    private _preangle: number = -1;
    private refreshGraphics(): void {
        if(this._preheight != this._hp_height) {
            this.hp_sp.graphics.clear();
            this.hp_sp.graphics.lineStyle(0);
            this.hp_sp.graphics.beginFill(0xffffff,0.5);
            this.hp_sp.graphics.drawRect(2,198 - this._hp_height,26,this._hp_height);
            this.hp_sp.graphics.endFill();

            this._preheight = this._hp_height;
        }

        if(this._default_hp_angle != this._preangle){
            this._circleEffect.onSetEffectAngle(this._default_hp_angle);
            this._preangle = this._default_hp_angle;
        }
    }
    
    //绘制图形
    private hp_sp: egret.Shape;
    private graphicsShape(): void {
        var bg_sp: egret.Shape = new egret.Shape();
        bg_sp.graphics.lineStyle(2,0xffffff,1);
        bg_sp.graphics.beginFill(0x000000,0.5);
        bg_sp.graphics.drawRect(0,0,30,200);
        bg_sp.graphics.endFill();
        this.addChild(bg_sp);
        bg_sp.x = this.stage.stageWidth / 2 - 15;
        bg_sp.y = this.stage.stageHeight / 2 - 200;

        this.hp_sp = new egret.Shape();
        this.hp_sp.graphics.lineStyle(0);
        this.hp_sp.graphics.beginFill(0xffffff,0.5);
        //this.hp_sp.graphics.drawRect(2,200 - 2 - 20,26,20);
        this.hp_sp.graphics.endFill();
        this.addChild(this.hp_sp);
        this.hp_sp.x = this.stage.stageWidth / 2 - 15;
        this.hp_sp.y = this.stage.stageHeight / 2 - 200;
    }
	
	/**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}

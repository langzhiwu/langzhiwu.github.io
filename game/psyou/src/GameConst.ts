/**
 *
 * @author 
 *
 */
class GameConst {
    private _viewLayer: egret.DisplayObjectContainer;
    private static _instance: GameConst;
    public constructor() {
	}
	
	public static _getInstance():GameConst{
	    if(null == GameConst._instance){
            GameConst._instance = new GameConst();
	    }
        return GameConst._instance;
	}
	
	public setLayer(layer:egret.DisplayObjectContainer){
        this._viewLayer = layer;
	}
	
	public getLayer():egret.DisplayObjectContainer{
        return this._viewLayer;
	}
}

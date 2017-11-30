/**
 *
 * @author 
 *
 */
class LoginView extends egret.DisplayObjectContainer{
	public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.initView,this);
	}
    private _untext: CommonTextInput;
    private _pstext: CommonTextInput;
	private initView():void{
        console.log('init...');  
    	var uname: egret.TextField = new egret.TextField();
        uname.size = 20;
        uname.textColor = 0xffffff;
        //uname.textAlign = "center";
        uname.width = 100;
        uname.height = 30;
        this.addChild(uname);
        uname.x = this.stage.stageWidth / 2 - 150;
        uname.y = this.stage.stageHeight / 2 - 50;
        uname.text = "用户名:";
        uname.verticalAlign = "middle";
        
        var upasd: egret.TextField = new egret.TextField();
        upasd.size = 20;
        upasd.textColor = 0xffffff;
        //upasd.textAlign = "center";
        upasd.width = 100;
        upasd.height = 30;
        this.addChild(upasd);
        upasd.x = this.stage.stageWidth / 2 - 150;
        upasd.y = this.stage.stageHeight / 2 - 20;
        upasd.text = "密 码:";
        upasd.verticalAlign = "middle";
        
        this._untext = new CommonTextInput();
        this.addChild(this._untext);
        this._untext.x = this.stage.stageWidth / 2 - 50;
        this._untext.y = this.stage.stageHeight / 2 - 50;
        
        this._pstext = new CommonTextInput();
        this.addChild(this._pstext);
        this._pstext.x = this.stage.stageWidth / 2 - 50;
        this._pstext.y = this.stage.stageHeight / 2 - 10;
        
        var loginBtn: CommonButton = new CommonButton();
        loginBtn.setText("登录");
        this.addChild(loginBtn);
        loginBtn.x = this.stage.stageWidth / 2 - 50;
        loginBtn.y = this.stage.stageHeight / 2 + 50;
        loginBtn.touchEnabled = true;

        loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLogin,this);
        
        var registerBtn: CommonButton = new CommonButton();
        registerBtn.setText("注册");
        this.addChild(registerBtn);
        registerBtn.x = this.stage.stageWidth / 2 + 50;
        registerBtn.y = this.stage.stageHeight / 2 + 50;
        registerBtn.touchEnabled = true;
        registerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onRegister,this);
	}
	
    private onLogin(evt: egret.TouchEvent): void {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        var url = "http://kxps.sinaapp.com/?m=Login&c=Index&a=index&username=" + this._untext.getText() + "&password=" + new md5().hex_md5(this._pstext.getText());
        request.open(url,egret.HttpMethod.GET);
        request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        request.send();
        request.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetIOError,this);
        request.addEventListener(egret.ProgressEvent.PROGRESS,this.onGetProgress,this);
    }
    
    private onGetComplete(event: egret.Event): void {
        var request = <egret.HttpRequest>event.currentTarget;
        var rinfo = JSON.parse(request.response);
        console.log(rinfo.result);
        if(rinfo.result == "fail") {
            var infoview: CommonInfoDialog = new CommonInfoDialog(rinfo.msg);
            this.stage.addChild(infoview);
            infoview.x = this.stage.stageWidth / 2 - infoview.width / 2;
            infoview.y = this.stage.stageHeight / 2 - infoview.height / 2;
        } else {
            var gameView: GameView = new GameView();
            this.stage.addChild(gameView);
            this.destory();
        }
    }
    private onGetIOError(event: egret.IOErrorEvent): void {
        console.log("get error : " + event);
    }
    private onGetProgress(event: egret.ProgressEvent): void {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }
	
	private onRegister(evt:egret.TouchEvent):void{
        var registerView: RegisterView = new RegisterView();
        this.stage.addChild(registerView);
        this.destory();
	}
	
	private destory():void{
        this.parent.removeChild(this);
	}
}

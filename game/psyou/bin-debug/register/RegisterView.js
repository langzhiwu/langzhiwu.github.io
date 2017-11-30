/**
 *
 * @author
 *
 */
var RegisterView = (function (_super) {
    __extends(RegisterView, _super);
    function RegisterView() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initView, this);
    }
    var d = __define,c=RegisterView;p=c.prototype;
    p.initView = function () {
        console.log('init...');
        var uname = new egret.TextField();
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
        var upasd = new egret.TextField();
        upasd.size = 20;
        upasd.textColor = 0xffffff;
        //upasd.textAlign = "center";
        upasd.width = 100;
        upasd.height = 30;
        this.addChild(upasd);
        upasd.x = this.stage.stageWidth / 2 - 150;
        upasd.y = this.stage.stageHeight / 2 - 20;
        upasd.text = "密码:";
        upasd.verticalAlign = "middle";
        this._untext = new CommonTextInput();
        this.addChild(this._untext);
        this._untext.x = this.stage.stageWidth / 2 - 50;
        this._untext.y = this.stage.stageHeight / 2 - 50;
        this._pstext = new CommonTextInput();
        this.addChild(this._pstext);
        this._pstext.x = this.stage.stageWidth / 2 - 50;
        this._pstext.y = this.stage.stageHeight / 2 - 10;
        var loginBtn = new CommonButton();
        loginBtn.setText("登录");
        this.addChild(loginBtn);
        loginBtn.x = this.stage.stageWidth / 2 - 50;
        loginBtn.y = this.stage.stageHeight / 2 + 50;
        loginBtn.touchEnabled = true;
        loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
        var registerBtn = new CommonButton();
        registerBtn.setText("注册");
        this.addChild(registerBtn);
        registerBtn.x = this.stage.stageWidth / 2 + 50;
        registerBtn.y = this.stage.stageHeight / 2 + 50;
        registerBtn.touchEnabled = true;
        registerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
    };
    p.onLogin = function (evt) {
        var loginView = new LoginView();
        this.stage.addChild(loginView);
        this.destory();
    };
    p.onRegister = function (evt) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        var url = "http://kxps.sinaapp.com/?m=Register&c=Index&a=index&username=" + this._untext.getText() + "&password=" + new md5().hex_md5(this._pstext.getText());
        request.open(url, egret.HttpMethod.GET);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send();
        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
    };
    p.onGetComplete = function (event) {
        var request = event.currentTarget;
        var rinfo = JSON.parse(request.response);
        if (rinfo.result == "fail") {
            var infoview = new CommonInfoDialog(rinfo.msg);
            this.stage.addChild(infoview);
            infoview.x = this.stage.stageWidth / 2 - infoview.width / 2;
            infoview.y = this.stage.stageHeight / 2 - infoview.height / 2;
        }
        else {
            var gameView = new GameView();
            this.stage.addChild(gameView);
            this.destory();
        }
    };
    p.onGetIOError = function (event) {
        console.log("get error : " + event);
    };
    p.onGetProgress = function (event) {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    p.destory = function () {
        this.parent.removeChild(this);
    };
    return RegisterView;
})(egret.DisplayObjectContainer);
egret.registerClass(RegisterView,"RegisterView");

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        //点击处理
        this._addheight = 0;
        this._addgap = 6;
        this._hp_height = 0;
        //根据时间间隔从新绘制图形
        this._preheight = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main;p=c.prototype;
    p.onAddToStage = function (event) {
        //this.stage.scaleMode = egret.StageScaleMode.NO_SCALE;
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.createGameScene = function () {
        //        var request = new egret.HttpRequest();
        //        request.responseType = egret.HttpResponseType.TEXT;
        //        request.open("http://127.0.0.1/thinkphp/index.php?username=aaaaaa&password=bbbbbb",egret.HttpMethod.GET);
        //        request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        //        request.send();
        //        request.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
        //        request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetIOError,this);
        //        request.addEventListener(egret.ProgressEvent.PROGRESS,this.onGetProgress,this);
        this._loginView = new LoginView();
        this.addChild(this._loginView);
        console.log("create...");
        return;
        var str = "23233dfa";
        var md5Str = new md5().hex_md5(str);
        var text2 = new egret.TextField();
        this.addChild(text2);
        text2.text = "md5后字符: " + md5Str;
        text2.x = 50;
        text2.y = 350;
        text2.size = 30;
        text2.width = 300;
        return;
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var click_btn = new egret.TextField();
        click_btn.textColor = 0xffffff;
        click_btn.textAlign = 'center';
        click_btn.text = 'click me';
        click_btn.size = 20;
        click_btn.x = stageW / 2 - click_btn.width / 2;
        click_btn.y = stageH / 2 + 10;
        click_btn.touchEnabled = true;
        click_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickTapHandler, this);
        this.addChild(click_btn);
        this.graphicsShape();
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
        return;
        var sky = this.createBitmapByName("bgImage");
        this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        var topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, stageH);
        topMask.graphics.endFill();
        topMask.width = stageW;
        topMask.height = stageH;
        this.addChild(topMask);
        var icon = this.createBitmapByName("egretIcon");
        this.addChild(icon);
        icon.scaleX = 0.55;
        icon.scaleY = 0.55;
        icon.anchorOffsetX = icon.width / 2;
        icon.anchorOffsetY = icon.height / 2;
        icon.x = stageW / 2;
        icon.y = stageH / 2 - 60;
        var colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello Egret";
        colorLabel.size = 20;
        colorLabel.x = stageW - colorLabel.width >> 1;
        colorLabel.y = (stageH - colorLabel.height >> 1) + 50;
        this.addChild(colorLabel);
        var textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = stageW;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.x = 0;
        textfield.y = stageH / 2 + 100;
        this.textfield = textfield;
        //根据name关键字，异步获取一个json配置文件，name属性请参考resources/resource.json配置文件的内容。
        // Get asynchronously a json configuration file according to name keyword. As for the property of name please refer to the configuration file of resources/resource.json.
        RES.getResAsync("description", this.startAnimation, this);
    };
    p.onGetComplete = function (event) {
        var request = event.currentTarget;
        console.log("get data : ", request.response);
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "GET response: \n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 50;
        responseLabel.y = 70;
    };
    p.onGetIOError = function (event) {
        console.log("get error : " + event);
    };
    p.onGetProgress = function (event) {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    p.onClickTapHandler = function (evt) {
        this._addheight = this._addgap;
    };
    //每一帧处理
    p.onEnterFrameHandler = function (evt) {
        if (this._addheight != 0) {
            this._hp_height += this._addheight;
            this._addheight = 0;
        }
        else {
            this._hp_height--;
        }
        if (this._hp_height > 196) {
            this._hp_height = 196;
        }
        if (this._hp_height < 0) {
            this._hp_height = 0;
        }
        this.refreshGraphics();
    };
    p.refreshGraphics = function () {
        if (this._preheight == this._hp_height) {
            return;
        }
        this.hp_sp.graphics.clear();
        this.hp_sp.graphics.lineStyle(0);
        this.hp_sp.graphics.beginFill(0xffffff, 0.5);
        this.hp_sp.graphics.drawRect(2, 198 - this._hp_height, 26, this._hp_height);
        this.hp_sp.graphics.endFill();
        this._preheight = this._hp_height;
    };
    p.graphicsShape = function () {
        var bg_sp = new egret.Shape();
        bg_sp.graphics.lineStyle(2, 0xffffff, 1);
        bg_sp.graphics.beginFill(0x000000, 0.5);
        bg_sp.graphics.drawRect(0, 0, 30, 200);
        bg_sp.graphics.endFill();
        this.addChild(bg_sp);
        bg_sp.x = this.stage.stageWidth / 2 - 15;
        bg_sp.y = this.stage.stageHeight / 2 - 200;
        this.hp_sp = new egret.Shape();
        this.hp_sp.graphics.lineStyle(0);
        this.hp_sp.graphics.beginFill(0xffffff, 0.5);
        //this.hp_sp.graphics.drawRect(2,200 - 2 - 20,26,20);
        this.hp_sp.graphics.endFill();
        this.addChild(this.hp_sp);
        this.hp_sp.x = this.stage.stageWidth / 2 - 15;
        this.hp_sp.y = this.stage.stageHeight / 2 - 200;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    p.startAnimation = function (result) {
        var self = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = [];
        for (var i = 0; i < result.length; i++) {
            textflowArr.push(parser.parser(result[i]));
        }
        var textfield = self.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var lineArr = textflowArr[count];
            self.changeDescription(textfield, lineArr);
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, self);
        };
        change();
    };
    /**
     * 切换描述内容
     * Switch to described content
     */
    p.changeDescription = function (textfield, textFlow) {
        textfield.textFlow = textFlow;
    };
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,"Main");

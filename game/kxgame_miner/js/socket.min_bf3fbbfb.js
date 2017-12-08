var __reflect=this&&this.__reflect||function(t,e,o){t.__class__=e,o?o.push(e):o=[e],t.__types__=t.__types__?o.concat(t.__types__):o},__extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),egret;!function(t){}(egret||(egret={}));var egret;!function(t){var e=function(e){function o(n,i){void 0===n&&(n=""),void 0===i&&(i=0);var s=e.call(this)||this;return s._writeMessage="",s._readMessage="",s._connected=!1,s._connecting=!1,s._isReadySend=!1,s._bytesWrite=!1,s._type=o.TYPE_STRING,s._connected=!1,s._writeMessage="",s._readMessage="",s.socket=new t.ISocket,s.socket.addCallBacks(s.onConnect,s.onClose,s.onSocketData,s.onError,s),s}return __extends(o,e),o.prototype.connect=function(t,e){this._connecting||this._connected||(this._connecting=!0,this.socket.connect(t,e))},o.prototype.connectByUrl=function(t){this._connecting||this._connected||(this._connecting=!0,this.socket.connectByUrl(t))},o.prototype.close=function(){this._connected&&this.socket.close()},o.prototype.onConnect=function(){this._connected=!0,this._connecting=!1,this.dispatchEventWith(t.Event.CONNECT)},o.prototype.onClose=function(){this._connected=!1,this.dispatchEventWith(t.Event.CLOSE)},o.prototype.onError=function(){this._connecting&&(this._connecting=!1),this.dispatchEventWith(t.IOErrorEvent.IO_ERROR)},o.prototype.onSocketData=function(e){"string"==typeof e?this._readMessage+=e:this._readByte._writeUint8Array(new Uint8Array(e)),t.ProgressEvent.dispatchProgressEvent(this,t.ProgressEvent.SOCKET_DATA)},o.prototype.flush=function(){return this._connected?(this._writeMessage&&(this.socket.send(this._writeMessage),this._writeMessage=""),this._bytesWrite&&(this.socket.send(this._writeByte.buffer),this._bytesWrite=!1,this._writeByte.clear()),void(this._isReadySend=!1)):void t.$warn(3101)},o.prototype.writeUTF=function(e){return this._connected?(this._type==o.TYPE_BINARY?(this._bytesWrite=!0,this._writeByte.writeUTF(e)):this._writeMessage+=e,void this.flush()):void t.$warn(3101)},o.prototype.readUTF=function(){var t;return this._type==o.TYPE_BINARY?(this._readByte.position=0,t=this._readByte.readUTF(),this._readByte.clear()):(t=this._readMessage,this._readMessage=""),t},o.prototype.writeBytes=function(e,o,n){return void 0===o&&(o=0),void 0===n&&(n=0),this._connected?this._writeByte?(this._bytesWrite=!0,this._writeByte.writeBytes(e,o,n),void this.flush()):void t.$warn(3102):void t.$warn(3101)},o.prototype.readBytes=function(e,o,n){return void 0===o&&(o=0),void 0===n&&(n=0),this._readByte?(this._readByte.position=0,this._readByte.readBytes(e,o,n),void this._readByte.clear()):void t.$warn(3102)},Object.defineProperty(o.prototype,"connected",{get:function(){return this._connected},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"type",{get:function(){return this._type},set:function(e){this._type=e,e!=o.TYPE_BINARY||this._writeByte||(this._readByte=new t.ByteArray,this._writeByte=new t.ByteArray)},enumerable:!0,configurable:!0}),o.TYPE_STRING="webSocketTypeString",o.TYPE_BINARY="webSocketTypeBinary",o}(t.EventDispatcher);t.WebSocket=e,__reflect(e.prototype,"egret.WebSocket")}(egret||(egret={}));var egret;!function(t){var e;!function(e){var o=function(){function t(){this.host="",this.port=0}return t.prototype.addCallBacks=function(t,e,o,n,i){this.onConnect=t,this.onClose=e,this.onSocketData=o,this.onError=n,this.thisObject=i},t.prototype.connect=function(t,e){this.host=t,this.port=e;var o="ws://"+this.host+":"+this.port;this.socket=new __global.egret_native.WebSocket(o),this._bindEvent()},t.prototype.connectByUrl=function(t){this.socket=new __global.egret_native.WebSocket(t),this._bindEvent()},t.prototype._bindEvent=function(){var t=this,e=this.socket;e.onOpen=function(){t.onConnect&&t.onConnect.call(t.thisObject)},e.onClose=function(){t.onClose&&t.onClose.call(t.thisObject)},e.onError=function(e){t.onError&&t.onError.call(t.thisObject)},e.onMessage=function(e){t.onSocketData&&t.onSocketData.call(t.thisObject,e)}},t.prototype.send=function(t){this.socket.send(t)},t.prototype.close=function(){this.socket.close()},t.prototype.disconnect=function(){this.socket.disconnect&&this.socket.disconnect()},t}();e.NativeSocket=o,__reflect(o.prototype,"egret.native.NativeSocket",["egret.ISocket"]),t.Capabilities.runtimeType==t.RuntimeType.NATIVE&&(t.ISocket=o)}(e=t["native"]||(t["native"]={}))}(egret||(egret={}));var egret;!function(t){var e;!function(e){var o=function(){function e(){this.host="",this.port=0,window.WebSocket||t.$error(3100)}return e.prototype.addCallBacks=function(t,e,o,n,i){this.onConnect=t,this.onClose=e,this.onSocketData=o,this.onError=n,this.thisObject=i},e.prototype.connect=function(t,e){this.host=t,this.port=e;var o="ws://"+this.host+":"+this.port;this.socket=new window.WebSocket(o),this.socket.binaryType="arraybuffer",this._bindEvent()},e.prototype.connectByUrl=function(t){this.socket=new window.WebSocket(t),this.socket.binaryType="arraybuffer",this._bindEvent()},e.prototype._bindEvent=function(){var t=this,e=this.socket;e.onopen=function(){t.onConnect&&t.onConnect.call(t.thisObject)},e.onclose=function(e){t.onClose&&t.onClose.call(t.thisObject)},e.onerror=function(e){t.onError&&t.onError.call(t.thisObject)},e.onmessage=function(e){t.onSocketData&&t.onSocketData.call(t.thisObject,e.data)}},e.prototype.send=function(t){this.socket.send(t)},e.prototype.close=function(){this.socket.close()},e.prototype.disconnect=function(){this.socket.disconnect&&this.socket.disconnect()},e}();e.HTML5WebSocket=o,__reflect(o.prototype,"egret.web.HTML5WebSocket",["egret.ISocket"]),t.Capabilities.runtimeType==t.RuntimeType.WEB&&(t.ISocket=o)}(e=t.web||(t.web={}))}(egret||(egret={}));
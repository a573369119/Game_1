/**
 * 加载管理器
 *
 * */
var LoadingManager = /** @class */ (function () {
    function LoadingManager() {
        /**资源加载UI */
        this.arr_LoadingUi = [
            { url: "res/atlas/loadingView.atlas" },
            { url: "res/atlas/comp.atlas" },
            { url: "unpackage/loadingBg.jpg" }
        ];
        /**资源预定义 (提前加载) 进度条界面*/
        this.arr_LoadingUrl = [
            { url: "res/atlas/publicAssets.atlas" },
            { url: "res/atlas/selectBox.atlas" },
            { url: "res/atlas/selectRound.atlas" },
            //大图加载
            { url: "unpackage/startGameBg.jpg" },
            { url: "unpackage/cutRope.png" },
        ];
        /**游戏界面 资源*/
        this.arr_GameViewUrl = [];
        this.callBackDic = new Laya.Dictionary();
    }
    //--------------第一次加载----------------
    /**加载加载资源UI */
    LoadingManager.prototype.loadLoadingUi = function (caller, callBack) {
        if (this.callBackDic.get(caller) != callBack) {
            this.callBackDic.set(caller, callBack);
        }
        console.log(this.callBackDic.get(caller));
        Laya.loader.load(this.arr_LoadingUi, Laya.Handler.create(this, this.onLoadingUi, [caller]));
    };
    /**资源加载完成 */
    LoadingManager.prototype.onLoadingUi = function (caller) {
        ViewManager.ins_.LoadingView(GameData.LOADING_VIEW);
        this.progressViewLoading(caller);
    };
    ///-------------预加载---------------------start
    /**资源预加载 进度条页面 */
    LoadingManager.prototype.progressViewLoading = function (caller) {
        Laya.loader.load(this.arr_LoadingUrl, Laya.Handler.create(this, this.onLoad, [caller]), Laya.Handler.create(this, this.onProgress));
    };
    /**资源预加载中 */
    LoadingManager.prototype.onProgress = function (progress) {
        if (ViewManager.ins_.getView(GameData.LOADING_VIEW)) {
            var view = ViewManager.ins_.getView(GameData.LOADING_VIEW);
            view.lab_Progress.text = "加载中（" + Math.floor(progress) + "%）";
            view.img_Progress.width = 500 * progress;
        }
    };
    /**资源预加载完成 */
    LoadingManager.prototype.onLoad = function (caller) {
        ViewManager.ins_.getView(GameData.LOADING_VIEW).lab_Progress.text = "加载完成";
        ViewManager.ins_.getView(GameData.LOADING_VIEW).img_Progress.width = 500;
        if (caller && this.callBackDic.get(caller)) {
            console.log("回调");
            this.callBackDic.get(caller).call(caller);
        }
        else {
            console.log("回调失败");
        }
    };
    ///-------------预加载---------------------end
    ///-------------通用加载------------------------
    /**通用 资源加载 */
    LoadingManager.prototype.publicLoadRes = function (assate, caller, callBack) {
        if (this.callBackDic.get(caller) != callBack) {
            this.callBackDic.set(caller, callBack);
        }
        Laya.loader.load(assate, Laya.Handler.create(this, this.loadOver, [caller]), Laya.Handler.create(this, this.loadProgress));
    };
    /**加载中 */
    LoadingManager.prototype.loadProgress = function () {
    };
    /**加载完成 */
    LoadingManager.prototype.loadOver = function (caller) {
        if (caller && this.callBackDic.get(caller)) {
            this.callBackDic.get(caller).call(caller);
        }
        else {
            console.log("回调失败");
        }
    };
    LoadingManager.ins_ = new LoadingManager;
    return LoadingManager;
}());
//# sourceMappingURL=LoadingManager.js.map
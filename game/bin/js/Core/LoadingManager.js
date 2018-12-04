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
            { url: "res/atlas/select.atlas" },
            { url: "res/atlas/gameView.atlas" },
            { url: "res/atlas/gameView/gameBg.atlas" },
            { url: "res/atlas/gameView/gameDoor.atlas" },
            { url: "res/atlas/gameView/gamePos.atlas" },
            { url: "res/atlas/gameView/gameBtn.atlas" },
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
        Laya.loader.load(this.arr_LoadingUi, Laya.Handler.create(this, this.onLoadingUi, [caller]));
        this.loadConfig(); //配置文件加载    
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
    ////------------------------配置文件加载-----------------------------
    LoadingManager.prototype.loadConfig = function () {
        var arr = [
            { url: "config/selectConfig.json" },
            { url: "config/playerDataTest.json" },
            { url: "config/mapConfig.json" }
        ];
        Laya.loader.load(arr, Laya.Handler.create(this, this.configLoadOver), null, Laya.Loader.JSON);
    };
    LoadingManager.prototype.configLoadOver = function () {
        //数据保存
        var object = Laya.loader.getRes("config/selectConfig.json");
        this.keepLimit(object.limitList);
        var userData = Laya.loader.getRes("config/playerDataTest.json");
        this.keepUserData(userData);
        //--------------------------
        Laya.loader.clearRes("config/selectConfig.json");
        Laya.loader.clearRes("config/playerDataTest.json");
    };
    /**保存 关卡限制信息*/
    LoadingManager.prototype.keepLimit = function (object) {
        for (var i = 0; i < object.length; i++) {
            PlayerData.ins.arr_LimitSelect.push(object[i].selectLimit);
            PlayerData.ins.boxLimtDic.set(i, object[i].boxLimit);
        }
    };
    /**保存用户信息 */
    LoadingManager.prototype.keepUserData = function (userData) {
        var playerData = PlayerData.ins;
        playerData.starNum = userData.playerStars;
        for (var i = 0; i < userData.playerCard.length; i++) {
            playerData.round_Star.set(userData.playerCard[i].card, userData.playerCard[i].stars);
        }
        console.log(playerData.round_Star);
    };
    //-------------------------获取配置--------------------
    /**获取地图配置 */
    LoadingManager.prototype.getMapConfig = function (mapId) {
        var object = Laya.loader.getRes("config/mapConfig.json");
        var objectMapConfig;
        var mapConfig;
        for (var i = 0; i < object.length; i++) {
            if (mapId == object[i].mapId) {
                objectMapConfig = object[i];
                mapConfig = new MapConfig(objectMapConfig);
                return mapConfig;
            }
        }
        console.log("没有此配置 mapId = " + mapId);
        Laya.loader.clearRes("config/mapConfig.json");
        return null;
    };
    LoadingManager.ins_ = new LoadingManager;
    return LoadingManager;
}());
//# sourceMappingURL=LoadingManager.js.map
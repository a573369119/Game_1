/**
 * 视图管理管理
 */
var ViewManager = /** @class */ (function () {
    function ViewManager() {
        this.viewsDic = new Laya.Dictionary();
    }
    /**加载页面 GameData中的View定义,回调 caller  callBack , url资源*/
    ViewManager.prototype.LoadingView = function (viewUi, caller, callBack, url) {
        switch (viewUi) {
            case GameData.LOADING_VIEW:
                this.viewsDic.set(GameData.LOADING_VIEW, new ui.LoadingUI());
                break;
            case GameData.START_VIEW:
                this.viewsDic.set(GameData.START_VIEW, new ui.StartGameUI());
                break;
            case GameData.SELECT_VIEW:
                this.viewsDic.set(GameData.SELECT_VIEW, new ui.SelectUI());
                break;
            case GameData.SELECT_BOX_VIEW:
                this.viewsDic.set(GameData.SELECT_BOX_VIEW, new ui.SelectBox.SelectBoxUI());
                break;
            case GameData.SELECT_ROUND_VIEW:
                this.viewsDic.set(GameData.SELECT_ROUND_VIEW, new ui.SelectRound.SelectRoundUI());
                break;
            case GameData.GAME_VIEW:
                this.viewsDic.set(GameData.GAME_VIEW, new ui.GameView.GameBackgroundUI());
                break;
            case GameData.OPEN_VIEW:
                this.viewsDic.set(GameData.OPEN_VIEW, new ui.GameView.GameViewDoorUI()); //包含计分界面
                break;
            default:
                console.log('没有该界面定义 - ViewManager');
                break;
        }
        this.addToLayer(this.viewsDic.get(viewUi), caller, callBack, url);
        this.currentView = viewUi;
    };
    /**资源处理 */
    ViewManager.prototype.addToLayer = function (ui, caller, callBack, url) {
        if (url) {
            LoadingManager.ins_.publicLoadRes(url, caller, callBack);
        }
        else {
            this.addToStage(ui, caller, callBack);
        }
    };
    /**加入画布 */
    ViewManager.prototype.addToStage = function (ui, caller, callBack) {
        //直接假如层级
        if (this.currentView === undefined) {
            Laya.stage.addChild(ui);
        }
        else {
            // this.viewsDic.get(this.currentView).addChild(ui);
            Laya.stage.addChild(ui);
        }
        // if(this.viewsDic.get(this.currentView) && this.currentView<=1)
        // {
        //     this.viewsDic.get(this.currentView).visible = false;
        // }
        if (caller && callBack)
            callBack.call(caller);
    };
    ///////////////////////-------------------外部方法----------------------
    /**返回页面  mediator:指定返回的调节器  ui:指定返回Ui*/
    ViewManager.prototype.returnView = function (mediator, ui) {
        while (GameManager.ins_.getMediator(++mediator)) {
            GameManager.ins_.getMediator(mediator).dispose();
        }
        this.currentView = ui;
        while (this.viewsDic.get(++ui)) {
            console.log("删除界面 :" + ui); //需要测试
            this.viewsDic.remove(ui);
        }
        /**需要测试 */
        // this.viewsDic.get(this.currentView).destroyChildren();
    };
    /**获取视图 */
    ViewManager.prototype.getView = function (ui) {
        if (this.viewsDic.get(ui))
            return this.viewsDic.get(ui);
        else
            return false;
    };
    /**销毁视图 */
    ViewManager.prototype.destroView = function (ui, url) {
        var view = this.viewsDic.get(ui);
        if (view) {
            view.removeSelf();
            this.viewsDic.remove(ui);
            this.currentView -= 1;
            //console.log(this.viewsDic);
        }
        else {
            console.log("未找到该视图 - viewManager");
        }
        if (url) {
            if (url) {
                url.array.forEach(function (element) {
                    Laya.loader.clearRes(element.url);
                });
            }
            else {
                Laya.loader.clearRes(url);
            }
        }
        var lastView = this.viewsDic.get(ui - 1);
        // if(lastView)
        // {
        //     lastView.visible = true;
        // }
    };
    ViewManager.ins_ = new ViewManager();
    return ViewManager;
}());
//# sourceMappingURL=ViewManager.js.map
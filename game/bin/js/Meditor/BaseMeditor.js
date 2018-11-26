/**
 *  基础处理器
 */
var BaseMeditor = /** @class */ (function () {
    /**
     * mediator : GameData定义的的名字 例：调用GameData.START_GAME_MEIDIATOR（必填）
     * view : GameData定义的名字 例: 调用GameData.START_GAME_VIEW（选填）
     * assate : 是否有资源图需要加载，（选填）
     */
    function BaseMeditor(mediatorName, view, assate) {
        if (mediatorName) {
            this.mediator = mediatorName;
        }
        else {
            console.log("出错 ，没有传入 mediatorName");
            return;
        }
        if (view) {
            ViewManager.ins_.LoadingView(view, this, this.init, assate);
            this.view = ViewManager.ins_.getView(view);
        }
        else {
            this.init();
        }
    }
    /**数据初始化*/
    BaseMeditor.prototype.init = function () {
        this.addEvents();
    };
    /**添加事件 */
    BaseMeditor.prototype.addEvents = function () {
        this.dispose();
    };
    /**移除事件 */
    BaseMeditor.prototype.removeEvents = function () {
    };
    /**离开 关闭 销毁*/
    BaseMeditor.prototype.dispose = function () {
        GameManager.ins_.destroyMediator(this.mediator);
        this.removeEvents();
        ViewManager.ins_.destroView(this.view, this.arr_url);
        this.view = null;
    };
    return BaseMeditor;
}());
//# sourceMappingURL=BaseMeditor.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 游戏主逻辑
 */
var GameMediator = /** @class */ (function (_super) {
    __extends(GameMediator, _super);
    /**用 this.view 来调用 UI视图 */
    function GameMediator(mediatorName, view, assate) {
        return _super.call(this, mediatorName, view, assate) || this;
    }
    /**初始化 */
    GameMediator.prototype.init = function () {
        _super.prototype.init.call(this);
        this.doorOpen = new ui.GameView.GameViewDoorUI();
        this.view.addChild(this.doorOpen);
        this.doorOpen.ani1.play(0, false);
    };
    /**添加事件 */
    GameMediator.prototype.addEvents = function () {
        this.view.btn_Super.on(Laya.Event.CLICK, this, this.onUserSuper);
        this.view.btn_Teach.on(Laya.Event.CLICK, this, this.onTeachYou);
        this.view.btn_ReGame.on(Laya.Event.CLICK, this, this.onReGame);
        this.view.btn_Menu.on(Laya.Event.CLICK, this, this.onMenu);
    };
    /**移除事件 */
    GameMediator.prototype.removeEvents = function () {
        this.view.btn_Super.off(Laya.Event.CLICK, this, this.onUserSuper);
        this.view.btn_Teach.off(Laya.Event.CLICK, this, this.onTeachYou);
        this.view.btn_ReGame.off(Laya.Event.CLICK, this, this.onReGame);
        this.view.btn_Menu.off(Laya.Event.CLICK, this, this.onMenu);
    };
    /**事件 ！使用超能力*/
    GameMediator.prototype.onUserSuper = function () {
    };
    /**事件 ！使用引导 */
    GameMediator.prototype.onTeachYou = function () {
    };
    /**事件 重玩 */
    GameMediator.prototype.onReGame = function () {
    };
    /**事件 菜单 */
    GameMediator.prototype.onMenu = function () {
    };
    /**退出游戏界面 */
    GameMediator.prototype.exitGame = function () {
        this.dispose();
    };
    return GameMediator;
}(BaseMeditor));
//# sourceMappingURL=GameMediator.js.map
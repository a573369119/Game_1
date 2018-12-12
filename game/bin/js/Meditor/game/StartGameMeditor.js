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
 * 开始游戏界面
 */
var StartGameMeditor = /** @class */ (function (_super) {
    __extends(StartGameMeditor, _super);
    /**   this.view  调用 本UI 视图*/
    function StartGameMeditor(mediatorName, view, assate) {
        return _super.call(this, mediatorName, view, assate) || this;
    }
    /**初始化 */
    StartGameMeditor.prototype.init = function () {
        _super.prototype.init.call(this);
        this.runRound();
    };
    /**事件绑定 */
    StartGameMeditor.prototype.addEvents = function () {
        this.view.btn_StartGame.on(Laya.Event.CLICK, this, this.onGameStart);
        this.view.btn_Imgs.on(Laya.Event.CLICK, this, this.onImgs);
        this.view.btn_About.on(Laya.Event.CLICK, this, this.onAbout);
    };
    /**事件移除 */
    StartGameMeditor.prototype.removeEvents = function () {
        this.view.btn_StartGame.off(Laya.Event.CLICK, this, this.onGameStart);
        this.view.btn_Imgs.off(Laya.Event.CLICK, this, this.onImgs);
        this.view.btn_About.off(Laya.Event.CLICK, this, this.onAbout);
        Laya.timer.clear(this, this.roundLamp);
    };
    /**按钮事件 游戏开始 */
    StartGameMeditor.prototype.onGameStart = function () {
        //进入选择季度
        GameManager.ins_.runMediator(GameData.SELECT_MEDIATOR);
    };
    /**按钮事件 点击图集 */
    StartGameMeditor.prototype.onImgs = function () {
    };
    /**按钮事件 点击关于 */
    StartGameMeditor.prototype.onAbout = function () {
    };
    /**旋转 */
    StartGameMeditor.prototype.roundLamp = function () {
        this.view.round_Lamp.rotation += 0.2;
    };
    /**停用旋转 */
    StartGameMeditor.prototype.stopRound = function () {
        Laya.timer.clear(this, this.roundLamp);
    };
    /**启用旋转 */
    StartGameMeditor.prototype.runRound = function () {
        Laya.timer.loop(50, this, this.roundLamp);
    };
    return StartGameMeditor;
}(BaseMeditor));
//# sourceMappingURL=StartGameMeditor.js.map
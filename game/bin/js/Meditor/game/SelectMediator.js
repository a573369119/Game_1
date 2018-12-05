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
 * 季度选择 调度器
 */
var SelectMeditor = /** @class */ (function (_super) {
    __extends(SelectMeditor, _super);
    /**用 this.view 来调用 UI视图 */
    function SelectMeditor(mediatorName, view, assate) {
        return _super.call(this, mediatorName, view, assate) || this;
    }
    /**初始化 */
    SelectMeditor.prototype.init = function () {
        _super.prototype.init.call(this);
        Laya.timer.loop(50, this, this.roundLamp);
    };
    /**事件绑定 */
    SelectMeditor.prototype.addEvents = function () {
        this.view.btn_First.on(Laya.Event.CLICK, this, this.onSelectBoxStart, [0]);
        this.view.btn_Second.on(Laya.Event.CLICK, this, this.onSelectBoxStart, [1]);
        this.view.btn_Third.on(Laya.Event.CLICK, this, this.onSelectBoxStart, [2]);
        this.view.btn_First_.on(Laya.Event.CLICK, this, this.onSelectBoxStart, [0]);
        this.view.btn_Second_.on(Laya.Event.CLICK, this, this.onSelectBoxStart, [1]);
        this.view.btn_Third_.on(Laya.Event.CLICK, this, this.onSelectBoxStart, [2]);
        this.view.btn_Exit.on(Laya.Event.CLICK, this, this.onExit);
    };
    /**事件移除 */
    SelectMeditor.prototype.removeEvents = function () {
        this.view.btn_First.off(Laya.Event.CLICK, this, this.onSelectBoxStart);
        this.view.btn_Second.off(Laya.Event.CLICK, this, this.onSelectBoxStart);
        this.view.btn_Third.off(Laya.Event.CLICK, this, this.onSelectBoxStart);
        this.view.btn_First_.off(Laya.Event.CLICK, this, this.onSelectBoxStart);
        this.view.btn_Second_.off(Laya.Event.CLICK, this, this.onSelectBoxStart);
        this.view.btn_Third_.off(Laya.Event.CLICK, this, this.onSelectBoxStart);
        this.view.btn_Exit.off(Laya.Event.CLICK, this, this.onExit);
        Laya.timer.clear(this, this.roundLamp);
    };
    /**按钮事件 进入季度关卡 */
    SelectMeditor.prototype.onSelectBoxStart = function (index) {
        console.log("进入第：" + index + "季");
        //进入选择关卡
        GameManager.ins_.runMediator(GameData.SELECT_BOX_MEDIATOR);
        GameManager.ins_.getMediator(GameData.SELECT_BOX_MEDIATOR).setSelectQuarter(index);
    };
    /**按钮事件 退出 */
    SelectMeditor.prototype.onExit = function () {
        this.dispose();
        GameManager.ins_.getMediator(GameData.START_GAME_MEDIATOR).runRound();
    };
    /**旋转 */
    SelectMeditor.prototype.roundLamp = function () {
        this.view.round_Lamp.rotation += 0.2;
    };
    /**停用旋转 */
    SelectMeditor.prototype.stopRound = function () {
        Laya.timer.clear(this, this.roundLamp);
    };
    /**启用旋转 */
    SelectMeditor.prototype.runRound = function () {
        Laya.timer.loop(50, this, this.roundLamp);
    };
    return SelectMeditor;
}(BaseMeditor));
//# sourceMappingURL=SelectMediator.js.map
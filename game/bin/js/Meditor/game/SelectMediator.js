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
    };
    /**事件绑定 */
    SelectMeditor.prototype.addEvents = function () {
        this.view.btn_First.on(Laya.Event.CLICK, this, this.onSelectBoxStart);
    };
    /**事件移除 */
    SelectMeditor.prototype.removeEvents = function () {
        this.view.btn_First.off(Laya.Event.CLICK, this, this.onSelectBoxStart);
    };
    /**按钮事件 进入季度关卡 */
    SelectMeditor.prototype.onSelectBoxStart = function () {
        //进入选择关卡
        GameManager.ins_.runMediator(GameData.SELECT_BOX_MEDIATOR);
    };
    return SelectMeditor;
}(BaseMeditor));
//# sourceMappingURL=SelectMediator.js.map
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
    };
    /**事件移除 */
    SelectMeditor.prototype.removeEvents = function () {
    };
    return SelectMeditor;
}(BaseMeditor));
//# sourceMappingURL=SelectMediator.js.map
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
 * 游戏界面
 */
var StartGameMeditor = /** @class */ (function (_super) {
    __extends(StartGameMeditor, _super);
    /**this.view  调用 本UI 视图*/
    function StartGameMeditor(mediatorName, view, assate) {
        return _super.call(this, mediatorName, view, assate) || this;
    }
    /**初始化 */
    StartGameMeditor.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    /**事件绑定 */
    StartGameMeditor.prototype.addEvents = function () {
        _super.prototype.addEvents.call(this);
    };
    /**事件移除 */
    StartGameMeditor.prototype.removeEvents = function () {
    };
    return StartGameMeditor;
}(BaseMeditor));
//# sourceMappingURL=StartGameMeditor.js.map
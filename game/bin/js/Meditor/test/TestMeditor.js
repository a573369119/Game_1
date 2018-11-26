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
var TestMeditor = /** @class */ (function (_super) {
    __extends(TestMeditor, _super);
    function TestMeditor(mediatorName, view, assate) {
        return _super.call(this, mediatorName, view, assate) || this;
    }
    /**初始化 */
    TestMeditor.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    /**事件绑定 */
    TestMeditor.prototype.addEvents = function () {
    };
    /**事件移除 */
    TestMeditor.prototype.removeEvents = function () {
    };
    return TestMeditor;
}(BaseMeditor));
//# sourceMappingURL=TestMeditor.js.map
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
 * 盒子选择 调度器
 */
var SelectBoxMeditor = /** @class */ (function (_super) {
    __extends(SelectBoxMeditor, _super);
    /**  */
    /**用 this.view 来调用 UI视图 */
    function SelectBoxMeditor(mediatorName, view, assate) {
        return _super.call(this, mediatorName, view, assate) || this;
    }
    /**初始化 */
    SelectBoxMeditor.prototype.init = function () {
        _super.prototype.init.call(this);
        this.arr_Box = new Array();
        this.view.panel_ShowBox.hScrollBar.visible = false;
    };
    /**事件绑定 */
    SelectBoxMeditor.prototype.addEvents = function () {
        this.view.btn_Exit.on(Laya.Event.CLICK, this, this.onExit);
        this.view.panel_ShowBox.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDow);
    };
    /**事件移除 */
    SelectBoxMeditor.prototype.removeEvents = function () {
        this.view.btn_Exit.off(Laya.Event.CLICK, this, this.onExit);
    };
    /**设置季度 - Meditor 起始点*/
    SelectBoxMeditor.prototype.setSelectQuarter = function (index) {
        this.setSelectQuarter = index; //现在默认第一季度
        this.createBox();
        this.addBoxEvent();
    };
    /**事件 退出 */
    SelectBoxMeditor.prototype.onExit = function () {
        this.dispose();
    };
    //盒子 102,29
    /**创建盒子UI */
    SelectBoxMeditor.prototype.createBox = function () {
        var box;
        this.boxCount = 5; //测试
        for (var i = 0; i < this.boxCount; i++) {
            box = new Box(this.view);
            box.boxUI.x += (box.boxUI.width + 50) * i;
            this.arr_Box.push(box);
            if (i == this.boxCount - 1) {
                box.boxUI.width += 150;
            }
        }
    };
    /**事件绑定 给盒子 */
    SelectBoxMeditor.prototype.addBoxEvent = function () {
        for (var i = 0; i < this.arr_Box.length; i++) {
            this.arr_Box[i].boxUI.img_box.on(Laya.Event.CLICK, this, this.clickBox, [i]);
        }
    };
    /**事件 点击盒子 */
    SelectBoxMeditor.prototype.clickBox = function (index) {
        console.log("点击盒子" + index);
    };
    /**事件 面板被点下   2250*/
    SelectBoxMeditor.prototype.onMouseDow = function () {
        console.log(this.arr_Box[0].boxUI.img_box.x);
        console.log(this.view.panel_ShowBox.hScrollBar.value);
    };
    return SelectBoxMeditor;
}(BaseMeditor));
//# sourceMappingURL=SelectBoxMeditor.js.map
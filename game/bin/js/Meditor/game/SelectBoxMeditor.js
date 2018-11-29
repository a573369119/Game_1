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
    /**用 this.view 来调用 UI视图 */
    function SelectBoxMeditor(mediatorName, view, assate) {
        return _super.call(this, mediatorName, view, assate) || this;
    }
    /**初始化 */
    SelectBoxMeditor.prototype.init = function () {
        _super.prototype.init.call(this);
        this.arr_Box = new Array();
        this.arr_Point = new Array();
        this.posX = 250;
        this.scrollBarSetting();
    };
    /**事件绑定 */
    SelectBoxMeditor.prototype.addEvents = function () {
        this.view.btn_Exit.on(Laya.Event.CLICK, this, this.onExit);
        this.view.panel_ShowBox.hScrollBar.changeHandler = new Laya.Handler(this, this.scrollChange);
        this.view.panel_ShowBox.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDow);
        this.view.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
    };
    /**事件移除 */
    SelectBoxMeditor.prototype.removeEvents = function () {
        this.view.btn_Exit.off(Laya.Event.CLICK, this, this.onExit);
        this.view.panel_ShowBox.hScrollBar.changeHandler = null;
        this.view.panel_ShowBox.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDow);
        this.view.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
    };
    /**设置季度 - Meditor 起始点*/
    SelectBoxMeditor.prototype.setSelectQuarter = function (index) {
        this.setSelectQuarter = index; //现在默认第一季度
        this.moster = this.view.moster;
        this.moster.removeSelf();
        this.createBox();
        this.addBoxEvent();
    };
    /**事件 退出 */
    SelectBoxMeditor.prototype.onExit = function () {
        this.dispose();
    };
    //盒子 102,29   50 = 200
    /**创建盒子UI */
    SelectBoxMeditor.prototype.createBox = function () {
        var box;
        var img_Point;
        this.boxCount = 5; //测试
        for (var i = 0; i < this.boxCount; i++) {
            //
            box = new Box(this.view);
            img_Point = new Laya.Image();
            img_Point.skin = "selectBox/point1.png";
            img_Point.x += 70 * i;
            this.view.sprite_SelectBox.addChild(img_Point);
            box.boxUI.x += (box.boxUI.width + 50) * i;
            this.arr_Point.push(img_Point);
            this.arr_Box.push(box);
            if (i == this.boxCount - 1) {
                box.boxUI.width += 125;
            }
        }
        this.currentPoint = this.arr_Point[0];
        this.currentPoint.scale(0.5, 0.5);
        this.arr_Point[0].skin = "selectBox/point.png";
        this.view.img_SelectBox.x = this.currentPoint.x - 5;
    };
    /**事件绑定 给盒子 */
    SelectBoxMeditor.prototype.addBoxEvent = function () {
        for (var i = 0; i < this.arr_Box.length; i++) {
            this.arr_Box[i].boxUI.img_box.on(Laya.Event.CLICK, this, this.clickBox, [i]);
        }
    };
    /**事件 点击盒子 */
    SelectBoxMeditor.prototype.clickBox = function (index) {
        // console.log("点击盒子" + index);
    };
    /**事件 面板被点下   2250*/
    SelectBoxMeditor.prototype.onMouseDow = function () {
    };
    /**时间 鼠标抬起 */
    SelectBoxMeditor.prototype.onMouseUp = function () {
        var value = this.view.panel_ShowBox.hScrollBar.value;
        for (var i = 0; i < this.arr_Box.length; i++) {
            if (i == 0 && value < 275) {
                Laya.Tween.to(this.view.panel_ShowBox.hScrollBar, { value: 0 }, 100);
            }
            else if (value >= 275 + 550 * (i - 1) && value < 275 + 550 * i) {
                Laya.Tween.to(this.view.panel_ShowBox.hScrollBar, { value: (550 * i - 20) }, 100);
            }
        }
    };
    /** */
    /**面板滚动*/
    SelectBoxMeditor.prototype.scrollChange = function (value) {
        var box;
        for (var i = 0; i < this.arr_Box.length; i++) {
            if (value <= 130) {
                this.arr_Box[0].boxUI.sprite_BoxParent.addChild(this.moster);
                this.moster.x = 123;
                this.moster.y = 0;
                this.mosterMove(value, i);
                break;
            }
            else if (i != 0 && value <= (i * (550) + 100) && value >= ((i - 1) * 550 + 160 + this.posX)) {
                this.arr_Box[i].boxUI.sprite_BoxParent.addChild(this.moster);
                this.moster.x = 0;
                this.moster.y = 0;
                // console.log("变化"  +  i);
                this.mosterMove(value, i, (i - 1) * 550 + 100 + this.posX);
                break;
            }
            else {
                this.moster.removeSelf();
            }
        }
    };
    /**怪物移动 */
    SelectBoxMeditor.prototype.mosterMove = function (value, i, mix) {
        if (i == 0) {
            this.moster.x = value + 123;
        }
        else {
            this.moster.x = value - mix - 60;
        }
    };
    /**鼠标的左右判断 */
    SelectBoxMeditor.prototype.mouseJudge = function (value) {
        if (this.sliderKeep - value >= 0) {
            this.sliderKeep = value; //右
            return 1;
        }
        else {
            this.sliderKeep = value; //左         
            return -1;
        }
    };
    /**scrollBar 设置 */
    SelectBoxMeditor.prototype.scrollBarSetting = function () {
        this.view.panel_ShowBox.hScrollBar.visible = false;
        this.view.panel_ShowBox.hScrollBar.elasticDistance = 0;
        this.view.panel_ShowBox.hScrollBar.rollRatio = 0;
    };
    return SelectBoxMeditor;
}(BaseMeditor));
//# sourceMappingURL=SelectBoxMeditor.js.map
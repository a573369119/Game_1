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
        Laya.timer.loop(50, this, this.roundLamp);
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
        Laya.timer.clear(this, this.roundLamp);
        this.remBoxEvent();
    };
    /**设置季度 - Meditor 起始点*/
    SelectBoxMeditor.prototype.setSelectQuarter = function (index) {
        this.selectQuarter = index; //现在默认第一季度
        this.moster = this.view.moster;
        this.moster.removeSelf();
        this.createBox();
        this.addBoxEvent();
    };
    /**事件 退出 */
    SelectBoxMeditor.prototype.onExit = function () {
        this.dispose();
        GameManager.ins_.getMediator(GameData.SELECT_MEDIATOR).runRound();
    };
    //盒子 102,29   50 = 200
    /**创建盒子UI */
    SelectBoxMeditor.prototype.createBox = function () {
        var box;
        var img_Point;
        this.boxCount = 5; //测试
        for (var i = 0; i < this.boxCount; i++) {
            box = new Box(this.view, this.selectQuarter, i);
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
        this.setCurrentPoint(0);
        var lastBox = this.arr_Box[this.arr_Box.length - 1];
        var lastPoint = this.arr_Point[this.arr_Point.length - 1];
        this.scale = (lastPoint.x + lastPoint.width) / (lastBox.initX + lastBox.boxUI.x + lastBox.boxUI.width);
    };
    /**事件绑定 给盒子 */
    SelectBoxMeditor.prototype.addBoxEvent = function () {
        for (var i = 0; i < this.arr_Box.length; i++) {
            this.arr_Box[i].boxUI.img_box.on(Laya.Event.CLICK, this, this.clickBox, [i]);
        }
    };
    /**事件移除 盒子 */
    SelectBoxMeditor.prototype.remBoxEvent = function () {
        for (var i = 0; i < this.arr_Box.length; i++) {
            this.arr_Box[i].boxUI.img_box.off(Laya.Event.CLICK, this, this.clickBox);
        }
    };
    /**事件 点击盒子 */
    SelectBoxMeditor.prototype.clickBox = function (index) {
        console.log("进入盒子" + index);
        GameManager.ins_.runMediator(GameData.SELECT_ROUND_MEDIATOR);
        GameManager.ins_.getMediator(GameData.SELECT_ROUND_MEDIATOR).setRound(this.selectQuarter, index);
    };
    /**事件 面板被点下   2250*/
    SelectBoxMeditor.prototype.onMouseDow = function () {
    };
    /**时间 鼠标抬起 */
    SelectBoxMeditor.prototype.onMouseUp = function () {
        var value = this.view.panel_ShowBox.hScrollBar.value;
        var i = this.mouseJudge(value);
        if (i == 0) {
            Laya.Tween.to(this.view.panel_ShowBox.hScrollBar, { value: 0 }, 100);
        }
        else {
            Laya.Tween.to(this.view.panel_ShowBox.hScrollBar, { value: (550 * i - 20) }, 100);
        }
    };
    /**当前选择点 */
    SelectBoxMeditor.prototype.setCurrentPoint = function (value) {
        var i = this.mouseJudge(value);
        if (this.currentPoint != this.arr_Point[i]) {
            if (this.currentPoint == null) {
                this.currentPoint = this.arr_Point[0];
            }
            else {
                this.currentPoint.skin = "selectBox/point1.png";
                this.currentPoint = this.arr_Point[i];
            }
            this.currentPoint.skin = "selectBox/point.png";
            this.view.img_SelectBox.zOrder = 10;
        }
        this.listPoint();
    };
    /**点点排版 */
    SelectBoxMeditor.prototype.listPoint = function () {
        for (var i = 0; i < this.arr_Point.length; i++) {
            this.arr_Point[i].y = 0;
            this.arr_Point[i].x = 0;
            this.arr_Point[i].x += 70 * i;
        }
        this.currentPoint.y = -15;
        this.currentPoint.x -= 10;
    };
    /**面板滚动*/
    SelectBoxMeditor.prototype.scrollChange = function (value) {
        var box;
        this.view.img_SelectBox.x = value * (this.scale + 0.0289) - 10; //0.289距离宽就变大，距离低就变小
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
        this.setCurrentPoint(value);
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
    /**判断在哪个店 */
    SelectBoxMeditor.prototype.mouseJudge = function (value) {
        for (var i = 0; i < this.arr_Box.length; i++) {
            if (i == 0 && value < 275) {
                return 0;
            }
            else if (value >= 275 + 550 * (i - 1) && value < 275 + 550 * i) {
                return i;
            }
        }
    };
    /**scrollBar 设置 */
    SelectBoxMeditor.prototype.scrollBarSetting = function () {
        this.view.panel_ShowBox.hScrollBar.visible = false;
        this.view.panel_ShowBox.hScrollBar.elasticDistance = 0;
        this.view.panel_ShowBox.hScrollBar.rollRatio = 0;
    };
    /**旋转 */
    SelectBoxMeditor.prototype.roundLamp = function () {
        this.view.round_Lamp.rotation += 0.2;
    };
    /**停用旋转 */
    SelectBoxMeditor.prototype.stopRound = function () {
        Laya.timer.clear(this, this.roundLamp);
    };
    /**启用旋转 */
    SelectBoxMeditor.prototype.runRound = function () {
        Laya.timer.loop(50, this, this.roundLamp);
    };
    return SelectBoxMeditor;
}(BaseMeditor));
//# sourceMappingURL=SelectBoxMeditor.js.map
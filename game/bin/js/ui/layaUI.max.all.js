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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var BoxUI = /** @class */ (function (_super) {
        __extends(BoxUI, _super);
        function BoxUI() {
            return _super.call(this) || this;
        }
        BoxUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BoxUI.uiView);
        };
        BoxUI.uiView = { "type": "View", "props": { "width": 500, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 271, "x": 173, "width": 177, "skin": "publicAssets/black.jpg", "height": 143 } }, { "type": "Sprite", "props": { "y": 281, "x": 67, "width": 193, "var": "sprite_BoxParent", "height": 150 } }, { "type": "Image", "props": { "y": 20, "x": 39, "width": 429, "visible": false, "var": "img_BoxDefault", "skin": "selectBox/box1.png", "height": 459 } }, { "type": "Image", "props": { "y": 24, "x": 54, "width": 407, "var": "img_box", "skin": "selectBox/Box (1).png", "height": 435, "alpha": 1 } }] };
        return BoxUI;
    }(View));
    ui.BoxUI = BoxUI;
})(ui || (ui = {}));
(function (ui) {
    var LoadingUI = /** @class */ (function (_super) {
        __extends(LoadingUI, _super);
        function LoadingUI() {
            return _super.call(this) || this;
        }
        LoadingUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.LoadingUI.uiView);
        };
        LoadingUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": -3, "x": -12, "width": 787, "skin": "unpackage/loadingBg.jpg", "height": 1392 } }, { "type": "Label", "props": { "y": 928, "x": 141, "width": 499, "var": "lab_Progress", "text": "加载中（20%）", "height": 50, "fontSize": 50, "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 248, "x": 91, "width": 588, "skin": "unpackage/cutRope.png", "height": 522 } }, { "type": "Image", "props": { "y": 891, "x": 137, "skin": "loadingView/loading2.png" } }, { "type": "Image", "props": { "y": 895, "x": 141, "width": 311, "var": "img_Progress", "skin": "loadingView/loading1.png", "sizeGrid": "0,9,0,8", "height": 20 } }] };
        return LoadingUI;
    }(View));
    ui.LoadingUI = LoadingUI;
})(ui || (ui = {}));
(function (ui) {
    var SelectUI = /** @class */ (function (_super) {
        __extends(SelectUI, _super);
        function SelectUI() {
            return _super.call(this) || this;
        }
        SelectUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.SelectUI.uiView);
        };
        SelectUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 752, "skin": "unpackage/loadingBg.jpg", "height": 1331 } }, { "type": "Sprite", "props": { "y": 639, "x": 354, "width": 1800, "var": "round_Lamp", "pivotY": 900, "pivotX": 900, "height": 1800 }, "child": [{ "type": "Image", "props": { "y": 800, "x": 800, "width": 1800, "skin": "unpackage/lamp.png", "pivotY": 800, "pivotX": 800, "height": 1800 } }] }, { "type": "Label", "props": { "y": 102, "x": 76, "width": 600, "var": "btn_First", "text": "第一季", "height": 191, "fontSize": 120, "font": "Microsoft YaHei", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 343, "x": 76, "width": 600, "var": "btn_Second", "text": "第二季", "height": 191, "fontSize": 120, "font": "Microsoft YaHei", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 605, "x": 78, "width": 600, "var": "btn_Third", "text": "第三季", "height": 191, "fontSize": 120, "font": "Microsoft YaHei", "align": "center" } }, { "type": "Image", "props": { "y": 1168, "x": 37, "width": 139, "var": "btn_Exit", "skin": "publicAssets/exit_R.png", "height": 132 } }, { "type": "Image", "props": { "y": 206, "x": 360, "var": "btn_First_", "skin": "publicAssets/start1.png" } }, { "type": "Image", "props": { "y": 719, "x": 347, "var": "btn_Third_", "skin": "publicAssets/start1.png" } }, { "type": "Image", "props": { "y": 461, "x": 354, "var": "btn_Second_", "skin": "publicAssets/start1.png" } }, { "type": "Image", "props": { "y": 874, "x": 101, "width": 559, "skin": "comp/blank.png", "height": 256 } }] };
        return SelectUI;
    }(View));
    ui.SelectUI = SelectUI;
})(ui || (ui = {}));
(function (ui) {
    var SelectBoxUI = /** @class */ (function (_super) {
        __extends(SelectBoxUI, _super);
        function SelectBoxUI() {
            return _super.call(this) || this;
        }
        SelectBoxUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.SelectBoxUI.uiView);
        };
        SelectBoxUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 749, "skin": "unpackage/startGameBg.jpg", "height": 1340 } }, { "type": "Sprite", "props": { "y": 644, "x": 356, "width": 1800, "var": "round_Lamp", "pivotY": 900, "pivotX": 900, "height": 1800 }, "child": [{ "type": "Image", "props": { "y": 800, "x": 800, "width": 1800, "skin": "unpackage/lamp.png", "pivotY": 800, "pivotX": 800, "height": 1800 } }] }, { "type": "Image", "props": { "y": 19, "x": 12, "width": 80, "skin": "selectBox/super.png", "height": 80 } }, { "type": "Image", "props": { "y": 16, "x": 120, "width": 80, "skin": "selectBox/shop.png", "height": 80 } }, { "type": "Image", "props": { "y": 19, "x": 635, "width": 79, "skin": "comp/blank.png", "height": 67 } }, { "type": "Image", "props": { "y": 596, "x": 269, "width": 283, "var": "moster", "skin": "publicAssets/moster.png", "height": 158 } }, { "type": "Panel", "props": { "y": 308, "x": 3, "width": 747, "var": "panel_ShowBox", "height": 574, "hScrollBarSkin": "comp/hscroll.png" } }, { "type": "Image", "props": { "y": 1189, "x": 19, "width": 147, "var": "btn_Exit", "skin": "publicAssets/exit_R.png", "height": 140 } }, { "type": "Image", "props": { "y": 886, "x": 219, "width": 323, "skin": "selectBox/selectBoxBottom.png", "height": 13 } }, { "type": "Sprite", "props": { "y": 852, "x": 222, "width": 313, "var": "sprite_SelectBox", "height": 62 }, "child": [{ "type": "Image", "props": { "y": 13, "x": -19, "var": "img_SelectBox", "skin": "selectBox/selectPoint.png" } }] }] };
        return SelectBoxUI;
    }(View));
    ui.SelectBoxUI = SelectBoxUI;
})(ui || (ui = {}));
(function (ui) {
    var SelectRoundUI = /** @class */ (function (_super) {
        __extends(SelectRoundUI, _super);
        function SelectRoundUI() {
            return _super.call(this) || this;
        }
        SelectRoundUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.SelectRoundUI.uiView);
        };
        SelectRoundUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 } };
        return SelectRoundUI;
    }(View));
    ui.SelectRoundUI = SelectRoundUI;
})(ui || (ui = {}));
(function (ui) {
    var StartGameUI = /** @class */ (function (_super) {
        __extends(StartGameUI, _super);
        function StartGameUI() {
            return _super.call(this) || this;
        }
        StartGameUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.StartGameUI.uiView);
        };
        StartGameUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 1, "x": -704, "width": 2388, "skin": "unpackage/startGameBg.jpg", "height": 1343 } }, { "type": "Image", "props": { "y": 180, "x": 125, "width": 466, "skin": "unpackage/cutRope.png", "height": 414 } }, { "type": "Sprite", "props": { "y": 663, "x": 341, "width": 1600, "var": "round_Lamp", "pivotY": 800, "pivotX": 800, "height": 1600 }, "child": [{ "type": "Image", "props": { "y": 800, "x": 800, "width": 1600, "skin": "unpackage/lamp.png", "pivotY": 800, "pivotX": 800, "height": 1600 } }] }, { "type": "Image", "props": { "y": 654, "x": 169, "width": 414, "var": "btn_StartGame", "skin": "publicAssets/btn1_2.png", "sizeGrid": "0,52,0,48", "height": 119 } }, { "type": "Image", "props": { "y": 823, "x": 171, "width": 414, "var": "btn_Imgs", "skin": "publicAssets/btn1_2.png", "sizeGrid": "0,52,0,48", "height": 119 } }, { "type": "Image", "props": { "y": 981, "x": 170, "width": 414, "var": "btn_About", "skin": "publicAssets/btn1_2.png", "sizeGrid": "0,52,0,48", "height": 119 } }, { "type": "Label", "props": { "y": 677, "x": 200, "width": 357, "var": "lab_StartGame", "text": "开始游戏", "height": 58, "fontSize": 50, "font": "Microsoft YaHei", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 1006, "x": 202, "width": 357, "text": "关于", "height": 58, "fontSize": 50, "font": "Microsoft YaHei", "align": "center" } }, { "type": "Label", "props": { "y": 846, "x": 202, "width": 357, "text": "图集", "height": 58, "fontSize": 50, "font": "Microsoft YaHei", "color": "#000000", "align": "center" } }] };
        return StartGameUI;
    }(View));
    ui.StartGameUI = StartGameUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map
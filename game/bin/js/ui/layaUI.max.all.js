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
        SelectUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": -9, "x": -809, "width": 2392, "skin": "unpackage/startGameBg.jpg", "height": 1346 } }, { "type": "Sprite", "props": { "y": 635, "x": 352, "width": 1800, "var": "round_Lamp", "pivotY": 900, "pivotX": 900, "height": 1800 }, "child": [{ "type": "Image", "props": { "y": 800, "x": 800, "width": 1800, "skin": "unpackage/lamp.png", "pivotY": 800, "pivotX": 800, "height": 1800 } }] }, { "type": "Image", "props": { "y": 1168, "x": 37, "width": 139, "var": "btn_Exit", "skin": "publicAssets/exit_R.png", "height": 132 } }, { "type": "Image", "props": { "y": 975, "x": 101, "width": 559, "skin": "comp/blank.png", "height": 155 } }, { "type": "Image", "props": { "y": 106, "x": 151, "width": 229, "skin": "select/s1black.png", "height": 160 } }, { "type": "Image", "props": { "y": 106, "x": 620, "width": 240, "skin": "select/s1black.png", "scaleX": -1, "height": 160 } }, { "type": "Image", "props": { "y": 260, "x": -2, "width": 350, "skin": "select/bottom.png", "height": 77 } }, { "type": "Image", "props": { "y": 260, "x": 753, "width": 350, "skin": "select/bottom.png", "scaleX": -1, "height": 77 } }, { "type": "Image", "props": { "y": 118, "x": -3, "width": 214, "skin": "select/s1l.png", "height": 167 } }, { "type": "Image", "props": { "y": 80, "x": 35, "skin": "select/s1goods.png" } }, { "type": "Image", "props": { "y": 128, "x": 751, "width": 167, "skin": "select/s1r.png", "scaleX": -1, "height": 155 } }, { "type": "Image", "props": { "y": 242, "x": 315, "width": 112, "var": "btn_First_", "skin": "select/s1s2sure.png", "height": 98 } }, { "type": "Label", "props": { "y": 114, "x": 163, "width": 441, "var": "btn_First", "text": "第一季", "strokeColor": "#5a5a5a", "stroke": 4, "padding": "28", "height": 169, "fontSize": 60, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 397, "x": 154, "width": 229, "skin": "select/s2black.png", "height": 160 } }, { "type": "Image", "props": { "y": 397, "x": 623, "width": 240, "skin": "select/s2black.png", "scaleX": -1, "height": 160 } }, { "type": "Image", "props": { "y": 551, "x": 1, "width": 350, "skin": "select/bottom.png", "height": 77 } }, { "type": "Image", "props": { "y": 551, "x": 756, "width": 350, "skin": "select/bottom.png", "scaleX": -1, "height": 77 } }, { "type": "Image", "props": { "y": 409, "x": 0, "width": 214, "skin": "select/s2l.png", "height": 167 } }, { "type": "Image", "props": { "y": 407, "x": 600, "skin": "select/s2goods.png" } }, { "type": "Image", "props": { "y": 419, "x": 754, "width": 167, "skin": "select/s2r.png", "scaleX": -1, "height": 155 } }, { "type": "Image", "props": { "y": 533, "x": 318, "width": 112, "var": "btn_Second_", "skin": "select/s1s2sure.png", "height": 98 } }, { "type": "Label", "props": { "y": 414, "x": 163, "width": 453, "var": "btn_Second", "text": "第二季", "strokeColor": "#535353", "stroke": 5, "padding": "25", "height": 149, "fontSize": 60, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 635, "x": 82, "width": 105, "skin": "select/s3goods.png", "height": 147 } }, { "type": "Image", "props": { "y": 698, "x": 153, "width": 229, "skin": "select/s3black.png", "height": 160 } }, { "type": "Image", "props": { "y": 698, "x": 622, "width": 240, "skin": "select/s3black.png", "scaleX": -1, "height": 160 } }, { "type": "Image", "props": { "y": 852, "x": 0, "width": 350, "skin": "select/bottom.png", "height": 77 } }, { "type": "Image", "props": { "y": 852, "x": 755, "width": 350, "skin": "select/bottom.png", "scaleX": -1, "height": 77 } }, { "type": "Image", "props": { "y": 710, "x": -1, "width": 214, "skin": "select/s3l.png", "height": 167 } }, { "type": "Image", "props": { "y": 720, "x": 753, "width": 167, "skin": "select/s3r.png", "scaleX": -1, "height": 155 } }, { "type": "Image", "props": { "y": 834, "x": 319, "width": 111, "var": "btn_Third_", "skin": "select/s3sure.png", "height": 96 } }, { "type": "Label", "props": { "y": 718, "x": 178, "width": 402, "var": "btn_Third", "text": "第三季", "strokeColor": "#4a4a4a", "stroke": 5, "padding": "25", "height": 128, "fontSize": 60, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true, "align": "center" } }] };
        return SelectUI;
    }(View));
    ui.SelectUI = SelectUI;
})(ui || (ui = {}));
(function (ui) {
    var SelectBox;
    (function (SelectBox) {
        var BoxUI = /** @class */ (function (_super) {
            __extends(BoxUI, _super);
            function BoxUI() {
                return _super.call(this) || this;
            }
            BoxUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.SelectBox.BoxUI.uiView);
            };
            BoxUI.uiView = { "type": "View", "props": { "width": 500, "hitTestPrior": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 271, "x": 173, "width": 177, "skin": "publicAssets/black.jpg", "height": 143 } }, { "type": "Sprite", "props": { "y": 281, "x": 67, "width": 193, "var": "sprite_BoxParent", "height": 150 } }, { "type": "Image", "props": { "y": 24, "x": 54, "width": 407, "var": "img_box", "skin": "selectBox/Box (1).png", "height": 435, "alpha": 1 } }, { "type": "Image", "props": { "y": 215, "x": 36, "width": 438, "var": "img_lock", "skin": "selectBox/boxLock.png", "height": 198 }, "child": [{ "type": "Image", "props": { "y": 103, "x": 233, "visible": false, "var": "img_StarCount", "skin": "selectBox/lockStar.png" } }, { "type": "Image", "props": { "y": 110, "x": 207, "visible": false, "var": "img_Count3", "skin": "publicAssets/0.png" } }, { "type": "Image", "props": { "y": 109, "x": 183, "visible": false, "var": "img_Count2", "skin": "publicAssets/6.png" } }, { "type": "Image", "props": { "y": 109, "x": 160, "visible": false, "var": "img_Count1", "skin": "publicAssets/6.png" } }] }, { "type": "Image", "props": { "y": 346, "x": 349, "var": "img_IsAllThree", "skin": "selectBox/allThree.png" } }] };
            return BoxUI;
        }(View));
        SelectBox.BoxUI = BoxUI;
    })(SelectBox = ui.SelectBox || (ui.SelectBox = {}));
})(ui || (ui = {}));
(function (ui) {
    var SelectBox;
    (function (SelectBox) {
        var SelectBoxUI = /** @class */ (function (_super) {
            __extends(SelectBoxUI, _super);
            function SelectBoxUI() {
                return _super.call(this) || this;
            }
            SelectBoxUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.SelectBox.SelectBoxUI.uiView);
            };
            SelectBoxUI.uiView = { "type": "View", "props": { "width": 750, "hitTestPrior": true, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 749, "skin": "unpackage/startGameBg.jpg", "height": 1340 } }, { "type": "Sprite", "props": { "y": 644, "x": 356, "width": 1800, "var": "round_Lamp", "pivotY": 900, "pivotX": 900, "height": 1800 }, "child": [{ "type": "Image", "props": { "y": 800, "x": 800, "width": 1800, "skin": "unpackage/lamp.png", "pivotY": 800, "pivotX": 800, "height": 1800 } }] }, { "type": "Image", "props": { "y": 19, "x": 12, "width": 80, "skin": "selectBox/super.png", "height": 80 } }, { "type": "Image", "props": { "y": 16, "x": 120, "width": 80, "skin": "selectBox/shop.png", "height": 80 } }, { "type": "Image", "props": { "y": 19, "x": 635, "width": 79, "skin": "comp/blank.png", "height": 67 } }, { "type": "Image", "props": { "y": 596, "x": 269, "width": 283, "var": "moster", "skin": "publicAssets/moster.png", "height": 158 } }, { "type": "Panel", "props": { "y": 308, "x": 3, "width": 747, "var": "panel_ShowBox", "height": 574, "hScrollBarSkin": "comp/hscroll.png" } }, { "type": "Image", "props": { "y": 1189, "x": 19, "width": 147, "var": "btn_Exit", "skin": "publicAssets/exit_R.png", "height": 140 } }, { "type": "Image", "props": { "y": 886, "x": 219, "width": 323, "skin": "selectBox/selectBoxBottom.png", "height": 13 } }, { "type": "Sprite", "props": { "y": 852, "x": 222, "width": 313, "var": "sprite_SelectBox", "height": 62 }, "child": [{ "type": "Image", "props": { "y": 13, "x": -19, "var": "img_SelectBox", "skin": "selectBox/selectPoint.png" } }] }] };
            return SelectBoxUI;
        }(View));
        SelectBox.SelectBoxUI = SelectBoxUI;
    })(SelectBox = ui.SelectBox || (ui.SelectBox = {}));
})(ui || (ui = {}));
(function (ui) {
    var SelectRound;
    (function (SelectRound) {
        var RoundUI = /** @class */ (function (_super) {
            __extends(RoundUI, _super);
            function RoundUI() {
                return _super.call(this) || this;
            }
            RoundUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.SelectRound.RoundUI.uiView);
            };
            RoundUI.uiView = { "type": "View", "props": { "width": 140, "height": 140, "cacheAs": "bitmap" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 140, "var": "img_RoundBox", "skin": "selectRound/unlock.png", "height": 140 } }, { "type": "Image", "props": { "y": 95, "x": 43, "width": 90, "var": "img_Star", "skin": "selectRound/star0.png", "hitTestPrior": true, "height": 50 }, "child": [{ "type": "Image", "props": { "y": -56, "x": 12, "width": 17, "visible": false, "var": "img_Count1", "skin": "publicAssets/1.png", "height": 49 } }, { "type": "Image", "props": { "y": -56, "x": 34, "width": 17, "var": "img_Count2", "skin": "publicAssets/1.png", "height": 49 } }] }] };
            return RoundUI;
        }(View));
        SelectRound.RoundUI = RoundUI;
    })(SelectRound = ui.SelectRound || (ui.SelectRound = {}));
})(ui || (ui = {}));
(function (ui) {
    var SelectRound;
    (function (SelectRound) {
        var SelectRoundUI = /** @class */ (function (_super) {
            __extends(SelectRoundUI, _super);
            function SelectRoundUI() {
                return _super.call(this) || this;
            }
            SelectRoundUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.SelectRound.SelectRoundUI.uiView);
            };
            SelectRoundUI.uiView = { "type": "View", "props": { "width": 750, "hitTestPrior": true, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": -2, "x": -2, "width": 759, "skin": "unpackage/loadingBg.jpg", "height": 1337 } }, { "type": "Sprite", "props": { "y": 654, "x": 366, "width": 1800, "var": "round_Lamp", "pivotY": 900, "pivotX": 900, "height": 1800 }, "child": [{ "type": "Image", "props": { "y": 800, "x": 800, "width": 1800, "skin": "unpackage/lamp.png", "pivotY": 800, "pivotX": 800, "height": 1800 } }] }, { "type": "Image", "props": { "y": 29, "x": 22, "width": 80, "skin": "selectBox/super.png", "height": 80 } }, { "type": "Image", "props": { "y": 26, "x": 130, "width": 80, "skin": "selectBox/shop.png", "height": 80 } }, { "type": "Image", "props": { "y": 29, "x": 645, "width": 79, "skin": "comp/blank.png", "height": 67 } }, { "type": "Image", "props": { "width": 147, "var": "btn_Exit", "skin": "publicAssets/exit_R.png", "left": 20, "height": 140, "bottom": 20 } }] };
            return SelectRoundUI;
        }(View));
        SelectRound.SelectRoundUI = SelectRoundUI;
    })(SelectRound = ui.SelectRound || (ui.SelectRound = {}));
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
(function (ui) {
    var Vo;
    (function (Vo) {
        var CandyUI = /** @class */ (function (_super) {
            __extends(CandyUI, _super);
            function CandyUI() {
                return _super.call(this) || this;
            }
            CandyUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Vo.CandyUI.uiView);
            };
            CandyUI.uiView = { "type": "View", "props": { "width": 300, "height": 400 } };
            return CandyUI;
        }(View));
        Vo.CandyUI = CandyUI;
    })(Vo = ui.Vo || (ui.Vo = {}));
})(ui || (ui = {}));
(function (ui) {
    var Vo;
    (function (Vo) {
        var MonsterUI = /** @class */ (function (_super) {
            __extends(MonsterUI, _super);
            function MonsterUI() {
                return _super.call(this) || this;
            }
            MonsterUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Vo.MonsterUI.uiView);
            };
            MonsterUI.uiView = { "type": "View", "props": { "width": 80, "height": 100 }, "child": [{ "type": "Image", "props": { "y": 1, "x": 0, "width": 162, "skin": "gameView/no1.png", "height": 90 } }] };
            return MonsterUI;
        }(View));
        Vo.MonsterUI = MonsterUI;
    })(Vo = ui.Vo || (ui.Vo = {}));
})(ui || (ui = {}));
(function (ui) {
    var Vo;
    (function (Vo) {
        var PointUI = /** @class */ (function (_super) {
            __extends(PointUI, _super);
            function PointUI() {
                return _super.call(this) || this;
            }
            PointUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Vo.PointUI.uiView);
            };
            PointUI.uiView = { "type": "View", "props": { "width": 300, "height": 400 } };
            return PointUI;
        }(View));
        Vo.PointUI = PointUI;
    })(Vo = ui.Vo || (ui.Vo = {}));
})(ui || (ui = {}));
(function (ui) {
    var Vo;
    (function (Vo) {
        var StarUI = /** @class */ (function (_super) {
            __extends(StarUI, _super);
            function StarUI() {
                return _super.call(this) || this;
            }
            StarUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Vo.StarUI.uiView);
            };
            StarUI.uiView = { "type": "View", "props": { "width": 40, "height": 40 } };
            return StarUI;
        }(View));
        Vo.StarUI = StarUI;
    })(Vo = ui.Vo || (ui.Vo = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map
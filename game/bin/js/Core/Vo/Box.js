/**
 * 盒子
 */
var Box = /** @class */ (function () {
    function Box(view, skin) {
        this.boxUI = new ui.BoxUI();
        if (skin) {
            this.boxUI.img_box.skin = skin;
        }
        else {
            this.boxUI.img_box.skin = "selectBox/box1.png";
        }
        this.boxUI.x = 102;
        this.boxUI.y = 29;
        view.panel_ShowBox.addChild(this.boxUI);
    }
    return Box;
}());
//# sourceMappingURL=Box.js.map
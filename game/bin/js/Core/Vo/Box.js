/**
 * 盒子
 */
var Box = /** @class */ (function () {
    function Box(view, skin) {
        this.initX = 102;
        this.iniY = 29;
        this.boxUI = new ui.BoxUI();
        if (skin) {
            this.boxUI.img_box.skin = skin;
        }
        else {
            this.boxUI.img_box.visible = false;
            this.boxUI.img_BoxDefault.visible = true;
        }
        this.boxUI.x = this.initX;
        this.boxUI.y = this.iniY;
        view.panel_ShowBox.addChild(this.boxUI);
    }
    return Box;
}());
//# sourceMappingURL=Box.js.map
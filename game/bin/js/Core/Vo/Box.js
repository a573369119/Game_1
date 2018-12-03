/**
 * 盒子
 */
var Box = /** @class */ (function () {
    function Box(view, selectId, boxId, skin) {
        this.initX = 102;
        this.initY = 29;
        this.selectId = selectId;
        this.boxId = boxId;
        this.boxUI = new ui.SelectBox.BoxUI();
        if (skin) {
            this.boxUI.img_box.skin = skin;
        }
        else {
            this.boxUI.img_box.skin = 'selectBox/Box (1).png';
        }
        this.boxUI.x = this.initX;
        this.boxUI.y = this.initY;
        view.panel_ShowBox.addChild(this.boxUI);
        this.parseUnlock();
        this.isAllThree();
    }
    /**是否开锁 */
    Box.prototype.parseUnlock = function () {
        var boxs = PlayerData.ins.boxLimtDic.get(this.selectId);
        if (boxs[this.boxId] === undefined)
            return;
        if (boxs[this.boxId] < PlayerData.ins.starNum || this.boxId == 0) {
            this.boxUI.img_lock.visible = false;
        }
        else {
            if (this.boxId != 0) { //显示  星星限""
                this.boxUI.img_Count3.visible = true;
                this.boxUI.img_StarCount.visible = true;
                if (boxs[this.boxId] >= 100) {
                    this.boxUI.img_Count1.visible = true;
                    this.boxUI.img_Count1.skin = "publicAssets/" + Math.floor(boxs[this.boxId] / 100) + ".png";
                }
                if (boxs[this.boxId] >= 10) {
                    this.boxUI.img_Count2.visible = true;
                    this.boxUI.img_Count2.skin = "publicAssets/" + Math.floor(boxs[this.boxId] % 100 / 10) + ".png";
                }
                this.boxUI.img_Count3.skin = "publicAssets/" + boxs[this.boxId] % 10 + ".png";
            }
        }
    };
    /**是全三星 */
    Box.prototype.isAllThree = function () {
        var totle = 0;
        var boxs = PlayerData.ins.round_Star.get(this.selectId + "-" + this.boxId);
        if (boxs === undefined) {
            for (var i = 0; i < boxs.length; i++) {
                totle += boxs[i];
            }
        }
        if (totle != 25) {
            this.boxUI.img_IsAllThree.visible = false;
        }
    };
    return Box;
}());
//# sourceMappingURL=Box.js.map
/**
 * 星星
 */
var Star = /** @class */ (function () {
    function Star(data, dataStyle) {
        this.star = new Laya.Animation();
        this.star.loadAnimation("starRotate.ani");
        this.init(data, dataStyle);
    }
    /**初始化 */
    Star.prototype.init = function (data, dataStyle) {
        this.x = data.x;
        this.y = data.y;
        this.width = 35;
        this.height = 35;
        this.star.visible = true;
        this.star.play(0, true);
        this.star.pos(data.x, data.y);
        this.setStyle(dataStyle);
    };
    /**种类设置方法 */
    Star.prototype.setStyle = function (dataStyle) {
        this.style = dataStyle;
    };
    /**更新星星 */
    Star.prototype.updateStar = function (data, dataStyle) {
        this.init(data, dataStyle);
        this.star.play(0, true);
        this.star.pos(data.x, data.y);
    };
    return Star;
}());
//# sourceMappingURL=Star.js.map
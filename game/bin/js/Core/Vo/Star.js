/**
 * 星星
 */
var Star = /** @class */ (function () {
    function Star(data, dataStyle) {
        this.star = new Laya.Animation();
        this.star.loadAnimation("starRotate.ani");
        this.star.play(0, true);
        this.star.pos(data.x, data.y);
        this.init(data, dataStyle);
    }
    /**初始化 */
    Star.prototype.init = function (data, dataStyle) {
        this.x = data.x;
        this.y = data.y;
        this.width = 35;
        this.height = 35;
        this.style = dataStyle;
        this.setStyle();
    };
    /**种类设置方法 */
    Star.prototype.setStyle = function () {
    };
    return Star;
}());
//# sourceMappingURL=Star.js.map
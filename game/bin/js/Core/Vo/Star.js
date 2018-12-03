/**
 * 星星
 */
var Star = /** @class */ (function () {
    function Star(data) {
        this.init(data);
    }
    /**初始化 */
    Star.prototype.init = function (data) {
        this.x = data.x;
        this.y = data.y;
        this.style = data.style;
        this.setStyle();
    };
    /**种类设置方法 */
    Star.prototype.setStyle = function () {
    };
    return Star;
}());
//# sourceMappingURL=Star.js.map
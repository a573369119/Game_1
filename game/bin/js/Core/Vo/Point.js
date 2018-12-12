/**
 * 钉子
 */
var Point = /** @class */ (function () {
    function Point(data) {
        this.point = new Laya.Sprite();
        this.point.loadImage("gameView/point.png");
        this.point.pivot(this.point.width / 2, this.point.height / 2);
        this.point.pos(data.x, data.y);
        this.init(data);
    }
    Point.prototype.init = function (data) {
        this.x = data.x;
        this.y = data.y;
    };
    /**更新方法 */
    Point.prototype.update = function (data) {
        this.x = data.x;
        this.y = data.y;
        this.point.pos(data.x, data.y);
        this.point.visible = true;
    };
    return Point;
}());
//# sourceMappingURL=Point.js.map
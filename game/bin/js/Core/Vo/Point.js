/**
 * 钉子
 */
var Point = /** @class */ (function () {
    function Point(xPos, yPos /*data*/) {
        this.hook = new Laya.Sprite();
        this.hook.loadImage("gameView/point.png");
        this.hook.pivot(this.hook.width / 2, this.hook.height / 2);
        Laya.stage.addChild(this.hook);
        this.hook.pos(xPos, yPos);
        this.x = this.hook.x;
        this.y = this.hook.y;
        //this.init(data);
    }
    Point.prototype.init = function (data) {
        this.x = data.x;
        this.y = data.y;
    };
    return Point;
}());
//# sourceMappingURL=Point.js.map
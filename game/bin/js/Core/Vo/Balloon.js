/**
 * 气泡
 */
var Balloon = /** @class */ (function () {
    function Balloon(data) {
        this.balloon = new Laya.Sprite();
        this.balloon.loadImage("gameView/balloon.png");
        this.balloon.pivot(this.balloon.width / 2, this.balloon.height / 2);
        this.balloon.pos(data.x, data.y);
        this.init(data);
    }
    Balloon.prototype.init = function (data) {
        this.x = data.x;
        this.y = data.y;
        this.width = this.balloon.width;
        this.height = this.balloon.height;
    };
    Balloon.prototype.pos = function (x, y) {
        this.balloon.pos(x, y);
        this.x = x;
        this.y = y;
    };
    /**更新方法 */
    Balloon.prototype.update = function (data) {
        this.x = data.x;
        this.y = data.y;
        this.balloon.pos(data.x, data.y);
        this.balloon.visible = true;
    };
    return Balloon;
}());
//# sourceMappingURL=Balloon.js.map
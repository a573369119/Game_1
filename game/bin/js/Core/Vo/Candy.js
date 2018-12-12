/**
 * 糖果
 */
var Candy = /** @class */ (function () {
    function Candy(data) {
        this.candy = new Laya.Sprite();
        this.candy.loadImage("gameView/" + data.style + ".png");
        this.candy.pivot(this.candy.width / 2, this.candy.height / 2);
        this.candy.zOrder = 2;
        this.style = data.style;
        this.init();
    }
    Candy.prototype.init = function () {
        this.x = this.candy.x;
        this.y = this.candy.y;
        this.width = this.candy.width;
        this.height = this.candy.height;
    };
    Candy.prototype.pos = function (x, y) {
        this.candy.pos(x, y);
        this.x = x;
        this.y = y;
    };
    /**candy 更新 */
    Candy.prototype.candyUpdate = function (data) {
        this.style = data.style;
        this.width = this.candy.width;
        this.height = this.candy.height;
        this.candy.visible = true;
    };
    return Candy;
}());
//# sourceMappingURL=Candy.js.map
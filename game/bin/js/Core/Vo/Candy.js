/**
 * 糖果
 */
var Candy = /** @class */ (function () {
    function Candy( /*object*/) {
        this.candy = new Laya.Sprite();
        this.candy.loadImage("gameView/candy.png");
        Laya.stage.addChild(this.candy);
        this.candy.pivot(this.candy.width / 2, this.candy.height / 2);
        this.candy.zOrder = 1;
        this.x = this.candy.x;
        this.y = this.candy.y;
        //this.init(object);
    }
    Candy.prototype.init = function (object) {
        this.x = object.x;
        this.y = object.y;
        this.style = object.style;
    };
    Candy.prototype.pos = function (x, y) {
        this.candy.pos(x, y);
    };
    return Candy;
}());
//# sourceMappingURL=Candy.js.map
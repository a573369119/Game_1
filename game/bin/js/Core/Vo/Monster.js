/**
 * 怪物
 */
var Monster = /** @class */ (function () {
    function Monster(data) {
        this.initMonster(data);
    }
    Monster.prototype.initMonster = function (data) {
        this.x = data.x;
        this.y = data.y;
        this.eatWidth = 84;
        this.eatHeight = 84;
        this.openWidth = 200;
        this.openHeight = 200;
    };
    Monster.prototype.update = function (data) {
        this.initMonster(data);
    };
    return Monster;
}());
//# sourceMappingURL=Monster.js.map
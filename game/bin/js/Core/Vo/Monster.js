/**
 * 怪物
 */
var Monster = /** @class */ (function () {
    function Monster(data) {
        this.arr_animation = new Array();
        this.x = data.x;
        this.y = data.y;
        AnimationManager.ins.playAnimation(GameData.ANI_MONSTER_STAND, false, this.x, this.y);
    }
    return Monster;
}());
//# sourceMappingURL=Monster.js.map
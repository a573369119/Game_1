/**
 * 怪物
 */
var Monster = /** @class */ (function () {
    function Monster(data) {
        this.arr_animation = new Array();
        this.x = data.x;
        this.y = data.y;
        this.playAnimation(GameData.ANI_MONSTER_STAND);
    }
    /**动画播放 */
    Monster.prototype.playAnimation = function (animationName) {
        switch (animationName) {
            case GameData.ANI_MONSTER_SAD:
                break;
            case GameData.ANI_MONSTER_EAT:
                break;
            case GameData.ANI_MONSTER_HAPPYE:
                break;
            case GameData.ANI_MONSTER_OPEN:
                break;
            case GameData.ANI_MONSTER_GIVE_ME:
                break;
            case GameData.ANI_MONSTER_ACTION:
                break;
            case GameData.ANI_MONSTER_STAND:
                break;
        }
    };
    return Monster;
}());
//# sourceMappingURL=Monster.js.map
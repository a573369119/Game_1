/**
 * 动画管理
 */
var AnimationManager = /** @class */ (function () {
    function AnimationManager() {
        this.animationDic = new Laya.Dictionary();
        this.loadAnimation();
    }
    /**动画加载 */
    AnimationManager.prototype.loadAnimation = function () {
    };
    AnimationManager.ins = new AnimationManager();
    return AnimationManager;
}());
//# sourceMappingURL=AnimatonManager.js.map
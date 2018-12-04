/**
* 舞台
*/
window.onload = function () {
    new GameEnterMeditor();
};
/***
* 游戏入口
*/
var GameEnterMeditor = /** @class */ (function () {
    function GameEnterMeditor() {
        this.loadLaya();
    }
    /**1 舞台初始化 */
    GameEnterMeditor.prototype.loadLaya = function () {
        new StageInitMediator();
        this.loadingAssets();
    };
    /**2 加载资源 */
    GameEnterMeditor.prototype.loadingAssets = function () {
        LoadingManager.ins_.loadLoadingUi(this, this.enterGame);
    };
    /**3 数据读取完成 ， 进入游戏 */
    GameEnterMeditor.prototype.enterGame = function () {
        /**加载动画 */
        AnimationManager.ins.loadAnimation();
        GameManager.ins_.runMediator(GameData.START_GAME_MEDIATOR);
    };
    return GameEnterMeditor;
}());
//# sourceMappingURL=GameEnterMeditor.js.map
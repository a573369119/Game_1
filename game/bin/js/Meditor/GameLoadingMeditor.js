/**
* 舞台
*/
window.onload = function () {
    new GameLoadingMeditor();
};
/***
* 游戏入口
*/
var GameLoadingMeditor = /** @class */ (function () {
    function GameLoadingMeditor() {
        this.loadLaya();
    }
    /**1 舞台初始化 */
    GameLoadingMeditor.prototype.loadLaya = function () {
        new StageInitMediator();
        this.loadingAssets();
    };
    /**2 加载资源 */
    GameLoadingMeditor.prototype.loadingAssets = function () {
        LoadingManager.ins_.loadLoadingUi(this, this.enterGame);
    };
    /**3 数据读取完成 ， 进入游戏 */
    GameLoadingMeditor.prototype.enterGame = function () {
    };
    return GameLoadingMeditor;
}());
//# sourceMappingURL=GameLoadingMeditor.js.map
 /**
 * 舞台
 */
 window.onload = function()
 {
    new GameEnterMeditor(); 
 }
 /***
 * 游戏入口
 */
class GameEnterMeditor{

    constructor(){
        this.loadLaya();
    }

    /**1 舞台初始化 */
    private loadLaya() : void
    {
        new StageInitMediator();
        this.loadingAssets();
    }
    
    /**2 加载资源 */
    private loadingAssets() 
    {
        LoadingManager.ins_.loadLoadingUi(this,this.enterGame);
    }

    /**3 数据读取完成 ， 进入游戏 */
    private enterGame() 
    {
        /**加载动画 */
        AnimationManager.ins.loadAnimation();
        GameManager.ins_.runMediator(GameData.START_GAME_MEDIATOR);
    }
}
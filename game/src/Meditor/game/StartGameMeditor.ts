/**
 * 开始游戏界面 
 */
class StartGameMeditor extends BaseMeditor{
    /**   this.view  调用 本UI 视图*/

    constructor(mediatorName?:number,view?:number,assate?:any){
        super(mediatorName,view,assate);
    }

    /**初始化 */
    protected init() : void
    {
        super.init();
    }

    /**事件绑定 */
    protected addEvents() : void
    {
        this.view.btn_StartGame.on(Laya.Event.CLICK,this,this.onGameStart);
        this.view.btn_Imgs.on(Laya.Event.CLICK,this,this.onImgs);
        this.view.btn_About.on(Laya.Event.CLICK,this,this.onAbout);
    }

    /**事件移除 */
    protected removeEvents() : void
    {
        this.view.btn_StartGame.off(Laya.Event.CLICK,this,this.onGameStart);
    }

    /**按钮事件 游戏开始 */
    private onGameStart() : void
    {
        //进入选择季度
        GameManager.ins_.runMediator(GameData.SELECT_MEDIATOR);
    }

    /**按钮事件 点击图集 */
    private onImgs() : void
    {

    }

    /**按钮事件 点击关于 */
    private onAbout() : void
    {

    }
}
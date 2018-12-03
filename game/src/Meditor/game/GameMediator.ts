/**
 * 游戏主逻辑
 */
class GameMediator extends BaseMeditor{

    /**用 this.view 来调用 UI视图 */
    constructor(mediatorName?:number,view?:number,assate?:any){
        super(mediatorName,view,assate);
    }

    /**初始化 */
    protected init() : void
    {
        super.init();
    }

    /**添加事件 */
    protected addEvents() : void
    {

    }

    /**移除事件 */
    protected removeEvents() : void
    {

    }

    /**退出游戏界面 */
    protected exitGame() : void
    {
        this.dispose();
    }

}
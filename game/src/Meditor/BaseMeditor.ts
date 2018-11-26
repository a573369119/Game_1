/**
 *  基础处理器
 */
class BaseMeditor {
    /**该界面 */
    protected view : any;
    /**资源 */
    protected arr_url : any;
    /**Meditor的名字 */
    protected mediator : number;

    /**
     * mediator : GameData定义的的名字 例：调用GameData.START_GAME_MEIDIATOR（必填）
     * view : GameData定义的名字 例: 调用GameData.START_GAME_VIEW（选填）
     * assate : 是否有资源图需要加载，（选填）
     */
    constructor(mediatorName?:number,view?:number,assate?:any)
    {
        if(mediatorName)
        {
            this.mediator = mediatorName;
        }
        else
        {
            console.log("出错 ，没有传入 mediatorName");
            return;
        }
        if(view)
        {
            ViewManager.ins_.LoadingView(view,this,this.init,assate);
            this.view = ViewManager.ins_.getView(view);
        }
        else
        {
            this.init();
        }
    }

    /**数据初始化*/
    protected init() : void
    {
        this.addEvents();
    }   

    /**添加事件 */
    protected addEvents() : void
    {

    }

    /**移除事件 */
    protected removeEvents() : void
    {

    }

    /**离开 关闭 销毁*/
    protected dispose() : void
    {
        this.removeEvents();
        ViewManager.ins_.destroView(this.view,this.arr_url);
        this.view = null;
        GameManager.ins_.destroyMediator(this.mediator);
    }
    
}
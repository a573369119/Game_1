/**
 * 季度选择 调度器
 */
class SelectMeditor extends BaseMeditor{
    /**用 this.view 来调用 UI视图 */
    
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
        this.view.btn_First.on(Laya.Event.CLICK,this,this.onSelectBoxStart);
    }

    /**事件移除 */
    protected removeEvents() : void
    {
        this.view.btn_First.off(Laya.Event.CLICK,this,this.onSelectBoxStart);
    }

     /**按钮事件 进入季度关卡 */
    private onSelectBoxStart() : void
    {
        //进入选择关卡
        GameManager.ins_.runMediator(GameData.SELECT_BOX_MEDIATOR);
    }
}

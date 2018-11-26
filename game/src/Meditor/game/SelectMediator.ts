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
        this.view.btn_First.on(Laya.Event.CLICK,this,this.onSelectBoxStart,[1]);
        this.view.btn_Second.on(Laya.Event.CLICK,this,this.onSelectBoxStart,[2]);
        this.view.btn_Third.on(Laya.Event.CLICK,this,this.onSelectBoxStart,[3]);
        this.view.btn_First_.on(Laya.Event.CLICK,this,this.onSelectBoxStart,[1]);
        this.view.btn_Second_.on(Laya.Event.CLICK,this,this.onSelectBoxStart,[2]);
        this.view.btn_Third_.on(Laya.Event.CLICK,this,this.onSelectBoxStart,[3]);
        
        this.view.btn_Exit.on(Laya.Event.CLICK,this,this.onExit);
    }

    /**事件移除 */
    protected removeEvents() : void
    {
        this.view.btn_First.off(Laya.Event.CLICK,this,this.onSelectBoxStart);
        this.view.btn_Second.off(Laya.Event.CLICK,this,this.onSelectBoxStart);
        this.view.btn_Third.off(Laya.Event.CLICK,this,this.onSelectBoxStart);
        this.view.btn_First_.off(Laya.Event.CLICK,this,this.onSelectBoxStart);
        this.view.btn_Second_.off(Laya.Event.CLICK,this,this.onSelectBoxStart);
        this.view.btn_Third_.off(Laya.Event.CLICK,this,this.onSelectBoxStart);

        this.view.btn_Exit.off(Laya.Event.CLICK,this,this.onExit);        
    }

     /**按钮事件 进入季度关卡 */
    private onSelectBoxStart(index) : void
    {
        console.log("进入第：" + index + "季");
        //进入选择关卡
        GameManager.ins_.runMediator(GameData.SELECT_BOX_MEDIATOR);
        GameManager.ins_.getMediator(GameData.SELECT_BOX_MEDIATOR).setSelectQuarter(index);
    }

    /**按钮事件 退出 */
    private onExit() : void
    {
        this.dispose();
    }
}

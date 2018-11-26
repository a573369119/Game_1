/**
 * 盒子选择 调度器
 */
class SelectBoxMeditor extends BaseMeditor{
    /** 季度 */
    private selectQuarter : number ;
    /** 季度关卡配置 */

    
    
    /**用 this.view 来调用 UI视图 */
    constructor(mediatorName?:number,view?:number,assate?:any){
        super(mediatorName,view,assate);
    }


    /**初始化 */
    protected init() : void
    {
        super.init();
        this.view.panel_ShowBox.hScrollBar.visible = false;
    }

    /**事件绑定 */
    protected addEvents() : void
    {
        this.view.btn_Exit.on(Laya.Event.CLICK,this,this.onExit);
    }

    /**事件移除 */
    protected removeEvents() : void
    {
        this.view.btn_Exit.off(Laya.Event.CLICK,this,this.onExit);   
    }

    /**设置季度 - Meditor 起始点*/
    public setSelectQuarter(index) : void
    {
        this.setSelectQuarter = index;//现在默认第一季度
    }

    /**事件 退出 */
    private onExit() : void
    {
        this.dispose();
    }
}

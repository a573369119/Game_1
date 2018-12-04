/**
 * 游戏主逻辑
 */
class GameMediator extends BaseMeditor{
    /**加载 */
    private doorOpen : ui.GameView.GameViewDoorUI;

    /**用 this.view 来调用 UI视图 */
    constructor(mediatorName:number,view?:number,assate?:any){
        super(mediatorName,view,assate);
    }

    /**初始化 */ 
    protected init() : void
    {
        super.init();
        this.doorOpen = new ui.GameView.GameViewDoorUI();
        this.view.addChild(this.doorOpen);
        this.doorOpen.ani1.play(0,false);
    }

    /**添加事件 */
    protected addEvents() : void
    {
        this.view.btn_Super.on(Laya.Event.CLICK,this,this.onUserSuper);
        this.view.btn_Teach.on(Laya.Event.CLICK,this,this.onTeachYou);
        this.view.btn_ReGame.on(Laya.Event.CLICK,this,this.onReGame);
        this.view.btn_Menu.on(Laya.Event.CLICK,this,this.onMenu);
    }

    /**移除事件 */
    protected removeEvents() : void
    {
        this.view.btn_Super.off(Laya.Event.CLICK,this,this.onUserSuper);
        this.view.btn_Teach.off(Laya.Event.CLICK,this,this.onTeachYou);
        this.view.btn_ReGame.off(Laya.Event.CLICK,this,this.onReGame);
        this.view.btn_Menu.off(Laya.Event.CLICK,this,this.onMenu);
    }

    /**事件 ！使用超能力*/
    private onUserSuper() : void
    {
        console.log("技能 - 超能力");

    }

    /**事件 ！使用引导 */
    private onTeachYou() : void
    {
        console.log("技能 - 引导");

    }

    /**事件 重玩 */
    private onReGame() : void
    {
        console.log("重玩");
    }

    /**事件 菜单 */
    private onMenu() : void
    {
        console.log("菜单");
    }

    /**退出游戏界面 */
    protected exitGame() : void
    {
        this.dispose();
    }

}
/**
 * 盒子选择 调度器
 */
class SelectBoxMeditor extends BaseMeditor{
    /** 季度 */
    private selectQuarter : number ;
    /** 季度关卡配置 */
    /** 盒子 */
    private arr_Box : Array<Box>;
    /** 测试 - 盒子数量 */
    private boxCount : number;
    /**  */


    
    
    /**用 this.view 来调用 UI视图 */
    constructor(mediatorName?:number,view?:number,assate?:any){
        super(mediatorName,view,assate);
    }


    /**初始化 */
    protected init() : void
    {
        super.init();
        this.arr_Box = new Array<Box>() ;
        this.view.panel_ShowBox.hScrollBar.visible = false;
    }

    /**事件绑定 */
    protected addEvents() : void
    {
        this.view.btn_Exit.on(Laya.Event.CLICK,this,this.onExit);
        this.view.panel_ShowBox.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDow);
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
        this.createBox();
        this.addBoxEvent();
    }

    /**事件 退出 */
    private onExit() : void
    {
        this.dispose();
    }

    //盒子 102,29
    /**创建盒子UI */
    private createBox() : void
    {
        let box : Box;
        this.boxCount = 5;//测试
        for(let i=0; i<this.boxCount;i++)
        {
            box = new Box(this.view);
            box.boxUI.x += (box.boxUI.width + 50)*i;
            this.arr_Box.push(box);
            if(i == this.boxCount-1 )
            {
                box.boxUI.width += 150;
            }
        }

    }

    /**事件绑定 给盒子 */
    private addBoxEvent() : void
    {
        for(let i=0; i<this.arr_Box.length; i++)
        {
            this.arr_Box[i].boxUI.img_box.on(Laya.Event.CLICK,this,this.clickBox,[i])
        }
        
    }

    /**事件 点击盒子 */
    private clickBox(index) : void
    {
        console.log("点击盒子" + index);
    }

    /**事件 面板被点下   2250*/
    private onMouseDow() : void
    {
        console.log(this.arr_Box[0].boxUI.img_box.x);
        console.log(this.view.panel_ShowBox.hScrollBar.value);
    }
}

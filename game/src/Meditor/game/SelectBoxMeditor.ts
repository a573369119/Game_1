/**
 * 盒子选择 调度器
 */
class SelectBoxMeditor extends BaseMeditor{
    /** 季度 */
    private selectQuarter : number ;
    /** 季度关卡配置 */
    /** 盒子 */
    private arr_Box : Array<Box>;
    /**点点 */
    private arr_Point : Array<Laya.Image>;
    /** 测试 - 盒子数量 */
    private boxCount : number;
    /**小怪兽 */
    private moster : any;
    /**起始点坐标 */
    private posX: number;
    /**滑动条数只保存 */
    private sliderKeep : number;
    /**当前滑动点 */
    private currentPoint : Laya.Image;



    
    
    /**用 this.view 来调用 UI视图 */
    constructor(mediatorName?:number,view?:number,assate?:any){
        super(mediatorName,view,assate);
    }


    /**初始化 */
    protected init() : void
    {
        super.init();
        this.arr_Box = new Array<Box>() ;
        this.arr_Point = new Array<Laya.Image>();
        this.posX = 250;
        this.scrollBarSetting();
    }       

    /**事件绑定 */
    protected addEvents() : void
    {
        this.view.btn_Exit.on(Laya.Event.CLICK,this,this.onExit);
        this.view.panel_ShowBox.hScrollBar.changeHandler =new Laya.Handler(this,this.scrollChange); 
        this.view.panel_ShowBox.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDow);
        this.view.on(Laya.Event.MOUSE_UP,this,this.onMouseUp);
    }

    /**事件移除 */
    protected removeEvents() : void
    {
        this.view.btn_Exit.off(Laya.Event.CLICK,this,this.onExit);
        this.view.panel_ShowBox.hScrollBar.changeHandler = null;
        this.view.panel_ShowBox.off(Laya.Event.MOUSE_DOWN,this,this.onMouseDow);
        this.view.off(Laya.Event.MOUSE_UP,this,this.onMouseUp);   

    }

    /**设置季度 - Meditor 起始点*/
    public setSelectQuarter(index) : void
    {
        this.setSelectQuarter = index;//现在默认第一季度
        this.moster = this.view.moster;
        this.moster.removeSelf();
        this.createBox();
        this.addBoxEvent();
    }

    /**事件 退出 */
    private onExit() : void
    {
        this.dispose();
    }

    //盒子 102,29   50 = 200
    /**创建盒子UI */
    private createBox() : void
    {
        let box : Box;
        let img_Point : Laya.Image;
        this.boxCount = 5;//测试
        for(let i=0; i<this.boxCount;i++)
        {
            //
            box = new Box(this.view);
            img_Point = new Laya.Image();
            img_Point.skin = "selectBox/point1.png";
            img_Point.x += 70 * i;
            this.view.sprite_SelectBox.addChild(img_Point);
            box.boxUI.x += (box.boxUI.width + 50)*i;
            this.arr_Point.push(img_Point);
            this.arr_Box.push(box);
            if(i == this.boxCount-1 )
            {
                box.boxUI.width += 125;
            }
        }
        this.currentPoint = this.arr_Point[0];
        this.currentPoint.scale(0.5,0.5);
        this.arr_Point[0].skin = "selectBox/point.png";
        this.view.img_SelectBox.x = this.currentPoint.x - 5;
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
        // console.log("点击盒子" + index);
    }

    /**事件 面板被点下   2250*/
    private onMouseDow() : void
    {
    }

    /**时间 鼠标抬起 */
    private onMouseUp() : void
    {
        let value = this.view.panel_ShowBox.hScrollBar.value;
        for(let i=0; i<this.arr_Box.length ; i++)
        {
            if(i==0 && value < 275)
            {
                Laya.Tween.to(this.view.panel_ShowBox.hScrollBar,{value:0},100);
            }
            else if(value >= 275 + 550*(i-1) && value < 275 + 550*i)
            {
                Laya.Tween.to(this.view.panel_ShowBox.hScrollBar,{value:(550*i - 20)},100);                
            } 
        }
    }

    /** */

    /**面板滚动*/
    private scrollChange(value) : void
    {
        let box : ui.BoxUI;
        for(let i=0; i<this.arr_Box.length;i++)
        {
            if(value <= 130)
            {
                this.arr_Box[0].boxUI.sprite_BoxParent.addChild(this.moster);
                this.moster.x = 123;
                this.moster.y = 0;
                this.mosterMove(value,i);
                break;
            }
            else if(i!=0 && value <= (i*(550)+100) && value >= ((i-1)*550+160+this.posX))
            {

                this.arr_Box[i].boxUI.sprite_BoxParent.addChild(this.moster);
                this.moster.x = 0;
                this.moster.y = 0;
                // console.log("变化"  +  i);
                this.mosterMove(value,i,(i-1)*550+100+this.posX);        
                break;
            }
            else
            {
                this.moster.removeSelf();
            }
        }

    }

    /**怪物移动 */
    private mosterMove(value,i,mix?) : void
    {
        if(i == 0)
        {
            this.moster.x = value + 123;
        }
        else
        {
            this.moster.x = value - mix - 60;
        }
    }

    /**鼠标的左右判断 */
    private mouseJudge(value) : number
    {
        if(this.sliderKeep - value >= 0)
        {
            this.sliderKeep = value;//右
            return 1;
        }
        else
        { 
            this.sliderKeep = value;   //左         
            return -1;
        }
    }
    
    /**scrollBar 设置 */
    private scrollBarSetting() : void
    {
        this.view.panel_ShowBox.hScrollBar.visible = false;
        this.view.panel_ShowBox.hScrollBar.elasticDistance = 0;
        this.view.panel_ShowBox.hScrollBar.rollRatio = 0;
    }
}

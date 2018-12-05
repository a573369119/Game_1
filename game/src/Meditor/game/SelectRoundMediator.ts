/**
 * 徐州呢关卡界面
 */
class SelectRoundMediator extends BaseMeditor{
    /**季度记录 1,2,3*/
    private selectIndex : number;
    /**盒子记录 1,2,3,4,5*/
    private selectBoxIndex : number;
    /**关卡配置文件 */
    private arr_Card : Array<ui.SelectRound.RoundUI>;
    /**按钮事件存储 */
    private arr_btnEvent : Array<ui.SelectRound.RoundUI>;
    /**达到关卡数 从0开始*/
    private roundAt : number;


    /**   this.view  调用 本UI 视图*/

    constructor(mediatorName?:number,view?:number,assate?:any){
        super(mediatorName,view,assate);
    }

    /**初始化 */
    protected init() : void
    {
        super.init();
        Laya.timer.loop(50,this,this.roundLamp);
        this.arr_Card = new Array<ui.SelectRound.RoundUI>();
        this.arr_btnEvent = new Array<ui.SelectRound.RoundUI>();
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
        this.removeRoundEvents();

        Laya.timer.clear(this,this.roundLamp);
    }

    /**选择   SelectIndex季度    SelectBoxIndex选择的盒子*/
    private setRound(SelectIndex,SelectBoxIndex) : void
    {
        this.selectIndex = SelectIndex;
        this.selectBoxIndex = SelectBoxIndex;
        //初始化界面
        this.createUI();
        //界面排版
        this.listUiItem();
        //卡片显示状态
        this.showStyle();
    }

    /**UI创建 */
    private createUI() : void
    {
        let card : ui.SelectRound.RoundUI;
        for(let i=0 ; i<25; i++)
        {
            card = new ui.SelectRound.RoundUI();
            this.view.addChild(card);
            this.arr_Card.push(card);
        } 

    }

    /**界面排版 */
    private listUiItem() : void
    {
        for(let i=0; i<this.arr_Card.length ;i++)
        {
            this.arr_Card[i].y = 300;
            this.arr_Card[i].x = 20;
            this.arr_Card[i].x += (i%5)*(this.arr_Card[i].width);
            this.arr_Card[i].y += Math.floor(i/5)*(this.arr_Card[i].height + 10);
        }
    }

    /**卡片状态 */
    public showStyle() : void
    {
        let thisCard = PlayerData.ins.round_Star.get(this.selectIndex+"-"+this.selectBoxIndex);
        if(thisCard)
        {//有
            this.showCard(thisCard);
        }
        else
        {//无
            this.closeCard();
        }
    }

    /**显示卡片状态 */
    private showCard(thisCard) : void
    {   
        for(let i=0;i<thisCard.length;i++)
        {
            if(this.arr_Card[i] != undefined)
            this.addRoundEvents(this.arr_Card[i],i);            
            if(thisCard[i] != -1)
            {
                this.arr_Card[i].img_Star.skin = this.setStars(thisCard[i]);
                this.setCount(i);
            }
            else
            {
                this.arr_Card[i].img_Star.skin = "selectRound/star0.png";
                this.setCount(i);
                for(let h=i+1;h<this.arr_Card.length;h++)
                {
                    this.arr_Card[h].img_Star.visible = false;
                    this.arr_Card[h].img_RoundBox.skin = "selectRound/lock.png";
                }
                break;
            }
        }
    }

    /**加入 关卡事件 */
    private addRoundEvents(object,index) : void
    {
        object.on(Laya.Event.CLICK,this,this.onClickRound,[index]);
        this.arr_btnEvent.push(object);
    }

    /**移除 关卡事件 */
    private removeRoundEvents() : void
    {
        this.arr_btnEvent.forEach(event => {
            event.off(Laya.Event.CLICK,this,this.onClickRound);
        });
    }

    /**事件 点击关卡 */
    private onClickRound(index) : void
    {
        GameManager.ins_.runMediator(GameData.GAME_MEDIATOR);
        //设置关卡 这里默认 0-0-0 第一个季度的第一盒子的第一个关卡
        console.log("点击的是关卡" + index);
        GameManager.ins_.getMediator(GameData.GAME_MEDIATOR).setData(this.selectIndex,this.selectBoxIndex,index);

    }

    /**卡牌星星和数字 处理 */
    private setStars(starsNum:number) : string
    {
        return "selectRound/star" + starsNum + ".png";
    }

    /**数字的处理 */
    private setCount(index:number) : void
    {
        if(index + 1 >= 10)
        {
            this.arr_Card[index].img_Count1.visible = true

            this.arr_Card[index].img_Count1.skin = "publicAssets/" + Math.floor((index + 1)/10) + ".png";
            this.arr_Card[index].img_Count1.skin = "publicAssets/" + (index + 1)%10 + ".png";       
         }
         else
         {
            this.arr_Card[index].img_Count2.skin = "publicAssets/" + (index + 1) + ".png";                    
         }
    }

    /**没有一个卡片处理方法 */
    private closeCard() : void
    {
        this.arr_Card.forEach(card => {
            card.img_Star.visible = false;
            card.img_RoundBox.skin = "selectRound/lock.png";
        });
    }

    /**退出 */
    private onExit() : void
    {
        this.dispose();
    }

    /**旋转 */
    private roundLamp() : void
    {
        this.view.round_Lamp.rotation += 0.2;
    }
}
/**
 * 游戏逻辑控制
 */
class GameManager{
    /**dictionary Meditor  */
    private MeditorDic : Laya.Dictionary;

    constructor(){
       this.MeditorDic = new Laya.Dictionary();
    }
    public static ins_ : GameManager = new GameManager();

    /**注册 - Meditor */
    private selectMeditor(meditorName) : any
    {
        switch(meditorName)
        {   //注册 Mediator    Case  [需要到GameData相应的 MEIDIATOR 下自己注册一个] : this.MeditorDic.set(meditorName,new XXXMediator(meditorName，(选填-有视图填没视图不填)[在GameData.ts 对应的VIEW下注册个VIEW的标识]));
            case GameData.START_GAME_MEDIATOR : 
                return new StartGameMeditor(meditorName,GameData.START_VIEW);
            default :
                console.log("没有该  mediator");
                break;
        }
    }

//-----------------------------------------------------------------------------------------------------------

    /**启动 调度器*/
    public runMediator(meditorName:any) : void
    {
        if(this.MeditorDic.get(meditorName))
        {
            console.log("调度器已有");
        }
        else
        {   
            this.MeditorDic.set(meditorName,this.selectMeditor(meditorName));
            console.log(this.MeditorDic);
            console.log(this.MeditorDic.get(meditorName));        
        }
    }

    /**销毁 调度器 */
    public destroyMediator(meditorName:number) : void
    {      
        console.log(this.MeditorDic);
        console.log(this.MeditorDic.get(meditorName));  
        let mediator = this.MeditorDic.get(meditorName);
        if(mediator)
        {
            this.MeditorDic.remove(meditorName);
        }
        else
        {
            console.log("没有该 meiditor - destoryMeditor");
        }
        
    }
}
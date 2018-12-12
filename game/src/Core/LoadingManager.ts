/**
 * 加载管理器 
 *  
 * */
class LoadingManager{
    /**资源加载UI */
    private arr_LoadingUi : Array<any> = [
        {url:"res/atlas/loadingView.atlas"},
        {url:"res/atlas/comp.atlas"},
        {url:"unpackage/loadingBg.jpg"}
    ];
    /**资源预定义 (提前加载) 进度条界面*/
    private arr_LoadingUrl : Array<any> = [
        {url:"res/atlas/publicAssets.atlas"},
        {url:"res/atlas/selectBox.atlas"},
        {url:"res/atlas/selectRound.atlas"},
        {url:"res/atlas/select.atlas"},
        {url:"res/atlas/gameView.atlas"},
        {url:"res/atlas/gameView/gameBg.atlas"},
        {url:"res/atlas/gameView/gameDoor.atlas"},
        {url:"res/atlas/gameView/gamePos.atlas"},
        {url:"res/atlas/gameView/gameBtn.atlas"},
        //大图加载
        {url:"unpackage/startGameBg.jpg"},
        {url:"unpackage/cutRope.png"},
    ];
    /**游戏界面 资源*/
    private arr_GameViewUrl : Array<any> = [

    ];
    /**盒子界面资源 */

    /**回调记录 */
    private callBackDic : Laya.Dictionary ;

    constructor(){
        this.callBackDic = new Laya.Dictionary();
    }
    public static ins_ : LoadingManager = new LoadingManager;
//--------------第一次加载----------------
    /**加载加载资源UI */
    public loadLoadingUi(caller:any,callBack:Function) : void
    {
        if(this.callBackDic.get(caller) != callBack)
        {
            this.callBackDic.set(caller,callBack);
        }
        Laya.loader.load(this.arr_LoadingUi,Laya.Handler.create(this,this.onLoadingUi,[caller])); 
        this.loadConfig();//配置文件加载    
    }

    /**资源加载完成 */
    private onLoadingUi(caller) : void
    {
        ViewManager.ins_.LoadingView(GameData.LOADING_VIEW);
        this.progressViewLoading(caller);   
    }

///-------------预加载---------------------start

    /**资源预加载 进度条页面 */
    public progressViewLoading(caller) : void
    {
        Laya.loader.load(this.arr_LoadingUrl,Laya.Handler.create(this,this.onLoad,[caller]),Laya.Handler.create(this,this.onProgress));
    } 

    /**资源预加载中 */
    private onProgress(progress) : void
    {
        console.log("加载中（" + Math.floor(progress*100) + "%）");
        if(ViewManager.ins_.getView(GameData.LOADING_VIEW))
        {         
            let view =ViewManager.ins_.getView(GameData.LOADING_VIEW);
            view.lab_Progress.text = "加载中（" + Math.floor(progress*100) + "%）";
            view.img_Progress.width = 500 * progress;
        }
    }

    /**资源预加载完成 */
    private onLoad(caller) : void
    {
        ViewManager.ins_.getView(GameData.LOADING_VIEW).lab_Progress.text = "加载完成";
        ViewManager.ins_.getView(GameData.LOADING_VIEW).img_Progress.width = 500;
        if(caller && this.callBackDic.get(caller))
        {
            console.log("回调");
            this.callBackDic.get(caller).call(caller);
        }
        else
        {
            console.log("回调失败");
        }          
    }
///-------------预加载---------------------end

///-------------通用加载------------------------
    /**通用 资源加载 */
    public publicLoadRes(assate,caller,callBack) : void
    {
        if(this.callBackDic.get(caller) != callBack)
        {
            this.callBackDic.set(caller,callBack);
        }
        Laya.loader.load(assate,Laya.Handler.create(this,this.loadOver,[caller]),Laya.Handler.create(this,this.loadProgress));
    }
    /**加载中 */
    private loadProgress() : void
    {

    }

    /**加载完成 */
    private loadOver(caller) : void
    {
        if(caller && this.callBackDic.get(caller))
        {
            this.callBackDic.get(caller).call(caller);
        }
        else
        {
            console.log("回调失败");
        }

    }

    ////------------------------配置文件加载-----------------------------
    private loadConfig() : void
    {
        let arr = [
            {url:"config/selectConfig.json"},
            {url:"config/playerDataTest.json"},
            {url:"config/mapConfig.json"}
        ];
        Laya.loader.load(arr,Laya.Handler.create(this,this.configLoadOver),null,Laya.Loader.JSON);
    }

    private configLoadOver() : void
    {
        //数据保存
       let object = Laya.loader.getRes("config/selectConfig.json");
       this.keepLimit(object.limitList);

       let userData = Laya.loader.getRes("config/playerDataTest.json");
       this.keepUserData(userData);
       //--------------------------
       Laya.loader.clearRes("config/selectConfig.json");
       Laya.loader.clearRes("config/playerDataTest.json");
    }

    /**保存 关卡限制信息*/
    private keepLimit(object) : void
    {
        for(let i=0; i<object.length; i++)
        {
            PlayerData.ins.arr_LimitSelect.push(object[i].selectLimit);
            PlayerData.ins.boxLimtDic.set(i,object[i].boxLimit);
        }
    }

    /**保存用户信息 */
    private keepUserData(userData) : void
    {
        let playerData = PlayerData.ins;
        playerData.starNum = userData.playerStars;
        for(let i=0; i<userData.playerCard.length; i++)
        {
            playerData.round_Star.set(userData.playerCard[i].card,userData.playerCard[i].stars);
        }
        console.log(playerData.round_Star);
    }
    //-------------------------获取配置--------------------
    /**获取地图配置 地图配置的所属mapWhere 格式"1-2"第2季的第3个盒子 下标从0 开始   mapId 第几个关卡*/
    public getMapConfig(mapWhere:string,mapId:number) : MapConfig
    {
        let object = Laya.loader.getRes("config/mapConfig.json");
        let objectMapConfig ;
        let mapConfig : MapConfig;
        for(let i =0;i<object.length; i++)
        {
            if(object[i].mapWhere == mapWhere)
            {
                for(let h=0; h<object[i].mapList.length ;h++)
                {
                    if(mapId == object[i].mapList[h].mapId){
                    objectMapConfig =  object[i].mapList[h];
                    mapConfig = new MapConfig(objectMapConfig);
                    return mapConfig;
                    }
                }
                break;
            }
        }
        console.log("没有此配置 mapId = " + mapId);
        Laya.loader.clearRes("config/mapConfig.json");
        return null;
    }
    //-----------------------加载动画-------------------------

}
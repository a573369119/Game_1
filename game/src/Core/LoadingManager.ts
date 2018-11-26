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
        console.log(this.callBackDic.get(caller));
        Laya.loader.load(this.arr_LoadingUi,Laya.Handler.create(this,this.onLoadingUi,[caller]));     
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
        if(ViewManager.ins_.getView(GameData.LOADING_VIEW))
        {
            let view =ViewManager.ins_.getView(GameData.LOADING_VIEW);
            view.lab_Progress.text = "加载中（" + Math.floor(progress) + "%）";
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


}
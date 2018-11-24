/**
 * 视图管理管理
 */
class LayerManager{

    constructor(){
        
    }
    public static ins_ : LayerManager = new LayerManager();

    /**加载页面 GameData中的View定义 */
    public LoadingView(View:number,url?:Array<any>)
    {
        let urlSrc = [];
        let view : any;
        switch(View)
        {
            case GameData.LOADING_VIEW:
                view = 
                break;
            case GameData.START_VIEW:
                
                break;
            case GameData.SELECT_VIEW:
                
                break;           
            case GameData.SELECT_BOX_VIEW:
                
                break;
            case GameData.SELECT_ROUND_VIEW:
                
                break;
            case GameData.GAME_VIEW:
                
                break;
            case 6:
                
                break;
            default:
                console.log('没有该界面定义 - ViewManager');
                break;
        }
    }
}
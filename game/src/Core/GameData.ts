/**
 * 游戏数据定义
 */
class GameData{
    //---------------------------stage--------------------
    /**屏幕宽度 */
    public static STAGE_WIDTH : number = 750;
    /**屏幕高度 */
    public static STAGE_HEIGHT : number = 1334;
    /**适配模式 */
    public static STAGE_SCALE_MODE : string = "exactfit";
    /**竖屏 */
    public static STAGE_SCREEN_MODE : string = "vertical";
    /**对齐方式 */
    public static STAGE_ALIGN_V : string = "middle"; 
    public static STAGE_ALIGN_H : string = "center";
    //---------------------------colider------------------
    /**预设碰撞距离 像素*/
    public static COLLIDE_DISTANCE : number = 50;
    //---------------------------view---------------------
    /**加载界面 进度条*/
    public static LOADING_VIEW : number = 0;
    /**开始界面 */
    public static START_VIEW : number = 1;
    /**选择季度界面*/
    public static SELECT_VIEW : number = 2;
    /**选择盒子界面 */
    public static SELECT_BOX_VIEW : number = 3;
    /**选择关卡界面*/
    public static SELECT_ROUND_VIEW : number = 4;
    /**游戏界面 */
    public static GAME_VIEW : number = 5;
    //---------------------------view---------------------
    //---------------------------Mediator----------------
    /**开始游戏 调度器*/
    public static START_GAME_MEDIATOR : number = 1;
    //public static START_GAME_MEDIATOR : number = 1;
    
    //---------------------------Mediator----------------

    constructor(){
        
    }
    public static ins_ : GameData = new GameData();
    
    
}
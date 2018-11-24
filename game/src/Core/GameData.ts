/**
 * 游戏数据定义
 */
class GameData{
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

    constructor(){

    }
    public static ins_ : GameData = new GameData();
    
    
}
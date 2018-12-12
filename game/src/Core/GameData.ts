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
    /**进入游戏界面 开箱子界面 封箱子界面*/
    public static OPEN_VIEW : number = 6;
    //---------------------------view---------------------
    //---------------------------Mediator----------------
    /**开始游戏 调度器*/
    public static START_GAME_MEDIATOR : number = 1;
    /**季度选择 调度器 */
    public static SELECT_MEDIATOR : number = 2;
    /**盒子选择 调度器 */
    public static SELECT_BOX_MEDIATOR : number = 3;
    /**关卡选择 调度器 */
    public static SELECT_ROUND_MEDIATOR : number = 4;
    /**游戏 调度器 */
    public static GAME_MEDIATOR : number = 5;
    //---------------------------Mediator----------------
    //-------------------------动画名称-------------------
    /**[monster]糖果丢失， 伤心 15*/
    public static ANI_MONSTER_SAD : string = "no"; 
    /**[monster]糖果吃到，咀嚼 9 LOOP*/
    public static ANI_MONSTER_EAT : string = "eat";
    /**[monster]吃到星星，开心 19*/
    public static ANI_MONSTER_HAPPYE : string = "getStar";
    /**[monster]糖果靠近 张嘴 13*/
    public static ANI_MONSTER_OPEN : string = "open";
    /**[monster]动作 给我吃 26*/
    public static ANI_MONSTER_GIVE_ME : string = "giveMe";
    /**[monster]动作 随机 29*/
    public static ANI_MONSTER_GIVE_ME2 : string = "giveMe2_";
    /**[monster]站立 不动 17*/
    public static ANI_MONSTER_STAND : string = "stand";
    /**[monster]动作 翘脚 43*/
    public static ANI_MONSTER_ACTION : string = "action";
    //------------------------动画-------------------------

    constructor(){
        
    }
    public static ins_ : GameData = new GameData();
    
    
}
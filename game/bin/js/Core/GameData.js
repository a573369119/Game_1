/**
 * 游戏数据定义
 */
var GameData = /** @class */ (function () {
    //------------------------动画-------------------------
    function GameData() {
    }
    //---------------------------stage--------------------
    /**屏幕宽度 */
    GameData.STAGE_WIDTH = 750;
    /**屏幕高度 */
    GameData.STAGE_HEIGHT = 1334;
    /**适配模式 */
    GameData.STAGE_SCALE_MODE = "exactfit";
    /**竖屏 */
    GameData.STAGE_SCREEN_MODE = "vertical";
    /**对齐方式 */
    GameData.STAGE_ALIGN_V = "middle";
    GameData.STAGE_ALIGN_H = "center";
    //---------------------------colider------------------
    /**预设碰撞距离 像素*/
    GameData.COLLIDE_DISTANCE = 50;
    //---------------------------view---------------------
    /**加载界面 进度条*/
    GameData.LOADING_VIEW = 0;
    /**开始界面 */
    GameData.START_VIEW = 1;
    /**选择季度界面*/
    GameData.SELECT_VIEW = 2;
    /**选择盒子界面 */
    GameData.SELECT_BOX_VIEW = 3;
    /**选择关卡界面*/
    GameData.SELECT_ROUND_VIEW = 4;
    /**游戏界面 */
    GameData.GAME_VIEW = 5;
    /**进入游戏界面 开箱子界面 封箱子界面*/
    GameData.OPEN_VIEW = 6;
    //---------------------------view---------------------
    //---------------------------Mediator----------------
    /**开始游戏 调度器*/
    GameData.START_GAME_MEDIATOR = 1;
    /**季度选择 调度器 */
    GameData.SELECT_MEDIATOR = 2;
    /**盒子选择 调度器 */
    GameData.SELECT_BOX_MEDIATOR = 3;
    /**关卡选择 调度器 */
    GameData.SELECT_ROUND_MEDIATOR = 4;
    /**游戏 调度器 */
    GameData.GAME_MEDIATOR = 5;
    //---------------------------Mediator----------------
    //-------------------------动画名称-------------------
    /**[monster]糖果丢失， 伤心 15*/
    GameData.ANI_MONSTER_SAD = "no";
    /**[monster]糖果吃到，咀嚼 9 LOOP*/
    GameData.ANI_MONSTER_EAT = "eat";
    /**[monster]吃到星星，开心 19*/
    GameData.ANI_MONSTER_HAPPYE = "getStar";
    /**[monster]糖果靠近 张嘴 13*/
    GameData.ANI_MONSTER_OPEN = "open";
    /**[monster]动作 给我吃 26*/
    GameData.ANI_MONSTER_GIVE_ME = "giveMe";
    /**[monster]动作 随机 29*/
    GameData.ANI_MONSTER_GIVE_ME2 = "giveMe2_";
    /**[monster]站立 不动 17*/
    GameData.ANI_MONSTER_STAND = "stand";
    /**[monster]动作 翘脚 43*/
    GameData.ANI_MONSTER_ACTION = "action";
    GameData.ins_ = new GameData();
    return GameData;
}());
//# sourceMappingURL=GameData.js.map
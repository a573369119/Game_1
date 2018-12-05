var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 游戏主逻辑
 * @游戏中的配置，使用 mapCoinfig ，包括需要的星星，怪物，糖果位置,所有需要的信息，如果信息不够自己添加，配置信息是 bin/config/mapConfig.json，
 * @玩家的信息 PlayerData.ins 调用
 * @逻辑中动画播放结束来触发时间。ani 是用刀划开盒子 ani2是用胶带封住盒子  ani3是//吃到糖果显示计分板 ani4//重新开始 或者 下一关。关闭计分板 打开箱子操作  动画完成结果返回到doorAniEvent();
 * @如果要写入 就直接写入PlayerData， //不能刷新 ，用户数据是测试。以后他们用数据库存储 ，和后台连接，所以每次刷新，都会重置。如果想手动设置 去 bin/config/playerDataTest.json，
 * @播放动画  AnimationManager.ins.playAnimation();
 *
 */
var GameMediator = /** @class */ (function (_super) {
    __extends(GameMediator, _super);
    /**用 this.view 来调用 UI视图 */
    function GameMediator(mediatorName, view, assate) {
        return _super.call(this, mediatorName, view, assate) || this;
    }
    /**初始化 */
    GameMediator.prototype.init = function () {
        this.doorOpen = new ui.GameView.GameViewDoorUI();
        this.menu = new ui.GameView.GameMenuUI();
        _super.prototype.init.call(this); //init之后 才会有 this.view
        this.view.addChild(this.menu);
        this.view.addChild(this.doorOpen);
    };
    /**添加事件 */
    GameMediator.prototype.addEvents = function () {
        this.view.btn_Super.on(Laya.Event.CLICK, this, this.onUserSuper);
        this.view.btn_Teach.on(Laya.Event.CLICK, this, this.onTeachYou);
        this.view.btn_ReGame.on(Laya.Event.CLICK, this, this.onReGame);
        this.view.btn_Menu.on(Laya.Event.CLICK, this, this.onMenu);
        this.menu.btn_Continue.on(Laya.Event.CLICK, this, this.onContinue);
        this.menu.btn_SelectRound.on(Laya.Event.CLICK, this, this.onSelectRound);
        this.menu.btn_Super.on(Laya.Event.CLICK, this, this.onShopSuper);
        this.menu.btn_MainMenu.on(Laya.Event.CLICK, this, this.onMainMenu);
        this.doorOpen.btn_Next.on(Laya.Event.CLICK, this, this.onNextRound);
        this.doorOpen.btn_Replay.on(Laya.Event.CLICK, this, this.onReplay);
        this.doorOpen.btn_ReturnRound.on(Laya.Event.CLICK, this, this.onSelectRound);
        this.addAnimationOver();
    };
    /**移除事件 */
    GameMediator.prototype.removeEvents = function () {
        this.view.btn_Super.off(Laya.Event.CLICK, this, this.onUserSuper);
        this.view.btn_Teach.off(Laya.Event.CLICK, this, this.onTeachYou);
        this.view.btn_ReGame.off(Laya.Event.CLICK, this, this.onReGame);
        this.view.btn_Menu.off(Laya.Event.CLICK, this, this.onMenu);
        this.menu.btn_Continue.off(Laya.Event.CLICK, this, this.onContinue);
        this.menu.btn_SelectRound.off(Laya.Event.CLICK, this, this.onSelectRound);
        this.menu.btn_Super.off(Laya.Event.CLICK, this, this.onShopSuper);
        this.menu.btn_MainMenu.off(Laya.Event.CLICK, this, this.onMainMenu);
        this.doorOpen.btn_Next.off(Laya.Event.CLICK, this, this.onNextRound);
        this.doorOpen.btn_Replay.off(Laya.Event.CLICK, this, this.onReplay);
        this.doorOpen.btn_ReturnRound.off(Laya.Event.CLICK, this, this.onSelectRound);
        this.removeAnimationOver();
    };
    /**绑定动画完成 */
    GameMediator.prototype.addAnimationOver = function () {
        this.doorOpen.ani4.on(Laya.Event.COMPLETE, this, this.doorAniEvent, [4]);
        this.doorOpen.ani3.on(Laya.Event.COMPLETE, this, this.doorAniEvent, [3]);
        this.doorOpen.ani2.on(Laya.Event.COMPLETE, this, this.doorAniEvent, [2]);
        this.doorOpen.ani1.on(Laya.Event.COMPLETE, this, this.doorAniEvent, [1]);
    };
    /**移除 动画完成事件*/
    GameMediator.prototype.removeAnimationOver = function () {
        this.doorOpen.ani1.off(Laya.Event.COMPLETE, this, this.doorAniEvent);
        this.doorOpen.ani2.off(Laya.Event.COMPLETE, this, this.doorAniEvent);
        this.doorOpen.ani3.off(Laya.Event.COMPLETE, this, this.doorAniEvent);
        this.doorOpen.ani4.off(Laya.Event.COMPLETE, this, this.doorAniEvent);
    };
    /**开门动画完成处理时间 */
    GameMediator.prototype.doorAniEvent = function (index) {
        switch (index) {
            case 1: //用刀划开盒子
                this.doorOpen.visible = false; //关闭动画层
                break;
            case 2: //用胶带封住盒子
                if (this.isMain) {
                    ViewManager.ins_.returnView(GameData.START_GAME_MEDIATOR, GameData.START_VIEW);
                }
                else {
                    this.dispose();
                    GameManager.ins_.getMediator(this.mediator - 1).showStyle(); //需测试
                }
                break;
            case 3: //吃到糖果显示计分板
                break;
            case 4: //重新开始 或者 下一关。关闭计分板 打开箱子操作
        }
    };
    /**事件 ！使用超能力*/
    GameMediator.prototype.onUserSuper = function () {
        console.log("技能 - 超能力");
    };
    /**事件 ！使用引导 */
    GameMediator.prototype.onTeachYou = function () {
        console.log("技能 - 引导");
    };
    /**事件 重玩 效果闪白光 ，重开*/
    GameMediator.prototype.onReGame = function () {
        console.log("重玩");
    };
    /**事件 菜单 */
    GameMediator.prototype.onMenu = function () {
        console.log("菜单");
        this.menu.visible = true;
    };
    /**事件 吃到糖果->下一关*/
    GameMediator.prototype.onNextRound = function () {
        console.log("吃到糖果->下一关");
    };
    /**事件 吃到糖果->重玩  效果开门重开 */
    GameMediator.prototype.onReplay = function () {
        console.log("重玩  效果开门重开");
    };
    /**游戏初始 */
    GameMediator.prototype.setInit = function () {
        this.menu.visible = false;
    };
    /**设置游戏初始数据 包括 关卡 盒子 季度 */
    GameMediator.prototype.setData = function (select, box, round) {
        this.select = select;
        this.box = box;
        this.round = round;
        this.doorOpen.ani1.play(0, false);
        this.setInit();
    };
    //----------------------------------------菜单逻辑-------------------------------------------------------
    /**事件 继续游戏 */
    GameMediator.prototype.onContinue = function () {
        this.menu.visible = false;
        //开始游戏
    };
    /**事件 选择关卡*/
    GameMediator.prototype.onSelectRound = function () {
        //选择关卡
        this.isMain = false;
        this.doorOpen.visible = true;
        this.doorOpen.ani2.play(0, false);
        GameManager.ins_.getMediator(GameData.SELECT_ROUND_MEDIATOR).runRound();
    };
    /**事件 主界面 */
    GameMediator.prototype.onMainMenu = function () {
        //跳到主界面    
        this.isMain = true;
        this.doorOpen.visible = true;
        this.doorOpen.ani2.play(0, false);
        GameManager.ins_.getMediator(GameData.START_GAME_MEDIATOR).runRound();
    };
    /**事件 超能力获取 */
    GameMediator.prototype.onShopSuper = function () {
        console.log("获得超能力");
    };
    //-------------------------------------------------------------------------------------------------
    /**退出游戏界面 */
    GameMediator.prototype.exitGame = function () {
        this.dispose();
    };
    return GameMediator;
}(BaseMeditor));
//# sourceMappingURL=GameMediator.js.map
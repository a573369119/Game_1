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
var Matter;
var LayaRender;
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
        this.timerCount = 0;
        _super.prototype.init.call(this); //init之后 才会有 this.view
        this.view.addChild(this.menu);
        this.view.addChild(this.doorOpen);
        this.contactConstraintsArray = new Array();
        this.isNotPlayedOpen = true;
        this.initMatter();
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
        this.doorOpen.ani5.on(Laya.Event.COMPLETE, this, this.doorAniEvent, [5]);
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
        this.doorOpen.ani5.off(Laya.Event.COMPLETE, this, this.doorAniEvent);
    };
    /**开门动画完成处理时间 */
    GameMediator.prototype.doorAniEvent = function (index) {
        switch (index) {
            case 1: //用刀划开盒子
                this.doorOpen.visible = false; //关闭动画层                
                this.UpdateData("0-0", this.round, true);
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
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
            case 4:
                this.doorOpen.visible = false; //关闭动画层
                break;
            //重新开始 或者 下一关。关闭计分板 打开箱子操作
            case 4:
                this.doorOpen.visible = false; //关闭动画层
                break;
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
        this.doorOpen.ani4.play(0, false);
        AnimationManager.ins.stopAnimation(GameData.ANI_MONSTER_EAT);
        for (var i = 0; i < this.mapConfig.arr_Points.length; i++) {
            this.mapConfig.arr_Points[i].point.visible = false;
        }
        this.round++;
        this.UpdateData("0-0", this.round, false);
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
    /**更新每关数据  isNew：是否是第一次获取mapConfig*/
    GameMediator.prototype.UpdateData = function (mapWhere, mapId, isNew) {
        if (isNew)
            this.mapConfig = LoadingManager.ins_.getMapConfig(mapWhere, mapId, this.view.panel_GameWorld);
        else
            LoadingManager.ins_.getMapConfig(mapWhere, mapId, this.view.panel_GameWorld, this.mapConfig); //更新mapconfig操作     
        this.getCandy();
        this.contactHook();
        Laya.timer.frameLoop(1, this, this.checkCandyPos);
        Laya.timer.frameLoop(1, this, this.collisionCheckCandy);
        Laya.timer.frameLoop(1, this, this.collisionCheckMonster);
        Laya.timer.frameLoop(1, this, this.collisionCheckBalloon);
        //怪兽
        AnimationManager.ins.playAnimation(GameData.ANI_MONSTER_STAND, true, this.mapConfig.monster.x, this.mapConfig.monster.y, this.view.panel_GameWorld);
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
    //----------------------------------------游戏逻辑-------------------------------------------------------
    /**初始化物理引擎 */
    GameMediator.prototype.initMatter = function () {
        var gameWorld = new Laya.Sprite();
        this.view.panel_GameWorld.addChild(gameWorld);
        gameWorld.zOrder = 1;
        GameMediator.engine = Matter.Engine.create({ enableSleeping: true });
        Matter.Engine.run(GameMediator.engine);
        var render = LayaRender.create({ engine: GameMediator.engine,
            container: gameWorld,
            width: GameData.STAGE_WIDTH,
            height: GameData.STAGE_HEIGHT,
            options: { showAngleIndicator: true,
                showCollisions: true,
                showVelocity: true } });
        LayaRender.run(render);
    };
    /**获取糖果刚体 */
    GameMediator.prototype.getCandy = function () {
        GameMediator.candyBody = Matter.Bodies.circle(this.mapConfig.arr_Ropes[0].rope.bodies[this.mapConfig.arr_Ropes[0].rope.bodies.length - 1].position.x, this.mapConfig.arr_Ropes[0].rope.bodies[this.mapConfig.arr_Ropes[0].rope.bodies.length - 1].position.y, 1, { mass: 1000, frictionAir: 0.0001, timeScale: 1.25, collisionFilter: { group: -1 } });
        Matter.World.add(GameMediator.engine.world, GameMediator.candyBody);
    };
    /**连接钩子 */
    GameMediator.prototype.contactHook = function () {
        for (var i = 0; i < this.mapConfig.arr_Points.length; i++) {
            var constraint = Matter.Constraint.create({
                bodyA: this.mapConfig.arr_Ropes[i].rope.bodies[0],
                pointB: { x: this.mapConfig.arr_Points[i].x, y: this.mapConfig.arr_Points[i].y },
                stiffness: 1
            });
            this.contactConstraintsArray.push(constraint);
        }
        Matter.World.add(GameMediator.engine.world, this.contactConstraintsArray);
    };
    /**鼠标事件 点击*/
    GameMediator.prototype.onMouseDown = function () {
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        Laya.timer.frameLoop(1, this, this.colorMiss);
    };
    /**鼠标事件 拖拽 */
    GameMediator.prototype.onMouseMove = function () {
        //斜率算法
        /*for(let i=0;i<this.constraints.length-1;i++){
            if((this.bodys[i+1].position.x-this.bodys[i].position.x)!=0&&(Laya.stage.mouseX-this.bodys[i].position.x)){
                let k1=(this.bodys[i+1].position.y-this.bodys[i].position.y)/(this.bodys[i+1].position.x-this.bodys[i].position.x);
            let k2=(Laya.stage.mouseY-this.bodys[i].position.y)/(Laya.stage.mouseX-this.bodys[i].position.x);
            if((Laya.stage.mouseY<=this.bodys[i+1].position.y&&Laya.stage.mouseY>=this.bodys[i].position.y&&k1==k2)){
                Matter.World.remove(GameMeditor.engine.world,this.constraints[i]);
                //Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
                break;
            }
            }
            
        }*/
        //点到直线距离算法
        for (var j = 0; j < this.mapConfig.arr_Ropes.length; j++) {
            for (var i = 0; i < this.mapConfig.arr_Ropes[j].constraints.length - 1; i++) {
                var realH = this.calDistance(this.mapConfig.arr_Ropes[j].rope.bodies[i].position.x, this.mapConfig.arr_Ropes[j].rope.bodies[i + 1].position.x, this.mapConfig.arr_Ropes[j].rope.bodies[i].position.y, this.mapConfig.arr_Ropes[j].rope.bodies[i + 1].position.y, Laya.stage.mouseX, Laya.stage.mouseY);
                if (this.mapConfig.arr_Ropes[j].rope.bodies[i + 1].position.x == this.mapConfig.arr_Ropes[j].rope.bodies[i].position.x) {
                    if (Laya.stage.mouseX >= (this.mapConfig.arr_Ropes[j].rope.bodies[i].position.x - 8) && Laya.stage.mouseX <= (this.mapConfig.arr_Ropes[j].rope.bodies[i].position.x + 8)
                        && (Laya.stage.mouseY <= this.mapConfig.arr_Ropes[j].rope.bodies[i + 1].position.y && Laya.stage.mouseY >= this.mapConfig.arr_Ropes[j].rope.bodies[i].position.y)) {
                        Matter.World.remove(GameMediator.engine.world, this.mapConfig.arr_Ropes[j].constraints[i]);
                    }
                }
                else {
                    if (realH <= 15 && (Laya.stage.mouseY <= this.mapConfig.arr_Ropes[j].rope.bodies[i + 1].position.y && Laya.stage.mouseY >= this.mapConfig.arr_Ropes[j].rope.bodies[i].position.y)) {
                        // console.log(this.mapConfig.arr_Ropes[j].constraints);
                        Matter.World.remove(GameMediator.engine.world, this.mapConfig.arr_Ropes[j].constraints[i]);
                        // console.log(this.mapConfig.arr_Ropes[j].constraints);                                
                        Laya.timer.frameLoop(8, this.mapConfig.arr_Ropes[j], this.mapConfig.arr_Ropes[j].checkRopeColorMiss);
                        if (this.mapConfig.arr_Ropes[j].isRopeMax == true) {
                            Matter.World.remove(GameMediator.engine.world, this.mapConfig.arr_Ropes[j].ropeMax);
                            this.mapConfig.arr_Ropes[j].isRopeMax == false;
                        }
                        else {
                            Laya.timer.clear(this.mapConfig.arr_Ropes[j], this.mapConfig.arr_Ropes[j].checkMaxRope);
                        }
                    }
                }
            }
        }
    };
    /**鼠标事件 抬起 */
    GameMediator.prototype.onMouseUp = function () {
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
    };
    /**点到直线的距离 */
    GameMediator.prototype.calDistance = function (x1, x2, y1, y2, x3, y3) {
        var k = (y1 - y2) / (x1 - x2); //斜率
        var b = y1 - k * x1; //y轴交点
        var h = Math.abs((k * x3 - y3 + b) / (Math.sqrt(k * k + 1)));
        return h;
    };
    /**糖果图片追踪糖果刚体得位置，使其重合 */
    GameMediator.prototype.checkCandyPos = function () {
        this.mapConfig.candy.pos(GameMediator.candyBody.position.x, GameMediator.candyBody.position.y);
    };
    /**检测糖果与星星碰撞 */
    GameMediator.prototype.collisionCheckCandy = function () {
        //检测糖果与星星
        for (var i = 0; i < this.mapConfig.arr_Stars.length; i++) {
            if (DistanceTool.collisionCheck(this.mapConfig.arr_Stars[i], this.mapConfig.candy, this.mapConfig.arr_Stars[i].width, this.mapConfig.candy.width, this.mapConfig.arr_Stars[i].height, this.mapConfig.candy.height)) {
                this.mapConfig.arr_Stars[i].star.visible = false;
            }
        }
    };
    /**检测糖果与怪兽碰撞 */
    GameMediator.prototype.collisionCheckMonster = function () {
        //检测糖果与怪兽接近时张嘴
        if (DistanceTool.collisionCheck(this.mapConfig.monster, this.mapConfig.candy, this.mapConfig.monster.openWidth, this.mapConfig.candy.width, this.mapConfig.monster.openHeight, this.mapConfig.candy.height)) {
            if (this.isNotPlayedOpen == true) {
                AnimationManager.ins.stopAnimation(GameData.ANI_MONSTER_STAND);
                AnimationManager.ins.playAnimation(GameData.ANI_MONSTER_OPEN, false, this.mapConfig.monster.x, this.mapConfig.monster.y, this.view.panel_GameWorld);
                this.isNotPlayedOpen = false;
                console.log("成功");
            }
            //检测糖果是否到达吃到的范围
            if (DistanceTool.collisionCheck(this.mapConfig.monster, this.mapConfig.candy, this.mapConfig.monster.eatWidth, this.mapConfig.candy.width, this.mapConfig.monster.eatHeight, this.mapConfig.candy.height)) {
                AnimationManager.ins.stopAnimation(GameData.ANI_MONSTER_OPEN);
                AnimationManager.ins.playAnimation(GameData.ANI_MONSTER_EAT, true, this.mapConfig.monster.x, this.mapConfig.monster.y, this.view.panel_GameWorld);
                Laya.timer.clear(this, this.checkCandyPos);
                Laya.timer.clear(this, this.collisionCheckCandy);
                Laya.timer.clear(this, this.collisionCheckMonster);
                this.mapConfig.candy.candy.visible = false;
                this.isEat = true;
                this.isNotPlayedOpen = true;
            }
        }
        else {
            if (this.isNotPlayedOpen == false) {
                AnimationManager.ins.stopAnimation(GameData.ANI_MONSTER_OPEN);
                AnimationManager.ins.playAnimation(GameData.ANI_MONSTER_STAND, true, this.mapConfig.monster.x, this.mapConfig.monster.y, this.view.panel_GameWorld);
                this.isNotPlayedOpen = true;
            }
        }
    };
    /**检测最后一根绳子alpha是否为0 */
    GameMediator.prototype.colorMiss = function () {
        for (var j = 0; j < this.mapConfig.arr_Ropes.length; j++) {
            if (this.mapConfig.arr_Ropes[j].ropeAlpha <= 0) {
                Laya.timer.clear(this.mapConfig.arr_Ropes[j], this.mapConfig.arr_Ropes[j].checkRopeColorMiss);
                for (var i = 0; i < this.mapConfig.arr_Ropes[j].constraints.length; i++) {
                    Matter.World.remove(GameMediator.engine.world, this.mapConfig.arr_Ropes[j].constraints[i]);
                }
                //检测最后一根绳子alpha是否为0
                if (this.mapConfig.arr_Ropes.length == 1) {
                    for (var i = 0; i < this.contactConstraintsArray.length; i++) {
                        Matter.World.remove(GameMediator.engine.world, this.contactConstraintsArray[i]);
                    }
                    this.contactConstraintsArray = [];
                    this.doorOpen.visible = true;
                    //吃到则弹出菜单
                    if (this.isEat == true) {
                        this.doorOpen.ani3.play(0, false);
                        this.isEat = false;
                    }
                    //未吃到则重新加载本关
                    else {
                        //this.doorOpen.ani5.play(0,false);
                    }
                }
                this.mapConfig.arr_Ropes.splice(j, 1);
            }
        }
    };
    /**检测糖果与气泡碰撞 */
    GameMediator.prototype.collisionCheckBalloon = function () {
        for (var i = 0; i < this.mapConfig.arr_Balloons.length; i++) {
            if (DistanceTool.collisionCheck(this.mapConfig.arr_Balloons[i], this.mapConfig.candy, this.mapConfig.arr_Balloons[i].width, this.mapConfig.candy.width, this.mapConfig.arr_Balloons[i].height, this.mapConfig.candy.height)) {
                this.mapConfig.arr_Balloons[i].balloon.pos(GameMediator.candyBody.position.x, GameMediator.candyBody.position.y);
                GameMediator.engine.world.gravity.y = -1;
            }
        }
    };
    //-------------------------------------------------------------------------------------------------
    /**退出游戏界面 */
    GameMediator.prototype.exitGame = function () {
        this.dispose();
    };
    return GameMediator;
}(BaseMeditor));
//# sourceMappingURL=GameMediator.js.map
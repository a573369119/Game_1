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
        _super.prototype.init.call(this); //init之后 才会有 this.view
        this.view.addChild(this.menu);
        this.view.addChild(this.doorOpen);
        this.hooksArray = new Array();
        this.ropes = new Array();
        this.contactConstraintsArray = new Array();
        this.hooksPosArray = [[150, 350], [300, 350], [450, 350]];
        this.ropesLengthArray = [9, 15, 21];
        this.candy = new Candy();
        this.initMatter();
        this.initWorld();
        Laya.timer.frameLoop(1, this, this.checkCandyPos);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        Laya.timer.frameLoop(1, this.ropes[1], this.ropes[1].check2, [this.ropesLengthArray[1] * 23]);
        Laya.timer.frameLoop(1, this.ropes[2], this.ropes[2].check2, [this.ropesLengthArray[2] * 23]);
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
    //----------------------------------------游戏逻辑-------------------------------------------------------
    /**初始化物理引擎 */
    GameMediator.prototype.initMatter = function () {
        var gameWorld = new Laya.Sprite();
        Laya.stage.addChild(gameWorld);
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
    /**创建物理世界 */
    GameMediator.prototype.initWorld = function () {
        this.createHook();
        this.CreateRope();
        this.createCandy();
        this.contactHook();
        this.contactCandy(this.ropes[0].rope.bodies[this.ropes[0].rope.bodies.length - 1]);
        this.contactCandy(this.ropes[1].rope.bodies[this.ropes[1].rope.bodies.length - 1]);
        this.contactCandy(this.ropes[2].rope.bodies[this.ropes[2].rope.bodies.length - 1]);
    };
    /**创建钩子 */
    GameMediator.prototype.createHook = function () {
        for (var i = 0; i < this.hooksPosArray.length; i++) {
            var hook = new Point(this.hooksPosArray[i][0], this.hooksPosArray[i][1]);
            this.hooksArray.push(hook);
        }
    };
    /**创建绳子 */
    GameMediator.prototype.CreateRope = function () {
        for (var i = 0; i < this.ropesLengthArray.length; i++) {
            var rope = new Rope(this.hooksArray[i].x, this.hooksArray[i].y, this.ropesLengthArray[i]);
            this.ropes.push(rope);
        }
    };
    /**连接钩子 */
    GameMediator.prototype.contactHook = function () {
        for (var i = 0; i < this.hooksArray.length; i++) {
            var constraint = Matter.Constraint.create({
                bodyA: this.ropes[i].rope.bodies[0],
                pointB: { x: this.hooksArray[i].x, y: this.hooksArray[i].y },
                stiffness: 1.2
            });
            this.contactConstraintsArray.push(constraint);
        }
        Matter.World.add(GameMediator.engine.world, this.contactConstraintsArray);
    };
    /**创建糖果 */
    GameMediator.prototype.createCandy = function () {
        this.candyBody = Matter.Bodies.circle(this.ropes[0].rope.bodies[this.ropes[0].rope.bodies.length - 1].position.x, this.ropes[0].rope.bodies[this.ropes[0].rope.bodies.length - 1].position.y, 1, { frictionAir: 0.0001, timeScale: 1.25, collisionFilter: { group: -1 } });
        Matter.World.add(GameMediator.engine.world, this.candyBody);
    };
    /**连接糖果 */
    GameMediator.prototype.contactCandy = function (body) {
        var constraint = Matter.Constraint.create({
            bodyA: body,
            bodyB: this.candyBody,
            stiffness: 1.2,
            length: 20,
            render: { lineWidth: 6 }
        });
        this.contactConstraintsArray.push(constraint);
        Matter.World.add(GameMediator.engine.world, constraint);
    };
    /**鼠标事件 点击*/
    GameMediator.prototype.onMouseDown = function () {
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
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
                console.log(i);
                //Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
                break;
            }
            }
            
        }*/
        //点到直线距离算法
        for (var j = 0; j < this.ropes.length; j++) {
            for (var i = 0; i < this.ropes[j].constraints.length - 1; i++) {
                var realH = this.calDistance(this.ropes[j].rope.bodies[i].position.x, this.ropes[j].rope.bodies[i + 1].position.x, this.ropes[j].rope.bodies[i].position.y, this.ropes[j].rope.bodies[i + 1].position.y, Laya.stage.mouseX, Laya.stage.mouseY);
                if (this.ropes[j].rope.bodies[i + 1].position.x == this.ropes[j].rope.bodies[i].position.x) {
                    if (Laya.stage.mouseX >= (this.ropes[j].rope.bodies[i].position.x - 8) && Laya.stage.mouseX <= (this.ropes[j].rope.bodies[i].position.x + 8)
                        && (Laya.stage.mouseY <= this.ropes[j].rope.bodies[i + 1].position.y && Laya.stage.mouseY >= this.ropes[j].rope.bodies[i].position.y)) {
                        Matter.World.remove(GameMediator.engine.world, this.ropes[j].constraints[i]);
                    }
                }
                else {
                    if (realH <= 15 && (Laya.stage.mouseY <= this.ropes[j].rope.bodies[i + 1].position.y && Laya.stage.mouseY >= this.ropes[j].rope.bodies[i].position.y)) {
                        Matter.World.remove(GameMediator.engine.world, this.ropes[j].constraints[i]);
                        //Matter.World.remove(GameMeditor.engine.world,this.ropeConstraints[j]);
                        if (j == 1) {
                            Matter.World.remove(GameMediator.engine.world, this.ropes[1].constraint1);
                        }
                        else if (j == 2) {
                            Matter.World.remove(GameMediator.engine.world, this.ropes[2].constraint1);
                            break;
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
    /*collisionCheck():void{
            let currDis1=this.Distance(this.candy.position.x,Game.demo.star1.x,this.candy.position.y,Game.demo.star1.y);
            if(currDis1<45){
                Game.demo.star1.visible=false;
            }
            let currDis2=this.Distance(this.candy.position.x,Game.demo.star2.x,this.candy.position.y,Game.demo.star2.y);
            if(currDis2<45){
                Game.demo.star2.visible=false;
            }
            let currDis3=this.Distance(this.candy.position.x,Game.demo.star3.x,this.candy.position.y,Game.demo.star3.y);
            if(currDis3<45){
                Game.demo.star3.visible=false;
            }
            let currDis4=this.Distance(this.candy.position.x,Game.demo.frog.x,this.candy.position.y,Game.demo.frog.y);
            if(currDis4<50){
                Game.demo.frog.visible=false;
            }
    }*/
    GameMediator.prototype.checkCandyPos = function () {
        this.candy.pos(this.candyBody.position.x, this.candyBody.position.y);
    };
    //-------------------------------------------------------------------------------------------------
    /**退出游戏界面 */
    GameMediator.prototype.exitGame = function () {
        this.dispose();
    };
    return GameMediator;
}(BaseMeditor));
//# sourceMappingURL=GameMediator.js.map
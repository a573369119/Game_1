/**
 * 游戏主逻辑
 * @游戏中的配置，使用 mapCoinfig ，包括需要的星星，怪物，糖果位置,所有需要的信息，如果信息不够自己添加，配置信息是 bin/config/mapConfig.json，
 * @玩家的信息 PlayerData.ins 调用
 * @逻辑中动画播放结束来触发时间。ani 是用刀划开盒子 ani2是用胶带封住盒子  ani3是//吃到糖果显示计分板 ani4//重新开始 或者 下一关。关闭计分板 打开箱子操作  动画完成结果返回到doorAniEvent();
 * @如果要写入 就直接写入PlayerData， //不能刷新 ，用户数据是测试。以后他们用数据库存储 ，和后台连接，所以每次刷新，都会重置。如果想手动设置 去 bin/config/playerDataTest.json，
 * @播放动画  AnimationManager.ins.playAnimation();
 *
 */
var Matter: any;
var LayaRender: any;
class GameMediator extends BaseMeditor{
    /**加载 */
    private doorOpen : ui.GameView.GameViewDoorUI;
    /**菜单 */
    private menu : ui.GameView.GameMenuUI;
    /**是否返回 主页面 否则返回选择关卡 */
    private isMain : boolean;
    /**mapConfig 根据传入的id获取地图配置 。示例      获取  LoadingManager.ins_.getMapConfig("2-1",3) 第2季，第1个盒子，第三个关卡  返回mapConfig里面又所有东西  */
    //private mapConfig : MapConfig;
    /**关卡 Function setData*/
    private round : number;
    /**盒子 setData*/
    private box : number;
    /**季度 setData*/
    private select : number;
     /**钩子数组*/
    public  hooksArray:Array<Point>;					
    /**钩子位置*/	
	public  hooksPosArray:Array<Array<number>>;			
    /**绳子数组*/
	public  ropes:Array<any>;							
    /**绳子长度数组*/
	public  ropesLengthArray:Array<number>;				
    /**限制数组个数*/
	public  constraintsCountArray:Array<Array<any>>;	
    /**气泡数组*/
	public  balloonArray:Array<any>;						
    /**连接数组*/
	public  contactConstraintsArray:Array<any>;			
    /**matter引擎*/
	public  static engine:any;							
    /**糖果*/
	private candy:Candy;								
	/**糖果刚体*/	
    private candyBody:any;	
    /**用 this.view 来调用 UI视图 */
    constructor(mediatorName:number,view?:number,assate?:any){
        super(mediatorName,view,assate);
    }

    /**初始化 */ 
    protected init() : void
    {
        this.doorOpen = new ui.GameView.GameViewDoorUI();
        this.menu = new ui.GameView.GameMenuUI();
        super.init();//init之后 才会有 this.view
        this.view.addChild(this.menu);
        this.view.addChild(this.doorOpen);

        this.hooksArray=new Array<Point>();
		this.ropes=new Array<any>();	
		this.contactConstraintsArray=new Array<any>();
		this.hooksPosArray=[[150,350],[300,350],[450,350]];
		this.ropesLengthArray=[9,15,21];
		this.candy=new Candy();
		this.initMatter();
		this.initWorld();
        Laya.timer.frameLoop(1,this,this.checkCandyPos);
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);		
		Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onMouseUp);
		Laya.timer.frameLoop(1,this.ropes[1],this.ropes[1].check2,[this.ropesLengthArray[1]*23]);
		Laya.timer.frameLoop(1,this.ropes[2],this.ropes[2].check2,[this.ropesLengthArray[2]*23]);
    }

    /**添加事件 */
    protected addEvents() : void
    {
        this.view.btn_Super.on(Laya.Event.CLICK,this,this.onUserSuper);
        this.view.btn_Teach.on(Laya.Event.CLICK,this,this.onTeachYou);
        this.view.btn_ReGame.on(Laya.Event.CLICK,this,this.onReGame);
        this.view.btn_Menu.on(Laya.Event.CLICK,this,this.onMenu);

        this.menu.btn_Continue.on(Laya.Event.CLICK,this,this.onContinue);
        this.menu.btn_SelectRound.on(Laya.Event.CLICK,this,this.onSelectRound);
        this.menu.btn_Super.on(Laya.Event.CLICK,this,this.onShopSuper);
        this.menu.btn_MainMenu.on(Laya.Event.CLICK,this,this.onMainMenu);

        this.doorOpen.btn_Next.on(Laya.Event.CLICK,this,this.onNextRound);
        this.doorOpen.btn_Replay.on(Laya.Event.CLICK,this,this.onReplay);   
        this.doorOpen.btn_ReturnRound.on(Laya.Event.CLICK,this,this.onSelectRound); 
        this.addAnimationOver();
    }

    /**移除事件 */
    protected removeEvents() : void
    {
        this.view.btn_Super.off(Laya.Event.CLICK,this,this.onUserSuper);
        this.view.btn_Teach.off(Laya.Event.CLICK,this,this.onTeachYou);
        this.view.btn_ReGame.off(Laya.Event.CLICK,this,this.onReGame);
        this.view.btn_Menu.off(Laya.Event.CLICK,this,this.onMenu);

        this.menu.btn_Continue.off(Laya.Event.CLICK,this,this.onContinue);
        this.menu.btn_SelectRound.off(Laya.Event.CLICK,this,this.onSelectRound);
        this.menu.btn_Super.off(Laya.Event.CLICK,this,this.onShopSuper);
        this.menu.btn_MainMenu.off(Laya.Event.CLICK,this,this.onMainMenu);

        this.doorOpen.btn_Next.off(Laya.Event.CLICK,this,this.onNextRound);
        this.doorOpen.btn_Replay.off(Laya.Event.CLICK,this,this.onReplay);   
        this.doorOpen.btn_ReturnRound.off(Laya.Event.CLICK,this,this.onSelectRound); 

        this.removeAnimationOver();
    }

    /**绑定动画完成 */
    private addAnimationOver() : void
    {
        this.doorOpen.ani4.on(Laya.Event.COMPLETE,this,this.doorAniEvent,[4]);  
        this.doorOpen.ani3.on(Laya.Event.COMPLETE,this,this.doorAniEvent,[3]);        
        this.doorOpen.ani2.on(Laya.Event.COMPLETE,this,this.doorAniEvent,[2]);
        this.doorOpen.ani1.on(Laya.Event.COMPLETE,this,this.doorAniEvent,[1]);
    }

    /**移除 动画完成事件*/
    private removeAnimationOver() : void
    {
        this.doorOpen.ani1.off(Laya.Event.COMPLETE,this,this.doorAniEvent);
        this.doorOpen.ani2.off(Laya.Event.COMPLETE,this,this.doorAniEvent);
        this.doorOpen.ani3.off(Laya.Event.COMPLETE,this,this.doorAniEvent);        
        this.doorOpen.ani4.off(Laya.Event.COMPLETE,this,this.doorAniEvent);        
    }

    /**开门动画完成处理时间 */
    private doorAniEvent(index) : void
    {
        switch(index)
        {
            case 1://用刀划开盒子
                this.doorOpen.visible = false;//关闭动画层
                break;
            case 2://用胶带封住盒子
                if(this.isMain)
                {
                    ViewManager.ins_.returnView(GameData.START_GAME_MEDIATOR,GameData.START_VIEW);
                }
                else
                {
                    this.dispose();
                    GameManager.ins_.getMediator(this.mediator-1).showStyle();//需测试
                }
                break
            case 3://吃到糖果显示计分板
                break;
            case 4://重新开始 或者 下一关。关闭计分板 打开箱子操作
        }
    }

    /**事件 ！使用超能力*/
    private onUserSuper() : void
    {
        console.log("技能 - 超能力");

    }

    /**事件 ！使用引导 */
    private onTeachYou() : void
    {
        console.log("技能 - 引导");

    }

    /**事件 重玩 效果闪白光 ，重开*/
    private onReGame() : void
    {
        console.log("重玩");
        
    }

    /**事件 菜单 */
    private onMenu() : void
    {
        console.log("菜单");
        this.menu.visible = true;
    }

    /**事件 吃到糖果->下一关*/
    private onNextRound() : void
    {
        console.log("吃到糖果->下一关");

    }

    /**事件 吃到糖果->重玩  效果开门重开 */
    private onReplay() : void
    {
        console.log("重玩  效果开门重开");

    }

    /**游戏初始 */
    private setInit() : void
    {
        this.menu.visible = false;
    }

    /**设置游戏初始数据 包括 关卡 盒子 季度 */
    public setData(select:number,box:number,round:number) : void
    {
        this.select = select;
        this.box = box;
        this.round = round;
        this.doorOpen.ani1.play(0,false);
        this.setInit();
    }

//----------------------------------------菜单逻辑-------------------------------------------------------
    /**事件 继续游戏 */
    private onContinue() : void
    {
        this.menu.visible = false;
        //开始游戏
    }

    /**事件 选择关卡*/
    private onSelectRound() : void
    {
        //选择关卡
        this.isMain = false;       
        this.doorOpen.visible = true;
        this.doorOpen.ani2.play(0,false);
        GameManager.ins_.getMediator(GameData.SELECT_ROUND_MEDIATOR).runRound();
    }

    /**事件 主界面 */
    private onMainMenu() : void
    {
        //跳到主界面    
        this.isMain = true;        
        this.doorOpen.visible = true;        
        this.doorOpen.ani2.play(0,false);
        GameManager.ins_.getMediator(GameData.START_GAME_MEDIATOR).runRound();        
    }

    /**事件 超能力获取 */
    private onShopSuper() : void
    {
        console.log("获得超能力");
    }

//-------------------------------------------------------------------------------------------------

//----------------------------------------游戏逻辑-------------------------------------------------------
    /**初始化物理引擎 */
	private initMatter(): void {
		var gameWorld: Laya.Sprite = new Laya.Sprite();
		Laya.stage.addChild(gameWorld);		
		GameMediator.engine = Matter.Engine.create({ enableSleeping: true });
		Matter.Engine.run(GameMediator.engine);
		var render = LayaRender.create({ engine: GameMediator.engine,
                                         container: gameWorld, 
										 width:  GameData.STAGE_WIDTH, 
										 height: GameData.STAGE_HEIGHT,
										 options: { showAngleIndicator: 	true,
            			   						  	showCollisions: 		true,
            			   							showVelocity: 			true }});
		LayaRender.run(render);
    }
    
    /**创建物理世界 */
	private	initWorld(): void {
			this.createHook();
			this.CreateRope();
			this.createCandy();
			this.contactHook();	    	   
			this.contactCandy(this.ropes[0].rope.bodies[this.ropes[0].rope.bodies.length-1]);
			this.contactCandy(this.ropes[1].rope.bodies[this.ropes[1].rope.bodies.length-1]);
			this.contactCandy(this.ropes[2].rope.bodies[this.ropes[2].rope.bodies.length-1]);
	}

	/**创建钩子 */
	private	createHook():void{		
		for(let i=0;i<this.hooksPosArray.length;i++){
			let hook=new Point(this.hooksPosArray[i][0],this.hooksPosArray[i][1]);				
			this.hooksArray.push(hook);		
		}
	}

	/**创建绳子 */
	private	CreateRope():void{
		for(let i=0;i<this.ropesLengthArray.length;i++){
			let rope=new Rope(this.hooksArray[i].x,this.hooksArray[i].y,this.ropesLengthArray[i]);
			this.ropes.push(rope);
		}
	}

	/**连接钩子 */
	private contactHook():void{
		for(let i=0;i<this.hooksArray.length;i++){
			var constraint=Matter.Constraint.create({ 
        	 	bodyA:this.ropes[i].rope.bodies[0],
        	 	pointB:{x:this.hooksArray[i].x,y:this.hooksArray[i].y},
       		 	stiffness:1.2
  			  });
			this.contactConstraintsArray.push(constraint);
		
		}			
			Matter.World.add(GameMediator.engine.world,this.contactConstraintsArray);
	}
	/**创建糖果 */
	private createCandy():void{
		this.candyBody=Matter.Bodies.circle(this.ropes[0].rope.bodies[this.ropes[0].rope.bodies.length-1].position.x,
		this.ropes[0].rope.bodies[this.ropes[0].rope.bodies.length-1].position.y, 1,{frictionAir:0.0001,timeScale:1.25,collisionFilter: { group: -1 }});
		Matter.World.add(GameMediator.engine.world,this.candyBody);
	}
	/**连接糖果 */
	private contactCandy(body):void{
			var constraint=Matter.Constraint.create({ 
        	 	bodyA:body,
        	 	bodyB:this.candyBody,
       		 	stiffness:1.2,
				length:20,
				render:{lineWidth:6}
  			  });
			this.contactConstraintsArray.push(constraint);
			Matter.World.add(GameMediator.engine.world,constraint);
	}

	/**鼠标事件 点击*/
	private	onMouseDown():void{			
			Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);			
	}
	/**鼠标事件 拖拽 */
	private	onMouseMove():void{			
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
			for(let j=0;j<this.ropes.length;j++){
				for(let i=0;i<this.ropes[j].constraints.length-1;i++){
				let realH=this.calDistance(this.ropes[j].rope.bodies[i].position.x,this.ropes[j].rope.bodies[i+1].position.x,
				this.ropes[j].rope.bodies[i].position.y,this.ropes[j].rope.bodies[i+1].position.y,Laya.stage.mouseX,Laya.stage.mouseY);
				if(this.ropes[j].rope.bodies[i+1].position.x==this.ropes[j].rope.bodies[i].position.x){
					if(Laya.stage.mouseX>=(this.ropes[j].rope.bodies[i].position.x-8)&&Laya.stage.mouseX<=(this.ropes[j].rope.bodies[i].position.x+8)
					&&(Laya.stage.mouseY<=this.ropes[j].rope.bodies[i+1].position.y&&Laya.stage.mouseY>=this.ropes[j].rope.bodies[i].position.y)){
						Matter.World.remove(GameMediator.engine.world,this.ropes[j].constraints[i]);
					}
				}
				else{
					if(realH<=15&&(Laya.stage.mouseY<=this.ropes[j].rope.bodies[i+1].position.y&&Laya.stage.mouseY>=this.ropes[j].rope.bodies[i].position.y)){
					Matter.World.remove(GameMediator.engine.world,this.ropes[j].constraints[i]);
					//Matter.World.remove(GameMeditor.engine.world,this.ropeConstraints[j]);
					if(j==1){
					Matter.World.remove(GameMediator.engine.world,this.ropes[1].constraint1);
					}else if(j==2){
					Matter.World.remove(GameMediator.engine.world,this.ropes[2].constraint1);
				
					
					break;
				}
				}
				
			}
			}		
		}
	}
	
	/**鼠标事件 抬起 */
	private	onMouseUp():void{
			Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);		
		}
	/**点到直线的距离 */
	private	calDistance(x1,x2,y1,y2,x3,y3):number{
			let k=(y1-y2)/(x1-x2);										//斜率
			let b=y1-k*x1;		  										//y轴交点
			let h=Math.abs((k*x3-y3+b)/(Math.sqrt(k*k+1)));
			return h;
		}
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

		

		private checkCandyPos():void{
			this.candy.pos(this.candyBody.position.x,this.candyBody.position.y);
		}
//-------------------------------------------------------------------------------------------------

    /**退出游戏界面 */
    protected exitGame() : void
    {
        this.dispose();
    }

}
/**
 * 绳子
 */
class Rope{
    /**限制数组*/
    public constraints:Array<any>;
    /**绳子颜色数组*/
    public ropecolors:Array<string>;		
    /**组成绳子的每个节点*/	
    public rope:any;
	/**刚体*/	
	public candyBody:any;	
	/**组成绳子的长度*/	
	public countlength:number;
    /**绳子最大长度的限制*/
    public ropeMax:any;
	/**绳子透明度*/
    public ropeAlpha:number;
	/**绳子已达到最长*/
	public isRopeMax:boolean;
    constructor(dataPos,datacountlength){
        this.constraints=new Array<any>();
        this.ropecolors=["rgba(139,69,19)","rgba(107,48,5)"];
        this.createRopeNode(dataPos,datacountlength);
        this.createConstraint();
		this.countlength=datacountlength;
		this.ropeAlpha=1;
		this.isRopeMax=false;
		Laya.timer.frameLoop(1,this,this.checkMaxRope,[datacountlength*24]);
		Laya.timer.frameLoop(1,this,this.checkContact);
    }
    
    /**创建绳子节点*/	
	private	createRopeNode(dataPos,datacountlength):void{		
			this.rope = Matter.Composites.stack(dataPos.x, dataPos.y, datacountlength, 1, 0, 0, function(x, y) {
        	return Matter.Bodies.circle(x, y, 1, { frictionAir:0.0001,timeScale:1.25,collisionFilter: { group: -1 }, render:{visible:false}},);
   			 });		
            Matter.World.add(GameMediator.engine.world,this.rope); 								
	}

    /**创建每一个绳子连接*/	
    private	createConstraint():void{
			for(let k=0;k<this.rope.bodies.length-1;k++){
				var constraint1=Matter.Constraint.create({ 
        	 		bodyA:this.rope.bodies[k],
        	 		bodyB:this.rope.bodies[k+1],
       		 		stiffness:1,
					damping:0.1,
					length:20,
					render:{lineWidth:6,strokeStyle:this.ropecolors[Math.floor(k/2)%2]}
  			 	 });
				this.constraints.push(constraint1);
			}	
            Matter.World.add(GameMediator.engine.world,this.constraints); 
					
    }

    /**判断是否拉到最长*/
    public checkMaxRope(limitDis:number):void{
			let dis=DistanceTool.Distance(this.rope.bodies[this.rope.bodies.length-1].position.x,
            this.rope.bodies[0].position.x,this.rope.bodies[this.rope.bodies.length-1].position.y,this.rope.bodies[0].position.y);
			if(dis>=limitDis){
			this.ropeMax=Matter.Constraint.create({ 
        	 		bodyA:this.rope.bodies[0],
        	 		bodyB:this.rope.bodies[this.rope.bodies.length-1],
       		 		stiffness:1.2,
					length:limitDis,
					render:{lineWidth:6,strokeStyle:this.ropecolors[0],visible:false}
  			 	 });
					
			Laya.timer.clear(this,this.checkMaxRope);
			this.isRopeMax=true;
			Matter.World.add(GameMediator.engine.world,this.ropeMax);
			this.contactCandy();
			}
	}

	/**检测绳子透明度逐渐消失*/
	public checkRopeColorMiss():void{
		this.ropeAlpha-=0.1;
		for(let i=0;i<this.constraints.length;i++){
            if(Math.floor(i/2)%2==0){
                this.constraints[i].render.strokeStyle="rgba(139,69,19,"+this.ropeAlpha+")";
            }
            else{
            	this.constraints[i].render.strokeStyle="rgba(107,48,5,"+this.ropeAlpha+")";
            }
        }
	}

	/**检测绳子与糖果连接状态 */
	public checkContact():void{
		this.rope.bodies[this.rope.bodies.length-1].position.x=GameMediator.candyBody.position.x;
		this.rope.bodies[this.rope.bodies.length-1].position.y=GameMediator.candyBody.position.y;
	}

	/**连接糖果 */
	private contactCandy():void{
			let constraint=Matter.Constraint.create({ 
        	 	bodyA:this.rope.bodies[this.rope.bodies.length-1],
        	 	bodyB:GameMediator.candyBody,
       		 	stiffness:1,
				length:0.01,  
				render:{lineWidth:6,strokeStyle:"#5C3317"}
  			  });
			this.constraints.push(constraint);
			Matter.World.add(GameMediator.engine.world,constraint);
        
	}
	/**更新绳子 */
	public updateRope(dataPos,datacountlength) :void
	{
		//透明度回复
		this.ropeAlpha = 1;
		//绳子
		this.constraints = [];
	}
}

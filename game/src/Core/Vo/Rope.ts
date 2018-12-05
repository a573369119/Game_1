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
    /**绳子最大长度的限制*/
    public constraint1:any;
    constructor(hookX,hookY,count){
        this.constraints=new Array<any>();
        this.ropecolors=["#5C3317","#B87333"];
        this.createRopeNode(hookX,hookY,count);
        this.createConstraint();
    }
    
    /**创建绳子节点*/	
	private	createRopeNode(hookX,hookY,count):void{		
			this.rope = Matter.Composites.stack(hookX, hookY, count, 1, 0, 0, function(x, y) {
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
					length:20,
					render:{lineWidth:6,strokeStyle:this.ropecolors[Math.floor(k/2)%2]}
  			 	 });
				this.constraints.push(constraint1);
			}	
            Matter.World.add(GameMediator.engine.world,this.constraints); 		
    }

    /**判断是否拉到最长*/
    public check2(limitDis:number):void{
			let dis=DistanceTool.Distance(this.rope.bodies[this.rope.bodies.length-1].position.x,
            this.rope.bodies[0].position.x,this.rope.bodies[this.rope.bodies.length-1].position.y,this.rope.bodies[0].position.y);
			if(dis>=limitDis){
			this.constraint1=Matter.Constraint.create({ 
        	 		bodyA:this.rope.bodies[0],
        	 		bodyB:this.rope.bodies[this.rope.bodies.length-1],
       		 		stiffness:1.2,
					length:limitDis,
					render:{lineWidth:6,strokeStyle:this.ropecolors[0],visible:false}
  			 	 });
					
			Laya.timer.clear(this,this.check2);
			Matter.World.add(GameMediator.engine.world,this.constraint1);
			console.log(dis);
			}
	}
}

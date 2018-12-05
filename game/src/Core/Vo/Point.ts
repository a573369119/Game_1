/**
 * 钉子
 */
class Point{
   /**横坐标 */
    public x : number;
    /**纵坐标 */
    public y : number;   
    /**精灵 */
    private hook:Laya.Sprite;
    constructor(xPos,yPos/*data*/){
        this.hook=new Laya.Sprite();
        this.hook.loadImage("gameView/point.png");         
        this.hook.pivot(this.hook.width/2,this.hook.height/2);
        Laya.stage.addChild(this.hook);
        this.hook.pos(xPos,yPos);
        this.x=this.hook.x;
        this.y=this.hook.y;
        //this.init(data);
    }

    private init(data) : void
    {
        this.x = data.x;
        this.y = data.y
    }
    
}
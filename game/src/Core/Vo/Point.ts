/**
 * 钉子
 */
class Point{
   /**横坐标 */
    public x : number;
    /**纵坐标 */
    public y : number;   
    /**精灵 */
    public point:Laya.Sprite;
    constructor(data){
        this.point=new Laya.Sprite();
        this.point.loadImage("gameView/point.png");         
        this.point.pivot(this.point.width/2,this.point.height/2);
        this.point.pos(data.x,data.y);
        this.init(data);
    }

    private init(data) : void
    {
        this.x = data.x;
        this.y = data.y
    }
    
}
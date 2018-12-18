/**
 * 气泡
 */
class Balloon{
   /**横坐标 */
    public x : number;
    /**纵坐标 */
    public y : number;   
    /**图片宽度 */
    public width:number;
    /**图片高度 */
    public height:number;   
    /**精灵 */
    public balloon:Laya.Sprite;
    constructor(data){
        this.balloon=new Laya.Sprite();
        this.balloon.loadImage("gameView/balloon.png");         
        this.balloon.pivot(this.balloon.width/2,this.balloon.height/2);
        this.balloon.pos(data.x,data.y);
        this.init(data);
    }

    private init(data) : void
    {
        this.x = data.x;
        this.y = data.y;
        this.width=this.balloon.width;
        this.height=this.balloon.height;
    }

    public pos(x,y):void{
        this.balloon.pos(x,y);
        this.x=x;
        this.y=y;
    }
    /**更新方法 */
    public update(data) : void
    {
        this.x = data.x;
        this.y = data.y     
        this.balloon.pos(data.x,data.y);
        this.balloon.visible = true;
    }
    
}
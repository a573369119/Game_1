/**
 * 糖果
 */
class Candy{
    /**横坐标 */
    public x : number;
    /**纵坐标 */
    public y : number;
    /**类型 */
    public style : string;
    /**糖果UI */
    /**精灵 */
    private candy:Laya.Sprite;       
    constructor(/*object*/){
        this.candy=new Laya.Sprite();
        this.candy.loadImage("gameView/candy.png");
        Laya.stage.addChild(this.candy);
        this.candy.pivot(this.candy.width/2,this.candy.height/2);
        this.candy.zOrder=1;
        this.x=this.candy.x;
        this.y=this.candy.y;
        //this.init(object);
    }

    private init(object) : void
    {
        this.x = object.x;
        this.y = object.y;
        this.style = object.style;
        
        
    }

    public pos(x,y):void{
        this.candy.pos(x,y);
    }
}
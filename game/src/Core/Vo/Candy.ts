/**
 * 糖果
 */
class Candy{
    /**横坐标 */
    public x:number;
    /**纵坐标 */
    public y:number;
    /**图片宽度 */
    public width:number;
    /**图片高度 */
    public height:number;
    /**精灵 */
    public candy:Laya.Sprite;  
    constructor(data){
        this.candy=new Laya.Sprite();
        this.candy.loadImage("gameView/"+data.style+".png");
        this.candy.pivot(this.candy.width/2,this.candy.height/2);
        this.candy.zOrder=2;
        this.init();
    }

    private init(){
        this.x=this.candy.x;
        this.y=this.candy.y;
        this.width=this.candy.width;
        this.height=this.candy.height;
    }
    public pos(x,y):void{
        this.candy.pos(x,y);
        this.x=x;
        this.y=y;
    }
}
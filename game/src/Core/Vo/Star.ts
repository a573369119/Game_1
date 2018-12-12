/**
 * 星星
 */
class Star{
    /**横坐标 */
    public x : number;
    /**纵坐标 */
    public y : number;
    /**图片宽度 */
    public width:number;
    /**图片高度 */
    public height:number;   
    /**星星类型 */
    public style : string;   
    /**旋转动画 */
    public star:Laya.Animation;
    /**碰撞精灵 */            
    public starBg:Laya.Sprite;
    constructor(data,dataStyle){
        this.star=new Laya.Animation();
        this.star.loadAnimation("starRotate.ani");
        this.init(data,dataStyle);
    }



    /**初始化 */
    private init(data,dataStyle) : void
    {
        this.x = data.x;
        this.y = data.y;
        this.width=35;
        this.height=35;
        this.star.visible = true;
        this.star.play(0,true);
        this.star.pos(data.x,data.y);
        this.setStyle(dataStyle);
    }

    /**种类设置方法 */
    private setStyle(dataStyle) : void
    {
        this.style = dataStyle;
    }

    /**更新星星 */
    public updateStar(data,dataStyle) : void
    {
        this.init(data,dataStyle);
        this.star.play(0,true);
        this.star.pos(data.x,data.y);
    }
}
/**
 * 星星
 */
class Star{
    /**横坐标 */
    public x : number;
    /**纵坐标 */
    public y : number;
    /**星星类型 */
    public style : number;

    constructor(data){
        this.init(data);
    }    

    /**初始化 */
    private init(data) : void
    {
        this.x = data.x;
        this.y = data.y;
        this.style = data.style;
        this.setStyle();
    }

    /**种类设置方法 */
    private setStyle() : void
    {

    }
}
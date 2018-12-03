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
        
    constructor(object){
        this.init(object);
    }

    private init(object) : void
    {
        this.x = object.x;
        this.y = object.y;
        this.style = object.style;
        
        
    }
}
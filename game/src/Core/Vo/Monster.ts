/**
 * 怪物
 */
class Monster{
    /**横坐标 */
    public x : number;
    /**纵坐标 */
    public y : number;
    /**吃到糖果宽度 */
    public eatWidth:number;
    /**吃到糖果高度 */
    public eatHeight:number;
    /**张嘴宽度 */
    public openWidth:number;
    /**张嘴高度 */
    public openHeight:number;
    constructor(data){
        this.x = data.x;
        this.y = data.y;
        this.eatWidth=60;
        this.eatHeight=60;
    }

}
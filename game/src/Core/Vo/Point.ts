/**
 * 钉子
 */
class Point{
    /**x */
    public x : number;
    /**y */
    public y : number;

    constructor(data){
        this.init(data);
    }

    private init(data) : void
    {
        this.x = data.x;
        this.y = data.y
    }
}
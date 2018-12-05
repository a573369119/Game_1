/**
 * 地图配置
 */
class MapConfig{
    /**地图id*/
    public mapId : number;
    /**地图宽 */
    public mapWidth : number;
    /**地图高 */
    public mapHeight : number;
    /**地图背景 */
    public mapBackg : string;
    /**是否是拼合地图 */
    public isComb : boolean;
    /**糖果 */
    public candy : Candy;
    /**怪物 */
    public monster : Monster;
    /**星星 */
    public arr_Star : Array<Star>;
    /**钉子 */
    public arr_Point : Array<Point>;

    constructor(objectMapConfig){  
        this.arr_Star = new Array<Star>();
        this.arr_Point = new Array<Point>();

        this.init(objectMapConfig);
    }

    /**初始化
     * 
     * objectMaoconfig里面的东西 就是配置表的。可以对应看
     * 
     * 新添加东西要新写 载入。
     * 
     * 配置文件在bin\config里面
     * 
     * 可以 console.log(objectMapConfig) ，看看里面有什么
     * 
    */
    private init(objectMapConfig) : void
    {
        //**mapId、 */
        this.mapId = objectMapConfig.mapId;
        this.mapWidth = objectMapConfig.width;
        this.mapHeight = objectMapConfig.height;
        //**载入糖果 */
       /* let cd = new Candy(objectMapConfig.candy);
        this.candy = cd;*/
        //**载入星星 */
        let stars : Star; 
        for(let i=0; i<objectMapConfig.stars.pos.length ;i++)
        {
            stars = new Star(objectMapConfig.stars.pos[i]);    
            stars.style = objectMapConfig.stars.style;        
            this.arr_Star.push(stars);
        }
        //**载入怪物 */
        let moster = new Monster(objectMapConfig.moster);
        this.monster = moster;
        //**载入钉子 */
        let point : Point; 
        for(let i=0;i<objectMapConfig.point.length;i++)
        {
            //point= new Point(objectMapConfig.point[i]); 
            this.arr_Point.push(point);
        }
    }
}
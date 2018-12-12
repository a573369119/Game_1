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
    /**星星数组 */
    public arr_Stars : Array<Star>;
    /**钉子数组 */
    public arr_Points : Array<Point>;
    /**绳子数组 */
    public arr_Ropes : Array<Rope>;
    constructor(objectMapConfig,view){  
        this.arr_Stars = new Array<Star>();
        this.arr_Points = new Array<Point>();
        this.arr_Ropes = new Array<Rope>();
        this.init(objectMapConfig,view);
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
    private init(objectMapConfig,view) : void
    {
        //**mapId、 */
        this.mapId = objectMapConfig.mapId;
        this.mapWidth = objectMapConfig.width;
        this.mapHeight = objectMapConfig.height;
        //**载入糖果 */
        let candy = new Candy(objectMapConfig.candy);
        this.candy = candy;
        view.addChild(this.candy.candy);
        //**载入星星 */ 
        for(let i=0; i<objectMapConfig.star.pos.length ;i++)
        {
            let star = new Star(objectMapConfig.star.pos[i],objectMapConfig.star.style);    
            this.arr_Stars.push(star);
            view.addChild(star.star);
        }
        //**载入怪物 */
        let moster = new Monster(objectMapConfig.moster);
        this.monster = moster;
        //**载入钉子 */
        for(let i=0;i<objectMapConfig.point.pos.length;i++)
        {
            let point= new Point(objectMapConfig.point.pos[i]); 
            this.arr_Points.push(point);
            view.addChild(point.point);
        }
        //**载入绳子 */
        for(let i=0;i<objectMapConfig.rope.pos.length;i++)
        {
            let rope= new Rope(objectMapConfig.rope.pos[i],objectMapConfig.rope.countlength[i]); 
            this.arr_Ropes.push(rope);
        }
        
    }

    /**下一关卡更新数据 */
    public update(objectMapConfig,view) : void
    {
        //**mapId、 */
        this.mapId = objectMapConfig.mapId;
        this.mapWidth = objectMapConfig.width;
        this.mapHeight = objectMapConfig.height;
        //**更新糖果 */
        this.candy.candyUpdate(objectMapConfig.candy);
        //**更新星星 */ 
        for(let i=0; i<objectMapConfig.star.pos.length ;i++)
        {
            if(this.arr_Stars[i])
            {
                this.arr_Stars[i].updateStar(objectMapConfig.star.pos[i],objectMapConfig.star.style);
            }
        }
        //**更新怪物 */
        this.monster.update(objectMapConfig.moster);
        //**更新钉子 */
        for(let i=0;i<objectMapConfig.point.pos.length;i++)
        {
            if(this.arr_Points[i])
            {
                this.arr_Points[i].update(objectMapConfig.point.pos[i]);
            }
            else
            {
                let point= new Point(objectMapConfig.point.pos[i]); 
                this.arr_Points.push(point);
                view.addChild(point.point);
            }
        }
        //**更新绳子 */
        for(let i=0;i<objectMapConfig.rope.pos.length;i++)
        {
            if(this.arr_Ropes[i])
            {
                this.arr_Ropes[i].updateRope(objectMapConfig.rope.pos[i],objectMapConfig.rope.countlength[i]);
            }
            else
            {
                let rope= new Rope(objectMapConfig.rope.pos[i],objectMapConfig.rope.countlength[i]); 
                this.arr_Ropes.push(rope);
            }
        }
    }
}
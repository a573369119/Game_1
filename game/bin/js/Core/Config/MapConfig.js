/**
 * 地图配置
 */
var MapConfig = /** @class */ (function () {
    function MapConfig(objectMapConfig) {
        this.arr_Stars = new Array();
        this.arr_Points = new Array();
        this.arr_Ropes = new Array();
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
    MapConfig.prototype.init = function (objectMapConfig) {
        //**mapId、 */
        this.mapId = objectMapConfig.mapId;
        this.mapWidth = objectMapConfig.width;
        this.mapHeight = objectMapConfig.height;
        //**载入糖果 */
        var candy = new Candy(objectMapConfig.candy);
        this.candy = candy;
        //**载入星星 */ 
        for (var i = 0; i < objectMapConfig.star.pos.length; i++) {
            var star = new Star(objectMapConfig.star.pos[i], objectMapConfig.star.style);
            this.arr_Stars.push(star);
        }
        //**载入怪物 */
        var moster = new Monster(objectMapConfig.moster);
        this.monster = moster;
        //**载入钉子 */
        for (var i = 0; i < objectMapConfig.point.pos.length; i++) {
            var point = new Point(objectMapConfig.point.pos[i]);
            this.arr_Points.push(point);
        }
        //**载入绳子 */
        for (var i = 0; i < objectMapConfig.rope.pos.length; i++) {
            var rope = new Rope(objectMapConfig.rope.pos[i], objectMapConfig.rope.countlength[i]);
            this.arr_Ropes.push(rope);
        }
    };
    return MapConfig;
}());
//# sourceMappingURL=MapConfig.js.map
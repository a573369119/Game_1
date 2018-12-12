/**
 * 距离判断
 */
var DistanceTool = /** @class */ (function () {
    function DistanceTool() {
    }
    /**碰撞检测 dicNum ：预设距离   */
    DistanceTool.collisionCheck = function (object1, object2, width1, width2, height1, height2) {
        if (object1.x < object2.x + width2 && object1.x + width1 > object2.x && object1.y < object2.y + height2 &&
            object1.y + height1 > object2.y) {
            return true;
        }
        else {
            return false;
        }
    };
    /**两点间距离*/
    DistanceTool.Distance = function (x1, x2, y1, y2) {
        var dis = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        return dis;
    };
    return DistanceTool;
}());
//# sourceMappingURL=DistanceTool.js.map
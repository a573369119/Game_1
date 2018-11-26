/**
 * 距离判断
 */
var DistanceTool = /** @class */ (function () {
    function DistanceTool() {
    }
    /**碰撞检测 dicNum ：预设距离   */
    DistanceTool.distancJudge = function (x1, y1, x2, y2, dicNum) {
        var dic = 0;
        if (dicNum === undefined) {
            dic = GameData.COLLIDE_DISTANCE;
        }
        else {
            dic = dicNum;
        }
        if (Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) < dic) {
            return true;
        }
        else {
            return false;
        }
    };
    return DistanceTool;
}());
//# sourceMappingURL=DistanceTool.js.map
/**
 * 玩家数据
 */
var PlayerData = /** @class */ (function () {
    function PlayerData() {
        //测试数据
        this.init();
    }
    /**初始化 */
    PlayerData.prototype.init = function () {
        this.arr_LimitSelect = new Array();
        this.boxLimtDic = new Laya.Dictionary();
        this.round_Star = new Laya.Dictionary();
        this.select_Star = new Laya.Dictionary();
    };
    /**是否能解开该关卡？ @select : 关卡数 0 1 2*/
    PlayerData.prototype.isSelect = function (select) {
        var SelectNum;
        return this.starNum >= this.arr_LimitSelect[select] ? true : false;
    };
    /**解析对应季度的星星数 */
    PlayerData.prototype.parseSelect_Star = function () {
    };
    /**解析获得关卡的星星数 */
    PlayerData.prototype.parseRound_Star = function () {
    };
    PlayerData.ins = new PlayerData();
    return PlayerData;
}());
//# sourceMappingURL=PlayerData.js.map
var StageInitMediator = /** @class */ (function () {
    function StageInitMediator() {
        this.init();
    }
    StageInitMediator.prototype.init = function () {
        Laya.init(GameData.STAGE_WIDTH, GameData.STAGE_HEIGHT);
        Laya.stage.scaleMode = GameData.STAGE_SCALE_MODE;
        Laya.stage.screenMode = GameData.STAGE_SCREEN_MODE;
        Laya.stage.alignV = GameData.STAGE_ALIGN_V;
        Laya.stage.alignH = GameData.STAGE_ALIGN_H;
        //性能检测
        Laya.Stat.show(0, 0);
        //舞台对齐设置
        console.log("舞台初始化完成");
    };
    return StageInitMediator;
}());
//# sourceMappingURL=StageInitMediator.js.map
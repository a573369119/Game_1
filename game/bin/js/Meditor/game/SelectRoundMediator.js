var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 徐州呢关卡界面
 */
var SelectRoundMediator = /** @class */ (function (_super) {
    __extends(SelectRoundMediator, _super);
    /**   this.view  调用 本UI 视图*/
    function SelectRoundMediator(mediatorName, view, assate) {
        return _super.call(this, mediatorName, view, assate) || this;
    }
    /**初始化 */
    SelectRoundMediator.prototype.init = function () {
        _super.prototype.init.call(this);
        Laya.timer.loop(50, this, this.roundLamp);
        this.arr_Card = new Array();
        this.arr_btnEvent = new Array();
    };
    /**事件绑定 */
    SelectRoundMediator.prototype.addEvents = function () {
        this.view.btn_Exit.on(Laya.Event.CLICK, this, this.onExit);
    };
    /**事件移除 */
    SelectRoundMediator.prototype.removeEvents = function () {
        this.view.btn_Exit.off(Laya.Event.CLICK, this, this.onExit);
        this.removeRoundEvents();
        Laya.timer.clear(this, this.roundLamp);
    };
    /**选择   SelectIndex季度    SelectBoxIndex选择的盒子*/
    SelectRoundMediator.prototype.setRound = function (SelectIndex, SelectBoxIndex) {
        this.selectIndex = SelectIndex;
        this.selectBoxIndex = SelectBoxIndex;
        //初始化界面
        this.createUI();
        //界面排版
        this.listUiItem();
        //卡片显示状态
        this.showStyle();
    };
    /**UI创建 */
    SelectRoundMediator.prototype.createUI = function () {
        var card;
        for (var i = 0; i < 25; i++) {
            card = new ui.SelectRound.RoundUI();
            this.view.addChild(card);
            this.arr_Card.push(card);
        }
    };
    /**界面排版 */
    SelectRoundMediator.prototype.listUiItem = function () {
        for (var i = 0; i < this.arr_Card.length; i++) {
            this.arr_Card[i].y = 300;
            this.arr_Card[i].x = 20;
            this.arr_Card[i].x += (i % 5) * (this.arr_Card[i].width);
            this.arr_Card[i].y += Math.floor(i / 5) * (this.arr_Card[i].height + 10);
        }
    };
    /**卡片状态 */
    SelectRoundMediator.prototype.showStyle = function () {
        var thisCard = PlayerData.ins.round_Star.get(this.selectIndex + "-" + this.selectBoxIndex);
        if (thisCard) { //有
            this.showCard(thisCard);
        }
        else { //无
            this.closeCard();
        }
    };
    /**显示卡片状态 */
    SelectRoundMediator.prototype.showCard = function (thisCard) {
        for (var i = 0; i < thisCard.length; i++) {
            if (this.arr_Card[i] != undefined)
                this.addRoundEvents(this.arr_Card[i], i);
            if (thisCard[i] != -1) {
                this.arr_Card[i].img_Star.skin = this.setStars(thisCard[i]);
                this.setCount(i);
            }
            else {
                this.arr_Card[i].img_Star.skin = "selectRound/star0.png";
                this.setCount(i);
                for (var h = i + 1; h < this.arr_Card.length; h++) {
                    this.arr_Card[h].img_Star.visible = false;
                    this.arr_Card[h].img_RoundBox.skin = "selectRound/lock.png";
                }
                break;
            }
        }
    };
    /**加入 关卡事件 */
    SelectRoundMediator.prototype.addRoundEvents = function (object, index) {
        object.on(Laya.Event.CLICK, this, this.onClickRound, [index]);
        this.arr_btnEvent.push(object);
    };
    /**移除 关卡事件 */
    SelectRoundMediator.prototype.removeRoundEvents = function () {
        var _this = this;
        this.arr_btnEvent.forEach(function (event) {
            event.off(Laya.Event.CLICK, _this, _this.onClickRound);
        });
    };
    /**事件 点击关卡 */
    SelectRoundMediator.prototype.onClickRound = function (index) {
        GameManager.ins_.runMediator(GameData.GAME_MEDIATOR);
        console.log("点击的试关卡" + index);
    };
    /**卡牌星星和数字 处理 */
    SelectRoundMediator.prototype.setStars = function (starsNum) {
        return "selectRound/star" + starsNum + ".png";
    };
    /**数字的处理 */
    SelectRoundMediator.prototype.setCount = function (index) {
        if (index + 1 >= 10) {
            this.arr_Card[index].img_Count1.visible = true;
            this.arr_Card[index].img_Count1.skin = "publicAssets/" + Math.floor((index + 1) / 10) + ".png";
            this.arr_Card[index].img_Count1.skin = "publicAssets/" + (index + 1) % 10 + ".png";
        }
        else {
            this.arr_Card[index].img_Count2.skin = "publicAssets/" + (index + 1) + ".png";
        }
    };
    /**没有一个卡片处理方法 */
    SelectRoundMediator.prototype.closeCard = function () {
        this.arr_Card.forEach(function (card) {
            card.img_Star.visible = false;
            card.img_RoundBox.skin = "selectRound/lock.png";
        });
    };
    /**退出 */
    SelectRoundMediator.prototype.onExit = function () {
        this.dispose();
    };
    /**旋转 */
    SelectRoundMediator.prototype.roundLamp = function () {
        this.view.round_Lamp.rotation += 0.2;
    };
    return SelectRoundMediator;
}(BaseMeditor));
//# sourceMappingURL=SelectRoundMediator.js.map
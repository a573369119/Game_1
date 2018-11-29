/**
 * 盒子
 */
class Box {
    /**盒子ID */
    public boxId : number;
    /**皮肤 */
    public skin : string; 
    /**UI */
    public boxUI : ui.BoxUI;
    /**初始横坐标 */
    public initX : number;
    /**初始纵坐标 */
    public iniY : number;

    constructor(view:any,skin?: string){
        this.initX = 102;
        this.iniY = 29;
        this.boxUI = new ui.BoxUI();
        if(skin)
        {
            this.boxUI.img_box.skin = skin;
        }
        else
        {
            this.boxUI.img_box.skin = "selectBox/box1.png";            
        }
        this.boxUI.x = this.initX;
        this.boxUI.y = this.iniY;
        view.panel_ShowBox.addChild(this.boxUI);
    }

}
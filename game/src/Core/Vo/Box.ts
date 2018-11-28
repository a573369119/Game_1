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

    constructor(view:any,skin?: string){
        this.boxUI = new ui.BoxUI();
        if(skin)
        {
            this.boxUI.img_box.skin = skin;
        }
        else
        {
            this.boxUI.img_box.skin = "selectBox/box1.png";            
        }
        this.boxUI.x = 102;
        this.boxUI.y = 29;
        view.panel_ShowBox.addChild(this.boxUI);
    }

}
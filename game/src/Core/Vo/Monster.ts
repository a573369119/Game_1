/**
 * 怪物
 */
class Monster{
    /**横坐标 */
    public x : number;
    /**纵坐标 */
    public y : number;
    /**怪物动画*/
    public arr_animation : Array<Laya.Animation>; 

    constructor(data){
        this.arr_animation = new Array<Laya.Animation>();
        this.x = data.x;
        this.y = data.y;
        AnimationManager.ins.playAnimation(GameData.ANI_MONSTER_STAND,false,this.x,this.y);
    }

}
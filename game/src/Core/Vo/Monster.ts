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
        this.playAnimation(GameData.ANI_MONSTER_STAND);
    }

    public loadAnimation

    /**动画播放 */
    public playAnimation(animationName : number) : void
    {
        switch(animationName)
        {
            case GameData.ANI_MONSTER_SAD:
                break;
            case GameData.ANI_MONSTER_EAT:
                break;
            case GameData.ANI_MONSTER_HAPPYE:
                break;
            case GameData.ANI_MONSTER_OPEN:
                break;
            case GameData.ANI_MONSTER_GIVE_ME:
                break;
            case GameData.ANI_MONSTER_ACTION:
                break;
            case GameData.ANI_MONSTER_STAND:
                break;
        }
    }
}
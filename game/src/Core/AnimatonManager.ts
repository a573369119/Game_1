/**
 * 动画管理
 */
class AnimationManager {
    /**动画字典 */
    public animationDic : Laya.Dictionary;

    constructor(){
        this.animationDic = new Laya.Dictionary();
    }
    public static ins : AnimationManager = new AnimationManager();

    /**动画加载 */
    public loadAnimation() : void
    {
        let ani = new Laya.Animation();
        this.animationDic.set(GameData.ANI_MONSTER_SAD,ani.loadImages(this.aniUrls(GameData.ANI_MONSTER_SAD,15)));
        ani=new Laya.Animation();
        this.animationDic.set(GameData.ANI_MONSTER_EAT,ani.loadImages(this.aniUrls(GameData.ANI_MONSTER_EAT,9)));
        ani=new Laya.Animation();
        this.animationDic.set(GameData.ANI_MONSTER_HAPPYE,ani.loadImages(this.aniUrls(GameData.ANI_MONSTER_HAPPYE,19)));
        ani=new Laya.Animation();
        this.animationDic.set(GameData.ANI_MONSTER_OPEN,ani.loadImages(this.aniUrls(GameData.ANI_MONSTER_OPEN,10)));
        ani=new Laya.Animation();
        this.animationDic.set(GameData.ANI_MONSTER_GIVE_ME,ani.loadImages(this.aniUrls(GameData.ANI_MONSTER_GIVE_ME,26)));  
        ani=new Laya.Animation();
        this.animationDic.set(GameData.ANI_MONSTER_ACTION,ani.loadImages(this.aniUrls(GameData.ANI_MONSTER_ACTION,43)));
        ani=new Laya.Animation();
        this.animationDic.set(GameData.ANI_MONSTER_STAND,ani.loadImages(this.aniUrls(GameData.ANI_MONSTER_STAND,17)));
        ani=new Laya.Animation();
        this.animationDic.set(GameData.ANI_MONSTER_GIVE_ME2,ani.loadImages(this.aniUrls(GameData.ANI_MONSTER_GIVE_ME2,29)));   
            
    }
    /**
     * 创建一组动画的url数组（美术资源地址数组）
     * @param aniName  动作的名称，用于生成url
     * @param length   动画最后一帧的索引值，
     */
    private aniUrls(aniName:string, length:number) : Array<any>
    {
        var urls: Array<any> = [];
        for (var i=1; i <= length; i++) 
        {
            //动画资源路径要和动画图集打包前的资源命名对应起来
            urls.push("gameView/" + aniName + i + ".png");
        }
        return urls;
    }

    /**播放动画 动画名称  是否循环  坐标 x y  默认锚点0.0*/
    public playAnimation(aniName:string,isLoop:boolean,x:number,y:number,view) :void
    {
        let animation = this.animationDic.get(aniName);
        if(animation)
        {
            animation.x = x;
            animation.y = y;
            animation.play(0,isLoop);
            animation.visible = true;
            animation.pivot(42,42);
            view.addChild(animation);
        }
        else
        {
            console.log("动画不存在");
        }
    }   
      /**停止动画 动画名称*/
    public stopAnimation(aniName:string) : void
    {
        let animation = this.animationDic.get(aniName);
        if(animation)
        {
            animation.stop();
            animation.visible = false;
            animation.removeSelf();

        }
        else
        {
            console.log("动画不存在");
        }
    }

}
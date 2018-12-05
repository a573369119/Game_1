/**
 * 距离判断
 */
class DistanceTool{
     
    constructor(){

    }

    /**碰撞检测 dicNum ：预设距离   */
    public static distancJudge(x1:number,y1:number,x2:number,y2:number,dicNum?:number) : boolean
    {
        let dic :number = 0;
        if(dicNum === undefined)
        {
            dic = GameData.COLLIDE_DISTANCE;
        }
        else
        {
            dic = dicNum
        }
        
        if( Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2)) < dic)
        {
            return true; 
        }
        else
        {
            return false;
        }
    }
    public static Distance(x1,x2,y1,y2):number{
			let dis=Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
			return dis;
		}
}
/**
 * 距离判断
 */
class DistanceTool{
     
    constructor(){

    }

    /**碰撞检测 dicNum ：预设距离   */
    public static collisionCheck(object1,object2,width1:number,width2:number,height1:number,height2:number) : boolean
    {
        if(Math.abs(object1.x - object2.x)< width1/2 + width2/2&&Math.abs(object1.y - object2.y) < height1/2 + height2/2){
            return true;
        }
        else{
            return false;
        }
        
        
        
    }
    /**两点间距离*/
    public static Distance(x1,x2,y1,y2):number{
			let dis=Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
			return dis;
		}
}
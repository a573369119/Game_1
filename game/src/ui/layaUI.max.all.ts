
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class LoadingUI extends View {
		public lab_Progress:Laya.Label;
		public img_Progress:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":-3,"x":-12,"width":787,"skin":"unpackage/loadingBg.jpg","height":1392}},{"type":"Label","props":{"y":928,"x":141,"width":499,"var":"lab_Progress","text":"加载中（20%）","height":50,"fontSize":50,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":248,"x":91,"width":588,"skin":"unpackage/cutRope.png","height":522}},{"type":"Image","props":{"y":891,"x":137,"skin":"loadingView/loading2.png"}},{"type":"Image","props":{"y":895,"x":141,"width":311,"var":"img_Progress","skin":"loadingView/loading1.png","sizeGrid":"0,9,0,8","height":20}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoadingUI.uiView);

        }

    }
}

module ui {
    export class SelectUI extends View {
		public btn_First:Laya.Label;
		public btn_Second:Laya.Label;
		public btn_Third:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":752,"skin":"unpackage/loadingBg.jpg","height":1331}},{"type":"Label","props":{"y":102,"x":76,"width":600,"var":"btn_First","text":"第一季","height":191,"fontSize":120,"font":"Microsoft YaHei","align":"center"}},{"type":"Label","props":{"y":343,"x":76,"width":600,"var":"btn_Second","text":"第一季","height":191,"fontSize":120,"font":"Microsoft YaHei","align":"center"}},{"type":"Label","props":{"y":605,"x":78,"width":600,"var":"btn_Third","text":"第一季","height":191,"fontSize":120,"font":"Microsoft YaHei","align":"center"}},{"type":"Image","props":{"y":1168,"x":37,"width":139,"skin":"publicAssets/exit_R.png","height":132}},{"type":"Image","props":{"y":206,"x":360,"skin":"publicAssets/start1.png"}},{"type":"Image","props":{"y":719,"x":347,"skin":"publicAssets/start1.png"}},{"type":"Image","props":{"y":461,"x":354,"skin":"publicAssets/start1.png"}},{"type":"Image","props":{"y":874,"x":101,"width":559,"skin":"comp/blank.png","height":256}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.SelectUI.uiView);

        }

    }
}

module ui {
    export class SelectBoxUI extends View {
		public img_Box1:Laya.Image;
		public img_Box2:Laya.Image;
		public img_Box3:Laya.Image;
		public img_Box4:Laya.Image;
		public img_SelectBox:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":29,"x":36,"width":97,"skin":"comp/blank.png","height":103}},{"type":"Image","props":{"y":30,"x":166,"width":97,"skin":"comp/blank.png","height":103}},{"type":"Image","props":{"y":19,"x":635,"width":79,"skin":"comp/blank.png","height":67}},{"type":"Image","props":{"y":1189,"x":29,"width":131,"skin":"publicAssets/exit_R.png","height":124}},{"type":"Panel","props":{"y":308,"x":3,"width":747,"height":574},"child":[{"type":"Image","props":{"y":83,"x":139,"width":429,"var":"img_Box1","skin":"selectBox/box1.png","height":459}},{"type":"Image","props":{"y":83,"x":607,"width":429,"var":"img_Box2","skin":"selectBox/box2.png","height":459},"child":[{"type":"Image","props":{"y":191,"x":-2,"width":439,"skin":"selectBox/boxLock.png","height":199}}]},{"type":"Image","props":{"y":83,"x":1075,"width":429,"var":"img_Box3","skin":"selectBox/box4.png","height":459},"child":[{"type":"Image","props":{"y":200,"x":-7,"width":439,"skin":"selectBox/boxLock.png","height":199}}]},{"type":"Image","props":{"y":83,"x":1536,"width":429,"var":"img_Box4","skin":"selectBox/box3.png","height":459},"child":[{"type":"Image","props":{"y":211,"x":-5,"width":439,"skin":"selectBox/boxLock.png","height":199}}]}]},{"type":"Image","props":{"y":942,"x":226,"var":"img_SelectBox","skin":"publicAssets/start1.png"},"child":[{"type":"Image","props":{"y":7,"x":7,"width":42,"skin":"publicAssets/start2.png","height":50}}]},{"type":"Image","props":{"y":920,"x":234,"width":13,"skin":"comp/blank.png","height":14}},{"type":"Image","props":{"y":921,"x":311,"width":13,"skin":"comp/blank.png","height":14}},{"type":"Image","props":{"y":921,"x":273,"width":13,"skin":"comp/blank.png","height":14}},{"type":"Image","props":{"y":922,"x":348,"width":13,"skin":"comp/blank.png","height":14}},{"type":"Image","props":{"y":921,"x":428,"width":13,"skin":"comp/blank.png","height":14}},{"type":"Image","props":{"y":921,"x":386,"width":13,"skin":"comp/blank.png","height":14}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.SelectBoxUI.uiView);

        }

    }
}

module ui {
    export class SelectRoundUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":21,"x":34,"width":98,"skin":"comp/blank.png","height":92}},{"type":"Image","props":{"y":20,"x":159,"width":98,"skin":"comp/blank.png","height":92}},{"type":"Image","props":{"y":24,"x":674,"width":57,"skin":"comp/blank.png","height":58}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.SelectRoundUI.uiView);

        }

    }
}

module ui {
    export class StartGameUI extends View {
		public btn_StartGame:Laya.Image;
		public lab_StartGame:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":1,"x":-704,"width":2388,"skin":"unpackage/startGameBg.jpg","height":1343}},{"type":"Image","props":{"y":180,"x":125,"width":466,"skin":"unpackage/cutRope.png","height":414}},{"type":"Image","props":{"y":654,"x":169,"width":414,"var":"btn_StartGame","skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Image","props":{"y":823,"x":171,"width":414,"skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Image","props":{"y":981,"x":170,"width":414,"skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Label","props":{"y":677,"x":200,"width":357,"var":"lab_StartGame","text":"开始游戏","height":58,"fontSize":50,"font":"Microsoft YaHei","bold":true,"align":"center"}},{"type":"Label","props":{"y":1006,"x":202,"width":357,"text":"关于","height":58,"fontSize":50,"font":"Microsoft YaHei","align":"center"}},{"type":"Label","props":{"y":846,"x":202,"width":357,"text":"图集","height":58,"fontSize":50,"font":"Microsoft YaHei","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StartGameUI.uiView);

        }

    }
}

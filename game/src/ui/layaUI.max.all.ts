
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BoxUI extends View {
		public moster:Laya.Image;
		public img_box:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":500},"child":[{"type":"Image","props":{"y":271,"x":173,"width":177,"skin":"publicAssets/black.jpg","height":143}},{"type":"Image","props":{"y":282,"x":187,"width":280,"var":"moster","skin":"publicAssets/moster.png","height":157}},{"type":"Image","props":{"y":20,"x":39,"width":429,"var":"img_box","skin":"selectBox/box1.png","height":459}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BoxUI.uiView);

        }

    }
}

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
		public btn_Exit:Laya.Image;
		public btn_First_:Laya.Image;
		public btn_Third_:Laya.Image;
		public btn_Second_:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":752,"skin":"unpackage/loadingBg.jpg","height":1331}},{"type":"Label","props":{"y":102,"x":76,"width":600,"var":"btn_First","text":"第一季","height":191,"fontSize":120,"font":"Microsoft YaHei","color":"#000000","align":"center"}},{"type":"Label","props":{"y":343,"x":76,"width":600,"var":"btn_Second","text":"第二季","height":191,"fontSize":120,"font":"Microsoft YaHei","color":"#000000","align":"center"}},{"type":"Label","props":{"y":605,"x":78,"width":600,"var":"btn_Third","text":"第三季","height":191,"fontSize":120,"font":"Microsoft YaHei","align":"center"}},{"type":"Image","props":{"y":1168,"x":37,"width":139,"var":"btn_Exit","skin":"publicAssets/exit_R.png","height":132}},{"type":"Image","props":{"y":206,"x":360,"var":"btn_First_","skin":"publicAssets/start1.png"}},{"type":"Image","props":{"y":719,"x":347,"var":"btn_Third_","skin":"publicAssets/start1.png"}},{"type":"Image","props":{"y":461,"x":354,"var":"btn_Second_","skin":"publicAssets/start1.png"}},{"type":"Image","props":{"y":874,"x":101,"width":559,"skin":"comp/blank.png","height":256}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.SelectUI.uiView);

        }

    }
}

module ui {
    export class SelectBoxUI extends View {
		public panel_ShowBox:Laya.Panel;
		public img_SelectBox:Laya.Image;
		public btn_Exit:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":748,"skin":"unpackage/startGameBg.jpg","height":1340}},{"type":"Image","props":{"y":29,"x":36,"width":97,"skin":"comp/blank.png","height":103}},{"type":"Image","props":{"y":30,"x":166,"width":97,"skin":"comp/blank.png","height":103}},{"type":"Image","props":{"y":19,"x":635,"width":79,"skin":"comp/blank.png","height":67}},{"type":"Panel","props":{"y":308,"x":3,"width":747,"var":"panel_ShowBox","height":574,"hScrollBarSkin":"comp/hscroll.png"}},{"type":"Image","props":{"y":942,"x":226,"var":"img_SelectBox","skin":"publicAssets/start1.png"},"child":[{"type":"Image","props":{"y":7,"x":7,"width":42,"skin":"publicAssets/start2.png","height":50}}]},{"type":"Image","props":{"y":920,"x":234,"width":13,"skin":"comp/blank.png","height":14}},{"type":"Image","props":{"y":921,"x":311,"width":13,"skin":"comp/blank.png","height":14}},{"type":"Image","props":{"y":921,"x":273,"width":13,"skin":"comp/blank.png","height":14}},{"type":"Image","props":{"y":922,"x":348,"width":13,"skin":"comp/blank.png","height":14}},{"type":"Image","props":{"y":921,"x":428,"width":13,"skin":"comp/blank.png","height":14}},{"type":"Image","props":{"y":921,"x":386,"width":13,"skin":"comp/blank.png","height":14}},{"type":"Image","props":{"y":1189,"x":19,"width":147,"var":"btn_Exit","skin":"publicAssets/exit_R.png","height":140}}]};
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
		public btn_Imgs:Laya.Image;
		public btn_About:Laya.Image;
		public lab_StartGame:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":1,"x":-704,"width":2388,"skin":"unpackage/startGameBg.jpg","height":1343}},{"type":"Image","props":{"y":180,"x":125,"width":466,"skin":"unpackage/cutRope.png","height":414}},{"type":"Image","props":{"y":654,"x":169,"width":414,"var":"btn_StartGame","skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Image","props":{"y":823,"x":171,"width":414,"var":"btn_Imgs","skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Image","props":{"y":981,"x":170,"width":414,"var":"btn_About","skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Label","props":{"y":677,"x":200,"width":357,"var":"lab_StartGame","text":"开始游戏","height":58,"fontSize":50,"font":"Microsoft YaHei","bold":true,"align":"center"}},{"type":"Label","props":{"y":1006,"x":202,"width":357,"text":"关于","height":58,"fontSize":50,"font":"Microsoft YaHei","align":"center"}},{"type":"Label","props":{"y":846,"x":202,"width":357,"text":"图集","height":58,"fontSize":50,"font":"Microsoft YaHei","color":"#000000","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StartGameUI.uiView);

        }

    }
}

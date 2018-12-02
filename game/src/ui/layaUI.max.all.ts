
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
		public round_Lamp:Laya.Sprite;
		public btn_Exit:Laya.Image;
		public btn_First_:Laya.Image;
		public btn_First:Laya.Label;
		public btn_Second_:Laya.Image;
		public btn_Second:Laya.Label;
		public btn_Third_:Laya.Image;
		public btn_Third:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":-9,"x":-809,"width":2392,"skin":"unpackage/startGameBg.jpg","height":1346}},{"type":"Sprite","props":{"y":635,"x":352,"width":1800,"var":"round_Lamp","pivotY":900,"pivotX":900,"height":1800},"child":[{"type":"Image","props":{"y":800,"x":800,"width":1800,"skin":"unpackage/lamp.png","pivotY":800,"pivotX":800,"height":1800}}]},{"type":"Image","props":{"y":1168,"x":37,"width":139,"var":"btn_Exit","skin":"publicAssets/exit_R.png","height":132}},{"type":"Image","props":{"y":975,"x":101,"width":559,"skin":"comp/blank.png","height":155}},{"type":"Image","props":{"y":106,"x":151,"width":229,"skin":"select/s1black.png","height":160}},{"type":"Image","props":{"y":106,"x":620,"width":240,"skin":"select/s1black.png","scaleX":-1,"height":160}},{"type":"Image","props":{"y":260,"x":-2,"width":350,"skin":"select/bottom.png","height":77}},{"type":"Image","props":{"y":260,"x":753,"width":350,"skin":"select/bottom.png","scaleX":-1,"height":77}},{"type":"Image","props":{"y":118,"x":-3,"width":214,"skin":"select/s1l.png","height":167}},{"type":"Image","props":{"y":80,"x":35,"skin":"select/s1goods.png"}},{"type":"Image","props":{"y":128,"x":751,"width":167,"skin":"select/s1r.png","scaleX":-1,"height":155}},{"type":"Image","props":{"y":242,"x":315,"width":112,"var":"btn_First_","skin":"select/s1s2sure.png","height":98}},{"type":"Label","props":{"y":114,"x":163,"width":441,"var":"btn_First","text":"第一季","strokeColor":"#5a5a5a","stroke":4,"padding":"28","height":169,"fontSize":60,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Image","props":{"y":397,"x":154,"width":229,"skin":"select/s2black.png","height":160}},{"type":"Image","props":{"y":397,"x":623,"width":240,"skin":"select/s2black.png","scaleX":-1,"height":160}},{"type":"Image","props":{"y":551,"x":1,"width":350,"skin":"select/bottom.png","height":77}},{"type":"Image","props":{"y":551,"x":756,"width":350,"skin":"select/bottom.png","scaleX":-1,"height":77}},{"type":"Image","props":{"y":409,"x":0,"width":214,"skin":"select/s2l.png","height":167}},{"type":"Image","props":{"y":407,"x":600,"skin":"select/s2goods.png"}},{"type":"Image","props":{"y":419,"x":754,"width":167,"skin":"select/s2r.png","scaleX":-1,"height":155}},{"type":"Image","props":{"y":533,"x":318,"width":112,"var":"btn_Second_","skin":"select/s1s2sure.png","height":98}},{"type":"Label","props":{"y":414,"x":163,"width":453,"var":"btn_Second","text":"第二季","strokeColor":"#535353","stroke":5,"padding":"25","height":149,"fontSize":60,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Image","props":{"y":635,"x":82,"width":105,"skin":"select/s3goods.png","height":147}},{"type":"Image","props":{"y":698,"x":153,"width":229,"skin":"select/s3black.png","height":160}},{"type":"Image","props":{"y":698,"x":622,"width":240,"skin":"select/s3black.png","scaleX":-1,"height":160}},{"type":"Image","props":{"y":852,"x":0,"width":350,"skin":"select/bottom.png","height":77}},{"type":"Image","props":{"y":852,"x":755,"width":350,"skin":"select/bottom.png","scaleX":-1,"height":77}},{"type":"Image","props":{"y":710,"x":-1,"width":214,"skin":"select/s3l.png","height":167}},{"type":"Image","props":{"y":720,"x":753,"width":167,"skin":"select/s3r.png","scaleX":-1,"height":155}},{"type":"Image","props":{"y":834,"x":319,"width":111,"var":"btn_Third_","skin":"select/s3sure.png","height":96}},{"type":"Label","props":{"y":718,"x":178,"width":402,"var":"btn_Third","text":"第三季","strokeColor":"#4a4a4a","stroke":5,"padding":"25","height":128,"fontSize":60,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.SelectUI.uiView);

        }

    }
}

module ui.SelectBox {
    export class BoxUI extends View {
		public sprite_BoxParent:Laya.Sprite;
		public img_box:Laya.Image;
		public img_lock:Laya.Image;
		public img_StarCount:Laya.Image;
		public img_Count3:Laya.Image;
		public img_Count2:Laya.Image;
		public img_Count1:Laya.Image;
		public img_IsAllThree:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":500,"hitTestPrior":true,"height":500},"child":[{"type":"Image","props":{"y":271,"x":173,"width":177,"skin":"publicAssets/black.jpg","height":143}},{"type":"Sprite","props":{"y":281,"x":67,"width":193,"var":"sprite_BoxParent","height":150}},{"type":"Image","props":{"y":24,"x":54,"width":407,"var":"img_box","skin":"selectBox/Box (1).png","height":435,"alpha":1}},{"type":"Image","props":{"y":215,"x":36,"width":438,"var":"img_lock","skin":"selectBox/boxLock.png","height":198},"child":[{"type":"Image","props":{"y":103,"x":233,"visible":false,"var":"img_StarCount","skin":"selectBox/lockStar.png"}},{"type":"Image","props":{"y":110,"x":207,"visible":false,"var":"img_Count3","skin":"publicAssets/0.png"}},{"type":"Image","props":{"y":109,"x":183,"visible":false,"var":"img_Count2","skin":"publicAssets/6.png"}},{"type":"Image","props":{"y":109,"x":160,"visible":false,"var":"img_Count1","skin":"publicAssets/6.png"}}]},{"type":"Image","props":{"y":346,"x":349,"var":"img_IsAllThree","skin":"selectBox/allThree.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.SelectBox.BoxUI.uiView);

        }

    }
}

module ui.SelectBox {
    export class SelectBoxUI extends View {
		public round_Lamp:Laya.Sprite;
		public moster:Laya.Image;
		public panel_ShowBox:Laya.Panel;
		public btn_Exit:Laya.Image;
		public sprite_SelectBox:Laya.Sprite;
		public img_SelectBox:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"hitTestPrior":true,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":749,"skin":"unpackage/startGameBg.jpg","height":1340}},{"type":"Sprite","props":{"y":644,"x":356,"width":1800,"var":"round_Lamp","pivotY":900,"pivotX":900,"height":1800},"child":[{"type":"Image","props":{"y":800,"x":800,"width":1800,"skin":"unpackage/lamp.png","pivotY":800,"pivotX":800,"height":1800}}]},{"type":"Image","props":{"y":19,"x":12,"width":80,"skin":"selectBox/super.png","height":80}},{"type":"Image","props":{"y":16,"x":120,"width":80,"skin":"selectBox/shop.png","height":80}},{"type":"Image","props":{"y":19,"x":635,"width":79,"skin":"comp/blank.png","height":67}},{"type":"Image","props":{"y":596,"x":269,"width":283,"var":"moster","skin":"publicAssets/moster.png","height":158}},{"type":"Panel","props":{"y":308,"x":3,"width":747,"var":"panel_ShowBox","height":574,"hScrollBarSkin":"comp/hscroll.png"}},{"type":"Image","props":{"y":1189,"x":19,"width":147,"var":"btn_Exit","skin":"publicAssets/exit_R.png","height":140}},{"type":"Image","props":{"y":886,"x":219,"width":323,"skin":"selectBox/selectBoxBottom.png","height":13}},{"type":"Sprite","props":{"y":852,"x":222,"width":313,"var":"sprite_SelectBox","height":62},"child":[{"type":"Image","props":{"y":13,"x":-19,"var":"img_SelectBox","skin":"selectBox/selectPoint.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.SelectBox.SelectBoxUI.uiView);

        }

    }
}

module ui.SelectRound {
    export class RoundUI extends View {
		public img_RoundBox:Laya.Image;
		public img_Star:Laya.Image;
		public img_Count1:Laya.Image;
		public img_Count2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":140,"height":140,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":140,"var":"img_RoundBox","skin":"selectRound/unlock.png","height":140}},{"type":"Image","props":{"y":95,"x":43,"width":90,"var":"img_Star","skin":"selectRound/star0.png","hitTestPrior":true,"height":50},"child":[{"type":"Image","props":{"y":-56,"x":12,"width":17,"visible":false,"var":"img_Count1","skin":"publicAssets/1.png","height":49}},{"type":"Image","props":{"y":-56,"x":34,"width":17,"var":"img_Count2","skin":"publicAssets/1.png","height":49}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.SelectRound.RoundUI.uiView);

        }

    }
}

module ui.SelectRound {
    export class SelectRoundUI extends View {
		public round_Lamp:Laya.Sprite;
		public btn_Exit:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"hitTestPrior":true,"height":1334},"child":[{"type":"Image","props":{"y":-2,"x":-2,"width":759,"skin":"unpackage/loadingBg.jpg","height":1337}},{"type":"Sprite","props":{"y":654,"x":366,"width":1800,"var":"round_Lamp","pivotY":900,"pivotX":900,"height":1800},"child":[{"type":"Image","props":{"y":800,"x":800,"width":1800,"skin":"unpackage/lamp.png","pivotY":800,"pivotX":800,"height":1800}}]},{"type":"Image","props":{"y":29,"x":22,"width":80,"skin":"selectBox/super.png","height":80}},{"type":"Image","props":{"y":26,"x":130,"width":80,"skin":"selectBox/shop.png","height":80}},{"type":"Image","props":{"y":29,"x":645,"width":79,"skin":"comp/blank.png","height":67}},{"type":"Image","props":{"width":147,"var":"btn_Exit","skin":"publicAssets/exit_R.png","left":20,"height":140,"bottom":20}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.SelectRound.SelectRoundUI.uiView);

        }

    }
}

module ui {
    export class StartGameUI extends View {
		public round_Lamp:Laya.Sprite;
		public btn_StartGame:Laya.Image;
		public btn_Imgs:Laya.Image;
		public btn_About:Laya.Image;
		public lab_StartGame:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":1,"x":-704,"width":2388,"skin":"unpackage/startGameBg.jpg","height":1343}},{"type":"Image","props":{"y":180,"x":125,"width":466,"skin":"unpackage/cutRope.png","height":414}},{"type":"Sprite","props":{"y":663,"x":341,"width":1600,"var":"round_Lamp","pivotY":800,"pivotX":800,"height":1600},"child":[{"type":"Image","props":{"y":800,"x":800,"width":1600,"skin":"unpackage/lamp.png","pivotY":800,"pivotX":800,"height":1600}}]},{"type":"Image","props":{"y":654,"x":169,"width":414,"var":"btn_StartGame","skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Image","props":{"y":823,"x":171,"width":414,"var":"btn_Imgs","skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Image","props":{"y":981,"x":170,"width":414,"var":"btn_About","skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Label","props":{"y":677,"x":200,"width":357,"var":"lab_StartGame","text":"开始游戏","height":58,"fontSize":50,"font":"Microsoft YaHei","bold":true,"align":"center"}},{"type":"Label","props":{"y":1006,"x":202,"width":357,"text":"关于","height":58,"fontSize":50,"font":"Microsoft YaHei","align":"center"}},{"type":"Label","props":{"y":846,"x":202,"width":357,"text":"图集","height":58,"fontSize":50,"font":"Microsoft YaHei","color":"#000000","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StartGameUI.uiView);

        }

    }
}

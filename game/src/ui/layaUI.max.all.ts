
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.GameView {
    export class GameBackgroundUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;
		public panel_GameWorld:Laya.Panel;
		public img_gameBg:Laya.Image;
		public btn_Super:Laya.Image;
		public btn_Teach:Laya.Image;
		public btn_Menu:Laya.Image;
		public btn_ReGame:Laya.Image;
		public img_star1:Laya.Image;
		public img_star2:Laya.Image;
		public img_star3:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Panel","props":{"y":0,"x":0,"width":750,"var":"panel_GameWorld","height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"var":"img_gameBg","skin":"gameView/gameBg/boxBg_1.jpg","height":1337}}]},{"type":"Image","props":{"y":9,"x":12,"width":80,"var":"btn_Super","skin":"selectBox/super.png","height":80}},{"type":"Image","props":{"y":8,"x":106,"width":80,"var":"btn_Teach","skin":"selectBox/shop.png","height":80}},{"type":"Image","props":{"y":9,"x":599,"width":146,"var":"btn_Menu","skin":"gameView/gameBtn/menu.png","height":72}},{"type":"Image","props":{"y":8,"x":512,"width":88,"var":"btn_ReGame","skin":"gameView/gameBtn/regame.png","height":74}},{"type":"Image","props":{"y":14,"x":209,"width":62,"var":"img_star1","skin":"gameView/gameBtn/star1.png","height":69},"compId":9},{"type":"Image","props":{"y":13,"x":276,"width":62,"var":"img_star2","skin":"gameView/gameBtn/star1.png","height":69},"compId":10},{"type":"Image","props":{"y":13,"x":344,"width":62,"var":"img_star3","skin":"gameView/gameBtn/star1.png","height":69},"compId":11}],"animations":[{"nodes":[{"target":9,"keyframes":{"y":[{"value":14,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0},{"value":13,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":1},{"value":14,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":2},{"value":11,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":5},{"value":9,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":6},{"value":10,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":7},{"value":9,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":8},{"value":7,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":9}],"x":[{"value":209,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":220,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":1},{"value":225,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":2},{"value":239,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":3},{"value":219,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":5},{"value":213,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":6},{"value":205,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":7},{"value":200,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":8},{"value":202,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":9}],"skin":[{"value":"gameView/gameBtn/star11.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":0},{"value":"gameView/gameBtn/star2.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":1},{"value":"gameView/gameBtn/star3.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":2},{"value":"gameView/gameBtn/star4.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":3},{"value":"gameView/gameBtn/star5.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":4},{"value":"gameView/gameBtn/star6.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":5},{"value":"gameView/gameBtn/star7.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":6},{"value":"gameView/gameBtn/star8.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":7},{"value":"gameView/gameBtn/star9.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":8},{"value":"gameView/gameBtn/star10.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":9},{"value":"gameView/gameBtn/star11.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":10,"keyframes":{"x":[{"value":276,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0}],"skin":[{"value":"gameView/gameBtn/star1.png","tweenMethod":"linearNone","tween":false,"target":10,"key":"skin","index":0},{"value":"gameView/gameBtn/star2.png","tweenMethod":"linearNone","tween":false,"target":10,"key":"skin","index":1},{"value":"gameView/gameBtn/star3.png","tweenMethod":"linearNone","tween":false,"target":10,"key":"skin","index":2},{"value":"gameView/gameBtn/star4.png","tweenMethod":"linearNone","tween":false,"target":10,"key":"skin","index":3},{"value":"gameView/gameBtn/star5.png","tweenMethod":"linearNone","tween":false,"target":10,"key":"skin","index":4},{"value":"gameView/gameBtn/star6.png","tweenMethod":"linearNone","tween":false,"target":10,"key":"skin","index":5},{"value":"gameView/gameBtn/star7.png","tweenMethod":"linearNone","tween":false,"target":10,"key":"skin","index":6},{"value":"gameView/gameBtn/star8.png","tweenMethod":"linearNone","tween":false,"target":10,"key":"skin","index":7},{"value":"gameView/gameBtn/star9.png","tweenMethod":"linearNone","tween":false,"target":10,"key":"skin","index":8},{"value":"gameView/gameBtn/star10.png","tweenMethod":"linearNone","tween":false,"target":10,"key":"skin","index":9},{"value":"gameView/gameBtn/star11.png","tweenMethod":"linearNone","tween":false,"target":10,"key":"skin","index":10}]}}],"name":"ani2","id":2,"frameRate":24,"action":0},{"nodes":[{"target":11,"keyframes":{"x":[{"value":344,"tweenMethod":"linearNone","tween":true,"target":11,"key":"x","index":0}],"skin":[{"value":"gameView/gameBtn/star1.png","tweenMethod":"linearNone","tween":false,"target":11,"key":"skin","index":0},{"value":"gameView/gameBtn/star2.png","tweenMethod":"linearNone","tween":false,"target":11,"key":"skin","index":1},{"value":"gameView/gameBtn/star3.png","tweenMethod":"linearNone","tween":false,"target":11,"key":"skin","index":2},{"value":"gameView/gameBtn/star4.png","tweenMethod":"linearNone","tween":false,"target":11,"key":"skin","index":3},{"value":"gameView/gameBtn/star5.png","tweenMethod":"linearNone","tween":false,"target":11,"key":"skin","index":4},{"value":"gameView/gameBtn/star6.png","tweenMethod":"linearNone","tween":false,"target":11,"key":"skin","index":5},{"value":"gameView/gameBtn/star7.png","tweenMethod":"linearNone","tween":false,"target":11,"key":"skin","index":6},{"value":"gameView/gameBtn/star8.png","tweenMethod":"linearNone","tween":false,"target":11,"key":"skin","index":7},{"value":"gameView/gameBtn/star9.png","tweenMethod":"linearNone","tween":false,"target":11,"key":"skin","index":8},{"value":"gameView/gameBtn/star10.png","tweenMethod":"linearNone","tween":false,"target":11,"key":"skin","index":9},{"value":"gameView/gameBtn/star11.png","tweenMethod":"linearNone","tween":false,"target":11,"key":"skin","index":10}]}}],"name":"ani3","id":3,"frameRate":24,"action":0},{"nodes":[],"name":"ani4","id":4,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameView.GameBackgroundUI.uiView);

        }

    }
}

module ui.GameView {
    export class GameMenuUI extends View {
		public Label_Score:Laya.Label;
		public btn_Continue:Laya.Button;
		public btn_SelectRound:Laya.Button;
		public btn_MainMenu:Laya.Button;
		public btn_Super:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"hitTestPrior":true,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":752,"skin":"publicAssets/black.jpg","height":1333,"alpha":0.6}},{"type":"Label","props":{"y":15,"x":5,"width":208,"text":"最高得分：","height":55,"fontSize":40,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Label","props":{"y":19,"x":210,"width":235,"var":"Label_Score","text":"212313213","height":50,"font":"30","color":"#ffffff"}},{"type":"Button","props":{"y":399,"x":158,"width":440,"var":"btn_Continue","stateNum":1,"skin":"publicAssets/btn_1.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":40,"labelPadding":"0,0,010","labelFont":"Microsoft YaHei","labelColors":"#fff","labelBold":true,"label":"继续","height":131}},{"type":"Button","props":{"y":555,"x":162,"width":440,"var":"btn_SelectRound","stateNum":1,"skin":"publicAssets/btn_1.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":40,"labelPadding":"0,0,010","labelFont":"Microsoft YaHei","labelColors":"#fff","labelBold":true,"label":"选择关卡","height":131}},{"type":"Button","props":{"y":704,"x":165,"width":440,"var":"btn_MainMenu","stateNum":1,"skin":"publicAssets/btn_1.png","labelStrokeColor":"#000000","labelStroke":2,"labelSize":40,"labelPadding":"0,0,010","labelFont":"Microsoft YaHei","labelColors":"#fff","labelBold":true,"label":"主菜单","height":131}},{"type":"Image","props":{"y":867,"x":319,"width":124,"var":"btn_Super","skin":"publicAssets/aniu1.png","height":122}},{"type":"Image","props":{"y":885,"x":338,"skin":"publicAssets/super.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameView.GameMenuUI.uiView);

        }

    }
}

module ui.GameView {
    export class GameViewDoorUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;
		public ani4:Laya.FrameAnimation;
		public ani5:Laya.FrameAnimation;
		public img_doorL:Laya.Image;
		public img_jiaodaiL:Laya.Image;
		public img_doorR:Laya.Image;
		public img_jiaodaiR:Laya.Image;
		public img_xiaodao:Laya.Image;
		public img_jiaodai:Laya.Image;
		public img_star1:Laya.Image;
		public img_star2:Laya.Image;
		public img_star3:Laya.Image;
		public btn_Replay:Laya.Button;
		public btn_ReturnRound:Laya.Button;
		public btn_Next:Laya.Button;
		public img_jiaodaiM:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":378,"var":"img_doorL","skin":"gameView/gameDoor/boxDoor_1.png","height":1334},"compId":2,"child":[{"type":"Image","props":{"y":387,"x":-6,"width":1,"visible":false,"var":"img_jiaodaiL","skin":"unpackage/jiaodao_l.png","height":1070},"compId":6}]},{"type":"Image","props":{"y":0,"x":750,"width":377,"visible":true,"var":"img_doorR","skin":"gameView/gameDoor/boxDoor_1.png","scaleX":-1,"height":1334},"compId":3,"child":[{"type":"Image","props":{"y":405,"x":-6,"width":9,"visible":false,"var":"img_jiaodaiR","skin":"unpackage/jiaodai_r.png","height":1067},"compId":5}]},{"type":"Image","props":{"y":-339,"x":31,"visible":true,"var":"img_xiaodao","skin":"gameView/gameDoor/dao.png"},"compId":7},{"type":"Image","props":{"y":1342,"x":268,"width":160,"visible":true,"var":"img_jiaodai","skin":"gameView/gameDoor/jiaodai.png","height":215},"compId":8},{"type":"Sprite","props":{"y":0,"x":-12,"width":763,"visible":false,"height":1314,"alpha":1},"compId":25,"child":[{"type":"Image","props":{"y":419,"x":144,"width":163,"var":"img_star1","skin":"gameView/gameDoor/getStar.png","height":163}},{"type":"Image","props":{"y":421,"x":450,"width":163,"var":"img_star2","skin":"gameView/gameDoor/getStar.png","height":163}},{"type":"Image","props":{"y":421,"x":299,"width":163,"var":"img_star3","skin":"gameView/gameDoor/getStar.png","height":163}},{"type":"Label","props":{"y":305,"x":191,"width":405,"text":"真棒","height":103,"fontSize":80,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Button","props":{"y":710,"x":91,"width":295,"var":"btn_Replay","stateNum":1,"skin":"publicAssets/btn_1.png","labelStrokeColor":"#1b1b1b","labelStroke":2,"labelSize":40,"labelPadding":"0,0,10","labelFont":"Microsoft YaHei","labelColors":"#fff","labelBold":true,"label":"重玩","height":88}},{"type":"Button","props":{"y":841,"x":248,"width":295,"var":"btn_ReturnRound","stateNum":1,"skin":"publicAssets/btn_1.png","labelStroke":2,"labelSize":40,"labelPadding":"0,0,10","labelFont":"Microsoft YaHei","labelColors":"#fff","labelBold":true,"label":"菜单","height":88}},{"type":"Button","props":{"y":710,"x":396,"width":295,"var":"btn_Next","stateNum":1,"skin":"publicAssets/btn_1.png","labelStroke":2,"labelSize":40,"labelPadding":"0,0,10","labelFont":"Microsoft YaHei","labelColors":"#fff","labelBold":true,"label":"下一关","height":88}}]},{"type":"Panel","props":{"y":97,"x":300,"width":145,"height":1121},"compId":47,"child":[{"type":"Image","props":{"y":10,"x":22,"width":101,"visible":false,"var":"img_jiaodaiM","skin":"unpackage/jiaodai_m.png","height":1072},"compId":4}]}],"animations":[{"nodes":[{"target":7,"keyframes":{"y":[{"value":1327,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":1265,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":10},{"value":658,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":18},{"value":20,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":23},{"value":-339,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":30}],"x":[{"value":40,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":31,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":30}]}},{"target":3,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"y","index":31},{"value":-41,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":37},{"value":-107,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":42},{"value":-291,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":48}],"x":[{"value":753,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":758,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":48}],"width":[{"value":381,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":0},{"value":381,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"width","index":31},{"value":200,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":42},{"value":3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":48}],"height":[{"value":1331,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":0},{"value":1331,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"height","index":31},{"value":1432,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":37},{"value":1577,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":42},{"value":1954,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":48}]}},{"target":2,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"y","index":31},{"value":-36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":37},{"value":-115,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":42},{"value":-288,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":48}],"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":31},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":42},{"value":-11,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":48}],"width":[{"value":377,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":0},{"value":377,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"width","index":31},{"value":203,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":42},{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":48}],"height":[{"value":1331,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":0},{"value":1331,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"height","index":31},{"value":1424,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":37},{"value":1575,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":42},{"value":1921,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":48}]}},{"target":5,"keyframes":{"y":[{"value":121,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":0},{"value":120,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"y","index":31},{"value":127,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":34},{"value":134,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":37},{"value":131,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":42},{"value":405,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":48}],"x":[{"value":383,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0},{"value":331,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"x","index":31},{"value":294,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":34},{"value":243,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":37},{"value":173,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":42},{"value":-6,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":48}],"width":[{"value":50,"tweenMethod":"linearNone","tween":true,"target":5,"key":"width","index":0},{"value":50,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"width","index":31},{"value":31,"tweenMethod":"linearNone","tween":true,"target":5,"key":"width","index":34},{"value":28,"tweenMethod":"linearNone","tween":true,"target":5,"key":"width","index":42},{"value":9,"tweenMethod":"linearNone","tween":true,"target":5,"key":"width","index":48}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":30}]}},{"target":6,"keyframes":{"y":[{"value":119,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0},{"value":119,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"y","index":31},{"value":128,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":37},{"value":131,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":42},{"value":387,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":48}],"x":[{"value":329,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0},{"value":329,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":31},{"value":249,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":37},{"value":179,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":42},{"value":-6,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":48}],"width":[{"value":44,"tweenMethod":"linearNone","tween":true,"target":6,"key":"width","index":0},{"value":44,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"width","index":31},{"value":26,"tweenMethod":"linearNone","tween":true,"target":6,"key":"width","index":42},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"width","index":48}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":30}]}},{"target":4,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":7,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0}]}},{"target":3,"keyframes":{"y":[{"value":-208,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":51}],"x":[{"value":758,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":750,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":20}],"width":[{"value":13,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":0},{"value":380,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":20},{"value":380,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":51}],"height":[{"value":1748,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":0},{"value":1332,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":20},{"value":1333,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":51}]}},{"target":2,"keyframes":{"y":[{"value":-213,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":51}],"x":[{"value":-11,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":20}],"width":[{"value":13,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":0},{"value":380,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":20},{"value":380,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":51}],"height":[{"value":1742,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":0},{"value":1335,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":20},{"value":1334,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":51}]}},{"target":4,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":20},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":24},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":25}]}},{"target":8,"keyframes":{"y":[{"value":-173,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":0},{"value":-173,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"y","index":20},{"value":128,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":31},{"value":574,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":37},{"value":931,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":49},{"value":1342,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":51}],"x":[{"value":276,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0},{"value":276,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"x","index":20},{"value":276,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":25},{"value":275,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":31},{"value":274,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":37},{"value":275,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":49}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":8,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":8,"key":"visible","index":20},{"value":true,"tweenMethod":"linearNone","tween":false,"target":8,"key":"visible","index":25}]}},{"target":47,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":47,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":47,"key":"visible","index":24}],"height":[{"value":1121,"tweenMethod":"linearNone","tween":true,"target":47,"key":"height","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":47,"key":"height","index":24},{"value":10,"tweenMethod":"linearNone","tween":true,"target":47,"key":"height","index":25},{"value":45,"tweenMethod":"linearNone","tween":true,"target":47,"key":"height","index":31},{"value":530,"tweenMethod":"linearNone","tween":true,"target":47,"key":"height","index":37},{"value":1095,"tweenMethod":"linearNone","tween":true,"target":47,"key":"height","index":49}]}}],"name":"ani2","id":2,"frameRate":26,"action":0},{"nodes":[{"target":2,"keyframes":{"y":[{"value":-107,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":23}],"width":[{"value":3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":0},{"value":380,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":23}],"height":[{"value":1542,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":0},{"value":1334,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":23}]}},{"target":3,"keyframes":{"y":[{"value":-97,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":23}],"width":[{"value":8,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":0},{"value":380,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":23}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":23}],"height":[{"value":1531,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":0},{"value":1334,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":23}]}},{"target":25,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":25,"key":"visible","index":0}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":25,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":25,"key":"alpha","index":10}]}},{"target":4,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0}]}},{"target":6,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0}]}},{"target":5,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":23}]}}],"name":"ani3","id":3,"frameRate":24,"action":0},{"nodes":[{"target":25,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":25,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":25,"key":"visible","index":12}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":25,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":25,"key":"alpha","index":12}]}},{"target":2,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":-120,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":24}],"width":[{"value":378,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":0},{"value":5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":24}],"height":[{"value":1334,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":0},{"value":1585,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":24}]}},{"target":3,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":-108,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":24}],"width":[{"value":377,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":0},{"value":5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":24}],"height":[{"value":1334,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":0},{"value":1571,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":24}]}}],"name":"ani4","id":4,"frameRate":24,"action":0},{"nodes":[{"target":2,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":-120,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":24}],"width":[{"value":378,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":0},{"value":5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":24}],"height":[{"value":1334,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":0},{"value":1585,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":24}]}},{"target":3,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":-108,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":24}],"width":[{"value":377,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":0},{"value":5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":24}],"height":[{"value":1334,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":0},{"value":1571,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":24}]}}],"name":"ani5","id":4,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameView.GameViewDoorUI.uiView);

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
		public img_DoorR:Laya.Image;
		public img_DoorL:Laya.Image;
		public round_Lamp:Laya.Sprite;
		public btn_Exit:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"hitTestPrior":true,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":753,"width":380,"var":"img_DoorR","skin":"gameView/gameDoor/boxDoor_1.png","scaleX":-1,"height":1334}},{"type":"Image","props":{"y":0,"x":3,"width":380,"var":"img_DoorL","skin":"gameView/gameDoor/boxDoor_1.png","height":1334}},{"type":"Image","props":{"y":107,"x":322,"width":101,"visible":true,"skin":"unpackage/jiaodai_m.png","height":1072}},{"type":"Sprite","props":{"y":654,"x":366,"width":1800,"var":"round_Lamp","pivotY":900,"pivotX":900,"height":1800},"child":[{"type":"Image","props":{"y":800,"x":800,"width":1800,"skin":"unpackage/lamp.png","pivotY":800,"pivotX":800,"height":1800}}]},{"type":"Image","props":{"y":29,"x":22,"width":80,"skin":"selectBox/super.png","height":80}},{"type":"Image","props":{"y":26,"x":130,"width":80,"skin":"selectBox/shop.png","height":80}},{"type":"Image","props":{"y":29,"x":645,"width":79,"skin":"comp/blank.png","height":67}},{"type":"Image","props":{"width":147,"var":"btn_Exit","skin":"publicAssets/exit_R.png","left":20,"height":140,"bottom":20}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.SelectRound.SelectRoundUI.uiView);

        }

    }
}

module ui.Shop {
    export class ShopDialogUI extends Dialog {

        public static  uiView:any ={"type":"Dialog","props":{"width":750,"height":1334}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.Shop.ShopDialogUI.uiView);

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

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":1,"x":-704,"width":2388,"skin":"unpackage/startGameBg.jpg","height":1343}},{"type":"Image","props":{"y":113,"x":61,"width":583,"skin":"unpackage/cutRope.png","height":518}},{"type":"Sprite","props":{"y":666,"x":365,"width":1600,"var":"round_Lamp","pivotY":800,"pivotX":800,"height":1600},"child":[{"type":"Image","props":{"y":800,"x":800,"width":1600,"skin":"unpackage/lamp.png","pivotY":800,"pivotX":800,"height":1600}}]},{"type":"Image","props":{"y":654,"x":169,"width":414,"var":"btn_StartGame","skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Image","props":{"y":823,"x":171,"width":414,"var":"btn_Imgs","skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Image","props":{"y":981,"x":170,"width":414,"var":"btn_About","skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Label","props":{"y":677,"x":200,"width":357,"var":"lab_StartGame","text":"开始游戏","height":58,"fontSize":50,"font":"Microsoft YaHei","bold":true,"align":"center"}},{"type":"Label","props":{"y":1006,"x":202,"width":357,"text":"关于","height":58,"fontSize":50,"font":"Microsoft YaHei","align":"center"}},{"type":"Label","props":{"y":846,"x":202,"width":357,"text":"图集","height":58,"fontSize":50,"font":"Microsoft YaHei","color":"#000000","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StartGameUI.uiView);

        }

    }
}


import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class LoadingUI extends View {
		public lab_Progress:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":3,"x":4,"width":751,"skin":"unpackage/loadingBg.jpg","height":1327}},{"type":"Image","props":{"y":152,"x":99,"width":544,"skin":"publicAssets/cutRope.png","height":483}},{"type":"Label","props":{"y":817,"x":215,"width":389,"var":"lab_Progress","text":"加载中（20%）","height":50,"fontSize":50,"color":"#ffffff","align":"center"}}]};
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

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":1,"x":-704,"width":2388,"skin":"unpackage/startGameBg.jpg","height":1343}},{"type":"Image","props":{"y":180,"x":125,"width":466,"skin":"publicAssets/cutRope.png","height":414}},{"type":"Image","props":{"y":654,"x":169,"width":414,"var":"btn_StartGame","skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Image","props":{"y":823,"x":171,"width":414,"skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Image","props":{"y":981,"x":170,"width":414,"skin":"publicAssets/btn1_2.png","sizeGrid":"0,52,0,48","height":119}},{"type":"Label","props":{"y":677,"x":200,"width":357,"var":"lab_StartGame","text":"开始游戏","height":58,"fontSize":50,"font":"Microsoft YaHei","bold":true,"align":"center"}},{"type":"Label","props":{"y":1006,"x":202,"width":357,"text":"关于","height":58,"fontSize":50,"font":"Microsoft YaHei","align":"center"}},{"type":"Label","props":{"y":846,"x":202,"width":357,"text":"图集","height":58,"fontSize":50,"font":"Microsoft YaHei","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StartGameUI.uiView);

        }

    }
}

module ui.test {
    export class TestPageUI extends View {
		public btn:Laya.Button;
		public clip:Laya.Clip;
		public combobox:Laya.ComboBox;
		public tab:Laya.Tab;
		public list:Laya.List;
		public btn2:Laya.Button;
		public check:Laya.CheckBox;
		public radio:Laya.RadioGroup;
		public box:Laya.Box;

        public static  uiView:any ={"type":"View","child":[{"props":{"x":0,"y":0,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","width":600,"height":400},"type":"Image"},{"props":{"x":41,"y":56,"skin":"comp/button.png","label":"点我赋值","width":150,"height":37,"sizeGrid":"4,4,4,4","var":"btn"},"type":"Button"},{"props":{"x":401,"y":56,"skin":"comp/clip_num.png","clipX":10,"var":"clip"},"type":"Clip"},{"props":{"x":220,"y":143,"skin":"comp/combobox.png","labels":"select1,select2,selecte3","selectedIndex":1,"sizeGrid":"4,20,4,4","width":200,"height":23,"var":"combobox"},"type":"ComboBox"},{"props":{"x":220,"y":96,"skin":"comp/tab.png","labels":"tab1,tab2,tab3","var":"tab"},"type":"Tab"},{"props":{"x":259,"y":223,"skin":"comp/vscroll.png","height":150},"type":"VScrollBar"},{"props":{"x":224,"y":223,"skin":"comp/vslider.png","height":150},"type":"VSlider"},{"type":"List","child":[{"type":"Box","child":[{"props":{"skin":"comp/label.png","text":"this is a list","x":26,"y":5,"width":78,"height":20,"fontSize":14,"name":"label"},"type":"Label"},{"props":{"x":0,"y":2,"skin":"comp/clip_num.png","clipX":10,"name":"clip"},"type":"Clip"}],"props":{"name":"render","x":0,"y":0,"width":112,"height":30}}],"props":{"x":452,"y":68,"width":128,"height":299,"vScrollBarSkin":"comp/vscroll.png","repeatX":1,"var":"list"}},{"props":{"x":563,"y":4,"skin":"comp/btn_close.png","name":"close"},"type":"Button"},{"props":{"x":41,"y":112,"skin":"comp/button.png","label":"点我赋值","width":150,"height":66,"sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"var":"btn2"},"type":"Button"},{"props":{"x":220,"y":188,"skin":"comp/checkbox.png","label":"checkBox1","var":"check"},"type":"CheckBox"},{"props":{"x":220,"y":61,"skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3","var":"radio"},"type":"RadioGroup"},{"type":"Panel","child":[{"props":{"skin":"comp/image.png"},"type":"Image"}],"props":{"x":299,"y":223,"width":127,"height":150,"vScrollBarSkin":"comp/vscroll.png"}},{"props":{"x":326,"y":188,"skin":"comp/checkbox.png","label":"checkBox2","labelColors":"#ff0000"},"type":"CheckBox"},{"type":"Box","child":[{"props":{"y":70,"skin":"comp/progress.png","width":150,"height":14,"sizeGrid":"4,4,4,4","name":"progress"},"type":"ProgressBar"},{"props":{"y":103,"skin":"comp/label.png","text":"This is a Label","width":137,"height":26,"fontSize":20,"name":"label"},"type":"Label"},{"props":{"y":148,"skin":"comp/textinput.png","text":"textinput","width":150,"name":"input"},"type":"TextInput"},{"props":{"skin":"comp/hslider.png","width":150,"name":"slider"},"type":"HSlider"},{"props":{"y":34,"skin":"comp/hscroll.png","width":150,"name":"scroll"},"type":"HScrollBar"}],"props":{"x":41,"y":197,"var":"box"}}],"props":{"width":600,"height":400}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.TestPageUI.uiView);

        }

    }
}

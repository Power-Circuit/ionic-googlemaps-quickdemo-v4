(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{Ldpw:function(n,l,a){"use strict";a.r(l);var u=a("CcnG"),t=a("tBOM"),r=(a("OO+k"),function(n,l,a,u){return new(a||(a=Promise))(function(t,r){function e(n){try{i(u.next(n))}catch(n){r(n)}}function o(n){try{i(u.throw(n))}catch(n){r(n)}}function i(n){n.done?t(n.value):new a(function(l){l(n.value)}).then(e,o)}i((u=u.apply(n,l||[])).next())})}),e=function(){function n(n){this.platform=n}return n.prototype.ngOnInit=function(){return r(this,void 0,void 0,function(){return function(n,l){var a,u,t,r,e={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(a)throw new TypeError("Generator is already executing.");for(;e;)try{if(a=1,u&&(t=u[2&r[0]?"return":r[0]?"throw":"next"])&&!(t=t.call(u,r[1])).done)return t;switch(u=0,t&&(r=[0,t.value]),r[0]){case 0:case 1:t=r;break;case 4:return e.label++,{value:r[1],done:!1};case 5:e.label++,u=r[1],r=[0];continue;case 7:r=e.ops.pop(),e.trys.pop();continue;default:if(!(t=(t=e.trys).length>0&&t[t.length-1])&&(6===r[0]||2===r[0])){e=0;continue}if(3===r[0]&&(!t||r[1]>t[0]&&r[1]<t[3])){e.label=r[1];break}if(6===r[0]&&e.label<t[1]){e.label=t[1],t=r;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(r);break}t[2]&&e.ops.pop(),e.trys.pop();continue}r=l.call(n,e)}catch(n){r=[6,n],u=0}finally{a=t=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}}(this,function(n){switch(n.label){case 0:return[4,this.platform.ready()];case 1:return n.sent(),[4,this.loadMap()];case 2:return n.sent(),[2]}})})},n.prototype.loadMap=function(){var n=this,l=[{lat:40.712216,lng:-74.22655},{lat:40.773941,lng:-74.12544}];this.map=t.c.create("map_canvas",{camera:{target:l}}),this.marker1=this.map.addMarkerSync({position:l[0],draggable:!0}),this.marker2=this.map.addMarkerSync({position:l[1],draggable:!0}),this.marker1.on("position_changed").subscribe(this.redrawGroundOverlay.bind(this)),this.marker2.on("position_changed").subscribe(this.redrawGroundOverlay.bind(this)),this.marker1.trigger(t.e.MARKER_CLICK),this.groundOverlay=this.map.addGroundOverlaySync({url:"assets/imgs/newark_nj_1922.jpg",bounds:l,opacity:.5,clickable:!0}),this.groundOverlay.on(t.e.GROUND_OVERLAY_CLICK).subscribe(function(){n.groundOverlay.setImage("assets/imgs/newark_nj_1922_2.jpg")})},n.prototype.redrawGroundOverlay=function(){this.groundOverlay.setBounds([this.marker1.getPosition(),this.marker2.getPosition()])},n}(),o=function(){},i=a("pMnS"),s=a("ntG5"),c=a("YxxD"),p=u.Ja({encapsulation:0,styles:[["#map_canvas[_ngcontent-%COMP%]{width:100%;height:90%}"]],data:{}});function d(n){return u.Za(0,[(n()(),u.La(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),u.Ka(1,16384,null,0,s.x,[u.k],null,null),(n()(),u.La(2,0,null,null,8,"ion-toolbar",[],null,null,null,null,null)),u.Ka(3,16384,null,0,s.Xa,[u.k],null,null),(n()(),u.La(4,0,null,null,3,"ion-buttons",[["slot","start"]],null,null,null,null,null)),u.Ka(5,16384,null,0,s.f,[],null,null),(n()(),u.La(6,0,null,null,1,"ion-menu-button",[],null,null,null,null,null)),u.Ka(7,16384,null,0,s.O,[u.k],null,null),(n()(),u.La(8,0,null,null,2,"ion-title",[],null,null,null,null,null)),u.Ka(9,16384,null,0,s.Ya,[u.k],null,null),(n()(),u.Ya(-1,null,[" GroundOverlay "])),(n()(),u.La(11,0,null,null,6,"ion-content",[["padding",""]],null,null,null,null,null)),u.Ka(12,16384,null,0,s.q,[u.k],null,null),(n()(),u.La(13,0,null,null,1,"a",[["class","sourcecode"],["href","https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/ground-overlay/ground-overlay.page.ts"],["target","_blank"]],null,null,null,null,null)),(n()(),u.Ya(-1,null,["[source code]"])),(n()(),u.La(15,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Ya(-1,null,["Drag markers, then click the ground overlay!"])),(n()(),u.La(17,0,null,null,0,"div",[["id","map_canvas"]],null,null,null,null,null))],null,null)}var h=u.Ha("app-ground-overlay",e,function(n){return u.Za(0,[(n()(),u.La(0,0,null,null,1,"app-ground-overlay",[],null,null,null,d,p)),u.Ka(1,114688,null,0,e,[c.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),f=a("Ip0R"),g=a("gIcY"),b=a("95zI"),y=a("9opb"),v=a("apKv"),m=a("B4/3"),k=a("ZYCi");a.d(l,"GroundOverlayPageModuleNgFactory",function(){return w});var w=u.Ia(o,[],function(n){return u.Ra([u.Sa(512,u.j,u.X,[[8,[i.a,h]],[3,u.j],u.v]),u.Sa(4608,f.k,f.j,[u.s,[2,f.p]]),u.Sa(4608,g.d,g.d,[]),u.Sa(4608,b.a,b.a,[u.x,u.g]),u.Sa(4608,y.a,y.a,[b.a,u.j,u.p]),u.Sa(4608,v.a,v.a,[b.a,u.j,u.p]),u.Sa(1073742336,f.b,f.b,[]),u.Sa(1073742336,g.c,g.c,[]),u.Sa(1073742336,g.a,g.a,[]),u.Sa(1073742336,m.a,m.a,[]),u.Sa(1073742336,k.n,k.n,[[2,k.t],[2,k.l]]),u.Sa(1073742336,o,o,[]),u.Sa(1024,k.j,function(){return[[{path:"",component:e}]]},[])])})}}]);
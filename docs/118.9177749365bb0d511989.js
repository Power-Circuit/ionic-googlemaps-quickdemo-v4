(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{"5edn":function(n,l,a){"use strict";a.r(l);var t=a("CcnG"),u=a("i9w2"),e=(a("OO+k"),function(n,l,a,t){return new(a||(a=Promise))(function(u,e){function o(n){try{r(t.next(n))}catch(n){e(n)}}function i(n){try{r(t.throw(n))}catch(n){e(n)}}function r(n){n.done?u(n.value):new a(function(l){l(n.value)}).then(o,i)}r((t=t.apply(n,l||[])).next())})}),o=function(){function n(n,l){this.platform=n,this._ngZone=l}return n.prototype.ngOnInit=function(){return e(this,void 0,void 0,function(){return function(n,l){var a,t,u,e,o={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return e={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function i(e){return function(i){return function(e){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,t&&(u=t[2&e[0]?"return":e[0]?"throw":"next"])&&!(u=u.call(t,e[1])).done)return u;switch(t=0,u&&(e=[0,u.value]),e[0]){case 0:case 1:u=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,t=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(!(u=(u=o.trys).length>0&&u[u.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!u||e[1]>u[0]&&e[1]<u[3])){o.label=e[1];break}if(6===e[0]&&o.label<u[1]){o.label=u[1],u=e;break}if(u&&o.label<u[2]){o.label=u[2],o.ops.push(e);break}u[2]&&o.ops.pop(),o.trys.pop();continue}e=l.call(n,o)}catch(n){e=[6,n],t=0}finally{a=u=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,i])}}}(this,function(n){switch(n.label){case 0:return[4,this.platform.ready()];case 1:return n.sent(),[4,this.loadMap()];case 2:return n.sent(),[2]}})})},n.prototype.loadMap=function(){this.map=u.d.create("map_canvas",{camera:{target:{lat:35.685208,lng:-121.168225},zoom:5},gestures:{scroll:!0,tilt:!0,rotate:!0,zoom:!0}});var n=new u.g,l=document.createElement("div");l.innerHTML='\n<div class="flip-container" id="flip-container">\n  <div class="flipper">\n    <div class="front">\n    <h3>Click this photo!</h3>\n    <img src="assets/imgs/hearst_castle.jpg">\n  </div>\n  <div class="back">\n    \x3c!-- back content --\x3e\n    Hearst Castle above the clouds on top of The Enchanted Hill. William Randolph Hearst started to build a fabulous estate on his ranchland overlooking the village of San Simeon in 1919.\n    </div>\n  </div>\n</div>',l.addEventListener("click",function(n){var l=document.getElementById("flip-container");l.className.indexOf(" hover")>-1?l.className=l.className.replace(" hover",""):l.className+=" hover"}),n.setContent(l,{width:"170px"});var a=this.map.addMarkerSync({position:{lat:35.685208,lng:-121.168225},draggable:!0,disableAutoPan:!0});a.on(u.f.MARKER_CLICK).subscribe(function(){n.open(a)}),a.trigger(u.f.MARKER_CLICK)},n}(),i=function(){},r=a("pMnS"),c=a("ntG5"),s=a("YxxD"),p=t.Ja({encapsulation:0,styles:[["#map_canvas[_ngcontent-%COMP%]{width:100%;height:90%}"]],data:{}});function d(n){return t.Za(0,[(n()(),t.La(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),t.Ka(1,16384,null,0,c.x,[t.k],null,null),(n()(),t.La(2,0,null,null,8,"ion-toolbar",[],null,null,null,null,null)),t.Ka(3,16384,null,0,c.Xa,[t.k],null,null),(n()(),t.La(4,0,null,null,3,"ion-buttons",[["slot","start"]],null,null,null,null,null)),t.Ka(5,16384,null,0,c.f,[],null,null),(n()(),t.La(6,0,null,null,1,"ion-menu-button",[],null,null,null,null,null)),t.Ka(7,16384,null,0,c.O,[t.k],null,null),(n()(),t.La(8,0,null,null,2,"ion-title",[],null,null,null,null,null)),t.Ka(9,16384,null,0,c.Ya,[t.k],null,null),(n()(),t.Ya(-1,null,[" HtmlInfoWindow "])),(n()(),t.La(11,0,null,null,6,"ion-content",[["padding",""]],null,null,null,null,null)),t.Ka(12,16384,null,0,c.q,[t.k],null,null),(n()(),t.La(13,0,null,null,1,"a",[["class","sourcecode"],["href","https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/html-info-window/html-info-window.page.ts"],["target","_blank"]],null,null,null,null,null)),(n()(),t.Ya(-1,null,["[source code]"])),(n()(),t.La(15,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Ya(-1,null,["Click on the photo!"])),(n()(),t.La(17,0,null,null,0,"div",[["id","map_canvas"]],null,null,null,null,null))],null,null)}var f=t.Ha("app-html-info-window",o,function(n){return t.Za(0,[(n()(),t.La(0,0,null,null,1,"app-html-info-window",[],null,null,null,d,p)),t.Ka(1,114688,null,0,o,[s.a,t.x],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),h=a("Ip0R"),m=a("gIcY"),v=a("95zI"),b=a("9opb"),g=a("apKv"),w=a("B4/3"),k=a("ZYCi");a.d(l,"HtmlInfoWindowPageModuleNgFactory",function(){return y});var y=t.Ia(i,[],function(n){return t.Ra([t.Sa(512,t.j,t.X,[[8,[r.a,f]],[3,t.j],t.v]),t.Sa(4608,h.k,h.j,[t.s,[2,h.p]]),t.Sa(4608,m.d,m.d,[]),t.Sa(4608,v.a,v.a,[t.x,t.g]),t.Sa(4608,b.a,b.a,[v.a,t.j,t.p]),t.Sa(4608,g.a,g.a,[v.a,t.j,t.p]),t.Sa(1073742336,h.b,h.b,[]),t.Sa(1073742336,m.c,m.c,[]),t.Sa(1073742336,m.a,m.a,[]),t.Sa(1073742336,w.a,w.a,[]),t.Sa(1073742336,k.n,k.n,[[2,k.t],[2,k.l]]),t.Sa(1073742336,i,i,[]),t.Sa(1024,k.j,function(){return[[{path:"",component:o}]]},[])])})}}]);
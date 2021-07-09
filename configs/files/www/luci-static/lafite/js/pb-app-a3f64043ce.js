(function(){"use strict";angular.module("pbApp",["pbFunctions","pbData","pbBrowser","ngRoute","pbDirectives","pbAnimate","ngMessages","pascalprecht.translate"],angular.noop),angular.module("pbDirectives",["pbNav","pbSwitch","pbPwd","pbInput"],angular.noop)}).call(this),function(){"use strict";angular.module("pbApp").config(["$routeProvider",function(t){t.when("/",{templateUrl:"/luci-static/lafite/htm/noop.htm"}).when("/login",{templateUrl:"/luci-static/lafite/htm/sysauth.htm",controller:"LoginController"}).when("/home",{templateUrl:"/luci-static/lafite/htm/noop.htm",controller:"HomeController"}).when("/menu",{templateUrl:"/luci-static/lafite/htm/menu.htm",controller:"MenuController"}).when("/status",{redirectTo:"/status/summary"}).when("/status/summary",{templateUrl:"/luci-static/lafite/htm/status_summary.htm",controller:"StatusSummaryController"}).when("/status/system",{templateUrl:"/luci-static/lafite/htm/status_system.htm",controller:"StatusSystemController"}).when("/status/storage",{templateUrl:"/luci-static/lafite/htm/status_storage.htm",controller:"StatusStorageController"}).when("/status/bandwidth",{templateUrl:"/luci-static/lafite/htm/status_bandwidth.htm",controller:"StatusBandwidthController"}).when("/status/network",{templateUrl:"/luci-static/lafite/htm/status_network.htm",controller:"StatusNetworkController"}).when("/network",{redirectTo:"/network/wan"}).when("/network/lan",{templateUrl:"/luci-static/lafite/htm/lan.htm",controller:"LanController"}).when("/network/wan",{templateUrl:"/luci-static/lafite/htm/wan.htm",controller:"WanController"}).when("/network/hwnat",{templateUrl:"/luci-static/lafite/htm/hwnat.htm",controller:"HwnatController"}).when("/wifi",{redirectTo:"/wifi/base"}).when("/wifi/base",{templateUrl:"/luci-static/lafite/htm/wifi.htm",controller:"WifiController"}).when("/wifi/repeater",{templateUrl:"/luci-static/lafite/htm/wifi_repeater.htm",controller:"WifiRepeaterController"}).when("/setting",{redirectTo:"/setting/base"}).when("/setting/base",{templateUrl:"/luci-static/lafite/htm/setting_base.htm",controller:"BaseController"}).when("/setting/security",{templateUrl:"/luci-static/lafite/htm/setting_security.htm",controller:"SecurityController"}).when("/setting/upgrade",{templateUrl:"/luci-static/lafite/htm/setting_upgrade.htm",controller:"UpgradeController"}).when("/setting/sys",{templateUrl:"/luci-static/lafite/htm/setting_sys.htm",controller:"SysController"}).when("/setting/log",{templateUrl:"/luci-static/lafite/htm/setting_log.htm",controller:"LogController"}).when("/guide",{templateUrl:"/luci-static/lafite/htm/guide.htm",controller:"GuideController"}).when("/storage",{redirectTo:"/storage/samba"}).when("/storage/samba",{templateUrl:"/luci-static/lafite/htm/samba.htm",controller:"SambaController"}).when("/storage/ftp",{templateUrl:"/luci-static/lafite/htm/ftp.htm",controller:"FtpdController"}).when("/adv",{templateUrl:"/luci-static/lafite/htm/noop.htm",controller:"AdvController"}).when("/adv/adv_qos",{templateUrl:"/luci-static/lafite/htm/adv_qos.htm",controller:"QosController"}).when("/adv/adv_upnp",{templateUrl:"/luci-static/lafite/htm/adv_upnp.htm",controller:"UpnpController"}).when("/adv/adv_static",{templateUrl:"/luci-static/lafite/htm/adv_static.htm",controller:"StaticController"}).when("/adv/adv_ddns",{templateUrl:"/luci-static/lafite/htm/adv_ddns.htm",controller:"DdnsController"}).when("/adv/adv_dmz",{templateUrl:"/luci-static/lafite/htm/adv_dmz.htm",controller:"DmzController"}).when("/about",{redirectTo:"/about/firmware"}).when("/about/firmware",{templateUrl:"/luci-static/lafite/htm/about_firmware.htm",controller:"AboutController"}).when("/about/team",{templateUrl:"/luci-static/lafite/htm/about_team.htm",controller:"AboutController"}).when("/plugin",{templateUrl:"/luci-static/lafite/htm/plugins.htm",controller:"PluginController"}).when("/plugin/:plugin",{templateUrl:function(t){return"/luci-static/lafite/htm/plugins/"+t.plugin+".htm"},resolve:{load:["$q","$route","$rootScope",function(t,e,a){var n,i;return n=t.defer(),i=["/luci-static/lafite/js/plugins/"+e.current.params.plugin+".js"],$script(i,function(){a.$apply(function(){n.resolve()})}),n.promise}]}}).when("/exit",{templateUrl:"/luci-static/lafite/htm/noop.htm",controller:"ExitController"}).when("/error404",{templateUrl:"/luci-static/lafite/htm/error404.htm"}).otherwise({redirectTo:"/login"})}])}.call(this),function(){"use strict";angular.module("pbAnimate",["ngAnimate"])}.call(this),function(){"use strict";angular.module("pbApp").run(["$rootScope","$location","$translate","BrowserLanguage","Data","Fn","Toast","navBar",function(t,e,a,n,i,r,o,l){var s;(s=function(u){return null==u&&(u=0),r.postJSON("/cgi-bin/luci/api/sys/info",function(o){var s,u,c,p,f;if(!(angular.isUndefined(o)||angular.isUndefined(o.content)||Object.keys(o.content).length<1)){o=o.content[0];for(s in o)/date/i.test(s)||(null==i.sys&&(i.sys={}),i.sys[s]=o[s]);return f=null!=(u=o.lang)?u:n.replace("-","_"),r.langlist.indexOf(f)===-1?i.sys.lang="en_us":i.sys.lang=f,t.lang=i.sys.lang,a.use(i.sys.lang),i.sys.guide=null!=(c=o.isGuide)?c:"0",i.sys.expert=null!=(p=o.isExpert)?p:"0",o.hasQos||l.hideSubNavItem("adv","adv_qos"),o.hasUpnp||l.hideSubNavItem("adv","adv_upnp"),o.hasStatic||l.hideSubNavItem("adv","adv_static"),o.hasDDNS||l.hideSubNavItem("adv","adv_ddns"),o.hasDMZ||l.hideSubNavItem("adv","adv_dmz"),o.hasQos||o.hasUpnp||o.hasStatic||o.hasDDNS||o.hasDMZ||l.hideMainNavItem("adv"),o.hasHwacc||l.hideSubNavItem("network","hwnat"),o.hasBandwidth||l.hideSubNavItem("status","bandwidth"),o.hasSamba||l.hideSubNavItem("storage","samba"),o.hasFtpd||l.hideSubNavItem("storage","ftp"),o.hasSamba||o.hasFtp||l.hideMainNavItem("storage"),r.partialLoadLang("main"),"1"===i.sys.guide?(f=(navigator.language||navigator.userLanguage).toLowerCase().replace("-","_"),r.langlist.indexOf(f)===-1?i.sys.lang="en_us":i.sys.lang=f,e.path("/guide")):r.getLoginStatus()?angular.isString(i.preSite)&&i.preSite.length>0?e.path(i.preSite):e.path("/home"):e.path("/login")}},function(){return u<5?s(u+1):o.error("Network_Timeout!")})})()}])}.call(this),function(){"use strict";angular.module("pbInput",[],angular.noop).directive("ipwd",function(){return{restrict:"AC",require:"ngModel",link:function(t,e,a,n){n.$parsers.push(function(t){var e;return null!=t?(e=t.replace(/[^a-zA-Z\d-:;"'.,?!\/\(\)\$\&\@\[\]{}\#\%\^*+=_\|\~<>\€\£\¥\•]/g,""),n.$setViewValue(e),n.$render(),e):t})}}}).directive("ip",function(){return{restrict:"AC",require:"ngModel",link:function(t,e,a,n){n.$parsers.push(function(t){var e,a;return null!=t?(a=t.replace(/[^\d.]/g,""),a.length>15&&(a=a.substring(0,15)),e=/^(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}$/i.test(a),n.$setValidity("valid",e),n.$setViewValue(a),n.$render(),a):t})}}}).directive("mac",function(){return{restrict:"AC",require:"ngModel",link:function(t,e,a,n){n.$parsers.push(function(t){var e,a;return null!=t?(a=t.replace(/[^abcdefABCDEF\d\-\:]/g,""),a.length>17&&(a=a.substring(0,17)),e=/^((([0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2})|(([0-9a-fA-F]{2}-){5}[0-9a-fA-F]{2}))$/.test(a),n.$setValidity("valid",e),n.$setViewValue(a),n.$render(),a):t})}}})}.call(this),function(){"use strict";angular.module("pbApp").directive("logo",["$rootScope","$location",function(t,e){return{restrict:"AE",replace:!0,link:function(a){a.jumpHome=function(){/menu/.test(e.path())||e.path("home")},a.toggle=function(){/menu/.test(e.path())||(t.showMe=!t.showMe)}},templateUrl:function(t,e){return/^big$/i.test(e.logo)?"/luci-static/lafite/htm/comp/logo_big.htm":/^text$/.test(e.logo)?"/luci-static/lafite/htm/comp/logo_text.htm":"/luci-static/lafite/htm/comp/logo.htm"}}}])}.call(this),function(){"use strict";angular.module("pbPwd",[],angular.noop).directive("password",function(){return{restrict:"C",replace:!0,scope:{},template:'<input type="{{type}}" ng-focus="keyUncode()" ng-blur="keyEncode()">',link:function(t){t.keyUncode=function(){t.type="text"},t.keyEncode=function(){t.type="password"},t.keyEncode()}}})}.call(this),function(){"use strict";angular.module("pbSwitch",["pbFunctions"]).directive("switch",["$http","Fn",function(t,e){return{restrict:"AE",replace:!0,scope:{switchFlag:"="},template:"<div ng-class=\"{'0':'opened', '1':'closed', '2':'opening', '3':'closing'}[status]\"\n\tclass=\"switch\" ng-click=\"toggle()\">\n\t<div class=\"block\"></div>\n</div>",link:function(t,a,n){var i,r,o,l,s;o="0",i="1",l="2",r="3",s=function(){return setTimeout(function(){/^enabled/i.test(n.model)&&null==n.re&&(n.re=!0),t.$apply(function(){t.status=n[n.model],n.re&&(t.status=function(){switch(t.status){case o:return i;case i:return o}}())}),angular.isUndefined(t.status)?s():s=null},100)},s(),t.toggle=function(){var a,s,u,c,p,f,h,g;if(!/[^01]/.test(t.status))if(t.status=function(){switch(t.status){case o:return r;case i:return l}}(),s=function(){t.status=function(){switch(t.status){case l:return o;case r:return i}}(),t.switchFlag=function(){switch(t.switchFlag){case o:return i;case i:return o}}()},a=function(){t.status=function(){switch(t.status){case l:return i;case r:return o}}()},null!=n.url){for(u=function(){var t,e;t=n.$attr,e=[];for(f in t)g=t[f],/^data-./i.test(g)&&e.push({key:g.replace(/^data-/i,""),value:n[f]});return e}(),c=0,h=u.length;c<h;c++)p=u[c],p.key===n.$attr[n.model].replace(/^data-/,"")&&(p.value=t.switchFlag===o?i:o);e.postJSON(n.url+"?"+e.getSearch(u),function(t){return 0!==t.code?a():s(t)},function(){return a()})}else setTimeout(function(){return t.$apply(function(){return s()})},10)}}}}])}.call(this),function(){"use strict";angular.module("pbApp").service("Toast",["$rootScope",function(t){var e,a,n,i;t.arrToast||(t.arrToast=[]),this.open=function(t,r,o){if("string"!=typeof t)return console.warn("Text is Empty");switch(r){case"suc":case"success":n(t,o);break;case"info":a(t,o);break;case"warn":case"warning":i(t,o);break;case"err":case"error":e(t,o)}},n=this.success=function(e,a){var n;return null==a&&(a=2),"string"!=typeof e?console.warn("Text is Empty"):(n={text:e,type:"success",second:a},t.arrToast.push(n))},a=this.info=function(e,a){var n;return null==a&&(a=2),"string"!=typeof e?console.warn("Text is Empty"):(n={text:e,type:"info",second:a},t.arrToast.push(n))},i=this.warn=function(e,a){var n;return null==a&&(a=2),"string"!=typeof e?console.warn("Text is Empty"):(n={text:e,type:"warning",second:a},t.arrToast.push(n))},e=this.error=function(e,a){var n;return null==a&&(a=2),"string"!=typeof e?console.warn("Text is Empty"):(n={text:e,type:"error",second:a},t.arrToast.push(n))}}]).controller("ToastController",["$scope","$rootScope","$timeout",function(t,e,a){return null==e.arrToast&&(e.arrToast=[]),e.$watch("arrToast.length",function(t,n){var i;if(!(n>t)&&0!==t)return i=e.arrToast[t-1].second,function(t){return a(function(){return e.arrToast.shift()},1e3*t)}(i)})}]).directive("toast",function(){return{restrict:"AE",replace:!0,templateUrl:"/luci-static/lafite/htm/comp/toast_tpl.htm",controller:"ToastController"}})}.call(this),function(){"use strict";angular.module("pbApp").config(["$translateProvider","$translatePartialLoaderProvider",function(t,e){t.useLoader("$translatePartialLoader",{urlTemplate:"/luci-static/lafite/i18n/{lang}/{part}.json"}),t.preferredLanguage("en_us"),t.useSanitizeValueStrategy("escaped"),e.addPart("main")}])}.call(this),function(){"use strict";var t=angular.module("pbApp");t.controller("DialogController",["$scope","$rootScope","$http","$location","Fn","Data","Toast","Dialog",function(t,e,a,n,i,r,o,l){e.Dialog={isShowing:!0,content:"Loading",options:{type:"text"},dataSet:[]},t.cancel=function(){angular.isDefined(e.Dialog.options.cancel)&&e.Dialog.options.cancel&&l.close()},t.listItemClick=function(t){e.Dialog.options.callbackFn&&"function"==typeof e.Dialog.options.callbackFn&&e.Dialog.options.callbackFn(t),l.close()},t.showListDialog=function(t){if(!l.isShowing())return console.warn("Dialog must be showing.");var e=function(){var e=[],a=l.current().options.options[t].items;return a.forEach(function(t){e.push({value:t})}),e}(),a={dialogType:"list",cancel:!0,callbackFn:function(e){l.last().options.options[t]["default"]=e.value}};l.open(e,a)};var s=!1;t.formSubmit=function(){if(!s){s=!0;var t,a,n,r,o,u=e.Dialog.content,c=e.Dialog.options;for(r=0,o=u.names.length;r<o;r++)if(t=u.names[r],a=t.key,n=c.options[a],(!n.display||!/^none$/i.test(n.display))&&(n["default"]||null===n.optional||!n.optional)){if(!n["default"]||0===n["default"].length)return void(s=!1);if(n.mac&&!i.checkMac(n["default"]))return void(s=!1);if(n.ip&&!i.checkIp(n["default"]))return void(s=!1);if(n.speed&&!i.checkSpeed(n["default"]))return void(s=!1);if(n.checkFn&&"function"==typeof n.checkFn&&!n.checkFn(n["default"]))return void(s=!1);if(t.list&&t.items&&!t.item.indexOf(n["default"]))return void(s=!1)}var p=angular.copy(u.names);for(r=0,o=p.length;r<o;r++)t=p[r],a=t.key,n=c.options[a],t.value=n["default"],n.optional&&""===t.value&&p.splice(r,1);i.postJSON(c.url+"?"+i.getSearch(p),function(t){s=!1,l.close(),angular.isFunction(c.submitFn)&&c.submitFn(t)},function(){s=!1,l.close()})}}}])}(),function(){"use strict";var t=angular.module("pbApp");t.service("Dialog",["$rootScope","$location","Data","Fn","Toast",function(t,e,a,n,i){var r=this.open=function(t,e){if(!e)return o();if(!e.dialogType)return o();switch(e.dialogType){case"text":return s(t,e);case"list":return u(t,e);case"form":return c(t,e);default:return o()}return o()},o=this.close=function(){if(t.Dialog.isShowing=!1,0===t.Dialog.dataSet.length)return t.Dialog.content=null,void(t.Dialog.options=null);if(t.Dialog.dataSet.length>0){var e=t.Dialog.dataSet.pop();r(e.content,e.options)}};this.closeAll=function(){t.Dialog.isShowing=!1;for(var e=t.Dialog.dataSet.length;e>0;e--)t.Dialog.dataSet.pop();t.Dialog.content=null,t.Dialog.options=null};var l=function(){p()&&t.Dialog.dataSet.push({content:angular.copy(t.Dialog.content),options:angular.copy(t.Dialog.options)})},s=this.text=function(e,a){return e?"string"!=typeof e?(console.warn("Parameter 'content' type isnot 'string'"),o()):(a||(a={}),a.dialogType&&"text"===a.dialogType||(a.dialogType="text"),l(),t.Dialog.content=e,t.Dialog.options=a,void(t.Dialog.isShowing=!0)):(console.warn("Miss Parameter 'content'"),o())},u=this.list=function(e,a){return e&&a?0===e.length?o():(a.dialogType&&"list"===a.dialogType||(a.dialogType="list"),l(),t.Dialog.content=e,t.Dialog.options=a,void(t.Dialog.isShowing=!0)):o()},c=this.form=function(e,a){if(!e||!a)return o();if(!e.names||0===e.names.length)return o();a.dialogType&&"form"===a.dialogType||(a.dialogType="form"),l();for(var n in e.names){var i=e.names[n];i.key||(i.value=""),i.value||(i.value="")}t.Dialog.content=e,t.Dialog.options=a,t.Dialog.isShowing=!0,t.Dialog.options.btnWidth=function(){var t=0;if(e.positivebtn&&t++,e.neutralbtn&&t++,e.negativebtn&&t++,0!==t)return 12/t}()};this.loading=function(){return s("Loading",{dialogType:"text"})},this.applying=function(){return s("applying",{dialogType:"text"})},this.reLogin=function(t){var e={title:"ReLogin",names:[{key:"username",value:"auth_uname"},{key:"password",value:"auth_password"}],negativebtn:"Cancel",positivebtn:"login"},n={dialogType:"form",cancel:!0,url:"/cgi-bin/luci/api/sys/login",options:{username:{"default":"root",readonly:!0,display:"none"},password:{"default":"",readonly:!1}},submitFn:function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(n){return void console.warn(n)}if(0!==e.code)i.warn("Username or Password is incorrect.");else if(a.user=e.content[0],window.localStorage.setItem("pb.startTime",(new Date).getTime()),window.localStorage.setItem("pb.user",JSON.stringify(a.user)),"function"==typeof t)return t()}};r(e,n)};var p=this.isShowing=function(){return t.Dialog.isShowing};this.count=function(){return t.Dialog.dataSet.length+1},this.first=function(){var e=t.Dialog.dataSet.length;return 0===e?null:t.Dialog.dataSet[0]},this.last=function(){var e=t.Dialog.dataSet.length;return 0===e?null:t.Dialog.dataSet[e-1]},this.current=function(){return p()?{content:t.Dialog.content,options:t.Dialog.options}:null}}])}(),function(){"use strict";angular.module("pbApp").directive("dialog",function(){return{restrict:"AE",replace:!0,templateUrl:function(t,e){switch(e.type){case"text":return"/luci-static/lafite/htm/comp/dialog_text_tpl.htm";case"list":return"/luci-static/lafite/htm/comp/dialog_list_tpl.htm";case"form":return"/luci-static/lafite/htm/comp/dialog_form_tpl.htm"}}}})}.call(this),function(){"use strict";angular.module("pbNav",["pbFunctions","pbData"],angular.noop).value("navArr",[{href:"/status",img:"/luci-static/lafite/img/ic_status_default.png",imgHover:"/luci-static/lafite/img/ic_status_hover.png",key:"status",title:"menu_status"},{href:"/network",img:"/luci-static/lafite/img/ic_network_default.png",imgHover:"/luci-static/lafite/img/ic_network_hover.png",key:"network",title:"menu_network"},{href:"/wifi",img:"/luci-static/lafite/img/ic_wifi_default.png",imgHover:"/luci-static/lafite/img/ic_wifi_hover.png",key:"wifi",title:"menu_wifi"},{href:"/storage",img:"/luci-static/lafite/img/ic_storage_default.png",imgHover:"/luci-static/lafite/img/ic_storage_hover.png",key:"storage",title:"menu_storage"},{href:"/adv",img:"/luci-static/lafite/img/ic_advanced_default.png",imgHover:"/luci-static/lafite/img/ic_advanced_hover.png",key:"adv",title:"menu_adv"},{href:"/plugin",img:"/luci-static/lafite/img/ic_plugin_default.png",imgHover:"/luci-static/lafite/img/ic_plugin_hover.png",key:"plugin",title:"menu_plugin"},{href:"/setting",key:"setting",title:"menu_setting"},{href:"/about",key:"about",title:"menu_about"}]).value("subNavData",{about:[{href:"/about/firmware",key:"firmware",title:"about_firmware"},{href:"/about/team",key:"team",title:"about_team"}],adv:[{href:"/adv/adv_qos",key:"adv_qos",title:"menu_adv_qos"},{href:"/adv/adv_upnp",key:"adv_upnp",title:"menu_adv_upnp"},{href:"/adv/adv_static",key:"adv_static",title:"menu_adv_static"},{href:"/adv/adv_ddns",key:"adv_ddns",title:"menu_adv_ddns"},{href:"/adv/adv_dmz",key:"adv_dmz",title:"menu_adv_dmz"},{href:"/adv/adv_l2tp",key:"adv_l2tp",title:"menu_adv_l2tp",display:"none"}],network:[{href:"/network/wan",key:"wan",title:"menu_wan"},{href:"/network/lan",key:"lan",title:"menu_lan"},{href:"/network/hwnat",key:"hwnat",title:"menu_hwnat"}],status:[{href:"/status/summary",key:"summary",title:"menu_status_summary"},{href:"/status/system",key:"system",title:"menu_status_system"},{href:"/status/storage",key:"storage",title:"menu_status_storage",display:"none"},{href:"/status/network",key:"network",title:"menu_status_network"},{href:"/status/bandwidth",key:"bandwidth",title:"menu_status_bandwidth"}],setting:[{href:"/setting/base",key:"base",title:"menu_setting_base"},{href:"/setting/security",key:"security",title:"menu_setting_security"},{href:"/setting/upgrade",key:"upgrade",title:"menu_setting_upgrade"},{href:"/setting/sys",key:"sys",title:"menu_setting_sys"},{href:"/setting/log",key:"log",title:"menu_setting_log"}],storage:[{href:"/storage/samba",key:"samba",title:"samba"},{href:"/storage/ftp",key:"ftp",title:"ftp"}],wifi:[{href:"/wifi/base",key:"base",title:"menu_wifi_base"},{href:"/wifi/repeater",key:"repeater",title:"menu_wifi_repeater"}]})}.call(this),function(){"use strict";angular.module("pbNav").directive("nav",["$rootScope","$location","navArr",function(t,e,a){return{restrict:"AE",replace:!0,link:function(n){n.arr=a,t.$watch("showMe",function(t){n.showMe=t}),t.$on("$viewContentLoaded",function(){var a,i,r;a=e.path(),i=a.split("/"),i.shift(),/menu/.test(i[0])||(n.site=i.shift(),r=i.shift(),t.$broadcast("navLoaded",{navKey:n.site,subNavKey:r}),angular.isUndefined(r)&&(t.showMe=!1))})},templateUrl:"/luci-static/lafite/htm/comp/nav.htm"}}]).directive("subnav",["$rootScope","$location","subNavData",function(t,e,a){return{restrict:"AE",replace:!0,link:function(e){t.$watch("showMe",function(t){e.showMe=t}),t.$on("navLoaded",function(t,n){var i,r;if(e.subsite=n.subNavKey,angular.isDefined(a))for(i in a)if(r=a[i],i===n.navKey)return void(r?e.subarr=r:e.subarr=null);e.subarr=null,e.subsite=null}),e.hideNav=function(){t.showMe=!1}},templateUrl:"/luci-static/lafite/htm/comp/subnav.htm"}}])}.call(this),function(){"use strict";angular.module("pbNav").service("navBar",["$rootScope","$location","Data","Fn","navArr","subNavData",function(t,e,a,n,i,r){this.newNavArr=function(t){angular.isUndefined(t)||(angular.isArray(t)?i.concat(t):i.push(t))},this.newSubItem=function(t,e){angular.isUndefined(t)||angular.isUndefined(e)||(angular.isArray(r[t])||(r[t]=[]),angular.isArray(e)?r[t]=e:r[t].push(e))},this.hideMainNavItem=function(t){var e,a;for(e in i)a=i[e],a.key===t&&(a.display="none")},this.hideSubNavItem=function(t,e){var a,n,i,o,l;for(i in r)if(l=r[i],i===t)for(a=0,o=l.length;a<o;a++)n=l[a],n.key===e&&(n.display="none")}}])}.call(this);
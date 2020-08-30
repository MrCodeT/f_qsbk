
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/paper/paper","pages/my/my","pages/search/search","pages/addContent/addContent","pages/topicMore/topicMore","pages/topicDetail/topicDetail","pages/chat/chat","pages/detail/detail","pages/mySet/mySet","pages/mySet/setPassword","pages/mySet/setEmail","pages/mySet/setMyInfo","pages/mySet/setFeedBack","pages/mySet/setAbout","pages/login/login"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿糗事百科","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#B6B6B6","selectedColor":"#FFDF34","backgroundColor":"#FFFFFF","borderStyle":"black","list":[{"text":"糗事","pagePath":"pages/index/index","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/index_active.png"},{"text":"动态","pagePath":"pages/news/news","iconPath":"static/tabbar/news_active.png","selectedIconPath":"static/tabbar/news.png"},{"text":"小纸条","pagePath":"pages/paper/paper","iconPath":"static/tabbar/paper_active.png","selectedIconPath":"static/tabbar/paper.png"},{"text":"我的","pagePath":"pages/my/my","iconPath":"static/tabbar/my_active.png","selectedIconPath":"static/tabbar/my.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"f_qsbk","compilerVersion":"2.8.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"scrollIndicator":"none","titleNView":{"searchInput":{"align":"center","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#CCCCCC","backgroundColor":"#F7F7F7","disabled":true},"buttons":[{"float":"left","fontSize":"22px","color":"#FF971A","colorPressed":"#ccc","fontSrc":"/static/icon/icon.ttf","text":""},{"float":"right","fontSize":"22px","color":"#000000","colorPressed":"#ccc","fontSrc":"/static/icon/icon.ttf","text":""}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"scrollIndicator":"none","titleNView":false}},{"path":"/pages/paper/paper","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"小纸条","titleNView":{"buttons":[{"float":"left","fontSrc":"/static/icon/icon.ttf","text":""},{"float":"right","fontSrc":"/static/icon/icon.ttf","text":""}]}}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我","scrollIndicator":"none","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/search/search","meta":{},"window":{"enablePullDownRefresh":true,"scrollIndicator":"none","titleNView":{"autoBackButton":false,"searchInput":{"autoFocus":true,"align":"left","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#CCCCCC","backgroundColor":"#F7F7F7"},"buttons":[{"float":"right","fontSize":"16px","color":"#000000","colorPressed":"#ccc","text":"取消"}]}}},{"path":"/pages/addContent/addContent","meta":{},"window":{"titleNView":false}},{"path":"/pages/topicMore/topicMore","meta":{},"window":{"navigationBarTitleText":"话题分类","scrollIndicator":"none"}},{"path":"/pages/topicDetail/topicDetail","meta":{},"window":{"scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/chat/chat","meta":{},"window":{"titleNView":{"buttons":[{"fontSrc":"/static/icon/icon.ttf","text":""}]}}},{"path":"/pages/detail/detail","meta":{},"window":{"titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/mySet/mySet","meta":{},"window":{"navigationBarTitleText":"设置","scrollIndicator":"none"}},{"path":"/pages/mySet/setPassword","meta":{},"window":{"navigationBarTitleText":"修改密码","scrollIndicator":"none"}},{"path":"/pages/mySet/setEmail","meta":{},"window":{"navigationBarTitleText":"绑定邮箱","scrollIndicator":"none"}},{"path":"/pages/mySet/setMyInfo","meta":{},"window":{"navigationBarTitleText":"编辑资料","scrollIndicator":"none"}},{"path":"/pages/mySet/setFeedBack","meta":{},"window":{"navigationBarTitleText":"帮助","scrollIndicator":"none"}},{"path":"/pages/mySet/setAbout","meta":{},"window":{"navigationBarTitleText":"关于仿糗百","scrollIndicator":"none"}},{"path":"/pages/login/login","meta":{},"window":{"titleNView":false,"scrollIndicator":"none"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});

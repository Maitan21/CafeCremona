!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),C.push((s?"":"no-")+a.join("-"))}}function o(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return function(){return e.apply(n,arguments)}}function l(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?a(s,t||n):s);return!1}function f(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function p(){var e=n.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function m(e,t,r,s){var o,a,l,f,u="modernizr",c=i("div"),d=p();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=s?s[r]:u+(r+1),c.appendChild(l);return o=i("style"),o.type="text/css",o.id="s"+u,(d.fake?d:c).appendChild(o),d.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),c.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(d)),a=t(c,e),d.fake?(d.parentNode.removeChild(d),_.style.overflow=f,_.offsetHeight):c.parentNode.removeChild(c),!!a}function y(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+c(n[s])+":"+r+")");return o=o.join(" or "),m("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function g(e,n,s,o){function a(){c&&(delete N.style,delete N.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var l=y(e,s);if(!r(l,"undefined"))return l}for(var c,d,p,m,g,v=["modernizr","tspan","samp"];!N.style&&v.length;)c=!0,N.modElem=i(v.shift()),N.style=N.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],g=N.style[m],f(m,"-")&&(m=u(m)),N.style[m]!==t){if(o||r(s,"undefined"))return a(),"pfx"==n?m:!0;try{N.style[m]=s}catch(h){}if(N.style[m]!=g)return a(),"pfx"==n?m:!0}return a(),!1}function v(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?g(a,n,s,o):(a=(e+" "+z.join(i+" ")+i).split(" "),l(a,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],w=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var _=n.documentElement,x="svg"===_.nodeName.toLowerCase(),b=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=b,Modernizr.addTest("csspositionsticky",function(){var e="position:",n="sticky",t=i("a"),r=t.style;return r.cssText=e+b.join(n+";"+e).slice(0,-e.length),-1!==r.position.indexOf(n)});var P="Moz O ms Webkit",T=S._config.usePrefixes?P.split(" "):[];S._cssomPrefixes=T;var z=S._config.usePrefixes?P.toLowerCase().split(" "):[];S._domPrefixes=z;var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var N={style:E.elem.style};Modernizr._q.unshift(function(){delete N.style}),S.testAllProps=v,S.testAllProps=h,Modernizr.addTest("cssanimations",h("animationName","a",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),Modernizr.addTest("csstransitions",h("transition","all",!0)),s(),o(C),delete S.addTest,delete S.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);

$(function(){

    /*변수및 요소 선언*/
   var scrollBody = $('.fix_motion'); //부모 스크롤 엘리먼트
   var titText = scrollBody.find('.intro_txt'); //타이틀 텍스트
   var maskLeft = scrollBody.find('.left_mask'); //마스크 레프트
   var maskRight = scrollBody.find('.right_mask'); //마스크 라이트
   var bgImage = scrollBody.find('.bg_img'); //배경 이미지
   var endingContent = scrollBody.find('.ending_txt'); //엔딩이미지

   /*리사이즈, 스크롤할때 변해야 할 값들*/
   var scrollHeight; // 스크롤 높이
   var sectionOffsetTop; //섹션의 오프셋 탑 변수
   var sectionScrolTop; //섹션의 스크롤 탑 변수
   var scrollRealHeight; //실제로 스크롤해야될 높이를 담을 변수를 선업합니다
   var winScrollTop; // 스크롤바의 높이를 담을 변수를 선업합니다
   var scrollPerecnt // 스크롤탑 / 스크롤 길이로 구한 비율 값
   var percent; // 스크롤 백분율값을 담을 변수를 선업합니다


   function changeOverlap(){ //스크롤할때 계속 호출될 함수 선언

       setProperty(); // 스크롤할때 변해야할 값들의 변수를 선언
       motionRender(); //모션 실행 함수

   };

   function setProperty(){ // 스크롤할때 변할 값들을 셋팅해주는 함수

       scrollHeight = scrollBody.height(); // 스크롤 높이
       sectionOffsetTop = scrollBody.offset().top; //섹션의 오프셋 탑 구함

       scrollRealHeight = (scrollHeight - $(window).height()); //실제로 스크롤해야될 높이값을 구합니다
       winScrollTop = $(window).scrollTop(); //스크롤바의 현재 위치를 구합니다
       sectionScrolTop = winScrollTop - sectionOffsetTop // 섹션의 탑 값을 구함

       scrollPerecnt =  sectionScrolTop / scrollRealHeight; // 스크롤탑 / 스크롤 길이 로 비율을 구합니다
       percent = scrollPerecnt * 100 ; //백분율을 구합니다

   };

   function motionRender(){ //모션 실행 함수

       var maskStartValue = 50; //마스크 처리값
       var maskEndValue = 0; // 최종 마스크 크기
       var zoomValue = 1.5; //줌될 크기
       var zoomOutValue = 1; //줌 아웃될 크기
       var maskVal = Math.max(maskEndValue, maskStartValue - (scrollPerecnt * maskStartValue)); //마스크 처리값
       var scaleVal = Math.max(zoomOutValue, zoomValue - (scrollPerecnt * zoomValue)); // 줌 처리값

       /* 마스크 처리 */
       maskLeft
       .css({
           width: maskVal + '%'
       });

       maskRight
       .css({
           width: maskVal + '%'
       });

       /* 이미지 스캐일 처리 */
       bgImage
       .css({
           'transform': 'scale('+ scaleVal +')'
       });

       /* 인트로 텍스트 퇴장 처리 */
       if(percent > 0.3){
           titText.addClass('active');
       }else{
           titText.removeClass('active');
       }

       /* 엔딩 텍스트 등장 처리 */
       if(percent >= 70){
           endingContent.addClass('active');
       }else {
           endingContent.removeClass('active');
       }

   };

   function init(){ //최초 한번실행
       changeOverlap();
       bindEvent();
   };

   function bindEvent(){
       $(window).scroll(function(e){ //스크롤 이벤트를 추가합니다.
           changeOverlap();
       });

       $(window).resize(function(){
           changeOverlap();
       });
   };

   if(Modernizr.csspositionsticky){
       init(); //start
   };

});
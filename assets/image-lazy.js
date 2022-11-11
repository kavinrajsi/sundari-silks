!function(e){var t=function(e,t,a){"use strict";var n,i;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},a)t in i||(i[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var o=t.documentElement,r=e.HTMLPictureElement,s="addEventListener",l="getAttribute",c=e[s].bind(e),d=e.setTimeout,u=e.requestAnimationFrame||d,f=e.requestIdleCallback,m=/^picture$/i,y=["load","error","lazyincluded","_lazyloaded"],z={},h=Array.prototype.forEach,v=function(e,t){return z[t]||(z[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),z[t].test(e[l]("class")||"")&&z[t]},g=function(e,t){v(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},p=function(e,t){var a;(a=v(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(a," "))},C=function(e,t,a){var n=a?s:"removeEventListener";a&&C(e,t),y.forEach(function(a){e[n](a,t)})},b=function(e,a,i,o,r){var s=t.createEvent("Event");return i||(i={}),i.instance=n,s.initEvent(a,!o,!r),s.detail=i,e.dispatchEvent(s),s},A=function(t,a){var n;!r&&(n=e.picturefill||i.pf)?(a&&a.src&&!t[l]("srcset")&&t.setAttribute("srcset",a.src),n({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,a){for(a=a||e.offsetWidth;a<i.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},w=function(){var e,a,n=[],i=[],o=n,r=function(){var t=o;for(o=n.length?i:n,e=!0,a=!1;t.length;)t.shift()();e=!1},s=function(n,i){e&&!i?n.apply(this,arguments):(o.push(n),a||(a=!0,(t.hidden?d:u)(r)))};return s._lsFlush=r,s}(),M=function(e,t){return t?function(){w(e)}:function(){var t=this,a=arguments;w(function(){e.apply(t,a)})}},N=function(e){var t,n=0,o=i.throttleDelay,r=i.ricTimeout,s=function(){t=!1,n=a.now(),e()},l=f&&r>49?function(){f(s,{timeout:r}),r!==i.ricTimeout&&(r=i.ricTimeout)}:M(function(){d(s)},!0);return function(e){var i;(e=!0===e)&&(r=33),t||(t=!0,(i=o-(a.now()-n))<0&&(i=0),e||i<9?l():d(l,i))}},L=function(e){var t,n,i=function(){t=null,e()},o=function(){var e=a.now()-n;e<99?d(o,99-e):(f||i)(i)};return function(){n=a.now(),t||(t=d(o,99))}},x=function(){var r,f,y,z,_,x,S,B,T,F,R,D,k=/^img$/i,H=/^iframe$/i,O="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),P=0,$=0,q=-1,I=function(e){$--,(!e||$<0||!e.target)&&($=0)},U=function(e){return null==D&&(D="hidden"==E(t.body,"visibility")),D||!("hidden"==E(e.parentNode,"visibility")&&"hidden"==E(e,"visibility"))},j=function(e,a){var n,i=e,r=U(e);for(B-=a,R+=a,T-=a,F+=a;r&&(i=i.offsetParent)&&i!=t.body&&i!=o;)(r=(E(i,"opacity")||1)>0)&&"visible"!=E(i,"overflow")&&(n=i.getBoundingClientRect(),r=F>n.left&&T<n.right&&R>n.top-1&&B<n.bottom+1);return r},G=function(){var e,a,s,c,d,u,m,y,h,v,g,p,C=n.elements;if((z=i.loadMode)&&$<8&&(e=C.length)){for(a=0,q++;a<e;a++)if(C[a]&&!C[a]._lazyRace)if(!O||n.prematureUnveil&&n.prematureUnveil(C[a]))Z(C[a]);else if((y=C[a][l]("data-expand"))&&(u=1*y)||(u=P),v||(v=!i.expand||i.expand<1?o.clientHeight>500&&o.clientWidth>500?500:370:i.expand,n._defEx=v,g=v*i.expFactor,p=i.hFac,D=null,P<g&&$<1&&q>2&&z>2&&!t.hidden?(P=g,q=0):P=z>1&&q>1&&$<6?v:0),h!==u&&(x=innerWidth+u*p,S=innerHeight+u,m=-1*u,h=u),s=C[a].getBoundingClientRect(),(R=s.bottom)>=m&&(B=s.top)<=S&&(F=s.right)>=m*p&&(T=s.left)<=x&&(R||F||T||B)&&(i.loadHidden||U(C[a]))&&(f&&$<3&&!y&&(z<3||q<4)||j(C[a],u))){if(Z(C[a]),d=!0,$>9)break}else!d&&f&&!c&&$<4&&q<4&&z>2&&(r[0]||i.preloadAfterLoad)&&(r[0]||!y&&(R||F||T||B||"auto"!=C[a][l](i.sizesAttr)))&&(c=r[0]||C[a]);c&&!d&&Z(c)}},J=N(G),K=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(I(e),g(t,i.loadedClass),p(t,i.loadingClass),C(t,V),b(t,"lazyloaded"))},Q=M(K),V=function(e){Q({target:e.target})},X=function(e){var t,a=e[l](i.srcsetAttr);(t=i.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},Y=M(function(e,t,a,n,o){var r,s,c,u,f,z;(f=b(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(a?g(e,i.autosizesClass):e.setAttribute("sizes",n)),s=e[l](i.srcsetAttr),r=e[l](i.srcAttr),o&&(u=(c=e.parentNode)&&m.test(c.nodeName||"")),z=t.firesLoad||"src"in e&&(s||r||u),f={target:e},g(e,i.loadingClass),z&&(clearTimeout(y),y=d(I,2500),C(e,V,!0)),u&&h.call(c.getElementsByTagName("source"),X),s?e.setAttribute("srcset",s):r&&!u&&(H.test(e.nodeName)?function(e,t){var a=e.getAttribute("data-load-mode")||i.iframeLoadMode;0==a?e.contentWindow.location.replace(t):1==a&&(e.src=t)}(e,r):e.src=r),o&&(s||u)&&A(e,{src:r})),e._lazyRace&&delete e._lazyRace,p(e,i.lazyClass),w(function(){var t=e.complete&&e.naturalWidth>1;z&&!t||(t&&g(e,i.fastLoadedClass),K(f),e._lazyCache=!0,d(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&$--},!0)}),Z=function(e){if(!e._lazyRace){var t,a=k.test(e.nodeName),n=a&&(e[l](i.sizesAttr)||e[l]("sizes")),o="auto"==n;(!o&&f||!a||!e[l]("src")&&!e.srcset||e.complete||v(e,i.errorClass)||!v(e,i.lazyClass))&&(t=b(e,"lazyunveilread").detail,o&&W.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,$++,Y(e,t,o,n,a))}},ee=L(function(){i.loadMode=3,J()}),te=function(){3==i.loadMode&&(i.loadMode=2),ee()},ae=function(){f||(a.now()-_<999?d(ae,999):(f=!0,i.loadMode=3,J(),c("scroll",te,!0)))};return{_:function(){_=a.now(),n.elements=t.getElementsByClassName(i.lazyClass),r=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),c("scroll",J,!0),c("resize",J,!0),c("pageshow",function(e){if(e.persisted){var a=t.querySelectorAll("."+i.loadingClass);a.length&&a.forEach&&u(function(){a.forEach(function(e){e.complete&&Z(e)})})}}),e.MutationObserver?new MutationObserver(J).observe(o,{childList:!0,subtree:!0,attributes:!0}):(o[s]("DOMNodeInserted",J,!0),o[s]("DOMAttrModified",J,!0),setInterval(J,999)),c("hashchange",J,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t[s](e,J,!0)}),/d$|^c/.test(t.readyState)?ae():(c("load",ae),t[s]("DOMContentLoaded",J),d(ae,2e4)),n.elements.length?(G(),w._lsFlush()):J()},checkElems:J,unveil:Z,_aLSL:te}}(),W=function(){var e,a=M(function(e,t,a,n){var i,o,r;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),m.test(t.nodeName||""))for(o=0,r=(i=t.getElementsByTagName("source")).length;o<r;o++)i[o].setAttribute("sizes",n);a.detail.dataAttr||A(e,a.detail)}),n=function(e,t,n){var i,o=e.parentNode;o&&(n=_(e,o,n),(i=b(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&a(e,o,i,n))},o=L(function(){var t,a=e.length;if(a)for(t=0;t<a;t++)n(e[t])});return{_:function(){e=t.getElementsByClassName(i.autosizesClass),c("resize",o)},checkElems:o,updateElem:n}}(),S=function(){!S.i&&t.getElementsByClassName&&(S.i=!0,W._(),x._())};return d(function(){i.init&&S()}),n={cfg:i,autoSizer:W,loader:x,init:S,uP:A,aC:g,rC:p,hC:v,fire:b,gW:_,rAF:w}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
/*! lazysizes - v5.3.2 */

!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});

!function(t,e){var r=function(){e(t.lazySizes),t.removeEventListener("lazyunveilread",r,!0)};e=e.bind(null,t,t.document),"object"==typeof module&&module.exports?e(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],e):t.lazySizes?r():t.addEventListener("lazyunveilread",r,!0)}(window,function(t,e,r){"use strict";var i,a,s=r.cfg,n={string:1,number:1},o=/^\-*\+*\d+\.*\d*$/,u=/^picture$/i,c=/\s*\{\s*width\s*\}\s*/i,d=/\s*\{\s*height\s*\}\s*/i,f=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,l=/^\[.*\]|\{.*\}$/,p=/^(?:auto|\d+(px)?)$/,y=e.createElement("a"),h=e.createElement("img"),g="srcset"in h&&!("sizes"in h),v=!!t.HTMLPictureElement&&!g;function b(e,r,i){var s,n,c,d,p,y=t.getComputedStyle(e);if(i){for(d in p={},i)p[d]=i[d];i=p}else n=e.parentNode,i={isPicture:!(!n||!u.test(n.nodeName||""))};for(s in c=function(t,r){var s=e.getAttribute("data-"+t);if(!s){var n=y.getPropertyValue("--ls-"+t);n&&(s=n.trim())}if(s){if("true"==s)s=!0;else if("false"==s)s=!1;else if(o.test(s))s=parseFloat(s);else if("function"==typeof a[t])s=a[t](e,s);else if(l.test(s))try{s=JSON.parse(s)}catch(t){}i[t]=s}else t in a&&"function"!=typeof a[t]&&!i[t]?i[t]=a[t]:r&&"function"==typeof a[t]&&(i[t]=a[t](e,s))},a)c(s);return r.replace(f,function(t,e){e in i||c(e,!0)}),i}function m(t,r,s){var o=0,u=0,l=s;if(t){if("container"===r.ratio){for(o=l.scrollWidth,u=l.scrollHeight;!(o&&u||l===e);)o=(l=l.parentNode).scrollWidth,u=l.scrollHeight;o&&u&&(r.ratio=r.traditionalRatio?u/o:o/u)}var p,h,v;p=t,h=r,(v=[]).srcset=[],h.absUrl&&(y.setAttribute("href",p),p=y.href),p=((h.prefix||"")+p+(h.postfix||"")).replace(f,function(t,e){return n[typeof h[e]]?h[e]:t}),h.widths.forEach(function(t){var e=h.widthmap[t]||t,r=h.aspectratio||h.ratio,i=!h.aspectratio&&a.traditionalRatio,s={u:p.replace(c,e).replace(d,r?i?Math.round(t*r):Math.round(t/r):""),w:t};v.push(s),v.srcset.push(s.c=s.u+" "+t+"w")}),(t=v).isPicture=r.isPicture,g&&"IMG"==s.nodeName.toUpperCase()?s.removeAttribute(i.srcsetAttr):s.setAttribute(i.srcsetAttr,t.srcset.join(", ")),Object.defineProperty(s,"_lazyrias",{value:t,writable:!0})}}function z(t){return t.getAttribute(t.getAttribute("data-srcattr")||a.srcAttr)||t.getAttribute(i.srcsetAttr)||t.getAttribute(i.srcAttr)||t.getAttribute("data-pfsrcset")||""}!function(){var t,e={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:function(){},widthmap:{},ratio:!1,traditionalRatio:!1,aspectratio:!1};for(t in(i=r&&r.cfg).supportsType||(i.supportsType=function(t){return!t}),i.rias||(i.rias={}),"widths"in(a=i.rias)||(a.widths=[],function(t){for(var e,r=0;!e||e<3e3;)(r+=5)>30&&(r+=1),e=36*r,t.push(e)}(a.widths)),e)t in a||(a[t]=e[t])}(),addEventListener("lazybeforesizes",function(t){var e,s,n,o,u,d,f,l,y,h,g,w,P;if(t.detail.instance==r&&(e=t.target,t.detail.dataAttr&&!t.defaultPrevented&&!a.disabled&&(y=e.getAttribute(i.sizesAttr)||e.getAttribute("sizes"))&&p.test(y))){if(n=function(t,e){var i=b(t,e);return a.modifyOptions.call(t,{target:t,details:i,detail:i}),r.fire(t,"lazyriasmodifyoptions",i),i}(e,s=z(e)),g=c.test(n.prefix)||c.test(n.postfix),n.isPicture&&(o=e.parentNode))for(d=0,f=(u=o.getElementsByTagName("source")).length;d<f;d++)(g||c.test(l=z(u[d])))&&(m(l,b(u[d],l,n),u[d]),w=!0);g||c.test(s)?(m(s,n,e),w=!0):w&&((P=[]).srcset=[],P.isPicture=!0,Object.defineProperty(e,"_lazyrias",{value:P,writable:!0})),w&&(v?e.removeAttribute(i.srcAttr):"auto"!=y&&(h={width:parseInt(y,10)},A({target:e,detail:h})))}},!0);var A=function(){var a=function(t,e){return t.w-e.w},n=function(t,e){var a;return!t._lazyrias&&r.pWS&&(a=r.pWS(t.getAttribute(i.srcsetAttr||""))).length&&(Object.defineProperty(t,"_lazyrias",{value:a,writable:!0}),e&&t.parentNode&&(a.isPicture="PICTURE"==t.parentNode.nodeName.toUpperCase())),t._lazyrias},o=function(e,i){var s,o,u,c,d,f;if((d=e._lazyrias).isPicture&&t.matchMedia)for(o=0,u=(s=e.parentNode.getElementsByTagName("source")).length;o<u;o++)if(n(s[o])&&!s[o].getAttribute("type")&&(!(c=s[o].getAttribute("media"))||(matchMedia(c)||{}).matches)){d=s[o]._lazyrias;break}return(!d.w||d.w<i)&&(d.w=i,d.d=function(e){var i=t.devicePixelRatio||1,a=r.getX&&r.getX(e);return Math.min(a||i,2.4,i)}(e),f=function(t){for(var e,r,i=t.length,a=t[i-1],s=0;s<i;s++)if((a=t[s]).d=a.w/t.w,a.d>=t.d){!a.cached&&(e=t[s-1])&&e.d>t.d-.13*Math.pow(t.d,2.2)&&(r=Math.pow(e.d-.6,1.6),e.cached&&(e.d+=.15*r),e.d+(a.d-t.d)*r>t.d&&(a=e));break}return a}(d.sort(a))),f},u=function(a){if(a.detail.instance==r){var c,d=a.target;g||!(t.respimage||t.picturefill||s.pf)?("_lazyrias"in d||a.detail.dataAttr&&n(d,!0))&&(c=o(d,a.detail.width))&&c.u&&d._lazyrias.cur!=c.u&&(d._lazyrias.cur=c.u,c.cached=!0,r.rAF(function(){d.setAttribute(i.srcAttr,c.u),d.setAttribute("src",c.u)})):e.removeEventListener("lazybeforesizes",u)}};return v?u=function(){}:addEventListener("lazybeforesizes",u),u}()});
(function(window, factory) {
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if(typeof module == 'object' && module.exports){
		factory(require('lazysizes'));
	} else if (typeof define == 'function' && define.amd) {
		define(['lazysizes'], factory);
	} else if(window.lazySizes) {
		globalInstall();
	} else {
		window.addEventListener('lazyunveilread', globalInstall, true);
	}
}(window, function(window, document, lazySizes) {
	/*jshint eqnull:true */
	'use strict';

	var config, riasCfg;
	var lazySizesCfg = lazySizes.cfg;
	var replaceTypes = {string: 1, number: 1};
	var regNumber = /^\-*\+*\d+\.*\d*$/;
	var regPicture = /^picture$/i;
	var regWidth = /\s*\{\s*width\s*\}\s*/i;
	var regHeight = /\s*\{\s*height\s*\}\s*/i;
	var regPlaceholder = /\s*\{\s*([a-z0-9]+)\s*\}\s*/ig;
	var regObj = /^\[.*\]|\{.*\}$/;
	var regAllowedSizes = /^(?:auto|\d+(px)?)$/;
	var anchor = document.createElement('a');
	var img = document.createElement('img');
	var buggySizes = ('srcset' in img) && !('sizes' in img);
	var supportPicture = !!window.HTMLPictureElement && !buggySizes;

	(function(){
		var prop;
		var noop = function(){};
		var riasDefaults = {
			prefix: '',
			postfix: '',
			srcAttr: 'data-src',
			absUrl: false,
			modifyOptions: noop,
			widthmap: {},
			ratio: false,
			traditionalRatio: false,
			aspectratio: false,
		};

		config = lazySizes && lazySizes.cfg;

		if(!config.supportsType){
			config.supportsType = function(type/*, elem*/){
				return !type;
			};
		}

		if(!config.rias){
			config.rias = {};
		}
		riasCfg = config.rias;

		if(!('widths' in riasCfg)){
			riasCfg.widths = [];
			(function (widths){
				var width;
				var i = 0;
				while(!width || width < 3000){
					i += 5;
					if(i > 30){
						i += 1;
					}
					width = (36 * i);
					widths.push(width);
				}
			})(riasCfg.widths);
		}

		for(prop in riasDefaults){
			if(!(prop in riasCfg)){
				riasCfg[prop] = riasDefaults[prop];
			}
		}
	})();

	function getElementOptions(elem, src, options){
		var attr, parent, setOption, prop, opts;
		var elemStyles = window.getComputedStyle(elem);

		if (!options) {
			parent = elem.parentNode;

			options = {
				isPicture: !!(parent && regPicture.test(parent.nodeName || ''))
			};
		} else {
			opts = {};

			for (prop in options) {
				opts[prop] = options[prop];
			}

			options = opts;
		}

		setOption = function(attr, run){
			var attrVal = elem.getAttribute('data-'+ attr);

			if (!attrVal) {
				// no data- attr, get value from the CSS
				var styles = elemStyles.getPropertyValue('--ls-' + attr);
				// at least Safari 9 returns null rather than
				// an empty string for getPropertyValue causing
				// .trim() to fail
				if (styles) {
					attrVal = styles.trim();
				}
			}

			if (attrVal) {
				if(attrVal == 'true'){
					attrVal = true;
				} else if(attrVal == 'false'){
					attrVal = false;
				} else if(regNumber.test(attrVal)){
					attrVal = parseFloat(attrVal);
				} else if(typeof riasCfg[attr] == 'function'){
					attrVal = riasCfg[attr](elem, attrVal);
				} else if(regObj.test(attrVal)){
					try {
						attrVal = JSON.parse(attrVal);
					} catch(e){}
				}
				options[attr] = attrVal;
			} else if((attr in riasCfg) && typeof riasCfg[attr] != 'function' && !options[attr]){
				options[attr] = riasCfg[attr];
			} else if(run && typeof riasCfg[attr] == 'function'){
				options[attr] = riasCfg[attr](elem, attrVal);
			}
		};

		for(attr in riasCfg){
			setOption(attr);
		}
		src.replace(regPlaceholder, function(full, match){
			if(!(match in options)){
				setOption(match, true);
			}
		});

		return options;
	}

	function replaceUrlProps(url, options){
		var candidates = [];
		var replaceFn = function(full, match){
			return (replaceTypes[typeof options[match]]) ? options[match] : full;
		};
		candidates.srcset = [];

		if(options.absUrl){
			anchor.setAttribute('href', url);
			url = anchor.href;
		}

		url = ((options.prefix || '') + url + (options.postfix || '')).replace(regPlaceholder, replaceFn);

		options.widths.forEach(function(width){
			var widthAlias = options.widthmap[width] || width;
			var ratio = options.aspectratio || options.ratio;
			var traditionalRatio = !options.aspectratio && riasCfg.traditionalRatio;
			var candidate = {
				u: url.replace(regWidth, widthAlias)
						.replace(regHeight, ratio ?
							traditionalRatio ?
								Math.round(width * ratio) :
								Math.round(width / ratio)
							: ''),
				w: width
			};

			candidates.push(candidate);
			candidates.srcset.push( (candidate.c = candidate.u + ' ' + width + 'w') );
		});
		return candidates;
	}

	function setSrc(src, opts, elem){
		var elemW = 0;
		var elemH = 0;
		var sizeElement = elem;

		if(!src){return;}

		if (opts.ratio === 'container') {
			// calculate image or parent ratio
			elemW = sizeElement.scrollWidth;
			elemH = sizeElement.scrollHeight;

			while ((!elemW || !elemH) && sizeElement !== document) {
				sizeElement = sizeElement.parentNode;
				elemW = sizeElement.scrollWidth;
				elemH = sizeElement.scrollHeight;
			}
			if (elemW && elemH) {
				opts.ratio = opts.traditionalRatio ? elemH / elemW : elemW / elemH;
			}
		}

		src = replaceUrlProps(src, opts);

		src.isPicture = opts.isPicture;

		if(buggySizes && elem.nodeName.toUpperCase() == 'IMG'){
			elem.removeAttribute(config.srcsetAttr);
		} else {
			elem.setAttribute(config.srcsetAttr, src.srcset.join(', '));
		}

		Object.defineProperty(elem, '_lazyrias', {
			value: src,
			writable: true
		});
	}

	function createAttrObject(elem, src){
		var opts = getElementOptions(elem, src);

		riasCfg.modifyOptions.call(elem, {target: elem, details: opts, detail: opts});

		lazySizes.fire(elem, 'lazyriasmodifyoptions', opts);
		return opts;
	}

	function getSrc(elem){
		return elem.getAttribute( elem.getAttribute('data-srcattr') || riasCfg.srcAttr ) || elem.getAttribute(config.srcsetAttr) || elem.getAttribute(config.srcAttr) || elem.getAttribute('data-pfsrcset') || '';
	}

	addEventListener('lazybeforesizes', function(e){
		if(e.detail.instance != lazySizes){return;}

		var elem, src, elemOpts, sourceOpts, parent, sources, i, len, sourceSrc, sizes, detail, hasPlaceholder, modified, emptyList;
		elem = e.target;

		if(!e.detail.dataAttr || e.defaultPrevented || riasCfg.disabled || !((sizes = elem.getAttribute(config.sizesAttr) || elem.getAttribute('sizes')) && regAllowedSizes.test(sizes))){return;}

		src = getSrc(elem);

		elemOpts = createAttrObject(elem, src);

		hasPlaceholder = regWidth.test(elemOpts.prefix) || regWidth.test(elemOpts.postfix);

		if(elemOpts.isPicture && (parent = elem.parentNode)){
			sources = parent.getElementsByTagName('source');
			for(i = 0, len = sources.length; i < len; i++){
				if ( hasPlaceholder || regWidth.test(sourceSrc = getSrc(sources[i])) ){
					sourceOpts = getElementOptions(sources[i], sourceSrc, elemOpts);
					setSrc(sourceSrc, sourceOpts, sources[i]);
					modified = true;
				}
			}
		}

		if ( hasPlaceholder || regWidth.test(src) ){
			setSrc(src, elemOpts, elem);
			modified = true;
		} else if (modified) {
			emptyList = [];
			emptyList.srcset = [];
			emptyList.isPicture = true;
			Object.defineProperty(elem, '_lazyrias', {
				value: emptyList,
				writable: true
			});
		}

		if(modified){
			if(supportPicture){
				elem.removeAttribute(config.srcAttr);
			} else if(sizes != 'auto') {
				detail = {
					width: parseInt(sizes, 10)
				};
				polyfill({
					target: elem,
					detail: detail
				});
			}
		}
	}, true);
	// partial polyfill
	var polyfill = (function(){
		var ascendingSort = function( a, b ) {
			return a.w - b.w;
		};

		var reduceCandidate = function (srces) {
			var lowerCandidate, bonusFactor;
			var len = srces.length;
			var candidate = srces[len -1];
			var i = 0;

			for(i; i < len;i++){
				candidate = srces[i];
				candidate.d = candidate.w / srces.w;
				if(candidate.d >= srces.d){
					if(!candidate.cached && (lowerCandidate = srces[i - 1]) &&
						lowerCandidate.d > srces.d - (0.13 * Math.pow(srces.d, 2.2))){

						bonusFactor = Math.pow(lowerCandidate.d - 0.6, 1.6);

						if(lowerCandidate.cached) {
							lowerCandidate.d += 0.15 * bonusFactor;
						}

						if(lowerCandidate.d + ((candidate.d - srces.d) * bonusFactor) > srces.d){
							candidate = lowerCandidate;
						}
					}
					break;
				}
			}
			return candidate;
		};

		var getWSet = function(elem, testPicture){
			var src;
			if(!elem._lazyrias && lazySizes.pWS && (src = lazySizes.pWS(elem.getAttribute(config.srcsetAttr || ''))).length){
				Object.defineProperty(elem, '_lazyrias', {
					value: src,
					writable: true
				});
				if(testPicture && elem.parentNode){
					src.isPicture = elem.parentNode.nodeName.toUpperCase() == 'PICTURE';
				}
			}
			return elem._lazyrias;
		};

		var getX = function(elem){
			var dpr = window.devicePixelRatio || 1;
			var optimum = lazySizes.getX && lazySizes.getX(elem);
			return Math.min(optimum || dpr, 2.4, dpr);
		};

		var getCandidate = function(elem, width){
			var sources, i, len, media, srces, src;

			srces = elem._lazyrias;

			if(srces.isPicture && window.matchMedia){
				for(i = 0, sources = elem.parentNode.getElementsByTagName('source'), len = sources.length; i < len; i++){
					if(getWSet(sources[i]) && !sources[i].getAttribute('type') && ( !(media = sources[i].getAttribute('media')) || ((matchMedia(media) || {}).matches))){
						srces = sources[i]._lazyrias;
						break;
					}
				}
			}

			if(!srces.w || srces.w < width){
				srces.w = width;
				srces.d = getX(elem);
				src = reduceCandidate(srces.sort(ascendingSort));
			}

			return src;
		};

		var polyfill = function(e){
			if(e.detail.instance != lazySizes){return;}

			var candidate;
			var elem = e.target;

			if(!buggySizes && (window.respimage || window.picturefill || lazySizesCfg.pf)){
				document.removeEventListener('lazybeforesizes', polyfill);
				return;
			}

			if(!('_lazyrias' in elem) && (!e.detail.dataAttr || !getWSet(elem, true))){
				return;
			}

			candidate = getCandidate(elem, e.detail.width);

			if(candidate && candidate.u && elem._lazyrias.cur != candidate.u){
				elem._lazyrias.cur = candidate.u;
				candidate.cached = true;
				lazySizes.rAF(function(){
					elem.setAttribute(config.srcAttr, candidate.u);
					elem.setAttribute('src', candidate.u);
				});
			}
		};

		if(!supportPicture){
			addEventListener('lazybeforesizes', polyfill);
		} else {
			polyfill = function(){};
		}

		return polyfill;

	})();

}));

!function(e,t){var a=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",a,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],t):e.lazySizes?a():e.addEventListener("lazyunveilread",a,!0)}(window,function(e,t,a){"use strict";if(e.addEventListener){var i=a.cfg,r=/\s+/g,s=/\s*\|\s+|\s+\|\s*/g,n=/^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,l=/^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,d=/\(|\)|'/,u={contain:1,cover:1},o=function(e,t){if(t){var a=t.match(l);a&&a[1]?e.setAttribute("type",a[1]):e.setAttribute("media",i.customMedia[t]||t)}},z=function(e){if(e.target._lazybgset){var t=e.target,i=t._lazybgset,r=t.currentSrc||t.src;if(r){var s=d.test(r)?JSON.stringify(r):r,n=a.fire(i,"bgsetproxy",{src:r,useSrc:s,fullSrc:null});n.defaultPrevented||(i.style.backgroundImage=n.detail.fullSrc||"url("+n.detail.useSrc+")")}t._lazybgsetLoading&&(a.fire(i,"_lazyloaded",{},!1,!0),delete t._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(e){var l,d,u;!e.defaultPrevented&&(l=e.target.getAttribute("data-bgset"))&&(u=e.target,(d=t.createElement("img")).alt="",d._lazybgsetLoading=!0,e.detail.firesLoad=!0,function(e,a,l){var d=t.createElement("picture"),u=a.getAttribute(i.sizesAttr),z=a.getAttribute("data-ratio"),c=a.getAttribute("data-optimumx");a._lazybgset&&a._lazybgset.parentNode==a&&a.removeChild(a._lazybgset),Object.defineProperty(l,"_lazybgset",{value:a,writable:!0}),Object.defineProperty(a,"_lazybgset",{value:d,writable:!0}),e=e.replace(r," ").split(s),d.style.display="none",l.className=i.lazyClass,1!=e.length||u||(u="auto"),e.forEach(function(e){var a,r=t.createElement("source");u&&"auto"!=u&&r.setAttribute("sizes",u),(a=e.match(n))?(r.setAttribute(i.srcsetAttr,a[1]),o(r,a[2]),o(r,a[3])):r.setAttribute(i.srcsetAttr,e),d.appendChild(r)}),u&&(l.setAttribute(i.sizesAttr,u),a.removeAttribute(i.sizesAttr),a.removeAttribute("sizes")),c&&l.setAttribute("data-optimumx",c),z&&l.setAttribute("data-ratio",z),d.appendChild(l),a.appendChild(d)}(l,u,d),setTimeout(function(){a.loader.unveil(d),a.rAF(function(){a.fire(d,"_lazyloaded",{},!0,!0),d.complete&&z({target:d})})}))}),t.addEventListener("load",z,!0),e.addEventListener("lazybeforesizes",function(e){if(e.detail.instance==a&&e.target._lazybgset&&e.detail.dataAttr){var t=function(e){var t;return t=(getComputedStyle(e)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!u[t]&&u[e.style.backgroundSize]&&(t=e.style.backgroundSize),t}(e.target._lazybgset);u[t]&&(e.target._lazysizesParentFit=t,a.rAF(function(){e.target.setAttribute("data-parent-fit",t),e.target._lazysizesParentFit&&delete e.target._lazysizesParentFit}))}},!0),t.documentElement.addEventListener("lazybeforesizes",function(e){var t,i;!e.defaultPrevented&&e.target._lazybgset&&e.detail.instance==a&&(e.detail.width=(t=e.target._lazybgset,i=a.gW(t,t.parentNode),(!t._lazysizesWidth||i>t._lazysizesWidth)&&(t._lazysizesWidth=i),t._lazysizesWidth))})}});
(function(window, factory) {
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if(typeof module == 'object' && module.exports){
		factory(require('lazysizes'));
	} else if (typeof define == 'function' && define.amd) {
		define(['lazysizes'], factory);
	} else if(window.lazySizes) {
		globalInstall();
	} else {
		window.addEventListener('lazyunveilread', globalInstall, true);
	}
}(window, function(window, document, lazySizes) {
	'use strict';
	if(!window.addEventListener){return;}

	var lazySizesCfg = lazySizes.cfg;
	var regWhite = /\s+/g;
	var regSplitSet = /\s*\|\s+|\s+\|\s*/g;
	var regSource = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/;
	var regType = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/;
	var regBgUrlEscape = /\(|\)|'/;
	var allowedBackgroundSize = {contain: 1, cover: 1};
	var proxyWidth = function(elem){
		var width = lazySizes.gW(elem, elem.parentNode);

		if(!elem._lazysizesWidth || width > elem._lazysizesWidth){
			elem._lazysizesWidth = width;
		}
		return elem._lazysizesWidth;
	};
	var getBgSize = function(elem){
		var bgSize;

		bgSize = (getComputedStyle(elem) || {getPropertyValue: function(){}}).getPropertyValue('background-size');

		if(!allowedBackgroundSize[bgSize] && allowedBackgroundSize[elem.style.backgroundSize]){
			bgSize = elem.style.backgroundSize;
		}

		return bgSize;
	};
	var setTypeOrMedia = function(source, match){
		if(match){
			var typeMatch = match.match(regType);
			if(typeMatch && typeMatch[1]){
				source.setAttribute('type', typeMatch[1]);
			} else {
				source.setAttribute('media', lazySizesCfg.customMedia[match] || match);
			}
		}
	};
	var createPicture = function(sets, elem, img){
		var picture = document.createElement('picture');
		var sizes = elem.getAttribute(lazySizesCfg.sizesAttr);
		var ratio = elem.getAttribute('data-ratio');
		var optimumx = elem.getAttribute('data-optimumx');

		if(elem._lazybgset && elem._lazybgset.parentNode == elem){
			elem.removeChild(elem._lazybgset);
		}

		Object.defineProperty(img, '_lazybgset', {
			value: elem,
			writable: true
		});
		Object.defineProperty(elem, '_lazybgset', {
			value: picture,
			writable: true
		});

		sets = sets.replace(regWhite, ' ').split(regSplitSet);

		picture.style.display = 'none';
		img.className = lazySizesCfg.lazyClass;

		if(sets.length == 1 && !sizes){
			sizes = 'auto';
		}

		sets.forEach(function(set){
			var match;
			var source = document.createElement('source');

			if(sizes && sizes != 'auto'){
				source.setAttribute('sizes', sizes);
			}

			if((match = set.match(regSource))){
				source.setAttribute(lazySizesCfg.srcsetAttr, match[1]);

				setTypeOrMedia(source, match[2]);
				setTypeOrMedia(source, match[3]);
			} else {
				source.setAttribute(lazySizesCfg.srcsetAttr, set);
			}

			picture.appendChild(source);
		});

		if(sizes){
			img.setAttribute(lazySizesCfg.sizesAttr, sizes);
			elem.removeAttribute(lazySizesCfg.sizesAttr);
			elem.removeAttribute('sizes');
		}
		if(optimumx){
			img.setAttribute('data-optimumx', optimumx);
		}
		if(ratio) {
			img.setAttribute('data-ratio', ratio);
		}

		picture.appendChild(img);

		elem.appendChild(picture);
	};

	var proxyLoad = function(e){
		if(!e.target._lazybgset){return;}

		var image = e.target;
		var elem = image._lazybgset;
		var bg = image.currentSrc || image.src;


		if(bg){
			var useSrc = regBgUrlEscape.test(bg) ? JSON.stringify(bg) : bg;
			var event = lazySizes.fire(elem, 'bgsetproxy', {
				src: bg,
				useSrc: useSrc,
				fullSrc: null,
			});

			if(!event.defaultPrevented){
				elem.style.backgroundImage = event.detail.fullSrc || 'url(' + event.detail.useSrc + ')';
			}
		}

		if(image._lazybgsetLoading){
			lazySizes.fire(elem, '_lazyloaded', {}, false, true);
			delete image._lazybgsetLoading;
		}
	};

	addEventListener('lazybeforeunveil', function(e){
		var set, image, elem;

		if(e.defaultPrevented || !(set = e.target.getAttribute('data-bgset'))){return;}

		elem = e.target;
		image = document.createElement('img');

		image.alt = '';

		image._lazybgsetLoading = true;
		e.detail.firesLoad = true;

		createPicture(set, elem, image);

		setTimeout(function(){
			lazySizes.loader.unveil(image);

			lazySizes.rAF(function(){
				lazySizes.fire(image, '_lazyloaded', {}, true, true);
				if(image.complete) {
					proxyLoad({target: image});
				}
			});
		});

	});

	document.addEventListener('load', proxyLoad, true);

	window.addEventListener('lazybeforesizes', function(e){
		if(e.detail.instance != lazySizes){return;}
		if(e.target._lazybgset && e.detail.dataAttr){
			var elem = e.target._lazybgset;
			var bgSize = getBgSize(elem);

			if(allowedBackgroundSize[bgSize]){
				e.target._lazysizesParentFit = bgSize;

				lazySizes.rAF(function(){
					e.target.setAttribute('data-parent-fit', bgSize);
					if(e.target._lazysizesParentFit){
						delete e.target._lazysizesParentFit;
					}
				});
			}
		}
	}, true);

	document.documentElement.addEventListener('lazybeforesizes', function(e){
		if(e.defaultPrevented || !e.target._lazybgset || e.detail.instance != lazySizes){return;}
		e.detail.width = proxyWidth(e.target._lazybgset);
	});
}));

!function(e,t){if(e){var a=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",a,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],t):e.lazySizes?a():e.addEventListener("lazyunveilread",a,!0)}}("undefined"!=typeof window?window:0,function(e,t,a){"use strict";var n;!function(){var e,t={blurUpClass:"ls-blur-up-img",blurUpLoadingClass:"ls-blur-up-is-loading",blurUpInviewClass:"ls-inview",blurUpLoadedClass:"ls-blur-up-loaded",blurUpLoadedOriginalClass:"ls-original-loaded"};for(e in n=a.cfg||{},t)e in n||(n[e]=t[e])}();var i=[].slice,r=/blur-up["']*\s*:\s*["']*(always|auto)/,l=/image\/(jpeg|png|gif|svg\+xml)/,s=function(t,n){var r;return(t?i.call(t.querySelectorAll("source, img")):[n]).forEach(function(t){if(!r){var n,i,s,o=t.getAttribute("data-lowsrc");!o||(i=(n=t).getAttribute("data-media")||n.getAttribute("media"),(s=n.getAttribute("type"))&&!l.test(s)||i&&!e.matchMedia(a.cfg.customMedia[i]||i).matches)||(r=o)}}),r};e.addEventListener("lazybeforeunveil",function(e){var n=e.detail;if(n.instance==a&&n.blurUp){var i=e.target,r=i.parentNode;"PICTURE"!=r.nodeName&&(r=null),function(e,n,i,r){var l,s=!1,o=!1,u="always"==r?0:Date.now(),d=0,c=(e||n).parentNode,f=function(){l&&a.rAF(function(){a.rC(n,a.cfg.blurUpLoadingClass);try{l.parentNode.removeChild(l)}catch(e){}l=null})},v=function(e){d++,o=e||o,e?f():d>1&&setTimeout(f,5e3)},g=function(){n.removeEventListener("load",g),n.removeEventListener("error",g),l&&a.rAF(function(){l&&a.aC(l,a.cfg.blurUpLoadedOriginalClass)}),a.fire(n,"blurUpLoaded"),"always"!=r&&(!s||Date.now()-u<66)?v(!0):v()};!function(){if(i){var u=function(e){s=!0,l||(l=e.target),a.rAF(function(){a.rC(n,a.cfg.blurUpLoadingClass),l&&a.aC(l,a.cfg.blurUpLoadedClass)}),l&&(l.removeEventListener("load",u),l.removeEventListener("error",u))};(l=t.createElement("img")).addEventListener("load",u),l.addEventListener("error",u),l.className=a.cfg.blurUpClass,l.cssText=n.cssText,l.src=i,l.alt="",l.setAttribute("aria-hidden","true"),c.insertBefore(l,(e||n).nextSibling),"always"!=r&&(l.style.visibility="hidden",a.rAF(function(){l&&setTimeout(function(){l&&a.rAF(function(){!o&&l&&(l.style.visibility="")})},a.cfg.blurupCacheDelay||33)}))}}(),n.addEventListener("load",g),n.addEventListener("error",g),a.aC(n,a.cfg.blurUpLoadingClass);var b=function(e){c==e.target&&(a.aC(l||n,a.cfg.blurUpInviewClass),v(),c.removeEventListener("lazybeforeunveil",b))};c.getAttribute("data-expand")||c.setAttribute("data-expand",-1),c.addEventListener("lazybeforeunveil",b),a.aC(c,a.cfg.lazyClass)}(r,i,s(r,i)||"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n.blurUp)}}),e.addEventListener("lazyunveilread",function(e){var t=e.detail;if(t.instance==a){var n=e.target,i=(getComputedStyle(n,null)||{fontFamily:""}).fontFamily.match(r);(i||n.getAttribute("data-lowsrc"))&&(t.blurUp=i&&i[1]||a.cfg.blurupMode||"always")}})});
(function(window, factory) {
	if(!window) {return;}
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if(typeof module == 'object' && module.exports){
		factory(require('lazysizes'));
	} else if (typeof define == 'function' && define.amd) {
		define(['lazysizes'], factory);
	} else if(window.lazySizes) {
		globalInstall();
	} else {
		window.addEventListener('lazyunveilread', globalInstall, true);
	}
}(typeof window != 'undefined' ?
	window : 0, function(window, document, lazySizes) {
	'use strict';

	var lazySizesCfg;

	(function(){
		var prop;

		var blurUpDefaults = {
			blurUpClass: 'ls-blur-up-img',
			blurUpLoadingClass: 'ls-blur-up-is-loading',
			blurUpInviewClass: 'ls-inview',
			blurUpLoadedClass: 'ls-blur-up-loaded',
			blurUpLoadedOriginalClass: 'ls-original-loaded'
		};

		lazySizesCfg = lazySizes.cfg || {};

		for(prop in blurUpDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = blurUpDefaults[prop];
			}
		}
	})();

	var slice = [].slice;
	var regBlurUp = /blur-up["']*\s*:\s*["']*(always|auto)/;
	var regType = /image\/(jpeg|png|gif|svg\+xml)/;
	var transSrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

	var matchesMedia = function (source) {
		var media = source.getAttribute('data-media') || source.getAttribute('media');
		var type = source.getAttribute('type');

		return (!type || regType.test(type)) && (!media || window.matchMedia(lazySizes.cfg.customMedia[media] || media).matches);
	};

	var getLowSrc = function (picture, img) {
		var matchingLowSrc;
		var sources = picture ? slice.call(picture.querySelectorAll('source, img')) : [img];

		sources.forEach(function (src) {
			if (matchingLowSrc) {return;}
			var lowSrc = src.getAttribute('data-lowsrc');

			if (lowSrc && matchesMedia(src)) {
				matchingLowSrc = lowSrc;
			}
		});

		return matchingLowSrc;
	};

	var createBlurup = function(picture, img, src, blurUp){
		var blurImg;
		var isBlurUpLoaded = false;
		var isForced = false;
		var start = blurUp == 'always' ? 0 : Date.now();
		var isState = 0;
		var parent = (picture || img).parentNode;

		var createBlurUpImg = function () {

			if(!src){return;}

			var onloadBlurUp = function(e){
				isBlurUpLoaded = true;

				if (!blurImg) {
					blurImg = e.target;
				}

				lazySizes.rAF(function () {
					lazySizes.rC(img, lazySizes.cfg.blurUpLoadingClass);
					if(blurImg) {
						lazySizes.aC(blurImg, lazySizes.cfg.blurUpLoadedClass);
					}
				});

				if(blurImg){
					blurImg.removeEventListener('load', onloadBlurUp);
					blurImg.removeEventListener('error', onloadBlurUp);
				}
			};

			blurImg = document.createElement('img');

			blurImg.addEventListener('load', onloadBlurUp);
			blurImg.addEventListener('error', onloadBlurUp);

			blurImg.className = lazySizes.cfg.blurUpClass;
			blurImg.cssText = img.cssText;
			blurImg.src = src;
			blurImg.alt = '';
			blurImg.setAttribute('aria-hidden', 'true');

			parent.insertBefore(blurImg, (picture || img).nextSibling);

			if(blurUp != 'always'){
				blurImg.style.visibility = 'hidden';

				lazySizes.rAF(function () {
					if (blurImg) {
						setTimeout(function(){
							if (blurImg) {
								lazySizes.rAF(function () {
									if(!isForced && blurImg){
										blurImg.style.visibility = '';
									}
								});
							}
						}, lazySizes.cfg.blurupCacheDelay || 33);
					}
				});
			}
		};

		var remove = function () {
			if(blurImg){
				lazySizes.rAF(function() {
					lazySizes.rC(img, lazySizes.cfg.blurUpLoadingClass);
					try {
						blurImg.parentNode.removeChild(blurImg);
					} catch(er){}
					blurImg = null;
				});
			}
		};

		var setStateUp = function(force){
			isState++;

			isForced = force || isForced;

			if(force){
				remove();
			} else if(isState > 1) {
				setTimeout(remove, 5000);
			}
		};

		var onload = function() {
			img.removeEventListener('load', onload);
			img.removeEventListener('error', onload);

			if(blurImg){
				lazySizes.rAF(function(){
					if(blurImg) {
						lazySizes.aC(blurImg, lazySizes.cfg.blurUpLoadedOriginalClass);
					}
				});
			}

			lazySizes.fire(img, 'blurUpLoaded');

			if(blurUp != 'always' && (!isBlurUpLoaded || Date.now() - start < 66)){
				setStateUp(true);
			} else {
				setStateUp();
			}
		};

		createBlurUpImg();

		img.addEventListener('load', onload);
		img.addEventListener('error', onload);

		lazySizes.aC(img, lazySizes.cfg.blurUpLoadingClass);

		var parentUnveil = function (e) {
			if(parent != e.target){
				return;
			}

			lazySizes.aC(blurImg || img, lazySizes.cfg.blurUpInviewClass);

			setStateUp();

			parent.removeEventListener('lazybeforeunveil', parentUnveil);
		};

		if(!parent.getAttribute('data-expand')){
			parent.setAttribute('data-expand', -1);
		}

		parent.addEventListener('lazybeforeunveil', parentUnveil);

		lazySizes.aC(parent, lazySizes.cfg.lazyClass);

	};

	window.addEventListener('lazybeforeunveil', function (e) {
		var detail = e.detail;

		if(detail.instance != lazySizes || !detail.blurUp){return;}

		var img = e.target;
		var picture = img.parentNode;

		if(picture.nodeName != 'PICTURE'){
			picture = null;
		}

		createBlurup(picture, img, getLowSrc(picture, img) || transSrc, detail.blurUp);
	});

	window.addEventListener('lazyunveilread', function (e) {
		var detail = e.detail;

		if(detail.instance != lazySizes){return;}

		var img = e.target;
		var match = (getComputedStyle(img, null) || {fontFamily: ''}).fontFamily.match(regBlurUp);

		if(!match && !img.getAttribute('data-lowsrc')){return;}

		detail.blurUp = match && match[1] || lazySizes.cfg.blurupMode || 'always';
	});
}));

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VueScrollBox",[],e):"object"==typeof exports?exports.VueScrollBox=e():t.VueScrollBox=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=5)}([function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function i(t){var e,n,r=document.querySelector("style["+D+'~="'+t.id+'"]');if(r){if(g)return f;r.parentNode.removeChild(r)}if(v){var i=h++;r=p||(p=o()),e=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),A.ssrId&&t.setAttribute(D,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(9),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,h=0,g=!1,f=function(){},A=null,D="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){g=n,A=o||{};var i=l(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=u[a.id];s.refs--,n.push(s)}e?(i=l(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,n,r,o,i){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var l="function"==typeof s?s.options:s;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o);var u;if(i?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=u):r&&(u=r),u){var d=l.functional,p=d?l.render:l.beforeCreate;d?(l._injectStyles=u,l.render=function(t,e){return u.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,u):[u]}return{esModule:a,exports:s,options:l}}},function(t,e,n){"use strict";var r=n(10),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a={name:"scroll-box",components:{returnTopButton:r.a},props:{dragDistance:{type:Number,default:150},enableDragDown:{type:Boolean,default:!1},enableDragUp:{type:Boolean,default:!1},enableTopButton:{type:Boolean,default:!0}},data:function(){return{scrollBox:null,scrollBoxHeight:0,scrollContent:null,y:0,currentY:null,dragUpDistance:0,dragDownDistance:0,dragDownTrigger:!1,loading:!1,reloading:!1}},methods:{boxScrolling:function(){var t=this.scrollBox.scrollTop;(this.enableDragDown||this.enableDragUp)&&(this.y=t),this.$emit("box-scroll",{y:t})},markDragStart:function(t){this.reloading||this.loading||("mousedown"===t.type&&t.preventDefault(),(this.enableDragDown||this.enableDragUp)&&(this.isBottom||this.isTop)&&(this.currentY="touchstart"===t.type?t.touches[0].pageY:t.pageY,this.scrollContent.style.transition="unset"))},markDragEnd:function(){this.reloading||this.loading||(this.currentY=null,(this.dragDownDistance||this.dragUpDistance)&&(this.dragDownDistance>=this.triggerDistance&&(this.$emit("pull-down"),this.reloading=!0),this.dragUpDistance>=this.triggerDistance&&(this.$emit("pull-up"),this.loading=!0),this.reloading||this.loading?this.reboundDrag():this.scrollUpdate()))},startTouchDrag:function(t){if(!this.reloading&&!this.loading&&(this.isBottom||this.isTop)&&("mousemove"===t.type&&t.preventDefault(),null!==this.currentY)){var e="touchmove"===t.type?t.touches[0].pageY:t.pageY,n=e-this.currentY;n*=this.dragDistanceRatio,n>0&&this.enableDragDown&&this.isTop&&this.dragDown(n),n<0&&this.enableDragUp&&this.isBottom&&this.dragUp(n)}},doTransform:function(t){this.scrollContent.style.transform="translateY("+t+"px)"},dragDown:function(t){this.dragDownDistance=t>this.dragDistance?this.dragDistance:t,this.doTransform(this.dragDownDistance)},dragUp:function(t){this.dragUpDistance=t<-this.dragDistance?this.dragDistance:-t,this.doTransform(-this.dragUpDistance)},reboundDrag:function(){this.scrollContent.style.transition="transform .2s";var t=this.halfDistance;this.dragDownDistance&&(this.dragDownDistance=t,this.scrollContent.style.transform="translateY("+t+"px)"),this.dragUpDistance&&(this.dragUpDistance=t,this.scrollContent.style.transform="translateY("+-t+"px)")},scrollUpdate:function(t){var e=this;this.loading&&(t&&this.$nextTick(function(){e.scrollContent.style.transition="unset",e.scrollContent.style.transform="",e.scrollBox.scroll({top:e.y+e.halfDistance})}),this.loading=!1,this.dragUpDistance=0),this.reloading&&(this.reloading=!1,this.dragDownDistance=0),this.scrollContent.style.transition="",this.scrollContent.style.transform=""},scrollTo:function(t,e){var n=void 0===t?"undefined":o(t),r=0;switch(n){case"number":r=t;break;case"string":var i=this.scrollContent.querySelector(t);r=i?i.offsetTop:this.y;break;case"object":r=t instanceof HTMLElement?t.offsetTop:this.y;break;default:r=this.y}this.scrollBox.scroll({top:r-(e||0),behavior:"smooth"})}},computed:{dragDistanceRatio:function(){return this.dragDistance/this.scrollBoxHeight*1.618},halfDistance:function(){return this.dragDistance/2},isTop:function(){return 0===this.y},isBottom:function(){return this.y+this.scrollBoxHeight===this.scrollContent.clientHeight},triggerDistance:function(){return.618*this.dragDistance},beforeStyle:function(){var t=[];return t.push("transition: unset"),t.push("height:"+this.dragDownDistance+"px"),t.push("opacity: "+.618*this.dragDownDistance/this.triggerDistance),t.join(";")+";"},afterStyle:function(){var t=[];return t.push("transition: unset"),t.push("height:"+this.dragUpDistance+"px"),t.push("opacity: "+.618*this.dragUpDistance/this.triggerDistance),t.join(";")+";"}},watch:{},mounted:function(){this.scrollBox=this.$refs.scrollBox,this.scrollBoxHeight=this.scrollBox.clientHeight,this.scrollContent=this.$refs.scrollContent}}},function(t,e,n){"use strict";e.a={name:"return-top-button",props:{target:String,scrollTop:{type:Number,default:300},scrollTo:{type:Number,default:0}},data:function(){return{showReturnTopBtn:!1,scrollBox:null}},methods:{toggleReturnTopBtn:function(){this.showReturnTopBtn=this.scrollBox.scrollTop>this.scrollTop},returnTop:function(){this.scrollBox.scroll({top:this.scrollTo,behavior:"smooth"})}},mounted:function(){this.scrollBox=this.target?document.querySelector(this.target):this.$refs.returnTopButton.parentNode,this.scrollBox.addEventListener("scroll",this.toggleReturnTopBtn)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),o={install:function(t){t.component(r.a.name,r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,n){"use strict";function r(t){n(7)}var o=n(3),i=n(14),a=n(2),s=r,c=a(o.a,i.a,!1,s,"data-v-77a4994c",null);e.a=c.exports},function(t,e,n){var r=n(8);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("e14deefc",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,".scroll-box[data-v-77a4994c]{overflow:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.scroll-content-wrapper[data-v-77a4994c]{position:relative;width:100%;min-height:100%;height:auto;overflow:hidden;will-change:transform;transform:translateY(0);transition:transform .3s;z-index:2}.after[data-v-77a4994c],.before[data-v-77a4994c]{position:absolute;z-index:1;width:100%;height:100%;left:0;display:flex;justify-content:center;align-items:center;opacity:0;background-color:#e3fbe5;will-change:auto;overflow:hidden;transform:translateZ(0);transition:color .3s,opacity .3s cubic-bezier(.11,.49,.61,.99),height .3s cubic-bezier(.11,.49,.61,.99)}.after .drag-up-text[data-v-77a4994c],.before .drag-down-text[data-v-77a4994c]{transition:opacity .3s;opacity:0;font-size:16px}.after.release-and-trigger[data-v-77a4994c],.before.release-and-trigger[data-v-77a4994c]{color:#4dc247}.after.release-and-trigger .drag-up-text[data-v-77a4994c],.before.release-and-trigger .drag-down-text[data-v-77a4994c]{opacity:1}.after.holding[data-v-77a4994c],.before.holding[data-v-77a4994c]{background:url(data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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) no-repeat 50%;background-size:auto 30px}.after.holding .drag-up-text[data-v-77a4994c],.before.holding .drag-down-text[data-v-77a4994c]{opacity:0}.after[data-v-77a4994c]{bottom:0}.before[data-v-77a4994c]{top:0}",""])},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s=i[1],c=i[2],l=i[3],u={id:t+":"+o,css:s,media:c,sourceMap:l};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},function(t,e,n){"use strict";function r(t){n(11)}var o=n(4),i=n(13),a=n(2),s=r,c=a(o.a,i.a,!1,s,"data-v-584ac642",null);e.a=c.exports},function(t,e,n){var r=n(12);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("f6b8f442",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,".return-top[data-v-584ac642]{position:fixed;display:block;bottom:20px;right:20px;opacity:0;border-radius:50%;width:42px;height:42px;pointer-events:none;transform:scale(0);transition:.2s;background:#272727 url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjU2LjI1IiBoZWlnaHQ9IjI1NiI+PHBhdGggZD0iTTU1My41NjQgOTc2LjAyN1YxNDguMzQzbDM5OS40NiAzOTkuNDM2YzE2LjI0MiAxNi4yNDEgNDIuNTUzIDE2LjI0MSA1OC43OTQgMCAxNi4yNDItMTYuMjQyIDE2LjI0Mi00Mi41NTMgMC01OC43OTRMNTQxLjQwNyAxOC42Yy0zLjg2MS0zLjg2Ni04LjQ5My02Ljk0My0xMy42MjQtOS4wNTYtLjIwNi0uMDg1LS40Mi0uMTEzLS42MjYtLjE5NS00LjcxLTEuODUzLTkuODAyLTIuOTU0LTE1LjE3MS0yLjk1NHMtMTAuNDU5IDEuMTAxLTE1LjE3MSAyLjk1NGMtLjIwOC4wODEtLjQyLjExLS42MjYuMTk1LTUuMTMxIDIuMTEzLTkuNzYzIDUuMTkxLTEzLjYyNCA5LjA1NkwxMi4xODEgNDg4Ljk4NUM0LjA2IDQ5Ny4xMDYgMCA1MDcuNzQ0IDAgNTE4LjM4MnM0LjA2IDIxLjI3NiAxMi4xODEgMjkuMzk3YzE2LjI0MiAxNi4yNDEgNDIuNTUzIDE2LjI0MSA1OC43OTQgMGwzOTkuNDMzLTM5OS40MzN2ODI3LjY4MWMwIDIyLjk2OCAxOC42MjQgNDEuNTc4IDQxLjU3OCA0MS41NzhzNDEuNTc4LTE4LjYxIDQxLjU3OC00MS41Nzh6IiBmaWxsPSIjZmZmIi8+PC9zdmc+) no-repeat 50%;background-size:50%;z-index:10}.return-top.active[data-v-584ac642]{opacity:1;transform:scale(1);pointer-events:auto}",""])},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{ref:"returnTopButton",staticClass:"return-top",class:{active:t.showReturnTopBtn},attrs:{href:"javascript:"},on:{click:t.returnTop}})},o=[],i={render:r,staticRenderFns:o};e.a=i},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scrollBox",staticClass:"scroll-box",on:{scroll:t.boxScrolling}},[t.enableDragDown?n("div",{staticClass:"before",class:{"release-and-trigger":t.dragDownDistance>t.triggerDistance,"holding before-holding":t.reloading},style:t.beforeStyle},[t._t("dragDownArea",[n("span",{staticClass:"drag-down-text"},[t._v("释放刷新")])])],2):t._e(),t._v(" "),n("div",{ref:"scrollContent",staticClass:"scroll-content-wrapper",class:{holding:t.reloading||t.loading},on:{touchmove:function(e){t.startTouchDrag(e)},touchstart:function(e){t.markDragStart(e)},touchend:t.markDragEnd,mousemove:function(e){t.startTouchDrag(e)},mousedown:function(e){t.markDragStart(e)},mouseup:t.markDragEnd,mouseleave:t.markDragEnd}},[t._t("default")],2),t._v(" "),t.enableDragUp?n("div",{staticClass:"after",class:{"release-and-trigger":t.dragUpDistance>t.triggerDistance,"holding after-holding":t.loading},style:t.afterStyle},[t._t("dragUpArea",[n("span",{staticClass:"drag-up-text"},[t._v("释放加载更多")])])],2):t._e(),t._v(" "),t.enableTopButton?n("return-top-button"):t._e()],1)},o=[],i={render:r,staticRenderFns:o};e.a=i}])});
//# sourceMappingURL=vue-scroll-box.js.map
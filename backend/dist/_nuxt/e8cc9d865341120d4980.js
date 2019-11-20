/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{172:function(t,e,r){"use strict";r.r(e);r(37);function n(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=r(24);function c(t,e){return!e||"object"!==Object(o.a)(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,p){return(l=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}var v=r(1),d="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function h(t,e,r){(r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)}))}var y={__proto__:[]}instanceof Array;var _=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function O(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach((function(t){if("constructor"!==t)if(_.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){var e;return(e={})[t]=n.value,e}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach((function(r){"_"!==r.charAt(0)&&Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})}))};var data=new e;e.prototype._init=r;var n={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(n[t]=data[t])})),n}(this,t)}});var n=t.__decorators__;n&&(n.forEach((function(t){return t(e)})),delete t.__decorators__);var o,c,f=Object.getPrototypeOf(t.prototype),l=f instanceof v.a?f.constructor:v.a,O=l.extend(e);return function(t,e,r){Object.getOwnPropertyNames(e).forEach((function(n){if(!m[n]){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var c,f,l=Object.getOwnPropertyDescriptor(e,n);if(!y){if("cid"===n)return;var v=Object.getOwnPropertyDescriptor(r,n);if(c=l.value,f=typeof c,null!=c&&("object"===f||"function"===f)&&v&&v.value===l.value)return}0,Object.defineProperty(t,n,l)}}}))}(O,t,l),d&&(h(o=O,c=t),Object.getOwnPropertyNames(c.prototype).forEach((function(t){h(o.prototype,c.prototype,t)})),Object.getOwnPropertyNames(c).forEach((function(t){h(o,c,t)}))),O}var m={prototype:!0,arguments:!0,callee:!0,caller:!0};function w(t){return"function"==typeof t?O(t):function(e){return O(e,t)}}w.registerHooks=function(t){_.push.apply(_,t)};var j=w;"undefined"!=typeof Reflect&&Reflect.getMetadata;var P=r(35),R=r.n(P),x=function(t,e,r,desc){var n,c=arguments.length,f=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(f=(c<3?n(f):c>3?n(e,r,f):n(e,r))||f);return c>3&&f&&Object.defineProperty(e,r,f),f},E=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=c(this,f(e).apply(this,arguments))).time="",t}var r,o,v;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),r=e,(o=[{key:"fetchData",value:function(){var t;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(R.a.get("/api/time"));case 2:(t=e.sent).status<400?this.time=t.data.time:console.error("".concat("/api/time",", ").concat(t.status,", ").concat(t.statusText));case 4:case"end":return e.stop()}}),null,this)}},{key:"mounted",value:function(){this.fetchData()}}])&&n(r.prototype,o),v&&n(r,v),e}(v.a),k=E=x([j({})],E),M=r(23),component=Object(M.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h1",[t._v("Flask + Vue + Nuxt")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("The time on the server is "+t._s(t.time)+".")]),t._v(" "),r("p",[r("nuxt-link",{attrs:{to:"/about"}},[t._v("\n        About\n      ")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      This is a simple project to learn how to get\n      "),e("a",{attrs:{href:"https://flask.palletsprojects.com/"}},[this._v("Flask")]),this._v(", "),e("a",{attrs:{href:"https://vuejs.org/"}},[this._v("Vue.js")]),this._v(", and "),e("a",{attrs:{href:"https://nuxtjs.org/"}},[this._v("NuxtJS")]),this._v(" to play nicely together.\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{staticStyle:{height:"240px"},attrs:{src:"coffee-cup.png"}})])}],!1,null,null,null);e.default=component.exports}}]);
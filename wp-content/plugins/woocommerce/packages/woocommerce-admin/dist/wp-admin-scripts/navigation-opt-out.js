this.wc=this.wc||{},this.wc.navigationOptOut=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=604)}({0:function(t,n){t.exports=window.wp.element},10:function(t,n){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},102:function(t,n,e){var r=e(52),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},103:function(t,n,e){var r=e(36),o=e(74),i=e(89),u=e(19);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},106:function(t,n,e){var r=e(25),o=e(27),i=e(19),u=e(63);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=u(n),c=r.length,f=0;c>f;)o.f(t,e=r[f++],n[e]);return t}},109:function(t,n,e){var r=e(22),o=e(103),i=e(45),u=e(27);t.exports=function(t,n){for(var e=o(n),c=u.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||c(t,s,f(n,s))}}},110:function(t,n,e){var r=e(8),o=e(65),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},12:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},13:function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},14:function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},16:function(t,n,e){var r=e(177);t.exports=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}},17:function(t,n,e){var r=e(62),o=e(10);t.exports=function(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(t):n}},174:function(t,n,e){var r=e(26),o=e(36),i=e(61),u=e(19),c=e(23),f=e(69),a=e(206),s=e(12),p=o("Reflect","construct"),l=s((function(){function t(){}return!(p((function(){}),[],t)instanceof t)})),v=!s((function(){p((function(){}))})),y=l||v;r({target:"Reflect",stat:!0,forced:y,sham:y},{construct:function(t,n){i(t),u(n);var e=arguments.length<3?t:i(arguments[2]);if(v&&!l)return p(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(a.apply(t,r))}var o=e.prototype,s=f(c(o)?o:Object.prototype),y=Function.apply.call(t,s,n);return c(y)?y:s}})},177:function(t,n){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,r)}t.exports=e},19:function(t,n,e){var r=e(23);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},2:function(t,n){t.exports=window.wp.i18n},206:function(t,n,e){"use strict";var r=e(61),o=e(23),i=[].slice,u={},c=function(t,n,e){if(!(n in u)){for(var r=[],o=0;o<n;o++)r[o]="a["+o+"]";u[n]=Function("C,a","return new C("+r.join(",")+")")}return u[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=i.call(arguments,1),u=function(){var r=e.concat(i.call(arguments));return this instanceof u?c(n,r.length,r):n.apply(t,r)};return o(n.prototype)&&(u.prototype=n.prototype),u}},22:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},23:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},25:function(t,n,e){var r=e(12);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},26:function(t,n,e){var r=e(8),o=e(45).f,i=e(31),u=e(37),c=e(54),f=e(109),a=e(82);t.exports=function(t,n){var e,s,p,l,v,y=t.target,d=t.global,b=t.stat;if(e=d?r:b?r[y]||c(y,{}):(r[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!a(d?s:y+(b?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(e,s,l,t)}}},27:function(t,n,e){var r=e(25),o=e(73),i=e(19),u=e(53),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},31:function(t,n,e){var r=e(25),o=e(27),i=e(46);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},35:function(t,n,e){var r=e(81),o=e(40);t.exports=function(t){return r(o(t))}},36:function(t,n,e){var r=e(94),o=e(8),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},37:function(t,n,e){var r=e(8),o=e(31),i=e(22),u=e(54),c=e(65),f=e(50),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,e,c){var f,a=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(f=s(e)).source||(f.source=p.join("string"==typeof n?n:""))),t!==r?(a?!v&&t[n]&&(l=!0):delete t[n],l?t[n]=e:o(t,n,e)):l?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},40:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},41:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},43:function(t,n,e){var r=e(52),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},45:function(t,n,e){var r=e(25),o=e(84),i=e(46),u=e(35),c=e(53),f=e(22),a=e(73),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},46:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},47:function(t,n){t.exports={}},5:function(t,n){t.exports=window.wp.components},50:function(t,n,e){var r,o,i,u=e(110),c=e(8),f=e(23),a=e(31),s=e(22),p=e(55),l=e(60),v=e(47),y=c.WeakMap;if(u){var d=p.state||(p.state=new y),b=d.get,h=d.has,m=d.set;r=function(t,n){return n.facade=t,m.call(d,t,n),n},o=function(t){return b.call(d,t)||{}},i=function(t){return h.call(d,t)}}else{var w=l("state");v[w]=!0,r=function(t,n){return n.facade=t,a(t,w,n),n},o=function(t){return s(t,w)?t[w]:{}},i=function(t){return s(t,w)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},52:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},53:function(t,n,e){var r=e(23);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},54:function(t,n,e){var r=e(8),o=e(31);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},55:function(t,n,e){var r=e(8),o=e(54),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},56:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},59:function(t,n){t.exports=!1},591:function(t,n,e){},60:function(t,n,e){var r=e(70),o=e(68),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},604:function(t,n,e){"use strict";e.r(n);var r=e(0),o=(e(174),e(13)),i=e.n(o),u=e(14),c=e.n(u),f=e(16),a=e.n(f),s=e(17),p=e.n(s),l=e(7),v=e.n(l),y=e(2),d=e(5);function b(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=v()(t);if(n){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p()(this,e)}}var h=function(t){a()(e,t);var n=b(e);function e(t){var r;return i()(this,e),(r=n.call(this,t)).state={isModalOpen:!0},r}return c()(e,[{key:"render",value:function(){var t=this;return this.state.isModalOpen&&window.surveyData&&window.surveyData.url?Object(r.createElement)(d.Modal,{title:Object(y.__)("Help us improve",'woocommerce'),onRequestClose:function(){return t.setState({isModalOpen:!1})},className:"woocommerce-navigation-opt-out-modal"},Object(r.createElement)("p",null,Object(y.__)("Take this 2-minute survey to share why you're opting out of the new navigation",'woocommerce')),Object(r.createElement)("div",{className:"woocommerce-navigation-opt-out-modal__actions"},Object(r.createElement)(d.Button,{isDefault:!0,onClick:function(){return t.setState({isModalOpen:!1})}},Object(y.__)("No thanks",'woocommerce')),Object(r.createElement)(d.Button,{isPrimary:!0,target:"_blank",href:window.surveyData.url,onClick:function(){return t.setState({isModalOpen:!1})}},Object(y.__)("Share feedback",'woocommerce')))):null}}]),e}(r.Component),m=(e(591),document.createElement("div"));m.setAttribute("id","navigation-opt-out-root"),Object(r.render)(Object(r.createElement)(h,null),document.body.appendChild(m))},61:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},62:function(t,n){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},63:function(t,n,e){var r=e(75),o=e(56);t.exports=Object.keys||function(t){return r(t,o)}},64:function(t,n,e){var r=e(8),o=e(23),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},65:function(t,n,e){var r=e(55),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},68:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},69:function(t,n,e){var r,o=e(19),i=e(106),u=e(56),c=e(47),f=e(97),a=e(64),s=e(60),p=s("IE_PROTO"),l=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;y=r?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var e=u.length;e--;)delete y.prototype[u[e]];return y()};c[p]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=o(t),e=new l,l.prototype=null,e[p]=t):e=y(),void 0===n?e:i(e,n)}},7:function(t,n){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},70:function(t,n,e){var r=e(59),o=e(55);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},73:function(t,n,e){var r=e(25),o=e(12),i=e(64);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},74:function(t,n,e){var r=e(75),o=e(56).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},75:function(t,n,e){var r=e(22),o=e(35),i=e(85).indexOf,u=e(47);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(u,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},8:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(88))},81:function(t,n,e){var r=e(12),o=e(41),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},82:function(t,n,e){var r=e(12),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},84:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},85:function(t,n,e){var r=e(35),o=e(43),i=e(102),u=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},88:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},89:function(t,n){n.f=Object.getOwnPropertySymbols},94:function(t,n,e){var r=e(8);t.exports=r},97:function(t,n,e){var r=e(36);t.exports=r("document","documentElement")}});
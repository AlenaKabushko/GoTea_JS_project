!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequired7c6=o),o.register("ke5Oc",(function(e,t){"use strict";var n=o("c4C4W"),r=o("lGmLA"),i=o("9jbh3"),a=o("knWMA");var s=function e(t){var o=new i(t),s=r(i.prototype.request,o);return n.extend(s,i.prototype,o),n.extend(s,o),s.create=function(n){return e(a(t,n))},s}(o("c74ni"));s.Axios=i,s.CanceledError=o("dW1zJ"),s.CancelToken=o("77MZz"),s.isCancel=o("lXDKh"),s.VERSION=o("kLR29").version,s.toFormData=o("12Kat"),s.AxiosError=o("5TB86"),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=o("9BdDr"),s.isAxiosError=o("kv87N"),e.exports=s,e.exports.default=s})),o.register("c4C4W",(function(e,t){"use strict";var n,r=o("lGmLA"),i=Object.prototype.toString,a=(n=Object.create(null),function(e){var t=i.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return a(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var l=s("ArrayBuffer");function h(e){return null!==e&&"object"==typeof e}function f(e){if("object"!==a(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var d=s("Date"),p=s("File"),v=s("Blob"),y=s("FileList");function m(e){return"[object Function]"===i.call(e)}var g=s("URLSearchParams");function _(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var k,b=(k="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return k&&e instanceof k});e.exports={isArray:u,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||m(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:h,isPlainObject:f,isUndefined:c,isDate:d,isFile:p,isBlob:v,isFunction:m,isStream:function(e){return h(e)&&m(e.pipe)},isURLSearchParams:g,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:_,merge:function e(){var t={};function n(n,r){f(t[r])&&f(n)?t[r]=e(t[r],n):f(n)?t[r]=e({},n):u(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)_(arguments[r],n);return t},extend:function(e,t,n){return _(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,i,o,a={};t=t||{};do{for(i=(r=Object.getOwnPropertyNames(e)).length;i-- >0;)a[o=r[i]]||(t[o]=e[o],a[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:s,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:b,isFileList:y}})),o.register("lGmLA",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}})),o.register("9jbh3",(function(e,t){"use strict";var n=o("c4C4W"),r=o("6d5Pb"),i=o("JRZh2"),a=o("k04r0"),s=o("knWMA"),u=o("gYMA1"),c=o("9SeBc"),l=c.validators;function h(e){this.defaults=e,this.interceptors={request:new i,response:new i}}h.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var h=[a,void 0];for(Array.prototype.unshift.apply(h,r),h=h.concat(u),o=Promise.resolve(t);h.length;)o=o.then(h.shift(),h.shift());return o}for(var f=t;r.length;){var d=r.shift(),p=r.shift();try{f=d(f)}catch(e){p(e);break}}try{o=a(f)}catch(e){return Promise.reject(e)}for(;u.length;)o=o.then(u.shift(),u.shift());return o},h.prototype.getUri=function(e){e=s(this.defaults,e);var t=u(e.baseURL,e.url);return r(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){h.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(s(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)})),e.exports=h})),o.register("6d5Pb",(function(e,t){"use strict";var n=o("c4C4W");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var o;if(i)o=i(t);else if(n.isURLSearchParams(t))o=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}})),o.register("JRZh2",(function(e,t){"use strict";var n=o("c4C4W");function r(){this.handlers=[]}r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r})),o.register("k04r0",(function(e,t){"use strict";var n=o("c4C4W"),r=o("jrAxF"),i=o("lXDKh"),a=o("c74ni"),s=o("dW1zJ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("jrAxF",(function(e,t){"use strict";var n=o("c4C4W"),r=o("c74ni");e.exports=function(e,t,i){var o=this||r;return n.forEach(i,(function(n){e=n.call(o,e,t)})),e}})),o.register("c74ni",(function(e,t){"use strict";var n=o("6qd2L"),r=o("c4C4W"),i=o("h8JMh"),a=o("5TB86"),s=o("gWbUy"),u=o("12Kat"),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var h,f={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(h=o("btSY7")),h),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,o=r.isObject(e),a=t&&t["Content-Type"];if((n=r.isFileList(e))||o&&"multipart/form-data"===a){var s=this.env&&this.env.FormData;return u(n?{"files[]":e}:e,s&&new s)}return o||"application/json"===a?(l(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw a.from(e,a.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("beknR")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){f.headers[e]=r.merge(c)})),e.exports=f})),o.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("h8JMh",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e,t){n.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}})),o.register("5TB86",(function(e,t){"use strict";var n=o("c4C4W");function r(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}n.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=r.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){a[e]={value:e}})),Object.defineProperties(r,a),Object.defineProperty(i,"isAxiosError",{value:!0}),r.from=function(e,t,o,a,s,u){var c=Object.create(i);return n.toFlatObject(e,c,(function(e){return e!==Error.prototype})),r.call(c,e.message,t,o,a,s),c.name=e.name,u&&Object.assign(c,u),c},e.exports=r})),o.register("gWbUy",(function(e,t){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("12Kat",(function(e,t){"use strict";var n=o("3aNd6").Buffer,r=o("c4C4W");e.exports=function(e,t){t=t||new FormData;var i=[];function o(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,a){if(r.isPlainObject(n)||r.isArray(n)){if(-1!==i.indexOf(n))throw Error("Circular reference detected in "+a);i.push(n),r.forEach(n,(function(n,i){if(!r.isUndefined(n)){var s,u=a?a+"."+i:i;if(n&&!a&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(s=r.toArray(n)))return void s.forEach((function(e){!r.isUndefined(e)&&t.append(u,o(e))}));e(n,u)}})),i.pop()}else t.append(a,o(n))}(e),t}})),o.register("3aNd6",(function(n,r){t(n.exports,"Buffer",(function(){return i}),(function(e){return i=e})),t(n.exports,"INSPECT_MAX_BYTES",(function(){return a}),(function(e){return a=e}));var i,a,s=o("ds8z5"),u=o("8MBJY"),c=o("a2hTj"),l=o("eYQtU"),h=o("l5bVx"),f=o("2MbLg"),d=o("5d11t"),p=o("7rddL"),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=g,a=50;var y=2147483647;function m(e){if(e>y)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,g.prototype),t}function g(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return _(e,t,n)}function _(t,n,r){if("string"==typeof t)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!g.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var n=0|T(e,t),r=m(n),i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(t,n);if(ArrayBuffer.isView(t))return function(e){if(oe(e,Uint8Array)){var t=new Uint8Array(e);return I(t.buffer,t.byteOffset,t.byteLength)}return w(e)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===t?"undefined":e(h)(t)));if(oe(t,ArrayBuffer)||t&&oe(t.buffer,ArrayBuffer))return I(t,n,r);if("undefined"!=typeof SharedArrayBuffer&&(oe(t,SharedArrayBuffer)||t&&oe(t.buffer,SharedArrayBuffer)))return I(t,n,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return g.from(i,n,r);var o=function(e){if(g.isBuffer(e)){var t=0|E(e.length),n=m(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||ae(e.length)?m(0):w(e);if("Buffer"===e.type&&Array.isArray(e.data))return w(e.data)}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return g.from(t[Symbol.toPrimitive]("string"),n,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===t?"undefined":e(h)(t)))}function k(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function b(e){return k(e),m(e<0?0:0|E(e))}function w(e){for(var t=e.length<0?0:0|E(e.length),n=m(t),r=0;r<t;r+=1)n[r]=255&e[r];return n}function I(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,g.prototype),r}function E(e){if(e>=y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+y.toString(16)+" bytes");return 0|e}function T(t,n){if(g.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||oe(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===t?"undefined":e(h)(t)));var r=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;for(var o=!1;;)switch(n){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return ne(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return re(t).length;default:if(o)return i?-1:ne(t).length;n=(""+n).toLowerCase(),o=!0}}function C(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return B(this,t,n);case"utf8":case"utf-8":return M(this,t,n);case"ascii":return j(this,t,n);case"latin1":case"binary":return F(this,t,n);case"base64":return D(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return q(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function x(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function S(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),ae(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=g.from(t,r)),g.isBuffer(t))return 0===t.length?-1:R(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):R(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function R(e,t,n,r,i){var o,a=1,s=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;a=2,s/=2,u/=2,n/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var l=-1;for(o=n;o<s;o++)if(c(e,o)===c(t,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===u)return l*a}else-1!==l&&(o-=o-l),l=-1}else for(n+u>s&&(n=s-u),o=n;o>=0;o--){for(var h=!0,f=0;f<u;f++)if(c(e,o+f)!==c(t,f)){h=!1;break}if(h)return o}return-1}function O(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var o,a=t.length;for(r>a/2&&(r=a/2),o=0;o<r;++o){var s=parseInt(t.substr(2*o,2),16);if(ae(s))return o;e[n+o]=s}return o}function N(e,t,n,r){return ie(ne(t,e.length-n),e,n,r)}function P(e,t,n,r){return ie(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function A(e,t,n,r){return ie(re(t),e,n,r)}function L(e,t,n,r){return ie(function(e,t){for(var n,r,i,o=[],a=0;a<e.length&&!((t-=2)<0);++a)r=(n=e.charCodeAt(a))>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function D(e,t,n){return 0===t&&n===e.length?d.fromByteArray(e):d.fromByteArray(e.slice(t,n))}function M(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var o=e[i],a=null,s=o>239?4:o>223?3:o>191?2:1;if(i+s<=n){var u=void 0,c=void 0,l=void 0,h=void 0;switch(s){case 1:o<128&&(a=o);break;case 2:128==(192&(u=e[i+1]))&&(h=(31&o)<<6|63&u)>127&&(a=h);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(h=(15&o)<<12|(63&u)<<6|63&c)>2047&&(h<55296||h>57343)&&(a=h);break;case 4:u=e[i+1],c=e[i+2],l=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&l)&&(h=(15&o)<<18|(63&u)<<12|(63&c)<<6|63&l)>65535&&h<1114112&&(a=h)}}null===a?(a=65533,s=1):a>65535&&(a-=65536,r.push(a>>>10&1023|55296),a=56320|1023&a),r.push(a),i+=s}return function(e){var t=e.length;if(t<=U)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=U));return n}(r)}g.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),g.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.buffer}}),Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.byteOffset}}),g.poolSize=8192,g.from=function(e,t,n){return _(e,t,n)},Object.setPrototypeOf(g.prototype,Uint8Array.prototype),Object.setPrototypeOf(g,Uint8Array),g.alloc=function(e,t,n){return function(e,t,n){return k(e),e<=0?m(e):void 0!==t?"string"==typeof n?m(e).fill(t,n):m(e).fill(t):m(e)}(e,t,n)},g.allocUnsafe=function(e){return b(e)},g.allocUnsafeSlow=function(e){return b(e)},g.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==g.prototype},g.compare=function(e,t){if(oe(e,Uint8Array)&&(e=g.from(e,e.offset,e.byteLength)),oe(t,Uint8Array)&&(t=g.from(t,t.offset,t.byteLength)),!g.isBuffer(e)||!g.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},g.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},g.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return g.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=g.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var o=e[n];if(oe(o,Uint8Array))i+o.length>r.length?(g.isBuffer(o)||(o=g.from(o)),o.copy(r,i)):Uint8Array.prototype.set.call(r,o,i);else{if(!g.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,i)}i+=o.length}return r},g.byteLength=T,g.prototype._isBuffer=!0,g.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)x(this,t,t+1);return this},g.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)x(this,t,t+3),x(this,t+1,t+2);return this},g.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)x(this,t,t+7),x(this,t+1,t+6),x(this,t+2,t+5),x(this,t+3,t+4);return this},g.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?M(this,0,e):C.apply(this,arguments)},g.prototype.toLocaleString=g.prototype.toString,g.prototype.equals=function(e){if(!g.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===g.compare(this,e)},g.prototype.inspect=function(){var e="",t=a;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(g.prototype[v]=g.prototype.inspect),g.prototype.compare=function(t,n,r,i,o){if(oe(t,Uint8Array)&&(t=g.from(t,t.offset,t.byteLength)),!g.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===t?"undefined":e(h)(t)));if(void 0===n&&(n=0),void 0===r&&(r=t?t.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),n<0||r>t.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&n>=r)return 0;if(i>=o)return-1;if(n>=r)return 1;if(this===t)return 0;for(var a=(o>>>=0)-(i>>>=0),s=(r>>>=0)-(n>>>=0),u=Math.min(a,s),c=this.slice(i,o),l=t.slice(n,r),f=0;f<u;++f)if(c[f]!==l[f]){a=c[f],s=l[f];break}return a<s?-1:s<a?1:0},g.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},g.prototype.indexOf=function(e,t,n){return S(this,e,t,n,!0)},g.prototype.lastIndexOf=function(e,t,n){return S(this,e,t,n,!1)},g.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return O(this,e,t,n);case"utf8":case"utf-8":return N(this,e,t,n);case"ascii":case"latin1":case"binary":return P(this,e,t,n);case"base64":return A(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var U=4096;function j(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function F(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function B(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=t;o<n;++o)i+=se[e[o]];return i}function q(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length-1;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function W(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function H(e,t,n,r,i,o){if(!g.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function V(e,t,n,r,i){$(t,r,i,e,n,7);var o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,n}function z(e,t,n,r,i){$(t,r,i,e,n,7);var o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=a,a>>=8,e[n+2]=a,a>>=8,e[n+1]=a,a>>=8,e[n]=a,n+8}function K(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function G(e,t,n,r,i){return t=+t,n>>>=0,i||K(e,0,n,4),p.write(e,t,n,r,23,4),n+4}function J(e,t,n,r,i){return t=+t,n>>>=0,i||K(e,0,n,8),p.write(e,t,n,r,52,8),n+8}g.prototype.slice=function(e,t){var n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return Object.setPrototypeOf(r,g.prototype),r},g.prototype.readUintLE=g.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||W(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r},g.prototype.readUintBE=g.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||W(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},g.prototype.readUint8=g.prototype.readUInt8=function(e,t){return e>>>=0,t||W(e,1,this.length),this[e]},g.prototype.readUint16LE=g.prototype.readUInt16LE=function(e,t){return e>>>=0,t||W(e,2,this.length),this[e]|this[e+1]<<8},g.prototype.readUint16BE=g.prototype.readUInt16BE=function(e,t){return e>>>=0,t||W(e,2,this.length),this[e]<<8|this[e+1]},g.prototype.readUint32LE=g.prototype.readUInt32LE=function(e,t){return e>>>=0,t||W(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},g.prototype.readUint32BE=g.prototype.readUInt32BE=function(e,t){return e>>>=0,t||W(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},g.prototype.readBigUInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24),i=this[++e]+256*this[++e]+65536*this[++e]+n*Math.pow(2,24);return BigInt(r)+(BigInt(i)<<BigInt(32))})),g.prototype.readBigUInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=t*Math.pow(2,24)+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),g.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||W(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},g.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||W(e,t,this.length);for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},g.prototype.readInt8=function(e,t){return e>>>=0,t||W(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},g.prototype.readInt16LE=function(e,t){e>>>=0,t||W(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},g.prototype.readInt16BE=function(e,t){e>>>=0,t||W(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},g.prototype.readInt32LE=function(e,t){return e>>>=0,t||W(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},g.prototype.readInt32BE=function(e,t){return e>>>=0,t||W(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},g.prototype.readBigInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24))})),g.prototype.readBigInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+n)})),g.prototype.readFloatLE=function(e,t){return e>>>=0,t||W(e,4,this.length),p.read(this,e,!0,23,4)},g.prototype.readFloatBE=function(e,t){return e>>>=0,t||W(e,4,this.length),p.read(this,e,!1,23,4)},g.prototype.readDoubleLE=function(e,t){return e>>>=0,t||W(e,8,this.length),p.read(this,e,!0,52,8)},g.prototype.readDoubleBE=function(e,t){return e>>>=0,t||W(e,8,this.length),p.read(this,e,!1,52,8)},g.prototype.writeUintLE=g.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||H(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},g.prototype.writeUintBE=g.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||H(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},g.prototype.writeUint8=g.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,1,255,0),this[t]=255&e,t+1},g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},g.prototype.writeBigUInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return V(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),g.prototype.writeBigUInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return z(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),g.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);H(this,e,t,n,i-1,-i)}var o=0,a=1,s=0;for(this[t]=255&e;++o<n&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+n},g.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);H(this,e,t,n,i-1,-i)}var o=n-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+n},g.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},g.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},g.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},g.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},g.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},g.prototype.writeBigInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return V(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),g.prototype.writeBigInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return z(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),g.prototype.writeFloatLE=function(e,t,n){return G(this,e,t,!0,n)},g.prototype.writeFloatBE=function(e,t,n){return G(this,e,t,!1,n)},g.prototype.writeDoubleLE=function(e,t,n){return J(this,e,t,!0,n)},g.prototype.writeDoubleBE=function(e,t,n){return J(this,e,t,!1,n)},g.prototype.copy=function(e,t,n,r){if(!g.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},g.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!g.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){var i=e.charCodeAt(0);("utf8"===r&&i<128||"latin1"===r)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{var a=g.isBuffer(e)?e:g.from(e,r),s=a.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<n-t;++o)this[o+t]=a[o%s]}return this};var Y={};function Q(t,n,r){Y[t]=function(r){e(l)(o,r);var i=e(f)(o);function o(){var r;return e(u)(this,o),r=i.call(this),Object.defineProperty(e(s)(r),"message",{value:n.apply(e(s)(r),arguments),writable:!0,configurable:!0}),r.name="".concat(r.name," [").concat(t,"]"),r.stack,delete r.name,r}return e(c)(o,[{key:"code",get:function(){return t},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(t,"]: ").concat(this.message)}}]),o}(r)}function X(e){for(var t="",n=e.length,r="-"===e[0]?1:0;n>=r+4;n-=3)t="_".concat(e.slice(n-3,n)).concat(t);return"".concat(e.slice(0,n)).concat(t)}function $(t,n,r,i,o,a){if(t>r||t<n){var s,u="bigint"===(void 0===n?"undefined":e(h)(n))?"n":"";throw s=a>3?0===n||n===BigInt(0)?">= 0".concat(u," and < 2").concat(u," ** ").concat(8*(a+1)).concat(u):">= -(2".concat(u," ** ").concat(8*(a+1)-1).concat(u,") and < 2 ** ")+"".concat(8*(a+1)-1).concat(u):">= ".concat(n).concat(u," and <= ").concat(r).concat(u),new Y.ERR_OUT_OF_RANGE("value",s,t)}!function(e,t,n){Z(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||ee(t,e.length-(n+1))}(i,o,a)}function Z(e,t){if("number"!=typeof e)throw new Y.ERR_INVALID_ARG_TYPE(t,"number",e)}function ee(e,t,n){if(Math.floor(e)!==e)throw Z(e,n),new Y.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new Y.ERR_BUFFER_OUT_OF_BOUNDS;throw new Y.ERR_OUT_OF_RANGE(n||"offset",">= ".concat(n?1:0," and <= ").concat(t),e)}Q("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),Q("ERR_INVALID_ARG_TYPE",(function(t,n){return'The "'.concat(t,'" argument must be of type number. Received type ').concat(void 0===n?"undefined":e(h)(n))}),TypeError),Q("ERR_OUT_OF_RANGE",(function(t,n,r){var i='The value of "'.concat(t,'" is out of range.'),o=r;return Number.isInteger(r)&&Math.abs(r)>Math.pow(2,32)?o=X(String(r)):"bigint"===(void 0===r?"undefined":e(h)(r))&&(o=String(r),(r>Math.pow(BigInt(2),BigInt(32))||r<-Math.pow(BigInt(2),BigInt(32)))&&(o=X(o)),o+="n"),i+=" It must be ".concat(n,". Received ").concat(o)}),RangeError);var te=/[^+/0-9A-Za-z-_]/g;function ne(e,t){var n;t=t||1/0;for(var r=e.length,i=null,o=[],a=0;a<r;++a){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function re(e){return d.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ie(e,t,n,r){var i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function oe(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function ae(e){return e!=e}var se=function(){for(var e="0123456789abcdef",t=new Array(256),n=0;n<16;++n)for(var r=16*n,i=0;i<16;++i)t[r+i]=e[n]+e[i];return t}();function ue(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}})),o.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),o.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),o.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=o("gD1JV"))&&n.__esModule?n:{default:n}})),o.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,o=r.default(e);if(t){var a=r.default(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return i.default(this,n)}};var n=a(o("aTHs7")),r=a(o("fVNic")),i=a(o("jmhxu"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),o.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),o.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(o("ds8z5")),r=i(o("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),o.register("5d11t",(function(e,n){var r,i;t(e.exports,"toByteArray",(function(){return r}),(function(e){return r=e})),t(e.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),r=function(e){var t,n,r=h(e),i=r[0],o=r[1],u=new s(function(e,t,n){return 3*(t+n)/4-n}(0,i,o)),c=0,l=o>0?i-4:i;for(n=0;n<l;n+=4)t=a[e.charCodeAt(n)]<<18|a[e.charCodeAt(n+1)]<<12|a[e.charCodeAt(n+2)]<<6|a[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===o&&(t=a[e.charCodeAt(n)]<<2|a[e.charCodeAt(n+1)]>>4,u[c++]=255&t);1===o&&(t=a[e.charCodeAt(n)]<<10|a[e.charCodeAt(n+1)]<<4|a[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,n=e.length,r=n%3,i=[],a=16383,s=0,u=n-r;s<u;s+=a)i.push(f(e,s,s+a>u?u:s+a));1===r?(t=e[n-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)o[c]=u[c],a[u.charCodeAt(c)]=c;function h(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function f(e,t,n){for(var r,i,a=[],s=t;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(o[(i=r)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return a.join("")}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63})),o.register("7rddL",(function(e,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;t(e.exports,"read",(function(){return r}),(function(e){return r=e})),t(e.exports,"write",(function(){return i}),(function(e){return i=e})),r=function(e,t,n,r,i){var o,a,s=8*i-r-1,u=(1<<s)-1,c=u>>1,l=-7,h=n?i-1:0,f=n?-1:1,d=e[t+h];for(h+=f,o=d&(1<<-l)-1,d>>=-l,l+=s;l>0;o=256*o+e[t+h],h+=f,l-=8);for(a=o&(1<<-l)-1,o>>=-l,l+=r;l>0;a=256*a+e[t+h],h+=f,l-=8);if(0===o)o=1-c;else{if(o===u)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,r),o-=c}return(d?-1:1)*a*Math.pow(2,o-r)},i=function(e,t,n,r,i,o){var a,s,u,c=8*o-i-1,l=(1<<c)-1,h=l>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=l):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),(t+=a+h>=1?f/u:f*Math.pow(2,1-h))*u>=2&&(a++,u/=2),a+h>=l?(s=0,a=l):a+h>=1?(s=(t*u-1)*Math.pow(2,i),a+=h):(s=t*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;e[n+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[n+d]=255&a,d+=p,a/=256,c-=8);e[n+d-p]|=128*v}})),o.register("btSY7",(function(e,t){"use strict";var n=o("c4C4W"),r=o("j97bH"),i=o("jFG8L"),a=o("6d5Pb"),s=o("gYMA1"),u=o("1nUSP"),c=o("9jFfm"),l=o("gWbUy"),h=o("5TB86"),f=o("dW1zJ"),d=o("4ULKu");e.exports=function(e){return new Promise((function(t,o){var p,v=e.data,y=e.headers,m=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(v)&&n.isStandardBrowserEnv()&&delete y["Content-Type"];var _=new XMLHttpRequest;if(e.auth){var k=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";y.Authorization="Basic "+btoa(k+":"+b)}var w=s(e.baseURL,e.url);function I(){if(_){var n="getAllResponseHeaders"in _?u(_.getAllResponseHeaders()):null,i={data:m&&"text"!==m&&"json"!==m?_.response:_.responseText,status:_.status,statusText:_.statusText,headers:n,config:e,request:_};r((function(e){t(e),g()}),(function(e){o(e),g()}),i),_=null}}if(_.open(e.method.toUpperCase(),a(w,e.params,e.paramsSerializer),!0),_.timeout=e.timeout,"onloadend"in _?_.onloadend=I:_.onreadystatechange=function(){_&&4===_.readyState&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))&&setTimeout(I)},_.onabort=function(){_&&(o(new h("Request aborted",h.ECONNABORTED,e,_)),_=null)},_.onerror=function(){o(new h("Network Error",h.ERR_NETWORK,e,_,_)),_=null},_.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new h(t,n.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,_)),_=null},n.isStandardBrowserEnv()){var E=(e.withCredentials||c(w))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;E&&(y[e.xsrfHeaderName]=E)}"setRequestHeader"in _&&n.forEach(y,(function(e,t){void 0===v&&"content-type"===t.toLowerCase()?delete y[t]:_.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(_.withCredentials=!!e.withCredentials),m&&"json"!==m&&(_.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&_.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){_&&(o(!e||e&&e.type?new f:e),_.abort(),_=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),v||(v=null);var T=d(w);T&&-1===["http","https","file"].indexOf(T)?o(new h("Unsupported protocol "+T+":",h.ERR_BAD_REQUEST,e)):_.send(v)}))}})),o.register("j97bH",(function(e,t){"use strict";var n=o("5TB86");e.exports=function(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}})),o.register("jFG8L",(function(e,t){"use strict";var n=o("c4C4W");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(i)&&s.push("path="+i),n.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("gYMA1",(function(e,t){"use strict";var n=o("7xjuH"),r=o("ftRZn");e.exports=function(e,t){return e&&!n(t)?r(e,t):t}})),o.register("7xjuH",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("ftRZn",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("1nUSP",(function(e,t){"use strict";var n=o("c4C4W"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,o,a={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),i=n.trim(e.substr(o+1)),t){if(a[t]&&r.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([i]):a[t]?a[t]+", "+i:i}})),a):a}})),o.register("9jFfm",(function(e,t){"use strict";var n=o("c4C4W");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}})),o.register("dW1zJ",(function(e,t){"use strict";var n=o("5TB86");function r(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}o("c4C4W").inherits(r,n,{__CANCEL__:!0}),e.exports=r})),o.register("4ULKu",(function(e,t){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("beknR",(function(e,t){e.exports=null})),o.register("lXDKh",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("knWMA",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e,t){t=t||{};var r={};function i(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(e[r],t[r])}function a(e){if(!n.isUndefined(t[e]))return i(void 0,t[e])}function s(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(void 0,t[r])}function u(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,i=t(e);n.isUndefined(i)&&t!==u||(r[e]=i)})),r}})),o.register("9SeBc",(function(t,n){var r=o("l5bVx"),i=o("kLR29").version,a=o("5TB86"),s={};["object","boolean","number","function","string","symbol"].forEach((function(t,n){s[t]=function(i){return(void 0===i?"undefined":e(r)(i))===t||"a"+(n<1?"n ":" ")+t}}));var u={};s.transitional=function(e,t,n){function r(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,i,o){if(!1===e)throw new a(r(i," has been removed"+(t?" in "+t:"")),a.ERR_DEPRECATED);return t&&!u[i]&&(u[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,o)}},t.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new a("options must be an object",a.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var o=r[i],s=t[o];if(s){var u=e[o],c=void 0===u||s(u,o,e);if(!0!==c)throw new a("option "+o+" must be "+c,a.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new a("Unknown option "+o,a.ERR_BAD_OPTION)}},validators:s}})),o.register("kLR29",(function(e,t){e.exports={version:"0.27.2"}})),o.register("77MZz",(function(e,t){"use strict";var n=o("dW1zJ");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r})),o.register("9BdDr",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("kv87N",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return a.apply(null,arguments)};var n,r=(n=o("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return(a=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&r.default(o,n.prototype),o}).apply(null,arguments)}})),o.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),o.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=o("fVNic"))&&n.__esModule?n:{default:n}}));var a={};function s(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){s(o,r,i,a,u,"next",e)}function u(e){s(o,r,i,a,u,"throw",e)}a(void 0)}))}};var u={},c=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=function(e,t,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return O()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=T(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function y(){}function m(){}function g(){}var _={};u(_,o,(function(){return this}));var k=Object.getPrototypeOf,b=k&&k(k(R([])));b&&b!==n&&r.call(b,o)&&(_=b);var w=g.prototype=y.prototype=Object.create(_);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,o,a,s){var u=l(e[i],e,o);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(h).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function R(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:t,done:!0}}return m.prototype=g,u(w,"constructor",g),u(g,"constructor",m),m.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},I(E.prototype),u(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new E(c(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},I(w),u(w,s,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(u);try{regeneratorRuntime=c}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}var l;l=o("ke5Oc");var h=document.querySelector(".spinner-box");function f(){h.classList.add("none")}function d(){h.classList.remove("none")}var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e){return v.default(e)||y.default(e)||g.default(e)||m.default()};var v=_(o("kMC0W")),y=_(o("7AJDX")),m=_(o("8CtQK")),g=_(o("auk6i"));function _(e){return e&&e.__esModule?e:{default:e}}var k=function(e){try{var t=localStorage.getItem(e);return JSON.parse(t)||void 0}catch(e){console.error("Get state error: ",e.message)}},b=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},w=function(e){try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}},I=document.querySelector(".film-card"),E=document.querySelector(".overlay"),T=document.querySelector(".icon-close");function C(){document.querySelectorAll(".films-gallery__item").forEach((function(e){return e.addEventListener("click",x)})),document.body.addEventListener("keydown",S,!1),E.addEventListener("click",O)}function x(t){t.preventDefault(),function(t){var n=H.movies.results.find((function(e){return e.id==t.attributes.key.value}));if(!n)return void console.log("НЕ УДАЛОСЬ НАЙТИ ФИЛЬМ В ДАННЫХ ПО ID!!!");var r=n.id,i=n.poster_path,o=n.title,a=n.vote_average,s=n.vote_count,u=n.popularity,c=n.original_title,l=n.genre_ids,h=n.overview,f='\n   <div class="image">\n    <img\n      class="image__picture"\n      src='.concat(i?"https://image.tmdb.org/t/p/w780"+i:"https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in",'\n      alt="').concat(o,'"\n    />\n  </div>\n  <div class="description">\n    <p class="description__title">').concat(o,'</p>\n    <ul class="description-list">\n      <li class="description-list__item">\n        <ul class="description-list__values">\n          <li class="description-list__title">Vote / Votes</li>\n          <li class="description-list__value">\n            <span class="description-list__value--vote-orange">').concat(a.toFixed(1),'</span>\n            /\n            <span class="description-list__value--vote-grey">').concat(s,'</span>\n          </li>\n        </ul>\n      </li>\n      <li class="description-list__item">\n        <ul class="description-list__values">\n          <li class="description-list__title">Popularity</li>\n          <li class="description-list__value">').concat(u,'</li>\n        </ul>\n      </li>\n      <li class="description-list__item">\n        <ul class="description-list__values">\n          <li class="description-list__title">Original Title</li>\n          <li class="description-list__value">').concat(c,'</li>\n        </ul>\n      </li>\n      <li class="description-list__item">\n        <ul class="description-list__values">\n          <li class="description-list__title">Genre</li>\n          <li class="description-list__value">').concat(l.split(",").length>3?"Other":l,'</li>\n        </ul>\n      </li>\n    </ul>\n    <div class="film-about">\n      <p class="film-about__header">About</p>\n      <p class="film-about__text">\n        ').concat(h,'\n      </p>\n    </div>\n    <div class="buttons">\n      <button type="button" class="btn btn-watch-modal" id="btn-to-watched" data-id ="').concat(r,'">\n        ADD TO WATCHED\n      </button>\n      <button type="button" class="btn btn-queue-modal" id="btn-to-queue" data-id ="').concat(r,'">\n       ADD TO QUEUE\n      </button>\n    </div>  \n  </div>\n  ');(function(){var e=I.querySelector(".image");e&&e.remove();var t=I.querySelector(".description");t&&t.remove()})(),I.insertAdjacentHTML("afterbegin",f),A(r);var d=document.querySelector("#btn-to-queue"),v=document.querySelector("#btn-to-watched");function y(){if(document.querySelector("#btn-to-watched").classList.contains("active"))m(r);else{var t=[],n=k("watched");n&&(t=e(p)(n));var i=[],o=k("queue");if(o&&(i=e(p)(o)),new Set(i).has(r)){w("queue");var a=i.indexOf(r);i.splice(a,1),b("queue",i)}new Set(t).has(r)||(t.push(r),b("watched",t)),A(r)}}function m(t){var n=[],r=k("watched");r&&(n=e(p)(r)),w("watched");var i=n.indexOf(t);n.splice(i,1),b("watched",n),A()}function g(t){var n=[],r=k("queue");r&&(n=e(p)(r)),w("queue");var i=n.indexOf(t);n.splice(i,1),b("queue",n),A()}function _(){if(document.querySelector("#btn-to-queue").classList.contains("active"))g(r);else{var t=[],n=k("queue");n&&(t=e(p)(n));var i=[],o=k("watched");if(o&&(i=e(p)(o)),new Set(i).has(r)){w("watched");var a=i.indexOf(r);i.splice(a,1),b("watched",i)}new Set(t).has(r)||(t.push(r),b("queue",t)),A(r)}}d.addEventListener("click",_),v.addEventListener("click",y)}(t.currentTarget),window.matchMedia("(max-width: 768px)").matches&&(I.style.top=window.pageYOffset+"px"),I.classList.add("active"),E.classList.add("active"),T.addEventListener("click",R)}function S(e){"Escape"===e.code&&N()}function R(e){N()}function O(e){N()}function N(){I.classList.remove("active"),I.style.top="50%",E.classList.remove("active"),E.removeEventListener("click",O),document.body.removeEventListener("keydown",S),T.removeEventListener("click",R)}function P(t,n){var r=[],i=k(n);return i&&(r=e(p)(i)),new Set(r).has(t)}function A(e){return L.apply(this,arguments)}function L(){return(L=e(a)(e(u).mark((function t(n){var r,i,o,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=function(){i.disabled=!1,i.textContent="Remove from watched",i.classList.add("active")},a=function(){r.disabled=!1,r.textContent="Remove from queue",r.classList.add("active")},r=document.querySelector("#btn-to-queue"),i=document.querySelector("#btn-to-watched"),P(n,"watched")?(i.textContent="Added to watched",i.disabled=!0,setTimeout(o,500)):(i.textContent="Add to watched",i.classList.remove("active"),i.disabled=!1),P(n,"queue")?(r.textContent="Added to queue",r.disabled=!0,setTimeout(a,500)):(r.textContent="Add to queue",r.classList.remove("active"),r.disabled=!1);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var D={filmsGallery:document.querySelector(".films-gallery")},M="0ad512fb225eecaea999568cb90b6aa0";e(l).defaults.baseURL="https://api.themoviedb.org/3";var U,j="trending",F="genre",B="discover",q="search",W="id",H={page:1,request:j,discover:"",id:0,search:"",movies:null,genres:null,movie:null},V=(U=e(a)(e(u).mark((function t(){var n,r,i,o,a,s,c=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=c.length>0&&void 0!==c[0]?c[0]:j,d(),H.movies=null,t.t0=n,t.next=t.t0===j?6:t.t0===F?11:t.t0===B?15:t.t0===q?20:t.t0===W?25:29;break;case 6:return H.request=n,t.next=9,e(l).get("/trending/movie/day?api_key=".concat(M,"&page=").concat(H.page));case 9:return r=t.sent.data,t.abrupt("return",r);case 11:return t.next=13,e(l).get("/genre/movie/list?api_key=".concat(M));case 13:return i=t.sent.data,t.abrupt("return",i);case 15:return H.request=n,t.next=18,e(l).get("/discover/movie?api_key=".concat(M,"&page=").concat(H.page,"&with_genres=").concat(H.discover));case 18:return o=t.sent.data,t.abrupt("return",o);case 20:return H.request=n,t.next=23,e(l).get("/search/movie?api_key=".concat(M,"&page=").concat(H.page,"&query=").concat(H.search));case 23:return a=t.sent.data,t.abrupt("return",a);case 25:return t.next=27,e(l).get("/movie/".concat(H.id,"?api_key=").concat(M));case 27:return s=t.sent.data,t.abrupt("return",s);case 29:case"end":return t.stop()}}),t)}))),function(){return U.apply(this,arguments)});V(F).then((function(e){return H.genres=e.genres,!0})).then((function(){H.page=1,V(j).then((function(e){!function(e){H.movies=e,function(e,t){console.log(e,t),e.forEach((function(e){e.release_date=e.release_date.slice(0,4);var n=e.genre_ids;n.forEach((function(e,n,r){var i=t.find((function(t){return t.id===e})),o=t.indexOf(i);r[n]=t[o].name})),e.genre_ids=n.join(", ")}))}(e.results,H.genres);var t=function(e){return e.map((function(e){var t=e.original_title,n=e.poster_path,r=e.vote_average,i=e.id,o=e.genre_ids,a=e.release_date,s="";return s=n?"https://image.tmdb.org/t/p/w400/".concat(n):"https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in","<li class='films-gallery__item' key='".concat(i,"'>\n            <img\n                class='films-gallery__img'\n                src='").concat(s,"'\n                alt='").concat(t,"'\n                width\n                loading='lazy'\n            />\n            <span class='films-gallery__rate'>").concat(r.toFixed(1),"</span>\n            <div class='films-gallery__wrap'>\n                <h2 class='films-gallery__title'>").concat(t,"</h2>\n                <div class='films-gallery__info'>\n                <p class='films-gallery__text'>").concat(o,"</p>\n                <p class='films-gallery__age'>| ").concat(a,"</p>\n                </div>\n            </div>\n            </li>")})).join("")}(e.results);D.filmsGallery.innerHTML=t,C(),f()}(e)}))}));var z=o("8MBJY"),K=o("a2hTj"),G=o("hKHmD"),J=(z=o("8MBJY"),K=o("a2hTj"),{});Object.defineProperty(J,"__esModule",{value:!0}),J.default=function(e,t){return Y.default(e)||Q.default(e,t)||$.default(e,t)||X.default()};var Y=Z(o("8slrw")),Q=Z(o("7AJDX")),X=Z(o("ifqQW")),$=Z(o("auk6i"));function Z(e){return e&&e.__esModule?e:{default:e}}var ee=o("ds8z5"),te=(z=o("8MBJY"),K=o("a2hTj"),o("eYQtU")),ne={};Object.defineProperty(ne,"__esModule",{value:!0}),ne.default=function(e){return ue(e)};var re=se(o("ge8co")),ie=se(o("cZGw3")),oe=se(o("fVNic")),ae=se(o("gD1JV"));function se(e){return e&&e.__esModule?e:{default:e}}function ue(e){var t="function"==typeof Map?new Map:void 0;return ue=function(e){if(null===e||!ie.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return re.default(e,arguments,oe.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ae.default(n,e)},ue(e)}var ce=o("2MbLg"),le=!1,he=!1,fe="${JSCORE_VERSION}",de=function(e,t){if(!e)throw pe(t)},pe=function(e){return new Error("Firebase Database ("+fe+") INTERNAL ASSERT FAILED: "+e)},ve=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ye={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=o>>2,h=(3&o)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,a||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ve(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==u)throw Error();var c=o<<2|a>>4;if(r.push(c),64!==s){var l=a<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},me=function(e){var t=ve(e);return ye.encodeByteArray(t,!0)},ge=function(e){return me(e).replace(/\./g,"")},_e=function(e){try{return ye.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ke(e){return be(void 0,e)}function be(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=be(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var we=function(){"use strict";function t(){var n=this;e(z)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(K)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ie(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ee(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Te(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Ce(){return!0===le||!0===he}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xe=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(t,i,o){var a;return e(z)(this,r),(a=n.call(this,i)).code=t,a.customData=o,a.name="FirebaseError",Object.setPrototypeOf(e(ee)(a),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(ee)(a),Se.prototype.create),a}return r}(e(ne)(Error)),Se=function(){"use strict";function t(n,r,i){e(z)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(K)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?Re(a,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),c=new xe(o,u,i);return c}}]),t}();function Re(e,t){return e.replace(Oe,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var Oe=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){return JSON.parse(e)}function Pe(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=Ne(_e(o[0])||""),n=Ne(_e(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},Le=function(e){var t=Ae(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function De(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Me(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Ue(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function je(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Fe(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(Be(l)&&Be(h)){if(!Fe(l,h))return!1}else if(l!==h)return!1}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}var f=!0,d=!1,p=void 0;try{for(var v,y=r[Symbol.iterator]();!(f=(v=y.next()).done);f=!0){var m=v.value;if(!n.includes(m))return!1}}catch(e){d=!0,p=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw p}}return!0}function Be(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=function(t,r){var i=e(J)(r.value,2),o=i[0],a=i[1];Array.isArray(a)?a.forEach((function(e){n.push(encodeURIComponent(o)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(o)+"="+encodeURIComponent(a))},u=Object.entries(t)[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)s(0,a)}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n.length?"&"+n.join("&"):""}function We(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(J)(t.split("="),2),i=r[0],o=r[1];n[decodeURIComponent(i)]=decodeURIComponent(o)}})),n}function He(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve=function(){"use strict";function t(){e(z)(this,t),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return e(K)(t,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var o=16;o<80;o++){var a=n[o-3]^n[o-8]^n[o-14]^n[o-16];n[o]=4294967295&(a<<1|a>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],f=this.chain_[3],d=this.chain_[4],p=0;p<80;p++){p<40?p<20?(s=f^l&(h^f),u=1518500249):(s=l^h^f,u=1859775393):p<60?(s=l&h|f&(l|h),u=2400959708):(s=l^h^f,u=3395469782);var v=(c<<5|c>>>27)+s+d+u+n[p]&4294967295;d=f,f=h,h=4294967295&(l<<30|l>>>2),l=c,c=v}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}]),t}();var ze=function(){"use strict";function t(n,r){var i=this;e(z)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(K)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Ke),void 0===r.error&&(r.error=Ke),void 0===r.complete&&(r.complete=Ke);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Ke(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e,t){return"".concat(e," failed: ").concat(t," argument ")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Je=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,de(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(o<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ye=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qe(e){return e&&e._delegate?e._delegate:e}var Xe=function(){"use strict";function t(n,r,i){e(z)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(K)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),$e="[DEFAULT]",Ze=function(){"use strict";function t(n,r){e(z)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(K)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new we;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:$e})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var o,a=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=e(J)(o.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(p)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(p)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var o=this.getOrInitializeService({instanceIdentifier:i,options:r}),a=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=e(J)(c.value,2),f=h[0],d=h[1],p=this.normalizeInstanceIdentifier(f);i===p&&d.resolve(o)}}catch(e){s=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw u}}return o}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===$e?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;return this.component?this.component.multipleInstances?e:$e:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,tt,nt=function(){"use strict";function t(n){e(z)(this,t),this.name=n,this.providers=new Map}return e(K)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ze(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),rt=(z=o("8MBJY"),K=o("a2hTj"),G=o("hKHmD"),[]);(tt=et||(et={}))[tt.DEBUG=0]="DEBUG",tt[tt.VERBOSE=1]="VERBOSE",tt[tt.INFO=2]="INFO",tt[tt.WARN=3]="WARN",tt[tt.ERROR=4]="ERROR",tt[tt.SILENT=5]="SILENT";var it,ot={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},at=et.INFO,st=(it={},e(G)(it,et.DEBUG,"log"),e(G)(it,et.VERBOSE,"log"),e(G)(it,et.INFO,"info"),e(G)(it,et.WARN,"warn"),e(G)(it,et.ERROR,"error"),it),ut=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var a;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=st[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(a=console)[u].apply(a,["[".concat(s,"]  ").concat(t.name,":")].concat(e(p)(i)))}},ct=function(){"use strict";function t(n){e(z)(this,t),this.name=n,this._logLevel=at,this._logHandler=ut,this._userLogHandler=null,rt.push(this)}return e(K)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in et))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?ot[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.DEBUG].concat(e(p)(n))),this._logHandler.apply(this,[this,et.DEBUG].concat(e(p)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.VERBOSE].concat(e(p)(n))),this._logHandler.apply(this,[this,et.VERBOSE].concat(e(p)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.INFO].concat(e(p)(n))),this._logHandler.apply(this,[this,et.INFO].concat(e(p)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.WARN].concat(e(p)(n))),this._logHandler.apply(this,[this,et.WARN].concat(e(p)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.ERROR].concat(e(p)(n))),this._logHandler.apply(this,[this,et.ERROR].concat(e(p)(n)))}}]),t}();var lt={};Object.defineProperty(lt,"__esModule",{value:!0}),lt.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ft.default(e,t,n[t])}))}return e};var ht,ft=(ht=o("hKHmD"))&&ht.__esModule?ht:{default:ht};var dt,pt;var vt=new WeakMap,yt=new WeakMap,mt=new WeakMap,gt=new WeakMap,_t=new WeakMap;var kt={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return yt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||mt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function bt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(pt||(pt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(Et(this),n),It(vt.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return It(t.apply(Et(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a,s=(a=t).call.apply(a,[Et(this),n].concat(e(p)(i)));return mt.set(s,n.sort?n.sort():[n]),It(s)}}function wt(e){return"function"==typeof e?bt(e):(e instanceof IDBTransaction&&function(e){if(!yt.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),r()},o=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));yt.set(e,t)}}(e),t=e,(dt||(dt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,kt):e);var t}function It(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(It(t.result)),r()},o=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&vt.set(e,t)})).catch((function(){})),_t.set(n,t),n;var t,n;if(gt.has(e))return gt.get(e);var r=wt(e);return r!==e&&(gt.set(e,r),_t.set(r,e)),r}var Et=function(e){return _t.get(e)};function Tt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,o=n.blocking,a=n.terminated,s=indexedDB.open(e,t),u=It(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(It(s.result),e.oldVersion,e.newVersion,It(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(){return o()}))})).catch((function(){})),u}var Ct=["get","getKey","getAll","getAllKeys","count"],xt=["put","add","delete","clear"],St=new Map;function Rt(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(St.get(n))return St.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,o=xt.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(o||Ct.includes(r))){var s=function(){var t=e(a)(e(u).mark((function t(n){var a,s,c,l,h,f,d=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=d.length,s=new Array(a>1?a-1:0),c=1;c<a;c++)s[c-1]=d[c];return h=this.transaction(n,o?"readwrite":"readonly"),f=h.store,i&&(f=f.index(s.shift())),t.next=7,Promise.all([(l=f)[r].apply(l,e(p)(s)),o&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}();return St.set(n,s),s}}}kt=function(t){return e(lt)({},t,{get:function(e,n,r){return Rt(e,n)||t.get(e,n,r)},has:function(e,n){return!!Rt(e,n)||t.has(e,n)}})}(kt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ot=function(){"use strict";function t(n){e(z)(this,t),this.container=n}return e(K)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var Nt,Pt,At="@firebase/app",Lt="0.7.33",Dt=new ct("@firebase/app"),Mt="[DEFAULT]",Ut=(Nt={},e(G)(Nt,At,"fire-core"),e(G)(Nt,"@firebase/app-compat","fire-core-compat"),e(G)(Nt,"@firebase/analytics","fire-analytics"),e(G)(Nt,"@firebase/analytics-compat","fire-analytics-compat"),e(G)(Nt,"@firebase/app-check","fire-app-check"),e(G)(Nt,"@firebase/app-check-compat","fire-app-check-compat"),e(G)(Nt,"@firebase/auth","fire-auth"),e(G)(Nt,"@firebase/auth-compat","fire-auth-compat"),e(G)(Nt,"@firebase/database","fire-rtdb"),e(G)(Nt,"@firebase/database-compat","fire-rtdb-compat"),e(G)(Nt,"@firebase/functions","fire-fn"),e(G)(Nt,"@firebase/functions-compat","fire-fn-compat"),e(G)(Nt,"@firebase/installations","fire-iid"),e(G)(Nt,"@firebase/installations-compat","fire-iid-compat"),e(G)(Nt,"@firebase/messaging","fire-fcm"),e(G)(Nt,"@firebase/messaging-compat","fire-fcm-compat"),e(G)(Nt,"@firebase/performance","fire-perf"),e(G)(Nt,"@firebase/performance-compat","fire-perf-compat"),e(G)(Nt,"@firebase/remote-config","fire-rc"),e(G)(Nt,"@firebase/remote-config-compat","fire-rc-compat"),e(G)(Nt,"@firebase/storage","fire-gcs"),e(G)(Nt,"@firebase/storage-compat","fire-gcs-compat"),e(G)(Nt,"@firebase/firestore","fire-fst"),e(G)(Nt,"@firebase/firestore-compat","fire-fst-compat"),e(G)(Nt,"fire-js","fire-js"),e(G)(Nt,"firebase","fire-js-all"),Nt),jt=new Map,Ft=new Map;function Bt(e,t){try{e.container.addComponent(t)}catch(n){Dt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function qt(e){var t=e.name;if(Ft.has(t))return Dt.debug("There were multiple attempts to register component ".concat(t,".")),!1;Ft.set(t,e);var n=!0,r=!1,i=void 0;try{for(var o,a=jt.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){Bt(o.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!0}function Wt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ht=(Pt={},e(G)(Pt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(G)(Pt,"bad-app-name","Illegal App name: '{$appName}"),e(G)(Pt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(G)(Pt,"app-deleted","Firebase App named '{$appName}' already deleted"),e(G)(Pt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(G)(Pt,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(G)(Pt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(G)(Pt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(G)(Pt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(G)(Pt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Pt),Vt=new Se("app","Firebase",Ht),zt=function(){"use strict";function t(n,r,i){var o=this;e(z)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Xe("app",(function(){return o}),"PUBLIC"))}return e(K)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}]),t}(),Kt="9.10.0";function Gt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=jt.get(e);if(!t)throw Vt.create("no-app",{appName:e});return t}function Jt(e,t,n){var r,i=null!==(r=Ut[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Dt.warn(s.join(" "))}qt(new Xe("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yt="firebase-heartbeat-store",Qt=null;function Xt(){return Qt||(Qt=Tt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Yt)}}).catch((function(e){throw Vt.create("idb-open",{originalErrorMessage:e.message})}))),Qt}function $t(e){return Zt.apply(this,arguments)}function Zt(){return(Zt=e(a)(e(u).mark((function t(n){var r,i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Xt();case 4:return i=e.sent,e.abrupt("return",i.transaction(Yt).objectStore(Yt).get(nn(n)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof xe?Dt.warn(e.t0.message):(o=Vt.create("idb-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message}),Dt.warn(o.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function en(e,t){return tn.apply(this,arguments)}function tn(){return(tn=e(a)(e(u).mark((function t(n,r){var i,o,a,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Xt();case 4:return o=e.sent,a=o.transaction(Yt,"readwrite"),s=a.objectStore(Yt),e.next=9,s.put(r,nn(n));case 9:return e.abrupt("return",a.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof xe?Dt.warn(e.t0.message):(c=Vt.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),Dt.warn(c.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function nn(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rn=function(){"use strict";function t(n){var r=this;e(z)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new un(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(K)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r,i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),o=on(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==o&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===o}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:o,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r,i,o,a,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=on(),i=an(t._heartbeatsCache.heartbeats),o=i.heartbeatsToSend,a=i.unsentEntries,s=ge(JSON.stringify({version:2,heartbeats:o})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(a.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=a,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function on(){return(new Date).toISOString().substring(0,10)}function an(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,u=function(e,i){var o=i.value,a=n.find((function(e){return e.agent===o.agent}));if(a){if(a.dates.push(o.date),cn(n)>t)return a.dates.pop(),"break"}else if(n.push({agent:o.agent,dates:[o.date]}),cn(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{heartbeatsToSend:n,unsentEntries:r}}var sn,un=function(){"use strict";function t(n){e(z)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(K)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,$t(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return o=e.sent,e.abrupt("return",en(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o;return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return o=r.sent,r.abrupt("return",en(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:e(p)(o.heartbeats).concat(e(p)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function cn(e){return ge(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn="",qt(new Xe("platform-logger",(function(e){return new Ot(e)}),"PRIVATE")),qt(new Xe("heartbeat",(function(e){return new rn(e)}),"PRIVATE")),Jt(At,Lt,sn),Jt(At,Lt,"esm2017"),Jt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Jt("firebase","9.10.0","app");ee=o("ds8z5"),z=o("8MBJY"),K=o("a2hTj"),G=o("hKHmD");var ln={};Object.defineProperty(ln,"__esModule",{value:!0}),ln.default=function(e,t,n){return fn(e,t,n)};var hn=function(e){return e&&e.__esModule?e:{default:e}}(o("2mz0K"));function fn(e,t,n){return(fn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=hn.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var dn=o("fVNic");te=o("eYQtU"),ce=o("2MbLg");function pn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function vn(){return e(G)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var yn=vn,mn=new Se("auth","Firebase",vn()),gn=new ct("@firebase/auth");function _n(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;gn.logLevel<=et.ERROR&&(o=gn).error.apply(o,["Auth (".concat(Kt,"): ").concat(t)].concat(e(p)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw In.apply(void 0,[t].concat(e(p)(r)))}function bn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return In.apply(void 0,[t].concat(e(p)(r)))}function wn(t,n,r){var i=Object.assign(Object.assign({},yn()),e(G)({},n,r));return new Se("auth","Firebase",i).create(n,{appName:t.name})}function In(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;if("string"!=typeof t){var a,s=r[0],u=e(p)(r.slice(1));return u[0]&&(u[0].appName=t.name),(a=t._errorFactory).create.apply(a,[s].concat(e(p)(u)))}return(o=mn).create.apply(o,[t].concat(e(p)(r)))}function En(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(!t)throw In.apply(void 0,[n].concat(e(p)(i)))}function Tn(e){var t="INTERNAL ASSERTION FAILED: "+e;throw _n(t),new Error(t)}function Cn(e,t){e||Tn(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xn=new Map;function Sn(e){Cn(e instanceof Function,"Expected a class definition");var t=xn.get(e);return t?(Cn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,xn.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e,t){var n=Wt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(Fe(n.getOptions(),null!=t?t:{}))return r;kn(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function On(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Nn(){return"http:"===Pn()||"https:"===Pn()}function Pn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Nn()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ln=function(){"use strict";function t(n,r){e(z)(this,t),this.shortDelay=n,this.longDelay=r,Cn(r>n,"Short delay should be less than long delay!"),this.isMobile=Ee()||Te()}return e(K)(t,[{key:"get",value:function(){return An()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e,t){Cn(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn,Un=function(){"use strict";function t(){e(z)(this,t)}return e(K)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),jn=(Mn={},e(G)(Mn,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(G)(Mn,"MISSING_CUSTOM_TOKEN","internal-error"),e(G)(Mn,"INVALID_IDENTIFIER","invalid-email"),e(G)(Mn,"MISSING_CONTINUE_URI","internal-error"),e(G)(Mn,"INVALID_PASSWORD","wrong-password"),e(G)(Mn,"MISSING_PASSWORD","internal-error"),e(G)(Mn,"EMAIL_EXISTS","email-already-in-use"),e(G)(Mn,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(G)(Mn,"INVALID_IDP_RESPONSE","invalid-credential"),e(G)(Mn,"INVALID_PENDING_TOKEN","invalid-credential"),e(G)(Mn,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(G)(Mn,"MISSING_REQ_TYPE","internal-error"),e(G)(Mn,"EMAIL_NOT_FOUND","user-not-found"),e(G)(Mn,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(G)(Mn,"EXPIRED_OOB_CODE","expired-action-code"),e(G)(Mn,"INVALID_OOB_CODE","invalid-action-code"),e(G)(Mn,"MISSING_OOB_CODE","internal-error"),e(G)(Mn,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(G)(Mn,"INVALID_ID_TOKEN","invalid-user-token"),e(G)(Mn,"TOKEN_EXPIRED","user-token-expired"),e(G)(Mn,"USER_NOT_FOUND","user-token-expired"),e(G)(Mn,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(G)(Mn,"INVALID_CODE","invalid-verification-code"),e(G)(Mn,"INVALID_SESSION_INFO","invalid-verification-id"),e(G)(Mn,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(G)(Mn,"MISSING_SESSION_INFO","missing-verification-id"),e(G)(Mn,"SESSION_EXPIRED","code-expired"),e(G)(Mn,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(G)(Mn,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(G)(Mn,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(G)(Mn,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(G)(Mn,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(G)(Mn,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(G)(Mn,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(G)(Mn,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(G)(Mn,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(G)(Mn,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(G)(Mn,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Mn),Fn=new Ln(3e4,6e4);function Bn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function qn(e,t,n,r){return Wn.apply(this,arguments)}function Wn(){return Wn=e(a)(e(u).mark((function t(n,r,i,o){var s,c=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",Hn(n,s,e(a)(e(u).mark((function t(){var a,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},o&&("GET"===r?s=o:a={body:JSON.stringify(o)}),c=qe(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Un.fetch()(Gn(n,n.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Wn.apply(this,arguments)}function Hn(e,t,n){return Vn.apply(this,arguments)}function Vn(){return(Vn=e(a)(e(u).mark((function t(n,r,i){var o,a,s,c,l,h,f,d,p;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,o=Object.assign(Object.assign({},jn),r),t.prev=2,a=new Jn(n),t.next=6,Promise.race([i(),a.promise]);case 6:return s=t.sent,a.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw Yn(n,"account-exists-with-different-credential",c);case 13:if(!s.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=s.ok?c.errorMessage:c.error.message,h=e(J)(l.split(" : "),2),f=h[0],d=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw Yn(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw Yn(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw Yn(n,"user-disabled",c);case 29:if(p=o[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){t.next=34;break}throw wn(n,p,d);case 34:kn(n,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof xe)){t.next=41;break}throw t.t0;case 41:kn(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function zn(e,t,n,r){return Kn.apply(this,arguments)}function Kn(){return Kn=e(a)(e(u).mark((function t(n,r,i,o){var a,s,c=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,qn(n,r,i,o,a);case 3:return"mfaPendingCredential"in(s=e.sent)&&kn(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),Kn.apply(this,arguments)}function Gn(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Dn(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Jn=function(){"use strict";function t(n){var r=this;e(z)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(bn(n.auth,"network-request-failed"))}),Fn.get())}))}return e(K)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Yn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=bn(e,t,r);return i.customData._tokenResponse=n,i}function Qn(e,t){return Xn.apply(this,arguments)}function Xn(){return(Xn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",qn(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $n(e,t){return Zn.apply(this,arguments)}function Zn(){return(Zn=e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",qn(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return tr=e(a)(e(u).mark((function t(n){var r,i,o,a,s,c,l=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=Qe(n),e.next=4,i.getIdToken(r);case 4:return o=e.sent,En((a=rr(o))&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error"),s="object"==typeof a.firebase?a.firebase:void 0,c=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:a,token:o,authTime:er(nr(a.auth_time)),issuedAtTime:er(nr(a.iat)),expirationTime:er(nr(a.exp)),signInProvider:c||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),tr.apply(this,arguments)}function nr(e){return 1e3*Number(e)}function rr(t){var n,r=e(J)(t.split("."),3),i=r[0],o=r[1],a=r[2];if(void 0===i||void 0===o||void 0===a)return _n("JWT malformed, contained fewer than 3 sections"),null;try{var s=_e(o);return s?JSON.parse(s):(_n("Failed to decode base64 JWT payload"),null)}catch(e){return _n("Caught error parsing JWT payload as JSON",null===(n=e)||void 0===n?void 0:n.toString()),null}}function ir(e,t){return or.apply(this,arguments)}function or(){return or=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(u).mark((function t(n,r){var i=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof xe&&ar(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),or.apply(this,arguments)}function ar(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sr=function(){"use strict";function t(n){e(z)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(K)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(a)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(r=e.t0)||void 0===r?void 0:r.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}}]),t}(),ur=function(){"use strict";function t(n,r){e(z)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(K)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=er(this.lastLoginAt),this.creationTime=er(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e){return lr.apply(this,arguments)}function lr(){return(lr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(u).mark((function t(n){var r,i,o,a,s,c,l,h,f,d,p;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return o=e.sent,e.next=7,ir(n,$n(i,{idToken:o}));case 7:En(null==(a=e.sent)?void 0:a.users.length,i,"internal-error"),s=a.users[0],n._notifyReloadListener(s),c=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?dr(s.providerUserInfo):[],l=fr(n.providerData,c),h=n.isAnonymous,f=!(n.email&&s.passwordHash||(null==l?void 0:l.length)),d=!!h&&f,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ur(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function hr(){return(hr=e(a)(e(u).mark((function t(n){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Qe(n),e.next=3,cr(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function fr(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(p)(r).concat(e(p)(n))}function dr(e){return e.map((function(e){var t=e.providerId,n=pn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function pr(e,t){return vr.apply(this,arguments)}function vr(){return(vr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(u).mark((function t(n,r){var i;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Hn(n,{},e(a)(e(u).mark((function t(){var i,o,a,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=qe({grant_type:"refresh_token",refresh_token:r}).slice(1),o=n.config,a=o.tokenApiHost,s=o.apiKey,c=Gn(n,a,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Un.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yr=function(){"use strict";function t(){e(z)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(K)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){En(e.idToken,"internal-error"),En(void 0!==e.idToken,"internal-error"),En(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,En(n=rr(t),"internal-error"),En(void 0!==n.exp,"internal-error"),En(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(En(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(a)(e(u).mark((function i(){var o,a,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pr(t,n);case 2:o=e.sent,a=o.accessToken,s=o.refreshToken,c=o.expiresIn,r.updateTokensAndExpiration(a,s,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return Tn("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,o=n.expirationTime,a=new t;return r&&(En("string"==typeof r,"internal-error",{appName:e}),a.refreshToken=r),i&&(En("string"==typeof i,"internal-error",{appName:e}),a.accessToken=i),o&&(En("number"==typeof o,"internal-error",{appName:e}),a.expirationTime=o),a}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e,t){En("string"==typeof e||void 0===e,"internal-error",{appName:t})}var gr=function(){"use strict";function t(n){e(z)(this,t);var r=n.uid,i=n.auth,o=n.stsTokenManager,a=pn(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?e(p)(a.providerData):[],this.metadata=new ur(a.createdAt||void 0,a.lastLoginAt||void 0)}return e(K)(t,[{key:"getIdToken",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ir(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(En(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return tr.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return hr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(En(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){En(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(u).mark((function i(){var o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),o=!0),!n){e.next=5;break}return e.next=5,cr(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:o&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,ir(t,Qn(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,o,a,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(o=n.phoneNumber)&&void 0!==o?o:void 0,p=null!==(a=n.photoURL)&&void 0!==a?a:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,_=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;En(_&&I,e,"internal-error");var E=yr.fromJSON(this.name,I);En("string"==typeof _,e,"internal-error"),mr(h,e.name),mr(f,e.name),En("boolean"==typeof k,e,"internal-error"),En("boolean"==typeof b,e,"internal-error"),mr(d,e.name),mr(p,e.name),mr(v,e.name),mr(y,e.name),mr(m,e.name),mr(g,e.name);var T=new t({uid:_,auth:e,email:f,emailVerified:k,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:E,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(T.providerData=w.map((function(e){return Object.assign({},e)}))),y&&(T._redirectEventId=y),T}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(u).mark((function o(){var a,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new yr).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:a,isAnonymous:i}),e.next=5,cr(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),o)})))()}}]),t}(),_r=function(){"use strict";function t(){e(z)(this,t),this.type="NONE",this.storage={}}return e(K)(t,[{key:"_isAvailable",value:function(){return e(a)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_r.type="NONE";var kr=_r;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var wr=function(){"use strict";function t(n,r,i){e(z)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var o=this.auth,a=o.config,s=o.name;this.fullUserKey=br(this.userKey,a.apiKey,s),this.fullPersistenceKey=br("persistence",a.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(K)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?gr._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(u).mark((function o(){var s,c,l,h,f,d,p,v,y,m,g,_,k;return e(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.length){o.next=2;break}return o.abrupt("return",new t(Sn(kr),n,i));case 2:return o.next=4,Promise.all(r.map(function(){var t=e(a)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:s=o.sent.filter((function(e){return e})),c=s[0]||Sn(kr),l=br(i,n.config.apiKey,n.name),h=null,f=!0,d=!1,p=void 0,o.prev=9,v=r[Symbol.iterator]();case 11:if(f=(y=v.next()).done){o.next=29;break}return m=y.value,o.prev=13,o.next=16,m._get(l);case 16:if(!(g=o.sent)){o.next=22;break}return _=gr._fromJSON(n,g),m!==c&&(h=_),c=m,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:f=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),d=!0,p=o.t1;case 35:o.prev=35,o.prev=36,f||null==v.return||v.return();case 38:if(o.prev=38,!d){o.next=41;break}throw p;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&k.length){o.next=46;break}return o.abrupt("return",new t(c,n,i));case 46:if(c=k[0],!h){o.next=50;break}return o.next=50,c._set(l,h.toJSON());case 50:return o.next=52,Promise.all(r.map(function(){var t=e(a)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return o.abrupt("return",new t(c,n,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Er(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Rr(t))return"Blackberry";if(Or(t))return"Webos";if(Tr(t))return"Safari";if((t.includes("chrome/")||Cr(t))&&!t.includes("edge/"))return"Chrome";if(Sr(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Er(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/firefox\//i.test(e)}function Tr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Cr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/crios\//i.test(e)}function xr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/iemobile/i.test(e)}function Sr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/android/i.test(e)}function Rr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/blackberry/i.test(e)}function Or(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/webos/i.test(e)}function Nr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Pr(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return Nr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ar(){return((e=Ie()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Lr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return Nr(e)||Sr(e)||Or(e)||Rr(e)||/windows phone/i.test(e)||xr(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dr(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ir(Ie());break;case"Worker":t="".concat(Ir(Ie()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Kt,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mr=function(){"use strict";function t(n){e(z)(this,t),this.auth=n,this.queue=[]}return e(K)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o,a,s,c,l,h,f,d,p,v,y,m,g;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:o=[],e.prev=4,a=!0,s=!1,c=void 0,e.prev=6,l=n.queue[Symbol.iterator]();case 8:if(a=(h=l.next()).done){e.next=16;break}return f=h.value,e.next=12,f(t);case 12:f.onAbort&&o.push(f.onAbort);case 13:a=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),s=!0,c=e.t0;case 22:e.prev=22,e.prev=23,a||null==l.return||l.return();case 25:if(e.prev=25,!s){e.next=28;break}throw c;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),o.reverse(),d=!0,p=!1,v=void 0,e.prev=36,y=o[Symbol.iterator]();!(d=(m=y.next()).done);d=!0){g=m.value;try{g()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),p=!0,v=e.t2;case 44:e.prev=44,e.prev=45,d||null==y.return||y.return();case 47:if(e.prev=47,!p){e.next=50;break}throw v;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),Ur=function(){"use strict";function t(n,r,i){e(z)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fr(this),this.idTokenSubscription=new Fr(this),this.beforeStateQueue=new Mr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(K)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=Sn(n));var r=this;return this._initializationPromise=this.queue(e(a)(e(u).mark((function i(){var o,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,wr.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(o=r._popupRedirectResolver)||void 0===o?void 0:o._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(a=r.currentUser)||void 0===a?void 0:a.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o,a,s,c,l,h;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(o=e.sent,a=o,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==a?void 0:a._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:h=e.sent,c&&c!==l||!(null==h?void 0:h.user)||(a=h.user,s=!0);case 15:if(a){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(a._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(a);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),a=o,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!a){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return En(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==a._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(a));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,cr(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(i=e.t0)||void 0===i?void 0:i.code)){e.next=10;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 10:return e.abrupt("return",n.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Qe(t):null)&&En(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(u).mark((function i(){return e(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&En(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(a)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(Sn(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Se("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(a)(e(u).mark((function i(){var o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return o=e.sent,e.abrupt("return",null===t?o.removeCurrentUser():o.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return En(i=t&&Sn(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,wr.create(n,[Sn(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o;return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(a)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(o=n.redirectUser)||void 0===o?void 0:o._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return En(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return En(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dr(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r,i,o;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(G)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(o=n.sent)&&(i["X-Firebase-Client"]=o),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e){return Qe(e)}var Fr=function(){"use strict";function t(n){var r,i,o=this;e(z)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new ze((function(e){return o.observer=e}),r)).subscribe.bind(i)}return e(K)(t,[{key:"next",get:function(){return En(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Br=function(){"use strict";function t(n,r){e(z)(this,t),this.providerId=n,this.signInMethod=r}return e(K)(t,[{key:"toJSON",value:function(){return Tn("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Tn("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Tn("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Tn("not implemented")}}]),t}();function qr(e,t){return Wr.apply(this,arguments)}function Wr(){return(Wr=e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",qn(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Hr(e,t){return Vr.apply(this,arguments)}function Vr(){return(Vr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",zn(n,"POST","/v1/accounts:signInWithPassword",Bn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zr(e,t){return Kr.apply(this,arguments)}function Kr(){return(Kr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",zn(n,"POST","/v1/accounts:signInWithEmailLink",Bn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Gr(e,t){return Jr.apply(this,arguments)}function Jr(){return(Jr=e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",zn(n,"POST","/v1/accounts:signInWithEmailLink",Bn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yr=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(t,i,o){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(z)(this,r),(a=n.call(this,"password",o))._email=t,a._password=i,a._tenantId=s,a}return e(K)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Hr(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",zr(t,{email:n._email,oobCode:n._password}));case 5:kn(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(a)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",qr(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Gr(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:kn(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Br);function Qr(e,t){return Xr.apply(this,arguments)}function Xr(){return(Xr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",zn(n,"POST","/v1/accounts:signInWithIdp",Bn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $r=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){var t;return e(z)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(K)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Qr(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Qr(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Qr(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qe(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kn("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,o=pn(t,["providerId","signInMethod"]);if(!n||!i)return null;var a=new r(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}}]),r}(Br);function Zr(e,t){return ei.apply(this,arguments)}function ei(){return(ei=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",qn(n,"POST","/v1/accounts:sendVerificationCode",Bn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ti(){return(ti=e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",zn(n,"POST","/v1/accounts:signInWithPhoneNumber",Bn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ni(){return(ni=e(a)(e(u).mark((function t(n,r){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,zn(n,"POST","/v1/accounts:signInWithPhoneNumber",Bn(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Yn(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var ri=e(G)({},"USER_NOT_FOUND","user-not-found");function ii(){return(ii=e(a)(e(u).mark((function t(n,r){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",zn(n,"POST","/v1/accounts:signInWithPhoneNumber",Bn(n,i),ri));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oi=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(t){var i;return e(z)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(K)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return ti.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return ni.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return ii.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return n||t||i||o?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}}]),r}(Br);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ai=function(){"use strict";function t(n){var r,i,o,a,s,u;e(z)(this,t);var c=We(He(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,h=null!==(i=c.oobCode)&&void 0!==i?i:null,f=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=c.mode)&&void 0!==o?o:null);En(l&&h&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=h,this.continueUrl=null!==(a=c.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(K)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=We(He(e)).link,n=t?We(He(t)).deep_link_id:null,r=We(He(e)).deep_link_id;return(r?We(He(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var si=function(){"use strict";function t(){e(z)(this,t),this.providerId=t.PROVIDER_ID}return e(K)(t,null,[{key:"credential",value:function(e,t){return Yr._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=ai.parseLink(t);return En(n,"argument-error"),Yr._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();si.PROVIDER_ID="password",si.EMAIL_PASSWORD_SIGN_IN_METHOD="password",si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ui=function(){"use strict";function t(n){e(z)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(K)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),ci=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){var t;return e(z)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(K)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(p)(this.scopes)}}]),r}(ui),li=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){return e(z)(this,r),n.call(this,"facebook.com")}return e(K)(r,null,[{key:"credential",value:function(e){return $r._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(ci);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */li.FACEBOOK_SIGN_IN_METHOD="facebook.com",li.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hi=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){var t;return e(z)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(K)(r,null,[{key:"credential",value:function(e,t){return $r._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(ci);hi.GOOGLE_SIGN_IN_METHOD="google.com",hi.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fi=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){return e(z)(this,r),n.call(this,"github.com")}return e(K)(r,null,[{key:"credential",value:function(e){return $r._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(ci);fi.GITHUB_SIGN_IN_METHOD="github.com",fi.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var di=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){return e(z)(this,r),n.call(this,"twitter.com")}return e(K)(r,null,[{key:"credential",value:function(e,t){return $r._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(ci);function pi(e,t){return vi.apply(this,arguments)}function vi(){return(vi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",zn(n,"POST","/v1/accounts:signUp",Bn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */di.TWITTER_SIGN_IN_METHOD="twitter.com",di.PROVIDER_ID="twitter.com";var yi=function(){"use strict";function t(n){e(z)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(K)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(u).mark((function a(){var s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gr._fromIdTokenResponse(n,i,o);case 2:return s=e.sent,c=mi(i),l=new t({user:s,providerId:c,_tokenResponse:i,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return e(a)(e(u).mark((function o(){var a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return a=mi(i),e.abrupt("return",new t({user:n,providerId:a,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),o)})))()}}]),t}();function mi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gi=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(t,i,o,a){var s,u;return e(z)(this,r),(s=n.call(this,i.code,i.message)).operationType=o,s.user=a,Object.setPrototypeOf(e(ee)(s),r.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:o},s}return e(K)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(xe);function _i(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw gi._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(e,t){return bi.apply(this,arguments)}function bi(){return bi=e(a)(e(u).mark((function t(n,r){var i,o,a=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.length>2&&void 0!==a[2]&&a[2],e.t0=ir,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return o=e.sent,e.abrupt("return",yi._forOperation(n,"link",o));case 14:case"end":return e.stop()}}),t)}))),bi.apply(this,arguments)}function wi(e,t){return Ii.apply(this,arguments)}function Ii(){return Ii=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(u).mark((function t(n,r){var i,o,a,s,c,l,h,f=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=n.auth,s="reauthenticate",e.prev=4,e.next=7,ir(n,_i(a,s,r,n),i);case 7:return En((c=e.sent).idToken,a,"internal-error"),En(l=rr(c.idToken),a,"internal-error"),h=l.sub,En(n.uid===h,a,"user-mismatch"),e.abrupt("return",yi._forOperation(n,s,c));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(o=e.t0)||void 0===o?void 0:o.code)&&kn(a,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),Ii.apply(this,arguments)}function Ei(e,t){return Ti.apply(this,arguments)}function Ti(){return Ti=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(u).mark((function t(n,r){var i,o,a,s,c=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],o="signIn",e.next=4,_i(n,o,r);case 4:return a=e.sent,e.next=7,yi._fromIdTokenResponse(n,o,a);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),Ti.apply(this,arguments)}function Ci(e,t){return xi.apply(this,arguments)}function xi(){return(xi=e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ei(jr(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Si(e,t,n){return Ri.apply(this,arguments)}function Ri(){return(Ri=e(a)(e(u).mark((function t(n,r,i){var o,a,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=jr(n),e.next=3,pi(o,{returnSecureToken:!0,email:r,password:i});case 3:return a=e.sent,e.next=6,yi._fromIdTokenResponse(o,"signIn",a);case 6:return s=e.sent,e.next=9,o._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oi(e,t){return qn(e,"POST","/v2/accounts/mfaEnrollment:start",Bn(e,t))}new WeakMap;var Ni="__sak",Pi=function(){"use strict";function t(n,r){e(z)(this,t),this.storageRetriever=n,this.type=r}return e(K)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Ni,"1"),this.storage.removeItem(Ni),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ai=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){var t,i;return e(z)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(Tr(i=Ie())||Nr(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=Lr(),t._shouldAllowMigration=!0,t}return e(K)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),u=this.localCache[a];s!==u&&e(a,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var o=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},a=this.storage.getItem(r);Ar()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,o=this;return e(a)(e(u).mark((function a(){return e(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(ln)(e(dn)(r.prototype),"_set",i).call(o,t,n);case 2:o.localCache[t]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(a)(e(u).mark((function o(){var a;return e(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(ln)(e(dn)(r.prototype),"_get",n).call(i,t);case 2:return a=o.sent,i.localCache[t]=JSON.stringify(a),o.abrupt("return",a);case 5:case"end":return o.stop()}}),o)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(a)(e(u).mark((function o(){return e(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(ln)(e(dn)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return o.stop()}}),o)})))()}}]),r}(Pi);Ai.type="LOCAL";var Li=Ai,Di=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){return e(z)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(K)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Pi);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Di.type="SESSION";var Mi=Di;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){return Promise.all(t.map(function(){var t=e(a)(e(u).mark((function t(n){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ji=function(){"use strict";function t(n){e(z)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(K)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o,s,c,l,h,f,d;return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=(i=t).data,s=o.eventId,c=o.eventType,l=o.data,null==(h=n.handlersMap[c])?void 0:h.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:c}),f=Array.from(h).map(function(){var t=e(a)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,Ui(f);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:c,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ji.receivers=[];var Bi=function(){"use strict";function t(n){e(z)(this,t),this.target=n,this.handlers=new Set}return e(K)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(u).mark((function o(){var a,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,o){var u=Fi("",20);a.port1.start();var l=setTimeout((function(){o(new Error("unsupported_event"))}),r);c={messageChannel:a,onMessage:function(t){var n=t;if(n.data.eventId===u)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),o(new Error("invalid_response"))}}},i.handlers.add(c),a.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:u,data:n},[a.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),o)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wi(){return void 0!==qi().WorkerGlobalScope&&"function"==typeof qi().importScripts}function Hi(){return Vi.apply(this,arguments)}function Vi(){return(Vi=e(a)(e(u).mark((function t(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zi="firebaseLocalStorageDb",Ki="firebaseLocalStorage",Gi="fbase_key",Ji=function(){"use strict";function t(n){e(z)(this,t),this.request=n}return e(K)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function Yi(e,t){return e.transaction([Ki],t?"readwrite":"readonly").objectStore(Ki)}function Qi(){var e=indexedDB.deleteDatabase(zi);return new Ji(e).toPromise()}function Xi(){var t=indexedDB.open(zi,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Ki,{keyPath:Gi})}catch(e){r(e)}})),t.addEventListener("success",e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Ki)){e.next=12;break}return i.close(),e.next=5,Qi();case 5:return e.t0=n,e.next=8,Xi();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function $i(e,t,n){return Zi.apply(this,arguments)}function Zi(){return(Zi=e(a)(e(u).mark((function t(n,r,i){var o,a;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Yi(n,!0).put((o={},e(G)(o,Gi,r),e(G)(o,"value",i),o)),t.abrupt("return",new Ji(a).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function eo(e,t){return to.apply(this,arguments)}function to(){return(to=e(a)(e(u).mark((function t(n,r){var i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Yi(n,!1).get(r),e.next=3,new Ji(i).toPromise();case 3:return o=e.sent,e.abrupt("return",void 0===o?null:o.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function no(e,t){var n=Yi(e,!0).delete(t);return new Ji(n).toPromise()}var ro=function(){"use strict";function t(){e(z)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(K)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Xi();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return o=e.sent,e.next=8,t(o);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Wi()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(u).mark((function n(){return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=ji._getInstance(Wi()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(a)(e(u).mark((function n(r,i){var o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return o=e.sent,e.abrupt("return",{keyProcessed:o.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r,i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Hi();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Bi(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(o=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=o[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=o[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(u).mark((function t(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Xi();case 5:return n=e.sent,e.next=8,$i(n,Ni,"1");case 8:return e.next=10,no(n,Ni);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(u).mark((function i(){return e(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(a)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return $i(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return eo(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return no(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r,i,o,a,s,c,l,h,f,d,p,v,y,m,g,_,k;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Yi(e,!1).getAll();return new Ji(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],o=new Set,a=!0,s=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();!(a=(h=l.next()).done);a=!0)f=h.value,d=f.fbase_key,p=f.value,o.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(p)&&(t.notifyListeners(d,p),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,c=e.t0;case 18:e.prev=18,e.prev=19,a||null==l.return||l.return();case 21:if(e.prev=21,!s){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,y=!1,m=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(v=(_=g.next()).done);v=!0)k=_.value,t.localCache[k]&&!o.has(k)&&(t.notifyListeners(k,null),i.push(k));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),y=!0,m=e.t1;case 35:e.prev=35,e.prev=36,v||null==g.return||g.return();case 38:if(e.prev=38,!y){e.next=41;break}throw m;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();ro.type="LOCAL";var io=ro;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e,t){return qn(e,"POST","/v2/accounts/mfaSignIn:start",Bn(e,t))}function ao(e){return new Promise((function(t,n){var r,i,o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=function(e){var t=bn("internal-error");t.customData=e,n(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(o)}))}function so(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
so("rcb"),new Ln(3e4,6e4);var uo="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e,t,n){return lo.apply(this,arguments)}function lo(){return(lo=e(a)(e(u).mark((function t(n,r,i){var o,a,s,c,l,h,f,d;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(a=e.sent,e.prev=4,En("string"==typeof a,n,"argument-error"),En(i.type===uo,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=s.session,!("phoneNumber"in s)){e.next=19;break}return En("enroll"===c.type,n,"internal-error"),e.next=15,Oi(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:a}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return En("signin"===c.type,n,"internal-error"),En(h=(null===(o=s.multiFactorHint)||void 0===o?void 0:o.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,oo(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:a}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Zr(n,{phoneNumber:s.phoneNumber,recaptchaToken:a});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ho=function(){"use strict";function t(n){e(z)(this,t),this.providerId=t.PROVIDER_ID,this.auth=jr(n)}return e(K)(t,[{key:"verifyPhoneNumber",value:function(e,t){return co(this.auth,e,Qe(t))}}],[{key:"credential",value:function(e,t){return oi._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?oi._fromTokenResponse(n,r):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fo(e,t){return t?Sn(t):(En(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ho.PROVIDER_ID="phone",ho.PHONE_SIGN_IN_METHOD="phone";var po=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(t){var i;return e(z)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(K)(r,[{key:"_getIdTokenResponse",value:function(e){return Qr(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Qr(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Qr(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Br);function vo(e){return Ei(e.auth,new po(e),e.bypassAuthState)}function yo(e){var t=e.auth,n=e.user;return En(n,t,"internal-error"),wi(n,new po(e),e.bypassAuthState)}function mo(e){return go.apply(this,arguments)}function go(){return(go=e(a)(e(u).mark((function t(n){var r,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,En(i=n.user,r,"internal-error"),e.abrupt("return",ki(i,new po(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _o=function(){"use strict";function t(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(z)(this,t),this.auth=n,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(K)(t,[{key:"execute",value:function(){var t=this;return new Promise(function(){var n=e(a)(e(u).mark((function n(r,i){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),n,null,[[1,10]])})));return function(e,t){return n.apply(this,arguments)}}())}},{key:"onAuthEvent",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o,a,s,c,l,h;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,o=t.sessionId,a=t.postBody,s=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return n.reject(c),e.abrupt("return");case 4:return h={auth:n.auth,requestUri:i,sessionId:o,tenantId:s||void 0,postBody:a||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(h);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vo;case"linkViaPopup":case"linkViaRedirect":return mo;case"reauthViaPopup":case"reauthViaRedirect":return yo;default:kn(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),ko=new Ln(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bo=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(t,i,o,a,s){var u;return e(z)(this,r),(u=n.call(this,t,i,a,s)).provider=o,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(ee)(u),u}return e(K)(r,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return En(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Cn(1===t.filter.length,"Popup operations only handle one event"),r=Fi(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(bn(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(bn(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(bn(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,ko.get())};t()}}]),r}(_o);bo.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var wo=new Map,Io=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(t,i){var o,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(z)(this,r),(o=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a)).eventId=null,o}return e(K)(r,[{key:"execute",value:function(){var t=this,n=this;return e(a)(e(u).mark((function i(){var o,a;return e(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(o=wo.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Eo(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(ln)(e(dn)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:a=i.t0,o=function(){return Promise.resolve(a)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),o=function(){return Promise.reject(i.t1)};case 20:wo.set(n.auth._key(),o);case 21:return n.bypassAuthState||wo.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",o());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,o=function(){return e(ln)(e(dn)(r.prototype),"onAuthEvent",n)};return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",o().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",o().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(a)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(_o);function Eo(e,t){return To.apply(this,arguments)}function To(){return(To=e(a)(e(u).mark((function t(n,r){var i,o,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=So(r),o=xo(n),e.next=4,o._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,o._get(i);case 8:return e.t0=e.sent,a="true"===e.t0,e.next=12,o._remove(i);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Co(e,t){wo.set(e._key(),t)}function xo(e){return Sn(e._redirectPersistence)}function So(e){return br("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e,t){return Oo.apply(this,arguments)}function Oo(){return Oo=e(a)(e(u).mark((function t(n,r){var i,o,a,s,c,l=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],o=jr(n),a=fo(o,r),s=new Io(o,a,i),e.next=6,s.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,o._persistUserIfCurrent(c.user);case 11:return e.next=13,o._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),Oo.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var No=function(){"use strict";function t(n){e(z)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(K)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ao(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Ao(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(bn(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Po(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Po(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function Po(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Ao(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Lo(e){return Do.apply(this,arguments)}function Do(){return Do=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(u).mark((function t(n){var r,i=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",qn(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),Do.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uo=/^https?/;function jo(){return(jo=e(a)(e(u).mark((function t(n){var r,i,o,a,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Lo(n);case 4:r=e.sent.authorizedDomains,i=!0,o=!1,a=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(c=s.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!Fo(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),o=!0,a=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!o){e.next=32;break}throw a;case 32:return e.finish(29);case 33:return e.finish(26);case 34:kn(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Fo(e){var t=On(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===i}if(!Uo.test(r))return!1;if(Mo.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bo=new Ln(3e4,6e4);function qo(){var t=qi().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var o,a=Object.keys(t.H)[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(p)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}var Wo=null;function Ho(e){return Wo=Wo||function(e){return new Promise((function(t,n){var r,i,o;function a(){qo(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){qo(),n(bn(e,"network-request-failed"))},timeout:Bo.get()})}if(null===(i=null===(r=qi().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=qi().gapi)||void 0===o?void 0:o.load)){var s=so("iframefcb");return qi()[s]=function(){gapi.load?a():n(bn(e,"network-request-failed"))},ao("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}a()}})).catch((function(e){throw Wo=null,e}))}(e),Wo}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vo=new Ln(5e3,15e3),zo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ko=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Go(e){var t=e.config;En(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Dn(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:Kt},i=Ko.get(e.config.apiHost);i&&(r.eid=i);var o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),"".concat(n,"?").concat(qe(r).slice(1))}function Jo(e){return Yo.apply(this,arguments)}function Yo(){return Yo=e(a)(e(u).mark((function t(n){var r,i;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ho(n);case 2:return r=t.sent,En(i=qi().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:Go(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zo,dontclear:!0},(function(t){return new Promise(function(){var r=e(a)(e(u).mark((function r(i,o){var a,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){qi().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:a=bn(n,"network-request-failed"),s=qi().setTimeout((function(){o(a)}),Vo.get()),t.ping(c).then(c,(function(){o(a)}));case 7:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}())})));case 6:case"end":return t.stop()}}),t)}))),Yo.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xo="_blank",$o="http://localhost",Zo=function(){"use strict";function t(n){e(z)(this,t),this.window=n,this.associatedEvent=null}return e(K)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function ea(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Qo),{width:i.toString(),height:o.toString(),top:a,left:s}),l=Ie().toLowerCase();r&&(u=Cr(l)?Xo:r),Er(l)&&(n=n||$o,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(J)(n,2),i=r[0],o=r[1];return"".concat(t).concat(i,"=").concat(o,",")}),"");if(Pr(l)&&"_self"!==u)return ta(n||"",u),new Zo(null);var f=window.open(n||"",u,h);En(f,t,"popup-blocked");try{f.focus()}catch(e){}return new Zo(f)}function ta(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var na="__/auth/handler",ra="emulator/auth/handler";function ia(t,n,r,i,o,a){En(t.config.authDomain,t,"auth-domain-config-required"),En(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:Kt,eventId:o};if(n instanceof ui){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",Ue(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,f=Object.entries(a||{})[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=e(J)(h.value,2),p=d[0],v=d[1];s[p]=v}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(n instanceof ci){var y=n.getScopes().filter((function(e){return""!==e}));y.length>0&&(s.scopes=y.join(","))}t.tenantId&&(s.tid=t.tenantId);var m,g,_=s,k=!0,b=!1,w=void 0;try{for(var I,E=Object.keys(_)[Symbol.iterator]();!(k=(I=E.next()).done);k=!0){var T=I.value;void 0===_[T]&&delete _[T]}}catch(e){b=!0,w=e}finally{try{k||null==E.return||E.return()}finally{if(b)throw w}}return"".concat((m=t,g=m.config,g.emulator?Dn(g,ra):"https://".concat(g.authDomain,"/").concat(na)),"?").concat(qe(_).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var oa="webStorageSupport",aa=function(){"use strict";function t(){e(z)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mi,this._completeRedirectFn=Ro,this._overrideRedirectResult=Co}return e(K)(t,[{key:"_openPopup",value:function(t,n,r,i){var o=this;return e(a)(e(u).mark((function a(){var s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Cn(null===(s=o.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),c=ia(t,n,r,On(),i),e.abrupt("return",ea(t,c,Fi()));case 4:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var o=this;return e(a)(e(u).mark((function a(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o._originValidation(t);case 2:return a=ia(t,n,r,On(),i),qi().location.href=a,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,o=r.promise;return i?Promise.resolve(i):(Cn(o,"If manager is not set, promise should be"),o)}var a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch((function(){delete t.eventManagers[n]})),a}},{key:"initAndGetManager",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Jo(t);case 2:return i=e.sent,o=new No(t),i.register("authEvent",(function(e){return En(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:o.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:o},n.iframes[t._key()]=i,e.abrupt("return",o);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(oa,{type:oa},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),kn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return jo.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Lr()||Tr()||Nr()}}]),t}(),sa=aa,ua=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(t){var i;return e(z)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(K)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return qn(e,"POST","/v2/accounts/mfaEnrollment:finalize",Bn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return qn(e,"POST","/v2/accounts/mfaSignIn:finalize",Bn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function t(n){e(z)(this,t),this.factorId=n}return e(K)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Tn("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(z)(this,t)}return e(K)(t,null,[{key:"assertion",value:function(e){return ua._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var ca,la="@firebase/auth",ha="0.20.7",fa=function(){"use strict";function t(n){e(z)(this,t),this.auth=n,this.internalListeners=new Map}return e(K)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){En(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();ca="Browser",qt(new Xe("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=r.options,a=o.apiKey,s=o.authDomain;return function(e,t){En(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),En(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:a,authDomain:s,clientPlatform:ca,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dr(ca)},i=new Ur(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),qt(new Xe("auth-internal",(function(e){var t=jr(e.getProvider("auth").getImmediate());return new fa(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(la,ha,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ca)),Jt(la,ha,"esm2017");ee=o("ds8z5"),z=o("8MBJY"),K=o("a2hTj"),te=o("eYQtU");var da=o("l5bVx"),pa=(ce=o("2MbLg"),o("6qd2L")),va="@firebase/database",ya="0.13.6",ma="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ga,_a=function(){"use strict";function t(n){e(z)(this,t),this.domStorage_=n,this.prefix_="firebase:"}return e(K)(t,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Ne(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),t}(),ka=function(){"use strict";function t(){e(z)(this,t),this.cache_={},this.isInMemoryStorage=!0}return e(K)(t,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return De(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),t}(),ba=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new _a(t)}}catch(e){}return new ka},wa=ba("localStorage"),Ia=ba("sessionStorage"),Ea=new ct("@firebase/database"),Ta=(ga=1,function(){return ga++}),Ca=function(e){var t=Je(e),n=new Ve;n.update(t);var r=n.digest();return ye.encodeByteArray(r)},xa=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var o=t[i];Array.isArray(o)||o&&"object"==typeof o&&"number"==typeof o.length?r+=xa.apply(null,o):r+="object"==typeof o?Pe(o):o,r+=" "}return r},Sa=null,Ra=!0,Oa=function(e,t){de(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Ea.logLevel=et.VERBOSE,Sa=Ea.log.bind(Ea),t&&Ia.set("logging_enabled",!0)):"function"==typeof e?Sa=e:(Sa=null,Ia.remove("logging_enabled"))},Na=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===Ra&&(Ra=!1,null===Sa&&!0===Ia.get("logging_enabled")&&Oa(!0)),Sa){var r=xa.apply(null,t);Sa(r)}},Pa=function(t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];Na.apply(void 0,[t].concat(e(p)(r)))}},Aa=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+xa.apply(void 0,e(p)(n));Ea.error(i)},La=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(xa.apply(void 0,e(p)(n)));throw Ea.error(i),new Error(i)},Da=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+xa.apply(void 0,e(p)(n));Ea.warn(i)},Ma=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Ua="[MIN_NAME]",ja="[MAX_NAME]",Fa=function(e,t){if(e===t)return 0;if(e===Ua||t===ja)return-1;if(t===Ua||e===ja)return 1;var n=Ya(e),r=Ya(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},Ba=function(e,t){return e===t?0:e<t?-1:1},qa=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Pe(t))},Wa=function(e){if("object"!=typeof e||null===e)return Pe(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=Pe(t[i]),r+=":",r+=Wa(e[t[i]]);return r+="}"},Ha=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var za=function(e){de(!Ma(e),"Invalid JSON number");var t,n,r,i,o,a=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),a))+a,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(o=52;o;o-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(o=0;o<64;o+=8){var l=parseInt(u.substr(o,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var Ka=new RegExp("^-?(0*)\\d{1,10}$"),Ga=-2147483648,Ja=2147483647,Ya=function(e){if(Ka.test(e)){var t=Number(e);if(t>=Ga&&t<=Ja)return t}return null},Qa=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw Da("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Xa=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},$a=function(){"use strict";function t(n,r){var i=this;e(z)(this,t),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return e(K)(t,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){Da('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),t}(),Za=function(){"use strict";function t(n,r,i){var o=this;e(z)(this,t),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return o.auth_=e}))}return e(K)(t,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(Na("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Da(e)}}]),t}(),es=function(){"use strict";function t(n){e(z)(this,t),this.accessToken=n}return e(K)(t,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),t}();es.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ts="5",ns=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rs="websocket",is="long_polling",os=function(){"use strict";function t(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]&&arguments[6];e(z)(this,t),this.secure=r,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=s,this.includeNamespaceInQueryParams=u,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wa.get("host:"+n)||this._host}return e(K)(t,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wa.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),t}();function as(e,t,n){var r;if(de("string"==typeof t,"typeof type must == string"),de("object"==typeof n,"typeof params must == object"),t===rs)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==is)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return Va(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ss=function(){"use strict";function t(){e(z)(this,t),this.counters_={}}return e(K)(t,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;De(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return ke(this.counters_)}}]),t}(),us={},cs={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e){var t=e.toString();return us[t]||(us[t]=new ss),us[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hs=function(){"use strict";function t(n){e(z)(this,t),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e(K)(t,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&Qa((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var o=0;o<i.length;++o)n(o);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),t}(),fs="start",ds="close",ps=function(){"use strict";function t(n,r,i,o,a,s,u){var c=this;e(z)(this,t),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.transportSessionId=s,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pa(n),this.stats_=ls(r),this.urlFn=function(e){return c.appCheckToken&&(e.ac=c.appCheckToken),as(r,is,e)}}return e(K)(t,[{key:"open",value:function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hs(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Ce()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var t=r;if(!r.isClosed_){r.scriptTagHolder=new vs((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=e(J)(r,5),a=o[0],s=o[1],u=o[2];o[3],o[4];if(t.incrementIncomingBytes_(r),t.scriptTagHolder)if(t.connectTimeoutTimer_&&(clearTimeout(t.connectTimeoutTimer_),t.connectTimeoutTimer_=null),t.everConnected_=!0,a===fs)t.id=s,t.password=u;else{if(a!==ds)throw new Error("Unrecognized command received: "+a);if(s){var c=t;t.scriptTagHolder.sendNewPolls=!1,t.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else t.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=e(J)(r,2),a=o[0],s=o[1];t.incrementIncomingBytes_(r),t.myPacketOrderer.handleResponse(a,s)}),(function(){t.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=ts,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&ns.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=Pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=me(t),r=Ha(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!Ce()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=Pe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){t.forceAllow_=!0}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!Ce()&&(!!t.forceAllow_||!(t.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),t}(),vs=function(){"use strict";function t(n,r,i,o){if(e(z)(this,t),this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Ce())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=Ta(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=t.createIFrame_();var a="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))a='<script>document.domain="'+document.domain+'";<\/script>';var s="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){Na("frame writing exception"),e.stack&&Na(e.stack),Na(e)}}}return e(K)(t,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.innerHTML="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;Ce()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){Na("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Na("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),t}(),ys=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"undefined"!=typeof MozWebSocket?ys=MozWebSocket:"undefined"!=typeof WebSocket&&(ys=WebSocket);var ms=function(){"use strict";function t(n,r,i,o,a,s,u){e(z)(this,t),this.connId=n,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pa(this.connId),this.stats_=ls(r),this.connURL=t.connectionURL_(r,s,u,o,i),this.nodeAdmin=r.nodeAdmin}return e(K)(t,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wa.set("previous_websocket_failure",!0);try{var r;if(Ce()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(ts,"/").concat(ma,"/").concat(pa.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var o={},a=0===this.connURL.indexOf("wss://")?o.HTTPS_PROXY||o.https_proxy:o.HTTP_PROXY||o.http_proxy;a&&(r.proxy={origin:a})}this.mySock=new ys(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){wa.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=Ne(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(de(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=Pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=Ha(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var o={};return o.v=ts,!Ce()&&"undefined"!=typeof location&&location.hostname&&ns.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),r&&(o.ac=r),i&&(o.p=i),as(e,rs,o)}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ys&&!t.forceDisallow_}},{key:"previouslyFailed",value:function(){return wa.isInMemoryStorage||!0===wa.get("previous_websocket_failure")}}]),t}();ms.responsesRequiredToBeHealthy=2,ms.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gs=function(){"use strict";function t(n){e(z)(this,t),this.initTransports_(n)}return e(K)(t,[{key:"initTransports_",value:function(e){var n=ms&&ms.isAvailable(),r=n&&!ms.previouslyFailed();if(e.webSocketOnly&&(n||Da("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ms];else{var i=this.transports_=[],o=!0,a=!1,s=void 0;try{for(var u,c=t.ALL_TRANSPORTS[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){a=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw s}}t.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[ps,ms]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),t}();gs.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _s=function(){"use strict";function t(n,r,i,o,a,s,u,c,l,h){e(z)(this,t),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=s,this.onReady_=u,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pa("c:"+this.id+":"),this.transportManager_=new gs(r),this.log_("Connection created"),this.start_()}return e(K)(t,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xa((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=qa("t",e),n=qa("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=qa("t",e),n=qa("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=qa("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Aa("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Aa("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ts!==n&&Da("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Xa((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xa((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),t}(),ks=function(){"use strict";function t(){e(z)(this,t)}return e(K)(t,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),t}(),bs=function(){"use strict";function t(n){e(z)(this,t),this.allowedEvents_=n,this.listeners_={},de(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return e(K)(t,[{key:"trigger",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[t]))for(var o=e(p)(this.listeners_[t]),a=0;a<o.length;a++)o[a].callback.apply(o[a].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){de(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),t}(),ws=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){var t;return e(z)(this,r),(t=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ee()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}return e(K)(r,[{key:"getInitialEvent",value:function(e){return de("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(bs),Is=function(){"use strict";function t(n,r){if(e(z)(this,t),void 0===r){this.pieces_=n.split("/");for(var i=0,o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return e(K)(t,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),t}();function Es(){return new Is("")}function Ts(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Cs(e){return e.pieces_.length-e.pieceNum_}function xs(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new Is(e.pieces_,t)}function Ss(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Rs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function Os(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Is(t,0)}function Ns(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Is)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var o=t.split("/"),a=0;a<o.length;a++)o[a].length>0&&n.push(o[a]);return new Is(n,0)}function Ps(e){return e.pieceNum_>=e.pieces_.length}function As(e,t){var n=Ts(e),r=Ts(t);if(null===n)return t;if(n===r)return As(xs(e),xs(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ls(e,t){if(Cs(e)!==Cs(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ds(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(Cs(e)>Cs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var Ms=function t(n,r){"use strict";e(z)(this,t),this.errorPrefix_=r,this.parts_=Rs(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=Ye(this.parts_[i]);Us(this)};function Us(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+js(e))}function js(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fs=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){var t,i,o;return e(z)(this,r),t=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(o="visibilitychange",i="hidden"):void 0!==document.mozHidden?(o="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(o="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(o="webkitvisibilitychange",i="webkitHidden")),t.visible_=!0,o&&document.addEventListener(o,(function(){var e=!document[i];e!==t.visible_&&(t.visible_=e,t.trigger("visible",e))}),!1),t}return e(K)(r,[{key:"getInitialEvent",value:function(e){return de("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(bs),Bs=1e3,qs=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(t,i,o,a,s,u,c,l){var h;if(e(z)(this,r),(h=n.call(this)).repoInfo_=t,h.applicationId_=i,h.onDataUpdate_=o,h.onConnectStatus_=a,h.onServerInfoUpdate_=s,h.authTokenProvider_=u,h.appCheckTokenProvider_=c,h.authOverride_=l,h.id=r.nextPersistentConnectionId_++,h.log_=Pa("p:"+h.id+":"),h.interruptReasons_={},h.listens=new Map,h.outstandingPuts_=[],h.outstandingGets_=[],h.outstandingPutCount_=0,h.outstandingGetCount_=0,h.onDisconnectRequestQueue_=[],h.connected_=!1,h.reconnectDelay_=Bs,h.maxReconnectDelay_=3e5,h.securityDebugCallback_=null,h.lastSessionId=null,h.establishConnectionTimer_=null,h.visible_=!1,h.requestCBHash_={},h.requestNumber_=0,h.realtime_=null,h.authToken_=null,h.appCheckToken_=null,h.forceTokenRefresh_=!1,h.invalidAuthTokenCount_=0,h.invalidAppCheckTokenCount_=0,h.firstConnection_=!0,h.lastConnectionAttemptTime_=null,h.lastConnectionEstablishedTime_=null,l&&!Ce())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return Fs.getInstance().on("visible",h.onVisible_,e(ee)(h)),-1===t.host.indexOf("fblocal")&&ws.getInstance().on("online",h.onOnline_,e(ee)(h)),h}return e(K)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Pe(i)),de(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new we,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),de(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),de(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");var a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);var a={p:i};e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest("q",a,(function(a){var s=a.d,u=a.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(o))===e&&(t.log_("listen response",a),"ok"!==u&&t.removeListen_(i,o),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=Ae(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=Le(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),de(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;var a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+Pe(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Aa("Unrecognized action received from server: "+Pe(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;de(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Bs),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var t=this;return e(a)(e(u).mark((function n(){var i,o,a,s,c,l,h,f,d,p,v,y,m;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.shouldReconnect_()){n.next=31;break}return t.log_("Making a connection attempt"),t.lastConnectionAttemptTime_=(new Date).getTime(),t.lastConnectionEstablishedTime_=null,i=t.onDataMessage_.bind(t),o=t.onReady_.bind(t),a=t.onRealtimeDisconnect_.bind(t),s=t.id+":"+r.nextConnectionId_++,c=t.lastSessionId,l=!1,h=null,f=function(){h?h.close():(l=!0,a())},d=function(e){de(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(e)},t.realtime_={close:f,sendRequest:d},p=t.forceTokenRefresh_,t.forceTokenRefresh_=!1,n.prev=16,n.t0=e(J),n.next=20,Promise.all([t.authTokenProvider_.getToken(p),t.appCheckTokenProvider_.getToken(p)]);case 20:n.t1=n.sent,v=(0,n.t0)(n.t1,2),y=v[0],m=v[1],l?Na("getToken() completed but was canceled"):(Na("getToken() completed. Creating connection."),t.authToken_=y&&y.accessToken,t.appCheckToken_=m&&m.token,h=new _s(s,t.repoInfo_,t.applicationId_,t.appCheckToken_,t.authToken_,i,o,a,(function(e){Da(e+" ("+t.repoInfo_.toString()+")"),t.interrupt("server_kill")}),c)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),t.log_("Failed to get token: "+n.t2),l||(t.repoInfo_.nodeAdmin&&Da(n.t2),f());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){Na("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){Na("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ue(this.interruptReasons_)&&(this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return Wa(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new Is(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){Na("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){Na("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,o=void 0;try{for(var a,s=this.listens.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}for(var f=0;f<this.outstandingPuts_.length;f++)this.outstandingPuts_[f]&&this.sendPut_(f);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var p=0;p<this.outstandingGets_.length;p++)this.outstandingGets_[p]&&this.sendGet_(p)}},{key:"sendConnectStats_",value:function(){var e={},t="js";Ce()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ma.replace(/\./g,"-")]=1,Ee()?e["framework.cordova"]=1:Te()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=ws.getInstance().currentlyOnline();return Ue(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&De(e,"w")){var n=Me(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Da("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(ks);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qs.nextPersistentConnectionId_=0,qs.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ws,Hs=function(){"use strict";function t(n,r){e(z)(this,t),this.name=n,this.node=r}return e(K)(t,null,[{key:"Wrap",value:function(e,n){return new t(e,n)}}]),t}(),Vs=function(){"use strict";function t(){e(z)(this,t)}return e(K)(t,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new Hs(Ua,e),r=new Hs(Ua,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return Hs.MIN}}]),t}(),zs=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){return e(z)(this,r),n.apply(this,arguments)}return e(K)(r,[{key:"compare",value:function(e,t){return Fa(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw pe("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return Hs.MIN}},{key:"maxPost",value:function(){return new Hs(ja,Ws)}},{key:"makePost",value:function(e,t){return de("string"==typeof e,"KeyIndex indexValue must always be a string."),new Hs(e,Ws)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return Ws},set:function(e){Ws=e}}]),r}(Vs),Ks=new zs,Gs=function(){"use strict";function t(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;e(z)(this,t),this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,o&&(s*=-1),s<0)n=this.isReverse_?n.left:n.right;else{if(0===s){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return e(K)(t,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),t}(),Js=function(){"use strict";function t(n,r,i,o,a){e(z)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=o?o:Xs.EMPTY_NODE,this.right=null!=a?a:Xs.EMPTY_NODE}return e(K)(t,[{key:"copy",value:function(e,n,r,i,o){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return Xs.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Xs.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight_",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Js.RED=!0,Js.BLACK=!1;var Ys,Qs=function(){"use strict";function t(){e(z)(this,t)}return e(K)(t,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Js(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),t}(),Xs=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.EMPTY_NODE;e(z)(this,t),this.comparator_=n,this.root_=r}return e(K)(t,[{key:"insert",value:function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Js.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Js.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new Gs(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new Gs(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new Gs(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new Gs(this.root_,null,this.comparator_,!0,e)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $s(e,t){return Fa(e.name,t.name)}function Zs(e,t){return Fa(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xs.EMPTY_NODE=new Qs;var eu,tu,nu,ru=function(e){return"number"==typeof e?"number:"+za(e):"string:"+e},iu=function(e){if(e.isLeafNode()){var t=e.val();de("string"==typeof t||"number"==typeof t||"object"==typeof t&&De(t,".sv"),"Priority must be a string or number.")}else de(e===Ys||e.isEmpty(),"priority of unexpected type.");de(e===Ys||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},ou=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.__childrenNodeConstructor.EMPTY_NODE;e(z)(this,t),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,de(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),iu(this.priorityNode_)}return e(K)(t,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(e){return new t(this.value_,e)}},{key:"getImmediateChild",value:function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(e){return Ps(e)?this:".priority"===Ts(e)?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(e,n){var r=Ts(e);return null===r?n:n.isEmpty()&&".priority"!==r?this:(de(".priority"!==r||1===Cs(e),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(xs(e),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+ru(this.priorityNode_.val())+":");var n=e(da)(this.value_);t+=n+":",t+="number"===n?za(this.value_):this.value_,this.lazyHash_=Ca(t)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(de(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}},{key:"compareToLeafNode_",value:function(n){var r=e(da)(n.value_),i=e(da)(this.value_),o=t.VALUE_TYPE_ORDER.indexOf(r),a=t.VALUE_TYPE_ORDER.indexOf(i);return de(o>=0,"Unknown leaf type: "+r),de(a>=0,"Unknown leaf type: "+i),o===a?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:a-o}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return eu},set:function(e){eu=e}}]),t}();ou.VALUE_TYPE_ORDER=["object","boolean","number","string"];var au,su,uu=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){return e(z)(this,r),n.apply(this,arguments)}return e(K)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?Fa(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return Hs.MIN}},{key:"maxPost",value:function(){return new Hs(ja,new ou("[PRIORITY-POST]",nu))}},{key:"makePost",value:function(e,t){var n=tu(e);return new Hs(t,new ou("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(Vs),cu=new uu,lu=Math.log(2),hu=function(){"use strict";function t(n){e(z)(this,t);var r;this.count=(r=n+1,parseInt(Math.log(r)/lu,10)),this.current_=this.count-1;var i,o=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&o}return e(K)(t,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),t}(),fu=function(e,t,n,r){e.sort(t);var i=function(t,r){var o,a,s=r-t;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Js(a,o.node,Js.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return o=e[u],a=n?n(o):o,new Js(a,o.node,Js.BLACK,c,l)},o=function(t){for(var r=null,o=null,a=e.length,s=function(t,r){var o=a-t,s=a;a-=t;var c=i(o+1,s),l=e[o],h=n?n(l):l;u(new Js(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(o=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,Js.BLACK):(s(h,Js.BLACK),s(h,Js.RED))}return o}(new hu(e.length));return new Xs(r||t,o)},du={},pu=function(){"use strict";function t(n,r){e(z)(this,t),this.indexes_=n,this.indexSet_=r}return e(K)(t,[{key:"get",value:function(e){var t=Me(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Xs?t:null}},{key:"hasIndex",value:function(e){return De(this.indexSet_,e.toString())}},{key:"addIndex",value:function(e,n){de(e!==Ks,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],o=!1,a=n.getIterator(Hs.Wrap),s=a.getNext();s;)o=o||e.isDefinedOn(s.node),i.push(s),s=a.getNext();r=o?fu(i,e.getCompare()):du;var u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;var l=Object.assign({},this.indexes_);return l[u]=r,new t(l,c)}},{key:"addToIndexes",value:function(e,n){var r=this;return new t(je(this.indexes_,(function(t,i){var o=Me(r.indexSet_,i);if(de(o,"Missing index implementation for "+i),t===du){if(o.isDefinedOn(e.node)){for(var a=[],s=n.getIterator(Hs.Wrap),u=s.getNext();u;)u.name!==e.name&&a.push(u),u=s.getNext();return a.push(e),fu(a,o.getCompare())}return du}var c=n.get(e.name),l=t;return c&&(l=l.remove(new Hs(e.name,c))),l.insert(e,e.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(e,n){return new t(je(this.indexes_,(function(t){if(t===du)return t;var r=n.get(e.name);return r?t.remove(new Hs(e.name,r)):t})),this.indexSet_)}}],[{key:"Default",get:function(){return de(du&&cu,"ChildrenNode.ts has not been loaded"),au=au||new t({".priority":du},{".priority":cu})}}]),t}(),vu=function(){"use strict";function t(n,r,i){e(z)(this,t),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&iu(this.priorityNode_),this.children_.isEmpty()&&de(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return e(K)(t,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||su}},{key:"updatePriority",value:function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?su:t}},{key:"getChild",value:function(e){var t=Ts(e);return null===t?this:this.getImmediateChild(t).getChild(xs(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(e,n){if(de(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n);var r,i,o=new Hs(e,n);n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(o,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(o,this.children_));var a=r.isEmpty()?su:this.priorityNode_;return new t(r,a,i)}},{key:"updateChild",value:function(e,t){var n=Ts(e);if(null===n)return t;de(".priority"!==Ts(e)||1===Cs(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(xs(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(e){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(cu,(function(a,s){n[a]=s.val(e),r++,o&&t.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):o=!1})),!e&&o&&i<2*r){var a=[];for(var s in n)a[s]=n[s];return a}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+ru(this.getPriority().val())+":"),this.forEachChild(cu,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Ca(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Hs(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new Hs(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new Hs(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,Hs.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,Hs.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yu?-1:0}},{key:"withIndex",value:function(e){if(e===Ks||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===Ks||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(cu),r=t.getIterator(cu),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===Ks?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return su||(su=new t(new Xs(Zs),null,pu.Default))}}]),t}();vu.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var yu=new(function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){return e(z)(this,r),n.call(this,new Xs(Zs),vu.EMPTY_NODE,pu.Default)}return e(K)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return vu.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(vu));Object.defineProperties(Hs,{MIN:{value:new Hs(Ua,vu.EMPTY_NODE)},MAX:{value:new Hs(ja,yu)}}),zs.__EMPTY_NODE=vu.EMPTY_NODE,ou.__childrenNodeConstructor=vu,Ys=yu,function(e){nu=e}(yu);function mu(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)return vu.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),de(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":e(da)(n))),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){var r=t;return new ou(r,mu(n))}if(t instanceof Array){var i=vu.EMPTY_NODE;return Va(t,(function(e,n){if(De(t,e)&&"."!==e.substring(0,1)){var r=mu(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(e,r))}})),i.updatePriority(mu(n))}var o=[],a=!1,s=t;if(Va(s,(function(e,t){if("."!==e.substring(0,1)){var n=mu(t);n.isEmpty()||(a=a||!n.getPriority().isEmpty(),o.push(new Hs(e,n)))}})),0===o.length)return vu.EMPTY_NODE;var u=fu(o,$s,(function(e){return e.name}),Zs);if(a){var c=fu(o,cu.getCompare());return new vu(u,mu(n),new pu({".priority":c},{".priority":cu}))}return new vu(u,mu(n),pu.Default)}!function(e){tu=e}(mu);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gu,_u,ku=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(t){var i;return e(z)(this,r),(i=n.call(this)).indexPath_=t,de(!Ps(t)&&".priority"!==Ts(t),"Can't create PathIndex with empty path or .priority key"),i}return e(K)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?Fa(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=mu(e),r=vu.EMPTY_NODE.updateChild(this.indexPath_,n);return new Hs(t,r)}},{key:"maxPost",value:function(){var e=vu.EMPTY_NODE.updateChild(this.indexPath_,yu);return new Hs(ja,e)}},{key:"toString",value:function(){return Rs(this.indexPath_,0).join("/")}}]),r}(Vs),bu=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(){return e(z)(this,r),n.apply(this,arguments)}return e(K)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?Fa(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return Hs.MIN}},{key:"maxPost",value:function(){return Hs.MAX}},{key:"makePost",value:function(e,t){var n=mu(e);return new Hs(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(Vs),wu=new bu,Iu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gu=0,_u=[];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Eu(e){return{type:"value",snapshotNode:e}}function Tu(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Cu(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function xu(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Su=function(){"use strict";function t(){e(z)(this,t),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cu}return e(K)(t,[{key:"hasStart",value:function(){return this.startSet_}},{key:"hasStartAfter",value:function(){return this.startAfterSet_}},{key:"hasEndBefore",value:function(){return this.endBeforeSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return de(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return de(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ua}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return de(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return de(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ja}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return de(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===cu}},{key:"copy",value:function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(e){var t,n={};return e.isDefault()||(e.index_===cu?t="$priority":e.index_===wu?t="$value":e.index_===Ks?t="$key":(de(e.index_ instanceof ku,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=Pe(t),e.startSet_&&(n.startAt=Pe(e.indexStartValue_),e.startNameSet_&&(n.startAt+=","+Pe(e.indexStartName_))),e.endSet_&&(n.endAt=Pe(e.indexEndValue_),e.endNameSet_&&(n.endAt+=","+Pe(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_)),n}function Ou(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==cu&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nu=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(t,i,o,a){var s;return e(z)(this,r),(s=n.call(this)).repoInfo_=t,s.onDataUpdate_=i,s.authTokenProvider_=o,s.appCheckTokenProvider_=a,s.log_=Pa("p:rest:"),s.listens_={},s}return e(K)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var o=this,a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=Ru(e._queryParams);this.restRequest_(a+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&o.onDataUpdate_(a,r,!1,n),Me(o.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=Ru(e._queryParams),r=e._path.toString(),i=new we;return this.restRequest_(r+".json",n,(function(e,n){var o=n;404===e&&(o=null,e=null),null===e?(t.onDataUpdate_(r,o,!1,null),i.resolve(o)):i.reject(new Error(o))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(o){var a=e(J)(o,2),s=a[0],u=a[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+t+"?ns="+i.repoInfo_.namespace+qe(n);i.log_("Sending REST request for "+l);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(r&&4===h.readyState){c.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);var e=null;if(h.status>=200&&h.status<300){try{e=Ne(h.responseText)}catch(e){Da("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,e)}else 401!==h.status&&404!==h.status&&Da("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(de(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(ks),Pu=function(){"use strict";function t(){e(z)(this,t),this.rootNode_=vu.EMPTY_NODE}return e(K)(t,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Au(){return{value:null,children:new Map}}function Lu(e,t,n){if(Ps(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=Ts(t);e.children.has(r)||e.children.set(r,Au()),Lu(e.children.get(r),t=xs(t),n)}}function Du(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,(function(e,r){Du(r,new Is(t.toString()+"/"+e),n)}))}var Mu,Uu,ju=function(){"use strict";function t(n){e(z)(this,t),this.collection_=n,this.last_=null}return e(K)(t,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Va(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),t}(),Fu=function(){"use strict";function t(n,r){e(z)(this,t),this.server_=r,this.statsToReport_={},this.statsListener_=new ju(n);var i=1e4+2e4*Math.random();Xa(this.reportStats_.bind(this),Math.floor(i))}return e(K)(t,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;Va(t,(function(t,i){i>0&&De(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),Xa(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Uu=Mu||(Mu={}))[Uu.OVERWRITE=0]="OVERWRITE",Uu[Uu.MERGE=1]="MERGE",Uu[Uu.ACK_USER_WRITE=2]="ACK_USER_WRITE",Uu[Uu.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var qu,Wu=function(){"use strict";function t(n,r,i){e(z)(this,t),this.path=n,this.affectedTree=r,this.revert=i,this.type=Mu.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return e(K)(t,[{key:"operationForChild",value:function(e){if(Ps(this.path)){if(null!=this.affectedTree.value)return de(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new Is(e));return new t(Es(),n,this.revert)}return de(Ts(this.path)===e,"operationForChild called for unrelated child."),new t(xs(this.path),this.affectedTree,this.revert)}}]),t}(),Hu=function(){"use strict";function t(n,r,i){e(z)(this,t),this.source=n,this.path=r,this.snap=i,this.type=Mu.OVERWRITE}return e(K)(t,[{key:"operationForChild",value:function(e){return Ps(this.path)?new t(this.source,Es(),this.snap.getImmediateChild(e)):new t(this.source,xs(this.path),this.snap)}}]),t}(),Vu=function(){"use strict";function t(n,r,i){e(z)(this,t),this.source=n,this.path=r,this.children=i,this.type=Mu.MERGE}return e(K)(t,[{key:"operationForChild",value:function(e){if(Ps(this.path)){var n=this.children.subtree(new Is(e));return n.isEmpty()?null:n.value?new Hu(this.source,Es(),n.value):new t(this.source,Es(),n)}return de(Ts(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,xs(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),t}(),zu=function(){"use strict";function t(n,r,i){e(z)(this,t),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return e(K)(t,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(Ps(e))return this.isFullyInitialized()&&!this.filtered_;var t=Ts(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(e,t,n,r,i,o){var a=r.filter((function(e){return e.type===n}));a.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw pe("Should only compare child_ events.");var r=new Hs(t.childName,t.snapshotNode),i=new Hs(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n)})),a.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Gu(e,t){return{eventCache:e,serverCache:t}}function Ju(e,t,n,r){return Gu(new zu(t,n,r),e.serverCache)}function Yu(e,t,n,r){return Gu(e.eventCache,new zu(t,n,r))}function Qu(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Xu(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $u=function(){return qu||(qu=new Xs(Ba)),qu},Zu=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$u();e(z)(this,t),this.value=n,this.children=r}return e(K)(t,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:Es(),value:this.value};if(Ps(e))return null;var n=Ts(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(xs(e),t);return null!=i?{path:Ns(new Is(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(e){if(Ps(e))return this;var n=Ts(e),r=this.children.get(n);return null!==r?r.subtree(xs(e)):new t(null)}},{key:"set",value:function(e,n){if(Ps(e))return new t(n,this.children);var r=Ts(e),i=(this.children.get(r)||new t(null)).set(xs(e),n),o=this.children.insert(r,i);return new t(this.value,o)}},{key:"remove",value:function(e){if(Ps(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=Ts(e),r=this.children.get(n);if(r){var i,o=r.remove(xs(e));return i=o.isEmpty()?this.children.remove(n):this.children.insert(n,o),null===this.value&&i.isEmpty()?new t(null):new t(this.value,i)}return this}},{key:"get",value:function(e){if(Ps(e))return this.value;var t=Ts(e),n=this.children.get(t);return n?n.get(xs(e)):null}},{key:"setTree",value:function(e,n){if(Ps(e))return n;var r,i=Ts(e),o=(this.children.get(i)||new t(null)).setTree(xs(e),n);return r=o.isEmpty()?this.children.remove(i):this.children.insert(i,o),new t(this.value,r)}},{key:"fold",value:function(e){return this.fold_(Es(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(Ns(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,Es(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(Ps(e))return null;var i=Ts(e),o=this.children.get(i);return o?o.findOnPath_(xs(e),Ns(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,Es(),t)}},{key:"foreachOnPath_",value:function(e,n,r){if(Ps(e))return this;this.value&&r(n,this.value);var i=Ts(e),o=this.children.get(i);return o?o.foreachOnPath_(xs(e),Ns(n,i),r):new t(null)}},{key:"foreach",value:function(e){this.foreach_(Es(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(Ns(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(e){var n=new t(null);return Va(e,(function(e,t){n=n.set(new Is(e),t)})),n}}]),t}(),ec=function(){"use strict";function t(n){e(z)(this,t),this.writeTree_=n}return e(K)(t,null,[{key:"empty",value:function(){return new t(new Zu(null))}}]),t}();function tc(e,t,n){if(Ps(t))return new ec(new Zu(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,o=r.value,a=As(i,t);return o=o.updateChild(a,n),new ec(e.writeTree_.set(i,o))}var s=new Zu(n),u=e.writeTree_.setTree(t,s);return new ec(u)}function nc(e,t,n){var r=e;return Va(n,(function(e,n){r=tc(r,Ns(t,e),n)})),r}function rc(e,t){if(Ps(t))return ec.empty();var n=e.writeTree_.setTree(t,new Zu(null));return new ec(n)}function ic(e,t){return null!=oc(e,t)}function oc(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(As(n.path,t)):null}function ac(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cu,(function(e,n){t.push(new Hs(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new Hs(e,n.value))})),t}function sc(e,t){if(Ps(t))return e;var n=oc(e,t);return new ec(null!=n?new Zu(n):e.writeTree_.subtree(t))}function uc(e){return e.writeTree_.isEmpty()}function cc(e,t){return lc(Es(),e.writeTree_,t)}function lc(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(de(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=lc(Ns(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Ns(e,".priority"),r)),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e,t){return Tc(t,e)}function fc(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function dc(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));de(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,o=!1,a=e.allWrites.length-1;i&&a>=0;){var s=e.allWrites[a];s.visible&&(a>=n&&pc(s,r.path)?i=!1:Ds(r.path,s.path)&&(o=!0)),a--}if(i){if(o)return function(e){e.visibleWrites=yc(e.allWrites,vc,Es()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=rc(e.visibleWrites,r.path):Va(r.children,(function(t){e.visibleWrites=rc(e.visibleWrites,Ns(r.path,t))}));return!0}return!1}function pc(e,t){if(e.snap)return Ds(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&Ds(Ns(e.path,n),t))return!0;return!1}function vc(e){return e.visible}function yc(e,t,n){for(var r=ec.empty(),i=0;i<e.length;++i){var o=e[i];if(t(o)){var a=o.path,s=void 0;if(o.snap)Ds(n,a)?r=tc(r,s=As(n,a),o.snap):Ds(a,n)&&(s=As(a,n),r=tc(r,Es(),o.snap.getChild(s)));else{if(!o.children)throw pe("WriteRecord should have .snap or .children");if(Ds(n,a))r=nc(r,s=As(n,a),o.children);else if(Ds(a,n))if(Ps(s=As(a,n)))r=nc(r,Es(),o.children);else{var u=Me(o.children,Ts(s));if(u){var c=u.getChild(xs(s));r=tc(r,Es(),c)}}}}}return r}function mc(e,t,n,r,i){if(r||i){var o=sc(e.visibleWrites,t);if(!i&&uc(o))return n;if(i||null!=n||ic(o,Es())){return cc(yc(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ds(e.path,t)||Ds(t,e.path))}),t),n||vu.EMPTY_NODE)}return null}var a=oc(e.visibleWrites,t);if(null!=a)return a;var s=sc(e.visibleWrites,t);return uc(s)?n:null!=n||ic(s,Es())?cc(s,n||vu.EMPTY_NODE):null}function gc(e,t,n,r){return mc(e.writeTree,e.treePath,t,n,r)}function _c(e,t){return function(e,t,n){var r=vu.EMPTY_NODE,i=oc(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(cu,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var o=sc(e.visibleWrites,t);return n.forEachChild(cu,(function(e,t){var n=cc(sc(o,new Is(e)),t);r=r.updateImmediateChild(e,n)})),ac(o).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return ac(sc(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function kc(e,t,n,r){return function(e,t,n,r,i){de(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=Ns(t,n);if(ic(e.visibleWrites,o))return null;var a=sc(e.visibleWrites,o);return uc(a)?i.getChild(n):cc(a,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function bc(e,t){return function(e,t){return oc(e.visibleWrites,t)}(e.writeTree,Ns(e.treePath,t))}function wc(e,t,n,r,i,o){return function(e,t,n,r,i,o,a){var s,u=sc(e.visibleWrites,t),c=oc(u,Es());if(null!=c)s=c;else{if(null==n)return[];s=cc(u,n)}if((s=s.withIndex(a)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=a.getCompare(),f=o?s.getReverseIteratorFrom(r,a):s.getIteratorFrom(r,a),d=f.getNext();d&&l.length<i;)0!==h(d,r)&&l.push(d),d=f.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,o)}function Ic(e,t,n){return function(e,t,n,r){var i=Ns(t,n),o=oc(e.visibleWrites,i);return null!=o?o:r.isCompleteForChild(n)?cc(sc(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function Ec(e,t){return Tc(Ns(e.treePath,t),e.writeTree)}function Tc(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cc=function(){"use strict";function t(){e(z)(this,t),this.changeMap=new Map}return e(K)(t,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;de("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),de(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,xu(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Cu(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Tu(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw pe("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,xu(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),t}(),xc=new(function(){"use strict";function t(){e(z)(this,t)}return e(K)(t,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),t}()),Sc=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(z)(this,t),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return e(K)(t,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new zu(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ic(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Xu(this.viewCache_),i=wc(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(e,t,n,r,i){var o,a,s=new Cc;if(n.type===Mu.OVERWRITE){var u=n;u.source.fromUser?o=Pc(e,t,u.path,u.snap,r,i,s):(de(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!Ps(u.path),o=Nc(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===Mu.MERGE){var c=n;c.source.fromUser?o=function(e,t,n,r,i,o,a){var s=t;return r.foreach((function(r,u){var c=Ns(n,r);Ac(t,Ts(c))&&(s=Pc(e,s,c,u,i,o,a))})),r.foreach((function(r,u){var c=Ns(n,r);Ac(t,Ts(c))||(s=Pc(e,s,c,u,i,o,a))})),s}(e,t,c.path,c.children,r,i,s):(de(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Dc(e,t,c.path,c.children,r,i,a,s))}else if(n.type===Mu.ACK_USER_WRITE){var l=n;o=l.revert?function(e,t,n,r,i,o){var a;if(null!=bc(r,n))return t;var s,u=new Sc(r,t,i),c=t.eventCache.getNode();if(Ps(n)||".priority"===Ts(n)){var l;if(t.serverCache.isFullyInitialized())l=gc(r,Xu(t));else{var h=t.serverCache.getNode();de(h instanceof vu,"serverChildren would be complete if leaf node"),l=_c(r,h)}s=e.filter.updateFullNode(c,l,o)}else{var f=Ts(n),d=Ic(r,f,t.serverCache);null==d&&t.serverCache.isCompleteForChild(f)&&(d=c.getImmediateChild(f)),(s=null!=d?e.filter.updateChild(c,f,d,xs(n),u,o):t.eventCache.getNode().hasChild(f)?e.filter.updateChild(c,f,vu.EMPTY_NODE,xs(n),u,o):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(a=gc(r,Xu(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,a,o))}return a=t.serverCache.isFullyInitialized()||null!=bc(r,Es()),Ju(t,s,a,e.filter.filtersNodes())}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,o,a){if(null!=bc(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(Ps(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Nc(e,t,n,u.getNode().getChild(n),i,o,s,a);if(Ps(n)){var c=new Zu(null);return u.getNode().forEachChild(Ks,(function(e,t){c=c.set(new Is(e),t)})),Dc(e,t,n,c,i,o,s,a)}return t}var l=new Zu(null);return r.foreach((function(e,t){var r=Ns(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),Dc(e,t,n,l,i,o,s,a)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==Mu.LISTEN_COMPLETE)throw pe("Unknown operation type: "+n.type);o=function(e,t,n,r,i){var o=t.serverCache,a=Yu(t,o.getNode(),o.isFullyInitialized()||Ps(n),o.isFiltered());return Oc(e,a,n,r,xc,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Qu(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Eu(Qu(t)))}}(t,o,h),{viewCache:o,changes:h}}function Oc(e,t,n,r,i,o){var a,s,u=t.eventCache;if(null!=bc(r,n))return t;if(Ps(n))if(de(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=Xu(t),l=_c(r,c instanceof vu?c:vu.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),l,o)}else{var h=gc(r,Xu(t));a=e.filter.updateFullNode(t.eventCache.getNode(),h,o)}else{var f=Ts(n);if(".priority"===f){de(1===Cs(n),"Can't have a priority with additional path components");var d=u.getNode(),p=kc(r,n,d,s=t.serverCache.getNode());a=null!=p?e.filter.updatePriority(d,p):u.getNode()}else{var v,y=xs(n);if(u.isCompleteForChild(f)){s=t.serverCache.getNode();var m=kc(r,n,u.getNode(),s);v=null!=m?u.getNode().getImmediateChild(f).updateChild(y,m):u.getNode().getImmediateChild(f)}else v=Ic(r,f,t.serverCache);a=null!=v?e.filter.updateChild(u.getNode(),f,v,y,i,o):u.getNode()}}return Ju(t,a,u.isFullyInitialized()||Ps(n),e.filter.filtersNodes())}function Nc(e,t,n,r,i,o,a,s){var u,c=t.serverCache,l=a?e.filter:e.filter.getIndexedFilter();if(Ps(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var f=Ts(n);if(!c.isCompleteForPath(n)&&Cs(n)>1)return t;var d=xs(n),p=c.getNode().getImmediateChild(f).updateChild(d,r);u=".priority"===f?l.updatePriority(c.getNode(),p):l.updateChild(c.getNode(),f,p,d,xc,null)}var v=Yu(t,u,c.isFullyInitialized()||Ps(n),l.filtersNodes());return Oc(e,v,n,i,new Sc(i,v,o),s)}function Pc(e,t,n,r,i,o,a){var s,u,c=t.eventCache,l=new Sc(i,t,o);if(Ps(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,a),s=Ju(t,u,!0,e.filter.filtersNodes());else{var h=Ts(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=Ju(t,u,c.isFullyInitialized(),c.isFiltered());else{var f,d=xs(n),p=c.getNode().getImmediateChild(h);if(Ps(d))f=r;else{var v=l.getCompleteChild(h);f=null!=v?".priority"===Ss(d)&&v.getChild(Os(d)).isEmpty()?v:v.updateChild(d,r):vu.EMPTY_NODE}if(p.equals(f))s=t;else s=Ju(t,e.filter.updateChild(c.getNode(),h,f,d,l,a),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function Ac(e,t){return e.eventCache.isCompleteForChild(t)}function Lc(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function Dc(e,t,n,r,i,o,a,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=Ps(n)?r:new Zu(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=Lc(0,t.serverCache.getNode().getImmediateChild(n),r);c=Nc(e,c,new Is(n),u,i,o,a,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var h=Lc(0,t.serverCache.getNode().getImmediateChild(n),r);c=Nc(e,c,new Is(n),h,i,o,a,s)}})),c}var Mc;function Uc(e,t){var n=Xu(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ps(t)&&!n.getImmediateChild(Ts(t)).isEmpty())?n.getChild(t):null}function jc(e,t,n,r){t.type===Mu.MERGE&&null!==t.source.queryId&&(de(Xu(e.viewCache_),"We should always have a full cache before handling merges"),de(Qu(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,o,a=e.viewCache_,s=Rc(e.processor_,a,t,n,r);return i=e.processor_,o=s.viewCache,de(o.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),de(o.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),de(s.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Fc(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Fc(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],o=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Ku(e,i,"child_removed",t,r,n),Ku(e,i,"child_added",t,r,n),Ku(e,i,"child_moved",o,r,n),Ku(e,i,"child_changed",t,r,n),Ku(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bc;function qc(e,t,n,r){var i=t.source.queryId;if(null!==i){var o=e.views.get(i);return de(null!=o,"SyncTree gave us an op for an invalid query."),jc(o,t,n,r)}var a=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;a=a.concat(jc(f,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return a}function Wc(e,t){var n=null,r=!0,i=!1,o=void 0;try{for(var a,s=e.views.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;n=n||Uc(u,t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}var Hc=function t(n){"use strict";e(z)(this,t),this.listenProvider_=n,this.syncPointTree_=new Zu(null),this.pendingWriteTree_={visibleWrites:ec.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function Vc(e,t,n,r,i){return function(e,t,n,r,i){de(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=tc(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Yc(e,new Hu({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function zc(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=fc(e.pendingWriteTree_,t),i=dc(e.pendingWriteTree_,t);if(i){var o=new Zu(null);return null!=r.snap?o=o.set(Es(),!0):Va(r.children,(function(e){o=o.set(new Is(e),!0)})),Yc(e,new Wu(r.path,o,n))}return[]}function Kc(e,t,n){return Yc(e,new Hu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Gc(e,t,n,r){var i=$c(e,r);if(null!=i){var o=Zc(i),a=o.path,s=o.queryId,u=As(a,t);return el(e,a,new Hu(Bu(s),u,n))}return[]}function Jc(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=Wc(n,As(e,t));if(r)return r}));return mc(r,t,i,n,!0)}function Yc(e,t){return Qc(t,e.syncPointTree_,null,hc(e.pendingWriteTree_,Es()))}function Qc(e,t,n,r){if(Ps(e.path))return Xc(e,t,n,r);var i=t.get(Es());null==n&&null!=i&&(n=Wc(i,Es()));var o=[],a=Ts(e.path),s=e.operationForChild(a),u=t.children.get(a);if(u&&s){var c=n?n.getImmediateChild(a):null,l=Ec(r,a);o=o.concat(Qc(s,u,c,l))}return i&&(o=o.concat(qc(i,e,r,n))),o}function Xc(e,t,n,r){var i=t.get(Es());null==n&&null!=i&&(n=Wc(i,Es()));var o=[];return t.children.inorderTraversal((function(t,i){var a=n?n.getImmediateChild(t):null,s=Ec(r,t),u=e.operationForChild(t);u&&(o=o.concat(Xc(u,i,a,s)))})),i&&(o=o.concat(qc(i,e,r,n))),o}function $c(e,t){return e.tagToQueryMap.get(t)}function Zc(e){var t=e.indexOf("$");return de(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Is(e.substr(0,t))}}function el(e,t,n){var r=e.syncPointTree_.get(t);return de(r,"Missing sync point for query tag that we're tracking"),qc(r,n,hc(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var tl=function(){"use strict";function t(n){e(z)(this,t),this.node_=n}return e(K)(t,[{key:"getImmediateChild",value:function(e){return new t(this.node_.getImmediateChild(e))}},{key:"node",value:function(){return this.node_}}]),t}(),nl=function(){"use strict";function t(n,r){e(z)(this,t),this.syncTree_=n,this.path_=r}return e(K)(t,[{key:"getImmediateChild",value:function(e){var n=Ns(this.path_,e);return new t(this.syncTree_,n)}},{key:"node",value:function(){return Jc(this.syncTree_,this.path_)}}]),t}(),rl=function(e,t,n){return e&&"object"==typeof e?(de(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?il(e[".sv"],t,n):"object"==typeof e[".sv"]?ol(e[".sv"],t):void de(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},il=function(e,t,n){if("timestamp"===e)return n.timestamp;de(!1,"Unexpected server value: "+e)},ol=function(e,t,n){e.hasOwnProperty("increment")||de(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&de(!1,"Unexpected increment value: "+r);var i=t.node();if(de(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i.getValue();return"number"!=typeof o?r:o+r},al=function(e,t,n,r){return ul(t,new nl(n,e),r)},sl=function(e,t,n){return ul(e,new tl(t),n)};function ul(e,t,n){var r,i=e.getPriority().val(),o=rl(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var a=e,s=rl(a.getValue(),t,n);return s!==a.getValue()||o!==a.getPriority().val()?new ou(s,mu(o)):e}var u=e;return r=u,o!==u.getPriority().val()&&(r=r.updatePriority(new ou(o))),u.forEachChild(cu,(function(e,i){var o=ul(i,t.getImmediateChild(e),n);o!==i&&(r=r.updateImmediateChild(e,o))})),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cl=function t(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};e(z)(this,t),this.name=n,this.parent=r,this.node=i};function ll(e,t){for(var n=t instanceof Is?t:new Is(t),r=e,i=Ts(n);null!==i;){var o=Me(r.node.children,i)||{children:{},childCount:0};r=new cl(i,r,o),i=Ts(n=xs(n))}return r}function hl(e){return e.node.value}function fl(e,t){e.node.value=t,ml(e)}function dl(e){return e.node.childCount>0}function pl(e,t){Va(e.node.children,(function(n,r){t(new cl(n,e,r))}))}function vl(e,t,n,r){n&&!r&&t(e),pl(e,(function(e){vl(e,t,!0,r)})),n&&r&&t(e)}function yl(e){return new Is(null===e.parent?e.name:yl(e.parent)+"/"+e.name)}function ml(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===hl(e)&&!dl(e)}(n),i=De(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,ml(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,ml(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}var gl=/[\[\].#$\/\u0000-\u001F\u007F]/,_l=/[\[\].#$\u0000-\u001F\u007F]/,kl=10485760,bl=function(e){return"string"==typeof e&&0!==e.length&&!gl.test(e)},wl=function(e){return"string"==typeof e&&0!==e.length&&!_l.test(e)},Il=function(e,t,n){var r=n instanceof Is?new Ms(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+js(r));if("function"==typeof t)throw new Error(e+"contains a function "+js(r)+" with contents = "+t.toString());if(Ma(t))throw new Error(e+"contains "+t.toString()+" "+js(r));if("string"==typeof t&&t.length>3495253.3333333335&&Ye(t)>kl)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+js(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,o=!1;if(Va(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(o=!0,!bl(t)))throw new Error(e+" contains an invalid key ("+t+") "+js(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,s;s=t,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(s),a.byteLength_+=Ye(s),Us(a),Il(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=Ye(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&o)throw new Error(e+' contains ".value" child '+js(r)+" in addition to actual children.")}},El=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!bl(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),wl(e)}(n))throw new Error(Ge(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},Tl=function t(){"use strict";e(z)(this,t),this.eventLists_=[],this.recursionDepth_=0};function Cl(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],o=i.getPath();null===n||Ls(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function xl(e,t,n){Cl(e,n),Sl(e,(function(e){return Ds(e,t)||Ds(t,e)}))}function Sl(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(Rl(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function Rl(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();Sa&&Na("event: "+n.toString()),Qa(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ol="repo_interrupt",Nl=function(){"use strict";function t(n,r,i,o){e(z)(this,t),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Tl,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Au(),this.transactionQueueTree_=new cl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e(K)(t,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),t}();function Pl(e,t,n){if(e.stats_=ls(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Nu(e.repoInfo_,(function(t,n,r,i){Dl(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return Ml(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new qs(e.repoInfo_,t,(function(t,n,r,i){Dl(e,t,n,r,i)}),(function(t){Ml(e,t)}),(function(t){!function(e,t){Va(t,(function(t,n){Ul(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,o;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new Fu(e.stats_,e.server_)},o=r.toString(),cs[o]||(cs[o]=i()),cs[o]),e.infoData_=new Pu,e.infoSyncTree_=new Hc({startListening:function(t,n,r,i){var o=[],a=e.infoData_.getNode(t._path);return a.isEmpty()||(o=Kc(e.infoSyncTree_,t._path,a),setTimeout((function(){i("ok")}),0)),o},stopListening:function(){}}),Ul(e,"connected",!1),e.serverSyncTree_=new Hc({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var o=i(n,r);xl(e.eventQueue_,t._path,o)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function Al(e){var t=e.infoData_.getNode(new Is(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Ll(e){return(t=(t={timestamp:Al(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Dl(e,t,n,r,i){e.dataUpdateCount++;var o=new Is(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var a=[];if(i)if(r){var s=je(n,(function(e){return mu(e)}));a=function(e,t,n,r){var i=$c(e,r);if(i){var o=Zc(i),a=o.path,s=o.queryId,u=As(a,t),c=Zu.fromObject(n);return el(e,a,new Vu(Bu(s),u,c))}return[]}(e.serverSyncTree_,o,s,i)}else{var u=mu(n);a=Gc(e.serverSyncTree_,o,u,i)}else if(r){var c=je(n,(function(e){return mu(e)}));a=function(e,t,n){var r=Zu.fromObject(n);return Yc(e,new Vu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,c)}else{var l=mu(n);a=Kc(e.serverSyncTree_,o,l)}var h=o;a.length>0&&(h=Vl(e,o)),xl(e.eventQueue_,h,a)}function Ml(e,t){Ul(e,"connected",t),!1===t&&function(e){Bl(e,"onDisconnectEvents");var t=Ll(e),n=Au();Du(e.onDisconnect_,Es(),(function(r,i){var o=al(r,i,e.serverSyncTree_,t);Lu(n,r,o)}));var r=[];Du(n,Es(),(function(t,n){r=r.concat(Kc(e.serverSyncTree_,t,n));var i=Yl(e,t);Vl(e,i)})),e.onDisconnect_=Au(),xl(e.eventQueue_,Es(),r)}(e)}function Ul(e,t,n){var r=new Is("/.info/"+t),i=mu(n);e.infoData_.updateSnapshot(r,i);var o=Kc(e.infoSyncTree_,r,i);xl(e.eventQueue_,r,o)}function jl(e){return e.nextWriteId_++}function Fl(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Ol)}function Bl(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o="";t.persistentConnection_&&(o=t.persistentConnection_.id+":"),Na.apply(void 0,[o].concat(e(p)(r)))}function ql(e,t,n){return Jc(e.serverSyncTree_,t,n)||vu.EMPTY_NODE}function Wl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Jl(e,t),hl(t)){var n=Kl(e,t);de(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&Hl(e,yl(t),n)}else dl(t)&&pl(t,(function(t){Wl(e,t)}))}function Hl(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=ql(e,t,r),o=i,a=i.hash(),s=0;s<n.length;s++){var u=n[s];de(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=As(t,u.path);o=o.updateChild(c,u.currentOutputSnapshotRaw)}var l=o.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){Bl(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var o=function(t){n[t].status=2,i=i.concat(zc(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&a.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},a=[],s=0;s<n.length;s++)o(s);Jl(e,ll(e.transactionQueueTree_,t)),Wl(e,e.transactionQueueTree_),xl(e.eventQueue_,t,i);for(var u=0;u<a.length;u++)Qa(a[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{Da("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}Vl(e,t)}}),a)}function Vl(e,t){var n=zl(e,t),r=yl(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=As(n,u.path),l=!1,h=void 0;if(de(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,o=o.concat(zc(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",o=o.concat(zc(e.serverSyncTree_,u.currentWriteId,!0));else{var f=ql(e,u.path,a);u.currentInputSnapshot=f;var d=t[r].update(f.val());if(void 0!==d){Il("transaction failed: Data returned ",d,u.path);var p=mu(d);"object"==typeof d&&null!=d&&De(d,".priority")||(p=p.updatePriority(f.getPriority()));var v=u.currentWriteId,y=Ll(e),m=sl(p,f,y);u.currentOutputSnapshotRaw=p,u.currentOutputSnapshotResolved=m,u.currentWriteId=jl(e),a.splice(a.indexOf(v),1),o=(o=o.concat(Vc(e.serverSyncTree_,u.path,m,u.currentWriteId,u.applyLocally))).concat(zc(e.serverSyncTree_,v,!0))}else l=!0,h="nodata",o=o.concat(zc(e.serverSyncTree_,u.currentWriteId,!0))}xl(e.eventQueue_,n,o),o=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],o=[],a=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Jl(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)Qa(i[u]);Wl(e,e.transactionQueueTree_)}(e,Kl(e,n),r),r}function zl(e,t){var n,r=e.transactionQueueTree_;for(n=Ts(t);null!==n&&void 0===hl(r);)r=ll(r,n),n=Ts(t=xs(t));return r}function Kl(e,t){var n=[];return Gl(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Gl(e,t,n){var r=hl(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);pl(t,(function(t){Gl(e,t,n)}))}function Jl(e,t){var n=hl(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,fl(t,n.length>0?n:void 0)}pl(t,(function(t){Jl(e,t)}))}function Yl(e,t){var n=yl(zl(e,t)),r=ll(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){Ql(e,t)})),Ql(e,r),vl(r,(function(t){Ql(e,t)})),n}function Ql(e,t){var n=hl(t);if(n){for(var r=[],i=[],o=-1,a=0;a<n.length;a++)3===n[a].status||(1===n[a].status?(de(o===a-1,"All SENT items should be at beginning of queue."),o=a,n[a].status=3,n[a].abortReason="set"):(de(0===n[a].status,"Unexpected transaction status in abort"),n[a].unwatcher(),i=i.concat(zc(e.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));-1===o?fl(t,void 0):n.length=o+1,xl(e.eventQueue_,yl(t),i);for(var s=0;s<r.length;s++)Qa(r[s])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xl=function(e,t){var n=$l(e),r=n.namespace;"firebase.com"===n.domain&&La(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||La("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Da("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new os(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Is(n.pathString)}},$l=function(e){var t="",n="",r="",i="",o="",a=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var f=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var o,a=e.split("&")[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):Da("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(a="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var d=t.slice(0,c);if("localhost"===d.toLowerCase())n="localhost";else if(d.split(".").length<=2)n=d;else{var p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),o=r}"ns"in f&&(o=f.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:a,scheme:s,pathString:i,namespace:o}},Zl=function(){"use strict";function t(n,r,i,o){e(z)(this,t),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=o}return e(K)(t,[{key:"key",get:function(){return Ps(this._path)?null:Ss(this._path)}},{key:"ref",get:function(){return new eh(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=Ou(this._queryParams),t=Wa(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return Ou(this._queryParams)}},{key:"isEqual",value:function(e){if(!((e=Qe(e))instanceof t))return!1;var n=this._repo===e._repo,r=Ls(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),t}();var eh=function(t){"use strict";e(te)(r,t);var n=e(ce)(r);function r(t,i){return e(z)(this,r),n.call(this,t,i,new Su,!1)}return e(K)(r,[{key:"parent",get:function(){var e=Os(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(Zl);!function(e){de(!Mc,"__referenceConstructor has already been defined"),Mc=e}(eh),function(e){de(!Bc,"__referenceConstructor has already been defined"),Bc=e}(eh);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var th={},nh=!1;function rh(e,t,n,r,i){var o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||La("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Na("Using default host for project ",e.options.projectId),o="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var a,s=Xl(o,i),u=s.repoInfo,c=void 0;void 0!==pa&&pa.env&&(c=pa.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(a=!0,o="http://".concat(c,"?ns=").concat(u.namespace),u=(s=Xl(o,i)).repoInfo):a=!s.repoInfo.secure;var l=i&&a?new es(es.OWNER):new Za(e.name,e.options,t);El("Invalid Firebase Database URL",s),Ps(s.path)||La("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=th[t.name];i||(i={},th[t.name]=i);var o=i[e.toURLString()];o&&La("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new Nl(e,nh,n,r),i[e.toURLString()]=o,o}(u,e,l,new $a(e.name,n));return new ih(h,e)}var ih=function(){"use strict";function t(n,r){e(z)(this,t),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return e(K)(t,[{key:"_repo",get:function(){return this._instanceStarted||(Pl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new eh(this._repo,Es())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=th[t])&&n[e.key]===e||La("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),Fl(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&La("Cannot call "+e+" on a deleted database.")}}]),t}();qs.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},qs.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){ma=Kt,qt(new Xe("database",(function(e,t){var n=t.instanceIdentifier;return rh(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),Jt(va,ya,e),Jt(va,ya,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();var oh=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var n=t;t={name:n}}var r=Object.assign({name:Mt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Vt.create("bad-app-name",{appName:String(i)});var o=jt.get(i);if(o){if(Fe(e,o.options)&&Fe(r,o.config))return o;throw Vt.create("duplicate-app",{appName:i})}var a=new nt(i),s=!0,u=!1,c=void 0;try{for(var l,h=Ft.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;a.addComponent(f)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var d=new zt(e,r,a);return jt.set(i,d),d}({apiKey:"AIzaSyAXpyPv9Yp_mmKUPpMWQb_Lv-IgFrfPCj0",authDomain:"myproject-7e992.firebaseapp.com",projectId:"myproject-7e992",storageBucket:"myproject-7e992.appspot.com",messagingSenderId:"221233745157",appId:"1:221233745157:web:9d09e7079c1e141383fb6c"}),ah=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt(),t=Wt(e,"auth");return t.isInitialized()?t.getImmediate():Rn(e,{popupRedirectResolver:sa,persistence:[io,Li,Mi]})}(),sh=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt(),t=arguments.length>1?arguments[1]:void 0;Wt(e,"database").getImmediate({identifier:t})}(oh),document.querySelector(".reg-form")),uh=document.querySelector(".login-form");sh.addEventListener("submit",(function(e){e.preventDefault();var t={email:e.currentTarget.elements.email.value,password:e.currentTarget.elements.password.value,username:e.currentTarget.elements.username.value};Si(ah,t.email,t.password,t.username).then((function(e){e.user;alert("User ".concat(t.username," created"))})).catch((function(e){e.code;var t=e.message;alert(t)}))})),uh.addEventListener("submit",(function(e){e.preventDefault();var t={email:e.currentTarget.elements.email.value,password:e.currentTarget.elements.password.value};(n=ah,r=t.email,i=t.password,Ci(Qe(n),si.credential(r,i))).then((function(e){e.user;alert("Welcome back, ".concat(t.username))})).catch((function(e){e.code,e.message}));var n,r,i}))}();
//# sourceMappingURL=index.e6b4d5a9.js.map

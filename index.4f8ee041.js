!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequired7c6=o),o.register("ke5Oc",(function(e,t){"use strict";var n=o("c4C4W"),r=o("lGmLA"),i=o("9jbh3"),a=o("knWMA");var s=function e(t){var o=new i(t),s=r(i.prototype.request,o);return n.extend(s,i.prototype,o),n.extend(s,o),s.create=function(n){return e(a(t,n))},s}(o("c74ni"));s.Axios=i,s.CanceledError=o("dW1zJ"),s.CancelToken=o("77MZz"),s.isCancel=o("lXDKh"),s.VERSION=o("kLR29").version,s.toFormData=o("12Kat"),s.AxiosError=o("5TB86"),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=o("9BdDr"),s.isAxiosError=o("kv87N"),e.exports=s,e.exports.default=s})),o.register("c4C4W",(function(e,t){"use strict";var n,r=o("lGmLA"),i=Object.prototype.toString,a=(n=Object.create(null),function(e){var t=i.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return a(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var l=s("ArrayBuffer");function h(e){return null!==e&&"object"==typeof e}function f(e){if("object"!==a(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var d=s("Date"),p=s("File"),v=s("Blob"),y=s("FileList");function g(e){return"[object Function]"===i.call(e)}var m=s("URLSearchParams");function _(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var k,b=(k="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return k&&e instanceof k});e.exports={isArray:u,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||g(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:h,isPlainObject:f,isUndefined:c,isDate:d,isFile:p,isBlob:v,isFunction:g,isStream:function(e){return h(e)&&g(e.pipe)},isURLSearchParams:m,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:_,merge:function e(){var t={};function n(n,r){f(t[r])&&f(n)?t[r]=e(t[r],n):f(n)?t[r]=e({},n):u(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)_(arguments[r],n);return t},extend:function(e,t,n){return _(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,i,o,a={};t=t||{};do{for(i=(r=Object.getOwnPropertyNames(e)).length;i-- >0;)a[o=r[i]]||(t[o]=e[o],a[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:s,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:b,isFileList:y}})),o.register("lGmLA",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}})),o.register("9jbh3",(function(e,t){"use strict";var n=o("c4C4W"),r=o("6d5Pb"),i=o("JRZh2"),a=o("k04r0"),s=o("knWMA"),u=o("gYMA1"),c=o("9SeBc"),l=c.validators;function h(e){this.defaults=e,this.interceptors={request:new i,response:new i}}h.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var h=[a,void 0];for(Array.prototype.unshift.apply(h,r),h=h.concat(u),o=Promise.resolve(t);h.length;)o=o.then(h.shift(),h.shift());return o}for(var f=t;r.length;){var d=r.shift(),p=r.shift();try{f=d(f)}catch(e){p(e);break}}try{o=a(f)}catch(e){return Promise.reject(e)}for(;u.length;)o=o.then(u.shift(),u.shift());return o},h.prototype.getUri=function(e){e=s(this.defaults,e);var t=u(e.baseURL,e.url);return r(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){h.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(s(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)})),e.exports=h})),o.register("6d5Pb",(function(e,t){"use strict";var n=o("c4C4W");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var o;if(i)o=i(t);else if(n.isURLSearchParams(t))o=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}})),o.register("JRZh2",(function(e,t){"use strict";var n=o("c4C4W");function r(){this.handlers=[]}r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r})),o.register("k04r0",(function(e,t){"use strict";var n=o("c4C4W"),r=o("jrAxF"),i=o("lXDKh"),a=o("c74ni"),s=o("dW1zJ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("jrAxF",(function(e,t){"use strict";var n=o("c4C4W"),r=o("c74ni");e.exports=function(e,t,i){var o=this||r;return n.forEach(i,(function(n){e=n.call(o,e,t)})),e}})),o.register("c74ni",(function(e,t){"use strict";var n=o("6qd2L"),r=o("c4C4W"),i=o("h8JMh"),a=o("5TB86"),s=o("gWbUy"),u=o("12Kat"),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var h,f={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(h=o("btSY7")),h),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,o=r.isObject(e),a=t&&t["Content-Type"];if((n=r.isFileList(e))||o&&"multipart/form-data"===a){var s=this.env&&this.env.FormData;return u(n?{"files[]":e}:e,s&&new s)}return o||"application/json"===a?(l(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw a.from(e,a.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("beknR")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){f.headers[e]=r.merge(c)})),e.exports=f})),o.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("h8JMh",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e,t){n.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}})),o.register("5TB86",(function(e,t){"use strict";var n=o("c4C4W");function r(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}n.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=r.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){a[e]={value:e}})),Object.defineProperties(r,a),Object.defineProperty(i,"isAxiosError",{value:!0}),r.from=function(e,t,o,a,s,u){var c=Object.create(i);return n.toFlatObject(e,c,(function(e){return e!==Error.prototype})),r.call(c,e.message,t,o,a,s),c.name=e.name,u&&Object.assign(c,u),c},e.exports=r})),o.register("gWbUy",(function(e,t){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("12Kat",(function(e,t){"use strict";var n=o("3aNd6").Buffer,r=o("c4C4W");e.exports=function(e,t){t=t||new FormData;var i=[];function o(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,a){if(r.isPlainObject(n)||r.isArray(n)){if(-1!==i.indexOf(n))throw Error("Circular reference detected in "+a);i.push(n),r.forEach(n,(function(n,i){if(!r.isUndefined(n)){var s,u=a?a+"."+i:i;if(n&&!a&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(s=r.toArray(n)))return void s.forEach((function(e){!r.isUndefined(e)&&t.append(u,o(e))}));e(n,u)}})),i.pop()}else t.append(a,o(n))}(e),t}})),o.register("3aNd6",(function(n,r){t(n.exports,"Buffer",(function(){return i}),(function(e){return i=e})),t(n.exports,"INSPECT_MAX_BYTES",(function(){return a}),(function(e){return a=e}));var i,a,s=o("ds8z5"),u=o("8MBJY"),c=o("a2hTj"),l=o("eYQtU"),h=o("l5bVx"),f=o("2MbLg"),d=o("5d11t"),p=o("7rddL"),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=m,a=50;var y=2147483647;function g(e){if(e>y)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,m.prototype),t}function m(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return _(e,t,n)}function _(t,n,r){if("string"==typeof t)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!m.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var n=0|E(e,t),r=g(n),i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(t,n);if(ArrayBuffer.isView(t))return function(e){if(oe(e,Uint8Array)){var t=new Uint8Array(e);return I(t.buffer,t.byteOffset,t.byteLength)}return w(e)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===t?"undefined":e(h)(t)));if(oe(t,ArrayBuffer)||t&&oe(t.buffer,ArrayBuffer))return I(t,n,r);if("undefined"!=typeof SharedArrayBuffer&&(oe(t,SharedArrayBuffer)||t&&oe(t.buffer,SharedArrayBuffer)))return I(t,n,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return m.from(i,n,r);var o=function(e){if(m.isBuffer(e)){var t=0|C(e.length),n=g(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||ae(e.length)?g(0):w(e);if("Buffer"===e.type&&Array.isArray(e.data))return w(e.data)}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return m.from(t[Symbol.toPrimitive]("string"),n,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===t?"undefined":e(h)(t)))}function k(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function b(e){return k(e),g(e<0?0:0|C(e))}function w(e){for(var t=e.length<0?0:0|C(e.length),n=g(t),r=0;r<t;r+=1)n[r]=255&e[r];return n}function I(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,m.prototype),r}function C(e){if(e>=y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+y.toString(16)+" bytes");return 0|e}function E(t,n){if(m.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||oe(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===t?"undefined":e(h)(t)));var r=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;for(var o=!1;;)switch(n){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return ne(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return re(t).length;default:if(o)return i?-1:ne(t).length;n=(""+n).toLowerCase(),o=!0}}function T(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return B(this,t,n);case"utf8":case"utf-8":return M(this,t,n);case"ascii":return F(this,t,n);case"latin1":case"binary":return j(this,t,n);case"base64":return L(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return q(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function x(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function S(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),ae(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=m.from(t,r)),m.isBuffer(t))return 0===t.length?-1:R(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):R(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function R(e,t,n,r,i){var o,a=1,s=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;a=2,s/=2,u/=2,n/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var l=-1;for(o=n;o<s;o++)if(c(e,o)===c(t,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===u)return l*a}else-1!==l&&(o-=o-l),l=-1}else for(n+u>s&&(n=s-u),o=n;o>=0;o--){for(var h=!0,f=0;f<u;f++)if(c(e,o+f)!==c(t,f)){h=!1;break}if(h)return o}return-1}function N(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var o,a=t.length;for(r>a/2&&(r=a/2),o=0;o<r;++o){var s=parseInt(t.substr(2*o,2),16);if(ae(s))return o;e[n+o]=s}return o}function P(e,t,n,r){return ie(ne(t,e.length-n),e,n,r)}function O(e,t,n,r){return ie(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function A(e,t,n,r){return ie(re(t),e,n,r)}function D(e,t,n,r){return ie(function(e,t){for(var n,r,i,o=[],a=0;a<e.length&&!((t-=2)<0);++a)r=(n=e.charCodeAt(a))>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function L(e,t,n){return 0===t&&n===e.length?d.fromByteArray(e):d.fromByteArray(e.slice(t,n))}function M(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var o=e[i],a=null,s=o>239?4:o>223?3:o>191?2:1;if(i+s<=n){var u=void 0,c=void 0,l=void 0,h=void 0;switch(s){case 1:o<128&&(a=o);break;case 2:128==(192&(u=e[i+1]))&&(h=(31&o)<<6|63&u)>127&&(a=h);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(h=(15&o)<<12|(63&u)<<6|63&c)>2047&&(h<55296||h>57343)&&(a=h);break;case 4:u=e[i+1],c=e[i+2],l=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&l)&&(h=(15&o)<<18|(63&u)<<12|(63&c)<<6|63&l)>65535&&h<1114112&&(a=h)}}null===a?(a=65533,s=1):a>65535&&(a-=65536,r.push(a>>>10&1023|55296),a=56320|1023&a),r.push(a),i+=s}return function(e){var t=e.length;if(t<=U)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=U));return n}(r)}m.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),m.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(m.prototype,"parent",{enumerable:!0,get:function(){if(m.isBuffer(this))return this.buffer}}),Object.defineProperty(m.prototype,"offset",{enumerable:!0,get:function(){if(m.isBuffer(this))return this.byteOffset}}),m.poolSize=8192,m.from=function(e,t,n){return _(e,t,n)},Object.setPrototypeOf(m.prototype,Uint8Array.prototype),Object.setPrototypeOf(m,Uint8Array),m.alloc=function(e,t,n){return function(e,t,n){return k(e),e<=0?g(e):void 0!==t?"string"==typeof n?g(e).fill(t,n):g(e).fill(t):g(e)}(e,t,n)},m.allocUnsafe=function(e){return b(e)},m.allocUnsafeSlow=function(e){return b(e)},m.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==m.prototype},m.compare=function(e,t){if(oe(e,Uint8Array)&&(e=m.from(e,e.offset,e.byteLength)),oe(t,Uint8Array)&&(t=m.from(t,t.offset,t.byteLength)),!m.isBuffer(e)||!m.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},m.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},m.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return m.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=m.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var o=e[n];if(oe(o,Uint8Array))i+o.length>r.length?(m.isBuffer(o)||(o=m.from(o)),o.copy(r,i)):Uint8Array.prototype.set.call(r,o,i);else{if(!m.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,i)}i+=o.length}return r},m.byteLength=E,m.prototype._isBuffer=!0,m.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)x(this,t,t+1);return this},m.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)x(this,t,t+3),x(this,t+1,t+2);return this},m.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)x(this,t,t+7),x(this,t+1,t+6),x(this,t+2,t+5),x(this,t+3,t+4);return this},m.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?M(this,0,e):T.apply(this,arguments)},m.prototype.toLocaleString=m.prototype.toString,m.prototype.equals=function(e){if(!m.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===m.compare(this,e)},m.prototype.inspect=function(){var e="",t=a;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(m.prototype[v]=m.prototype.inspect),m.prototype.compare=function(t,n,r,i,o){if(oe(t,Uint8Array)&&(t=m.from(t,t.offset,t.byteLength)),!m.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===t?"undefined":e(h)(t)));if(void 0===n&&(n=0),void 0===r&&(r=t?t.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),n<0||r>t.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&n>=r)return 0;if(i>=o)return-1;if(n>=r)return 1;if(this===t)return 0;for(var a=(o>>>=0)-(i>>>=0),s=(r>>>=0)-(n>>>=0),u=Math.min(a,s),c=this.slice(i,o),l=t.slice(n,r),f=0;f<u;++f)if(c[f]!==l[f]){a=c[f],s=l[f];break}return a<s?-1:s<a?1:0},m.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},m.prototype.indexOf=function(e,t,n){return S(this,e,t,n,!0)},m.prototype.lastIndexOf=function(e,t,n){return S(this,e,t,n,!1)},m.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return N(this,e,t,n);case"utf8":case"utf-8":return P(this,e,t,n);case"ascii":case"latin1":case"binary":return O(this,e,t,n);case"base64":return A(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return D(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},m.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var U=4096;function F(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function j(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function B(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=t;o<n;++o)i+=se[e[o]];return i}function q(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length-1;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function W(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function V(e,t,n,r,i,o){if(!m.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function z(e,t,n,r,i){$(t,r,i,e,n,7);var o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,n}function H(e,t,n,r,i){$(t,r,i,e,n,7);var o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=a,a>>=8,e[n+2]=a,a>>=8,e[n+1]=a,a>>=8,e[n]=a,n+8}function G(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function K(e,t,n,r,i){return t=+t,n>>>=0,i||G(e,0,n,4),p.write(e,t,n,r,23,4),n+4}function Y(e,t,n,r,i){return t=+t,n>>>=0,i||G(e,0,n,8),p.write(e,t,n,r,52,8),n+8}m.prototype.slice=function(e,t){var n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return Object.setPrototypeOf(r,m.prototype),r},m.prototype.readUintLE=m.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||W(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r},m.prototype.readUintBE=m.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||W(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},m.prototype.readUint8=m.prototype.readUInt8=function(e,t){return e>>>=0,t||W(e,1,this.length),this[e]},m.prototype.readUint16LE=m.prototype.readUInt16LE=function(e,t){return e>>>=0,t||W(e,2,this.length),this[e]|this[e+1]<<8},m.prototype.readUint16BE=m.prototype.readUInt16BE=function(e,t){return e>>>=0,t||W(e,2,this.length),this[e]<<8|this[e+1]},m.prototype.readUint32LE=m.prototype.readUInt32LE=function(e,t){return e>>>=0,t||W(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},m.prototype.readUint32BE=m.prototype.readUInt32BE=function(e,t){return e>>>=0,t||W(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},m.prototype.readBigUInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24),i=this[++e]+256*this[++e]+65536*this[++e]+n*Math.pow(2,24);return BigInt(r)+(BigInt(i)<<BigInt(32))})),m.prototype.readBigUInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=t*Math.pow(2,24)+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),m.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||W(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},m.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||W(e,t,this.length);for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},m.prototype.readInt8=function(e,t){return e>>>=0,t||W(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},m.prototype.readInt16LE=function(e,t){e>>>=0,t||W(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},m.prototype.readInt16BE=function(e,t){e>>>=0,t||W(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},m.prototype.readInt32LE=function(e,t){return e>>>=0,t||W(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},m.prototype.readInt32BE=function(e,t){return e>>>=0,t||W(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},m.prototype.readBigInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24))})),m.prototype.readBigInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+n)})),m.prototype.readFloatLE=function(e,t){return e>>>=0,t||W(e,4,this.length),p.read(this,e,!0,23,4)},m.prototype.readFloatBE=function(e,t){return e>>>=0,t||W(e,4,this.length),p.read(this,e,!1,23,4)},m.prototype.readDoubleLE=function(e,t){return e>>>=0,t||W(e,8,this.length),p.read(this,e,!0,52,8)},m.prototype.readDoubleBE=function(e,t){return e>>>=0,t||W(e,8,this.length),p.read(this,e,!1,52,8)},m.prototype.writeUintLE=m.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||V(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},m.prototype.writeUintBE=m.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||V(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},m.prototype.writeUint8=m.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||V(this,e,t,1,255,0),this[t]=255&e,t+1},m.prototype.writeUint16LE=m.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||V(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},m.prototype.writeUint16BE=m.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||V(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},m.prototype.writeUint32LE=m.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||V(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},m.prototype.writeUint32BE=m.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||V(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},m.prototype.writeBigUInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return z(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),m.prototype.writeBigUInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return H(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),m.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);V(this,e,t,n,i-1,-i)}var o=0,a=1,s=0;for(this[t]=255&e;++o<n&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+n},m.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);V(this,e,t,n,i-1,-i)}var o=n-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+n},m.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||V(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},m.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||V(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},m.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||V(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},m.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||V(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},m.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||V(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},m.prototype.writeBigInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return z(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),m.prototype.writeBigInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return H(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),m.prototype.writeFloatLE=function(e,t,n){return K(this,e,t,!0,n)},m.prototype.writeFloatBE=function(e,t,n){return K(this,e,t,!1,n)},m.prototype.writeDoubleLE=function(e,t,n){return Y(this,e,t,!0,n)},m.prototype.writeDoubleBE=function(e,t,n){return Y(this,e,t,!1,n)},m.prototype.copy=function(e,t,n,r){if(!m.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},m.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!m.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){var i=e.charCodeAt(0);("utf8"===r&&i<128||"latin1"===r)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{var a=m.isBuffer(e)?e:m.from(e,r),s=a.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<n-t;++o)this[o+t]=a[o%s]}return this};var J={};function Q(t,n,r){J[t]=function(r){e(l)(o,r);var i=e(f)(o);function o(){var r;return e(u)(this,o),r=i.call(this),Object.defineProperty(e(s)(r),"message",{value:n.apply(e(s)(r),arguments),writable:!0,configurable:!0}),r.name="".concat(r.name," [").concat(t,"]"),r.stack,delete r.name,r}return e(c)(o,[{key:"code",get:function(){return t},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(t,"]: ").concat(this.message)}}]),o}(r)}function X(e){for(var t="",n=e.length,r="-"===e[0]?1:0;n>=r+4;n-=3)t="_".concat(e.slice(n-3,n)).concat(t);return"".concat(e.slice(0,n)).concat(t)}function $(t,n,r,i,o,a){if(t>r||t<n){var s,u="bigint"===(void 0===n?"undefined":e(h)(n))?"n":"";throw s=a>3?0===n||n===BigInt(0)?">= 0".concat(u," and < 2").concat(u," ** ").concat(8*(a+1)).concat(u):">= -(2".concat(u," ** ").concat(8*(a+1)-1).concat(u,") and < 2 ** ")+"".concat(8*(a+1)-1).concat(u):">= ".concat(n).concat(u," and <= ").concat(r).concat(u),new J.ERR_OUT_OF_RANGE("value",s,t)}!function(e,t,n){Z(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||ee(t,e.length-(n+1))}(i,o,a)}function Z(e,t){if("number"!=typeof e)throw new J.ERR_INVALID_ARG_TYPE(t,"number",e)}function ee(e,t,n){if(Math.floor(e)!==e)throw Z(e,n),new J.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new J.ERR_BUFFER_OUT_OF_BOUNDS;throw new J.ERR_OUT_OF_RANGE(n||"offset",">= ".concat(n?1:0," and <= ").concat(t),e)}Q("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),Q("ERR_INVALID_ARG_TYPE",(function(t,n){return'The "'.concat(t,'" argument must be of type number. Received type ').concat(void 0===n?"undefined":e(h)(n))}),TypeError),Q("ERR_OUT_OF_RANGE",(function(t,n,r){var i='The value of "'.concat(t,'" is out of range.'),o=r;return Number.isInteger(r)&&Math.abs(r)>Math.pow(2,32)?o=X(String(r)):"bigint"===(void 0===r?"undefined":e(h)(r))&&(o=String(r),(r>Math.pow(BigInt(2),BigInt(32))||r<-Math.pow(BigInt(2),BigInt(32)))&&(o=X(o)),o+="n"),i+=" It must be ".concat(n,". Received ").concat(o)}),RangeError);var te=/[^+/0-9A-Za-z-_]/g;function ne(e,t){var n;t=t||1/0;for(var r=e.length,i=null,o=[],a=0;a<r;++a){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function re(e){return d.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ie(e,t,n,r){var i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function oe(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function ae(e){return e!=e}var se=function(){for(var e="0123456789abcdef",t=new Array(256),n=0;n<16;++n)for(var r=16*n,i=0;i<16;++i)t[r+i]=e[n]+e[i];return t}();function ue(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}})),o.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),o.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),o.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=o("gD1JV"))&&n.__esModule?n:{default:n}})),o.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,o=r.default(e);if(t){var a=r.default(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return i.default(this,n)}};var n=a(o("aTHs7")),r=a(o("fVNic")),i=a(o("jmhxu"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),o.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),o.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(o("ds8z5")),r=i(o("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),o.register("5d11t",(function(e,n){var r,i;t(e.exports,"toByteArray",(function(){return r}),(function(e){return r=e})),t(e.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),r=function(e){var t,n,r=h(e),i=r[0],o=r[1],u=new s(function(e,t,n){return 3*(t+n)/4-n}(0,i,o)),c=0,l=o>0?i-4:i;for(n=0;n<l;n+=4)t=a[e.charCodeAt(n)]<<18|a[e.charCodeAt(n+1)]<<12|a[e.charCodeAt(n+2)]<<6|a[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===o&&(t=a[e.charCodeAt(n)]<<2|a[e.charCodeAt(n+1)]>>4,u[c++]=255&t);1===o&&(t=a[e.charCodeAt(n)]<<10|a[e.charCodeAt(n+1)]<<4|a[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,n=e.length,r=n%3,i=[],a=16383,s=0,u=n-r;s<u;s+=a)i.push(f(e,s,s+a>u?u:s+a));1===r?(t=e[n-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)o[c]=u[c],a[u.charCodeAt(c)]=c;function h(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function f(e,t,n){for(var r,i,a=[],s=t;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(o[(i=r)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return a.join("")}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63})),o.register("7rddL",(function(e,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;t(e.exports,"read",(function(){return r}),(function(e){return r=e})),t(e.exports,"write",(function(){return i}),(function(e){return i=e})),r=function(e,t,n,r,i){var o,a,s=8*i-r-1,u=(1<<s)-1,c=u>>1,l=-7,h=n?i-1:0,f=n?-1:1,d=e[t+h];for(h+=f,o=d&(1<<-l)-1,d>>=-l,l+=s;l>0;o=256*o+e[t+h],h+=f,l-=8);for(a=o&(1<<-l)-1,o>>=-l,l+=r;l>0;a=256*a+e[t+h],h+=f,l-=8);if(0===o)o=1-c;else{if(o===u)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,r),o-=c}return(d?-1:1)*a*Math.pow(2,o-r)},i=function(e,t,n,r,i,o){var a,s,u,c=8*o-i-1,l=(1<<c)-1,h=l>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=l):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),(t+=a+h>=1?f/u:f*Math.pow(2,1-h))*u>=2&&(a++,u/=2),a+h>=l?(s=0,a=l):a+h>=1?(s=(t*u-1)*Math.pow(2,i),a+=h):(s=t*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;e[n+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[n+d]=255&a,d+=p,a/=256,c-=8);e[n+d-p]|=128*v}})),o.register("btSY7",(function(e,t){"use strict";var n=o("c4C4W"),r=o("j97bH"),i=o("jFG8L"),a=o("6d5Pb"),s=o("gYMA1"),u=o("1nUSP"),c=o("9jFfm"),l=o("gWbUy"),h=o("5TB86"),f=o("dW1zJ"),d=o("4ULKu");e.exports=function(e){return new Promise((function(t,o){var p,v=e.data,y=e.headers,g=e.responseType;function m(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(v)&&n.isStandardBrowserEnv()&&delete y["Content-Type"];var _=new XMLHttpRequest;if(e.auth){var k=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";y.Authorization="Basic "+btoa(k+":"+b)}var w=s(e.baseURL,e.url);function I(){if(_){var n="getAllResponseHeaders"in _?u(_.getAllResponseHeaders()):null,i={data:g&&"text"!==g&&"json"!==g?_.response:_.responseText,status:_.status,statusText:_.statusText,headers:n,config:e,request:_};r((function(e){t(e),m()}),(function(e){o(e),m()}),i),_=null}}if(_.open(e.method.toUpperCase(),a(w,e.params,e.paramsSerializer),!0),_.timeout=e.timeout,"onloadend"in _?_.onloadend=I:_.onreadystatechange=function(){_&&4===_.readyState&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))&&setTimeout(I)},_.onabort=function(){_&&(o(new h("Request aborted",h.ECONNABORTED,e,_)),_=null)},_.onerror=function(){o(new h("Network Error",h.ERR_NETWORK,e,_,_)),_=null},_.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new h(t,n.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,_)),_=null},n.isStandardBrowserEnv()){var C=(e.withCredentials||c(w))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;C&&(y[e.xsrfHeaderName]=C)}"setRequestHeader"in _&&n.forEach(y,(function(e,t){void 0===v&&"content-type"===t.toLowerCase()?delete y[t]:_.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(_.withCredentials=!!e.withCredentials),g&&"json"!==g&&(_.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&_.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){_&&(o(!e||e&&e.type?new f:e),_.abort(),_=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),v||(v=null);var E=d(w);E&&-1===["http","https","file"].indexOf(E)?o(new h("Unsupported protocol "+E+":",h.ERR_BAD_REQUEST,e)):_.send(v)}))}})),o.register("j97bH",(function(e,t){"use strict";var n=o("5TB86");e.exports=function(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}})),o.register("jFG8L",(function(e,t){"use strict";var n=o("c4C4W");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(i)&&s.push("path="+i),n.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("gYMA1",(function(e,t){"use strict";var n=o("7xjuH"),r=o("ftRZn");e.exports=function(e,t){return e&&!n(t)?r(e,t):t}})),o.register("7xjuH",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("ftRZn",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("1nUSP",(function(e,t){"use strict";var n=o("c4C4W"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,o,a={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),i=n.trim(e.substr(o+1)),t){if(a[t]&&r.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([i]):a[t]?a[t]+", "+i:i}})),a):a}})),o.register("9jFfm",(function(e,t){"use strict";var n=o("c4C4W");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}})),o.register("dW1zJ",(function(e,t){"use strict";var n=o("5TB86");function r(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}o("c4C4W").inherits(r,n,{__CANCEL__:!0}),e.exports=r})),o.register("4ULKu",(function(e,t){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("beknR",(function(e,t){e.exports=null})),o.register("lXDKh",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("knWMA",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e,t){t=t||{};var r={};function i(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(e[r],t[r])}function a(e){if(!n.isUndefined(t[e]))return i(void 0,t[e])}function s(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(void 0,t[r])}function u(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,i=t(e);n.isUndefined(i)&&t!==u||(r[e]=i)})),r}})),o.register("9SeBc",(function(t,n){var r=o("l5bVx"),i=o("kLR29").version,a=o("5TB86"),s={};["object","boolean","number","function","string","symbol"].forEach((function(t,n){s[t]=function(i){return(void 0===i?"undefined":e(r)(i))===t||"a"+(n<1?"n ":" ")+t}}));var u={};s.transitional=function(e,t,n){function r(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,i,o){if(!1===e)throw new a(r(i," has been removed"+(t?" in "+t:"")),a.ERR_DEPRECATED);return t&&!u[i]&&(u[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,o)}},t.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new a("options must be an object",a.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var o=r[i],s=t[o];if(s){var u=e[o],c=void 0===u||s(u,o,e);if(!0!==c)throw new a("option "+o+" must be "+c,a.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new a("Unknown option "+o,a.ERR_BAD_OPTION)}},validators:s}})),o.register("kLR29",(function(e,t){e.exports={version:"0.27.2"}})),o.register("77MZz",(function(e,t){"use strict";var n=o("dW1zJ");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r})),o.register("9BdDr",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("kv87N",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return a.apply(null,arguments)};var n,r=(n=o("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return(a=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&r.default(o,n.prototype),o}).apply(null,arguments)}})),o.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),o.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=o("fVNic"))&&n.__esModule?n:{default:n}}));var a={};function s(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){s(o,r,i,a,u,"next",e)}function u(e){s(o,r,i,a,u,"throw",e)}a(void 0)}))}};var u={},c=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=function(e,t,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return N()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function y(){}function g(){}function m(){}var _={};u(_,o,(function(){return this}));var k=Object.getPrototypeOf,b=k&&k(k(R([])));b&&b!==n&&r.call(b,o)&&(_=b);var w=m.prototype=y.prototype=Object.create(_);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(i,o,a,s){var u=l(e[i],e,o);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(h).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function R(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:N}}function N(){return{value:t,done:!0}}return g.prototype=m,u(w,"constructor",m),u(m,"constructor",g),g.displayName=u(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},I(C.prototype),u(C.prototype,a,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new C(c(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},I(w),u(w,s,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(u);try{regeneratorRuntime=c}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}var l;l=o("ke5Oc");var h=document.querySelector(".spinner-box");function f(){h.classList.add("none")}function d(){h.classList.remove("none")}var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e){return v.default(e)||y.default(e)||m.default(e)||g.default()};var v=_(o("kMC0W")),y=_(o("7AJDX")),g=_(o("8CtQK")),m=_(o("auk6i"));function _(e){return e&&e.__esModule?e:{default:e}}var k=function(e){try{var t=localStorage.getItem(e);return JSON.parse(t)||void 0}catch(e){console.error("Get state error: ",e.message)}},b=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},w=function(e){try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}},I=document.querySelector(".film-card"),C=document.querySelector(".overlay"),E=document.querySelector(".icon-close"),T=document.querySelector(".trailer"),x=document.querySelector(".icon-video-close");function S(){document.querySelectorAll(".films-gallery__item").forEach((function(e){return e.addEventListener("click",R)}))}function R(e){e.preventDefault(),function(e){U.apply(this,arguments)}(e.currentTarget),window.matchMedia("(max-width: 767px)").matches&&(I.style.top=window.pageYOffset+"px"),I.classList.add("active"),C.classList.add("active"),E.addEventListener("click",P),document.body.addEventListener("keydown",N,!1),C.addEventListener("click",O),f()}function N(e){if("Escape"===e.code){if(T.querySelector("#ytplayer"))return void B();j()}}function P(e){j()}function O(e){T.querySelector("#ytplayer")?B():j()}function A(e){var t='\n  <iframe id="ytplayer" type="text/html" \n    src="https://www.youtube.com/embed/'.concat(e.target.dataset.trailerId,'?autoplay=1&origin=https://alenakabushko.github.io/GoTea_JS_project/"\n  frameborder="0"/>\n  '),n=T.querySelector("#ytplayer");n&&n.remove(),T.insertAdjacentHTML("afterbegin",t),T.classList.add("active"),C.style.zIndex=40,x.addEventListener("click",D),f()}function D(e){B()}function L(e){return M.apply(this,arguments)}function M(){return(M=e(a)(e(u).mark((function t(n){var r,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y.id=n,e.next=3,J(K.VIDEO);case 3:if(r=e.sent.results,!(i=r.find((function(e){return"Trailer"===e.type})))){e.next=9;break}return e.abrupt("return",i.key);case 9:return e.abrupt("return",void 0);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function U(){return(U=e(a)(e(u).mark((function t(n){var r,i,o,a,s,c,l,h,f,d,v,y,g,m,_,C,E,T,x;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(C=function(){if(document.querySelector("#btn-to-watched").classList.contains("active"))E(o);else{var t=[],n=k("watched");n&&(t=e(p)(n));var r=[],i=k("queue");if(i&&(r=e(p)(i)),new Set(r).has(o)){w("queue");var a=r.indexOf(o);r.splice(a,1),b("queue",r)}new Set(t).has(o)||(t.push(o),b("watched",t)),W(o)}},E=function(t){var n=[],r=k("watched");r&&(n=e(p)(r)),w("watched");var i=n.indexOf(t);n.splice(i,1),b("watched",n),W()},T=function(t){var n=[],r=k("queue");r&&(n=e(p)(r)),w("queue");var i=n.indexOf(t);n.splice(i,1),b("queue",n),W()},x=function(){if(document.querySelector("#btn-to-queue").classList.contains("active"))T(o);else{var t=[],n=k("queue");n&&(t=e(p)(n));var r=[],i=k("watched");if(i&&(r=e(p)(i)),new Set(r).has(o)){w("watched");var a=r.indexOf(o);r.splice(a,1),b("watched",r)}new Set(t).has(o)||(t.push(o),b("queue",t)),W(o)}},r=Y.movies.results.find((function(e){return e.id==n.attributes.key.value}))){t.next=8;break}return console.log("НЕ УДАЛОСЬ НАЙТИ ФИЛЬМ В ДАННЫХ ПО ID!!!"),t.abrupt("return");case 8:return t.next=10,L(r.id);case 10:i=t.sent,o=r.id,a=r.poster_path,s=r.title,c=r.vote_average,l=r.vote_count,h=r.popularity,f=r.original_title,d=r.genre_ids,v=r.overview,y='\n   <div class="image">\n    <img\n      class="image__picture"\n      src='.concat(a?"https://image.tmdb.org/t/p/w780"+a:"https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in",'\n      alt="').concat(s,'"\n    />\n  </div>\n  <div class="description">\n    <p class="description__title">').concat(s,'</p>\n    <ul class="description-list">\n      <li class="description-list__item">\n        <ul class="description-list__values">\n          <li class="description-list__title">Vote / Votes</li>\n          <li class="description-list__value">\n            <span class="description-list__value--vote-orange">').concat(c.toFixed(1),'</span>\n            /\n            <span class="description-list__value--vote-grey">').concat(l,'</span>\n          </li>\n        </ul>\n      </li>\n      <li class="description-list__item">\n        <ul class="description-list__values">\n          <li class="description-list__title">Popularity</li>\n          <li class="description-list__value">').concat(h,'</li>\n        </ul>\n      </li>\n      <li class="description-list__item">\n        <ul class="description-list__values">\n          <li class="description-list__title">Original Title</li>\n          <li class="description-list__value">').concat(f,'</li>\n        </ul>\n      </li>\n      <li class="description-list__item">\n        <ul class="description-list__values">\n          <li class="description-list__title">Genre</li>\n          <li class="description-list__value">').concat(d.split(",").length>3?"Other":d,'</li>\n        </ul>\n      </li>\n    </ul>\n    <div class="film-about">\n      <p class="film-about__header">About</p>\n      <p class="film-about__text">\n        ').concat(v,'\n      </p>\n    </div>\n    <div class="buttons">\n      <button type="button" class="btn btn-watch-modal" id="btn-to-watched" data-id ="').concat(o,'">\n        ADD TO WATCHED\n      </button>\n      <button type="button" class="btn btn-queue-modal" id="btn-to-queue" data-id ="').concat(o,'">\n       ADD TO QUEUE\n      </button>\n      ').concat(i?'<button type="button" class="btn btn-queue-modal" id="btn-watch-trailer" data-trailer-id='+i+">WATCH TRAILER</button>":"","\n    </div>\n  </div>\n  "),F(),I.insertAdjacentHTML("afterbegin",y),(g=document.querySelector("#btn-watch-trailer"))&&g.addEventListener("click",A),W(o),m=document.querySelector("#btn-to-queue"),_=document.querySelector("#btn-to-watched"),m.addEventListener("click",x),_.addEventListener("click",C);case 26:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(){var e=I.querySelector(".image");e&&e.remove();var t=I.querySelector(".description");t&&t.remove()}function j(){I.classList.remove("active"),I.style.top="50%",C.classList.remove("active"),C.removeEventListener("click",O),document.body.removeEventListener("keydown",N),E.removeEventListener("click",P)}function B(){T.classList.remove("active");var e=T.querySelector("#ytplayer");e&&e.remove(),C.style.zIndex=20}function q(t,n){var r=[],i=k(n);return i&&(r=e(p)(i)),new Set(r).has(t)}function W(e){return V.apply(this,arguments)}function V(){return(V=e(a)(e(u).mark((function t(n){var r,i,o,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=function(){i.disabled=!1,i.textContent="Remove from watched",i.classList.add("active")},a=function(){r.disabled=!1,r.textContent="Remove from queue",r.classList.add("active")},r=document.querySelector("#btn-to-queue"),i=document.querySelector("#btn-to-watched"),q(n,"watched")?(i.textContent="Added to watched",i.disabled=!0,setTimeout(o,500)):(i.textContent="Add to watched",i.classList.remove("active"),i.disabled=!1),q(n,"queue")?(r.textContent="Added to queue",r.disabled=!0,setTimeout(a,500)):(r.textContent="Add to queue",r.classList.remove("active"),r.disabled=!1);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var z={filmsGallery:document.querySelector(".films-gallery")},H="0ad512fb225eecaea999568cb90b6aa0";e(l).defaults.baseURL="https://api.themoviedb.org/3";var G,K={TRENDING:"trending",GENRE:"genre",DISCOVER:"discover",SEARCH:"search",ID:"id",VIDEO:"video",POPULAR:"popular",TOPRATED:"toprated"},Y={page:1,request:K.TRENDING,discover:"",id:0,search:"",movies:null,genres:null,movie:null,videos:null},J=(G=e(a)(e(u).mark((function t(){var n,r,i,o,a,s,c,h,f,p=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=p.length>0&&void 0!==p[0]?p[0]:K.TRENDING,d(),t.t0=n,t.next=t.t0===K.TRENDING?5:t.t0===K.GENRE?10:t.t0===K.DISCOVER?14:t.t0===K.SEARCH?19:t.t0===K.ID?24:t.t0===K.VIDEO?28:t.t0===K.POPULAR?32:t.t0===K.TOPRATED?37:42;break;case 5:return Y.request=n,t.next=8,e(l).get("/trending/movie/day?api_key=".concat(H,"&page=").concat(Y.page));case 8:return r=t.sent.data,t.abrupt("return",r);case 10:return t.next=12,e(l).get("/genre/movie/list?api_key=".concat(H));case 12:return i=t.sent.data,t.abrupt("return",i);case 14:return Y.request=n,t.next=17,e(l).get("/discover/movie?api_key=".concat(H,"&page=").concat(Y.page,"&with_genres=").concat(Y.discover));case 17:return o=t.sent.data,t.abrupt("return",o);case 19:return Y.request=n,t.next=22,e(l).get("/search/movie?api_key=".concat(H,"&page=").concat(Y.page,"&query=").concat(Y.search));case 22:return a=t.sent.data,t.abrupt("return",a);case 24:return t.next=26,e(l).get("/movie/".concat(Y.id,"?api_key=").concat(H));case 26:return s=t.sent.data,t.abrupt("return",s);case 28:return t.next=30,e(l).get("/movie/".concat(Y.id,"/videos?api_key=").concat(H));case 30:return c=t.sent.data,t.abrupt("return",c);case 32:return Y.request=n,t.next=35,e(l).get("/movie/popular?api_key=".concat(H,"&page=").concat(Y.page));case 35:return h=t.sent.data,t.abrupt("return",h);case 37:return Y.request=n,t.next=40,e(l).get("/movie/top_rated?api_key=".concat(H,"&page=").concat(Y.page));case 40:return f=t.sent.data,t.abrupt("return",f);case 42:case"end":return t.stop()}}),t)}))),function(){return G.apply(this,arguments)});J(K.GENRE).then((function(e){return Y.genres=e.genres,!0})).then((function(){Y.page=1,J(K.TRENDING).then((function(e){!function(e){Y.movies=e,function(e,t){console.log(e,t),e.forEach((function(e){e.release_date=e.release_date.slice(0,4);var n=e.genre_ids;n.forEach((function(e,n,r){var i=t.find((function(t){return t.id===e})),o=t.indexOf(i);r[n]=t[o].name})),n.length>2&&n.splice(2,n.length-1,"Other"),e.genre_ids=n.join(", ")}))}(e.results,Y.genres);var t=function(e){return e.map((function(e){var t=e.original_title,n=e.poster_path,r=e.vote_average,i=e.id,o=e.genre_ids,a=e.release_date,s="";return s=n?"https://image.tmdb.org/t/p/w400/".concat(n):"https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in","<li class='films-gallery__item' key='".concat(i,"'>\n            <img\n                class='films-gallery__img'\n                src='").concat(s,"'\n                alt='").concat(t,"'\n                width\n                loading='lazy'\n            />\n            <span class='films-gallery__rate'>").concat(r.toFixed(1),"</span>\n            <div class='films-gallery__wrap'>\n                <h2 class='films-gallery__title'>").concat(t,"</h2>\n                <div class='films-gallery__info'>\n                <p class='films-gallery__text'>").concat(o,"</p>\n                <p class='films-gallery__age'>| ").concat(a,"</p>\n                </div>\n            </div>\n            </li>")})).join("")}(e.results);z.filmsGallery.innerHTML=t,S(),f()}(e)}))}));var Q=o("8MBJY"),X=o("a2hTj"),$=o("hKHmD"),Z=(Q=o("8MBJY"),X=o("a2hTj"),{});Object.defineProperty(Z,"__esModule",{value:!0}),Z.default=function(e,t){return ee.default(e)||te.default(e,t)||re.default(e,t)||ne.default()};var ee=ie(o("8slrw")),te=ie(o("7AJDX")),ne=ie(o("ifqQW")),re=ie(o("auk6i"));function ie(e){return e&&e.__esModule?e:{default:e}}var oe=o("ds8z5"),ae=(Q=o("8MBJY"),X=o("a2hTj"),o("eYQtU")),se={};Object.defineProperty(se,"__esModule",{value:!0}),se.default=function(e){return de(e)};var ue=fe(o("ge8co")),ce=fe(o("cZGw3")),le=fe(o("fVNic")),he=fe(o("gD1JV"));function fe(e){return e&&e.__esModule?e:{default:e}}function de(e){var t="function"==typeof Map?new Map:void 0;return de=function(e){if(null===e||!ce.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return ue.default(e,arguments,le.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),he.default(n,e)},de(e)}var pe=o("2MbLg"),ve=!1,ye=!1,ge="${JSCORE_VERSION}",me=function(e,t){if(!e)throw _e(t)},_e=function(e){return new Error("Firebase Database ("+ge+") INTERNAL ASSERT FAILED: "+e)},ke=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},be={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=o>>2,h=(3&o)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,a||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ke(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==u)throw Error();var c=o<<2|a>>4;if(r.push(c),64!==s){var l=a<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},we=function(e){var t=ke(e);return be.encodeByteArray(t,!0)},Ie=function(e){return we(e).replace(/\./g,"")},Ce=function(e){try{return be.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function Ee(e){return Te(void 0,e)}function Te(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Te(e[n],t[n]));return e}
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
var xe=function(){"use strict";function t(){var n=this;e(Q)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(X)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
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
function Se(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Re(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Ne(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Pe(){return!0===ve||!0===ye}
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
var Oe=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(t,i,o){var a;return e(Q)(this,r),(a=n.call(this,i)).code=t,a.customData=o,a.name="FirebaseError",Object.setPrototypeOf(e(oe)(a),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(oe)(a),Ae.prototype.create),a}return r}(e(se)(Error)),Ae=function(){"use strict";function t(n,r,i){e(Q)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(X)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?De(a,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),c=new Oe(o,u,i);return c}}]),t}();function De(e,t){return e.replace(Le,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var Le=/\{\$([^}]+)}/g;
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
 */function Me(e){return JSON.parse(e)}function Ue(e){return JSON.stringify(e)}
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
 */var Fe=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=Me(Ce(o[0])||""),n=Me(Ce(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},je=function(e){var t=Fe(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
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
function Be(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function qe(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function We(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ve(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function ze(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(He(l)&&He(h)){if(!ze(l,h))return!1}else if(l!==h)return!1}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}var f=!0,d=!1,p=void 0;try{for(var v,y=r[Symbol.iterator]();!(f=(v=y.next()).done);f=!0){var g=v.value;if(!n.includes(g))return!1}}catch(e){d=!0,p=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw p}}return!0}function He(e){return null!==e&&"object"==typeof e}
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
function Ge(t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=function(t,r){var i=e(Z)(r.value,2),o=i[0],a=i[1];Array.isArray(a)?a.forEach((function(e){n.push(encodeURIComponent(o)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(o)+"="+encodeURIComponent(a))},u=Object.entries(t)[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)s(0,a)}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n.length?"&"+n.join("&"):""}function Ke(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(Z)(t.split("="),2),i=r[0],o=r[1];n[decodeURIComponent(i)]=decodeURIComponent(o)}})),n}function Ye(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var Je=function(){"use strict";function t(){e(Q)(this,t),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return e(X)(t,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var o=16;o<80;o++){var a=n[o-3]^n[o-8]^n[o-14]^n[o-16];n[o]=4294967295&(a<<1|a>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],f=this.chain_[3],d=this.chain_[4],p=0;p<80;p++){p<40?p<20?(s=f^l&(h^f),u=1518500249):(s=l^h^f,u=1859775393):p<60?(s=l&h|f&(l|h),u=2400959708):(s=l^h^f,u=3395469782);var v=(c<<5|c>>>27)+s+d+u+n[p]&4294967295;d=f,f=h,h=4294967295&(l<<30|l>>>2),l=c,c=v}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}]),t}();var Qe=function(){"use strict";function t(n,r){var i=this;e(Q)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(X)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Xe),void 0===r.error&&(r.error=Xe),void 0===r.complete&&(r.complete=Xe);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Xe(){}
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
 */function $e(e,t){return"".concat(e," failed: ").concat(t," argument ")}
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
var Ze=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,me(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(o<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},et=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
function tt(e){return e&&e._delegate?e._delegate:e}var nt=function(){"use strict";function t(n,r,i){e(Q)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(X)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),rt="[DEFAULT]",it=function(){"use strict";function t(n,r){e(Q)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(X)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new xe;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:rt})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var o,a=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=e(Z)(o.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(p)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(p)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var o=this.getOrInitializeService({instanceIdentifier:i,options:r}),a=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=e(Z)(c.value,2),f=h[0],d=h[1],p=this.normalizeInstanceIdentifier(f);i===p&&d.resolve(o)}}catch(e){s=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw u}}return o}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===rt?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt;return this.component?this.component.multipleInstances?e:rt:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
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
 */var ot,at,st=function(){"use strict";function t(n){e(Q)(this,t),this.name=n,this.providers=new Map}return e(X)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new it(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),ut=(Q=o("8MBJY"),X=o("a2hTj"),$=o("hKHmD"),[]);(at=ot||(ot={}))[at.DEBUG=0]="DEBUG",at[at.VERBOSE=1]="VERBOSE",at[at.INFO=2]="INFO",at[at.WARN=3]="WARN",at[at.ERROR=4]="ERROR",at[at.SILENT=5]="SILENT";var ct,lt={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},ht=ot.INFO,ft=(ct={},e($)(ct,ot.DEBUG,"log"),e($)(ct,ot.VERBOSE,"log"),e($)(ct,ot.INFO,"info"),e($)(ct,ot.WARN,"warn"),e($)(ct,ot.ERROR,"error"),ct),dt=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var a;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=ft[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(a=console)[u].apply(a,["[".concat(s,"]  ").concat(t.name,":")].concat(e(p)(i)))}},pt=function(){"use strict";function t(n){e(Q)(this,t),this.name=n,this._logLevel=ht,this._logHandler=dt,this._userLogHandler=null,ut.push(this)}return e(X)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ot))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?lt[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ot.DEBUG].concat(e(p)(n))),this._logHandler.apply(this,[this,ot.DEBUG].concat(e(p)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ot.VERBOSE].concat(e(p)(n))),this._logHandler.apply(this,[this,ot.VERBOSE].concat(e(p)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ot.INFO].concat(e(p)(n))),this._logHandler.apply(this,[this,ot.INFO].concat(e(p)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ot.WARN].concat(e(p)(n))),this._logHandler.apply(this,[this,ot.WARN].concat(e(p)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ot.ERROR].concat(e(p)(n))),this._logHandler.apply(this,[this,ot.ERROR].concat(e(p)(n)))}}]),t}();var vt={};Object.defineProperty(vt,"__esModule",{value:!0}),vt.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){gt.default(e,t,n[t])}))}return e};var yt,gt=(yt=o("hKHmD"))&&yt.__esModule?yt:{default:yt};var mt,_t;var kt=new WeakMap,bt=new WeakMap,wt=new WeakMap,It=new WeakMap,Ct=new WeakMap;var Et={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return bt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||wt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Tt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(_t||(_t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(Rt(this),n),St(kt.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return St(t.apply(Rt(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a,s=(a=t).call.apply(a,[Rt(this),n].concat(e(p)(i)));return wt.set(s,n.sort?n.sort():[n]),St(s)}}function xt(e){return"function"==typeof e?Tt(e):(e instanceof IDBTransaction&&function(e){if(!bt.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),r()},o=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));bt.set(e,t)}}(e),t=e,(mt||(mt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Et):e);var t}function St(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(St(t.result)),r()},o=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&kt.set(e,t)})).catch((function(){})),Ct.set(n,t),n;var t,n;if(It.has(e))return It.get(e);var r=xt(e);return r!==e&&(It.set(e,r),Ct.set(r,e)),r}var Rt=function(e){return Ct.get(e)};function Nt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,o=n.blocking,a=n.terminated,s=indexedDB.open(e,t),u=St(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(St(s.result),e.oldVersion,e.newVersion,St(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(){return o()}))})).catch((function(){})),u}var Pt=["get","getKey","getAll","getAllKeys","count"],Ot=["put","add","delete","clear"],At=new Map;function Dt(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(At.get(n))return At.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,o=Ot.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(o||Pt.includes(r))){var s=function(){var t=e(a)(e(u).mark((function t(n){var a,s,c,l,h,f,d=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=d.length,s=new Array(a>1?a-1:0),c=1;c<a;c++)s[c-1]=d[c];return h=this.transaction(n,o?"readwrite":"readonly"),f=h.store,i&&(f=f.index(s.shift())),t.next=7,Promise.all([(l=f)[r].apply(l,e(p)(s)),o&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}();return At.set(n,s),s}}}Et=function(t){return e(vt)({},t,{get:function(e,n,r){return Dt(e,n)||t.get(e,n,r)},has:function(e,n){return!!Dt(e,n)||t.has(e,n)}})}(Et);
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
var Lt=function(){"use strict";function t(n){e(Q)(this,t),this.container=n}return e(X)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var Mt,Ut,Ft="@firebase/app",jt="0.7.33",Bt=new pt("@firebase/app"),qt="[DEFAULT]",Wt=(Mt={},e($)(Mt,Ft,"fire-core"),e($)(Mt,"@firebase/app-compat","fire-core-compat"),e($)(Mt,"@firebase/analytics","fire-analytics"),e($)(Mt,"@firebase/analytics-compat","fire-analytics-compat"),e($)(Mt,"@firebase/app-check","fire-app-check"),e($)(Mt,"@firebase/app-check-compat","fire-app-check-compat"),e($)(Mt,"@firebase/auth","fire-auth"),e($)(Mt,"@firebase/auth-compat","fire-auth-compat"),e($)(Mt,"@firebase/database","fire-rtdb"),e($)(Mt,"@firebase/database-compat","fire-rtdb-compat"),e($)(Mt,"@firebase/functions","fire-fn"),e($)(Mt,"@firebase/functions-compat","fire-fn-compat"),e($)(Mt,"@firebase/installations","fire-iid"),e($)(Mt,"@firebase/installations-compat","fire-iid-compat"),e($)(Mt,"@firebase/messaging","fire-fcm"),e($)(Mt,"@firebase/messaging-compat","fire-fcm-compat"),e($)(Mt,"@firebase/performance","fire-perf"),e($)(Mt,"@firebase/performance-compat","fire-perf-compat"),e($)(Mt,"@firebase/remote-config","fire-rc"),e($)(Mt,"@firebase/remote-config-compat","fire-rc-compat"),e($)(Mt,"@firebase/storage","fire-gcs"),e($)(Mt,"@firebase/storage-compat","fire-gcs-compat"),e($)(Mt,"@firebase/firestore","fire-fst"),e($)(Mt,"@firebase/firestore-compat","fire-fst-compat"),e($)(Mt,"fire-js","fire-js"),e($)(Mt,"firebase","fire-js-all"),Mt),Vt=new Map,zt=new Map;function Ht(e,t){try{e.container.addComponent(t)}catch(n){Bt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function Gt(e){var t=e.name;if(zt.has(t))return Bt.debug("There were multiple attempts to register component ".concat(t,".")),!1;zt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var o,a=Vt.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){Ht(o.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!0}function Kt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var Yt=(Ut={},e($)(Ut,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e($)(Ut,"bad-app-name","Illegal App name: '{$appName}"),e($)(Ut,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e($)(Ut,"app-deleted","Firebase App named '{$appName}' already deleted"),e($)(Ut,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e($)(Ut,"invalid-log-argument","First argument to `onLog` must be null or a function."),e($)(Ut,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e($)(Ut,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e($)(Ut,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e($)(Ut,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Ut),Jt=new Ae("app","Firebase",Yt),Qt=function(){"use strict";function t(n,r,i){var o=this;e(Q)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new nt("app",(function(){return o}),"PUBLIC"))}return e(X)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}]),t}(),Xt="9.10.0";function $t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qt,t=Vt.get(e);if(!t)throw Jt.create("no-app",{appName:e});return t}function Zt(e,t,n){var r,i=null!==(r=Wt[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Bt.warn(s.join(" "))}Gt(new nt("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var en="firebase-heartbeat-store",tn=null;function nn(){return tn||(tn=Nt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(en)}}).catch((function(e){throw Jt.create("idb-open",{originalErrorMessage:e.message})}))),tn}function rn(e){return on.apply(this,arguments)}function on(){return(on=e(a)(e(u).mark((function t(n){var r,i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,nn();case 4:return i=e.sent,e.abrupt("return",i.transaction(en).objectStore(en).get(un(n)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof Oe?Bt.warn(e.t0.message):(o=Jt.create("idb-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message}),Bt.warn(o.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function an(e,t){return sn.apply(this,arguments)}function sn(){return(sn=e(a)(e(u).mark((function t(n,r){var i,o,a,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,nn();case 4:return o=e.sent,a=o.transaction(en,"readwrite"),s=a.objectStore(en),e.next=9,s.put(r,un(n));case 9:return e.abrupt("return",a.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof Oe?Bt.warn(e.t0.message):(c=Jt.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),Bt.warn(c.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function un(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var cn=function(){"use strict";function t(n){var r=this;e(Q)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new dn(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(X)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r,i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),o=ln(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==o&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===o}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:o,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r,i,o,a,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=ln(),i=hn(t._heartbeatsCache.heartbeats),o=i.heartbeatsToSend,a=i.unsentEntries,s=Ie(JSON.stringify({version:2,heartbeats:o})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(a.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=a,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function ln(){return(new Date).toISOString().substring(0,10)}function hn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,u=function(e,i){var o=i.value,a=n.find((function(e){return e.agent===o.agent}));if(a){if(a.dates.push(o.date),pn(n)>t)return a.dates.pop(),"break"}else if(n.push({agent:o.agent,dates:[o.date]}),pn(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{heartbeatsToSend:n,unsentEntries:r}}var fn,dn=function(){"use strict";function t(n){e(Q)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(X)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,rn(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return o=e.sent,e.abrupt("return",an(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o;return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return o=r.sent,r.abrupt("return",an(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:e(p)(o.heartbeats).concat(e(p)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function pn(e){return Ie(JSON.stringify({version:2,heartbeats:e})).length}
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
 */fn="",Gt(new nt("platform-logger",(function(e){return new Lt(e)}),"PRIVATE")),Gt(new nt("heartbeat",(function(e){return new cn(e)}),"PRIVATE")),Zt(Ft,jt,fn),Zt(Ft,jt,"esm2017"),Zt("fire-js","");
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
Zt("firebase","9.10.0","app");oe=o("ds8z5"),Q=o("8MBJY"),X=o("a2hTj"),$=o("hKHmD");var vn={};Object.defineProperty(vn,"__esModule",{value:!0}),vn.default=function(e,t,n){return gn(e,t,n)};var yn=function(e){return e&&e.__esModule?e:{default:e}}(o("2mz0K"));function gn(e,t,n){return(gn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=yn.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var mn=o("fVNic");ae=o("eYQtU"),pe=o("2MbLg");function _n(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function kn(){return e($)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var bn=kn,wn=new Ae("auth","Firebase",kn()),In=new pt("@firebase/auth");function Cn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;In.logLevel<=ot.ERROR&&(o=In).error.apply(o,["Auth (".concat(Xt,"): ").concat(t)].concat(e(p)(r)))}
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
 */function En(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw Sn.apply(void 0,[t].concat(e(p)(r)))}function Tn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Sn.apply(void 0,[t].concat(e(p)(r)))}function xn(t,n,r){var i=Object.assign(Object.assign({},bn()),e($)({},n,r));return new Ae("auth","Firebase",i).create(n,{appName:t.name})}function Sn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;if("string"!=typeof t){var a,s=r[0],u=e(p)(r.slice(1));return u[0]&&(u[0].appName=t.name),(a=t._errorFactory).create.apply(a,[s].concat(e(p)(u)))}return(o=wn).create.apply(o,[t].concat(e(p)(r)))}function Rn(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(!t)throw Sn.apply(void 0,[n].concat(e(p)(i)))}function Nn(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Cn(t),new Error(t)}function Pn(e,t){e||Nn(t)}
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
 */var On=new Map;function An(e){Pn(e instanceof Function,"Expected a class definition");var t=On.get(e);return t?(Pn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,On.set(e,t),t)}
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
 */function Dn(e,t){var n=Kt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(ze(n.getOptions(),null!=t?t:{}))return r;En(r,"already-initialized")}return n.initialize({options:t})}
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
function Ln(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Mn(){return"http:"===Un()||"https:"===Un()}function Un(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Fn(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Mn()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
var jn=function(){"use strict";function t(n,r){e(Q)(this,t),this.shortDelay=n,this.longDelay=r,Pn(r>n,"Short delay should be less than long delay!"),this.isMobile=Re()||Ne()}return e(X)(t,[{key:"get",value:function(){return Fn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
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
 */function Bn(e,t){Pn(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var qn,Wn=function(){"use strict";function t(){e(Q)(this,t)}return e(X)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),Vn=(qn={},e($)(qn,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e($)(qn,"MISSING_CUSTOM_TOKEN","internal-error"),e($)(qn,"INVALID_IDENTIFIER","invalid-email"),e($)(qn,"MISSING_CONTINUE_URI","internal-error"),e($)(qn,"INVALID_PASSWORD","wrong-password"),e($)(qn,"MISSING_PASSWORD","internal-error"),e($)(qn,"EMAIL_EXISTS","email-already-in-use"),e($)(qn,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e($)(qn,"INVALID_IDP_RESPONSE","invalid-credential"),e($)(qn,"INVALID_PENDING_TOKEN","invalid-credential"),e($)(qn,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e($)(qn,"MISSING_REQ_TYPE","internal-error"),e($)(qn,"EMAIL_NOT_FOUND","user-not-found"),e($)(qn,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e($)(qn,"EXPIRED_OOB_CODE","expired-action-code"),e($)(qn,"INVALID_OOB_CODE","invalid-action-code"),e($)(qn,"MISSING_OOB_CODE","internal-error"),e($)(qn,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e($)(qn,"INVALID_ID_TOKEN","invalid-user-token"),e($)(qn,"TOKEN_EXPIRED","user-token-expired"),e($)(qn,"USER_NOT_FOUND","user-token-expired"),e($)(qn,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e($)(qn,"INVALID_CODE","invalid-verification-code"),e($)(qn,"INVALID_SESSION_INFO","invalid-verification-id"),e($)(qn,"INVALID_TEMPORARY_PROOF","invalid-credential"),e($)(qn,"MISSING_SESSION_INFO","missing-verification-id"),e($)(qn,"SESSION_EXPIRED","code-expired"),e($)(qn,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e($)(qn,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e($)(qn,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e($)(qn,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e($)(qn,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e($)(qn,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e($)(qn,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e($)(qn,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e($)(qn,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e($)(qn,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e($)(qn,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),qn),zn=new jn(3e4,6e4);function Hn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Gn(e,t,n,r){return Kn.apply(this,arguments)}function Kn(){return Kn=e(a)(e(u).mark((function t(n,r,i,o){var s,c=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",Yn(n,s,e(a)(e(u).mark((function t(){var a,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},o&&("GET"===r?s=o:a={body:JSON.stringify(o)}),c=Ge(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Wn.fetch()($n(n,n.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Kn.apply(this,arguments)}function Yn(e,t,n){return Jn.apply(this,arguments)}function Jn(){return(Jn=e(a)(e(u).mark((function t(n,r,i){var o,a,s,c,l,h,f,d,p;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,o=Object.assign(Object.assign({},Vn),r),t.prev=2,a=new Zn(n),t.next=6,Promise.race([i(),a.promise]);case 6:return s=t.sent,a.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw er(n,"account-exists-with-different-credential",c);case 13:if(!s.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=s.ok?c.errorMessage:c.error.message,h=e(Z)(l.split(" : "),2),f=h[0],d=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw er(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw er(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw er(n,"user-disabled",c);case 29:if(p=o[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){t.next=34;break}throw xn(n,p,d);case 34:En(n,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof Oe)){t.next=41;break}throw t.t0;case 41:En(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Qn(e,t,n,r){return Xn.apply(this,arguments)}function Xn(){return Xn=e(a)(e(u).mark((function t(n,r,i,o){var a,s,c=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,Gn(n,r,i,o,a);case 3:return"mfaPendingCredential"in(s=e.sent)&&En(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),Xn.apply(this,arguments)}function $n(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Bn(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Zn=function(){"use strict";function t(n){var r=this;e(Q)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(Tn(n.auth,"network-request-failed"))}),zn.get())}))}return e(X)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function er(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=Tn(e,t,r);return i.customData._tokenResponse=n,i}function tr(e,t){return nr.apply(this,arguments)}function nr(){return(nr=
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
e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Gn(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function rr(e,t){return ir.apply(this,arguments)}function ir(){return(ir=e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Gn(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function or(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function ar(){return ar=e(a)(e(u).mark((function t(n){var r,i,o,a,s,c,l=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=tt(n),e.next=4,i.getIdToken(r);case 4:return o=e.sent,Rn((a=ur(o))&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error"),s="object"==typeof a.firebase?a.firebase:void 0,c=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:a,token:o,authTime:or(sr(a.auth_time)),issuedAtTime:or(sr(a.iat)),expirationTime:or(sr(a.exp)),signInProvider:c||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),ar.apply(this,arguments)}function sr(e){return 1e3*Number(e)}function ur(t){var n,r=e(Z)(t.split("."),3),i=r[0],o=r[1],a=r[2];if(void 0===i||void 0===o||void 0===a)return Cn("JWT malformed, contained fewer than 3 sections"),null;try{var s=Ce(o);return s?JSON.parse(s):(Cn("Failed to decode base64 JWT payload"),null)}catch(e){return Cn("Caught error parsing JWT payload as JSON",null===(n=e)||void 0===n?void 0:n.toString()),null}}function cr(e,t){return lr.apply(this,arguments)}function lr(){return lr=
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
e(a)(e(u).mark((function t(n,r){var i=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Oe&&hr(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),lr.apply(this,arguments)}function hr(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var fr=function(){"use strict";function t(n){e(Q)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(X)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(a)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(r=e.t0)||void 0===r?void 0:r.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}}]),t}(),dr=function(){"use strict";function t(n,r){e(Q)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(X)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=or(this.lastLoginAt),this.creationTime=or(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
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
 */function pr(e){return vr.apply(this,arguments)}function vr(){return(vr=
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
e(a)(e(u).mark((function t(n){var r,i,o,a,s,c,l,h,f,d,p;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return o=e.sent,e.next=7,cr(n,rr(i,{idToken:o}));case 7:Rn(null==(a=e.sent)?void 0:a.users.length,i,"internal-error"),s=a.users[0],n._notifyReloadListener(s),c=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?mr(s.providerUserInfo):[],l=gr(n.providerData,c),h=n.isAnonymous,f=!(n.email&&s.passwordHash||(null==l?void 0:l.length)),d=!!h&&f,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new dr(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function yr(){return(yr=e(a)(e(u).mark((function t(n){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=tt(n),e.next=3,pr(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function gr(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(p)(r).concat(e(p)(n))}function mr(e){return e.map((function(e){var t=e.providerId,n=_n(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function _r(e,t){return kr.apply(this,arguments)}function kr(){return(kr=
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
e(a)(e(u).mark((function t(n,r){var i;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Yn(n,{},e(a)(e(u).mark((function t(){var i,o,a,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ge({grant_type:"refresh_token",refresh_token:r}).slice(1),o=n.config,a=o.tokenApiHost,s=o.apiKey,c=$n(n,a,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Wn.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var br=function(){"use strict";function t(){e(Q)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(X)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){Rn(e.idToken,"internal-error"),Rn(void 0!==e.idToken,"internal-error"),Rn(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,Rn(n=ur(t),"internal-error"),Rn(void 0!==n.exp,"internal-error"),Rn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Rn(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(a)(e(u).mark((function i(){var o,a,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_r(t,n);case 2:o=e.sent,a=o.accessToken,s=o.refreshToken,c=o.expiresIn,r.updateTokensAndExpiration(a,s,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return Nn("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,o=n.expirationTime,a=new t;return r&&(Rn("string"==typeof r,"internal-error",{appName:e}),a.refreshToken=r),i&&(Rn("string"==typeof i,"internal-error",{appName:e}),a.accessToken=i),o&&(Rn("number"==typeof o,"internal-error",{appName:e}),a.expirationTime=o),a}}]),t}();
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
 */function wr(e,t){Rn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ir=function(){"use strict";function t(n){e(Q)(this,t);var r=n.uid,i=n.auth,o=n.stsTokenManager,a=_n(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?e(p)(a.providerData):[],this.metadata=new dr(a.createdAt||void 0,a.lastLoginAt||void 0)}return e(X)(t,[{key:"getIdToken",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,cr(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(Rn(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ar.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return yr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(Rn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){Rn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(u).mark((function i(){var o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),o=!0),!n){e.next=5;break}return e.next=5,pr(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:o&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,cr(t,tr(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,o,a,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(o=n.phoneNumber)&&void 0!==o?o:void 0,p=null!==(a=n.photoURL)&&void 0!==a?a:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=n.createdAt)&&void 0!==c?c:void 0,m=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,_=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;Rn(_&&I,e,"internal-error");var C=br.fromJSON(this.name,I);Rn("string"==typeof _,e,"internal-error"),wr(h,e.name),wr(f,e.name),Rn("boolean"==typeof k,e,"internal-error"),Rn("boolean"==typeof b,e,"internal-error"),wr(d,e.name),wr(p,e.name),wr(v,e.name),wr(y,e.name),wr(g,e.name),wr(m,e.name);var E=new t({uid:_,auth:e,email:f,emailVerified:k,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:C,createdAt:g,lastLoginAt:m});return w&&Array.isArray(w)&&(E.providerData=w.map((function(e){return Object.assign({},e)}))),y&&(E._redirectEventId=y),E}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(u).mark((function o(){var a,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new br).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:a,isAnonymous:i}),e.next=5,pr(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),o)})))()}}]),t}(),Cr=function(){"use strict";function t(){e(Q)(this,t),this.type="NONE",this.storage={}}return e(X)(t,[{key:"_isAvailable",value:function(){return e(a)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
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
 */Cr.type="NONE";var Er=Cr;
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
 */function Tr(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var xr=function(){"use strict";function t(n,r,i){e(Q)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var o=this.auth,a=o.config,s=o.name;this.fullUserKey=Tr(this.userKey,a.apiKey,s),this.fullPersistenceKey=Tr("persistence",a.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(X)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?Ir._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(u).mark((function o(){var s,c,l,h,f,d,p,v,y,g,m,_,k;return e(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.length){o.next=2;break}return o.abrupt("return",new t(An(Er),n,i));case 2:return o.next=4,Promise.all(r.map(function(){var t=e(a)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:s=o.sent.filter((function(e){return e})),c=s[0]||An(Er),l=Tr(i,n.config.apiKey,n.name),h=null,f=!0,d=!1,p=void 0,o.prev=9,v=r[Symbol.iterator]();case 11:if(f=(y=v.next()).done){o.next=29;break}return g=y.value,o.prev=13,o.next=16,g._get(l);case 16:if(!(m=o.sent)){o.next=22;break}return _=Ir._fromJSON(n,m),g!==c&&(h=_),c=g,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:f=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),d=!0,p=o.t1;case 35:o.prev=35,o.prev=36,f||null==v.return||v.return();case 38:if(o.prev=38,!d){o.next=41;break}throw p;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&k.length){o.next=46;break}return o.abrupt("return",new t(c,n,i));case 46:if(c=k[0],!h){o.next=50;break}return o.next=50,c._set(l,h.toJSON());case 50:return o.next=52,Promise.all(r.map(function(){var t=e(a)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return o.abrupt("return",new t(c,n,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
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
 */function Sr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Or(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Rr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Dr(t))return"Blackberry";if(Lr(t))return"Webos";if(Nr(t))return"Safari";if((t.includes("chrome/")||Pr(t))&&!t.includes("edge/"))return"Chrome";if(Ar(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Rr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se();return/firefox\//i.test(e)}function Nr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Pr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se();return/crios\//i.test(e)}function Or(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se();return/iemobile/i.test(e)}function Ar(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se();return/android/i.test(e)}function Dr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se();return/blackberry/i.test(e)}function Lr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se();return/webos/i.test(e)}function Mr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ur(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se();return Mr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Fr(){return((e=Se()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function jr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se();return Mr(e)||Ar(e)||Lr(e)||Dr(e)||/windows phone/i.test(e)||Or(e)}
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
function Br(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Sr(Se());break;case"Worker":t="".concat(Sr(Se()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Xt,"/").concat(r)}
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
 */var qr=function(){"use strict";function t(n){e(Q)(this,t),this.auth=n,this.queue=[]}return e(X)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o,a,s,c,l,h,f,d,p,v,y,g,m;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:o=[],e.prev=4,a=!0,s=!1,c=void 0,e.prev=6,l=n.queue[Symbol.iterator]();case 8:if(a=(h=l.next()).done){e.next=16;break}return f=h.value,e.next=12,f(t);case 12:f.onAbort&&o.push(f.onAbort);case 13:a=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),s=!0,c=e.t0;case 22:e.prev=22,e.prev=23,a||null==l.return||l.return();case 25:if(e.prev=25,!s){e.next=28;break}throw c;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),o.reverse(),d=!0,p=!1,v=void 0,e.prev=36,y=o[Symbol.iterator]();!(d=(g=y.next()).done);d=!0){m=g.value;try{m()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),p=!0,v=e.t2;case 44:e.prev=44,e.prev=45,d||null==y.return||y.return();case 47:if(e.prev=47,!p){e.next=50;break}throw v;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),Wr=function(){"use strict";function t(n,r,i){e(Q)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zr(this),this.idTokenSubscription=new zr(this),this.beforeStateQueue=new qr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(X)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=An(n));var r=this;return this._initializationPromise=this.queue(e(a)(e(u).mark((function i(){var o,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,xr.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(o=r._popupRedirectResolver)||void 0===o?void 0:o._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(a=r.currentUser)||void 0===a?void 0:a.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o,a,s,c,l,h;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(o=e.sent,a=o,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==a?void 0:a._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:h=e.sent,c&&c!==l||!(null==h?void 0:h.user)||(a=h.user,s=!0);case 15:if(a){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(a._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(a);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),a=o,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!a){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return Rn(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==a._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(a));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,pr(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(i=e.t0)||void 0===i?void 0:i.code)){e.next=10;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 10:return e.abrupt("return",n.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?tt(t):null)&&Rn(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(u).mark((function i(){return e(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&Rn(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(a)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(An(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Ae("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(a)(e(u).mark((function i(){var o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return o=e.sent,e.abrupt("return",null===t?o.removeCurrentUser():o.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return Rn(i=t&&An(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,xr.create(n,[An(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o;return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(a)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(o=n.redirectUser)||void 0===o?void 0:o._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return Rn(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return Rn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Br(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r,i,o;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e($)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(o=n.sent)&&(i["X-Firebase-Client"]=o),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
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
 */function Vr(e){return tt(e)}var zr=function(){"use strict";function t(n){var r,i,o=this;e(Q)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new Qe((function(e){return o.observer=e}),r)).subscribe.bind(i)}return e(X)(t,[{key:"next",get:function(){return Rn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
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
var Hr=function(){"use strict";function t(n,r){e(Q)(this,t),this.providerId=n,this.signInMethod=r}return e(X)(t,[{key:"toJSON",value:function(){return Nn("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Nn("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Nn("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Nn("not implemented")}}]),t}();function Gr(e,t){return Kr.apply(this,arguments)}function Kr(){return(Kr=e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Gn(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Yr(e,t){return Jr.apply(this,arguments)}function Jr(){return(Jr=
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
e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Qn(n,"POST","/v1/accounts:signInWithPassword",Hn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Qr(e,t){return Xr.apply(this,arguments)}function Xr(){return(Xr=
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
e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Qn(n,"POST","/v1/accounts:signInWithEmailLink",Hn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $r(e,t){return Zr.apply(this,arguments)}function Zr(){return(Zr=e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Qn(n,"POST","/v1/accounts:signInWithEmailLink",Hn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var ei=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(t,i,o){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(Q)(this,r),(a=n.call(this,"password",o))._email=t,a._password=i,a._tenantId=s,a}return e(X)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Yr(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",Qr(t,{email:n._email,oobCode:n._password}));case 5:En(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(a)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Gr(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",$r(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:En(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Hr);function ti(e,t){return ni.apply(this,arguments)}function ni(){return(ni=
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
e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Qn(n,"POST","/v1/accounts:signInWithIdp",Hn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var ri=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){var t;return e(Q)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(X)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return ti(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,ti(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,ti(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ge(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):En("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,o=_n(t,["providerId","signInMethod"]);if(!n||!i)return null;var a=new r(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}}]),r}(Hr);function ii(e,t){return oi.apply(this,arguments)}function oi(){return(oi=
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
e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Gn(n,"POST","/v1/accounts:sendVerificationCode",Hn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ai(){return(ai=e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Qn(n,"POST","/v1/accounts:signInWithPhoneNumber",Hn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function si(){return(si=e(a)(e(u).mark((function t(n,r){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Qn(n,"POST","/v1/accounts:signInWithPhoneNumber",Hn(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw er(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var ui=e($)({},"USER_NOT_FOUND","user-not-found");function ci(){return(ci=e(a)(e(u).mark((function t(n,r){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Qn(n,"POST","/v1/accounts:signInWithPhoneNumber",Hn(n,i),ui));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var li=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(t){var i;return e(Q)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(X)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return ai.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return si.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return ci.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return n||t||i||o?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}}]),r}(Hr);
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
 */var hi=function(){"use strict";function t(n){var r,i,o,a,s,u;e(Q)(this,t);var c=Ke(Ye(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,h=null!==(i=c.oobCode)&&void 0!==i?i:null,f=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=c.mode)&&void 0!==o?o:null);Rn(l&&h&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=h,this.continueUrl=null!==(a=c.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(X)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=Ke(Ye(e)).link,n=t?Ke(Ye(t)).deep_link_id:null,r=Ke(Ye(e)).deep_link_id;return(r?Ke(Ye(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
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
var fi=function(){"use strict";function t(){e(Q)(this,t),this.providerId=t.PROVIDER_ID}return e(X)(t,null,[{key:"credential",value:function(e,t){return ei._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=hi.parseLink(t);return Rn(n,"argument-error"),ei._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();fi.PROVIDER_ID="password",fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password",fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var di=function(){"use strict";function t(n){e(Q)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(X)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),pi=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){var t;return e(Q)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(X)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(p)(this.scopes)}}]),r}(di),vi=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){return e(Q)(this,r),n.call(this,"facebook.com")}return e(X)(r,null,[{key:"credential",value:function(e){return ri._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(pi);
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
 */vi.FACEBOOK_SIGN_IN_METHOD="facebook.com",vi.PROVIDER_ID="facebook.com";
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
var yi=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){var t;return e(Q)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(X)(r,null,[{key:"credential",value:function(e,t){return ri._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(pi);yi.GOOGLE_SIGN_IN_METHOD="google.com",yi.PROVIDER_ID="google.com";
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
var gi=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){return e(Q)(this,r),n.call(this,"github.com")}return e(X)(r,null,[{key:"credential",value:function(e){return ri._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(pi);gi.GITHUB_SIGN_IN_METHOD="github.com",gi.PROVIDER_ID="github.com";
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
var mi=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){return e(Q)(this,r),n.call(this,"twitter.com")}return e(X)(r,null,[{key:"credential",value:function(e,t){return ri._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(pi);function _i(e,t){return ki.apply(this,arguments)}function ki(){return(ki=
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
e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Qn(n,"POST","/v1/accounts:signUp",Hn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */mi.TWITTER_SIGN_IN_METHOD="twitter.com",mi.PROVIDER_ID="twitter.com";var bi=function(){"use strict";function t(n){e(Q)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(X)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(u).mark((function a(){var s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ir._fromIdTokenResponse(n,i,o);case 2:return s=e.sent,c=wi(i),l=new t({user:s,providerId:c,_tokenResponse:i,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return e(a)(e(u).mark((function o(){var a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return a=wi(i),e.abrupt("return",new t({user:n,providerId:a,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),o)})))()}}]),t}();function wi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var Ii=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(t,i,o,a){var s,u;return e(Q)(this,r),(s=n.call(this,i.code,i.message)).operationType=o,s.user=a,Object.setPrototypeOf(e(oe)(s),r.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:o},s}return e(X)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(Oe);function Ci(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Ii._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function Ei(e,t){return Ti.apply(this,arguments)}function Ti(){return Ti=e(a)(e(u).mark((function t(n,r){var i,o,a=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.length>2&&void 0!==a[2]&&a[2],e.t0=cr,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return o=e.sent,e.abrupt("return",bi._forOperation(n,"link",o));case 14:case"end":return e.stop()}}),t)}))),Ti.apply(this,arguments)}function xi(e,t){return Si.apply(this,arguments)}function Si(){return Si=
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
e(a)(e(u).mark((function t(n,r){var i,o,a,s,c,l,h,f=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=n.auth,s="reauthenticate",e.prev=4,e.next=7,cr(n,Ci(a,s,r,n),i);case 7:return Rn((c=e.sent).idToken,a,"internal-error"),Rn(l=ur(c.idToken),a,"internal-error"),h=l.sub,Rn(n.uid===h,a,"user-mismatch"),e.abrupt("return",bi._forOperation(n,s,c));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(o=e.t0)||void 0===o?void 0:o.code)&&En(a,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),Si.apply(this,arguments)}function Ri(e,t){return Ni.apply(this,arguments)}function Ni(){return Ni=
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
e(a)(e(u).mark((function t(n,r){var i,o,a,s,c=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],o="signIn",e.next=4,Ci(n,o,r);case 4:return a=e.sent,e.next=7,bi._fromIdTokenResponse(n,o,a);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),Ni.apply(this,arguments)}function Pi(e,t){return Oi.apply(this,arguments)}function Oi(){return(Oi=e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ri(Vr(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ai(e,t,n){return Di.apply(this,arguments)}function Di(){return(Di=e(a)(e(u).mark((function t(n,r,i){var o,a,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Vr(n),e.next=3,_i(o,{returnSecureToken:!0,email:r,password:i});case 3:return a=e.sent,e.next=6,bi._fromIdTokenResponse(o,"signIn",a);case 6:return s=e.sent,e.next=9,o._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
function Li(e,t){return Gn(e,"POST","/v2/accounts/mfaEnrollment:start",Hn(e,t))}new WeakMap;var Mi="__sak",Ui=function(){"use strict";function t(n,r){e(Q)(this,t),this.storageRetriever=n,this.type=r}return e(X)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Mi,"1"),this.storage.removeItem(Mi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
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
 */var Fi=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){var t,i;return e(Q)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(Nr(i=Se())||Mr(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=jr(),t._shouldAllowMigration=!0,t}return e(X)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),u=this.localCache[a];s!==u&&e(a,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var o=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},a=this.storage.getItem(r);Fr()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,o=this;return e(a)(e(u).mark((function a(){return e(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(vn)(e(mn)(r.prototype),"_set",i).call(o,t,n);case 2:o.localCache[t]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(a)(e(u).mark((function o(){var a;return e(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(vn)(e(mn)(r.prototype),"_get",n).call(i,t);case 2:return a=o.sent,i.localCache[t]=JSON.stringify(a),o.abrupt("return",a);case 5:case"end":return o.stop()}}),o)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(a)(e(u).mark((function o(){return e(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(vn)(e(mn)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return o.stop()}}),o)})))()}}]),r}(Ui);Fi.type="LOCAL";var ji=Fi,Bi=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){return e(Q)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(X)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Ui);
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
 */Bi.type="SESSION";var qi=Bi;
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
 */function Wi(t){return Promise.all(t.map(function(){var t=e(a)(e(u).mark((function t(n){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}
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
 */var Vi=function(){"use strict";function t(n){e(Q)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(X)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o,s,c,l,h,f,d;return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=(i=t).data,s=o.eventId,c=o.eventType,l=o.data,null==(h=n.handlersMap[c])?void 0:h.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:c}),f=Array.from(h).map(function(){var t=e(a)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,Wi(f);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:c,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
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
function zi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Vi.receivers=[];var Hi=function(){"use strict";function t(n){e(Q)(this,t),this.target=n,this.handlers=new Set}return e(X)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(u).mark((function o(){var a,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,o){var u=zi("",20);a.port1.start();var l=setTimeout((function(){o(new Error("unsupported_event"))}),r);c={messageChannel:a,onMessage:function(t){var n=t;if(n.data.eventId===u)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),o(new Error("invalid_response"))}}},i.handlers.add(c),a.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:u,data:n},[a.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),o)})))()}}]),t}();
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
 */function Gi(){return window}
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
function Ki(){return void 0!==Gi().WorkerGlobalScope&&"function"==typeof Gi().importScripts}function Yi(){return Ji.apply(this,arguments)}function Ji(){return(Ji=e(a)(e(u).mark((function t(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
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
var Qi="firebaseLocalStorageDb",Xi="firebaseLocalStorage",$i="fbase_key",Zi=function(){"use strict";function t(n){e(Q)(this,t),this.request=n}return e(X)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function eo(e,t){return e.transaction([Xi],t?"readwrite":"readonly").objectStore(Xi)}function to(){var e=indexedDB.deleteDatabase(Qi);return new Zi(e).toPromise()}function no(){var t=indexedDB.open(Qi,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Xi,{keyPath:$i})}catch(e){r(e)}})),t.addEventListener("success",e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Xi)){e.next=12;break}return i.close(),e.next=5,to();case 5:return e.t0=n,e.next=8,no();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function ro(e,t,n){return io.apply(this,arguments)}function io(){return(io=e(a)(e(u).mark((function t(n,r,i){var o,a;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=eo(n,!0).put((o={},e($)(o,$i,r),e($)(o,"value",i),o)),t.abrupt("return",new Zi(a).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function oo(e,t){return ao.apply(this,arguments)}function ao(){return(ao=e(a)(e(u).mark((function t(n,r){var i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=eo(n,!1).get(r),e.next=3,new Zi(i).toPromise();case 3:return o=e.sent,e.abrupt("return",void 0===o?null:o.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function so(e,t){var n=eo(e,!0).delete(t);return new Zi(n).toPromise()}var uo=function(){"use strict";function t(){e(Q)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(X)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,no();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return o=e.sent,e.next=8,t(o);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ki()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(u).mark((function n(){return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=Vi._getInstance(Ki()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(a)(e(u).mark((function n(r,i){var o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return o=e.sent,e.abrupt("return",{keyProcessed:o.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r,i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Yi();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Hi(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(o=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=o[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=o[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(u).mark((function t(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,no();case 5:return n=e.sent,e.next=8,ro(n,Mi,"1");case 8:return e.next=10,so(n,Mi);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(u).mark((function i(){return e(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(a)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return ro(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return oo(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(u).mark((function r(){return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(a)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return so(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r,i,o,a,s,c,l,h,f,d,p,v,y,g,m,_,k;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=eo(e,!1).getAll();return new Zi(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],o=new Set,a=!0,s=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();!(a=(h=l.next()).done);a=!0)f=h.value,d=f.fbase_key,p=f.value,o.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(p)&&(t.notifyListeners(d,p),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,c=e.t0;case 18:e.prev=18,e.prev=19,a||null==l.return||l.return();case 21:if(e.prev=21,!s){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,y=!1,g=void 0,e.prev=27,m=Object.keys(t.localCache)[Symbol.iterator]();!(v=(_=m.next()).done);v=!0)k=_.value,t.localCache[k]&&!o.has(k)&&(t.notifyListeners(k,null),i.push(k));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),y=!0,g=e.t1;case 35:e.prev=35,e.prev=36,v||null==m.return||m.return();case 38:if(e.prev=38,!y){e.next=41;break}throw g;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();uo.type="LOCAL";var co=uo;
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
 */function lo(e,t){return Gn(e,"POST","/v2/accounts/mfaSignIn:start",Hn(e,t))}function ho(e){return new Promise((function(t,n){var r,i,o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=function(e){var t=Tn("internal-error");t.customData=e,n(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(o)}))}function fo(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
fo("rcb"),new jn(3e4,6e4);var po="recaptcha";
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
 */function vo(e,t,n){return yo.apply(this,arguments)}function yo(){return(yo=e(a)(e(u).mark((function t(n,r,i){var o,a,s,c,l,h,f,d;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(a=e.sent,e.prev=4,Rn("string"==typeof a,n,"argument-error"),Rn(i.type===po,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=s.session,!("phoneNumber"in s)){e.next=19;break}return Rn("enroll"===c.type,n,"internal-error"),e.next=15,Li(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:a}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return Rn("signin"===c.type,n,"internal-error"),Rn(h=(null===(o=s.multiFactorHint)||void 0===o?void 0:o.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,lo(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:a}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ii(n,{phoneNumber:s.phoneNumber,recaptchaToken:a});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var go=function(){"use strict";function t(n){e(Q)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Vr(n)}return e(X)(t,[{key:"verifyPhoneNumber",value:function(e,t){return vo(this.auth,e,tt(t))}}],[{key:"credential",value:function(e,t){return li._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?li._fromTokenResponse(n,r):null}}]),t}();
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
function mo(e,t){return t?An(t):(Rn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */go.PROVIDER_ID="phone",go.PHONE_SIGN_IN_METHOD="phone";var _o=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(t){var i;return e(Q)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(X)(r,[{key:"_getIdTokenResponse",value:function(e){return ti(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return ti(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return ti(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Hr);function ko(e){return Ri(e.auth,new _o(e),e.bypassAuthState)}function bo(e){var t=e.auth,n=e.user;return Rn(n,t,"internal-error"),xi(n,new _o(e),e.bypassAuthState)}function wo(e){return Io.apply(this,arguments)}function Io(){return(Io=e(a)(e(u).mark((function t(n){var r,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,Rn(i=n.user,r,"internal-error"),e.abrupt("return",Ei(i,new _o(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Co=function(){"use strict";function t(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(Q)(this,t),this.auth=n,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(X)(t,[{key:"execute",value:function(){var t=this;return new Promise(function(){var n=e(a)(e(u).mark((function n(r,i){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),n,null,[[1,10]])})));return function(e,t){return n.apply(this,arguments)}}())}},{key:"onAuthEvent",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o,a,s,c,l,h;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,o=t.sessionId,a=t.postBody,s=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return n.reject(c),e.abrupt("return");case 4:return h={auth:n.auth,requestUri:i,sessionId:o,tenantId:s||void 0,postBody:a||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(h);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ko;case"linkViaPopup":case"linkViaRedirect":return wo;case"reauthViaPopup":case"reauthViaRedirect":return bo;default:En(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Eo=new jn(2e3,1e4);
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
 */var To=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(t,i,o,a,s){var u;return e(Q)(this,r),(u=n.call(this,t,i,a,s)).provider=o,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(oe)(u),u}return e(X)(r,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return Rn(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Pn(1===t.filter.length,"Popup operations only handle one event"),r=zi(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(Tn(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Tn(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(Tn(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Eo.get())};t()}}]),r}(Co);To.currentPopupAction=null;
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
var xo=new Map,So=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(t,i){var o,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(Q)(this,r),(o=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a)).eventId=null,o}return e(X)(r,[{key:"execute",value:function(){var t=this,n=this;return e(a)(e(u).mark((function i(){var o,a;return e(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(o=xo.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Ro(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(vn)(e(mn)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:a=i.t0,o=function(){return Promise.resolve(a)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),o=function(){return Promise.reject(i.t1)};case 20:xo.set(n.auth._key(),o);case 21:return n.bypassAuthState||xo.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",o());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,o=function(){return e(vn)(e(mn)(r.prototype),"onAuthEvent",n)};return e(a)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",o().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",o().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(a)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(Co);function Ro(e,t){return No.apply(this,arguments)}function No(){return(No=e(a)(e(u).mark((function t(n,r){var i,o,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ao(r),o=Oo(n),e.next=4,o._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,o._get(i);case 8:return e.t0=e.sent,a="true"===e.t0,e.next=12,o._remove(i);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Po(e,t){xo.set(e._key(),t)}function Oo(e){return An(e._redirectPersistence)}function Ao(e){return Tr("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Do(e,t){return Lo.apply(this,arguments)}function Lo(){return Lo=e(a)(e(u).mark((function t(n,r){var i,o,a,s,c,l=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],o=Vr(n),a=mo(o,r),s=new So(o,a,i),e.next=6,s.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,o._persistUserIfCurrent(c.user);case 11:return e.next=13,o._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),Lo.apply(this,arguments)}
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
var Mo=function(){"use strict";function t(n){e(Q)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(X)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fo(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Fo(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Tn(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uo(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Uo(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function Uo(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Fo(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function jo(e){return Bo.apply(this,arguments)}function Bo(){return Bo=
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
e(a)(e(u).mark((function t(n){var r,i=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Gn(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),Bo.apply(this,arguments)}
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
 */var qo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wo=/^https?/;function Vo(){return(Vo=e(a)(e(u).mark((function t(n){var r,i,o,a,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,jo(n);case 4:r=e.sent.authorizedDomains,i=!0,o=!1,a=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(c=s.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!zo(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),o=!0,a=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!o){e.next=32;break}throw a;case 32:return e.finish(29);case 33:return e.finish(26);case 34:En(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function zo(e){var t=Ln(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===i}if(!Wo.test(r))return!1;if(qo.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
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
 */var Ho=new jn(3e4,6e4);function Go(){var t=Gi().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var o,a=Object.keys(t.H)[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(p)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}var Ko=null;function Yo(e){return Ko=Ko||function(e){return new Promise((function(t,n){var r,i,o;function a(){Go(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Go(),n(Tn(e,"network-request-failed"))},timeout:Ho.get()})}if(null===(i=null===(r=Gi().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Gi().gapi)||void 0===o?void 0:o.load)){var s=fo("iframefcb");return Gi()[s]=function(){gapi.load?a():n(Tn(e,"network-request-failed"))},ho("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}a()}})).catch((function(e){throw Ko=null,e}))}(e),Ko}
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
 */var Jo=new jn(5e3,15e3),Qo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $o(e){var t=e.config;Rn(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Bn(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:Xt},i=Xo.get(e.config.apiHost);i&&(r.eid=i);var o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),"".concat(n,"?").concat(Ge(r).slice(1))}function Zo(e){return ea.apply(this,arguments)}function ea(){return ea=e(a)(e(u).mark((function t(n){var r,i;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Yo(n);case 2:return r=t.sent,Rn(i=Gi().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:$o(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qo,dontclear:!0},(function(t){return new Promise(function(){var r=e(a)(e(u).mark((function r(i,o){var a,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){Gi().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:a=Tn(n,"network-request-failed"),s=Gi().setTimeout((function(){o(a)}),Jo.get()),t.ping(c).then(c,(function(){o(a)}));case 7:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}())})));case 6:case"end":return t.stop()}}),t)}))),ea.apply(this,arguments)}
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
 */var ta={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},na="_blank",ra="http://localhost",ia=function(){"use strict";function t(n){e(Q)(this,t),this.window=n,this.associatedEvent=null}return e(X)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function oa(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},ta),{width:i.toString(),height:o.toString(),top:a,left:s}),l=Se().toLowerCase();r&&(u=Pr(l)?na:r),Rr(l)&&(n=n||ra,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(Z)(n,2),i=r[0],o=r[1];return"".concat(t).concat(i,"=").concat(o,",")}),"");if(Ur(l)&&"_self"!==u)return aa(n||"",u),new ia(null);var f=window.open(n||"",u,h);Rn(f,t,"popup-blocked");try{f.focus()}catch(e){}return new ia(f)}function aa(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var sa="__/auth/handler",ua="emulator/auth/handler";function ca(t,n,r,i,o,a){Rn(t.config.authDomain,t,"auth-domain-config-required"),Rn(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:Xt,eventId:o};if(n instanceof di){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",We(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,f=Object.entries(a||{})[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=e(Z)(h.value,2),p=d[0],v=d[1];s[p]=v}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(n instanceof pi){var y=n.getScopes().filter((function(e){return""!==e}));y.length>0&&(s.scopes=y.join(","))}t.tenantId&&(s.tid=t.tenantId);var g,m,_=s,k=!0,b=!1,w=void 0;try{for(var I,C=Object.keys(_)[Symbol.iterator]();!(k=(I=C.next()).done);k=!0){var E=I.value;void 0===_[E]&&delete _[E]}}catch(e){b=!0,w=e}finally{try{k||null==C.return||C.return()}finally{if(b)throw w}}return"".concat((g=t,m=g.config,m.emulator?Bn(m,ua):"https://".concat(m.authDomain,"/").concat(sa)),"?").concat(Ge(_).slice(1))}
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
var la="webStorageSupport",ha=function(){"use strict";function t(){e(Q)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qi,this._completeRedirectFn=Do,this._overrideRedirectResult=Po}return e(X)(t,[{key:"_openPopup",value:function(t,n,r,i){var o=this;return e(a)(e(u).mark((function a(){var s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Pn(null===(s=o.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),c=ca(t,n,r,Ln(),i),e.abrupt("return",oa(t,c,zi()));case 4:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var o=this;return e(a)(e(u).mark((function a(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o._originValidation(t);case 2:return a=ca(t,n,r,Ln(),i),Gi().location.href=a,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,o=r.promise;return i?Promise.resolve(i):(Pn(o,"If manager is not set, promise should be"),o)}var a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch((function(){delete t.eventManagers[n]})),a}},{key:"initAndGetManager",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Zo(t);case 2:return i=e.sent,o=new Mo(t),i.register("authEvent",(function(e){return Rn(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:o.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:o},n.iframes[t._key()]=i,e.abrupt("return",o);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(la,{type:la},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),En(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Vo.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return jr()||Nr()||Mr()}}]),t}(),fa=ha,da=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(t){var i;return e(Q)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(X)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Gn(e,"POST","/v2/accounts/mfaEnrollment:finalize",Hn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Gn(e,"POST","/v2/accounts/mfaSignIn:finalize",Hn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function t(n){e(Q)(this,t),this.factorId=n}return e(X)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Nn("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(Q)(this,t)}return e(X)(t,null,[{key:"assertion",value:function(e){return da._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var pa,va="@firebase/auth",ya="0.20.7",ga=function(){"use strict";function t(n){e(Q)(this,t),this.auth=n,this.internalListeners=new Map}return e(X)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(a)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){Rn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();pa="Browser",Gt(new nt("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=r.options,a=o.apiKey,s=o.authDomain;return function(e,t){Rn(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),Rn(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:a,authDomain:s,clientPlatform:pa,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Br(pa)},i=new Wr(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),Gt(new nt("auth-internal",(function(e){var t=Vr(e.getProvider("auth").getImmediate());return new ga(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(va,ya,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(pa)),Zt(va,ya,"esm2017");oe=o("ds8z5"),Q=o("8MBJY"),X=o("a2hTj"),ae=o("eYQtU");var ma=o("l5bVx"),_a=(pe=o("2MbLg"),o("6qd2L")),ka="@firebase/database",ba="0.13.6",wa="";
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
var Ia,Ca=function(){"use strict";function t(n){e(Q)(this,t),this.domStorage_=n,this.prefix_="firebase:"}return e(X)(t,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Me(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),t}(),Ea=function(){"use strict";function t(){e(Q)(this,t),this.cache_={},this.isInMemoryStorage=!0}return e(X)(t,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return Be(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),t}(),Ta=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Ca(t)}}catch(e){}return new Ea},xa=Ta("localStorage"),Sa=Ta("sessionStorage"),Ra=new pt("@firebase/database"),Na=(Ia=1,function(){return Ia++}),Pa=function(e){var t=Ze(e),n=new Je;n.update(t);var r=n.digest();return be.encodeByteArray(r)},Oa=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var o=t[i];Array.isArray(o)||o&&"object"==typeof o&&"number"==typeof o.length?r+=Oa.apply(null,o):r+="object"==typeof o?Ue(o):o,r+=" "}return r},Aa=null,Da=!0,La=function(e,t){me(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Ra.logLevel=ot.VERBOSE,Aa=Ra.log.bind(Ra),t&&Sa.set("logging_enabled",!0)):"function"==typeof e?Aa=e:(Aa=null,Sa.remove("logging_enabled"))},Ma=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===Da&&(Da=!1,null===Aa&&!0===Sa.get("logging_enabled")&&La(!0)),Aa){var r=Oa.apply(null,t);Aa(r)}},Ua=function(t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];Ma.apply(void 0,[t].concat(e(p)(r)))}},Fa=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+Oa.apply(void 0,e(p)(n));Ra.error(i)},ja=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(Oa.apply(void 0,e(p)(n)));throw Ra.error(i),new Error(i)},Ba=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+Oa.apply(void 0,e(p)(n));Ra.warn(i)},qa=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Wa="[MIN_NAME]",Va="[MAX_NAME]",za=function(e,t){if(e===t)return 0;if(e===Wa||t===Va)return-1;if(t===Wa||e===Va)return 1;var n=es(e),r=es(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},Ha=function(e,t){return e===t?0:e<t?-1:1},Ga=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ue(t))},Ka=function(e){if("object"!=typeof e||null===e)return Ue(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=Ue(t[i]),r+=":",r+=Ka(e[t[i]]);return r+="}"},Ya=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
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
 */function Ja(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var Qa=function(e){me(!qa(e),"Invalid JSON number");var t,n,r,i,o,a=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),a))+a,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(o=52;o;o-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(o=0;o<64;o+=8){var l=parseInt(u.substr(o,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var Xa=new RegExp("^-?(0*)\\d{1,10}$"),$a=-2147483648,Za=2147483647,es=function(e){if(Xa.test(e)){var t=Number(e);if(t>=$a&&t<=Za)return t}return null},ts=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw Ba("Exception was thrown by user callback.",t),e}),Math.floor(0))}},ns=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},rs=function(){"use strict";function t(n,r){var i=this;e(Q)(this,t),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return e(X)(t,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){Ba('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),t}(),is=function(){"use strict";function t(n,r,i){var o=this;e(Q)(this,t),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return o.auth_=e}))}return e(X)(t,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(Ma("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ba(e)}}]),t}(),os=function(){"use strict";function t(n){e(Q)(this,t),this.accessToken=n}return e(X)(t,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),t}();os.OWNER="owner";
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
var as="5",ss=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,us="websocket",cs="long_polling",ls=function(){"use strict";function t(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]&&arguments[6];e(Q)(this,t),this.secure=r,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=s,this.includeNamespaceInQueryParams=u,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xa.get("host:"+n)||this._host}return e(X)(t,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xa.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),t}();function hs(e,t,n){var r;if(me("string"==typeof t,"typeof type must == string"),me("object"==typeof n,"typeof params must == object"),t===us)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==cs)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return Ja(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
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
 */var fs=function(){"use strict";function t(){e(Q)(this,t),this.counters_={}}return e(X)(t,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;Be(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return Ee(this.counters_)}}]),t}(),ds={},ps={};
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
 */function vs(e){var t=e.toString();return ds[t]||(ds[t]=new fs),ds[t]}
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
var ys=function(){"use strict";function t(n){e(Q)(this,t),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e(X)(t,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&ts((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var o=0;o<i.length;++o)n(o);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),t}(),gs="start",ms="close",_s=function(){"use strict";function t(n,r,i,o,a,s,u){var c=this;e(Q)(this,t),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.transportSessionId=s,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ua(n),this.stats_=vs(r),this.urlFn=function(e){return c.appCheckToken&&(e.ac=c.appCheckToken),hs(r,cs,e)}}return e(X)(t,[{key:"open",value:function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ys(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Pe()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var t=r;if(!r.isClosed_){r.scriptTagHolder=new ks((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=e(Z)(r,5),a=o[0],s=o[1],u=o[2];o[3],o[4];if(t.incrementIncomingBytes_(r),t.scriptTagHolder)if(t.connectTimeoutTimer_&&(clearTimeout(t.connectTimeoutTimer_),t.connectTimeoutTimer_=null),t.everConnected_=!0,a===gs)t.id=s,t.password=u;else{if(a!==ms)throw new Error("Unrecognized command received: "+a);if(s){var c=t;t.scriptTagHolder.sendNewPolls=!1,t.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else t.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=e(Z)(r,2),a=o[0],s=o[1];t.incrementIncomingBytes_(r),t.myPacketOrderer.handleResponse(a,s)}),(function(){t.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=as,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&ss.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=Ue(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=we(t),r=Ya(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!Pe()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=Ue(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){t.forceAllow_=!0}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!Pe()&&(!!t.forceAllow_||!(t.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),t}(),ks=function(){"use strict";function t(n,r,i,o){if(e(Q)(this,t),this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Pe())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=Na(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=t.createIFrame_();var a="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))a='<script>document.domain="'+document.domain+'";<\/script>';var s="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){Ma("frame writing exception"),e.stack&&Ma(e.stack),Ma(e)}}}return e(X)(t,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.innerHTML="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;Pe()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){Ma("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Ma("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),t}(),bs=null;
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
 */"undefined"!=typeof MozWebSocket?bs=MozWebSocket:"undefined"!=typeof WebSocket&&(bs=WebSocket);var ws=function(){"use strict";function t(n,r,i,o,a,s,u){e(Q)(this,t),this.connId=n,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ua(this.connId),this.stats_=vs(r),this.connURL=t.connectionURL_(r,s,u,o,i),this.nodeAdmin=r.nodeAdmin}return e(X)(t,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xa.set("previous_websocket_failure",!0);try{var r;if(Pe()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(as,"/").concat(wa,"/").concat(_a.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var o={},a=0===this.connURL.indexOf("wss://")?o.HTTPS_PROXY||o.https_proxy:o.HTTP_PROXY||o.http_proxy;a&&(r.proxy={origin:a})}this.mySock=new bs(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){xa.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=Me(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(me(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=Ue(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=Ya(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var o={};return o.v=as,!Pe()&&"undefined"!=typeof location&&location.hostname&&ss.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),r&&(o.ac=r),i&&(o.p=i),hs(e,us,o)}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==bs&&!t.forceDisallow_}},{key:"previouslyFailed",value:function(){return xa.isInMemoryStorage||!0===xa.get("previous_websocket_failure")}}]),t}();ws.responsesRequiredToBeHealthy=2,ws.healthyTimeout=3e4;
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
var Is=function(){"use strict";function t(n){e(Q)(this,t),this.initTransports_(n)}return e(X)(t,[{key:"initTransports_",value:function(e){var n=ws&&ws.isAvailable(),r=n&&!ws.previouslyFailed();if(e.webSocketOnly&&(n||Ba("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ws];else{var i=this.transports_=[],o=!0,a=!1,s=void 0;try{for(var u,c=t.ALL_TRANSPORTS[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){a=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw s}}t.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[_s,ws]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),t}();Is.globalTransportInitialized_=!1;
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
var Cs=function(){"use strict";function t(n,r,i,o,a,s,u,c,l,h){e(Q)(this,t),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=s,this.onReady_=u,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ua("c:"+this.id+":"),this.transportManager_=new Is(r),this.log_("Connection created"),this.start_()}return e(X)(t,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=ns((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=Ga("t",e),n=Ga("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=Ga("t",e),n=Ga("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=Ga("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Fa("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fa("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),as!==n&&Ba("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ns((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ns((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),t}(),Es=function(){"use strict";function t(){e(Q)(this,t)}return e(X)(t,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),t}(),Ts=function(){"use strict";function t(n){e(Q)(this,t),this.allowedEvents_=n,this.listeners_={},me(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return e(X)(t,[{key:"trigger",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[t]))for(var o=e(p)(this.listeners_[t]),a=0;a<o.length;a++)o[a].callback.apply(o[a].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){me(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),t}(),xs=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){var t;return e(Q)(this,r),(t=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Re()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}return e(X)(r,[{key:"getInitialEvent",value:function(e){return me("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(Ts),Ss=function(){"use strict";function t(n,r){if(e(Q)(this,t),void 0===r){this.pieces_=n.split("/");for(var i=0,o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return e(X)(t,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),t}();function Rs(){return new Ss("")}function Ns(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ps(e){return e.pieces_.length-e.pieceNum_}function Os(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new Ss(e.pieces_,t)}function As(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ds(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function Ls(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Ss(t,0)}function Ms(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Ss)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var o=t.split("/"),a=0;a<o.length;a++)o[a].length>0&&n.push(o[a]);return new Ss(n,0)}function Us(e){return e.pieceNum_>=e.pieces_.length}function Fs(e,t){var n=Ns(e),r=Ns(t);if(null===n)return t;if(n===r)return Fs(Os(e),Os(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function js(e,t){if(Ps(e)!==Ps(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Bs(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(Ps(e)>Ps(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var qs=function t(n,r){"use strict";e(Q)(this,t),this.errorPrefix_=r,this.parts_=Ds(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=et(this.parts_[i]);Ws(this)};function Ws(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Vs(e))}function Vs(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */var zs=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){var t,i,o;return e(Q)(this,r),t=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(o="visibilitychange",i="hidden"):void 0!==document.mozHidden?(o="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(o="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(o="webkitvisibilitychange",i="webkitHidden")),t.visible_=!0,o&&document.addEventListener(o,(function(){var e=!document[i];e!==t.visible_&&(t.visible_=e,t.trigger("visible",e))}),!1),t}return e(X)(r,[{key:"getInitialEvent",value:function(e){return me("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(Ts),Hs=1e3,Gs=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(t,i,o,a,s,u,c,l){var h;if(e(Q)(this,r),(h=n.call(this)).repoInfo_=t,h.applicationId_=i,h.onDataUpdate_=o,h.onConnectStatus_=a,h.onServerInfoUpdate_=s,h.authTokenProvider_=u,h.appCheckTokenProvider_=c,h.authOverride_=l,h.id=r.nextPersistentConnectionId_++,h.log_=Ua("p:"+h.id+":"),h.interruptReasons_={},h.listens=new Map,h.outstandingPuts_=[],h.outstandingGets_=[],h.outstandingPutCount_=0,h.outstandingGetCount_=0,h.onDisconnectRequestQueue_=[],h.connected_=!1,h.reconnectDelay_=Hs,h.maxReconnectDelay_=3e5,h.securityDebugCallback_=null,h.lastSessionId=null,h.establishConnectionTimer_=null,h.visible_=!1,h.requestCBHash_={},h.requestNumber_=0,h.realtime_=null,h.authToken_=null,h.appCheckToken_=null,h.forceTokenRefresh_=!1,h.invalidAuthTokenCount_=0,h.invalidAppCheckTokenCount_=0,h.firstConnection_=!0,h.lastConnectionAttemptTime_=null,h.lastConnectionEstablishedTime_=null,l&&!Pe())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return zs.getInstance().on("visible",h.onVisible_,e(oe)(h)),-1===t.host.indexOf("fblocal")&&xs.getInstance().on("online",h.onOnline_,e(oe)(h)),h}return e(X)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Ue(i)),me(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new xe,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),me(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),me(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");var a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);var a={p:i};e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest("q",a,(function(a){var s=a.d,u=a.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(o))===e&&(t.log_("listen response",a),"ok"!==u&&t.removeListen_(i,o),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=Fe(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=je(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),me(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;var a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+Ue(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Fa("Unrecognized action received from server: "+Ue(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;me(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Hs),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var t=this;return e(a)(e(u).mark((function n(){var i,o,a,s,c,l,h,f,d,p,v,y,g;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.shouldReconnect_()){n.next=31;break}return t.log_("Making a connection attempt"),t.lastConnectionAttemptTime_=(new Date).getTime(),t.lastConnectionEstablishedTime_=null,i=t.onDataMessage_.bind(t),o=t.onReady_.bind(t),a=t.onRealtimeDisconnect_.bind(t),s=t.id+":"+r.nextConnectionId_++,c=t.lastSessionId,l=!1,h=null,f=function(){h?h.close():(l=!0,a())},d=function(e){me(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(e)},t.realtime_={close:f,sendRequest:d},p=t.forceTokenRefresh_,t.forceTokenRefresh_=!1,n.prev=16,n.t0=e(Z),n.next=20,Promise.all([t.authTokenProvider_.getToken(p),t.appCheckTokenProvider_.getToken(p)]);case 20:n.t1=n.sent,v=(0,n.t0)(n.t1,2),y=v[0],g=v[1],l?Ma("getToken() completed but was canceled"):(Ma("getToken() completed. Creating connection."),t.authToken_=y&&y.accessToken,t.appCheckToken_=g&&g.token,h=new Cs(s,t.repoInfo_,t.applicationId_,t.appCheckToken_,t.authToken_,i,o,a,(function(e){Ba(e+" ("+t.repoInfo_.toString()+")"),t.interrupt("server_kill")}),c)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),t.log_("Failed to get token: "+n.t2),l||(t.repoInfo_.nodeAdmin&&Ba(n.t2),f());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){Ma("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){Ma("Resuming connection for reason: "+e),delete this.interruptReasons_[e],We(this.interruptReasons_)&&(this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return Ka(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new Ss(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){Ma("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){Ma("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,o=void 0;try{for(var a,s=this.listens.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}for(var f=0;f<this.outstandingPuts_.length;f++)this.outstandingPuts_[f]&&this.sendPut_(f);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var p=0;p<this.outstandingGets_.length;p++)this.outstandingGets_[p]&&this.sendGet_(p)}},{key:"sendConnectStats_",value:function(){var e={},t="js";Pe()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+wa.replace(/\./g,"-")]=1,Re()?e["framework.cordova"]=1:Ne()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=xs.getInstance().currentlyOnline();return We(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&Be(e,"w")){var n=qe(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Ba("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(Es);
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
 */Gs.nextPersistentConnectionId_=0,Gs.nextConnectionId_=0;
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
var Ks,Ys=function(){"use strict";function t(n,r){e(Q)(this,t),this.name=n,this.node=r}return e(X)(t,null,[{key:"Wrap",value:function(e,n){return new t(e,n)}}]),t}(),Js=function(){"use strict";function t(){e(Q)(this,t)}return e(X)(t,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new Ys(Wa,e),r=new Ys(Wa,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return Ys.MIN}}]),t}(),Qs=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){return e(Q)(this,r),n.apply(this,arguments)}return e(X)(r,[{key:"compare",value:function(e,t){return za(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw _e("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return Ys.MIN}},{key:"maxPost",value:function(){return new Ys(Va,Ks)}},{key:"makePost",value:function(e,t){return me("string"==typeof e,"KeyIndex indexValue must always be a string."),new Ys(e,Ks)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return Ks},set:function(e){Ks=e}}]),r}(Js),Xs=new Qs,$s=function(){"use strict";function t(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;e(Q)(this,t),this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,o&&(s*=-1),s<0)n=this.isReverse_?n.left:n.right;else{if(0===s){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return e(X)(t,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),t}(),Zs=function(){"use strict";function t(n,r,i,o,a){e(Q)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=o?o:nu.EMPTY_NODE,this.right=null!=a?a:nu.EMPTY_NODE}return e(X)(t,[{key:"copy",value:function(e,n,r,i,o){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return nu.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return nu.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight_",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),t}();
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
 */Zs.RED=!0,Zs.BLACK=!1;var eu,tu=function(){"use strict";function t(){e(Q)(this,t)}return e(X)(t,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Zs(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),t}(),nu=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.EMPTY_NODE;e(Q)(this,t),this.comparator_=n,this.root_=r}return e(X)(t,[{key:"insert",value:function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Zs.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Zs.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new $s(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new $s(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new $s(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new $s(this.root_,null,this.comparator_,!0,e)}}]),t}();
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
function ru(e,t){return za(e.name,t.name)}function iu(e,t){return za(e,t)}
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
 */nu.EMPTY_NODE=new tu;var ou,au,su,uu=function(e){return"number"==typeof e?"number:"+Qa(e):"string:"+e},cu=function(e){if(e.isLeafNode()){var t=e.val();me("string"==typeof t||"number"==typeof t||"object"==typeof t&&Be(t,".sv"),"Priority must be a string or number.")}else me(e===eu||e.isEmpty(),"priority of unexpected type.");me(e===eu||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},lu=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.__childrenNodeConstructor.EMPTY_NODE;e(Q)(this,t),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,me(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),cu(this.priorityNode_)}return e(X)(t,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(e){return new t(this.value_,e)}},{key:"getImmediateChild",value:function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(e){return Us(e)?this:".priority"===Ns(e)?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(e,n){var r=Ns(e);return null===r?n:n.isEmpty()&&".priority"!==r?this:(me(".priority"!==r||1===Ps(e),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(Os(e),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+uu(this.priorityNode_.val())+":");var n=e(ma)(this.value_);t+=n+":",t+="number"===n?Qa(this.value_):this.value_,this.lazyHash_=Pa(t)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(me(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}},{key:"compareToLeafNode_",value:function(n){var r=e(ma)(n.value_),i=e(ma)(this.value_),o=t.VALUE_TYPE_ORDER.indexOf(r),a=t.VALUE_TYPE_ORDER.indexOf(i);return me(o>=0,"Unknown leaf type: "+r),me(a>=0,"Unknown leaf type: "+i),o===a?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:a-o}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return ou},set:function(e){ou=e}}]),t}();lu.VALUE_TYPE_ORDER=["object","boolean","number","string"];var hu,fu,du=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){return e(Q)(this,r),n.apply(this,arguments)}return e(X)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?za(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return Ys.MIN}},{key:"maxPost",value:function(){return new Ys(Va,new lu("[PRIORITY-POST]",su))}},{key:"makePost",value:function(e,t){var n=au(e);return new Ys(t,new lu("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(Js),pu=new du,vu=Math.log(2),yu=function(){"use strict";function t(n){e(Q)(this,t);var r;this.count=(r=n+1,parseInt(Math.log(r)/vu,10)),this.current_=this.count-1;var i,o=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&o}return e(X)(t,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),t}(),gu=function(e,t,n,r){e.sort(t);var i=function(t,r){var o,a,s=r-t;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Zs(a,o.node,Zs.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return o=e[u],a=n?n(o):o,new Zs(a,o.node,Zs.BLACK,c,l)},o=function(t){for(var r=null,o=null,a=e.length,s=function(t,r){var o=a-t,s=a;a-=t;var c=i(o+1,s),l=e[o],h=n?n(l):l;u(new Zs(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(o=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,Zs.BLACK):(s(h,Zs.BLACK),s(h,Zs.RED))}return o}(new yu(e.length));return new nu(r||t,o)},mu={},_u=function(){"use strict";function t(n,r){e(Q)(this,t),this.indexes_=n,this.indexSet_=r}return e(X)(t,[{key:"get",value:function(e){var t=qe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof nu?t:null}},{key:"hasIndex",value:function(e){return Be(this.indexSet_,e.toString())}},{key:"addIndex",value:function(e,n){me(e!==Xs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],o=!1,a=n.getIterator(Ys.Wrap),s=a.getNext();s;)o=o||e.isDefinedOn(s.node),i.push(s),s=a.getNext();r=o?gu(i,e.getCompare()):mu;var u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;var l=Object.assign({},this.indexes_);return l[u]=r,new t(l,c)}},{key:"addToIndexes",value:function(e,n){var r=this;return new t(Ve(this.indexes_,(function(t,i){var o=qe(r.indexSet_,i);if(me(o,"Missing index implementation for "+i),t===mu){if(o.isDefinedOn(e.node)){for(var a=[],s=n.getIterator(Ys.Wrap),u=s.getNext();u;)u.name!==e.name&&a.push(u),u=s.getNext();return a.push(e),gu(a,o.getCompare())}return mu}var c=n.get(e.name),l=t;return c&&(l=l.remove(new Ys(e.name,c))),l.insert(e,e.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(e,n){return new t(Ve(this.indexes_,(function(t){if(t===mu)return t;var r=n.get(e.name);return r?t.remove(new Ys(e.name,r)):t})),this.indexSet_)}}],[{key:"Default",get:function(){return me(mu&&pu,"ChildrenNode.ts has not been loaded"),hu=hu||new t({".priority":mu},{".priority":pu})}}]),t}(),ku=function(){"use strict";function t(n,r,i){e(Q)(this,t),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&cu(this.priorityNode_),this.children_.isEmpty()&&me(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return e(X)(t,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||fu}},{key:"updatePriority",value:function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?fu:t}},{key:"getChild",value:function(e){var t=Ns(e);return null===t?this:this.getImmediateChild(t).getChild(Os(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(e,n){if(me(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n);var r,i,o=new Ys(e,n);n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(o,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(o,this.children_));var a=r.isEmpty()?fu:this.priorityNode_;return new t(r,a,i)}},{key:"updateChild",value:function(e,t){var n=Ns(e);if(null===n)return t;me(".priority"!==Ns(e)||1===Ps(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(Os(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(e){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(pu,(function(a,s){n[a]=s.val(e),r++,o&&t.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):o=!1})),!e&&o&&i<2*r){var a=[];for(var s in n)a[s]=n[s];return a}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+uu(this.getPriority().val())+":"),this.forEachChild(pu,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Pa(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Ys(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new Ys(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new Ys(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,Ys.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,Ys.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bu?-1:0}},{key:"withIndex",value:function(e){if(e===Xs||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===Xs||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(pu),r=t.getIterator(pu),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===Xs?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return fu||(fu=new t(new nu(iu),null,_u.Default))}}]),t}();ku.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var bu=new(function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){return e(Q)(this,r),n.call(this,new nu(iu),ku.EMPTY_NODE,_u.Default)}return e(X)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return ku.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(ku));Object.defineProperties(Ys,{MIN:{value:new Ys(Wa,ku.EMPTY_NODE)},MAX:{value:new Ys(Va,bu)}}),Qs.__EMPTY_NODE=ku.EMPTY_NODE,lu.__childrenNodeConstructor=ku,eu=bu,function(e){su=e}(bu);function wu(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)return ku.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),me(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":e(ma)(n))),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){var r=t;return new lu(r,wu(n))}if(t instanceof Array){var i=ku.EMPTY_NODE;return Ja(t,(function(e,n){if(Be(t,e)&&"."!==e.substring(0,1)){var r=wu(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(e,r))}})),i.updatePriority(wu(n))}var o=[],a=!1,s=t;if(Ja(s,(function(e,t){if("."!==e.substring(0,1)){var n=wu(t);n.isEmpty()||(a=a||!n.getPriority().isEmpty(),o.push(new Ys(e,n)))}})),0===o.length)return ku.EMPTY_NODE;var u=gu(o,ru,(function(e){return e.name}),iu);if(a){var c=gu(o,pu.getCompare());return new ku(u,wu(n),new _u({".priority":c},{".priority":pu}))}return new ku(u,wu(n),_u.Default)}!function(e){au=e}(wu);
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
var Iu,Cu,Eu=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(t){var i;return e(Q)(this,r),(i=n.call(this)).indexPath_=t,me(!Us(t)&&".priority"!==Ns(t),"Can't create PathIndex with empty path or .priority key"),i}return e(X)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?za(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=wu(e),r=ku.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ys(t,r)}},{key:"maxPost",value:function(){var e=ku.EMPTY_NODE.updateChild(this.indexPath_,bu);return new Ys(Va,e)}},{key:"toString",value:function(){return Ds(this.indexPath_,0).join("/")}}]),r}(Js),Tu=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(){return e(Q)(this,r),n.apply(this,arguments)}return e(X)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?za(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return Ys.MIN}},{key:"maxPost",value:function(){return Ys.MAX}},{key:"makePost",value:function(e,t){var n=wu(e);return new Ys(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(Js),xu=new Tu,Su="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
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
 */Iu=0,Cu=[];
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
function Ru(e){return{type:"value",snapshotNode:e}}function Nu(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Pu(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ou(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
var Au=function(){"use strict";function t(n){e(Q)(this,t),this.index_=n}return e(X)(t,[{key:"updateChild",value:function(e,t,n,r,i,o){me(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Pu(t,a)):me(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Nu(t,n)):o.trackChildChange(Ou(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}},{key:"updateFullNode",value:function(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(pu,(function(e,r){t.hasChild(e)||n.trackChildChange(Pu(e,r))})),t.isLeafNode()||t.forEachChild(pu,(function(t,r){if(e.hasChild(t)){var i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Ou(t,r,i))}else n.trackChildChange(Nu(t,r))}))),t.withIndex(this.index_)}},{key:"updatePriority",value:function(e,t){return e.isEmpty()?ku.EMPTY_NODE:e.updatePriority(t)}},{key:"filtersNodes",value:function(){return!1}},{key:"getIndexedFilter",value:function(){return this}},{key:"getIndex",value:function(){return this.index_}}]),t}(),Du=function(){"use strict";function t(n){e(Q)(this,t),this.indexedFilter_=new Au(n.getIndex()),this.index_=n.getIndex(),this.startPost_=t.getStartPost_(n),this.endPost_=t.getEndPost_(n)}return e(X)(t,[{key:"getStartPost",value:function(){return this.startPost_}},{key:"getEndPost",value:function(){return this.endPost_}},{key:"matches",value:function(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}},{key:"updateChild",value:function(e,t,n,r,i,o){return this.matches(new Ys(t,n))||(n=ku.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}},{key:"updateFullNode",value:function(e,t,n){t.isLeafNode()&&(t=ku.EMPTY_NODE);var r=t.withIndex(this.index_);r=r.updatePriority(ku.EMPTY_NODE);var i=this;return t.forEachChild(pu,(function(e,t){i.matches(new Ys(e,t))||(r=r.updateImmediateChild(e,ku.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.indexedFilter_}},{key:"getIndex",value:function(){return this.index_}}],[{key:"getStartPost_",value:function(e){if(e.hasStart()){var t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}},{key:"getEndPost_",value:function(e){if(e.hasEnd()){var t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}]),t}(),Lu=function(){"use strict";function t(n){e(Q)(this,t),this.rangedFilter_=new Du(n),this.index_=n.getIndex(),this.limit_=n.getLimit(),this.reverse_=!n.isViewFromLeft()}return e(X)(t,[{key:"updateChild",value:function(e,t,n,r,i,o){return this.rangedFilter_.matches(new Ys(t,n))||(n=ku.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}},{key:"updateFullNode",value:function(e,t,n){var r;if(t.isLeafNode()||t.isEmpty())r=ku.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){var i;r=ku.EMPTY_NODE.withIndex(this.index_),i=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var o=0;i.hasNext()&&o<this.limit_;){var a=i.getNext();if(!(this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:this.index_.compare(a,this.rangedFilter_.getEndPost())<=0))break;r=r.updateImmediateChild(a.name,a.node),o++}}else{var s,u,c,l;if(r=(r=t.withIndex(this.index_)).updatePriority(ku.EMPTY_NODE),this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),u=this.rangedFilter_.getStartPost();var h=this.index_.getCompare();c=function(e,t){return h(t,e)}}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),u=this.rangedFilter_.getEndPost(),c=this.index_.getCompare();for(var f=0,d=!1;l.hasNext();){var p=l.getNext();!d&&c(s,p)<=0&&(d=!0),d&&f<this.limit_&&c(p,u)<=0?f++:r=r.updateImmediateChild(p.name,ku.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.rangedFilter_.getIndexedFilter()}},{key:"getIndex",value:function(){return this.index_}},{key:"fullLimitUpdateChild_",value:function(e,t,n,r,i){var o;if(this.reverse_){var a=this.index_.getCompare();o=function(e,t){return a(t,e)}}else o=this.index_.getCompare();var s=e;me(s.numChildren()===this.limit_,"");var u=new Ys(t,n),c=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),l=this.rangedFilter_.matches(u);if(s.hasChild(t)){for(var h=s.getImmediateChild(t),f=r.getChildAfterChild(this.index_,c,this.reverse_);null!=f&&(f.name===t||s.hasChild(f.name));)f=r.getChildAfterChild(this.index_,f,this.reverse_);var d=null==f?1:o(f,u);if(l&&!n.isEmpty()&&d>=0)return null!=i&&i.trackChildChange(Ou(t,n,h)),s.updateImmediateChild(t,n);null!=i&&i.trackChildChange(Pu(t,h));var p=s.updateImmediateChild(t,ku.EMPTY_NODE);return null!=f&&this.rangedFilter_.matches(f)?(null!=i&&i.trackChildChange(Nu(f.name,f.node)),p.updateImmediateChild(f.name,f.node)):p}return n.isEmpty()?e:l&&o(c,u)>=0?(null!=i&&(i.trackChildChange(Pu(c.name,c.node)),i.trackChildChange(Nu(t,n))),s.updateImmediateChild(t,n).updateImmediateChild(c.name,ku.EMPTY_NODE)):e}}]),t}(),Mu=function(){"use strict";function t(){e(Q)(this,t),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pu}return e(X)(t,[{key:"hasStart",value:function(){return this.startSet_}},{key:"hasStartAfter",value:function(){return this.startAfterSet_}},{key:"hasEndBefore",value:function(){return this.endBeforeSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return me(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return me(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wa}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return me(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return me(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Va}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return me(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===pu}},{key:"copy",value:function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}]),t}();
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
 */function Uu(e){var t,n={};return e.isDefault()||(e.index_===pu?t="$priority":e.index_===xu?t="$value":e.index_===Xs?t="$key":(me(e.index_ instanceof Eu,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=Ue(t),e.startSet_&&(n.startAt=Ue(e.indexStartValue_),e.startNameSet_&&(n.startAt+=","+Ue(e.indexStartName_))),e.endSet_&&(n.endAt=Ue(e.indexEndValue_),e.endNameSet_&&(n.endAt+=","+Ue(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_)),n}function Fu(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==pu&&(t.i=e.index_.toString()),t}
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
 */var ju=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(t,i,o,a){var s;return e(Q)(this,r),(s=n.call(this)).repoInfo_=t,s.onDataUpdate_=i,s.authTokenProvider_=o,s.appCheckTokenProvider_=a,s.log_=Ua("p:rest:"),s.listens_={},s}return e(X)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var o=this,a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=Uu(e._queryParams);this.restRequest_(a+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&o.onDataUpdate_(a,r,!1,n),qe(o.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=Uu(e._queryParams),r=e._path.toString(),i=new xe;return this.restRequest_(r+".json",n,(function(e,n){var o=n;404===e&&(o=null,e=null),null===e?(t.onDataUpdate_(r,o,!1,null),i.resolve(o)):i.reject(new Error(o))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(o){var a=e(Z)(o,2),s=a[0],u=a[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+t+"?ns="+i.repoInfo_.namespace+Ge(n);i.log_("Sending REST request for "+l);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(r&&4===h.readyState){c.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);var e=null;if(h.status>=200&&h.status<300){try{e=Me(h.responseText)}catch(e){Ba("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,e)}else 401!==h.status&&404!==h.status&&Ba("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(me(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(Es),Bu=function(){"use strict";function t(){e(Q)(this,t),this.rootNode_=ku.EMPTY_NODE}return e(X)(t,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),t}();
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
function qu(){return{value:null,children:new Map}}function Wu(e,t,n){if(Us(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=Ns(t);e.children.has(r)||e.children.set(r,qu()),Wu(e.children.get(r),t=Os(t),n)}}function Vu(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
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
 */(e,(function(e,r){Vu(r,new Ss(t.toString()+"/"+e),n)}))}var zu,Hu,Gu=function(){"use strict";function t(n){e(Q)(this,t),this.collection_=n,this.last_=null}return e(X)(t,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ja(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),t}(),Ku=function(){"use strict";function t(n,r){e(Q)(this,t),this.server_=r,this.statsToReport_={},this.statsListener_=new Gu(n);var i=1e4+2e4*Math.random();ns(this.reportStats_.bind(this),Math.floor(i))}return e(X)(t,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;Ja(t,(function(t,i){i>0&&Be(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),ns(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),t}();
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
 */function Yu(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(Hu=zu||(zu={}))[Hu.OVERWRITE=0]="OVERWRITE",Hu[Hu.MERGE=1]="MERGE",Hu[Hu.ACK_USER_WRITE=2]="ACK_USER_WRITE",Hu[Hu.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var Ju,Qu=function(){"use strict";function t(n,r,i){e(Q)(this,t),this.path=n,this.affectedTree=r,this.revert=i,this.type=zu.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return e(X)(t,[{key:"operationForChild",value:function(e){if(Us(this.path)){if(null!=this.affectedTree.value)return me(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new Ss(e));return new t(Rs(),n,this.revert)}return me(Ns(this.path)===e,"operationForChild called for unrelated child."),new t(Os(this.path),this.affectedTree,this.revert)}}]),t}(),Xu=function(){"use strict";function t(n,r){e(Q)(this,t),this.source=n,this.path=r,this.type=zu.LISTEN_COMPLETE}return e(X)(t,[{key:"operationForChild",value:function(e){return Us(this.path)?new t(this.source,Rs()):new t(this.source,Os(this.path))}}]),t}(),$u=function(){"use strict";function t(n,r,i){e(Q)(this,t),this.source=n,this.path=r,this.snap=i,this.type=zu.OVERWRITE}return e(X)(t,[{key:"operationForChild",value:function(e){return Us(this.path)?new t(this.source,Rs(),this.snap.getImmediateChild(e)):new t(this.source,Os(this.path),this.snap)}}]),t}(),Zu=function(){"use strict";function t(n,r,i){e(Q)(this,t),this.source=n,this.path=r,this.children=i,this.type=zu.MERGE}return e(X)(t,[{key:"operationForChild",value:function(e){if(Us(this.path)){var n=this.children.subtree(new Ss(e));return n.isEmpty()?null:n.value?new $u(this.source,Rs(),n.value):new t(this.source,Rs(),n)}return me(Ns(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,Os(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),t}(),ec=function(){"use strict";function t(n,r,i){e(Q)(this,t),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return e(X)(t,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(Us(e))return this.isFullyInitialized()&&!this.filtered_;var t=Ns(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),t}(),tc=function t(n){"use strict";e(Q)(this,t),this.query_=n,this.index_=this.query_._queryParams.getIndex()};
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
 */function nc(e,t,n,r,i,o){var a=r.filter((function(e){return e.type===n}));a.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw _e("Should only compare child_ events.");var r=new Ys(t.childName,t.snapshotNode),i=new Ys(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */(e,t,n)})),a.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function rc(e,t){return{eventCache:e,serverCache:t}}function ic(e,t,n,r){return rc(new ec(t,n,r),e.serverCache)}function oc(e,t,n,r){return rc(e.eventCache,new ec(t,n,r))}function ac(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function sc(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */var uc=function(){return Ju||(Ju=new nu(Ha)),Ju},cc=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:uc();e(Q)(this,t),this.value=n,this.children=r}return e(X)(t,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:Rs(),value:this.value};if(Us(e))return null;var n=Ns(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(Os(e),t);return null!=i?{path:Ms(new Ss(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(e){if(Us(e))return this;var n=Ns(e),r=this.children.get(n);return null!==r?r.subtree(Os(e)):new t(null)}},{key:"set",value:function(e,n){if(Us(e))return new t(n,this.children);var r=Ns(e),i=(this.children.get(r)||new t(null)).set(Os(e),n),o=this.children.insert(r,i);return new t(this.value,o)}},{key:"remove",value:function(e){if(Us(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=Ns(e),r=this.children.get(n);if(r){var i,o=r.remove(Os(e));return i=o.isEmpty()?this.children.remove(n):this.children.insert(n,o),null===this.value&&i.isEmpty()?new t(null):new t(this.value,i)}return this}},{key:"get",value:function(e){if(Us(e))return this.value;var t=Ns(e),n=this.children.get(t);return n?n.get(Os(e)):null}},{key:"setTree",value:function(e,n){if(Us(e))return n;var r,i=Ns(e),o=(this.children.get(i)||new t(null)).setTree(Os(e),n);return r=o.isEmpty()?this.children.remove(i):this.children.insert(i,o),new t(this.value,r)}},{key:"fold",value:function(e){return this.fold_(Rs(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(Ms(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,Rs(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(Us(e))return null;var i=Ns(e),o=this.children.get(i);return o?o.findOnPath_(Os(e),Ms(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,Rs(),t)}},{key:"foreachOnPath_",value:function(e,n,r){if(Us(e))return this;this.value&&r(n,this.value);var i=Ns(e),o=this.children.get(i);return o?o.foreachOnPath_(Os(e),Ms(n,i),r):new t(null)}},{key:"foreach",value:function(e){this.foreach_(Rs(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(Ms(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(e){var n=new t(null);return Ja(e,(function(e,t){n=n.set(new Ss(e),t)})),n}}]),t}(),lc=function(){"use strict";function t(n){e(Q)(this,t),this.writeTree_=n}return e(X)(t,null,[{key:"empty",value:function(){return new t(new cc(null))}}]),t}();function hc(e,t,n){if(Us(t))return new lc(new cc(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,o=r.value,a=Fs(i,t);return o=o.updateChild(a,n),new lc(e.writeTree_.set(i,o))}var s=new cc(n),u=e.writeTree_.setTree(t,s);return new lc(u)}function fc(e,t,n){var r=e;return Ja(n,(function(e,n){r=hc(r,Ms(t,e),n)})),r}function dc(e,t){if(Us(t))return lc.empty();var n=e.writeTree_.setTree(t,new cc(null));return new lc(n)}function pc(e,t){return null!=vc(e,t)}function vc(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Fs(n.path,t)):null}function yc(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(pu,(function(e,n){t.push(new Ys(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new Ys(e,n.value))})),t}function gc(e,t){if(Us(t))return e;var n=vc(e,t);return new lc(null!=n?new cc(n):e.writeTree_.subtree(t))}function mc(e){return e.writeTree_.isEmpty()}function _c(e,t){return kc(Rs(),e.writeTree_,t)}function kc(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(me(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=kc(Ms(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Ms(e,".priority"),r)),n}
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
 */function bc(e,t){return Lc(t,e)}function wc(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function Ic(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));me(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,o=!1,a=e.allWrites.length-1;i&&a>=0;){var s=e.allWrites[a];s.visible&&(a>=n&&Cc(s,r.path)?i=!1:Bs(r.path,s.path)&&(o=!0)),a--}if(i){if(o)return function(e){e.visibleWrites=Tc(e.allWrites,Ec,Rs()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=dc(e.visibleWrites,r.path):Ja(r.children,(function(t){e.visibleWrites=dc(e.visibleWrites,Ms(r.path,t))}));return!0}return!1}function Cc(e,t){if(e.snap)return Bs(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&Bs(Ms(e.path,n),t))return!0;return!1}function Ec(e){return e.visible}function Tc(e,t,n){for(var r=lc.empty(),i=0;i<e.length;++i){var o=e[i];if(t(o)){var a=o.path,s=void 0;if(o.snap)Bs(n,a)?r=hc(r,s=Fs(n,a),o.snap):Bs(a,n)&&(s=Fs(a,n),r=hc(r,Rs(),o.snap.getChild(s)));else{if(!o.children)throw _e("WriteRecord should have .snap or .children");if(Bs(n,a))r=fc(r,s=Fs(n,a),o.children);else if(Bs(a,n))if(Us(s=Fs(a,n)))r=fc(r,Rs(),o.children);else{var u=qe(o.children,Ns(s));if(u){var c=u.getChild(Os(s));r=hc(r,Rs(),c)}}}}}return r}function xc(e,t,n,r,i){if(r||i){var o=gc(e.visibleWrites,t);if(!i&&mc(o))return n;if(i||null!=n||pc(o,Rs())){return _c(Tc(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Bs(e.path,t)||Bs(t,e.path))}),t),n||ku.EMPTY_NODE)}return null}var a=vc(e.visibleWrites,t);if(null!=a)return a;var s=gc(e.visibleWrites,t);return mc(s)?n:null!=n||pc(s,Rs())?_c(s,n||ku.EMPTY_NODE):null}function Sc(e,t,n,r){return xc(e.writeTree,e.treePath,t,n,r)}function Rc(e,t){return function(e,t,n){var r=ku.EMPTY_NODE,i=vc(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(pu,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var o=gc(e.visibleWrites,t);return n.forEachChild(pu,(function(e,t){var n=_c(gc(o,new Ss(e)),t);r=r.updateImmediateChild(e,n)})),yc(o).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return yc(gc(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Nc(e,t,n,r){return function(e,t,n,r,i){me(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=Ms(t,n);if(pc(e.visibleWrites,o))return null;var a=gc(e.visibleWrites,o);return mc(a)?i.getChild(n):_c(a,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function Pc(e,t){return function(e,t){return vc(e.visibleWrites,t)}(e.writeTree,Ms(e.treePath,t))}function Oc(e,t,n,r,i,o){return function(e,t,n,r,i,o,a){var s,u=gc(e.visibleWrites,t),c=vc(u,Rs());if(null!=c)s=c;else{if(null==n)return[];s=_c(u,n)}if((s=s.withIndex(a)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=a.getCompare(),f=o?s.getReverseIteratorFrom(r,a):s.getIteratorFrom(r,a),d=f.getNext();d&&l.length<i;)0!==h(d,r)&&l.push(d),d=f.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,o)}function Ac(e,t,n){return function(e,t,n,r){var i=Ms(t,n),o=vc(e.visibleWrites,i);return null!=o?o:r.isCompleteForChild(n)?_c(gc(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function Dc(e,t){return Lc(Ms(e.treePath,t),e.writeTree)}function Lc(e,t){return{treePath:e,writeTree:t}}
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
 */var Mc=function(){"use strict";function t(){e(Q)(this,t),this.changeMap=new Map}return e(X)(t,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;me("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),me(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Ou(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Pu(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Nu(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw _e("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Ou(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),t}(),Uc=new(function(){"use strict";function t(){e(Q)(this,t)}return e(X)(t,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),t}()),Fc=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(Q)(this,t),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return e(X)(t,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new ec(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ac(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:sc(this.viewCache_),i=Oc(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),t}();
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
 */function jc(e,t,n,r,i){var o,a,s=new Mc;if(n.type===zu.OVERWRITE){var u=n;u.source.fromUser?o=Wc(e,t,u.path,u.snap,r,i,s):(me(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!Us(u.path),o=qc(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===zu.MERGE){var c=n;c.source.fromUser?o=function(e,t,n,r,i,o,a){var s=t;return r.foreach((function(r,u){var c=Ms(n,r);Vc(t,Ns(c))&&(s=Wc(e,s,c,u,i,o,a))})),r.foreach((function(r,u){var c=Ms(n,r);Vc(t,Ns(c))||(s=Wc(e,s,c,u,i,o,a))})),s}(e,t,c.path,c.children,r,i,s):(me(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Hc(e,t,c.path,c.children,r,i,a,s))}else if(n.type===zu.ACK_USER_WRITE){var l=n;o=l.revert?function(e,t,n,r,i,o){var a;if(null!=Pc(r,n))return t;var s,u=new Fc(r,t,i),c=t.eventCache.getNode();if(Us(n)||".priority"===Ns(n)){var l;if(t.serverCache.isFullyInitialized())l=Sc(r,sc(t));else{var h=t.serverCache.getNode();me(h instanceof ku,"serverChildren would be complete if leaf node"),l=Rc(r,h)}s=e.filter.updateFullNode(c,l,o)}else{var f=Ns(n),d=Ac(r,f,t.serverCache);null==d&&t.serverCache.isCompleteForChild(f)&&(d=c.getImmediateChild(f)),(s=null!=d?e.filter.updateChild(c,f,d,Os(n),u,o):t.eventCache.getNode().hasChild(f)?e.filter.updateChild(c,f,ku.EMPTY_NODE,Os(n),u,o):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Sc(r,sc(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,a,o))}return a=t.serverCache.isFullyInitialized()||null!=Pc(r,Rs()),ic(t,s,a,e.filter.filtersNodes())}
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
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,o,a){if(null!=Pc(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(Us(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return qc(e,t,n,u.getNode().getChild(n),i,o,s,a);if(Us(n)){var c=new cc(null);return u.getNode().forEachChild(Xs,(function(e,t){c=c.set(new Ss(e),t)})),Hc(e,t,n,c,i,o,s,a)}return t}var l=new cc(null);return r.foreach((function(e,t){var r=Ms(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),Hc(e,t,n,l,i,o,s,a)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==zu.LISTEN_COMPLETE)throw _e("Unknown operation type: "+n.type);o=function(e,t,n,r,i){var o=t.serverCache,a=oc(t,o.getNode(),o.isFullyInitialized()||Us(n),o.isFiltered());return Bc(e,a,n,r,Uc,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=ac(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Ru(ac(t)))}}(t,o,h),{viewCache:o,changes:h}}function Bc(e,t,n,r,i,o){var a,s,u=t.eventCache;if(null!=Pc(r,n))return t;if(Us(n))if(me(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=sc(t),l=Rc(r,c instanceof ku?c:ku.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),l,o)}else{var h=Sc(r,sc(t));a=e.filter.updateFullNode(t.eventCache.getNode(),h,o)}else{var f=Ns(n);if(".priority"===f){me(1===Ps(n),"Can't have a priority with additional path components");var d=u.getNode(),p=Nc(r,n,d,s=t.serverCache.getNode());a=null!=p?e.filter.updatePriority(d,p):u.getNode()}else{var v,y=Os(n);if(u.isCompleteForChild(f)){s=t.serverCache.getNode();var g=Nc(r,n,u.getNode(),s);v=null!=g?u.getNode().getImmediateChild(f).updateChild(y,g):u.getNode().getImmediateChild(f)}else v=Ac(r,f,t.serverCache);a=null!=v?e.filter.updateChild(u.getNode(),f,v,y,i,o):u.getNode()}}return ic(t,a,u.isFullyInitialized()||Us(n),e.filter.filtersNodes())}function qc(e,t,n,r,i,o,a,s){var u,c=t.serverCache,l=a?e.filter:e.filter.getIndexedFilter();if(Us(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var f=Ns(n);if(!c.isCompleteForPath(n)&&Ps(n)>1)return t;var d=Os(n),p=c.getNode().getImmediateChild(f).updateChild(d,r);u=".priority"===f?l.updatePriority(c.getNode(),p):l.updateChild(c.getNode(),f,p,d,Uc,null)}var v=oc(t,u,c.isFullyInitialized()||Us(n),l.filtersNodes());return Bc(e,v,n,i,new Fc(i,v,o),s)}function Wc(e,t,n,r,i,o,a){var s,u,c=t.eventCache,l=new Fc(i,t,o);if(Us(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,a),s=ic(t,u,!0,e.filter.filtersNodes());else{var h=Ns(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=ic(t,u,c.isFullyInitialized(),c.isFiltered());else{var f,d=Os(n),p=c.getNode().getImmediateChild(h);if(Us(d))f=r;else{var v=l.getCompleteChild(h);f=null!=v?".priority"===As(d)&&v.getChild(Ls(d)).isEmpty()?v:v.updateChild(d,r):ku.EMPTY_NODE}if(p.equals(f))s=t;else s=ic(t,e.filter.updateChild(c.getNode(),h,f,d,l,a),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function Vc(e,t){return e.eventCache.isCompleteForChild(t)}function zc(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function Hc(e,t,n,r,i,o,a,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=Us(n)?r:new cc(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=zc(0,t.serverCache.getNode().getImmediateChild(n),r);c=qc(e,c,new Ss(n),u,i,o,a,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var h=zc(0,t.serverCache.getNode().getImmediateChild(n),r);c=qc(e,c,new Ss(n),h,i,o,a,s)}})),c}var Gc,Kc=function(){"use strict";function t(n,r){e(Q)(this,t),this.query_=n,this.eventRegistrations_=[];var i,o=this.query_._queryParams,a=new Au(o.getIndex()),s=(i=o).loadsAllData()?new Au(i.getIndex()):i.hasLimit()?new Lu(i):new Du(i);this.processor_=
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
function(e){return{filter:e}}(s);var u=r.serverCache,c=r.eventCache,l=a.updateFullNode(ku.EMPTY_NODE,u.getNode(),null),h=s.updateFullNode(ku.EMPTY_NODE,c.getNode(),null),f=new ec(l,u.isFullyInitialized(),a.filtersNodes()),d=new ec(h,c.isFullyInitialized(),s.filtersNodes());this.viewCache_=rc(d,f),this.eventGenerator_=new tc(this.query_)}return e(X)(t,[{key:"query",get:function(){return this.query_}}]),t}();function Yc(e,t){var n=sc(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Us(t)&&!n.getImmediateChild(Ns(t)).isEmpty())?n.getChild(t):null}function Jc(e){return 0===e.eventRegistrations_.length}function Qc(e,t,n){var r=[];if(n){me(null==t,"A cancel should cancel all event registrations.");var i=e.query._path;e.eventRegistrations_.forEach((function(e){var t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){for(var o=[],a=0;a<e.eventRegistrations_.length;++a){var s=e.eventRegistrations_[a];if(s.matches(t)){if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(a+1));break}}else o.push(s)}e.eventRegistrations_=o}else e.eventRegistrations_=[];return r}function Xc(e,t,n,r){t.type===zu.MERGE&&null!==t.source.queryId&&(me(sc(e.viewCache_),"We should always have a full cache before handling merges"),me(ac(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,o,a=e.viewCache_,s=jc(e.processor_,a,t,n,r);return i=e.processor_,o=s.viewCache,me(o.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),me(o.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),me(s.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,$c(e,s.changes,s.viewCache.eventCache.getNode(),null)}function $c(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],o=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),nc(e,i,"child_removed",t,r,n),nc(e,i,"child_added",t,r,n),nc(e,i,"child_moved",o,r,n),nc(e,i,"child_changed",t,r,n),nc(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
 */var Zc,el=function t(){"use strict";e(Q)(this,t),this.views=new Map};function tl(e){return 0===e.views.size}function nl(e,t,n,r){var i=t.source.queryId;if(null!==i){var o=e.views.get(i);return me(null!=o,"SyncTree gave us an op for an invalid query."),Xc(o,t,n,r)}var a=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;a=a.concat(Xc(f,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return a}function rl(e,t,n,r,i){var o=t._queryIdentifier,a=e.views.get(o);if(!a){var s=Sc(n,i?r:null),u=!1;s?u=!0:r instanceof ku?(s=Rc(n,r),u=!1):(s=ku.EMPTY_NODE,u=!1);var c=rc(new ec(s,u,!1),new ec(r,i,!1));return new Kc(t,c)}return a}function il(e,t,n,r,i,o){var a=rl(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,a),function(e,t){e.eventRegistrations_.push(t)}(a,n),function(e,t){var n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(pu,(function(e,t){r.push(Nu(e,t))})),n.isFullyInitialized()&&r.push(Ru(n.getNode())),$c(e,r,n.getNode(),t)}(a,n)}function ol(t,n,r,i){var o=n._queryIdentifier,a=[],s=[],u=ll(t),c=!0,l=!1,h=void 0;if("default"===o)try{for(var f,d=t.views.entries()[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var p=e(Z)(f.value,2),v=p[0],y=p[1];s=s.concat(Qc(y,r,i)),Jc(y)&&(t.views.delete(v),y.query._queryParams.loadsAllData()||a.push(y.query))}}catch(e){l=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw h}}else{var g=t.views.get(o);g&&(s=s.concat(Qc(g,r,i)),Jc(g)&&(t.views.delete(o),g.query._queryParams.loadsAllData()||a.push(g.query)))}return u&&!ll(t)&&a.push(new(me(Gc,"Reference.ts has not been loaded"),Gc)(n._repo,n._path)),{removed:a,events:s}}function al(e){var t=[],n=!0,r=!1,i=void 0;try{for(var o,a=e.views.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;s.query._queryParams.loadsAllData()||t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}function sl(e,t){var n=null,r=!0,i=!1,o=void 0;try{for(var a,s=e.views.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;n=n||Yc(u,t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}function ul(e,t){if(t._queryParams.loadsAllData())return hl(e);var n=t._queryIdentifier;return e.views.get(n)}function cl(e,t){return null!=ul(e,t)}function ll(e){return null!=hl(e)}function hl(e){var t=!0,n=!1,r=void 0;try{for(var i,o=e.views.values()[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;if(a.query._queryParams.loadsAllData())return a}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}return null}
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
 */var fl=1,dl=function t(n){"use strict";e(Q)(this,t),this.listenProvider_=n,this.syncPointTree_=new cc(null),this.pendingWriteTree_={visibleWrites:lc.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function pl(e,t,n,r,i){return function(e,t,n,r,i){me(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=hc(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?bl(e,new $u({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function vl(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=wc(e.pendingWriteTree_,t),i=Ic(e.pendingWriteTree_,t);if(i){var o=new cc(null);return null!=r.snap?o=o.set(Rs(),!0):Ja(r.children,(function(e){o=o.set(new Ss(e),!0)})),bl(e,new Qu(r.path,o,n))}return[]}function yl(e,t,n){return bl(e,new $u({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function gl(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=t._path,a=e.syncPointTree_.get(o),s=[];if(a&&("default"===t._queryIdentifier||cl(a,t))){var u=ol(a,t,n,r);tl(a)&&(e.syncPointTree_=e.syncPointTree_.remove(o));var c=u.removed;if(s=u.events,!i){var l=-1!==c.findIndex((function(e){return e._queryParams.loadsAllData()})),h=e.syncPointTree_.findOnPath(o,(function(e,t){return ll(t)}));if(l&&!h){var f=e.syncPointTree_.subtree(o);if(!f.isEmpty())for(var d=Nl(f),p=0;p<d.length;++p){var v=d[p],y=v.query,g=Cl(e,v);e.listenProvider_.startListening(Pl(y),El(e,y),g.hashFn,g.onComplete)}}if(!h&&c.length>0&&!r)if(l){var m=null;e.listenProvider_.stopListening(Pl(t),m)}else c.forEach((function(t){var n=e.queryToTagMap.get(Tl(t));e.listenProvider_.stopListening(Pl(t),n)}))}Ol(e,c)}return s}function ml(e,t,n,r){var i=xl(e,r);if(null!=i){var o=Sl(i),a=o.path,s=o.queryId,u=Fs(a,t);return Rl(e,a,new $u(Yu(s),u,n))}return[]}function _l(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=t._path,o=null,a=!1;e.syncPointTree_.foreachOnPath(i,(function(e,t){var n=Fs(e,i);o=o||sl(t,n),a=a||ll(t)}));var s,u=e.syncPointTree_.get(i);if(u?(a=a||ll(u),o=o||sl(u,Rs())):(u=new el,e.syncPointTree_=e.syncPointTree_.set(i,u)),null!=o)s=!0;else{s=!1,o=ku.EMPTY_NODE;var c=e.syncPointTree_.subtree(i);c.foreachChild((function(e,t){var n=sl(t,Rs());n&&(o=o.updateImmediateChild(e,n))}))}var l=cl(u,t);if(!l&&!t._queryParams.loadsAllData()){var h=Tl(t);me(!e.queryToTagMap.has(h),"View does not exist, but we have a tag");var f=Al();e.queryToTagMap.set(h,f),e.tagToQueryMap.set(f,h)}var d=bc(e.pendingWriteTree_,i),p=il(u,t,n,d,o,s);if(!l&&!a&&!r){var v=ul(u,t);p=p.concat(Dl(e,t,v))}return p}function kl(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=sl(n,Fs(e,t));if(r)return r}));return xc(r,t,i,n,!0)}function bl(e,t){return wl(t,e.syncPointTree_,null,bc(e.pendingWriteTree_,Rs()))}function wl(e,t,n,r){if(Us(e.path))return Il(e,t,n,r);var i=t.get(Rs());null==n&&null!=i&&(n=sl(i,Rs()));var o=[],a=Ns(e.path),s=e.operationForChild(a),u=t.children.get(a);if(u&&s){var c=n?n.getImmediateChild(a):null,l=Dc(r,a);o=o.concat(wl(s,u,c,l))}return i&&(o=o.concat(nl(i,e,r,n))),o}function Il(e,t,n,r){var i=t.get(Rs());null==n&&null!=i&&(n=sl(i,Rs()));var o=[];return t.children.inorderTraversal((function(t,i){var a=n?n.getImmediateChild(t):null,s=Dc(r,t),u=e.operationForChild(t);u&&(o=o.concat(Il(u,i,a,s)))})),i&&(o=o.concat(nl(i,e,r,n))),o}function Cl(e,t){var n=t.query,r=El(e,n);return{hashFn:function(){var e=function(e){return e.viewCache_.serverCache.getNode()}(t)||ku.EMPTY_NODE;return e.hash()},onComplete:function(t){if("ok"===t)return r?function(e,t,n){var r=xl(e,n);if(r){var i=Sl(r),o=i.path,a=i.queryId,s=Fs(o,t);return Rl(e,o,new Xu(Yu(a),s))}return[]}(e,n._path,r):function(e,t){return bl(e,new Xu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);var i=function(e,t){var n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");var r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return gl(e,n,null,i)}}}function El(e,t){var n=Tl(t);return e.queryToTagMap.get(n)}function Tl(e){return e._path.toString()+"$"+e._queryIdentifier}function xl(e,t){return e.tagToQueryMap.get(t)}function Sl(e){var t=e.indexOf("$");return me(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Ss(e.substr(0,t))}}function Rl(e,t,n){var r=e.syncPointTree_.get(t);return me(r,"Missing sync point for query tag that we're tracking"),nl(r,n,bc(e.pendingWriteTree_,t),null)}function Nl(e){return e.fold((function(e,t,n){if(t&&ll(t))return[hl(t)];var r=[];return t&&(r=al(t)),Ja(n,(function(e,t){r=r.concat(t)})),r}))}function Pl(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(me(Zc,"Reference.ts has not been loaded"),Zc)(e._repo,e._path):e}function Ol(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r._queryParams.loadsAllData()){var i=Tl(r),o=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(o)}}}function Al(){return fl++}function Dl(e,t,n){var r=t._path,i=El(e,t),o=Cl(e,n),a=e.listenProvider_.startListening(Pl(t),i,o.hashFn,o.onComplete),s=e.syncPointTree_.subtree(r);if(i)me(!ll(s.value),"If we're adding a query, it shouldn't be shadowed");else for(var u=s.fold((function(e,t,n){if(!Us(e)&&t&&ll(t))return[hl(t).query];var r=[];return t&&(r=r.concat(al(t).map((function(e){return e.query})))),Ja(n,(function(e,t){r=r.concat(t)})),r})),c=0;c<u.length;++c){var l=u[c];e.listenProvider_.stopListening(Pl(l),El(e,l))}return a}
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
 */var Ll=function(){"use strict";function t(n){e(Q)(this,t),this.node_=n}return e(X)(t,[{key:"getImmediateChild",value:function(e){return new t(this.node_.getImmediateChild(e))}},{key:"node",value:function(){return this.node_}}]),t}(),Ml=function(){"use strict";function t(n,r){e(Q)(this,t),this.syncTree_=n,this.path_=r}return e(X)(t,[{key:"getImmediateChild",value:function(e){var n=Ms(this.path_,e);return new t(this.syncTree_,n)}},{key:"node",value:function(){return kl(this.syncTree_,this.path_)}}]),t}(),Ul=function(e,t,n){return e&&"object"==typeof e?(me(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Fl(e[".sv"],t,n):"object"==typeof e[".sv"]?jl(e[".sv"],t):void me(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Fl=function(e,t,n){if("timestamp"===e)return n.timestamp;me(!1,"Unexpected server value: "+e)},jl=function(e,t,n){e.hasOwnProperty("increment")||me(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&me(!1,"Unexpected increment value: "+r);var i=t.node();if(me(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i.getValue();return"number"!=typeof o?r:o+r},Bl=function(e,t,n,r){return Wl(t,new Ml(n,e),r)},ql=function(e,t,n){return Wl(e,new Ll(t),n)};function Wl(e,t,n){var r,i=e.getPriority().val(),o=Ul(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var a=e,s=Ul(a.getValue(),t,n);return s!==a.getValue()||o!==a.getPriority().val()?new lu(s,wu(o)):e}var u=e;return r=u,o!==u.getPriority().val()&&(r=r.updatePriority(new lu(o))),u.forEachChild(pu,(function(e,i){var o=Wl(i,t.getImmediateChild(e),n);o!==i&&(r=r.updateImmediateChild(e,o))})),r}
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
 */var Vl=function t(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};e(Q)(this,t),this.name=n,this.parent=r,this.node=i};function zl(e,t){for(var n=t instanceof Ss?t:new Ss(t),r=e,i=Ns(n);null!==i;){var o=qe(r.node.children,i)||{children:{},childCount:0};r=new Vl(i,r,o),i=Ns(n=Os(n))}return r}function Hl(e){return e.node.value}function Gl(e,t){e.node.value=t,Xl(e)}function Kl(e){return e.node.childCount>0}function Yl(e,t){Ja(e.node.children,(function(n,r){t(new Vl(n,e,r))}))}function Jl(e,t,n,r){n&&!r&&t(e),Yl(e,(function(e){Jl(e,t,!0,r)})),n&&r&&t(e)}function Ql(e){return new Ss(null===e.parent?e.name:Ql(e.parent)+"/"+e.name)}function Xl(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===Hl(e)&&!Kl(e)}(n),i=Be(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Xl(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Xl(e))}
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
 */(e.parent,e.name,e)}var $l=/[\[\].#$\/\u0000-\u001F\u007F]/,Zl=/[\[\].#$\u0000-\u001F\u007F]/,eh=10485760,th=function(e){return"string"==typeof e&&0!==e.length&&!$l.test(e)},nh=function(e){return"string"==typeof e&&0!==e.length&&!Zl.test(e)},rh=function(e,t,n,r){r&&void 0===t||ih($e(e,"value"),t,n)},ih=function(e,t,n){var r=n instanceof Ss?new qs(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Vs(r));if("function"==typeof t)throw new Error(e+"contains a function "+Vs(r)+" with contents = "+t.toString());if(qa(t))throw new Error(e+"contains "+t.toString()+" "+Vs(r));if("string"==typeof t&&t.length>3495253.3333333335&&et(t)>eh)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+Vs(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,o=!1;if(Ja(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(o=!0,!th(t)))throw new Error(e+" contains an invalid key ("+t+") "+Vs(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,s;s=t,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(s),a.byteLength_+=et(s),Ws(a),ih(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=et(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&o)throw new Error(e+' contains ".value" child '+Vs(r)+" in addition to actual children.")}},oh=function(e,t,n,r){if(!(r&&void 0===n||nh(n)))throw new Error($e(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ah=function(e,t){if(".info"===Ns(t))throw new Error(e+" failed = Can't modify data under /.info/")},sh=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!th(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),nh(e)}(n))throw new Error($e(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},uh=function t(){"use strict";e(Q)(this,t),this.eventLists_=[],this.recursionDepth_=0};function ch(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],o=i.getPath();null===n||js(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function lh(e,t,n){ch(e,n),fh(e,(function(e){return js(e,t)}))}function hh(e,t,n){ch(e,n),fh(e,(function(e){return Bs(e,t)||Bs(t,e)}))}function fh(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(dh(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function dh(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();Aa&&Ma("event: "+n.toString()),ts(r)}}}
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
 */var ph="repo_interrupt",vh=function(){"use strict";function t(n,r,i,o){e(Q)(this,t),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qu(),this.transactionQueueTree_=new Vl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e(X)(t,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),t}();function yh(e,t,n){if(e.stats_=vs(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new ju(e.repoInfo_,(function(t,n,r,i){_h(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return kh(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Gs(e.repoInfo_,t,(function(t,n,r,i){_h(e,t,n,r,i)}),(function(t){kh(e,t)}),(function(t){!function(e,t){Ja(t,(function(t,n){bh(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,o;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new Ku(e.stats_,e.server_)},o=r.toString(),ps[o]||(ps[o]=i()),ps[o]),e.infoData_=new Bu,e.infoSyncTree_=new dl({startListening:function(t,n,r,i){var o=[],a=e.infoData_.getNode(t._path);return a.isEmpty()||(o=yl(e.infoSyncTree_,t._path,a),setTimeout((function(){i("ok")}),0)),o},stopListening:function(){}}),bh(e,"connected",!1),e.serverSyncTree_=new dl({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var o=i(n,r);hh(e.eventQueue_,t._path,o)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function gh(e){var t=e.infoData_.getNode(new Ss(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function mh(e){return(t=(t={timestamp:gh(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function _h(e,t,n,r,i){e.dataUpdateCount++;var o=new Ss(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var a=[];if(i)if(r){var s=Ve(n,(function(e){return wu(e)}));a=function(e,t,n,r){var i=xl(e,r);if(i){var o=Sl(i),a=o.path,s=o.queryId,u=Fs(a,t),c=cc.fromObject(n);return Rl(e,a,new Zu(Yu(s),u,c))}return[]}(e.serverSyncTree_,o,s,i)}else{var u=wu(n);a=ml(e.serverSyncTree_,o,u,i)}else if(r){var c=Ve(n,(function(e){return wu(e)}));a=function(e,t,n){var r=cc.fromObject(n);return bl(e,new Zu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,c)}else{var l=wu(n);a=yl(e.serverSyncTree_,o,l)}var h=o;a.length>0&&(h=Ph(e,o)),hh(e.eventQueue_,h,a)}function kh(e,t){bh(e,"connected",t),!1===t&&function(e){Th(e,"onDisconnectEvents");var t=mh(e),n=qu();Vu(e.onDisconnect_,Rs(),(function(r,i){var o=Bl(r,i,e.serverSyncTree_,t);Wu(n,r,o)}));var r=[];Vu(n,Rs(),(function(t,n){r=r.concat(yl(e.serverSyncTree_,t,n));var i=Mh(e,t);Ph(e,i)})),e.onDisconnect_=qu(),hh(e.eventQueue_,Rs(),r)}(e)}function bh(e,t,n){var r=new Ss("/.info/"+t),i=wu(n);e.infoData_.updateSnapshot(r,i);var o=yl(e.infoSyncTree_,r,i);hh(e.eventQueue_,r,o)}function wh(e){return e.nextWriteId_++}function Ih(e,t,n,r,i){Th(e,"set",{path:t.toString(),value:n,priority:r});var o=mh(e),a=wu(n,r),s=kl(e.serverSyncTree_,t),u=ql(a,s,o),c=wh(e),l=pl(e.serverSyncTree_,t,u,c,!0);ch(e.eventQueue_,l),e.server_.put(t.toString(),a.val(!0),(function(n,r){var o="ok"===n;o||Ba("set at "+t+" failed: "+n);var a=vl(e.serverSyncTree_,c,!o);hh(e.eventQueue_,t,a),xh(e,i,n,r)}));var h=Mh(e,t);Ph(e,h),hh(e.eventQueue_,h,[])}function Ch(e,t,n){var r;r=".info"===Ns(t._path)?gl(e.infoSyncTree_,t,n):gl(e.serverSyncTree_,t,n),lh(e.eventQueue_,t._path,r)}function Eh(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ph)}function Th(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o="";t.persistentConnection_&&(o=t.persistentConnection_.id+":"),Ma.apply(void 0,[o].concat(e(p)(r)))}function xh(e,t,n,r){t&&ts((function(){if("ok"===n)t(null);else{var e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);var o=new Error(i);o.code=e,t(o)}}))}function Sh(e,t,n){return kl(e.serverSyncTree_,t,n)||ku.EMPTY_NODE}function Rh(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Lh(e,t),Hl(t)){var n=Ah(e,t);me(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&Nh(e,Ql(t),n)}else Kl(t)&&Yl(t,(function(t){Rh(e,t)}))}function Nh(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=Sh(e,t,r),o=i,a=i.hash(),s=0;s<n.length;s++){var u=n[s];me(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=Fs(t,u.path);o=o.updateChild(c,u.currentOutputSnapshotRaw)}var l=o.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){Th(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var o=function(t){n[t].status=2,i=i.concat(vl(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&a.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},a=[],s=0;s<n.length;s++)o(s);Lh(e,zl(e.transactionQueueTree_,t)),Rh(e,e.transactionQueueTree_),hh(e.eventQueue_,t,i);for(var u=0;u<a.length;u++)ts(a[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{Ba("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}Ph(e,t)}}),a)}function Ph(e,t){var n=Oh(e,t),r=Ql(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=Fs(n,u.path),l=!1,h=void 0;if(me(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,o=o.concat(vl(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",o=o.concat(vl(e.serverSyncTree_,u.currentWriteId,!0));else{var f=Sh(e,u.path,a);u.currentInputSnapshot=f;var d=t[r].update(f.val());if(void 0!==d){ih("transaction failed: Data returned ",d,u.path);var p=wu(d);"object"==typeof d&&null!=d&&Be(d,".priority")||(p=p.updatePriority(f.getPriority()));var v=u.currentWriteId,y=mh(e),g=ql(p,f,y);u.currentOutputSnapshotRaw=p,u.currentOutputSnapshotResolved=g,u.currentWriteId=wh(e),a.splice(a.indexOf(v),1),o=(o=o.concat(pl(e.serverSyncTree_,u.path,g,u.currentWriteId,u.applyLocally))).concat(vl(e.serverSyncTree_,v,!0))}else l=!0,h="nodata",o=o.concat(vl(e.serverSyncTree_,u.currentWriteId,!0))}hh(e.eventQueue_,n,o),o=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],o=[],a=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Lh(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)ts(i[u]);Rh(e,e.transactionQueueTree_)}(e,Ah(e,n),r),r}function Oh(e,t){var n,r=e.transactionQueueTree_;for(n=Ns(t);null!==n&&void 0===Hl(r);)r=zl(r,n),n=Ns(t=Os(t));return r}function Ah(e,t){var n=[];return Dh(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Dh(e,t,n){var r=Hl(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Yl(t,(function(t){Dh(e,t,n)}))}function Lh(e,t){var n=Hl(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,Gl(t,n.length>0?n:void 0)}Yl(t,(function(t){Lh(e,t)}))}function Mh(e,t){var n=Ql(Oh(e,t)),r=zl(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){Uh(e,t)})),Uh(e,r),Jl(r,(function(t){Uh(e,t)})),n}function Uh(e,t){var n=Hl(t);if(n){for(var r=[],i=[],o=-1,a=0;a<n.length;a++)3===n[a].status||(1===n[a].status?(me(o===a-1,"All SENT items should be at beginning of queue."),o=a,n[a].status=3,n[a].abortReason="set"):(me(0===n[a].status,"Unexpected transaction status in abort"),n[a].unwatcher(),i=i.concat(vl(e.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Gl(t,void 0):n.length=o+1,hh(e.eventQueue_,Ql(t),i);for(var s=0;s<r.length;s++)ts(r[s])}}
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
 */var Fh=function(e,t){var n=jh(e),r=n.namespace;"firebase.com"===n.domain&&ja(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||ja("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ba("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ls(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Ss(n.pathString)}},jh=function(e){var t="",n="",r="",i="",o="",a=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var f=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var o,a=e.split("&")[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):Ba("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(a="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var d=t.slice(0,c);if("localhost"===d.toLowerCase())n="localhost";else if(d.split(".").length<=2)n=d;else{var p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),o=r}"ns"in f&&(o=f.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:a,scheme:s,pathString:i,namespace:o}},Bh=function(){"use strict";function t(n,r,i,o){e(Q)(this,t),this.eventType=n,this.eventRegistration=r,this.snapshot=i,this.prevName=o}return e(X)(t,[{key:"getPath",value:function(){var e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}},{key:"getEventType",value:function(){return this.eventType}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.getPath().toString()+":"+this.eventType+":"+Ue(this.snapshot.exportVal())}}]),t}(),qh=function(){"use strict";function t(n,r,i){e(Q)(this,t),this.eventRegistration=n,this.error=r,this.path=i}return e(X)(t,[{key:"getPath",value:function(){return this.path}},{key:"getEventType",value:function(){return"cancel"}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.path.toString()+":cancel"}}]),t}(),Wh=function(){"use strict";function t(n,r){e(Q)(this,t),this.snapshotCallback=n,this.cancelCallback=r}return e(X)(t,[{key:"onValue",value:function(e,t){this.snapshotCallback.call(null,e,t)}},{key:"onCancel",value:function(e){return me(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}},{key:"hasCancelCallback",get:function(){return!!this.cancelCallback}},{key:"matches",value:function(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}]),t}(),Vh=function(){"use strict";function t(n,r,i,o){e(Q)(this,t),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=o}return e(X)(t,[{key:"key",get:function(){return Us(this._path)?null:As(this._path)}},{key:"ref",get:function(){return new zh(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=Fu(this._queryParams),t=Ka(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return Fu(this._queryParams)}},{key:"isEqual",value:function(e){if(!((e=tt(e))instanceof t))return!1;var n=this._repo===e._repo,r=js(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),t}();var zh=function(t){"use strict";e(ae)(r,t);var n=e(pe)(r);function r(t,i){return e(Q)(this,r),n.call(this,t,i,new Mu,!1)}return e(X)(r,[{key:"parent",get:function(){var e=Ls(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(Vh),Hh=function(){"use strict";function t(n,r,i){e(Q)(this,t),this._node=n,this.ref=r,this._index=i}return e(X)(t,[{key:"priority",get:function(){return this._node.getPriority().val()}},{key:"key",get:function(){return this.ref.key}},{key:"size",get:function(){return this._node.numChildren()}},{key:"child",value:function(e){var n=new Ss(e),r=Kh(this.ref,e);return new t(this._node.getChild(n),r,pu)}},{key:"exists",value:function(){return!this._node.isEmpty()}},{key:"exportVal",value:function(){return this._node.val(!0)}},{key:"forEach",value:function(e){var n=this;return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(function(r,i){return e(new t(i,Kh(n.ref,r),pu))}))}},{key:"hasChild",value:function(e){var t=new Ss(e);return!this._node.getChild(t).isEmpty()}},{key:"hasChildren",value:function(){return!this._node.isLeafNode()&&!this._node.isEmpty()}},{key:"toJSON",value:function(){return this.exportVal()}},{key:"val",value:function(){return this._node.val()}}]),t}();function Gh(e,t){return(e=tt(e))._checkNotDeleted("ref"),void 0!==t?Kh(e._root,t):e._root}function Kh(e,t){var n,r,i,o;return null===Ns((e=tt(e))._path)?(n="child",r="path",o=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),oh(n,r,i,o)):oh("child","path",t,!1),new zh(e._repo,Ms(e._path,t))}function Yh(e,t){e=tt(e),ah("set",e._path),rh("set",t,e._path,!1);var n=new xe;return Ih(e._repo,e._path,t,null,n.wrapCallback((function(){}))),n.promise}var Jh=function(){"use strict";function t(n){e(Q)(this,t),this.callbackContext=n}return e(X)(t,[{key:"respondsTo",value:function(e){return"value"===e}},{key:"createEvent",value:function(e,t){var n=t._queryParams.getIndex();return new Bh("value",this,new Hh(e.snapshotNode,new zh(t._repo,t._path),n))}},{key:"getEventRunner",value:function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,null)}}},{key:"createCancelEvent",value:function(e,t){return this.callbackContext.hasCancelCallback?new qh(this,e,t):null}},{key:"matches",value:function(e){return e instanceof t&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}},{key:"hasAnyCallback",value:function(){return null!==this.callbackContext}}]),t}(),Qh=function(){"use strict";function t(n,r){e(Q)(this,t),this.eventType=n,this.callbackContext=r}return e(X)(t,[{key:"respondsTo",value:function(e){var t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}},{key:"createCancelEvent",value:function(e,t){return this.callbackContext.hasCancelCallback?new qh(this,e,t):null}},{key:"createEvent",value:function(e,t){me(null!=e.childName,"Child events should have a childName.");var n=Kh(new zh(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Bh(e.type,this,new Hh(e.snapshotNode,n,r),e.prevName)}},{key:"getEventRunner",value:function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,e.prevName)}}},{key:"matches",value:function(e){return e instanceof t&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}},{key:"hasAnyCallback",value:function(){return!!this.callbackContext}}]),t}();function Xh(e,t,n,r,i){var o;if("object"==typeof r&&(o=void 0,i=r),"function"==typeof r&&(o=r),i&&i.onlyOnce){var a=n,s=function(t,n){Ch(e._repo,e,d),a(t,n)};s.userCallback=n.userCallback,s.context=n.context,n=s}var u,c,l,h,f=new Wh(n,o||void 0),d="value"===t?new Jh(f):new Qh(t,f);return u=e._repo,l=d,h=".info"===Ns((c=e)._path)?_l(u.infoSyncTree_,c,l):_l(u.serverSyncTree_,c,l),lh(u.eventQueue_,c._path,h),function(){return Ch(e._repo,e,d)}}function $h(e,t,n,r){return Xh(e,"value",t,n,r)}!function(e){me(!Gc,"__referenceConstructor has already been defined"),Gc=e}(zh),function(e){me(!Zc,"__referenceConstructor has already been defined"),Zc=e}(zh);
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
var Zh={},ef=!1;function tf(e,t,n,r,i){var o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||ja("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ma("Using default host for project ",e.options.projectId),o="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var a,s=Fh(o,i),u=s.repoInfo,c=void 0;void 0!==_a&&_a.env&&(c=_a.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(a=!0,o="http://".concat(c,"?ns=").concat(u.namespace),u=(s=Fh(o,i)).repoInfo):a=!s.repoInfo.secure;var l=i&&a?new os(os.OWNER):new is(e.name,e.options,t);sh("Invalid Firebase Database URL",s),Us(s.path)||ja("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=Zh[t.name];i||(i={},Zh[t.name]=i);var o=i[e.toURLString()];o&&ja("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new vh(e,ef,n,r),i[e.toURLString()]=o,o}(u,e,l,new rs(e.name,n));return new nf(h,e)}var nf=function(){"use strict";function t(n,r){e(Q)(this,t),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return e(X)(t,[{key:"_repo",get:function(){return this._instanceStarted||(yh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new zh(this._repo,Rs())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=Zh[t])&&n[e.key]===e||ja("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),Eh(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&ja("Cannot call "+e+" on a deleted database.")}}]),t}();function rf(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t(),t=arguments.length>1?arguments[1]:void 0;return Kt(e,"database").getImmediate({identifier:t})}Gs.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Gs.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){wa=Xt,Gt(new nt("database",(function(e,t){var n=t.instanceIdentifier;return tf(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),Zt(ka,ba,e),Zt(ka,ba,"esm2017")}
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
 */();var of=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var n=t;t={name:n}}var r=Object.assign({name:qt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Jt.create("bad-app-name",{appName:String(i)});var o=Vt.get(i);if(o){if(ze(e,o.options)&&ze(r,o.config))return o;throw Jt.create("duplicate-app",{appName:i})}var a=new st(i),s=!0,u=!1,c=void 0;try{for(var l,h=zt.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;a.addComponent(f)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var d=new Qt(e,r,a);return Vt.set(i,d),d}({apiKey:"AIzaSyAXpyPv9Yp_mmKUPpMWQb_Lv-IgFrfPCj0",authDomain:"myproject-7e992.firebaseapp.com",projectId:"myproject-7e992",storageBucket:"myproject-7e992.appspot.com",messagingSenderId:"221233745157",appId:"1:221233745157:web:9d09e7079c1e141383fb6c",databaseURL:"https://myproject-7e992-default-rtdb.firebaseio.com/"}),af=
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
function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t(),t=Kt(e,"auth");return t.isInitialized()?t.getImmediate():Dn(e,{popupRedirectResolver:fa,persistence:[co,ji,qi]})}(),sf=rf(of),uf=document.querySelector(".reg-form"),cf=document.querySelector(".login-form");uf.addEventListener("submit",(function(e){e.preventDefault();var t={email:e.currentTarget.elements.email.value,password:e.currentTarget.elements.password.value,username:e.currentTarget.elements.username.value};Ai(af,t.email,t.password,t.username).then((function(e){var n=e.user;return alert("User ".concat(t.username," created")),n})).then((function(e){Yh(Gh(sf,"users/"+e.uid),{username:t.username,email:t.email,uid:e.uid})})).catch((function(e){e.code;var t=e.message;alert(t)})),e.currentTarget.reset()})),cf.addEventListener("submit",(function(e){e.preventDefault();var t={email:e.currentTarget.elements.email.value,password:e.currentTarget.elements.password.value};(n=af,r=t.email,i=t.password,Pi(tt(n),fi.credential(r,i))).then((function(e){var t=e.user;af.currentUser.uid;$h(Gh(rf(),"users/"+t.uid+"/username"),(function(e){var t=e.val();alert("Welcome back, ".concat(t))}))})).catch((function(e){e.code;var t=e.message;alert(t)}));var n,r,i})),function(){var e=document.querySelector(".footer-btn"),t=document.querySelector(".team-modal__btn--close"),n=document.querySelector("[data-modal-teem]"),r=document.querySelector(".teem-modal");function i(){n.classList.toggle("visually-hidden"),r.classList.toggle("visually-hidden")}e.addEventListener("click",i),t.addEventListener("click",i),n.addEventListener("keydown",(function(e){"Escape"===e.code&&window.close()}))}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("visually-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}()}();
//# sourceMappingURL=index.4f8ee041.js.map

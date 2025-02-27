(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function v(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var ia=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if(typeof Object.setPrototypeOf=="function")ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function w(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ra(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function sa(a){return ta(a,a)}
function ta(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ua(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var va=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ua(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||va});
function wa(){this.D=!1;this.u=null;this.i=void 0;this.h=1;this.o=this.M=0;this.P=this.j=null}
function xa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
wa.prototype.G=function(a){this.i=a};
function ya(a,b){a.j={exception:b,yd:!0};a.h=a.M||a.o}
wa.prototype.return=function(a){this.j={return:a};this.h=this.o};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.A=function(a){this.h=a};
function za(a,b,c){a.M=b;c!=void 0&&(a.o=c)}
function Aa(a,b){a.h=b;a.M=0}
function Ba(a){a.M=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.yd?a.h=a.M||a.o:b.A!=void 0&&a.o<b.A?(a.h=b.A,a.j=null):a.h=a.o:a.h=0}
function Da(a){this.h=new wa;this.i=a}
function Ea(a,b){xa(a.h);var c=a.h.u;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.u=null,ya(a.h,g),Ga(a)}a.h.u=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.yd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){xa(a.h);a.h.u?b=Fa(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Ga(a));return b};
this.throw=function(b){xa(a.h);a.h.u?b=Fa(a,a.h.u["throw"],b,a.h.G):(ya(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("globalThis",function(a){return a||fa});
v("Reflect",function(a){return a?a:{}});
v("Reflect.construct",function(){return la});
v("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.X=0;this.ab=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.j)}};
b.prototype.U=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.P(g):this.o(g)}};
b.prototype.P=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(this.X!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.X);this.X=g;this.ab=h;this.X===2&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.G()){var h=fa.console;typeof h!=="undefined"&&h.error(g.ab)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.ab;return k(g)};
b.prototype.D=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.Z=function(g){var h=this.i();g.fc(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(u){try{l(p(u))}catch(x){m(x)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.fc(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.fc=function(g,h){function k(){switch(l.X){case 1:g(l.ab);break;case 2:h(l.ab);break;default:throw Error("Unexpected state: "+l.X);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).fc(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(u){return function(x){p[u]=x;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).fc(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||qa});
v("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
v("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ua(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ua(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ua(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)?delete k[g][this.h]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ua(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
v("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ja(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ja(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ja(this,function(b){return b})}});
function Ka(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
v("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return Ka(this,b,"includes").indexOf(b,c||0)!==-1}});
v("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push([d,b[d]]);return c}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
v("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
v("Array.prototype.values",function(a){return a?a:function(){return Ja(this,function(b,c){return c})}});
v("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
v("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ma(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Sa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ta(a){return Object.prototype.hasOwnProperty.call(a,Ua)&&a[Ua]||(a[Ua]=++Va)}
var Ua="closure_uid_"+(Math.random()*1E9>>>0),Va=0;function Wa(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Za(a,b,c){Za=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Wa:Xa;return Za.apply(null,arguments)}
function $a(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function ab(){return Date.now()}
function bb(a){return a}
function cb(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function db(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,db);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
cb(db,Error);db.prototype.name="CustomError";var eb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var fb=globalThis.trustedTypes,gb;function hb(){var a=null;if(!fb)return a;try{var b=function(c){return c};
a=fb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function ib(){gb===void 0&&(gb=hb());return gb}
;function jb(a){this.h=a}
jb.prototype.toString=function(){return this.h+""};
function kb(a){var b=ib();return new jb(b?b.createScriptURL(a):a)}
function lb(a){if(a instanceof jb)return a.h;throw Error("");}
;var mb=sa([""]),nb=ta(["\x00"],["\\0"]),ob=ta(["\n"],["\\n"]),pb=ta(["\x00"],["\\u0000"]);function qb(a){return a.toString().indexOf("`")===-1}
qb(function(a){return a(mb)})||qb(function(a){return a(nb)})||qb(function(a){return a(ob)})||qb(function(a){return a(pb)});function rb(a){this.h=a}
rb.prototype.toString=function(){return this.h};
var sb=new rb("about:invalid#zClosurez");function tb(a){this.He=a}
function ub(a){return new tb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var vb=[ub("data"),ub("http"),ub("https"),ub("mailto"),ub("ftp"),new tb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],wb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function xb(a){if(a instanceof rb)if(a instanceof rb)a=a.h;else throw Error("");else a=wb.test(a)?a:void 0;return a}
;function yb(a,b){b=xb(b);b!==void 0&&(a.href=b)}
;function zb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function Ab(a){this.h=a}
Ab.prototype.toString=function(){return this.h+""};function Bb(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h+""};
function Db(a){var b=ib();return new Cb(b?b.createScript(a):a)}
function Eb(a){if(a instanceof Cb)return a.h;throw Error("");}
;function Fb(a){var b=Bb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Gb(a,b){a.src=lb(b);Fb(a)}
;function Hb(){this.h=Ib[0].toLowerCase()}
Hb.prototype.toString=function(){return this.h};function Jb(a){var b="true".toString(),c=[new Hb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Hb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Kb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Lb(a,b){if(b instanceof jb)a.href=lb(b).toString(),a.rel="stylesheet";else{if(Kb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=xb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Mb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Nb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Pb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Qb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Rb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Nb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Sb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Tb(a,b){b=Mb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Ub(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Vb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Wb(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Xb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Yb[c])c=Yb[c];else{c=String(c);if(!Yb[c]){var f=/function\s+([^\(]+)/m.exec(c);Yb[c]=f?f[1]:"[Anonymous]"}c=Yb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Xb(a,b){b||(b={});b[Zb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Zb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Xb(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[Zb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Xb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Zb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Yb={};function $b(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(a){return a?decodeURI(a):a}
function cc(a,b){return b.match(ac)[a]||null}
function dc(a){return bc(cc(3,a))}
function ec(a){var b=a.match(ac);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function fc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function hc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)hc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function ic(a){var b=[],c;for(c in a)hc(c,a[c],b);return b.join("&")}
function jc(a,b){b=ic(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function kc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var lc=/#|$/,mc=/[?&]($|#)/;function nc(a,b){for(var c=a.search(lc),d=0,e,f=[];(e=kc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(mc,"$1")}
;var oc=(new Date("2024-01-01T00:00:00Z")).getTime();function pc(a){var b=B.apply(1,arguments).filter(function(d){return d}).join("&");
if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")===-1?"?":"&")+b}
function qc(a){var b=a.url;a=a.Xh;this.j=b;this.D=a;a=/[?&]dsh=1(&|$)/.test(b);this.u=!a&&/[?&]ae=1(&|$)/.test(b);this.M=!a&&/[?&]ae=2(&|$)/.test(b);if((this.h=/[?&]adurl=([^&]*)/.exec(b))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}this.o=(new Date).getTime()-oc}
function rc(a){a=a.D;if(!a)return"";var b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)}).join("|")));
typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b.substring(1)}
;function sc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function tc(a){var b=b===void 0?44:b;var c=[];uc(a,vc,6).forEach(function(d){wc(d,2)<=b&&c.push(wc(d,1))});
return c}
function xc(a){var b=b===void 0?44:b;var c=[];uc(a,vc,6).forEach(function(d){wc(d,2)>b&&c.push(wc(d,1))});
return c}
;function yc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function zc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?zc.apply(null,d):yc(d)}}
;function F(){this.ea=this.ea;this.M=this.M}
F.prototype.ea=!1;F.prototype.dispose=function(){this.ea||(this.ea=!0,this.ba())};
F.prototype[Symbol.dispose]=function(){this.dispose()};
function Ac(a,b){a.addOnDisposeCallback($a(yc,b))}
F.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.M||(this.M=[]),b&&(a=a.bind(b)),this.M.push(a))};
F.prototype.ba=function(){if(this.M)for(;this.M.length;)this.M.shift()()};var Bc;function Cc(){F.apply(this,arguments);this.j=1;this[Bc]=this.dispose}
w(Cc,F);Cc.prototype.share=function(){if(this.ea)throw Error("E:AD");this.j++;return this};
Cc.prototype.dispose=function(){--this.j||F.prototype.dispose.call(this)};
Bc=Symbol.dispose;function Dc(a){return{fieldType:2,fieldName:a}}
function Ec(a){return{fieldType:3,fieldName:a}}
;function Fc(a){this.h=a;a.Gc("/client_streamz/bg/frs",Ec("ke"))}
Fc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Gc(a){this.h=a;a.Gc("/client_streamz/bg/wrl",Ec("mn"),Dc("ac"),Dc("sc"),Ec("rk"),Ec("mk"))}
Gc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Hc(a){this.i=a;a.Kb("/client_streamz/bg/ec",Ec("en"),Ec("mk"))}
Hc.prototype.h=function(a,b){this.i.Ib("/client_streamz/bg/ec",a,b)};
function Ic(a){this.h=a;a.Gc("/client_streamz/bg/el",Ec("en"),Ec("rk"),Ec("mk"))}
Ic.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Jc(a){this.i=a;a.Kb("/client_streamz/bg/cec",Dc("ec"),Ec("rk"),Ec("mk"))}
Jc.prototype.h=function(a,b,c){this.i.Ib("/client_streamz/bg/cec",a,b,c)};
function Kc(a){this.i=a;a.Kb("/client_streamz/bg/po/csc",Dc("cs"),Ec("rk"),Ec("mk"))}
Kc.prototype.h=function(a,b,c){this.i.Ib("/client_streamz/bg/po/csc",a,b,c)};
function Lc(a){this.i=a;a.Kb("/client_streamz/bg/po/ctav",Ec("av"),Ec("rk"),Ec("mk"))}
Lc.prototype.h=function(a,b,c){this.i.Ib("/client_streamz/bg/po/ctav",a,b,c)};
function Mc(a){this.i=a;a.Kb("/client_streamz/bg/po/cwsc",Ec("su"),Ec("rk"),Ec("mk"))}
Mc.prototype.h=function(a,b,c){this.i.Ib("/client_streamz/bg/po/cwsc",a,b,c)};function Nc(a){C.setTimeout(function(){throw a;},0)}
;var Oc,Pc=E("CLOSURE_FLAGS"),Qc=Pc&&Pc[610401301];Oc=Qc!=null?Qc:!1;function Rc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Sc,Tc=C.navigator;Sc=Tc?Tc.userAgentData||null:null;function Uc(a){return Oc?Sc?Sc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function G(a){return Rc().indexOf(a)!=-1}
;function Vc(){return Oc?!!Sc&&Sc.brands.length>0:!1}
function Wc(){return Vc()?!1:G("Opera")}
function Xc(){return G("Firefox")||G("FxiOS")}
function Yc(){return Vc()?Uc("Chromium"):(G("Chrome")||G("CriOS"))&&!(Vc()?0:G("Edge"))||G("Silk")}
;function Zc(){return Oc?!!Sc&&!!Sc.platform:!1}
function $c(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;var ad=Wc(),bd=Vc()?!1:G("Trident")||G("MSIE"),cd=G("Edge"),dd=G("Gecko")&&!(Rc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),ed=Rc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge");ed&&G("Mobile");Zc()||G("Macintosh");Zc()||G("Windows");(Zc()?Sc.platform==="Linux":G("Linux"))||Zc()||G("CrOS");var fd=Zc()?Sc.platform==="Android":G("Android");$c();G("iPad");G("iPod");$c()||G("iPad")||G("iPod");Rc().toLowerCase().indexOf("kaios");Xc();var gd=$c()||G("iPod"),hd=G("iPad");!G("Android")||Yc()||Xc()||Wc()||G("Silk");Yc();var id=G("Safari")&&!(Yc()||(Vc()?0:G("Coast"))||Wc()||(Vc()?0:G("Edge"))||(Vc()?Uc("Microsoft Edge"):G("Edg/"))||(Vc()?Uc("Opera"):G("OPR"))||Xc()||G("Silk")||G("Android"))&&!($c()||G("iPad")||G("iPod"));var jd={},kd=null;function ld(a,b){Na(a);b===void 0&&(b=0);md();b=jd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function nd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;od(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function od(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=kd[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
md();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function md(){if(!kd){kd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));jd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];kd[f]===void 0&&(kd[f]=e)}}}}
;var pd=typeof Uint8Array!=="undefined",qd=!bd&&typeof btoa==="function";function rd(a){if(!qd)return ld(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var sd=/[-_.]/g,td={"-":"+",_:"/",".":"="};function ud(a){return td[a]||""}
function vd(a){return pd&&a!=null&&a instanceof Uint8Array}
var wd={};function xd(a,b){yd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
xd.prototype.sizeBytes=function(){yd(wd);var a=this.h;if(a!=null&&!vd(a))if(typeof a==="string")if(qd){sd.test(a)&&(a=a.replace(sd,ud));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=nd(a);else Ma(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var zd;function yd(a){if(a!==wd)throw Error("illegal external caller");}
;var Ad=void 0;function Bd(a){a=Error(a);Vb(a,"warning");return a}
;var Cd=typeof Symbol==="function"&&typeof Symbol()==="symbol",Dd=new Set;function Ed(a,b,c,d){c=c===void 0?!1:c;a=typeof Symbol==="function"&&typeof Symbol()==="symbol"?(d===void 0?0:d)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b;c&&Dd.add(a);return a}
var Fd=Ed("jas",void 0,!0,!0),Gd=Ed(void 0,"2ex"),Hd=Ed(void 0,"1oa",!0),Id=Ed(void 0,Symbol(),!0);Math.max.apply(Math,ra(Object.values({mh:1,kh:2,jh:4,ph:8,oh:16,nh:32,Of:64,rh:128,ih:256,hh:512,lh:1024,Uf:2048,qh:4096,Vf:8192,Pf:16384})));var I=Cd?Fd:"Ge",Jd={Ge:{value:0,configurable:!0,writable:!0,enumerable:!1}},Kd=Object.defineProperties;function Ld(a,b){Cd||I in a||Kd(a,Jd);a[I]|=b}
function Md(a,b){Cd||I in a||Kd(a,Jd);a[I]=b}
function Nd(a,b){Md(b,(a|0)&-30975)}
function Od(a,b){Md(b,(a|34)&-30941)}
;function Pd(){return typeof BigInt==="function"}
;function Qd(a){return Array.prototype.slice.call(a)}
;var Rd={},Sd={};function Td(a){return!(!a||typeof a!=="object"||a.h!==Sd)}
function Ud(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Vd(a){return!Array.isArray(a)||a.length?!1:(a[I]|0)&1?!0:!1}
var Wd,Xd=[];Md(Xd,55);Wd=Object.freeze(Xd);function Yd(a){if(a&2)throw Error();}
function Zd(a,b){var c=bb(Id);(b=c?b[c]:void 0)&&(a[Id]=Qd(b))}
var $d=Object.freeze({});function ae(a){a.Fh=!0;return a}
;var be=ae(function(a){return typeof a==="number"}),ce=ae(function(a){return typeof a==="string"}),de=ae(function(a){return typeof a==="boolean"});
function ee(){var a=fe;return ae(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var ge=ae(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var he=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function ie(a){var b=a;if(ce(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(be(b)&&!Number.isSafeInteger(b))throw Error(String(b));return he?BigInt(a):a=de(a)?a?"1":"0":ce(a)?a.trim()||"0":String(a)}
var oe=ae(function(a){return he?a>=je&&a<=ke:a[0]==="-"?le(a,me):le(a,ne)}),me=Number.MIN_SAFE_INTEGER.toString(),je=he?BigInt(Number.MIN_SAFE_INTEGER):void 0,ne=Number.MAX_SAFE_INTEGER.toString(),ke=he?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function le(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var pe=0,qe=0;function re(a){var b=a>>>0;pe=b;qe=(a-b)/4294967296>>>0}
function se(a){if(a<0){re(0-a);var b=y(te(pe,qe));a=b.next().value;b=b.next().value;pe=a>>>0;qe=b>>>0}else re(a)}
function ue(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Pd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+ve(c)+ve(a));return c}
function ve(a){a=String(a);return"0000000".slice(a.length)+a}
function we(){var a=pe,b=qe;b&2147483648?Pd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(te(a,b)),a=b.next().value,b=b.next().value,a="-"+ue(a,b)):a=ue(a,b);return a}
function te(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;var xe=typeof BigInt==="function"?BigInt.asIntN:void 0,ye=Number.isSafeInteger,ze=Number.isFinite,Ae=Math.trunc;function Be(a){return a.displayName||a.name||"unknown type name"}
function Ce(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Ma(a)+": "+a);return a}
var De=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ee(a){switch(typeof a){case "bigint":return!0;case "number":return ze(a);case "string":return De.test(a);default:return!1}}
function Fe(a){if(typeof a!=="number")throw Bd("int32");if(!ze(a))throw Bd("int32");return a|0}
function Ge(a){return a==null?a:Fe(a)}
function He(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return ze(a)?a|0:void 0}
function Ie(a){var b=0;b=b===void 0?0:b;if(!Ee(a))throw Bd("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return Je(a);case "bigint":return String(xe(64,a));default:return Ke(a)}case 8192:switch(c){case "string":return b=Ae(Number(a)),ye(b)?a=ie(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=Pd()?ie(xe(64,BigInt(a))):ie(Le(a))),a;case "bigint":return ie(xe(64,a));default:return ye(a)?ie(Me(a)):ie(Ke(a))}case 0:switch(c){case "string":return Je(a);case "bigint":return ie(xe(64,
a));default:return Me(a)}default:return zb(b,"Unknown format requested type for int64")}}
function Ne(a){return a==null?a:Ie(a)}
function Oe(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function Le(a){a.indexOf(".");if(Oe(a))return a;if(a.length<16)se(Number(a));else if(Pd())a=BigInt(a),pe=Number(a&BigInt(4294967295))>>>0,qe=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");qe=pe=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),qe*=1E6,pe=pe*1E6+d,pe>=4294967296&&(qe+=Math.trunc(pe/4294967296),qe>>>=0,pe>>>=0);b&&(b=y(te(pe,qe)),a=b.next().value,b=b.next().value,pe=a,qe=b)}return we()}
function Me(a){Ee(a);a=Ae(a);if(!ye(a)){se(a);var b=pe,c=qe;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:ue(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function Ke(a){Ee(a);a=Ae(a);if(ye(a))a=String(a);else{var b=String(a);Oe(b)?a=b:(se(a),a=we())}return a}
function Je(a){Ee(a);var b=Ae(Number(a));if(ye(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Le(a)}
function Pe(a){if(a==null)return a;if(typeof a==="bigint")return oe(a)?a=Number(a):(a=xe(64,a),a=oe(a)?Number(a):String(a)),a;if(Ee(a))return typeof a==="number"?Me(a):Je(a)}
function Qe(a){if(typeof a!=="string")throw Error();return a}
function Re(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Se(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Be(b)+" but got "+(a&&Be(a.constructor)));}
function Te(a,b,c){if(a!=null&&typeof a==="object"&&a.Sc===Rd)return a;if(Array.isArray(a)){var d=a[I]|0,e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Md(a,e);return new b(a)}}
;function Ue(a,b){return Ve(b)}
function Ve(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return oe(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Vd(a))return}else{if(vd(a))return rd(a);if(a instanceof xd){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=rd(b)}}}return a}
;function We(a,b,c){var d=Qd(a),e=d.length,f=b&256?d[e-1]:void 0;e+=f?-1:0;for(b=b&512?1:0;b<e;b++)d[b]=c(d[b]);if(f){b=d[b]={};for(var g in f)b[g]=c(f[g])}Zd(d,a);return d}
function Xe(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Vd(a)?void 0:e&&(a[I]|0)&2?a:Ye(a,b,c,d!==void 0,e);else if(Ud(a)){var f={},g;for(g in a)f[g]=Xe(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Ye(a,b,c,d,e){var f=d||c?a[I]|0:0;d=d?!!(f&32):void 0;for(var g=Qd(a),h=0;h<g.length;h++)g[h]=Xe(g[h],b,c,d,e);c&&(Zd(g,a),c(f,g));return g}
function Ze(a){return a.Sc===Rd?a.toJSON():Ve(a)}
function $e(a){return Ye(a,Ze,void 0,void 0,!1)}
;function J(a,b,c){if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");d=a[I]|0;if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(Ud(c[f])){d|=256;b=f-(d&512?0:-1);if(b>=1024)throw Error("pvtlmt");d=d&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,e-(d&512?0:-1));if(b>1024)throw Error("spvt");d=d&-33521665|(b&1023)<<15}}}Md(a,d);return a}
;function af(a,b,c){c=c===void 0?Od:c;if(a!=null){if(pd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=a[I]|0;if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Md(a,(d|34)&-12293),a):Ye(a,af,d&4?Od:c,!0,!0)}a.Sc===Rd&&(c=a.F,d=c[I]|0,a=d&2?a:new a.constructor(bf(c,d,!0)));return a}}
function bf(a,b,c){var d=c||b&2?Od:Nd,e=!!(b&32);a=We(a,b,function(f){return af(f,e,d)});
Ld(a,32|(c?2:0));return a}
function cf(a){var b=a.F,c=b[I]|0;return c&2?new a.constructor(bf(b,c,!1)):a}
;function df(a,b){a=a.F;return ef(a,a[I]|0,b)}
function ef(a,b,c,d){if(c===-1)return null;var e=c+(b&512?0:-1),f=a.length-1;if(e>=f&&b&256)return a[f][c];if(d&&b&256&&(b=a[f][c],b!=null)){if(a[e]!=null&&Gd!=null){var g;a=(g=Ad)!=null?g:Ad={};g=a[Gd]||0;g>=4||(a[Gd]=g+1,g=Error(),Vb(g,"incident"),Nc(g))}return b}if(e<=f)return a[e]}
function ff(a,b,c){var d=a.F,e=d[I]|0;Yd(e);gf(d,e,b,c);return a}
function gf(a,b,c,d){var e=b&512?0:-1,f=c+e,g=a.length-1;if(f>=g&&b&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b&256&&(a=a[g],c in a&&delete a[c]),b;d!==void 0&&(g=b>>15&1023||536870912,c>=g?d!=null&&(f={},a[g+e]=(f[c]=d,f),b|=256,Md(a,b)):a[f]=d);return b}
function hf(a){return jf(a,kf,11,!1)!==void 0}
function lf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function mf(a,b,c){var d=a.F,e=d[I]|0;Yd(e);if(b==null)return gf(d,e,3),a;if(!Array.isArray(b))throw Bd();var f=b[I]|0,g=f,h=lf(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Qd(b),g=0,f=nf(f,e),f=of(f,e,!0),k=!1);f|=21;h=4&f?4096&f?4096:8192&f?8192:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=Qd(b),g=0,f=nf(f,e),f=of(f,e,!0),k=!1),b[l]=n)}f!==g&&(k&&(b=Qd(b),f=nf(f,e),f=of(f,e,!0)),Md(b,f));gf(d,e,3,b);return a}
function pf(a,b,c,d){a=a.F;var e=a[I]|0;Yd(e);if(d==null){var f=qf(a);if(rf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=qf(a);var g=rf(f,a,e,c);g!==b&&(g&&(e=gf(a,e,g)),f.set(c,b))}gf(a,e,b,d)}
function qf(a){if(Cd){var b;return(b=a[Hd])!=null?b:a[Hd]=new Map}if(Hd in a)return a[Hd];b=new Map;Object.defineProperty(a,Hd,{value:b});return b}
function rf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];ef(b,c,g)!=null&&(e!==0&&(c=gf(b,c,e)),e=g)}a.set(d,e);return e}
function jf(a,b,c,d){a=a.F;var e=a[I]|0;d=ef(a,e,c,d);b=Te(d,b,e);b!==d&&b!=null&&gf(a,e,c,b);return b}
function sf(a,b,c,d){b=jf(a,b,c,d===void 0?!1:d);if(b==null)return b;a=a.F;d=a[I]|0;if(!(d&2)){var e=cf(b);e!==b&&(b=e,gf(a,d,c,b))}return b}
function uc(a,b,c){var d=void 0===$d?2:4;var e=a.F[I]|0,f=e,g=!(2&e);a=a.F;var h=!!(2&f);e=h?1:d;g&&(g=!h);d=ef(a,f,c);d=Array.isArray(d)?d:Wd;var k=d[I]|0;h=!!(4&k);if(!h){var l=k;l===0&&(l=nf(l,f));k=d;l|=1;var m=f,n=!!(2&l);n&&(m|=2);for(var p=!n,t=!0,u=0,x=0;u<k.length;u++){var z=Te(k[u],b,m);if(z instanceof b){if(!n){var H=!!((z.F[I]|0)&2);p&&(p=!H);t&&(t=H)}k[x++]=z}}x<u&&(k.length=x);l|=4;l=t?l|16:l&-17;l=p?l|8:l&-9;Md(k,l);n&&Object.freeze(k);k=l}if(g&&!(8&k||!d.length&&(e===1||e===4&&32&
k))){lf(k)&&(d=Qd(d),k=nf(k,f),f=gf(a,f,c,d));b=d;g=k;for(k=0;k<b.length;k++)l=b[k],m=cf(l),l!==m&&(b[k]=m);g|=8;g=b.length?g&-17:g|16;Md(b,g);k=g}e===1||e===4&&32&k?lf(k)||(f=k,c=!!(32&k),k|=!d.length||16&k&&(!h||c)?2:2048,k!==f&&Md(d,k),Object.freeze(d)):(e===2&&lf(k)&&(d=Qd(d),k=nf(k,f),k=of(k,f,!1),Md(d,k),f=gf(a,f,c,d)),lf(k)||(c=k,k=of(k,f,!1),k!==c&&Md(d,k)));return d}
function tf(a,b,c,d){d!=null?Se(d,b):d=void 0;return ff(a,c,d)}
function uf(a,b,c,d){var e=a.F,f=e[I]|0;Yd(f);if(d==null)return gf(e,f,c),a;if(!Array.isArray(d))throw Bd();for(var g=d[I]|0,h=g,k=lf(g),l=k||Object.isFrozen(d),m=!0,n=!0,p=0;p<d.length;p++){var t=d[p];Se(t,b);k||(t=!!((t.F[I]|0)&2),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g|16:g&-17);l&&g===h||(d=Qd(d),h=0,g=nf(g,f),g=of(g,f,!0));g!==h&&Md(d,g);gf(e,f,c,d);return a}
function nf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function of(a,b,c){32&b&&c||(a&=-33);return a}
function vf(a){a=df(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(xe(64,a)):Ee(a)?c==="string"?Je(a):b?Ke(a):Me(a):void 0;return b}
function wf(a,b){a=df(a,b);return a==null||typeof a==="string"?a:void 0}
function xf(a){a=df(a,1);return a==null?a:ze(a)?a|0:void 0}
function wc(a,b,c){c=c===void 0?0:c;var d;return(d=He(df(a,b)))!=null?d:c}
function yf(a,b){var c=c===void 0?"":c;var d;return(d=wf(a,b))!=null?d:c}
function zf(a){var b=0;b=b===void 0?0:b;var c;return(c=xf(a))!=null?c:b}
function Af(a,b,c){return ff(a,b,Re(c))}
function Bf(a,b,c){c=Re(c);a=a.F;var d=a[I]|0;Yd(d);gf(a,d,b,c===""?void 0:c)}
function Cf(a,b,c){if(c!=null){if(!ze(c))throw Bd("enum");c|=0}return ff(a,b,c)}
;function Df(a){return a}
function Ef(a){return a}
function Ff(a,b,c,d){return Gf(a,b,c,d,Hf,If)}
function Jf(a,b,c,d){return Gf(a,b,c,d,Kf,Lf)}
function Gf(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var p=c[n];d&&n===c.length-1&&p===d||(l++,p!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=Mf(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;p=g;for(var u=m,x=c.length-1;x>=0;x--){var z=c[x];if(!(z==null||d&&x===c.length-1&&z===d)){z=x-b;var H=e(z,t)+f(n,p,u);H<l&&(a=1+z,l=H);n++;t--;u+=Mf(z);p=Math.max(p,z)}}b=e(0,0)+f(n,p,u);b<l&&(a=0,l=b);if(d){n=h;p=g;u=m;t=k;for(var K in d)d=+K,isNaN(d)||d>=
1024||(n--,t++,u-=K.length,g=e(d,t)+f(n,p,u),g<l&&(a=1+d,l=g))}return a}
function Lf(a,b,c){return c+a*3+(a>1?a-1:0)}
function Kf(a,b){return(a>1?a-1:0)+(a-b)*4}
function If(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Hf(a){return 40+4*a}
function Mf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Nf;function Of(a){return a}
var Pf;function L(a,b,c){this.F=J(a,b,c)}
r=L.prototype;r.toJSON=function(){var a=!Pf;try{return a&&(Pf=$e),Qf(this)}finally{a&&(Pf=void 0)}};
r.serialize=function(a){try{return Pf=Of,a&&(Nf=a===Ef||a!==Df&&a!==Ff&&a!==Jf?Ef:a),JSON.stringify(Qf(this),Ue)}finally{a&&(Nf=void 0),Pf=void 0}};
function Rf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Ld(b,32);return new a(b)}
r.clone=function(){var a=this.F;return new this.constructor(bf(a,a[I]|0,!1))};
r.Sc=Rd;r.toString=function(){try{return Pf=Of,Qf(this).toString()}finally{Pf=void 0}};
function Qf(a){var b=a.F,c=Pf(b);b=c!==b;var d=(b?a.F:c)[I]|0;if(a=c.length){var e=c[a-1],f=Ud(e);f?a--:e=void 0;var g=d&512?0:-1,h=a-g;d=!!Nf&&!(d&512);var k,l=(k=Nf)!=null?k:Ef;k=d?l(h,g,c,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(c,0,a):c;if(f||h){b:{var m=d;var n=e;var p;f=!1;if(h)for(l=Math.max(0,k+g);l<m.length;l++){var t=m[l],u=l-g;t==null||Vd(t)||Td(t)&&t.size===0||(f=m[l]=void 0,((f=p)!=null?f:p={})[u]=t,f=!0)}if(n)for(var x in n)if(l=+x,isNaN(l))l=void 0,((l=p)!=null?l:p={})[x]=n[x];
else if(t=n[x],Array.isArray(t)&&(Vd(t)||Td(t)&&t.size===0)&&(t=null),t==null&&(f=!0),h&&l<k){f=!0;t=l+g;for(u=m.length;u<=t;u++)m.push(void 0);m[t]=n[l]}else t!=null&&(l=void 0,((l=p)!=null?l:p={})[x]=t);f||(p=n);if(p)for(var z in p){n=p;break b}n=null}m=n==null?e!=null:n!==e}h&&(a=d.length);for(var H;a>0;a--){p=d[a-1];if(!(p==null||Vd(p)||Td(p)&&p.size===0))break;H=!0}if(d!==c||m||H){if(!h&&!b)d=Array.prototype.slice.call(d,0,a);else if(H||m||n)d.length=a;n&&d.push(n)}c=d}return c}
;function Sf(a){return function(b){return Rf(a,b)}}
;function Tf(a){this.F=J(a)}
w(Tf,L);function Uf(a,b){return mf(a,b,Fe)}
;function Vf(a){this.F=J(a)}
w(Vf,L);var Wf=[1,2,3];function Xf(a){this.F=J(a)}
w(Xf,L);var Yf=[1,2,3];function Zf(a){this.F=J(a)}
w(Zf,L);function $f(a){this.F=J(a)}
w($f,L);function ag(a){this.F=J(a)}
w(ag,L);function bg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function cg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var u=e[1],x=e[2],z=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var K=z^u&(x^z);var da=1518500249}else K=u^x^z,da=1859775393;else t<60?(K=u&x|z&(u|x),da=2400959708):(K=u^x^z,da=3395469782);K=((n<<5|n>>>27)&4294967295)+K+H+da+p[t]&4294967295;H=z;z=x;x=(u<<30|u>>>2)&4294967295;u=n;n=K}e[0]=e[0]+n&4294967295;e[1]=e[1]+u&4294967295;
e[2]=e[2]+x&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+H&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],u=0,x=n.length;u<x;++u)t.push(n.charCodeAt(u));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var u=24;u>=0;u-=8)n[p++]=e[t]>>u&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ke:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function dg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,eg(bg(d),a,c||null)].join(" "):null}
function eg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Nb(d,function(h){e.push(h)}),fg(e.join(" "));
var f=[],g=[];Nb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Nb(d,function(h){e.push(h)});
a=fg(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function fg(a){var b=cg();b.update(a);return b.ke().toLowerCase()}
;function gg(a){this.h=a||{cookie:""}}
r=gg.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Tb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.cf;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Tb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=eb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Tb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=eb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var hg=new gg(typeof document=="undefined"?null:document);function ig(){var a=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__1PSAPISID||C.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new gg(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function jg(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new gg(document)).get(b));return a?dg(a,c,d):null}
function kg(a){var b=bg(String(C.location.href)),c=[];if(ig()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?C.__SAPISID:C.__APISID;d||typeof document==="undefined"||(d=new gg(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?dg(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=jg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=jg("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function lg(){}
lg.prototype.compress=function(a){var b,c,d,e;return A(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
lg.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function mg(a){this.F=J(a)}
w(mg,L);function ng(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return ab()};
this.i=this.h()}
ng.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
ng.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
ng.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
ng.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function og(a){this.F=J(a)}
w(og,L);function pg(a){this.F=J(a)}
w(pg,L);function qg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=qg.prototype;r.clone=function(){return new qg(this.x,this.y)};
r.equals=function(a){return a instanceof qg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function rg(a,b){this.width=a;this.height=b}
r=rg.prototype;r.clone=function(){return new rg(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function sg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function tg(a){var b=ug,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function vg(a){for(var b in a)return!1;return!0}
function wg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function xg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function yg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function zg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Ag(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Ag(a[c]);return b}
var Bg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Bg.length;f++)c=Bg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Dg(a,b){this.h=a===Eg&&b||""}
Dg.prototype.toString=function(){return this.h};
var Eg={};new Dg(Eg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Fg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Gg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Hg(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Ig(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Jg(a){this.F=J(a)}
w(Jg,L);Jg.prototype.lc=function(){return zf(this)};
function Kg(a,b){return ff(a,2,Ce(b))}
;function Lg(a){this.F=J(a)}
w(Lg,L);function Mg(a){this.F=J(a)}
w(Mg,L);function Ng(a,b){uf(a,Lg,1,b)}
;function kf(a){this.F=J(a)}
w(kf,L);var Og=["platform","platformVersion","architecture","model","uaFullVersion"],Pg=new Mg,Qg=null;function Rg(a,b){b=b===void 0?Og:b;if(!Qg){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Lg;f=Af(f,1,e.brand);return Af(f,2,e.version)});
Ng(ff(Pg,2,Ce(a.mobile)),c);Qg=a.getHighEntropyValues(b)}var d=new Set(b);return Qg.then(function(e){var f=Pg.clone();d.has("platform")&&Af(f,3,e.platform);d.has("platformVersion")&&Af(f,4,e.platformVersion);d.has("architecture")&&Af(f,5,e.architecture);d.has("model")&&Af(f,6,e.model);d.has("uaFullVersion")&&Af(f,7,e.uaFullVersion);return f}).catch(function(){return Pg.clone()})}
;function Sg(a){this.F=J(a)}
w(Sg,L);function Tg(a){this.F=J(a,4)}
w(Tg,L);function Ug(a){this.F=J(a,36)}
w(Ug,L);function Vg(a){this.F=J(a,19)}
w(Vg,L);Vg.prototype.Wb=function(a){return Cf(this,2,a)};function Wg(a,b){this.Wa=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new Vg;Number.isInteger(a)&&this.h.Wb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Xg(this,new Sg)}
Wg.prototype.Wb=function(a){this.h.Wb(a);return this};
function Xg(a,b){tf(a.h,Sg,1,b);zf(b)||Cf(b,1,1);a.Wa||(b=Yg(a),yf(b,5)||Af(b,5,a.locale));a.i&&(b=Yg(a),sf(b,Mg,9)||tf(b,Mg,9,a.i))}
function Zg(a,b){hf($g(a))&&(a=ah(a),Cf(a,1,b))}
function $g(a){return sf(a.h,Sg,1)}
function bh(a){var b=b===void 0?Og:b;var c=a.Wa?void 0:window;c?Rg(c,b).then(function(d){a.i=d;d=Yg(a);tf(d,Mg,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Yg(a){a=$g(a);var b=sf(a,kf,11);b||(b=new kf,tf(a,kf,11,b));return b}
function ah(a){a=Yg(a);var b=sf(a,Jg,10);b||(b=new Jg,Kg(b,!1),tf(a,Jg,10,b));return b}
function ch(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(hf($g(a))){var h=Yg(a),k=new Jg;var l=ah(a);var m;l=(m=xf(l))!=null?m:void 0;k=Cf(k,1,l);m=ah(a);m=df(m,2);m=m==null||typeof m==="boolean"?m:typeof m==="number"?!!m:void 0;k=Kg(k,m!=null?m:void 0);m=k.F;l=m[I]|0;k=l&2?k:new k.constructor(bf(m,l,!0));tf(h,Jg,10,k)}hf($g(a))&&d>0&&(h=ah(a),ff(h,3,Ge(d)));hf($g(a))&&f>0&&(d=ah(a),ff(d,4,Ge(f)));hf($g(a))&&g>0&&(f=ah(a),ff(f,5,Ge(g)));
a=a.h.clone();g=Date.now().toString();a=ff(a,4,Ne(g));b=b.slice();b=uf(a,Ug,3,b);e&&(a=new og,e=ff(a,13,Ge(e)),a=new pg,e=tf(a,og,2,e),a=new Tg,e=tf(a,pg,1,e),e=Cf(e,2,9),tf(b,Tg,18,e));c&&ff(b,14,Ne(c));return b}
;var dh=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function eh(a){this.h=this.i=this.j=a}
eh.prototype.reset=function(){this.h=this.i=this.j};
eh.prototype.getValue=function(){return this.i};function fh(a){this.F=J(a,8)}
w(fh,L);var gh=Sf(fh);function hh(a){this.F=J(a)}
w(hh,L);var kh=new function(){this.ctor=hh;this.isRepeated=0;this.h=sf;this.defaultValue=void 0};function lh(a){F.call(this);var b=this;this.componentId="";this.h=[];this.Pa="";this.pageId=null;this.Qa=this.ha=-1;this.G=this.experimentIds=null;this.Y=this.Z=this.D=this.o=0;this.rb=1;this.timeoutMillis=0;this.pa=!1;this.logSource=a.logSource;this.hb=a.hb||function(){};
this.j=new Wg(a.logSource,a.Wa);this.network=a.network||null;this.mb=a.mb||null;this.bufferSize=1E3;this.P=a.Af||null;this.sessionIndex=a.sessionIndex||null;this.Ob=a.Ob||!1;this.logger=null;this.withCredentials=!a.rd;this.Wa=a.Wa||!1;this.U=!this.Wa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Fa=typeof URLSearchParams!=="undefined"&&!!(new URL(mh())).searchParams&&!!(new URL(mh())).searchParams.set;var c=Cf(new Sg,1,1);Xg(this.j,c);this.u=new eh(1E4);a=nh(this,a.md);
this.i=new ng(this.u.getValue(),a);this.xa=new ng(6E5,a);this.Ob||this.xa.start();this.Wa||(document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&b.Kc()}),document.addEventListener("pagehide",this.Kc.bind(this)))}
w(lh,F);function nh(a,b){return a.Fa?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
r=lh.prototype;r.ba=function(){this.Kc();this.i.stop();this.xa.stop();F.prototype.ba.call(this)};
function oh(a){a.P||(a.P=mh());try{return(new URL(a.P)).toString()}catch(b){return(new URL(a.P,window.location.origin)).toString()}}
r.log=function(a){if(this.Fa){a=a.clone();var b=this.rb++;a=ff(a,21,Ne(b));this.componentId&&Af(a,26,this.componentId);b=a;if(vf(b)==null){var c=Date.now();c=Number.isFinite(c)?c.toString():"0";ff(b,1,Ne(c))}Pe(df(b,15))==null&&ff(b,15,Ne((new Date).getTimezoneOffset()*60));this.experimentIds&&(c=this.experimentIds.clone(),tf(b,mg,16,c));b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b);this.h.push(a);this.Ob||this.i.enabled||this.i.start()}};
r.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.pa&&this.U)Zg(this.j,3),ph(this);else{var d=Date.now();if(this.Qa>d&&this.ha<d)b&&b("throttled");else{this.network&&(typeof this.network.lc==="function"?Zg(this.j,this.network.lc()):Zg(this.j,0));var e=ch(this.j,this.h,this.o,this.D,this.mb,this.Z,this.Y),f=this.hb();if(f&&this.Pa===f)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=e.serialize();var g;this.G&&this.G.isSupported(d.length)&&(g=
this.G.compress(d));var h=qh(this,d,f),k=function(n){c.u.reset();c.i.setInterval(c.u.getValue());if(n){var p=null;try{var t=JSON.stringify(JSON.parse(n.replace(")]}'\n","")));p=gh(t)}catch(z){}if(p){n=Number;var u="-1";u=u===void 0?"0":u;var x;t=(x=vf(p))!=null?x:u;x=n(t);x>0&&(c.ha=Date.now(),c.Qa=c.ha+x);p=kh.ctor?kh.h(p,kh.ctor,175237375,!0):kh.h(p,175237375,null,!0);if(p=p===null?void 0:p)p=wc(p,1,-1),p!==-1&&(c.u=new eh(p<1?1:p),c.i.setInterval(c.u.getValue()))}}a&&a();c.D=0},l=function(n,p){var t=
uc(e,Ug,3);
var u;var x=(u=Pe(df(e,14)))!=null?u:void 0;u=c.u;u.h=Math.min(3E5,u.h*2);u.i=Math.min(3E5,u.h+Math.round(.1*(Math.random()-.5)*2*u.h));c.i.setInterval(c.u.getValue());n===401&&f&&(c.Pa=f);x&&(c.o+=x);p===void 0&&(p=c.isRetryable(n));p&&(c.h=t.concat(c.h),c.Ob||c.i.enabled||c.i.start());b&&b("net-send-failed",n);++c.D},m=function(){c.network&&c.network.send(h,k,l)};
g?g.then(function(n){h.Bc["Content-Encoding"]="gzip";h.Bc["Content-Type"]="application/binary";h.body=n;h.de=2;m()},function(){m()}):m()}}}};
function qh(a,b,c){c=c===void 0?a.hb():c;var d={},e=new URL(oh(a));c&&(d.Authorization=c);a.sessionIndex&&(d["X-Goog-AuthUser"]=a.sessionIndex,e.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:a.pageId}),e.searchParams.set("pageId",a.pageId));return{url:e.toString(),body:b,de:1,Bc:d,requestType:"POST",withCredentials:a.withCredentials,timeoutMillis:a.timeoutMillis}}
r.Kc=function(){var a=this.j;hf($g(a))&&Kg(ah(a),!0);this.flush();a=this.j;hf($g(a))&&Kg(ah(a),!1)};
function ph(a){rh(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.U=!1);return d})}
function rh(a,b){if(a.h.length!==0){var c=new URL(oh(a));c.searchParams.delete("format");var d=a.hb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=ch(a.j,e,a.o,a.D,a.mb,a.Z,a.Y);if(!b(c.toString(),f)){++a.D;break}a.o=0;a.D=0;a.Z=0;a.Y=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
r.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function mh(){return"https://play.google.com/log?format=json&hasfast=true"}
;function sh(){this.Xd=typeof AbortController!=="undefined"}
sh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return A(function(u){switch(u.h){case 1:return f=(e=d.Xd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,za(u,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Bc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),u.yield(fetch(a.url,g),5);case 5:h=u.i;if(h.status!==200){(k=c)==null||k(h.status);u.A(3);break}if((l=b)==null){u.A(7);break}return u.yield(h.text(),8);case 8:l(u.i);case 7:case 3:u.P=[u.j];u.M=0;u.o=0;clearTimeout(f);Ca(u);break;case 2:m=Ba(u);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}u.A(3)}})};
sh.prototype.lc=function(){return 4};function th(a,b){F.call(this);this.logSource=a;this.sessionIndex=b;this.Ua="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.mb=null;this.j=!1;this.pageId=null;this.bufferSize=void 0}
w(th,F);function uh(a,b){a.i=b;return a}
function vh(a,b){a.network=b;return a}
function wh(a,b){a.h=b}
th.prototype.rd=function(){this.u=!0;return this};
function xh(a){a.network||(a.network=new sh);var b=new lh({logSource:a.logSource,hb:a.hb?a.hb:kg,sessionIndex:a.sessionIndex,Af:a.Ua,Wa:a.o,Ob:!1,rd:a.u,md:a.md,network:a.network});Ac(a,b);if(a.i){var c=a.i,d=Yg(b.j);Af(d,7,c)}b.G=new lg;a.componentId&&(b.componentId=a.componentId);a.mb&&(b.mb=a.mb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new mg),c=b.experimentIds,d=d.serialize(),Af(c,4,d)):b.experimentIds&&ff(b.experimentIds,4));a.j&&(b.pa=b.U);bh(b.j);a.bufferSize&&
(b.bufferSize=a.bufferSize);a.network.Wb&&a.network.Wb(a.logSource);a.network.pf&&a.network.pf(b);return b}
;function yh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;F.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new th(a,"0"),a.componentId=b,Ac(this,a),c!==""&&(a.Ua=c),d&&(a.o=!0),e&&uh(a,e),g&&vh(a,g),b=xh(a));this.h=b}
w(yh,F);
yh.prototype.flush=function(a){var b=a||[];if(b.length){a=new ag;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new $f;f=Af(f,1,e.i);var g=zh(e);f=mf(f,g,Qe);g=[];var h=[];for(var k=y(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Lc(l)||[],p=[],t=0;t<n.length;t++){var u=n[t],x=u&&u.h;u=new Xf;switch(m){case 3:x=Number(x);Number.isFinite(x)&&pf(u,1,Yf,Ne(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);pf(u,2,Yf,x)}p.push(u)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new Zf;p=tf(t,Xf,2,p);t=l;u=[];x=Ah(e);for(var z=0;z<x.length;z++){var H=x[z],K=t[z],da=new Vf;switch(H){case 3:pf(da,1,Wf,Re(String(K)));break;case 2:H=Number(K);Number.isFinite(H)&&pf(da,2,Wf,Ge(H));break;case 1:pf(da,3,Wf,Ce(K==="true"))}u.push(da)}uf(p,Vf,1,u);g.push(p)}}uf(f,Zf,4,g);c.push(f);e.clear()}uf(a,$f,1,c);b=this.h;if(a instanceof Ug)b.log(a);else try{var ea=new Ug,Oa=a.serialize();var Ob=Af(ea,8,Oa);b.log(Ob)}catch(ka){}this.h.flush()}};function Bh(a){this.h=a}
;function Ch(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function Ah(a){return a.fields.map(function(b){return b.fieldType})}
function zh(a){return a.fields.map(function(b){return b.fieldName})}
r=Ch.prototype;r.Yd=function(a){var b=B.apply(1,arguments),c=this.Lc(b);c?c.push(new Bh(a)):this.Jd(a,b)};
r.Jd=function(a){var b=this.ld(B.apply(1,arguments));this.h.set(b,[new Bh(a)])};
r.Lc=function(){var a=this.ld(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.xe=function(){var a=this.Lc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.ld=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Dh(a,b){Ch.call(this,a,3,b)}
w(Dh,Ch);Dh.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.xe(b);d&&(c=d.h);this.Jd(c+a,b)};function Eh(a,b){Ch.call(this,a,2,b)}
w(Eh,Ch);Eh.prototype.record=function(a){this.Yd(a,B.apply(1,arguments))};function Fh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Fh.prototype.stopPropagation=function(){this.j=!0};
Fh.prototype.preventDefault=function(){this.defaultPrevented=!0};function Gh(a,b){Fh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
cb(Gh,Fh);
Gh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Gh.Aa.preventDefault.call(this)};
Gh.prototype.stopPropagation=function(){Gh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Gh.prototype.preventDefault=function(){Gh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Hh="closure_listenable_"+(Math.random()*1E6|0);var Ih=0;function Jh(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.oc=e;this.key=++Ih;this.Vb=this.ec=!1}
function Kh(a){a.Vb=!0;a.listener=null;a.proxy=null;a.src=null;a.oc=null}
;function Lh(a){this.src=a;this.listeners={};this.h=0}
Lh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Mh(a,b,d,e);g>-1?(b=a[g],c||(b.ec=!1)):(b=new Jh(b,this.src,f,!!d,e),b.ec=c,a.push(b));return b};
Lh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Mh(e,b,c,d);return b>-1?(Kh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Nh(a,b){var c=b.type;c in a.listeners&&Tb(a.listeners[c],b)&&(Kh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Mh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Vb&&f.listener==b&&f.capture==!!c&&f.oc==d)return e}return-1}
;var Oh="closure_lm_"+(Math.random()*1E6|0),Ph={},Qh=0;function Rh(a,b,c,d,e){if(d&&d.once)Sh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Rh(a,b[f],c,d,e);else c=Th(c),a&&a[Hh]?a.listen(b,c,Sa(d)?!!d.capture:!!d,e):Uh(a,b,c,!1,d,e)}
function Uh(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Sa(e)?!!e.capture:!!e,h=Vh(a);h||(a[Oh]=h=new Lh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Wh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)dh||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Xh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Qh++}}
function Wh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Yh;return a}
function Sh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Sh(a,b[f],c,d,e);else c=Th(c),a&&a[Hh]?Zh(a,b,c,Sa(d)?!!d.capture:!!d,e):Uh(a,b,c,!0,d,e)}
function $h(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)$h(a,b[f],c,d,e);else(d=Sa(d)?!!d.capture:!!d,c=Th(c),a&&a[Hh])?a.i.remove(String(b),c,d,e):a&&(a=Vh(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Mh(b,c,d,e)),(c=a>-1?b[a]:null)&&ai(c))}
function ai(a){if(typeof a!=="number"&&a&&!a.Vb){var b=a.src;if(b&&b[Hh])Nh(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Xh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Qh--;(c=Vh(b))?(Nh(c,a),c.h==0&&(c.src=null,b[Oh]=null)):Kh(a)}}}
function Xh(a){return a in Ph?Ph[a]:Ph[a]="on"+a}
function Yh(a,b){if(a.Vb)a=!0;else{b=new Gh(b,this);var c=a.listener,d=a.oc||a.src;a.ec&&ai(a);a=c.call(d,b)}return a}
function Vh(a){a=a[Oh];return a instanceof Lh?a:null}
var bi="__closure_events_fn_"+(Math.random()*1E9>>>0);function Th(a){if(typeof a==="function")return a;a[bi]||(a[bi]=function(b){return a.handleEvent(b)});
return a[bi]}
;function ci(){F.call(this);this.i=new Lh(this);this.xa=this;this.Z=null}
cb(ci,F);ci.prototype[Hh]=!0;r=ci.prototype;r.addEventListener=function(a,b,c,d){Rh(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){$h(this,a,b,c,d)};
function di(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.xa;c=b.type||b;typeof b==="string"?b=new Fh(b,a):b instanceof Fh?b.target=b.target||a:(e=b,b=new Fh(c,a),Cg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=ei(g,c,!0,b)&&e}b.j||(g=b.h=a,e=ei(g,c,!0,b)&&e,b.j||(e=ei(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=ei(g,c,!1,b)&&e}
r.ba=function(){ci.Aa.ba.call(this);this.removeAllListeners();this.Z=null};
r.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Zh(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
r.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Kh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function ei(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Vb&&g.capture==c){var h=g.listener,k=g.oc||g.src;g.ec&&Nh(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var fi=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function gi(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
gi.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function hi(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function ii(){this.i=this.h=null}
ii.prototype.add=function(a,b){var c=ji.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
ii.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var ji=new gi(function(){return new ki},function(a){return a.reset()});
function ki(){this.next=this.scope=this.h=null}
ki.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
ki.prototype.reset=function(){this.next=this.scope=this.h=null};var li,mi=!1,ni=new ii;function oi(a,b){li||pi();mi||(li(),mi=!0);ni.add(a,b)}
function pi(){var a=Promise.resolve(void 0);li=function(){a.then(qi)}}
function qi(){for(var a;a=ni.remove();){try{a.h.call(a.scope)}catch(b){Nc(b)}hi(ji,a)}mi=!1}
;function ri(){}
function si(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function ti(a){this.X=0;this.ab=void 0;this.ub=this.Sa=this.parent_=null;this.nc=this.Jc=!1;if(a!=ri)try{var b=this;a.call(void 0,function(c){ui(b,2,c)},function(c){ui(b,3,c)})}catch(c){ui(this,3,c)}}
function vi(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
vi.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var wi=new gi(function(){return new vi},function(a){a.reset()});
function xi(a,b,c){var d=wi.get();d.i=a;d.h=b;d.context=c;return d}
function yi(a){return new ti(function(b,c){c(a)})}
ti.prototype.then=function(a,b,c){return zi(this,fi(typeof a==="function"?a:null),fi(typeof b==="function"?b:null),c)};
ti.prototype.$goog_Thenable=!0;function Ai(a,b,c,d){Bi(a,xi(b||ri,c||null,d))}
r=ti.prototype;r.finally=function(a){var b=this;a=fi(a);return new Promise(function(c,d){Ai(b,function(e){a();c(e)},function(e){a();
d(e)})})};
r.Dc=function(a,b){return zi(this,null,fi(a),b)};
r.catch=ti.prototype.Dc;r.cancel=function(a){if(this.X==0){var b=new Ci(a);oi(function(){Di(this,b)},this)}};
function Di(a,b){if(a.X==0)if(a.parent_){var c=a.parent_;if(c.Sa){for(var d=0,e=null,f=null,g=c.Sa;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.X==0&&d==1?Di(c,b):(f?(d=f,d.next==c.ub&&(c.ub=d),d.next=d.next.next):Ei(c),Fi(c,e,3,b)))}a.parent_=null}else ui(a,3,b)}
function Bi(a,b){a.Sa||a.X!=2&&a.X!=3||Gi(a);a.ub?a.ub.next=b:a.Sa=b;a.ub=b}
function zi(a,b,c,d){var e=xi(null,null,null);e.child=new ti(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Ci?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;Bi(a,e);return e.child}
r.yf=function(a){this.X=0;ui(this,2,a)};
r.zf=function(a){this.X=0;ui(this,3,a)};
function ui(a,b,c){if(a.X==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.X=1;a:{var d=c,e=a.yf,f=a.zf;if(d instanceof ti){Ai(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Sa(d))try{var k=d.then;if(typeof k==="function"){Hi(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ab=c,a.X=b,a.parent_=null,Gi(a),b!=3||c instanceof Ci||Ii(a,c))}}
function Hi(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Gi(a){a.Jc||(a.Jc=!0,oi(a.re,a))}
function Ei(a){var b=null;a.Sa&&(b=a.Sa,a.Sa=b.next,b.next=null);a.Sa||(a.ub=null);return b}
r.re=function(){for(var a;a=Ei(this);)Fi(this,a,this.X,this.ab);this.Jc=!1};
function Fi(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.nc;a=a.parent_)a.nc=!1;if(b.child)b.child.parent_=null,Ji(b,c,d);else try{b.j?b.i.call(b.context):Ji(b,c,d)}catch(e){Ki.call(null,e)}hi(wi,b)}
function Ji(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Ii(a,b){a.nc=!0;oi(function(){a.nc&&Ki.call(null,b)})}
var Ki=Nc;function Ci(a){db.call(this,a)}
cb(Ci,db);Ci.prototype.name="cancel";function Li(a,b){ci.call(this);this.j=a||1;this.h=b||C;this.o=Za(this.uf,this);this.u=ab()}
cb(Li,ci);r=Li.prototype;r.enabled=!1;r.Ea=null;r.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
r.uf=function(){if(this.enabled){var a=ab()-this.u;a>0&&a<this.j*.8?this.Ea=this.h.setTimeout(this.o,this.j-a):(this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null),di(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.h.setTimeout(this.o,this.j),this.u=ab())};
r.stop=function(){this.enabled=!1;this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null)};
r.ba=function(){Li.Aa.ba.call(this);this.stop();delete this.h};function Mi(a){F.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.D=new Set;this.flushInterval=3E4;this.h=new Li(this.flushInterval);this.h.listen("tick",this.Yb,!1,this);Ac(this,this.h)}
w(Mi,F);r=Mi.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Ni(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.Yb()}
r.Yb=function(){var a=this.i.values();a=[].concat(ra(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Oi(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Kb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Dh(a,b))};
r.Gc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Eh(a,b))};
function Pi(a,b){return a.D.has(b)?void 0:a.i.get(b)}
r.Ib=function(a){this.Wd(a,1,B.apply(1,arguments))};
r.Wd=function(a,b){var c=B.apply(2,arguments),d=Pi(this,a);d&&d instanceof Dh&&(d.j(b,c),Ni(this))};
r.record=function(a,b){var c=B.apply(2,arguments),d=Pi(this,a);d&&d instanceof Eh&&(d.record(b,c),Ni(this))};
function Oi(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Qi(){}
Qi.prototype.serialize=function(a){var b=[];Ri(this,a,b);return b.join("")};
function Ri(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ri(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Si(d,c),c.push(":"),Ri(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Si(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ti={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ui=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Si(a,b){b.push('"',a.replace(Ui,function(c){var d=Ti[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ti[c]=d);return d}),'"')}
;function Vi(){ci.call(this);this.headers=new Map;this.h=!1;this.J=null;this.o=this.Y="";this.j=this.U=this.D=this.P=!1;this.G=0;this.u=null;this.pa="";this.ha=!1}
cb(Vi,ci);var Wi=/^https?$/i,Xi=["POST","PUT"],Yi=[];function Zi(a,b,c,d,e,f,g){var h=new Vi;Yi.push(h);b&&h.listen("complete",b);Zh(h,"ready",h.ge);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
r=Vi.prototype;r.ge=function(){this.dispose();Tb(Yi,this)};
r.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.P=!1;this.h=!0;this.J=new XMLHttpRequest;this.J.onreadystatechange=fi(Za(this.Cd,this));try{this.getStatus(),this.U=!0,this.J.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();$i(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Mb(Xi,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.pa&&(this.J.responseType=this.pa);"withCredentials"in this.J&&this.J.withCredentials!==this.ha&&(this.J.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.xf.bind(this),this.G)),
this.getStatus(),this.D=!0,this.J.send(a),this.D=!1}catch(g){this.getStatus(),$i(this,g)}};
r.xf=function(){typeof La!="undefined"&&this.J&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),di(this,"timeout"),this.abort(8))};
function $i(a,b){a.h=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.o=b;aj(a);bj(a)}
function aj(a){a.P||(a.P=!0,di(a,"complete"),di(a,"error"))}
r.abort=function(){this.J&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.J.abort(),this.j=!1,di(this,"complete"),di(this,"abort"),bj(this))};
r.ba=function(){this.J&&(this.h&&(this.h=!1,this.j=!0,this.J.abort(),this.j=!1),bj(this,!0));Vi.Aa.ba.call(this)};
r.Cd=function(){this.ea||(this.U||this.D||this.j?cj(this):this.Oe())};
r.Oe=function(){cj(this)};
function cj(a){if(a.h&&typeof La!="undefined")if(a.D&&(a.J?a.J.readyState:0)==4)setTimeout(a.Cd.bind(a),0);else if(di(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(dj(a))di(a,"complete"),di(a,"success");else{try{var b=(a.J?a.J.readyState:0)>2?a.J.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";aj(a)}}finally{bj(a)}}}
function bj(a,b){if(a.J){a.u&&(clearTimeout(a.u),a.u=null);var c=a.J;a.J=null;b||di(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.J};
r.isComplete=function(){return(this.J?this.J.readyState:0)==4};
function dj(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=cc(1,String(a.Y)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Wi.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.J?this.J.readyState:0)>2?this.J.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function ej(){}
ej.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Zi(a.url,function(d){d=d.target;if(dj(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Bc,a.timeoutMillis,a.withCredentials)};
ej.prototype.lc=function(){return 1};function fj(a,b){this.logger=a;this.event=b;this.startTime=gj()}
fj.prototype.done=function(){this.logger.Sb(this.event,gj()-this.startTime)};
function hj(){Cc.apply(this,arguments)}
w(hj,Cc);function ij(a,b){var c=gj();b=b();a.Sb("n",gj()-c);return b}
function jj(){hj.apply(this,arguments)}
w(jj,hj);r=jj.prototype;r.Pc=function(){};
r.Bb=function(){};
r.Sb=function(){};
r.Ha=function(){};
r.Ac=function(){};
r.Od=function(){};
function kj(a){return{sf:new Fc(a),errorCount:new Jc(a),eventCount:new Hc(a),qe:new Ic(a),ai:new Gc(a),ci:new Kc(a),vh:new Lc(a),bi:new Mc(a)}}
function lj(a,b,c,d,e){a=vh(uh(new th(1828,"0"),a),new ej);b.length&&wh(a,Uf(new Tf,b));e!==void 0&&(a.Ua=e);d&&(a.j=!0);var f=new yh(1828,"","",!1,"",xh(a));Ac(f,a);var g=new Mi({flush:function(h){try{f.flush(h)}catch(k){c(k)}}});
g.addOnDisposeCallback(function(){setTimeout(function(){try{g.Yb()}finally{f.dispose()}})});
g.o=1E5;g.flushInterval=3E4;g.h.setInterval(3E4);return g}
function mj(a,b){F.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w(mj,F);function nj(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-gj());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=gj(),a.timer=void 0}},b)}}
function oj(a,b,c){hj.call(this);this.metrics=a;this.Da=b;this.ob=c}
w(oj,hj);oj.prototype.Pc=function(a){this.metrics.sf.record(a,this.Da)};
oj.prototype.Bb=function(a){this.metrics.eventCount.h(a,this.Da)};
oj.prototype.Sb=function(a,b){this.metrics.qe.record(b,a,this.ob,this.Da)};
oj.prototype.Ha=function(a){this.metrics.errorCount.h(a,this.ob,this.Da)};
function pj(a,b){b=b===void 0?[]:b;var c={Da:a.Da||"_",ob:a.ob||"",kc:a.kc||[],sc:a.sc|0,Ua:a.Ua,uc:a.uc||function(){},
Ic:!!a.Ic,Hb:a.Hb||function(e,f){return lj(e,f,c.uc,c.Ic,c.Ua)}};
b=c.Hb("44",c.kc.concat(b));oj.call(this,kj(b),c.Da,c.ob);var d=this;this.options=c;this.service=b;this.i=!a.Hb;this.h=new mj(function(){return void d.service.Yb()},c.sc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
w(pj,oj);pj.prototype.Od=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.Hb("44",this.options.kc.concat(a));this.h=new mj(function(){return void b.service.Yb()},this.options.sc);
this.metrics=kj(this.service)};
pj.prototype.Ac=function(){nj(this.h)};
function gj(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function qj(a){this.F=J(a)}
w(qj,L);function rj(a){this.F=J(a)}
w(rj,L);function sj(a){this.F=J(a,0,"bfkj")}
w(sj,L);var tj=function(a){return ae(function(b){return b instanceof a&&!((b.F[I]|0)&2)})}(sj);function uj(a){this.F=J(a)}
w(uj,L);function vc(a){this.F=J(a)}
w(vc,L);function vj(a){this.F=J(a)}
w(vj,L);var wj=Sf(vj);function xj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function yj(a,b,c){if(a.disable)return new jj;var d=b?tc(b):[];if(c)return c.Od(d),c.share();c=a.Da;var e=a.ob,f=a.Bh,g=a.Lh;b=b==null?void 0:sf(b,uj,10);var h=h===void 0?44:h;b=(b==null?void 0:wc(b,1))||0;a={Da:c,ob:e,kc:f,sc:g,Ic:b>0&&h>=b,Ua:a.Ua,uc:a.uc,Hb:a.Hb};d=d===void 0?[]:d;return new pj(a,d)}
function zj(a){function b(u,x,z,H){Promise.resolve().then(function(){k.done();h.Ac();h.dispose();g.resolve({ae:u,rf:x,Se:z,xh:H})})}
function c(u,x,z,H){if(!d.logger.ea){var K="k";x?K="h":z&&(K="u");K!=="k"?H!==0&&(d.logger.Bb(K),d.logger.Sb(K,u)):d.i<=0?(d.logger.Bb(K),d.logger.Sb(K,u),d.i=Math.floor(Math.random()*200)):d.i--}}
F.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new vj;if("challenge"in a&&tj(a.challenge)){var e=yf(a.challenge,4);var f=yf(a.challenge,5);yf(a.challenge,7)&&(this.h=wj(yf(a.challenge,7)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var u,x,z;return A(function(H){if(H.h==1)return H.yield(d.j,2);u=H.i;x=u.rf;(z=x)==null||z();H.h=0})});
this.logger=yj(a.Ad||{},this.h,a.yh);Ac(this,this.logger);var g=new xj;this.j=g.promise;this.logger.Bb("t");var h=this.logger.share(),k=new fj(h,"t");if(!C[f])throw this.logger.Ha(25),Error("EGOU");if(!C[f].a)throw this.logger.Ha(26),Error("ELIU");try{var l=C[f].a;f=[];for(var m=[],n=tc(this.h),p=0;p<n.length;p++)f.push(n[p]),m.push(1);var t=xc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2);this.u=y(l(e,b,!0,a.Zh,c,[f,m],yf(this.h,5))).next().value;this.bd=g.promise.then(function(){})}catch(u){throw this.logger.Ha(28),
u;
}}
w(zj,F);zj.prototype.snapshot=function(a){if(this.ea)throw Error("Already disposed");this.logger.Bb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.ae;return new Promise(function(e){var f=new fj(b,"n");d(function(g){f.done();b.Pc(g.length);b.Ac();b.dispose();e(g)},[a.vb,
a.dd,a.Cf,a.ed])})})};
zj.prototype.gd=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.Bb("n");var c=ij(this.logger,function(){return b.u([a.vb,a.dd,a.Cf,a.ed])});
this.logger.Pc(c.length);this.logger.Ac();return c};
zj.prototype.o=function(a){this.j.then(function(b){var c;(c=b.Se)==null||c(a)})};function Aj(){var a=Bj();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:sc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new Cj(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new Cj(f))}))})}
function Cj(a){F.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.bd=this.vm.p;this.j=this.o.bind(this);this.addOnDisposeCallback(function(){return void Dj(b)})}
w(Cj,F);Cj.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.vb&&{c:a.vb},a.dd&&{s:a.dd},a.ed!==void 0&&{p:a.ed}))};
Cj.prototype.o=function(a){this.vm.e(a)};
function Dj(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
;function Ej(a){if(!a)return null;a=wf(a,4);return a===null||a===void 0?null:kb(a)}
;function Fj(){this.promises={};this.h=null}
function Gj(){Fj.h||(Fj.h=new Fj);return Fj.h}
function Hj(a,b){return Ij(a,sf(b,qj,1),sf(b,rj,2),yf(b,3))}
function Ij(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return Jj(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){Jj(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function Jj(a,b){return b?Kj(b):a?Lj(a):Promise.resolve()}
function Kj(a){return new Promise(function(b,c){var d=Gg("SCRIPT"),e=Ej(a);Gb(d,e);d.onload=function(){Hg(d);b()};
d.onerror=function(){Hg(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function Lj(a){return new Promise(function(b){var c=Gg("SCRIPT");if(a){var d=wf(a,6);d=d===null||d===void 0?null:Db(d)}else d=null;c.textContent=Eb(d);Fb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);Hg(c);b()})}
;var Mj=window;function Nj(a){var b=Oj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Pj(){var a=[];Nj(function(b){a.push(b)});
return a}
var Oj={Df:"allow-forms",Ef:"allow-modals",Ff:"allow-orientation-lock",Gf:"allow-pointer-lock",Hf:"allow-popups",If:"allow-popups-to-escape-sandbox",Jf:"allow-presentation",Kf:"allow-same-origin",Lf:"allow-scripts",Mf:"allow-top-navigation",Nf:"allow-top-navigation-by-user-activation"},Qj=si(function(){return Pj()});
function Rj(){var a=Sj(),b={};Nb(Qj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Sj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Tj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Uj=(new Date).getTime();function Vj(a){ci.call(this);var b=this;this.D=this.j=0;this.Ca=a!=null?a:{ma:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(Wj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.D||Xj(this)}
w(Vj,ci);function Yj(){var a=Zj;Vj.h||(Vj.h=new Vj(a));return Vj.h}
Vj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.D);delete Vj.h};
Vj.prototype.ta=function(){return this.h};
function Xj(a){a.D=a.Ca.ma(function(){var b;return A(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.A(3):c.yield(Wj(a),3):c.yield(Wj(a),3);Xj(a);c.h=0})},3E4)}
function Wj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Ca.ma(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.M=0;h.o=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?di(a,"networkstatus-online"):di(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.A(3)}})})}
;function ak(){this.data=[];this.h=-1}
ak.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
ak.prototype.get=function(a){return!!this.data[a]};
function bk(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function ck(){this.blockSize=-1}
;function dk(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.M=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
cb(dk,ck);dk.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function ek(a,b,c){c||(c=0);var d=a.M;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
dk.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)ek(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ek(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ek(this,e);f=0;break}}this.i=f;this.o+=b}};
dk.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;ek(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function fk(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function gk(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function hk(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:fk(a).match(/\S+/g)||[],b=Mb(a,b)>=0);return b}
function ik(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):hk(a,"inverted-hdpi")&&gk(a,Array.prototype.filter.call(a.classList?a.classList:fk(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function jk(){}
jk.prototype.next=function(){return kk};
var kk={done:!0,value:void 0};jk.prototype.sb=function(){return this};function lk(a){if(a instanceof mk||a instanceof nk||a instanceof ok)return a;if(typeof a.next=="function")return new mk(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new mk(function(){return a[Symbol.iterator]()});
if(typeof a.sb=="function")return new mk(function(){return a.sb()});
throw Error("Not an iterator or iterable.");}
function mk(a){this.h=a}
mk.prototype.sb=function(){return new nk(this.h())};
mk.prototype[Symbol.iterator]=function(){return new ok(this.h())};
mk.prototype.i=function(){return new ok(this.h())};
function nk(a){this.h=a}
w(nk,jk);nk.prototype.next=function(){return this.h.next()};
nk.prototype[Symbol.iterator]=function(){return new ok(this.h)};
nk.prototype.i=function(){return new ok(this.h)};
function ok(a){mk.call(this,function(){return a});
this.j=a}
w(ok,mk);ok.prototype.next=function(){return this.j.next()};function M(a){F.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.D=!!a}
cb(M,F);r=M.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.ac(a)}return!1};
r.ac=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Tb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.qb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.D)for(f=0;f<c.length;f++)e=c[f],pk(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.ac(c)}}return f!=0}return!1};
function pk(a,b,c){oi(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.ac,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.ba=function(){M.Aa.ba.call(this);this.clear();this.j.length=0};function qk(a){this.h=a}
qk.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Qi).serialize(b))};
qk.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
qk.prototype.remove=function(a){this.h.remove(a)};function rk(a){this.h=a}
cb(rk,qk);function sk(a){this.data=a}
function tk(a){return a===void 0||a instanceof sk?a:new sk(a)}
rk.prototype.set=function(a,b){rk.Aa.set.call(this,a,tk(b))};
rk.prototype.i=function(a){a=rk.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
rk.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function uk(a){this.h=a}
cb(uk,rk);uk.prototype.set=function(a,b,c){if(b=tk(b)){if(c){if(c<ab()){uk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=ab()}uk.Aa.set.call(this,a,b)};
uk.prototype.i=function(a){var b=uk.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<ab()||c&&c>ab())uk.prototype.remove.call(this,a);else return b}};function vk(){}
;function wk(){}
cb(wk,vk);wk.prototype[Symbol.iterator]=function(){return lk(this.sb(!0)).i()};
wk.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function xk(a){this.h=a;this.i=null}
cb(xk,wk);r=xk.prototype;r.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
r.set=function(a,b){yk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){yk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){yk(this);this.h.removeItem(a)};
r.sb=function(a){yk(this);var b=0,c=this.h,d=new jk;d.next=function(){if(b>=c.length)return kk;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){yk(this);this.h.clear()};
r.key=function(a){yk(this);return this.h.key(a)};
function yk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Nc(Error("Storage mechanism: Storage unavailable"))}
;function zk(){var a=null;try{a=C.localStorage||null}catch(b){}xk.call(this,a)}
cb(zk,xk);function Ak(a,b){this.i=a;this.h=b+"::"}
cb(Ak,wk);Ak.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Ak.prototype.get=function(a){return this.i.get(this.h+a)};
Ak.prototype.remove=function(a){this.i.remove(this.h+a)};
Ak.prototype.sb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new jk;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},Bk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.cd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Ck={tb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
td:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Dk={tb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
td:function(a){return[].concat.apply([],a)}};
N.qf=function(){Bk?(N.pb=Uint8Array,N.Ja=Uint16Array,N.Vd=Int32Array,N.assign(N,Ck)):(N.pb=Array,N.Ja=Array,N.Vd=Array,N.assign(N,Dk))};
N.qf();var Ek=!0;try{new Uint8Array(1)}catch(a){Ek=!1}
function Fk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new N.pb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Gk={};Gk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Hk={},Ik,Jk=[],Kk=0;Kk<256;Kk++){Ik=Kk;for(var Lk=0;Lk<8;Lk++)Ik=Ik&1?3988292384^Ik>>>1:Ik>>>1;Jk[Kk]=Ik}Hk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Jk[(a^b[d])&255];return a^-1};var Mk={};Mk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Nk(a){for(var b=a.length;--b>=0;)a[b]=0}
var Ok=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Pk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Qk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Rk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Sk=Array(576);Nk(Sk);var Tk=Array(60);Nk(Tk);var Uk=Array(512);Nk(Uk);var Vk=Array(256);Nk(Vk);var Wk=Array(29);Nk(Wk);var Xk=Array(30);Nk(Xk);function Yk(a,b,c,d,e){this.Ld=a;this.ue=b;this.te=c;this.ne=d;this.Me=e;this.wd=a&&a.length}
var Zk,$k,al;function bl(a,b){this.sd=a;this.Db=0;this.bb=b}
function cl(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function dl(a,b,c){a.ia>16-c?(a.oa|=b<<a.ia&65535,cl(a,a.oa),a.oa=b>>16-a.ia,a.ia+=c-16):(a.oa|=b<<a.ia&65535,a.ia+=c)}
function el(a,b,c){dl(a,c[b*2],c[b*2+1])}
function fl(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function gl(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=fl(d[e]++,e))}
function hl(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.fb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Oa=a.Gb=0;a.ya=a.matches=0}
function il(a){a.ia>8?cl(a,a.oa):a.ia>0&&(a.aa[a.pending++]=a.oa);a.oa=0;a.ia=0}
function jl(a,b,c){il(a);cl(a,c);cl(a,~c);N.tb(a.aa,a.window,b,c,a.pending);a.pending+=c}
function kl(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ll(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Na;){e<a.Na&&kl(b,a.da[e+1],a.da[e],a.depth)&&e++;if(kl(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function ml(a,b,c){var d=0;if(a.ya!==0){do{var e=a.aa[a.Nb+d*2]<<8|a.aa[a.Nb+d*2+1];var f=a.aa[a.Oc+d];d++;if(e===0)el(a,f,b);else{var g=Vk[f];el(a,g+256+1,b);var h=Ok[g];h!==0&&(f-=Wk[g],dl(a,f,h));e--;g=e<256?Uk[e]:Uk[256+(e>>>7)];el(a,g,c);h=Pk[g];h!==0&&(e-=Xk[g],dl(a,e,h))}}while(d<a.ya)}el(a,256,b)}
function nl(a,b){var c=b.sd,d=b.bb.Ld,e=b.bb.wd,f=b.bb.ne,g,h=-1;a.Na=0;a.yb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Na]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Na<2;){var k=a.da[++a.Na]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Oa--;e&&(a.Gb-=d[k*2+1])}b.Db=h;for(g=a.Na>>1;g>=1;g--)ll(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Na--],ll(a,c,1),d=a.da[1],a.da[--a.yb]=g,a.da[--a.yb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,ll(a,c,1);while(a.Na>=
2);a.da[--a.yb]=a.da[1];g=b.sd;k=b.Db;d=b.bb.Ld;e=b.bb.wd;f=b.bb.ue;var l=b.bb.te,m=b.bb.Me,n,p=0;for(n=0;n<=15;n++)a.Ka[n]=0;g[a.da[a.yb]*2+1]=0;for(b=a.yb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.Ka[n]++;var u=0;t>=l&&(u=f[t-l]);var x=g[t*2];a.Oa+=x*(n+u);e&&(a.Gb+=x*(d[t*2+1]+u))}}if(p!==0){do{for(n=m-1;a.Ka[n]===0;)n--;a.Ka[n]--;a.Ka[n+1]+=2;a.Ka[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.Ka[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Oa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}gl(c,h,a.Ka)}
function ol(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function pl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do el(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(el(a,l,a.ja),g--),el(a,16,a.ja),dl(a,g-3,2)):g<=10?(el(a,17,a.ja),dl(a,g-3,3)):(el(a,18,a.ja),dl(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function ql(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var rl=!1;function sl(a,b,c){a.aa[a.Nb+a.ya*2]=b>>>8&255;a.aa[a.Nb+a.ya*2+1]=b&255;a.aa[a.Oc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(Vk[c]+256+1)*2]++,a.fb[(b<256?Uk[b]:Uk[256+(b>>>7)])*2]++);return a.ya===a.Rb-1}
;function tl(a,b){a.msg=Mk[b];return b}
function ul(a){for(var b=a.length;--b>=0;)a[b]=0}
function vl(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(N.tb(a.output,b.aa,b.Ub,c,a.Eb),a.Eb+=c,b.Ub+=c,a.hd+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Ub=0))}
function wl(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.K.Hc===2&&(a.K.Hc=ql(a));nl(a,a.qc);nl(a,a.ic);ol(a,a.ra,a.qc.Db);ol(a,a.fb,a.ic.Db);nl(a,a.od);for(e=18;e>=3&&a.ja[Rk[e]*2+1]===0;e--);a.Oa+=3*(e+1)+5+5+4;var f=a.Oa+3+7>>>3;var g=a.Gb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)dl(a,b?1:0,3),jl(a,c,d);else if(a.strategy===4||g===f)dl(a,2+(b?1:0),3),ml(a,Sk,Tk);else{dl(a,4+(b?1:0),3);c=a.qc.Db+1;d=a.ic.Db+1;e+=1;dl(a,c-257,5);dl(a,d-1,5);dl(a,e-4,4);for(f=0;f<e;f++)dl(a,
a.ja[Rk[f]*2+1],3);pl(a,a.ra,c-1);pl(a,a.fb,d-1);ml(a,a.ra,a.fb)}hl(a);b&&il(a);a.va=a.v;vl(a.K)}
function O(a,b){a.aa[a.pending++]=b}
function xl(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function yl(a,b){var c=a.zd,d=a.v,e=a.wa,f=a.Bd,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.cb,l=a.Ia,m=a.v+258,n=h[d+e-1],p=h[d+e];a.wa>=a.vd&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Cb=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function zl(a){var b=a.la,c;do{var d=a.Td-a.B-a.v;if(a.v>=b+(b-262)){N.tb(a.window,a.window,b,b,0);a.Cb-=b;a.v-=b;a.va-=b;var e=c=a.pc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.K.na===0)break;e=a.K;c=a.window;f=a.v+a.B;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,N.tb(c,e.input,e.lb,g,f),e.state.wrap===1?e.I=Gk(e.I,c,g,f):e.state.wrap===2&&(e.I=Hk(e.I,c,g,f)),e.lb+=g,e.nb+=g,c=g);a.B+=c;if(a.B+a.sa>=3)for(d=a.v-a.sa,a.R=a.window[d],
a.R=(a.R<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.R=(a.R<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.cb]=a.head[a.R],a.head[a.R]=d,d++,a.sa--,a.B+a.sa<3););}while(a.B<262&&a.K.na!==0)}
function Al(a,b){for(var c;;){if(a.B<262){zl(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=yl(a,c));if(a.T>=3)if(c=sl(a,a.v-a.Cb,a.T-3),a.B-=a.T,a.T<=a.Qc&&a.B>=3){a.T--;do a.v++,a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.R=a.window[a.v],a.R=(a.R<<a.Ma^a.window[a.v+1])&a.La;else c=sl(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(wl(a,!1),a.K.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(wl(a,!0),a.K.S===0?3:4):a.ya&&(wl(a,!1),a.K.S===0)?1:2}
function Bl(a,b){for(var c,d;;){if(a.B<262){zl(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);a.wa=a.T;a.Ed=a.Cb;a.T=2;c!==0&&a.wa<a.Qc&&a.v-c<=a.la-262&&(a.T=yl(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.Cb>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.B-3;c=sl(a,a.v-1-a.Ed,a.wa-3);a.B-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);
while(--a.wa!==0);a.jb=0;a.T=2;a.v++;if(c&&(wl(a,!1),a.K.S===0))return 1}else if(a.jb){if((c=sl(a,0,a.window[a.v-1]))&&wl(a,!1),a.v++,a.B--,a.K.S===0)return 1}else a.jb=1,a.v++,a.B--}a.jb&&(sl(a,0,a.window[a.v-1]),a.jb=0);a.sa=a.v<2?a.v:2;return b===4?(wl(a,!0),a.K.S===0?3:4):a.ya&&(wl(a,!1),a.K.S===0)?1:2}
function Cl(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){zl(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.T=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.B&&(a.T=a.B)}a.T>=3?(c=sl(a,1,a.T-3),a.B-=a.T,a.v+=a.T,a.T=0):(c=sl(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(wl(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(wl(a,!0),a.K.S===0?3:4):
a.ya&&(wl(a,!1),a.K.S===0)?1:2}
function Dl(a,b){for(var c;;){if(a.B===0&&(zl(a),a.B===0)){if(b===0)return 1;break}a.T=0;c=sl(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(wl(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(wl(a,!0),a.K.S===0?3:4):a.ya&&(wl(a,!1),a.K.S===0)?1:2}
function El(a,b,c,d,e){this.ze=a;this.Le=b;this.Ne=c;this.Ke=d;this.we=e}
var Fl;Fl=[new El(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.B<=1){zl(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,wl(a,!1),a.K.S===0)return 1;if(a.v-a.va>=a.la-262&&(wl(a,!1),a.K.S===0))return 1}a.sa=0;if(b===4)return wl(a,!0),a.K.S===0?3:4;a.v>a.va&&wl(a,!1);return 1}),
new El(4,4,8,4,Al),new El(4,5,16,8,Al),new El(4,6,32,32,Al),new El(4,4,16,16,Bl),new El(8,16,32,32,Bl),new El(8,16,128,128,Bl),new El(8,32,128,256,Bl),new El(32,128,258,1024,Bl),new El(32,258,258,4096,Bl)];
function Gl(){this.K=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Ub=this.za=0;this.H=null;this.Ba=0;this.method=8;this.Ab=-1;this.cb=this.kd=this.la=0;this.window=null;this.Td=0;this.head=this.Ia=null;this.Bd=this.vd=this.strategy=this.level=this.Qc=this.zd=this.wa=this.B=this.Cb=this.v=this.jb=this.Ed=this.T=this.va=this.Ma=this.La=this.Mc=this.pc=this.R=0;this.ra=new N.Ja(1146);this.fb=new N.Ja(122);this.ja=new N.Ja(78);ul(this.ra);ul(this.fb);ul(this.ja);this.od=this.ic=this.qc=
null;this.Ka=new N.Ja(16);this.da=new N.Ja(573);ul(this.da);this.yb=this.Na=0;this.depth=new N.Ja(573);ul(this.depth);this.ia=this.oa=this.sa=this.matches=this.Gb=this.Oa=this.Nb=this.ya=this.Rb=this.Oc=0}
function Hl(a,b){if(!a||!a.state||b>5||b<0)return a?tl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return tl(a,a.S===0?-5:-2);c.K=a;var d=c.Ab;c.Ab=b;if(c.status===42)if(c.wrap===2)a.I=0,O(c,31),O(c,139),O(c,8),c.H?(O(c,(c.H.text?1:0)+(c.H.Va?2:0)+(c.H.extra?4:0)+(c.H.name?8:0)+(c.H.comment?16:0)),O(c,c.H.time&255),O(c,c.H.time>>8&255),O(c,c.H.time>>16&255),O(c,c.H.time>>24&255),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,c.H.os&255),c.H.extra&&c.H.extra.length&&
(O(c,c.H.extra.length&255),O(c,c.H.extra.length>>8&255)),c.H.Va&&(a.I=Hk(a.I,c.aa,c.pending,0)),c.Ba=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,3),c.status=113);else{var e=8+(c.kd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;xl(c,e+(31-e%31));c.v!==0&&(xl(c,a.I>>>16),xl(c,a.I&65535));a.I=1}if(c.status===69)if(c.H.extra){for(e=c.pending;c.Ba<(c.H.extra.length&65535)&&(c.pending!==c.za||
(c.H.Va&&c.pending>e&&(a.I=Hk(a.I,c.aa,c.pending-e,e)),vl(a),e=c.pending,c.pending!==c.za));)O(c,c.H.extra[c.Ba]&255),c.Ba++;c.H.Va&&c.pending>e&&(a.I=Hk(a.I,c.aa,c.pending-e,e));c.Ba===c.H.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.H.name){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=Hk(a.I,c.aa,c.pending-e,e)),vl(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.H.name.length?c.H.name.charCodeAt(c.Ba++)&255:0;O(c,f)}while(f!==0);c.H.Va&&c.pending>
e&&(a.I=Hk(a.I,c.aa,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.H.comment){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=Hk(a.I,c.aa,c.pending-e,e)),vl(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.H.comment.length?c.H.comment.charCodeAt(c.Ba++)&255:0;O(c,f)}while(f!==0);c.H.Va&&c.pending>e&&(a.I=Hk(a.I,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.H.Va?(c.pending+2>c.za&&vl(a),c.pending+2<=c.za&&(O(c,
a.I&255),O(c,a.I>>8&255),a.I=0,c.status=113)):c.status=113);if(c.pending!==0){if(vl(a),a.S===0)return c.Ab=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return tl(a,-5);if(c.status===666&&a.na!==0)return tl(a,-5);if(a.na!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?Dl(c,b):c.strategy===3?Cl(c,b):Fl[c.level].we(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.Ab=-1),0;if(d===2&&(b===1?(dl(c,2,3),el(c,256,Sk),c.ia===16?(cl(c,c.oa),c.oa=0,c.ia=0):c.ia>=
8&&(c.aa[c.pending++]=c.oa&255,c.oa>>=8,c.ia-=8)):b!==5&&(dl(c,0,3),jl(c,0,0),b===3&&(ul(c.head),c.B===0&&(c.v=0,c.va=0,c.sa=0))),vl(a),a.S===0))return c.Ab=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(O(c,a.I&255),O(c,a.I>>8&255),O(c,a.I>>16&255),O(c,a.I>>24&255),O(c,a.nb&255),O(c,a.nb>>8&255),O(c,a.nb>>16&255),O(c,a.nb>>24&255)):(xl(c,a.I>>>16),xl(c,a.I&65535));vl(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var Il={};Il=function(){this.input=null;this.nb=this.na=this.lb=0;this.output=null;this.hd=this.S=this.Eb=0;this.msg="";this.state=null;this.Hc=2;this.I=0};var Jl=Object.prototype.toString;
function Kl(a){if(!(this instanceof Kl))return new Kl(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.K=new Il;this.K.S=0;var b=this.K;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=tl(b,-2);else{e===8&&(e=9);var k=new Gl;b.state=k;k.K=b;k.wrap=h;k.H=null;k.kd=e;k.la=1<<k.kd;k.cb=k.la-1;k.Mc=f+7;k.pc=1<<k.Mc;k.La=k.pc-1;k.Ma=~~((k.Mc+3-1)/3);k.window=new N.pb(k.la*2);k.head=new N.Ja(k.pc);k.Ia=new N.Ja(k.la);k.Rb=1<<f+6;k.za=k.Rb*4;k.aa=new N.pb(k.za);k.Nb=1*k.Rb;k.Oc=3*k.Rb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.nb=b.hd=0;b.Hc=2;c=b.state;c.pending=0;c.Ub=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.I=c.wrap===2?
0:1;c.Ab=0;if(!rl){d=Array(16);for(f=g=0;f<28;f++)for(Wk[f]=g,e=0;e<1<<Ok[f];e++)Vk[g++]=f;Vk[g-1]=f;for(f=g=0;f<16;f++)for(Xk[f]=g,e=0;e<1<<Pk[f];e++)Uk[g++]=f;for(g>>=7;f<30;f++)for(Xk[f]=g<<7,e=0;e<1<<Pk[f]-7;e++)Uk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Sk[e*2+1]=8,e++,d[8]++;for(;e<=255;)Sk[e*2+1]=9,e++,d[9]++;for(;e<=279;)Sk[e*2+1]=7,e++,d[7]++;for(;e<=287;)Sk[e*2+1]=8,e++,d[8]++;gl(Sk,287,d);for(e=0;e<30;e++)Tk[e*2+1]=5,Tk[e*2]=fl(e,5);Zk=new Yk(Sk,Ok,257,286,15);$k=new Yk(Tk,
Pk,0,30,15);al=new Yk([],Qk,0,19,7);rl=!0}c.qc=new bl(c.ra,Zk);c.ic=new bl(c.fb,$k);c.od=new bl(c.ja,al);c.oa=0;c.ia=0;hl(c);c=0}else c=tl(b,-2);c===0&&(b=b.state,b.Td=2*b.la,ul(b.head),b.Qc=Fl[b.level].Le,b.vd=Fl[b.level].ze,b.Bd=Fl[b.level].Ne,b.zd=Fl[b.level].Ke,b.v=0,b.va=0,b.B=0,b.sa=0,b.T=b.wa=2,b.jb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(Mk[b]);a.header&&(b=this.K)&&b.state&&b.state.wrap===2&&(b.state.H=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=Fk(a.dictionary):
Jl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.K;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.I=Gk(a.I,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(ul(l.head),l.v=0,l.va=0,l.sa=0),c=new N.pb(l.la),N.tb(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.na;d=a.lb;e=a.input;a.na=g;a.lb=0;a.input=f;for(zl(l);l.B>=3;){f=l.v;g=l.B-2;do l.R=(l.R<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.cb]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.B=2;zl(l)}l.v+=l.B;l.va=l.v;l.sa=l.B;l.B=0;l.T=l.wa=2;l.jb=0;a.lb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Mk[b]);this.sh=!0}}
Kl.prototype.push=function(a,b){var c=this.K,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=Fk(a):Jl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.lb=0;c.na=c.input.length;do{c.S===0&&(c.output=new N.pb(d),c.Eb=0,c.S=d);a=Hl(c,e);if(a!==1&&a!==0)return Ll(this,a),this.ended=!0,!1;if(c.S===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=N.cd(c.output,c.Eb);b=f;f=f.length;if(f<65537&&(b.subarray&&Ek||!b.subarray))b=
String.fromCharCode.apply(null,N.cd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.cd(c.output,c.Eb),this.chunks.push(b)}while((c.na>0||c.S===0)&&a!==1);if(e===4)return(c=this.K)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=tl(c,-2):(c.state=null,a=d===113?tl(c,-3):0)):a=-2,Ll(this,a),this.ended=!0,a===0;e===2&&(Ll(this,0),c.S=0);return!0};
function Ll(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):N.td(a.chunks));a.chunks=[];a.err=b;a.msg=a.K.msg}
function Ml(a,b){b=b||{};b.gzip=!0;b=new Kl(b);b.push(a,!0);if(b.err)throw b.msg||Mk[b.err];return b.result}
;function Nl(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Db(a):null:null}
function Ol(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?kb(a):null:null}
;function Pl(a){return kb(a===null?"null":a===void 0?"undefined":a)}
;function Ql(a){this.name=a}
;var Rl=new Ql("rawColdConfigGroup");var Sl=new Ql("rawHotConfigGroup");function Tl(a){this.F=J(a)}
w(Tl,L);function Ul(a){this.F=J(a)}
w(Ul,L);Ul.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new xd(a,wd):zd||(zd=new xd(null,wd));else if(a.constructor!==xd)if(vd(a))a=a.length?new xd(new Uint8Array(a),wd):zd||(zd=new xd(null,wd));else throw Error();return ff(this,1,a)};var Vl=new Ql("continuationCommand");var Wl=new Ql("webCommandMetadata");var Xl=new Ql("signalServiceEndpoint");var Yl={Tf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Qf:"EMBEDDED_PLAYER_MODE_DEFAULT",Sf:"EMBEDDED_PLAYER_MODE_PFP",Rf:"EMBEDDED_PLAYER_MODE_PFL"};var Zl=new Ql("feedbackEndpoint");var fe={Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED"};var $l=new Ql("shareEndpoint"),am=new Ql("shareEntityEndpoint"),bm=new Ql("shareEntityServiceEndpoint"),cm=new Ql("webPlayerShareEntityServiceEndpoint");var dm=new Ql("playlistEditEndpoint");var em=new Ql("modifyChannelNotificationPreferenceEndpoint");var fm=new Ql("unsubscribeEndpoint");var gm=new Ql("subscribeEndpoint");function hm(){var a=im;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function jm(a){D("yt.ads.biscotti.lastId_",a)}
;function km(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var lm=C.window,mm,nm,om=(lm==null?void 0:(mm=lm.yt)==null?void 0:mm.config_)||(lm==null?void 0:(nm=lm.ytcfg)==null?void 0:nm.data_)||{};D("yt.config_",om);function pm(){km(om,arguments)}
function P(a,b){return a in om?om[a]:b}
function qm(a){var b=om.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var rm=[];function sm(a){rm.forEach(function(b){return b(a)})}
function tm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){um(b)}}:a}
function um(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),pm("ERRORS",b));sm(a)}
function wm(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),pm("ERRORS",f))}
;var xm=/^[\w.]*$/,ym={q:!0,search_query:!0};function zm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=Am(f[0]||""),h=Am(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Ub(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(zm);l.args=[{key:m,value:f[1],query:a,method:Bm===n?"unchanged":n}];ym.hasOwnProperty(m)||wm(l)}}return c}
var Bm=String(zm);function Cm(a){var b=[];sg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Nb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Dm(a){a.charAt(0)==="?"&&(a=a.substring(1));return zm(a,"&")}
function Em(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),Dm(a.length>1?a[1]:a[0])):{}}
function Fm(a,b){return Gm(a,b||{},!0)}
function Gm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Dm(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return jc(a,e)+d}
function Hm(a){if(!b)var b=window.location.href;var c=cc(1,a),d=dc(a);c&&d?(a=a.match(ac),b=b.match(ac),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?dc(b)===d&&(Number(cc(4,b))||null)===(Number(cc(4,a))||null):!0;return a}
function Am(a){return a&&a.match(xm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Im(a){var b=Jm;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Uj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Pa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Mj:g;try{var h=g.history.length}catch(Pa){h=0}e.u_his=h;var k;e.u_h=(k=Mj.screen)==null?void 0:k.height;var l;e.u_w=(l=Mj.screen)==null?void 0:l.width;var m;e.u_ah=(m=Mj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=Mj.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=Mj.screen)==null?void 0:p.colorDepth}catch(Pa){}h=b.h;try{var t=h.screenX;var u=h.screenY}catch(Pa){}try{var x=h.outerWidth;var z=h.outerHeight}catch(Pa){}try{var H=h.innerWidth;var K=h.innerHeight}catch(Pa){}try{var da=h.screenLeft;var ea=h.screenTop}catch(Pa){}try{H=h.innerWidth,K=h.innerHeight}catch(Pa){}try{var Oa=h.screen.availWidth;var Ob=h.screen.availTop}catch(Pa){}t=[da,ea,t,u,Oa,Ob,x,z,H,K];try{var ka=(b.h.top||window).document,Ya=
ka.compatMode=="CSS1Compat"?ka.documentElement:ka.body;var Qa=(new rg(Ya.clientWidth,Ya.clientHeight)).round()}catch(Pa){Qa=new rg(-12245933,-12245933)}ka=Qa;Qa={};var Ra=Ra===void 0?C:Ra;Ya=new ak;"SVGElement"in Ra&&"createElementNS"in Ra.document&&Ya.set(0);u=Rj();u["allow-top-navigation-by-user-activation"]&&Ya.set(1);u["allow-popups-to-escape-sandbox"]&&Ya.set(2);Ra.crypto&&Ra.crypto.subtle&&Ya.set(3);"TextDecoder"in Ra&&"TextEncoder"in Ra&&Ya.set(4);Ra=bk(Ya);Qa.bc=Ra;Qa.bih=ka.height;Qa.biw=
ka.width;Qa.brdim=t.join();b=b.i;b=(Qa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Qa.wgl=!!Mj.WebGLRenderingContext,Qa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Jm=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Cm(Im(a))});ab();navigator.userAgent.indexOf(" (CrKey ");var Km="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Lm(){if(!Km)return null;var a=Km();return"open"in a?a:null}
function Mm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Nm(a,b){typeof a==="function"&&(a=tm(a));return window.setTimeout(a,b)}
;var Om="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ra(Om),["client_dev_set_cookie"]);function R(a){a=Pm(a);return typeof a==="string"&&a==="false"?!1:!!a}
function S(a,b){a=Pm(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Pm(a){return P("EXPERIMENT_FLAGS",{})[a]}
function Qm(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Rm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Sm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ra(Om)),Tm=!1;function Um(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&tm(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=Lm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=Vm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Wm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){wm(n)}}l.send(d);return l}
function Wm(a,b){b=b===void 0?{}:b;var c=Hm(a),d=P("INNERTUBE_CLIENT_NAME"),e=R("web_ajax_ignore_global_headers_if_set"),f;for(f in Rm){var g=P(Rm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=P("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(dc(a)?!1:!0))){k=a;var l;if(l=R("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=dc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=bc(cc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!dc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!dc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&dc(a)||(b["X-YouTube-Ad-Signals"]=Cm(Im()));return b}
function Xm(a,b){b.method="POST";b.postParams||(b.postParams={});return Ym(a,b)}
function Ym(a,b){var c=b.format||"JSON";a=Zm(a,b);var d=$m(a,b),e=!1,f=an(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Mm(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=bn(a,c,k,b.convertToSafeHtml);l&&(l=cn(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Nm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Zm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Fm(a,b);return a}
function $m(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||dc(a)&&!b.withCredentials&&dc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Dm(e),Cg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):ic(e));f=e||f&&!vg(f);!Tm&&f&&b.method!=="POST"&&(Tm=!0,um(Error("AJAX request with postData should use POST")));return e}
function bn(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,wm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?dn(a):null)e={},Nb(a.getElementsByTagName("*"),function(g){e[g.tagName]=en(g)})}d&&fn(e);
return e}
function fn(a){if(Sa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=ib();d=new Ab(e?e.createHTML(d):d);a[c]=d}else fn(a[b])}}
function cn(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function dn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function en(a){var b="";Nb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Vm(a){var b=window.location.search,c=dc(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Hm(a)&&(c=document.location.hostname);var d=bc(cc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Dm(b),f={};Nb(Sm,function(g){e[g]&&(f[g]=e[g])});
return Gm(a,f||{},!1)}
var an=Um;var gn=[{Rc:function(a){return"Cannot read property '"+a.key+"'"},
vc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Rc:function(a){return"Cannot call '"+a.key+"'"},
vc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Rc:function(a){return a.key+" is not defined"},
vc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var jn={Ya:[],Ta:[{callback:hn,weight:500}]};function hn(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function kn(){this.Ta=[];this.Ya=[]}
var ln;function mn(){if(!ln){var a=ln=new kn;a.Ya.length=0;a.Ta.length=0;jn.Ya&&a.Ya.push.apply(a.Ya,jn.Ya);jn.Ta&&a.Ta.push.apply(a.Ta,jn.Ta)}return ln}
;var nn=new M;function on(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=pn(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=pn(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=pn(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function pn(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function qn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=rn(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=on(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?rn(f+".ve",g,h,k):0;d+=f;d+=rn(e,a[e],b,c);if(d>500)break}}else c[b]=sn(a),d+=c[b].length;else c[b]=sn(a),d+=c[b].length;return d}
function rn(a,b,c,d){c+="."+a;a=sn(b);d[c]=a;return c.length+a.length}
function sn(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function tn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function un(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function vn(){this.Md=!0}
function wn(){vn.h||(vn.h=new vn);return vn.h}
function xn(a,b){a={};var c=[];"USER_SESSION_ID"in om&&c.push({key:"u",value:P("USER_SESSION_ID")});if(c=kg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in om||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in om&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID"));return a}
;var yn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function zn(a,b,c,d,e){hg.set(""+a,b,{Tb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function An(a){return hg.get(""+a,void 0)}
function Bn(a,b,c){hg.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function Cn(){if(R("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!hg.isEnabled())return!1;if(hg.h.cookie)return!0;R("embeds_web_enable_cookie_detection_fix")?hg.set("TESTCOOKIESENABLED","1",{Tb:60,cf:"none",secure:!0}):hg.set("TESTCOOKIESENABLED","1",{Tb:60});if(hg.get("TESTCOOKIESENABLED")!=="1")return!1;hg.remove("TESTCOOKIESENABLED");return!0}
;var Dn=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Dn);function En(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=An(this.h);a&&this.parse(a)}
var Fn;function Gn(){Fn||(Fn=new En);return Fn}
r=En.prototype;r.get=function(a,b){Hn(a);In(a);a=Dn[a]!==void 0?Dn[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){Hn(a);In(a);if(b==null)throw Error("ExpectedNotNull");Dn[a]=b.toString()};
function Jn(a){return!!((Kn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){Hn(a);In(a);delete Dn[a]};
r.clear=function(){for(var a in Dn)delete Dn[a]};
function In(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Hn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Kn(a){a=Dn[a]!==void 0?Dn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Dn[d]=c.toString())}};var Ln={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Mn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Nn(){var a=C.navigator;return a?a.connection:void 0}
function On(){var a=Nn();if(a){var b=Ln[a.type||"unknown"]||"CONN_UNKNOWN";a=Ln[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Pn(){var a=Nn();if(a!=null&&a.effectiveType)return Mn.hasOwnProperty(a.effectiveType)?Mn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function T(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ra(b))}
w(T,Error);function Qn(){try{return Rn(),!0}catch(a){return!1}}
function Rn(a){if(P("DATASYNC_ID")!==void 0)return P("DATASYNC_ID");throw new T("Datasync ID not set",a===void 0?"unknown":a);}
;function Sn(){}
function Tn(a,b){return Zj.Ra(a,0,b)}
Sn.prototype.ma=function(a,b){return this.Ra(a,1,b)};
Sn.prototype.Jb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Un=S("web_emulated_idle_callback_delay",300),Vn=1E3/60-3,Wn=[8,5,4,3,2,1,0];
function Xn(a){a=a===void 0?{}:a;F.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.P=[];this.U=this.ha=!1;for(var b=y(Wn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.Fc=a.timeout||1;this.G=Vn;this.D=0;this.xa=this.Pe.bind(this);this.Ec=this.wf.bind(this);this.Pa=this.Zd.bind(this);this.Qa=this.Ae.bind(this);this.rb=this.We.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.pa=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
w(Xn,F);r=Xn.prototype;r.Jb=function(a){var b=ab();Yn(this,a);a=ab()-b;this.u||(this.G-=a)};
r.Ra=function(a,b,c){++this.Z;if(b===10)return this.Jb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Zn(this)!==this.D&&this.stop(),this.start()));return d};
r.qa=function(a){delete this.j[a]};
function $n(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function ao(a){return!a.isHidden()&&a.pa}
function Zn(a){if(a.i[8].length){if(a.U)return 4;if(ao(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?ao(a)?3:2:1;return 0}
r.Ha=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Yn(a,b){try{b()}catch(c){a.Ha(c)}}
function bo(a){for(var b=y(Wn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.Ae=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;co(this,b);this.ha=!1};
r.wf=function(){co(this)};
r.Zd=function(){eo(this)};
r.We=function(a){this.U=!0;var b=Zn(this);b===4&&b!==this.D&&(this.stop(),this.start());co(this,void 0,a);this.U=!1};
r.Pe=function(){this.isHidden()||eo(this);this.h&&(this.stop(),this.start())};
function eo(a){a.stop();a.u=!0;for(var b=ab(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Yn(a,e)}fo(a);a.u=!1;bo(a)&&a.start();b=ab()-b;a.G-=b}
function fo(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function co(a,b,c){a.U&&a.D===4&&a.h||a.stop();a.u=!0;b=ab()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Yn(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!(ab()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Yn(a,c)}while(c&&ab()<b)}a.u=!1;fo(a);a.G=Vn;bo(a)&&a.start()}
r.start=function(){this.Y=!1;if(this.h===0)switch(this.D=Zn(this),this.D){case 1:var a=this.Qa;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Un);break;case 2:this.h=window.setTimeout(this.Ec,this.Fc);break;case 3:this.h=window.requestAnimationFrame(this.rb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
r.pause=function(){this.stop();this.Y=!0};
r.stop=function(){if(this.h){switch(this.D){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.ba=function(){$n(this);this.stop();this.pa&&document.removeEventListener("visibilitychange",this.xa);F.prototype.ba.call(this)};var go=E("yt.scheduler.instance.timerIdMap_")||{},ho=S("kevlar_tuner_scheduler_soft_state_timer_ms",800),io=0,jo=0;function ko(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new Xn(P("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function lo(){mo();var a=E("ytglobal.schedulerInstanceInstance_");a&&(yc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function mo(){$n(ko());for(var a in go)go.hasOwnProperty(a)&&delete go[Number(a)]}
function no(a,b,c){if(!c)return c=c===void 0,-ko().Ra(a,b,c);var d=window.setTimeout(function(){var e=ko().Ra(a,b);go[d]=e},c);
return d}
function oo(a){ko().Jb(a)}
function po(a){var b=ko();if(a<0)b.qa(-a);else{var c=go[a];c?(b.qa(c),delete go[a]):window.clearTimeout(a)}}
function qo(){ro()}
function ro(){window.clearTimeout(io);ko().start()}
function so(){ko().pause();window.clearTimeout(io);io=window.setTimeout(qo,ho)}
function to(){window.clearTimeout(jo);jo=window.setTimeout(function(){uo(0)},ho)}
function uo(a){to();var b=ko();b.o=a;b.start()}
function vo(a){to();var b=ko();b.o>a&&(b.o=a,b.start())}
function wo(){window.clearTimeout(jo);var a=ko();a.o=0;a.start()}
;function xo(){Sn.apply(this,arguments)}
w(xo,Sn);function yo(){xo.h||(xo.h=new xo);return xo.h}
xo.prototype.Ra=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Nm(a,c||0)};
xo.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
xo.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
xo.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Zj=yo();
R("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",lo),D("yt.scheduler.instance.addJob",no),D("yt.scheduler.instance.addImmediateJob",oo),D("yt.scheduler.instance.cancelJob",po),D("yt.scheduler.instance.cancelAllJobs",mo),D("yt.scheduler.instance.start",ro),D("yt.scheduler.instance.pause",so),D("yt.scheduler.instance.setPriorityThreshold",uo),D("yt.scheduler.instance.enablePriorityThreshold",vo),D("yt.scheduler.instance.clearPriorityThreshold",wo),D("yt.scheduler.initialized",
!0));function zo(a){var b=new zk;this.h=(a=b.isAvailable()?a?new Ak(b,a):b:null)?new uk(a):null;this.i=document.domain||window.location.hostname}
zo.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Qi).serialize(b))}catch(f){return}else e=escape(b);zn(a,e,c,this.i)};
zo.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=An(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
zo.prototype.remove=function(a){this.h&&this.h.remove(a);Bn(a,"/",this.i)};var Ao=function(){var a;return function(){a||(a=new zo("ytidb"));return a}}();
function Bo(){var a;return(a=Ao())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Co=[],Do,Eo=!1;function Fo(){var a={};for(Do=new Go(a.handleError===void 0?Ho:a.handleError,a.logEvent===void 0?Io:a.logEvent);Co.length>0;)switch(a=Co.shift(),a.type){case "ERROR":Do.Ha(a.payload);break;case "EVENT":Do.logEvent(a.eventType,a.payload)}}
function Jo(a){Eo||(Do?Do.Ha(a):(Co.push({type:"ERROR",payload:a}),Co.length>10&&Co.shift()))}
function Ko(a,b){Eo||(Do?Do.logEvent(a,b):(Co.push({type:"EVENT",eventType:a,payload:b}),Co.length>10&&Co.shift()))}
;function Lo(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Mo(a){return a.substr(0,a.indexOf(":"))||a}
;var No=gd||hd;function Oo(a){var b=Rc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Po={},Qo=(Po.AUTH_INVALID="No user identifier specified.",Po.EXPLICIT_ABORT="Transaction was explicitly aborted.",Po.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Po.MISSING_INDEX="Index not created.",Po.MISSING_OBJECT_STORES="Object stores not created.",Po.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Po.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Po.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Po.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Po.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Po.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Po.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Po),Ro={},So=(Ro.AUTH_INVALID="ERROR",Ro.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ro.EXPLICIT_ABORT="IGNORED",Ro.IDB_NOT_SUPPORTED="ERROR",Ro.MISSING_INDEX=
"WARNING",Ro.MISSING_OBJECT_STORES="ERROR",Ro.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Ro.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Ro.QUOTA_EXCEEDED="WARNING",Ro.QUOTA_MAYBE_EXCEEDED="WARNING",Ro.UNKNOWN_ABORT="WARNING",Ro.INCOMPATIBLE_DB_VERSION="WARNING",Ro),To={},Uo=(To.AUTH_INVALID=!1,To.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,To.EXPLICIT_ABORT=!1,To.IDB_NOT_SUPPORTED=!1,To.MISSING_INDEX=!1,To.MISSING_OBJECT_STORES=!1,To.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,To.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,To.QUOTA_EXCEEDED=!1,To.QUOTA_MAYBE_EXCEEDED=!0,To.UNKNOWN_ABORT=!0,To.INCOMPATIBLE_DB_VERSION=!1,To);function Vo(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Qo[a]:c;d=d===void 0?So[a]:d;e=e===void 0?Uo[a]:e;T.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Vo.prototype)}
w(Vo,T);function Wo(a,b){Vo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Qo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Wo.prototype)}
w(Wo,Vo);function Xo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Xo.prototype)}
w(Xo,Error);var Yo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Zo(a,b,c,d){b=Mo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Vo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Vo("QUOTA_EXCEEDED",a);if(id&&e.name==="UnknownError")return new Vo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Xo)return new Vo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Yo.some(function(f){return e.message.includes(f)}))return new Vo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Vo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Dd:e.name})];e.level="WARNING";return e}
function $o(a,b,c){var d=Bo();return new Vo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function ap(a){if(!a)throw Error();throw a;}
function bp(a){return a}
function cp(a){this.h=a}
function dp(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
dp.all=function(a){return new dp(new cp(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={zb:0};f.zb<a.length;f={zb:f.zb},++f.zb)dp.resolve(a[f.zb]).then(function(g){return function(h){d[g.zb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
dp.resolve=function(a){return new dp(new cp(function(b,c){a instanceof dp?a.then(b,c):b(a)}))};
dp.reject=function(a){return new dp(new cp(function(b,c){c(a)}))};
dp.prototype.then=function(a,b){var c=this,d=a!=null?a:bp,e=b!=null?b:ap;return new dp(new cp(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){ep(c,c,d,f,g)}),c.i.push(function(){fp(c,c,e,f,g)})):c.state.status==="FULFILLED"?ep(c,c,d,f,g):c.state.status==="REJECTED"&&fp(c,c,e,f,g)}))};
dp.prototype.catch=function(a){return this.then(void 0,a)};
function ep(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof dp?gp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function fp(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof dp?gp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function gp(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof dp?gp(a,b,f,d,e):d(f)},function(f){e(f)})}
;function hp(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function ip(a){return new Promise(function(b,c){hp(a,b,c)})}
function jp(a){return new dp(new cp(function(b,c){hp(a,b,c)}))}
;function kp(a,b){return new dp(new cp(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var lp=window,U=lp.ytcsi&&lp.ytcsi.now?lp.ytcsi.now:lp.performance&&lp.performance.timing&&lp.performance.now&&lp.performance.timing.navigationStart?function(){return lp.performance.timing.navigationStart+lp.performance.now()}:function(){return(new Date).getTime()};function mp(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
r=mp.prototype;r.add=function(a,b,c){return np(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return np(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return np(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function op(a,b,c){a=a.h.createObjectStore(b,c);return new pp(a)}
r.delete=function(a,b){return np(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return np(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function qp(a,b,c){return np(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return jp(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function np(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,u,x;return A(function(z){switch(z.h){case 1:var H={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){z.A(4);break}g++;k=Math.round(U());za(z,5);l=a.h.transaction(b,e.mode);H=z.yield;var K=new rp(l);K=sp(K,d);return H.call(z,K,7);case 7:return m=z.i,n=Math.round(U()),tp(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:p=Ba(z);t=Math.round(U());u=Zo(p,
a.h.name,b.join(),a.h.version);if((x=u instanceof Vo&&!u.h)||g>=f)tp(a,k,t,g,u,b.join(),e),h=u;z.A(2);break;case 4:return z.return(Promise.reject(h))}})}
function tp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Vo&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Ko("QUOTA_EXCEEDED",{dbName:Mo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Vo&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Ko("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),up(a,!1,d,f,b,g.tag),Jo(e)):up(a,!0,d,f,b,g.tag)}
function up(a,b,c,d,e,f){Ko("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function pp(a){this.h=a}
r=pp.prototype;r.add=function(a,b){return jp(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return jp(this.h.clear()).then(function(){})};
function vp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return jp(this.h.count(a))};
function wp(a,b){return xp(a,{query:b},function(c){return c.delete().then(function(){return yp(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?wp(this,a):jp(this.h.delete(a))};
r.get=function(a){return jp(this.h.get(a))};
r.index=function(a){try{return new zp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Xo(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function xp(a,b,c){a=a.h.openCursor(b.query,b.direction);return Ap(a).then(function(d){return kp(d,c)})}
function rp(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Vo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function sp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return y(d).next().value})}
rp.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Vo("EXPLICIT_ABORT");};
rp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new pp(a),this.i.set(a,b));return b};
function zp(a){this.h=a}
r=zp.prototype;r.count=function(a){return jp(this.h.count(a))};
r.delete=function(a){return Bp(this,{query:a},function(b){return b.delete().then(function(){return yp(b)})})};
r.get=function(a){return jp(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function Bp(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return Ap(a).then(function(d){return kp(d,c)})}
function Cp(a,b){this.request=a;this.cursor=b}
function Ap(a){return jp(a).then(function(b){return b?new Cp(a,b):null})}
function yp(a){a.cursor.continue(void 0);return Ap(a.request)}
Cp.prototype.delete=function(){return jp(this.cursor.delete()).then(function(){})};
Cp.prototype.getValue=function(){return this.cursor.value};
Cp.prototype.update=function(a){return jp(this.cursor.update(a))};function Dp(a,b,c){return new Promise(function(d,e){function f(){p||(p=new mp(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.ce,k=c.blocking,l=c.tf,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&Ko("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Mo(a)});var u=f(),x=new rp(g.transaction);
m&&m(u,function(z){return t.oldVersion<z&&t.newVersion>=z},x);
x.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Ko("IDB_UNEXPECTEDLY_CLOSED",{dbName:Mo(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Ep(a,b,c){c=c===void 0?{}:c;return Dp(a,b,c)}
function Fp(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.ce)&&c.addEventListener("blocked",function(){e()}),g.yield(ip(c),4);
if(g.h!=2)return Aa(g,0);f=Ba(g);throw Zo(f,a,"",-1);})}
;function Gp(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
Gp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return Ep(a,b,c)};
Gp.prototype.delete=function(a){a=a===void 0?{}:a;return Fp(this.name,a)};
function Hp(a,b){return new Vo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Ip(a,b){if(!b)throw $o("openWithToken",Mo(a.name));return a.open()}
Gp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,u;return A(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",za(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=x.i,H=c.options,K=[],da=y(Object.keys(H.Fb)),ea=da.next();!ea.done;ea=da.next()){ea=ea.value;var Oa=H.Fb[ea],Ob=Oa.Xe===void 0?Number.MAX_VALUE:Oa.Xe;!(z.h.version>=Oa.Lb)||z.h.version>=Ob||z.h.objectStoreNames.contains(ea)||K.push(ea)}k=K;if(k.length===0){x.A(5);break}l=Object.keys(c.options.Fb);
m=h.objectStoreNames();if(c.u<S("ytidb_reopen_db_retries",0))return c.u++,h.close(),Jo(new Vo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<S("ytidb_remake_db_retries",1))){x.A(6);break}c.o++;return x.yield(c.delete(),7);case 7:return Jo(new Vo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Wo(m,l);case 5:return x.return(h);case 2:n=Ba(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.A(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=x.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,Hp(c,t);return x.return(p);case 8:throw b(),n instanceof
Error&&!R("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Zo(n,c.name,"",(u=c.options.version)!=null?u:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Hp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,tf:b,upgrade:this.options.upgrade};return this.h=d=a()};var Jp=new Gp("YtIdbMeta",{Fb:{databases:{Lb:1}},upgrade:function(a,b){b(1)&&op(a,"databases",{keyPath:"actualName"})}});
function Kp(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Ip(Jp,b),2);c=d.i;return d.return(np(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return jp(f.h.put(a,void 0)).then(function(){})})}))})}
function Lp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(Ip(Jp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Mp(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(Ip(Jp,b),2)):e.h!=3?(d=e.i,e.yield(np(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return xp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return yp(g)})}),3)):e.return(c)})}
function Np(a){return Mp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Op(a,b,c){return Mp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Pp(a){var b,c;return A(function(d){if(d.h==1)return b=Rn("YtIdbMeta hasAnyMeta other"),d.yield(Mp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Qp,Rp=new function(){}(new function(){});
function Sp(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=Bo();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=No)f=/WebKit\/([0-9]+)/.exec(Rc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Rc()),f=!(f&&parseInt(f[1],10)>=602));if(f||cd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Kp(d,Rp),4);case 4:return e.yield(Lp("yt-idb-test-do-not-use",Rp),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Tp(){if(Qp!==void 0)return Qp;Eo=!0;return Qp=Sp().then(function(a){Eo=!1;var b;if((b=Ao())!=null&&b.h){var c;b={hasSucceededOnce:((c=Bo())==null?void 0:c.hasSucceededOnce)||a};var d;(d=Ao())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Up(){return E("ytglobal.idbToken_")||void 0}
function Vp(){var a=Up();return a?Promise.resolve(a):Tp().then(function(b){(b=b?Rp:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Wp=0;function Xp(a,b){Wp||(Wp=Zj.ma(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Vp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(Op(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(Fp(f.actualName),7);case 7:return h.yield(Lp(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),Jo(g),d=!1;case 4:Zj.qa(Wp),Wp=0,d&&Xp(a,b),h.h=0}})}))}
function Yp(){var a;return A(function(b){return b.h==1?b.yield(Vp(),2):(a=b.i)?b.return(Pp(a)):b.return(!1)})}
new xj;function Zp(a){if(!Qn())throw a=new Vo("AUTH_INVALID",{dbName:a}),Jo(a),a;var b=Rn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function $p(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Vp(),2);case 2:g=m.i;if(!g)throw h=$o("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Jo(h),h;Lo(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Zp(a);za(m,3);return m.yield(Kp(k,g),5);case 5:return m.yield(Ep(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Ba(m),za(m,7),m.yield(Lp(k.actualName,
g),9);case 9:Aa(m,8);break;case 7:Ba(m);case 8:throw l;}})}
function aq(a,b,c){c=c===void 0?{}:c;return $p(a,b,!1,c)}
function bq(a,b,c){c=c===void 0?{}:c;return $p(a,b,!0,c)}
function cq(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Vp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Lo(a);d=Zp(a);return e.yield(Fp(d.actualName,b),3)}return e.yield(Lp(d.actualName,c),0)})}
function dq(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(Fp(d.actualName,b),2):e.yield(Lp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function eq(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Vp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Lo("LogsDatabaseV2");return d.yield(Np(b),3)}c=d.i;return d.yield(dq(c,a,b),0)})}
function fq(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Vp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Lo(a);return d.yield(Fp(a,b),3)}return d.yield(Lp(a,c),0)})}
;function gq(a,b){Gp.call(this,a,b);this.options=b;Lo(a)}
w(gq,Gp);function hq(a,b){var c;return function(){c||(c=new gq(a,b));return c}}
gq.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?bq:aq)(a,b,Object.assign({},c))};
gq.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?fq:cq)(this.name,a)};
function iq(a,b){return hq(a,b)}
;var jq={},kq=iq("ytGcfConfig",{Fb:(jq.coldConfigStore={Lb:1},jq.hotConfigStore={Lb:1},jq),shared:!1,upgrade:function(a,b){b(1)&&(vp(op(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),vp(op(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function lq(a){return Ip(kq(),a)}
function mq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(lq(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(qp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function nq(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(lq(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(qp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function oq(a){var b,c;return A(function(d){return d.h==1?d.yield(lq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(np(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return Bp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function pq(a){var b,c;return A(function(d){return d.h==1?d.yield(lq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(np(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return Bp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function qq(){F.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ra(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(qq,F);qq.prototype.ba=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;F.prototype.ba.call(this)};function rq(){this.h=0;this.i=new qq}
function sq(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:P("RAW_HOT_CONFIG_GROUP")}
function tq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!R("start_client_gcf")){g.A(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Up();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(pq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(mq(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function uq(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!R("start_client_gcf"))return h.A(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Up())?c?h.A(4):h.yield(oq(d),5):h.A(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(nq(c,b,g,d),0)})}
function vq(){if(!rq.h){var a=new rq;rq.h=a}a=rq.h;var b=U()-a.h;if(!(a.h!==0&&b<S("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
rq.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function wq(){return"INNERTUBE_API_KEY"in om&&"INNERTUBE_API_VERSION"in om}
function xq(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),Be:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),xd:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Dh:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),De:P("INNERTUBE_CONTEXT_HL"),Ce:P("INNERTUBE_CONTEXT_GL"),Ee:P("INNERTUBE_HOST_OVERRIDE")||"",Fe:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Eh:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function yq(a){var b={client:{hl:a.De,gl:a.Ce,clientName:a.xd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Be}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Qm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.xd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=un()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(R("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=On())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&
(a=Pn())&&b&&(b.client.effectiveConnectionType=a);R("start_client_gcf")&&(e=vq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=P("INNERTUBE_CONTEXT");var g;if(R("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(Dm(P("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function zq(a,b,c){c=c===void 0?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().th:(a=xn(wn()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var Aq=typeof TextEncoder!=="undefined"?new TextEncoder:null,Bq=Aq?function(a){return Aq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var Cq={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},Dq={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function Eq(a,b){this.version=a;this.args=b}
Eq.prototype.serialize=function(){return{version:this.version,args:this.args}};function Fq(a,b){this.topic=a;this.h=b}
Fq.prototype.toString=function(){return this.topic};var Gq=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.ac;M.prototype.publish=M.prototype.qb;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",Gq);var Hq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",Hq);var Iq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",Iq);var Jq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",Jq);
D("ytPubsub2Pubsub2SkipSubKey",null);function Kq(a,b){var c=Lq();c&&c.publish.call(c,a.toString(),a,b)}
function Mq(a){var b=Nq,c=Lq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Hq[d])try{if(f&&b instanceof Fq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Rd){var l=new h;h.Rd=l.version}var m=h.Rd}catch(z){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var u=Array(t);for(k=0;k<t;k++)u[k]=p[k];var x=u}else x=[];f=n.call(m,h,x)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){um(z)}},Jq[b.toString()]?E("yt.scheduler.instance")?Zj.ma(g):Nm(g,0):g())});
Hq[d]=!0;Iq[b.toString()]||(Iq[b.toString()]=[]);Iq[b.toString()].push(d);return d}
function Oq(){var a=Pq,b=Mq(function(c){a.apply(void 0,arguments);Qq(b)});
return b}
function Qq(a){var b=Lq();b&&(typeof a==="number"&&(a=[a]),Nb(a,function(c){b.unsubscribeByKey(c);delete Hq[c]}))}
function Lq(){return E("ytPubsub2Pubsub2Instance")}
;function Rq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Kq("meta_logging_csi_event",{timerName:a,Wh:b})}
;var Sq=void 0,Tq=void 0;function Uq(){Tq||(Tq=Ol(P("WORKER_SERIALIZATION_URL")));return Tq||void 0}
function Vq(){var a=Uq();Sq||a===void 0||(Sq=new Worker(lb(a),void 0));return Sq}
;var Wq=S("max_body_size_to_compress",5E5),Xq=S("min_body_size_to_compress",500),Yq=!0,Zq=0,$q=0,ar=S("compression_performance_threshold_lr",250),br=S("slow_compressions_before_abandon_count",4),cr=!1,dr=new Map,er=1,fr=!0;function gr(){if(typeof Worker==="function"&&Uq()&&!cr){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=dr.get(c.key);d&&(hr(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),dr.delete(c.key))}},b=Vq();
b&&(b.addEventListener("message",a),b.onerror=function(){dr.clear()},cr=!0)}}
function ir(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:U(),ticks:{},infos:{}};if(Yq)try{var g=jr(b);if(g!=null&&(g>Wq||g<Xq))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!fr||!R("initial_gzip_use_main_thread"))){cr||gr();var h=Vq();if(h&&!e){dr.set(er,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:er});er++;return}}var k=Ml(Bq(b));hr(k,f,a,c,d)}}catch(l){wm(l),d(a,c)}else d(a,c)}
function hr(a,b,c,d,e){fr=!1;var f=U();b.ticks.gelc=f;$q++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=ar&&(Zq++,R("abandon_compression_after_N_slow_zips")?$q===S("compression_disable_point")&&Zq>br&&(Yq=!1):Yq=!1);kr(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function lr(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Yq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=jr(g);if(h!=null&&(h>Wq||h<Xq))return a;c=b?{level:1}:void 0;f=Ml(Bq(g),c);var k=U();e.ticks.gelc=k;if(b){$q++;if((R("disable_compression_due_to_performance_degredation")||R("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=ar)if(Zq++,R("abandon_compression_after_N_slow_zips")||R("abandon_compression_after_N_slow_zips_lr")){b=Zq/$q;var l=br/S("compression_disable_point");$q>0&&$q%S("compression_disable_point")===0&&b>=l&&(Yq=!1)}else Yq=!1;kr(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return wm(m),a}}else return a}
function jr(a){try{return(new Blob(a.split(""))).size}catch(b){return wm(b),null}}
function kr(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||Rq("gel_compression",a,{sampleRate:.1})}
;function mr(a){a=Object.assign({},a);delete a.Authorization;var b=kg();if(b){var c=new dk;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=ld(c.digest(),3)}return a}
;var nr;function or(){nr||(nr=new zo("yt.innertube"));return nr}
function pr(a,b,c,d){if(d)return null;d=or().get("nextId",!0)||1;var e=or().get("requests",!0)||{};e[d]={method:a,request:b,authState:mr(c),requestTime:Math.round(U())};or().set("nextId",d+1,86400,!0);or().set("requests",e,86400,!0);return d}
function qr(a){var b=or().get("requests",!0)||{};delete b[a];or().set("requests",b,86400,!0)}
function rr(a){var b=or().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(U())-d.requestTime<6E4)){var e=d.authState,f=mr(zq(!1));yg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),sr(a,d.method,e,{}));delete b[c]}}or().set("requests",b,86400,!0)}}
;function tr(a){this.dc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.xb=function(){};
this.now=Date.now;this.Pb=!1;var b;this.Nd=(b=a.Nd)!=null?b:100;var c;this.Id=(c=a.Id)!=null?c:1;var d;this.Gd=(d=a.Gd)!=null?d:2592E6;var e;this.Fd=(e=a.Fd)!=null?e:12E4;var f;this.Hd=(f=a.Hd)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.jc=!!a.jc;var h;this.hc=(h=a.hc)!=null?h:.1;var k;this.xc=(k=a.xc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.xb&&(this.xb=a.xb);a.Pb&&(this.Pb=a.Pb);a.dc&&(this.dc=a.dc);this.W=a.W;this.Ca=a.Ca;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Xc=a.Xc;this.Uc=a.Uc;ur(this)&&(!this.W||this.W("networkless_logging"))&&vr(this)}
function vr(a){ur(a)&&!a.Pb&&(a.h=!0,a.jc&&Math.random()<=a.hc&&a.ga.ee(a.V),wr(a),a.fa.ta()&&a.Zb(),a.fa.listen(a.Xc,a.Zb.bind(a)),a.fa.listen(a.Uc,a.pd.bind(a)))}
r=tr.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(ur(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.V).then(function(e){d.id=e;c.fa.ta()&&xr(c,d)}).catch(function(e){xr(c,d);
yr(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(ur(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.V).catch(function(l){yr(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
yr(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(ur(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.wb(d.id,c.V):e=!0;c.fa.kb&&c.W&&c.W("vss_network_hint")&&c.fa.kb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.V).then(function(g){d.id=g;e&&c.ga.wb(d.id,c.V)}).catch(function(g){yr(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.Zb=function(){var a=this;if(!ur(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.ma(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.ga.ud("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(xr(a,b),3):(a.pd(),c.return());a.i&&(a.i=0,a.Zb());c.h=0})},this.Nd))};
r.pd=function(){this.Ca.qa(this.i);this.i=0};
function xr(a,b){var c;return A(function(d){switch(d.h){case 1:if(!ur(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.A(2);break}return d.yield(a.ga.Je(b.id,a.V),3);case 3:(c=d.i)||a.xb(Error("The request cannot be found in the database."));case 2:if(zr(a,b,a.Gd)){d.A(4);break}a.xb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.A(5);break}return d.yield(a.ga.wb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=Ar(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||b.id===void 0){d.A(8);break}return d.yield(a.ga.wb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Ar(a,b){if(!ur(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=Br(f);(h=Cr(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.xc)){m.A(2);break}if(!a.fa.Cc){m.A(3);break}return m.yield(a.fa.Cc(),3);case 3:if(a.fa.ta()){m.A(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.A(6);
break}return m.yield(a.ga.Yc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.xc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.A(8);break}return b.sendCount<a.Id?m.yield(a.ga.Yc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.ga.wb(b.id,a.V),8);case 12:a.Ca.ma(function(){a.fa.ta()&&a.Zb()},a.Hd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.A(2):h.yield(a.ga.wb(b.id,a.V),2);a.fa.kb&&a.W&&a.W("vss_network_hint")&&a.fa.kb(!0);d(e,f);h.h=0})};
return b}
function zr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function wr(a){if(!ur(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.ud("QUEUED",a.V).then(function(b){b&&!zr(a,b,a.Fd)?a.Ca.ma(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.A(2):c.yield(a.ga.Yc(b.id,a.V),2);wr(a);c.h=0})}):a.fa.ta()&&a.Zb()})}
function yr(a,b){a.Ud&&!a.fa.ta()?a.Ud(b):a.handleError(b)}
function ur(a){return!!a.V||a.dc}
function Br(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Cr(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Dr;
function Er(){if(Dr)return Dr();var a={};Dr=iq("LogsDatabaseV2",{Fb:(a.LogsRequestsStore={Lb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&op(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),vp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Dr()}
;function Fr(a){return Ip(Er(),a)}
function Gr(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Fr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(qp(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();Hr(c);return g.return(f)})}
function Ir(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(Fr(b),2);if(m.h!=3)return d=m.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k="prev",R("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(np(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return Bp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=U();Hr(c);return m.return(l)})}
function Jr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Fr(b),2);c=d.i;return d.return(np(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",jp(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Kr(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(Fr(b),2);e=f.i;return f.return(np(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),jp(h.h.put(k,void 0)).then(function(){return k})):dp.resolve(void 0)})}))})}
function Lr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Fr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Mr(a){var b,c;return A(function(d){if(d.h==1)return d.yield(Fr(a),2);b=d.i;c=U()-2592E6;return d.yield(np(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return xp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return yp(f)})})}),0)})}
function Nr(){A(function(a){return a.yield(eq(),0)})}
function Hr(a){R("nwl_csi_killswitch")||Rq("networkless_performance",a,{sampleRate:1})}
;var Or={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,
fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,
castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515};var Pr={},Qr=iq("ServiceWorkerLogsDatabase",{Fb:(Pr.SWHealthLog={Lb:1},Pr),shared:!0,upgrade:function(a,b){b(1)&&vp(op(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Rr(a){return Ip(Qr(),a)}
function Sr(a){var b,c;A(function(d){if(d.h==1)return d.yield(Rr(a),2);b=d.i;c=U()-2592E6;return d.yield(np(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return xp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return yp(f)})})}),0)})}
function Tr(a){var b;return A(function(c){if(c.h==1)return c.yield(Rr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Ur={},Vr=0;function Wr(a){var b=b===void 0?{}:b;var c=new Image,d=""+Vr++;Ur[d]=c;c.onload=c.onerror=function(){delete Ur[d]};
b.Sh&&(c.referrerPolicy="no-referrer");c.src=a}
;var Xr;function Yr(){Xr||(Xr=new zo("yt.offline"));return Xr}
function Zr(a){if(R("offline_error_handling")){var b=Yr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Yr().set("errors",b,2592E3,!0)}}
;function $r(){this.h=new Map;this.i=!1}
function as(){if(!$r.h){var a=E("yt.networkRequestMonitor.instance")||new $r;D("yt.networkRequestMonitor.instance",a);$r.h=a}return $r.h}
$r.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
$r.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
$r.prototype.removeParams=function(a){return a.split("?")[0]};
$r.prototype.removeParams=$r.prototype.removeParams;$r.prototype.isEndpointCFR=$r.prototype.isEndpointCFR;$r.prototype.requestComplete=$r.prototype.requestComplete;$r.getInstance=as;function bs(){ci.call(this);var a=this;this.j=!1;this.h=Yj();this.h.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=Yr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new T(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;um(d)}Yr().set("errors",{},2592E3,!0)}}})}
w(bs,ci);function cs(){if(!bs.h){var a=E("yt.networkStatusManager.instance")||new bs;D("yt.networkStatusManager.instance",a);bs.h=a}return bs.h}
r=bs.prototype;r.ta=function(){return this.h.ta()};
r.kb=function(a){this.h.h=a};
r.ye=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.oe=function(){this.j=!0};
r.listen=function(a,b){return this.h.listen(a,b)};
r.Cc=function(a){a=Wj(this.h,a);a.then(function(b){R("use_cfr_monitor")&&as().requestComplete("generate_204",b)});
return a};
bs.prototype.sendNetworkCheckRequest=bs.prototype.Cc;bs.prototype.listen=bs.prototype.listen;bs.prototype.enableErrorFlushing=bs.prototype.oe;bs.prototype.getWindowStatus=bs.prototype.ye;bs.prototype.networkStatusHint=bs.prototype.kb;bs.prototype.isNetworkAvailable=bs.prototype.ta;bs.getInstance=cs;function ds(a){a=a===void 0?{}:a;ci.call(this);var b=this;this.h=this.u=0;this.j=cs();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){es(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){es(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){di(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){di(b,"publicytnetworkstatus-offline")})))}
w(ds,ci);ds.prototype.ta=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
ds.prototype.kb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
ds.prototype.Cc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&as().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.kb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function es(a,b){a.rateLimit?a.h?(Zj.qa(a.u),a.u=Zj.ma(function(){a.o!==b&&(di(a,b),a.o=b,a.h=U())},a.rateLimit-(U()-a.h))):(di(a,b),a.o=b,a.h=U()):di(a,b)}
;var gs;function hs(){var a=tr.call;gs||(gs=new ds({Jh:!0,Ah:!0}));a.call(tr,this,{ga:{ee:Mr,wb:Lr,ud:Ir,Je:Jr,Yc:Kr,set:Gr},fa:gs,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;wm(new T(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else um(b)},
xb:wm,sendFn:is,now:U,Ud:Zr,Ca:yo(),Xc:"publicytnetworkstatus-online",Uc:"publicytnetworkstatus-offline",jc:!0,hc:.1,xc:S("potential_esf_error_limit",10),W:R,Pb:!(Qn()&&js())});this.j=new xj;R("networkless_immediately_drop_all_requests")&&Nr();fq("LogsDatabaseV2")}
w(hs,tr);function ks(){var a=E("yt.networklessRequestController.instance");a||(a=new hs,D("yt.networklessRequestController.instance",a),R("networkless_logging")&&Vp().then(function(b){a.V=b;vr(a);a.j.resolve();a.jc&&Math.random()<=a.hc&&a.V&&Sr(a.V);R("networkless_immediately_drop_sw_health_store")&&ls(a)}));
return a}
hs.prototype.writeThenSend=function(a,b){b||(b={});b=ms(a,b);Qn()||(this.h=!1);tr.prototype.writeThenSend.call(this,a,b)};
hs.prototype.sendThenWrite=function(a,b,c){b||(b={});b=ms(a,b);Qn()||(this.h=!1);tr.prototype.sendThenWrite.call(this,a,b,c)};
hs.prototype.sendAndWrite=function(a,b){b||(b={});b=ms(a,b);Qn()||(this.h=!1);tr.prototype.sendAndWrite.call(this,a,b)};
hs.prototype.awaitInitialization=function(){return this.j.promise};
function ls(a){var b;A(function(c){if(!a.V)throw b=$o("clearSWHealthLogsDb"),b;return c.return(Tr(a.V).catch(function(d){a.handleError(d)}))})}
function is(a,b,c,d){d=d===void 0?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&ns(a,b);if(R("use_request_time_ms_header"))b.headers&&Hm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Um(a,void 0,"POST",f,void 0);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Um(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new qc({url:a});if(k.u?typeof k.i!=="string"||k.i.length===0?0:{version:3,le:k.i,be:pc(k.j,"act=1","ri=1",rc(k))}:k.M&&{version:4,le:pc(k.j,"dct=1","suid="+k.o,""),be:pc(k.j,"act=1","ri=1","suid="+k.o)}){var l=bc(cc(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(lc),p=kc(a,0,"ri",n);if(p<0)var t=null;else{var u=a.indexOf("&",p);if(u<0||u>n)u=n;t=decodeURIComponent(a.slice(p+3,u!==-1?u:0).replace(/\+/g," "))}m=t!=="1"}var x=
!m;break b}}catch(H){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(H){}z=!1}c=z?!0:!1}else c=!1;c||Wr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),ir(a,b.postBody,b,Ym,d)):ir(a,JSON.stringify(b.postParams),b,Xm,d):Ym(a,b)}
function ms(a,b){R("use_event_time_ms_header")&&Hm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(U())));return b}
function ns(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){as().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){as().requestComplete(a,!0);d(e,f)}}
function js(){return dc(document.location.toString())!=="www.youtube-nocookie.com"}
;var ps=!1,qs=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:ps};D("ytNetworklessLoggingInitializationOptions",qs);function rs(){var a;A(function(b){if(b.h==1)return b.yield(Vp(),2);a=b.i;if(!a||!Qn()&&!R("nwl_init_require_datasync_id_killswitch")||!js())return b.A(0);ps=!0;qs.isNwlInitialized=ps;return b.yield(ks().awaitInitialization(),0)})}
;function ss(a){var b=this;this.config_=null;a?this.config_=a:wq()&&(this.config_=xq());Tn(function(){rr(b)},5E3)}
ss.prototype.isReady=function(){!this.config_&&wq()&&(this.config_=xq());return!!this.config_};
function sr(a,b,c,d){function e(n){n=n===void 0?!1:n;var p;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||R("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(p=pr(b,c,l,k)),p)){var t=g.onSuccess,u=g.onFetchSuccess;g.onSuccess=function(H,K){qr(p);t(H,K)};
c.onFetchSuccess=function(H,K){qr(p);u(H,K)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?ks().writeThenSend(m,g):ks().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var z=g.postBody;typeof z!=="string"&&(z=JSON.stringify(g.postBody));ir(m,z,g,Ym,x)}else ir(m,JSON.stringify(g.postParams),g,Xm,x)}else R("web_all_payloads_via_jspb")?Ym(m,g):Xm(m,g)}catch(H){if(H.name==="InvalidAccessError")p&&(qr(p),p=0),wm(Error("An extension is blocking network request."));else throw H;}p&&Tn(function(){rr(a)},5E3)}
!P("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&wm(new T("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new T("innertube xhrclient not ready",b,c,d);um(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Ee)&&(h=f);var k=a.config_.Fe||!1,l=zq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=Fm(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(E("ytNetworklessLoggingInitializationOptions")?qs.isNwlInitialized:ps)?Tp().then(function(n){e(n)}):e(!1)}
;var ts=0,us=ed?"webkit":dd?"moz":bd?"ms":ad?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++ts});var vs={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function As(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in vs||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Bs(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
As.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
As.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
As.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ug=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",ug);var Cs=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Cs);
function Ds(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return tg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Sa(e[4])&&Sa(d)&&yg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Es(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ds(a,b,c,d);if(e)return e;e=++Cs.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new As(h);if(!Ig(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new As(h);
h.currentTarget=a;return c.call(a,h)};
g=tm(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Fs()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ug[e]=[a,b,c,g,d];return e}
function Gs(a){a&&(typeof a=="string"&&(a=[a]),Nb(a,function(b){if(b in ug){var c=ug[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Fs()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ug[b]}}))}
var Fs=si(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Hs(a){this.G=a;this.h=null;this.o=0;this.D=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=Es(window,"mousemove",Za(this.Y,this));a=Za(this.P,this);typeof a==="function"&&(a=tm(a));this.Z=window.setInterval(a,25)}
cb(Hs,F);Hs.prototype.Y=function(a){a.h===void 0&&Bs(a);var b=a.h;a.i===void 0&&Bs(a);this.h=new qg(b,a.i)};
Hs.prototype.P=function(){if(this.h){var a=U();if(this.o!=0){var b=this.D,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.D=this.h;this.j=(this.j+1)%4}};
Hs.prototype.ba=function(){window.clearInterval(this.Z);Gs(this.U)};var Is={};
function Js(a){var b=a===void 0?{}:a;a=b.Ue===void 0?!1:b.Ue;b=b.pe===void 0?!0:b.pe;if(E("_lact",window)==null){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&Ks();Es(document,"keydown",Ks);Es(document,"keyup",Ks);Es(document,"mousedown",Ks);Es(document,"mouseup",Ks);a?Es(window,"touchmove",function(){Ls("touchmove",200)},{passive:!0}):(Es(window,"resize",function(){Ls("resize",200)}),b&&Es(window,"scroll",function(){Ls("scroll",200)}));
new Hs(function(){Ls("mouse",100)});
Es(document,"touchstart",Ks,{passive:!0});Es(document,"touchend",Ks,{passive:!0})}}
function Ls(a,b){Is[a]||(Is[a]=!0,Zj.ma(function(){Ks();Is[a]=!1},b))}
function Ks(){E("_lact",window)==null&&Js();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Ms(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Ns=C.ytPubsubPubsubInstance||new M,Os=C.ytPubsubPubsubSubscribedKeys||{},Ps=C.ytPubsubPubsubTopicToKeys||{},Qs=C.ytPubsubPubsubIsSynchronous||{};function Rs(a,b){var c=Ss();if(c&&b){var d=c.subscribe(a,function(){function e(){Os[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Qs[a]?e():Nm(e,0)}catch(g){um(g)}},void 0);
Os[d]=!0;Ps[a]||(Ps[a]=[]);Ps[a].push(d);return d}return 0}
function Ts(a){var b=Ss();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Nb(a,function(c){b.unsubscribeByKey(c);delete Os[c]}))}
function Us(a,b){var c=Ss();c&&c.publish.apply(c,arguments)}
function Vs(a){var b=Ss();if(b)if(b.clear(a),a)Ws(a);else for(var c in Ps)Ws(c)}
function Ss(){return C.ytPubsubPubsubInstance}
function Ws(a){Ps[a]&&(a=Ps[a],Nb(a,function(b){Os[b]&&delete Os[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.ac;M.prototype.publish=M.prototype.qb;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",Ns);D("ytPubsubPubsubTopicToKeys",Ps);D("ytPubsubPubsubIsSynchronous",Qs);D("ytPubsubPubsubSubscribedKeys",Os);var Xs=Symbol("injectionDeps");function Ys(a){this.name=a}
Ys.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Zs(a){this.key=a}
function $s(){this.i=new Map;this.j=new Map;this.h=new Map}
function at(a,b){a.i.set(b.zc,b);var c=a.j.get(b.zc);if(c)try{c.Rh(a.resolve(b.zc))}catch(d){c.Ph(d)}}
$s.prototype.resolve=function(a){return a instanceof Zs?bt(this,a.key,[],!0):bt(this,a,[])};
function bt(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Qd!==void 0)var e=d.Qd;else if(d.Bf)e=d[Xs]?ct(a,d[Xs],c):[],e=d.Bf.apply(d,ra(e));else if(d.Pd){e=d.Pd;var f=e[Xs]?ct(a,e[Xs],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ra(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Vh||a.h.set(b,e);return e}
function ct(a,b,c){return b?b.map(function(d){return d instanceof Zs?bt(a,d.key,c,!0):bt(a,d,c)}):[]}
;var dt;function et(){dt||(dt=new $s);return dt}
;var ft=window;function gt(){var a,b;return"h5vcc"in ft&&((a=ft.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=ft.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in ft&&ft.performance.mark&&ft.performance.measure?2:0}
function ht(a){var b=gt();switch(b){case 1:ft.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:ft.performance.mark(a+"-start");break;case 0:break;default:zb(b,"unknown trace type")}}
function jt(a){var b=gt();switch(b){case 1:ft.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";ft.performance.mark(c);ft.performance.measure(a,b,c);break;case 0:break;default:zb(b,"unknown trace type")}}
;var kt=R("web_enable_lifecycle_monitoring")&&gt()!==0,lt=R("web_enable_lifecycle_monitoring");function mt(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function nt(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?yo():d;this.j=c;this.scheduler=d;this.i=new xj;this.h=a;for(a={ib:0};a.ib<this.h.length;a={wc:void 0,ib:a.ib},a.ib++)a.wc=this.h[a.ib],c=function(e){return function(){e.wc.Nc();b.h[e.ib].yc=!0;b.h.every(function(f){return f.yc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.wc),d=this.scheduler.Ra(c,d),this.h[a.ib]=Object.assign({},a.wc,{Nc:c,
jobId:d})}
function ot(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.yc||(a.scheduler.qa(c.jobId),a.scheduler.Ra(c.Nc,10))}
nt.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.yc||this.scheduler.qa(b.jobId),b.yc=!0;this.i.resolve()};
nt.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function pt(a){this.state=a;this.plugins=[];this.o=void 0;this.D={};kt&&ht(this.state)}
r=pt.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;kt&&jt(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(ot(this.j),this.j=void 0);qt(this,a,b);this.state=a;kt&&ht(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(rt(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function rt(a,b){var c=b.filter(function(e){return st(a,e)===10}),d=b.filter(function(e){return st(a,e)!==10});
return a.D.Uh?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.af.apply(a,[c].concat(ra(e))),2);a.Kd.apply(a,[d].concat(ra(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.bf.apply(a,[c].concat(ra(e)));a.Kd.apply(a,[d].concat(ra(e)))}}
r.bf=function(a){for(var b=B.apply(1,arguments),c=yo(),d=y(a),e=d.next(),f={};!e.done;f={Qb:void 0},e=d.next())f.Qb=e.value,c.Jb(function(g){return function(){tt(g.Qb.name);ut(function(){return g.Qb.callback.apply(g.Qb,ra(b))});
vt(g.Qb.name)}}(f))};
r.af=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=yo(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.A(0);f.Xa=e.value;f.cc=void 0;g=function(k){return function(){tt(k.Xa.name);var l=ut(function(){return k.Xa.callback.apply(k.Xa,ra(b))});
ge(l)?k.cc=R("web_lifecycle_error_handling_killswitch")?l.then(function(){vt(k.Xa.name)}):l.then(function(){vt(k.Xa.name)},function(m){mt(m);
vt(k.Xa.name)}):vt(k.Xa.name)}}(f);
c.Jb(g);return f.cc?h.yield(f.cc,3):h.A(3)}f={Xa:void 0,cc:void 0};e=d.next();return h.A(2)})};
r.Kd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Nc:function(){tt(e.name);ut(function(){return e.callback.apply(e,ra(b))});
vt(e.name)},
priority:st(c,e)}});
d.length&&(this.j=new nt(d))};
function st(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function tt(a){kt&&a&&ht(a)}
function vt(a){kt&&a&&jt(a)}
function qt(a,b,c){lt&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(pt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function ut(a){if(R("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){mt(b)}}
;function wt(a){pt.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var xt;w(wt,pt);wt.prototype.i=function(a,b){var c=this;this.h=Tn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
wt.prototype.u=function(a,b){this.h&&(Zj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function zt(){xt||(xt=new wt);return xt}
;var At=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return At});function Bt(){this.store={};this.h={}}
Bt.prototype.storePayload=function(a,b){a=Ct(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);R("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
Bt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Dt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ra(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ra(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ra(this.smartExtractMatchingEntries(a))));return c};
Bt.prototype.extractMatchingEntries=function(a){a=Dt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ra(this.store[a[c]])),delete this.store[a[c]]);return b};
Bt.prototype.getSequenceCount=function(a){a=Dt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Dt(a,b){var c=Ct(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&Ct(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Et(b.auth,g[0])){var h=b.isJspb;Et(h===void 0?"undefined":h?"true":"false",g[1])&&Et(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),Et(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Et(a,b){return a===void 0||a==="undefined"?!0:a===b}
Bt.prototype.getSequenceCount=Bt.prototype.getSequenceCount;Bt.prototype.extractMatchingEntries=Bt.prototype.extractMatchingEntries;Bt.prototype.smartExtractMatchingEntries=Bt.prototype.smartExtractMatchingEntries;Bt.prototype.storePayload=Bt.prototype.storePayload;function Ct(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function Ft(a,b){if(a)return a[b.name]}
;var Gt=S("initial_gel_batch_timeout",2E3),Ht=S("gel_queue_timeout_max_ms",6E4),It=S("gel_min_batch_size",5),Jt=void 0;function Kt(){this.o=this.h=this.i=0;this.j=!1}
var Lt=new Kt,Mt=new Kt,Nt=new Kt,Ot=new Kt,Pt,Qt=!0,Rt=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Rt);var St={};function Tt(){var a=E("yt.logging.ims");a||(a=new Bt,D("yt.logging.ims",a));return a}
function Ut(a,b){if(a.endpoint==="log_event"){Vt();var c=Wt(a),d=Xt(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=Or[d||""];var f,g,h,k=et().resolve(new Zs(rq))==null?void 0:(f=sq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!R("web_payload_policy_disabled_killswitch"))return;k=Yt(e.tier);if(k===400){Zt(a,b);return}}St[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};Tt().storePayload(c,a.payload);$t(b,c,d==="gelDebuggingEvent")}}
function $t(a,b,c){function d(){au({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(Jt=new a);a=S("tvhtml5_logging_max_batch_ads_fork")||S("tvhtml5_logging_max_batch")||S("web_logging_max_batch")||100;var f=U(),g=bu(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=Tt().getSequenceCount(b));c>=1E3?d():c>=a?Pt||(Pt=cu(function(){d();Pt=void 0},0)):f-h>=10&&(du(e,b.tier),g.o=f)}
function Zt(a,b){if(a.endpoint==="log_event"){R("more_accurate_gel_parser")&&Tt().storePayload({isJspb:!1},a.payload);Vt();var c=Wt(a),d=new Map;d.set(c,[a.payload]);var e=Xt(a.payload)||"";b&&(Jt=new b);return new ti(function(f,g){Jt&&Jt.isReady()?eu(d,Jt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Wt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Rt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function au(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new ti(function(e,f){var g=bu(c,d),h=g.j;g.j=!1;fu(g.i);fu(g.h);g.h=0;Jt&&Jt.isReady()?d===void 0&&R("enable_web_tiered_gel")?gu(e,f,a,b,c,300,h):gu(e,f,a,b,c,d,h):(du(c,d),e())})}
function gu(a,b,c,d,e,f,g){var h=Jt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=R("enable_web_tiered_gel")?Tt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Tt().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(St)),l=d.next();!l.done;l=d.next())l=l.value,e=R("enable_web_tiered_gel")?Tt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Tt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete St[l];eu(k,h,a,b,c,!1,g)}
function du(a,b){function c(){au({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=bu(a,b),e=d===Ot||d===Nt?5E3:Ht;R("web_gel_timeout_cap")&&!d.h&&(e=cu(function(){c()},e),d.h=e);
fu(d.i);e=P("LOGGING_BATCH_TIMEOUT",S("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Qt&&(e=Gt);e=cu(function(){S("gel_min_batch_size")>0?Tt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=It&&c():c()},e);
d.i=e}
function eu(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(U()),k=a.size,l=(g===void 0?0:g)&&R("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={Tc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Wc:void 0,Vc:void 0},m=a.next()){var n=y(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Ag({context:yq(b.config_||xq())});if(!Na(n)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Rt[m])&&
hu(g.batchRequest,m,n);delete Rt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";iu(g.batchRequest,h,g.dangerousLogToVisitorSession);R("always_send_and_write")&&(e.writeThenSend=!1);g.Wc=function(p){R("start_client_gcf")&&Zj.ma(function(){return A(function(t){return t.yield(ju(p),0)})});
k--;k||c()};
g.Tc=0;g.Vc=function(p){return function(){p.Tc++;if(e.bypassNetworkless&&p.Tc===1)try{sr(b,l,p.batchRequest,ku({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Wc,p.Vc,f)),Qt=!1}catch(t){um(t),d()}k--;k||c()}}(g);
try{sr(b,l,g.batchRequest,ku(e,g.dangerousLogToVisitorSession,g.Wc,g.Vc,f)),Qt=!1}catch(p){um(p),d()}}}
function ku(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,uh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};lu()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function iu(a,b,c){lu()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),pm("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function hu(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Vt(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=Pm("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(At=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",At),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function lu(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function cu(a,b){return R("transport_use_scheduler")===!1?Nm(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?Tn(function(){if(zt().currentState==="none")a();else{var c={};zt().install((c.none={callback:a},c))}},b):Tn(a,b)}
function fu(a){R("transport_use_scheduler")?Zj.qa(a):window.clearTimeout(a)}
function ju(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=Ft(d,Sl),g=(f=d)==null?void 0:f.hotHashData,h=Ft(d,Rl),l=(k=d)==null?void 0:k.coldHashData,(m=et().resolve(new Zs(rq)))?g?e?n.yield(tq(m,g,e),2):n.yield(tq(m,g),2):n.A(2):n.return()):l?h?n.yield(uq(m,l,h),0):n.yield(uq(m,l),0):n.A(0)})}
function bu(a,b){b=b===void 0?200:b;return a?b===300?Ot:Mt:b===300?Nt:Lt}
function Xt(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Or[b])return b}
function Yt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var mu=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",mu);
function nu(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Ms();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,mu[b]=b in mu?mu[b]+1:0,a.sequence={index:mu[b],groupKey:b},d.endOfSequence&&delete mu[d.sequenceGroup]);(d.sendIsolatedPayload?Zt:Ut)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Io(a,b,c){c=c===void 0?{}:c;var d=ss;P("ytLoggingEventsDefaultDisabled",!1)&&ss===ss&&(d=null);nu(a,b,d,c)}
;function ou(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var pu=new Set,qu=0,ru=0,su=0,tu=[],uu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Ho(a){vu(a)}
function V(a){vu(a,"WARNING")}
function wu(a){a instanceof Error?vu(a):(a=Sa(a)?JSON.stringify(a):String(a),a=new T(a),a.name="RejectedPromiseError",V(a))}
function vu(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(qu>=5))){d=tu;var k=Wb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=qn(a.args[p],"params."+p,c,n),
n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var u="params."+p,x=sn(t[p]);c[u]=x;n+=u.length+x.length;if(n>500)break}}else c.params=sn(t)}if(d.length)for(p=0;p<d.length&&!(n=qn(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=
p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=mn();c=y(a.Ya);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.Kh)){a=d.weight;break a}a=y(a.Ta);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=y(gn);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.vc[p.name])for(e=y(c.vc[p.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.Rc(f);break}p.params||(p.params={});a=mn();p.params["params.errorServiceSignature"]="msg="+a.Ya.length+"&cb="+a.Ta.length;p.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Dg(Eg,"sample")).constructor!==Dg&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&
window.yterr(p);if(p.sampleWeight!==0&&!pu.has(p.message)){if(g&&R("web_enable_error_204"))xu(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(nn.qb("handleError",p),R("record_app_crashed_web")&&su===0&&p.sampleWeight===1&&(su++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),Io("appCrashed",g)),ru++):b==="WARNING"&&nn.qb("handleWarning",p);if(R("kevlar_gel_error_routing")){g=
b;h=h===void 0?{}:h;b:{a=y(uu);for(c=a.next();!c.done;c=a.next())if(Oo(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,
sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));d=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!qm("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=y(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Io("clientError",h),(g==="ERROR"||R("errors_flush_gel_always_killswitch"))&&au(void 0,void 0,!1))}R("suppress_error_204_logging")||xu(b,p)}try{pu.add(p.message)}catch(z){}qu++}}}
function xu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Ym(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function yu(a){var b=B.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ra(b))}
;function zu(){this.register=new Map}
function Au(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Oh("ABORTED")}
zu.prototype.clear=function(){Au(this);this.register.clear()};
var Bu=new zu;var Cu=Date.now().toString();
function Du(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(Cu)for(a=1,b=0;b<Cu.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Cu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Eu,Fu=C.ytLoggingDocDocumentNonce_;Fu||(Fu=Du(),D("ytLoggingDocDocumentNonce_",Fu));Eu=Fu;function Gu(a){this.h=a}
r=Gu.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new Ul;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&ff(a,2,Ge(this.h.veType)),this.h.veCounter!==void 0&&ff(a,6,Ge(this.h.veCounter)),this.h.elementIndex!==void 0&&ff(a,3,Ge(this.h.elementIndex)),this.h.isCounterfactual&&ff(a,5,Ce(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();tf(a,Ul,7,b)}this.h.youtubeData!==void 0&&tf(a,Tl,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function Hu(a){return P("client-screen-nonce-store",{})[a===void 0?0:a]}
function Iu(a,b){b=b===void 0?0:b;var c=P("client-screen-nonce-store");c||(c={},pm("client-screen-nonce-store",c));c[b]=a}
function Ju(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ku(a){return P(Ju(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",Ku);function Lu(){var a=P("csn-to-ctt-auth-info");a||(a={},pm("csn-to-ctt-auth-info",a));return a}
function Mu(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Nu(a){a=Hu(a===void 0?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Nu);function Ou(a,b,c){var d=Lu();(c=Nu(c))&&delete d[c];b&&(d[a]=b)}
function Pu(a){return Lu()[a]}
D("yt_logging_screen.getCttAuthInfo",Pu);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Hu(c)||b!==P(Ju(c)))if(Ou(a,d,c),Iu(a,c),pm(Ju(c),b),b=function(){setTimeout(function(){a&&Io("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Eu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Qu(){var a=zg(Ru),b;return(new ti(function(c,d){a.onSuccess=function(e){Mm(e)?c(new Su(e)):d(new Tu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Tu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Tu("Request timed out","net.timeout",e))};
b=Ym("//googleads.g.doubleclick.net/pagead/id",a)})).Dc(function(c){if(c instanceof Ci){var d;
(d=b)==null||d.abort()}return yi(c)})}
function Tu(a,b,c){db.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Tu,db);function Su(a){this.xhr=a}
;function Uu(){this.X=0;this.h=null}
Uu.prototype.then=function(a,b,c){return this.X===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Vu(a):this.X===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Wu(a):this};
Uu.prototype.getValue=function(){return this.h};
Uu.prototype.isRejected=function(){return this.X==2};
Uu.prototype.$goog_Thenable=!0;function Wu(a){var b=new Uu;a=a===void 0?null:a;b.X=2;b.h=a===void 0?null:a;return b}
function Vu(a){var b=new Uu;a=a===void 0?null:a;b.X=1;b.h=a===void 0?null:a;return b}
;function Xu(a){var b=P("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(ec(a)));return a}
function Yu(a){var b={};R("json_condensed_response")&&(b.prettyPrint="false");return a=Gm(a,b||{},!1)}
function Zu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:Hm(a)?"same-origin":"cors",credentials:Hm(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function $u(){return ig()||(gd||hd)&&Oo("applewebkit")&&!Oo("version")&&(!Oo("safari")||Oo("gsa/"))||fd&&Oo("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function av(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Yl)if(Yl[d]==c.embeddedPlayerMode){b=Yl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function bv(a){db.call(this,a.message||a.description||a.name);this.isMissing=a instanceof cv;this.isTimeout=a instanceof Tu&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Ci}
w(bv,db);bv.prototype.name="BiscottiError";function cv(){db.call(this,"Biscotti ID is missing from server")}
w(cv,db);cv.prototype.name="BiscottiMissingError";var Ru={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},dv=null;function ev(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!$u())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if(xg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(av(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function im(){var a=ev();if(a!==void 0)return yi(a);dv||(dv=Qu().then(fv).Dc(function(b){return gv(2,b)}));
return dv}
function fv(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new cv;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new cv;a=a.id;jm(a);dv=Vu(a);hv(18E5,2);return a}
function gv(a,b){b=new bv(b);jm("");dv=Wu(b);a>0&&hv(12E4,a-1);throw b;}
function hv(a,b){Nm(function(){Qu().then(fv,function(c){return gv(b,c)}).Dc(ri)},a)}
function iv(){try{var a=E("yt.ads.biscotti.getId_");return a?a():im()}catch(b){return yi(b)}}
;var Ib=sa(["data-"]);function jv(a){a&&(a.dataset?a.dataset[kv()]="true":Jb(a))}
function lv(a){return a?a.dataset?a.dataset[kv()]:a.getAttribute("data-loaded"):null}
var mv={};function kv(){return mv.loaded||(mv.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function nv(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||zg(b);this.assets=a.assets||{};this.attrs=a.attrs||zg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
nv.prototype.clone=function(){var a=new nv,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Ma(c)=="object"?a[b]=zg(c):a[b]=c}return a};var ov=["att/get"],pv=["share/get_share_panel"],qv=["share/get_web_player_share_panel"],rv=["feedback"],sv=["notification/modify_channel_preference"],tv=["browse/edit_playlist"],uv=["subscription/subscribe"],vv=["subscription/unsubscribe"];var wv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",wv);function xv(a){km(wv,arguments)}
;function yv(a,b,c){zv(a,b,c===void 0?null:c)}
function Av(a){a=Bv(a);var b=document.getElementById(a);b&&(Vs(a),b.parentNode.removeChild(b))}
function Cv(a,b){a&&b&&(a=""+Ta(b),(a=Dv[a])&&Ts(a))}
function zv(a,b,c){c=c===void 0?null:c;var d=Bv(a),e=document.getElementById(d),f=e&&lv(e),g=e&&!f;f?b&&b():(b&&(f=Rs(d,b),b=""+Ta(b),Dv[b]=f),g||(e=Ev(a,d,function(){lv(e)||(jv(e),Us(d),Nm(function(){Vs(d)},0))},c)))}
function Ev(a,b,c,d){d=d===void 0?null:d;var e=Gg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gb(e,Pl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Bv(a){var b=document.createElement("a");yb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+$b(a)}
var Dv={};function Fv(a){var b=Gv(a),c=document.getElementById(b),d=c&&lv(c);d||c&&!d||(c=Hv(a,b,function(){if(!lv(c)){jv(c);Us(b);var e=$a(Vs,b);Nm(e,0)}}))}
function Hv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Pl(a);Lb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Gv(a){var b=Gg("A");yb(b,new rb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+$b(a)}
;function Iv(a){var b=B.apply(1,arguments);if(!Jv(a)||b.some(function(d){return!Jv(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())Kv(a,c.value)}
function Kv(a,b){for(var c in b)if(Jv(b[c])){if(c in a&&!Jv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Kv(a[c],b[c])}else if(Lv(b[c])){if(c in a&&!Lv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Mv(a[c],b[c])}else a[c]=b[c];return a}
function Mv(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Jv(c)?a.push(Kv({},c)):Lv(c)?a.push(Mv([],c)):a.push(c);return a}
function Jv(a){return typeof a==="object"&&!Array.isArray(a)}
function Lv(a){return typeof a==="object"&&Array.isArray(a)}
;var Nv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Ov(a,b){var c=c===void 0?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=dc(window.location.href);e&&d.push(e);e=dc(a);if(Mb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),yb(d,a),a=d.href)if(a=ec(a),a=fc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Nu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Pv(a,b,f)}else Pv(a,b)}
function Pv(a,b,c){a=Qv(a);b=b?ic(b):"";c=c||5;$u()&&zn(a,b,c)}
function Qv(a){for(var b=y(Nv),c=b.next();!c.done;c=b.next())a=nc(a,c.value);return"ST-"+$b(a).toString(36)}
;function Rv(a){Eq.call(this,1,arguments);this.csn=a}
w(Rv,Eq);var Nq=new Fq("screen-created",Rv),Sv=[],Tv=0,Uv=new Map,Vv=new Map,Wv=new Map;
function Xv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Yv({cttAuthInfo:Pu(b)||void 0},b),g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(vg(k)||!k.trackingParams&&!k.veType)&&V(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){var l=Zv(h,b);if(k.veType&&!Vv.has(l)&&!Wv.has(l)&&!e){if(!R("il_attach_cache_limit")||Uv.size<1E3){Uv.set(l,[a,b,c,h]);return}R("il_attach_cache_limit")&&Uv.size>1E3&&V(new T("IL Attach cache exceeded limit"))}h=Zv(c,b);Uv.has(h)?
$v(c,b):Wv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Qb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?aw("visualElementAttached",f,c):a?nu("visualElementAttached",c,a,f):Io("visualElementAttached",c,f)}
function aw(a,b,c){Sv.push({Te:a,payload:c,Gh:void 0,options:b});Tv||(Tv=Oq())}
function Pq(a){if(Sv){for(var b=y(Sv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Io(c.Te,c.payload,c.options));Sv.length=0}Tv=0}
function Zv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function $v(a,b){a=Zv(a,b);Uv.has(a)&&(b=Uv.get(a)||[],Xv(b[0],b[1],b[2],[b[3]],!0),Uv.delete(a))}
function Yv(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function bw(){try{return!!self.localStorage}catch(a){return!1}}
;function cw(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function dw(a){if(bw()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=cw(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function ew(){if(!bw())return!1;var a=Rn(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=cw(c.value),c!==void 0&&c!==a)return!0;return!1}
;function fw(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(P("INNERTUBE_CLIENT_NAME")==="WEB"||P("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function gw(a){if(P("LOGGED_IN",!0)&&fw()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=dc(window.location.href);c&&b.push(c);c=dc(a);Mb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=ec(a),(b=fc(b))?(b=Qv(b),b=(b=An(b)||null)?Dm(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;fw()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Ov(a,b)}}
;function hw(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Ov(a,b);if(c)return!1;gw(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=jc(a,e);gw(b);a=void 0;a=a===void 0?vb:a;a:if(f=b+f,a=a===void 0?vb:a,!(f instanceof rb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof tb&&c.He(f)){f=new rb(f);break a}f=void 0}g=g.location;f=xb(f||sb);f!==void 0&&(g.href=f);return!0}
;function iw(a){if(xg(P("PLAYER_VARS",{}))!="1"){a&&hm();try{iv().then(function(){},function(){}),Nm(iw,18E5)}catch(b){um(b)}}}
;var jw=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function kw(){var a=a===void 0?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;var b=bc(cc(5,a));if(R("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=Em(a).theme;return jw.get(c)||null}catch(d){}return null}
;function lw(){this.h={};if(this.i=Cn()){var a=An("CONSISTENCY");a&&mw(this,{encryptedTokenJarContents:a})}}
lw.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ga.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];mw(this,a)}};
function mw(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&zn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var nw=window.location.hostname.split(".").slice(-2).join(".");function ow(){this.j=-1;var a=P("LOCATION_PLAYABILITY_TOKEN");P("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=pw(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var qw;function rw(){qw=E("yt.clientLocationService.instance");qw||(qw=new ow,D("yt.clientLocationService.instance",qw));return qw}
r=ow.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,P("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=pw(this))&&this.h.set("yt-location-playability-token",a,15552E3):zn("YT_CL",JSON.stringify({loctok:a}),15552E3,nw,!0))};
function pw(a){return a.h===void 0?new zo("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=pw(this))&&this.h.remove("yt-location-playability-token"):Bn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;P("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function sw(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=P("INNERTUBE_CONTEXT");if(!d)return vu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=Ag(d);R("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;Gn();var g="USER_INTERFACE_THEME_LIGHT";Jn(165)?g="USER_INTERFACE_THEME_DARK":Jn(174)?g="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:kw()||g;e.userInterfaceTheme=f;if(!b){if(f=On())e.connectionType=f;R("web_log_effective_connection_type")&&(f=Pn())&&(d.client.effectiveConnectionType=f)}var h;if(R("web_log_memory_total_kbytes")&&((h=C.navigator)==null?0:h.deviceMemory)){var k;h=(k=C.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}R("web_gcf_hashes_innertube")&&(f=vq())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=Em(C.location.href);!R("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo={graftUrl:C.location.href},R("kevlar_woffle")&&tn.h&&(k=tn.h,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=un(),
e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!R("web_lr_app_quality_killswitch")&&(k=P("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!R("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(Oa){}l=
void 0}l&&(e.timeZone=l)}(l=P("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=Qm();lw.h||(lw.h=new lw);e=lw.h.h;k=[];h=0;for(var m in e)k[h++]=e[m];d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:k});!R("web_prequest_context_killswitch")&&(m=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=m);l=Gn();m=Jn(58);l=l.get("gsml","");d.user=Object.assign({},d.user);m&&(d.user.enableSafetyMode=m);l&&(d.user.lockedSafetyMode=
!0);R("warm_op_csn_cleanup")?c&&(b=Nu())&&(d.clientScreenNonce=b):!b&&(b=Nu())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=E("yt.mdx.remote.remoteClient_"))d.remoteClient=a;rw().setLocationOnInnerTubeContext(d);try{var n=Im(),p=n.bid;delete n.bid;d.adSignalsInfo={params:[],bid:p};for(var t=y(Object.entries(n)),u=t.next();!u.done;u=t.next()){var x=y(u.value),z=x.next().value,H=x.next().value;n=z;p=H;a=void 0;(a=d.adSignalsInfo.params)==null||a.push({key:n,value:""+p})}var K,
da;if(((K=d.client)==null?void 0:K.clientName)==="TVHTML5"||((da=d.client)==null?void 0:da.clientName)==="TVHTML5_UNPLUGGED"){var ea=P("INNERTUBE_CONTEXT");ea.adSignalsInfo&&(d.adSignalsInfo.advertisingId=ea.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=ea.adSignalsInfo.limitAdTracking)}}catch(Oa){vu(Oa)}return d}
;function tw(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),P("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=P("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function uw(){this.h={}}
uw.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
uw.prototype.get=function(a){if(this.contains(a))return this.h[a]};
uw.prototype.set=function(a,b){this.h[a]=b};
uw.prototype.remove=function(a){delete this.h[a]};function vw(){this.mappings=new uw}
vw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
vw.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=zb(b)}}return a};
new vw;function ww(a){return function(){return new a}}
;var xw={},yw=(xw.WEB_UNPLUGGED="^unplugged/",xw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",xw.WEB_UNPLUGGED_OPS="^unplugged/",xw.WEB_UNPLUGGED_PUBLIC="^unplugged/",xw.WEB_CREATOR="^creator/",xw.WEB_KIDS="^kids/",xw.WEB_EXPERIMENTS="^experiments/",xw.WEB_MUSIC="^music/",xw.WEB_REMIX="^music/",xw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",xw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",xw);
function zw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=yw[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(yw).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function Aw(){}
Aw.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?yn:c;var d={context:sw(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+zw(this.j());(e=(f=Ft(a.commandMetadata,Wl))==null?void 0:f.apiUrl)&&(b=e);f=Yu(Xu(b));a=Object.assign({},{command:a},void 0);d={input:f,Za:Zu(f),Ga:d,config:a};d.config.Mb?d.config.Mb.identity=c:d.config.Mb={identity:c};return d}vu(new T("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(Aw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function Bw(){}
w(Bw,Aw);function Cw(){}
w(Cw,Bw);Cw.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",Za:Zu("/getDatasyncIdsEndpoint","GET"),Ga:{}}};
Cw.prototype.j=function(){return[]};
Cw.prototype.i=function(){};
Cw.prototype.h=function(){};var Dw={},Ew=(Dw.GET_DATASYNC_IDS=ww(Cw),Dw);function Fw(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Gw(){var a=Fw();a.info||(a.info={});return a.info}
function Hw(a){a=Fw(a);a.metadata||(a.metadata={});return a.metadata}
function Iw(a){a=Fw(a);a.tick||(a.tick={});return a.tick}
function Jw(a){a=Fw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Kw(a){a=Jw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Lw(a){var b=Fw(a).nonce;b||(b=Du(),Fw(a).nonce=b);return b}
;function Mw(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Nw(a){a=a||"";var b=E("ytcsi.reference");b||(Mw(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Mw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Ow=(W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]=
"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W["playlist.videos"]=
"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",
W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",
W),X={},Pw=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.editor=
"LATENCY_ACTION_EDITOR",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.management="LATENCY_ACTION_MANAGEMENT",
X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",
X.profile_switcher="LATENCY_ACTION_LOGIN",X.projects="LATENCY_ACTION_PROJECTS",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.review="LATENCY_ACTION_REVIEW",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state=
"LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]=
"LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",
X);Object.assign(Pw,Ow);function Qw(a,b){Eq.call(this,1,arguments);this.timer=b}
w(Qw,Eq);var Rw=new Fq("aft-recorded",Qw);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Sw=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Sw);function Tw(){this.h=0}
function Uw(){Tw.h||(Tw.h=new Tw);return Tw.h}
Tw.prototype.tick=function(a,b,c,d){Vw(this,"tick_"+a+"_"+b)||Io("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Tw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Vw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Io("latencyActionInfo",a,{cttAuthInfo:c}))};
Tw.prototype.jspbInfo=function(){};
Tw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Vw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Io("latencyActionSpan",a,{cttAuthInfo:c}))};
function Vw(a,b){Sw[b]=Sw[b]||{count:0};var c=Sw[b];c.count++;c.time=U();a.h||(a.h=Tn(function(){var d=U(),e;for(e in Sw)Sw[e]&&d-Sw[e].time>6E4&&delete Sw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new T("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||V(c)),!0):!1}
;var Ww=window;function Xw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Yw(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Zw(e.requestStart),e.responseEnd=Zw(e.responseEnd),e.redirectStart=Zw(e.redirectStart),e.redirectEnd=Zw(e.redirectEnd),e.domainLookupEnd=Zw(e.domainLookupEnd),e.connectStart=Zw(e.connectStart),e.connectEnd=
Zw(e.connectEnd),e.responseStart=Zw(e.responseStart),e.secureConnectionStart=Zw(e.secureConnectionStart),e.domainLookupStart=Zw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=R("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Zw(a){return Math.round($w()+a)}
function $w(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Ww.performance||Ww.mozPerformance||Ww.msPerformance||Ww.webkitPerformance||new Xw;var ax=!1,bx=!1,cx={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"};Za(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||ri,Y);function dx(a,b){if(!R("web_csi_action_sampling_enabled")||!Fw(b).actionDisabled){var c=Nw(b||"");Iv(c.info,a);a.loadType&&(c=a.loadType,Hw(b).loadType=c);Iv(Kw(b),a);c=Lw(b);b=Fw(b).cttAuthInfo;Uw().info(a,c,b)}}
function ex(){var a,b,c,d;return((d=et().resolve(new Zs(rq))==null?void 0:(a=sq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!R("web_csi_action_sampling_enabled")||!Fw(c).actionDisabled){var d=Lw(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){(et().resolve(new Zs(rq))==null?0:sq())&&!bx&&(bx=!0,Z("gcfl",U(),c));var f,g,h;e=(et().resolve(new Zs(rq))==null?void 0:(f=sq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=ex();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;Fw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,dx(f,c));Fw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||R("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);try{Y.mark(e,
{startTime:f})}catch(k){}}e=Nw(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Jw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Iw(c);e=b||U();R("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=Fw(c).cttAuthInfo;a==="_start"?(a=Uw(),Vw(a,"baseline_"+d)||Io("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Uw().tick(a,d,b,f);fx(c);return e}}}
function gx(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=us+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function hx(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(P("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function ix(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Bb(document)&&a.setAttribute("nonce",Bb(document));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=$w(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function jx(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Pb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Rb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",Zw(b.startTime)),Z("wffe",Zw(b.responseEnd)))}
function kx(a){var b=lx("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=lx(b[d],a);if(e)return e}return NaN}
function lx(a,b){if(a=Iw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function fx(a){var b=lx("_start",a),c=kx(a),d=R("enable_cow_info_csi")||!ax;b&&c&&d&&(Kq(Rw,new Qw(Math.round(c-b),a)),ax=!0)}
function mx(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Sb(a,function(c){return c.name==="first-paint"}))return Zw(a.startTime)}var b;
R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.Mh;return b?Math.max(0,b):0}
;function nx(a,b){tm(function(){Nw("").info.actionType=a;b&&pm("TIMING_AFT_KEYS",b);pm("TIMING_ACTION",a);var c=hx();Object.keys(c).length>0&&dx(c);c={isNavigation:!0,actionType:Pw[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=P("PREVIOUS_ACTION");d&&(c.previousAction=Pw[d]||"LATENCY_ACTION_UNKNOWN");if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Nu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=gx();if(d===1||d===-1)c.isVisible=!0;Hw();Gw();
c.loadType="cold";d=Gw();var e=Yw(),f=$w(),g=P("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=mx();d>0&&Z("fpt",d);d=Yw();d.isPerformanceNavigationTiming&&dx({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=$w()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&jx();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in cx)cx.hasOwnProperty(h)&&(e=cx[h],
ix(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});dx(c);c=Jw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Kw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(Hw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=Iw();e=Jw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,lx(k));else if(R("log_repeated_ytcsi_ticks"))for(f=
y(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,Iv(c,d),Iv(k,d),d=!0;d&&dx(k)}D("ytglobal.timingready_",!0);k=P("TIMING_ACTION");E("ytglobal.timingready_")&&k&&ox()&&kx()&&fx()})()}
function ox(a){return tm(function(){return px("_start",a)})()}
function qx(a,b,c){tm(dx)(a,b,c===void 0?!1:c)}
function rx(a,b,c){return tm(Z)(a,b,c)}
function px(a,b){return tm(function(){var c=Iw(b);return a in c})()}
function sx(a){if(!R("universal_csi_network_ticks"))return"";a=bc(cc(5,a))||"";for(var b=Object.keys(Cq),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function tx(a){if(!R("universal_csi_network_ticks"))return function(){};
var b=Cq[a];return b?(ux(b),function(){var c=R("universal_csi_network_ticks")?(c=Dq[a])?ux(c):!1:!1;return c}):function(){}}
function ux(a){return tm(function(){if(px(a))return!1;rx(a,void 0,void 0);return!0})()}
function vx(a){tm(function(){if(!ox("attestation_challenge_fetch")||px(a,"attestation_challenge_fetch"))return!1;rx(a,void 0,"attestation_challenge_fetch");return!0})()}
function wx(){tm(function(){var a=Lw();requestAnimationFrame(function(){setTimeout(function(){a===Lw()&&rx("ol",void 0,void 0)},0)})})()}
var xx=window;xx.ytcsi&&(xx.ytcsi.infoGel=qx,xx.ytcsi.tick=rx);var yx="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),zx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function Ax(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.Xb||(a.Xb={});a.Xb=Object.assign({},Ew,a.Xb)}
function Bx(a,b,c,d){if(Ax.h!==void 0){if(d=Ax.h,a=[a!==d.u,b!==d.fa,c!==d.j,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new T("InnerTubeTransportService is already initialized",a);
}else Ax.h=new Ax(a,b,c,d)}
function Cx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?yn:c;var d=Dx(a,b);return d?new ti(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new T("Error: Failed to build request for command.",b));n.A(0);break}gw(h.input);l=((k=h.Za)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Md){m=Ex(h.config,l);n.A(4);break}return n.yield(Fx(h.config,l),5);case 5:m=n.i;case 4:e(Gx(a,h,m)),n.h=
0}})}):yi(new T("Error: No request builder found for command.",b))}
function Hx(a,b){function c(){}
var d="/youtubei/v1/"+zw(ov);var e=e===void 0?{Mb:{identity:yn}}:e;var f=f===void 0?!0:f;c=tx(sx(d));b.context||(b.context=sw(void 0,f));return new ti(function(g){var h,k,l,m,n;return A(function(p){if(p.h==1)return h=Xu(d),k=Hm(h)?"same-origin":"cors",a.j.Md?(l=Ex(e,k),p.A(2)):p.yield(Fx(e,k),3);p.h!=2&&(l=p.i);m=Yu(Xu(d));n={input:m,Za:Zu(m),Ga:b,config:e};g(Gx(a,n,l,c));p.h=0})})}
function Ix(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(yx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function Gx(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,u,x,z,H,K,da,ea,Oa,Ob,ka,Ya,Qa,Ra,Pa,ih,jh,ws,xs,ys,zs;return A(function(ja){switch(ja.h){case 1:ja.A(2);break;case 3:if((e=ja.i)&&!e.isExpired())return ja.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ga)==null?0:g.context)){ja.A(4);break}h=b.Ga.context;ja.A(5);break;case 5:k=y([]),l=k.next();case 8:if(l.done){ja.A(4);break}m=l.value;return ja.yield(m.Nh(h),9);case 9:l=k.next();ja.A(8);break;case 4:if((n=a.i)==null||!n.Th(b.input,b.Ga)){ja.A(12);break}return ja.yield(a.i.Ih(b.input,
b.Ga),13);case 13:return p=ja.i,Ix(a,p,b),ja.return(p);case 12:return(x=(u=b.config)==null?void 0:u.Qh)&&a.h.has(x)?t=a.h.get(x):(z=JSON.stringify(b.Ga),da=(K=(H=b.Za)==null?void 0:H.headers)!=null?K:{},b.Za=Object.assign({},b.Za,{headers:Object.assign({},da,c)}),ea=Object.assign({},b.Za),b.Za.method==="POST"&&(ea=Object.assign({},ea,{body:z})),((Oa=b.config)==null?0:Oa.Ye)&&rx(b.config.Ye),Ob=function(){return a.fa.fetch(b.input,ea,b.config)},t=Ob(),x&&a.h.set(x,t)),ja.yield(t,14);
case 14:if((ka=ja.i)&&"error"in ka&&((Ya=ka)==null?0:(Qa=Ya.error)==null?0:Qa.details))for(Ra=ka.error.details,Pa=y(Ra),ih=Pa.next();!ih.done;ih=Pa.next())jh=ih.value,(ws=jh["@type"])&&zx.indexOf(ws)>-1&&(delete jh["@type"],ka=jh);x&&a.h.has(x)&&a.h.delete(x);((xs=b.config)==null?0:xs.Ze)&&rx(b.config.Ze);if(ka||(ys=a.i)==null||!ys.wh(b.input,b.Ga)){ja.A(15);break}return ja.yield(a.i.Hh(b.input,b.Ga),16);case 16:ka=ja.i;case 15:return Ix(a,ka,b),((zs=b.config)==null?0:zs.Ve)&&rx(b.config.Ve),d(),
ja.return(ka||void 0)}})}
function Dx(a,b){a:{a=a.u;var c,d=(c=Ft(b,Xl))==null?void 0:c.signal;if(d&&a.Xb&&(c=a.Xb[d])){var e=c();break a}var f;if((c=(f=Ft(b,Vl))==null?void 0:f.request)&&a.je&&(f=a.je[c])){e=f();break a}for(e in b)if(a.qd[e]&&(b=a.qd[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function Fx(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Mb)==null?void 0:d.sessionIndex;var h=g.yield;var k=xn(0,{sessionIndex:e});if(!(k instanceof ti)){var l=new ti(ri);ui(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},tw(b),f)))})}
function Ex(a,b){var c;a=a==null?void 0:(c=a.Mb)==null?void 0:c.sessionIndex;c=xn(0,{sessionIndex:a});return Object.assign({},tw(b),c)}
;var Jx=new Ys("INNERTUBE_TRANSPORT_TOKEN");function Kx(){}
w(Kx,Bw);Kx.prototype.j=function(){return uv};
Kx.prototype.i=function(a){return Ft(a,gm)||void 0};
Kx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(Kx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Lx(){}
w(Lx,Bw);Lx.prototype.j=function(){return vv};
Lx.prototype.i=function(a){return Ft(a,fm)||void 0};
Lx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Lx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var Mx=new Ys("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function Nx(a){this.M=a}
w(Nx,Bw);Nx.prototype.j=function(){return pv};
Nx.prototype.i=function(a){return Ft(a,am)||Ft(a,bm)||Ft(a,$l)};
Nx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.M)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.M.i(b.clientParamIdentifier)}};
Nx[Xs]=[Mx];function Ox(){}
w(Ox,Bw);Ox.prototype.j=function(){return rv};
Ox.prototype.i=function(a){return Ft(a,Zl)||void 0};
Ox.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Ox.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Px(){}
w(Px,Bw);Px.prototype.j=function(){return sv};
Px.prototype.i=function(a){return Ft(a,em)||void 0};
Px.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Qx(){}
w(Qx,Bw);Qx.prototype.j=function(){return tv};
Qx.prototype.i=function(a){return Ft(a,dm)||void 0};
Qx.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Rx(){}
w(Rx,Bw);Rx.prototype.j=function(){return qv};
Rx.prototype.i=function(a){return Ft(a,cm)};
Rx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Sx=new Ys("FETCH_FN_TOKEN"),Tx=new Ys("PARSE_FN_TOKEN");function Ux(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;T.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(Ux,T);var Vx=new Ys("NETWORK_SLI_TOKEN");function Wx(a,b,c){this.h=a;this.i=b;this.j=c}
Wx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=Xx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){V(k);
if((c==null?0:c.se)&&k instanceof Ux&&k.errorType===1)return Promise.reject(k)}))})};
function Xx(a,b,c){if(a.h){var d=bc(cc(5,nc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;R("wug_networking_gzip_request")&&(a=lr(c));return new window.Request(b,a)}
Wx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.Ie)&&a.ok)return Rf(b.Ie,e);e=e.replace(")]}'","");if((b==null?0:b.se)&&e)try{var f=d(e)}catch(h){throw new Ux(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Ch(),c=c.then(function(e){V(new T("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
Wx[Xs]=[new Zs(Vx),new Zs(Sx),new Zs(Tx)];var Yx=new Ys("NETWORK_MANAGER_TOKEN");var Zx;function $x(){var a,b;if(!Zx){var c=et();at(c,{zc:Yx,Pd:Wx});var d={qd:{feedbackEndpoint:ww(Ox),modifyChannelNotificationPreferenceEndpoint:ww(Px),playlistEditEndpoint:ww(Qx),shareEntityEndpoint:ww(Nx),subscribeEndpoint:ww(Kx),unsubscribeEndpoint:ww(Lx),webPlayerShareEntityServiceEndpoint:ww(Rx)}},e=rw(),f={};e&&(f.client_location=e);a===void 0&&(a=wn());b===void 0&&(b=c.resolve(Yx));Bx(d,b,a,f);at(c,{zc:Jx,Qd:Ax.h});Zx=c.resolve(Jx)}return Zx}
;function ay(a){var b=new sj;if(a.interpreterJavascript){var c=Nl(a.interpreterJavascript);c=Eb(c).toString();var d=new qj;Af(d,6,c);tf(b,qj,1,d)}else a.interpreterUrl&&(c=Ol(a.interpreterUrl),c=lb(c).toString(),d=new rj,Af(d,4,c),tf(b,rj,2,d));a.interpreterHash&&Bf(b,3,a.interpreterHash);a.program&&Bf(b,4,a.program);a.globalName&&Bf(b,5,a.globalName);a.clientExperimentsStateBlob&&Bf(b,7,a.clientExperimentsStateBlob);return b}
function by(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
;function Bj(){if(R("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function cy(a){this.h=a}
cy.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
cy.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
cy.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function dy(){return new Promise(function(a){var b=window.top;b.ntpevasrs!==void 0?a(new cy(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new cy(c))}))})}
;var ey=[],fy=!1;function gy(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&$u()){var a=P("PLAYER_VARS",{});if(xg(a)!="1"&&!av(a)){var b=function(){fy=!0;"google_ad_status"in window?pm("DCLKSTAT",1):pm("DCLKSTAT",2)};
try{yv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}ey.push(Zj.ma(function(){if(!(fy||"google_ad_status"in window)){try{Cv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}fy=!0;pm("DCLKSTAT",3)}},5E3))}}}
function hy(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function iy(a){this.h=a}
[new iy("b.f_"),new iy("j.s_"),new iy("r.s_"),new iy("e.h_"),new iy("i.s_"),new iy("s.t_"),new iy("p.h_"),new iy("s.i_"),new iy("f.i_"),new iy("a.b_"),new iy("a.o_"),new iy("g.o_"),new iy("p.i_"),new iy("p.m_"),new iy("i.k_"),new iy("n.k_"),new iy("i.f_"),new iy("a.s_"),new iy("m.c_"),new iy("n.h_"),new iy("o.p_")].reduce(function(a,b){a[b.h]=b;return a},{});function jy(a,b){var c={preload:!0},d=this;this.network=a;this.options=c;this.o=b;this.h=null;if(c.Yh){var e=new xj;this.h=e.promise;C.ytAtRC&&Zj.Ra(function(){var f,g;return A(function(h){if(h.h==1){if(!C.ytAtRC)return h.return();f=ky(null);return h.yield(d.gb(f),2)}g=h.i;C.ytAtRC&&C.ytAtRC(JSON.stringify(g));h.h=0})},2);
dy().then(function(f){var g,h,k,l;return A(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.gb(ky(n))}),m.yield(Aj(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,eb:by(k),vm:g,bgChallenge:new sj};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,eb:by(n),vm:g,bgChallenge:new sj};d.h=Promise.resolve(n)});
m.h=0})})}else c.preload&&ly(this,new Promise(function(f){Tn(function(){f(my(d))},0)}))}
jy.prototype.j=function(){var a=this;return A(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
jy.prototype.i=function(a,b,c){var d=this,e,f,g;return A(function(h){d.h===null&&ly(d,my(d));e=!1;f={};g=function(){var k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.eb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.A(3);break}l=Object.assign({},{c:k.challenge,e:a},b);za(n,4);e=!0;if(R("attbs")&&!R("attmusi")){m=k.vm.gd({vb:l});n.A(6);break}return n.yield(k.vm.snapshot({vb:l}),7);case 7:m=n.i;case 6:m?f.webResponse=
m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";Aa(n,3);break;case 4:Ba(n),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var p=k.eb,t={};p.c6a&&(t.reportingStatus=String(Number(p.c)^hy()));p.c6b&&(t.broadSpectrumDetectionResult=String(Number(p.c)^Number(P("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),ny(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function ky(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function my(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,p,t;return A(function(u){switch(u.h){case 1:c=ky(Gj().h);if(R("att_fet_ks"))return za(u,7),u.yield(a.gb(c),9);za(u,4);return u.yield(oy(a,c),6);case 6:g=u.i;e=g.Qe;f=g.Re;d=g;Aa(u,3);break;case 4:return Ba(u),V(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),py(a,864E5),u.return({challenge:"",eb:{},vm:void 0,bgChallenge:void 0});case 9:d=u.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=by(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");Aa(u,3);break;case 7:h=Ba(u);V(h);b++;if(b>=5)return V(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),py(a,864E5),u.return({challenge:"",eb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return u.return(new Promise(function(x){Tn(function(){x(my(a,
b))},k)}));
case 3:l=Number(f.t)||7200;py(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){u.A(10);break}n=ay(d.bgChallenge);za(u,11);return u.yield(Hj(Gj(),n),13);case 13:Aa(u,12);break;case 11:return p=Ba(u),V(p),u.return({challenge:e,eb:f,vm:m,bgChallenge:n});case 12:return za(u,14),m=new zj({challenge:n,Ad:{Da:"aGIf"}}),u.yield(m.bd,16);case 16:Aa(u,10);break;case 14:t=Ba(u),V(t),m=void 0;case 10:return u.return({challenge:e,eb:f,vm:m,bgChallenge:n})}})}
jy.prototype.gb=function(a){var b=this,c;return A(function(d){c=b.o;if(!c||c.ta())return d.return(b.network.gb(a));vx("att_pna");return d.return(new Promise(function(e){Zh(c,"publicytnetworkstatus-online",function(){b.network.gb(a).then(e)})}))})};
function qy(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=by(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Qe:b,Re:c})}
function oy(a,b){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.A(4);break}if(!(d>0)){h.A(5);break}e.nd=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){Tn(function(){l(void 0)},k.nd)}}(e)),5);
case 5:return za(h,7),h.yield(a.gb(b),9);case 9:return f=h.i,h.return(qy(f));case 7:c=g=Ba(h),g instanceof Error&&V(g);case 8:d++;e={nd:void 0};h.A(2);break;case 4:throw c;}})}
function ly(a,b){a.h=b}
function ry(a){var b,c,d;return A(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=my(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function py(a,b){function c(){var e;return A(function(f){e=d-Date.now();return e<1E3?f.yield(ry(a),0):(Tn(c,Math.min(e,6E4)),f.A(0))})}
var d=Date.now()+b;c()}
function ny(a,b){return new Promise(function(c){Tn(function(){c(b())},a)})}
;function sy(){this.h=$x()}
sy.prototype.gb=function(a){vx("att_fsr");return Hx(this.h,a).then(function(b){vx("att_frr");return b})};function ty(){var a,b,c;return A(function(d){if(d.h==1)return a=et().resolve(Jx),a?d.yield(Cx(a),2):(V(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return V(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.zh;return d.return(c)}V(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function uy(){var a;return(a=P("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var vy=C.caches,wy;function xy(a){var b=a.indexOf(":");return b===-1?{Dd:a}:{Dd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function yy(){return A(function(a){if(wy!==void 0)return a.return(wy);wy=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(vy.open("test-only"),4);case 4:return d.yield(vy.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(wy)})}
function zy(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(yy(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(vy.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=xy(f),h=g.datasyncId,!h||a.includes(h)||b.push(vy.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function Ay(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(yy(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Rn("cache contains other");return h.yield(vy.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=xy(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function By(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Cy(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Dy(a){if(By()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Cy(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Ey(){if(!By())return!1;var a=Rn(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=Cy(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Fy(){ty().then(function(a){a&&(Xp(a),zy(a),dw(a),Dy(a))})}
function Gy(){var a=new ds;Zj.ma(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){g.A(2);break}b=Rn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Xp(h);zy(h);dw(h);Dy(h);return g.return()}c=ew();d=Ey();return g.yield(Ay(),3);case 3:return e=g.i,g.yield(Yp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?Fy():Zh(a,"publicytnetworkstatus-online",Fy),g.h=0}})})}
;function Hy(){this.state=1;this.vm=null}
r=Hy.prototype;r.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript)d=Nl(a.interpreterSafeScript);else{var f;d=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(e=Ol(a.interpreterSafeUrl).toString());Iy(this,d,e,a.program,b,c)}else V(Error("Cannot initialize botguard without program"))};
function Iy(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,yv(c,function(){window[g]?Jy(a,d,g,e):(a.state=3,Av(c),V(new T("Unable to load Botguard","from "+c)))},f)):b?(f=Gg("SCRIPT"),b instanceof Cb?(f.textContent=Eb(b),Fb(f)):f.textContent=b,f.nonce=Bb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?Jy(a,d,g,e):(a.state=4,V(new T("Unable to load Botguard from JS")))):V(new T("Unable to load VM; no url or JS provided"))}
r.isLoading=function(){return this.state===2};
function Jy(a,b,c,d){a.state=5;try{var e=new zj({program:b,globalName:c,Ad:{disable:!R("att_web_record_metrics"),Da:"aGIf"}});e.bd.then(function(){a.state=6;d&&d(b)});
a.Zc(e)}catch(f){a.state=7,f instanceof Error&&V(f)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.jd()?this.Sd({vb:a}):null};
r.dispose=function(){this.Zc(null);this.state=8};
r.jd=function(){return!!this.vm};
r.Sd=function(a){return this.vm.gd(a)};
r.Zc=function(a){yc(this.vm);this.vm=a};function Ky(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Ly(){Hy.apply(this,arguments)}
w(Ly,Hy);Ly.prototype.Zc=function(a){var b;(b=Ky())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.gd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Ly.prototype.jd=function(){return!!Ky()};
Ly.prototype.Sd=function(a){return Ky().bgvmc(a)};function My(a){pt.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.M},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.M},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(My,pt);My.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
My.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
My.prototype.M=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
My.prototype.i=function(){this.h=new Map};function Ny(a){pt.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.M},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.M},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.M},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Ny,pt);Ny.prototype.i=function(a,b){a(b==null?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Ny.prototype.h=function(a,b){a(b==null?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Ny.prototype.u=function(a,b){a(b==null?void 0:b.event)};
Ny.prototype.M=function(a,b){a(b==null?void 0:b.event)};function Oy(){this.o=new My;this.u=new Ny}
Oy.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function Py(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Py.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Nu(c===void 0?0:c)){a=this.client;d=new Gu({trackingParams:d});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=Zv(d,c);Vv.set(f,!0);$v(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Yv({cttAuthInfo:Pu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?aw("visualElementGestured",f,d):a?nu("visualElementGestured",d,a,f):Io("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Py.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Gu({trackingParams:a}),b,c===void 0?0:c)};
Py.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Nu(d);a||(a=(a=Ku(d===void 0?0:d))?new Gu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Yv({cttAuthInfo:Pu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?aw("visualElementStateChanged",d,b):a?nu("visualElementStateChanged",b,a,d):Io("visualElementStateChanged",b,d))}};
function Qy(a,b){if(b===void 0)for(var c=Mu(),d=0;d<c.length;d++)c[d]!==void 0&&Qy(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Xv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Ry(){Oy.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));R("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));R("web_log_cfg_cee_ks")||Tn(Sy)}
w(Ry,Oy);Ry.prototype.j=function(){Io("finalPayload",{csn:Nu()})};
Ry.prototype.h=function(){Au(Bu)};
Ry.prototype.i=function(){var a=Qy;Py.h||(Py.h=new Py);a(Py.h)};
function Sy(){var a=P("CLIENT_EXPERIMENT_EVENTS");if(a){var b=ee();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&Io("genericClientExperimentEvent",{eventType:c});delete om.CLIENT_EXPERIMENT_EVENTS}}
;function Ty(){}
function Uy(){var a=E("ytglobal.storage_");a||(a=new Ty,D("ytglobal.storage_",a));return a}
Ty.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(Vy()):d.return()})};
function Vy(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Ty);function Go(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
Go.prototype.Ha=function(a){this.handleError(a)};
Go.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Wy(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Wy(a,b){Uy().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Xy(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Xy(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Xy(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Yy={},Zy=(Yy["api.invalidparam"]=2,Yy.auth=150,Yy["drm.auth"]=150,Yy["heartbeat.net"]=150,Yy["heartbeat.servererror"]=150,Yy["heartbeat.stop"]=150,Yy["html5.unsupportedads"]=5,Yy["fmt.noneavailable"]=5,Yy["fmt.decode"]=5,Yy["fmt.unplayable"]=5,Yy["html5.missingapi"]=5,Yy["html5.unsupportedlive"]=5,Yy["drm.unavailable"]=5,Yy["mrm.blocked"]=151,Yy["embedder.identity.denied"]=152,Yy);var $y=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function az(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function bz(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y($y);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function cz(a,b,c,d){if(Sa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function dz(a){F.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.D=[];this.P={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=R("web_player_split_event_bus_iframe");this.o=P("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",ez(b));b.sendMessage("onReady");e=y(b.D);for(d=e.next();!d.done;d=e.next())fz(b,d.value);b.D=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.P[e]||e==="onReady"||
(c=gz(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.P[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&az(e)){var f=d;if(Sa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=bz(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=bz(g);break;case "loadPlaylist":case "cuePlaylist":g=cz(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);az(e)&&hz(b,ez(b))}}}};
iz.addEventListener("message",this.G);if(a=P("WIDGET_ID"))this.sessionId=a;jz(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Zy[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
jz(this,"onVideoProgress",this.lf.bind(this));jz(this,"onVolumeChange",this.mf.bind(this));jz(this,"onApiChange",this.df.bind(this));jz(this,"onPlaybackQualityChange",this.hf.bind(this));jz(this,"onPlaybackRateChange",this.jf.bind(this));jz(this,"onStateChange",this.kf.bind(this));jz(this,"onWebglSettingsChanged",this.nf.bind(this));jz(this,"onCaptionsTrackListChanged",this.ef.bind(this));jz(this,"captionssettingschanged",this.ff.bind(this))}
w(dz,F);function hz(a,b){a.sendMessage("infoDelivery",b)}
r=dz.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?fz(this,a):this.D.push(a)};
function gz(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function jz(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function ez(a){if(!a.api)return null;var b=a.api.getApiInterface();Tb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.kf=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());hz(this,a)};
r.hf=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());hz(this,a)};
r.jf=function(a){hz(this,{playbackRate:a})};
r.df=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.mf=function(){hz(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.lf=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());hz(this,a)};
r.nf=function(){hz(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.ef=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};hz(this,a)}};
r.ff=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};hz(this,a)}};
function fz(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){V(d)}}}
r.ba=function(){F.prototype.ba.call(this);iz.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var iz=window;function kz(a,b,c){F.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=R("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=lz(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=mz(g,f))&&nz(d,g,f))}}}}}};
oz.addEventListener("message",this.i);nz(this,"RECEIVING")}
w(kz,F);r=kz.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.gf.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.gf=function(a,b){this.ea||nz(this,a,pz(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function lz(a,b){switch(a){case "loadVideoById":return[bz(b)];case "cueVideoById":return[bz(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[cz(b)];case "cuePlaylist":return[cz(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function mz(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function pz(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function nz(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),qz.postMessage(JSON.stringify(b),a.origin))}
r.ba=function(){oz.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);F.prototype.ba.call(this)};
var oz=window,qz=window.parent;var rz=new Ly;function sz(){return rz.jd()}
function tz(a){a=a===void 0?{}:a;return rz.invoke(a)}
;function uz(a,b,c,d,e){F.call(this);var f=this;this.D=b;this.webPlayerContextConfig=d;this.Ec=e;this.Pa=!1;this.api={};this.pa=this.u=null;this.U=new M;this.h={};this.Z=this.xa=this.elementId=this.Qa=this.config=null;this.Y=!1;this.j=this.G=null;this.Fa={};this.Fc=["onReady"];this.lastError=null;this.rb=NaN;this.P={};this.ha=0;this.i=this.o=a;Ac(this,this.U);vz(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(wz(this),xz(this))}
w(uz,F);r=uz.prototype;r.getId=function(){return this.D};
r.loadNewVideoConfig=function(a){if(!this.ea){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof nv||(b=new nv(b));this.config=b;this.setConfig(a);xz(this);this.isReady()&&yz(this)}};
function wz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.D,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.D:a.config.attrs.id=a.D);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Qa=a;this.config=zz(a);wz(this);if(!this.xa){var b;this.xa=Az(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Tj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Tj(Number(a)||a))};
function yz(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Bz(a){var b=!0,c=Cz(a);c&&a.config&&(b=c.dataset.version===Dz(a));return b&&!!E("yt.player.Application.create")}
function xz(a){if(!a.ea&&!a.Y){var b=Bz(a);if(b&&(Cz(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||Ez(a);else if(Fz(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),Ez(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=Gz(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?zz(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Ec);Ez(a)};
a.Y=!0;b?a.G():(yv(Dz(a),a.G),(b=Hz(a))&&Fv(b||""),Iz(a)&&!c&&D("yt.player.Application.create",null))}}}
function Cz(a){var b=Fg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Ez(a){if(!a.ea){var b=Cz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!Gz(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Jz(a)}else a.rb=setTimeout(function(){Ez(a)},50)}}
function Jz(a){vz(a);a.Pa=!0;var b=Cz(a);if(b){a.u=Kz(a,b,"addEventListener");a.pa=Kz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Kz(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);yz(a);a.xa&&a.xa(a.api);a.U.qb("onReady",a.api)}
function Kz(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new T("PlayerProxy error in method call",{error:f,method:c,playerId:a.D}),e.level="WARNING",e;}}}
function vz(a){a.Pa=!1;if(a.pa)for(var b in a.h)a.h.hasOwnProperty(b)&&a.pa(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.u=null;a.pa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.Pa};
r.addEventListener=function(a,b){var c=this,d=Az(this,b);d&&(Mb(this.Fc,a)>=0||this.h[a]||(b=Lz(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.ea||(b=Az(this,b))&&this.U.unsubscribe(a,b)};
function Az(a,b){var c=b;if(typeof b==="string"){if(a.Fa[b])return a.Fa[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new T("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function Lz(a,b){function c(d){function e(){if(!a.ea)try{a.U.qb(b,d!=null?d:void 0)}catch(h){var g=new T("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.D,data:d,originalStack:h.stack,componentStack:h.he});g.level="WARNING";throw g;}}
if(Gz(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.P,h=String(f);h in g&&delete g[h]},0);
wg(a.P,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.Z||(Cz(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function Fz(a){a.cancel();vz(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=Cz(a);b&&(Bz(a)||!Iz(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.G&&Cv(Dz(this),this.G);clearTimeout(this.rb);this.Y=!1};
r.ba=function(){Fz(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new T("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Qa=this.config=this.api=null;delete this.o;delete this.i;F.prototype.ba.call(this)};
function Iz(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function Dz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Hz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Gz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function zz(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?zg(e):e}return b}
;var Mz={},Nz="player_uid_"+(Math.random()*1E9>>>0);function Oz(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Fg(c):c;var e=Nz+"_"+Ta(c),f=Mz[e];if(f&&d)return Pz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new uz(c,e,a,b,void 0);Mz[e]=f;f.addOnDisposeCallback(function(){delete Mz[f.getId()]});
return f.api}
function Pz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Qz=null,Rz=null;
function Sz(){wx();var a=Gn(),b=Jn(119),c=window.devicePixelRatio>1;if(document.body&&hk(document.body,"exp-invert-logo"))if(c&&!hk(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!hk(d,"inverted-hdpi")){var e=fk(d);gk(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&hk(document.body,"inverted-hdpi")&&ik();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Kn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Dn[b]:(c=d.toString(16),Dn[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Dn)Dn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Dn[f])));var f=d.join("&");zn(b,f,63072E3,a.i,c)}}
function Tz(){Uz()}
function Vz(){rx("ep_init_pr");Uz()}
function Uz(){var a=Qz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Wz(){Qz&&Qz.sendAbandonmentPing&&Qz.sendAbandonmentPing();P("PL_ATT")&&rz.dispose();for(var a=Zj,b=0,c=ey.length;b<c;b++)a.qa(ey[b]);ey.length=0;Av("//static.doubleclick.net/instream/ad_status.js");fy=!1;pm("DCLKSTAT",0);zc(Rz);Qz&&(Qz.removeEventListener("onVideoDataChange",Tz),Qz.destroy())}
;rx("ep_init_eps");D("yt.setConfig",pm);D("yt.config.set",pm);D("yt.setMsg",xv);D("yt.msgs.set",xv);D("yt.logging.errors.log",vu);
D("writeEmbed",function(){rx("ep_init_wes");var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}iw(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);nx("embed",["ol"]);c=uy();if(!c.serializedForcedExperimentIds){var d=Em(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&nx("watch",["pbs","pbu","pbp"]);Qz=Oz(a,c);Qz.addEventListener("onVideoDataChange",Tz);Qz.addEventListener("onReady",Vz);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Rz=new dz(Qz):P("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Rz=new kz(Qz,a,b));gy();R("ytidb_create_logger_embed_killswitch")||Fo();a={};Ry.h||(Ry.h=new Ry);Ry.h.install((a.flush_logs={callback:function(){au()}},a));
rs();R("ytidb_clear_embedded_player")&&Zj.ma(function(){$x();Gy()});
R("enable_rta_manager")&&Zj.ma(function(){var f=new sy;var g=new ds;jy.h=new jy(f,g);f=jy.h;g=f.i.bind(f);D("yt.aba.att",g);f=f.j.bind(f);D("yt.aba.att2",f)});
rx("ep_init_wee")});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||sz);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||tz);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||hy);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||hw);D("yt.util.activity.init",E("yt.util.activity.init")||Js);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Ms);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Ks);window.addEventListener("load",tm(function(){Sz()}));
window.addEventListener("pageshow",tm(function(a){a.persisted||Sz()}));
window.addEventListener("pagehide",tm(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Wz():a.persisted||Wz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=qm("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new T(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!R("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.he)f||(f={}),f.componentStack=ou(m)}f&&yu(e,f);g?vu(e):V(e)}};
Ki=wu;window.addEventListener("unhandledrejection",function(a){wu(a.reason)});
Nb(P("ERRORS")||[],function(a){vu.apply(null,a)});
pm("ERRORS",[]);rx("ep_init_epe");}).call(this);

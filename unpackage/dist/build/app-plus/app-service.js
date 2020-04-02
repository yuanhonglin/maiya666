var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'visible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-02a8b5ac'])
Z([[7],[3,'showOption']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-02a8b5ac vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^newEmojiStr']],[[4],[[5],[[4],[[5],[1,'emojiAction']]]]]]]]])
Z([3,'emoji'])
Z([3,'0d28e5bc-1'])
Z(z[2])
Z(z[3])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'^sendEnd']],[[4],[[5],[[4],[[5],[1,'sendImageEnd']]]]]]]]])
Z([3,'image'])
Z([[7],[3,'username']])
Z([3,'0d28e5bc-2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'emoji-box']],[[2,'?:'],[[7],[3,'isShow']],[1,'emoji-move-in'],[1,'emoji-move-out']]]])
Z([[2,'=='],[[7],[3,'showTypeNum']],[1,1]])
Z(z[1])
Z([[2,'=='],[[7],[3,'showTypeNum']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'visible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'w-picker-cnt']],[[2,'?:'],[[7],[3,'showPicker']],[1,'show'],[1,'']]]])
Z([[2,'=='],[[7],[3,'mode']],[1,'linkage']])
Z([[2,'=='],[[7],[3,'mode']],[1,'half']])
Z([[2,'=='],[[7],[3,'mode']],[1,'date']])
Z([[2,'=='],[[7],[3,'mode']],[1,'yearMonth']])
Z([[2,'=='],[[7],[3,'mode']],[1,'dateTime']])
Z([[2,'=='],[[7],[3,'mode']],[1,'range']])
Z([[2,'=='],[[7],[3,'mode']],[1,'time']])
Z([[2,'=='],[[7],[3,'mode']],[1,'region']])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'pickVal']])
Z([[2,'!'],[[7],[3,'hideArea']]])
Z([[2,'=='],[[7],[3,'mode']],[1,'selector']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limit']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limitHour']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'__e'])
Z([3,'scroll-view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltoupper']],[[4],[[5],[[4],[[5],[[5],[1,'scrollToupper']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'scrollview'])
Z([[7],[3,'scrollInoViewID']])
Z([1,true])
Z(z[6])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[6],[[7],[3,'style']],[3,'contentViewHeight']],[1,'px']]],[1,';']])
Z([3,'__l'])
Z([1,3])
Z([3,' '])
Z([3,'primary'])
Z([[7],[3,'loadding']])
Z([3,'1fe38fc0-1'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'chatMsg']])
Z(z[15])
Z([[2,'==='],[[2,'%'],[[7],[3,'index']],[[7],[3,'mathNumber']]],[1,0]])
Z([3,'m-item'])
Z([[6],[[7],[3,'item']],[3,'hxMsgId']])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'fromId']],[[6],[[7],[3,'username']],[3,'myName']]])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'fromId']],[[6],[[7],[3,'username']],[3,'myName']]],[1,'m-content-head-customer'],[1,'m-content-head-home']]]])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'msg']],[3,'type']],[1,'img']],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'msg']],[3,'type']],[1,'video']]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'msg']],[3,'type']],[1,'img']])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'msg']],[3,'type']],[1,'video']])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'msg']],[3,'type']],[1,'audio']])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'msg']],[3,'type']],[1,'txt']],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'msg']],[3,'type']],[1,'emoji']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'fromId']],[[6],[[7],[3,'username']],[3,'myName']]])
Z(z[9])
Z(z[1])
Z(z[1])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^replySubmit']],[[4],[[5],[[4],[[5],[1,'replySubmit']]]]]]]],[[4],[[5],[[5],[1,'^blurClearReplyInfo']],[[4],[[5],[[4],[[5],[1,'blurClearReplyInfo']]]]]]]]])
Z([3,'replyEmoji'])
Z([3,'1fe38fc0-3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cont data-v-740d491f'])
Z([3,'__e'])
Z([3,'chat-box data-v-740d491f'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltoupper']],[[4],[[5],[[4],[[5],[[5],[1,'scrollToupper']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'scrollInoViewID']])
Z([3,'__l'])
Z([3,'data-v-740d491f'])
Z([1,3])
Z([3,' '])
Z([3,'primary'])
Z([[7],[3,'loadding']])
Z([3,'6d176f80-1'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'chatMsg']])
Z(z[12])
Z(z[6])
Z([[2,'==='],[[2,'%'],[[7],[3,'index']],[[7],[3,'mathNumber']]],[1,0]])
Z([[4],[[5],[[5],[1,'chat-item data-v-740d491f']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'fromId']],[[6],[[7],[3,'username']],[3,'myName']]],[1,'chat-kehu'],[1,'']]]])
Z([[6],[[7],[3,'item']],[3,'mid']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'fromId']],[[6],[[7],[3,'username']],[3,'yourName']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'txt']])
Z([3,'msgIndex'])
Z([3,'msgItem'])
Z([[6],[[6],[[7],[3,'item']],[3,'msg']],[3,'list']])
Z(z[22])
Z(z[6])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'type']],[1,'txt']])
Z([[2,'==='],[[6],[[7],[3,'msgItem']],[3,'type']],[1,'emoji']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'img']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'fromId']],[[6],[[7],[3,'username']],[3,'myName']]])
Z(z[5])
Z(z[1])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^replySubmit']],[[4],[[5],[[4],[[5],[1,'replySubmit']]]]]]]]])
Z([[7],[3,'username']])
Z([3,'6d176f80-2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'l'])
Z([[7],[3,'chatPeopleList']])
Z(z[0])
Z([3,'__e'])
Z([3,'co-list data-v-20f58cf2'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'puDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'chatPeopleList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'jies data-v-20f58cf2'])
Z([[6],[[6],[[6],[[6],[[7],[3,'l']],[3,'msg']],[3,'list']],[1,0]],[3,'msg']])
Z([[2,'=='],[[6],[[6],[[7],[3,'l']],[3,'msg']],[3,'type']],[1,'img']])
Z([[2,'=='],[[6],[[6],[[7],[3,'l']],[3,'msg']],[3,'type']],[1,'audio']])
Z([[2,'>'],[[6],[[7],[3,'l']],[3,'unReadCount']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'num']],[1,0]])
Z([[2,'=='],[[7],[3,'num']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[6],[[7],[3,'selectList']],[3,'length']],[1,0]])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-38d1278f vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'selector'])
Z([3,'女'])
Z(z[5])
Z([[7],[3,'selectList']])
Z([3,'#f00'])
Z([3,'0ecaa1a0-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-d04f41d6'])
Z([[7],[3,'phone']])
Z([[7],[3,'passWord']])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/badge/badge.wxml','./components/chat/emoji.wxml','./components/chat/image.wxml','./components/chat/myChatInput.wxml','./components/chatInput.wxml','./components/loadmore/loadmore.wxml','./components/uniapp-components/w-picker/w-picker.wxml','./pages/kefuPage/chat.wxml','./pages/kefuPage/kefuPage.wxml','./pages/tabBar/index/index.wxml','./pages/tabBar/mine/mine.wxml','./pages/tabBar/patient/patient.wxml','./pages/views/index/qcode.wxml','./pages/views/login/forgetPassword.wxml','./pages/views/login/login.wxml','./pages/views/login/loginConfirCode.wxml','./pages/views/login/settingPassWord.wxml','./pages/views/register/confirmCode.wxml','./pages/views/register/doctorRegister.wxml','./pages/views/register/doctorRenzheng.wxml','./pages/views/register/doctorZiZhi.wxml','./pages/views/register/newUser.wxml','./pages/views/register/settingCode.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
var xC=_n('slot')
_(oB,xC)
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var hG=_n('view')
_rz(z,hG,'class',0,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,1,e,s,gg)){oH.wxVkey=1
}
var cI=_mz(z,'chat-emoji',['bind:__l',2,'bind:newEmojiStr',1,'class',2,'data-event-opts',3,'data-ref',4,'vueId',5],[],e,s,gg)
_(hG,cI)
var oJ=_mz(z,'chat-image',['bind:__l',8,'bind:sendEnd',1,'class',2,'data-event-opts',3,'data-ref',4,'username',5,'vueId',6],[],e,s,gg)
_(hG,oJ)
oH.wxXCkey=1
_(r,hG)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var aL=_n('view')
_rz(z,aL,'class',0,e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,1,e,s,gg)){tM.wxVkey=1
var bO=_v()
_(tM,bO)
if(_oz(z,2,e,s,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,3,e,s,gg)){eN.wxVkey=1
}
tM.wxXCkey=1
eN.wxXCkey=1
_(r,aL)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var xQ=_v()
_(r,xQ)
if(_oz(z,0,e,s,gg)){xQ.wxVkey=1
}
xQ.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var fS=_n('view')
_rz(z,fS,'class',0,e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,1,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(fS,hU)
if(_oz(z,2,e,s,gg)){hU.wxVkey=1
}
var oV=_v()
_(fS,oV)
if(_oz(z,3,e,s,gg)){oV.wxVkey=1
}
var cW=_v()
_(fS,cW)
if(_oz(z,4,e,s,gg)){cW.wxVkey=1
}
var oX=_v()
_(fS,oX)
if(_oz(z,5,e,s,gg)){oX.wxVkey=1
}
var lY=_v()
_(fS,lY)
if(_oz(z,6,e,s,gg)){lY.wxVkey=1
}
var aZ=_v()
_(fS,aZ)
if(_oz(z,7,e,s,gg)){aZ.wxVkey=1
}
var t1=_v()
_(fS,t1)
if(_oz(z,8,e,s,gg)){t1.wxVkey=1
var x5=_mz(z,'picker-view',['bindchange',9,'data-event-opts',1,'indicatorStyle',2,'value',3],[],e,s,gg)
var o6=_v()
_(x5,o6)
if(_oz(z,13,e,s,gg)){o6.wxVkey=1
}
o6.wxXCkey=1
_(t1,x5)
}
var e2=_v()
_(fS,e2)
if(_oz(z,14,e,s,gg)){e2.wxVkey=1
}
var b3=_v()
_(fS,b3)
if(_oz(z,15,e,s,gg)){b3.wxVkey=1
}
var o4=_v()
_(fS,o4)
if(_oz(z,16,e,s,gg)){o4.wxVkey=1
}
cT.wxXCkey=1
hU.wxXCkey=1
oV.wxXCkey=1
cW.wxXCkey=1
oX.wxXCkey=1
lY.wxXCkey=1
aZ.wxXCkey=1
t1.wxXCkey=1
e2.wxXCkey=1
b3.wxXCkey=1
o4.wxXCkey=1
_(r,fS)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var c8=_n('view')
_rz(z,c8,'class',0,e,s,gg)
var h9=_mz(z,'scroll-view',['bindscrolltoupper',1,'class',1,'data-event-opts',2,'id',3,'scrollIntoView',4,'scrollWithAnimation',5,'scrollY',6,'style',7],[],e,s,gg)
var o0=_mz(z,'tui-loadmore',['bind:__l',9,'index',1,'text',2,'type',3,'visible',4,'vueId',5],[],e,s,gg)
_(h9,o0)
var cAB=_v()
_(h9,cAB)
var oBB=function(aDB,lCB,tEB,gg){
var bGB=_v()
_(tEB,bGB)
if(_oz(z,19,aDB,lCB,gg)){bGB.wxVkey=1
}
var oHB=_mz(z,'view',['class',20,'id',1],[],aDB,lCB,gg)
var xIB=_v()
_(oHB,xIB)
if(_oz(z,22,aDB,lCB,gg)){xIB.wxVkey=1
}
var fKB=_n('view')
_rz(z,fKB,'class',23,aDB,lCB,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,24,aDB,lCB,gg)){cLB.wxVkey=1
var oNB=_n('view')
var cOB=_v()
_(oNB,cOB)
if(_oz(z,25,aDB,lCB,gg)){cOB.wxVkey=1
}
var oPB=_v()
_(oNB,oPB)
if(_oz(z,26,aDB,lCB,gg)){oPB.wxVkey=1
}
cOB.wxXCkey=1
oPB.wxXCkey=1
_(cLB,oNB)
}
var hMB=_v()
_(fKB,hMB)
if(_oz(z,27,aDB,lCB,gg)){hMB.wxVkey=1
}
else{hMB.wxVkey=2
var lQB=_v()
_(hMB,lQB)
if(_oz(z,28,aDB,lCB,gg)){lQB.wxVkey=1
}
lQB.wxXCkey=1
}
cLB.wxXCkey=1
hMB.wxXCkey=1
_(oHB,fKB)
var oJB=_v()
_(oHB,oJB)
if(_oz(z,29,aDB,lCB,gg)){oJB.wxVkey=1
}
xIB.wxXCkey=1
oJB.wxXCkey=1
_(tEB,oHB)
bGB.wxXCkey=1
return tEB
}
cAB.wxXCkey=2
_2z(z,17,oBB,e,s,gg,cAB,'item','index','index')
_(c8,h9)
var aRB=_mz(z,'chat-input',['bind:__l',30,'bind:blurClearReplyInfo',1,'bind:replySubmit',2,'class',3,'data-event-opts',4,'data-ref',5,'vueId',6],[],e,s,gg)
_(c8,aRB)
_(r,c8)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var eTB=_n('view')
_rz(z,eTB,'class',0,e,s,gg)
var bUB=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltoupper',1,'class',1,'data-event-opts',2,'scrollIntoView',3],[],e,s,gg)
var oVB=_mz(z,'tui-loadmore',['bind:__l',5,'class',1,'index',2,'text',3,'type',4,'visible',5,'vueId',6],[],e,s,gg)
_(bUB,oVB)
var xWB=_v()
_(bUB,xWB)
var oXB=function(cZB,fYB,h1B,gg){
var c3B=_v()
_(h1B,c3B)
if(_oz(z,17,cZB,fYB,gg)){c3B.wxVkey=1
}
var o4B=_mz(z,'view',['class',18,'id',1],[],cZB,fYB,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,20,cZB,fYB,gg)){l5B.wxVkey=1
}
var a6B=_v()
_(o4B,a6B)
if(_oz(z,21,cZB,fYB,gg)){a6B.wxVkey=1
var b9B=_v()
_(a6B,b9B)
var o0B=function(oBC,xAC,fCC,gg){
var hEC=_v()
_(fCC,hEC)
if(_oz(z,27,oBC,xAC,gg)){hEC.wxVkey=1
}
var oFC=_v()
_(fCC,oFC)
if(_oz(z,28,oBC,xAC,gg)){oFC.wxVkey=1
}
hEC.wxXCkey=1
oFC.wxXCkey=1
return fCC
}
b9B.wxXCkey=2
_2z(z,24,o0B,cZB,fYB,gg,b9B,'msgItem','msgIndex','msgIndex')
}
var t7B=_v()
_(o4B,t7B)
if(_oz(z,29,cZB,fYB,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(o4B,e8B)
if(_oz(z,30,cZB,fYB,gg)){e8B.wxVkey=1
}
l5B.wxXCkey=1
a6B.wxXCkey=1
t7B.wxXCkey=1
e8B.wxXCkey=1
_(h1B,o4B)
c3B.wxXCkey=1
return h1B
}
xWB.wxXCkey=2
_2z(z,14,oXB,e,s,gg,xWB,'item','index','index')
_(eTB,bUB)
var cGC=_mz(z,'chat-input',['bind:__l',31,'bind:replySubmit',1,'class',2,'data-event-opts',3,'username',4,'vueId',5],[],e,s,gg)
_(eTB,cGC)
_(r,eTB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var lIC=_v()
_(r,lIC)
var aJC=function(eLC,tKC,bMC,gg){
var xOC=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],eLC,tKC,gg)
var oPC=_n('view')
_rz(z,oPC,'class',7,eLC,tKC,gg)
var fQC=_v()
_(oPC,fQC)
if(_oz(z,8,eLC,tKC,gg)){fQC.wxVkey=1
}
var cRC=_v()
_(oPC,cRC)
if(_oz(z,9,eLC,tKC,gg)){cRC.wxVkey=1
}
var hSC=_v()
_(oPC,hSC)
if(_oz(z,10,eLC,tKC,gg)){hSC.wxVkey=1
}
var oTC=_v()
_(oPC,oTC)
if(_oz(z,11,eLC,tKC,gg)){oTC.wxVkey=1
}
fQC.wxXCkey=1
cRC.wxXCkey=1
hSC.wxXCkey=1
oTC.wxXCkey=1
_(xOC,oPC)
_(bMC,xOC)
return bMC
}
lIC.wxXCkey=2
_2z(z,2,aJC,e,s,gg,lIC,'l','index','index')
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var eZC=_n('view')
var b1C=_v()
_(eZC,b1C)
if(_oz(z,0,e,s,gg)){b1C.wxVkey=1
}
var o2C=_v()
_(eZC,o2C)
if(_oz(z,1,e,s,gg)){o2C.wxVkey=1
}
b1C.wxXCkey=1
o2C.wxXCkey=1
_(r,eZC)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var o8C=_v()
_(r,o8C)
if(_oz(z,0,e,s,gg)){o8C.wxVkey=1
var c9C=_mz(z,'w-picker',['bind:__l',1,'bind:confirm',1,'class',2,'data-event-opts',3,'data-ref',4,'defaultVal',5,'mode',6,'selectList',7,'themeColor',8,'vueId',9],[],e,s,gg)
_(o8C,c9C)
}
o8C.wxXCkey=1
o8C.wxXCkey=3
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var tCD=_n('view')
_rz(z,tCD,'class',0,e,s,gg)
var eDD=_v()
_(tCD,eDD)
if(_oz(z,1,e,s,gg)){eDD.wxVkey=1
}
var bED=_v()
_(tCD,bED)
if(_oz(z,2,e,s,gg)){bED.wxVkey=1
}
eDD.wxXCkey=1
bED.wxXCkey=1
_(r,tCD)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tabBar/index/index","pages/tabBar/patient/patient","pages/tabBar/mine/mine","pages/views/register/newUser","pages/views/register/doctorRegister","pages/views/register/confirmCode","pages/views/register/settingCode","pages/views/register/doctorRenzheng","pages/views/register/doctorZiZhi","pages/views/login/login","pages/views/login/forgetPassword","pages/views/login/loginConfirCode","pages/views/login/settingPassWord","pages/kefuPage/kefuPage","pages/kefuPage/chat","pages/views/index/qcode"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"新版麦芽儿","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#999999","selectedColor":"#3F5A8F","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"iconPath":"static/image/tabbar/home.png","selectedIconPath":"static/image/tabbar/home_select.png","pagePath":"pages/tabBar/index/index","text":"首页"},{"iconPath":"static/image/tabbar/appreciation.png","selectedIconPath":"static/image/tabbar/appreciation_select.png","pagePath":"pages/tabBar/patient/patient","text":"患者"},{"iconPath":"static/image/tabbar/mine.png","selectedIconPath":"static/image/tabbar/mine_select.png","pagePath":"pages/tabBar/mine/mine","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"麦芽医生端","compilerVersion":"2.6.5","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/badge/badge.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/badge/badge.wxml']=$gwx('./components/badge/badge.wxml');

__wxAppCode__['components/chat/emoji.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/chat/emoji.wxml']=$gwx('./components/chat/emoji.wxml');

__wxAppCode__['components/chat/image.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/chat/image.wxml']=$gwx('./components/chat/image.wxml');

__wxAppCode__['components/chat/myChatInput.json']={"component":true,"usingComponents":{"chat-emoji":"/components/chat/emoji","chat-image":"/components/chat/image"}};
__wxAppCode__['components/chat/myChatInput.wxml']=$gwx('./components/chat/myChatInput.wxml');

__wxAppCode__['components/chatInput.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/chatInput.wxml']=$gwx('./components/chatInput.wxml');

__wxAppCode__['components/loadmore/loadmore.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/loadmore/loadmore.wxml']=$gwx('./components/loadmore/loadmore.wxml');

__wxAppCode__['components/uniapp-components/w-picker/w-picker.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uniapp-components/w-picker/w-picker.wxml']=$gwx('./components/uniapp-components/w-picker/w-picker.wxml');

__wxAppCode__['pages/kefuPage/chat.json']={"navigationBarTitleText":"患者","usingComponents":{"tui-badge":"/components/badge/badge","tui-loadmore":"/components/loadmore/loadmore","chat-input":"/components/chatInput"}};
__wxAppCode__['pages/kefuPage/chat.wxml']=$gwx('./pages/kefuPage/chat.wxml');

__wxAppCode__['pages/kefuPage/kefuPage.json']={"navigationBarTitleText":"聊天室","usingComponents":{"chat-input":"/components/chat/myChatInput","tui-loadmore":"/components/loadmore/loadmore"}};
__wxAppCode__['pages/kefuPage/kefuPage.wxml']=$gwx('./pages/kefuPage/kefuPage.wxml');

__wxAppCode__['pages/tabBar/index/index.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/tabBar/index/index.wxml']=$gwx('./pages/tabBar/index/index.wxml');

__wxAppCode__['pages/tabBar/mine/mine.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/tabBar/mine/mine.wxml']=$gwx('./pages/tabBar/mine/mine.wxml');

__wxAppCode__['pages/tabBar/patient/patient.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/tabBar/patient/patient.wxml']=$gwx('./pages/tabBar/patient/patient.wxml');

__wxAppCode__['pages/views/index/qcode.json']={"navigationBarTitleText":"分享二维码","usingComponents":{}};
__wxAppCode__['pages/views/index/qcode.wxml']=$gwx('./pages/views/index/qcode.wxml');

__wxAppCode__['pages/views/login/forgetPassword.json']={"navigationBarTitleText":"忘记密码","usingComponents":{}};
__wxAppCode__['pages/views/login/forgetPassword.wxml']=$gwx('./pages/views/login/forgetPassword.wxml');

__wxAppCode__['pages/views/login/login.json']={"navigationBarTitleText":"","usingComponents":{}};
__wxAppCode__['pages/views/login/login.wxml']=$gwx('./pages/views/login/login.wxml');

__wxAppCode__['pages/views/login/loginConfirCode.json']={"navigationBarTitleText":"确认验证码","usingComponents":{}};
__wxAppCode__['pages/views/login/loginConfirCode.wxml']=$gwx('./pages/views/login/loginConfirCode.wxml');

__wxAppCode__['pages/views/login/settingPassWord.json']={"navigationBarTitleText":"重新设置登录密码","usingComponents":{}};
__wxAppCode__['pages/views/login/settingPassWord.wxml']=$gwx('./pages/views/login/settingPassWord.wxml');

__wxAppCode__['pages/views/register/confirmCode.json']={"navigationBarTitleText":"确认验证码","usingComponents":{}};
__wxAppCode__['pages/views/register/confirmCode.wxml']=$gwx('./pages/views/register/confirmCode.wxml');

__wxAppCode__['pages/views/register/doctorRegister.json']={"navigationBarTitleText":"医生注册","usingComponents":{}};
__wxAppCode__['pages/views/register/doctorRegister.wxml']=$gwx('./pages/views/register/doctorRegister.wxml');

__wxAppCode__['pages/views/register/doctorRenzheng.json']={"navigationBarTitleText":"医生认证","usingComponents":{"w-picker":"/components/uniapp-components/w-picker/w-picker"}};
__wxAppCode__['pages/views/register/doctorRenzheng.wxml']=$gwx('./pages/views/register/doctorRenzheng.wxml');

__wxAppCode__['pages/views/register/doctorZiZhi.json']={"navigationBarTitleText":"医生资质","usingComponents":{}};
__wxAppCode__['pages/views/register/doctorZiZhi.wxml']=$gwx('./pages/views/register/doctorZiZhi.wxml');

__wxAppCode__['pages/views/register/newUser.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/views/register/newUser.wxml']=$gwx('./pages/views/register/newUser.wxml');

__wxAppCode__['pages/views/register/settingCode.json']={"navigationBarTitleText":"设置登录密码页面","usingComponents":{}};
__wxAppCode__['pages/views/register/settingCode.wxml']=$gwx('./pages/views/register/settingCode.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"5e28":function(e,t,o){"use strict";var n=o("8fe8"),a=o.n(n);a.a},"70dd":function(e,t,o){"use strict";o.r(t);var n=o("c9c0"),a=o.n(n);for(var r in n)"default"!==r&&function(e){o.d(t,e,function(){return n[e]})}(r);t["default"]=a.a},"78ad":function(e,t,o){"use strict";(function(e){o("0a10"),o("921b");var t=s(o("66fd")),n=s(o("9724")),a=s(o("a911")),r=s(o("fd68"));o("7c2c");var c=s(o("1b13")),i=s(o("c15b"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){p(e,t,o[t])})}return e}function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var l=o("c2fe")["default"],d={closed:!1,curOpenOpt:{},open:function(e){this.curOpenOpt=e,l.conn.open(e),this.closed=!1},reopen:function(){this.closed&&(l.conn.open(this.curOpenOpt),this.closed=!1)}};t.default.prototype.$im=l,t.default.prototype.$conn=d,t.default.config.productionTip=!1,t.default.prototype.$store=a.default,t.default.prototype.$http=r.default,t.default.prototype.$helper=c.default,t.default.prototype.$tool=i.default,n.default.mpType="app";var g=new t.default(u({store:a.default},n.default));e(g).$mount()}).call(this,o("6e42")["createApp"])},"8fe8":function(e,t,o){},9724:function(e,t,o){"use strict";o.r(t);var n=o("70dd");for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);o("5e28");var r,c,i,s,u=o("f0c5"),p=Object(u["a"])(n["default"],r,c,!1,null,null,null,!1,i,s);t["default"]=p.exports},c9c0:function(e,t,o){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(o("66fd"));function r(e){return e&&e.__esModule?e:{default:e}}o("deba");var c=o("e25f"),i=o("2047"),s=o("702d"),u=!1,p=!1,l={globalData:{unReadMessageNum:0,memberList:[],client:""},onLaunch:function(){var t=this,o=e.getStorageSync("isLogin");o||e.navigateTo({url:"pages/views/register/newUser"}),plus.screen.lockOrientation("portrait-primary"),e.getSystemInfo({success:function(e){n("log",e," at App.vue:62"),n("log",e.platform," at App.vue:64"),n("log",e.model," at App.vue:66")}}),e.getSystemInfo({success:function(e){var t=e.statusBarHeight,o=0;a.default.prototype.StatusBar=t,"android"==e.platform?(a.default.prototype.CustomBar=e.statusBarHeight+44,o=e.statusBarHeight+44):(a.default.prototype.CustomBar=e.statusBarHeight+45,o=e.statusBarHeight+45),a.default.mixin({data:function(){return{CustomBar:o,StatusBar:t}}})}});var r=this;s.on("em.main.ready",function(){r.calcUnReadSpot()}),s.on("em.chatroom.leave",function(){n("log","em.chatroom.leave"," at App.vue:116"),r.calcUnReadSpot()}),s.on("em.chat.session.remove",function(){r.calcUnReadSpot()}),s.on("em.chat.audio.fileLoaded",function(){r.calcUnReadSpot()}),s.on("em.main.deleteFriend",function(){r.calcUnReadSpot()}),s.on("em.chat.audio.fileLoaded",function(){r.calcUnReadSpot()}),this.$im.conn.listen({onOpened:function(o){t.$im.conn.setPresence(),n("log","环信登陆成功环信登陆成功环信登陆成功环信登陆成功环信登陆成功环信登陆成功"," at App.vue:136"),o.accessToken&&e.setStorageSync("HuanXinToken",o.accessToken),n("log",o," at App.vue:138"),p&&(e.hideToast(),p=!1)},onReconnect:function(){t.$helper.toast("loading","重连中...",2e3)},onSocketConnected:function(){n("log","环信登陆成功环信登陆成功环信登陆成功环信登陆成功环信登陆成功环信登陆成功"," at App.vue:155")},onClosed:function(){n("log","连接关闭回调"," at App.vue:158"),t.$helper.toast("none","网络已断开",2e3),e.redirectTo({url:"pages/login/login"}),t.$conn.closed=!0,t.$im.conn.close()},onInviteMessage:function(e){t.$options.globalData.saveGroupInvitedList.push(e),s.fire("em.xmpp.invite.joingroup",e)},onPresence:function(e){n("log","onPresence",e," at App.vue:182")},onRoster:function(e){n("log","连接成功回调",e," at App.vue:273")},onVideoMessage:function(e){n("log","onVideoMessage: ",e," at App.vue:281"),e&&c.saveReceiveMsg(e,i.VIDEO),t.calcUnReadSpot(e),t.ack(e)},onAudioMessage:function(e){n("log","onAudioMessage",e," at App.vue:290"),e&&(t.onMessageError(e)&&c.saveReceiveMsg(e,i.AUDIO),t.calcUnReadSpot(e),t.ack(e))},onCmdMessage:function(e){n("log","onCmdMessage",e," at App.vue:301"),e&&(t.onMessageError(e)&&c.saveReceiveMsg(e,i.CMD),t.calcUnReadSpot(e),t.ack(e))},onTextMessage:function(e){n("log","收到文本消息",e," at App.vue:319"),e&&(t.onMessageError(e)&&c.saveReceiveMsg(e,i.TEXT),t.calcUnReadSpot(e),t.ack(e))},onEmojiMessage:function(e){n("log","收到表情消息",e," at App.vue:332"),e&&(t.onMessageError(e)&&c.saveReceiveMsg(e,i.EMOJI),t.calcUnReadSpot(e),t.ack(e))},onPictureMessage:function(e){n("log","收到图片消息",e," at App.vue:343"),e&&(t.onMessageError(e)&&c.saveReceiveMsg(e,i.IMAGE),t.calcUnReadSpot(e),t.ack(e))},onFileMessage:function(e){n("log","收到文件消息",e," at App.vue:354"),e&&(t.onMessageError(e)&&c.saveReceiveMsg(e,i.FILE),t.calcUnReadSpot(e),t.ack(e))},onError:function(o){if(n("log","失败回调",o," at App.vue:366"),o.type==t.$im.statusCode.WEBIM_CONNCTION_DISCONNECTED&&!u){n("log",t.$im.conn.autoReconnectNumTotal,t.$im.conn.autoReconnectNumMax," at App.vue:369"),e.showToast({icon:"none",title:"聊天服务重连，请稍后重试",duration:1500});var a={apiUrl:t.$im.config.apiURL,user:e.getStorageSync("myUsername"),pwd:"123456",appKey:t.$im.config.appkey,success:function(t){e.hideLoading(),u=!1;t=t.access_token;e.setStorageSync("HuanXinToken",t)},error:function(){u=!0}};t.$im.conn.open(a)}if(o.type==t.$im.statusCode.WEBIM_CONNCTION_SERVER_ERROR&&(e.showToast({icon:"none",title:"账号多端登录，请重新登录",duration:1500}),setTimeout(function(){e.reLaunch({url:"/pages/login/login"})},1500)),o.type==t.$im.statusCode.WEBIM_CONNCTION_OPEN_ERROR&&s.fire("em.xmpp.error.passwordErr"),o.type==t.$im.statusCode.WEBIM_CONNCTION_AUTH_ERROR&&s.fire("em.xmpp.error.tokenErr"),"socket_error"==o.type){n("log","网络已断开socket_errorsocket_error",o," at App.vue:430");a={apiUrl:t.$im.config.apiURL,user:e.getStorageSync("myUsername"),pwd:"isong123456",appKey:t.$im.config.appkey,success:function(t){e.hideLoading(),u=!1;t=t.access_token;e.setStorageSync("HuanXinToken",t)},error:function(){u=!0}};n("log",a," at App.vue:453"),t.$im.conn.open(a)}}}),n("log","isOpened",this.$im.conn.isOpened()," at App.vue:458"),n("log",e.getStorageSync("HuanXinToken")," at App.vue:459"),n("log",e.getStorageSync("myUsername")," at App.vue:460"),n("log",e.getStorageSync(this.$store.state.userToken)," at App.vue:461"),setTimeout(function(){!t.$im.conn.isOpened()&&e.getStorageSync("HuanXinToken")&&e.getStorageSync("myUsername")&&t.$store.state.userToken&&(p=!0,t.$conn.open({apiUrl:t.$im.config.apiURL,user:e.getStorageSync("myUsername"),accessToken:e.getStorageSync("HuanXinToken"),appKey:t.$im.config.appkey}))},1e3)},methods:{onLoginSuccess:function(){e.hideToast(),e.switchTab({url:"../chat/chat"})},ack:function(e){var t=e.id,o=new this.$im.message("read",this.$im.conn.getUniqueId());o.set({id:t,to:e.from}),this.$im.conn.send(o.body)},onMessageError:function(t){return"error"!==t.type||(e.showToast({title:t.errorText}),!1)},getCurrentRoute:function(){var e=getCurrentPages(),t=e[e.length-1];return t.route},calcUnReadSpot:function(t){var o=e.getStorageSync("myUsername"),n=this.$options.globalData.memberList||[],a=n.reduce(function(t,n,a){var r;return r=n.roomId?e.getStorageSync(n.roomId+o.toLowerCase())||[]:e.getStorageSync(n.name.toLowerCase()+o.toLowerCase())||[],t+r.length},0);this.$options.globalData.unReadMessageNum=a,s.fire("em.xmpp.unreadspot",t)}},onShow:function(){},onHide:function(){}};t.default=l}).call(this,o("6e42")["default"],o("0de9")["default"])}},[["78ad","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var o, r, u = t[0], i = t[1], p = t[2], s = 0, l = []; s < u.length; s++) {
      r = u[s], a[r] && l.push(a[r][0]), a[r] = 0;
    }

    for (o in i) {
      Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
    }

    m && m(t);

    while (l.length) {
      l.shift()();
    }

    return c.push.apply(c, p || []), n();
  }

  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], o = !0, r = 1; r < n.length; r++) {
        var u = n[r];
        0 !== a[u] && (o = !1);
      }

      o && (c.splice(t--, 1), e = i(i.s = n[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      c = [];

  function u(e) {
    return i.p + "" + e + ".js";
  }

  function i(t) {
    if (o[t]) return o[t].exports;
    var n = o[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
  }

  i.e = function (e) {
    var t = [],
        n = {
      "components/uniapp-components/w-picker/w-picker": 1,
      "components/chat/myChatInput": 1,
      "components/loadmore/loadmore": 1,
      "components/badge/badge": 1,
      "components/chatInput": 1,
      "components/chat/emoji": 1
    };
    r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise(function (t, n) {
      for (var o = ({
        "components/uniapp-components/w-picker/w-picker": "components/uniapp-components/w-picker/w-picker",
        "components/chat/myChatInput": "components/chat/myChatInput",
        "components/loadmore/loadmore": "components/loadmore/loadmore",
        "components/badge/badge": "components/badge/badge",
        "components/chatInput": "components/chatInput",
        "components/chat/emoji": "components/chat/emoji",
        "components/chat/image": "components/chat/image"
      }[e] || e) + ".wxss", a = i.p + o, c = document.getElementsByTagName("link"), u = 0; u < c.length; u++) {
        var p = c[u],
            s = p.getAttribute("data-href") || p.getAttribute("href");
        if ("stylesheet" === p.rel && (s === o || s === a)) return t();
      }

      var l = document.getElementsByTagName("style");

      for (u = 0; u < l.length; u++) {
        p = l[u], s = p.getAttribute("data-href");
        if (s === o || s === a) return t();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = t, m.onerror = function (t) {
        var o = t && t.target && t.target.src || a,
            c = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        c.request = o, delete r[e], m.parentNode.removeChild(m), n(c);
      }, m.href = a;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(m);
    }).then(function () {
      r[e] = 0;
    }));
    var o = a[e];
    if (0 !== o) if (o) t.push(o[2]);else {
      var c = new Promise(function (t, n) {
        o = a[e] = [t, n];
      });
      t.push(o[2] = c);
      var p,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.src = u(e), p = function p(t) {
        s.onerror = s.onload = null, clearTimeout(l);
        var n = a[e];

        if (0 !== n) {
          if (n) {
            var o = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src,
                c = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            c.type = o, c.request = r, n[1](c);
          }

          a[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        p({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = p, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, i.m = e, i.c = o, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      i.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "/", i.oe = function (e) {
    throw console.error(e), e;
  };
  var p = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = p.push.bind(p);
  p.push = t, p = p.slice();

  for (var l = 0; l < p.length; l++) {
    t(p[l]);
  }

  var m = s;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0a10":function(e,t,l){},"0de9":function(e,t,l){"use strict";function a(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function n(){return"string"===typeof __channelId__&&__channelId__}function r(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];var r=t.shift();if(n())return t.push(t.pop().replace("at ","uni-app:///")),console[r]["apply"](console,t);var o=t.map(function(e){var t=Object.prototype.toString.call(e);if("[object object]"===t.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(n){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var l=a(e).toUpperCase();e="NUMBER"===l||"BOOLEAN"===l?"---BEGIN:"+l+"---"+e+"---END:"+l+"---":String(e)}return e}),i="";if(o.length>1){var u=o.pop();i=o.join("---COMMA---"),0===u.indexOf(" at ")?i+=u:i+="---COMMA---"+u}else i=o[0];console[r](i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},"11bc":function(e,t,l){"use strict";(function(e,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={};(function(){function t(e){this.mode=r.MODE_8BIT_BYTE,this.data=e}function n(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}t.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}},n.prototype={addData:function(e){var l=new t(e);this.dataList.push(l),this.dataCache=null},isDark:function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=b.getRSBlocks(e,this.errorCorrectLevel),l=new h,a=0,n=0;n<t.length;n++)a+=t[n].dataCount;for(n=0;n<this.dataList.length;n++){var r=this.dataList[n];l.put(r.mode,4),l.put(r.getLength(),u.getLengthInBits(r.mode,e)),r.write(l)}if(l.getLengthInBits()<=8*a)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var l=0;l<this.moduleCount;l++){this.modules[l]=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++)this.modules[l][a]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=n.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(e,t){for(var l=-1;l<=7;l++)if(!(e+l<=-1||this.moduleCount<=e+l))for(var a=-1;a<=7;a++)t+a<=-1||this.moduleCount<=t+a||(this.modules[e+l][t+a]=0<=l&&l<=6&&(0==a||6==a)||0<=a&&a<=6&&(0==l||6==l)||2<=l&&l<=4&&2<=a&&a<=4)},getBestMaskPattern:function(){for(var e=0,t=0,l=0;l<8;l++){this.makeImpl(!0,l);var a=u.getLostPoint(this);(0==l||e>a)&&(e=a,t=l)}return t},createMovieClip:function(e,t,l){var a=e.createEmptyMovieClip(t,l),n=1;this.make();for(var r=0;r<this.modules.length;r++)for(var o=r*n,i=0;i<this.modules[r].length;i++){var u=i*n,s=this.modules[r][i];s&&(a.beginFill(0,100),a.moveTo(u,o),a.lineTo(u+n,o),a.lineTo(u+n,o+n),a.lineTo(u,o+n),a.endFill())}return a},setupTimingPattern:function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},setupPositionAdjustPattern:function(){for(var e=u.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var l=0;l<e.length;l++){var a=e[t],n=e[l];if(null==this.modules[a][n])for(var r=-2;r<=2;r++)for(var o=-2;o<=2;o++)this.modules[a+r][n+o]=-2==r||2==r||-2==o||2==o||0==r&&0==o}},setupTypeNumber:function(e){for(var t=u.getBCHTypeNumber(this.typeNumber),l=0;l<18;l++){var a=!e&&1==(t>>l&1);this.modules[Math.floor(l/3)][l%3+this.moduleCount-8-3]=a}for(l=0;l<18;l++){a=!e&&1==(t>>l&1);this.modules[l%3+this.moduleCount-8-3][Math.floor(l/3)]=a}},setupTypeInfo:function(e,t){for(var l=this.errorCorrectLevel<<3|t,a=u.getBCHTypeInfo(l),n=0;n<15;n++){var r=!e&&1==(a>>n&1);n<6?this.modules[n][8]=r:n<8?this.modules[n+1][8]=r:this.modules[this.moduleCount-15+n][8]=r}for(n=0;n<15;n++){r=!e&&1==(a>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=r:n<9?this.modules[8][15-n-1+1]=r:this.modules[8][15-n-1]=r}this.modules[this.moduleCount-8][8]=!e},mapData:function(e,t){for(var l=-1,a=this.moduleCount-1,n=7,r=0,o=this.moduleCount-1;o>0;o-=2){6==o&&o--;while(1){for(var i=0;i<2;i++)if(null==this.modules[a][o-i]){var s=!1;r<e.length&&(s=1==(e[r]>>>n&1));var c=u.getMask(t,a,o-i);c&&(s=!s),this.modules[a][o-i]=s,n--,-1==n&&(r++,n=7)}if(a+=l,a<0||this.moduleCount<=a){a-=l,l=-l;break}}}}},n.PAD0=236,n.PAD1=17,n.createData=function(e,t,l){for(var a=b.getRSBlocks(e,t),r=new h,o=0;o<l.length;o++){var i=l[o];r.put(i.mode,4),r.put(i.getLength(),u.getLengthInBits(i.mode,e)),i.write(r)}var s=0;for(o=0;o<a.length;o++)s+=a[o].dataCount;if(r.getLengthInBits()>8*s)throw new Error("code length overflow. ("+r.getLengthInBits()+">"+8*s+")");r.getLengthInBits()+4<=8*s&&r.put(0,4);while(r.getLengthInBits()%8!=0)r.putBit(!1);while(1){if(r.getLengthInBits()>=8*s)break;if(r.put(n.PAD0,8),r.getLengthInBits()>=8*s)break;r.put(n.PAD1,8)}return n.createBytes(r,a)},n.createBytes=function(e,t){for(var l=0,a=0,n=0,r=new Array(t.length),o=new Array(t.length),i=0;i<t.length;i++){var s=t[i].dataCount,c=t[i].totalCount-s;a=Math.max(a,s),n=Math.max(n,c),r[i]=new Array(s);for(var b=0;b<r[i].length;b++)r[i][b]=255&e.buffer[b+l];l+=s;var h=u.getErrorCorrectPolynomial(c),d=new v(r[i],h.getLength()-1),p=d.mod(h);o[i]=new Array(h.getLength()-1);for(b=0;b<o[i].length;b++){var f=b+p.getLength()-o[i].length;o[i][b]=f>=0?p.get(f):0}}var m=0;for(b=0;b<t.length;b++)m+=t[b].totalCount;var g=new Array(m),_=0;for(b=0;b<a;b++)for(i=0;i<t.length;i++)b<r[i].length&&(g[_++]=r[i][b]);for(b=0;b<n;b++)for(i=0;i<t.length;i++)b<o[i].length&&(g[_++]=o[i][b]);return g};for(var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},o={L:1,M:0,Q:3,H:2},i={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},u={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){var t=e<<10;while(u.getBCHDigit(t)-u.getBCHDigit(u.G15)>=0)t^=u.G15<<u.getBCHDigit(t)-u.getBCHDigit(u.G15);return(e<<10|t)^u.G15_MASK},getBCHTypeNumber:function(e){var t=e<<12;while(u.getBCHDigit(t)-u.getBCHDigit(u.G18)>=0)t^=u.G18<<u.getBCHDigit(t)-u.getBCHDigit(u.G18);return e<<12|t},getBCHDigit:function(e){var t=0;while(0!=e)t++,e>>>=1;return t},getPatternPosition:function(e){return u.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,l){switch(e){case i.PATTERN000:return(t+l)%2==0;case i.PATTERN001:return t%2==0;case i.PATTERN010:return l%3==0;case i.PATTERN011:return(t+l)%3==0;case i.PATTERN100:return(Math.floor(t/2)+Math.floor(l/3))%2==0;case i.PATTERN101:return t*l%2+t*l%3==0;case i.PATTERN110:return(t*l%2+t*l%3)%2==0;case i.PATTERN111:return(t*l%3+(t+l)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new v([1],0),l=0;l<e;l++)t=t.multiply(new v([1,s.gexp(l)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:return 8;case r.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),l=0,a=0;a<t;a++)for(var n=0;n<t;n++){for(var r=0,o=e.isDark(a,n),i=-1;i<=1;i++)if(!(a+i<0||t<=a+i))for(var u=-1;u<=1;u++)n+u<0||t<=n+u||0==i&&0==u||o==e.isDark(a+i,n+u)&&r++;r>5&&(l+=3+r-5)}for(a=0;a<t-1;a++)for(n=0;n<t-1;n++){var s=0;e.isDark(a,n)&&s++,e.isDark(a+1,n)&&s++,e.isDark(a,n+1)&&s++,e.isDark(a+1,n+1)&&s++,0!=s&&4!=s||(l+=3)}for(a=0;a<t;a++)for(n=0;n<t-6;n++)e.isDark(a,n)&&!e.isDark(a,n+1)&&e.isDark(a,n+2)&&e.isDark(a,n+3)&&e.isDark(a,n+4)&&!e.isDark(a,n+5)&&e.isDark(a,n+6)&&(l+=40);for(n=0;n<t;n++)for(a=0;a<t-6;a++)e.isDark(a,n)&&!e.isDark(a+1,n)&&e.isDark(a+2,n)&&e.isDark(a+3,n)&&e.isDark(a+4,n)&&!e.isDark(a+5,n)&&e.isDark(a+6,n)&&(l+=40);var c=0;for(n=0;n<t;n++)for(a=0;a<t;a++)e.isDark(a,n)&&c++;var v=Math.abs(100*c/t/t-50)/5;return l+=10*v,l}},s={glog:function(e){if(e<1)throw new Error("glog("+e+")");return s.LOG_TABLE[e]},gexp:function(e){while(e<0)e+=255;while(e>=256)e-=255;return s.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},c=0;c<8;c++)s.EXP_TABLE[c]=1<<c;for(c=8;c<256;c++)s.EXP_TABLE[c]=s.EXP_TABLE[c-4]^s.EXP_TABLE[c-5]^s.EXP_TABLE[c-6]^s.EXP_TABLE[c-8];for(c=0;c<255;c++)s.LOG_TABLE[s.EXP_TABLE[c]]=c;function v(e,t){if(void 0==e.length)throw new Error(e.length+"/"+t);var l=0;while(l<e.length&&0==e[l])l++;this.num=new Array(e.length-l+t);for(var a=0;a<e.length-l;a++)this.num[a]=e[a+l]}function b(e,t){this.totalCount=e,this.dataCount=t}function h(){this.buffer=new Array,this.length=0}function d(e){for(var t,l="",a=0;a<e.length;a++)t=e.charCodeAt(a),t>=1&&t<=127?l+=e.charAt(a):t>2047?(l+=String.fromCharCode(224|t>>12&15),l+=String.fromCharCode(128|t>>6&63),l+=String.fromCharCode(128|t>>0&63)):(l+=String.fromCharCode(192|t>>6&31),l+=String.fromCharCode(128|t>>0&63));return l}v.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),l=0;l<this.getLength();l++)for(var a=0;a<e.getLength();a++)t[l+a]^=s.gexp(s.glog(this.get(l))+s.glog(e.get(a)));return new v(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=s.glog(this.get(0))-s.glog(e.get(0)),l=new Array(this.getLength()),a=0;a<this.getLength();a++)l[a]=this.get(a);for(a=0;a<e.getLength();a++)l[a]^=s.gexp(s.glog(e.get(a))+t);return new v(l,0).mod(e)}},b.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],b.getRSBlocks=function(e,t){var l=b.getRsBlockTable(e,t);if(void 0==l)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var a=l.length/3,n=new Array,r=0;r<a;r++)for(var o=l[3*r+0],i=l[3*r+1],u=l[3*r+2],s=0;s<o;s++)n.push(new b(i,u));return n},b.getRsBlockTable=function(e,t){switch(t){case o.L:return b.RS_BLOCK_TABLE[4*(e-1)+0];case o.M:return b.RS_BLOCK_TABLE[4*(e-1)+1];case o.Q:return b.RS_BLOCK_TABLE[4*(e-1)+2];case o.H:return b.RS_BLOCK_TABLE[4*(e-1)+3];default:return}},h.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var l=0;l<t;l++)this.putBit(1==(e>>>t-l-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},a={defaults:{size:258,margin:0,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"png",correctLevel:3,typeNumber:-1},make:function(t){var a={canvasId:t.canvasId,componentInstance:t.componentInstance,text:t.text,size:this.defaults.size,margin:this.defaults.margin,backgroundColor:this.defaults.backgroundColor,foregroundColor:this.defaults.foregroundColor,fileType:this.defaults.fileType,correctLevel:this.defaults.correctLevel,typeNumber:this.defaults.typeNumber};if(t)for(var r in t)a[r]=t[r];function o(){var e=new n(t.typeNumber,t.correctLevel);e.addData(d(t.text)),e.make();var a=l.createCanvasContext(t.canvasId,t.componentInstance);a.setFillStyle(t.backgroundColor),a.fillRect(0,0,t.size,t.size);for(var r=(t.size-2*t.margin)/e.getModuleCount(),o=r,i=0;i<e.getModuleCount();i++)for(var u=0;u<e.getModuleCount();u++){var s=e.isDark(i,u)?t.foregroundColor:t.backgroundColor;a.setFillStyle(s);var c=Math.round(u*r)+t.margin,v=Math.round(i*o)+t.margin,b=Math.ceil((u+1)*r)-Math.floor(u*r),h=Math.ceil((i+1)*r)-Math.floor(i*r);a.fillRect(c,v,b,h)}setTimeout(function(){a.draw(!1,function(){setTimeout(function(){l.canvasToTempFilePath({canvasId:t.canvasId,fileType:t.fileType,width:t.size,height:t.size,destWidth:t.size,destHeight:t.size,success:function(e){t.success&&t.success(e.tempFilePath)},fail:function(e){t.fail&&t.fail(e)},complete:function(e){t.complete&&t.complete(e)}},t.componentInstance)},t.text.length+100)})},150)}t=a,t.canvasId?o():e("error","uQRCode: Please set canvasId!"," at components\\uqrcode.js:1320")}}})();var n=a;t.default=n}).call(this,l("0de9")["default"],l("6e42")["default"])},"15b0":function(e,t,l){"use strict";(function(){function e(e){this.array=void 0===e?[]:new Array(e)}e.prototype={length:function(){return this.array.length},at:function(e){return this.array[e]},set:function(e,t){this.array[e]=t},push:function(e){return this.array.push(e)},slice:function(e,t){return this.array=this.array.slice(e,t),this.array},concat:function(e){this.array=this.array.concat(e)},remove:function(e,t){t=void 0===t?1:t,this.array.splice(e,t)},join:function(e){return this.array.join(e)},clear:function(){this.array.length=0}};var l=function(){this._array_h=new e};l.prototype={_index:0,push:function(e){this._array_h.push(e)},pop:function(){var e=null;return this._array_h.length()&&(e=this._array_h.at(this._index),2*++this._index>=this._array_h.length()&&(this._array_h.slice(this._index),this._index=0)),e},head:function(){var e=null,t=this._array_h.length();return t&&(e=this._array_h.at(t-1)),e},tail:function(){var e=null,t=this._array_h.length();return t&&(e=this._array_h.at(this._index)),e},length:function(){return this._array_h.length()-this._index},empty:function(){return 0===this._array_h.length()},clear:function(){this._array_h.clear()}},t.Queue=l})()},"1a88":function(e,t,l){"use strict";var a=[],n=[];function r(){n.push(this),a.push({})}r.prototype={on:function(e,t){var l=a[n.indexOf(this)],r=l[e]=l[e]||[];~r.indexOf(t)||r.push(t)},off:function(e,t){var l=a[n.indexOf(this)],r=l[e]=l[e]||[],o=r.indexOf(t);~o&&r.splice(o,1)},fire:function(e){for(var t=a[n.indexOf(this)],l=t[e]=t[e]||[],r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];for(var u=0;u<l.length;u++)l[u].apply(null,o)}},e.exports=r},"1b13":function(e,t,l){"use strict";(function(e){function l(t){e.navigateTo({url:t})}function a(t,l,a,n,r){a=a||1500,n=n||!1,r=r||!1,e.showToast({icon:t,title:l,duration:a,mask:n,position:r})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={to:l,toast:a};t.default=n}).call(this,l("6e42")["default"])},2047:function(e,t,l){"use strict";e.exports={IMAGE:"img",TEXT:"txt",LOCATION:"location",VIDEO:"video",AUDIO:"audio",EMOJI:"emoji",FILE:"chat",chatType:{SINGLE_CHAT:"singleChat",CHAT_ROOM:"chatRoom"}}},"2c02":function(e,t,l){"use strict";var a=l("c2fe")["default"],n=l("2047");e.exports=function(e,t,l){var r=a.time(),o={chatType:e.body.chatType,info:{from:e.body.from,to:e.body.to},username:e.body.from==l?e.body.to:e.body.from,toIf:e.body.from==l?e.body.to:e.body.from,yourname:e.body.from,fromId:e.body.from,fromAvatar:e.body.ext.fromAvatar,yonghuName:e.body.ext.yonghuName,fromName:e.body.ext.fromName,fromUserId:e.body.ext.fromUserId,hxMsgId:e.body.ext.hxMsgId,ext:e.body.ext,id:"",msgId:"",msg:{type:t,url:e.body.body.url,list:i(e,t)},style:e.body.from==l?"self":"",time:r,createTime:r,mid:e.type+e.id,type:e.type};return t==n.IMAGE?o.msg.size={width:e.body.body.size.width,height:e.body.body.size.height}:t==n.AUDIO?o.msg.length=e.body.length:t==n.FILE&&(o.msg.data=[{data:"[当前不支持此格式消息展示]",type:"txt"}],o.msg.type="txt"),o;function i(e,t){return t==n.TEXT?a.parseEmoji(e.value.replace(/\n/gm,"")):t==n.EMOJI?e.value:t==n.IMAGE||t==n.VIDEO||t==n.AUDIO?e.body.body.url:t==n.FILE?e.body.body.msg:""}}},"2f62":function(e,t,l){"use strict";l.r(t),l.d(t,"Store",function(){return d}),l.d(t,"install",function(){return I}),l.d(t,"mapState",function(){return C}),l.d(t,"mapMutations",function(){return A}),l.d(t,"mapGetters",function(){return R}),l.d(t,"mapActions",function(){return M}),l.d(t,"createNamespacedHelpers",function(){return D});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var a=function(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:a});else{var l=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[a].concat(e.init):a,l.call(this,e)}}function a(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}},n="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function r(e){n&&(e._devtoolHook=n,n.emit("vuex:init",e),n.on("vuex:travel-to-state",function(t){e.replaceState(t)}),e.subscribe(function(e,t){n.emit("vuex:mutation",e,t)}))}function o(e,t){Object.keys(e).forEach(function(l){return t(e[l],l)})}function i(e){return null!==e&&"object"===typeof e}function u(e){return e&&"function"===typeof e.then}var s=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var l=e.state;this.state=("function"===typeof l?l():l)||{}},c={namespaced:{configurable:!0}};c.namespaced.get=function(){return!!this._rawModule.namespaced},s.prototype.addChild=function(e,t){this._children[e]=t},s.prototype.removeChild=function(e){delete this._children[e]},s.prototype.getChild=function(e){return this._children[e]},s.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},s.prototype.forEachChild=function(e){o(this._children,e)},s.prototype.forEachGetter=function(e){this._rawModule.getters&&o(this._rawModule.getters,e)},s.prototype.forEachAction=function(e){this._rawModule.actions&&o(this._rawModule.actions,e)},s.prototype.forEachMutation=function(e){this._rawModule.mutations&&o(this._rawModule.mutations,e)},Object.defineProperties(s.prototype,c);var v=function(e){this.register([],e,!1)};function b(e,t,l){if(t.update(l),l.modules)for(var a in l.modules){if(!t.getChild(a))return void 0;b(e.concat(a),t.getChild(a),l.modules[a])}}v.prototype.get=function(e){return e.reduce(function(e,t){return e.getChild(t)},this.root)},v.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(e,l){return t=t.getChild(l),e+(t.namespaced?l+"/":"")},"")},v.prototype.update=function(e){b([],this.root,e)},v.prototype.register=function(e,t,l){var a=this;void 0===l&&(l=!0);var n=new s(t,l);if(0===e.length)this.root=n;else{var r=this.get(e.slice(0,-1));r.addChild(e[e.length-1],n)}t.modules&&o(t.modules,function(t,n){a.register(e.concat(n),t,l)})},v.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),l=e[e.length-1];t.getChild(l).runtime&&t.removeChild(l)};var h;var d=function(e){var t=this;void 0===e&&(e={}),!h&&"undefined"!==typeof window&&window.Vue&&I(window.Vue);var l=e.plugins;void 0===l&&(l=[]);var a=e.strict;void 0===a&&(a=!1);var n=e.state;void 0===n&&(n={}),"function"===typeof n&&(n=n()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new h;var o=this,i=this,u=i.dispatch,s=i.commit;this.dispatch=function(e,t){return u.call(o,e,t)},this.commit=function(e,t,l){return s.call(o,e,t,l)},this.strict=a,_(this,n,[],this._modules.root),g(this,n),l.forEach(function(e){return e(t)}),h.config.devtools&&r(this)},p={state:{configurable:!0}};function f(e,t){return t.indexOf(e)<0&&t.push(e),function(){var l=t.indexOf(e);l>-1&&t.splice(l,1)}}function m(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var l=e.state;_(e,l,[],e._modules.root,!0),g(e,l,t)}function g(e,t,l){var a=e._vm;e.getters={};var n=e._wrappedGetters,r={};o(n,function(t,l){r[l]=function(){return t(e)},Object.defineProperty(e.getters,l,{get:function(){return e._vm[l]},enumerable:!0})});var i=h.config.silent;h.config.silent=!0,e._vm=new h({data:{$$state:t},computed:r}),h.config.silent=i,e.strict&&w(e),a&&(l&&e._withCommit(function(){a._data.$$state=null}),h.nextTick(function(){return a.$destroy()}))}function _(e,t,l,a,n){var r=!l.length,o=e._modules.getNamespace(l);if(a.namespaced&&(e._modulesNamespaceMap[o]=a),!r&&!n){var i=S(t,l.slice(0,-1)),u=l[l.length-1];e._withCommit(function(){h.set(i,u,a.state)})}var s=a.context=y(e,o,l);a.forEachMutation(function(t,l){var a=o+l;O(e,a,t,s)}),a.forEachAction(function(t,l){var a=t.root?l:o+l,n=t.handler||t;N(e,a,n,s)}),a.forEachGetter(function(t,l){var a=o+l;T(e,a,t,s)}),a.forEachChild(function(a,r){_(e,t,l.concat(r),a,n)})}function y(e,t,l){var a=""===t,n={dispatch:a?e.dispatch:function(l,a,n){var r=x(l,a,n),o=r.payload,i=r.options,u=r.type;return i&&i.root||(u=t+u),e.dispatch(u,o)},commit:a?e.commit:function(l,a,n){var r=x(l,a,n),o=r.payload,i=r.options,u=r.type;i&&i.root||(u=t+u),e.commit(u,o,i)}};return Object.defineProperties(n,{getters:{get:a?function(){return e.getters}:function(){return E(e,t)}},state:{get:function(){return S(e.state,l)}}}),n}function E(e,t){var l={},a=t.length;return Object.keys(e.getters).forEach(function(n){if(n.slice(0,a)===t){var r=n.slice(a);Object.defineProperty(l,r,{get:function(){return e.getters[n]},enumerable:!0})}}),l}function O(e,t,l,a){var n=e._mutations[t]||(e._mutations[t]=[]);n.push(function(t){l.call(e,a.state,t)})}function N(e,t,l,a){var n=e._actions[t]||(e._actions[t]=[]);n.push(function(t,n){var r=l.call(e,{dispatch:a.dispatch,commit:a.commit,getters:a.getters,state:a.state,rootGetters:e.getters,rootState:e.state},t,n);return u(r)||(r=Promise.resolve(r)),e._devtoolHook?r.catch(function(t){throw e._devtoolHook.emit("vuex:error",t),t}):r})}function T(e,t,l,a){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return l(a.state,a.getters,e.state,e.getters)})}function w(e){e._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function S(e,t){return t.length?t.reduce(function(e,t){return e[t]},e):e}function x(e,t,l){return i(e)&&e.type&&(l=t,t=e,e=e.type),{type:e,payload:t,options:l}}function I(e){h&&e===h||(h=e,a(h))}p.state.get=function(){return this._vm._data.$$state},p.state.set=function(e){0},d.prototype.commit=function(e,t,l){var a=this,n=x(e,t,l),r=n.type,o=n.payload,i=(n.options,{type:r,payload:o}),u=this._mutations[r];u&&(this._withCommit(function(){u.forEach(function(e){e(o)})}),this._subscribers.forEach(function(e){return e(i,a.state)}))},d.prototype.dispatch=function(e,t){var l=this,a=x(e,t),n=a.type,r=a.payload,o={type:n,payload:r},i=this._actions[n];if(i)return this._actionSubscribers.forEach(function(e){return e(o,l.state)}),i.length>1?Promise.all(i.map(function(e){return e(r)})):i[0](r)},d.prototype.subscribe=function(e){return f(e,this._subscribers)},d.prototype.subscribeAction=function(e){return f(e,this._actionSubscribers)},d.prototype.watch=function(e,t,l){var a=this;return this._watcherVM.$watch(function(){return e(a.state,a.getters)},t,l)},d.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._vm._data.$$state=e})},d.prototype.registerModule=function(e,t,l){void 0===l&&(l={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),_(this,this.state,e,this._modules.get(e),l.preserveState),g(this,this.state)},d.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var l=S(t.state,e.slice(0,-1));h.delete(l,e[e.length-1])}),m(this)},d.prototype.hotUpdate=function(e){this._modules.update(e),m(this,!0)},d.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(d.prototype,p);var C=j(function(e,t){var l={};return k(t).forEach(function(t){var a=t.key,n=t.val;l[a]=function(){var t=this.$store.state,l=this.$store.getters;if(e){var a=L(this.$store,"mapState",e);if(!a)return;t=a.context.state,l=a.context.getters}return"function"===typeof n?n.call(this,t,l):t[n]},l[a].vuex=!0}),l}),A=j(function(e,t){var l={};return k(t).forEach(function(t){var a=t.key,n=t.val;l[a]=function(){var t=[],l=arguments.length;while(l--)t[l]=arguments[l];var a=this.$store.commit;if(e){var r=L(this.$store,"mapMutations",e);if(!r)return;a=r.context.commit}return"function"===typeof n?n.apply(this,[a].concat(t)):a.apply(this.$store,[n].concat(t))}}),l}),R=j(function(e,t){var l={};return k(t).forEach(function(t){var a=t.key,n=t.val;n=e+n,l[a]=function(){if(!e||L(this.$store,"mapGetters",e))return this.$store.getters[n]},l[a].vuex=!0}),l}),M=j(function(e,t){var l={};return k(t).forEach(function(t){var a=t.key,n=t.val;l[a]=function(){var t=[],l=arguments.length;while(l--)t[l]=arguments[l];var a=this.$store.dispatch;if(e){var r=L(this.$store,"mapActions",e);if(!r)return;a=r.context.dispatch}return"function"===typeof n?n.apply(this,[a].concat(t)):a.apply(this.$store,[n].concat(t))}}),l}),D=function(e){return{mapState:C.bind(null,e),mapGetters:R.bind(null,e),mapMutations:A.bind(null,e),mapActions:M.bind(null,e)}};function k(e){return Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(t){return{key:t,val:e[t]}})}function j(e){return function(t,l){return"string"!==typeof t?(l=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,l)}}function L(e,t,l){var a=e._modulesNamespaceMap[l];return a}var B={Store:d,install:I,version:"3.0.1",mapState:C,mapMutations:A,mapGetters:R,mapActions:M,createNamespacedHelpers:D};t["default"]=B},"3a3c":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],n=a;t.default=n},"3ba7":function(e,t,l){"use strict";function a(e,t){for(var l in e)t[l]=e[l]}function n(e,t){var l=e.prototype;if(Object.create){var n=Object.create(t.prototype);l.__proto__=n}if(!(l instanceof t)){var r=function(){};r.prototype=t.prototype,r=new r,a(l,r),e.prototype=l=r}l.constructor!=e&&(l.constructor=e)}var r="http://www.w3.org/1999/xhtml",o={},i=o.ELEMENT_NODE=1,u=o.ATTRIBUTE_NODE=2,s=o.TEXT_NODE=3,c=o.CDATA_SECTION_NODE=4,v=o.ENTITY_REFERENCE_NODE=5,b=o.ENTITY_NODE=6,h=o.PROCESSING_INSTRUCTION_NODE=7,d=o.COMMENT_NODE=8,p=o.DOCUMENT_NODE=9,f=o.DOCUMENT_TYPE_NODE=10,m=o.DOCUMENT_FRAGMENT_NODE=11,g=o.NOTATION_NODE=12,_={},y={},E=(_.INDEX_SIZE_ERR=(y[1]="Index size error",1),_.DOMSTRING_SIZE_ERR=(y[2]="DOMString size error",2),_.HIERARCHY_REQUEST_ERR=(y[3]="Hierarchy request error",3),_.WRONG_DOCUMENT_ERR=(y[4]="Wrong document",4),_.INVALID_CHARACTER_ERR=(y[5]="Invalid character",5),_.NO_DATA_ALLOWED_ERR=(y[6]="No data allowed",6),_.NO_MODIFICATION_ALLOWED_ERR=(y[7]="No modification allowed",7),_.NOT_FOUND_ERR=(y[8]="Not found",8)),O=(_.NOT_SUPPORTED_ERR=(y[9]="Not supported",9),_.INUSE_ATTRIBUTE_ERR=(y[10]="Attribute in use",10));_.INVALID_STATE_ERR=(y[11]="Invalid state",11),_.SYNTAX_ERR=(y[12]="Syntax error",12),_.INVALID_MODIFICATION_ERR=(y[13]="Invalid modification",13),_.NAMESPACE_ERR=(y[14]="Invalid namespace",14),_.INVALID_ACCESS_ERR=(y[15]="Invalid access",15);function N(e,t){if(t instanceof Error)var l=t;else l=this,Error.call(this,y[e]),this.message=y[e],Error.captureStackTrace&&Error.captureStackTrace(this,N);return l.code=e,t&&(this.message=this.message+": "+t),l}function T(){}function w(e,t){this._node=e,this._refresh=t,S(this)}function S(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=t){var l=e._refresh(e._node);ne(e,"length",l.length),a(l,e),e._inc=t}}function x(){}function I(e,t){var l=e.length;while(l--)if(e[l]===t)return l}function C(e,t,l,a){if(a?t[I(t,a)]=l:t[t.length++]=l,e){l.ownerElement=e;var n=e.ownerDocument;n&&(a&&B(n,e,a),L(n,e,l))}}function A(e,t,l){var a=I(t,l);if(!(a>=0))throw N(E,new Error);var n=t.length-1;while(a<n)t[a]=t[++a];if(t.length=n,e){var r=e.ownerDocument;r&&(B(r,e,l),l.ownerElement=null)}}function R(e){if(this._features={},e)for(var t in e)this._features=e[t]}function M(){}function D(e){return("<"==e?"&lt;":">"==e&&"&gt;")||"&"==e&&"&amp;"||'"'==e&&"&quot;"||"&#"+e.charCodeAt()+";"}function k(e,t){if(t(e))return!0;if(e=e.firstChild)do{if(k(e,t))return!0}while(e=e.nextSibling)}function j(){}function L(e,t,l){e&&e._inc++;var a=l.namespaceURI;"http://www.w3.org/2000/xmlns/"==a&&(t._nsMap[l.prefix?l.localName:""]=l.value)}function B(e,t,l,a){e&&e._inc++;var n=l.namespaceURI;"http://www.w3.org/2000/xmlns/"==n&&delete t._nsMap[l.prefix?l.localName:""]}function $(e,t,l){if(e&&e._inc){e._inc++;var a=t.childNodes;if(l)a[a.length++]=l;else{var n=t.firstChild,r=0;while(n)a[r++]=n,n=n.nextSibling;a.length=r}}}function P(e,t){var l=t.previousSibling,a=t.nextSibling;return l?l.nextSibling=a:e.firstChild=a,a?a.previousSibling=l:e.lastChild=l,$(e.ownerDocument,e),t}function F(e,t,l){var a=t.parentNode;if(a&&a.removeChild(t),t.nodeType===m){var n=t.firstChild;if(null==n)return t;var r=t.lastChild}else n=r=t;var o=l?l.previousSibling:e.lastChild;n.previousSibling=o,r.nextSibling=l,o?o.nextSibling=n:e.firstChild=n,null==l?e.lastChild=r:l.previousSibling=r;do{n.parentNode=e}while(n!==r&&(n=n.nextSibling));return $(e.ownerDocument||e,e),t.nodeType==m&&(t.firstChild=t.lastChild=null),t}function U(e,t){var l=t.parentNode;if(l){var a=e.lastChild;l.removeChild(t);a=e.lastChild}a=e.lastChild;return t.parentNode=e,t.previousSibling=a,t.nextSibling=null,a?a.nextSibling=t:e.firstChild=t,e.lastChild=t,$(e.ownerDocument,e,t),t}function q(){this._nsMap={}}function H(){}function W(){}function G(){}function J(){}function V(){}function z(){}function X(){}function K(){}function Q(){}function Y(){}function Z(){}function ee(){}function te(e,t,l,a){switch(e.nodeType){case i:var n=e.attributes,o=n.length,b=e.firstChild,g=e.tagName;a=r===e.namespaceURI||a,t.push("<",g),l&&t.sort.apply(n,l);for(var _=0;_<o;_++)te(n.item(_),t,l,a);if(b||a&&!/^(?:meta|link|img|br|hr|input|button)$/i.test(g)){if(t.push(">"),a&&/^script$/i.test(g))b&&t.push(b.data);else while(b)te(b,t,l,a),b=b.nextSibling;t.push("</",g,">")}else t.push("/>");return;case p:case m:b=e.firstChild;while(b)te(b,t,l,a),b=b.nextSibling;return;case u:return t.push(" ",e.name,'="',e.value.replace(/[<&"]/g,D),'"');case s:return t.push(e.data.replace(/[<&]/g,D));case c:return t.push("<![CDATA[",e.data,"]]>");case d:return t.push("\x3c!--",e.data,"--\x3e");case f:var y=e.publicId,E=e.systemId;if(t.push("<!DOCTYPE ",e.name),y)t.push(' PUBLIC "',y),E&&"."!=E&&t.push('" "',E),t.push('">');else if(E&&"."!=E)t.push(' SYSTEM "',E,'">');else{var O=e.internalSubset;O&&t.push(" [",O,"]"),t.push(">")}return;case h:return t.push("<?",e.target," ",e.data,"?>");case v:return t.push("&",e.nodeName,";");default:t.push("??",e.nodeName)}}function le(e,t,l){var a;switch(t.nodeType){case i:a=t.cloneNode(!1),a.ownerDocument=e;case m:break;case u:l=!0;break}if(a||(a=t.cloneNode(!1)),a.ownerDocument=e,a.parentNode=null,l){var n=t.firstChild;while(n)a.appendChild(le(e,n,l)),n=n.nextSibling}return a}function ae(e,t,l){var a=new t.constructor;for(var n in t){var r=t[n];"object"!=typeof r&&r!=a[n]&&(a[n]=r)}switch(t.childNodes&&(a.childNodes=new T),a.ownerDocument=e,a.nodeType){case i:var o=t.attributes,s=a.attributes=new x,c=o.length;s._ownerElement=a;for(var v=0;v<c;v++)a.setAttributeNode(ae(e,o.item(v),!0));break;case u:l=!0}if(l){var b=t.firstChild;while(b)a.appendChild(ae(e,b,l)),b=b.nextSibling}return a}function ne(e,t,l){e[t]=l}N.prototype=Error.prototype,a(_,N),T.prototype={length:0,item:function(e){return this[e]||null},toString:function(){for(var e=[],t=0;t<this.length;t++)te(this[t],e);return e.join("")}},w.prototype.item=function(e){return S(this),this[e]},n(w,T),x.prototype={length:0,item:T.prototype.item,getNamedItem:function(e){var t=this.length;while(t--){var l=this[t];if(l.nodeName==e)return l}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new N(O);var l=this.getNamedItem(e.nodeName);return C(this._ownerElement,this,e,l),l},setNamedItemNS:function(e){var t,l=e.ownerElement;if(l&&l!=this._ownerElement)throw new N(O);return t=this.getNamedItemNS(e.namespaceURI,e.localName),C(this._ownerElement,this,e,t),t},removeNamedItem:function(e){var t=this.getNamedItem(e);return A(this._ownerElement,this,t),t},removeNamedItemNS:function(e,t){var l=this.getNamedItemNS(e,t);return A(this._ownerElement,this,l),l},getNamedItemNS:function(e,t){var l=this.length;while(l--){var a=this[l];if(a.localName==t&&a.namespaceURI==e)return a}return null}},R.prototype={hasFeature:function(e,t){var l=this._features[e.toLowerCase()];return!(!l||t&&!(t in l))},createDocument:function(e,t,l){var a=new j;if(a.implementation=this,a.childNodes=new T,a.doctype=l,l&&a.appendChild(l),t){var n=a.createElementNS(e,t);a.appendChild(n)}return a},createDocumentType:function(e,t,l){var a=new z;return a.name=e,a.nodeName=e,a.publicId=t,a.systemId=l,a}},M.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,t){return F(this,e,t)},replaceChild:function(e,t){this.insertBefore(e,t),t&&this.removeChild(t)},removeChild:function(e){return P(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(e){return ae(this.ownerDocument||this,this,e)},normalize:function(){var e=this.firstChild;while(e){var t=e.nextSibling;t&&t.nodeType==s&&e.nodeType==s?(this.removeChild(t),e.appendData(t.data)):(e.normalize(),e=t)}},isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){var t=this;while(t){var l=t._nsMap;if(l)for(var a in l)if(l[a]==e)return a;t=2==t.nodeType?t.ownerDocument:t.parentNode}return null},lookupNamespaceURI:function(e){var t=this;while(t){var l=t._nsMap;if(l&&e in l)return l[e];t=2==t.nodeType?t.ownerDocument:t.parentNode}return null},isDefaultNamespace:function(e){var t=this.lookupPrefix(e);return null==t}},a(o,M),a(o,M.prototype),j.prototype={nodeName:"#document",nodeType:p,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){if(e.nodeType==m){var l=e.firstChild;while(l){var a=l.nextSibling;this.insertBefore(l,t),l=a}return e}return null==this.documentElement&&1==e.nodeType&&(this.documentElement=e),F(this,e,t),e.ownerDocument=this,e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),P(this,e)},importNode:function(e,t){return le(this,e,t)},getElementById:function(e){var t=null;return k(this.documentElement,function(l){if(1==l.nodeType&&l.getAttribute("id")==e)return t=l,!0}),t},createElement:function(e){var t=new q;t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.childNodes=new T;var l=t.attributes=new x;return l._ownerElement=t,t},createDocumentFragment:function(){var e=new Y;return e.ownerDocument=this,e.childNodes=new T,e},createTextNode:function(e){var t=new G;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new J;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){var t=new V;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var l=new Z;return l.ownerDocument=this,l.tagName=l.target=e,l.nodeValue=l.data=t,l},createAttribute:function(e){var t=new H;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new Q;return t.ownerDocument=this,t.nodeName=e,t},createElementNS:function(e,t){var l=new q,a=t.split(":"),n=l.attributes=new x;return l.childNodes=new T,l.ownerDocument=this,l.nodeName=t,l.tagName=t,l.namespaceURI=e,2==a.length?(l.prefix=a[0],l.localName=a[1]):l.localName=t,n._ownerElement=l,l},createAttributeNS:function(e,t){var l=new H,a=t.split(":");return l.ownerDocument=this,l.nodeName=t,l.name=t,l.namespaceURI=e,l.specified=!0,2==a.length?(l.prefix=a[0],l.localName=a[1]):l.localName=t,l}},n(j,M),q.prototype={nodeType:i,hasAttribute:function(e){return null!=this.getAttributeNode(e)},getAttribute:function(e){var t=this.getAttributeNode(e);return t&&t.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var l=this.ownerDocument.createAttribute(e);l.value=l.nodeValue=""+t,this.setAttributeNode(l)},removeAttribute:function(e){var t=this.getAttributeNode(e);t&&this.removeAttributeNode(t)},appendChild:function(e){return e.nodeType===m?this.insertBefore(e,null):U(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,t){var l=this.getAttributeNodeNS(e,t);l&&this.removeAttributeNode(l)},hasAttributeNS:function(e,t){return null!=this.getAttributeNodeNS(e,t)},getAttributeNS:function(e,t){var l=this.getAttributeNodeNS(e,t);return l&&l.value||""},setAttributeNS:function(e,t,l){var a=this.ownerDocument.createAttributeNS(e,t);a.value=a.nodeValue=""+l,this.setAttributeNode(a)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new w(this,function(t){var l=[];return k(t,function(a){a===t||a.nodeType!=i||"*"!==e&&a.tagName!=e||l.push(a)}),l})},getElementsByTagNameNS:function(e,t){return new w(this,function(l){var a=[];return k(l,function(n){n===l||n.nodeType!==i||"*"!==e&&n.namespaceURI!==e||"*"!==t&&n.localName!=t||a.push(n)}),a})}},j.prototype.getElementsByTagName=q.prototype.getElementsByTagName,j.prototype.getElementsByTagNameNS=q.prototype.getElementsByTagNameNS,n(q,M),H.prototype.nodeType=u,n(H,M),W.prototype={data:"",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw new Error(y[3])},deleteData:function(e,t){this.replaceData(e,t,"")},replaceData:function(e,t,l){var a=this.data.substring(0,e),n=this.data.substring(e+t);l=a+l+n,this.nodeValue=this.data=l,this.length=l.length}},n(W,M),G.prototype={nodeName:"#text",nodeType:s,splitText:function(e){var t=this.data,l=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;var a=this.ownerDocument.createTextNode(l);return this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling),a}},n(G,W),J.prototype={nodeName:"#comment",nodeType:d},n(J,W),V.prototype={nodeName:"#cdata-section",nodeType:c},n(V,W),z.prototype.nodeType=f,n(z,M),X.prototype.nodeType=g,n(X,M),K.prototype.nodeType=b,n(K,M),Q.prototype.nodeType=v,n(Q,M),Y.prototype.nodeName="#document-fragment",Y.prototype.nodeType=m,n(Y,M),Z.prototype.nodeType=h,n(Z,M),ee.prototype.serializeToString=function(e,t){return e.toString(t)},M.prototype.toString=function(e){var t=[];return te(this,t,e),t.join("")};try{if(Object.defineProperty){var re=function e(t){switch(t.nodeType){case 1:case 11:var l=[];t=t.firstChild;while(t)7!==t.nodeType&&8!==t.nodeType&&l.push(e(t)),t=t.nextSibling;return l.join("");default:return t.nodeValue}};Object.defineProperty(w.prototype,"length",{get:function(){return S(this),this.$$length}}),Object.defineProperty(M.prototype,"textContent",{get:function(){return re(this)},set:function(e){switch(this.nodeType){case 1:case 11:while(this.firstChild)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e));break;default:this.data=e,this.value=value,this.nodeValue=e}}}),ne=function(e,t,l){e["$$"+t]=l}}}catch(oe){}t.DOMImplementation=R,t.XMLSerializer=ee},"4c02":function(e,t,l){"use strict";(function(e){function l(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{},a=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(l).filter(function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),a.forEach(function(t){o(e,t,l[t])})}return e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,l){return t&&n(e.prototype,t),l&&n(e,l),e}function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function t(){var e=this;a(this,t),o(this,"config",{baseUrl:"",header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text",success:function(){},fail:function(){},complete:function(){}}),o(this,"interceptor",{request:function(t){t&&(e.requestBeforeFun=t)},response:function(t){t&&(e.requestComFun=t)}})}return r(t,[{key:"setConfig",value:function(e){this.config=e(this.config)}},{key:"request",value:function(){var a=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.baseUrl=n.baseUrl||this.config.baseUrl,n.dataType=n.dataType||this.config.dataType,n.url=t.posUrl(n.url)?n.url:n.baseUrl+n.url,n.data=n.data||{},n.header=n.header||this.config.header,n.method=n.method||this.config.method,new Promise(function(t,r){var o=!0,i=null;n.complete=function(e){var l=e.statusCode;e.config=i,e=a.requestComFun(e),200===l?t(e):r(e)};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",t={errMsg:e,config:s};r(t),o=!1},s=l({},a.config,n);i=l({},s,a.requestBeforeFun(s,u)),o&&e.request(i)})}},{key:"get",value:function(e,t){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l.url=e,l.data=t,l.method="GET",this.request(l)}},{key:"post",value:function(e,t){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l.url=e,l.data=t,l.method="POST",this.request(l)}}],[{key:"posUrl",value:function(e){return/(http|https):\/\/([\w.]+\/?)\S*/.test(e)}},{key:"requestBeforeFun",value:function(e){return e}},{key:"requestComFun",value:function(e){return e}}]),t}();t.default=i}).call(this,l("6e42")["default"])},"54ed":function(e,t,l){"use strict";var a=l("deba");(function(){var e=l("8004").utils,n=function e(t,l){return this instanceof e?(this._msg={},"function"===typeof e[t]&&(e[t].prototype.setGroup=this.setGroup,this._msg=new e[t](l)),this._msg):new e(t)};function r(e){if(!(this instanceof r))return new r(e);this.msg=e}n.prototype.setGroup=function(e){this.body.group=e},n.read=function(e){this.id=e,this.type="read"},n.read.prototype.set=function(e){this.body={ackId:e.id,to:e.to}},n.txt=function(e){this.id=e,this.type="txt",this.body={}},n.txt.prototype.set=function(e){this.value=e.msg,this.body={id:this.id,from:e.from,to:e.to,msg:this.value,type:this.type,roomType:e.roomType,chatType:e.chatType,ext:e.ext||{},success:e.success,fail:e.fail},!e.roomType&&delete this.body.roomType},n.cmd=function(e){this.id=e,this.type="cmd",this.body={}},n.cmd.prototype.set=function(e){this.value="",this.body={to:e.to,from:e.from,action:e.action,msg:this.value,type:this.type,roomType:e.roomType,ext:e.ext||{}},!e.roomType&&delete this.body.roomType},n.location=function(e){this.id=e,this.type="loc",this.body={}},n.location.prototype.set=function(e){this.body={to:e.to,from:e.from,type:this.type,roomType:e.roomType,addr:e.addr,lat:e.lat,lng:e.lng,chatType:e.chatType,ext:e.ext||{}}},n.img=function(e){this.id=e,this.type="img",this.body={}},n.img.prototype.set=function(e){this.value=e.file,this.body={id:this.id,file:this.value,apiUrl:e.apiUrl,to:e.to,from:e.from,type:this.type,ext:e.ext||{},roomType:e.roomType,onFileUploadError:e.onFileUploadError,onFileUploadComplete:e.onFileUploadComplete,success:e.success,fail:e.fail,flashUpload:e.flashUpload,width:e.width,height:e.height,body:e.body},!e.roomType&&delete this.body.roomType},n.audio=function(e){this.id=e,this.type="audio",this.body={}},n.audio.prototype.set=function(t){t.file=t.file||e.getFileUrl(t.fileInputId),this.value=t.file,this.filename=t.filename||this.value.filename,this.body={id:this.id,file:this.value,filename:this.filename,apiUrl:t.apiUrl,accessToken:t.accessToken,to:t.to,from:t.from,type:this.type,ext:t.ext||{},length:t.length||0,roomType:t.roomType,file_length:t.file_length,onFileUploadError:t.onFileUploadError,onFileUploadComplete:t.onFileUploadComplete,success:t.success,fail:t.fail,flashUpload:t.flashUpload,body:t.body},!t.roomType&&delete this.body.roomType},n.file=function(e){this.id=e,this.type="file",this.body={}},n.file.prototype.set=function(t){t.file=t.file||e.getFileUrl(t.fileInputId),this.value=t.file,this.filename=t.filename||this.value.filename,this.body={id:this.id,file:this.value,filename:this.filename,apiUrl:t.apiUrl,to:t.to,from:t.from,type:this.type,ext:t.ext||{},roomType:t.roomType,onFileUploadError:t.onFileUploadError,onFileUploadComplete:t.onFileUploadComplete,success:t.success,fail:t.fail,flashUpload:t.flashUpload,body:t.body},!t.roomType&&delete this.body.roomType},n.video=function(e){this.id=e,this.type="file",this.body={}},n.video.prototype.set=function(t){t.file=t.file||e.getFileUrl(t.fileInputId),this.value=t.file,this.filename=t.filename||this.value.filename,this.body={id:this.id,file:this.value,filename:this.filename,apiUrl:t.apiUrl,to:t.to,from:t.from,type:this.type,ext:t.ext||{},roomType:t.roomType,onFileUploadError:t.onFileUploadError,onFileUploadComplete:t.onFileUploadComplete,success:t.success,fail:t.fail,flashUpload:t.flashUpload,body:t.body},!t.roomType&&delete this.body.roomType},r.prototype.send=function(t){var l=this,n=function(l){l.ext=l.ext||{},l.ext.weichat=l.ext.weichat||{},l.ext.weichat.originType=l.ext.weichat.originType||"webim";var n={from:t.context.userId||"",to:l.to,bodies:[l.body],ext:l.ext||{}},r=e.stringify(n),o=a.$msg({type:l.group||"chat",to:l.toJid,id:l.id,xmlns:"jabber:client"}).c("body").t(r);if(l.roomType&&o.up().c("roomtype",{xmlns:"easemob:x:roomtype",type:"chatroom"}),l.bodyId){o=a.$msg({from:t.context.jid||"",to:l.toJid,id:l.id,xmlns:"jabber:client"}).c("body").t(l.bodyId);var i={xmlns:"urn:xmpp:receipts",id:l.bodyId};o.up().c("delivery",i)}if(l.ackId){if(t.context.jid.indexOf(l.toJid)>=0)return;o=a.$msg({from:t.context.jid||"",to:l.toJid,id:l.id,xmlns:"jabber:client"}).c("body").t(l.ackId);var u={xmlns:"urn:xmpp:receipts",id:l.ackId};o.up().c("acked",u)}t.sendCommand(o.tree(),l.id)};if(l.msg.file){if(l.msg.body&&l.msg.body.url)return void n(l.msg);var r=l.msg.onFileUploadComplete,o=function(e){if(e.entities[0]["file-metadata"]){var t=e.entities[0]["file-metadata"]["content-length"];l.msg.file_length=t,l.msg.filetype=e.entities[0]["file-metadata"]["content-type"],t>204800&&(l.msg.thumbnail=!0)}l.msg.body={type:l.msg.type||"file",url:e.uri+"/"+e.entities[0].uuid,secret:e.entities[0]["share-secret"],filename:l.msg.file.filename||l.msg.filename,size:{width:l.msg.width||0,height:l.msg.height||0},length:l.msg.length||0,file_length:l.msg.file_length||0,filetype:l.msg.filetype},n(l.msg),r instanceof Function&&r(e,l.msg.id)};l.msg.onFileUploadComplete=o,e.uploadFile.call(t,l.msg)}else"img"===l.msg.type?n(l.msg):(l.msg.body={type:"chat"===l.msg.type?"txt":l.msg.type,msg:l.msg.msg},"cmd"===l.msg.type?l.msg.body.action=l.msg.action:"loc"===l.msg.type&&(l.msg.body.addr=l.msg.addr,l.msg.body.lat=l.msg.lat,l.msg.body.lng=l.msg.lng),n(l.msg))},t._msg=r,t.message=n})()},5645:function(e,t,l){"use strict";function a(e){this.options=e||{locator:{}}}function n(e,t,l){if(!e){if(t instanceof r)return t;e=t}var a={},n=e instanceof Function;function o(t){var r=e[t];!r&&n&&(r=2==e.length?function(l){e(t,l)}:e),a[t]=r&&function(e){r("[xmldom "+t+"]\t"+e+i(l))}||function(){}}return l=l||{},o("warning"),o("error"),o("fatalError"),a}function r(){this.cdata=!1}function o(e,t){t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber}function i(e){if(e)return"\n@"+(e.systemId||"")+"#[line:"+e.lineNumber+",col:"+e.columnNumber+"]"}function u(e,t,l){return"string"==typeof e?e.substr(t,l):e.length>=t+l||t?new java.lang.String(e,t,l)+"":e}function s(e,t){e.currentElement?e.currentElement.appendChild(t):e.document.appendChild(t)}a.prototype.parseFromString=function(e,t){var l=this.options,a=new c,o=l.domBuilder||new r,i=l.errorHandler,u=l.locator,s=l.xmlns||{},v={lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return u&&o.setDocumentLocator(u),a.errorHandler=n(i,o,u),a.domBuilder=l.domBuilder||o,/\/x?html?$/.test(t)&&(v.nbsp=" ",v.copy="©",s[""]="http://www.w3.org/1999/xhtml"),s.xml=s.xml||"http://www.w3.org/XML/1998/namespace",e?a.parse(e,s,v):a.errorHandler.error("invalid document source"),o.document},r.prototype={startDocument:function(){this.document=(new v).createDocument(null,null,null),this.locator&&(this.document.documentURI=this.locator.systemId)},startElement:function(e,t,l,a){var n=this.document,r=n.createElementNS(e,l||t),i=a.length;s(this,r),this.currentElement=r,this.locator&&o(this.locator,r);for(var u=0;u<i;u++){e=a.getURI(u);var c=a.getValue(u),v=(l=a.getQName(u),n.createAttributeNS(e,l));v.getOffset&&o(v.getOffset(1),v),v.value=v.nodeValue=c,r.setAttributeNode(v)}},endElement:function(e,t,l){var a=this.currentElement;a.tagName;this.currentElement=a.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var l=this.document.createProcessingInstruction(e,t);this.locator&&o(this.locator,l),s(this,l)},ignorableWhitespace:function(e,t,l){},characters:function(e,t,l){if(e=u.apply(this,arguments),this.currentElement&&e){if(this.cdata){var a=this.document.createCDATASection(e);this.currentElement.appendChild(a)}else{a=this.document.createTextNode(e);this.currentElement.appendChild(a)}this.locator&&o(this.locator,a)}},skippedEntity:function(e){},endDocument:function(){this.document.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(e.lineNumber=0)},comment:function(e,t,l){e=u.apply(this,arguments);var a=this.document.createComment(e);this.locator&&o(this.locator,a),s(this,a)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,l){var a=this.document.implementation;if(a&&a.createDocumentType){var n=a.createDocumentType(e,t,l);this.locator&&o(this.locator,n),s(this,n)}},warning:function(e){},error:function(e){},fatalError:function(e){throw e}},"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(e){r.prototype[e]=function(){return null}});var c=l("9fbd").XMLReader,v=t.DOMImplementation=l("3ba7").DOMImplementation,b=t.XMLSerializer=l("3ba7").XMLSerializer;t.DOMParser=a;var a={DOMImplementation:v,XMLSerializer:b,DOMParser:a};e.exports=a},"5ab2":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=0,n=8;function r(e){return p(o(d(e),e.length*n))}function o(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var l=1732584193,a=-271733879,n=-1732584194,r=271733878,o=0;o<e.length;o+=16){var i=l,h=a,d=n,p=r;l=u(l,a,n,r,e[o+0],7,-680876936),r=u(r,l,a,n,e[o+1],12,-389564586),n=u(n,r,l,a,e[o+2],17,606105819),a=u(a,n,r,l,e[o+3],22,-1044525330),l=u(l,a,n,r,e[o+4],7,-176418897),r=u(r,l,a,n,e[o+5],12,1200080426),n=u(n,r,l,a,e[o+6],17,-1473231341),a=u(a,n,r,l,e[o+7],22,-45705983),l=u(l,a,n,r,e[o+8],7,1770035416),r=u(r,l,a,n,e[o+9],12,-1958414417),n=u(n,r,l,a,e[o+10],17,-42063),a=u(a,n,r,l,e[o+11],22,-1990404162),l=u(l,a,n,r,e[o+12],7,1804603682),r=u(r,l,a,n,e[o+13],12,-40341101),n=u(n,r,l,a,e[o+14],17,-1502002290),a=u(a,n,r,l,e[o+15],22,1236535329),l=s(l,a,n,r,e[o+1],5,-165796510),r=s(r,l,a,n,e[o+6],9,-1069501632),n=s(n,r,l,a,e[o+11],14,643717713),a=s(a,n,r,l,e[o+0],20,-373897302),l=s(l,a,n,r,e[o+5],5,-701558691),r=s(r,l,a,n,e[o+10],9,38016083),n=s(n,r,l,a,e[o+15],14,-660478335),a=s(a,n,r,l,e[o+4],20,-405537848),l=s(l,a,n,r,e[o+9],5,568446438),r=s(r,l,a,n,e[o+14],9,-1019803690),n=s(n,r,l,a,e[o+3],14,-187363961),a=s(a,n,r,l,e[o+8],20,1163531501),l=s(l,a,n,r,e[o+13],5,-1444681467),r=s(r,l,a,n,e[o+2],9,-51403784),n=s(n,r,l,a,e[o+7],14,1735328473),a=s(a,n,r,l,e[o+12],20,-1926607734),l=c(l,a,n,r,e[o+5],4,-378558),r=c(r,l,a,n,e[o+8],11,-2022574463),n=c(n,r,l,a,e[o+11],16,1839030562),a=c(a,n,r,l,e[o+14],23,-35309556),l=c(l,a,n,r,e[o+1],4,-1530992060),r=c(r,l,a,n,e[o+4],11,1272893353),n=c(n,r,l,a,e[o+7],16,-155497632),a=c(a,n,r,l,e[o+10],23,-1094730640),l=c(l,a,n,r,e[o+13],4,681279174),r=c(r,l,a,n,e[o+0],11,-358537222),n=c(n,r,l,a,e[o+3],16,-722521979),a=c(a,n,r,l,e[o+6],23,76029189),l=c(l,a,n,r,e[o+9],4,-640364487),r=c(r,l,a,n,e[o+12],11,-421815835),n=c(n,r,l,a,e[o+15],16,530742520),a=c(a,n,r,l,e[o+2],23,-995338651),l=v(l,a,n,r,e[o+0],6,-198630844),r=v(r,l,a,n,e[o+7],10,1126891415),n=v(n,r,l,a,e[o+14],15,-1416354905),a=v(a,n,r,l,e[o+5],21,-57434055),l=v(l,a,n,r,e[o+12],6,1700485571),r=v(r,l,a,n,e[o+3],10,-1894986606),n=v(n,r,l,a,e[o+10],15,-1051523),a=v(a,n,r,l,e[o+1],21,-2054922799),l=v(l,a,n,r,e[o+8],6,1873313359),r=v(r,l,a,n,e[o+15],10,-30611744),n=v(n,r,l,a,e[o+6],15,-1560198380),a=v(a,n,r,l,e[o+13],21,1309151649),l=v(l,a,n,r,e[o+4],6,-145523070),r=v(r,l,a,n,e[o+11],10,-1120210379),n=v(n,r,l,a,e[o+2],15,718787259),a=v(a,n,r,l,e[o+9],21,-343485551),l=b(l,i),a=b(a,h),n=b(n,d),r=b(r,p)}return Array(l,a,n,r)}function i(e,t,l,a,n,r){return b(h(b(b(t,e),b(a,r)),n),l)}function u(e,t,l,a,n,r,o){return i(t&l|~t&a,e,t,n,r,o)}function s(e,t,l,a,n,r,o){return i(t&a|l&~a,e,t,n,r,o)}function c(e,t,l,a,n,r,o){return i(t^l^a,e,t,n,r,o)}function v(e,t,l,a,n,r,o){return i(l^(t|~a),e,t,n,r,o)}function b(e,t){var l=(65535&e)+(65535&t),a=(e>>16)+(t>>16)+(l>>16);return a<<16|65535&l}function h(e,t){return e<<t|e>>>32-t}function d(e){for(var t=Array(),l=(1<<n)-1,a=0;a<e.length*n;a+=n)t[a>>5]|=(e.charCodeAt(a/n)&l)<<a%32;return t}function p(e){for(var t=a?"0123456789ABCDEF":"0123456789abcdef",l="",n=0;n<4*e.length;n++)l+=t.charAt(e[n>>2]>>n%4*8+4&15)+t.charAt(e[n>>2]>>n%4*8&15);return l}var f=r;t.default=f},"5af2":function(e,t,l){"use strict";(function(){var e=0;t.code={WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR:e++,WEBIM_CONNCTION_OPEN_ERROR:e++,WEBIM_CONNCTION_AUTH_ERROR:e++,WEBIM_CONNCTION_OPEN_USERGRID_ERROR:e++,WEBIM_CONNCTION_ATTACH_ERROR:e++,WEBIM_CONNCTION_ATTACH_USERGRID_ERROR:e++,WEBIM_CONNCTION_REOPEN_ERROR:e++,WEBIM_CONNCTION_SERVER_CLOSE_ERROR:e++,WEBIM_CONNCTION_SERVER_ERROR:e++,WEBIM_CONNCTION_IQ_ERROR:e++,WEBIM_CONNCTION_PING_ERROR:e++,WEBIM_CONNCTION_NOTIFYVERSION_ERROR:e++,WEBIM_CONNCTION_GETROSTER_ERROR:e++,WEBIM_CONNCTION_CROSSDOMAIN_ERROR:e++,WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES:e++,WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR:e++,WEBIM_CONNCTION_DISCONNECTED:e++,WEBIM_CONNCTION_AJAX_ERROR:e++,WEBIM_CONNCTION_JOINROOM_ERROR:e++,WEBIM_CONNCTION_GETROOM_ERROR:e++,WEBIM_CONNCTION_GETROOMINFO_ERROR:e++,WEBIM_CONNCTION_GETROOMMEMBER_ERROR:e++,WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR:e++,WEBIM_CONNCTION_LOAD_CHATROOM_ERROR:e++,WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR:e++,WEBIM_CONNCTION_JOINCHATROOM_ERROR:e++,WEBIM_CONNCTION_QUITCHATROOM_ERROR:e++,WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR:e++,WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR:e++,WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR:e++,WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR:e++,WEBIM_CONNCTION_CALLBACK_INNER_ERROR:e++,WEBIM_CONNCTION_CLIENT_OFFLINE:e++,WEBIM_CONNCTION_CLIENT_LOGOUT:e++,WEBIM_UPLOADFILE_BROWSER_ERROR:100,WEBIM_UPLOADFILE_ERROR:101,WEBIM_UPLOADFILE_NO_LOGIN:102,WEBIM_UPLOADFILE_NO_FILE:103,WEBIM_DOWNLOADFILE_ERROR:200,WEBIM_DOWNLOADFILE_NO_LOGIN:201,WEBIM_DOWNLOADFILE_BROWSER_ERROR:202,WEBIM_MESSAGE_REC_TEXT:300,WEBIM_MESSAGE_REC_TEXT_ERROR:301,WEBIM_MESSAGE_REC_EMOTION:302,WEBIM_MESSAGE_REC_PHOTO:303,WEBIM_MESSAGE_REC_AUDIO:304,WEBIM_MESSAGE_REC_AUDIO_FILE:305,WEBIM_MESSAGE_REC_VEDIO:306,WEBIM_MESSAGE_REC_VEDIO_FILE:307,WEBIM_MESSAGE_REC_FILE:308,WEBIM_MESSAGE_SED_TEXT:309,WEBIM_MESSAGE_SED_EMOTION:310,WEBIM_MESSAGE_SED_PHOTO:311,WEBIM_MESSAGE_SED_AUDIO:312,WEBIM_MESSAGE_SED_AUDIO_FILE:313,WEBIM_MESSAGE_SED_VEDIO:314,WEBIM_MESSAGE_SED_VEDIO_FILE:315,WEBIM_MESSAGE_SED_FILE:316,STATUS_INIT:400,STATUS_DOLOGIN_USERGRID:401,STATUS_DOLOGIN_IM:402,STATUS_OPENED:403,STATUS_CLOSING:404,STATUS_CLOSED:405,STATUS_ERROR:406}})()},"66fd":function(e,t,l){"use strict";l.r(t),function(e){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
var l=Object.freeze({});function a(e){return void 0===e||null===e}function n(e){return void 0!==e&&null!==e}function r(e){return!0===e}function o(e){return!1===e}function i(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function u(e){return null!==e&&"object"===typeof e}var s=Object.prototype.toString;function c(e){return"[object Object]"===s.call(e)}function v(e){return"[object RegExp]"===s.call(e)}function b(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function h(e){return n(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function d(e){return null==e?"":Array.isArray(e)||c(e)&&e.toString===s?JSON.stringify(e,null,2):String(e)}function p(e){var t=parseFloat(e);return isNaN(t)?e:t}function f(e,t){for(var l=Object.create(null),a=e.split(","),n=0;n<a.length;n++)l[a[n]]=!0;return t?function(e){return l[e.toLowerCase()]}:function(e){return l[e]}}f("slot,component",!0);var m=f("key,ref,slot,slot-scope,is");function g(e,t){if(e.length){var l=e.indexOf(t);if(l>-1)return e.splice(l,1)}}var _=Object.prototype.hasOwnProperty;function y(e,t){return _.call(e,t)}function E(e){var t=Object.create(null);return function(l){var a=t[l];return a||(t[l]=e(l))}}var O=/-(\w)/g,N=E(function(e){return e.replace(O,function(e,t){return t?t.toUpperCase():""})}),T=E(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),w=/\B([A-Z])/g,S=E(function(e){return e.replace(w,"-$1").toLowerCase()});function x(e,t){function l(l){var a=arguments.length;return a?a>1?e.apply(t,arguments):e.call(t,l):e.call(t)}return l._length=e.length,l}function I(e,t){return e.bind(t)}var C=Function.prototype.bind?I:x;function A(e,t){t=t||0;var l=e.length-t,a=new Array(l);while(l--)a[l]=e[l+t];return a}function R(e,t){for(var l in t)e[l]=t[l];return e}function M(e){for(var t={},l=0;l<e.length;l++)e[l]&&R(t,e[l]);return t}function D(e,t,l){}var k=function(e,t,l){return!1},j=function(e){return e};function L(e,t){if(e===t)return!0;var l=u(e),a=u(t);if(!l||!a)return!l&&!a&&String(e)===String(t);try{var n=Array.isArray(e),r=Array.isArray(t);if(n&&r)return e.length===t.length&&e.every(function(e,l){return L(e,t[l])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(n||r)return!1;var o=Object.keys(e),i=Object.keys(t);return o.length===i.length&&o.every(function(l){return L(e[l],t[l])})}catch(s){return!1}}function B(e,t){for(var l=0;l<e.length;l++)if(L(e[l],t))return l;return-1}function $(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var P=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:k,isReservedAttr:k,isUnknownElement:k,getTagNamespace:D,parsePlatformTagName:j,mustUseProp:k,async:!0,_lifecycleHooks:F},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function W(e,t,l,a){Object.defineProperty(e,t,{value:l,enumerable:!!a,writable:!0,configurable:!0})}var G=new RegExp("[^"+q.source+".$_\\d]");function J(e){if(!G.test(e)){var t=e.split(".");return function(e){for(var l=0;l<t.length;l++){if(!e)return;e=e[t[l]]}return e}}}var V,z="__proto__"in{},X="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=K&&WXEnvironment.platform.toLowerCase(),Y=X&&window.navigator.userAgent.toLowerCase(),Z=Y&&/msie|trident/.test(Y),ee=(Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),te=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)||"ios"===Q),le=(Y&&/chrome\/\d+/.test(Y),Y&&/phantomjs/.test(Y),Y&&Y.match(/firefox\/(\d+)/),{}.watch);if(X)try{var ae={};Object.defineProperty(ae,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ae)}catch(tn){}var ne=function(){return void 0===V&&(V=!X&&!K&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),V},re=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function oe(e){return"function"===typeof e&&/native code/.test(e.toString())}var ie,ue="undefined"!==typeof Symbol&&oe(Symbol)&&"undefined"!==typeof Reflect&&oe(Reflect.ownKeys);ie="undefined"!==typeof Set&&oe(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var se=D,ce=0,ve=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=ce++,this.subs=[]};function be(e){ve.SharedObject.targetStack.push(e),ve.SharedObject.target=e}function he(){ve.SharedObject.targetStack.pop(),ve.SharedObject.target=ve.SharedObject.targetStack[ve.SharedObject.targetStack.length-1]}ve.prototype.addSub=function(e){this.subs.push(e)},ve.prototype.removeSub=function(e){g(this.subs,e)},ve.prototype.depend=function(){ve.SharedObject.target&&ve.SharedObject.target.addDep(this)},ve.prototype.notify=function(){var e=this.subs.slice();for(var t=0,l=e.length;t<l;t++)e[t].update()},ve.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ve.SharedObject.target=null,ve.SharedObject.targetStack=[];var de=function(e,t,l,a,n,r,o,i){this.tag=e,this.data=t,this.children=l,this.text=a,this.elm=n,this.ns=void 0,this.context=r,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=i,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},pe={child:{configurable:!0}};pe.child.get=function(){return this.componentInstance},Object.defineProperties(de.prototype,pe);var fe=function(e){void 0===e&&(e="");var t=new de;return t.text=e,t.isComment=!0,t};function me(e){return new de(void 0,void 0,void 0,String(e))}function ge(e){var t=new de(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var _e=Array.prototype,ye=Object.create(_e),Ee=["push","pop","shift","unshift","splice","sort","reverse"];Ee.forEach(function(e){var t=_e[e];W(ye,e,function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var n,r=t.apply(this,l),o=this.__ob__;switch(e){case"push":case"unshift":n=l;break;case"splice":n=l.slice(2);break}return n&&o.observeArray(n),o.dep.notify(),r})});var Oe=Object.getOwnPropertyNames(ye),Ne=!0;function Te(e){Ne=e}var we=function(e){this.value=e,this.dep=new ve,this.vmCount=0,W(e,"__ob__",this),Array.isArray(e)?(z?e.push!==e.__proto__.push?xe(e,ye,Oe):Se(e,ye):xe(e,ye,Oe),this.observeArray(e)):this.walk(e)};function Se(e,t){e.__proto__=t}function xe(e,t,l){for(var a=0,n=l.length;a<n;a++){var r=l[a];W(e,r,t[r])}}function Ie(e,t){var l;if(u(e)&&!(e instanceof de))return y(e,"__ob__")&&e.__ob__ instanceof we?l=e.__ob__:Ne&&!ne()&&(Array.isArray(e)||c(e))&&Object.isExtensible(e)&&!e._isVue&&(l=new we(e)),t&&l&&l.vmCount++,l}function Ce(e,t,l,a,n){var r=new ve,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var i=o&&o.get,u=o&&o.set;i&&!u||2!==arguments.length||(l=e[t]);var s=!n&&Ie(l);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=i?i.call(e):l;return ve.SharedObject.target&&(r.depend(),s&&(s.dep.depend(),Array.isArray(t)&&Me(t))),t},set:function(t){var a=i?i.call(e):l;t===a||t!==t&&a!==a||i&&!u||(u?u.call(e,t):l=t,s=!n&&Ie(t),r.notify())}})}}function Ae(e,t,l){if(Array.isArray(e)&&b(t))return e.length=Math.max(e.length,t),e.splice(t,1,l),l;if(t in e&&!(t in Object.prototype))return e[t]=l,l;var a=e.__ob__;return e._isVue||a&&a.vmCount?l:a?(Ce(a.value,t,l),a.dep.notify(),l):(e[t]=l,l)}function Re(e,t){if(Array.isArray(e)&&b(t))e.splice(t,1);else{var l=e.__ob__;e._isVue||l&&l.vmCount||y(e,t)&&(delete e[t],l&&l.dep.notify())}}function Me(e){for(var t=void 0,l=0,a=e.length;l<a;l++)t=e[l],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Me(t)}we.prototype.walk=function(e){for(var t=Object.keys(e),l=0;l<t.length;l++)Ce(e,t[l])},we.prototype.observeArray=function(e){for(var t=0,l=e.length;t<l;t++)Ie(e[t])};var De=U.optionMergeStrategies;function ke(e,t){if(!t)return e;for(var l,a,n,r=ue?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++)l=r[o],"__ob__"!==l&&(a=e[l],n=t[l],y(e,l)?a!==n&&c(a)&&c(n)&&ke(a,n):Ae(e,l,n));return e}function je(e,t,l){return l?function(){var a="function"===typeof t?t.call(l,l):t,n="function"===typeof e?e.call(l,l):e;return a?ke(a,n):n}:t?e?function(){return ke("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function Le(e,t){var l=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return l?Be(l):l}function Be(e){for(var t=[],l=0;l<e.length;l++)-1===t.indexOf(e[l])&&t.push(e[l]);return t}function $e(e,t,l,a){var n=Object.create(e||null);return t?R(n,t):n}De.data=function(e,t,l){return l?je(e,t,l):t&&"function"!==typeof t?e:je(e,t)},F.forEach(function(e){De[e]=Le}),P.forEach(function(e){De[e+"s"]=$e}),De.watch=function(e,t,l,a){if(e===le&&(e=void 0),t===le&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var n={};for(var r in R(n,e),t){var o=n[r],i=t[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},De.props=De.methods=De.inject=De.computed=function(e,t,l,a){if(!e)return t;var n=Object.create(null);return R(n,e),t&&R(n,t),n},De.provide=je;var Pe=function(e,t){return void 0===t?e:t};function Fe(e,t){var l=e.props;if(l){var a,n,r,o={};if(Array.isArray(l)){a=l.length;while(a--)n=l[a],"string"===typeof n&&(r=N(n),o[r]={type:null})}else if(c(l))for(var i in l)n=l[i],r=N(i),o[r]=c(n)?n:{type:n};else 0;e.props=o}}function Ue(e,t){var l=e.inject;if(l){var a=e.inject={};if(Array.isArray(l))for(var n=0;n<l.length;n++)a[l[n]]={from:l[n]};else if(c(l))for(var r in l){var o=l[r];a[r]=c(o)?R({from:r},o):{from:o}}else 0}}function qe(e){var t=e.directives;if(t)for(var l in t){var a=t[l];"function"===typeof a&&(t[l]={bind:a,update:a})}}function He(e,t,l){if("function"===typeof t&&(t=t.options),Fe(t,l),Ue(t,l),qe(t),!t._base&&(t.extends&&(e=He(e,t.extends,l)),t.mixins))for(var a=0,n=t.mixins.length;a<n;a++)e=He(e,t.mixins[a],l);var r,o={};for(r in e)i(r);for(r in t)y(e,r)||i(r);function i(a){var n=De[a]||Pe;o[a]=n(e[a],t[a],l,a)}return o}function We(e,t,l,a){if("string"===typeof l){var n=e[t];if(y(n,l))return n[l];var r=N(l);if(y(n,r))return n[r];var o=T(r);if(y(n,o))return n[o];var i=n[l]||n[r]||n[o];return i}}function Ge(e,t,l,a){var n=t[e],r=!y(l,e),o=l[e],i=Xe(Boolean,n.type);if(i>-1)if(r&&!y(n,"default"))o=!1;else if(""===o||o===S(e)){var u=Xe(String,n.type);(u<0||i<u)&&(o=!0)}if(void 0===o){o=Je(a,n,e);var s=Ne;Te(!0),Ie(o),Te(s)}return o}function Je(e,t,l){if(y(t,"default")){var a=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[l]&&void 0!==e._props[l]?e._props[l]:"function"===typeof a&&"Function"!==Ve(t.type)?a.call(e):a}}function Ve(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function ze(e,t){return Ve(e)===Ve(t)}function Xe(e,t){if(!Array.isArray(t))return ze(t,e)?0:-1;for(var l=0,a=t.length;l<a;l++)if(ze(t[l],e))return l;return-1}function Ke(e,t,l){be();try{if(t){var a=t;while(a=a.$parent){var n=a.$options.errorCaptured;if(n)for(var r=0;r<n.length;r++)try{var o=!1===n[r].call(a,e,t,l);if(o)return}catch(tn){Ye(tn,a,"errorCaptured hook")}}}Ye(e,t,l)}finally{he()}}function Qe(e,t,l,a,n){var r;try{r=l?e.apply(t,l):e.call(t),r&&!r._isVue&&h(r)&&!r._handled&&(r.catch(function(e){return Ke(e,a,n+" (Promise/async)")}),r._handled=!0)}catch(tn){Ke(tn,a,n)}return r}function Ye(e,t,l){if(U.errorHandler)try{return U.errorHandler.call(null,e,t,l)}catch(tn){tn!==e&&Ze(tn,null,"config.errorHandler")}Ze(e,t,l)}function Ze(e,t,l){if(!X&&!K||"undefined"===typeof console)throw e;console.error(e)}var et,tt=[],lt=!1;function at(){lt=!1;var e=tt.slice(0);tt.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&oe(Promise)){var nt=Promise.resolve();et=function(){nt.then(at),te&&setTimeout(D)}}else if(Z||"undefined"===typeof MutationObserver||!oe(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())et="undefined"!==typeof setImmediate&&oe(setImmediate)?function(){setImmediate(at)}:function(){setTimeout(at,0)};else{var rt=1,ot=new MutationObserver(at),it=document.createTextNode(String(rt));ot.observe(it,{characterData:!0}),et=function(){rt=(rt+1)%2,it.data=String(rt)}}function ut(e,t){var l;if(tt.push(function(){if(e)try{e.call(t)}catch(tn){Ke(tn,t,"nextTick")}else l&&l(t)}),lt||(lt=!0,et()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){l=e})}var st=new ie;function ct(e){vt(e,st),st.clear()}function vt(e,t){var l,a,n=Array.isArray(e);if(!(!n&&!u(e)||Object.isFrozen(e)||e instanceof de)){if(e.__ob__){var r=e.__ob__.dep.id;if(t.has(r))return;t.add(r)}if(n){l=e.length;while(l--)vt(e[l],t)}else{a=Object.keys(e),l=a.length;while(l--)vt(e[a[l]],t)}}}var bt=E(function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var l="~"===e.charAt(0);e=l?e.slice(1):e;var a="!"===e.charAt(0);return e=a?e.slice(1):e,{name:e,once:l,capture:a,passive:t}});function ht(e,t){function l(){var e=arguments,a=l.fns;if(!Array.isArray(a))return Qe(a,null,arguments,t,"v-on handler");for(var n=a.slice(),r=0;r<n.length;r++)Qe(n[r],null,e,t,"v-on handler")}return l.fns=e,l}function dt(e,t,l,n,o,i){var u,s,c,v;for(u in e)s=e[u],c=t[u],v=bt(u),a(s)||(a(c)?(a(s.fns)&&(s=e[u]=ht(s,i)),r(v.once)&&(s=e[u]=o(v.name,s,v.capture)),l(v.name,s,v.capture,v.passive,v.params)):s!==c&&(c.fns=s,e[u]=c));for(u in t)a(e[u])&&(v=bt(u),n(v.name,t[u],v.capture))}function pt(e,t,l,r){var o=t.options.mpOptions&&t.options.mpOptions.properties;if(a(o))return l;var i=t.options.mpOptions.externalClasses||[],u=e.attrs,s=e.props;if(n(u)||n(s))for(var c in o){var v=S(c),b=mt(l,s,c,v,!0)||mt(l,u,c,v,!1);b&&l[c]&&-1!==i.indexOf(v)&&r[N(l[c])]&&(l[c]=r[N(l[c])])}return l}function ft(e,t,l,r){var o=t.options.props;if(a(o))return pt(e,t,{},r);var i={},u=e.attrs,s=e.props;if(n(u)||n(s))for(var c in o){var v=S(c);mt(i,s,c,v,!0)||mt(i,u,c,v,!1)}return pt(e,t,i,r)}function mt(e,t,l,a,r){if(n(t)){if(y(t,l))return e[l]=t[l],r||delete t[l],!0;if(y(t,a))return e[l]=t[a],r||delete t[a],!0}return!1}function gt(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function _t(e){return i(e)?[me(e)]:Array.isArray(e)?Et(e):void 0}function yt(e){return n(e)&&n(e.text)&&o(e.isComment)}function Et(e,t){var l,o,u,s,c=[];for(l=0;l<e.length;l++)o=e[l],a(o)||"boolean"===typeof o||(u=c.length-1,s=c[u],Array.isArray(o)?o.length>0&&(o=Et(o,(t||"")+"_"+l),yt(o[0])&&yt(s)&&(c[u]=me(s.text+o[0].text),o.shift()),c.push.apply(c,o)):i(o)?yt(s)?c[u]=me(s.text+o):""!==o&&c.push(me(o)):yt(o)&&yt(s)?c[u]=me(s.text+o.text):(r(e._isVList)&&n(o.tag)&&a(o.key)&&n(t)&&(o.key="__vlist"+t+"_"+l+"__"),c.push(o)));return c}function Ot(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function Nt(e){var t=Tt(e.$options.inject,e);t&&(Te(!1),Object.keys(t).forEach(function(l){Ce(e,l,t[l])}),Te(!0))}function Tt(e,t){if(e){for(var l=Object.create(null),a=ue?Reflect.ownKeys(e):Object.keys(e),n=0;n<a.length;n++){var r=a[n];if("__ob__"!==r){var o=e[r].from,i=t;while(i){if(i._provided&&y(i._provided,o)){l[r]=i._provided[o];break}i=i.$parent}if(!i)if("default"in e[r]){var u=e[r].default;l[r]="function"===typeof u?u.call(t):u}else 0}}return l}}function wt(e,t){if(!e||!e.length)return{};for(var l={},a=0,n=e.length;a<n;a++){var r=e[a],o=r.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,r.context!==t&&r.fnContext!==t||!o||null==o.slot)r.asyncMeta&&r.asyncMeta.data&&"page"===r.asyncMeta.data.slot?(l["page"]||(l["page"]=[])).push(r):(l.default||(l.default=[])).push(r);else{var i=o.slot,u=l[i]||(l[i]=[]);"template"===r.tag?u.push.apply(u,r.children||[]):u.push(r)}}for(var s in l)l[s].every(St)&&delete l[s];return l}function St(e){return e.isComment&&!e.asyncFactory||" "===e.text}function xt(e,t,a){var n,r=Object.keys(t).length>0,o=e?!!e.$stable:!r,i=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(o&&a&&a!==l&&i===a.$key&&!r&&!a.$hasNormal)return a;for(var u in n={},e)e[u]&&"$"!==u[0]&&(n[u]=It(t,u,e[u]))}else n={};for(var s in t)s in n||(n[s]=Ct(t,s));return e&&Object.isExtensible(e)&&(e._normalized=n),W(n,"$stable",o),W(n,"$key",i),W(n,"$hasNormal",r),n}function It(e,t,l){var a=function(){var e=arguments.length?l.apply(null,arguments):l({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:_t(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return l.proxy&&Object.defineProperty(e,t,{get:a,enumerable:!0,configurable:!0}),a}function Ct(e,t){return function(){return e[t]}}function At(e,t){var l,a,r,o,i;if(Array.isArray(e)||"string"===typeof e)for(l=new Array(e.length),a=0,r=e.length;a<r;a++)l[a]=t(e[a],a,a,a);else if("number"===typeof e)for(l=new Array(e),a=0;a<e;a++)l[a]=t(a+1,a,a,a);else if(u(e))if(ue&&e[Symbol.iterator]){l=[];var s=e[Symbol.iterator](),c=s.next();while(!c.done)l.push(t(c.value,l.length,a++,a)),c=s.next()}else for(o=Object.keys(e),l=new Array(o.length),a=0,r=o.length;a<r;a++)i=o[a],l[a]=t(e[i],i,a,a);return n(l)||(l=[]),l._isVList=!0,l}function Rt(e,t,l,a){var n,r=this.$scopedSlots[e];r?(l=l||{},a&&(l=R(R({},a),l)),n=r(l,this,l._i)||t):n=this.$slots[e]||t;var o=l&&l.slot;return o?this.$createElement("template",{slot:o},n):n}function Mt(e){return We(this.$options,"filters",e,!0)||j}function Dt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function kt(e,t,l,a,n){var r=U.keyCodes[t]||l;return n&&a&&!U.keyCodes[t]?Dt(n,a):r?Dt(r,e):a?S(a)!==t:void 0}function jt(e,t,l,a,n){if(l)if(u(l)){var r;Array.isArray(l)&&(l=M(l));var o=function(o){if("class"===o||"style"===o||m(o))r=e;else{var i=e.attrs&&e.attrs.type;r=a||U.mustUseProp(t,i,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var u=N(o),s=S(o);if(!(u in r)&&!(s in r)&&(r[o]=l[o],n)){var c=e.on||(e.on={});c["update:"+o]=function(e){l[o]=e}}};for(var i in l)o(i)}else;return e}function Lt(e,t){var l=this._staticTrees||(this._staticTrees=[]),a=l[e];return a&&!t?a:(a=l[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),$t(a,"__static__"+e,!1),a)}function Bt(e,t,l){return $t(e,"__once__"+t+(l?"_"+l:""),!0),e}function $t(e,t,l){if(Array.isArray(e))for(var a=0;a<e.length;a++)e[a]&&"string"!==typeof e[a]&&Pt(e[a],t+"_"+a,l);else Pt(e,t,l)}function Pt(e,t,l){e.isStatic=!0,e.key=t,e.isOnce=l}function Ft(e,t){if(t)if(c(t)){var l=e.on=e.on?R({},e.on):{};for(var a in t){var n=l[a],r=t[a];l[a]=n?[].concat(n,r):r}}else;return e}function Ut(e,t,l,a){t=t||{$stable:!l};for(var n=0;n<e.length;n++){var r=e[n];Array.isArray(r)?Ut(r,t,l):r&&(r.proxy&&(r.fn.proxy=!0),t[r.key]=r.fn)}return a&&(t.$key=a),t}function qt(e,t){for(var l=0;l<t.length;l+=2){var a=t[l];"string"===typeof a&&a&&(e[t[l]]=t[l+1])}return e}function Ht(e,t){return"string"===typeof e?t+e:e}function Wt(e){e._o=Bt,e._n=p,e._s=d,e._l=At,e._t=Rt,e._q=L,e._i=B,e._m=Lt,e._f=Mt,e._k=kt,e._b=jt,e._v=me,e._e=fe,e._u=Ut,e._g=Ft,e._d=qt,e._p=Ht}function Gt(e,t,a,n,o){var i,u=this,s=o.options;y(n,"_uid")?(i=Object.create(n),i._original=n):(i=n,n=n._original);var c=r(s._compiled),v=!c;this.data=e,this.props=t,this.children=a,this.parent=n,this.listeners=e.on||l,this.injections=Tt(s.inject,n),this.slots=function(){return u.$slots||xt(e.scopedSlots,u.$slots=wt(a,n)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return xt(e.scopedSlots,this.slots())}}),c&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=xt(e.scopedSlots,this.$slots)),s._scopeId?this._c=function(e,t,l,a){var r=nl(i,e,t,l,a,v);return r&&!Array.isArray(r)&&(r.fnScopeId=s._scopeId,r.fnContext=n),r}:this._c=function(e,t,l,a){return nl(i,e,t,l,a,v)}}function Jt(e,t,a,r,o){var i=e.options,u={},s=i.props;if(n(s))for(var c in s)u[c]=Ge(c,s,t||l);else n(a.attrs)&&zt(u,a.attrs),n(a.props)&&zt(u,a.props);var v=new Gt(a,u,o,r,e),b=i.render.call(null,v._c,v);if(b instanceof de)return Vt(b,a,v.parent,i,v);if(Array.isArray(b)){for(var h=_t(b)||[],d=new Array(h.length),p=0;p<h.length;p++)d[p]=Vt(h[p],a,v.parent,i,v);return d}}function Vt(e,t,l,a,n){var r=ge(e);return r.fnContext=l,r.fnOptions=a,t.slot&&((r.data||(r.data={})).slot=t.slot),r}function zt(e,t){for(var l in t)e[N(l)]=t[l]}Wt(Gt.prototype);var Xt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var l=e;Xt.prepatch(l,l)}else{var a=e.componentInstance=Yt(e,Nl);a.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var l=t.componentOptions,a=t.componentInstance=e.componentInstance;xl(a,l.propsData,l.listeners,t,l.children)},insert:function(e){var t=e.context,l=e.componentInstance;l._isMounted||(Rl(l,"onServiceCreated"),Rl(l,"onServiceAttached"),l._isMounted=!0,Rl(l,"mounted")),e.data.keepAlive&&(t._isMounted?Hl(l):Cl(l,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Al(t,!0):t.$destroy())}},Kt=Object.keys(Xt);function Qt(e,t,l,o,i){if(!a(e)){var s=l.$options._base;if(u(e)&&(e=s.extend(e)),"function"===typeof e){var c;if(a(e.cid)&&(c=e,e=dl(c,s),void 0===e))return hl(c,t,l,o,i);t=t||{},ba(e),n(t.model)&&tl(e.options,t);var v=ft(t,e,i,l);if(r(e.options.functional))return Jt(e,v,t,l,o);var b=t.on;if(t.on=t.nativeOn,r(e.options.abstract)){var h=t.slot;t={},h&&(t.slot=h)}Zt(t);var d=e.options.name||i,p=new de("vue-component-"+e.cid+(d?"-"+d:""),t,void 0,void 0,void 0,l,{Ctor:e,propsData:v,listeners:b,tag:i,children:o},c);return p}}}function Yt(e,t){var l={_isComponent:!0,_parentVnode:e,parent:t},a=e.data.inlineTemplate;return n(a)&&(l.render=a.render,l.staticRenderFns=a.staticRenderFns),new e.componentOptions.Ctor(l)}function Zt(e){for(var t=e.hook||(e.hook={}),l=0;l<Kt.length;l++){var a=Kt[l],n=t[a],r=Xt[a];n===r||n&&n._merged||(t[a]=n?el(r,n):r)}}function el(e,t){var l=function(l,a){e(l,a),t(l,a)};return l._merged=!0,l}function tl(e,t){var l=e.model&&e.model.prop||"value",a=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[l]=t.model.value;var r=t.on||(t.on={}),o=r[a],i=t.model.callback;n(o)?(Array.isArray(o)?-1===o.indexOf(i):o!==i)&&(r[a]=[i].concat(o)):r[a]=i}var ll=1,al=2;function nl(e,t,l,a,n,o){return(Array.isArray(l)||i(l))&&(n=a,a=l,l=void 0),r(o)&&(n=al),rl(e,t,l,a,n)}function rl(e,t,l,a,r){if(n(l)&&n(l.__ob__))return fe();if(n(l)&&n(l.is)&&(t=l.is),!t)return fe();var o,i,u;(Array.isArray(a)&&"function"===typeof a[0]&&(l=l||{},l.scopedSlots={default:a[0]},a.length=0),r===al?a=_t(a):r===ll&&(a=gt(a)),"string"===typeof t)?(i=e.$vnode&&e.$vnode.ns||U.getTagNamespace(t),o=U.isReservedTag(t)?new de(U.parsePlatformTagName(t),l,a,void 0,void 0,e):l&&l.pre||!n(u=We(e.$options,"components",t))?new de(t,l,a,void 0,void 0,e):Qt(u,l,e,a,t)):o=Qt(t,l,e,a);return Array.isArray(o)?o:n(o)?(n(i)&&ol(o,i),n(l)&&il(l),o):fe()}function ol(e,t,l){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,l=!0),n(e.children))for(var o=0,i=e.children.length;o<i;o++){var u=e.children[o];n(u.tag)&&(a(u.ns)||r(l)&&"svg"!==u.tag)&&ol(u,t,l)}}function il(e){u(e.style)&&ct(e.style),u(e.class)&&ct(e.class)}function ul(e){e._vnode=null,e._staticTrees=null;var t=e.$options,a=e.$vnode=t._parentVnode,n=a&&a.context;e.$slots=wt(t._renderChildren,n),e.$scopedSlots=l,e._c=function(t,l,a,n){return nl(e,t,l,a,n,!1)},e.$createElement=function(t,l,a,n){return nl(e,t,l,a,n,!0)};var r=a&&a.data;Ce(e,"$attrs",r&&r.attrs||l,null,!0),Ce(e,"$listeners",t._parentListeners||l,null,!0)}var sl,cl=null;function vl(e){Wt(e.prototype),e.prototype.$nextTick=function(e){return ut(e,this)},e.prototype._render=function(){var e,t=this,l=t.$options,a=l.render,n=l._parentVnode;n&&(t.$scopedSlots=xt(n.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=n;try{cl=t,e=a.call(t._renderProxy,t.$createElement)}catch(tn){Ke(tn,t,"render"),e=t._vnode}finally{cl=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof de||(e=fe()),e.parent=n,e}}function bl(e,t){return(e.__esModule||ue&&"Module"===e[Symbol.toStringTag])&&(e=e.default),u(e)?t.extend(e):e}function hl(e,t,l,a,n){var r=fe();return r.asyncFactory=e,r.asyncMeta={data:t,context:l,children:a,tag:n},r}function dl(e,t){if(r(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var l=cl;if(l&&n(e.owners)&&-1===e.owners.indexOf(l)&&e.owners.push(l),r(e.loading)&&n(e.loadingComp))return e.loadingComp;if(l&&!n(e.owners)){var o=e.owners=[l],i=!0,s=null,c=null;l.$on("hook:destroyed",function(){return g(o,l)});var v=function(e){for(var t=0,l=o.length;t<l;t++)o[t].$forceUpdate();e&&(o.length=0,null!==s&&(clearTimeout(s),s=null),null!==c&&(clearTimeout(c),c=null))},b=$(function(l){e.resolved=bl(l,t),i?o.length=0:v(!0)}),d=$(function(t){n(e.errorComp)&&(e.error=!0,v(!0))}),p=e(b,d);return u(p)&&(h(p)?a(e.resolved)&&p.then(b,d):h(p.component)&&(p.component.then(b,d),n(p.error)&&(e.errorComp=bl(p.error,t)),n(p.loading)&&(e.loadingComp=bl(p.loading,t),0===p.delay?e.loading=!0:s=setTimeout(function(){s=null,a(e.resolved)&&a(e.error)&&(e.loading=!0,v(!1))},p.delay||200)),n(p.timeout)&&(c=setTimeout(function(){c=null,a(e.resolved)&&d(null)},p.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function pl(e){return e.isComment&&e.asyncFactory}function fl(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var l=e[t];if(n(l)&&(n(l.componentOptions)||pl(l)))return l}}function ml(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&El(e,t)}function gl(e,t){sl.$on(e,t)}function _l(e,t){sl.$off(e,t)}function yl(e,t){var l=sl;return function a(){var n=t.apply(null,arguments);null!==n&&l.$off(e,a)}}function El(e,t,l){sl=e,dt(t,l||{},gl,_l,yl,e),sl=void 0}function Ol(e){var t=/^hook:/;e.prototype.$on=function(e,l){var a=this;if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)a.$on(e[n],l);else(a._events[e]||(a._events[e]=[])).push(l),t.test(e)&&(a._hasHookEvent=!0);return a},e.prototype.$once=function(e,t){var l=this;function a(){l.$off(e,a),t.apply(l,arguments)}return a.fn=t,l.$on(e,a),l},e.prototype.$off=function(e,t){var l=this;if(!arguments.length)return l._events=Object.create(null),l;if(Array.isArray(e)){for(var a=0,n=e.length;a<n;a++)l.$off(e[a],t);return l}var r,o=l._events[e];if(!o)return l;if(!t)return l._events[e]=null,l;var i=o.length;while(i--)if(r=o[i],r===t||r.fn===t){o.splice(i,1);break}return l},e.prototype.$emit=function(e){var t=this,l=t._events[e];if(l){l=l.length>1?A(l):l;for(var a=A(arguments,1),n='event handler for "'+e+'"',r=0,o=l.length;r<o;r++)Qe(l[r],t,a,t,n)}return t}}var Nl=null;function Tl(e){var t=Nl;return Nl=e,function(){Nl=t}}function wl(e){var t=e.$options,l=t.parent;if(l&&!t.abstract){while(l.$options.abstract&&l.$parent)l=l.$parent;l.$children.push(e)}e.$parent=l,e.$root=l?l.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Sl(e){e.prototype._update=function(e,t){var l=this,a=l.$el,n=l._vnode,r=Tl(l);l._vnode=e,l.$el=n?l.__patch__(n,e):l.__patch__(l.$el,e,t,!1),r(),a&&(a.__vue__=null),l.$el&&(l.$el.__vue__=l),l.$vnode&&l.$parent&&l.$vnode===l.$parent._vnode&&(l.$parent.$el=l.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Rl(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||g(t.$children,e),e._watcher&&e._watcher.teardown();var l=e._watchers.length;while(l--)e._watchers[l].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Rl(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function xl(e,t,a,n,r){var o=n.data.scopedSlots,i=e.$scopedSlots,u=!!(o&&!o.$stable||i!==l&&!i.$stable||o&&e.$scopedSlots.$key!==o.$key),s=!!(r||e.$options._renderChildren||u);if(e.$options._parentVnode=n,e.$vnode=n,e._vnode&&(e._vnode.parent=n),e.$options._renderChildren=r,e.$attrs=n.data.attrs||l,e.$listeners=a||l,t&&e.$options.props){Te(!1);for(var c=e._props,v=e.$options._propKeys||[],b=0;b<v.length;b++){var h=v[b],d=e.$options.props;c[h]=Ge(h,d,t,e)}Te(!0),e.$options.propsData=t}e._$updateProperties&&e._$updateProperties(e),a=a||l;var p=e.$options._parentListeners;e.$options._parentListeners=a,El(e,a,p),s&&(e.$slots=wt(r,n.context),e.$forceUpdate())}function Il(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Cl(e,t){if(t){if(e._directInactive=!1,Il(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var l=0;l<e.$children.length;l++)Cl(e.$children[l]);Rl(e,"activated")}}function Al(e,t){if((!t||(e._directInactive=!0,!Il(e)))&&!e._inactive){e._inactive=!0;for(var l=0;l<e.$children.length;l++)Al(e.$children[l]);Rl(e,"deactivated")}}function Rl(e,t){be();var l=e.$options[t],a=t+" hook";if(l)for(var n=0,r=l.length;n<r;n++)Qe(l[n],e,null,e,a);e._hasHookEvent&&e.$emit("hook:"+t),he()}var Ml=[],Dl=[],kl={},jl=!1,Ll=!1,Bl=0;function $l(){Bl=Ml.length=Dl.length=0,kl={},jl=Ll=!1}var Pl=Date.now;if(X&&!Z){var Fl=window.performance;Fl&&"function"===typeof Fl.now&&Pl()>document.createEvent("Event").timeStamp&&(Pl=function(){return Fl.now()})}function Ul(){var e,t;for(Pl(),Ll=!0,Ml.sort(function(e,t){return e.id-t.id}),Bl=0;Bl<Ml.length;Bl++)e=Ml[Bl],e.before&&e.before(),t=e.id,kl[t]=null,e.run();var l=Dl.slice(),a=Ml.slice();$l(),Wl(l),ql(a),re&&U.devtools&&re.emit("flush")}function ql(e){var t=e.length;while(t--){var l=e[t],a=l.vm;a._watcher===l&&a._isMounted&&!a._isDestroyed&&Rl(a,"updated")}}function Hl(e){e._inactive=!1,Dl.push(e)}function Wl(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Cl(e[t],!0)}function Gl(e){var t=e.id;if(null==kl[t]){if(kl[t]=!0,Ll){var l=Ml.length-1;while(l>Bl&&Ml[l].id>e.id)l--;Ml.splice(l+1,0,e)}else Ml.push(e);jl||(jl=!0,ut(Ul))}}var Jl=0,Vl=function(e,t,l,a,n){this.vm=e,n&&(e._watcher=this),e._watchers.push(this),a?(this.deep=!!a.deep,this.user=!!a.user,this.lazy=!!a.lazy,this.sync=!!a.sync,this.before=a.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=l,this.id=++Jl,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ie,this.newDepIds=new ie,this.expression="","function"===typeof t?this.getter=t:(this.getter=J(t),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()};Vl.prototype.get=function(){var e;be(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(tn){if(!this.user)throw tn;Ke(tn,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ct(e),he(),this.cleanupDeps()}return e},Vl.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Vl.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var l=this.depIds;this.depIds=this.newDepIds,this.newDepIds=l,this.newDepIds.clear(),l=this.deps,this.deps=this.newDeps,this.newDeps=l,this.newDeps.length=0},Vl.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Gl(this)},Vl.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(tn){Ke(tn,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},Vl.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Vl.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Vl.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var zl={enumerable:!0,configurable:!0,get:D,set:D};function Xl(e,t,l){zl.get=function(){return this[t][l]},zl.set=function(e){this[t][l]=e},Object.defineProperty(e,l,zl)}function Kl(e){e._watchers=[];var t=e.$options;t.props&&Ql(e,t.props),t.methods&&ra(e,t.methods),t.data?Yl(e):Ie(e._data={},!0),t.computed&&ta(e,t.computed),t.watch&&t.watch!==le&&oa(e,t.watch)}function Ql(e,t){var l=e.$options.propsData||{},a=e._props={},n=e.$options._propKeys=[],r=!e.$parent;r||Te(!1);var o=function(r){n.push(r);var o=Ge(r,t,l,e);Ce(a,r,o),r in e||Xl(e,"_props",r)};for(var i in t)o(i);Te(!0)}function Yl(e){var t=e.$options.data;t=e._data="function"===typeof t?Zl(t,e):t||{},c(t)||(t={});var l=Object.keys(t),a=e.$options.props,n=(e.$options.methods,l.length);while(n--){var r=l[n];0,a&&y(a,r)||H(r)||Xl(e,"_data",r)}Ie(t,!0)}function Zl(e,t){be();try{return e.call(t,t)}catch(tn){return Ke(tn,t,"data()"),{}}finally{he()}}var ea={lazy:!0};function ta(e,t){var l=e._computedWatchers=Object.create(null),a=ne();for(var n in t){var r=t[n],o="function"===typeof r?r:r.get;0,a||(l[n]=new Vl(e,o||D,D,ea)),n in e||la(e,n,r)}}function la(e,t,l){var a=!ne();"function"===typeof l?(zl.get=a?aa(t):na(l),zl.set=D):(zl.get=l.get?a&&!1!==l.cache?aa(t):na(l.get):D,zl.set=l.set||D),Object.defineProperty(e,t,zl)}function aa(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ve.SharedObject.target&&t.depend(),t.value}}function na(e){return function(){return e.call(this,this)}}function ra(e,t){e.$options.props;for(var l in t)e[l]="function"!==typeof t[l]?D:C(t[l],e)}function oa(e,t){for(var l in t){var a=t[l];if(Array.isArray(a))for(var n=0;n<a.length;n++)ia(e,l,a[n]);else ia(e,l,a)}}function ia(e,t,l,a){return c(l)&&(a=l,l=l.handler),"string"===typeof l&&(l=e[l]),e.$watch(t,l,a)}function ua(e){var t={get:function(){return this._data}},l={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",l),e.prototype.$set=Ae,e.prototype.$delete=Re,e.prototype.$watch=function(e,t,l){var a=this;if(c(t))return ia(a,e,t,l);l=l||{},l.user=!0;var n=new Vl(a,e,t,l);if(l.immediate)try{t.call(a,n.value)}catch(r){Ke(r,a,'callback for immediate watcher "'+n.expression+'"')}return function(){n.teardown()}}}var sa=0;function ca(e){e.prototype._init=function(e){var t=this;t._uid=sa++,t._isVue=!0,e&&e._isComponent?va(t,e):t.$options=He(ba(t.constructor),e||{},t),t._renderProxy=t,t._self=t,wl(t),ml(t),ul(t),Rl(t,"beforeCreate"),"mp-toutiao"!==t.mpHost&&Nt(t),Kl(t),"mp-toutiao"!==t.mpHost&&Ot(t),"mp-toutiao"!==t.mpHost&&Rl(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function va(e,t){var l=e.$options=Object.create(e.constructor.options),a=t._parentVnode;l.parent=t.parent,l._parentVnode=a;var n=a.componentOptions;l.propsData=n.propsData,l._parentListeners=n.listeners,l._renderChildren=n.children,l._componentTag=n.tag,t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns)}function ba(e){var t=e.options;if(e.super){var l=ba(e.super),a=e.superOptions;if(l!==a){e.superOptions=l;var n=ha(e);n&&R(e.extendOptions,n),t=e.options=He(l,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function ha(e){var t,l=e.options,a=e.sealedOptions;for(var n in l)l[n]!==a[n]&&(t||(t={}),t[n]=l[n]);return t}function da(e){this._init(e)}function pa(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var l=A(arguments,1);return l.unshift(this),"function"===typeof e.install?e.install.apply(e,l):"function"===typeof e&&e.apply(null,l),t.push(e),this}}function fa(e){e.mixin=function(e){return this.options=He(this.options,e),this}}function ma(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var l=this,a=l.cid,n=e._Ctor||(e._Ctor={});if(n[a])return n[a];var r=e.name||l.options.name;var o=function(e){this._init(e)};return o.prototype=Object.create(l.prototype),o.prototype.constructor=o,o.cid=t++,o.options=He(l.options,e),o["super"]=l,o.options.props&&ga(o),o.options.computed&&_a(o),o.extend=l.extend,o.mixin=l.mixin,o.use=l.use,P.forEach(function(e){o[e]=l[e]}),r&&(o.options.components[r]=o),o.superOptions=l.options,o.extendOptions=e,o.sealedOptions=R({},o.options),n[a]=o,o}}function ga(e){var t=e.options.props;for(var l in t)Xl(e.prototype,"_props",l)}function _a(e){var t=e.options.computed;for(var l in t)la(e.prototype,l,t[l])}function ya(e){P.forEach(function(t){e[t]=function(e,l){return l?("component"===t&&c(l)&&(l.name=l.name||e,l=this.options._base.extend(l)),"directive"===t&&"function"===typeof l&&(l={bind:l,update:l}),this.options[t+"s"][e]=l,l):this.options[t+"s"][e]}})}function Ea(e){return e&&(e.Ctor.options.name||e.tag)}function Oa(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!v(e)&&e.test(t)}function Na(e,t){var l=e.cache,a=e.keys,n=e._vnode;for(var r in l){var o=l[r];if(o){var i=Ea(o.componentOptions);i&&!t(i)&&Ta(l,r,a,n)}}}function Ta(e,t,l,a){var n=e[t];!n||a&&n.tag===a.tag||n.componentInstance.$destroy(),e[t]=null,g(l,t)}ca(da),ua(da),Ol(da),Sl(da),vl(da);var wa=[String,RegExp,Array],Sa={name:"keep-alive",abstract:!0,props:{include:wa,exclude:wa,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Ta(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){Na(e,function(e){return Oa(t,e)})}),this.$watch("exclude",function(t){Na(e,function(e){return!Oa(t,e)})})},render:function(){var e=this.$slots.default,t=fl(e),l=t&&t.componentOptions;if(l){var a=Ea(l),n=this,r=n.include,o=n.exclude;if(r&&(!a||!Oa(r,a))||o&&a&&Oa(o,a))return t;var i=this,u=i.cache,s=i.keys,c=null==t.key?l.Ctor.cid+(l.tag?"::"+l.tag:""):t.key;u[c]?(t.componentInstance=u[c].componentInstance,g(s,c),s.push(c)):(u[c]=t,s.push(c),this.max&&s.length>parseInt(this.max)&&Ta(u,s[0],s,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}},xa={KeepAlive:Sa};function Ia(e){var t={get:function(){return U}};Object.defineProperty(e,"config",t),e.util={warn:se,extend:R,mergeOptions:He,defineReactive:Ce},e.set=Ae,e.delete=Re,e.nextTick=ut,e.observable=function(e){return Ie(e),e},e.options=Object.create(null),P.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,R(e.options.components,xa),pa(e),fa(e),ma(e),ya(e)}Ia(da),Object.defineProperty(da.prototype,"$isServer",{get:ne}),Object.defineProperty(da.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(da,"FunctionalRenderContext",{value:Gt}),da.version="2.6.11";var Ca="[object Array]",Aa="[object Object]";function Ra(e,t){var l={};return Ma(e,t),Da(e,t,"",l),l}function Ma(e,t){if(e!==t){var l=ja(e),a=ja(t);if(l==Aa&&a==Aa){if(Object.keys(e).length>=Object.keys(t).length)for(var n in t){var r=e[n];void 0===r?e[n]=null:Ma(r,t[n])}}else l==Ca&&a==Ca&&e.length>=t.length&&t.forEach(function(t,l){Ma(e[l],t)})}}function Da(e,t,l,a){if(e!==t){var n=ja(e),r=ja(t);if(n==Aa)if(r!=Aa||Object.keys(e).length<Object.keys(t).length)ka(a,l,e);else{var o=function(n){var r=e[n],o=t[n],i=ja(r),u=ja(o);if(i!=Ca&&i!=Aa)r!=t[n]&&ka(a,(""==l?"":l+".")+n,r);else if(i==Ca)u!=Ca?ka(a,(""==l?"":l+".")+n,r):r.length<o.length?ka(a,(""==l?"":l+".")+n,r):r.forEach(function(e,t){Da(e,o[t],(""==l?"":l+".")+n+"["+t+"]",a)});else if(i==Aa)if(u!=Aa||Object.keys(r).length<Object.keys(o).length)ka(a,(""==l?"":l+".")+n,r);else for(var s in r)Da(r[s],o[s],(""==l?"":l+".")+n+"."+s,a)};for(var i in e)o(i)}else n==Ca?r!=Ca?ka(a,l,e):e.length<t.length?ka(a,l,e):e.forEach(function(e,n){Da(e,t[n],l+"["+n+"]",a)}):ka(a,l,e)}}function ka(e,t,l){e[t]=l}function ja(e){return Object.prototype.toString.call(e)}function La(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var l=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var a=0;a<l.length;a++)l[a]()}}function Ba(e){return Ml.find(function(t){return e._watcher===t})}function $a(e,t){if(!e.__next_tick_pending&&!Ba(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:nextVueTick")}return ut(t,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextMPTick")}var n;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(t)try{t.call(e)}catch(tn){Ke(tn,e,"nextTick")}else n&&n(e)}),!t&&"undefined"!==typeof Promise)return new Promise(function(e){n=e})}function Pa(e){var t=Object.create(null),l=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return l.reduce(function(t,l){return t[l]=e[l],t},t),Object.assign(t,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(t["name"]=e.name,t["value"]=e.value),JSON.parse(JSON.stringify(t))}var Fa=function(e,t){var l=this;if(null!==t&&("page"===this.mpType||"component"===this.mpType)){var a=this.$scope,n=Object.create(null);try{n=Pa(this)}catch(i){console.error(i)}n.__webviewId__=a.data.__webviewId__;var r=Object.create(null);Object.keys(n).forEach(function(e){r[e]=a.data[e]});var o=!1===this.$shouldDiffData?n:Ra(n,r);Object.keys(o).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+this._uid+"]差量更新",JSON.stringify(o)),this.__next_tick_pending=!0,a.setData(o,function(){l.__next_tick_pending=!1,La(l)})):La(this)}};function Ua(){}function qa(e,t,l){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Ua),e.$options.render||(e.$options.render=Ua),"mp-toutiao"!==e.mpHost&&Rl(e,"beforeMount");var a=function(){e._update(e._render(),l)};return new Vl(e,a,D,{before:function(){e._isMounted&&!e._isDestroyed&&Rl(e,"beforeUpdate")}},!0),l=!1,e}function Ha(e,t){return n(e)||n(t)?Wa(e,Ga(t)):""}function Wa(e,t){return e?t?e+" "+t:e:t||""}function Ga(e){return Array.isArray(e)?Ja(e):u(e)?Va(e):"string"===typeof e?e:""}function Ja(e){for(var t,l="",a=0,r=e.length;a<r;a++)n(t=Ga(e[a]))&&""!==t&&(l&&(l+=" "),l+=t);return l}function Va(e){var t="";for(var l in e)e[l]&&(t&&(t+=" "),t+=l);return t}var za=E(function(e){var t={},l=/;(?![^(]*\))/g,a=/:(.+)/;return e.split(l).forEach(function(e){if(e){var l=e.split(a);l.length>1&&(t[l[0].trim()]=l[1].trim())}}),t});function Xa(e){return Array.isArray(e)?M(e):"string"===typeof e?za(e):e}var Ka=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qa(e,t){var l=t.split("."),a=l[0];return 0===a.indexOf("__$n")&&(a=parseInt(a.replace("__$n",""))),1===l.length?e[a]:Qa(e[a],l.slice(1).join("."))}function Ya(e){e.config.errorHandler=function(e){console.error(e);var t=getApp();t&&t.onError&&t.onError(e)};var t=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:A(arguments,1)}),t.apply(this,arguments)},e.prototype.$nextTick=function(e){return $a(this,e)},Ka.forEach(function(t){e.prototype[t]=function(e){return this.$scope&&this.$scope[t]?this.$scope[t](e):"undefined"!==typeof my?"createSelectorQuery"===t?my.createSelectorQuery(e):"createIntersectionObserver"===t?my.createIntersectionObserver(e):void 0:void 0}}),e.prototype.__init_provide=Ot,e.prototype.__init_injections=Nt,e.prototype.__call_hook=function(e,t){var l=this;be();var a,n=l.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)a=Qe(n[o],l,t?[t]:null,l,r);return l._hasHookEvent&&l.$emit("hook:"+e,t),he(),a},e.prototype.__set_model=function(e,t,l,a){Array.isArray(a)&&(-1!==a.indexOf("trim")&&(l=l.trim()),-1!==a.indexOf("number")&&(l=this._n(l))),e||(e=this),e[t]=l},e.prototype.__set_sync=function(e,t,l){e||(e=this),e[t]=l},e.prototype.__get_orig=function(e){return c(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,t){return Qa(t||this,e)},e.prototype.__get_class=function(e,t){return Ha(t,e)},e.prototype.__get_style=function(e,t){if(!e&&!t)return"";var l=Xa(e),a=t?R(t,l):l;return Object.keys(a).map(function(e){return S(e)+":"+a[e]}).join(";")},e.prototype.__map=function(e,t){var l,a,n,r,o;if(Array.isArray(e)){for(l=new Array(e.length),a=0,n=e.length;a<n;a++)l[a]=t(e[a],a);return l}if(u(e)){for(r=Object.keys(e),l=Object.create(null),a=0,n=r.length;a<n;a++)o=r[a],l[o]=t(e[o],o,a);return l}return[]}}var Za=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function en(e){var t=e.extend;e.extend=function(e){e=e||{};var l=e.methods;return l&&Object.keys(l).forEach(function(t){-1!==Za.indexOf(t)&&(e[t]=l[t],delete l[t])}),t.call(this,e)};var l=e.config.optionMergeStrategies,a=l.created;Za.forEach(function(e){l[e]=a}),e.prototype.__lifecycle_hooks__=Za}da.prototype.__patch__=Fa,da.prototype.$mount=function(e,t){return qa(this,e,t)},en(da),Ya(da),t["default"]=da}.call(this,l("c8ba"))},"6e42":function(e,t,l){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.createApp=pt,t.createComponent=wt,t.createPage=Tt,t.default=void 0;var a=n(l("66fd"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{},a=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(l).filter(function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),a.forEach(function(t){c(e,t,l[t])})}return e}function o(e,t){return s(e)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,t){var l=[],a=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done);a=!0)if(l.push(o.value),t&&l.length===t)break}catch(u){n=!0,r=u}finally{try{a||null==i["return"]||i["return"]()}finally{if(n)throw r}}return l}function s(e){if(Array.isArray(e))return e}function c(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function v(e){return d(e)||h(e)||b()}function b(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function d(e){if(Array.isArray(e)){for(var t=0,l=new Array(e.length);t<e.length;t++)l[t]=e[t];return l}}var p=Object.prototype.toString,f=Object.prototype.hasOwnProperty;function m(e){return"function"===typeof e}function g(e){return"string"===typeof e}function _(e){return"[object Object]"===p.call(e)}function y(e,t){return f.call(e,t)}function E(){}function O(e){var t=Object.create(null);return function(l){var a=t[l];return a||(t[l]=e(l))}}var N=/-(\w)/g,T=O(function(e){return e.replace(N,function(e,t){return t?t.toUpperCase():""})}),w=["invoke","success","fail","complete","returnValue"],S={},x={};function I(e,t){var l=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return l?C(l):l}function C(e){for(var t=[],l=0;l<e.length;l++)-1===t.indexOf(e[l])&&t.push(e[l]);return t}function A(e,t){var l=e.indexOf(t);-1!==l&&e.splice(l,1)}function R(e,t){Object.keys(t).forEach(function(l){-1!==w.indexOf(l)&&m(t[l])&&(e[l]=I(e[l],t[l]))})}function M(e,t){e&&t&&Object.keys(t).forEach(function(l){-1!==w.indexOf(l)&&m(t[l])&&A(e[l],t[l])})}function D(e,t){"string"===typeof e&&_(t)?R(x[e]||(x[e]={}),t):_(e)&&R(S,e)}function k(e,t){"string"===typeof e?_(t)?M(x[e],t):delete x[e]:_(e)&&M(S,e)}function j(e){return function(t){return e(t)||t}}function L(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function B(e,t){for(var l=!1,a=0;a<e.length;a++){var n=e[a];if(l)l=Promise.then(j(n));else{var r=n(t);if(L(r)&&(l=Promise.resolve(r)),!1===r)return{then:function(){}}}}return l||{then:function(e){return e(t)}}}function $(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(l){if(Array.isArray(e[l])){var a=t[l];t[l]=function(t){B(e[l],t).then(function(e){return m(a)&&a(e)||e})}}}),t}function P(e,t){var l=[];Array.isArray(S.returnValue)&&l.push.apply(l,v(S.returnValue));var a=x[e];return a&&Array.isArray(a.returnValue)&&l.push.apply(l,v(a.returnValue)),l.forEach(function(e){t=e(t)||t}),t}function F(e){var t=Object.create(null);Object.keys(S).forEach(function(e){"returnValue"!==e&&(t[e]=S[e].slice())});var l=x[e];return l&&Object.keys(l).forEach(function(e){"returnValue"!==e&&(t[e]=(t[e]||[]).concat(l[e]))}),t}function U(e,t,l){for(var a=arguments.length,n=new Array(a>3?a-3:0),r=3;r<a;r++)n[r-3]=arguments[r];var o=F(e);if(o&&Object.keys(o).length){if(Array.isArray(o.invoke)){var i=B(o.invoke,l);return i.then(function(e){return t.apply(void 0,[$(o,e)].concat(n))})}return t.apply(void 0,[$(o,l)].concat(n))}return t.apply(void 0,[l].concat(n))}var q={returnValue:function(e){return L(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},H=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,W=/^create|Manager$/,G=/^on/;function J(e){return W.test(e)}function V(e){return H.test(e)}function z(e){return G.test(e)&&"onPush"!==e}function X(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function K(e){return!(J(e)||V(e)||z(e))}function Q(e,t){return K(e)?function(){for(var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return m(l.success)||m(l.fail)||m(l.complete)?P(e,U.apply(void 0,[e,t,l].concat(n))):P(e,X(new Promise(function(a,r){U.apply(void 0,[e,t,Object.assign({},l,{success:a,fail:r})].concat(n)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then(function(l){return t.resolve(e()).then(function(){return l})},function(l){return t.resolve(e()).then(function(){throw l})})})})))}:t}var Y=1e-4,Z=750,ee=!1,te=0,le=0;function ae(){var e=wx.getSystemInfoSync(),t=e.platform,l=e.pixelRatio,a=e.windowWidth;te=a,le=l,ee="ios"===t}function ne(e,t){if(0===te&&ae(),e=Number(e),0===e)return 0;var l=e/Z*(t||te);return l<0&&(l=-l),l=Math.floor(l+Y),0===l?1!==le&&ee?.5:1:e<0?-l:l}var re={promiseInterceptor:q},oe=Object.freeze({__proto__:null,upx2px:ne,interceptors:re,addInterceptor:D,removeInterceptor:k}),ie={},ue=[],se=[],ce=["success","fail","cancel","complete"];function ve(e,t,l){return function(a){return t(he(e,a,l))}}function be(e,t){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(_(t)){var r=!0===n?t:{};for(var o in m(l)&&(l=l(t,r)||{}),t)if(y(l,o)){var i=l[o];m(i)&&(i=i(t[o],t,r)),i?g(i)?r[i]=t[o]:_(i)&&(r[i.name?i.name:o]=i.value):console.warn("app-plus ".concat(e,"暂不支持").concat(o))}else-1!==ce.indexOf(o)?r[o]=ve(e,t[o],a):n||(r[o]=t[o]);return r}return m(t)&&(t=ve(e,t,a)),t}function he(e,t,l){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return m(ie.returnValue)&&(t=ie.returnValue(e,t)),be(e,t,l,{},a)}function de(e,t){if(y(ie,e)){var l=ie[e];return l?function(t,a){var n=l;m(l)&&(n=l(t)),t=be(e,t,n.args,n.returnValue);var r=[t];"undefined"!==typeof a&&r.push(a);var o=wx[n.name||e].apply(wx,r);return V(e)?he(e,o,n.returnValue,J(e)):o}:function(){console.error("app-plus 暂不支持".concat(e))}}return t}var pe=Object.create(null),fe=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function me(e){return function(t){var l=t.fail,a=t.complete,n={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};m(l)&&l(n),m(a)&&a(n)}}fe.forEach(function(e){pe[e]=me(e)});var ge=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new a.default),e};var e}();function _e(e,t,l){return e[t].apply(e,l)}function ye(){return _e(ge(),"$on",Array.prototype.slice.call(arguments))}function Ee(){return _e(ge(),"$off",Array.prototype.slice.call(arguments))}function Oe(){return _e(ge(),"$once",Array.prototype.slice.call(arguments))}function Ne(){return _e(ge(),"$emit",Array.prototype.slice.call(arguments))}var Te=Object.freeze({__proto__:null,$on:ye,$off:Ee,$once:Oe,$emit:Ne});function we(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function Se(e){e.$processed=!0,e.postMessage=function(t){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:t},e.id)};var t=[];if(e.onMessage=function(e){t.push(e)},e.$consumeMessage=function(e){t.forEach(function(t){return t(e)})},e.__uniapp_mask_id){var l=e.__uniapp_mask,a="0"===e.__uniapp_mask_id?{setStyle:function(e){var t=e.mask;we("uni-tabview").setMask({color:t})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),n=e.show,r=e.hide,o=e.close,i=function(){a.setStyle({mask:l})},u=function(){a.setStyle({mask:"none"})};e.show=function(){i();for(var t=arguments.length,l=new Array(t),a=0;a<t;a++)l[a]=arguments[a];return n.apply(e,l)},e.hide=function(){u();for(var t=arguments.length,l=new Array(t),a=0;a<t;a++)l[a]=arguments[a];return r.apply(e,l)},e.close=function(){u(),t=[];for(var l=arguments.length,a=new Array(l),n=0;n<l;n++)a[n]=arguments[n];return o.apply(e,a)}}}function xe(e){var t=plus.webview.getWebviewById(e);return t&&!t.$processed&&Se(t),t}var Ie=Object.freeze({__proto__:null,getSubNVueById:xe,requireNativePlugin:we}),Ce=Page,Ae=Component,Re=/:/g,Me=O(function(e){return T(e.replace(Re,"-"))});function De(e){if(wx.canIUse("nextTick")){var t=e.triggerEvent;e.triggerEvent=function(l){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return t.apply(e,[Me(l)].concat(n))}}}function ke(e,t){var l=t[e];t[e]=l?function(){De(this);for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return l.apply(this,t)}:function(){De(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ke("onLoad",e),Ce(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ke("created",e),Ae(e)};var je=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Le(e,t){var l=e.$mp[e.mpType];t.forEach(function(t){y(l,t)&&(e[t]=l[t])})}function Be(e,t){if(!t)return!0;if(a.default.options&&Array.isArray(a.default.options[e]))return!0;if(t=t.default||t,m(t))return!!m(t.extendOptions[e])||!!(t.super&&t.super.options&&Array.isArray(t.super.options[e]));if(m(t[e]))return!0;var l=t.mixins;return Array.isArray(l)?!!l.find(function(t){return Be(e,t)}):void 0}function $e(e,t,l){t.forEach(function(t){Be(t,l)&&(e[t]=function(e){return this.$vm&&this.$vm.__call_hook(t,e)})})}function Pe(e,t){var l;return t=t.default||t,m(t)?(l=t,t=l.extendOptions):l=e.extend(t),[l,t]}function Fe(e,t){if(Array.isArray(t)&&t.length){var l=Object.create(null);t.forEach(function(e){l[e]=!0}),e.$scopedSlots=e.$slots=l}}function Ue(e,t){e=(e||"").split(",");var l=e.length;1===l?t._$vueId=e[0]:2===l&&(t._$vueId=e[0],t._$vuePid=e[1])}function qe(e,t){var l=e.data||{},a=e.methods||{};if("function"===typeof l)try{l=l.call(t)}catch(n){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",l)}else try{l=JSON.parse(JSON.stringify(l))}catch(n){}return _(l)||(l={}),Object.keys(a).forEach(function(e){-1!==t.__lifecycle_hooks__.indexOf(e)||y(l,e)||(l[e]=a[e])}),l}var He=[String,Number,Boolean,Object,Array,null];function We(e){return function(t,l){this.$vm&&(this.$vm[e]=t)}}function Ge(e,t){var l=e["behaviors"],a=e["extends"],n=e["mixins"],r=e["props"];r||(e["props"]=r=[]);var o=[];return Array.isArray(l)&&l.forEach(function(e){o.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(r)?(r.push("name"),r.push("value")):(r["name"]={type:String,default:""},r["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),_(a)&&a.props&&o.push(t({properties:Ve(a.props,!0)})),Array.isArray(n)&&n.forEach(function(e){_(e)&&e.props&&o.push(t({properties:Ve(e.props,!0)}))}),o}function Je(e,t,l,a){return Array.isArray(t)&&1===t.length?t[0]:t}function Ve(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return t||(l.vueId={type:String,value:""},l.vueSlots={type:null,value:[],observer:function(e,t){var l=Object.create(null);e.forEach(function(e){l[e]=!0}),this.setData({$slots:l})}}),Array.isArray(e)?e.forEach(function(e){l[e]={type:null,observer:We(e)}}):_(e)&&Object.keys(e).forEach(function(t){var a=e[t];if(_(a)){var n=a["default"];m(n)&&(n=n()),a.type=Je(t,a.type),l[t]={type:-1!==He.indexOf(a.type)?a.type:null,value:n,observer:We(t)}}else{var r=Je(t,a);l[t]={type:-1!==He.indexOf(r)?r:null,observer:We(t)}}}),l}function ze(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(t){}return e.stopPropagation=E,e.preventDefault=E,e.target=e.target||{},y(e,"detail")||(e.detail={}),_(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Xe(e,t){var l=e;return t.forEach(function(t){var a=t[0],n=t[2];if(a||"undefined"!==typeof n){var r=t[1],o=t[3],i=a?e.__get_value(a,l):l;Number.isInteger(i)?l=n:r?Array.isArray(i)?l=i.find(function(t){return e.__get_value(r,t)===n}):_(i)?l=Object.keys(i).find(function(t){return e.__get_value(r,i[t])===n}):console.error("v-for 暂不支持循环数据：",i):l=i[n],o&&(l=e.__get_value(o,l))}}),l}function Ke(e,t,l){var a={};return Array.isArray(t)&&t.length&&t.forEach(function(t,n){"string"===typeof t?t?"$event"===t?a["$"+n]=l:0===t.indexOf("$event.")?a["$"+n]=e.__get_value(t.replace("$event.",""),l):a["$"+n]=e.__get_value(t):a["$"+n]=e:a["$"+n]=Xe(e,t)}),a}function Qe(e){for(var t={},l=1;l<e.length;l++){var a=e[l];t[a[0]]=a[1]}return t}function Ye(e,t){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4?arguments[4]:void 0,r=arguments.length>5?arguments[5]:void 0,o=!1;if(n&&(o=t.currentTarget&&t.currentTarget.dataset&&"wx"===t.currentTarget.dataset.comType,!l.length))return o?[t]:t.detail.__args__||t.detail;var i=Ke(e,a,t),u=[];return l.forEach(function(e){"$event"===e?"__set_model"!==r||n?n&&!o?u.push(t.detail.__args__[0]):u.push(t):u.push(t.target.value):Array.isArray(e)&&"o"===e[0]?u.push(Qe(e)):"string"===typeof e&&y(i,e)?u.push(i[e]):u.push(e)}),u}var Ze="~",et="^";function tt(e,t){return e===t||"regionchange"===t&&("begin"===e||"end"===e)}function lt(e){var t=this;e=ze(e);var l=(e.currentTarget||e.target).dataset;if(!l)return console.warn("事件信息不存在");var a=l.eventOpts||l["event-opts"];if(!a)return console.warn("事件信息不存在");var n=e.type,r=[];return a.forEach(function(l){var a=l[0],o=l[1],i=a.charAt(0)===et;a=i?a.slice(1):a;var u=a.charAt(0)===Ze;a=u?a.slice(1):a,o&&tt(n,a)&&o.forEach(function(l){var a=l[0];if(a){var n=t.$vm;if(n.$options.generic&&n.$parent&&n.$parent.$parent&&(n=n.$parent.$parent),"$emit"===a)return void n.$emit.apply(n,Ye(t.$vm,e,l[1],l[2],i,a));var o=n[a];if(!m(o))throw new Error(" _vm.".concat(a," is not a function"));if(u){if(o.once)return;o.once=!0}r.push(o.apply(n,Ye(t.$vm,e,l[1],l[2],i,a)))}})}),"input"===n&&1===r.length&&"undefined"!==typeof r[0]?r[0]:void 0}var at=["onShow","onHide","onError","onPageNotFound"];function nt(e,t){var l=t.mocks,n=t.initRefs;e.$options.store&&(a.default.prototype.$store=e.$options.store),a.default.prototype.mpHost="app-plus",a.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(n(this),Le(this,l)))}});var r={onLaunch:function(t){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",t),this.$vm.__call_hook("onLaunch",t))}};r.globalData=e.$options.globalData||{};var o=e.$options.methods;return o&&Object.keys(o).forEach(function(e){r[e]=o[e]}),$e(r,at),r}var rt=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ot(e,t){for(var l,a=e.$children,n=a.length-1;n>=0;n--){var r=a[n];if(r.$scope._$vueId===t)return r}for(var o=a.length-1;o>=0;o--)if(l=ot(a[o],t),l)return l}function it(e){return Behavior(e)}function ut(){return!!this.route}function st(e){this.triggerEvent("__l",e)}function ct(e){var t=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},l=t.selectAllComponents(".vue-ref");l.forEach(function(t){var l=t.dataset.ref;e[l]=t.$vm||t});var a=t.selectAllComponents(".vue-ref-in-for");return a.forEach(function(t){var l=t.dataset.ref;e[l]||(e[l]=[]),e[l].push(t.$vm||t)}),e}})}function vt(e){var t,l=e.detail||e.value,a=l.vuePid,n=l.vueOptions;a&&(t=ot(this.$vm,a)),t||(t=this.$vm),n.parent=t}function bt(e){return nt(e,{mocks:rt,initRefs:ct})}var ht=["onUniNViewMessage"];function dt(e){var t=bt(e);return $e(t,ht),t}function pt(e){return App(dt(e)),e}function ft(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=t.isPage,n=t.initRelation,i=Pe(a.default,e),u=o(i,2),s=u[0],c=u[1],v=r({multipleSlots:!0,addGlobalClass:!0},c.options||{}),b={options:v,data:qe(c,a.default.prototype),behaviors:Ge(c,it),properties:Ve(c.props,!1,c.__file),lifetimes:{attached:function(){var e=this.properties,t={mpType:l.call(this)?"page":"component",mpInstance:this,propsData:e};Ue(e.vueId,this),n.call(this,{vuePid:this._$vuePid,vueOptions:t}),this.$vm=new s(t),Fe(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm&&this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:vt,__e:lt}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(e){b.methods[e]=function(t){return this.$vm[e](t)}}),l?b:[b,s]}function mt(e){return ft(e,{isPage:ut,initRelation:st})}function gt(e){var t=mt(e);return t.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},t}var _t=["onShow","onHide","onUnload"];function yt(e,t){t.isPage,t.initRelation;var l=gt(e);return $e(l.methods,_t,e),l.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},l}function Et(e){return yt(e,{isPage:ut,initRelation:st})}_t.push.apply(_t,je);var Ot=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Nt(e){var t=Et(e);return $e(t.methods,Ot),t}function Tt(e){return Component(Nt(e))}function wt(e){return Component(gt(e))}ue.forEach(function(e){ie[e]=!1}),se.forEach(function(e){var t=ie[e]&&ie[e].name?ie[e].name:e;wx.canIUse(t)||(ie[e]=!1)});var St={};Object.keys(oe).forEach(function(e){St[e]=oe[e]}),Object.keys(Te).forEach(function(e){St[e]=Te[e]}),Object.keys(Ie).forEach(function(e){St[e]=Q(e,Ie[e])}),Object.keys(wx).forEach(function(e){(y(wx,e)||y(ie,e))&&(St[e]=Q(e,de(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=St,e.UniEmitter=Te),wx.createApp=pt,wx.createPage=Tt,wx.createComponent=wt;var xt=St,It=xt;t.default=It}).call(this,l("c8ba"))},"702d":function(e,t,l){"use strict";var a=l("1a88");e.exports=new a},"7c2c":function(e,t,l){"use strict";(function(e,t){var a=r(l("66fd")),n=r(l("a911"));function r(e){return e&&e.__esModule?e:{default:e}}function o(){var l=new Promise(function(e,t){var l=n.default.state.userToken;return e(l?{islogin:!0}:{islogin:!1})});return Promise.all([l]).then(function(l){return!!l[0].islogin||(e.showModal({content:"您还未登录，是否登录",confirmText:"登录",cancelText:"再看看",success:function(l){l.confirm?e.navigateTo({url:"/pages/login/login"}):l.cancel&&t("log","用户点击取消"," at utils\\globalFun.js:34")}}),!1)})}function i(e){var t,l,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(n){var r=this,o=arguments,i=+new Date;t&&i<t+a?(clearTimeout(l),l=setTimeout(function(){t=i,e.apply(r,o)},a)):(t=i,e.apply(r,o))}}function u(e,t){var l;return function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];l&&clearTimeout(l),l=setTimeout(function(){e.apply(void 0,n),l=null},t)}}a.default.prototype.$isLoginFun=o,a.default.prototype.$throttle=i,a.default.prototype.$debounce=u}).call(this,l("6e42")["default"],l("0de9")["default"])},8004:function(e,t,l){"use strict";(function(e){(function(){var a=function(){},n=l("5af2").code,r=10485760,o=!1,i="undefined"!==typeof FormData,u="undefined"!==typeof Blob,s=o.setRequestHeader||!1,c=o.overrideMimeType||!1,v=s&&i,b=v||!1,h=s&&(u||c);Object.keys||(Object.keys=function(){var e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=l.length;return function(n){if("object"!==typeof n&&("function"!==typeof n||null===n))throw new TypeError("Object.keys called on non-object");var r,o,i=[];for(r in n)e.call(n,r)&&i.push(r);if(t)for(o=0;o<a;o++)e.call(n,l[o])&&i.push(l[o]);return i}}());var d={hasFormData:i,hasBlob:u,emptyfn:a,isCanSetRequestHeader:s,hasOverrideMimeType:c,isCanUploadFileAsync:v,isCanUploadFile:b,isCanDownLoadFile:h,isSupportWss:!0,hasFlash:!1,xmlrequest:!1,stringify:function(e){if("undefined"!==typeof JSON&&JSON.stringify)return JSON.stringify(e);var t="",l=[];return a(e);function a(e){var n=!1;for(var r in"[object Array]"===Object.prototype.toString.call(e)?(l.push("]","["),n=!0):"[object Object]"===Object.prototype.toString.call(e)&&l.push("}","{"),e)"[object Null]"===Object.prototype.toString.call(e[r])?e[r]="null":"[object Undefined]"===Object.prototype.toString.call(e[r])&&(e[r]="undefined"),e[r]&&"object"===typeof e[r]?t+=","+(n?"":'"'+r+'":'+(n?'"':""))+a(e[r]):t+=',"'+(n?"":r+'":"')+e[r]+'"';return""!=t&&(t=t.slice(1)),l.pop()+t+l.pop()}},registerUser:function(e){var t=e.orgName||"",l=e.appName||"",r=e.appKey||"",o=e.success||a,i=e.error||a;if(!t&&!l&&r){var u=r.split("#");2===u.length&&(t=u[0],l=u[1])}if(!t&&!l)return i({type:n.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR}),!1;var s=e.apiUrl,c=s+"/"+t+"/"+l+"/users",v={username:e.username,password:e.password,nickname:e.nickname||""},b=d.stringify(v);return e={url:c,data:b,success:o,error:i},d.ajax(e)},login:function(e){e=e||{};var t=e.success||a,l=e.error||a,r=e.appKey||"",o=r.split("#");if(2!==o.length)return l({type:n.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR}),!1;var i=o[0],u=o[1],s=e.user||"",c=e.pwd||"",v=e.apiUrl,b={grant_type:"password",username:s,password:c,timestamp:+new Date},h=d.stringify(b);return e={url:v+"/"+i+"/"+u+"/token",data:h,success:t,error:l},d.ajax(e)},getFileUrl:function(e){var t={url:"",filename:"",filetype:"",data:""},l="string"===typeof e?document.getElementById(e):e;if(!d.isCanUploadFileAsync||!l)return t;try{if(window.URL.createObjectURL){var a=l.files;if(a.length>0){var n=a.item(0);t.data=n,t.url=window.URL.createObjectURL(n),t.filename=n.name||""}}var r=t.filename.lastIndexOf(".");return-1!=r&&(t.filetype=t.filename.substring(r+1).toLowerCase()),t}catch(o){throw o}},getFileSize:function(e){var t=document.getElementById(e),l=0;return t&&t.files&&t.files.length>0&&(l=t.files[0].size),l},trim:function(e){return e="string"===typeof e?e:"",e.trim?e.trim():e.replace(/^\s|\s$/g,"")},parseEmoji:function(e){if("undefined"===typeof WebIM.Emoji||"undefined"===typeof WebIM.Emoji.map)return e;var t=WebIM.Emoji;for(var l in t.map)if(t.map.hasOwnProperty(l))while(e.indexOf(l)>-1)e=e.replace(l,'<image class="emoji" src="'+t.path+t.map[l]+'" /></image>');return e},parseLink:function(e){var t=/(https?:\/\/|www\.)([a-zA-Z0-9-]+(\.[a-zA-Z0-9]+)+)(:[0-9]{2,4})?\/?((\.[:_0-9a-zA-Z-]+)|[:_0-9a-zA-Z-]*\/?)*\??[:_#@*&%0-9a-zA-Z-\/=]*/gm;return e=e.replace(t,function(e){var t=/^https?/gm.test(e);return"<a href='"+(t?e:"//"+e)+"' target='_blank'>"+e+"</a>"}),e},parseJSON:function(e){if(window.JSON&&window.JSON.parse)return window.JSON.parse(e+"");var t,l=null,a=d.trim(e+"");return a&&!d.trim(a.replace(/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,function(e,a,n,r){return t&&a&&(l=0),0===l?e:(t=n||a,l+=!r-!n,"")}))?Function("return "+a)():Function("Invalid JSON: "+e)()},parseUploadResponse:function(e){return e.indexOf("callback")>-1?e.slice(9,-1):e},parseDownloadResponse:function(e){return e&&e.type&&"application/json"===e.type||Object.prototype.toString.call(e).indexOf("Blob")<0?this.url+"?token=":window.URL.createObjectURL(e)},uploadFile:function(e){e=e||{},e.onFileUploadProgress=e.onFileUploadProgress||a,e.onFileUploadComplete=e.onFileUploadComplete||a,e.onFileUploadError=e.onFileUploadError||a,e.onFileUploadCanceled=e.onFileUploadCanceled||a;var t=e.accessToken||this.context.accessToken;if(t){var l,o,i,u=e.appKey||this.context.appKey||"";if(u&&(i=u.split("#"),l=i[0],o=i[1]),l||o){var s=e.apiUrl,c=s+"/"+l+"/"+o+"/chatfiles";if(d.isCanUploadFileAsync){var v=e.file.data?e.file.data.size:void 0;if(v>r)e.onFileUploadError({type:n.WEBIM_UPLOADFILE_ERROR,id:e.id});else if(v<=0)e.onFileUploadError({type:n.WEBIM_UPLOADFILE_ERROR,id:e.id});else{var b=d.xmlrequest(),h=function(t){e.onFileUploadError({type:n.WEBIM_UPLOADFILE_ERROR,id:e.id,xhr:b})};b.upload&&b.upload.addEventListener("progress",e.onFileUploadProgress,!1),b.addEventListener?(b.addEventListener("abort",e.onFileUploadCanceled,!1),b.addEventListener("load",function(t){try{var l=d.parseJSON(b.responseText);try{e.onFileUploadComplete(l)}catch(t){e.onFileUploadError({type:n.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,data:t})}}catch(t){e.onFileUploadError({type:n.WEBIM_UPLOADFILE_ERROR,data:b.responseText,id:e.id,xhr:b})}},!1),b.addEventListener("error",h,!1)):b.onreadystatechange&&(b.onreadystatechange=function(){if(4===b.readyState)if(200===ajax.status)try{var t=d.parseJSON(b.responseText);e.onFileUploadComplete(t)}catch(l){e.onFileUploadError({type:n.WEBIM_UPLOADFILE_ERROR,data:b.responseText,id:e.id,xhr:b})}else e.onFileUploadError({type:n.WEBIM_UPLOADFILE_ERROR,data:b.responseText,id:e.id,xhr:b});else b.abort(),e.onFileUploadCanceled()}),b.open("POST",c),b.setRequestHeader("restrict-access","true"),b.setRequestHeader("Accept","*/*"),b.setRequestHeader("Authorization","Bearer "+t);var p=new FormData;p.append("file",e.file.data),b.send(p)}}else d.hasFlash&&"function"===typeof e.flashUpload?e.flashUpload&&e.flashUpload(c,e):e.onFileUploadError({type:n.WEBIM_UPLOADFILE_BROWSER_ERROR,id:e.id})}else e.onFileUploadError({type:n.WEBIM_UPLOADFILE_ERROR,id:e.id})}else e.onFileUploadError({type:n.WEBIM_UPLOADFILE_NO_LOGIN,id:e.id})},download:function(e){e.onFileDownloadComplete=e.onFileDownloadComplete||a,e.onFileDownloadError=e.onFileDownloadError||a;var t=e.accessToken||this.context.accessToken,l=d.xmlrequest();if(t){var r=function(t){e.onFileDownloadError({type:n.WEBIM_DOWNLOADFILE_ERROR,id:e.id,xhr:l})};if(d.isCanDownLoadFile){"addEventListener"in l?(l.addEventListener("load",function(t){e.onFileDownloadComplete(l.response,l)},!1),l.addEventListener("error",r,!1)):"onreadystatechange"in l&&(l.onreadystatechange=function(){4===l.readyState?200===ajax.status?e.onFileDownloadComplete(l.response,l):e.onFileDownloadError({type:n.WEBIM_DOWNLOADFILE_ERROR,id:e.id,xhr:l}):(l.abort(),e.onFileDownloadError({type:n.WEBIM_DOWNLOADFILE_ERROR,id:e.id,xhr:l}))});var o=e.method||"GET",i=e.responseType||"blob",u=e.mimeType||"text/plain; charset=x-user-defined";l.open(o,e.url),"undefined"!==typeof Blob?l.responseType=i:l.overrideMimeType(u);var s={"X-Requested-With":"XMLHttpRequest",Accept:"application/octet-stream","share-secret":e.secret,Authorization:"Bearer "+t},c=e.headers||{};for(var v in c)s[v]=c[v];for(var b in s)s[b]&&l.setRequestHeader(b,s[b]);l.send(null)}else e.onFileDownloadComplete()}else e.onFileDownloadError({type:n.WEBIM_DOWNLOADFILE_NO_LOGIN,id:e.id})},parseTextMessage:function(e,t){if("string"!==typeof e)return!1;if("[object Object]"!==Object.prototype.toString.call(t))return{isemoji:!1,body:[{type:"txt",data:e}]};var l=e,a=[],n=/\[[^[\]]{2,3}\]/gm,r=l.match(n);if(!r||r.length<1)return{isemoji:!1,body:[{type:"txt",data:e}]};for(var o=!1,i=0;i<r.length;i++){var u=l.substring(0,l.indexOf(r[i])),s=t.map[r[i]];if(u&&a.push({type:"txt",data:u}),s){var c=t.map?s:null;c?(o=!0,a.push({type:"emoji",data:c})):a.push({type:"txt",data:r[i]});var v=l.indexOf(r[i])+r[i].length;l=l.substring(v)}else a.push({type:"txt",data:r[i]})}return l&&a.push({type:"txt",data:l}),o?{isemoji:o,body:a}:{isemoji:!1,body:[{type:"txt",data:e}]}},ajax:function(t){var l=t.success||a,n=t.error||a,r=t.type||"POST",o=t.data||null,i="";if("get"===r.toLowerCase()&&o){for(var u in o)o.hasOwnProperty(u)&&(i+=u+"="+o[u]+"&");i=i?i.slice(0,-1):i,t.url+=(t.url.indexOf("?")>0?"&":"?")+(i?i+"&":i)+"_v="+(new Date).getTime(),o=null,i=null}e("log","wx.request",t.url," at webIM\\sdk\\utils.js:617"),wx.request({url:t.url,data:t.data,header:t.headers,method:r,success:function(t){arguments[0].data.error_description&&"invalid password"==arguments[0].data.error_description?e("log","无效的环信登录密码",arguments," at webIM\\sdk\\utils.js:625"):e("log","wx.request.success",arguments," at webIM\\sdk\\utils.js:627"),"200"==t.statusCode?l(t):n(t)},complete:function(){},fail:function(){}})},ts:function(){var e=new Date,t=e.getHours(),l=e.getMinutes(),a=e.getSeconds(),n=e.getMilliseconds();return(t<10?"0"+t:t)+":"+(l<10?"0"+l:l)+":"+(a<10?"0"+a:a)+":"+n+" "},getObjectKey:function(e,t){for(var l in e)if(e[l]==t)return l;return""}};t.utils=d})()}).call(this,l("0de9")["default"])},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-26420200313001",_inBundle:!1,_integrity:"sha512-7dPuazTiDmUyRcw+WW+UlWGKH0eeCUB+p0P4pJVKEHjpdXnXgvDQCSdJk764NH99TfsUycnuxecP5oHckVa88g==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26420200313001.tgz",_shasum:"a006e329e033cd412accfa635f8933dbb822a9c3",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"b1fdbafab5dd4673cff64188a5203d0c947e4f50",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-26420200313001"}},"871b":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={pages:{"pages/tabBar/index/index":{navigationStyle:"custom"},"pages/tabBar/patient/patient":{navigationStyle:"custom"},"pages/tabBar/mine/mine":{navigationStyle:"custom"},"pages/views/register/newUser":{navigationStyle:"custom"},"pages/views/register/doctorRegister":{navigationBarTitleText:"医生注册"},"pages/views/register/confirmCode":{navigationBarTitleText:"确认验证码"},"pages/views/register/settingCode":{navigationBarTitleText:"设置登录密码页面"},"pages/views/register/doctorRenzheng":{navigationBarTitleText:"医生认证"},"pages/views/register/doctorZiZhi":{navigationBarTitleText:"医生资质"},"pages/views/login/login":{navigationBarTitleText:""},"pages/views/login/forgetPassword":{navigationBarTitleText:"忘记密码"},"pages/views/login/loginConfirCode":{navigationBarTitleText:"确认验证码"},"pages/views/login/settingPassWord":{navigationBarTitleText:"重新设置登录密码"},"pages/kefuPage/kefuPage":{navigationBarTitleText:"聊天室"},"pages/kefuPage/chat":{navigationBarTitleText:"患者"},"pages/views/index/qcode":{navigationBarTitleText:"分享二维码"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"新版麦芽儿",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#F8F8F8"}};t.default=a},8765:function(e,t,l){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l("e03a")),n=r(l("4c02"));r(l("a911"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{},a=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(l).filter(function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),a.forEach(function(t){i(e,t,l[t])})}return e}function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var u=new n.default;console.log.bind(console),JSON.stringify.bind(JSON);u.setConfig(function(e){return e.baseUrl=a.default.API_BASE_URL,e.imgBaseURL=a.default.IMG_BASE_URL,e.header=o({},e.header),u.config.timeout=3e5,e});u.interceptor.request(function(e,t){return e.url.indexOf("O/")>0||e.url.indexOf("platauth")>0||e.url.indexOf("checkToken")>0||e.url.indexOf("addLogin")>0||e.url.indexOf("refreshToken")>0?e:(e.header=o({},e.header),e)}),u.interceptor.response(function(e){return e.data},function(t){return e("log","对响应错误做点什么",t," at common\\luchApi\\index.js:99"),t});var s=u;t.default=s}).call(this,l("0de9")["default"])},"921b":function(e,t,l){"use strict";(function(e){var t=l("8189");function a(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?n(e):t}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,l){return t&&s(e.prototype,t),l&&s(e,l),e}var v=t.version,b="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,p=300,f=10,m="__DC_STAT_UUID",g="__DC_UUID_VALUE";function _(){var t="";if("n"===N()){try{t=plus.runtime.getDCloudId()}catch(l){t=""}return t}try{t=e.getStorageSync(m)}catch(l){t=g}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(m,t)}catch(l){e.setStorageSync(m,g)}}return t}var y=function(e){var t=Object.keys(e),l=t.sort(),a={},n="";for(var r in l)a[l[r]]=e[l[r]],n+=l[r]+"="+e[l[r]]+"&";return{sign:"",options:n.substr(0,n.length-1)}},E=function(e){var t="";for(var l in e)t+=l+"="+e[l]+"&";return t.substr(0,t.length-1)},O=function(){return parseInt((new Date).getTime()/1e3)},N=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},T=function(){var t="";return"wx"!==N()&&"qq"!==N()||e.canIUse("getAccountInfoSync")&&(t=e.getAccountInfoSync().miniProgram.appId||""),t},w=function(){return"n"===N()?plus.runtime.version:""},S=function(){var e=N(),t="";return"n"===e&&(t=plus.runtime.channel),t},x=function(t){var l=N(),a="";return t||("wx"===l&&(a=e.getLaunchOptionsSync().scene),a)},I="First__Visit__Time",C="Last__Visit__Time",A=function(){var t=e.getStorageSync(I),l=0;return t?l=t:(l=O(),e.setStorageSync(I,l),e.removeStorageSync(C)),l},R=function(){var t=e.getStorageSync(C),l=0;return l=t||"",e.setStorageSync(C,O()),l},M="__page__residence__time",D=0,k=0,j=function(){return D=O(),"n"===N()&&e.setStorageSync(M,O()),D},L=function(){return k=O(),"n"===N()&&(D=e.getStorageSync(M)),k-D},B="Total__Visit__Count",$=function(){var t=e.getStorageSync(B),l=1;return t&&(l=t,l++),e.setStorageSync(B,l),l},P=function(e){var t={};for(var l in e)t[l]=encodeURIComponent(e[l]);return t},F=0,U=0,q=function(){var e=(new Date).getTime();return F=e,U=0,e},H=function(){var e=(new Date).getTime();return U=e,e},W=function(e){var t=0;if(0!==F&&(t=U-F),t=parseInt(t/1e3),t=t<1?1:t,"app"===e){var l=t>p;return{residenceTime:t,overtime:l}}if("page"===e){var a=t>d;return{residenceTime:t,overtime:a}}return{residenceTime:t}},G=function(){var e=getCurrentPages(),t=e[e.length-1],l=t.$vm;return"bd"===N()?l.$mp&&l.$mp.page.is:l.$scope&&l.$scope.route||l.$mp&&l.$mp.page.route},J=function(e){var t=getCurrentPages(),l=t[t.length-1],a=l.$vm,n=e._query,r=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return e._query="","bd"===N()?a.$mp&&a.$mp.page.is+r:a.$scope&&a.$scope.route+r||a.$mp&&a.$mp.page.route+r},V=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},z=function(e,t){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof t&&"object"!==typeof t?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof t&&t.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof t?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},X=l("871b").default,K=l("99d5").default||l("99d5"),Q=e.getSystemInfoSync(),Y=function(){function t(){u(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:N(),mpn:T(),ak:K.appid,usv:v,v:w(),ch:S(),cn:"",pn:"",ct:"",t:O(),tt:"",p:"android"===Q.platform?"a":"i",brand:Q.brand||"",md:Q.model,sv:Q.system.replace(/(Android|iOS)\s/,""),mpsdk:Q.SDKVersion||"",mpv:Q.version||"",lang:Q.language,pr:Q.pixelRatio,ww:Q.windowWidth,wh:Q.windowHeight,sw:Q.screenWidth,sh:Q.screenHeight}}return c(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var e=W("app");if(e.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,t){this.__licationHide=!0,H();var l=W();q();var a=J(this);this._sendHideRequest({urlref:a,urlref_ts:l.residenceTime},t)}},{key:"_pageShow",value:function(){var e=J(this),t=G();if(this._navigationBarTitle.config=X&&X.pages[t]&&X.pages[t].titleNView&&X.pages[t].titleNView.titleText||X&&X.pages[t]&&X.pages[t].navigationBarTitleText||"",this.__licationShow)return q(),this.__licationShow=!1,void(this._lastPageRoute=e);H(),this._lastPageRoute=e;var l=W("page");if(l.overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}q()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var e=W("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var t=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+t||"",this.statData.t=O(),this.statData.sc=x(e.scene),this.statData.fvts=A(),this.statData.lvts=R(),this.statData.tvc=$(),"n"===N()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var t=e.url,l=e.urlref,a=e.urlref_ts;this._navigationBarTitle.lt="11";var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:t,tt:this.statData.tt,urlref:l,urlref_ts:a,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(n)}},{key:"_sendHideRequest",value:function(e,t){var l=e.urlref,a=e.urlref_ts,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:l,urlref_ts:a,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(n,t)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.key,l=void 0===t?"":t,a=e.value,n=void 0===a?"":a,r=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:r,ch:this.statData.ch,e_n:l,e_v:"object"===typeof n?JSON.stringify(n):n.toString(),usv:this.statData.usv,t:O(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var t=this;e.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(t){e.statData.v=t.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;K.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,l){var a=this,n=O(),r=this._navigationBarTitle;t.ttn=r.page,t.ttpj=r.config,t.ttc=r.report;var o=this._reportingRequestData;if("n"===N()&&(o=e.getStorageSync("__UNI__STAT__DATA")||{}),o[t.lt]||(o[t.lt]=[]),o[t.lt].push(t),"n"===N()&&e.setStorageSync("__UNI__STAT__DATA",o),!(L()<f)||l){var i=this._reportingRequestData;"n"===N()&&(i=e.getStorageSync("__UNI__STAT__DATA")),j();var u=[],s=[],c=[],b=function(e){var t=i[e];t.forEach(function(t){var l=E(t);0===e?u.push(l):3===e?c.push(l):s.push(l)})};for(var h in i)b(h);u.push.apply(u,s.concat(c));var d={usv:v,t:n,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===N()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==N()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){a._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(t){var l=this;e.request({url:b,method:"POST",data:t,success:function(){},fail:function(e){++l._retry<3&&setTimeout(function(){l._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(e){var t=new Image,l=y(P(e)).options;t.src=h+"?"+l}},{key:"sendEvent",value:function(e,t){z(e,t)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof t?JSON.stringify(t):t},1):this._navigationBarTitle.report=t)}}]),t}(),Z=function(t){function l(){var t;return u(this,l),t=a(this,r(l).call(this)),t.instance=null,"function"===typeof e.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return o(l,t),c(l,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new l),this.instance}}]),c(l,[{key:"addInterceptorInit",value:function(){var t=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;e.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var l=this;t?e.addInterceptor("share",{success:function(){l._share()},fail:function(){l._share()}}):l._share()}},{key:"interceptRequestPayment",value:function(){var t=this;e.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(e,t){this.self=t,j(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,t){if(!t.$scope&&!t.$mp){var l=getCurrentPages();t.$scope=l[l.length-1]}this.self=t,this._query=e}},{key:"show",value:function(e){this.self=e,V(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,V(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var t="";t=e.message?e.stack:JSON.stringify(e);var l={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:t,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(l)}}]),l}(Y),ee=Z.getInstance(),te=!1,le={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var t=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),t.call(this,e)}}},onShow:function(){te=!1,ee.show(this)},onHide:function(){te=!0,ee.hide(this)},onUnload:function(){te?te=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function ae(){var t=l("66fd");(t.default||t).mixin(le),e.report=function(e,t){ee.sendEvent(e,t)}}ae()}).call(this,l("6e42")["default"])},"93b2":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],n=a;t.default=n},"96cf":function(e,t){!function(t){"use strict";var l,a=Object.prototype,n=a.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag",s="object"===typeof e,c=t.regeneratorRuntime;if(c)s&&(e.exports=c);else{c=t.regeneratorRuntime=s?e.exports:{},c.wrap=y;var v="suspendedStart",b="suspendedYield",h="executing",d="completed",p={},f={};f[o]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(M([])));g&&g!==a&&n.call(g,o)&&(f=g);var _=T.prototype=O.prototype=Object.create(f);N.prototype=_.constructor=T,T.constructor=N,T[u]=N.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===N||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,T):(e.__proto__=T,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(_),e},c.awrap=function(e){return{__await:e}},w(S.prototype),S.prototype[i]=function(){return this},c.AsyncIterator=S,c.async=function(e,t,l,a){var n=new S(y(e,t,l,a));return c.isGeneratorFunction(t)?n:n.next().then(function(e){return e.done?e.value:n.next()})},w(_),_[u]="Generator",_[o]=function(){return this},_.toString=function(){return"[object Generator]"},c.keys=function(e){var t=[];for(var l in e)t.push(l);return t.reverse(),function l(){while(t.length){var a=t.pop();if(a in e)return l.value=a,l.done=!1,l}return l.done=!0,l}},c.values=M,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=l)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=l),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=e,o.arg=t,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var l=this.tryEntries[t];if(l.finallyLoc===e)return this.complete(l.completion,l.afterLoc),A(l),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var l=this.tryEntries[t];if(l.tryLoc===e){var a=l.completion;if("throw"===a.type){var n=a.arg;A(l)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:M(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=l),p}}}function y(e,t,l,a){var n=t&&t.prototype instanceof O?t:O,r=Object.create(n.prototype),o=new R(a||[]);return r._invoke=x(e,l,o),r}function E(e,t,l){try{return{type:"normal",arg:e.call(t,l)}}catch(a){return{type:"throw",arg:a}}}function O(){}function N(){}function T(){}function w(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function S(e){function t(l,a,r,o){var i=E(e[l],e,a);if("throw"!==i.type){var u=i.arg,s=u.value;return s&&"object"===typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,r,o)},function(e){t("throw",e,r,o)}):Promise.resolve(s).then(function(e){u.value=e,r(u)},function(e){return t("throw",e,r,o)})}o(i.arg)}var l;function a(e,a){function n(){return new Promise(function(l,n){t(e,a,l,n)})}return l=l?l.then(n,n):n()}this._invoke=a}function x(e,t,l){var a=v;return function(n,r){if(a===h)throw new Error("Generator is already running");if(a===d){if("throw"===n)throw r;return D()}l.method=n,l.arg=r;while(1){var o=l.delegate;if(o){var i=I(o,l);if(i){if(i===p)continue;return i}}if("next"===l.method)l.sent=l._sent=l.arg;else if("throw"===l.method){if(a===v)throw a=d,l.arg;l.dispatchException(l.arg)}else"return"===l.method&&l.abrupt("return",l.arg);a=h;var u=E(e,t,l);if("normal"===u.type){if(a=l.done?d:b,u.arg===p)continue;return{value:u.arg,done:l.done}}"throw"===u.type&&(a=d,l.method="throw",l.arg=u.arg)}}}function I(e,t){var a=e.iterator[t.method];if(a===l){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=l,I(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=E(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=l),t.delegate=null,p):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function M(e){if(e){var t=e[o];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){while(++a<e.length)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=l,t.done=!0,t};return r.next=r}}return{next:D}}function D(){return{value:l,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"99d5":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={appid:"__UNI__EA88FE0"};t.default=a},"9fbd":function(e,t,l){"use strict";var a=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,n=new RegExp("[\\-\\.0-9"+a.source.slice(1,-1)+"·̀-ͯ\\u203F-⁀]"),r=new RegExp("^"+a.source+n.source+"*(?::"+a.source+n.source+"*)?$"),o=0,i=1,u=2,s=3,c=4,v=5,b=6,h=7;function d(){}function p(e,t,l,a,n){function r(e){if(e>65535){e-=65536;var t=55296+(e>>10),l=56320+(1023&e);return String.fromCharCode(t,l)}return String.fromCharCode(e)}function o(e){var t=e.slice(1,-1);return t in l?l[t]:"#"===t.charAt(0)?r(parseInt(t.substr(1).replace("x","0x"))):(n.error("entity not found:"+e),e)}function i(t){if(t>p){var l=e.substring(p,t).replace(/&#?\w+;/g,o);b&&u(p),a.characters(l,0,t-p),p=t}}function u(t,l){while(t>=c&&(l=v.exec(e)))s=l.index,c=s+l[0].length,b.lineNumber++;b.columnNumber=t-s+1}var s=0,c=0,v=/.+(?:\r\n?|\n)|.*$/g,b=a.locator,h=[{currentNSMap:t}],d={},p=0;while(1){try{var E=e.indexOf("<",p);if(E<0){if(!e.substr(p).match(/^\s*$/)){var w=a.document,S=w.createTextNode(e.substr(p));w.appendChild(S),a.currentElement=S}return}switch(E>p&&i(E),e.charAt(E+1)){case"/":var x=e.indexOf(">",E+3),I=e.substring(E+2,x),C=h.pop(),A=C.localNSMap;if(C.tagName!=I&&n.fatalError("end tag name: "+I+" is not match the current start tagName:"+C.tagName),a.endElement(C.uri,C.localName,I),A)for(var R in A)a.endPrefixMapping(R);x++;break;case"?":b&&u(E),x=N(e,E,a);break;case"!":b&&u(E),x=O(e,E,a,n);break;default:b&&u(E);var M=new T,D=(x=m(e,E,M,o,n),M.length);if(b){if(D)for(var k=0;k<D;k++){var j=M[k];u(j.offset),j.offset=f(b,{})}u(x)}!M.closed&&y(e,x,M.tagName,d)&&(M.closed=!0,l.nbsp||n.warning("unclosed xml attribute")),g(M,a,h),"http://www.w3.org/1999/xhtml"!==M.uri||M.closed?x++:x=_(e,x,M.tagName,o,a)}}catch(L){n.error("element parse error: "+L),x=-1}x>p?p=x:i(Math.max(E,p)+1)}}function f(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}function m(e,t,l,a,n){var r,d=++t,p=o;while(1){var f=e.charAt(d);switch(f){case"=":if(p===i)r=e.slice(t,d),p=s;else{if(p!==u)throw new Error("attribute equal must after attrName");p=s}break;case"'":case'"':if(p===s){if(t=d+1,d=e.indexOf(f,t),!(d>0))throw new Error("attribute value no end '"+f+"' match");m=e.slice(t,d).replace(/&#?\w+;/g,a),l.add(r,m,t-1),p=v}else{if(p!=c)throw new Error('attribute value must after "="');m=e.slice(t,d).replace(/&#?\w+;/g,a),l.add(r,m,t),n.warning('attribute "'+r+'" missed start quot('+f+")!!"),t=d+1,p=v}break;case"/":switch(p){case o:l.setTagName(e.slice(t,d));case v:case b:case h:p=h,l.closed=!0;case c:case i:case u:break;default:throw new Error("attribute invalid close char('/')")}break;case"":n.error("unexpected end of input");case">":switch(p){case o:l.setTagName(e.slice(t,d));case v:case b:case h:break;case c:case i:m=e.slice(t,d),"/"===m.slice(-1)&&(l.closed=!0,m=m.slice(0,-1));case u:p===u&&(m=r),p==c?(n.warning('attribute "'+m+'" missed quot(")!!'),l.add(r,m.replace(/&#?\w+;/g,a),t)):(n.warning('attribute "'+m+'" missed value!! "'+m+'" instead!!'),l.add(m,m,t));break;case s:throw new Error("attribute value missed!!")}return d;case"":f=" ";default:if(f<=" ")switch(p){case o:l.setTagName(e.slice(t,d)),p=b;break;case i:r=e.slice(t,d),p=u;break;case c:var m=e.slice(t,d).replace(/&#?\w+;/g,a);n.warning('attribute "'+m+'" missed quot(")!!'),l.add(r,m,t);case v:p=b;break}else switch(p){case u:n.warning('attribute "'+r+'" missed value!! "'+r+'" instead!!'),l.add(r,r,t),t=d,p=i;break;case v:n.warning('attribute space is required"'+r+'"!!');case b:p=i,t=d;break;case s:p=c,t=d;break;case h:throw new Error("elements closed character '/' and '>' must be connected to")}}d++}}function g(e,t,l){var a=e.tagName,n=null,r=l[l.length-1].currentNSMap,o=e.length;while(o--){var i=e[o],u=i.qName,s=i.value,c=u.indexOf(":");if(c>0)var v=i.prefix=u.slice(0,c),b=u.slice(c+1),h="xmlns"===v&&b;else b=u,v=null,h="xmlns"===u&&"";i.localName=b,!1!==h&&(null==n&&(n={},E(r,r={})),r[h]=n[h]=s,i.uri="http://www.w3.org/2000/xmlns/",t.startPrefixMapping(h,s))}o=e.length;while(o--){i=e[o];v=i.prefix;v&&("xml"===v&&(i.uri="http://www.w3.org/XML/1998/namespace"),"xmlns"!==v&&(i.uri=r[v]))}c=a.indexOf(":");c>0?(v=e.prefix=a.slice(0,c),b=e.localName=a.slice(c+1)):(v=null,b=e.localName=a);var d=e.uri=r[v||""];if(t.startElement(d,b,a,e),e.closed){if(t.endElement(d,b,a),n)for(v in n)t.endPrefixMapping(v)}else e.currentNSMap=r,e.localNSMap=n,l.push(e)}function _(e,t,l,a,n){if(/^(?:script|textarea)$/i.test(l)){var r=e.indexOf("</"+l+">",t),o=e.substring(t+1,r);if(/[&<]/.test(o))return/^script$/i.test(l)?(n.characters(o,0,o.length),r):(o=o.replace(/&#?\w+;/g,a),n.characters(o,0,o.length),r)}return t+1}function y(e,t,l,a){var n=a[l];return null==n&&(n=a[l]=e.lastIndexOf("</"+l+">")),n<t}function E(e,t){for(var l in e)t[l]=e[l]}function O(e,t,l,a){var n=e.charAt(t+2);switch(n){case"-":if("-"===e.charAt(t+3)){var r=e.indexOf("--\x3e",t+4);return r>t?(l.comment(e,t+4,r-t-4),r+3):(a.error("Unclosed comment"),-1)}return-1;default:if("CDATA["==e.substr(t+3,6)){r=e.indexOf("]]>",t+9);return l.startCDATA(),l.characters(e,t+9,r-t-9),l.endCDATA(),r+3}var o=S(e,t),i=o.length;if(i>1&&/!doctype/i.test(o[0][0])){var u=o[1][0],s=i>3&&/^public$/i.test(o[2][0])&&o[3][0],c=i>4&&o[4][0],v=o[i-1];return l.startDTD(u,s&&s.replace(/^(['"])(.*?)\1$/,"$2"),c&&c.replace(/^(['"])(.*?)\1$/,"$2")),l.endDTD(),v.index+v[0].length}}return-1}function N(e,t,l){var a=e.indexOf("?>",t);if(a){var n=e.substring(t,a).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);if(n){n[0].length;return l.processingInstruction(n[1],n[2]),a+2}return-1}return-1}function T(e){}function w(e,t){return e.__proto__=t,e}function S(e,t){var l,a=[],n=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;n.lastIndex=t,n.exec(e);while(l=n.exec(e))if(a.push(l),l[1])return a}d.prototype={parse:function(e,t,l){var a=this.domBuilder;a.startDocument(),E(t,t={}),p(e,t,l,a,this.errorHandler),a.endDocument()}},T.prototype={setTagName:function(e){if(!r.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},add:function(e,t,l){if(!r.test(e))throw new Error("invalid attribute:"+e);this[this.length++]={qName:e,value:t,offset:l}},length:0,getLocalName:function(e){return this[e].localName},getOffset:function(e){return this[e].offset},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}},w({},w.prototype)instanceof w||(w=function(e,t){function l(){}for(t in l.prototype=t,l=new l,e)l[t]=e[t];return l}),t.XMLReader=d},a34a:function(e,t,l){e.exports=l("bbdd")},a911:function(e,t,l){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l("66fd")),n=r(l("2f62"));r(l("fd68")),l("f18c");function r(e){return e&&e.__esModule?e:{default:e}}a.default.use(n.default);var o=new n.default.Store({state:{userInfo:e.getStorageSync("userInfo")},mutations:{},getters:{setLogin:function(e){return e.isLogin?"已登录":"未登录"}},actions:{}}),i=o;t.default=i}).call(this,l("6e42")["default"])},bbdd:function(e,t,l){var a=function(){return this||"object"===typeof self&&self}()||Function("return this")(),n=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,r=n&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,e.exports=l("96cf"),n)a.regeneratorRuntime=r;else try{delete a.regeneratorRuntime}catch(o){a.regeneratorRuntime=void 0}},c15b:function(e,t,l){"use strict";function a(e){var t=/^[1][0-9]{10}$/;return t.test(e)}function n(e){var t=/^[1][0-9]{5}$/;return t.test(e)}function r(e){var t=/^[0-9A-Z_!]{6,12}$/;return t.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={testPhone:a,testCode:n,testPassWord:r};t.default=o},c2fe:function(e,t,l){"use strict";(function(t){var a=o(l("deba")),n=o(l("c91b")),r=o(l("fb2d"));function o(e){return e&&e.__esModule?e:{default:e}}console.group=console.group||{},console.groupEnd=console.groupEnd||{};var i={},u=i.WebIM=n.default;i.WebIM.config=r.default,u.isDebug=function(e){function l(e){function l(){var e=new Date,t=e.getHours(),l=e.getMinutes(),a=e.getSeconds();return(t<10?"0"+t:t)+":"+(l<10?"0"+l:l)+":"+(a<10?"0"+a:a)+" "}a.default.Strophe.log=function(e,t){},a.default.Strophe.Connection.prototype.rawOutput=e?function(e){try{console.group("%csend # "+l(),"color: blue; font-size: large"),t("log","%c"+e,"color: blue"," at webIM\\utils\\WebIM.js:38"),console.groupEnd()}catch(a){t("log",a," at webIM\\utils\\WebIM.js:42")}}:function(){}}e&&(u.config.isDebug=e.isDebug,l(u.config.isDebug))},u.config.autoSignIn=!1,u.config.autoSignIn&&(u.config.autoSignInName="lwz2",u.config.autoSignInPwd="1"),u.parseEmoji=function(e){if("undefined"===typeof u.Emoji||"undefined"===typeof u.Emoji.map)return e;var t=u.Emoji,l=null,a=[],n=[];for(var r in t.map)if(t.map.hasOwnProperty(r))while(e.indexOf(r)>-1)e=e.replace(r,"^"+t.map[r]+"^");for(var o=e.split("^"),i=(l=/^e.*g$/,0);i<o.length;i++)""!=o[i]&&a.push(o[i]);for(i=0;i<a.length;i++)if(l.test(a[i])){var s={};s.msg=a[i],s.type="emoji",n.push(s)}else{s={};s.msg=a[i],s.type="txt",n.push(s)}return n},u.time=function(){var e=new Date,t=e.getHours(),l=e.getMinutes(),a=e.getSeconds(),n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+(t<10?"0"+t:t)+":"+(l<10?"0"+l:l)+":"+(a<10?"0"+a:a);return n},u.Emoji={path:"../../../../../images/faces/",map:{"[):]":"ee_1.png","[:D]":"ee_2.png","[;)]":"ee_3.png","[:-o]":"ee_4.png","[:p]":"ee_5.png","[(H)]":"ee_6.png","[:@]":"ee_7.png","[:s]":"ee_8.png","[:$]":"ee_9.png","[:(]":"ee_10.png","[:'(]":"ee_11.png","[<o)]":"ee_12.png","[(a)]":"ee_13.png","[8o|]":"ee_14.png","[8-|]":"ee_15.png","[+o(]":"ee_16.png","[|-)]":"ee_17.png","[:|]":"ee_18.png","[*-)]":"ee_19.png","[:-#]":"ee_20.png","[^o)]":"ee_21.png","[:-*]":"ee_22.png","[8-)]":"ee_23.png","[del]":"btn_del.png","[(|)]":"ee_24.png","[(u)]":"ee_25.png","[(S)]":"ee_26.png","[(*)]":"ee_27.png","[(#)]":"ee_28.png","[(R)]":"ee_29.png","[({)]":"ee_30.png","[(})]":"ee_31.png","[(k)]":"ee_32.png","[(F)]":"ee_33.png","[(W)]":"ee_34.png","[(D)]":"ee_35.png"}},u.EmojiObj={path:"../../../../../images/faces/",map1:{"[):]":"ee_1.png","[:D]":"ee_2.png","[;)]":"ee_3.png","[:-o]":"ee_4.png","[:p]":"ee_5.png","[(H)]":"ee_6.png","[:@]":"ee_7.png"},map2:{"[:s]":"ee_8.png","[:$]":"ee_9.png","[:(]":"ee_10.png","[:'(]":"ee_11.png","[<o)]":"ee_12.png","[(a)]":"ee_13.png","[8o|]":"ee_14.png"},map3:{"[8-|]":"ee_15.png","[+o(]":"ee_16.png","[|-)]":"ee_17.png","[:|]":"ee_18.png","[*-)]":"ee_19.png","[:-#]":"ee_20.png","[del]":"del.png"},map4:{"[^o)]":"ee_21.png","[:-*]":"ee_22.png","[8-)]":"ee_23.png","[(|)]":"ee_24.png","[(u)]":"ee_25.png","[(S)]":"ee_26.png","[(*)]":"ee_27.png"},map5:{"[(#)]":"ee_28.png","[(R)]":"ee_29.png","[({)]":"ee_30.png","[(})]":"ee_31.png","[(k)]":"ee_32.png","[(F)]":"ee_33.png","[(W)]":"ee_34.png","[(D)]":"ee_35.png"},map6:{"[del]":"del.png"}},u.conn=new u.connection({isMultiLoginSessions:u.config.isMultiLoginSessions,https:"boolean"===typeof u.config.https?u.config.https:"https:"===location.protocol,url:u.config.xmppURL,apiUrl:u.config.apiURL,isAutoLogin:!1,heartBeatWait:u.config.heartBeatWait,autoReconnectNumMax:u.config.autoReconnectNumMax,autoReconnectInterval:u.config.autoReconnectInterval}),e.exports={default:u}}).call(this,l("0de9")["default"])},c795:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return e<10?"0"+e:e+""},n={date:{init:function(e,t){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"date",n=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,i=arguments.length>6?arguments[6]:void 0,u=new Date,s=[],c=new Date(e.toString()),v=new Date(t.toString());e>t&&(c=new Date(t.toString()),v=new Date(e.toString()));for(var b=c.getFullYear(),h=(c.getMonth(),v.getFullYear()),d=[],p=[],f=[],m=[],g=[],_=[],y=[],E=[],O=o?1*r[1]:r[1]+1,N=u.getFullYear(),T=u.getMonth()+1,w=u.getDate(),S=new Date(b,O,0).getDate(),x=b;x<=h;x++)d.push(x+"");var I=d[r[0]];switch(l){case"half":case"date":case"yearMonth":if(i&&I==N){for(var C=1;C<=T;C++)p.push(a(C));for(var A=1;A<=w;A++)f.push(a(A))}else{for(var R=1;R<=12;R++)p.push(a(R));for(var M=1;M<=S;M++)f.push(a(M))}break;default:for(var D=1;D<=12;D++)p.push(a(D));for(var k=1;k<=S;k++)f.push(a(k));break}for(var j=0;j<24;j++)m.push(a(j));for(var L=0;L<60;L+=1*n)g.push(a(L));for(var B=0;B<60;B++)_.push(a(B));switch(o&&(E=[d.indexOf(r[0]),p.indexOf(r[1]),f.indexOf(r[2]),m.indexOf(r[3]),-1==g.indexOf(r[4])?0:g.indexOf(r[4]),_.indexOf(r[5])]),l){case"range":return o?(s=[E[0],E[1],E[2],0,E[0],E[1],E[2]],{years:d,months:p,days:f,defaultVal:s}):{years:d,months:p,days:f};case"date":return o?(s=[E[0],E[1],E[2]],{years:d,months:p,days:f,defaultVal:s}):{years:d,months:p,days:f};case"half":return y=[{label:"上午",value:0},{label:"下午",value:1}],o?(s=[E[0],E[1],E[2],E[3]],{years:d,months:p,days:f,areas:y,defaultVal:s}):{years:d,months:p,days:f,areas:y};case"yearMonth":return o?(s=[E[0],E[1]],{years:d,months:p,defaultVal:s}):{years:d,months:p};case"dateTime":return o?(s=E,{years:d,months:p,days:f,hours:m,minutes:g,seconds:_,defaultVal:s}):{years:d,months:p,days:f,hours:m,minutes:g,seconds:_};case"time":return o?(s=[E[3],E[4],E[5]],{hours:m,minutes:g,seconds:_,defaultVal:s}):{hours:m,minutes:g,seconds:_}}},initMonths:function(e,t){var l=new Date,n=l.getFullYear(),r=l.getMonth()+1,o=(l.getDate(),n==e),i=[];if(o&&t)for(var u=1;u<=r;u++)i.push(a(u));else for(var s=1;s<=12;s++)i.push(a(s));return i},initDays:function(e,t,l){var n=new Date,r=n.getFullYear(),o=n.getMonth()+1,i=n.getDate(),u=r==e&&o==t,s=new Date(e,t,0).getDate(),c=[];if(u&&l)for(var v=1;v<=i;v++)c.push(a(v));else for(var b=1;b<=s;b++)c.push(a(b));return c}},limitHour:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t=new Date,l=[],n=[],r=[],o=(new Date).getHours(),i=["周日","周一","周二","周三","周四","周五","周六"],u=0;u<e;u++){var s=void 0,c=void 0,v=void 0,b=void 0;s=t.getFullYear(),c=a(t.getMonth()+1),v=a(t.getDate()),b=i[t.getDay()];var h="";switch(u){case 0:h="今天";break;case 1:h="明天";break;case 2:h="后天";break;default:h=c+"月"+v+"日 "+b;break}l.push({label:h,value:s+"-"+c+"-"+v,today:0==u}),t.setDate(t.getDate()+1)}n=o>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}];for(var d=o>12?o-12:o;d<=12;d++)r.push({label:a(d),value:a(o>12?d+12:d)});return{date:l,areas:n,hours:r}},initAreas:function(e){var t=[],l=(new Date).getHours();return t=e.today&&l>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}],t},initHours:function(e,t){var l=[],n=(new Date).getHours();if(e.today)if(1==t.value&&n<=12)for(var r=1;r<=12;r++)l.push({label:a(r),value:a(1==t.value?r+12:r)});else for(var o=n>12?n-12:n;o<=12;o++)l.push({label:a(o),value:a(1==t.value?o+12:o)});else for(var i=1;i<=12;i++)l.push({label:a(i),value:a(1==t.value?i+12:i)});return l}},limit:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,o=new Date,i=new Date((new Date).getTime()+60*r*1e3),u=[],s=[],c=[],v=i.getHours(),b=Math.floor(i.getMinutes()/n)*n,h=["周日","周一","周二","周三","周四","周五","周六"],d=0;d<e;d++){var p=void 0,f=void 0,m=void 0,g=void 0;p=o.getFullYear(),f=a(o.getMonth()+1),m=a(o.getDate()),g=h[o.getDay()];var _="";switch(d){case 0:_="今天";break;case 1:_="明天";break;case 2:_="后天";break;default:_=f+"月"+m+"日 "+g;break}u.push({label:_,value:p+"-"+f+"-"+m,flag:0==d}),o.setDate(o.getDate()+1)}v<t&&(v=t),v>l&&(v=l);for(var y=1*v;y<=1*l;y++)s.push({label:a(y),value:a(y),flag:y==v});for(var E=b;E<60;E+=1*n)c.push({label:a(E),value:a(E)});return{date:u,hours:s,minutes:c}},initHours:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,l=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:30),n=arguments.length>4?arguments[4]:void 0,r=[],o=n.split("-"),i=new Date,u=i.getFullYear(),s=i.getMonth()+1,c=i.getDate(),v=new Date((new Date).getTime()+60*l*1e3),b=v.getHours(),h=u==o[0]&&s==o[1]&&c==o[2];if(b>t&&(b=t),h)for(var d=1*b;d<=1*t;d++)r.push({label:a(d),value:a(d),flag:d==b});else for(var p=1*e;p<=1*t;p++)r.push({label:a(p),value:a(p),flag:!1});return r},initMinutes:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30,l=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,r=[],o=new Date((new Date).getTime()+60*t*1e3),i=l.split("-"),u=new Date,s=u.getFullYear(),c=u.getMonth()+1,v=u.getDate(),b=o.getHours(),h=Math.floor(o.getMinutes()/e)*e,d=s==i[0]&&c==i[1]&&v==i[2];if(d)if(n==b)for(var p=h;p<60;p+=1*e)r.push({label:a(p),value:a(p)});else for(var f=0;f<60;f+=1*e)r.push({label:a(f),value:a(f)});else for(var m=0;m<60;m+=1*e)r.push({label:a(m),value:a(m)});return r}},range:{init:function(e,t,l,n){new Date;var r=[],o=new Date(e.toString()),i=new Date(t.toString());e>t&&(o=new Date(t.toString()),i=new Date(e.toString()));for(var u=o.getFullYear(),s=(o.getMonth(),i.getFullYear()),c=[],v=[],b=[],h=[],d=[],p=[],f=n?1*l[1]:l[1]+1,m=new Date(u,f,0).getDate(),g=u;g<=s;g++)c.push(g+"");for(var _=1;_<=12;_++)v.push(a(_));for(var y=1;y<=m;y++)b.push(a(y));for(var E=u;E<=s;E++)h.push(E+"");for(var O=1;O<=12;O++)d.push(a(O));for(var N=1;N<=m;N++)p.push(a(N));return n?(r=[c.indexOf(l[0]),v.indexOf(l[1]),b.indexOf(l[2]),0,h.indexOf(l[0]),d.indexOf(l[1]),p.indexOf(l[2])],{fyears:c,fmonths:v,fdays:b,tyears:h,tmonths:d,tdays:p,defaultVal:r}):{fyears:c,fmonths:v,fdays:b,tyears:h,tmonths:d,tdays:p}},initDays:function(e,t){for(var l=new Date(e,t,0).getDate(),n=[],r=1;r<=l;r++)n.push(a(r));return n}}},r=n;t.default=r},c8ba:function(e,t){var l;l=function(){return this}();try{l=l||new Function("return this")()}catch(a){"object"===typeof window&&(l=window)}e.exports=l},c91b:function(module,exports,__webpack_require__){"use strict";(function(__f__){var _strophe=_interopRequireDefault(__webpack_require__("deba"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var WebIM={},Strophe=_strophe.default.Strophe;Strophe.log=function(e,t){};var xmldom=__webpack_require__("5645"),DOMParser=xmldom.DOMParser,window={},_version="1.1.3",_code=__webpack_require__("5af2").code,_utils=__webpack_require__("8004").utils,_msg=__webpack_require__("54ed"),_message=_msg._msg,_msgHash={},Queue=__webpack_require__("15b0").Queue,location=window.location||{protocol:"https:"};function _listenNetwork(e,t){window.addEventListener?(window.addEventListener("online",e),window.addEventListener("offline",t)):window.attachEvent&&(document.body?(document.body.attachEvent("ononline",e),document.body.attachEvent("onoffline",t)):window.attachEvent("load",function(){document.body.attachEvent("ononline",e),document.body.attachEvent("onoffline",t)}))}function _parseRoom(e){var t=[],l=e.getElementsByTagName("item");if(l)for(var a=0;a<l.length;a++){var n=l[a],r=n.getAttribute("jid"),o=r.split("@")[0],i={jid:r,name:n.getAttribute("name"),roomId:o.split("_")[1]};t.push(i)}return t}function _parseRoomOccupants(e){var t=[],l=e.getElementsByTagName("item");if(l)for(var a=0;a<l.length;a++){var n=l[a],r={jid:n.getAttribute("jid"),name:n.getAttribute("name")};t.push(r)}return t}function _parseResponseMessage(msginfo){var parseMsgData={errorMsg:!0,data:[]},msgBodies=msginfo.getElementsByTagName("body");if(msgBodies){for(var i=0;i<msgBodies.length;i++){var msgBody=msgBodies[i],childNodes=msgBody.childNodes;if(childNodes&&childNodes.length>0){var childNode=msgBody.childNodes[0];if(childNode.nodeType==Strophe.ElementType.TEXT){var jsondata=childNode.wholeText||childNode.nodeValue;jsondata=jsondata.replace("\n","<br>");try{var data=JSON.parse(jsondata);parseMsgData.errorMsg=!1,parseMsgData.data=[data]}catch(e){}}}}var delayTags=msginfo.getElementsByTagName("delay");if(delayTags&&delayTags.length>0){var delayTag=delayTags[0],delayMsgTime=delayTag.getAttribute("stamp");delayMsgTime&&(parseMsgData.delayTimeStamp=delayMsgTime)}}else{var childrens=msginfo.childNodes;if(childrens&&childrens.length>0){var child=msginfo.childNodes[0];if(child.nodeType==Strophe.ElementType.TEXT)try{var _data=eval("("+child.nodeValue+")");parseMsgData.errorMsg=!1,parseMsgData.data=[_data]}catch(e){}}}return parseMsgData}function _parseNameFromJidFn(e,t){var l=e,a=l.indexOf("_");t=t||"",-1!==a&&(l=l.substring(a+1));var n=l.indexOf("@"+t);return-1!==n&&(l=l.substring(0,n)),l}function _parseFriend(e,t,l){var a=[],n=e.getElementsByTagName("item");if(n)for(var r=function(e){var l=[],r=n[e],o=r.getAttribute("jid");if(!o)return"continue";var i=r.getAttribute("subscription"),u={subscription:i,jid:o},s=r.getAttribute("ask");s&&(u.ask=s);var c=r.getAttribute("name");u.name=c||_parseNameFromJidFn(o),Strophe.forEachChild(r,"group",function(e){l.push(Strophe.getText(e))}),u.groups=l,a.push(u),t&&"from"==i&&t.subscribe({toJid:o}),t&&"to"==i&&t.subscribed({toJid:o})},o=0;o<n.length;o++)r(o);return a}function _parseMessageType(e){var t="normal",l=e.getElementsByTagName("received");if(l&&l.length>0&&"urn:xmpp:receipts"===l[0].namespaceURI)t="received";else{var a=e.getElementsByTagName("invite");a&&a.length>0&&(t="invite")}return t}function _handleMessageQueue(e){for(var t in _msgHash)Object.hasOwnProperty.call(_msgHash,t)&&_msgHash[t].send(e)}function _loginCallback(e,t,l){var a,n="conflict"===t;if(e==Strophe.Status.CONNFAIL)a={type:_code.WEBIM_CONNCTION_SERVER_CLOSE_ERROR,msg:t},n&&(a.conflict=!0),l.onError(a);else if(e==Strophe.Status.ATTACHED||e==Strophe.Status.CONNECTED){l.autoReconnectNumTotal=0,l.intervalId=setInterval(function(){l.handelSendQueue()},200);var r=function(e){var t=_parseMessageType(e);return"received"===t?(l.handleReceivedMessage(e),!0):"invite"===t?(l.handleInviteMessage(e),!0):(l.handleMessage(e),!0)},o=function(e){return l.handlePresence(e),!0},i=function(e){return l.handleIqRoster(e),!0},u=function(e){return l.handleIqPrivacy(e),!0},s=function(e){return l.handleIq(e),!0};l.addHandler(r,null,"message",null,null,null),l.addHandler(o,null,"presence",null,null,null),l.addHandler(i,"jabber:iq:roster","iq","set",null,null),l.addHandler(u,"jabber:iq:privacy","iq","set",null,null),l.addHandler(s,null,"iq",null,null,null),l.context.status=_code.STATUS_OPENED;var c=[_code.WEBIM_MESSAGE_REC_TEXT,_code.WEBIM_MESSAGE_REC_EMOJI],v=[_code.WEBIM_MESSAGE_SED_TEXT];_utils.isCanDownLoadFile&&(c.push(_code.WEBIM_MESSAGE_REC_PHOTO),c.push(_code.WEBIM_MESSAGE_REC_AUDIO_FILE)),_utils.isCanUploadFile&&(v.push(_code.WEBIM_MESSAGE_REC_PHOTO),v.push(_code.WEBIM_MESSAGE_REC_AUDIO_FILE)),l.notifyVersion(),l.retry&&_handleMessageQueue(l),l.heartBeat(),l.isAutoLogin&&l.setPresence(),l.onOpened({canReceive:c,canSend:v,accessToken:l.context.accessToken}),l.onSocketConnected()}else if(e==Strophe.Status.DISCONNECTING){if(l.isOpened()){if(l.autoReconnectNumTotal<l.autoReconnectNumMax)return 0==l.autoReconnectNumTotal&&l.onReconnect(),void l.reconnect();l.autoReconnectNumTotal==l.autoReconnectNumMax&&(__f__("log","Err 3"," at webIM\\sdk\\connection.js:424"),a={type:_code.WEBIM_CONNCTION_DISCONNECTED},l.onError(a),l.context.status=_code.STATUS_CLOSED,l.clear(),l.onClosed()),l.stopHeartBeat()}l.context.status=_code.STATUS_CLOSING}else if(e==Strophe.Status.DISCONNECTED){if(l.isOpened()){if(l.autoReconnectNumTotal<l.autoReconnectNumMax)return 0==l.autoReconnectNumTotal&&l.onReconnect(),void l.reconnect();l.autoReconnectNumTotal==l.autoReconnectNumMax&&(l.context.status=_code.STATUS_CLOSED,l.clear(),l.onClosed(),l.stopHeartBeat()),__f__("log","Err 4"," at webIM\\sdk\\connection.js:454"),a={type:_code.WEBIM_CONNCTION_DISCONNECTED},l.onError(a)}l.context.status=_code.STATUS_CLOSED}else e==Strophe.Status.AUTHFAIL?(a={type:_code.WEBIM_CONNCTION_AUTH_ERROR},n&&(a.conflict=!0),l.onError(a),l.clear(),l.stopHeartBeat(),wx.closeSocket()):e==Strophe.Status.ERROR&&(l.context.status=_code.STATUS_ERROR,a={type:_code.WEBIM_CONNCTION_SERVER_ERROR},n&&(a.conflict=!0),l.onError(a),l.stopHeartBeat())}function _login(e,t){var l=null,a=e.access_token||"";function n(e,l){__f__("log","connection stat change",e,l," at webIM\\sdk\\connection.js:506"),_loginCallback(e,l,t)}""!=a?(t.context.accessToken=e.access_token,t.context.accessTokenExpires=e.expires_in,l=new Strophe.Connection(t.url,{inactivity:t.inactivity,maxRetries:t.maxRetries,pollingTime:t.pollingTime}),t.context.stropheConn=l,t.route?l.connect(t.context.jid,"$t$"+a,n,t.wait,t.hold,t.route):l.connect(t.context.jid,"$t$"+a,n,t.wait,t.hold)):t.onError({type:_code.WEBIM_CONNCTION_OPEN_USERGRID_ERROR,data:e})}function _getJid(e,t){var l=e.toJid||"";if(""===l){var a=t.context.appKey||"",n=a+"_"+e.to+"@"+t.domain;e.resource&&(n=n+"/"+e.resource),l=n}return l}function _getJidByName(e,t){return _getJid({to:e},t)}function _validCheck(e,t){if(e=e||{},""==e.user)return t.onError({type:_code.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR}),!1;var l=e.user+""||"",a=e.appKey||"",n=a.split("#");if(2!==n.length)return t.onError({type:_code.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR}),!1;var r=n[0],o=n[1];if(!r)return t.onError({type:_code.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR}),!1;if(!o)return t.onError({type:_code.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR}),!1;var i=a+"_"+l.toLowerCase()+"@"+t.domain,u=e.resource||"webim";return t.isMultiLoginSessions&&(u+=l+(new Date).getTime()+Math.floor(1e6*Math.random().toFixed(6))),t.context.jid=i+"/"+u,t.context.userId=l,t.context.appKey=a,t.context.appName=o,t.context.orgName=r,!0}function _getXmppUrl(e,t){if(/^(ws|http)s?:\/\/?/.test(e))return e;var l={prefix:"http",base:"://"+e,suffix:"/http-bind/"};return t&&_utils.isSupportWss?(l.prefix="wss",l.suffix="/ws/"):t?l.prefix="https":window.WebSocket&&(l.prefix="ws",l.suffix="/ws/"),l.prefix+l.base+l.suffix}function connection(e){if(!(this instanceof connection))return new connection(e);e=e||{},this.isMultiLoginSessions=e.isMultiLoginSessions||!1,this.wait=e.wait||30,this.retry=e.retry||!1,this.https=e.https||"https:"===location.protocol,this.url=_getXmppUrl(e.url,this.https),this.hold=e.hold||1,this.route=e.route||null,this.domain=e.domain||"easemob.com",this.inactivity=e.inactivity||30,this.heartBeatWait=e.heartBeatWait||4500,this.maxRetries=e.maxRetries||5,this.isAutoLogin=!1!==e.isAutoLogin,this.pollingTime=e.pollingTime||800,this.stropheConn=!1,this.autoReconnectNumMax=e.autoReconnectNumMax||0,this.autoReconnectNumTotal=0,this.autoReconnectInterval=e.autoReconnectInterval||0,this.context={status:_code.STATUS_INIT},this.apiUrl=e.apiUrl||"",this.sendQueue=new Queue,this.intervalId=null,this.orgName="",this.appName="",this.token=""}function _parsePrivacy(e){var t=[],l=e.getElementsByTagName("item");if(l)for(var a=0;a<l.length;a++){var n=l[a],r=n.getAttribute("value"),o=n.getAttribute("order"),i=n.getAttribute("type");if(r){var u=_parseNameFromJidFn(r);t[u]={type:i,order:o,jid:r,name:u}}}return t}window.URL=window.URL||window.webkitURL||window.mozURL||window.msURL,window.XDomainRequest&&(XDomainRequest.prototype.oldsend=XDomainRequest.prototype.send,XDomainRequest.prototype.send=function(){XDomainRequest.prototype.oldsend.apply(this,arguments),this.readyState=2}),Strophe.Request.prototype._newXHR=function(){var e=_utils.xmlrequest(!0);return e.overrideMimeType&&e.overrideMimeType("text/xml"),e.onreadystatechange=this.func.bind(null,this),e},Strophe.Websocket.prototype._onSocketClose=function(e){},Strophe.Websocket.prototype._onMessage=function(e){var t,l;try{WebIM&&WebIM.config.isDebug&&(console.group("%crecv # ","color: green; font-size: large"),__f__("log","%c"+e.data,"color: green"," at webIM\\sdk\\connection.js:70"),console.groupEnd())}catch(n){}if(0!==e.data.indexOf("<close ")){if(0===e.data.search("<open ")){if(t=(new DOMParser).parseFromString(e.data,"text/xml").documentElement,!this._handleStreamStart(t))return}else l=this._streamWrap(e.data),t=(new DOMParser).parseFromString(l,"text/xml").documentElement;if(!this._check_streamerror(t,Strophe.Status.ERROR))return this._conn.disconnecting&&"presence"===t.firstChild.nodeName&&"unavailable"===t.firstChild.getAttribute("type")?(this._conn.xmlInput(t),void this._conn.rawInput(Strophe.serialize(t))):void this._conn._dataRecv(t,e.data)}else{t=(new DOMParser).parseFromString(e.data,"text/xml").documentElement;var a=t.getAttribute("see-other-uri");a?(this._conn._changeConnectStatus(Strophe.Status.REDIRECT,"Received see-other-uri, resetting connection"),this._conn.reset(),this._conn.service=a,this._connect()):this._conn._doDisconnect("receive <close> from server")}},connection.prototype.handelSendQueue=function(){var e=this.sendQueue.pop();null!==e&&this.sendReceiptsMessage(e)},connection.prototype.listen=function(e){e.url&&(this.url=_getXmppUrl(e.url,this.https)),this.onOpened=e.onOpened||_utils.emptyfn,this.onClosed=e.onClosed||_utils.emptyfn,this.onReconnect=e.onReconnect||_utils.emptyfn,this.onSocketConnected=e.onSocketConnected||_utils.emptyfn,this.onTextMessage=e.onTextMessage||_utils.emptyfn,this.onEmojiMessage=e.onEmojiMessage||_utils.emptyfn,this.onPictureMessage=e.onPictureMessage||_utils.emptyfn,this.onAudioMessage=e.onAudioMessage||_utils.emptyfn,this.onVideoMessage=e.onVideoMessage||_utils.emptyfn,this.onFileMessage=e.onFileMessage||_utils.emptyfn,this.onLocationMessage=e.onLocationMessage||_utils.emptyfn,this.onCmdMessage=e.onCmdMessage||_utils.emptyfn,this.onPresence=e.onPresence||_utils.emptyfn,this.onRoster=e.onRoster||_utils.emptyfn,this.onError=e.onError||_utils.emptyfn,this.onReceivedMessage=e.onReceivedMessage||_utils.emptyfn,this.onInviteMessage=e.onInviteMessage||_utils.emptyfn,this.onOffline=e.onOffline||_utils.emptyfn,this.onOnline=e.onOnline||_utils.emptyfn,this.onConfirmPop=e.onConfirmPop||_utils.emptyfn,this.onCreateGroup=e.onCreateGroup||_utils.emptyfn,this.onUpdateMyGroupList=e.onUpdateMyGroupList||_utils.emptyfn,this.onUpdateMyRoster=e.onUpdateMyRoster||_utils.emptyfn,this.onBlacklistUpdate=e.onBlacklistUpdate||_utils.emptyfn,_listenNetwork(this.onOnline,this.onOffline)},connection.prototype.heartBeatID=0,connection.prototype.heartBeat=function(){var e=this;this.stopHeartBeat(),this.heartBeatID=setInterval(function(){e.ping({toJid:e.domain,type:"normal"})},this.heartBeatWait)},connection.prototype.stopHeartBeat=function(){clearInterval(this.heartBeatID)},connection.prototype.sendReceiptsMessage=function(e){var t=_strophe.default.$msg({from:this.context.jid||"",to:this.domain,id:e.id||""}).c("received",{xmlns:"urn:xmpp:receipts",id:e.id||""});this.sendCommand(t.tree())},connection.prototype.cacheReceiptsMessage=function(e){this.sendQueue.push(e)},connection.prototype.open=function(e){var t=this;if(__f__("log","open",this.isOpening()," at webIM\\sdk\\connection.js:712"),this.isOpening()||this.isOpened())__f__("log","can't open [1]"," at webIM\\sdk\\connection.js:715");else if(_validCheck(e,this))if(e.accessToken)e.access_token=e.accessToken,this.token=e.access_token,_login(e,t);else{var l=e.apiUrl,a=e.user,n=e.pwd||"",r=e.appKey,o=r.split("#"),i=o[0],u=o[1];this.orgName=i,this.appName=u,this.context.status=_code.STATUS_DOLOGIN_USERGRID;var s={grant_type:"password",username:a,password:n,timestamp:+new Date},c=_utils.stringify(s);_utils.ajax({url:l+"/"+i+"/"+u+"/token",data:c,success:v||_utils.emptyfn,error:b||_utils.emptyfn})}else __f__("log","can't open [2]"," at webIM\\sdk\\connection.js:719");function v(e,l,a){t.context.status=_code.STATUS_DOLOGIN_IM,t.context.restTokenData=e,"404"!=e.statusCode&&"400"!=e.statusCode?_login(e.data,t):b({})}function b(e,l,a){t.clear(),e.error&&e.error_description?t.onError({type:_code.WEBIM_CONNCTION_OPEN_USERGRID_ERROR,data:e,xhr:l}):t.onError({type:_code.WEBIM_CONNCTION_OPEN_ERROR,data:e,xhr:l})}},connection.prototype.attach=function(e){var t=this,l=_validCheck(e,this);if(l){e=e||{};var a=e.accessToken||"";if(""!=a){var n=e.sid||"";if(""!==n){var r=e.rid||"";if(""!==r){var o=new Strophe.Connection(this.url,{inactivity:this.inactivity,maxRetries:this.maxRetries,pollingTime:this.pollingTime,heartBeatWait:this.heartBeatWait});this.context.accessToken=a,this.context.stropheConn=o,this.context.status=_code.STATUS_DOLOGIN_IM;var i=function(e,l){_loginCallback(e,l,t)},u=this.context.jid,s=this.wait,c=this.hold,v=this.wind||5;o.attach(u,n,r,i,s,c,v)}else this.onError({type:_code.WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR})}else this.onError({type:_code.WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR})}else this.onError({type:_code.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR})}},connection.prototype.close=function(e){this.stopHeartBeat();var t=this.context.status;t!=_code.STATUS_INIT&&(this.isClosed()||this.isClosing()||(this.context.status=_code.STATUS_CLOSING,this.context.stropheConn.disconnect(e)))},connection.prototype.addHandler=function(e,t,l,a,n,r,o){this.context.stropheConn.addHandler(e,t,l,a,n,r,o)},connection.prototype.notifyVersion=function(e,t){var l=_strophe.default.$iq({from:this.context.jid||"",to:this.domain,type:"result"}).c("query",{xmlns:"jabber:iq:version"}).c("name").t("easemob").up().c("version").t(_version).up().c("os").t("webim");e=e||_utils.emptyfn;var a=t||this.onError,n=function(e){a({type:_code.WEBIM_CONNCTION_NOTIFYVERSION_ERROR,data:e})};this.context.stropheConn.sendIQ(l.tree(),e,n)},connection.prototype.handlePresence=function(e){if(!this.isClosed()){var t=e.getAttribute("from")||"",l=e.getAttribute("to")||"",a=e.getAttribute("type")||"",n=e.getAttribute("presence_type")||"",r=_parseNameFromJidFn(t),o=_parseNameFromJidFn(l),i=!1,u=!1,s=!1,c=!1,v={from:r,to:o,fromJid:t,toJid:l,type:a,chatroom:!!e.getElementsByTagName("roomtype").length},b=e.getElementsByTagName("show");if(b&&b.length>0){var h=b[0];v.show=Strophe.getText(h)}var d=e.getElementsByTagName("status");if(d&&d.length>0){var p=d[0];v.status=Strophe.getText(p),v.code=p.getAttribute("code")}var f=e.getElementsByTagName("priority");if(f&&f.length>0){var m=f[0];v.priority=Strophe.getText(m)}var g=e.getElementsByTagName("error");g&&g.length>0&&(g=g[0],v.error={code:g.getAttribute("code")});var _=e.getElementsByTagName("destroy");if(_&&_.length>0){_=_[0],v.destroy=!0;var y=_.getElementsByTagName("reason");y&&y.length>0&&(v.reason=Strophe.getText(y[0]))}var E=e.getElementsByTagName("item");if(E&&E.length>0){var O=E[0],N=O.getAttribute("role"),T=O.getAttribute("jid"),w=O.getAttribute("affiliation");if("none"==N&&T){var S=_parseNameFromJidFn(T),x=O.getElementsByTagName("actor")[0],I=x.getAttribute("nick");v.actor=I,v.kicked=S}"moderator"==N&&"201"==v.code&&"owner"===w&&(v.type="createGroupACK",i=!0)}var C=e.getElementsByTagName("x");if(C&&C.length>0){var A=C[0].getElementsByTagName("apply"),R=C[0].getElementsByTagName("accept"),M=C[0].getElementsByTagName("item"),D=C[0].getElementsByTagName("decline"),k=C[0].getElementsByTagName("add_admin"),j=C[0].getElementsByTagName("remove_admin"),L=C[0].getElementsByTagName("add_mute"),B=C[0].getElementsByTagName("remove_mute");if(A&&A.length>0){c=!0,v.toNick=A[0].getAttribute("toNick"),v.type="joinGroupNotifications";var $=A[0].getAttribute("to"),P=$.split("@")[0].split("_");P=P[P.length-1],v.gid=P}else if(R&&R.length>0)v.type="joinPublicGroupSuccess";else if(M&&M.length>0){var F=M[0].getAttribute("affiliation"),U=M[0].getAttribute("role");if("member"==F||"participant"==U){u=!0,v.mid=v.fromJid.split("/"),v.mid=v.mid[v.mid.length-1],v.type="memberJoinPublicGroupSuccess";var q=e.getElementsByTagName("roomtype");if(q&&q.length>0){var H=q[0].getAttribute("type");"chatroom"==H&&(v.type="memberJoinChatRoomSuccess")}}else if("none"==F||"none"==U){var W=e.getElementsByTagName("roomtype");if(W&&W.length>0){var G=W[0].getAttribute("type");"chatroom"==G&&(v.type="memberLeaveChatRoomSuccess")}}}else if(D&&D.length){s=!0;var J=D[0].getAttribute("fromNick"),V=_parseNameFromJidFn(D[0].getAttribute("from"));v.type="joinPublicGroupDeclined",v.owner=V,v.gid=J}else if(k&&k.length>0){var z=_parseNameFromJidFn(k[0].getAttribute("mucjid")),X=_parseNameFromJidFn(k[0].getAttribute("from"));v.owner=X,v.gid=z,v.type="addAdmin"}else if(j&&j.length>0){var K=_parseNameFromJidFn(j[0].getAttribute("mucjid")),Q=_parseNameFromJidFn(j[0].getAttribute("from"));v.owner=Q,v.gid=K,v.type="removeAdmin"}else if(L&&L.length>0){var Y=_parseNameFromJidFn(L[0].getAttribute("mucjid")),Z=_parseNameFromJidFn(L[0].getAttribute("from"));v.owner=Z,v.gid=Y,v.type="addMute"}else if(B&&B.length>0){var ee=_parseNameFromJidFn(B[0].getAttribute("mucjid")),te=_parseNameFromJidFn(B[0].getAttribute("from"));v.owner=te,v.gid=ee,v.type="removeMute"}}if(v.chatroom){v.presence_type=n,v.original_type=v.type;var le=t.slice(t.lastIndexOf("/")+1);le===this.context.userId&&(""!==v.type||v.code?"unavailable"!==n&&"unavailable"!==v.type||(v.status?110==v.code?v.type="leaveChatRoom":v.error&&406==v.error.code&&(v.type="reachChatRoomCapacity"):v.type="leaveChatRoom"):v.type="joinChatRoomSuccess")}else if(v.presence_type=n,v.original_type=a,/subscribe/.test(v.type));else if(""!=a||v.status||v.error||i||c||u||s){if("unavailable"===n||"unavailable"===a)if(v.destroy)v.type="deleteGroupChat";else if(307==v.code||321==v.code){var ae=e.getAttribute("nick");v.type=ae?"removedFromGroup":"leaveGroup"}}else;"subscribe"==v.type&&v.from==v.to||this.onPresence(v,e)}},connection.prototype.handleIq=function(e){return!0},connection.prototype.handleIqPrivacy=function(e){var t=e.getElementsByTagName("list");0!=t.length&&this.getBlacklist()},connection.prototype.handleIqRoster=function(e){var t=e.getAttribute("id"),l=e.getAttribute("from")||"",a=this.context.jid,n=_strophe.default.$iq({type:"result",id:t,from:a});this.sendCommand(n.tree());var r=e.getElementsByTagName("query");if(r&&r.length>0){var o=r[0],i=_parseFriend(o,this,l);this.onRoster(i)}return!0},connection.prototype.handleMessage=function(e){if(!this.isClosed()){var t=e.getAttribute("id")||"";this.cacheReceiptsMessage({id:t});var l=_parseResponseMessage(e);if(l.errorMsg)this.handlePresence(e);else{var a=e.getElementsByTagName("error"),n="",r="",o=!1;if(a.length>0){o=!0,n=a[0].getAttribute("code");var i=a[0].getElementsByTagName("text");r=i[0].textContent||i[0].text}var u=l.data;for(var s in u)if(Object.hasOwnProperty.call(u,s)){var c=u[s];if(c.from&&c.to){var v=(c.from+"").toLowerCase(),b=(c.to+"").toLowerCase(),h=c.ext||{},d="",p=e.getElementsByTagName("roomtype");d=p.length?p[0].getAttribute("type")||"chat":e.getAttribute("type")||"chat";var f=c.bodies;if(f&&0!=f.length){var m=c.bodies[0],g=m.type;try{switch(g){case"txt":var _=m.msg,y=_utils.parseTextMessage(_,WebIM.Emoji);if(y.isemoji){var E={id:t,type:d,from:v,to:b,delay:l.delayTimeStamp,data:y.body,ext:h};!E.delay&&delete E.delay,E.error=o,E.errorText=r,E.errorCode=n,this.onEmojiMessage(E)}else{var O={id:t,type:d,from:v,to:b,delay:l.delayTimeStamp,data:_,ext:h};!O.delay&&delete O.delay,O.error=o,O.errorText=r,O.errorCode=n,this.onTextMessage(O)}break;case"img":var N=0,T=0;m.size&&(N=m.size.width,T=m.size.height);var w={id:t,type:d,from:v,to:b,url:m.url,secret:m.secret,filename:m.filename,thumb:m.thumb,thumb_secret:m.thumb_secret,file_length:m.file_length||"",width:N,height:T,filetype:m.filetype||"",accessToken:this.context.accessToken||"",ext:h,delay:l.delayTimeStamp};!w.delay&&delete w.delay,w.error=o,w.errorText=r,w.errorCode=n,this.onPictureMessage(w);break;case"audio":w={id:t,type:d,from:v,to:b,url:m.url,secret:m.secret,filename:m.filename,length:m.length||"",file_length:m.file_length||"",filetype:m.filetype||"",accessToken:this.context.accessToken||"",ext:h,delay:l.delayTimeStamp},!w.delay&&delete w.delay,w.error=o,w.errorText=r,w.errorCode=n,this.onAudioMessage(w);break;case"file":w={id:t,type:d,from:v,to:b,url:m.url,secret:m.secret,filename:m.filename,file_length:m.file_length,accessToken:this.context.accessToken||"",ext:h,delay:l.delayTimeStamp},!w.delay&&delete w.delay,w.error=o,w.errorText=r,w.errorCode=n,this.onFileMessage(w);break;case"loc":w={id:t,type:d,from:v,to:b,addr:m.addr,lat:m.lat,lng:m.lng,ext:h,delay:l.delayTimeStamp},!w.delay&&delete w.delay,w.error=o,w.errorText=r,w.errorCode=n,this.onLocationMessage(w);break;case"video":w={id:t,type:d,from:v,to:b,url:m.url,secret:m.secret,filename:m.filename,file_length:m.file_length,accessToken:this.context.accessToken||"",ext:h,delay:l.delayTimeStamp},!w.delay&&delete w.delay,w.error=o,w.errorText=r,w.errorCode=n,this.onVideoMessage(w);break;case"cmd":w={id:t,from:v,to:b,action:m.action,ext:h,delay:l.delayTimeStamp},!w.delay&&delete w.delay,w.error=o,w.errorText=r,w.errorCode=n,this.onCmdMessage(w);break;default:break}}catch(S){this.onError({type:_code.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,data:S})}}}}}}},connection.prototype.handleReceivedMessage=function(e){try{this.onReceivedMessage(e)}catch(n){this.onError({type:_code.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,data:n})}var t,l,a=e.getElementsByTagName("received");if(a.length>0&&(t=a[0].childNodes&&a[0].childNodes.length>0?a[0].childNodes[0].nodeValue:a[0].innerHTML||a[0].innerText,l=a[0].getAttribute("mid")),_msgHash[t]){try{_msgHash[t].msg.success instanceof Function&&_msgHash[t].msg.success(t,l)}catch(n){this.onError({type:_code.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,data:n})}delete _msgHash[t]}},connection.prototype.handleInviteMessage=function(e){var t=null,l=e.getElementsByTagName("invite"),a=e.getElementsByTagName("reason")[0],n=a.textContent,r=e.getAttribute("id")||"";if(this.sendReceiptsMessage({id:r}),l&&l.length>0){var o=l[0].getAttribute("from");t=_parseNameFromJidFn(o)}var i=e.getElementsByTagName("x"),u=null;if(i&&i.length>0)for(var s=0;s<i.length;s++)if("jabber:x:conference"===i[s].namespaceURI){var c=i[s].getAttribute("jid");u=_parseNameFromJidFn(c)}this.onInviteMessage({type:"invite",from:t,roomid:u,reason:n})},connection.prototype.sendCommand=function(e,t){var l=this;if(this.isOpened()){var a=function(e){var a={};a.mid=t,a.reason=e,l.onError({type:"socket_error",data:a})};this.context.stropheConn.send(e,a)}else __f__("log","Err 5"," at webIM\\sdk\\connection.js:1458"),this.onError({type:_code.WEBIM_CONNCTION_DISCONNECTED})},connection.prototype.getUniqueId=function(e){var t=new Date,l=new Date(2010,1,1),a=t.getTime()-l.getTime(),n=parseInt(a).toString(16);return"string"===typeof e||"number"===typeof e?e+"_"+n:"WEBIM_"+n},connection.prototype.send=function(e){if(WebIM.config.isWindowSDK)WebIM.doQuery(JSON.stringify({type:"sendMessage",to:e.to,message_type:e.type,msg:encodeURI(e.msg),chatType:e.chatType}),function(e){},function(e,t){});else if("[object Object]"===Object.prototype.toString.call(e)){var t=this.context.appKey||"",l=t+"_"+e.to+"@"+this.domain;e.group&&(l=t+"_"+e.to+"@conference."+this.domain),e.resource&&(l=l+"/"+e.resource),e.toJid=l,e.id=e.id||this.getUniqueId(),_msgHash[e.id]=new _message(e);try{_msgHash[e.id].send(this)}catch(a){__f__("log","发送失败"," at webIM\\sdk\\connection.js:1506")}}else"string"===typeof e&&_msgHash[e]&&_msgHash[e].send(this)},connection.prototype.addRoster=function(e){var t=_getJid(e,this),l=e.name||"",a=e.groups||"",n=_strophe.default.$iq({type:"set"});if(n.c("query",{xmlns:"jabber:iq:roster"}),n.c("item",{jid:t,name:l}),a)for(var r=0;r<a.length;r++)n.c("group").t(a[r]).up();var o=e.success||_utils.emptyfn,i=e.error||_utils.emptyfn;this.context.stropheConn.sendIQ(n.tree(),o,i)},connection.prototype.removeRoster=function(e){var t=_getJid(e,this),l=_strophe.default.$iq({type:"set"}).c("query",{xmlns:"jabber:iq:roster"}).c("item",{jid:t,subscription:"remove"}),a=e.success||_utils.emptyfn,n=e.error||_utils.emptyfn;this.context.stropheConn.sendIQ(l,a,n)},connection.prototype.getRoster=function(e){var t=_strophe.default.$iq({type:"get"}).c("query",{xmlns:"jabber:iq:roster"});e=e||{};var l=e.success||this.onRoster,a=e.error||this.onError;this.isOpened()?this.context.stropheConn.sendIQ(t.tree(),function(e){var t=[],a=e.getElementsByTagName("query");if(a&&a.length>0){var n=a[0];t=_parseFriend(n)}l(t,e)},function(e){a({type:_code.WEBIM_CONNCTION_GETROSTER_ERROR,data:e})}):a({type:_code.WEBIM_CONNCTION_DISCONNECTED})},connection.prototype.subscribe=function(e){var t=_getJid(e,this),l=_strophe.default.$pres({to:t,type:"subscribe"});e.message&&l.c("status").t(e.message).up(),e.nick&&l.c("nick",{xmlns:"http://jabber.org/protocol/nick"}).t(e.nick),this.sendCommand(l.tree())},connection.prototype.subscribed=function(e){var t=_getJid(e,this),l=_strophe.default.$pres({to:t,type:"subscribed"});e.message&&l.c("status").t(e.message).up(),this.sendCommand(l.tree())},connection.prototype.unsubscribe=function(e){var t=_getJid(e,this),l=_strophe.default.$pres({to:t,type:"unsubscribe"});e.message&&l.c("status").t(e.message),this.sendCommand(l.tree())},connection.prototype.unsubscribed=function(e){var t=_getJid(e,this),l=_strophe.default.$pres({to:t,type:"unsubscribed"});e.message&&l.c("status").t(e.message).up(),this.sendCommand(l.tree())},connection.prototype.createRoom=function(e){var t,l=e.success||_utils.emptyfn,a=e.error||_utils.emptyfn;return t=_strophe.default.$iq({to:e.roomName,type:"set"}).c("query",{xmlns:Strophe.NS.MUC_OWNER}).c("x",{xmlns:"jabber:x:data",type:"submit"}),this.context.stropheConn.sendIQ(t.tree(),l,a)},connection.prototype.listRooms=function(e){var t=_strophe.default.$iq({to:e.server||"conference."+this.domain,from:this.context.jid,type:"get"}).c("query",{xmlns:Strophe.NS.DISCO_ITEMS}),l=e.success||_utils.emptyfn,a=e.error||this.onError,n=function(e){var t=[];t=_parseRoom(e);try{l(t)}catch(n){a({type:_code.WEBIM_CONNCTION_GETROOM_ERROR,data:n})}},r=e.error||_utils.emptyfn,o=function(e){r({type:_code.WEBIM_CONNCTION_GETROOM_ERROR,data:e})};this.context.stropheConn.sendIQ(t.tree(),n,o)},connection.prototype.queryRoomMember=function(e){var t=[],l=_strophe.default.$iq({to:this.context.appKey+"_"+e.roomId+"@conference."+this.domain,type:"get"}).c("query",{xmlns:Strophe.NS.MUC+"#admin"}).c("item",{affiliation:"member"}),a=e.success||_utils.emptyfn,n=function(e){var l=e.getElementsByTagName("item");if(l)for(var n=0;n<l.length;n++){var r=l[n],o={jid:r.getAttribute("jid"),affiliation:"member"};t.push(o)}a(t)},r=e.error||_utils.emptyfn,o=function(e){r({type:_code.WEBIM_CONNCTION_GETROOMMEMBER_ERROR,data:e})};this.context.stropheConn.sendIQ(l.tree(),n,o)},connection.prototype.queryRoomInfo=function(e){var t=this.domain,l=_strophe.default.$iq({to:this.context.appKey+"_"+e.roomId+"@conference."+t,type:"get"}).c("query",{xmlns:Strophe.NS.DISCO_INFO}),a=e.success||_utils.emptyfn,n=[],r=function(e){var l="",r=e.getElementsByTagName("feature");switch(r&&(l=r[1].getAttribute("var")+"|"+r[3].getAttribute("var")+"|"+r[4].getAttribute("var")),l){case"muc_public|muc_membersonly|muc_notallowinvites":l="PUBLIC_JOIN_APPROVAL";break;case"muc_public|muc_open|muc_notallowinvites":l="PUBLIC_JOIN_OPEN";break;case"muc_hidden|muc_membersonly|muc_allowinvites":l="PRIVATE_MEMBER_INVITE";break;case"muc_hidden|muc_membersonly|muc_notallowinvites":l="PRIVATE_OWNER_INVITE";break;default:break}var o=e.getElementsByTagName("field"),i={};if(o){for(var u=0;u<o.length;u++){var s=o[u],c=s.getAttribute("var"),v=c.split("_")[1];switch(c){case"muc#roominfo_occupants":case"muc#roominfo_maxusers":case"muc#roominfo_affiliations":case"muc#roominfo_description":i[v]=s.textContent||s.text||"";break;case"muc#roominfo_owner":var b={jid:(s.textContent||s.text)+"@"+t,affiliation:"owner"};n.push(b),i[v]=s.textContent||s.text;break;default:break}}i.name=e.getElementsByTagName("identity")[0].getAttribute("name")}a(l,n,i)},o=e.error||_utils.emptyfn,i=function(e){o({type:_code.WEBIM_CONNCTION_GETROOMINFO_ERROR,data:e})};this.context.stropheConn.sendIQ(l.tree(),r,i)},connection.prototype.queryRoomOccupants=function(e){var t=e.success||_utils.emptyfn,l=function(e){var l=[];l=_parseRoomOccupants(e),t(l)},a=e.error||_utils.emptyfn,n=function(e){a({type:_code.WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR,data:e})},r={xmlns:Strophe.NS.DISCO_ITEMS},o=_strophe.default.$iq({from:this.context.jid,to:this.context.appKey+"_"+e.roomId+"@conference."+this.domain,type:"get"}).c("query",r);this.context.stropheConn.sendIQ(o.tree(),l,n)},connection.prototype.setUserSig=function(e){var t=_strophe.default.$pres({xmlns:"jabber:client"});e=e||"",t.c("status").t(e),this.sendCommand(t.tree())},connection.prototype.setPresence=function(e,t){var l=_strophe.default.$pres({xmlns:"jabber:client"});e&&(t?(l.c("show").t(e),l.up().c("status").t(t)):l.c("show").t(e)),this.sendCommand(l.tree())},connection.prototype.getPresence=function(){var e=_strophe.default.$pres({xmlns:"jabber:client"});this.sendCommand(e.tree())},connection.prototype.ping=function(e){e=e||{};var t=_getJid(e,this),l=_strophe.default.$iq({from:this.context.jid||"",to:t,type:"get"}).c("ping",{xmlns:"urn:xmpp:ping"}),a=e.success||_utils.emptyfn,n=e.error||this.onError,r=function(e){n({type:_code.WEBIM_CONNCTION_PING_ERROR,data:e})};this.isOpened()?this.context.stropheConn.sendIQ(l.tree(),a,r):n({type:_code.WEBIM_CONNCTION_DISCONNECTED})},connection.prototype.isOpened=function(){return this.context.status==_code.STATUS_OPENED},connection.prototype.isOpening=function(){var e=this.context.status;return e==_code.STATUS_DOLOGIN_USERGRID||e==_code.STATUS_DOLOGIN_IM},connection.prototype.isClosing=function(){return this.context.status==_code.STATUS_CLOSING},connection.prototype.isClosed=function(){return this.context.status==_code.STATUS_CLOSED},connection.prototype.clear=function(){var e=this.context.appKey;this.errorType!=WebIM.statusCode.WEBIM_CONNCTION_DISCONNECTED&&(this.context={status:_code.STATUS_INIT,appKey:e}),this.intervalId&&clearInterval(this.intervalId),this.errorType==WebIM.statusCode.WEBIM_CONNCTION_CLIENT_LOGOUT||this.errorType},connection.prototype.getChatRooms=function(e){var t=this,l=e.accessToken||this.context.accessToken;if(l){var a=this.apiUrl,n=this.context.appName,r=this.context.orgName;if(!n||!r)return void t.onError({type:_code.WEBIM_CONNCTION_AUTH_ERROR});var o=function(t,l){"function"===typeof e.success&&e.success(t)},i=function(e,l,a){e.error&&e.error_description&&t.onError({type:_code.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR,msg:e.error_description,data:e,xhr:l})},u={pagenum:parseInt(e.pagenum)||1,pagesize:parseInt(e.pagesize)||20},s={url:a+"/"+r+"/"+n+"/chatrooms",dataType:"json",type:"GET",header:{Authorization:"Bearer "+l},data:u,success:o||_utils.emptyfn,fail:i||_utils.emptyfn};wx.request(s)}else t.onError({type:_code.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR})},connection.prototype.joinChatRoom=function(e){var t=this.context.appKey+"_"+e.roomId+"@conference."+this.domain,l=t+"/"+this.context.userId,a=e.success||_utils.emptyfn,n=e.error||_utils.emptyfn,r=function(e){n({type:_code.WEBIM_CONNCTION_JOINCHATROOM_ERROR,data:e})},o=_strophe.default.$pres({from:this.context.jid,to:l});o.c("x",{xmlns:Strophe.NS.MUC+"#user"}).c("item",{affiliation:"member",role:"participant"}).up().up().c("roomtype",{xmlns:"easemob:x:roomtype",type:"chatroom"}),this.context.stropheConn.sendIQ(o.tree(),a,r)},connection.prototype.quitChatRoom=function(e){var t=this.context.appKey+"_"+e.roomId+"@conference."+this.domain,l=t+"/"+this.context.userId,a=e.success||_utils.emptyfn,n=e.error||_utils.emptyfn,r=function(e){n({type:_code.WEBIM_CONNCTION_QUITCHATROOM_ERROR,data:e})},o=_strophe.default.$pres({from:this.context.jid,to:l,type:"unavailable"});o.c("x",{xmlns:Strophe.NS.MUC+"#user"}).c("item",{affiliation:"none",role:"none"}).up().up().c("roomtype",{xmlns:"easemob:x:roomtype",type:"chatroom"}),this.context.stropheConn.sendIQ(o.tree(),a,r)},connection.prototype._onUpdateMyGroupList=function(e){this.onUpdateMyGroupList(e)},connection.prototype._onUpdateMyRoster=function(e){this.onUpdateMyRoster(e)},connection.prototype.reconnect=function(){var e=this;setTimeout(function(){_login(e.context.restTokenData&&e.context.restTokenData.data,e)},1e3*(0==this.autoReconnectNumTotal?0:this.autoReconnectInterval)),this.autoReconnectNumTotal++},connection.prototype.closed=function(){IM.api.init()},connection.prototype.listGroupMember=function(e){if(isNaN(e.pageNum)||e.pageNum<=0)throw new Error('The parameter "pageNum" should be a positive number');if(isNaN(e.pageSize)||e.pageSize<=0)throw new Error('The parameter "pageSize" should be a positive number');if(null===e.groupId&&"undefined"===typeof e.groupId)throw new Error('The parameter "groupId" should be added');var t=[],l=e.groupId;t.pagenum=e.pageNum,t.pagesize=e.pageSize;var a={url:this.apiUrl+"/"+this.orgName+"/"+this.appName+"/chatgroups/"+l+"/users",dataType:"json",type:"GET",data:t,headers:{Authorization:"Bearer "+this.context.accessToken,"Content-Type":"application/json"}};a.success=e.success||_utils.emptyfn,a.error=e.error||_utils.emptyfn,WebIM.utils.ajax(a)},connection.prototype.createGroupNew=function(e){e.data.invite_need_confirm=!1;var t={url:this.apiUrl+"/"+this.orgName+"/"+this.appName+"/chatgroups",dataType:"json",type:"POST",data:JSON.stringify(e.data),headers:{Authorization:"Bearer "+this.context.accessToken,"Content-Type":"application/json"}};t.success=function(t){e.success(t),this.onCreateGroup(t)}.bind(this),t.error=e.error||_utils.emptyfn,WebIM.utils.ajax(t)},connection.prototype.getGroupInfo=function(e){var t={url:this.apiUrl+"/"+this.orgName+"/"+this.appName+"/chatgroups/"+e.groupId,type:"GET",dataType:"json",headers:{Authorization:"Bearer "+this.context.accessToken,"Content-Type":"application/json"}};t.success=e.success||_utils.emptyfn,t.error=e.error||_utils.emptyfn,WebIM.utils.ajax(t)},connection.prototype.dissolveGroup=function(e){var t=e.groupId,l={url:this.apiUrl+"/"+this.orgName+"/"+this.appName+"/chatgroups/"+t+"?version=v3",type:"DELETE",dataType:"json",headers:{Authorization:"Bearer "+this.context.accessToken,"Content-Type":"application/json"}};l.success=e.success||_utils.emptyfn,l.error=e.error||_utils.emptyfn,WebIM.utils.ajax(l)},connection.prototype.getBlacklist=function(e){e=e||{};var t=_strophe.default.$iq({type:"get"}),l=e.success||_utils.emptyfn,a=e.error||_utils.emptyfn,n=this;t.c("query",{xmlns:"jabber:iq:privacy"}).c("list",{name:"special"}),this.context.stropheConn.sendIQ(t.tree(),function(e){n.onBlacklistUpdate(_parsePrivacy(e)),l()},function(){n.onBlacklistUpdate([]),a()})},connection.prototype.addToBlackList=function(e){for(var t=_strophe.default.$iq({type:"set"}),l=e.list||{},a=e.success||_utils.emptyfn,n=e.error||_utils.emptyfn,r=t.c("query",{xmlns:"jabber:iq:privacy"}).c("list",{name:"special"}),o=Object.keys(l),i=o.length,u=2,s=0;s<i;s++){var c=l[o[s]],v=c.type||"jid",b=c.jid;r=r.c("item",{action:"deny",order:u++,type:v,value:b}).c("message"),s!==i-1&&(r=r.up().up())}this.context.stropheConn.sendIQ(r.tree(),a,n)},connection.prototype.removeFromBlackList=function(e){for(var t=_strophe.default.$iq({type:"set"}),l=e.list||{},a=e.success||_utils.emptyfn,n=e.error||_utils.emptyfn,r=t.c("query",{xmlns:"jabber:iq:privacy"}).c("list",{name:"special"}),o=Object.keys(l),i=o.length,u=0;u<i;u++){var s=l[o[u]],c=s.type||"jid",v=s.jid,b=s.order;r=r.c("item",{action:"deny",order:b,type:c,value:v}).c("message"),u!==i-1&&(r=r.up().up())}this.context.stropheConn.sendIQ(r.tree(),a,n)},connection.prototype._getGroupJid=function(e){var t=this.context.appKey||"";return t+"_"+e+"@conference."+this.domain},connection.prototype.addToGroupBlackList=function(e){var t=e.success||_utils.emptyfn,l=e.error||_utils.emptyfn,a=_getJid(e,this),n="admin",r=this._getGroupJid(e.roomId),o=_strophe.default.$iq({type:"set",to:r});o.c("query",{xmlns:"http://jabber.org/protocol/muc#"+n}).c("item",{affiliation:"outcast",jid:a}),this.context.stropheConn.sendIQ(o.tree(),t,l)},connection.prototype.getGroupBlacklist=function(e){var t=e.success||_utils.emptyfn,l=e.error||_utils.emptyfn,a="admin",n=this._getGroupJid(e.roomId),r=_strophe.default.$iq({type:"get",to:n});function o(e){var t={},l=e.getElementsByTagName("item");if(l)for(var a=0;a<l.length;a++){var n=l[a],r=n.getAttribute("jid"),o=n.getAttribute("affiliation"),i=n.getAttribute("nick");if(r){var u=_parseNameFromJidFn(r);t[u]={jid:r,affiliation:o,nick:i,name:u}}}return t}r.c("query",{xmlns:"http://jabber.org/protocol/muc#"+a}).c("item",{affiliation:"outcast"}),this.context.stropheConn.sendIQ(r.tree(),function(e){t(o(e))},function(){l()})},connection.prototype.removeGroupMemberFromBlacklist=function(e){var t=e.success||_utils.emptyfn,l=e.error||_utils.emptyfn,a=_getJid(e,this),n="admin",r=this._getGroupJid(e.roomId),o=_strophe.default.$iq({type:"set",to:r});o.c("query",{xmlns:"http://jabber.org/protocol/muc#"+n}).c("item",{affiliation:"member",jid:a}),this.context.stropheConn.sendIQ(o.tree(),function(e){t()},function(){l()})},connection.prototype.changeGroupSubject=function(e){var t=e.success||_utils.emptyfn,l=e.error||_utils.emptyfn,a="owner",n=this._getGroupJid(e.roomId),r=_strophe.default.$iq({type:"set",to:n});r.c("query",{xmlns:"http://jabber.org/protocol/muc#"+a}).c("x",{type:"submit",xmlns:"jabber:x:data"}).c("field",{var:"FORM_TYPE"}).c("value").t("http://jabber.org/protocol/muc#roomconfig").up().up().c("field",{var:"muc#roomconfig_roomname"}).c("value").t(e.subject).up().up().c("field",{var:"muc#roomconfig_roomdesc"}).c("value").t(e.description),this.context.stropheConn.sendIQ(r.tree(),function(e){t()},function(){l()})},connection.prototype.destroyGroup=function(e){var t=e.success||_utils.emptyfn,l=e.error||_utils.emptyfn,a="owner",n=this._getGroupJid(e.roomId),r=_strophe.default.$iq({type:"set",to:n});r.c("query",{xmlns:"http://jabber.org/protocol/muc#"+a}).c("destroy"),this.context.stropheConn.sendIQ(r.tree(),function(e){t()},function(){l()})},connection.prototype.leaveGroupBySelf=function(e){var t=this,l=e.success||_utils.emptyfn,a=e.error||_utils.emptyfn,n=_getJid(e,this),r="admin",o=this._getGroupJid(e.roomId),i=_strophe.default.$iq({type:"set",to:o});i.c("query",{xmlns:"http://jabber.org/protocol/muc#"+r}).c("item",{affiliation:"none",jid:n}),this.context.stropheConn.sendIQ(i.tree(),function(e){l(e);var a=_strophe.default.$pres({type:"unavailable",to:o+"/"+t.context.userId});t.sendCommand(a.tree())},function(e){a(e)})},connection.prototype.addGroupMembers=function(e){for(var t=e.success||_utils.emptyfn,l=e.error||_utils.emptyfn,a=e.list||[],n="admin",r=this._getGroupJid(e.roomId),o=_strophe.default.$iq({type:"set",to:r}),i=o.c("query",{xmlns:"http://jabber.org/protocol/muc#"+n}),u=a.length,s=0;s<u;s++){var c=a[s],v=_getJidByName(c,this);i=i.c("item",{affiliation:"member",jid:v}).up();var b=_strophe.default.$msg({to:r}).c("x",{xmlns:"http://jabber.org/protocol/muc#user"}).c("invite",{to:v}).c("reason").t(e.reason||"");this.sendCommand(b.tree())}this.context.stropheConn.sendIQ(o.tree(),function(e){t(e)},function(e){l(e)})},connection.prototype.acceptInviteFromGroup=function(e){e.success=function(){},this.addGroupMembers(e)},connection.prototype.rejectInviteFromGroup=function(e){},WebIM.connection=connection,WebIM.utils=_utils,WebIM.statusCode=_code,WebIM.message=_msg.message,WebIM.doQuery=function(e,t,l){"undefined"!==typeof window.cefQuery&&window.cefQuery({request:e,persistent:!1,onSuccess:t,onFailure:l})},module.exports=WebIM}).call(this,__webpack_require__("0de9")["default"])},deba:function(e,t,l){"use strict";(function(a){var n,r,o,i,u,s,c,v,b,h,d,p,f,m,g=!1,_=l("5645"),y=_.DOMParser,E=(new y).parseFromString("<?xml version='1.0'?>\n","text/xml"),O=O||{};O.DOMParser=y;(function(_){if(function(e,t){r={id:"strophe-base64",exports:{},loaded:!1},n=function(){return t()}.call(r.exports,l,r.exports,r),r.loaded=!0,void 0!==n||(n=r.exports)}(0,function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t={encode:function(t){var l,a,n,r,o,i,u,s="",c=0;do{l=t.charCodeAt(c++),a=t.charCodeAt(c++),n=t.charCodeAt(c++),r=l>>2,o=(3&l)<<4|a>>4,i=(15&a)<<2|n>>6,u=63&n,isNaN(a)?(o=(3&l)<<4,i=u=64):isNaN(n)&&(u=64),s=s+e.charAt(r)+e.charAt(o)+e.charAt(i)+e.charAt(u)}while(c<t.length);return s},decode:function(t){var l,a,n,r,o,i,u,s="",c=0;t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{r=e.indexOf(t.charAt(c++)),o=e.indexOf(t.charAt(c++)),i=e.indexOf(t.charAt(c++)),u=e.indexOf(t.charAt(c++)),l=r<<2|o>>4,a=(15&o)<<4|i>>2,n=(3&i)<<6|u,s+=String.fromCharCode(l),64!=i&&(s+=String.fromCharCode(a)),64!=u&&(s+=String.fromCharCode(n))}while(c<t.length);return s}};return t}),function(e,t){i={id:"strophe-sha1",exports:{},loaded:!1},o=function(){return t()}.call(i.exports,l,i.exports,i),i.loaded=!0,void 0!==o||(o=i.exports)}(0,function(){function e(e,a){e[a>>5]|=128<<24-a%32,e[15+(a+64>>9<<4)]=a;var o,i,u,s,c,v,b,h,d=new Array(80),p=1732584193,f=-271733879,m=-1732584194,g=271733878,_=-1009589776;for(o=0;o<e.length;o+=16){for(s=p,c=f,v=m,b=g,h=_,i=0;i<80;i++)d[i]=i<16?e[o+i]:r(d[i-3]^d[i-8]^d[i-14]^d[i-16],1),u=n(n(r(p,5),t(i,f,m,g)),n(n(_,d[i]),l(i))),_=g,g=m,m=r(f,30),f=p,p=u;p=n(p,s),f=n(f,c),m=n(m,v),g=n(g,b),_=n(_,h)}return[p,f,m,g,_]}function t(e,t,l,a){return e<20?t&l|~t&a:e<40?t^l^a:e<60?t&l|t&a|l&a:t^l^a}function l(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function a(t,l){var a=o(t);a.length>16&&(a=e(a,8*t.length));for(var n=new Array(16),r=new Array(16),i=0;i<16;i++)n[i]=909522486^a[i],r[i]=1549556828^a[i];var u=e(n.concat(o(l)),512+8*l.length);return e(r.concat(u),672)}function n(e,t){var l=(65535&e)+(65535&t),a=(e>>16)+(t>>16)+(l>>16);return a<<16|65535&l}function r(e,t){return e<<t|e>>>32-t}function o(e){for(var t=[],l=255,a=0;a<8*e.length;a+=8)t[a>>5]|=(e.charCodeAt(a/8)&l)<<24-a%32;return t}function i(e){for(var t="",l=255,a=0;a<32*e.length;a+=8)t+=String.fromCharCode(e[a>>5]>>>24-a%32&l);return t}function u(e){for(var t,l,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="",r=0;r<4*e.length;r+=3)for(t=(e[r>>2]>>8*(3-r%4)&255)<<16|(e[r+1>>2]>>8*(3-(r+1)%4)&255)<<8|e[r+2>>2]>>8*(3-(r+2)%4)&255,l=0;l<4;l++)8*r+6*l>32*e.length?n+="=":n+=a.charAt(t>>6*(3-l)&63);return n}return{b64_hmac_sha1:function(e,t){return u(a(e,t))},b64_sha1:function(t){return u(e(o(t),8*t.length))},binb2str:i,core_hmac_sha1:a,str_hmac_sha1:function(e,t){return i(a(e,t))},str_sha1:function(t){return i(e(o(t),8*t.length))}}}),function(e,t){s={id:"strophe-md5",exports:{},loaded:!1},u=function(){return t()}.call(s.exports,l,s.exports,s),s.loaded=!0,void 0!==u||(u=s.exports)}(0,function(e){var t=function(e,t){var l=(65535&e)+(65535&t),a=(e>>16)+(t>>16)+(l>>16);return a<<16|65535&l},l=function(e,t){return e<<t|e>>>32-t},a=function(e){for(var t=[],l=0;l<8*e.length;l+=8)t[l>>5]|=(255&e.charCodeAt(l/8))<<l%32;return t},n=function(e){for(var t="",l=0;l<32*e.length;l+=8)t+=String.fromCharCode(e[l>>5]>>>l%32&255);return t},r=function(e){for(var t="0123456789abcdef",l="",a=0;a<4*e.length;a++)l+=t.charAt(e[a>>2]>>a%4*8+4&15)+t.charAt(e[a>>2]>>a%4*8&15);return l},o=function(e,a,n,r,o,i){return t(l(t(t(a,e),t(r,i)),o),n)},i=function(e,t,l,a,n,r,i){return o(t&l|~t&a,e,t,n,r,i)},u=function(e,t,l,a,n,r,i){return o(t&a|l&~a,e,t,n,r,i)},s=function(e,t,l,a,n,r,i){return o(t^l^a,e,t,n,r,i)},c=function(e,t,l,a,n,r,i){return o(l^(t|~a),e,t,n,r,i)},v=function(e,l){e[l>>5]|=128<<l%32,e[14+(l+64>>>9<<4)]=l;for(var a,n,r,o,v=1732584193,b=-271733879,h=-1732584194,d=271733878,p=0;p<e.length;p+=16)a=v,n=b,r=h,o=d,v=i(v,b,h,d,e[p+0],7,-680876936),d=i(d,v,b,h,e[p+1],12,-389564586),h=i(h,d,v,b,e[p+2],17,606105819),b=i(b,h,d,v,e[p+3],22,-1044525330),v=i(v,b,h,d,e[p+4],7,-176418897),d=i(d,v,b,h,e[p+5],12,1200080426),h=i(h,d,v,b,e[p+6],17,-1473231341),b=i(b,h,d,v,e[p+7],22,-45705983),v=i(v,b,h,d,e[p+8],7,1770035416),d=i(d,v,b,h,e[p+9],12,-1958414417),h=i(h,d,v,b,e[p+10],17,-42063),b=i(b,h,d,v,e[p+11],22,-1990404162),v=i(v,b,h,d,e[p+12],7,1804603682),d=i(d,v,b,h,e[p+13],12,-40341101),h=i(h,d,v,b,e[p+14],17,-1502002290),b=i(b,h,d,v,e[p+15],22,1236535329),v=u(v,b,h,d,e[p+1],5,-165796510),d=u(d,v,b,h,e[p+6],9,-1069501632),h=u(h,d,v,b,e[p+11],14,643717713),b=u(b,h,d,v,e[p+0],20,-373897302),v=u(v,b,h,d,e[p+5],5,-701558691),d=u(d,v,b,h,e[p+10],9,38016083),h=u(h,d,v,b,e[p+15],14,-660478335),b=u(b,h,d,v,e[p+4],20,-405537848),v=u(v,b,h,d,e[p+9],5,568446438),d=u(d,v,b,h,e[p+14],9,-1019803690),h=u(h,d,v,b,e[p+3],14,-187363961),b=u(b,h,d,v,e[p+8],20,1163531501),v=u(v,b,h,d,e[p+13],5,-1444681467),d=u(d,v,b,h,e[p+2],9,-51403784),h=u(h,d,v,b,e[p+7],14,1735328473),b=u(b,h,d,v,e[p+12],20,-1926607734),v=s(v,b,h,d,e[p+5],4,-378558),d=s(d,v,b,h,e[p+8],11,-2022574463),h=s(h,d,v,b,e[p+11],16,1839030562),b=s(b,h,d,v,e[p+14],23,-35309556),v=s(v,b,h,d,e[p+1],4,-1530992060),d=s(d,v,b,h,e[p+4],11,1272893353),h=s(h,d,v,b,e[p+7],16,-155497632),b=s(b,h,d,v,e[p+10],23,-1094730640),v=s(v,b,h,d,e[p+13],4,681279174),d=s(d,v,b,h,e[p+0],11,-358537222),h=s(h,d,v,b,e[p+3],16,-722521979),b=s(b,h,d,v,e[p+6],23,76029189),v=s(v,b,h,d,e[p+9],4,-640364487),d=s(d,v,b,h,e[p+12],11,-421815835),h=s(h,d,v,b,e[p+15],16,530742520),b=s(b,h,d,v,e[p+2],23,-995338651),v=c(v,b,h,d,e[p+0],6,-198630844),d=c(d,v,b,h,e[p+7],10,1126891415),h=c(h,d,v,b,e[p+14],15,-1416354905),b=c(b,h,d,v,e[p+5],21,-57434055),v=c(v,b,h,d,e[p+12],6,1700485571),d=c(d,v,b,h,e[p+3],10,-1894986606),h=c(h,d,v,b,e[p+10],15,-1051523),b=c(b,h,d,v,e[p+1],21,-2054922799),v=c(v,b,h,d,e[p+8],6,1873313359),d=c(d,v,b,h,e[p+15],10,-30611744),h=c(h,d,v,b,e[p+6],15,-1560198380),b=c(b,h,d,v,e[p+13],21,1309151649),v=c(v,b,h,d,e[p+4],6,-145523070),d=c(d,v,b,h,e[p+11],10,-1120210379),h=c(h,d,v,b,e[p+2],15,718787259),b=c(b,h,d,v,e[p+9],21,-343485551),v=t(v,a),b=t(b,n),h=t(h,r),d=t(d,o);return[v,b,h,d]},b={hexdigest:function(e){return r(v(a(e),8*e.length))},hash:function(e){return n(v(a(e),8*e.length))}};return b}),function(e,t){v={id:"strophe-utils",exports:{},loaded:!1},c=function(){return t()}.call(v.exports,l,v.exports,v),v.loaded=!0,void 0!==c||(c=v.exports)}(0,function(){var e={utf16to8:function(e){var t,l,a="",n=e.length;for(t=0;t<n;t++)l=e.charCodeAt(t),l>=0&&l<=127?a+=e.charAt(t):l>2047?(a+=String.fromCharCode(224|l>>12&15),a+=String.fromCharCode(128|l>>6&63),a+=String.fromCharCode(128|l>>0&63)):(a+=String.fromCharCode(192|l>>6&31),a+=String.fromCharCode(128|l>>0&63));return a},addCookies:function(e){var t,l,a,n,r,o,i;for(t in e||{})r="",o="",i="",l=e[t],a="object"==typeof l,n=escape(unescape(a?l.value:l)),a&&(r=l.expires?";expires="+l.expires:"",o=l.domain?";domain="+l.domain:"",i=l.path?";path="+l.path:""),E.cookie=t+"="+n+r+o+i}};return e}),function(e,l){f=[],b=function(){return l()}.apply(t,f)}(0,function(){Function.prototype.bind||(Function.prototype.bind=function(e){var t=this,l=Array.prototype.slice,a=Array.prototype.concat,n=l.call(arguments,1);return function(){return t.apply(e||this,a.call(n,l.call(arguments,0)))}}),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length,l=Number(arguments[1])||0;for(l=l<0?Math.ceil(l):Math.floor(l),l<0&&(l+=t);l<t;l++)if(l in this&&this[l]===e)return l;return-1})}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var l,a;if(null===this)throw new TypeError(" this is null or not defined");var n=Object(this),r=n.length>>>0;if("function"!==typeof e)throw new TypeError(e+" is not a function");arguments.length>1&&(l=t),a=0;while(a<r){var o;a in n&&(o=n[a],e.call(l,o,a,n)),a++}}),function(e,l){f=[o,n,u,c,b],h=function(){return l.apply(this,arguments)}.apply(t,f)}(0,function(e,t,l,a,n){function r(e,t){return new n.Builder(e,t)}function o(e){return new n.Builder("message",e)}function i(e){return new n.Builder("iq",e)}function u(e){return new n.Builder("presence",e)}return n={VERSION:"1.2.9",NS:{HTTPBIND:"http://jabber.org/protocol/httpbind",BOSH:"urn:xmpp:xbosh",CLIENT:"jabber:client",AUTH:"jabber:iq:auth",ROSTER:"jabber:iq:roster",PROFILE:"jabber:iq:profile",DISCO_INFO:"http://jabber.org/protocol/disco#info",DISCO_ITEMS:"http://jabber.org/protocol/disco#items",MUC:"http://jabber.org/protocol/muc",SASL:"urn:ietf:params:xml:ns:xmpp-sasl",STREAM:"http://etherx.jabber.org/streams",FRAMING:"urn:ietf:params:xml:ns:xmpp-framing",BIND:"urn:ietf:params:xml:ns:xmpp-bind",SESSION:"urn:ietf:params:xml:ns:xmpp-session",VERSION:"jabber:iq:version",STANZAS:"urn:ietf:params:xml:ns:xmpp-stanzas",XHTML_IM:"http://jabber.org/protocol/xhtml-im",XHTML:"http://www.w3.org/1999/xhtml"},XHTML:{tags:["a","blockquote","br","cite","em","img","li","ol","p","span","strong","ul","body"],attributes:{a:["href"],blockquote:["style"],br:[],cite:["style"],em:[],img:["src","alt","style","height","width"],li:["style"],ol:["style"],p:["style"],span:["style"],strong:[],ul:["style"],body:[]},css:["background-color","color","font-family","font-size","font-style","font-weight","margin-left","margin-right","text-align","text-decoration"],validTag:function(e){for(var t=0;t<n.XHTML.tags.length;t++)if(e==n.XHTML.tags[t])return!0;return!1},validAttribute:function(e,t){if("undefined"!==typeof n.XHTML.attributes[e]&&n.XHTML.attributes[e].length>0)for(var l=0;l<n.XHTML.attributes[e].length;l++)if(t==n.XHTML.attributes[e][l])return!0;return!1},validCSS:function(e){for(var t=0;t<n.XHTML.css.length;t++)if(e==n.XHTML.css[t])return!0;return!1}},Status:{ERROR:0,CONNECTING:1,CONNFAIL:2,AUTHENTICATING:3,AUTHFAIL:4,CONNECTED:5,DISCONNECTED:6,DISCONNECTING:7,ATTACHED:8,REDIRECT:9,CONNTIMEOUT:10},LogLevel:{DEBUG:0,INFO:1,WARN:2,ERROR:3,FATAL:4},ElementType:{NORMAL:1,TEXT:3,CDATA:4,FRAGMENT:11},TIMEOUT:1.1,SECONDARY_TIMEOUT:.1,addNamespace:function(e,t){n.NS[e]=t},forEachChild:function(e,t,l){var a,r;for(a=0;a<e.childNodes.length;a++)r=e.childNodes[a],r.nodeType!=n.ElementType.NORMAL||t&&!this.isTagEqual(r,t)||l(r)},isTagEqual:function(e,t){return e.tagName==t},_xmlGenerator:null,_makeGenerator:function(){var e;return void 0===E.implementation.createDocument||E.implementation.createDocument&&E.documentMode&&E.documentMode<10?(e=this._getIEXmlDom(),e.appendChild(e.createElement("strophe"))):e=E.implementation.createDocument("jabber:client","strophe",null),e},xmlGenerator:function(){return n._xmlGenerator||(n._xmlGenerator=n._makeGenerator()),n._xmlGenerator},_getIEXmlDom:function(){for(var e=null,t=["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.5.0","Msxml2.DOMDocument.4.0","MSXML2.DOMDocument.3.0","MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XMLDOM"],l=0;l<t.length;l++){if(null!==e)break;try{e=new ActiveXObject(t[l])}catch(a){e=null}}return e},xmlElement:function(e){if(!e)return null;var t,l,a,r=n.xmlGenerator().createElement(e);for(t=1;t<arguments.length;t++){var o=arguments[t];if(o)if("string"==typeof o||"number"==typeof o)r.appendChild(n.xmlTextNode(o));else if("object"==typeof o&&"function"==typeof o.sort)for(l=0;l<o.length;l++){var i=o[l];"object"==typeof i&&"function"==typeof i.sort&&void 0!==i[1]&&null!==i[1]&&r.setAttribute(i[0],i[1])}else if("object"==typeof o)for(a in o)o.hasOwnProperty(a)&&void 0!==o[a]&&null!==o[a]&&r.setAttribute(a,o[a])}return r},xmlescape:function(e){return e=e.replace(/\&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=e.replace(/'/g,"&apos;"),e=e.replace(/"/g,"&quot;"),e},xmlunescape:function(e){return e=e.replace(/\&amp;/g,"&"),e=e.replace(/&lt;/g,"<"),e=e.replace(/&gt;/g,">"),e=e.replace(/&apos;/g,"'"),e=e.replace(/&quot;/g,'"'),e},xmlTextNode:function(e){return n.xmlGenerator().createTextNode(e)},xmlHtmlNode:function(e){var t;if(O.DOMParser){var l=new y;t=l.parseFromString(e,"text/xml")}else t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e);return t},getText:function(e){if(!e)return null;var t="";0===e.childNodes.length&&e.nodeType==n.ElementType.TEXT&&(t+=e.nodeValue);for(var l=0;l<e.childNodes.length;l++)e.childNodes[l].nodeType==n.ElementType.TEXT&&(t+=e.childNodes[l].nodeValue);return n.xmlescape(t)},copyElement:function(e){var t,l;if(e.nodeType==n.ElementType.NORMAL){for(l=n.xmlElement(e.tagName),t=0;t<e.attributes.length;t++)l.setAttribute(e.attributes[t].nodeName,e.attributes[t].value);for(t=0;t<e.childNodes.length;t++)l.appendChild(n.copyElement(e.childNodes[t]))}else e.nodeType==n.ElementType.TEXT&&(l=n.xmlGenerator().createTextNode(e.nodeValue));return l},createHtml:function(e){var t,l,a,r,o,i,u,s,c,v,b;if(e.nodeType==n.ElementType.NORMAL)if(r=e.nodeName.toLowerCase(),n.XHTML.validTag(r))try{for(l=n.xmlElement(r),t=0;t<n.XHTML.attributes[r].length;t++)if(o=n.XHTML.attributes[r][t],i=e.getAttribute(o),"undefined"!=typeof i&&null!==i&&""!==i&&!1!==i&&0!==i)if("style"==o&&"object"==typeof i&&"undefined"!=typeof i.cssText&&(i=i.cssText),"style"==o){for(u=[],s=i.split(";"),a=0;a<s.length;a++)c=s[a].split(":"),v=c[0].replace(/^\s*/,"").replace(/\s*$/,"").toLowerCase(),n.XHTML.validCSS(v)&&(b=c[1].replace(/^\s*/,"").replace(/\s*$/,""),u.push(v+": "+b));u.length>0&&(i=u.join("; "),l.setAttribute(o,i))}else l.setAttribute(o,i);for(t=0;t<e.childNodes.length;t++)l.appendChild(n.createHtml(e.childNodes[t]))}catch(h){l=n.xmlTextNode("")}else for(l=n.xmlGenerator().createDocumentFragment(),t=0;t<e.childNodes.length;t++)l.appendChild(n.createHtml(e.childNodes[t]));else if(e.nodeType==n.ElementType.FRAGMENT)for(l=n.xmlGenerator().createDocumentFragment(),t=0;t<e.childNodes.length;t++)l.appendChild(n.createHtml(e.childNodes[t]));else e.nodeType==n.ElementType.TEXT&&(l=n.xmlTextNode(e.nodeValue));return l},escapeNode:function(e){return"string"!==typeof e?e:e.replace(/^\s+|\s+$/g,"").replace(/\\/g,"\\5c").replace(/ /g,"\\20").replace(/\"/g,"\\22").replace(/\&/g,"\\26").replace(/\'/g,"\\27").replace(/\//g,"\\2f").replace(/:/g,"\\3a").replace(/</g,"\\3c").replace(/>/g,"\\3e").replace(/@/g,"\\40")},unescapeNode:function(e){return"string"!==typeof e?e:e.replace(/\\20/g," ").replace(/\\22/g,'"').replace(/\\26/g,"&").replace(/\\27/g,"'").replace(/\\2f/g,"/").replace(/\\3a/g,":").replace(/\\3c/g,"<").replace(/\\3e/g,">").replace(/\\40/g,"@").replace(/\\5c/g,"\\")},getNodeFromJid:function(e){return e.indexOf("@")<0?null:e.split("@")[0]},getDomainFromJid:function(e){var t=n.getBareJidFromJid(e);if(t.indexOf("@")<0)return t;var l=t.split("@");return l.splice(0,1),l.join("@")},getResourceFromJid:function(e){var t=e.split("/");return t.length<2?null:(t.splice(0,1),t.join("/"))},getBareJidFromJid:function(e){return e?e.split("/")[0]:null},_handleError:function(e){"undefined"!==typeof e.stack&&n.fatal(e.stack),e.sourceURL?n.fatal("error: "+this.handler+" "+e.sourceURL+":"+e.line+" - "+e.name+": "+e.message):e.fileName?n.fatal("error: "+this.handler+" "+e.fileName+":"+e.lineNumber+" - "+e.name+": "+e.message):n.fatal("error: "+e.message)},log:function(e,t){},debug:function(e){this.log(this.LogLevel.DEBUG,e)},info:function(e){this.log(this.LogLevel.INFO,e)},warn:function(e){this.log(this.LogLevel.WARN,e)},error:function(e){this.log(this.LogLevel.ERROR,e)},fatal:function(e){this.log(this.LogLevel.FATAL,e)},serialize:function(e){var t;if(!e)return null;"function"===typeof e.tree&&(e=e.tree());var l,a,r=e.nodeName;for(e.getAttribute("_realname")&&(r=e.getAttribute("_realname")),t="<"+r,l=0;l<e.attributes.length;l++)"_realname"!=e.attributes[l].nodeName&&(t+=" "+e.attributes[l].nodeName+"='"+n.xmlescape(e.attributes[l].value)+"'");if(e.childNodes.length>0){for(t+=">",l=0;l<e.childNodes.length;l++)switch(a=e.childNodes[l],a.nodeType){case n.ElementType.NORMAL:t+=n.serialize(a);break;case n.ElementType.TEXT:t+=n.xmlescape(a.nodeValue);break;case n.ElementType.CDATA:t+="<![CDATA["+a.nodeValue+"]]>"}t+="</"+r+">"}else t+="/>";return t},_requestId:0,_connectionPlugins:{},addConnectionPlugin:function(e,t){n._connectionPlugins[e]=t}},n.Builder=function(e,t){"presence"!=e&&"message"!=e&&"iq"!=e||(t&&!t.xmlns?t.xmlns=n.NS.CLIENT:t||(t={xmlns:n.NS.CLIENT})),this.nodeTree=n.xmlElement(e,t),this.node=this.nodeTree},n.Builder.prototype={tree:function(){return this.nodeTree},toString:function(){return n.serialize(this.nodeTree)},up:function(){return this.node=this.node.parentNode,this},root:function(){return this.node=this.nodeTree,this},attrs:function(e){for(var t in e)e.hasOwnProperty(t)&&(void 0===e[t]?this.node.removeAttribute(t):this.node.setAttribute(t,e[t]));return this},c:function(e,t,l){var a=n.xmlElement(e,t,l);return this.node.appendChild(a),"string"!==typeof l&&"number"!==typeof l&&(this.node=a),this},cnode:function(e){var t,l=n.xmlGenerator();try{t=void 0!==l.importNode}catch(r){t=!1}var a=t?l.importNode(e,!0):n.copyElement(e);return this.node.appendChild(a),this.node=a,this},t:function(e){var t=n.xmlTextNode(e);return this.node.appendChild(t),this},h:function(e){var t=E.createElement("body");t.innerHTML=e;var l=n.createHtml(t);while(l.childNodes.length>0)this.node.appendChild(l.childNodes[0]);return this}},n.Handler=function(e,t,l,a,r,o,i){this.handler=e,this.ns=t,this.name=l,this.type=a,this.id=r,this.options=i||{matchBareFromJid:!1,ignoreNamespaceFragment:!1},this.options.matchBare&&(n.warn('The "matchBare" option is deprecated, use "matchBareFromJid" instead.'),this.options.matchBareFromJid=this.options.matchBare,delete this.options.matchBare),this.options.matchBareFromJid?this.from=o?n.getBareJidFromJid(o):null:this.from=o,this.user=!0},n.Handler.prototype={getNamespace:function(e){var t=e.getAttribute("xmlns");return t&&this.options.ignoreNamespaceFragment&&(t=t.split("#")[0]),t},namespaceMatch:function(e){var t=!1;if(!this.ns)return!0;var l=this;return n.forEachChild(e,null,function(e){l.getNamespace(e)===l.ns&&(t=!0)}),t=t||this.getNamespace(e)===this.ns,t},isMatch:function(e){var t=e.getAttribute("from");this.options.matchBareFromJid&&(t=n.getBareJidFromJid(t));var l=e.getAttribute("type");return!(!this.namespaceMatch(e)||this.name&&!n.isTagEqual(e,this.name)||this.type&&(Array.isArray(this.type)?-1==this.type.indexOf(l):l!=this.type)||this.id&&e.getAttribute("id")!=this.id||this.from&&t!=this.from)},run:function(e){var t=null;try{t=this.handler(e)}catch(l){throw n._handleError(l),l}return t},toString:function(){return"{Handler: "+this.handler+"("+this.name+","+this.id+","+this.ns+")}"}},n.TimedHandler=function(e,t){this.period=e,this.handler=t,this.lastCalled=(new Date).getTime(),this.user=!0},n.TimedHandler.prototype={run:function(){return this.lastCalled=(new Date).getTime(),this.handler()},reset:function(){this.lastCalled=(new Date).getTime()},toString:function(){return"{TimedHandler: "+this.handler+"("+this.period+")}"}},n.Connection=function(e,t){this.service=e,this.options=t||{};var l=this.options.protocol||"";for(var r in 0===e.indexOf("ws:")||0===e.indexOf("wss:")||0===l.indexOf("ws")?this._proto=new n.Websocket(this):this._proto=new n.Bosh(this),this.jid="",this.domain=null,this.features=null,this._sasl_data={},this.do_session=!1,this.do_bind=!1,this.timedHandlers=[],this.handlers=[],this.removeTimeds=[],this.removeHandlers=[],this.addTimeds=[],this.addHandlers=[],this.protocolErrorHandlers={HTTP:{},websocket:{}},this._idleTimeout=null,this._disconnectTimeout=null,this.authenticated=!1,this.connected=!1,this.disconnecting=!1,this.do_authentication=!0,this.paused=!1,this.restored=!1,this._data=[],this._uniqueId=0,this._sasl_success_handler=null,this._sasl_failure_handler=null,this._sasl_challenge_handler=null,this.maxRetries=5,this._idleTimeout=setTimeout(function(){this._onIdle()}.bind(this),100),a.addCookies(this.options.cookies),this.registerSASLMechanisms(this.options.mechanisms),n._connectionPlugins)if(n._connectionPlugins.hasOwnProperty(r)){var o=n._connectionPlugins[r],i=function(){};i.prototype=o,this[r]=new i,this[r].init(this)}},n.Connection.prototype={reset:function(){this._proto._reset(),this.do_session=!1,this.do_bind=!1,this.timedHandlers=[],this.handlers=[],this.removeTimeds=[],this.removeHandlers=[],this.addTimeds=[],this.addHandlers=[],this.authenticated=!1,this.connected=!1,this.disconnecting=!1,this.restored=!1,this._data=[],this._requests=[],this._uniqueId=0},pause:function(){this.paused=!0},resume:function(){this.paused=!1},getUniqueId:function(e){var t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,l="x"==e?t:3&t|8;return l.toString(16)});return"string"==typeof e||"number"==typeof e?t+":"+e:t+""},addProtocolErrorHandler:function(e,t,l){this.protocolErrorHandlers[e][t]=l},connect:function(e,t,l,a,r,o,i){this.jid=e,this.authzid=n.getBareJidFromJid(this.jid),this.authcid=i||n.getNodeFromJid(this.jid),this.pass=t,this.servtype="xmpp",this.connect_callback=l,this.disconnecting=!1,this.connected=!1,this.authenticated=!1,this.restored=!1,this.domain=n.getDomainFromJid(this.jid),this._changeConnectStatus(n.Status.CONNECTING,null),this._proto._connect(a,r,o)},attach:function(e,t,l,a,r,o,i){if(!(this._proto instanceof n.Bosh))throw{name:"StropheSessionError",message:'The "attach" method can only be used with a BOSH connection.'};this._proto._attach(e,t,l,a,r,o,i)},restore:function(e,t,l,a,n){if(!this._sessionCachingSupported())throw{name:"StropheSessionError",message:'The "restore" method can only be used with a BOSH connection.'};this._proto._restore(e,t,l,a,n)},_sessionCachingSupported:function(){if(this._proto instanceof n.Bosh){if(!JSON)return!1;try{O.sessionStorage.setItem("_strophe_","_strophe_"),O.sessionStorage.removeItem("_strophe_")}catch(e){return!1}return!0}return!1},xmlInput:function(e){},xmlOutput:function(e){},rawInput:function(e){},rawOutput:function(e){},nextValidRid:function(e){},send:function(e,t){if(null!==e){if("function"===typeof e.sort)for(var l=0;l<e.length;l++)this._queueData(e[l]);else"function"===typeof e.tree?this._queueData(e.tree()):this._queueData(e);this._proto._send(t)}},flush:function(e){clearTimeout(this._idleTimeout),this._onIdle(e)},sendIQ:function(e,t,l,a){var r=null,o=this;"function"===typeof e.tree&&(e=e.tree());var i=e.getAttribute("id");i||(i=this.getUniqueId("sendIQ"),e.setAttribute("id",i));var u=e.getAttribute("to"),s=this.jid,c=this.addHandler(function(e){r&&o.deleteTimedHandler(r);var a=!1,i=e.getAttribute("from");if(i!==u&&(u||i!==n.getBareJidFromJid(s)&&i!==n.getDomainFromJid(s)&&i!==s)||(a=!0),!a)throw{name:"StropheError",message:"Got answer to IQ from wrong jid:"+i+"\nExpected jid: "+u};var c=e.getAttribute("type");if("result"==c)t&&t(e);else{if("error"!=c)throw{name:"StropheError",message:"Got bad IQ type of "+c};l&&l(e)}},null,"iq",["error","result"],i);return a&&(r=this.addTimedHandler(a,function(){return o.deleteHandler(c),l&&l(null),!1})),this.send(e),i},_queueData:function(e){if(null===e||!e.tagName||!e.childNodes)throw{name:"StropheError",message:"Cannot queue non-DOMElement."};this._data.push(e)},_sendRestart:function(){this._data.push("restart"),this._proto._sendRestart(),this._idleTimeout=setTimeout(function(){this._onIdle()}.bind(this),100)},addTimedHandler:function(e,t){var l=new n.TimedHandler(e,t);return this.addTimeds.push(l),l},deleteTimedHandler:function(e){this.removeTimeds.push(e)},addHandler:function(e,t,l,a,r,o,i){var u=new n.Handler(e,t,l,a,r,o,i);return this.addHandlers.push(u),u},deleteHandler:function(e){this.removeHandlers.push(e);var t=this.addHandlers.indexOf(e);t>=0&&this.addHandlers.splice(t,1)},registerSASLMechanisms:function(e){this.mechanisms={},e=e||[n.SASLAnonymous,n.SASLExternal,n.SASLMD5,n.SASLOAuthBearer,n.SASLPlain,n.SASLSHA1],e.forEach(this.registerSASLMechanism.bind(this))},registerSASLMechanism:function(e){this.mechanisms[e.prototype.name]=e},disconnect:function(e){if(this._changeConnectStatus(n.Status.DISCONNECTING,e),n.info("Disconnect was called because: "+e),this.connected){var t=!1;this.disconnecting=!0,this.authenticated&&(t=u({xmlns:n.NS.CLIENT,type:"unavailable"})),this._disconnectTimeout=this._addSysTimedHandler(3e3,this._onDisconnectTimeout.bind(this)),this._proto._disconnect(t)}else n.info("Disconnect was called before Strophe connected to the server"),this._proto._abortAllRequests()},_changeConnectStatus:function(e,t){for(var l in n._connectionPlugins)if(n._connectionPlugins.hasOwnProperty(l)){var a=this[l];if(a.statusChanged)try{a.statusChanged(e,t)}catch(r){n.error(l+" plugin caused an exception changing status: "+r)}}if(this.connect_callback)try{this.connect_callback(e,t)}catch(o){n._handleError(o),n.error("User connection callback caused an exception: "+o)}},_doDisconnect:function(e){"number"==typeof this._idleTimeout&&clearTimeout(this._idleTimeout),null!==this._disconnectTimeout&&(this.deleteTimedHandler(this._disconnectTimeout),this._disconnectTimeout=null),n.info("_doDisconnect was called"),this._proto._doDisconnect(),this.authenticated=!1,this.disconnecting=!1,this.restored=!1,this.handlers=[],this.timedHandlers=[],this.removeTimeds=[],this.removeHandlers=[],this.addTimeds=[],this.addHandlers=[],this._changeConnectStatus(n.Status.DISCONNECTED,e),this.connected=!1},_dataRecv:function(e,t){n.info("_dataRecv called");var l=this._proto._reqToData(e);if(null!==l){var a,r;this.xmlInput!==n.Connection.prototype.xmlInput&&(l.nodeName===this._proto.strip&&l.childNodes.length?this.xmlInput(l.childNodes[0]):this.xmlInput(l)),this.rawInput!==n.Connection.prototype.rawInput&&(t?this.rawInput(t):this.rawInput(n.serialize(l)));while(this.removeHandlers.length>0)r=this.removeHandlers.pop(),a=this.handlers.indexOf(r),a>=0&&this.handlers.splice(a,1);while(this.addHandlers.length>0)this.handlers.push(this.addHandlers.pop());if(this.disconnecting&&this._proto._emptyQueue())this._doDisconnect();else{var o,i,u=l.getAttribute("type");if(null!==u&&"terminate"==u){if(this.disconnecting)return;return o=l.getAttribute("condition"),i=l.getElementsByTagName("conflict"),null!==o?("remote-stream-error"==o&&i.length>0&&(o="conflict"),this._changeConnectStatus(n.Status.CONNFAIL,o)):this._changeConnectStatus(n.Status.CONNFAIL,"unknown"),void this._doDisconnect(o)}var s=this;n.forEachChild(l,null,function(e){var t,l;for(l=s.handlers,s.handlers=[],t=0;t<l.length;t++){var a=l[t];try{!a.isMatch(e)||!s.authenticated&&a.user?s.handlers.push(a):a.run(e)&&s.handlers.push(a)}catch(r){n.warn("Removing Strophe handlers due to uncaught exception: "+r.message)}}})}}},mechanisms:{},_connect_cb:function(e,t,l){var a;n.info("_connect_cb was called"),this.connected=!0;try{a=this._proto._reqToData(e)}catch(v){if("badformat"!=v)throw v;this._changeConnectStatus(n.Status.CONNFAIL,"bad-format"),this._doDisconnect("bad-format")}if(a){this.xmlInput!==n.Connection.prototype.xmlInput&&(a.nodeName===this._proto.strip&&a.childNodes.length?this.xmlInput(a.childNodes[0]):this.xmlInput(a)),this.rawInput!==n.Connection.prototype.rawInput&&(l?this.rawInput(l):this.rawInput(n.serialize(a)));var r,o=this._proto._connect_cb(a);if(o!==n.Status.CONNFAIL)if(r=a.getElementsByTagNameNS?a.getElementsByTagNameNS(n.NS.STREAM,"features").length>0:a.getElementsByTagName("stream:features").length>0||a.getElementsByTagName("features").length>0,r){var i,u,s=[],c=a.getElementsByTagName("mechanism");if(c.length>0)for(i=0;i<c.length;i++)u=n.getText(c[i]),this.mechanisms[u]&&s.push(this.mechanisms[u]);0!==s.length||0!==a.getElementsByTagName("auth").length?!1!==this.do_authentication&&this.authenticate(s):this._proto._no_auth_received(t)}else try{this._proto._no_auth_received(t)}catch(v){}}},sortMechanismsByPriority:function(e){var t,l,a,n;for(t=0;t<e.length-1;++t){for(a=t,l=t+1;l<e.length;++l)e[l].prototype.priority>e[a].prototype.priority&&(a=l);a!=t&&(n=e[t],e[t]=e[a],e[a]=n)}return e},_attemptSASLAuth:function(e){e=this.sortMechanismsByPriority(e||[]);var l=0,a=!1;for(l=0;l<e.length;++l)if(e[l].prototype.test(this)){this._sasl_success_handler=this._addSysHandler(this._sasl_success_cb.bind(this),null,"success",null,null),this._sasl_failure_handler=this._addSysHandler(this._sasl_failure_cb.bind(this),null,"failure",null,null),this._sasl_challenge_handler=this._addSysHandler(this._sasl_challenge_cb.bind(this),null,"challenge",null,null),this._sasl_mechanism=new e[l],this._sasl_mechanism.onStart(this);var o=r("auth",{xmlns:n.NS.SASL,mechanism:this._sasl_mechanism.name});if(this._sasl_mechanism.isClientFirst){var i=this._sasl_mechanism.onChallenge(this,null);o.t(t.encode(i))}this.send(o.tree()),a=!0;break}return a},_attemptLegacyAuth:function(){null===n.getNodeFromJid(this.jid)?(this._changeConnectStatus(n.Status.CONNFAIL,"x-strophe-bad-non-anon-jid"),this.disconnect("x-strophe-bad-non-anon-jid")):(this._changeConnectStatus(n.Status.AUTHENTICATING,null),this._addSysHandler(this._auth1_cb.bind(this),null,null,null,"_auth_1"),this.send(i({type:"get",to:this.domain,id:"_auth_1"}).c("query",{xmlns:n.NS.AUTH}).c("username",{}).t(n.getNodeFromJid(this.jid)).tree()))},authenticate:function(e){this._attemptSASLAuth(e)||this._attemptLegacyAuth()},_sasl_challenge_cb:function(e){var l=t.decode(n.getText(e)),a=this._sasl_mechanism.onChallenge(this,l),o=r("response",{xmlns:n.NS.SASL});return""!==a&&o.t(t.encode(a)),this.send(o.tree()),!0},_auth1_cb:function(e){var t=i({type:"set",id:"_auth_2"}).c("query",{xmlns:n.NS.AUTH}).c("username",{}).t(n.getNodeFromJid(this.jid)).up().c("password").t(this.pass);return n.getResourceFromJid(this.jid)||(this.jid=n.getBareJidFromJid(this.jid)+"/strophe"),t.up().c("resource",{}).t(n.getResourceFromJid(this.jid)),this._addSysHandler(this._auth2_cb.bind(this),null,null,null,"_auth_2"),this.send(t.tree()),!1},_sasl_success_cb:function(e){if(this._sasl_data["server-signature"]){var l,a=t.decode(n.getText(e)),r=/([a-z]+)=([^,]+)(,|$)/,o=a.match(r);if("v"==o[1]&&(l=o[2]),l!=this._sasl_data["server-signature"])return this.deleteHandler(this._sasl_failure_handler),this._sasl_failure_handler=null,this._sasl_challenge_handler&&(this.deleteHandler(this._sasl_challenge_handler),this._sasl_challenge_handler=null),this._sasl_data={},this._sasl_failure_cb(null)}n.info("SASL authentication succeeded."),this._sasl_mechanism&&this._sasl_mechanism.onSuccess(),this.deleteHandler(this._sasl_failure_handler),this._sasl_failure_handler=null,this._sasl_challenge_handler&&(this.deleteHandler(this._sasl_challenge_handler),this._sasl_challenge_handler=null);var i=[],u=function(e,t){while(e.length)this.deleteHandler(e.pop());return this._sasl_auth1_cb.bind(this)(t),!1};return i.push(this._addSysHandler(function(e){u.bind(this)(i,e)}.bind(this),null,"stream:features",null,null)),i.push(this._addSysHandler(function(e){u.bind(this)(i,e)}.bind(this),n.NS.STREAM,"features",null,null)),this._sendRestart(),!1},_sasl_auth1_cb:function(e){var t,l;for(this.features=e,t=0;t<e.childNodes.length;t++)l=e.childNodes[t],"bind"==l.nodeName&&(this.do_bind=!0),"session"==l.nodeName&&(this.do_session=!0);if(!this.do_bind)return this._changeConnectStatus(n.Status.AUTHFAIL,null),!1;this._addSysHandler(this._sasl_bind_cb.bind(this),null,null,null,"_bind_auth_2");var a=n.getResourceFromJid(this.jid);return a?this.send(i({type:"set",id:"_bind_auth_2"}).c("bind",{xmlns:n.NS.BIND}).c("resource",{}).t(a).tree()):this.send(i({type:"set",id:"_bind_auth_2"}).c("bind",{xmlns:n.NS.BIND}).tree()),!1},_sasl_bind_cb:function(e){if("error"==e.getAttribute("type")){n.info("SASL binding failed.");var t,l=e.getElementsByTagName("conflict");return l.length>0&&(t="conflict"),this._changeConnectStatus(n.Status.AUTHFAIL,t),!1}var a,r=e.getElementsByTagName("bind");if(!(r.length>0))return n.info("SASL binding failed."),this._changeConnectStatus(n.Status.AUTHFAIL,null),!1;a=r[0].getElementsByTagName("jid"),a.length>0&&(this.jid=n.getText(a[0]),this.do_session?(this._addSysHandler(this._sasl_session_cb.bind(this),null,null,null,"_session_auth_2"),this.send(i({type:"set",id:"_session_auth_2"}).c("session",{xmlns:n.NS.SESSION}).tree())):(this.authenticated=!0,this._changeConnectStatus(n.Status.CONNECTED,null)))},_sasl_session_cb:function(e){if("result"==e.getAttribute("type"))this.authenticated=!0,this._changeConnectStatus(n.Status.CONNECTED,null);else if("error"==e.getAttribute("type"))return n.info("Session creation failed."),this._changeConnectStatus(n.Status.AUTHFAIL,null),!1;return!1},_sasl_failure_cb:function(e){return this._sasl_success_handler&&(this.deleteHandler(this._sasl_success_handler),this._sasl_success_handler=null),this._sasl_challenge_handler&&(this.deleteHandler(this._sasl_challenge_handler),this._sasl_challenge_handler=null),this._sasl_mechanism&&this._sasl_mechanism.onFailure(),this._changeConnectStatus(n.Status.AUTHFAIL,null),!1},_auth2_cb:function(e){return"result"==e.getAttribute("type")?(this.authenticated=!0,this._changeConnectStatus(n.Status.CONNECTED,null)):"error"==e.getAttribute("type")&&(this._changeConnectStatus(n.Status.AUTHFAIL,null),this.disconnect("authentication failed")),!1},_addSysTimedHandler:function(e,t){var l=new n.TimedHandler(e,t);return l.user=!1,this.addTimeds.push(l),l},_addSysHandler:function(e,t,l,a,r){var o=new n.Handler(e,t,l,a,r);return o.user=!1,this.addHandlers.push(o),o},_onDisconnectTimeout:function(){return n.info("_onDisconnectTimeout was called"),this._changeConnectStatus(n.Status.CONNTIMEOUT,null),this._proto._onDisconnectTimeout(),this._doDisconnect(),!1},_onIdle:function(e){var t,l,a,n;while(this.addTimeds.length>0)this.timedHandlers.push(this.addTimeds.pop());while(this.removeTimeds.length>0)l=this.removeTimeds.pop(),t=this.timedHandlers.indexOf(l),t>=0&&this.timedHandlers.splice(t,1);var r=(new Date).getTime();for(n=[],t=0;t<this.timedHandlers.length;t++)l=this.timedHandlers[t],!this.authenticated&&l.user||(a=l.lastCalled+l.period,a-r<=0?l.run()&&n.push(l):n.push(l));this.timedHandlers=n,clearTimeout(this._idleTimeout),this._proto._onIdle(e),this.connected&&(this._idleTimeout=setTimeout(function(){this._onIdle(e)}.bind(this),100))}},n.SASLMechanism=function(e,t,l){this.name=e,this.isClientFirst=t,this.priority=l},n.SASLMechanism.prototype={test:function(e){return!0},onStart:function(e){this._connection=e},onChallenge:function(e,t){throw new Error("You should implement challenge handling!")},onFailure:function(){this._connection=null},onSuccess:function(){this._connection=null}},n.SASLAnonymous=function(){},n.SASLAnonymous.prototype=new n.SASLMechanism("ANONYMOUS",!1,10),n.SASLAnonymous.prototype.test=function(e){return null===e.authcid},n.SASLPlain=function(){},n.SASLPlain.prototype=new n.SASLMechanism("PLAIN",!0,20),n.SASLPlain.prototype.test=function(e){return null!==e.authcid},n.SASLPlain.prototype.onChallenge=function(e){var t=e.authzid;return t+="\0",t+=e.authcid,t+="\0",t+=e.pass,a.utf16to8(t)},n.SASLSHA1=function(){},n.SASLSHA1.prototype=new n.SASLMechanism("SCRAM-SHA-1",!0,40),n.SASLSHA1.prototype.test=function(e){return null!==e.authcid},n.SASLSHA1.prototype.onChallenge=function(n,r,o){var i=o||l.hexdigest(1234567890*Math.random()),u="n="+a.utf16to8(n.authcid);return u+=",r=",u+=i,n._sasl_data.cnonce=i,n._sasl_data["client-first-message-bare"]=u,u="n,,"+u,this.onChallenge=function(l,n){var r,o,i,u,s,c,v,b,h,d,p,f,m="c=biws,",g=l._sasl_data["client-first-message-bare"]+","+n+",",_=l._sasl_data.cnonce,y=/([a-z]+)=([^,]+)(,|$)/;while(n.match(y)){var E=n.match(y);switch(n=n.replace(E[0],""),E[1]){case"r":r=E[2];break;case"s":o=E[2];break;case"i":i=E[2];break}}if(r.substr(0,_.length)!==_)return l._sasl_data={},l._sasl_failure_cb();for(m+="r="+r,g+=m,o=t.decode(o),o+="\0\0\0",h=a.utf16to8(l.pass),u=c=e.core_hmac_sha1(h,o),v=1;v<i;v++){for(s=e.core_hmac_sha1(h,e.binb2str(c)),b=0;b<5;b++)u[b]^=s[b];c=s}for(u=e.binb2str(u),d=e.core_hmac_sha1(u,"Client Key"),p=e.str_hmac_sha1(u,"Server Key"),f=e.core_hmac_sha1(e.str_sha1(e.binb2str(d)),g),l._sasl_data["server-signature"]=e.b64_hmac_sha1(p,g),b=0;b<5;b++)d[b]^=f[b];return m+=",p="+t.encode(e.binb2str(d)),m}.bind(this),u},n.SASLMD5=function(){},n.SASLMD5.prototype=new n.SASLMechanism("DIGEST-MD5",!1,30),n.SASLMD5.prototype.test=function(e){return null!==e.authcid},n.SASLMD5.prototype._quote=function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'},n.SASLMD5.prototype.onChallenge=function(e,t,n){var r,o=/([a-z]+)=("[^"]+"|[^,"]+)(?:,|$)/,i=n||l.hexdigest(""+1234567890*Math.random()),u="",s=null,c="";while(t.match(o))switch(r=t.match(o),t=t.replace(r[0],""),r[2]=r[2].replace(/^"(.+)"$/,"$1"),r[1]){case"realm":u=r[2];break;case"nonce":c=r[2];break;case"qop":r[2];break;case"host":s=r[2];break}var v=e.servtype+"/"+e.domain;null!==s&&(v=v+"/"+s);var b=a.utf16to8(e.authcid+":"+u+":"+this._connection.pass),h=l.hash(b)+":"+c+":"+i,d="AUTHENTICATE:"+v,p="";return p+="charset=utf-8,",p+="username="+this._quote(a.utf16to8(e.authcid))+",",p+="realm="+this._quote(u)+",",p+="nonce="+this._quote(c)+",",p+="nc=00000001,",p+="cnonce="+this._quote(i)+",",p+="digest-uri="+this._quote(v)+",",p+="response="+l.hexdigest(l.hexdigest(h)+":"+c+":00000001:"+i+":auth:"+l.hexdigest(d))+",",p+="qop=auth",this.onChallenge=function(){return""},p},n.SASLOAuthBearer=function(){},n.SASLOAuthBearer.prototype=new n.SASLMechanism("OAUTHBEARER",!0,50),n.SASLOAuthBearer.prototype.test=function(e){return null!==e.authcid},n.SASLOAuthBearer.prototype.onChallenge=function(e){var t="n,a=";return t+=e.authzid,t+=",",t+="",t+="auth=Bearer ",t+=e.pass,t+="",t+="",a.utf16to8(t)},n.SASLExternal=function(){},n.SASLExternal.prototype=new n.SASLMechanism("EXTERNAL",!0,60),n.SASLExternal.prototype.onChallenge=function(e){return e.authcid===e.authzid?"":e.authzid},{Strophe:n,$build:r,$msg:o,$iq:i,$pres:u,SHA1:e,Base64:t,MD5:l}}),function(e,l){f=[h],d=function(e){return l(e.Strophe,e.$build)}.apply(t,f)}(0,function(e,t){return e.Request=function(t,l,a,n){this.id=++e._requestId,this.xmlData=t,this.data=e.serialize(t),this.origFunc=l,this.func=l,this.rid=a,this.date=NaN,this.sends=n||0,this.abort=!1,this.dead=null,this.age=function(){if(!this.date)return 0;var e=new Date;return(e-this.date)/1e3},this.timeDead=function(){if(!this.dead)return 0;var e=new Date;return(e-this.dead)/1e3},this.xhr=this._newXHR()},e.Request.prototype={getResponse:function(){var t=null;if(this.xhr.responseXML&&this.xhr.responseXML.documentElement){if(t=this.xhr.responseXML.documentElement,"parsererror"==t.tagName)throw e.error("invalid response received"),e.error("responseText: "+this.xhr.responseText),e.error("responseXML: "+e.serialize(this.xhr.responseXML)),"parsererror"}else if(this.xhr.responseText)throw e.error("invalid response received"),e.error("responseText: "+this.xhr.responseText),"badformat";return t},_newXHR:function(){var e=null;return O.XMLHttpRequest?(e=new XMLHttpRequest,e.overrideMimeType&&e.overrideMimeType("text/xml; charset=utf-8")):O.ActiveXObject&&(e=new ActiveXObject("Microsoft.XMLHTTP")),e.onreadystatechange=this.func.bind(null,this),e}},e.Bosh=function(e){this._conn=e,this.rid=Math.floor(4294967295*Math.random()),this.sid=null,this.hold=1,this.wait=60,this.window=5,this.errors=0,this._requests=[]},e.Bosh.prototype={strip:null,_buildBody:function(){var l=t("body",{rid:this.rid++,xmlns:e.NS.HTTPBIND});return null!==this.sid&&l.attrs({sid:this.sid}),this._conn.options.keepalive&&this._conn._sessionCachingSupported()&&this._cacheSession(),l},_reset:function(){this.rid=Math.floor(4294967295*Math.random()),this.sid=null,this.errors=0,this._conn._sessionCachingSupported()&&O.sessionStorage.removeItem("strophe-bosh-session"),this._conn.nextValidRid(this.rid)},_connect:function(t,l,a){this.wait=t||this.wait,this.hold=l||this.hold,this.errors=0;var n=this._buildBody().attrs({to:this._conn.domain,"xml:lang":"en",wait:this.wait,hold:this.hold,content:"text/xml; charset=utf-8",ver:"1.6","xmpp:version":"1.0","xmlns:xmpp":e.NS.BOSH});a&&n.attrs({route:a});var r=this._conn._connect_cb;this._requests.push(new e.Request(n.tree(),this._onRequestStateChange.bind(this,r.bind(this._conn)),n.tree().getAttribute("rid"))),this._throttledRequestHandler()},_attach:function(t,l,a,n,r,o,i){this._conn.jid=t,this.sid=l,this.rid=a,this._conn.connect_callback=n,this._conn.domain=e.getDomainFromJid(this._conn.jid),this._conn.authenticated=!0,this._conn.connected=!0,this.wait=r||this.wait,this.hold=o||this.hold,this.window=i||this.window,this._conn._changeConnectStatus(e.Status.ATTACHED,null)},_restore:function(t,l,a,n,r){var o=JSON.parse(O.sessionStorage.getItem("strophe-bosh-session"));if(!("undefined"!==typeof o&&null!==o&&o.rid&&o.sid&&o.jid)||"undefined"!==typeof t&&null!==t&&e.getBareJidFromJid(o.jid)!=e.getBareJidFromJid(t))throw{name:"StropheSessionError",message:"_restore: no restoreable session."};this._conn.restored=!0,this._attach(o.jid,o.sid,o.rid,l,a,n,r)},_cacheSession:function(){this._conn.authenticated?this._conn.jid&&this.rid&&this.sid&&O.sessionStorage.setItem("strophe-bosh-session",JSON.stringify({jid:this._conn.jid,rid:this.rid,sid:this.sid})):O.sessionStorage.removeItem("strophe-bosh-session")},_connect_cb:function(t){var l,a,n=t.getAttribute("type");if(null!==n&&"terminate"==n)return l=t.getAttribute("condition"),e.error("BOSH-Connection failed: "+l),a=t.getElementsByTagName("conflict"),null!==l?("remote-stream-error"==l&&a.length>0&&(l="conflict"),this._conn._changeConnectStatus(e.Status.CONNFAIL,l)):this._conn._changeConnectStatus(e.Status.CONNFAIL,"unknown"),this._conn._doDisconnect(l),e.Status.CONNFAIL;this.sid||(this.sid=t.getAttribute("sid"));var r=t.getAttribute("requests");r&&(this.window=parseInt(r,10));var o=t.getAttribute("hold");o&&(this.hold=parseInt(o,10));var i=t.getAttribute("wait");i&&(this.wait=parseInt(i,10))},_disconnect:function(e){this._sendTerminate(e)},_doDisconnect:function(){this.sid=null,this.rid=Math.floor(4294967295*Math.random()),this._conn._sessionCachingSupported()&&O.sessionStorage.removeItem("strophe-bosh-session"),this._conn.nextValidRid(this.rid)},_emptyQueue:function(){return 0===this._requests.length},_callProtocolErrorHandlers:function(e){var t,l=this._getRequestStatus(e);t=this._conn.protocolErrorHandlers.HTTP[l],t&&t.call(this,l)},_hitError:function(t){this.errors++,e.warn("request errored, status: "+t+", number of errors: "+this.errors),this.errors>4&&this._conn._onDisconnectTimeout()},_no_auth_received:function(t){t=t?t.bind(this._conn):this._conn._connect_cb.bind(this._conn);var l=this._buildBody();this._requests.push(new e.Request(l.tree(),this._onRequestStateChange.bind(this,t.bind(this._conn)),l.tree().getAttribute("rid"))),this._throttledRequestHandler()},_onDisconnectTimeout:function(){this._abortAllRequests()},_abortAllRequests:function(){var e;while(this._requests.length>0)e=this._requests.pop(),e.abort=!0,e.xhr.abort(),e.xhr.onreadystatechange=function(){}},_onIdle:function(){var t=this._conn._data;if(this._conn.authenticated&&0===this._requests.length&&0===t.length&&!this._conn.disconnecting&&(e.info("no requests during idle cycle, sending blank request"),t.push(null)),!this._conn.paused){if(this._requests.length<2&&t.length>0){for(var l=this._buildBody(),a=0;a<t.length;a++)null!==t[a]&&("restart"===t[a]?l.attrs({to:this._conn.domain,"xml:lang":"en","xmpp:restart":"true","xmlns:xmpp":e.NS.BOSH}):l.cnode(t[a]).up());delete this._conn._data,this._conn._data=[],this._requests.push(new e.Request(l.tree(),this._onRequestStateChange.bind(this,this._conn._dataRecv.bind(this._conn)),l.tree().getAttribute("rid"))),this._throttledRequestHandler()}if(this._requests.length>0){var n=this._requests[0].age();null!==this._requests[0].dead&&this._requests[0].timeDead()>Math.floor(e.SECONDARY_TIMEOUT*this.wait)&&this._throttledRequestHandler(),n>Math.floor(e.TIMEOUT*this.wait)&&(e.warn("Request "+this._requests[0].id+" timed out, over "+Math.floor(e.TIMEOUT*this.wait)+" seconds since last activity"),this._throttledRequestHandler())}}},_getRequestStatus:function(t,l){var a;if(4==t.xhr.readyState)try{a=t.xhr.status}catch(n){e.error("Caught an error while retrieving a request's status, reqStatus: "+a)}return"undefined"==typeof a&&(a="number"===typeof l?l:0),a},_onRequestStateChange:function(t,l){if(e.debug("request id "+l.id+"."+l.sends+" state changed to "+l.xhr.readyState),l.abort)l.abort=!1;else if(4===l.xhr.readyState){var a=this._getRequestStatus(l);if(this.disconnecting&&a>=400)return this._hitError(a),void this._callProtocolErrorHandlers(l);if((a>0&&a<500||l.sends>5)&&(this._removeRequest(l),e.debug("request id "+l.id+" should now be removed")),200==a){var n=this._requests[0]==l,r=this._requests[1]==l;(r||n&&this._requests.length>0&&this._requests[0].age()>Math.floor(e.SECONDARY_TIMEOUT*this.wait))&&this._restartRequest(0),this._conn.nextValidRid(Number(l.rid)+1),e.debug("request id "+l.id+"."+l.sends+" got 200"),t(l),this.errors=0}else 0===a||a>=400&&a<600||a>=12e3?(e.error("request id "+l.id+"."+l.sends+" error "+a+" happened"),this._hitError(a),this._callProtocolErrorHandlers(l),a>=400&&a<500&&(this._conn._changeConnectStatus(e.Status.DISCONNECTING,null),this._conn._doDisconnect())):e.error("request id "+l.id+"."+l.sends+" error "+a+" happened");a>0&&a<500&&!(l.sends>5)||this._throttledRequestHandler()}},_processRequest:function(t){var l=this,a=this._requests[t],n=this._getRequestStatus(a,-1);if(a.sends>this._conn.maxRetries)this._conn._onDisconnectTimeout();else{var r=a.age(),o=!isNaN(r)&&r>Math.floor(e.TIMEOUT*this.wait),i=null!==a.dead&&a.timeDead()>Math.floor(e.SECONDARY_TIMEOUT*this.wait),u=4==a.xhr.readyState&&(n<1||n>=500);if((o||i||u)&&(i&&e.error("Request "+this._requests[t].id+" timed out (secondary), restarting"),a.abort=!0,a.xhr.abort(),a.xhr.onreadystatechange=function(){},this._requests[t]=new e.Request(a.xmlData,a.origFunc,a.rid,a.sends),a=this._requests[t]),0===a.xhr.readyState){e.debug("request id "+a.id+"."+a.sends+" posting");try{var s=this._conn.options.contentType||"text/xml; charset=utf-8";a.xhr.open("POST",this._conn.service,!this._conn.options.sync),"undefined"!==typeof a.xhr.setRequestHeader&&a.xhr.setRequestHeader("Content-Type",s),this._conn.options.withCredentials&&(a.xhr.withCredentials=!0)}catch(b){return e.error("XHR open failed."),this._conn.connected||this._conn._changeConnectStatus(e.Status.CONNFAIL,"bad-service"),void this._conn.disconnect()}var c=function(){if(a.date=new Date,l._conn.options.customHeaders){var e=l._conn.options.customHeaders;for(var t in e)e.hasOwnProperty(t)&&a.xhr.setRequestHeader(t,e[t])}a.xhr.send(a.data)};if(a.sends>1){var v=1e3*Math.min(Math.floor(e.TIMEOUT*this.wait),Math.pow(a.sends,3));setTimeout(function(){c()},v)}else c();a.sends++,this._conn.xmlOutput!==e.Connection.prototype.xmlOutput&&(a.xmlData.nodeName===this.strip&&a.xmlData.childNodes.length?this._conn.xmlOutput(a.xmlData.childNodes[0]):this._conn.xmlOutput(a.xmlData)),this._conn.rawOutput!==e.Connection.prototype.rawOutput&&this._conn.rawOutput(a.data)}else e.debug("_processRequest: "+(0===t?"first":"second")+" request has readyState of "+a.xhr.readyState)}},_removeRequest:function(t){var l;for(e.debug("removing request"),l=this._requests.length-1;l>=0;l--)t==this._requests[l]&&this._requests.splice(l,1);t.xhr.onreadystatechange=function(){},this._throttledRequestHandler()},_restartRequest:function(e){var t=this._requests[e];null===t.dead&&(t.dead=new Date),this._processRequest(e)},_reqToData:function(e){try{return e.getResponse()}catch(t){if("parsererror"!=t)throw t;this._conn.disconnect("strophe-parsererror")}},_sendTerminate:function(t){e.info("_sendTerminate was called");var l=this._buildBody().attrs({type:"terminate"});t&&l.cnode(t.tree());var a=new e.Request(l.tree(),this._onRequestStateChange.bind(this,this._conn._dataRecv.bind(this._conn)),l.tree().getAttribute("rid"));this._requests.push(a),this._throttledRequestHandler()},_send:function(e){clearTimeout(this._conn._idleTimeout),this._throttledRequestHandler(),this._conn._idleTimeout=setTimeout(function(){this._onIdle(e)}.bind(this._conn),100)},_sendRestart:function(){this._throttledRequestHandler(),clearTimeout(this._conn._idleTimeout)},_throttledRequestHandler:function(){this._requests?e.debug("_throttledRequestHandler called with "+this._requests.length+" requests"):e.debug("_throttledRequestHandler called with undefined requests"),this._requests&&0!==this._requests.length&&(this._requests.length>0&&this._processRequest(0),this._requests.length>1&&Math.abs(this._requests[0].rid-this._requests[1].rid)<this.window&&this._processRequest(1))}},e}),function(e,l){f=[h],p=function(e){return l(e.Strophe,e.$build)}.apply(t,f)}(0,function(e,t){var l=void 0;return e.Websocket=function(e){this._conn=e,this.strip="wrapper";var t=e.service;if(0!==t.indexOf("ws:")&&0!==t.indexOf("wss:")){var l="";"ws"===e.options.protocol&&"https:"!==O.location.protocol?l+="ws":l+="wss",l+="://"+O.location.host,0!==t.indexOf("/")?l+=O.location.pathname+t:l+=t,e.service=l}},e.Websocket.prototype={_buildStream:function(){return t("open",{xmlns:e.NS.FRAMING,to:this._conn.domain,version:"1.0"})},_check_streamerror:function(t,l){var a;if(a=t.getElementsByTagNameNS?t.getElementsByTagNameNS(e.NS.STREAM,"error"):t.getElementsByTagName("stream:error"),0===a.length)return!1;for(var n=a[0],r="",o="",i="urn:ietf:params:xml:ns:xmpp-streams",u=0;u<n.childNodes.length;u++){var s=n.childNodes[u];if(s.getAttribute("xmlns")!==i)break;"text"===s.nodeName?o=s.textContent:r=s.nodeName}var c="WebSocket stream error: ";return c+=r||"unknown",o&&(c+=" - "+r),e.error(c),this._conn._changeConnectStatus(l,r),this._conn._doDisconnect(),!0},_reset:function(){},_connect:function(){var e=!1,t=wx.getSystemInfoSync();"devtools"==t.platform?e=!1:"ios"==t.platform?e=!1:"android"==t.platform&&(e=!0);var n=this;function r(){l&&(a("log","有sockettask了。。。"," at webIM\\sdk\\libs\\strophe.js:5579"),l.close(),l=void 0),setTimeout(function(){var t=wx.connectSocket({url:n._conn.service,fail:function(e){a("log","连接失败",e," at webIM\\sdk\\libs\\strophe.js:5588"),-1!=e.errMsg.indexOf("suspend")&&r()},success:function(e){a("log","连接成功",e," at webIM\\sdk\\libs\\strophe.js:5595")}});l=t,l.onOpen(function(e){a("log","WebSocket 连接已打开！"," at webIM\\sdk\\libs\\strophe.js:5601"),g=!0,n.socket.onopen.call(n)}),l.onMessage(function(e){n.socket.onmessage.call(n,e)}),l.onClose(function(e){a("log","WebSocket 连接已经关闭！"," at webIM\\sdk\\libs\\strophe.js:5613"),g=!1,n._conn.connected=!0,n.socket.onclose.call(n),n._onSocketClose&&n._onSocketClose(e)}),l.onError(function(t){a("log","出错了 出错了"," at webIM\\sdk\\libs\\strophe.js:5622"),e?(a("log","安卓"," at webIM\\sdk\\libs\\strophe.js:5625"),g=!1,n._conn.connected=!0,n.socket.onclose.call(n),n._onSocketClose&&n._onSocketClose(t)):n.socket.onclose.call(n)})},1e3)}this.socket={onopen:this._onOpen,onmessage:this._connect_cb_wrapper,onerror:this._onError,onclose:this._onClose,send:function(e){wx.sendSocketMessage({data:e})}},r()},_connect_cb:function(t){var l=this._check_streamerror(t,e.Status.CONNFAIL);if(l)return e.Status.CONNFAIL},_handleStreamStart:function(t){var l=!1,a=t.getAttribute("xmlns");"string"!==typeof a?l="Missing xmlns in <open />":a!==e.NS.FRAMING&&(l="Wrong xmlns in <open />: "+a);var n=t.getAttribute("version");return"string"!==typeof n?l="Missing version in <open />":"1.0"!==n&&(l="Wrong version in <open />: "+n),!l||(this._conn._changeConnectStatus(e.Status.CONNFAIL,l),this._conn._doDisconnect(),!1)},_connect_cb_wrapper:function(t){if(0===t.data.indexOf("<open ")||0===t.data.indexOf("<?xml")){var l=t.data.replace(/^(<\?.*?\?>\s*)*/,"");if(""===l)return;var a=(new y).parseFromString(l,"text/xml").documentElement;this._conn.xmlInput(a),this._conn.rawInput(t.data),this._handleStreamStart(a)&&this._connect_cb(a)}else if(0===t.data.indexOf("<close ")){this._conn.rawInput(t.data),this._conn.xmlInput(t);var n=t.getAttribute("see-other-uri");n?(this._conn._changeConnectStatus(e.Status.REDIRECT,"Received see-other-uri, resetting connection"),this._conn.reset(),this._conn.service=n,this._connect()):(this._conn._changeConnectStatus(e.Status.CONNFAIL,"Received closing stream"),this._conn._doDisconnect())}else{var r=this._streamWrap(t.data),o=(new y).parseFromString(r,"text/xml").documentElement;this.socket.onmessage=this._onMessage.bind(this),this._conn._connect_cb(o,null,t.data)}},_disconnect:function(l){if(a("log","_disconnect",this.socket.readyState,!!this.socket," at webIM\\sdk\\libs\\strophe.js:5769"),this.socket){l&&this._conn.send(l);var n=t("close",{xmlns:e.NS.FRAMING});this._conn.xmlOutput(n);var r=e.serialize(n);this._conn.rawOutput(r);try{this.socket.send(r)}catch(o){e.info("Couldn't send <close /> tag.")}}this._conn._doDisconnect()},_doDisconnect:function(){e.info("WebSockets _doDisconnect was called"),this._closeSocket&&this._closeSocket()},_streamWrap:function(e){return"<wrapper>"+e+"</wrapper>"},_emptyQueue:function(){return!0},_onClose:function(){this._conn.connected&&!this._conn.disconnecting?(e.error("Websocket closed unexpectedly"),this._conn._doDisconnect()):e.info("Websocket closed")},_no_auth_received:function(t){e.error("Server did not send any auth methods"),this._conn._changeConnectStatus(e.Status.CONNFAIL,"Server did not send any auth methods"),t&&(t=t.bind(this._conn),t()),this._conn._doDisconnect()},_onDisconnectTimeout:function(){},_abortAllRequests:function(){},_onError:function(e){wx.onSocketError(function(e){})},_onIdle:function(t){var l=this._conn._data;if(l.length>0&&!this._conn.paused){for(var n=0;n<l.length;n++){var r,o;if(null!==l[n])r="restart"===l[n]?this._buildStream().tree():l[n],o=e.serialize(r),this._conn.xmlOutput(r),this._conn.rawOutput(o),g?wx.sendSocketMessage({data:o,fail:function(){a("log","socjet发送失败"," at webIM\\sdk\\libs\\strophe.js:5912"),t&&t("socket error")},success:function(){}}):(g=!1,t&&t("socket disconnnected"))}this._conn._data=[]}},_onMessage:function(t){var l,a,n='<close xmlns="urn:ietf:params:xml:ns:xmpp-framing" />';if(t.data===n)return this._conn.rawInput(n),this._conn.xmlInput(t),void(this._conn.disconnecting||this._conn._doDisconnect());if(0===t.data.search("<open ")){if(l=(new y).parseFromString(t.data,"text/xml").documentElement,!this._handleStreamStart(l))return}else a=this._streamWrap(t.data),l=(new y).parseFromString(a,"text/xml").documentElement;return this._check_streamerror(l,e.Status.ERROR)?void 0:this._conn.disconnecting&&"presence"===l.firstChild.nodeName&&"unavailable"===l.firstChild.getAttribute("type")?(this._conn.xmlInput(l),void this._conn.rawInput(e.serialize(l))):void this._conn._dataRecv(l,t.data)},_onOpen:function(){e.info("Websocket open");var t=this._buildStream();this._conn.xmlOutput(t.tree());var l=e.serialize(t);this._conn.rawOutput(l),wx.sendSocketMessage({data:l})},_reqToData:function(e){return e},_send:function(e){this._conn.flush(e)},_sendRestart:function(){clearTimeout(this._conn._idleTimeout),this._conn._onIdle.bind(this._conn)()}},e}),function(l){f=[h,d,p],m=function(e){return e}.apply(t,f),void 0===m||(e.exports=m)}(),_){var N=_;"function"===typeof requirejs?requirejs(["./strophe"],function(e){N(e.Strophe,e.$build,e.$msg,e.$iq,e.$pres)}):Promise.resolve().then(function(){var e=[l("deba")];(function(e){N(e.Strophe,e.$build,e.$msg,e.$iq,e.$pres)}).apply(null,e)}).catch(l.oe)}}).bind(O)(function(e,t,l,a,n){})}).call(this,l("0de9")["default"])},e03a:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="http://wechat.maiyayisheng.com/index.php",n="http://aq.appython.top/qay-boot/api/",r={API_BASE_URL:a,IMG_BASE_URL:n};t.default=r},e25f:function(e,t,l){"use strict";(function(t,a){var n=l("1a88"),r=l("2c02"),o=l("2047"),i=new n,u=l("702d");i.saveReceiveMsg=function(e,t){var l;if(t==o.IMAGE)l={id:e.id,type:t,body:{id:e.id,from:e.from,to:e.to,type:e.type,ext:e.ext,chatType:e.type,toJid:"",body:{type:t,url:e.url,filename:e.filename,filetype:e.filetype,size:{width:e.width,height:e.height}}}};else if(t==o.TEXT||t==o.EMOJI)l={id:e.id,type:t,body:{id:e.id,from:e.from,to:e.to,type:e.type,ext:e.ext,chatType:e.type,toJid:"",body:{type:t,msg:e.data}},value:e.data};else if(t==o.FILE)l={id:e.id,type:t,body:{id:e.id,length:e.file_length,from:e.from,to:e.to,type:e.type,ext:e.ext,chatType:e.type,toJid:"",body:{type:t,url:e.url,filename:e.filename,msg:"当前不支持此格式消息展示"}},value:e.data};else{if(t!=o.AUDIO)return;l={id:e.id,type:t,accessToken:e.token||e.accessToken,body:{id:e.id,length:e.length,from:e.from,to:e.to,type:e.type,ext:e.ext,chatType:t,toJid:"",body:{type:t,url:e.url,filename:e.filename,filetype:e.filetype,from:e.from,to:e.to}}}}this.saveMsg(l,t,e)},i.saveMsg=function(e,l,n){var i,s=this,c=t.getStorageSync("myUsername");a("log",c," at webIM\\utils\\msgstorage.js:117"),n&&"groupchat"==n.type?i=n.to+c:(i=e.body.from==c?e.body.to+c:e.body.from+c,a("log",e," at webIM\\utils\\msgstorage.js:130"),a("log",i," at webIM\\utils\\msgstorage.js:131"));var v=wx.getStorageSync(i)||[],b=r(e,l,c);function h(){a("log","保存消息",v," at webIM\\utils\\msgstorage.js:171");var e=v[0].info.from==c?v[0].info.to:v[0].info.from,n=v[0].info.from==c?v[0].ext.toName:v[0].ext.myName,r=v[0].info.from==c?v[0].ext.toImg:v[0].ext.fromAvatar;if(a("log",getApp().globalData.memberList," at webIM\\utils\\msgstorage.js:176"),a("log",e," at webIM\\utils\\msgstorage.js:177"),d(getApp().globalData.memberList,e))a("log","我已经有了"," at webIM\\utils\\msgstorage.js:193"),getApp().globalData.memberList.map(function(t,l){if(t.name===e){a("log","我不是第一条新消息"," at webIM\\utils\\msgstorage.js:196");var o={name:e,nickName:n,avatar:r};getApp().globalData.memberList.splice(l,1),getApp().globalData.memberList.unshift(o)}});else{a("log","我还没有"," at webIM\\utils\\msgstorage.js:209");var h={name:e,nickName:n,avatar:r};getApp().globalData.memberList.unshift(h)}function d(e,t){return e.some(function(e,l){return e.name==t})}if(""==getApp().globalData.memberList){a("log","我是第一条新消息"," at webIM\\utils\\msgstorage.js:229");var p={name:e,nickName:n,avatar:r};getApp().globalData.memberList.unshift(p)}a("log",getApp().globalData.memberList," at webIM\\utils\\msgstorage.js:237");var f=getApp().globalData.memberList;t.setStorageSync("memberList",f),wx.setStorage({key:i,data:v,success:function(){l!=o.AUDIO&&l!=o.VIDEO||u.fire("em.chat.audio.fileLoaded"),s.fire("newChatMsg",b,l,v,i)}})}l==o.AUDIO&&(b.msg.length=e.body.length,b.msg.token=e.accessToken),v.push(b),l==o.AUDIO&&(b.msg.token=e.accessToken),h()},e.exports=i}).call(this,l("6e42")["default"],l("0de9")["default"])},f0c5:function(e,t,l){"use strict";function a(e,t,l,a,n,r,o,i,u,s){var c,v="function"===typeof e?e.options:e;if(u&&(v.components=Object.assign(u,v.components||{})),s&&((s.beforeCreate||(s.beforeCreate=[])).unshift(function(){this[s.__module]=this}),(v.mixins||(v.mixins=[])).push(s)),t&&(v.render=t,v.staticRenderFns=l,v._compiled=!0),a&&(v.functional=!0),r&&(v._scopeId="data-v-"+r),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},v._ssrRegister=c):n&&(c=i?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(v.functional){v._injectStyles=c;var b=v.render;v.render=function(e,t){return c.call(t),b(e,t)}}else{var h=v.beforeCreate;v.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:v}}l.d(t,"a",function(){return a})},f18c:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LOCALTION_REGION=t.LOCALTION_CITY=t.USER_TOKEN=t.USER_INFO=t.USER_ID=t.IS_LOGIN=void 0;var a="IS_LOGIN";t.IS_LOGIN=a;var n="USER_ID";t.USER_ID=n;var r="USER_INFO";t.USER_INFO=r;var o="USER_TOKEN";t.USER_TOKEN=o;var i="LOCALTION_CITY";t.LOCALTION_CITY=i;var u="LOCALTION_REGION";t.LOCALTION_REGION=u},f788:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],n=a;t.default=n},fb2d:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={xmppURL:"wss://im-api.easemob.com/ws/",apiURL:"https://a1.easemob.com",appkey:"1113200310019312#doctors",https:!1,isMultiLoginSessions:!1,isWindowSDK:!1,isSandBox:!1,isDebug:!1,autoReconnectNumMax:15,autoReconnectInterval:2,isWebRTC:!1,isAutoLogin:!0},n=a;t.default=n},fd68:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l("8765")),n=r(l("5ab2"));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=[];for(var l in e)e.hasOwnProperty(l)&&t.push(encodeURIComponent(l)+"="+encodeURIComponent(e[l]));return t.join("&")},i=5,u="FVikcEgR6OA",s=parseInt((new Date).getTime()/1e3),c=(0,n.default)(u+","+s),v={pr:function(e){var t=parseInt((new Date).getTime()/1e3);return e+"?t="+t+"&p="+i+"&s="+(0,n.default)(u+","+t)}},b={BaseUrl:a.default.config.baseURL,imgBaseUrl:a.default.config.imgBaseURL,yygjUrl:a.default.config.yygjURL,wanjiaURL:a.default.config.wanjiaURL,t:s,p:i,s:c,oauth:function(e){return a.default.post(b.yygjUrl+v.pr("O/oauth"),JSON.stringify([e]))},member:function(e){return a.default.post(b.yygjUrl+v.pr("O/member"),JSON.stringify([e,!0]))},getWanJiaToken:function(){return a.default.post(b.wanjiaURL,{method:"token.gettoken",appid:"YY_wanjia",sign:"SDDFJSDMWSDFJ"})},refreshToken:function(e){return a.default.post("user/refreshToken",o({userId:e}))},register:function(e){return a.default.post("/index/Doctors/register",e)},login:function(e){return a.default.post("/index/Doctors/login",e)},getMessageList:function(e){return a.default.post("/index/Doctors/chatrecord",e)},zhuanfaMessage:function(e){return a.default.post("/index/Wechat/forward",e)}},h=b;t.default=h}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/badge/badge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/badge/badge.js';

define('components/badge/badge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/badge/badge"], {
  "0f23": function f23(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("716b"),
        a = n("6eef");

    for (var r in a) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(r);
    }

    n("e75e");
    var f,
        o = n("f0c5"),
        i = Object(o["a"])(a["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], f);
    t["default"] = i.exports;
  },
  "67a2": function a2(e, t, n) {},
  "6eef": function eef(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("8f32"),
        a = n.n(u);

    for (var r in u) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return u[e];
        });
      }(r);
    }

    t["default"] = a.a;
  },
  "716b": function b(e, t, n) {
    "use strict";

    var u,
        a = function a() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        r = [];

    n.d(t, "b", function () {
      return a;
    }), n.d(t, "c", function () {
      return r;
    }), n.d(t, "a", function () {
      return u;
    });
  },
  "8f32": function f32(e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "tuiBadge",
      props: {
        type: {
          type: String,
          default: "primary"
        },
        size: {
          type: String,
          default: ""
        },
        dot: {
          type: Boolean,
          default: !1
        },
        visible: {
          type: Boolean,
          default: !0
        }
      }
    };
    t.default = u;
  },
  e75e: function e75e(e, t, n) {
    "use strict";

    var u = n("67a2"),
        a = n.n(u);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/badge/badge-create-component', {
  'components/badge/badge-create-component': function componentsBadgeBadgeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0f23"));
  }
}, [['components/badge/badge-create-component']]]);
});
require('components/badge/badge.js');
__wxRoute = 'components/chat/emoji';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/chat/emoji.js';

define('components/chat/emoji.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chat/emoji"], {
  "244d": function d(t, n, o) {
    "use strict";

    var e = o("bce1"),
        i = o.n(e);
    i.a;
  },
  "3db4": function db4(t, n, o) {
    "use strict";

    var e,
        i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    o.d(n, "b", function () {
      return i;
    }), o.d(n, "c", function () {
      return u;
    }), o.d(n, "a", function () {
      return e;
    });
  },
  7146: function _(t, n, o) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = o("2047"),
          i = {
        OPENED: "showEmoji",
        CLOSED: "emoji_list"
      },
          u = {
        components: {},
        props: {},
        data: function data() {
          return {
            show: i.CLOSED,
            emoji: this.$im.Emoji,
            emojiObj: this.$im.EmojiObj,
            interval: 5e3,
            duration: 500,
            autoplay: !1,
            indicatorDots: !0
          };
        },
        created: function created() {},
        amount: function amount() {
          t("log", 1, " at components\\chat\\emoji.vue:55");
        },
        onReady: function onReady() {},
        methods: {
          openEmoji: function openEmoji() {
            this.show = i.OPENED;
          },
          cancelEmoji: function cancelEmoji() {
            this.show = i.CLOSED;
          },
          sendEmoji: function sendEmoji(t) {
            var n = t.target.dataset.emoji;
            this.$emit("newEmojiStr", {
              msg: n,
              type: e.EMOJI
            });
          }
        }
      };
      n.default = u;
    }).call(this, o("0de9")["default"]);
  },
  bce1: function bce1(t, n, o) {},
  dbda: function dbda(t, n, o) {
    "use strict";

    o.r(n);
    var e = o("7146"),
        i = o.n(e);

    for (var u in e) {
      "default" !== u && function (t) {
        o.d(n, t, function () {
          return e[t];
        });
      }(u);
    }

    n["default"] = i.a;
  },
  fba3: function fba3(t, n, o) {
    "use strict";

    o.r(n);
    var e = o("3db4"),
        i = o("dbda");

    for (var u in i) {
      "default" !== u && function (t) {
        o.d(n, t, function () {
          return i[t];
        });
      }(u);
    }

    o("244d");
    var a,
        c = o("f0c5"),
        r = Object(c["a"])(i["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], a);
    n["default"] = r.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/chat/emoji-create-component', {
  'components/chat/emoji-create-component': function componentsChatEmojiCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("fba3"));
  }
}, [['components/chat/emoji-create-component']]]);
});
require('components/chat/emoji.js');
__wxRoute = 'components/chat/image';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/chat/image.js';

define('components/chat/image.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chat/image"], {
  "0e7f": function e7f(e, t, a) {
    "use strict";

    var n,
        o = function o() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        s = [];

    a.d(t, "b", function () {
      return o;
    }), a.d(t, "c", function () {
      return s;
    }), a.d(t, "a", function () {
      return n;
    });
  },
  "5a29": function a29(e, t, a) {
    "use strict";

    a.r(t);
    var n = a("bbbd"),
        o = a.n(n);

    for (var s in n) {
      "default" !== s && function (e) {
        a.d(t, e, function () {
          return n[e];
        });
      }(s);
    }

    t["default"] = o.a;
  },
  "5b87": function b87(e, t, a) {
    "use strict";

    a.r(t);
    var n = a("0e7f"),
        o = a("5a29");

    for (var s in o) {
      "default" !== s && function (e) {
        a.d(t, e, function () {
          return o[e];
        });
      }(s);
    }

    var c,
        u = a("f0c5"),
        i = Object(u["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], c);
    t["default"] = i.exports;
  },
  bbbd: function bbbd(e, t, a) {
    "use strict";

    (function (e, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = a("2047"),
          s = a("702d"),
          c = a("e25f"),
          u = {
        components: {},
        data: function data() {
          return {};
        },
        props: {
          username: {
            type: Object,
            value: {}
          },
          chatType: {
            type: String,
            value: o.chatType.SINGLE_CHAT
          }
        },
        onUnload: function onUnload() {},
        methods: {
          openCamera: function openCamera() {
            var t = this;
            e.chooseImage({
              count: 1,
              sizeType: ["original", "compressed"],
              sourceType: ["camera"],
              success: function success(e) {
                t.upLoadImage(e);
              }
            });
          },
          sendImage: function sendImage() {
            var t = this;
            e.chooseImage({
              count: 1,
              sizeType: ["original", "compressed"],
              sourceType: ["album"],
              success: function success(e) {
                t.upLoadImage(e);
              }
            });
          },
          isGroupChat: function isGroupChat() {
            return this.chatType == o.chatType.CHAT_ROOM;
          },
          getSendToParam: function getSendToParam() {
            return this.isGroupChat() ? this.username.groupId : this.username.your;
          },
          upLoadImage: function upLoadImage(t) {
            var a = this,
                u = t.tempFilePaths,
                i = e.getStorageSync("HuanXinToken");
            e.getImageInfo({
              src: t.tempFilePaths[0],
              success: function success(t) {
                var r = {
                  jpg: !0,
                  gif: !0,
                  png: !0,
                  bmp: !0
                },
                    f = a.$im.config.appkey.split("#"),
                    m = t.width,
                    p = t.height,
                    l = t.path.lastIndexOf("."),
                    d = ~l && t.path.slice(l + 1) || "";
                d.toLowerCase() in r && (n("log", "https://a1.easemob.com/" + f[0] + "/" + f[1] + "/chatfiles", " at components\\chat\\image.vue:84"), e.uploadFile({
                  url: "https://a1.easemob.com/" + f[0] + "/" + f[1] + "/chatfiles",
                  filePath: u[0],
                  name: "file",
                  header: {
                    "Content-Type": "multipart/form-data",
                    Authorization: "Bearer " + i
                  },
                  success: function success(t) {
                    var i = t.data,
                        r = JSON.parse(i),
                        f = a.$im.conn.getUniqueId(),
                        l = new a.$im.message(o.IMAGE, f),
                        h = {
                      type: o.IMAGE,
                      size: {
                        width: m,
                        height: p
                      },
                      url: r.uri + "/" + r.entities[0].uuid,
                      filetype: d,
                      filename: u[0]
                    };
                    l.set({
                      apiUrl: a.$im.config.apiURL,
                      body: h,
                      from: a.username.myName,
                      to: a.username.yourName,
                      ext: {
                        fromName: e.getStorageSync("myHXId"),
                        fromAvatar: a.$store.state.userInfo.avatar,
                        hxMsgId: o.IMAGE + f,
                        yonghuName: a.$store.state.userInfo.nickname
                      },
                      roomType: !1,
                      success: function success(e) {
                        s.fire("em.chat.sendSuccess", f);
                      }
                    }), a.chatType == o.chatType.CHAT_ROOM && l.setGroup("groupchat");

                    try {
                      a.$emit("sendEnd"), e.setStorage({
                        key: "cool",
                        data: "1",
                        success: function success() {
                          a.$im.conn.send(l.body), n("log", "success", " at components\\chat\\image.vue:135");
                        }
                      });
                    } catch (g) {
                      n("log", "当前消息发送失败", g, " at components\\chat\\image.vue:139");
                    }

                    n("log", l, " at components\\chat\\image.vue:141"), c.saveMsg(l, o.IMAGE);
                  },
                  fail: function fail(e) {
                    n("log", "图片失败:", e, " at components\\chat\\image.vue:149");
                  }
                }));
              }
            });
          }
        }
      };
      t.default = u;
    }).call(this, a("6e42")["default"], a("0de9")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/chat/image-create-component', {
  'components/chat/image-create-component': function componentsChatImageCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5b87"));
  }
}, [['components/chat/image-create-component']]]);
});
require('components/chat/image.js');
__wxRoute = 'components/chat/myChatInput';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/chat/myChatInput.js';

define('components/chat/myChatInput.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chat/myChatInput"], {
  "5b14": function b14(n, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var o = function o() {
      return i.e("components/chat/emoji").then(i.bind(null, "fba3"));
    },
        e = function e() {
      return i.e("components/chat/image").then(i.bind(null, "5b87"));
    },
        s = {
      components: {
        chatEmoji: o,
        chatImage: e
      },
      props: {
        username: Object
      },
      data: function data() {
        return {
          isFocus: !1,
          showYuYin: !1,
          showSend: !1,
          isShowEmoji: !0,
          showOption: !1,
          inputInfo: "",
          emojis: []
        };
      },
      watch: {
        inputInfo: function inputInfo(n) {
          this.showSend = !!n;
        },
        isFocus: function isFocus(n) {
          n && (this.showOption = !1);
        }
      },
      methods: {
        handleSend: function handleSend() {
          this.$emit("replySubmit", this.inputInfo), this.inputInfo = "";
        },
        hoverYuYin: function hoverYuYin() {
          this.showYuYin = !this.showYuYin;
        },
        handleFocus: function handleFocus() {
          this.isFocus || (this.isFocus = !0);
        },
        handleBlur: function handleBlur() {
          this.isFocus = !1;
        },
        emojiBtnClick: function emojiBtnClick() {
          this.isShowEmoji = !this.isShowEmoji, this.isShowEmoji ? this.$refs.emoji.openEmoji() : this.$refs.emoji.cancelEmoji();
        },
        emojiAction: function emojiAction(n) {
          var t,
              i = n.msg;
          n && (t = this.inputInfo + i), this.inputInfo = t;
        },
        hoverOption: function hoverOption() {
          this.showOption = !this.showOption;
        },
        openCamera: function openCamera() {
          this.$refs.image.openCamera();
        },
        sendImageEnd: function sendImageEnd() {
          this.showOption = !1;
        },
        sendImage: function sendImage() {
          this.$refs.image.sendImage();
        }
      }
    };

    t.default = s;
  },
  "65fa": function fa(n, t, i) {
    "use strict";

    var o,
        e = function e() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        s = [];

    i.d(t, "b", function () {
      return e;
    }), i.d(t, "c", function () {
      return s;
    }), i.d(t, "a", function () {
      return o;
    });
  },
  8860: function _(n, t, i) {},
  c310: function c310(n, t, i) {
    "use strict";

    i.r(t);
    var o = i("65fa"),
        e = i("d392");

    for (var s in e) {
      "default" !== s && function (n) {
        i.d(t, n, function () {
          return e[n];
        });
      }(s);
    }

    i("fbed");
    var u,
        c = i("f0c5"),
        a = Object(c["a"])(e["default"], o["b"], o["c"], !1, null, "02a8b5ac", null, !1, o["a"], u);
    t["default"] = a.exports;
  },
  d392: function d392(n, t, i) {
    "use strict";

    i.r(t);
    var o = i("5b14"),
        e = i.n(o);

    for (var s in o) {
      "default" !== s && function (n) {
        i.d(t, n, function () {
          return o[n];
        });
      }(s);
    }

    t["default"] = e.a;
  },
  fbed: function fbed(n, t, i) {
    "use strict";

    var o = i("8860"),
        e = i.n(o);
    e.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/chat/myChatInput-create-component', {
  'components/chat/myChatInput-create-component': function componentsChatMyChatInputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c310"));
  }
}, [['components/chat/myChatInput-create-component']]]);
});
require('components/chat/myChatInput.js');
__wxRoute = 'components/chatInput';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/chatInput.js';

define('components/chatInput.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chatInput"], {
  "0cab": function cab(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        data: function data() {
          return {
            focusBool: !1,
            isShow: !1,
            showTypeNum: 0,
            isLoad: !0,
            commentContent: "",
            isLoading: !0,
            cfBg: !1,
            emojiChar: "☺-😋-😌-😍-😏-😜-😝-😞-😔-😪-😭-😁-😂-😃-😅-😆-👿-😒-😓-😔-😏-😖-😘-😚-😒-😡-😢-😣-😤-😢-😨-😳-😵-😷-😸-😻-😼-😽-😾-😿-🙊-🙋-🙏-✈-🚇-🚃-🚌-🍄-🍅-🍆-🍇-🍈-🍉-🍑-🍒-🍓-🐔-🐶-🐷-👦-👧-👱-👩-👰-👨-👲-👳-💃-💄-💅-💆-💇-🌹-💑-💓-💘-🚲",
            emoji: ["60a", "60b", "60c", "60d", "60f", "61b", "61d", "61e", "61f", "62a", "62c", "62e", "602", "603", "605", "606", "608", "612", "613", "614", "615", "616", "618", "619", "620", "621", "623", "624", "625", "627", "629", "633", "635", "637", "63a", "63b", "63c", "63d", "63e", "63f", "64a", "64b", "64f", "681", "68a", "68b", "68c", "344", "345", "346", "347", "348", "349", "351", "352", "353", "414", "415", "416", "466", "467", "468", "469", "470", "471", "472", "473", "483", "484", "485", "486", "487", "490", "491", "493", "498", "6b4"],
            emojis: []
          };
        },
        beforeMount: function beforeMount() {
          var t = {},
              e = this,
              n = e.emojiChar.split("-");
          e.emoji.forEach(function (o, i) {
            t = {
              char: n[i],
              emoji: "0x1f" + o
            }, e.emojis.push(t);
          });
        },
        methods: {
          cemojiCfBg: function cemojiCfBg() {
            this.isShow = !1, this.cfBg = !1, this.showTypeNum = 0;
          },
          textAreaFocus: function textAreaFocus() {
            this.isShow = !1, this.cfBg = !0, this.showTypeNum = 0;
          },
          textAreaBlur: function textAreaBlur(t) {
            this.focusBool = !1;
          },
          emojiScroll: function emojiScroll(e) {
            t("log", e, " at components\\chatInput.vue:198");
          },
          emojiShowHide: function emojiShowHide(t) {
            this.isShow ? this.showTypeNum > 0 && this.showTypeNum != t ? this.showTypeNum = t : (this.isShow = !1, this.showTypeNum = 0) : (this.isShow = !0, this.showTypeNum = t), this.isLoad = !1, this.cfBg = !0;
          },
          emojiChoose: function emojiChoose(t) {
            this.commentContent = this.commentContent + t.currentTarget.dataset.emoji;
          },
          switchChange: function switchChange(t) {
            this.$emit("switchChange", t.detail.value);
          },
          openAudio: function openAudio() {
            this.$helper.toast("none", "功能尚未开放~", 1500);
          },
          sendImage: function sendImage() {
            this.$helper.toast("none", "功能尚未开放~", 1500);
          },
          sendVideo: function sendVideo() {
            this.$helper.toast("none", "功能尚未开放~", 1500);
          },
          reply: function reply() {
            this.cfBg = !1, this.showTypeNum = 0, this.isShow = !1, this.$emit("replySubmit", this.commentContent), this.$emit("blurClearReplyInfo", ""), this.commentContent = "";
          }
        }
      };
      e.default = n;
    }).call(this, n("0de9")["default"]);
  },
  "144e": function e(t, _e, n) {
    "use strict";

    n.r(_e);
    var o = n("fa91"),
        i = n("7041");

    for (var s in i) {
      "default" !== s && function (t) {
        n.d(_e, t, function () {
          return i[t];
        });
      }(s);
    }

    n("779d");
    var u,
        c = n("f0c5"),
        h = Object(c["a"])(i["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], u);
    _e["default"] = h.exports;
  },
  7041: function _(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("0cab"),
        i = n.n(o);

    for (var s in o) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(s);
    }

    e["default"] = i.a;
  },
  "779d": function d(t, e, n) {
    "use strict";

    var o = n("7dc1"),
        i = n.n(o);
    i.a;
  },
  "7dc1": function dc1(t, e, n) {},
  fa91: function fa91(t, e, n) {
    "use strict";

    var o,
        i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        s = [];

    n.d(e, "b", function () {
      return i;
    }), n.d(e, "c", function () {
      return s;
    }), n.d(e, "a", function () {
      return o;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/chatInput-create-component', {
  'components/chatInput-create-component': function componentsChatInputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("144e"));
  }
}, [['components/chatInput-create-component']]]);
});
require('components/chatInput.js');
__wxRoute = 'components/loadmore/loadmore';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/loadmore/loadmore.js';

define('components/loadmore/loadmore.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/loadmore/loadmore"], {
  1188: function _(t, e, n) {},
  "558e": function e(t, _e, n) {
    "use strict";

    n.r(_e);
    var u = n("b8de"),
        a = n.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(_e, t, function () {
          return u[t];
        });
      }(r);
    }

    _e["default"] = a.a;
  },
  b750: function b750(t, e, n) {
    "use strict";

    var u = n("1188"),
        a = n.n(u);
    a.a;
  },
  b8de: function b8de(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      name: "tuiLoadmore",
      props: {
        text: {
          type: String,
          default: "正在加载..."
        },
        visible: {
          type: Boolean,
          default: !1
        },
        index: {
          type: Number,
          default: 1
        },
        type: {
          type: String,
          default: ""
        }
      }
    };
    e.default = u;
  },
  ba09: function ba09(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("ba1c"),
        a = n("558e");

    for (var r in a) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(r);
    }

    n("b750");
    var o,
        c = n("f0c5"),
        f = Object(c["a"])(a["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], o);
    e["default"] = f.exports;
  },
  ba1c: function ba1c(t, e, n) {
    "use strict";

    var u,
        a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "b", function () {
      return a;
    }), n.d(e, "c", function () {
      return r;
    }), n.d(e, "a", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/loadmore/loadmore-create-component', {
  'components/loadmore/loadmore-create-component': function componentsLoadmoreLoadmoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ba09"));
  }
}, [['components/loadmore/loadmore-create-component']]]);
});
require('components/loadmore/loadmore.js');
__wxRoute = 'components/uniapp-components/w-picker/w-picker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uniapp-components/w-picker/w-picker.js';

define('components/uniapp-components/w-picker/w-picker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uniapp-components/w-picker/w-picker"], {
  "2bc3": function bc3(a, t, e) {},
  "2e6a": function e6a(a, t, e) {
    "use strict";

    (function (a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var r = d(e("f788")),
          l = d(e("3a3c")),
          s = d(e("93b2")),
          n = d(e("c795"));

      function d(a) {
        return a && a.__esModule ? a : {
          default: a
        };
      }

      function u(a, t) {
        for (var e = 0; e < t.length; e++) {
          if (a === t[e]) return !0;
        }

        throw new Error("mode无效，请选择有效的mode!");
      }

      var i = {
        data: function data() {
          return {
            result: [],
            data: {},
            checkArr: [],
            checkValue: [],
            pickVal: [],
            showPicker: !1,
            resultStr: "",
            itemHeight: "height: ".concat(a.upx2px(88), "px;")
          };
        },
        computed: {},
        props: {
          mode: {
            type: String,
            validator: function validator(a) {
              var t = ["half", "date", "dateTime", "yearMonth", "time", "region", "selector", "limit", "limitHour", "range", "linkage"];
              return u(a, t);
            },
            default: function _default() {
              return "date";
            }
          },
          themeColor: {
            type: String,
            default: function _default() {
              return "#f5a200";
            }
          },
          startYear: {
            type: [String, Number],
            default: function _default() {
              return "1970";
            }
          },
          endYear: {
            type: [String, Number],
            default: function _default() {
              return new Date().getFullYear() + "";
            }
          },
          defaultVal: {
            type: Array,
            default: function _default() {
              return [0, 0, 0, 0, 0, 0, 0];
            }
          },
          areaCode: {
            type: Array,
            default: function _default() {
              return null;
            }
          },
          hideArea: {
            type: Boolean,
            default: !1
          },
          step: {
            type: [String, Number],
            default: 1
          },
          current: {
            type: Boolean,
            default: !1
          },
          selectList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          dayStep: {
            type: [String, Number],
            default: 7
          },
          startHour: {
            type: [String, Number],
            default: 8
          },
          endHour: {
            type: [String, Number],
            default: 20
          },
          minuteStep: {
            type: [String, Number],
            default: 10
          },
          afterStep: {
            type: [String, Number],
            default: 30
          },
          disabledAfter: {
            type: Boolean,
            default: !1
          },
          linkList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          value: {
            type: Array,
            default: function _default() {
              return null;
            }
          },
          level: {
            type: [Number, String],
            default: 2
          }
        },
        watch: {
          mode: function mode() {
            this.initData();
          },
          selectList: function selectList() {
            this.initData();
          },
          linkList: function linkList() {
            this.initData();
          }
        },
        methods: {
          getLinkageVal: function getLinkageVal(a, t) {
            var e = [],
                r = a,
                l = this.linkList,
                s = this.level,
                n = 0,
                d = [],
                u = [],
                i = "",
                c = [];

            switch (s) {
              case 2:
                e = [0, 0];
                break;

              case 3:
                e = [0, 0, 0];
                break;
            }

            var h = function a(l, n, h) {
              return n < s && (c.push(l), l.map(function (l, s) {
                (t ? l.value == r[n] : l.label == r[n]) && (e[n] = s, d.push(l.label), u.push(l.value), i += l.label, l.children && a(l.children, n += 1));
              }), {
                data: c,
                dval: e,
                checkArr: d,
                checkValue: u,
                resultStr: i
              });
            };

            return h(l, n);
          },
          getRegionVal: function getRegionVal(a, t) {
            var e = a[0],
                n = a[1],
                d = 0,
                u = 0,
                i = 0,
                c = [],
                h = this;
            if (r.default.map(function (a, r) {
              (t ? a.value == e : a.label == e) && (d = r);
            }), l.default[d].map(function (a, e) {
              (t ? a.value == n : a.label == n) && (u = e);
            }), h.hideArea) c = [d, u];else {
              var o = a[2];
              s.default[d][u].map(function (a, e) {
                (t ? a.value == o : a.label == o) && (i = e);
              }), c = [d, u, i];
            }
            return c;
          },
          useCurrent: function useCurrent() {
            var a = new Date(),
                t = a.getFullYear().toString(),
                e = this.formatNum(a.getMonth() + 1).toString(),
                r = this.formatNum(a.getDate()).toString(),
                l = this.formatNum(a.getHours()).toString(),
                s = this.formatNum(a.getMinutes()).toString(),
                n = this.formatNum(a.getSeconds()).toString();
            return this.current ? [t, e, r, l, (Math.floor(s / this.step) * this.step).toString(), n] : this.defaultVal;
          },
          formatNum: function formatNum(a) {
            return a < 10 ? "0" + a : a + "";
          },
          maskTap: function maskTap() {
            this.showPicker = !1;
          },
          show: function show() {
            this.showPicker = !0;
          },
          hide: function hide() {
            this.showPicker = !1;
          },
          pickerCancel: function pickerCancel() {
            this.$emit("cancel", {
              checkArr: this.checkArr,
              defaultVal: this.pickVal
            }), this.showPicker = !1;
          },
          pickerConfirm: function pickerConfirm(t) {
            switch (this.mode) {
              case "range":
                var e = this.checkArr,
                    r = new Date(e[0], e[1], e[2]),
                    l = new Date(e[3], e[4], e[5]),
                    s = this.pickVal;
                r > l ? (this.checkArr = [e[3], e[4], e[5], e[0], e[1], e[2]], this.pickVal = [s[4], s[5], s[6], 0, s[0], s[1], s[2]], this.$emit("confirm", {
                  checkArr: this.checkArr,
                  from: e[3] + "-" + e[4] + "-" + e[5],
                  to: e[0] + "-" + e[1] + "-" + e[2],
                  defaultVal: this.pickVal,
                  result: this.resultStr
                })) : this.$emit("confirm", {
                  checkArr: this.checkArr,
                  from: e[0] + "-" + e[1] + "-" + e[2],
                  to: e[3] + "-" + e[4] + "-" + e[5],
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              case "limit":
                var n = new Date().getTime(),
                    d = new Date(this.resultStr.replace(/-/g, "/")).getTime();
                if (n > d) return void a.showModal({
                  title: "提示",
                  content: "选择时间必须大于当前时间",
                  confirmColor: this.themeColor
                });
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              case "region":
              case "linkage":
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  checkValue: this.checkValue,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              default:
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;
            }

            this.showPicker = !1;
          },
          bindChange: function bindChange(a) {
            var t,
                e,
                r,
                d,
                u,
                i,
                c,
                h,
                o,
                f = this,
                m = a.detail.value,
                y = "",
                g = "",
                k = "",
                b = "",
                v = "",
                p = "",
                A = f.checkArr,
                S = [],
                V = [],
                w = f.mode;

            switch (w) {
              case "limitHour":
                if (d = f.data.date[m[0]], u = f.data.areas[m[1]], f.data.hours[m[2]], d.value != A[0].value) {
                  m[1] = 0, m[2] = 0;
                  var H = n.default.limitHour.initAreas(d);
                  f.data.areas = H;
                  var D = n.default.limitHour.initHours(d, f.data.areas[m[1]]);
                  f.data.hours = D;
                }

                if (u.value != A[1].value) {
                  m[2] = 0;
                  var N = n.default.limitHour.initHours(d, f.data.areas[m[1]]);
                  f.data.hours = N;
                }

                i = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], c = f.data.areas[m[1]] || f.data.areas[f.data.areas.length - 1], h = f.data.hours[m[2]] || f.data.hours[f.data.hours.length - 1], f.checkArr = [i, c, h], f.resultStr = "".concat(i.value + " " + c.label + " " + h.label + "时");
                break;

              case "limit":
                if (d = f.data.date[m[0]], u = f.data.hours[m[1]], d.value != A[0].value) {
                  var M = n.default.limit.initHours(f.startHour, f.endHour, f.minuteStep, f.afterStep, d.value),
                      C = n.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, d.value, u.value);
                  f.data.hours = M, f.data.minutes = C;
                }

                if (u.value != A[1].value) {
                  var L = n.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, d.value, u.value);
                  f.data.minutes = L;
                }

                i = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], h = f.data.hours[m[1]] || f.data.hours[f.data.hours.length - 1], o = f.data.minutes[m[2]] || f.data.minutes[f.data.minutes.length - 1], f.checkArr = [i, h, o], f.resultStr = "".concat(i.value + " " + h.value + ":" + o.value + ":00");
                break;

              case "range":
                var $ = f.data.fyears[m[0]] || f.data.fyears[f.data.fyears.length - 1],
                    T = f.data.fmonths[m[1]] || f.data.fmonths[f.data.fmonths.length - 1],
                    Y = f.data.fdays[m[2]] || f.data.fdays[f.data.fdays.length - 1],
                    P = f.data.tyears[m[4]] || f.data.tyears[f.data.tyears.length - 1],
                    x = f.data.tmonths[m[5]] || f.data.tmonths[f.data.tmonths.length - 1],
                    _ = f.data.tdays[m[6]] || f.data.tdays[f.data.tdays.length - 1];

                $ != A[0] && (S = n.default.range.initDays($, T), f.data.fdays = S), T != A[1] && (S = n.default.range.initDays($, T), f.data.fdays = S), P != A[3] && (S = n.default.range.initDays(P, x), f.data.tdays = S), x != A[4] && (S = n.default.range.initDays(P, x), f.data.tdays = S), f.checkArr = [$, T, Y, P, x, _], f.resultStr = "".concat($ + "-" + T + "-" + Y + "至" + P + "-" + x + "-" + _);
                break;

              case "half":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], r = f.data.areas[m[3]] || f.data.areas[f.data.areas.length - 1], y != A[0] && (S = n.default.date.initDays(y, g, f.disabledAfter), V = n.default.date.initMonths(y, f.disabledAfter), f.data.days = S, f.data.months = V), g != A[1] && (S = n.default.date.initDays(y, g, f.disabledAfter), f.data.days = S), f.checkArr = [y, g, k, r], f.resultStr = "".concat(y + "-" + g + "-" + k + r.label);
                break;

              case "date":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], y != A[0] && (S = n.default.date.initDays(y, g, f.disabledAfter), V = n.default.date.initMonths(y, f.disabledAfter), f.data.days = S, f.data.months = V), g != A[1] && (S = n.default.date.initDays(y, g, f.disabledAfter), f.data.days = S), f.checkArr = [y, g, k], f.resultStr = "".concat(y + "-" + g + "-" + k);
                break;

              case "yearMonth":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], y != A[0] && (V = n.default.date.initMonths(y, f.disabledAfter), f.data.months = V), f.checkArr = [y, g], f.resultStr = "".concat(y + "-" + g);
                break;

              case "dateTime":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], b = f.data.hours[m[3]] || f.data.hours[f.data.hours.length - 1], v = f.data.minutes[m[4]] || f.data.minutes[f.data.minutes.length - 1], p = f.data.seconds[m[5]] || f.data.seconds[f.data.seconds.length - 1], y != A[0] && (S = n.default.date.initDays(y, g), f.data.days = S), g != A[1] && (S = n.default.date.initDays(y, g), f.data.days = S), f.checkArr = [y, g, k, b, v, p], f.resultStr = "".concat(y + "-" + g + "-" + k + " " + b + ":" + v + ":" + p);
                break;

              case "time":
                b = f.data.hours[m[0]] || f.data.hours[f.data.hours.length - 1], v = f.data.minutes[m[1]] || f.data.minutes[f.data.minutes.length - 1], p = f.data.seconds[m[2]] || f.data.seconds[f.data.seconds.length - 1], f.checkArr = [b, v, p], f.resultStr = "".concat(b + ":" + v + ":" + p);
                break;

              case "linkage":
                var B,
                    R,
                    j,
                    E = this.linkList;
                B = f.data[0][m[0]] || f.data[0][0], R = f.data[1][m[1]] || f.data[1][0], 3 == this.level ? (j = f.data[2][m[2]] || f.data[2][0], B.label != A[0] && (f.data[1] = E[m[0]].children, f.data[2] = E[m[0]].children[m[1]].children, m[1] = 0, m[2] = 0, R = f.data[1][m[1]] || f.data[1][0], j = f.data[2][m[2]] || f.data[2][0]), R.label != A[1] && (f.data[2] = E[m[0]].children[m[1]].children, m[2] = 0, j = f.data[2][m[2]] || f.data[2][0]), f.checkArr = [B.label, R.label, j.label], f.checkValue = [f.data[0][m[0]] ? f.data[0][m[0]].value : f.data[0][0].value, f.data[1][m[1]] ? f.data[1][m[1]].value : f.data[1][0].value, f.data[2][m[2]] ? f.data[2][m[2]].value : f.data[2][0].value], f.resultStr = B.label + R.label + j.label) : (B.label != A[0] && (f.data[1] = E[m[0]].children, m[1] = 0, R = f.data[1][m[1]] || f.data[1][0]), f.checkArr = [B.label, R.label], f.checkValue = [f.data[0][m[0]] ? f.data[0][m[0]].value : f.data[0][0].value, f.data[1][m[1]] ? f.data[1][m[1]].value : f.data[1][0].value], f.resultStr = B.label + R.label);
                break;

              case "region":
                t = f.data.provinces[m[0]] || f.data.provinces[0], e = f.data.citys[m[1]] || f.data.citys[0], f.hideArea || (r = f.data.areas[m[2]] || f.data.areas[0]), t.label != A[0] && (f.data.citys = l.default[m[0]] || l.default[0], f.hideArea || (f.data.areas = s.default[m[0]][0] || s.default[0][0]), m[1] = 0, m[2] = 0, e = f.data.citys[m[1]] || f.data.citys[0], f.hideArea || (r = f.data.areas[m[2]] || f.data.areas[0])), e.label == A[1] || f.hideArea || (f.data.areas = s.default[m[0]][m[1]] || s.default[0][0], m[2] = 0, r = f.data.areas[m[2]] || f.data.areas[0]), f.hideArea ? (f.checkArr = [t.label, e.label], f.checkValue = [f.data.provinces[m[0]] ? f.data.provinces[m[0]].value : f.data.provinces[0].value, f.data.citys[m[1]] ? f.data.citys[m[1]].value : f.data.citys[0].value], f.resultStr = t.label + e.label) : (f.checkArr = [t.label, e.label, r.label], f.checkValue = [f.data.provinces[m[0]] ? f.data.provinces[m[0]].value : f.data.provinces[0].value, f.data.citys[m[1]] ? f.data.citys[m[1]].value : f.data.citys[0].value, f.data.areas[m[2]] ? f.data.areas[m[2]].value : f.data.areas[0].value], f.resultStr = t.label + e.label + r.label);
                break;

              case "selector":
                f.checkArr = f.data[m[0]] || f.data[f.data.length - 1], f.resultStr = f.data[m[0]] ? f.data[m[0]].label : f.data[f.data.length - 1].label;
                break;
            }

            f.$nextTick(function () {
              f.pickVal = m;
            });
          },
          initData: function initData() {
            var a,
                t,
                e,
                d,
                u,
                i,
                c,
                h,
                o,
                f,
                m,
                y,
                g = this,
                k = {},
                b = g.mode,
                v = [];

            switch (b) {
              case "linkage":
                var p;
                p = g.value ? g.getLinkageVal(g.value, !0) : g.getLinkageVal(g.defaultVal), v = p.dval, k = p.data, g.checkArr = p.checkArr, g.checkValue = p.checkValue, g.resultStr = p.resultStr;
                break;

              case "region":
                v = g.areaCode ? g.getRegionVal(g.areaCode, !0) : g.getRegionVal(g.defaultVal), k = g.hideArea ? {
                  provinces: r.default,
                  citys: l.default[v[0]]
                } : {
                  provinces: r.default,
                  citys: l.default[v[0]],
                  areas: s.default[v[0]][v[1]]
                };
                break;

              case "selector":
                k = g.selectList, v = g.defaultVal;
                break;

              case "limit":
                k = n.default.limit.init(g.dayStep, g.startHour, g.endHour, g.minuteStep, g.afterStep), v = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;

              case "limitHour":
                k = n.default.limitHour.init(g.dayStep), v = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;

              case "range":
                k = n.default.range.init(g.startYear, g.endYear, g.useCurrent(), g.current), v = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;

              default:
                k = n.default.date.init(g.startYear, g.endYear, g.mode, g.step, g.useCurrent(), g.current, g.disabledAfter), v = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;
            }

            switch (g.data = k, b) {
              case "limitHour":
                f = k.date[v[0]] || k.date[k.date.length - 1], m = k.areas[v[2]] || k.areas[k.areas.length - 1], y = k.hours[v[1]] || k.hours[k.hours.length - 1], g.checkArr = [f, m, y], g.resultStr = "".concat(f.value + " " + m.label + " " + y.label + "时");
                break;

              case "limit":
                f = k.date[v[0]] || k.date[k.date.length - 1], m = k.hours[v[1]] || k.hours[k.hours.length - 1], y = k.minutes[v[2]] || k.minutes[k.minutes.length - 1], g.checkArr = [f, m, y], g.resultStr = "".concat(f.value + " " + m.value + ":" + y.value + ":00");
                break;

              case "range":
                var A = k.fyears[v[0]] || k.fyears[k.fyears.length - 1],
                    S = k.fmonths[v[1]] || k.fmonths[k.fmonths.length - 1],
                    V = k.fdays[v[2]] || k.fdays[k.fdays.length - 1],
                    w = k.tyears[v[4]] || k.tyears[k.tyears.length - 1],
                    H = k.tmonths[v[5]] || k.tmonths[k.tmonths.length - 1],
                    D = k.tdays[v[6]] || k.tdays[k.tdays.length - 1];
                g.checkArr = [A, S, V, w, H, D], g.resultStr = "".concat(A + "-" + S + "-" + V + "至" + w + "-" + H + "-" + D);
                break;

              case "half":
                a = k.years[v[0]] || k.years[k.years.length - 1], t = k.months[v[1]] || k.months[k.months.length - 1], e = k.days[v[2]] || k.days[k.days.length - 1], o = k.areas[v[3]] || k.areas[k.areas.length - 1], g.checkArr = [a, t, e, o], g.resultStr = "".concat(a + "-" + t + "-" + e + " " + o.label);
                break;

              case "date":
                a = k.years[v[0]] || k.years[k.years.length - 1], t = k.months[v[1]] || k.months[k.months.length - 1], e = k.days[v[2]] || k.days[k.days.length - 1], g.checkArr = [a, t, e], g.resultStr = "".concat(a + "-" + t + "-" + e);
                break;

              case "yearMonth":
                a = k.years[v[0]] || k.years[k.years.length - 1], t = k.months[v[1]] || k.months[k.months.length - 1], g.checkArr = [a, t], g.resultStr = "".concat(a + "-" + t);
                break;

              case "dateTime":
                a = k.years[v[0]] || k.years[k.years.length - 1], t = k.months[v[1]] || k.months[k.months.length - 1], e = k.days[v[2]] || k.days[k.days.length - 1], d = k.hours[v[3]] || k.hours[k.hours.length - 1], u = k.minutes[v[4]] || k.minutes[k.minutes.length - 1], i = k.seconds[v[5]] || k.seconds[k.seconds.length - 1], g.resultStr = "".concat(a + "-" + t + "-" + e + " " + d + ":" + u + ":" + i), g.checkArr = [a, t, e, d, u];
                break;

              case "time":
                d = k.hours[v[0]] || k.hours[k.hours.length - 1], u = k.minutes[v[1]] || k.minutes[k.minutes.length - 1], i = k.seconds[v[2]] || k.seconds[k.seconds.length - 1], g.checkArr = [d, u, i], g.resultStr = "".concat(d + ":" + u + ":" + i);
                break;

              case "region":
                c = k.provinces[v[0]], h = k.citys[v[1]], g.hideArea ? (g.checkArr = [c.label, h.label], g.checkValue = [c.value, h.value], g.resultStr = c.label + h.label) : (o = k.areas[v[2]], g.checkArr = [c.label, h.label, o.label], g.checkValue = [c.value, h.value, o.value], g.resultStr = c.label + h.label + o.label);
                break;

              case "selector":
                g.checkArr = k[v[0]] || k[k.length - 1], g.resultStr = k[v[0]].label || k[k.length - 1].label;
                break;
            }

            g.$nextTick(function () {
              g.pickVal = v;
            });
          }
        },
        mounted: function mounted() {
          this.initData();
        }
      };
      t.default = i;
    }).call(this, e("6e42")["default"]);
  },
  "424e": function e(a, t, _e) {
    "use strict";

    var r,
        l = function l() {
      var a = this,
          t = a.$createElement;
      a._self._c;
    },
        s = [];

    _e.d(t, "b", function () {
      return l;
    }), _e.d(t, "c", function () {
      return s;
    }), _e.d(t, "a", function () {
      return r;
    });
  },
  7882: function _(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("424e"),
        l = e("7a1f");

    for (var s in l) {
      "default" !== s && function (a) {
        e.d(t, a, function () {
          return l[a];
        });
      }(s);
    }

    e("9c92");
    var n,
        d = e("f0c5"),
        u = Object(d["a"])(l["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], n);
    t["default"] = u.exports;
  },
  "7a1f": function a1f(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("2e6a"),
        l = e.n(r);

    for (var s in r) {
      "default" !== s && function (a) {
        e.d(t, a, function () {
          return r[a];
        });
      }(s);
    }

    t["default"] = l.a;
  },
  "9c92": function c92(a, t, e) {
    "use strict";

    var r = e("2bc3"),
        l = e.n(r);
    l.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uniapp-components/w-picker/w-picker-create-component', {
  'components/uniapp-components/w-picker/w-picker-create-component': function componentsUniappComponentsWPickerWPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7882"));
  }
}, [['components/uniapp-components/w-picker/w-picker-create-component']]]);
});
require('components/uniapp-components/w-picker/w-picker.js');

__wxRoute = 'pages/tabBar/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/index/index.js';

define('pages/tabBar/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/index/index"],{1497:function(e,t,n){"use strict";n.r(t);var a=n("5cb6"),i=n("fe8d");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("51ef"),n("8f22");var o,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"20f58cf2",null,!1,a["a"],o);t["default"]=u.exports},"4fb3":function(e,t,n){},"51ef":function(e,t,n){"use strict";var a=n("e6a8"),i=n.n(a);i.a},"5cb6":function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a})},7211:function(e,t,n){"use strict";(function(e){n("0a10"),n("921b");a(n("66fd"));var t=a(n("1497"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"8f22":function(e,t,n){"use strict";var a=n("4fb3"),i=n.n(a);i.a},ccb1:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,a,i,r,o){try{var c=e[r](o),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(a,i)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(a,i){var r=e.apply(t,n);function c(e){o(r,a,i,c,u,"next",e)}function u(e){o(r,a,i,c,u,"throw",e)}c(void 0)})}}var u=n("e25f"),s=(n("702d"),{data:function(){return{tabList:[{img:"../../../static/imgs/taoci%20(139).png",name:"邀请患者"},{img:"../../../static/imgs/taoci%20(139).png",name:"群发"},{img:"../../../static/imgs/taoci%20(139).png",name:"认证"}],list:[],listt:[],chatPeopleList:[],hxIdsArr:[],aloneName:"",member:[],myTitle:"",myAloneName:"",hisHxid:"",renderList:[]}},onLoad:function(){var t=e.getStorageSync("memberList");a("log",t," at pages\\tabBar\\index\\index.vue:84"),""==t?(a("log",555," at pages\\tabBar\\index\\index.vue:86"),getApp().globalData.memberList=[]):(a("log",666,t," at pages\\tabBar\\index\\index.vue:89"),getApp().globalData.memberList=t,this.getRoster()),a("log",getApp().globalData.memberList," at pages\\tabBar\\index\\index.vue:93");var n=this;u.on("newChatMsg",function(e,t,i,r){a("log","监听到的新消息",i," at pages\\tabBar\\index\\index.vue:96"),n.getRoster()})},onShow:function(){this.myAloneName=e.getStorageSync("myUsername"),a("log",this.myAloneName," at pages\\tabBar\\index\\index.vue:103"),a("log",e.getStorageSync("userInfo")," at pages\\tabBar\\index\\index.vue:104"),a("log",this.$store.state," at pages\\tabBar\\index\\index.vue:105")},onPullDownRefresh:function(){a("log",88888," at pages\\tabBar\\index\\index.vue:108"),this.getRoster()},methods:{gotoqCode:function(){e.navigateTo({url:"../../views/index/qcode"})},puDetail:function(t){var n={myName:e.getStorageSync("myUsername"),yourName:t.username,paintName:t.nickname,userImg:t.userImg};e.navigateTo({url:"../../kefuPage/chat?username="+JSON.stringify(n)})},getRoster:function(){var t=c(i.default.mark(function t(){var n,r=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this,t.next=3,this.$http.getMessageList({doctor:e.getStorageSync("myUsername")}).then(function(e){a("log",e.data," at pages\\tabBar\\index\\index.vue:161"),r.renderList=e.data});case 3:n.chatPeopleList=n.getChatList(),a("log",n.chatPeopleList," at pages\\tabBar\\index\\index.vue:165"),e.stopPullDownRefresh();case 6:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getChatList:function(){var t=this,n=[],i=getApp().globalData.memberList;a("log",i," at pages\\tabBar\\index\\index.vue:173");for(var r=e.getStorageSync("myUsername"),o=0;o<i.length;o++){var c=e.getStorageSync(i[o].name+r)||[],u=e.getStorageSync("rendered_"+i[o].name+r)||[],s=u.concat(c);s.length&&function(){var e=s[s.length-1];e.unReadCount=c.length,e.unReadCount>99&&(e.unReadCount="99+");var i=e.time.split(" ")[0].split("-"),r=e.time.split(" ")[1].split(":"),o=i[2]<10?"0"+i[2]:i[2];t.renderList.forEach(function(t,n){t.hid==e.username&&(a("log","添加头像和名字"," at pages\\tabBar\\index\\index.vue:192"),e.userImg=t.photo,e.nickname=t.nickname)}),e.timestamp=(new Date).getTime(e.time),e.dateTimeNum="".concat(i[0]).concat(i[1]).concat(o).concat(r[0]).concat(r[1]).concat(r[2]),e.time="".concat(i[0],"-").concat(i[1],"-").concat(o," ").concat(r[0],":").concat(r[1],":").concat(r[2]),n.push(e)}()}return n.sort(function(e,t){return t.dateTimeNum-e.dateTimeNum}),n}}});t.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},e6a8:function(e,t,n){},fe8d:function(e,t,n){"use strict";n.r(t);var a=n("ccb1"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a}},[["7211","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/index/index.js');
__wxRoute = 'pages/tabBar/patient/patient';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/patient/patient.js';

define('pages/tabBar/patient/patient.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/patient/patient"],{"0c60":function(t,n,e){"use strict";var u,r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return u})},"1b98":function(t,n,e){"use strict";(function(t){e("0a10"),e("921b");u(e("66fd"));var n=u(e("723b"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"48f9":function(t,n,e){"use strict";e.r(n);var u=e("cf2d"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},"723b":function(t,n,e){"use strict";e.r(n);var u=e("0c60"),r=e("48f9");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("7564");var c,f=e("f0c5"),o=Object(f["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);n["default"]=o.exports},7564:function(t,n,e){"use strict";var u=e("b983"),r=e.n(u);r.a},b983:function(t,n,e){},cf2d:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}}};n.default=u}},[["1b98","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/patient/patient.js');
__wxRoute = 'pages/tabBar/mine/mine';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/mine/mine.js';

define('pages/tabBar/mine/mine.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/mine/mine"],{"356a":function(t,n,e){"use strict";var c,u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return c})},"42b1":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{clear:function(){t.showModal({title:"",content:"确定清除本地缓存",success:function(n){n.confirm?(t.clearStorage(),t.showToast({title:"清除成功"})):n.cancel}})}}};n.default=e}).call(this,e("6e42")["default"])},8398:function(t,n,e){"use strict";var c=e("b45d"),u=e.n(c);u.a},b45d:function(t,n,e){},c6e0:function(t,n,e){"use strict";(function(t){e("0a10"),e("921b");c(e("66fd"));var n=c(e("e7f7"));function c(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},e7f7:function(t,n,e){"use strict";e.r(n);var c=e("356a"),u=e("f3c1");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);e("8398");var r,o=e("f0c5"),f=Object(o["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],r);n["default"]=f.exports},f3c1:function(t,n,e){"use strict";e.r(n);var c=e("42b1"),u=e.n(c);for(var a in c)"default"!==a&&function(t){e.d(n,t,function(){return c[t]})}(a);n["default"]=u.a}},[["c6e0","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/mine/mine.js');
__wxRoute = 'pages/views/register/newUser';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/views/register/newUser.js';

define('pages/views/register/newUser.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/register/newUser"],{"5ee1":function(e,n,t){"use strict";t.r(n);var u=t("6ef6"),o=t("9a50");for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);t("e3e0");var r,c=t("f0c5"),i=Object(c["a"])(o["default"],u["b"],u["c"],!1,null,"70e5d18a",null,!1,u["a"],r);n["default"]=i.exports},"6ef6":function(e,n,t){"use strict";var u,o=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",function(){return o}),t.d(n,"c",function(){return a}),t.d(n,"a",function(){return u})},9272:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{}},methods:{gotozhuce:function(){e.navigateTo({url:"./settingCode"})},gotodenglu:function(){e.navigateTo({url:"../login/login"})}}};n.default=t}).call(this,t("6e42")["default"])},"9a50":function(e,n,t){"use strict";t.r(n);var u=t("9272"),o=t.n(u);for(var a in u)"default"!==a&&function(e){t.d(n,e,function(){return u[e]})}(a);n["default"]=o.a},b813:function(e,n,t){},d329:function(e,n,t){"use strict";(function(e){t("0a10"),t("921b");u(t("66fd"));var n=u(t("5ee1"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},e3e0:function(e,n,t){"use strict";var u=t("b813"),o=t.n(u);o.a}},[["d329","common/runtime","common/vendor"]]]);
});
require('pages/views/register/newUser.js');
__wxRoute = 'pages/views/register/doctorRegister';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/views/register/doctorRegister.js';

define('pages/views/register/doctorRegister.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/register/doctorRegister"],{"0316":function(t,e,n){"use strict";(function(t){n("0a10"),n("921b");u(n("66fd"));var e=u(n("9b10"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4ace":function(t,e,n){"use strict";var u,c=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return c}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return u})},6985:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},methods:{next:function(){t.navigateTo({url:"./confirmCode"})}}};e.default=n}).call(this,n("6e42")["default"])},"9b10":function(t,e,n){"use strict";n.r(e);var u=n("4ace"),c=n("d1eb");for(var r in c)"default"!==r&&function(t){n.d(e,t,function(){return c[t]})}(r);n("c75e");var a,o=n("f0c5"),i=Object(o["a"])(c["default"],u["b"],u["c"],!1,null,"3181aa86",null,!1,u["a"],a);e["default"]=i.exports},c75e:function(t,e,n){"use strict";var u=n("cb5b"),c=n.n(u);c.a},cb5b:function(t,e,n){},d1eb:function(t,e,n){"use strict";n.r(e);var u=n("6985"),c=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=c.a}},[["0316","common/runtime","common/vendor"]]]);
});
require('pages/views/register/doctorRegister.js');
__wxRoute = 'pages/views/register/confirmCode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/views/register/confirmCode.js';

define('pages/views/register/confirmCode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/register/confirmCode"],{"2c4f":function(t,n,e){"use strict";e.r(n);var u=e("4a7c"),c=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=c.a},"4a7c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{next:function(){t.navigateTo({url:"./settingCode"})}}};n.default=e}).call(this,e("6e42")["default"])},"675d":function(t,n,e){"use strict";var u,c=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return c}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return u})},"80e6":function(t,n,e){},b603:function(t,n,e){"use strict";e.r(n);var u=e("675d"),c=e("2c4f");for(var r in c)"default"!==r&&function(t){e.d(n,t,function(){return c[t]})}(r);e("b62f");var a,f=e("f0c5"),o=Object(f["a"])(c["default"],u["b"],u["c"],!1,null,"28ee476d",null,!1,u["a"],a);n["default"]=o.exports},b62f:function(t,n,e){"use strict";var u=e("80e6"),c=e.n(u);c.a},d540:function(t,n,e){"use strict";(function(t){e("0a10"),e("921b");u(e("66fd"));var n=u(e("b603"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["d540","common/runtime","common/vendor"]]]);
});
require('pages/views/register/confirmCode.js');
__wxRoute = 'pages/views/register/settingCode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/views/register/settingCode.js';

define('pages/views/register/settingCode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/register/settingCode"],{"11aa":function(t,e,n){},"1eea":function(t,e,n){"use strict";n.r(e);var o=n("2e81"),s=n("c094");for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);n("450a");var a,r=n("f0c5"),u=Object(r["a"])(s["default"],o["b"],o["c"],!1,null,"d04f41d6",null,!1,o["a"],a);e["default"]=u.exports},"2e81":function(t,e,n){"use strict";var o,s=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return s}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return o})},4355:function(t,e,n){"use strict";(function(t){n("0a10"),n("921b");o(n("66fd"));var e=o(n("1eea"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"450a":function(t,e,n){"use strict";var o=n("11aa"),s=n.n(o);s.a},c094:function(t,e,n){"use strict";n.r(e);var o=n("f70b"),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=s.a},f70b:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{phone:"",passWord:""}},methods:{next:function(){var e=this.$tool.testPhone(this.phone),o=this.$tool.testPassWord(this.passWord);if(t("log",this.$tool.testPhone(this.phone)," at pages\\views\\register\\settingCode.vue:34"),t("log",this.$tool.testPassWord(this.passWord)," at pages\\views\\register\\settingCode.vue:35"),e)if(o){var s={phone:this.phone,password:this.passWord};e&&o&&this.$http.register(s).then(function(e){t("log",e.code," at pages\\views\\register\\settingCode.vue:56"),200==e.code?(n.showToast({title:e.msg,icon:"none"}),setTimeout(function(){n.navigateTo({url:"../login/login"})},400)):n.showToast({title:e.msg,icon:"none"})})}else n.showToast({title:"按照格式输入密码",icon:"none"});else n.showToast({title:"请输入正确的手机号",icon:"none"})},del:function(){this.phone=""},delete1:function(){this.passWord=""}}};e.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])}},[["4355","common/runtime","common/vendor"]]]);
});
require('pages/views/register/settingCode.js');
__wxRoute = 'pages/views/register/doctorRenzheng';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/views/register/doctorRenzheng.js';

define('pages/views/register/doctorRenzheng.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/register/doctorRenzheng"],{"1d0f":function(e,n,t){},5712:function(e,n,t){"use strict";t.r(n);var o=t("cf5d"),u=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,function(){return o[e]})}(c);n["default"]=u.a},"594e":function(e,n,t){"use strict";t.r(n);var o=t("fb9d"),u=t("5712");for(var c in u)"default"!==c&&function(e){t.d(n,e,function(){return u[e]})}(c);t("a883");var r,i=t("f0c5"),a=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,"38d1278f",null,!1,o["a"],r);n["default"]=a.exports},a883:function(e,n,t){"use strict";var o=t("1d0f"),u=t.n(o);u.a},cbe3:function(e,n,t){"use strict";(function(e){t("0a10"),t("921b");o(t("66fd"));var n=o(t("594e"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},cf5d:function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return Promise.all([t.e("common/vendor"),t.e("components/uniapp-components/w-picker/w-picker")]).then(t.bind(null,"7882"))},c={components:{wPicker:u},data:function(){return{selectList:[{label:"男",value:1},{label:"女",value:2}]}},methods:{changeSex:function(){this.$refs.selector.show()},onConfirm:function(n){e("log",n," at pages\\views\\register\\doctorRenzheng.vue:95")},gotoZiZhi:function(){o.navigateTo({url:"./doctorZiZhi"})},next:function(){}}};n.default=c}).call(this,t("0de9")["default"],t("6e42")["default"])},fb9d:function(e,n,t){"use strict";var o,u=function(){var e=this,n=e.$createElement;e._self._c},c=[];t.d(n,"b",function(){return u}),t.d(n,"c",function(){return c}),t.d(n,"a",function(){return o})}},[["cbe3","common/runtime","common/vendor"]]]);
});
require('pages/views/register/doctorRenzheng.js');
__wxRoute = 'pages/views/register/doctorZiZhi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/views/register/doctorZiZhi.js';

define('pages/views/register/doctorZiZhi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/register/doctorZiZhi"],{"41a9":function(t,n,e){"use strict";var u,r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return u})},4347:function(t,n,e){"use strict";(function(t){e("0a10"),e("921b");u(e("66fd"));var n=u(e("6984"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},5541:function(t,n,e){"use strict";var u=e("ea37"),r=e.n(u);r.a},6984:function(t,n,e){"use strict";e.r(n);var u=e("41a9"),r=e("e864");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("5541");var c,o=e("f0c5"),i=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"044da3a4",null,!1,u["a"],c);n["default"]=i.exports},b085:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},methods:{}};n.default=u},e864:function(t,n,e){"use strict";e.r(n);var u=e("b085"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},ea37:function(t,n,e){}},[["4347","common/runtime","common/vendor"]]]);
});
require('pages/views/register/doctorZiZhi.js');
__wxRoute = 'pages/views/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/views/login/login.js';

define('pages/views/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/login/login"],{"02f1":function(n,t,e){},"0cd6":function(n,t,e){"use strict";var o=e("02f1"),i=e.n(o);i.a},"550d":function(n,t,e){"use strict";(function(n,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{num:0,tabList:[{name:"密码登录",value:0},{name:"验证码登录",value:1}],phone:"",passWord:""}},methods:{tabLick:function(n){this.num=n},wangjimima:function(){n.navigateTo({url:"./forgetPassword"})},gotodenglu:function(){var t=this,o=this.$tool.testPhone(this.phone),i=this.$tool.testPassWord(this.passWord);if(o)if(i){var a={phone:this.phone,password:this.passWord};o&i&&this.$http.login(a).then(function(o){if(200==o.code){var i={apiUrl:t.$im.config.apiURL,user:t.phone,pwd:"123456",appKey:t.$im.config.appkey};e("log",i," at pages\\views\\login\\login.vue:101"),t.$im.conn.open(i),n.setStorageSync("myUsername",t.phone),n.setStorageSync("userInfo",o.data),n.showToast({title:o.msg,icon:"none"}),setTimeout(function(){n.switchTab({url:"../../tabBar/index/index"})},400),n.setStorageSync("isLogin",!0)}else n.showToast({title:o.msg,icon:"none"})})}else n.showToast({title:"按照格式输入密码",icon:"none"});else n.showToast({title:"请输入正确的手机号",icon:"none"})}}};t.default=o}).call(this,e("6e42")["default"],e("0de9")["default"])},b296:function(n,t,e){"use strict";var o,i=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return o})},c0e3:function(n,t,e){"use strict";e.r(t);var o=e("b296"),i=e("fffa");for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);e("0cd6");var s,u=e("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=c.exports},dc4e:function(n,t,e){"use strict";(function(n){e("0a10"),e("921b");o(e("66fd"));var t=o(e("c0e3"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},fffa:function(n,t,e){"use strict";e.r(t);var o=e("550d"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t["default"]=i.a}},[["dc4e","common/runtime","common/vendor"]]]);
});
require('pages/views/login/login.js');
__wxRoute = 'pages/views/login/forgetPassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/views/login/forgetPassword.js';

define('pages/views/login/forgetPassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/login/forgetPassword"],{"1c48":function(n,t,e){"use strict";e.r(t);var u=e("9703"),c=e("e7d7");for(var a in c)"default"!==a&&function(n){e.d(t,n,function(){return c[n]})}(a);e("dbce");var r,o=e("f0c5"),i=Object(o["a"])(c["default"],u["b"],u["c"],!1,null,"1011872a",null,!1,u["a"],r);t["default"]=i.exports},"909a":function(n,t,e){"use strict";(function(n){e("0a10"),e("921b");u(e("66fd"));var t=u(e("1c48"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},9703:function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return u})},ccbc:function(n,t,e){},d072:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},methods:{next:function(){n.navigateTo({url:"./loginConfirCode"})}}};t.default=e}).call(this,e("6e42")["default"])},dbce:function(n,t,e){"use strict";var u=e("ccbc"),c=e.n(u);c.a},e7d7:function(n,t,e){"use strict";e.r(t);var u=e("d072"),c=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=c.a}},[["909a","common/runtime","common/vendor"]]]);
});
require('pages/views/login/forgetPassword.js');
__wxRoute = 'pages/views/login/loginConfirCode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/views/login/loginConfirCode.js';

define('pages/views/login/loginConfirCode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/login/loginConfirCode"],{"35e7":function(n,t,e){},7627:function(n,t,e){"use strict";e.r(t);var u=e("93d1"),c=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=c.a},"7c03":function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return u})},"89b7":function(n,t,e){"use strict";var u=e("35e7"),c=e.n(u);c.a},"93d1":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},methods:{next:function(){n.navigateTo({url:"./settingPassWord"})}}};t.default=e}).call(this,e("6e42")["default"])},c1f3:function(n,t,e){"use strict";e.r(t);var u=e("7c03"),c=e("7627");for(var r in c)"default"!==r&&function(n){e.d(t,n,function(){return c[n]})}(r);e("89b7");var f,o=e("f0c5"),a=Object(o["a"])(c["default"],u["b"],u["c"],!1,null,"2f710f53",null,!1,u["a"],f);t["default"]=a.exports},f6c1:function(n,t,e){"use strict";(function(n){e("0a10"),e("921b");u(e("66fd"));var t=u(e("c1f3"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["f6c1","common/runtime","common/vendor"]]]);
});
require('pages/views/login/loginConfirCode.js');
__wxRoute = 'pages/views/login/settingPassWord';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/views/login/settingPassWord.js';

define('pages/views/login/settingPassWord.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/login/settingPassWord"],{"1bb0":function(t,n,e){"use strict";var u,a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return u})},"3c96":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{next:function(){t.navigateTo({url:"./settingPassWord"})}}};n.default=e}).call(this,e("6e42")["default"])},"6da1":function(t,n,e){"use strict";(function(t){e("0a10"),e("921b");u(e("66fd"));var n=u(e("b92d"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"6fe6":function(t,n,e){},"78b3":function(t,n,e){"use strict";var u=e("6fe6"),a=e.n(u);a.a},b92d:function(t,n,e){"use strict";e.r(n);var u=e("1bb0"),a=e("f5f9");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("78b3");var c,f=e("f0c5"),o=Object(f["a"])(a["default"],u["b"],u["c"],!1,null,"4cd6336a",null,!1,u["a"],c);n["default"]=o.exports},f5f9:function(t,n,e){"use strict";e.r(n);var u=e("3c96"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a}},[["6da1","common/runtime","common/vendor"]]]);
});
require('pages/views/login/settingPassWord.js');
__wxRoute = 'pages/kefuPage/kefuPage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/kefuPage/kefuPage.js';

define('pages/kefuPage/kefuPage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kefuPage/kefuPage"],{1941:function(e,t,a){"use strict";a.r(t);var n=a("709f"),s=a("58d6");for(var o in s)"default"!==o&&function(e){a.d(t,e,function(){return s[e]})}(o);a("b779");var r,i=a("f0c5"),u=Object(i["a"])(s["default"],n["b"],n["c"],!1,null,"740d491f",null,!1,n["a"],r);t["default"]=u.exports},4179:function(e,t,a){},"58d6":function(e,t,a){"use strict";a.r(t);var n=a("9238"),s=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=s.a},"709f":function(e,t,a){"use strict";var n,s=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"b",function(){return s}),a.d(t,"c",function(){return o}),a.d(t,"a",function(){return n})},9238:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(a("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return g(e)||u(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function g(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}function c(e,t,a,n,s,o,r){try{var i=e[o](r),u=i.value}catch(g){return void a(g)}i.done?t(u):Promise.resolve(u).then(n,s)}function f(e){return function(){var t=this,a=arguments;return new Promise(function(n,s){var o=e.apply(t,a);function r(e){c(o,n,s,r,i,"next",e)}function i(e){c(o,n,s,r,i,"throw",e)}r(void 0)})}}var h=function(){return a.e("components/chat/myChatInput").then(a.bind(null,"c310"))},l=function(){return a.e("components/loadmore/loadmore").then(a.bind(null,"ba09"))},d=a("e25f"),m=a("702d"),p=a("2047"),v="",y=!1,M={components:{chatInput:h,tuiLoadmore:l},data:function(){return{loadding:!1,total:0,scrollInoViewID:"",mathNumber:Math.floor(5*Math.random()+10),username:{yourName:"",myName:""},myHXId:"",myPhoto:"",shopPhoto:"",chatMsg:[],hisMessage:{toId:"",pageNo:1,pageSize:10},historyMsgList:[]}},watch:{chatMsg:function(t){this.chatMsg=t,e("log",this.chatMsg," at pages\\kefuPage\\kefuPage.vue:102")},inputInfo:function(e){this.showSend=!!e},isFocus:function(e){e&&(this.showOption=!1)}},onLoad:function(t){var a=this;e("log",getApp().globalData.memberList," at pages\\kefuPage\\kefuPage.vue:118");var s=JSON.parse(t.memberObj),o=n.getStorageSync("myHXId");this.myHXId=o,this.username={yourName:s.yourName,myName:o},e("log",s," at pages\\kefuPage\\kefuPage.vue:129"),getApp().globalData.memberList.forEach(function(e,t){(e.name=s.yourName)&&(a.shopPhoto=e.avatar,n.setNavigationBarTitle({title:e.nickName}))}),this.hisMessage.toId=s.yourName,this.getHistoryMessage()},onUnload:function(){m.fire("em.chatroom.leave")},onShow:function(){e("log",666," at pages\\kefuPage\\kefuPage.vue:161"),this.create_or_onready()},methods:{create_or_onready:function(){var e=this,t=e.username,a=n.getStorageSync("myHXId"),s=t.yourName+a,o=n.getStorageSync(s)||[];n.setStorageSync(s,null),e.renderMsg(null,null,o,s),m.on("em.xmpp.error.sendMsgErr",function(e){v=e.data.mid,y=!0}),d.on("newChatMsg",function(a,n,o,r){a.info.from!=t.yourName&&a.info.to!=t.yourName||r==s&&e.renderMsg(a,n,o,s,"newMsg")})},renderMsg:function(t,a,s,o,r){var i=this,u=n.getStorageSync("rendered_"+o)||[];u=i.unique(u.concat(s)),u.length&&("newMsg"==r?(i.chatMsg=i.unique(i.chatMsg.concat(s)),i.scrollInoViewID=i.chatMsg[i.chatMsg.length-1].mid):(i.chatMsg=u.slice(-10),i.scrollInoViewID=u[u.length-1].mid,i.historyMsgList.length<=0?(i.chatMsg=u.slice(-10),i.scrollInoViewID=u[u.length-1].hxMsgId):(i.chatMsg=i.historyMsgList.reverse().slice(-10),i.scrollInoViewID=i.historyMsgList[i.historyMsgList.length-1].hxMsgId)),e("log","打印的消息",this.chatMsg," at pages\\kefuPage\\kefuPage.vue:266"),n.setStorageSync("rendered_"+o,u.slice(-20)),y&&i.renderFail(o),e("log",i.chatMsg," at pages\\kefuPage\\kefuPage.vue:289"))},unique:function(e){var t=[];return e.forEach(function(e,a){if(0===a)t.push(e);else{for(var n=!0,s=0;s<t.length;s++)e.mid===t[s].mid&&(n=!1);n&&t.push(e)}}),t},renderFail:function(e){var t=this,a=t.chatMsg;a.map(function(e){e.mid.substring(e.mid.length-10)==v.substring(v.length-10)&&(e.msg.data[0].isFail=!0,e.isFail=!0,t.chatMsg=a)}),t.curChatMsg[0].mid==v&&(t.curChatMsg[0].msg.data[0].isShow=!1,t.curChatMsg[0].isShow=!1),n.setStorageSync("rendered_"+e,a.slice(-20)),y=!1},replySubmit:function(t){var a=this;if(String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")},t.trim()){var s=this.$im.conn.getUniqueId(),o=new this.$im.message(p.TEXT,s);o.set({msg:t,from:this.username.myName,to:this.username.yourName,ext:{fromName:n.getStorageSync("myHXId"),fromAvatar:this.$store.state.userInfo.avatar,hxMsgId:p.TEXT+s,myName:this.$store.state.userInfo.username},roomType:!1,success:function(e,a){m.fire("em.chat.sendSuccess",e,t)},fail:function(t,a){e("log","消息发送失败"," at pages\\kefuPage\\kefuPage.vue:366")}});try{e("log","发送成功"," at pages\\kefuPage\\kefuPage.vue:370"),n.setStorage({key:"cool",data:"1",success:function(t){e("log","success"," at pages\\kefuPage\\kefuPage.vue:375"),a.$im.conn.send(o.body)}})}catch(r){e("log","当前消息发送失败",r," at pages\\kefuPage\\kefuPage.vue:381")}e("log",o,p.TEXT," at pages\\kefuPage\\kefuPage.vue:385"),d.saveMsg(o,p.TEXT)}},getHistoryMessage:function(){var t=this;this.$flyApi.getMessage(this.hisMessage).then(function(a){t.chatMsg=a.data.records.reverse(),e("log",t.chatMsg," at pages\\kefuPage\\kefuPage.vue:396"),t.total=a.data.total})},scrollToupper:function(){var t=f(s.default.mark(function t(a){var n,o,i;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!a.detail.direction||this.loadding){t.next=17;break}if(this.loadding=!0,e("log",this.total," at pages\\kefuPage\\kefuPage.vue:408"),e("log",this.chatMsg.length," at pages\\kefuPage\\kefuPage.vue:409"),!(this.total>this.chatMsg.length)){t.next=16;break}return this.hisMessage.pageNo++,t.next=8,this.$flyApi.getMessage(this.hisMessage).then(function(t){e("log",t," at pages\\kefuPage\\kefuPage.vue:414"),n=t,e("log",n.data," at pages\\kefuPage\\kefuPage.vue:416")});case 8:o=n.data.records.reverse(),i=[].concat(r(o),r(this.chatMsg)),e("log",n," at pages\\kefuPage\\kefuPage.vue:423"),this.chatMsg=i,e("log",this.chatMsg," at pages\\kefuPage\\kefuPage.vue:425"),this.loadding=!1,t.next=17;break;case 16:this.loadding=!1;case 17:case"end":return t.stop()}},t,this)}));function a(e){return t.apply(this,arguments)}return a}()}};t.default=M}).call(this,a("0de9")["default"],a("6e42")["default"])},aea0:function(e,t,a){"use strict";(function(e){a("0a10"),a("921b");n(a("66fd"));var t=n(a("1941"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},b779:function(e,t,a){"use strict";var n=a("4179"),s=a.n(n);s.a}},[["aea0","common/runtime","common/vendor"]]]);
});
require('pages/kefuPage/kefuPage.js');
__wxRoute = 'pages/kefuPage/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/kefuPage/chat.js';

define('pages/kefuPage/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kefuPage/chat"],{"0ef6":function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a})},"3df7":function(e,t,n){"use strict";(function(e){n("0a10"),n("921b");a(n("66fd"));var t=a(n("ad24"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"5d54":function(e,t,n){"use strict";n.r(t);var a=n("a2f2"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},"98fe":function(e,t,n){},a2f2:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function r(e){return u(e)||c(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function u(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function h(e,t,n,a,o,i,r){try{var s=e[i](r),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(a,o)}function g(e){return function(){var t=this,n=arguments;return new Promise(function(a,o){var i=e.apply(t,n);function r(e){h(i,a,o,r,s,"next",e)}function s(e){h(i,a,o,r,s,"throw",e)}r(void 0)})}}var l=function(){return n.e("components/badge/badge").then(n.bind(null,"0f23"))},f=function(){return n.e("components/loadmore/loadmore").then(n.bind(null,"ba09"))},m=function(){return n.e("components/chatInput").then(n.bind(null,"144e"))},d=n("e25f"),p=n("702d"),y=n("2047"),v="",b=!1,M={components:{tuiBadge:l,tuiLoadmore:f,chatInput:m},data:function(){return{loadding:!1,show:!1,bottom:0,scrollTop:0,scrollInoViewID:"",style:{pageHeight:0,contentViewHeight:0,footViewHeight:90,mitemHeight:0},chatMsg:[],mathNumber:Math.floor(5*Math.random()+10),pageNo:1,pageSize:15,total:0,historyMsgList:[],username:{yourName:"",myName:""},chatUserInfo:{avatar:"",nickname:""},visibility:!1,myPhoto:"",shopPhoto:"",shopName:"",shopPhoto1:"",paintImg:"",msgNumbers:-10}},beforeMount:function(){this.visibility=!0,0,0},beforeDestroy:function(){this.visibility=!1},onLoad:function(t){e("log",t," at pages\\kefuPage\\chat.vue:144");var n=a.getSystemInfoSync();this.style.pageHeight=n.windowHeight,this.style.contentViewHeight=n.windowHeight-n.screenWidth/750*114;var o=JSON.parse(t.username);e("log",o," at pages\\kefuPage\\chat.vue:150"),this.myPhoto=this.$store.state.userInfo.photo,this.paintImg=o.userImg,a.setNavigationBarTitle({title:o.paintName}),this.username={yourName:o.yourName,myName:a.getStorageSync("myUsername")};a.getStorageSync("changePhoto");e("log",getApp().globalData.memberList," at pages\\kefuPage\\chat.vue:176"),e("log",this.chatMsg," at pages\\kefuPage\\chat.vue:190")},onUnload:function(){p.fire("em.chatroom.leave")},created:function(){},onShow:function(){e("log",this.chatMsg," at pages\\kefuPage\\chat.vue:203")},onReady:function(){this.create_or_onready()},methods:{create_or_onready:function(){var t=this,n=t.username,o=a.getStorageSync("myUsername"),i=n.yourName+o,r=a.getStorageSync(i)||[];t.renderMsg(null,null,r,i),a.setStorageSync(i,null),p.on("em.xmpp.error.sendMsgErr",function(e){v=e.data.mid,b=!0}),d.on("newChatMsg",function(a,o,r,s){t.visibility&&(a.info.from!=n.yourName&&a.info.to!=n.yourName||(e("log","判断是否属于当前会话",s,i," at pages\\kefuPage\\chat.vue:238"),s==i&&t.renderMsg(a,o,r,i,"newMsg")))})},renderMsg:function(t,n,o,i,r){o.length>1&&(e("log","判断消息列表中的消息是否重复",this.chatMsg," at pages\\kefuPage\\chat.vue:251"),this.chatMsg.map(function(e,t){o.map(function(t,n){e.mid==t.mid&&o.splice(n,1)})}));var s=a.getStorageSync("rendered_"+i)||[];if(s=s.concat(o),s.length){"newMsg"==r?(this.chatMsg=this.chatMsg.concat(o),this.scrollInoViewID=o[0].mid):(this.chatMsg=s.slice(this.msgNumbers),this.scrollInoViewID=s[s.length-1].mid),a.setStorageSync("rendered_"+i,s.slice(-2e6));var c=a.getStorageSync(i)||[];c.map(function(e,t){o.map(function(n,a){n.mid==e.mid&&c.splice(t,1)})}),a.setStorageSync(i,c),s.slice(-1e6).length,a.pageScrollTo({scrollTop:9999}),b&&this.renderFail(i)}},renderFail:function(e){var t=this,n=t.chatMsg;n.map(function(e){e.mid.substring(e.mid.length-10)==v.substring(v.length-10)&&(e.msg.data[0].isFail=!0,e.isFail=!0,t.chatMsg=n)}),t.curChatMsg[0].mid==v&&(t.curChatMsg[0].msg.data[0].isShow=!1,t.curChatMsg[0].isShow=!1),a.setStorageSync("rendered_"+e,n.slice(-20)),b=!1},replySubmit:function(t){if(String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")},t.trim()){var n=this.$im.conn.getUniqueId(),o=new this.$im.message(y.TEXT,n);o.set({msg:t,from:this.username.myName,to:this.username.yourName,ext:{fromName:a.getStorageSync("myUsername"),myName:this.$store.state.userInfo.nickname,fromAvatar:this.$store.state.userInfo.avatar,hxMsgId:y.TEXT+n,toHxName:this.username.yourName,toName:this.shopName,toImg:this.shopPhoto1},roomType:!1,chatType:this.chatType,success:function(n,a){e("log","消息发送成功"," at pages\\kefuPage\\chat.vue:349"),p.fire("em.chat.sendSuccess",n,t)},fail:function(t,n){e("log","消息发送失败"," at pages\\kefuPage\\chat.vue:353")}});try{this.$im.conn.send(o.body)}catch(r){e("log",r," at pages\\kefuPage\\chat.vue:359")}var i={msg:o,type:y.TEXT};d.saveMsg(i.msg,i.type),this.zhuanfa(t)}},zhuanfa:function(e){var t={d_phone:this.username.myName,hid:this.username.yourName,content:e,d_nickname:"苑医生"};this.$http.zhuanfaMessage(t).then(function(e){})},blurClearReplyInfo:function(e){},scrollToupper:function(){var e=g(o.default.mark(function e(t){var n,a,i;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.create_or_onready(),this.msgNumbers=-1e8,!t.detail.direction||this.loadding){e.next=17;break}if(this.loadding=!0,!(this.total>this.chatMsg.length)){e.next=16;break}return this.pageNo++,e.next=8,this.$http.queryHistoryMessage(this.username.yourName.toString(),this.pageNo,this.pageSize);case 8:n=e.sent,a=n.data.records.reverse(),i=[].concat(r(a),r(this.chatMsg)),this.chatMsg=i,this.scrollInoViewID=this.chatMsg[n.data.records.length].hxMsgId||this.chatMsg[n.data.records.length].mid,this.loadding=!1,e.next=17;break;case 16:this.loadding=!1;case 17:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}};t.default=M}).call(this,n("0de9")["default"],n("6e42")["default"])},a30d:function(e,t,n){"use strict";var a=n("98fe"),o=n.n(a);o.a},ad24:function(e,t,n){"use strict";n.r(t);var a=n("0ef6"),o=n("5d54");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("a30d");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=c.exports}},[["3df7","common/runtime","common/vendor"]]]);
});
require('pages/kefuPage/chat.js');
__wxRoute = 'pages/views/index/qcode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/views/index/qcode.js';

define('pages/views/index/qcode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/index/qcode"],{"0034":function(e,n,t){"use strict";t.r(n);var c=t("5c29"),a=t("ed38");for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);var i,u=t("f0c5"),r=Object(u["a"])(a["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],i);n["default"]=r.exports},"4c15":function(e,n,t){"use strict";(function(e,c){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("11bc"));function o(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{canImg:""}},onLoad:function(){},methods:{shengc:function(){this.make()},make:function(){var n=this;a.default.make({canvasId:"qrcode",componentInstance:this,text:"http://wechat.maiyayisheng.com/index.php/index/Doctors/invitation?doctor="+e.getStorageSync("myUsername"),size:215,margin:10,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",correctLevel:a.default.defaults.correctLevel,success:function(e){c("log",e," at pages\\views\\index\\qcode.vue:40"),n.canImg=e}})},share:function(){e.share({provider:"weixin",scene:"WXSceneSession",type:2,imageUrl:this.canImg,success:function(e){c("log","success:"+JSON.stringify(e)," at pages\\views\\index\\qcode.vue:57")},fail:function(e){c("log","fail:"+JSON.stringify(e)," at pages\\views\\index\\qcode.vue:60")}})}}};n.default=i}).call(this,t("6e42")["default"],t("0de9")["default"])},"5c29":function(e,n,t){"use strict";var c,a=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return c})},bfc2:function(e,n,t){"use strict";(function(e){t("0a10"),t("921b");c(t("66fd"));var n=c(t("0034"));function c(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},ed38:function(e,n,t){"use strict";t.r(n);var c=t("4c15"),a=t.n(c);for(var o in c)"default"!==o&&function(e){t.d(n,e,function(){return c[e]})}(o);n["default"]=a.a}},[["bfc2","common/runtime","common/vendor"]]]);
});
require('pages/views/index/qcode.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);


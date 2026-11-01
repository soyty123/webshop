// --- EMBEDDED PURE JAVASCRIPT QRCODE GENERATOR (OFFLINE & VECTOR SAFE) ---
if (typeof window !== 'undefined' && typeof window.qrcode === 'undefined') {
/**
 * Minified by jsDelivr using Terser v5.37.0.
 * Original file: /npm/qrcode-generator@1.4.4/qrcode.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var qrcode=function(){var t=function(t,r){var e=t,n=g[r],o=null,i=0,a=null,u=[],f={},c=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),l(0,0),l(i-7,0),l(0,i-7),s(),h(),d(t,r),e>=7&&v(t),null==a&&(a=p(e,n,u)),w(a,r)},l=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},h=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},s=function(){for(var t=B.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(t){for(var r=B.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(r>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},d=function(t,r){for(var e=n<<3|r,a=B.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&1==(a>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(u=0;u<15;u+=1){f=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},w=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=B.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][c-g]){var l=!1;u<t.length&&(l=1==(t[u]>>>a&1)),f(n,c-g)&&(l=!l),o[n][c-g]=l,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=A.getRSBlocks(t,r),o=b(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=k(i[u],l.getLength()-1).mod(l);for(a[u]=new Array(l.getLength()-1),g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=s>=0?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};f.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=M(t);break;case"Alphanumeric":e=x(t);break;case"Byte":e=m(t);break;case"Kanji":e=L(t);break;default:throw"mode:"+r}u.push(e),a=null},f.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},f.getModuleCount=function(){return i},f.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=A.getRSBlocks(t,n),o=b(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var g=0;for(i=0;i<r.length;i++)g+=r[i].dataCount;if(o.getLengthInBits()<=8*g)break}e=t}c(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){c(!0,e);var n=B.getLostPoint(f);(0==e||t>n)&&(t=n,r=e)}return r}())},f.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,c,g=f.getModuleCount()*t+2*r,l="";for(c="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+g+'px" height="'+g+'px"',l+=' viewBox="0 0 '+g+" "+g+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+y([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+y(n.id)+'">'+y(n.text)+"</title>":"",l+=e.text?'<description id="'+y(e.id)+'">'+y(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<f.getModuleCount();a+=1)for(u=a*t+r,i=0;i<f.getModuleCount();i+=1)f.isDark(a,i)&&(l+="M"+(i*t+r)+","+u+c);return l+='" stroke="transparent" fill="black"/>',l+="</svg>"},f.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=f.getModuleCount()*t+2*r,n=r,o=e-r;return I(e,e,(function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return f.isDark(a,i)?0:1}return 1}))},f.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=f.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=f.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=y(e),o+='"'),o+="/>"};var y=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return f.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*f.getModuleCount()+2*t,u=t,c=a-t,g={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<c&&u<=r&&r<c&&f.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<c&&u<=r+1&&r+1<c&&f.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",h+=t<1&&r+1>=c?l[i]:g[i];h+="\n"}return a%2&&t>0?h.substring(0,h.length-a-1)+Array(a+1).join("▀"):h.substring(0,h.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=f.getModuleCount()*t+2*r,u=r,c=a-r,g=Array(t+1).join("██"),l=Array(t+1).join("  "),h="",s="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),s="",n=0;n<a;n+=1)i=1,u<=n&&n<c&&u<=e&&e<c&&f.isDark(o,Math.floor((n-u)/t))&&(i=0),s+=i?g:l;for(o=0;o<t;o+=1)h+=s+"\n"}return h.substring(0,h.length-1)},f.renderTo2dContext=function(t,r){r=r||2;for(var e=f.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=f.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},f};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=S(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r,e,n,o,i,a=1,u=2,f=4,c=8,g={L:1,M:0,Q:3,H:2},l=0,h=1,s=2,v=3,d=4,w=5,p=6,y=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(o={}).getBCHTypeInfo=function(t){for(var r=t<<10;i(r)-i(e)>=0;)r^=e<<i(r)-i(e);return 21522^(t<<10|r)},o.getBCHTypeNumber=function(t){for(var r=t<<12;i(r)-i(n)>=0;)r^=n<<i(r)-i(n);return t<<12|r},o.getPatternPosition=function(t){return r[t-1]},o.getMaskFunction=function(t){switch(t){case l:return function(t,r){return(t+r)%2==0};case h:return function(t,r){return t%2==0};case s:return function(t,r){return r%3==0};case v:return function(t,r){return(t+r)%3==0};case d:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case w:return function(t,r){return t*r%2+t*r%3==0};case p:return function(t,r){return(t*r%2+t*r%3)%2==0};case y:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},o.getErrorCorrectPolynomial=function(t){for(var r=k([1],0),e=0;e<t;e+=1)r=r.multiply(k([1,C.gexp(e)],0));return r},o.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case f:case c:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case f:return 16;case c:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case f:return 16;case c:return 12;default:throw"mode:"+t}}},o.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},o),C=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return n}();function k(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=C.gexp(C.glog(n.getAt(e))+C.glog(t.getAt(o)));return k(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=C.glog(n.getAt(0))-C.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=C.gexp(C.glog(t.getAt(o))+r);return k(e,0).mod(t)}};return n}var A=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,n){var o=function(r,e){switch(e){case g.L:return t[4*(r-1)+0];case g.M:return t[4*(r-1)+1];case g.Q:return t[4*(r-1)+2];case g.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var f=o[3*u+0],c=o[3*u+1],l=o[3*u+2],h=0;h<f;h+=1)a.push(r(c,l));return a},e}(),b=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},M=function(t){var r=a,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+2<r.length;)t.put(o(r.substring(n,n+3)),10),n+=3;n<r.length&&(r.length-n==1?t.put(o(r.substring(n,n+1)),4):r.length-n==2&&t.put(o(r.substring(n,n+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},x=function(t){var r=u,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+1<r.length;)t.put(45*o(r.charAt(n))+o(r.charAt(n+1)),11),n+=2;n<r.length&&t.put(o(r.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},m=function(r){var e=f,n=t.stringToBytes(r),o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){for(var r=0;r<n.length;r+=1)t.put(n[r],8)}};return o},L=function(r){var e=c,n=t.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(){var t=n("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=n(r),i={getMode:function(){return e},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return i},D=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},S=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},I=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f,c,g,l=D(),h=(f=l,c=0,g=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;c+r>=8;)f.writeByte(255&(t<<c|g)),r-=8-c,t>>>=8-c,g=0,c=0;g|=t<<c,c+=r},flush:function(){c>0&&f.writeByte(g)}});h.write(r,n);var s=0,v=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var d=String.fromCharCode(o[s]);s+=1,i.contains(v+d)?v+=d:(h.write(i.indexOf(v),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(v+d)),v=d)}return h.write(i.indexOf(v),n),h.write(e,n),h.flush(),l.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=D();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports&&(module.exports=t())}((function(){return qrcode}));
//# sourceMappingURL=/sm/26b4b0d0b1e283d6b3ec9857ac597d7a60c76ac17be1ef4c965f03086de426bb.map
}
// LocalStorage Key matching Admin Dashboard
const STORAGE_KEY = 'edushop_products_data';
const ORDERS_STORAGE_KEY = 'edushop_orders_data';
const THEME_STORAGE_KEY = 'edushop_active_theme';
const WISHLIST_STORAGE_KEY = 'edushop_wishlist_data';
const TELEGRAM_BOT_STORAGE_KEY = 'edushop_telegram_bot_settings';
const EXCHANGE_RATE = 4000; // 1 USD = 4,000 KHR

// Available Coupons (ប្រព័ន្ធលេខកូដបញ្ចុះតម្លៃ)
const AVAILABLE_COUPONS = [
  { code: 'TEACHER2026', type: 'percent', value: 5, label: 'បញ្ចុះតម្លៃពិសេស ៥% (5% Off)' },
  { code: 'TEACHER5', type: 'percent', value: 5, label: 'បញ្ចុះតម្លៃ ៥% ជូនលោកគ្រូ-អ្នកគ្រូ' },
  { code: 'EDUSHOP10', type: 'percent', value: 10, label: 'បញ្ចុះតម្លៃ ១០% លើការទិញសរុប' },
  { code: 'SCHOOL10', type: 'percent', value: 10, label: 'បញ្ចុះតម្លៃ ១០% សម្រាប់សាលារៀន (កុម្ម៉ង់ចាប់ពី ១០ ផ្ទាំង)' },
  { code: 'FREESHIP', type: 'fixed', valueUSD: 1.50, valueKHR: 6000, label: 'ហ្វ្រីថ្លៃដឹកជញ្ជូន ($1.50 / 6,000 ៛)' },
  { code: 'KHMER1', type: 'fixed', valueUSD: 1.00, valueKHR: 4000, label: 'បញ្ចុះតម្លៃ $1.00 (4,000 ៛)' },
  { code: 'EDUSHOP2', type: 'fixed', valueUSD: 2.00, valueKHR: 8000, label: 'កាដូបញ្ចុះតម្លៃ $2.00 (8,000 ៛)' },
  { code: 'EDUSHOP25', type: 'fixed', valueUSD: 2.50, valueKHR: 10000, label: 'បញ្ចុះតម្លៃពិសេស $2.50 (10,000 ៛)' },
  { code: 'EDUSHOP5', type: 'fixed', valueUSD: 5.00, valueKHR: 20000, label: 'បញ្ចុះតម្លៃពិសេស $5.00 (20,000 ៛)' },
  { code: 'FREEAWARD', type: 'fixed', valueUSD: 0.75, valueKHR: 3000, label: 'ហ្វ្រីបោះពុម្ពប័ណ្ណសរសើរ ($0.75 / 3,000 ៛)' },
  { code: 'TEACHERPHOTO', type: 'fixed', valueUSD: 1.00, valueKHR: 4000, label: 'កាដូចែករំលែករូបថ្នាក់រៀន ($1.00 / 4,000 ៛)' },
  { code: 'KIMLEANG', type: 'fixed', valueUSD: 1.00, valueKHR: 4000, label: 'ប្រូម៉ូសិនពិសេស ($1.00 / 4,000 ៛)' }
];
let appliedCoupon = null; // { code, label, discountUSD, discountKHR }
let uploadedSlipDataUrl = null; // Base64 slip image string
let latestCompletedOrder = null; // Track most recent order for receipt modal

// Verified Teacher Reviews for Social Proof (មតិលោកគ្រូ-អ្នកគ្រូ)
const TEACHER_REVIEWS = {
  decor: [
    { quote: "«ផ្ទាំងស្អាតណាស់ ពណ៌ដិត ក្រដាសក្រាស់អ៊ុតស្វិតការពារទឹកល្អ សិស្សក្នុងថ្នាក់ចូលចិត្តខ្លាំង!»", author: "អ្នកគ្រូ សុភាព (ភ្នំពេញ)" },
    { quote: "«បានទទួលផ្ទាំងតុបតែងថ្នាក់ហើយ ស្អាតលើសពីការរំពឹងទុក គុណភាពល្អឥតខ្ចោះ!»", author: "លោកគ្រូ ចាន់ថន (បាត់ដំបង)" },
    { quote: "«រូបភាពច្បាស់ និងទាក់ទាញភ្នែក បិទក្នុងថ្នាក់រៀនភ្លាមមើលទៅស្រស់ស្រាយតែម្តង!»", author: "អ្នកគ្រូ ស្រីមុំ (កណ្តាល)" }
  ],
  teaching: [
    { quote: "«សម្ភារៈជំនួយការបង្រៀនងាយស្រួលប្រើប្រាស់ បង្រៀនសិស្សឆាប់យល់ និងចាប់អារម្មណ៍ខ្លាំង!»", author: "អ្នកគ្រូ ចិន្តា (សៀមរាប)" },
    { quote: "«បណ្ណពាក្យ និងផ្ទាំងគំនូរបង្រៀនមានប្រយោជន៍ខ្លាំងណាស់ ជួយសន្សំសំចៃពេលវេលារៀបចំមេរៀន!»", author: "លោកគ្រូ វណ្ណា (កំពង់ចាម)" }
  ],
  games: [
    { quote: "«ល្បែងសិក្សាទាក់ទាញ សិស្សានុសិស្សចូលចិត្តលេងផងរៀនផង មិនចេះធុញទ្រាន់ឡើយ!»", author: "អ្នកគ្រូ ពិសី (កំពង់ធំ)" },
    { quote: "«ឧបករណ៍អប់រំមានស្តង់ដារល្អ ជួយបង្កើនបញ្ញាស្មារតី និងការគិតរហ័សរបស់កុមារ!»", author: "លោកគ្រូ សុផល (តាកែវ)" }
  ],
  combo: [
    { quote: "«កញ្ចប់ប្រូម៉ូសិនចំណេញច្រើន បានសម្ភារៈពេញលេញសម្រាប់រៀបចំថ្នាក់រៀនមួយទាំងមូល!»", author: "លោកគ្រូ សម្បត្តិ (ពោធិ៍សាត់)" },
    { quote: "«ឈុតសន្សំសំចៃនេះពិតជាល្អ ដឹកជញ្ជូនរហ័សដល់សាលារៀន វេចខ្ចប់យ៉ាងមានសុវត្ថិភាព!»", author: "អ្នកគ្រូ សុវណ្ណារី (ព្រៃវែង)" }
  ]
};

// Product Frame Info Helper (ប្រភេទពណ៌ស៊ុម)
function getFrameInfo(frameColor) {
  switch (frameColor) {
    case 'gold':
      return { key: 'gold', label: 'ស៊ុមពណ៌មាស', emoji: '🟡', class: 'frame-gold', classSm: 'frame-gold-sm', classLg: 'frame-gold-lg', badgeBg: 'bg-amber-50 text-amber-800 border-amber-300' };
    case 'wood':
      return { key: 'wood', label: 'ស៊ុមឈើ', emoji: '🟤', class: 'frame-wood', classSm: 'frame-wood-sm', classLg: 'frame-wood-lg', badgeBg: 'bg-amber-100/70 text-amber-900 border-amber-400' };
    case 'black':
      return { key: 'black', label: 'ស៊ុមពណ៌ខ្មៅ', emoji: '⚫', class: 'frame-black', classSm: 'frame-black-sm', classLg: 'frame-black-lg', badgeBg: 'bg-slate-800 text-white border-slate-900' };
    case 'white':
      return { key: 'white', label: 'ស៊ុមពណ៌ស', emoji: '⚪', class: 'frame-white', classSm: 'frame-white-sm', classLg: 'frame-white-lg', badgeBg: 'bg-white text-slate-800 border-slate-300' };
    case 'silver':
      return { key: 'silver', label: 'ស៊ុមពណ៌ប្រាក់', emoji: '🔘', class: 'frame-silver', classSm: 'frame-silver-sm', classLg: 'frame-silver-lg', badgeBg: 'bg-slate-100 text-slate-700 border-slate-300' };
    case 'blue':
      return { key: 'blue', label: 'ស៊ុមពណ៌ខៀវ', emoji: '🔵', class: 'frame-blue', classSm: 'frame-blue-sm', classLg: 'frame-blue-lg', badgeBg: 'bg-sky-50 text-sky-700 border-sky-300' };
    case 'red':
      return { key: 'red', label: 'ស៊ុមពណ៌ក្រហម', emoji: '🔴', class: 'frame-red', classSm: 'frame-red-sm', classLg: 'frame-red-lg', badgeBg: 'bg-rose-50 text-rose-700 border-rose-300' };
    case 'green':
      return { key: 'green', label: 'ស៊ុមពណ៌បៃតង', emoji: '🟢', class: 'frame-green', classSm: 'frame-green-sm', classLg: 'frame-green-lg', badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-300' };
    case 'purple':
      return { key: 'purple', label: 'ស៊ុមពណ៌ស្វាយ', emoji: '🟣', class: 'frame-purple', classSm: 'frame-purple-sm', classLg: 'frame-purple-lg', badgeBg: 'bg-purple-50 text-purple-700 border-purple-300' };
    default:
      return { key: 'none', label: 'គ្មានស៊ុម', emoji: '🚫', class: 'frame-none', classSm: '', classLg: '', badgeBg: '' };
  }
}

// Default Fallback Database of Educational Store Products
const initialProductsData = [
  // --- សម្ភារៈតុបតែងថ្នាក់ (Classroom Decoration) ---
  {
    id: 1,
    name: "ផ្ទាំងបដាស្វាគមន៍ «ស្វាគមន៍មកកាន់ថ្នាក់រៀនយើង»",
    category: "decor",
    categoryLabel: "សម្ភារៈតុបតែងថ្នាក់",
    size: "40 cm x 60 cm",
    material: "ក្រដាសកម្រាស់ 300g អ៊ុតស្វិតការពារទឹក",
    priceUSD: 1.25,
    priceKHR: 5000,
    badge: "លក់ដាច់ខ្លាំង 🔥",
    iconBg: "from-amber-400 to-orange-500",
    iconEmoji: "🎨",
    imageUrl: "poster_welcome.jpg",
    inStock: true,
    description: "ពណ៌ស្រស់ស្អាត រូបភាពគំនូរកុមាររីករាយ មិនងាយជ្រាបទឹក ស័ក្តិសមសម្រាប់បិទខាងលើក្ដារខៀន ឬទ្វារថ្នាក់រៀន។"
  },
  {
    id: 2,
    name: "ផ្ទាំងដើមឈើអំណាន និងផ្កាពិន្ទុលើកទឹកចិត្ត",
    category: "decor",
    categoryLabel: "សម្ភារៈតុបតែងថ្នាក់",
    size: "60 cm x 80 cm",
    material: "ស្ទីគ័ររូបដើមឈើ + ស្លឹកឈើនិងផ្កា 50 សន្លឹក",
    priceUSD: 2.50,
    priceKHR: 10000,
    badge: "ពេញនិយម ⭐",
    iconBg: "from-emerald-400 to-teal-600",
    iconEmoji: "🌳",
    imageUrl: "poster_reading_tree.jpg",
    inStock: true,
    description: "ជួយលើកទឹកចិត្តសិស្សឱ្យចូលចិត្តការអាន និងប្រកួតប្រជែងពិន្ទុស្អាតៗប្រចាំសប្ដាហ៍។"
  },
  {
    id: 3,
    name: "ផ្ទាំងតារាងព្យញ្ជនៈ និងស្រៈខ្មែរ រូបភាពជីវចល",
    category: "decor",
    categoryLabel: "សម្ភារៈតុបតែងថ្នាក់",
    size: "80 cm x 100 cm",
    material: "បោះពុម្ពពណ៌ដិតកម្រិត HD អ៊ុតផ្លាស្ទិកសងខាង",
    priceUSD: 3.75,
    priceKHR: 15000,
    badge: "ចាំបាច់ប្រចាំថ្នាក់ ✨",
    iconBg: "from-blue-400 to-indigo-600",
    iconEmoji: "📖",
    imageUrl: "poster_khmer_alphabet.jpg",
    inStock: true,
    description: "មានព្យញ្ជនៈខ្មែរទាំង ៣៣ តួ និងស្រៈនិស្ស័យពេញលេញ អមដោយរូបភាពកំប្លែងទាក់ទាញភ្នែកកុមារ។"
  },
  {
    id: 4,
    name: "ផ្ទាំងកាលវិភាគ និងច្បាប់វិន័យប្រចាំថ្នាក់",
    category: "decor",
    categoryLabel: "សម្ភារៈតុបតែងថ្នាក់",
    size: "40 cm x 60 cm",
    material: "ក្រដាសរលោង អាចសរសេរហ្វឺតលុបចេញបាន",
    priceUSD: 1.25,
    priceKHR: 5000,
    badge: "ថ្មី 🌟",
    iconBg: "from-pink-400 to-rose-500",
    iconEmoji: "📋",
    imageUrl: "poster_rules_schedule.jpg",
    inStock: true,
    description: "រៀបចំកាលវិភាគប្រចាំសប្ដាហ៍ និងច្បាប់វិន័យសេចក្តីគួរសម ជួយសិស្សឱ្យចេះសាមគ្គី និងមានវិន័យ។"
  },

  // --- សម្ភារៈបង្រៀនសិស្ស (Teaching Aids) ---
  {
    id: 5,
    name: "នាឡិកាឈើគំរូ រៀនមើលម៉ោង និងនាទី",
    category: "teaching",
    categoryLabel: "សម្ភារៈបង្រៀនសិស្ស",
    size: "25cm × 25cm (កម្រាស់ 1.5cm)",
    material: "ឈើធម្មជាតិរលោង ទ្រនិចកម្រើកបានដោយសេរី",
    priceUSD: 4.50,
    priceKHR: 18000,
    badge: "ឧបករណ៍ស្តង់ដារ ⏰",
    iconBg: "from-amber-500 to-yellow-600",
    iconEmoji: "🕒",
    imageUrl: "",
    inStock: true,
    description: "ទ្រនិចម៉ោង និងនាទីអាចបង្វិលរៀនជាក់ស្ដែង មានលេខច្បាស់ៗ ងាយយល់ទាំងម៉ោងព្រឹក និងម៉ោងរសៀល។"
  },
  {
    id: 6,
    name: "ឈុតបន្ទាត់ធំ និងត្រីវិស័យសម្រាប់ក្ដារខៀន",
    category: "teaching",
    categoryLabel: "សម្ភារៈបង្រៀនសិស្ស",
    size: "បន្ទាត់ 100cm + រង្វាស់មុំ + ត្រីវិស័យ 50cm",
    material: "ផ្លាស្ទិករឹងមាំ បំពាក់មេដែកជាប់ក្ដារខៀន",
    priceUSD: 8.50,
    priceKHR: 34000,
    badge: "សម្រាប់លោកគ្រូអ្នកគ្រូ 📐",
    iconBg: "from-cyan-500 to-blue-600",
    iconEmoji: "📐",
    imageUrl: "",
    inStock: true,
    description: "ជំនួយការដ៏ល្អសម្រាប់បង្រៀនធរណីមាត្រ គូសបន្ទាត់ត្រង់ វាស់មុំ និងគូសរង្វង់បានស្អាតឥតខ្ចោះ។"
  },
  {
    id: 7,
    name: "កាតពាក្យ Flashcards ភាសាខ្មែរ-អង់គ្លេស (120 សន្លឹក)",
    category: "teaching",
    categoryLabel: "សម្ភារៈបង្រៀនសិស្ស",
    size: "10cm × 14cm (ប្រអប់រឹងមាំ)",
    material: "ក្រដាសក្រាស់ 350g អ៊ុតស្វិតកាត់គែមមូលសុវត្ថិភាព",
    priceUSD: 4.00,
    priceKHR: 16000,
    badge: "លក់ដាច់ 💡",
    iconBg: "from-violet-500 to-purple-600",
    iconEmoji: "🗂️",
    imageUrl: "",
    inStock: true,
    description: "មានវាក្យសព្ទ ផ្លែឈើ សត្វ សម្ភារៈ និងពណ៌ ជួយបង្កើនការចងចាំ និងជំនាញភាសាយ៉ាងឆាប់រហ័ស។"
  },
  {
    id: 8,
    name: "គូបរាប់លេខ និងប្រភាគគណិតវិទ្យា STEM",
    category: "teaching",
    categoryLabel: "សម្ភារៈបង្រៀនសិស្ស",
    size: "ឈុត 100 គ្រាប់ (គ្រាប់នីមួយៗ 2cm × 2cm)",
    material: "ផ្លាស្ទិក ABS សុវត្ថិភាពខ្ពស់ ពណ៌ចម្រុះ 10 ពណ៌",
    priceUSD: 6.00,
    priceKHR: 24000,
    badge: "STEM Learning 🧩",
    iconBg: "from-emerald-500 to-green-600",
    iconEmoji: "🔢",
    imageUrl: "",
    inStock: true,
    description: "អាចផ្គុំតភ្ជាប់គ្នាបាន ងាយស្រួលបង្រៀនការបូកដកលេខ គុណចែក និងការយល់ដឹងអំពីមាឌ និងផ្ទៃក្រឡា។"
  },

  // --- ល្បែងសិក្សា (Educational Games) ---
  {
    id: 9,
    name: "ល្បែងផ្គុំរូបផែនទីប្រទេសកម្ពុជាពីឈើ (Wood Map Puzzle)",
    category: "games",
    categoryLabel: "ល្បែងសិក្សា",
    size: "35cm × 45cm (កម្រាស់ 1cm)",
    material: "ឈើធម្មជាតិ ឆ្លាក់ឡាស៊ែរតាមព្រំប្រទល់ខេត្ត",
    priceUSD: 7.50,
    priceKHR: 30000,
    badge: "ល្បែងជាតិខ្មែរ 🇰🇭",
    iconBg: "from-blue-600 to-indigo-700",
    iconEmoji: "🗺️",
    imageUrl: "",
    inStock: true,
    description: "មានគ្រប់ ២៥ រាជធានី-ខេត្ត ជួយសិស្សឱ្យស្គាល់ទីតាំងភូមិសាស្ត្រ និងចំណុចពិសេសនៃខេត្តនីមួយៗ។"
  },
  {
    id: 10,
    name: "ល្បែងផ្គុំពាក្យខ្មែរ និងព្យញ្ជនៈឆ្លាតវៃ",
    category: "games",
    categoryLabel: "ល្បែងសិក្សា",
    size: "28cm × 28cm",
    material: "ក្ដារឈើរឹងមាំ + បន្ទះអក្សរមេដែក 60 បន្ទះ",
    priceUSD: 5.50,
    priceKHR: 22000,
    badge: "ជំនាញភាសាខ្មែរ 📚",
    iconBg: "from-teal-500 to-emerald-600",
    iconEmoji: "🔤",
    imageUrl: "",
    inStock: true,
    description: "ល្បែងប្រកួតផ្គុំពាក្យ បណ្ដុះគំនិតច្នៃប្រឌិត និងការប្រើប្រាស់ពាក្យពេចន៍ខ្មែរឱ្យបានត្រឹមត្រូវតាមអក្ខរាវិរុទ្ធ។"
  },
  {
    id: 11,
    name: "ល្បែងបណ្ដុះបញ្ញា Tangram ឈើ 7 បំណែក",
    category: "games",
    categoryLabel: "ល្បែងសិក្សា",
    size: "18cm × 18cm (រួមជាមួយសៀវភៅគំរូ 100+)",
    material: "ឈើធម្មជាតិ ស្រោបពណ៌ទឹកគ្មានជាតិពុល",
    priceUSD: 3.50,
    priceKHR: 14000,
    badge: "IQ Booster 🧠",
    iconBg: "from-amber-500 to-red-500",
    iconEmoji: "🧩",
    imageUrl: "",
    inStock: true,
    description: "បណ្ដុះការគិតបែបវិភាគ ការស្រមើលស្រមៃ និងការដោះស្រាយបញ្ហាធរណីមាត្រតាមរយៈការផ្គុំរាងផ្សេងៗ។"
  },
  {
    id: 12,
    name: "ល្បែងរាប់គ្រាប់ និងលំនាំពណ៌ Montessori",
    category: "games",
    categoryLabel: "ល្បែងសិក្សា",
    size: "30cm × 20cm × 4cm",
    material: "ឈើធម្មជាតិ + កូនពែងស៊ីលីកូន 5 ពណ៌ + ដង្កាប់ឈើ",
    priceUSD: 6.50,
    priceKHR: 26000,
    badge: "Montessori 🌈",
    iconBg: "from-purple-500 to-pink-500",
    iconEmoji: "🎯",
    imageUrl: "",
    inStock: true,
    description: "ហ្វឹកហាត់សាច់ដុំដៃ ភ្នែក និងការយល់ដឹងអំពីពណ៌ លំនាំ និងការរាប់ចំនួនសម្រាប់កុមារតូច។"
  }
];

// App State
let productsData = [];
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'popular';
let currentSizeFilter = 'all';
let cart = [];
function saveCart() {
  try {
    localStorage.setItem('edushop_cart_data', JSON.stringify(cart));
  } catch(e) {}
}
let activeOrderProduct = null;
let isOrderModalForCart = false;

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const emptyState = document.getElementById('empty-state');
const cartCountBadge = document.getElementById('cart-count');
const mobileCartBadge = document.getElementById('mobile-cart-badge');
const cartDrawer = document.getElementById('cart-drawer');
const cartDrawerBackdrop = document.getElementById('cart-drawer-backdrop');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalUSD = document.getElementById('cart-total-usd');
const cartTotalKHR = document.getElementById('cart-total-khr');

// Order Modal Elements
const orderModal = document.getElementById('order-modal');
const modalProductSummary = document.getElementById('modal-product-summary');
const orderForm = document.getElementById('order-form');
const orderSuccessModal = document.getElementById('order-success-modal');

// Synchronize / Load Products from LocalStorage
function loadStoreProducts() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      productsData = JSON.parse(saved);
      let modified = false;

      // Ensure stock quantity is present on all items
      productsData = productsData.map((p, idx) => {
        if (p.id === 1 && (p.size !== "40 cm x 60 cm" || p.priceKHR !== 5000)) { 
          p.size = "40 cm x 60 cm"; p.priceUSD = 1.25; p.priceKHR = 5000; modified = true; 
        }
        if (p.id === 2 && (p.size !== "60 cm x 80 cm" || p.priceKHR !== 10000)) { 
          p.size = "60 cm x 80 cm"; p.priceUSD = 2.50; p.priceKHR = 10000; modified = true; 
        }
        if (p.id === 3 && (p.size !== "80 cm x 100 cm" || p.priceKHR !== 15000)) { 
          p.size = "80 cm x 100 cm"; p.priceUSD = 3.75; p.priceKHR = 15000; modified = true; 
        }
        if (p.id === 4 && (p.size !== "40 cm x 60 cm" || p.priceKHR !== 5000)) { 
          p.size = "40 cm x 60 cm"; p.priceUSD = 1.25; p.priceKHR = 5000; modified = true; 
        }
        if (p.id === 1 && !p.imageUrl) { p.imageUrl = "poster_welcome.jpg"; modified = true; }
        if (p.id === 2 && !p.imageUrl) { p.imageUrl = "poster_reading_tree.jpg"; modified = true; }
        if (p.id === 3 && !p.imageUrl) { p.imageUrl = "poster_khmer_alphabet.jpg"; modified = true; }
        if (p.id === 4 && !p.imageUrl) { p.imageUrl = "poster_rules_schedule.jpg"; modified = true; }
        if (!p.frameColor) {
          p.frameColor = 'none';
          modified = true;
        }
        if (p.stockQty === undefined) {
          p.stockQty = (idx === 1 || idx === 6) ? 3 : 25;
          modified = true;
        }
        if (p.stockQty === 0) {
          p.inStock = false;
        }
        return p;
      });

      // Ensure Combo items are included
      const hasCombo = productsData.some(p => p.category === 'combo');
      if (!hasCombo) {
        productsData.push(
          {
            id: 13,
            name: "កញ្ចប់តុបតែងថ្នាក់រៀនបឋមពេញលេញ (Classroom Starter Combo)",
            category: "combo",
            categoryLabel: "កញ្ចប់ប្រូម៉ូសិន",
            size: "ឈុតធំ 4 ផ្ទាំង + បន្ទះលេខ",
            material: "អ៊ុតស្វិតការពារទឹក 300g (កញ្ចប់ពិសេស)",
            priceUSD: 12.00,
            priceKHR: 48000,
            badge: "COMBO SET 🎁",
            iconBg: "from-sky-500 via-indigo-500 to-purple-600",
            iconEmoji: "🎁",
            imageUrl: "",
            inStock: true,
            stockQty: 15,
            description: "កញ្ចប់ពិសេសរួមបញ្ចូលទាំងផ្ទាំងបដាស្វាគមន៍ តារាងព្យញ្ជនៈ ដើមឈើអំណាន និងកាលវិភាគបង្រៀន ចំណេញជាងទិញរាយ 20%!"
          },
          {
            id: 14,
            name: "កញ្ចប់ល្បែងសិក្សាបណ្ដុះបញ្ញាកុមារ (Kids STEM Learning Pack)",
            category: "combo",
            categoryLabel: "កញ្ចប់ប្រូម៉ូសិន",
            size: "ឈុត 3 មុខក្នុងប្រអប់កាដូ",
            material: "ឈើធម្មជាតិ និងផ្លាស្ទិកសុវត្ថិភាព",
            priceUSD: 15.00,
            priceKHR: 60000,
            badge: "SUPER VALUE 🌟",
            iconBg: "from-amber-500 via-emerald-500 to-teal-600",
            iconEmoji: "📦",
            imageUrl: "",
            inStock: true,
            stockQty: 4,
            description: "រួមបញ្ចូលទាំងផែនទីកម្ពុជាពីឈើ គូបរាប់លេខ STEM និងល្បែង Tangram 7 បំណែក ជួយកូនៗឆ្លាតវៃ!"
          }
        );
        modified = true;
      }

      if (modified) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(productsData));
      }
    } catch (e) {
      productsData = [...initialProductsData];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(productsData));
    }
  } else {
    productsData = [...initialProductsData];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productsData));
  }
}

// Format Currency
function formatUSD(num) {
  return `$${Number(num).toFixed(2)}`;
}

function formatKHR(num) {
  return `${Number(num).toLocaleString('en-US')} ៛`;
}

// Helper: Get product-specific available sizes (or standard defaults)
function getProductAvailableSizes(product) {
  if (product && Array.isArray(product.availableSizes) && product.availableSizes.length > 0) {
    return product.availableSizes;
  }
  return [
    { name: '40x60 cm', size: '40 cm x 60 cm', priceKHR: 5000, priceUSD: 1.25 },
    { name: '60x80 cm', size: '60 cm x 80 cm', priceKHR: 10000, priceUSD: 2.50 },
    { name: '80x100 cm', size: '80 cm x 100 cm', priceKHR: 15000, priceUSD: 3.75 },
    { name: '60x200 cm', size: '60 cm x 200 cm', priceKHR: 25000, priceUSD: 6.25 },
    { name: '80x250 cm', size: '80 cm x 250 cm', priceKHR: 40000, priceUSD: 10.00 }
  ];
}

// Render Products
function renderProducts() {
  const filtered = productsData.filter(item => {
    const matchCategory = (currentCategory === 'all') || (item.category === currentCategory);
    const matchSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.size && item.size.toLowerCase().includes(searchQuery.toLowerCase()));

    let matchSize = true;
    if (currentSizeFilter === '40x60') {
      matchSize = Boolean(item.size && item.size.includes('40') && item.size.includes('60'));
    } else if (currentSizeFilter === '60x80') {
      matchSize = Boolean(item.size && item.size.includes('60') && item.size.includes('80'));
    } else if (currentSizeFilter === '80x100') {
      matchSize = Boolean(item.size && item.size.includes('80') && item.size.includes('100'));
    } else if (currentSizeFilter === '60x200') {
      matchSize = Boolean(item.size && item.size.includes('60') && item.size.includes('200'));
    } else if (currentSizeFilter === '80x250') {
      matchSize = Boolean(item.size && item.size.includes('80') && item.size.includes('250'));
    } else if (currentSizeFilter === 'framed') {
      matchSize = Boolean(item.frameColor && item.frameColor !== 'none');
    } else if (currentSizeFilter === 'green-frame') {
      matchSize = Boolean(item.frameColor === 'green');
    }

    let matchGrade = true;
    if (typeof currentGradeFilter !== 'undefined' && currentGradeFilter !== 'all') {
      const name = (item.name || '').toLowerCase();
      const desc = (item.description || '').toLowerCase();
      const cat = (item.category || '').toLowerCase();
      if (currentGradeFilter === 'kindergarten') {
        matchGrade = name.includes('មត្តេយ្យ') || name.includes('កុមារ') || desc.includes('មត្តេយ្យ') || cat === 'games' || name.includes('សត្វ') || name.includes('រូបរាង');
      } else if (currentGradeFilter === 'grade1-2') {
        matchGrade = name.includes('ទី១') || name.includes('ទី២') || name.includes('ព្យញ្ជនៈ') || name.includes('ស្រៈ') || name.includes('អំណាន') || name.includes('លេខ') || cat === 'teaching';
      } else if (currentGradeFilter === 'grade3-4') {
        matchGrade = name.includes('ទី៣') || name.includes('ទី៤') || name.includes('ដើមឈើ') || name.includes('វិន័យ') || name.includes('គុណនាម') || name.includes('ប្រាសាទ') || cat === 'decor';
      } else if (currentGradeFilter === 'grade5-6') {
        matchGrade = name.includes('ទី៥') || name.includes('ទី៦') || name.includes('វិទ្យាសាស្ត្រ') || name.includes('ផែនទី') || name.includes('ប្រវត្តិ') || name.includes('រូបមន្ត') || cat === 'combo';
      }
    }

    let matchSubject = true;
    if (typeof currentSubjectFilter !== 'undefined' && currentSubjectFilter !== 'all') {
      const name = (item.name || '').toLowerCase();
      const desc = (item.description || '').toLowerCase();
      if (currentSubjectFilter === 'khmer') {
        matchSubject = name.includes('ព្យញ្ជនៈ') || name.includes('ស្រៈ') || name.includes('អក្សរ') || name.includes('អំណាន') || name.includes('ខ្មែរ') || name.includes('ពាក្យ');
      } else if (currentSubjectFilter === 'math') {
        matchSubject = name.includes('លេខ') || name.includes('គណិត') || name.includes('រូបរាង') || name.includes('ធរណីមាត្រ') || name.includes('រូបមន្ត');
      } else if (currentSubjectFilter === 'science') {
        matchSubject = name.includes('វិទ្យាសាស្ត្រ') || name.includes('សត្វ') || name.includes('រុក្ខជាតិ') || name.includes('ធម្មជាតិ') || name.includes('ផែនទី') || name.includes('សុខភាព');
      } else if (currentSubjectFilter === 'english') {
        matchSubject = name.includes('english') || name.includes('abc') || name.includes('អង់គ្លេស') || desc.includes('english');
      }
    }

    return matchCategory && matchSearch && matchSize && matchGrade && matchSubject;
  });

  // Sorting
  if (currentSort === 'price_asc') {
    filtered.sort((a, b) => a.priceKHR - b.priceKHR);
  } else if (currentSort === 'price_desc') {
    filtered.sort((a, b) => b.priceKHR - a.priceKHR);
  } else if (currentSort === 'name_asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name, 'km'));
  } else {
    // popular: prioritize items with badge
    filtered.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
  }

  if (!productsGrid) return;

  if (filtered.length === 0) {
    productsGrid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  productsGrid.innerHTML = filtered.map(product => {
    let catBadgeClass = 'badge-decor';
    if (product.category === 'teaching') catBadgeClass = 'badge-teaching';
    if (product.category === 'games') catBadgeClass = 'badge-games';
    if (product.category === 'combo') catBadgeClass = 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200 shadow-2xs';

    const isAvailable = product.inStock !== false && (product.stockQty === undefined || product.stockQty > 0);
    const frameInfo = getFrameInfo(product.frameColor);
    const hasFrame = product.frameColor && product.frameColor !== 'none';
    const frameBadgeHtml = hasFrame
      ? `<span class="absolute bottom-2 left-2 sm:bottom-2.5 sm:left-2.5 ${frameInfo.badgeBg} text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-lg border shadow-xs z-10">${frameInfo.emoji} ${frameInfo.label}</span>`
      : '';

    const isWish = isWishlisted(product.id);
    const wishlistBtnHtml = `
      <button 
        type="button"
        onclick="handleWishlistButtonClick(${product.id}, event)" 
        title="${isWish ? 'កែសម្រួល ឬដកចេញពីបញ្ជីពេញចិត្ត' : 'ជ្រើសរើសទំហំរក្សាទុកក្នុងបញ្ជីពេញចិត្ត'}" 
        class="btn-wishlist absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-20 w-8 h-8 rounded-full bg-white/95 hover:bg-white backdrop-blur-md flex items-center justify-center text-xs sm:text-sm shadow-md transition-all active:scale-90 cursor-pointer ${isWish ? 'active text-rose-500 scale-110' : 'text-slate-400 hover:text-rose-500'}">
        <span>${isWish ? '❤️' : '🤍'}</span>
      </button>
    `;

    const compareBtnHtml = `
      <button 
        type="button"
        onclick="event.stopPropagation(); quickToggleCompare(${product.id})" 
        title="ប្រៀបធៀបទំនិញនេះជាមួយផ្ទាំងផ្សេង" 
        class="btn-compare absolute top-2 right-11 sm:top-2.5 sm:right-11.5 z-20 w-8 h-8 rounded-full bg-white/95 hover:bg-white backdrop-blur-md flex items-center justify-center text-xs shadow-md transition-all active:scale-90 cursor-pointer text-slate-600 hover:text-blue-600">
        <span>⚖️</span>
      </button>
    `;

    const isLowStock = isAvailable && product.stockQty !== undefined && product.stockQty <= 5 && product.stockQty > 0;
    const lowStockBadgeHtml = isLowStock
      ? `<span class="badge-low-stock absolute top-8 left-2 sm:top-10 sm:left-3 z-10 bg-amber-500 text-white font-bold text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span><span>សល់ ${product.stockQty}</span></span>`
      : '';

    // Visual header: Photo or Gradient Emoji (Clickable to open image popup)
    const visualHeader = product.imageUrl 
      ? `
        <div onclick="openImageModal(${product.id})" title="ចុចដើម្បីពិនិត្យរូបភាពធំ" class="relative h-36 sm:h-52 select-none overflow-hidden bg-slate-100 flex items-center justify-center cursor-pointer group ${hasFrame ? 'p-1.5 sm:p-2' : ''}">
          <span class="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 ${catBadgeClass} shadow-xs text-[10px] sm:text-xs">
            ${product.categoryLabel || 'ទំនិញ'}
          </span>
          ${lowStockBadgeHtml}
          ${wishlistBtnHtml}
          ${compareBtnHtml}
          ${product.badge ? `<span class="hidden sm:inline-block absolute top-3 right-20 z-10 bg-white/95 backdrop-blur-md text-slate-800 font-bold text-[11px] px-2.5 py-0.5 rounded-full shadow-xs border border-slate-100">${product.badge}</span>` : ''}
          <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg ${frameInfo.class || ''}">
          
          ${frameBadgeHtml}

          <!-- Zoom indicator (desktop & mobile) -->
          <div onclick="event.stopPropagation(); openImageLightbox(${product.id})" title="ចុចដើម្បីពង្រីកធំពេញអេក្រង់" class="flex absolute bottom-8 sm:bottom-9 right-1.5 sm:right-2 bg-slate-950/75 hover:bg-slate-950 text-white text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg backdrop-blur-md items-center gap-1 shadow-md opacity-90 group-hover:opacity-100 hover:scale-105 active:scale-95 transition z-20 cursor-pointer">
            <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
            </svg>
            <span>ពង្រីក</span>
          </div>

          <!-- Bottom Branding Bar: Logo & Telegram QR Code (0319711333) -->
          <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent pt-3.5 pb-1 px-1.5 sm:px-2 flex items-center justify-between text-white z-10 pointer-events-auto">
            <!-- Left: Website Logo -->
            <div class="flex items-center gap-1 sm:gap-1.5 min-w-0">
              <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white p-0.5 shadow-sm ring-1 ring-white/60 overflow-hidden flex-shrink-0 flex items-center justify-center">
                <img src="logo.png" alt="EduShop" class="w-full h-full object-contain">
              </div>
              <div class="flex flex-col min-w-0 leading-none text-left">
                <span class="text-[9px] sm:text-[10.5px] font-black text-amber-300 truncate drop-shadow-xs">EduShop</span>
                <span class="text-[7px] sm:text-[8px] text-slate-300 font-medium truncate hidden min-[360px]:inline">សម្ភារៈអប់រំ</span>
              </div>
            </div>

            <!-- Right: Telegram QR Code & 0964361201 -->
            <div onclick="event.stopPropagation(); window.open('https://t.me/+855964361201', '_blank')" class="flex items-center gap-1 sm:gap-1.5 flex-shrink-0 cursor-pointer group/tg" title="ស្កេន ឬចុចចូល Telegram (096 436 1201)">
              <div class="flex flex-col text-right leading-none">
                <span class="text-[7px] sm:text-[8px] text-sky-300 font-bold flex items-center justify-end gap-0.5">
                  <span>✈️</span> <span class="hidden min-[380px]:inline">Telegram</span>
                </span>
                <span class="text-[8px] sm:text-[9.5px] font-mono font-bold text-white tracking-tight">0964361201</span>
              </div>
              <div class="w-6 h-6 sm:w-7 sm:h-7 bg-white p-0.5 rounded-md shadow-md ring-1 ring-sky-400 overflow-hidden flex-shrink-0 group-hover/tg:scale-110 transition-transform">
                <img src="telegram_qr.png" alt="Telegram QR" class="w-full h-full object-contain">
              </div>
            </div>
          </div>
        </div>
      `
      : (() => {
        const isWhite = product.iconBg && product.iconBg.includes('white');
        return `
        <div onclick="openImageModal(${product.id})" title="ចុចដើម្បីពិនិត្យរូបភាពធំ" class="relative bg-gradient-to-br ${product.iconBg || 'from-sky-400 to-blue-500'} ${isWhite ? 'border-b border-slate-200 text-slate-800' : 'text-white'} p-4 sm:p-6 flex flex-col items-center justify-center h-36 sm:h-52 select-none cursor-pointer group ${frameInfo.class || ''} overflow-hidden">
          <span class="absolute top-2 left-2 sm:top-3 sm:left-3 ${catBadgeClass} shadow-xs text-[10px] sm:text-xs">
            ${product.categoryLabel || 'ទំនិញ'}
          </span>
          ${lowStockBadgeHtml}
          ${wishlistBtnHtml}
          ${compareBtnHtml}
          ${product.badge ? `<span class="hidden sm:inline-block absolute top-3 right-20 bg-white/95 backdrop-blur-md text-slate-800 font-bold text-[11px] px-2.5 py-0.5 rounded-full shadow-xs">${product.badge}</span>` : ''}
          
          <div class="text-4xl sm:text-6xl transform group-hover:scale-110 transition duration-300 drop-shadow-md mb-2">
            ${product.iconEmoji || '📦'}
          </div>
          ${product.material ? `<span class="text-[10px] sm:text-xs ${isWhite ? 'bg-slate-100 text-slate-700 border border-slate-200' : 'text-white/90 bg-black/25'} mt-1 sm:mt-2 font-bold px-2.5 sm:px-3 py-0.5 rounded-full truncate max-w-[90%]">${product.material}</span>` : ''}

          ${frameBadgeHtml}

          <!-- Zoom indicator (desktop & mobile) -->
          <div onclick="event.stopPropagation(); openImageLightbox(${product.id})" title="ចុចដើម្បីពង្រីកធំពេញអេក្រង់" class="flex absolute bottom-8 sm:bottom-9 right-1.5 sm:right-2 ${isWhite ? 'bg-slate-800/80 hover:bg-slate-900 text-white' : 'bg-black/45 hover:bg-black/60 text-white'} text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg backdrop-blur-md items-center gap-1 shadow-md opacity-85 group-hover:opacity-100 hover:scale-105 active:scale-95 transition z-20 cursor-pointer">
            <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
            </svg>
            <span>ពង្រីក</span>
          </div>

          <!-- Bottom Branding Bar: Logo & Telegram QR Code (0319711333) -->
          <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent pt-3.5 pb-1 px-1.5 sm:px-2 flex items-center justify-between text-white z-10 pointer-events-auto">
            <!-- Left: Website Logo -->
            <div class="flex items-center gap-1 sm:gap-1.5 min-w-0">
              <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white p-0.5 shadow-sm ring-1 ring-white/60 overflow-hidden flex-shrink-0 flex items-center justify-center">
                <img src="logo.png" alt="EduShop" class="w-full h-full object-contain">
              </div>
              <div class="flex flex-col min-w-0 leading-none text-left">
                <span class="text-[9px] sm:text-[10.5px] font-black text-amber-300 truncate drop-shadow-xs">EduShop</span>
                <span class="text-[7px] sm:text-[8px] text-slate-300 font-medium truncate hidden min-[360px]:inline">សម្ភារៈអប់រំ</span>
              </div>
            </div>

            <!-- Right: Telegram QR Code & 0964361201 -->
            <div onclick="event.stopPropagation(); window.open('https://t.me/+855964361201', '_blank')" class="flex items-center gap-1 sm:gap-1.5 flex-shrink-0 cursor-pointer group/tg" title="ស្កេន ឬចុចចូល Telegram (096 436 1201)">
              <div class="flex flex-col text-right leading-none">
                <span class="text-[7px] sm:text-[8px] text-sky-300 font-bold flex items-center justify-end gap-0.5">
                  <span>✈️</span> <span class="hidden min-[380px]:inline">Telegram</span>
                </span>
                <span class="text-[8px] sm:text-[9.5px] font-mono font-bold text-white tracking-tight">0964361201</span>
              </div>
              <div class="w-6 h-6 sm:w-7 sm:h-7 bg-white p-0.5 rounded-md shadow-md ring-1 ring-sky-400 overflow-hidden flex-shrink-0 group-hover/tg:scale-110 transition-transform">
                <img src="telegram_qr.png" alt="Telegram QR" class="w-full h-full object-contain">
              </div>
            </div>
          </div>
        </div>
      `;
      })()
      ;

    // Action buttons based on stock status
    const actionButtons = isAvailable
      ? `
        <div class="space-y-1.5 sm:space-y-2 mt-2 sm:mt-3.5">
          <!-- Primary order & cart row -->
          <div class="flex items-center gap-1.5 sm:gap-2">
            <button 
              onclick="openOrderModal(${product.id})"
              class="flex-1 btn-primary-glow font-bold py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95">
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              <span class="truncate">បញ្ជាទិញ</span>
            </button>

            <button 
              onclick="addToCart(${product.id})"
              title="ដាក់ក្នុងកន្ត្រក"
              class="bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-800 font-bold py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-xl text-xs transition border border-slate-200/90 flex items-center justify-center gap-1 flex-shrink-0 cursor-pointer">
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span class="hidden sm:inline">+ កន្ត្រក</span>
            </button>
          </div>

          <!-- Audio Preview & Quick Telegram Order buttons -->
          <div class="flex items-center gap-1.5 mt-1 sm:mt-1.5">
            <button 
              type="button"
              onclick="playPosterAudioPreview(${product.id})"
              title="ស្ដាប់សំឡេងអាន/ណែនាំគំរូ"
              class="flex-1 bg-amber-50 hover:bg-amber-100 active:scale-95 text-amber-800 font-bold py-1.5 px-2 rounded-xl text-[10.5px] sm:text-xs transition flex items-center justify-center gap-1 border border-amber-200/80 shadow-2xs cursor-pointer">
              <span class="text-xs">🔊</span>
              <span class="truncate">ស្ដាប់សំឡេង</span>
            </button>
            <button 
              type="button"
              onclick="quickTelegramOrder(${product.id})"
              title="ឆាតកុម្ម៉ង់ភ្លាមៗតាម Telegram"
              class="flex-1 bg-sky-50 hover:bg-sky-100 active:scale-95 text-sky-700 font-bold py-1.5 px-2 rounded-xl text-[10.5px] sm:text-xs transition flex items-center justify-center gap-1 border border-sky-200 shadow-2xs cursor-pointer">
              <svg class="w-3.5 h-3.5 fill-sky-600 flex-shrink-0" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
              <span class="truncate">Telegram</span>
            </button>
          </div>
        </div>
      `
      : `
        <button disabled class="w-full bg-slate-100 text-slate-400 font-bold py-2 px-3 rounded-xl text-xs cursor-not-allowed border border-slate-200 flex items-center justify-center gap-1 mt-2 sm:mt-3.5">
          <span>⚠️ អស់ស្តុក</span>
        </button>
      `;

    return `
      <div class="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 hover:border-sky-400 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 card-hover-effect flex flex-col justify-between group relative">
        
        <!-- Product Visual Card Header -->
        ${visualHeader}

        <!-- Product Info Body -->
        <div class="p-3 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <!-- Title -->
            <h3 class="font-bold text-slate-900 text-xs sm:text-base leading-snug group-hover:text-sky-600 transition-colors cursor-pointer line-clamp-2" onclick="${isAvailable ? `openOrderModal(${product.id})` : ''}">
              ${product.name}
            </h3>

            <!-- Size / Dimensions & Waterproof Tag -->
            <div class="mt-2 sm:mt-3 flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <div class="size-tag text-[10px] sm:text-xs py-1 px-2 rounded-xl bg-slate-50 border border-slate-200">
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                </svg>
                <span class="font-medium text-slate-600 hidden sm:inline">ទំហំ៖</span>
                <span class="font-bold text-slate-900 font-display">${product.size}</span>
              </div>
              <span class="inline-flex items-center gap-1 text-[9.5px] sm:text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200/80 font-bold whitespace-nowrap">💧 មិនជ្រាបទឹក</span>
            </div>

            <!-- Quick standard sizes for decor/posters (Visible on tablet/desktop) -->
            ${(product.category === 'decor' || (product.size && product.size.includes('cm'))) ? `
              <div class="hidden sm:flex items-center gap-1.5 flex-wrap mt-2.5">
                <span class="text-[10px] text-slate-400 font-bold">ទំហំរហ័ស៖</span>
                ${getProductAvailableSizes(product).slice(0, 3).map(s => `
                  <button type="button" onclick="openOrderModalWithSize(${product.id}, '${s.size}', ${s.priceUSD}, ${s.priceKHR})" title="កុម្ម៉ង់ទំហំ ${s.size}" class="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-50 hover:bg-sky-50 hover:text-sky-700 text-slate-700 border border-slate-200 transition cursor-pointer">
                    ${s.name || s.size} (${formatKHR(s.priceKHR)})
                  </button>
                `).join('')}
              </div>
            ` : ''}

            <!-- Description -->
            <p class="text-[11px] sm:text-xs text-slate-500 mt-1.5 sm:mt-2.5 line-clamp-1 sm:line-clamp-2 leading-relaxed">
              ${product.description || ''}
            </p>
          </div>

          <!-- Price & Order Action Area -->
          <div class="mt-3 sm:mt-4 pt-2.5 sm:pt-3.5 border-t border-slate-100">
            <!-- Price Display -->
            <div class="flex items-baseline justify-between mb-1.5 sm:mb-2">
              <div>
                <span class="text-[10px] sm:text-xs text-slate-400 block font-medium">តម្លៃទំនិញ</span>
                <div class="flex items-baseline gap-1 sm:gap-1.5">
                  <span class="text-sm sm:text-xl font-black text-sky-600 font-display tracking-tight">${formatUSD(product.priceUSD)}</span>
                  <span class="text-[10px] sm:text-xs font-semibold text-slate-500">(${formatKHR(product.priceKHR)})</span>
                </div>
              </div>
              
              ${isAvailable 
                ? `<span class="text-[9.5px] sm:text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full font-bold border border-emerald-200/80 whitespace-nowrap">✓ មានស្តុក</span>`
                : `<span class="text-[9.5px] sm:text-xs px-2 py-0.5 bg-rose-50 text-rose-700 rounded-full font-bold border border-rose-200/80 whitespace-nowrap">✕ អស់ស្តុក</span>`
              }
            </div>

            <!-- Buttons -->
            ${actionButtons}

          </div>
        </div>

      </div>
    `;
  }).join('');
}

// Mobile View Mode (2-column Grid vs 1-column List)
let mobileViewMode = localStorage.getItem('kimleang_mobile_view') || 'grid';

function setMobileViewMode(mode) {
  mobileViewMode = mode;
  localStorage.setItem('kimleang_mobile_view', mode);
  updateMobileViewModeUI();
}

function updateMobileViewModeUI() {
  const gridEl = document.getElementById('products-grid');
  const gridBtn = document.getElementById('grid-view-btn');
  const listBtn = document.getElementById('list-view-btn');

  if (!gridEl) return;

  if (mobileViewMode === 'list') {
    gridEl.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-6';
    if (listBtn) {
      listBtn.className = 'p-1.5 rounded-lg border bg-sky-50 border-sky-300 text-sky-700 sm:hidden transition cursor-pointer';
    }
    if (gridBtn) {
      gridBtn.className = 'p-1.5 rounded-lg border bg-white border-slate-200 text-slate-600 sm:hidden transition cursor-pointer';
    }
  } else {
    gridEl.className = 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6';
    if (gridBtn) {
      gridBtn.className = 'p-1.5 rounded-lg border bg-sky-50 border-sky-300 text-sky-700 sm:hidden transition cursor-pointer';
    }
    if (listBtn) {
      listBtn.className = 'p-1.5 rounded-lg border bg-white border-slate-200 text-slate-600 sm:hidden transition cursor-pointer';
    }
  }
}

// Category Filtering
function setCategory(category) {
  currentCategory = category;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    const isActive = (btn.dataset.category === category);
    if (isActive) {
      btn.className = 'cat-btn flex-shrink-0 md:w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 bg-sky-600 text-white shadow-md shadow-sky-200 cursor-pointer active';
    } else {
      btn.className = 'cat-btn flex-shrink-0 md:w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 cursor-pointer';
    }
  });
  renderProducts();

  // Keep active category button smoothly centered in scroll view on mobile
  const activeBtn = document.querySelector(`.cat-btn[data-category="${category}"]`);
  const catContainer = document.getElementById('category-buttons-container');
  if (activeBtn && catContainer && window.innerWidth < 768) {
    try {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } catch (_) {}
  }

  // Smooth scroll to products grid on mobile so user sees the filtered products
  if (window.innerWidth < 768) {
    const grid = document.getElementById('products-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

// Category Horizontal Scroll Helper for Mobile/Touch
function scrollCategories(direction) {
  const container = document.getElementById('category-buttons-container');
  if (container) {
    const scrollAmount = direction === 'left' ? -220 : 220;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// Reset All Filters
function resetAllFilters() {
  currentCategory = 'all';
  currentSizeFilter = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.dataset.category === 'all') {
      btn.className = 'cat-btn flex-shrink-0 md:w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 bg-sky-600 text-white shadow-md shadow-sky-200 cursor-pointer active';
    } else {
      btn.className = 'cat-btn flex-shrink-0 md:w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 cursor-pointer';
    }
  });

  document.querySelectorAll('.size-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-size-filter') === 'all') {
      btn.className = 'size-filter-btn px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-semibold bg-sky-600 text-white shadow-2xs whitespace-nowrap transition cursor-pointer text-[11px] sm:text-xs';
    } else {
      btn.className = 'size-filter-btn px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-medium bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 whitespace-nowrap transition cursor-pointer text-[11px] sm:text-xs';
    }
  });

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'popular';
  currentSort = 'popular';

  currentGradeFilter = 'all';
  currentSubjectFilter = 'all';
  document.querySelectorAll('.grade-filter-btn').forEach(btn => {
    btn.className = btn.getAttribute('data-grade') === 'all' 
      ? 'grade-filter-btn px-2.5 py-1 rounded-xl font-bold bg-sky-600 text-white text-[11px] cursor-pointer shadow-2xs' 
      : 'grade-filter-btn px-2.5 py-1 rounded-xl font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 text-[11px] cursor-pointer';
  });
  document.querySelectorAll('.subject-filter-btn').forEach(btn => {
    btn.className = btn.getAttribute('data-subject') === 'all' 
      ? 'subject-filter-btn px-2.5 py-1 rounded-xl font-bold bg-amber-500 text-white text-[11px] cursor-pointer shadow-2xs' 
      : 'subject-filter-btn px-2.5 py-1 rounded-xl font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 text-[11px] cursor-pointer';
  });

  const catContainer = document.getElementById('category-buttons-container');
  if (catContainer) {
    catContainer.scrollTo({ left: 0, behavior: 'smooth' });
  }

  renderProducts();
}

let currentGradeFilter = 'all';
let currentSubjectFilter = 'all';

function setGradeFilter(grade) {
  currentGradeFilter = grade;
  document.querySelectorAll('.grade-filter-btn').forEach(btn => {
    const g = btn.getAttribute('data-grade');
    if (g === grade) {
      btn.className = 'grade-filter-btn px-2.5 py-1 rounded-xl font-bold bg-sky-600 text-white text-[11px] cursor-pointer shadow-2xs';
    } else {
      btn.className = 'grade-filter-btn px-2.5 py-1 rounded-xl font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 text-[11px] cursor-pointer';
    }
  });
  renderProducts();
}

function setSubjectFilter(subject) {
  currentSubjectFilter = subject;
  document.querySelectorAll('.subject-filter-btn').forEach(btn => {
    const s = btn.getAttribute('data-subject');
    if (s === subject) {
      btn.className = 'subject-filter-btn px-2.5 py-1 rounded-xl font-bold bg-amber-500 text-white text-[11px] cursor-pointer shadow-2xs';
    } else {
      btn.className = 'subject-filter-btn px-2.5 py-1 rounded-xl font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 text-[11px] cursor-pointer';
    }
  });
  renderProducts();
}

// Size Filtering
function setSizeFilter(size) {
  currentSizeFilter = size;
  document.querySelectorAll('.size-filter-btn').forEach(btn => {
    const isThis = btn.getAttribute('data-size-filter') === size;
    const isGreen = btn.getAttribute('data-size-filter') === 'green-frame';
    if (isThis) {
      if (isGreen) {
        btn.className = 'size-filter-btn px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-bold bg-emerald-600 text-white shadow-2xs border border-emerald-600 whitespace-nowrap transition cursor-pointer text-[11px] sm:text-xs';
      } else {
        btn.className = 'size-filter-btn px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-semibold bg-sky-600 text-white shadow-2xs whitespace-nowrap transition cursor-pointer text-[11px] sm:text-xs';
      }
    } else {
      if (isGreen) {
        btn.className = 'size-filter-btn px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-semibold bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-200 whitespace-nowrap transition cursor-pointer text-[11px] sm:text-xs';
      } else {
        btn.className = 'size-filter-btn px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-medium bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 whitespace-nowrap transition cursor-pointer text-[11px] sm:text-xs';
      }
    }
  });
  renderProducts();
}

// Sort Option
function setSortOption(sort) {
  currentSort = sort;
  renderProducts();
}

// Focus Search Input from mobile bottom nav
function focusSearchInput() {
  const input = document.getElementById('search-input');
  if (input) {
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => input.focus(), 300);
  }
}

// Quick 1-Click Telegram Order from Product Card
function quickTelegramOrder(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  
  const frameInfo = getFrameInfo(product.frameColor);
  const frameText = (product.frameColor && product.frameColor !== 'none') ? ` [${frameInfo.label}]` : '';
  const text = `ជំរាបសួរ EduShop! 👋\nខ្ញុំចង់កុម្ម៉ង់ទំនិញ៖\n📦 ${product.name}${frameText}\n📐 ទំហំ៖ ${product.size}\n💰 តម្លៃ៖ ${formatUSD(product.priceUSD)} (${formatKHR(product.priceKHR)})\n\nសូមជួយផ្ញើព័ត៌មានបន្ថែម និងការដឹកជញ្ជូន។ សូមអរគុណ!`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
  showToast(`បានចម្លងព័ត៌មានទំនិញ! កំពុងបើក Telegram... 💬`);

  window.open(`https://t.me/+855964361201`, '_blank');
}

// Quick Telegram Order from Image Preview Modal
function orderViaTelegramFromModal() {
  if (!activeImageModalProductId) return;
  const product = productsData.find(p => p.id === activeImageModalProductId);
  if (!product) return;

  const currentSize = document.getElementById('img-modal-size')?.textContent || product.size;
  const currentPriceUsd = document.getElementById('img-modal-price-usd')?.textContent || formatUSD(product.priceUSD);
  const currentPriceKhr = document.getElementById('img-modal-price-khr')?.textContent || `(${formatKHR(product.priceKHR)})`;
  const frameInfo = getFrameInfo(product.frameColor);
  const frameText = (product.frameColor && product.frameColor !== 'none') ? ` [${frameInfo.label}]` : '';

  const text = `ជំរាបសួរ EduShop! 👋\nខ្ញុំចង់កុម្ម៉ង់ទំនិញ៖\n📦 ${product.name}${frameText}\n📐 ទំហំ៖ ${currentSize}\n💰 តម្លៃ៖ ${currentPriceUsd} ${currentPriceKhr}\n\nសូមជួយផ្ញើព័ត៌មានបន្ថែម និងការដឹកជញ្ជូន។ សូមអរគុណ!`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
  showToast(`បានចម្លងព័ត៌មានទំនិញ! កំពុងបើក Telegram... 💬`);

  window.open(`https://t.me/+855964361201`, '_blank');
}

// Open Order Modal directly with chosen size
function openOrderModalWithSize(productId, size, priceUSD, priceKHR) {
  openOrderModal(productId, false);
  selectOrderSize(size, priceUSD, priceKHR, false);
}

// Search Handler
function handleSearch(term) {
  searchQuery = term.trim();
  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) {
    if (searchQuery) clearBtn.classList.remove('hidden');
    else clearBtn.classList.add('hidden');
  }
  renderProducts();
}

function setQuickSearch(term) {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = term;
    searchInput.focus();
  }
  handleSearch(term);
  const target = document.getElementById('products-grid');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function clearSearchInput() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }
  handleSearch('');
}

// Toast Notifications
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-xl text-sm font-medium text-white transition-all transform duration-300 animate-bounce-soft ${
    type === 'success' ? 'bg-slate-900 border border-slate-700' : 'bg-rose-600'
  }`;
  toast.innerHTML = `
    <span class="text-emerald-400 font-bold">✓</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2400);
}

// Add Item to Cart (supports custom size & prices)
function addToCart(productId, customSize = null, customPriceUSD = null, customPriceKHR = null) {
  const baseProduct = productsData.find(p => p.id === productId);
  if (!baseProduct) return;

  const product = customSize ? {
    ...baseProduct,
    size: customSize,
    priceUSD: customPriceUSD !== null && customPriceUSD !== undefined ? customPriceUSD : baseProduct.priceUSD,
    priceKHR: customPriceKHR !== null && customPriceKHR !== undefined ? customPriceKHR : baseProduct.priceKHR
  } : baseProduct;

  const existing = cart.find(item => item.product.id === productId && (!customSize || item.product.size === customSize));
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  updateCartBadge();
  renderCartDrawer();
  showToast(`បានបន្ថែម «${product.name.slice(0, 20)}...» (${product.size}) ទៅក្នុងកន្ត្រក!`);
}

// Update Cart Badge
function updateCartBadge() {
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (cartCountBadge) {
    cartCountBadge.textContent = count;
    if (count > 0) {
      cartCountBadge.classList.remove('scale-0');
      cartCountBadge.classList.add('scale-100');
    } else {
      cartCountBadge.classList.remove('scale-100');
      cartCountBadge.classList.add('scale-0');
    }
  }

  const mobBadge = document.getElementById('mobile-cart-badge');
  if (mobBadge) {
    mobBadge.textContent = count;
    if (count > 0) {
      mobBadge.classList.remove('scale-0');
      mobBadge.classList.add('scale-100');
    } else {
      mobBadge.classList.remove('scale-100');
      mobBadge.classList.add('scale-0');
    }
  }

  const modalCartBadge = document.getElementById('order-modal-cart-badge');
  if (modalCartBadge) {
    modalCartBadge.textContent = count;
    if (count > 0) {
      modalCartBadge.classList.remove('hidden');
    } else {
      modalCartBadge.classList.add('hidden');
    }
  }
}

// ==============================================================================
// 1. BULK / WHOLESALE TIER DISCOUNTS ENGINE (សម្រាប់សាលារៀន និងលោកគ្រូ-អ្នកគ្រូ)
// 5-9 items: 5% off | 10-19 items: 10% off | 20+ items: 15% off (VIP សាលារៀន)
// ==============================================================================

const BULK_DISCOUNT_STORAGE_KEY = 'edushop_bulk_discount_settings';

const DEFAULT_BULK_DISCOUNT_SETTINGS = {
  enabled: true,
  badgeTitle: 'ប្រព័ន្ធបញ្ចុះតម្លៃទិញដុំសាលា',
  tier1: {
    minUnits: 5,
    percent: 5,
    label: 'កម្រិតទិញដុំដំបូង (បញ្ចុះ 5%)'
  },
  tier2: {
    minUnits: 10,
    percent: 10,
    label: 'កម្រិតទិញដុំមធ្យម (បញ្ចុះ 10%)'
  },
  tier3: {
    minUnits: 20,
    percent: 15,
    label: 'កម្រិត VIP សាលារៀន (បញ្ចុះ 15%)'
  }
};

function getStoredBulkDiscountSettings() {
  try {
    const raw = localStorage.getItem(BULK_DISCOUNT_STORAGE_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_BULK_DISCOUNT_SETTINGS));
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return JSON.parse(JSON.stringify(DEFAULT_BULK_DISCOUNT_SETTINGS));
    return {
      enabled: parsed.enabled !== false,
      badgeTitle: parsed.badgeTitle || DEFAULT_BULK_DISCOUNT_SETTINGS.badgeTitle,
      tier1: {
        minUnits: Math.max(1, parseInt(parsed.tier1?.minUnits, 10) || DEFAULT_BULK_DISCOUNT_SETTINGS.tier1.minUnits),
        percent: Math.max(0, parseFloat(parsed.tier1?.percent) || DEFAULT_BULK_DISCOUNT_SETTINGS.tier1.percent),
        label: parsed.tier1?.label || DEFAULT_BULK_DISCOUNT_SETTINGS.tier1.label
      },
      tier2: {
        minUnits: Math.max(1, parseInt(parsed.tier2?.minUnits, 10) || DEFAULT_BULK_DISCOUNT_SETTINGS.tier2.minUnits),
        percent: Math.max(0, parseFloat(parsed.tier2?.percent) || DEFAULT_BULK_DISCOUNT_SETTINGS.tier2.percent),
        label: parsed.tier2?.label || DEFAULT_BULK_DISCOUNT_SETTINGS.tier2.label
      },
      tier3: {
        minUnits: Math.max(1, parseInt(parsed.tier3?.minUnits, 10) || DEFAULT_BULK_DISCOUNT_SETTINGS.tier3.minUnits),
        percent: Math.max(0, parseFloat(parsed.tier3?.percent) || DEFAULT_BULK_DISCOUNT_SETTINGS.tier3.percent),
        label: parsed.tier3?.label || DEFAULT_BULK_DISCOUNT_SETTINGS.tier3.label
      }
    };
  } catch (e) {
    return JSON.parse(JSON.stringify(DEFAULT_BULK_DISCOUNT_SETTINGS));
  }
}

function getBulkDiscountInfo(totalUnits, rawUSD, rawKHR) {
  totalUnits = Math.max(0, parseInt(totalUnits, 10) || 0);
  rawUSD = Math.max(0, parseFloat(rawUSD) || 0);
  rawKHR = Math.max(0, parseFloat(rawKHR) || 0);

  const cfg = (typeof getStoredBulkDiscountSettings === 'function') 
    ? getStoredBulkDiscountSettings() 
    : DEFAULT_BULK_DISCOUNT_SETTINGS;

  if (cfg.enabled === false) {
    return {
      tier: 0,
      percent: 0,
      label: 'តម្លៃធម្មតា',
      nextTierUnits: 0,
      nextTierPercent: 0,
      hintText: '',
      discountUSD: 0,
      discountKHR: 0,
      payableUSD: rawUSD,
      payableKHR: rawKHR,
      totalUnits,
      progressPercent: 0,
      badgeTitle: cfg.badgeTitle
    };
  }

  const t1 = cfg.tier1;
  const t2 = cfg.tier2;
  const t3 = cfg.tier3;

  let tier = 0;
  let percent = 0;
  let label = 'តម្លៃធម្មតា';
  let nextTierUnits = 0;
  let nextTierPercent = t1.percent;
  let hintText = '';

  if (totalUnits >= t3.minUnits) {
    tier = 3;
    percent = t3.percent;
    label = t3.label || `កម្រិត VIP សាលារៀន (បញ្ចុះ ${percent}%)`;
    nextTierUnits = 0;
    nextTierPercent = percent;
    hintText = `🎉 អបអរសាទរ! អ្នកទទួលបានការបញ្ចុះតម្លៃពិសេសកម្រិតខ្ពស់បំផុត ${percent}% សម្រាប់សាលារៀន!`;
  } else if (totalUnits >= t2.minUnits) {
    tier = 2;
    percent = t2.percent;
    label = t2.label || `កម្រិតទិញដុំមធ្យម (បញ្ចុះ ${percent}%)`;
    nextTierUnits = t3.minUnits - totalUnits;
    nextTierPercent = t3.percent;
    hintText = `ទិញថែម ${nextTierUnits} ផ្ទាំងទៀត ដើម្បីទទួលបានការបញ្ចុះតម្លៃ VIP ${nextTierPercent}%!`;
  } else if (totalUnits >= t1.minUnits) {
    tier = 1;
    percent = t1.percent;
    label = t1.label || `កម្រិតទិញដុំដំបូង (បញ្ចុះ ${percent}%)`;
    nextTierUnits = t2.minUnits - totalUnits;
    nextTierPercent = t2.percent;
    hintText = `ទិញថែម ${nextTierUnits} ផ្ទាំងទៀត ដើម្បីទទួលបានការបញ្ចុះតម្លៃ ${nextTierPercent}%!`;
  } else {
    tier = 0;
    percent = 0;
    label = 'មិនទាន់ដល់កម្រិតបញ្ចុះតម្លៃ';
    nextTierUnits = t1.minUnits - totalUnits;
    nextTierPercent = t1.percent;
    hintText = `💡 ទិញថែម ${nextTierUnits} ផ្ទាំងទៀត ដើម្បីទទួលបានការបញ្ចុះតម្លៃដុំ ${nextTierPercent}%!`;
  }

  const discountUSD = Number((rawUSD * (percent / 100)).toFixed(2));
  const discountKHR = Math.round(rawKHR * (percent / 100));
  const maxTargetUnits = Math.max(1, t3.minUnits);
  const progressPercent = Math.min(100, Math.round((totalUnits / maxTargetUnits) * 100));

  return {
    tier,
    percent,
    label,
    nextTierUnits,
    nextTierPercent,
    hintText,
    discountUSD,
    discountKHR,
    payableUSD: Math.max(0, Number((rawUSD - discountUSD).toFixed(2))),
    payableKHR: Math.max(0, rawKHR - discountKHR),
    totalUnits,
    progressPercent,
    badgeTitle: cfg.badgeTitle
  };
}

// Sync Free School & Grade Engraving Box with cust-custom-text
function syncSchoolEngraveText() {
  const schoolInput = document.getElementById('cust-engrave-school');
  const gradeInput = document.getElementById('cust-engrave-grade');
  const customTextInput = document.getElementById('cust-custom-text');
  if (!customTextInput) return;

  const school = schoolInput ? schoolInput.value.trim() : '';
  const grade = gradeInput ? gradeInput.value.trim() : '';

  let combined = '';
  if (school && grade) {
    combined = `[សាលា៖ ${school}] [ថ្នាក់/គ្រូ៖ ${grade}]`;
  } else if (school) {
    combined = `[សាលា៖ ${school}]`;
  } else if (grade) {
    combined = `[ថ្នាក់/គ្រូ៖ ${grade}]`;
  }

  customTextInput.value = combined;
}

// Share Formal Quotation / Proposal for School Principal Approval via Telegram
function shareCartForPrincipalApproval() {
  if (cart.length === 0) {
    showToast("សូមជ្រើសរើសទំនិញចូលកន្ត្រកជាមុនសិន មុននឹងផ្ញើសំណើជូននាយកសាលា!", "error");
    return;
  }

  const rawUSD = cart.reduce((acc, i) => acc + (i.product.priceUSD * i.quantity), 0);
  const rawKHR = cart.reduce((acc, i) => acc + (i.product.priceKHR * i.quantity), 0);
  const totalUnits = cart.reduce((acc, i) => acc + i.quantity, 0);
  const bulkInfo = getBulkDiscountInfo(totalUnits, rawUSD, rawKHR);

  const today = new Date().toLocaleDateString('km-KH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  let propText = `📋 សំណើទិញសម្ភារៈ និងផ្ទាំងរូបភាពអប់រំសម្រាប់សាលារៀន\n`;
  propText += `(EduShop Official School Proposal / Quotation)\n`;
  propText += `----------------------------------------\n`;
  propText += `📅 កាលបរិច្ឆេទ: ${today}\n`;
  propText += `📦 ចំនួនមុខទំនិញសរុប: ${cart.length} មុខ (${totalUnits} ផ្ទាំង)\n\n`;
  propText += `📝 បញ្ជីមុខទំនិញស្នើសុំជាវ៖\n`;

  cart.forEach((item, idx) => {
    const fInfo = getFrameInfo(item.product.frameColor);
    const frameTxt = (item.product.frameColor && item.product.frameColor !== 'none') ? ` [${fInfo.label}]` : '';
    const itemTotal = item.product.priceUSD * item.quantity;
    propText += `${idx + 1}. ${item.product.name}${frameTxt}\n`;
    propText += `   - ទំហំ: ${item.product.size} | ចំនួន: ${item.quantity} | តម្លៃ: ${formatUSD(itemTotal)}\n`;
  });

  propText += `----------------------------------------\n`;
  propText += `💵 តម្លៃទំនិញដើមសរុប (Subtotal): ${formatUSD(rawUSD)} (${formatKHR(rawKHR)})\n`;
  if (bulkInfo.percent > 0) {
    propText += `🎁 បញ្ចុះតម្លៃទិញដុំសាលារៀន (-${bulkInfo.percent}%): -${formatUSD(bulkInfo.discountUSD)} (-${formatKHR(bulkInfo.discountKHR)})\n`;
  }
  propText += `🚚 សេវាដឹកជញ្ជូនប៉ាន់ស្មាន: ផ្ញើជូនដល់មុខសាលារៀន ឬសាខាទូទាំង ២៥ ខេត្ត-ក្រុង\n`;
  propText += `💰 តម្លៃស្នើសុំទូទាត់សរុប: ${formatUSD(bulkInfo.payableUSD)} (${formatKHR(bulkInfo.payableKHR)})\n`;
  propText += `----------------------------------------\n`;
  propText += `✨ សេវាឆ្លាក់ឈ្មោះសាលា & ថ្នាក់រៀន: ឥតគិតថ្លៃ 100% (Free Engraving)\n`;
  propText += `📞 ទំនាក់ទំនងម្ចាស់ហាង: 031 97 11 333 / 096 436 1201 (Telegram)\n`;
  propText += `🌐 ឆាតតាម Telegram: https://t.me/+855964361201\n`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(propText).catch(() => {});
  }

  showToast("📋 បានចម្លងសំណើជូននាយកសាលារួចរាល់! កំពុងបើក Telegram...", "success");

  const tgShareUrl = `https://t.me/share/url?url=${encodeURIComponent('https://t.me/+855964361201')}&text=${encodeURIComponent(propText)}`;
  setTimeout(() => {
    window.open(tgShareUrl, '_blank');
  }, 400);
}

// Open Direct Image Lightbox (Classroom showcase, real wall decor inspection)
function openDirectImageLightbox(imageSrc, title, subtitle) {
  const modal = document.getElementById('image-lightbox-modal');
  if (!modal) return;

  activeLightboxProductId = null;

  const titleEl = document.getElementById('lightbox-title');
  const sizeEl = document.getElementById('lightbox-size');
  const frameEl = document.getElementById('lightbox-frame-badge');
  const priceKhrEl = document.getElementById('lightbox-price-khr');
  const priceUsdEl = document.getElementById('lightbox-price-usd');
  const imgEl = document.getElementById('lightbox-img');
  const orderBtn = document.getElementById('lightbox-order-btn');
  const cartBtn = document.getElementById('lightbox-cart-btn');

  if (titleEl) titleEl.textContent = title || 'រូបភាពជាក់ស្តែងក្នុងថ្នាក់រៀន';
  if (sizeEl) sizeEl.textContent = subtitle || '📸 បំពាក់ជាក់ស្តែងនៅសាលារៀន';
  if (frameEl) {
    frameEl.textContent = '✨ គុណភាពពិត ១០០%';
    frameEl.classList.remove('hidden');
  }

  if (priceKhrEl) priceKhrEl.textContent = 'EduShop Cambodia';
  if (priceUsdEl) priceUsdEl.textContent = '(រូបភាពជាក់ស្តែង)';

  const existingPlaceholder = document.getElementById('lightbox-placeholder');
  if (existingPlaceholder) existingPlaceholder.remove();

  if (imgEl) {
    imgEl.src = imageSrc;
    imgEl.alt = title || 'Classroom Setup';
    imgEl.style.display = 'block';
  }

  if (orderBtn) {
    orderBtn.disabled = false;
    orderBtn.className = 'px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-md shadow-emerald-500/30 flex items-center gap-1 cursor-pointer active:scale-95';
    orderBtn.innerHTML = '<span>💬 សាកសួរ Telegram</span> ➔';
    orderBtn.onclick = function() {
      closeImageLightbox();
      window.open('https://t.me/+855964361201', '_blank');
    };
  }

  if (cartBtn) {
    cartBtn.style.display = 'flex';
    cartBtn.innerHTML = '🛒 <span>មើលទំនិញ</span>';
    cartBtn.onclick = function() {
      closeImageLightbox();
      window.scrollTo({ top: 450, behavior: 'smooth' });
    };
  }

  const hint = document.getElementById('lightbox-touch-hint');
  if (hint) hint.style.opacity = '1';

  lightboxResetZoom();
  modal.classList.remove('hidden');
  initLightboxGesturesOnce();
  updateBodyScrollLock();
}

// Render Cart Drawer
function renderCartDrawer() {
  const subtotalEl = document.getElementById('cart-subtotal-usd');
  const discountRow = document.getElementById('cart-wholesale-discount-row');
  const percentTag = document.getElementById('cart-wholesale-percent-tag');
  const discUsdEl = document.getElementById('cart-wholesale-discount-usd');
  const discKhrEl = document.getElementById('cart-wholesale-discount-khr');
  const progressBar = document.getElementById('cart-wholesale-progress-bar');
  const statusTag = document.getElementById('cart-wholesale-status-tag');
  const hintEl = document.getElementById('cart-wholesale-hint');
  const m1 = document.getElementById('tier-milestone-1');
  const m2 = document.getElementById('tier-milestone-2');
  const m3 = document.getElementById('tier-milestone-3');

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="text-center py-14 px-4">
        <div class="w-18 h-18 mx-auto rounded-3xl bg-sky-50 text-sky-500 flex items-center justify-center text-4xl mb-3 border border-sky-100 shadow-2xs">
          🛒
        </div>
        <h4 class="font-bold text-slate-800 text-sm sm:text-base">មិនទាន់មានទំនិញក្នុងកន្ត្រកទេ</h4>
        <p class="text-xs text-slate-400 mt-1 max-w-xs mx-auto">សូមជ្រើសរើសផ្ទាំងរូបភាព ឬសម្ភារៈអប់រំដែលអ្នកពេញចិត្ត</p>
        <button onclick="toggleCart(false); window.scrollTo({top: 450, behavior: 'smooth'});" class="mt-4 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition shadow-xs cursor-pointer active:scale-95">
          ✨ រុករកទំនិញពេញនិយម
        </button>
      </div>
    `;
    cartTotalUSD.textContent = '$0.00';
    cartTotalKHR.textContent = '0 ៛';
    if (subtotalEl) subtotalEl.textContent = '$0.00';
    if (discountRow) discountRow.classList.add('hidden');
    if (progressBar) progressBar.style.width = '0%';
    if (statusTag) {
      statusTag.textContent = '0% Off';
      statusTag.className = 'text-[10.5px] font-extrabold px-2 py-0.5 rounded-full bg-slate-400 text-white shadow-2xs';
    }
    if (hintEl) hintEl.textContent = '💡 ទិញចាប់ពី ៥ ផ្ទាំងឡើងទៅ ទទួលបានការបញ្ចុះតម្លៃ 5% ភ្លាមៗ!';
    if (m1) m1.className = 'text-slate-400';
    if (m2) m2.className = 'text-slate-400';
    if (m3) m3.className = 'text-slate-400';
    return;
  }

  let totalUSD = 0;
  let totalKHR = 0;

  cartItemsContainer.innerHTML = cart.map((item, idx) => {
    const itemTotalUSD = item.product.priceUSD * item.quantity;
    const itemTotalKHR = item.product.priceKHR * item.quantity;
    totalUSD += itemTotalUSD;
    totalKHR += itemTotalKHR;

    const fInfo = getFrameInfo(item.product.frameColor);
    const frameSmClass = (item.product.frameColor && item.product.frameColor !== 'none') ? (fInfo.classSm || '') : '';
    const thumb = item.product.imageUrl 
      ? `<img src="${item.product.imageUrl}" onclick="openImageLightbox(${item.product.id})" title="ចុចដើម្បីពង្រីកធំ" class="w-13 h-13 rounded-xl object-cover border border-slate-200 flex-shrink-0 cursor-zoom-in hover:opacity-90 shadow-2xs transition ${frameSmClass}">`
      : `<div onclick="openImageLightbox(${item.product.id})" title="ចុចដើម្បីពង្រីកធំ" class="w-13 h-13 rounded-xl bg-gradient-to-br ${item.product.iconBg || 'from-sky-400 to-blue-500'} flex items-center justify-center text-xl text-white flex-shrink-0 cursor-zoom-in hover:opacity-90 shadow-2xs transition ${frameSmClass}">
           ${item.product.iconEmoji || '📦'}
         </div>`;

    return `
      <div class="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200/90 hover:border-sky-300 shadow-2xs transition group">
        ${thumb}
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-slate-900 truncate group-hover:text-sky-700 transition">${item.product.name}</h4>
          <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
            <span class="text-[10.5px] text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md font-semibold border border-sky-200/60">ទំហំ៖ ${item.product.size}</span>
            ${(item.product.frameColor && item.product.frameColor !== 'none') ? `
              <span class="text-[10px] ${fInfo.badgeBg || 'bg-slate-100 text-slate-700 border-slate-200'} px-1.5 py-0.5 rounded-md font-semibold border">
                ${fInfo.emoji} ${fInfo.label}
              </span>
            ` : ''}
            ${item.product.customText ? `<span class="text-[10px] text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded-md font-semibold border border-amber-200/60 truncate max-w-[120px]">✏️ ${item.product.customText}</span>` : ''}
          </div>
          <div class="text-xs font-bold text-slate-800 mt-1 flex items-baseline gap-1">
            <span class="text-sky-600 font-display">${formatUSD(item.product.priceUSD)}</span>
            <span class="text-[10px] text-slate-400 font-normal">(${formatKHR(item.product.priceKHR)})</span>
          </div>
        </div>
        
        <div class="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-xl p-0.5 shadow-2xs">
          <button onclick="changeCartQty(${idx}, -1)" class="w-7 h-7 rounded-lg flex items-center justify-center text-slate-700 hover:bg-white active:scale-95 font-bold text-sm cursor-pointer transition">-</button>
          <span class="text-xs font-bold px-1 min-w-[20px] text-center font-display text-slate-900">${item.quantity}</span>
          <button onclick="changeCartQty(${idx}, 1)" class="w-7 h-7 rounded-lg flex items-center justify-center text-slate-700 hover:bg-white active:scale-95 font-bold text-sm cursor-pointer transition">+</button>
        </div>

        <button onclick="removeCartItem(${idx})" class="text-slate-400 hover:text-rose-600 active:scale-95 p-1.5 rounded-xl hover:bg-rose-50 transition cursor-pointer" title="ដកចេញពីកន្ត្រក">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      </div>
    `;
  }).join('');

  const totalUnits = cart.reduce((acc, i) => acc + i.quantity, 0);
  const bulkInfo = getBulkDiscountInfo(totalUnits, totalUSD, totalKHR);

  if (subtotalEl) subtotalEl.textContent = formatUSD(totalUSD);

  let payableUSD = totalUSD;
  let payableKHR = totalKHR;

  if (bulkInfo.percent > 0) {
    if (discountRow) discountRow.classList.remove('hidden');
    if (percentTag) percentTag.textContent = `${bulkInfo.percent}%`;
    if (discUsdEl) discUsdEl.textContent = formatUSD(bulkInfo.discountUSD);
    if (discKhrEl) discKhrEl.textContent = formatKHR(bulkInfo.discountKHR);
    payableUSD = bulkInfo.payableUSD;
    payableKHR = bulkInfo.payableKHR;
  } else {
    if (discountRow) discountRow.classList.add('hidden');
  }

  // Active Coupon in Cart
  const couponRow = document.getElementById('cart-coupon-discount-row');
  const couponNameTag = document.getElementById('cart-coupon-name-tag');
  const couponDiscUsdEl = document.getElementById('cart-coupon-discount-usd');
  const couponDiscKhrEl = document.getElementById('cart-coupon-discount-khr');
  const couponBadge = document.getElementById('cart-coupon-badge');
  const couponBadgeText = document.getElementById('cart-coupon-text');

  if (appliedCoupon && payableUSD > 0) {
    let cDiscUSD = 0;
    let cDiscKHR = 0;
    if (appliedCoupon.type === 'percent') {
      cDiscUSD = parseFloat(((payableUSD * appliedCoupon.value) / 100).toFixed(2));
      cDiscKHR = Math.round((payableKHR * appliedCoupon.value) / 100);
    } else {
      cDiscUSD = appliedCoupon.valueUSD || 0;
      cDiscKHR = appliedCoupon.valueKHR || 0;
    }
    cDiscUSD = Math.min(cDiscUSD, payableUSD);
    cDiscKHR = Math.min(cDiscKHR, payableKHR);

    appliedCoupon.discountUSD = cDiscUSD;
    appliedCoupon.discountKHR = cDiscKHR;

    if (couponRow) {
      couponRow.classList.remove('hidden');
      if (couponNameTag) couponNameTag.textContent = appliedCoupon.code;
      if (couponDiscUsdEl) couponDiscUsdEl.textContent = formatUSD(cDiscUSD);
      if (couponDiscKhrEl) couponDiscKhrEl.textContent = formatKHR(cDiscKHR);
    }
    if (couponBadge) {
      couponBadge.classList.remove('hidden');
      if (couponBadgeText) couponBadgeText.textContent = `✓ បានអនុវត្តកូដ ${appliedCoupon.code} (-${formatUSD(cDiscUSD)})`;
    }

    payableUSD = Math.max(0, parseFloat((payableUSD - cDiscUSD).toFixed(2)));
    payableKHR = Math.max(0, payableKHR - cDiscKHR);
  } else {
    if (couponRow) couponRow.classList.add('hidden');
    if (couponBadge) couponBadge.classList.add('hidden');
  }

  cartTotalUSD.textContent = formatUSD(payableUSD);
  cartTotalKHR.textContent = formatKHR(payableKHR);

  // Update tier progress card
  const tierCard = document.getElementById('cart-wholesale-tier-card');
  const bulkCfg = (typeof getStoredBulkDiscountSettings === 'function') ? getStoredBulkDiscountSettings() : null;
  if (tierCard) {
    if (bulkCfg && bulkCfg.enabled === false) {
      tierCard.classList.add('hidden');
    } else {
      tierCard.classList.remove('hidden');
    }
  }

  const badgeTextEl = document.getElementById('cart-wholesale-badge-text');
  if (badgeTextEl && bulkInfo.badgeTitle) {
    badgeTextEl.textContent = bulkInfo.badgeTitle;
  }

  if (progressBar) progressBar.style.width = `${bulkInfo.progressPercent}%`;
  if (statusTag) {
    statusTag.textContent = bulkInfo.percent > 0 ? `-${bulkInfo.percent}% Off` : '0% Off';
    if (bulkInfo.tier === 3) {
      statusTag.className = 'text-[10.5px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-2xs';
    } else if (bulkInfo.tier > 0) {
      statusTag.className = 'text-[10.5px] font-extrabold px-2 py-0.5 rounded-full bg-amber-600 text-white shadow-2xs';
    } else {
      statusTag.className = 'text-[10.5px] font-extrabold px-2 py-0.5 rounded-full bg-slate-400 text-white shadow-2xs';
    }
  }
  if (hintEl) hintEl.textContent = bulkInfo.hintText;

  const t1Min = bulkCfg?.tier1?.minUnits || 5;
  const t2Min = bulkCfg?.tier2?.minUnits || 10;
  const t3Min = bulkCfg?.tier3?.minUnits || 20;
  const t1Pct = bulkCfg?.tier1?.percent || 5;
  const t2Pct = bulkCfg?.tier2?.percent || 10;
  const t3Pct = bulkCfg?.tier3?.percent || 15;

  if (m1) {
    m1.textContent = `${t1Min} ផ្ទាំង (-${t1Pct}%)`;
    m1.className = totalUnits >= t1Min ? 'text-amber-600 font-bold' : 'text-slate-400';
  }
  if (m2) {
    m2.textContent = `${t2Min} ផ្ទាំង (-${t2Pct}%)`;
    m2.className = totalUnits >= t2Min ? 'text-amber-600 font-bold' : 'text-slate-400';
  }
  if (m3) {
    m3.textContent = `${t3Min}+ ផ្ទាំង (-${t3Pct}%)`;
    m3.className = totalUnits >= t3Min ? 'text-emerald-600 font-extrabold' : 'text-slate-400';
  }
}

// Change Quantity in Cart (Index-based with ID fallback)
function changeCartQty(target, delta) {
  let item = null;
  let itemIndex = -1;
  if (typeof target === 'number' && target >= 0 && target < cart.length && target === Math.floor(target)) {
    itemIndex = target;
    item = cart[target];
  } else {
    itemIndex = cart.findIndex(i => i.product.id === target);
    if (itemIndex > -1) item = cart[itemIndex];
  }
  if (!item || itemIndex === -1) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart.splice(itemIndex, 1);
  }
  updateCartBadge();
  renderCartDrawer();
}

// Remove Item from Cart (Index-based with ID fallback)
function removeCartItem(target) {
  if (typeof target === 'number' && target >= 0 && target < cart.length && target === Math.floor(target)) {
    cart.splice(target, 1);
  } else {
    cart = cart.filter(i => i.product.id !== target);
  }
  updateCartBadge();
  renderCartDrawer();
  showToast("បានលុបទំនិញចេញពីកន្ត្រក");
}

// Universal Body Scroll Lock for Modals & Drawers (Cross-device PC / Mobile iOS Safari / Android)
function updateBodyScrollLock() {
  const modalSelectors = [
    '#order-modal',
    '#image-lightbox-modal',
    '#image-preview-modal',
    '#order-success-modal',
    '#bank-selector-modal',
    '#wishlist-modal',
    '#wishlist-size-modal',
    '#order-tracking-modal',
    '#customer-receipt-modal',
    '#product-catalogue-modal',
    '#quick-order-modal',
    '#school-quotation-modal',
    '#cart-drawer-backdrop',
    '#mobile-save-qr-modal',
    '#khqr-lightbox-modal',
    '#bank-launch-helper-modal',
    '#receipt-slip-fullscreen-overlay',
    '#user-theme-modal',
    '#user-wallpaper-modal',
    '#website-qr-modal',
    '#wall-decor-picker-modal',
    '#student-certificate-modal',
    '#school-budget-calculator-modal',
    '#classroom-showcase-modal',
    '#free-resources-modal',
    '#lucky-spin-modal',
    '#student-nametag-modal',
    '#product-compare-modal',
    '#classroom-upload-modal',
    '#courier-finder-modal',
    '#proforma-invoice-modal',
    '#classroom-wall-studio-modal',
    '#tracing-worksheet-modal',
    '#curriculum-bundles-modal',
    '#customer-order-tracker-modal',
    '#teacher-loyalty-modal'
  ];

  const isAnyModalOpen = modalSelectors.some(selector => {
    const el = document.querySelector(selector);
    return el && !el.classList.contains('hidden');
  });

  if (isAnyModalOpen) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
}

// Toggle Cart Drawer
function toggleCart(open) {
  if (open) {
    cartDrawer.classList.remove('translate-x-full');
    cartDrawerBackdrop.classList.remove('hidden');
    renderCartDrawer();
  } else {
    cartDrawer.classList.add('translate-x-full');
    cartDrawerBackdrop.classList.add('hidden');
  }
  updateBodyScrollLock();
}

// ================= IMAGE PREVIEW POPUP MODAL =================
let activeImageModalProductId = null;
let isCustomSizeActive = false;
let userCustomW = 120;
let userCustomL = 150;

// Calculate Customer Custom Dimensions & Price (5 Presets + 1m² = 20,000 ៛)
function calculateCustomDimensions(w, l) {
  const width = parseFloat(w) || 0;
  const length = parseFloat(l) || 0;
  if (width <= 0 || length <= 0) {
    return { width, length, area: 0, areaM2: '0.00', priceKHR: 0, priceUSD: 0, isValid: false };
  }

  const minD = Math.min(width, length);
  const maxD = Math.max(width, length);

  // Exact matches for the 5 official standard presets
  if (minD === 40 && maxD === 60) {
    return { width, length, area: 2400, areaM2: '0.24', priceKHR: 5000, priceUSD: 1.25, isValid: width <= 160 };
  }
  if (minD === 60 && maxD === 80) {
    return { width, length, area: 4800, areaM2: '0.48', priceKHR: 10000, priceUSD: 2.50, isValid: width <= 160 };
  }
  if (minD === 80 && maxD === 100) {
    return { width, length, area: 8000, areaM2: '0.80', priceKHR: 15000, priceUSD: 3.75, isValid: width <= 160 };
  }
  if (minD === 60 && maxD === 200) {
    return { width, length, area: 12000, areaM2: '1.20', priceKHR: 25000, priceUSD: 6.25, isValid: width <= 160 };
  }
  if (minD === 80 && maxD === 250) {
    return { width, length, area: 20000, areaM2: '2.00', priceKHR: 40000, priceUSD: 10.00, isValid: width <= 160 };
  }

  // ចំពោះទំហំផ្សេង ត្រូវគិតតម្លៃ 1 ម៉ែត្រការេ = 20,000 ៛ ($5.00)
  const area = width * length; // cm²
  const areaM2Val = area / 10000;
  let khr = Math.round((areaM2Val * 20000) / 100) * 100;
  if (khr < 1000) khr = 1000; // Minimum floor price
  const usd = parseFloat((khr / 4000).toFixed(2));
  return {
    width,
    length,
    area,
    areaM2: areaM2Val.toFixed(2),
    priceKHR: khr,
    priceUSD: usd,
    isValid: width <= 160
  };
}

function openImageModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  activeImageModalProductId = productId;
  const modal = document.getElementById('image-preview-modal');
  if (!modal) return;

  document.getElementById('img-modal-title').textContent = product.name;
  document.getElementById('img-modal-category').textContent = product.categoryLabel || 'ទំនិញ';
  
  const badgeEl = document.getElementById('img-modal-badge');
  if (product.badge) {
    badgeEl.textContent = product.badge;
    badgeEl.classList.remove('hidden');
  } else {
    badgeEl.classList.add('hidden');
  }

  document.getElementById('img-modal-size').textContent = product.size;
  document.getElementById('img-modal-price-usd').textContent = formatUSD(product.priceUSD);
  document.getElementById('img-modal-price-khr').textContent = `(${formatKHR(product.priceKHR)})`;
  document.getElementById('img-modal-desc').textContent = product.description || 'មិនមានការពណ៌នាបន្ថែម';

  // Dynamic Teacher Review for Social Proof
  const quoteEl = document.getElementById('img-modal-review-quote');
  if (quoteEl) {
    const list = TEACHER_REVIEWS[product.category] || TEACHER_REVIEWS['decor'];
    const rev = list[product.id % list.length] || list[0];
    quoteEl.innerHTML = `${rev.quote} — <strong class="font-semibold text-slate-900 not-italic">${rev.author}</strong>`;
  }

  const frameInfo = getFrameInfo(product.frameColor);
  const frameBadgeContainer = document.getElementById('img-modal-frame-badge');
  if (frameBadgeContainer) {
    if (product.frameColor && product.frameColor !== 'none') {
      frameBadgeContainer.innerHTML = `
        <span class="text-xs text-slate-500 font-medium">ប្រភេទស៊ុម៖</span>
        <span class="text-xs font-bold px-2.5 py-1 rounded-lg border ${frameInfo.badgeBg} shadow-2xs">${frameInfo.emoji} ${frameInfo.label}</span>
      `;
      frameBadgeContainer.classList.remove('hidden');
    } else {
      frameBadgeContainer.innerHTML = '';
      frameBadgeContainer.classList.add('hidden');
    }
  }

  const frameIndicator = document.getElementById('img-modal-frame-selected-indicator');
  if (frameIndicator) {
    frameIndicator.textContent = `${frameInfo.emoji} ${frameInfo.label}`;
    frameIndicator.className = `text-[10px] font-bold ${frameInfo.badgeBg || 'text-slate-500'}`;
  }

  const frameModalBtns = document.querySelectorAll('#img-modal-frame-options button');
  frameModalBtns.forEach(b => {
    const fnStr = b.getAttribute('onclick') || '';
    const curColor = product.frameColor || 'none';
    const isSel = fnStr.includes(`'${curColor}'`);
    if (isSel) {
      if (curColor === 'green') {
        b.className = 'p-1.5 rounded-lg bg-emerald-50 border-2 border-emerald-500 shadow-xs transition text-left cursor-pointer text-[10.5px] font-bold text-emerald-800';
      } else {
        b.className = 'p-1.5 rounded-lg bg-sky-50 border-2 border-sky-500 shadow-xs transition text-left cursor-pointer text-[10.5px] font-bold text-sky-800';
      }
    } else {
      b.className = 'p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 shadow-2xs transition text-left cursor-pointer text-[10.5px] font-semibold text-slate-700';
    }
  });

  const visualContainer = document.getElementById('img-modal-visual-container');
  if (product.imageUrl) {
    const frameClass = frameInfo.classLg || 'border border-slate-200';
    visualContainer.innerHTML = `
      <div onclick="openImageLightbox(${product.id})" title="ចុចដើម្បីពង្រីកធំពេញអេក្រង់" class="relative group cursor-zoom-in flex items-center justify-center w-full overflow-hidden rounded-2xl bg-slate-900/10">
        <img src="${product.imageUrl}" alt="${product.name}" class="max-h-[52vh] w-auto max-w-full rounded-2xl object-contain shadow-lg ${frameClass} bg-white group-hover:scale-[1.01] transition duration-200">
        
        <!-- Bottom Branding Bar: Logo & Telegram QR Code (0319711333) -->
        <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent pt-6 pb-2.5 px-3 sm:px-4 flex items-center justify-between text-white z-10 pointer-events-auto">
          <!-- Left: Website Logo & Brand -->
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white p-0.5 shadow-md ring-2 ring-white/60 overflow-hidden flex-shrink-0 flex items-center justify-center">
              <img src="logo.png" alt="EduShop" class="w-full h-full object-contain">
            </div>
            <div class="min-w-0 text-left">
              <div class="text-xs sm:text-sm font-black text-amber-300 leading-tight truncate">EduShop Cambodia</div>
              <div class="text-[9.5px] sm:text-[10.5px] text-slate-300 font-medium truncate hidden xs:block">សម្ភារៈតុបតែងថ្នាក់ & សម្ភារៈបង្រៀនខ្មែរ</div>
            </div>
          </div>

          <!-- Right: Telegram QR Code & 0964361201 -->
          <a href="https://t.me/+855964361201" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-900 px-2 sm:px-2.5 py-1 rounded-xl border border-sky-400/50 shadow-md group transition flex-shrink-0" title="ចុចដើម្បីចូល Telegram 096 436 1201">
            <div class="text-right leading-tight">
              <div class="text-[9px] sm:text-[10px] text-sky-300 font-bold flex items-center justify-end gap-1">
                <span>✈️</span> <span>Telegram QR</span>
              </div>
              <div class="text-xs sm:text-sm font-mono font-bold text-white tracking-wide">096 436 1201</div>
            </div>
            <div class="w-10 h-10 sm:w-11 sm:h-11 bg-white p-0.5 rounded-lg shadow ring-1 ring-sky-400 overflow-hidden flex-shrink-0 group-hover:scale-105 transition">
              <img src="telegram_qr.png" alt="Telegram QR" class="w-full h-full object-contain">
            </div>
          </a>
        </div>

        <button type="button" onclick="event.stopPropagation(); openImageLightbox(${product.id})" class="absolute top-2.5 right-2.5 bg-slate-900/85 hover:bg-slate-950 text-white text-xs font-semibold px-2.5 py-1.5 rounded-xl backdrop-blur-md flex items-center gap-1.5 shadow-lg border border-white/20 transition active:scale-95 cursor-pointer z-20">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
          </svg>
          <span>⛶ ពង្រីកធំ</span>
        </button>
      </div>
    `;
  } else {
    const isWhite = product.iconBg && product.iconBg.includes('white');
    const frameClass = frameInfo.classLg || '';
    visualContainer.innerHTML = `
      <div onclick="openImageLightbox(${product.id})" title="ចុចដើម្បីពង្រីកធំពេញអេក្រង់" class="relative group cursor-zoom-in w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-br ${product.iconBg || 'from-sky-400 to-blue-500'} ${isWhite ? 'border border-slate-200 text-slate-800' : 'text-white'} flex flex-col items-center justify-center shadow-inner p-6 ${frameClass} overflow-hidden">
        <span class="text-8xl sm:text-9xl drop-shadow-xl animate-bounce-soft mb-4">${product.iconEmoji || '📦'}</span>
        ${product.material ? `<span class="text-xs font-semibold ${isWhite ? 'bg-slate-100 text-slate-700 border border-slate-200' : 'bg-black/25 text-white'} px-4 py-1.5 rounded-full mb-6">${product.material}</span>` : ''}
        
        <!-- Bottom Branding Bar: Logo & Telegram QR Code (0319711333) -->
        <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent pt-6 pb-2.5 px-3 sm:px-4 flex items-center justify-between text-white z-10 pointer-events-auto">
          <!-- Left: Website Logo & Brand -->
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white p-0.5 shadow-md ring-2 ring-white/60 overflow-hidden flex-shrink-0 flex items-center justify-center">
              <img src="logo.png" alt="EduShop" class="w-full h-full object-contain">
            </div>
            <div class="min-w-0 text-left">
              <div class="text-xs sm:text-sm font-black text-amber-300 leading-tight truncate">EduShop Cambodia</div>
              <div class="text-[9.5px] sm:text-[10.5px] text-slate-300 font-medium truncate hidden xs:block">សម្ភារៈតុបតែងថ្នាក់ & សម្ភារៈបង្រៀនខ្មែរ</div>
            </div>
          </div>

          <!-- Right: Telegram QR Code & 0964361201 -->
          <a href="https://t.me/+855964361201" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-900 px-2 sm:px-2.5 py-1 rounded-xl border border-sky-400/50 shadow-md group transition flex-shrink-0" title="ចុចដើម្បីចូល Telegram 096 436 1201">
            <div class="text-right leading-tight">
              <div class="text-[9px] sm:text-[10px] text-sky-300 font-bold flex items-center justify-end gap-1">
                <span>✈️</span> <span>Telegram QR</span>
              </div>
              <div class="text-xs sm:text-sm font-mono font-bold text-white tracking-wide">096 436 1201</div>
            </div>
            <div class="w-10 h-10 sm:w-11 sm:h-11 bg-white p-0.5 rounded-lg shadow ring-1 ring-sky-400 overflow-hidden flex-shrink-0 group-hover:scale-105 transition">
              <img src="telegram_qr.png" alt="Telegram QR" class="w-full h-full object-contain">
            </div>
          </a>
        </div>

        <button type="button" onclick="event.stopPropagation(); openImageLightbox(${product.id})" class="absolute top-2.5 right-2.5 bg-slate-900/85 hover:bg-slate-950 text-white text-xs font-semibold px-2.5 py-1.5 rounded-xl backdrop-blur-md flex items-center gap-1.5 shadow-lg border border-white/20 transition active:scale-95 cursor-pointer z-20">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
          </svg>
          <span>⛶ ពង្រីកធំ</span>
        </button>
      </div>
    `;
  }

  // Hook Order button
  const orderBtn = document.getElementById('img-modal-order-btn');
  const cartBtn = document.getElementById('img-modal-cart-btn');

  if (product.inStock !== false) {
    orderBtn.disabled = false;
    orderBtn.className = 'flex-1 py-2.5 sm:py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-md shadow-sky-200 transition flex items-center justify-center gap-1.5';
    orderBtn.innerHTML = `
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
      </svg>
      <span>បញ្ជាទិញទំនិញនេះ</span>
    `;
    orderBtn.onclick = () => {
      closeImageModal();
      openOrderModal(product.id, false);
    };

    if (cartBtn) {
      cartBtn.style.display = 'flex';
      cartBtn.onclick = () => {
        addToCart(product.id);
      };
    }
  } else {
    orderBtn.disabled = true;
    orderBtn.className = 'flex-1 py-2.5 sm:py-3 px-4 rounded-xl bg-slate-200 text-slate-400 text-xs sm:text-sm font-medium cursor-not-allowed flex items-center justify-center';
    orderBtn.innerHTML = '⚠️ អស់ពីស្តុកបណ្តោះអាសន្ន';
    if (cartBtn) cartBtn.style.display = 'none';
  }

  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

function selectFromImageModal(size, priceUSD, priceKHR, isCustom = false) {
  if (!activeImageModalProductId) return;
  const pId = activeImageModalProductId;
  closeImageModal();
  openOrderModal(pId, isCustom);
  if (!isCustom && size) {
    selectOrderSize(size, priceUSD, priceKHR, false);
  }
}

function selectFromImageModalFrame(frameColor) {
  if (!activeImageModalProductId) return;
  const product = productsData.find(p => p.id === activeImageModalProductId);
  if (!product) return;
  product.frameColor = frameColor;
  openImageModal(product.id);
}

function closeImageModal() {
  const modal = document.getElementById('image-preview-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function handleImageModalBackdrop(e) {
  if (e.target.id === 'image-preview-modal') {
    closeImageModal();
  }
}

// =========================================================================
// FULLSCREEN IMAGE LIGHTBOX & ZOOM ENGINE (ពង្រីកទំនិញពេញអេក្រង់កម្រិតខ្ពស់)
// =========================================================================
let activeLightboxProductId = null;
let lightboxScale = 1;
let lightboxPanX = 0;
let lightboxPanY = 0;
let isLightboxDragging = false;
let lightboxDragStartX = 0;
let lightboxDragStartY = 0;
let lightboxInitialPanX = 0;
let lightboxInitialPanY = 0;
let lightboxInitialPinchDist = null;
let lightboxInitialScale = 1;
let lightboxLastTapTime = 0;
let lightboxGesturesBound = false;

function openImageLightbox(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  activeLightboxProductId = productId;
  const modal = document.getElementById('image-lightbox-modal');
  if (!modal) return;

  const titleEl = document.getElementById('lightbox-title');
  const sizeEl = document.getElementById('lightbox-size');
  const frameEl = document.getElementById('lightbox-frame-badge');
  const priceKhrEl = document.getElementById('lightbox-price-khr');
  const priceUsdEl = document.getElementById('lightbox-price-usd');
  const imgEl = document.getElementById('lightbox-img');
  const wrapperEl = document.getElementById('lightbox-image-wrapper');
  const orderBtn = document.getElementById('lightbox-order-btn');
  const cartBtn = document.getElementById('lightbox-cart-btn');

  if (titleEl) titleEl.textContent = product.name;
  if (sizeEl) sizeEl.textContent = `ទំហំ៖ ${product.size || '40 cm x 60 cm'}`;

  const frameInfo = getFrameInfo(product.frameColor);
  if (frameEl) {
    if (product.frameColor && product.frameColor !== 'none') {
      frameEl.textContent = `• ${frameInfo.emoji} ${frameInfo.label}`;
      frameEl.classList.remove('hidden');
    } else {
      frameEl.textContent = '';
      frameEl.classList.add('hidden');
    }
  }

  if (priceKhrEl) priceKhrEl.textContent = formatKHR(product.priceKHR);
  if (priceUsdEl) priceUsdEl.textContent = `(${formatUSD(product.priceUSD)})`;

  const existingPlaceholder = document.getElementById('lightbox-placeholder');
  if (existingPlaceholder) existingPlaceholder.remove();

  if (product.imageUrl) {
    if (imgEl) {
      imgEl.src = product.imageUrl;
      imgEl.alt = product.name;
      imgEl.style.display = 'block';
    }
  } else {
    if (imgEl) imgEl.style.display = 'none';
    if (wrapperEl) {
      const placeholder = document.createElement('div');
      placeholder.id = 'lightbox-placeholder';
      placeholder.className = `w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br ${product.iconBg || 'from-sky-400 to-blue-500'} flex flex-col items-center justify-center text-white shadow-2xl p-6 select-none`;
      placeholder.innerHTML = `
        <span class="text-8xl sm:text-9xl drop-shadow-xl animate-bounce-soft">${product.iconEmoji || '📦'}</span>
        ${product.material ? `<span class="mt-4 text-xs font-semibold bg-black/25 px-4 py-1.5 rounded-full">${product.material}</span>` : ''}
      `;
      wrapperEl.appendChild(placeholder);
    }
  }

  // Stock status for order/cart buttons
  if (product.inStock === false) {
    if (orderBtn) {
      orderBtn.disabled = true;
      orderBtn.className = 'px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-slate-700 text-slate-400 text-xs font-semibold cursor-not-allowed';
      orderBtn.innerHTML = '⚠️ អស់ស្តុក';
    }
    if (cartBtn) cartBtn.style.display = 'none';
  } else {
    if (orderBtn) {
      orderBtn.disabled = false;
      orderBtn.className = 'px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold transition shadow-md shadow-sky-500/30 flex items-center gap-1 cursor-pointer active:scale-95';
      orderBtn.innerHTML = '<span>បញ្ជាទិញ</span> ➔';
      orderBtn.onclick = orderCurrentLightboxItem;
    }
    if (cartBtn) {
      cartBtn.style.display = 'flex';
      cartBtn.innerHTML = '🛒 <span class="hidden sm:inline">ដាក់កន្ត្រក</span>';
      cartBtn.onclick = addCurrentLightboxToCart;
    }
  }

  // Show touch hint
  const hint = document.getElementById('lightbox-touch-hint');
  if (hint) hint.style.opacity = '1';

  lightboxResetZoom();
  modal.classList.remove('hidden');
  initLightboxGesturesOnce();
  updateBodyScrollLock();
}

function closeImageLightbox() {
  const modal = document.getElementById('image-lightbox-modal');
  if (modal) modal.classList.add('hidden');
  activeLightboxProductId = null;
  lightboxResetZoom();
  updateBodyScrollLock();
}

// Download Product Image composited with Logo & Telegram QR (0319711333) with bulletproof fallbacks
async function downloadCurrentLightboxImage() {
  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const prod = activeLightboxProductId ? productsData.find(p => p.id === activeLightboxProductId) : null;
  const prodName = (titleEl && titleEl.textContent) ? titleEl.textContent.trim() : ((prod && prod.name) ? prod.name : 'edushop_product');
  const cleanName = prodName.replace(/[\s\W]+/g, '_').replace(/^_+|_+$/g, '') || 'product';
  const filename = `edushop_${cleanName}.jpg`;

  showToast('⏳ កំពុងរៀបចំទាញយករូបភាព...', 'sky');

  function triggerSave(urlOrBlob, downloadName) {
    if (!urlOrBlob) return false;
    try {
      if (typeof urlOrBlob === 'string') {
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = urlOrBlob;
        link.download = downloadName;
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          if (link.parentNode) link.parentNode.removeChild(link);
        }, 1000);
        return true;
      } else if (urlOrBlob instanceof Blob) {
        const blobUrl = URL.createObjectURL(urlOrBlob);
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = blobUrl;
        link.download = downloadName;
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          if (link.parentNode) link.parentNode.removeChild(link);
          URL.revokeObjectURL(blobUrl);
        }, 2000);
        return true;
      }
    } catch (e) {
      console.warn('triggerSave error:', e);
    }
    return false;
  }

  async function fallbackDirectDownload() {
    const rawSrc = (imgEl && imgEl.style.display !== 'none' && imgEl.src && imgEl.src !== window.location.href)
      ? imgEl.src
      : ((prod && prod.imageUrl) ? prod.imageUrl : '');

    if (rawSrc) {
      try {
        const res = await fetch(rawSrc).catch(() => null);
        if (res && res.ok) {
          const blob = await res.blob();
          if (triggerSave(blob, filename)) {
            showToast('🎉 បានទាញយករូបភាពទំនិញជោគជ័យ!');
            return true;
          }
        }
      } catch (_) {}

      try {
        if (triggerSave(rawSrc, filename)) {
          showToast('🎉 បានទាញយករូបភាពទំនិញជោគជ័យ!');
          return true;
        }
      } catch (_) {}

      try {
        window.open(rawSrc, '_blank');
        showToast('📥 បានបើករូបភាពក្នុងផ្ទាំងថ្មី សូមចុចរក្សាទុក (Save image as...)', 'sky');
        return true;
      } catch (_) {}
    }
    return false;
  }

  try {
    const canvas = document.createElement('canvas');
    let width = 1000;
    let height = 1000;
    let baseImg = null;

    const hasPhoto = imgEl && imgEl.style.display !== 'none' && imgEl.src && imgEl.src !== window.location.href;

    if (hasPhoto) {
      if (imgEl.complete && imgEl.naturalWidth > 0) {
        width = imgEl.naturalWidth;
        height = imgEl.naturalHeight;
        baseImg = imgEl;
      } else {
        try {
          baseImg = await new Promise((res, rej) => {
            const i = new Image();
            i.onload = () => res(i);
            i.onerror = () => rej(new Error('img-fail'));
            i.src = imgEl.src;
          });
          width = baseImg.naturalWidth || 1000;
          height = baseImg.naturalHeight || 1000;
        } catch (e) {
          console.warn('baseImg load warning:', e);
        }
      }
    }

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (baseImg) {
      ctx.drawImage(baseImg, 0, 0, width, height);
    } else {
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#0284c7');
      bgGrad.addColorStop(1, '#1e3a8a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${Math.round(height * 0.22)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText((prod && prod.iconEmoji) || '📦', width / 2, height * 0.44);

      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${Math.round(height * 0.045)}px 'Kantumruy Pro', sans-serif`;
      ctx.fillText(prodName, width / 2, height * 0.65);
    }

    const barHeight = Math.max(70, Math.round(height * 0.13));
    const yTop = height - barHeight;

    const grad = ctx.createLinearGradient(0, yTop, 0, height);
    grad.addColorStop(0, 'rgba(15, 23, 42, 0.0)');
    grad.addColorStop(0.3, 'rgba(15, 23, 42, 0.88)');
    grad.addColorStop(1, 'rgba(15, 23, 42, 0.98)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, yTop, width, barHeight);

    const logoSize = Math.round(barHeight * 0.68);
    const logoPad = Math.round(barHeight * 0.16);
    const logoX = Math.round(width * 0.025) + 10;
    const logoY = height - logoSize - logoPad;

    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(logoX + logoSize / 2, logoY + logoSize / 2, logoSize / 2 + 1, 0, Math.PI * 2);
    ctx.fill();

    let logoDrawn = false;
    try {
      const logoImg = await new Promise(res => {
        const i = new Image();
        i.onload = () => res(i);
        i.onerror = () => res(null);
        i.src = 'logo.png';
      });
      if (logoImg) {
        ctx.beginPath();
        ctx.arc(logoX + logoSize / 2, logoY + logoSize / 2, logoSize / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
        logoDrawn = true;
      }
    } catch (_) {}

    if (!logoDrawn) {
      ctx.fillStyle = '#0284c7';
      ctx.beginPath();
      ctx.arc(logoX + logoSize / 2, logoY + logoSize / 2, logoSize / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${Math.round(logoSize * 0.55)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('📚', logoX + logoSize / 2, logoY + logoSize / 2);
    }
    ctx.restore();

    const textX = logoX + logoSize + 12;
    ctx.fillStyle = '#fde047';
    ctx.font = `bold ${Math.max(16, Math.round(barHeight * 0.28))}px 'Kantumruy Pro', sans-serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('EduShop Cambodia', textX, logoY + 4);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = `500 ${Math.max(11, Math.round(barHeight * 0.18))}px 'Kantumruy Pro', sans-serif`;
    ctx.fillText('សម្ភារៈតុបតែងថ្នាក់ & សម្ភារៈបង្រៀនខ្មែរ', textX, logoY + Math.round(barHeight * 0.35));

    const qrSize = Math.round(barHeight * 0.78);
    const qrPad = Math.round(barHeight * 0.11);
    const qrX = width - qrSize - Math.round(width * 0.025) - 10;
    const qrY = height - qrSize - qrPad;

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(qrX - 2, qrY - 2, qrSize + 4, qrSize + 4, 6);
    } else {
      ctx.rect(qrX - 2, qrY - 2, qrSize + 4, qrSize + 4);
    }
    ctx.fill();

    let qrDrawn = false;
    try {
      const qrImg = await new Promise(res => {
        const i = new Image();
        i.onload = () => res(i);
        i.onerror = () => res(null);
        i.src = 'telegram_qr.png';
      });
      if (qrImg) {
        ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);
        qrDrawn = true;
      }
    } catch (_) {}

    if (!qrDrawn && typeof qrcode !== 'undefined') {
      try {
        const qrCodeObj = qrcode(0, 'M');
        qrCodeObj.addData('https://t.me/+855964361201');
        qrCodeObj.make();
        const modCount = qrCodeObj.getModuleCount();
        const modSize = qrSize / modCount;
        ctx.fillStyle = '#0f172a';
        for (let r = 0; r < modCount; r++) {
          for (let c = 0; c < modCount; c++) {
            if (qrCodeObj.isDark(r, c)) {
              ctx.fillRect(qrX + c * modSize, qrY + r * modSize, modSize, modSize);
            }
          }
        }
        qrDrawn = true;
      } catch (_) {}
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillStyle = '#7dd3fc';
    ctx.font = `bold ${Math.max(11, Math.round(barHeight * 0.18))}px 'Kantumruy Pro', sans-serif`;
    ctx.fillText('✈️ Telegram QR', qrX - 10, qrY + 4);

    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${Math.max(14, Math.round(barHeight * 0.28))}px 'Kantumruy Pro', monospace`;
    ctx.fillText('0964361201', qrX - 10, qrY + Math.round(barHeight * 0.32));

    let exported = false;
    try {
      if (canvas.toBlob) {
        exported = await new Promise(res => {
          try {
            canvas.toBlob(blob => {
              if (blob && triggerSave(blob, filename)) {
                res(true);
              } else {
                res(false);
              }
            }, 'image/jpeg', 0.92);
          } catch (_) {
            res(false);
          }
        });
      }
    } catch (blobErr) {
      console.warn('canvas.toBlob export failed:', blobErr);
    }

    if (!exported) {
      try {
        const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
        if (dataUrl && dataUrl.length > 50 && triggerSave(dataUrl, filename)) {
          exported = true;
        }
      } catch (dataErr) {
        console.warn('canvas.toDataURL export failed:', dataErr);
      }
    }

    if (exported) {
      showToast('🎉 បានទាញយករូបភាពទំនិញជោគជ័យ!');
      return;
    }
  } catch (canvasErr) {
    console.warn('Canvas composite processing failed:', canvasErr);
  }

  const fallbackSuccess = await fallbackDirectDownload();
  if (!fallbackSuccess) {
    showToast('⚠️ មិនអាចទាញយករូបភាពបានទេ សូមព្យាយាមម្តងទៀត', 'amber');
  }
}

// Standalone Helper: Direct Download Product Image from ID
async function downloadProductImageDirect(productId) {
  const p = productsData.find(item => item.id === productId);
  if (!p) return;
  activeLightboxProductId = productId;
  const titleEl = document.getElementById('lightbox-title');
  if (titleEl) titleEl.textContent = p.name;
  const imgEl = document.getElementById('lightbox-img');
  if (imgEl && p.imageUrl) {
    imgEl.src = p.imageUrl;
    imgEl.style.display = 'block';
  }
  await downloadCurrentLightboxImage();
}

function lightboxResetZoom() {
  lightboxScale = 1;
  lightboxPanX = 0;
  lightboxPanY = 0;
  isLightboxDragging = false;
  applyLightboxTransform();
}

function lightboxZoomIn(step = 0.35) {
  lightboxScale = Math.min(5.0, Math.round((lightboxScale + step) * 100) / 100);
  applyLightboxTransform();
}

function lightboxZoomOut(step = 0.35) {
  lightboxScale = Math.max(1.0, Math.round((lightboxScale - step) * 100) / 100);
  if (lightboxScale === 1.0) {
    lightboxPanX = 0;
    lightboxPanY = 0;
  }
  applyLightboxTransform();
}

function toggleLightboxZoom() {
  if (lightboxScale > 1.2) {
    lightboxResetZoom();
  } else {
    lightboxScale = 2.5;
    applyLightboxTransform();
  }
}

function applyLightboxTransform() {
  const wrapper = document.getElementById('lightbox-image-wrapper');
  const levelEl = document.getElementById('lightbox-zoom-level');
  const viewport = document.getElementById('lightbox-viewport');

  if (lightboxScale <= 1.0) {
    lightboxPanX = 0;
    lightboxPanY = 0;
    if (viewport) viewport.style.cursor = 'zoom-in';
  } else {
    if (viewport) viewport.style.cursor = isLightboxDragging ? 'grabbing' : 'grab';
    if (viewport) {
      const maxPanX = Math.max(50, (viewport.clientWidth * (lightboxScale - 1)) / 1.6);
      const maxPanY = Math.max(50, (viewport.clientHeight * (lightboxScale - 1)) / 1.6);
      lightboxPanX = Math.max(-maxPanX, Math.min(maxPanX, lightboxPanX));
      lightboxPanY = Math.max(-maxPanY, Math.min(maxPanY, lightboxPanY));
    }
  }

  if (wrapper) {
    wrapper.style.transition = isLightboxDragging ? 'none' : 'transform 0.18s cubic-bezier(0.2, 0, 0.2, 1)';
    wrapper.style.transform = `translate(${lightboxPanX}px, ${lightboxPanY}px) scale(${lightboxScale})`;
  }
  if (levelEl) {
    levelEl.textContent = `${Math.round(lightboxScale * 100)}%`;
  }
}

function addCurrentLightboxToCart() {
  if (!activeLightboxProductId) return;
  addToCart(activeLightboxProductId);
}

function orderCurrentLightboxItem() {
  if (!activeLightboxProductId) return;
  const pId = activeLightboxProductId;
  closeImageLightbox();
  closeImageModal();
  openOrderModal(pId, false);
}

function handleLightboxBackdropClick(e) {
  if (e.target.id === 'image-lightbox-modal') {
    closeImageLightbox();
  }
}

function initLightboxGesturesOnce() {
  if (lightboxGesturesBound) return;
  const viewport = document.getElementById('lightbox-viewport');
  if (!viewport) return;
  lightboxGesturesBound = true;

  // Mouse drag panning
  viewport.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    if (lightboxScale > 1.0) {
      isLightboxDragging = true;
      lightboxDragStartX = e.clientX;
      lightboxDragStartY = e.clientY;
      lightboxInitialPanX = lightboxPanX;
      lightboxInitialPanY = lightboxPanY;
      viewport.style.cursor = 'grabbing';
      e.preventDefault();
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!isLightboxDragging) return;
    lightboxPanX = lightboxInitialPanX + (e.clientX - lightboxDragStartX);
    lightboxPanY = lightboxInitialPanY + (e.clientY - lightboxDragStartY);
    applyLightboxTransform();
  });

  window.addEventListener('mouseup', () => {
    if (isLightboxDragging) {
      isLightboxDragging = false;
      const vp = document.getElementById('lightbox-viewport');
      if (vp) vp.style.cursor = lightboxScale > 1.0 ? 'grab' : 'zoom-in';
    }
  });

  // Mouse wheel zoom
  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      lightboxZoomIn(0.25);
    } else {
      lightboxZoomOut(0.25);
    }
  }, { passive: false });

  // Double click to zoom in/out
  viewport.addEventListener('dblclick', (e) => {
    e.preventDefault();
    toggleLightboxZoom();
  });

  // Touch gestures for mobile: double tap, drag & pinch-to-zoom
  viewport.addEventListener('touchstart', (e) => {
    const hint = document.getElementById('lightbox-touch-hint');
    if (hint) hint.style.opacity = '0.3';

    if (e.touches.length === 1) {
      const now = Date.now();
      if (now - lightboxLastTapTime < 300) {
        toggleLightboxZoom();
        lightboxLastTapTime = 0;
        return;
      }
      lightboxLastTapTime = now;

      if (lightboxScale > 1.0) {
        isLightboxDragging = true;
        lightboxDragStartX = e.touches[0].clientX;
        lightboxDragStartY = e.touches[0].clientY;
        lightboxInitialPanX = lightboxPanX;
        lightboxInitialPanY = lightboxPanY;
      }
    } else if (e.touches.length === 2) {
      isLightboxDragging = false;
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      lightboxInitialPinchDist = dist;
      lightboxInitialScale = lightboxScale;
    }
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1 && isLightboxDragging && lightboxScale > 1.0) {
      e.preventDefault();
      lightboxPanX = lightboxInitialPanX + (e.touches[0].clientX - lightboxDragStartX);
      lightboxPanY = lightboxInitialPanY + (e.touches[0].clientY - lightboxDragStartY);
      applyLightboxTransform();
    } else if (e.touches.length === 2 && lightboxInitialPinchDist) {
      e.preventDefault();
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / lightboxInitialPinchDist;
      lightboxScale = Math.min(5.0, Math.max(1.0, Math.round(lightboxInitialScale * factor * 100) / 100));
      applyLightboxTransform();
    }
  }, { passive: false });

  viewport.addEventListener('touchend', (e) => {
    if (e.touches.length < 2) {
      lightboxInitialPinchDist = null;
    }
    if (e.touches.length === 0) {
      isLightboxDragging = false;
    }
  }, { passive: true });
}

// Open Order Modal for Single Product
function openOrderModal(productId, isCustom = false) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  isCustomSizeActive = isCustom;
  isOrderModalForCart = false;

  if (isCustom) {
    if (!userCustomW || userCustomW <= 0) userCustomW = 120;
    if (!userCustomL || userCustomL <= 0) userCustomL = 150;
    const calc = calculateCustomDimensions(userCustomW, userCustomL);
    activeOrderProduct = {
      product: {
        ...product,
        size: `ទទឹង ${userCustomW} cm × បណ្ដោយ ${userCustomL} cm (កំណត់ផ្ទាល់)`,
        priceUSD: calc.priceUSD,
        priceKHR: calc.priceKHR
      },
      quantity: 1
    };
  } else {
    activeOrderProduct = {
      product: { ...product },
      quantity: 1
    };
  }

  populateOrderShippingDropdown();
  updateModalProductSummary();
  orderModal.classList.remove('hidden');
  updateBodyScrollLock();
  resetCoupon();
  removeSlip();
  const customTextInput = document.getElementById('cust-custom-text');
  if (customTextInput) customTextInput.value = (product && product.customText) ? product.customText : '';
  const engraveSchoolInput = document.getElementById('cust-engrave-school');
  if (engraveSchoolInput) engraveSchoolInput.value = '';
  const engraveGradeInput = document.getElementById('cust-engrave-grade');
  if (engraveGradeInput) engraveGradeInput.value = '';
  updateKHQRDisplay();
  handlePaymentMethodChange();
  const singleCartRow = document.getElementById('modal-single-cart-action-row');
  if (singleCartRow) singleCartRow.classList.remove('hidden');
  updateOrderModalCartBadge();
}

// Open Order Modal for Entire Cart
function openOrderModalForCart() {
  if (cart.length === 0) {
    showToast("កន្ត្រកទំនិញទទេ មិនអាចបញ្ជាទិញបានទេ!", "error");
    return;
  }
  toggleCart(false);
  isOrderModalForCart = true;
  populateOrderShippingDropdown();
  orderModal.classList.remove('hidden');
  updateBodyScrollLock();
  if (appliedCoupon) {
    const custCouponInput = document.getElementById('cust-coupon-code');
    if (custCouponInput) custCouponInput.value = appliedCoupon.code;
    const feedback = document.getElementById('coupon-feedback');
    if (feedback) {
      feedback.textContent = `✓ បានអនុវត្តកូដ «${appliedCoupon.code}»៖ ${appliedCoupon.label}`;
      feedback.className = 'text-[11px] text-emerald-600 font-semibold block';
    }
  } else {
    resetCoupon();
  }
  removeSlip();
  const customTextInput = document.getElementById('cust-custom-text');
  if (customTextInput) customTextInput.value = '';
  const engraveSchoolInput = document.getElementById('cust-engrave-school');
  if (engraveSchoolInput) engraveSchoolInput.value = '';
  const engraveGradeInput = document.getElementById('cust-engrave-grade');
  if (engraveGradeInput) engraveGradeInput.value = '';
  updateModalProductSummary();
  updateKHQRDisplay();
  handlePaymentMethodChange();
  const singleCartRow = document.getElementById('modal-single-cart-action-row');
  if (singleCartRow) singleCartRow.classList.add('hidden');
  updateOrderModalCartBadge();
}

// Update Modal Summary Content
function updateModalProductSummary() {
  if (isOrderModalForCart) {
    const rawUSD = cart.reduce((acc, i) => acc + (i.product.priceUSD * i.quantity), 0);
    const rawKHR = cart.reduce((acc, i) => acc + (i.product.priceKHR * i.quantity), 0);
    const totalUnits = cart.reduce((acc, i) => acc + i.quantity, 0);
    const bulk = getBulkDiscountInfo(totalUnits, rawUSD, rawKHR);

    const discUSD = appliedCoupon ? appliedCoupon.discountUSD : 0;
    const discKHR = appliedCoupon ? appliedCoupon.discountKHR : 0;
    const totalDiscountUSD = bulk.discountUSD + discUSD;
    const totalDiscountKHR = bulk.discountKHR + discKHR;

    const shipping = (typeof getEffectiveOrderShipping === 'function') ? getEffectiveOrderShipping() : { isFree: false, effectiveUSD: 0, effectiveKHR: 0, locationName: 'ទូទៅ' };
    const finalUSD = Math.max(0, rawUSD - totalDiscountUSD) + shipping.effectiveUSD;
    const finalKHR = Math.max(0, rawKHR - totalDiscountKHR) + shipping.effectiveKHR;

    modalProductSummary.innerHTML = `
      <div class="bg-sky-50 border border-sky-100 rounded-xl p-3.5 mb-4 space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-sky-800">បញ្ជាទិញទំនិញក្នុងកន្ត្រក (${cart.length} មុខ - សរុប ${totalUnits} ផ្ទាំង)</span>
          <span class="text-xs text-sky-600 font-semibold">${formatUSD(rawUSD)} (${formatKHR(rawKHR)})</span>
        </div>
        <div class="max-h-32 overflow-y-auto space-y-1.5 text-xs text-slate-600 pr-1">
          ${cart.map(i => `
            <div class="flex justify-between items-center py-1 border-b border-sky-100/60">
              <span class="truncate flex-1">• ${i.product.name} (x${i.quantity})</span>
              <span class="font-medium text-slate-800 ml-2">${formatUSD(i.product.priceUSD * i.quantity)}</span>
            </div>
          `).join('')}
        </div>
        <div class="pt-2 border-t border-sky-200/80 space-y-1 text-xs">
          <div class="flex justify-between text-slate-600">
            <span>សេវាដឹកជញ្ជូន (${shipping.isHomeDelivery ? '🏠 ដឹកដល់ផ្ទះ - ' : '🏢 ផ្ញើសាខា - '}${shipping.locationName})៖</span>
            <span class="font-bold ${shipping.isFree ? 'text-emerald-700' : 'text-amber-800'}">
              ${shipping.isFree ? 'ឥតគិតថ្លៃ $0.00 (Free)' : `${formatUSD(shipping.feeUSD)} (${formatKHR(shipping.feeKHR)})`}
            </span>
          </div>
          ${(bulk.percent > 0) ? `
            <div class="flex justify-between text-amber-800 font-bold">
              <span>🎁 បញ្ចុះតម្លៃទិញដុំសាលា (${bulk.percent}% - ${totalUnits} ផ្ទាំង)៖</span>
              <span>-${formatUSD(bulk.discountUSD)} (-${formatKHR(bulk.discountKHR)})</span>
            </div>
          ` : ''}
          ${(appliedCoupon && discUSD > 0) ? `
            <div class="flex justify-between text-emerald-700 font-bold">
              <span>បញ្ចុះតម្លៃ (${appliedCoupon.code})៖</span>
              <span>-${formatUSD(discUSD)} (-${formatKHR(discKHR)})</span>
            </div>
          ` : ''}
          <div class="flex justify-between text-sky-950 font-black text-sm pt-1 border-t border-sky-200">
            <span>សរុបចុងក្រោយ៖</span>
            <span class="text-sky-700">${formatUSD(finalUSD)} (${formatKHR(finalKHR)})</span>
          </div>
        </div>
      </div>
    `;
  } else if (activeOrderProduct) {
    const p = activeOrderProduct.product;
    const qty = activeOrderProduct.quantity;
    const itemTotalUSD = p.priceUSD * qty;
    const itemTotalKHR = p.priceKHR * qty;
    const bulk = getBulkDiscountInfo(qty, itemTotalUSD, itemTotalKHR);

    const fInfo = getFrameInfo(p.frameColor);
    const frameClass = (p.frameColor && p.frameColor !== 'none') ? (fInfo.classSm || '') : '';

    const modalThumb = p.imageUrl 
      ? `<img src="${p.imageUrl}" onclick="openImageLightbox(${p.id})" title="ចុចដើម្បីពង្រីកធំ" class="w-14 h-14 rounded-xl object-cover border border-slate-200 flex-shrink-0 shadow-sm cursor-zoom-in hover:scale-105 transition ${frameClass}">`
      : `<div onclick="openImageLightbox(${p.id})" title="ចុចដើម្បីពង្រីកធំ" class="w-14 h-14 rounded-xl bg-gradient-to-br ${p.iconBg || 'from-sky-400 to-blue-500'} flex items-center justify-center text-2xl text-white flex-shrink-0 shadow-sm cursor-zoom-in hover:scale-105 transition ${frameClass}">
           ${p.iconEmoji || '📦'}
         </div>`;

    modalProductSummary.innerHTML = `
      <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-4 space-y-3">
        <div class="flex items-center gap-3">
          ${modalThumb}
          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-slate-800 text-sm truncate">${p.name}</h4>
            <div class="flex items-center gap-1.5 flex-wrap mt-0.5">
              <div class="flex items-center gap-1 text-xs text-sky-700 font-medium">
                <span>ទំហំ៖</span>
                <span id="modal-selected-size-label" class="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-900 font-bold">${p.size}</span>
              </div>
              <div class="flex items-center gap-1 text-xs font-medium">
                <span class="text-slate-500">ស៊ុម៖</span>
                <span id="modal-selected-frame-label" class="bg-white px-2 py-0.5 rounded border ${fInfo.badgeBg || 'border-slate-200 text-slate-600'} font-bold">${fInfo.emoji} ${fInfo.label}</span>
              </div>
            </div>
            <div class="text-xs font-bold text-sky-600 mt-1 flex items-baseline gap-1 flex-wrap">
              <span id="modal-item-price-usd">${bulk.percent > 0 ? formatUSD(bulk.payableUSD) : formatUSD(itemTotalUSD)}</span> 
              <span id="modal-item-price-khr" class="text-[11px] font-normal text-slate-500">(${bulk.percent > 0 ? formatKHR(bulk.payableKHR) : formatKHR(itemTotalKHR)})</span>
              ${bulk.percent > 0 ? `<span class="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded border border-amber-300">🎁 ចុះដុំ ${bulk.percent}%</span>` : ''}
            </div>
          </div>
          
          <!-- Quantity control -->
          <div class="flex items-center gap-1 bg-white border border-slate-300 rounded-lg p-1 shadow-sm">
            <button type="button" onclick="changeModalQty(-1)" class="w-6 h-6 rounded flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold text-sm">-</button>
            <span class="text-xs font-bold px-1.5">${qty}</span>
            <button type="button" onclick="changeModalQty(1)" class="w-6 h-6 rounded flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold text-sm">+</button>
          </div>
        </div>

        <!-- Size Variants Selector -->
        <div class="pt-2.5 border-t border-slate-200">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-[11px] font-bold text-slate-700">⚡ ជម្រើសទំហំ និងតម្លៃស្ដង់ដាររហ័ស (ចុចដើម្បីជ្រើសរើស) ៖</span>
            <span class="text-[10px] text-sky-600 font-semibold" id="modal-size-indicator">${p.size}</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            ${getProductAvailableSizes(p).map(s => {
              const isSelected = !isCustomSizeActive && p.size === s.size;
              return `
                <button 
                  type="button" 
                  onclick="selectOrderSize('${s.size}', ${s.priceUSD}, ${s.priceKHR}, false)"
                  class="p-2 rounded-xl border text-center transition cursor-pointer ${isSelected ? 'border-sky-500 bg-sky-50 text-sky-700 shadow-xs ring-1 ring-sky-400 font-bold' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}">
                  <span class="block text-xs font-semibold">${s.name || s.size}</span>
                  <span class="block text-[10px] text-emerald-600 font-bold">${formatKHR(s.priceKHR)}</span>
                </button>
              `;
            }).join('')}

            <button 
              type="button" 
              onclick="toggleUserCustomSizeMode()"
              class="p-2 rounded-xl border text-center transition cursor-pointer ${isCustomSizeActive ? 'border-sky-500 bg-sky-600 text-white shadow-xs ring-1 ring-sky-400 font-bold' : 'border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-100'}">
              <span class="block text-xs font-bold flex items-center justify-center gap-0.5">✏️ កំណត់ផ្ទាល់</span>
              <span class="block text-[10px] ${isCustomSizeActive ? 'text-sky-100' : 'text-sky-600'}">20,000៛/m²</span>
            </button>
          </div>

          <!-- Customer Custom Dimensions Drawer -->
          <div id="user-custom-size-box" class="${isCustomSizeActive ? '' : 'hidden'} p-3 bg-white rounded-xl border border-sky-300 mt-2.5 space-y-2.5 animate-fade-in shadow-xs">
            <div class="flex items-center justify-between border-b border-slate-100 pb-1.5">
              <span class="text-xs font-bold text-slate-800 flex items-center gap-1">
                <span>📐</span> <span>កំណត់ទំហំជាក់ស្តែង (1m² = 20,000៛ | ទទឹងអតិបរមា 160 cm) ៖</span>
              </span>
              <button type="button" onclick="selectOrderSize('${(getProductAvailableSizes(p)[0] || {}).size || '40 cm x 60 cm'}', ${(getProductAvailableSizes(p)[0] || {}).priceUSD || 1.25}, ${(getProductAvailableSizes(p)[0] || {}).priceKHR || 5000}, false)" class="text-xs text-slate-400 hover:text-slate-600 font-bold">✕ បិទ</button>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-[11px] text-slate-600 font-semibold mb-0.5">
                  ទទឹង (Width) - អតិបរមា 160 cm <span class="text-rose-500">*</span>
                </label>
                <div class="relative">
                  <input 
                    type="number" 
                    id="cust-custom-w" 
                    min="10" 
                    max="160" 
                    value="${userCustomW}"
                    oninput="onUserCustomDimensionInput()" 
                    class="w-full pr-8 pl-3 py-1.5 text-xs bg-slate-50 border ${userCustomW > 160 ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'} rounded-lg font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                  >
                  <span class="absolute right-2.5 top-1.5 text-xs text-slate-400 font-semibold">cm</span>
                </div>
                <p id="cust-custom-w-warn" class="${userCustomW > 160 ? '' : 'hidden'} text-[10px] text-rose-500 font-bold mt-1">⚠️ ទទឹងអតិបរមាត្រឹម 160 cm ប៉ុណ្ណោះ!</p>
              </div>

              <div>
                <label class="block text-[11px] text-slate-600 font-semibold mb-0.5">
                  បណ្ដោយ (Length) - មិនកំណត់ <span class="text-rose-500">*</span>
                </label>
                <div class="relative">
                  <input 
                    type="number" 
                    id="cust-custom-l" 
                    min="10" 
                    value="${userCustomL}"
                    oninput="onUserCustomDimensionInput()" 
                    class="w-full pr-8 pl-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                  >
                  <span class="absolute right-2.5 top-1.5 text-xs text-slate-400 font-semibold">cm</span>
                </div>
              </div>
            </div>

            <!-- Live Calculation Info -->
            <div id="cust-custom-calc-info" class="p-2 bg-sky-50 border border-sky-100 rounded-lg text-center text-xs font-semibold text-sky-800">
              ${(() => {
                const calc = calculateCustomDimensions(userCustomW, userCustomL);
                return `ទំហំ: ${calc.width} cm × ${calc.length} cm (${calc.areaM2} m²) | តម្លៃ: ${formatKHR(calc.priceKHR)} (${formatUSD(calc.priceUSD)})`;
              })()}
            </div>
          </div>

          <!-- Frame Selection Section (ត្រង់ ស៊ុមពណ៌បៃតង បង្កើតការជ្រើសរើស) -->
          <div class="pt-2.5 border-t border-slate-200">
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[11px] font-bold text-slate-700">🖼️ ជម្រើសប្រភេទស៊ុម (ចុចដើម្បីជ្រើសរើស) ៖</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-md border ${fInfo.badgeBg || 'bg-slate-100 text-slate-600 border-slate-200'}" id="modal-frame-indicator">${fInfo.emoji} ${fInfo.label}</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-1.5" id="modal-frame-options-grid">
              ${[
                { key: 'none', label: 'គ្មានស៊ុម', emoji: '🚫', bg: 'hover:bg-slate-100' },
                { key: 'green', label: 'ស៊ុមពណ៌បៃតង', emoji: '🟢', bg: 'hover:bg-emerald-50 text-emerald-800' },
                { key: 'gold', label: 'ស៊ុមពណ៌មាស', emoji: '🟡', bg: 'hover:bg-amber-50 text-amber-800' },
                { key: 'wood', label: 'ស៊ុមឈើ', emoji: '🟤', bg: 'hover:bg-amber-50 text-amber-900' },
                { key: 'black', label: 'ស៊ុមពណ៌ខ្មៅ', emoji: '⚫', bg: 'hover:bg-slate-100 text-slate-900' },
                { key: 'white', label: 'ស៊ុមពណ៌ស', emoji: '⚪', bg: 'hover:bg-slate-100 text-slate-700' },
                { key: 'silver', label: 'ស៊ុមពណ៌ប្រាក់', emoji: '🔘', bg: 'hover:bg-slate-100 text-slate-700' },
                { key: 'blue', label: 'ស៊ុមពណ៌ខៀវ', emoji: '🔵', bg: 'hover:bg-sky-50 text-sky-800' },
                { key: 'red', label: 'ស៊ុមពណ៌ក្រហម', emoji: '🔴', bg: 'hover:bg-rose-50 text-rose-800' },
                { key: 'purple', label: 'ស៊ុមពណ៌ស្វាយ', emoji: '🟣', bg: 'hover:bg-purple-50 text-purple-800' }
              ].map(f => {
                const isSelected = (p.frameColor || 'none') === f.key;
                const isGreen = f.key === 'green';
                let activeClass = 'border-slate-200 bg-white text-slate-700 ' + f.bg;
                if (isSelected) {
                  activeClass = isGreen
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-extrabold ring-2 ring-emerald-400 shadow-xs'
                    : 'border-sky-600 bg-sky-50 text-sky-900 font-extrabold ring-2 ring-sky-400 shadow-xs';
                }
                return `
                  <button 
                    type="button" 
                    onclick="selectOrderFrame('${f.key}')" 
                    title="${f.label}"
                    class="p-1.5 rounded-xl border text-center transition cursor-pointer flex items-center justify-center gap-1 text-[11px] ${activeClass}">
                    <span>${f.emoji}</span>
                    <span class="truncate">${f.label}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Quick Add-to-Cart Button right below Size Selection -->
          <div class="pt-2.5 border-t border-slate-200">
            <button 
              type="button" 
              id="modal-add-to-cart-btn"
              onclick="addCurrentProductToCartFromModal()"
              class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 hover:from-amber-600 hover:to-orange-600 active:scale-98 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-200 flex items-center justify-center gap-2 transition cursor-pointer group">
              <span class="text-base group-hover:scale-110 transition-transform">🛒</span>
              <span>ដាក់ចូលកន្ត្រកតាមទំហំនេះ (Add to Cart)</span>
              <span id="modal-cart-btn-size-tag" class="bg-black/20 text-white text-[10.5px] px-2 py-0.5 rounded-full font-semibold ml-1">ទំហំ៖ ${p.size}${(p.frameColor && p.frameColor !== 'none') ? ` • ${fInfo.label}` : ''}</span>
            </button>
          </div>

        </div>

      </div>
    `;
  }
  updateKHQRDisplay();
}

function onUserCustomDimensionInput() {
  const wInput = document.getElementById('cust-custom-w');
  const lInput = document.getElementById('cust-custom-l');
  const warn = document.getElementById('cust-custom-w-warn');
  const info = document.getElementById('cust-custom-calc-info');
  if (!wInput || !lInput || !activeOrderProduct) return;

  const w = parseFloat(wInput.value) || 0;
  const l = parseFloat(lInput.value) || 0;
  userCustomW = w;
  userCustomL = l;

  if (w > 160) {
    warn?.classList.remove('hidden');
    wInput.classList.add('border-rose-500', 'ring-1', 'ring-rose-500');
  } else {
    warn?.classList.add('hidden');
    wInput.classList.remove('border-rose-500', 'ring-1', 'ring-rose-500');
  }

  if (w > 0 && l > 0) {
    const calc = calculateCustomDimensions(w, l);
    if (info) {
      info.textContent = `ទំហំ: ${calc.width} cm × ${calc.length} cm (${calc.areaM2} m²) | តម្លៃ: ${formatKHR(calc.priceKHR)} (${formatUSD(calc.priceUSD)})`;
    }

    const customSizeName = `ទទឹង ${w} cm × បណ្ដោយ ${l} cm (កំណត់ផ្ទាល់)`;
    activeOrderProduct.product.size = customSizeName;
    activeOrderProduct.product.priceUSD = calc.priceUSD;
    activeOrderProduct.product.priceKHR = calc.priceKHR;

    const totalUSD = calc.priceUSD * activeOrderProduct.quantity;
    const totalKHR = calc.priceKHR * activeOrderProduct.quantity;

    const priceUsdEl = document.getElementById('modal-item-price-usd');
    const priceKhrEl = document.getElementById('modal-item-price-khr');
    const sizeLabelEl = document.getElementById('modal-selected-size-label');
    const sizeIndicatorEl = document.getElementById('modal-size-indicator');
    const cartBtnSizeTag = document.getElementById('modal-cart-btn-size-tag');

    if (priceUsdEl) priceUsdEl.textContent = formatUSD(totalUSD);
    if (priceKhrEl) priceKhrEl.textContent = `(${formatKHR(totalKHR)})`;
    if (sizeLabelEl) sizeLabelEl.textContent = `${w} × ${l} cm`;
    if (sizeIndicatorEl) sizeIndicatorEl.textContent = `${w} × ${l} cm`;
    if (cartBtnSizeTag) cartBtnSizeTag.textContent = `ទំហំ៖ ${w} × ${l} cm`;
  }
}

function toggleUserCustomSizeMode() {
  isCustomSizeActive = true;
  if (!userCustomW || userCustomW <= 0) userCustomW = 120;
  if (!userCustomL || userCustomL <= 0) userCustomL = 150;
  const calc = calculateCustomDimensions(userCustomW, userCustomL);
  activeOrderProduct.product = {
    ...activeOrderProduct.product,
    size: `ទទឹង ${userCustomW} cm × បណ្ដោយ ${userCustomL} cm (កំណត់ផ្ទាល់)`,
    priceUSD: calc.priceUSD,
    priceKHR: calc.priceKHR
  };
  updateModalProductSummary();
}

function selectOrderSize(newSize, priceUSD, priceKHR, isCustom = false) {
  if (!activeOrderProduct) return;
  isCustomSizeActive = isCustom;
  activeOrderProduct.product = {
    ...activeOrderProduct.product,
    size: newSize,
    priceUSD: priceUSD,
    priceKHR: priceKHR
  };
  updateModalProductSummary();
}

function selectOrderFrame(frameColor) {
  if (!activeOrderProduct) return;
  activeOrderProduct.product.frameColor = frameColor;
  updateModalProductSummary();
}

function changeModalQty(delta) {
  if (!activeOrderProduct) return;
  activeOrderProduct.quantity += delta;
  if (activeOrderProduct.quantity < 1) activeOrderProduct.quantity = 1;
  updateModalProductSummary();
}

function closeOrderModal() {
  orderModal.classList.add('hidden');
  updateBodyScrollLock();
}

// Open Cart from Order Modal
function openCartFromOrderModal() {
  closeOrderModal();
  toggleCart(true);
}

// Update Cart Badge on Order Modal Header
function updateOrderModalCartBadge() {
  const badge = document.getElementById('order-modal-cart-badge');
  if (badge) {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

// Add Current Product from Order Modal to Cart with its Selected Size & Dimensions
function addCurrentProductToCartFromModal() {
  if (!activeOrderProduct || !activeOrderProduct.product) {
    showToast('⚠️ មិនមានទំនិញសម្រាប់ដាក់ចូលកន្ត្រកទេ!');
    return;
  }

  // Validate custom size if in custom size mode
  if (isCustomSizeActive) {
    if (!userCustomW || !userCustomL || userCustomW <= 0 || userCustomL <= 0) {
      alert("សូមបញ្ចូលទទឹង និងបណ្ដោយទំហំទំនិញឱ្យបានត្រឹមត្រូវ!");
      return;
    }
    if (userCustomW > 160) {
      alert("ទទឹងអតិបរមាត្រឹម 160 cm ប៉ុណ្ណោះ!");
      return;
    }
  }

  const p = activeOrderProduct.product;
  const qty = activeOrderProduct.quantity || 1;
  const customText = document.getElementById('cust-custom-text')?.value.trim() || '';

  // Create product object with exact selected size and custom text
  const productToAdd = {
    ...p,
    customText: customText || p.customText || ''
  };

  // Find if identical product with the SAME size, frame and custom text already exists in cart
  const existingIndex = cart.findIndex(item => 
    item.product.id === productToAdd.id && 
    item.product.size === productToAdd.size &&
    (item.product.frameColor || 'none') === (productToAdd.frameColor || 'none') &&
    (item.product.customText || '') === (productToAdd.customText || '')
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push({
      product: productToAdd,
      quantity: qty
    });
  }

  updateCartBadge();
  renderCartDrawer();

  // Visual button feedback
  const btn = document.getElementById('modal-add-to-cart-btn');
  const bottomBtn = document.getElementById('modal-bottom-add-to-cart-btn');

  if (btn) {
    btn.innerHTML = '<span>✓</span> <span>បានដាក់ចូលកន្ត្រកជោគជ័យ!</span>';
    btn.classList.add('bg-emerald-600', 'from-emerald-600', 'to-teal-600');
  }
  if (bottomBtn) {
    bottomBtn.innerHTML = '<span>✓</span> <span>បានដាក់ចូលកន្ត្រកជោគជ័យ!</span>';
    bottomBtn.classList.add('bg-emerald-600', 'from-emerald-600', 'to-teal-600');
  }

  showToast(`🎉 បានដាក់ «${p.name.slice(0, 22)}...» (${p.size}) x${qty} ចូលកន្ត្រក!`);

  setTimeout(() => {
    closeOrderModal();
    toggleCart(true);
  }, 400);
}

// Handle Form Submission (Place Order)
function handleOrderSubmit(e) {
  e.preventDefault();

  const customerName = document.getElementById('cust-name').value.trim();
  const customerPhone = document.getElementById('cust-phone').value.trim();
  const customerAddress = document.getElementById('cust-address').value.trim();
  const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value || 'ABA KHQR';
  const customerNote = document.getElementById('cust-note').value.trim();

  if (!customerName || !customerPhone || !customerAddress) {
    alert("សូមបំពេញ ឈ្មោះ លេខទូរស័ព្ទ និងអាសយដ្ឋានដឹកជញ្ជូនឱ្យបានគ្រប់គ្រាន់!");
    return;
  }

  // Validate custom size if active
  if (!isOrderModalForCart && isCustomSizeActive) {
    if (!userCustomW || !userCustomL || userCustomW <= 0 || userCustomL <= 0) {
      alert("សូមបញ្ចូលទទឹង និងបណ្ដោយទំហំទំនិញឱ្យបានត្រឹមត្រូវ!");
      return;
    }
    if (userCustomW > 160) {
      alert("សូមអភ័យទោស! ទទឹងអតិបរមាអាចកំណត់បានត្រឹមតែ 160 cm ប៉ុណ្ណោះ។ សូមកែប្រែទំហំទទឹងឱ្យស្ថិតក្នុងចន្លោះ 160 cm ឬក្រោមនេះ!");
      document.getElementById('cust-custom-w')?.focus();
      return;
    }
  }

  // 1. Mandatory Payment Slip Upload Validation
  if (!uploadedSlipDataUrl) {
    showToast("⚠️ សូមភ្ជាប់រូបភាពវិក្កយបត្របង់ប្រាក់ (Payment Slip / Screenshot) ជាមុនសិន ទើបអាចបញ្ជូនការកុម្ម៉ង់បាន!", "error");
    const dropzone = document.getElementById('slip-dropzone');
    if (dropzone) {
      dropzone.scrollIntoView({ behavior: 'smooth', block: 'center' });
      dropzone.classList.add('ring-4', 'ring-rose-500', 'border-rose-500');
      setTimeout(() => {
        dropzone.classList.remove('ring-4', 'ring-rose-500', 'border-rose-500');
      }, 3500);
    }
    return;
  }

  // 2. Validate Payment Account & Amount Matches Shop KHQR and Order Total
  const slipCheck = (typeof validateSlipAmountLive === 'function') 
    ? validateSlipAmountLive() 
    : { isValid: true, isAccountValid: true, isAmountValid: true, enteredVal: 0, currency: 'USD' };

  if (!slipCheck || !slipCheck.isValid) {
    if (slipCheck && !slipCheck.isAccountValid) {
      showToast("❌ ការបង់ប្រាក់មិនត្រឹមត្រូវតាមគណនី KHQR របស់ម្ចាស់ហាងឡើយ! ហាងទទួលតែគណនី KOEUR SOYTY (ABA: 008 350 616) ឬ Vey Kimleang (ACLEDA: 090 343 206)។ សូមផ្ទេរប្រាក់ឱ្យបានត្រឹមត្រូវ!", "error");
      const acctSelect = document.getElementById('cust-slip-account-select');
      if (acctSelect) {
        acctSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
        acctSelect.focus();
        acctSelect.classList.add('ring-4', 'ring-rose-500');
        setTimeout(() => acctSelect.classList.remove('ring-4', 'ring-rose-500'), 3500);
      }
    } else {
      const shortageInfo = (slipCheck && slipCheck.shortageUSD > 0) 
        ? ` (នៅខ្វះ ${formatUSD(slipCheck.shortageUSD)} ឬ ${formatKHR(slipCheck.shortageKHR || slipCheck.shortageUSD * 4000)})` 
        : '';
      showToast(`❌ ទឹកប្រាក់លើវិក្កយបត្រមិនទាន់គ្រប់គ្រាន់តាមតម្លៃបញ្ជាទិញទេ${shortageInfo}! សូមបង់ប្រាក់បន្ថែមឱ្យគ្រប់ចំនួន!`, "error");
      const amtInput = document.getElementById('cust-slip-amount');
      if (amtInput) {
        amtInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        amtInput.focus();
        amtInput.classList.add('ring-4', 'ring-rose-500');
        setTimeout(() => amtInput.classList.remove('ring-4', 'ring-rose-500'), 3500);
      }
    }
    const noticeEl = document.getElementById('slip-payment-correction-notice');
    if (noticeEl) {
      noticeEl.classList.remove('hidden');
      noticeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  // Generate random order ID
  const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
  
  // Generate sequential invoice number (លេខរៀងវិក្កយបត្រ)
  let nextInvoiceNo = '0001';
  try {
    const ordersRaw = localStorage.getItem(ORDERS_STORAGE_KEY);
    const ordersList = ordersRaw ? JSON.parse(ordersRaw) : [];
    let maxNum = 0;
    (ordersList || []).forEach(o => {
      if (o.invoiceNo) {
        const m = String(o.invoiceNo).match(/\d+/);
        if (m) {
          const val = parseInt(m[0], 10);
          if (val > maxNum) maxNum = val;
        }
      }
    });
    if (maxNum === 0) maxNum = ordersList.length;
    nextInvoiceNo = String(maxNum + 1).padStart(4, '0');
  } catch (e) {
    nextInvoiceNo = '0001';
  }
  
  // Calculate Items Summary
  let orderItems = [];
  let finalUSD = 0;
  let finalKHR = 0;

  if (isOrderModalForCart) {
    orderItems = cart.map(i => {
      const fInfo = getFrameInfo(i.product.frameColor);
      return {
        name: i.product.name,
        size: i.product.size,
        frameColor: i.product.frameColor || 'none',
        frameLabel: (i.product.frameColor && i.product.frameColor !== 'none') ? fInfo.label : '',
        qty: i.quantity,
        priceUSD: i.product.priceUSD * i.quantity,
        image: i.product.imageUrl || i.product.image || ''
      };
    });
    finalUSD = cart.reduce((acc, i) => acc + (i.product.priceUSD * i.quantity), 0);
    finalKHR = cart.reduce((acc, i) => acc + (i.product.priceKHR * i.quantity), 0);
    const totalUnits = cart.reduce((acc, i) => acc + i.quantity, 0);
    // Clear cart after checkout
    cart = [];
    updateCartBadge();
  } else if (activeOrderProduct) {
    const p = activeOrderProduct.product;
    const qty = activeOrderProduct.quantity;
    const fInfo = getFrameInfo(p.frameColor);
    orderItems.push({
      name: p.name,
      size: p.size,
      frameColor: p.frameColor || 'none',
      frameLabel: (p.frameColor && p.frameColor !== 'none') ? fInfo.label : '',
      qty: qty,
      priceUSD: p.priceUSD * qty,
      image: p.imageUrl || p.image || ''
    });
    finalUSD = p.priceUSD * qty;
    finalKHR = p.priceKHR * qty;
  }

  syncSchoolEngraveText();
  const customerCustomText = document.getElementById('cust-custom-text')?.value.trim() || '';
  const engraveSchool = document.getElementById('cust-engrave-school')?.value.trim() || '';
  const engraveGrade = document.getElementById('cust-engrave-grade')?.value.trim() || '';
  const isSchoolOrder = document.getElementById('cust-is-school-order')?.checked || false;
  const schoolName = document.getElementById('cust-school-name')?.value.trim() || '';
  const schoolDirector = document.getElementById('cust-school-director')?.value.trim() || '';

  const totalOrderUnits = orderItems.reduce((acc, i) => acc + i.qty, 0);
  const bulk = getBulkDiscountInfo(totalOrderUnits, finalUSD, finalKHR);

  // Discount & Shipping calculation
  const shipping = (typeof getEffectiveOrderShipping === 'function') 
    ? getEffectiveOrderShipping() 
    : { isFree: false, effectiveUSD: 0, effectiveKHR: 0, locationName: 'ទូទៅ', deliveryEstimate: '១ ទៅ ២ ថ្ងៃ' };

  const subtotalUSD = finalUSD;
  const subtotalKHR = finalKHR;
  const couponDiscountUSD = appliedCoupon ? appliedCoupon.discountUSD : 0;
  const couponDiscountKHR = appliedCoupon ? appliedCoupon.discountKHR : 0;
  const totalDiscountUSD = bulk.discountUSD + couponDiscountUSD;
  const totalDiscountKHR = bulk.discountKHR + couponDiscountKHR;
  const itemsPayableUSD = Math.max(0, subtotalUSD - totalDiscountUSD);
  const itemsPayableKHR = Math.max(0, subtotalKHR - totalDiscountKHR);
  const payableUSD = itemsPayableUSD + shipping.effectiveUSD;
  const payableKHR = itemsPayableKHR + shipping.effectiveKHR;

  // Save Order to LocalStorage for Admin Dashboard Orders History
  const newOrder = {
    id: orderId,
    invoiceNo: nextInvoiceNo,
    customerName: customerName,
    customerPhone: customerPhone,
    customerAddress: customerAddress,
    paymentMethod: paymentMethod,
    customerNote: customerNote,
    customText: customerCustomText,
    engraveSchool: engraveSchool,
    engraveGrade: engraveGrade,
    isSchoolOrder: isSchoolOrder,
    schoolName: schoolName,
    schoolDirector: schoolDirector,
    deliveryType: shipping.deliveryType || 'pickup',
    deliveryTypeLabel: shipping.deliveryTypeLabel || '🏢 ផ្ញើសាខា/បេនឡាន (Pickup)',
    isHomeDelivery: shipping.isHomeDelivery || false,
    shippingLocation: shipping.locationName,
    shippingFeeUSD: shipping.effectiveUSD,
    shippingFeeKHR: shipping.effectiveKHR,
    isFreeShipping: shipping.isFree,
    deliveryEstimate: shipping.deliveryEstimate,
    couponCode: appliedCoupon ? appliedCoupon.code : null,
    bulkDiscountPercent: bulk.percent,
    bulkDiscountUSD: bulk.discountUSD,
    bulkDiscountKHR: bulk.discountKHR,
    discountUSD: totalDiscountUSD,
    discountKHR: totalDiscountKHR,
    paymentSlip: uploadedSlipDataUrl || null,
    paymentAccountVerified: (slipCheck && slipCheck.accountName) ? slipCheck.accountName : 'KOEUR SOYTY',
    paymentBankVerified: (slipCheck && slipCheck.bankName) ? slipCheck.bankName : 'ABA Bank',
    paidAmountUSD: slipCheck ? (slipCheck.currency === 'USD' ? slipCheck.enteredVal : (slipCheck.enteredVal / 4000)) : payableUSD,
    paidAmountKHR: slipCheck ? (slipCheck.currency === 'KHR' ? slipCheck.enteredVal : Math.round(slipCheck.enteredVal * 4000)) : payableKHR,
    paidCurrency: slipCheck ? slipCheck.currency : 'USD',
    slipTrxRef: document.getElementById('cust-slip-trx-id')?.value.trim() || '',
    isSlipVerified: true,
    items: orderItems,
    subtotalUSD: subtotalUSD,
    subtotalKHR: subtotalKHR,
    totalUSD: payableUSD,
    totalKHR: payableKHR,
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  // Decrement Stock
  orderItems.forEach(item => {
    const prod = productsData.find(p => p.name === item.name);
    if (prod && prod.stockQty !== undefined) {
      prod.stockQty = Math.max(0, prod.stockQty - item.qty);
      if (prod.stockQty === 0) prod.inStock = false;
    }
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productsData));
  renderProducts();

  try {
    const ordersRaw = localStorage.getItem(ORDERS_STORAGE_KEY);
    const ordersList = ordersRaw ? JSON.parse(ordersRaw) : [];
    ordersList.unshift(newOrder);
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(ordersList));
    latestCompletedOrder = newOrder;
  } catch (err) {
    console.warn("Could not save order to localStorage:", err);
    latestCompletedOrder = newOrder;
  }

  // Populate Success Modal
  document.getElementById('success-order-id').textContent = `${orderId} (វិក្កយបត្រលេខៈ ${nextInvoiceNo})`;
  document.getElementById('success-cust-name').textContent = customerName;
  document.getElementById('success-cust-phone').textContent = customerPhone;
  document.getElementById('success-cust-address').textContent = customerAddress;
  document.getElementById('success-payment-method').textContent = paymentMethod;
  document.getElementById('success-total-price').textContent = `${formatUSD(payableUSD)} (${formatKHR(payableKHR)})`;

  const customTextRow = document.getElementById('success-custom-text-row');
  const customTextEl = document.getElementById('success-custom-text');
  if (customerCustomText) {
    if (customTextEl) customTextEl.textContent = customerCustomText;
    if (customTextRow) customTextRow.classList.remove('hidden');
  } else {
    if (customTextRow) customTextRow.classList.add('hidden');
  }

  const slipRow = document.getElementById('success-slip-row');
  const slipStatusEl = document.getElementById('success-slip-status');
  if (uploadedSlipDataUrl) {
    if (slipRow) slipRow.classList.remove('hidden');
    if (slipStatusEl) {
      const verifiedAmountStr = slipCheck ? (slipCheck.currency === 'USD' ? formatUSD(slipCheck.enteredVal) : formatKHR(slipCheck.enteredVal)) : formatUSD(payableUSD);
      const verifiedAccountStr = (slipCheck && slipCheck.accountName) ? `${slipCheck.bankName} - ${slipCheck.accountName}` : paymentMethod;
      const refStr = newOrder.slipTrxRef ? ` | Ref: ${newOrder.slipTrxRef}` : '';
      slipStatusEl.textContent = `✓ បានភ្ជាប់រួចរាល់ (ផ្ទៀងផ្ទាត់ KHQR: ${verifiedAccountStr} | ទឹកប្រាក់៖ ${verifiedAmountStr} ត្រឹមត្រូវ${refStr})`;
    }
  } else {
    if (slipRow) slipRow.classList.add('hidden');
  }

  const discountRow = document.getElementById('success-discount-row');
  const discountAmountEl = document.getElementById('success-discount-amount');
  if (totalDiscountUSD > 0) {
    const discParts = [];
    if (bulk.percent > 0) discParts.push(`ទិញដុំ -${bulk.percent}% (-${formatUSD(bulk.discountUSD)})`);
    if (appliedCoupon && couponDiscountUSD > 0) discParts.push(`កូដ ${appliedCoupon.code} (-${formatUSD(couponDiscountUSD)})`);
    if (discountAmountEl) discountAmountEl.textContent = `-${formatUSD(totalDiscountUSD)} (${discParts.join(' + ')})`;
    if (discountRow) discountRow.classList.remove('hidden');
  } else {
    if (discountRow) discountRow.classList.add('hidden');
  }

  const successListContainer = document.getElementById('success-items-list');
  successListContainer.innerHTML = orderItems.map(item => `
    <div class="flex justify-between items-center text-xs py-1 border-b border-slate-100">
      <div class="pr-2">
        <span class="font-medium text-slate-800">${item.name}</span>
        <span class="text-sky-600 block text-[11px]">${item.frameLabel ? item.frameLabel + ' • ' : ''}ទំហំ៖ ${item.size} × ${item.qty}</span>
      </div>
      <span class="font-bold text-slate-700">${formatUSD(item.priceUSD)}</span>
    </div>
  `).join('');

  // Prepare Telegram Message String
  let tgText = `🛍️ ការបញ្ជាទិញថ្មី [${orderId}]\n`;
  tgText += `👤 អតិថិជន: ${customerName}\n`;
  tgText += `📞 ទូរស័ព្ទ: ${customerPhone}\n`;
  tgText += `📍 ទីតាំង: ${customerAddress}\n`;
  if (isSchoolOrder) {
    tgText += `🏫 សាលារៀន: ${schoolName || 'មិនបានបញ្ជាក់'}\n`;
    if (schoolDirector) tgText += `👨‍💼 នាយក/អ្នកស្នើ: ${schoolDirector}\n`;
  }
  tgText += `💳 វិធីទូទាត់: ${paymentMethod}\n`;
  if (engraveSchool || engraveGrade) {
    tgText += `✨ ឆ្លាក់ឈ្មោះលើផ្ទាំង (Free): ${engraveSchool ? 'សាលា៖ ' + engraveSchool + ' ' : ''}${engraveGrade ? 'ថ្នាក់/គ្រូ៖ ' + engraveGrade : ''}\n`;
  } else if (customerCustomText) {
    tgText += `🏷️ ឈ្មោះដាក់លើផ្ទាំង: ${customerCustomText}\n`;
  }
  if (bulk.percent > 0) tgText += `🎁 បញ្ចុះតម្លៃទិញដុំ (${bulk.percent}%): -${formatUSD(bulk.discountUSD)} (-${formatKHR(bulk.discountKHR)})\n`;
  if (appliedCoupon && couponDiscountUSD > 0) tgText += `🎟️ កូដប្រូម៉ូសិន: ${appliedCoupon.code} (-${formatUSD(couponDiscountUSD)})\n`;
  if (uploadedSlipDataUrl) {
    const verifiedAmountStr = slipCheck ? (slipCheck.currency === 'USD' ? formatUSD(slipCheck.enteredVal) : formatKHR(slipCheck.enteredVal)) : formatUSD(payableUSD);
    const verifiedAccountStr = (slipCheck && slipCheck.accountName) ? `${slipCheck.bankName} (${slipCheck.accountName})` : paymentMethod;
    const trxRefStr = document.getElementById('cust-slip-trx-id')?.value.trim();
    tgText += `📷 វិក្កយបត្របង់ប្រាក់: បានភ្ជាប់លើវេបសាយ (គណនី: ${verifiedAccountStr} | ទឹកប្រាក់: ${verifiedAmountStr} ✓ ត្រឹមត្រូវ)\n`;
    if (trxRefStr) tgText += `🔢 Trx ID / Ref: ${trxRefStr}\n`;
  }
  if (customerNote) tgText += `📝 ចំណាំ: ${customerNote}\n`;
  tgText += `\n📦 មុខទំនិញ (${totalOrderUnits} ផ្ទាំង):\n`;
  orderItems.forEach(i => {
    const framePart = i.frameLabel ? ` [${i.frameLabel}]` : '';
    tgText += `- ${i.name}${framePart} (ទំហំ: ${i.size}) x${i.qty} = ${formatUSD(i.priceUSD)}\n`;
  });
  const deliveryTypeTxt = shipping.deliveryTypeLabel || (shipping.isHomeDelivery ? '🏠 ដឹកជញ្ជូនដល់ផ្ទះ' : '🏢 ផ្ញើសាខា/បេនឡាន');
  if (shipping.isFree) {
    tgText += `🚚 ការដឹកជញ្ជូន: ${deliveryTypeTxt} - ${shipping.locationName} (Free Shipping 🎉)\n`;
  } else {
    tgText += `🚚 ការដឹកជញ្ជូន: ${deliveryTypeTxt} - ${shipping.locationName} (+${formatUSD(shipping.effectiveUSD)})\n`;
  }
  tgText += `\n💰 សរុបចុងក្រោយ: ${formatUSD(payableUSD)} (${formatKHR(payableKHR)})`;

  const tgEncoded = encodeURIComponent(tgText);
  latestOrderTelegramText = tgText;

  // Auto copy order text to clipboard so it's always ready to paste
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(tgText).catch(() => {});
  }

  const shopOwnerTgUrl = (typeof getShopTelegramUrl === 'function') 
    ? getShopTelegramUrl(tgText) 
    : `https://t.me/+855964361201?text=${tgEncoded}`;

  const tgBtn = document.getElementById('telegram-share-btn');
  if (tgBtn) {
    tgBtn.href = shopOwnerTgUrl;
    tgBtn.onclick = openTelegramOrderShare;
  }

  const bankTgBtn = document.getElementById('bank-selector-telegram-btn');
  if (bankTgBtn) {
    bankTgBtn.href = shopOwnerTgUrl;
    bankTgBtn.onclick = openTelegramOrderShare;
  }

  // Toggle official school quotation button in success modal
  const quotationBtn = document.getElementById('success-quotation-btn');
  if (quotationBtn) {
    if (isSchoolOrder) quotationBtn.classList.remove('hidden');
    else quotationBtn.classList.add('hidden');
  }

  // Automatic Background Telegram Bot Alert (if configured)
  sendTelegramBotOrderAlert(newOrder, tgText);

  // Auto-connect to Shop Owner Telegram if checkbox is checked
  const autoTelegram = document.getElementById('cust-auto-telegram')?.checked ?? true;
  if (autoTelegram) {
    try {
      window.open(shopOwnerTgUrl, '_blank');
      showToast("✈️ កំពុងភ្ជាប់ទៅកាន់ Telegram ម្ចាស់ហាង (096 436 1201)...", "sky");
    } catch (err) {
      console.warn("Could not auto open telegram:", err);
    }
  }

  // Award Lucky Wheel Spins: Every $5 spent = +1 Spin
  const earnedLuckySpins = Math.floor(payableUSD / 5);
  const earnedSpinsCard = document.getElementById('success-lucky-spin-reward');
  const earnedSpinsBadge = document.getElementById('success-earned-spins-badge');
  const earnedSpinsDesc = document.getElementById('success-earned-spins-desc');

  if (earnedLuckySpins > 0) {
    if (typeof addLuckySpins === 'function') {
      addLuckySpins(earnedLuckySpins);
    }
    if (earnedSpinsCard) earnedSpinsCard.classList.remove('hidden');
    if (earnedSpinsBadge) earnedSpinsBadge.textContent = `+${earnedLuckySpins} ដង`;
    if (earnedSpinsDesc) {
      earnedSpinsDesc.textContent = `ការកុម្ម៉ង់សរុប $${payableUSD.toFixed(2)} ទទួលបានការបង្វិលកង់សំណាងបន្ថែម +${earnedLuckySpins} ដង (រាល់ $5.00 បាន +1 ដង)!`;
    }
    if (typeof showToast === 'function') {
      showToast(`🎉 អបអរសាទរ! អ្នកទទួលបានការបង្វិលកង់សំណាង +${earnedLuckySpins} ដង!`, 'amber');
    }
  } else {
    if (earnedSpinsCard) earnedSpinsCard.classList.add('hidden');
  }

  // Close Order Modal, Open Success Modal
  closeOrderModal();
  orderSuccessModal.classList.remove('hidden');
  updateBodyScrollLock();

  // Reset form
  orderForm.reset();
  resetCoupon();
  removeSlip();
  const schoolFields = document.getElementById('school-order-fields');
  if (schoolFields) schoolFields.classList.add('hidden');

  // Automatically pop up Bank App Selector Modal for instant payment
  openBankSelectorModal(newOrder);
}

function closeSuccessModal() {
  orderSuccessModal.classList.add('hidden');
  updateBodyScrollLock();
}

// Update Category Count Badges on User Web Shop
function updateUserCategoryCounts() {
  const total = productsData.length;
  const decor = productsData.filter(p => p.category === 'decor').length;
  const teaching = productsData.filter(p => p.category === 'teaching').length;
  const games = productsData.filter(p => p.category === 'games').length;
  const combo = productsData.filter(p => p.category === 'combo').length;

  const countAll = document.getElementById('user-count-all');
  const countDecor = document.getElementById('user-count-decor');
  const countTeaching = document.getElementById('user-count-teaching');
  const countGames = document.getElementById('user-count-games');
  const countCombo = document.getElementById('user-count-combo');

  if (countAll) countAll.textContent = total;
  if (countDecor) countDecor.textContent = decor;
  if (countTeaching) countTeaching.textContent = teaching;
  if (countGames) countGames.textContent = games;
  if (countCombo) countCombo.textContent = combo;
}

// Seasonal & Cultural Background Theme Manager ('khmer' | 'school' | 'vacation')
const CURRENT_THEME_VER = 'edushop_theme_ver_khmer_flagship_v1';

function applyTheme(theme) {
  // Ensure the new Khmer theme is automatically activated by default
  if (!localStorage.getItem(CURRENT_THEME_VER)) {
    localStorage.setItem(THEME_STORAGE_KEY, 'khmer');
    localStorage.setItem(CURRENT_THEME_VER, 'true');
  }

  const currentTheme = theme || localStorage.getItem(THEME_STORAGE_KEY) || 'khmer';
  const body = document.body;
  const promoBar = document.getElementById('top-promo-bar');
  const promoTag = document.getElementById('top-promo-tag');
  const promoText = document.getElementById('top-promo-text');
  const heroSection = document.getElementById('hero-section');
  const heroBadge = document.getElementById('hero-badge');
  const heroHeading = document.getElementById('hero-heading');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroDecorBg = document.getElementById('hero-decor-bg');

  // Reset classes first
  body.classList.remove('theme-khmer', 'theme-school', 'theme-vacation');

  if (currentTheme === 'khmer') {
    body.classList.add('theme-khmer');

    if (promoBar) {
      promoBar.className = 'bg-gradient-to-r from-amber-800 via-emerald-800 to-teal-900 text-white text-xs py-2 px-3 sm:px-4 shadow-sm transition-colors duration-300 relative z-30';
    }
    if (promoTag) {
      promoTag.textContent = '🪷 ខ្មែរ-អង្គរ & ធម្មជាតិ';
      promoTag.className = 'inline-flex items-center justify-center bg-amber-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse flex-shrink-0';
    }
    if (promoText) {
      promoText.innerHTML = '🪷 មោទនភាពកម្ពុជា | 📚 ផ្ទាំងអប់រំបែបខ្មែរ & សម្ភារៈបង្រៀនគុណភាពខ្ពស់ | 🚚 ផ្ញើជូន <strong>២៥ ខេត្ត-ក្រុង</strong> | 🎁 កម្ម៉ង់ចាប់ពី <strong>១០ ផ្ទាំង</strong> ឡើងទៅ មានតម្លៃពិសេស!';
    }
    if (heroSection) {
      heroSection.className = 'relative overflow-hidden py-12 sm:py-20 transition-all duration-500 border-b border-amber-900/40 text-white shadow-inner';
      heroSection.style.background = "linear-gradient(to bottom, rgba(15, 23, 42, 0.45) 0%, rgba(6, 78, 59, 0.25) 50%, rgba(15, 23, 42, 0.65) 100%), url('khmer_edu_bg.jpg') center/cover no-repeat";
    }
    if (heroBadge) {
      heroBadge.innerHTML = '🪷 អរិយធម៌អង្គរ & ការអប់រំខ្មែរជំនាន់ថ្មី | ធម្មជាតិ និងប្រាជ្ញា';
      heroBadge.className = 'inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-amber-400/25 text-amber-300 border border-amber-400/50 mb-4 shadow-lg backdrop-blur-md';
    }
    if (heroHeading) {
      heroHeading.innerHTML = '<span class="text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">EduShop</span><br/><span class="text-white text-2xl sm:text-4xl md:text-5xl drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)] font-black">សម្ភារៈតុបតែងថ្នាក់ & សម្ភារៈបង្រៀនបែបខ្មែរ</span>';
    }
    if (heroSubtitle) {
      heroSubtitle.innerHTML = 'បណ្តុះចំណេះដឹង និងស្មារតីសិស្សានុសិស្ស តាមរយៈផ្ទាំងរូបភាពអប់រំ ប្រាសាទបុរាណ ធម្មជាតិស្រស់បំព្រង ផ្កាឈូក និងល្បែងសិក្សាសម្បូរបែប។';
      heroSubtitle.className = 'text-sm sm:text-lg text-white max-w-2xl mx-auto mb-6 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] font-medium';
    }
    if (heroDecorBg) {
      heroDecorBg.innerHTML = `
        <span class="absolute top-4 left-6 text-4xl opacity-40 animate-float pointer-events-none select-none">🪷</span>
        <span class="absolute top-8 right-10 text-4xl opacity-40 animate-float pointer-events-none select-none" style="animation-delay: 1s;">🏛️</span>
        <span class="absolute bottom-6 left-12 text-4xl opacity-40 animate-float pointer-events-none select-none" style="animation-delay: 2s;">📚</span>
        <span class="absolute bottom-4 right-16 text-4xl opacity-40 animate-float pointer-events-none select-none" style="animation-delay: 1.5s;">🌴</span>
        <span class="absolute top-1/2 left-1/4 text-3xl opacity-35 animate-float pointer-events-none select-none" style="animation-delay: 0.5s;">📜</span>
        <span class="absolute top-1/3 right-1/4 text-3xl opacity-35 animate-float pointer-events-none select-none" style="animation-delay: 2.5s;">🎓</span>
        <span class="absolute top-1/4 left-1/2 text-3xl opacity-35 animate-float pointer-events-none select-none" style="animation-delay: 3s;">✨</span>
      `;
    }
  } else if (currentTheme === 'vacation') {
    body.classList.add('theme-vacation');

    if (promoBar) {
      promoBar.className = 'bg-gradient-to-r from-amber-700 via-emerald-700 to-teal-800 text-white text-xs py-2 px-3 sm:px-4 shadow-sm transition-colors duration-300 relative z-30';
    }
    if (promoTag) {
      promoTag.textContent = '🎨 តុបតែងថ្នាក់ & សិក្សាអនឡាញ';
      promoTag.className = 'inline-flex items-center justify-center bg-amber-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse flex-shrink-0';
    }
    if (promoText) {
      promoText.innerHTML = '🎨 រដូវកាលវិស្សមកាល! ✂️ តុបតែងថ្នាក់រៀន & 💻 សិក្សាពីចម្ងាយ (Online Learning) | 🚚 ផ្ញើជូន <strong>២៥ ខេត្ត-ក្រុង</strong> | 🎁 កម្ម៉ង់ចាប់ពី <strong>១០ ផ្ទាំង</strong> ឡើងទៅ មានតម្លៃពិសេស!';
    }
    if (heroSection) {
      heroSection.className = 'relative overflow-hidden py-12 sm:py-20 transition-all duration-500 border-b border-amber-900/40 text-white shadow-inner';
      heroSection.style.background = "linear-gradient(to bottom, rgba(15, 23, 42, 0.45) 0%, rgba(180, 83, 9, 0.25) 50%, rgba(15, 23, 42, 0.65) 100%), url('vacation_season_bg.jpg') center/cover no-repeat";
    }
    if (heroBadge) {
      heroBadge.innerHTML = '🎨 រដូវកាលវិស្សមកាល | តុបតែងថ្នាក់រៀន & សិក្សាពីចម្ងាយ (Online Learning)';
      heroBadge.className = 'inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-amber-400/25 text-amber-200 border border-amber-400/50 shadow-lg backdrop-blur-md';
    }
    if (heroHeading) {
      heroHeading.innerHTML = '<span class="text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">EduShop</span><br/><span class="text-white text-2xl sm:text-4xl md:text-5xl drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)] font-black">តុបតែងថ្នាក់រៀន & ការសិក្សាពីចម្ងាយបែបទំនើប</span>';
    }
    if (heroSubtitle) {
      heroSubtitle.innerHTML = 'ត្រៀមស្វាគមន៍ឆ្នាំសិក្សាថ្មីដោយការច្នៃប្រឌិតតុបតែងថ្នាក់រៀន ផ្ទាំងបដាស្វាគមន៍ បណ្ណពាក្យ និងការបង្រៀន-រៀនពីចម្ងាយតាមអនឡាញប្រកបដោយភាពស្និទ្ធស្នាលរវាងគ្រូ និងសិស្ស។';
      heroSubtitle.className = 'text-sm sm:text-lg text-white max-w-2xl mx-auto mb-6 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] font-medium';
    }
    if (heroDecorBg) {
      heroDecorBg.innerHTML = `
        <span class="absolute top-4 left-6 text-4xl opacity-40 animate-float pointer-events-none select-none">🎨</span>
        <span class="absolute top-8 right-10 text-4xl opacity-40 animate-float pointer-events-none select-none" style="animation-delay: 1s;">💻</span>
        <span class="absolute bottom-6 left-12 text-4xl opacity-40 animate-float pointer-events-none select-none" style="animation-delay: 2s;">✂️</span>
        <span class="absolute bottom-4 right-16 text-4xl opacity-40 animate-float pointer-events-none select-none" style="animation-delay: 1.5s;">📱</span>
        <span class="absolute top-1/2 left-1/4 text-3xl opacity-35 animate-float pointer-events-none select-none" style="animation-delay: 0.5s;">🎈</span>
        <span class="absolute top-1/3 right-1/4 text-3xl opacity-35 animate-float pointer-events-none select-none" style="animation-delay: 2.5s;">☀️</span>
        <span class="absolute top-1/4 left-1/2 text-3xl opacity-35 animate-float pointer-events-none select-none" style="animation-delay: 3s;">✨</span>
      `;
    }
  } else {
    // Theme 2: School Season (រដូវកាលសិក្សា - បរិយាកាសគ្រូ និងសិស្សក្នុងថ្នាក់រៀន)
    body.classList.add('theme-school');

    if (promoBar) {
      promoBar.className = 'bg-gradient-to-r from-sky-800 via-indigo-800 to-blue-900 text-white text-xs py-2 px-3 sm:px-4 shadow-sm transition-colors duration-300 relative z-30';
    }
    if (promoTag) {
      promoTag.textContent = '🎒 បវេសនកាល';
      promoTag.className = 'inline-flex items-center justify-center bg-amber-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse flex-shrink-0';
    }
    if (promoText) {
      promoText.innerHTML = '🎒 ស្វាគមន៍បវេសនកាលសិក្សាថ្មី! 📚 សម្ភារៈបង្រៀន & តុបតែងថ្នាក់រៀនគុណភាពខ្ពស់ | 🚚 ដឹកជញ្ជូន <strong>២៥ ខេត្ត-ក្រុង</strong> | 🎁 កម្ម៉ង់ចាប់ពី <strong>១០ ផ្ទាំង</strong> ឡើងទៅ មានតម្លៃពិសេស!';
    }
    if (heroSection) {
      heroSection.className = 'relative overflow-hidden py-12 sm:py-20 transition-all duration-500 border-b border-sky-900/40 text-white shadow-inner';
      heroSection.style.background = "linear-gradient(to bottom, rgba(15, 23, 42, 0.45) 0%, rgba(3, 105, 161, 0.25) 50%, rgba(15, 23, 42, 0.65) 100%), url('school_season_bg.jpg') center/cover no-repeat";
    }
    if (heroBadge) {
      heroBadge.innerHTML = '🎒 បវេសនកាលសិក្សាថ្មី | បរិយាកាសបង្រៀន និងរៀនក្នុងថ្នាក់រៀន';
      heroBadge.className = 'inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-sky-400/25 text-sky-200 border border-sky-400/50 shadow-lg backdrop-blur-md';
    }
    if (heroHeading) {
      heroHeading.innerHTML = '<span class="text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">EduShop</span><br/><span class="text-white text-2xl sm:text-4xl md:text-5xl drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)] font-black">សម្ភារៈតុបតែងថ្នាក់ & ជំនួយការបង្រៀនគ្រូ-សិស្ស</span>';
    }
    if (heroSubtitle) {
      heroSubtitle.innerHTML = 'បង្កើនប្រសិទ្ធភាពនៃការបង្រៀន និងរៀនក្នុងថ្នាក់ ជាមួយផ្ទាំងរូបភាពអប់រំ បណ្ណពាក្យ និងឧបករណ៍បង្រៀនគុណភាពខ្ពស់ ជួយសិស្សឆាប់យល់ និងស្រឡាញ់ការសិក្សា។';
      heroSubtitle.className = 'text-sm sm:text-lg text-white max-w-2xl mx-auto mb-6 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] font-medium';
    }
    if (heroDecorBg) {
      heroDecorBg.innerHTML = `
        <span class="absolute top-4 left-6 text-4xl opacity-40 animate-float pointer-events-none select-none">📚</span>
        <span class="absolute top-8 right-10 text-4xl opacity-40 animate-float pointer-events-none select-none" style="animation-delay: 1s;">✏️</span>
        <span class="absolute bottom-6 left-12 text-4xl opacity-40 animate-float pointer-events-none select-none" style="animation-delay: 2s;">📐</span>
        <span class="absolute bottom-4 right-16 text-4xl opacity-40 animate-float pointer-events-none select-none" style="animation-delay: 1.5s;">🎒</span>
        <span class="absolute top-1/2 left-1/4 text-3xl opacity-35 animate-float pointer-events-none select-none" style="animation-delay: 0.5s;">🎓</span>
        <span class="absolute top-1/3 right-1/4 text-3xl opacity-35 animate-float pointer-events-none select-none" style="animation-delay: 2.5s;">🔔</span>
        <span class="absolute top-1/4 left-1/2 text-3xl opacity-35 animate-float pointer-events-none select-none" style="animation-delay: 3s;">⭐</span>
      `;
    }
  }
  applyPromoBannerSettings();
}

// User Theme Selector Modal Functions
function openThemeModalUser() {
  const modal = document.getElementById('user-theme-modal');
  if (!modal) return;
  updateThemeModalUserUI();
  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

function closeThemeModalUser() {
  const modal = document.getElementById('user-theme-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function selectThemeUser(themeKey) {
  if (themeKey !== 'khmer' && themeKey !== 'school' && themeKey !== 'vacation') return;
  localStorage.setItem(THEME_STORAGE_KEY, themeKey);
  applyTheme(themeKey);
  updateThemeModalUserUI();
  const title = themeKey === 'khmer' ? 'ទី១. ខ្មែរ-អង្គរ & ធម្មជាតិ' : themeKey === 'school' ? 'ទី២. រដូវកាលសិក្សា' : 'ទី៣. រដូវកាលវិស្សមកាល & តុបតែងថ្នាក់/អនឡាញ';
  showToast(`🎉 បានផ្លាស់ប្តូរផ្ទៃ Background ទៅជា «${title}»!`);
}

function updateThemeModalUserUI() {
  const current = localStorage.getItem(THEME_STORAGE_KEY) || 'khmer';
  const cardKhmer = document.getElementById('user-theme-card-khmer');
  const cardSchool = document.getElementById('user-theme-card-school');
  const cardVacation = document.getElementById('user-theme-card-vacation');
  const badgeKhmer = document.getElementById('user-theme-badge-khmer');
  const badgeSchool = document.getElementById('user-theme-badge-school');
  const badgeVacation = document.getElementById('user-theme-badge-vacation');

  if (cardKhmer && badgeKhmer) {
    if (current === 'khmer') {
      cardKhmer.className = 'group relative rounded-2xl border-2 border-amber-600 bg-amber-50/40 shadow-md p-4 cursor-pointer transition-all flex flex-col justify-between space-y-3';
      badgeKhmer.classList.remove('hidden');
    } else {
      cardKhmer.className = 'group relative rounded-2xl border-2 border-slate-200 hover:border-amber-300 bg-white hover:shadow-md p-4 cursor-pointer transition-all flex flex-col justify-between space-y-3';
      badgeKhmer.classList.add('hidden');
    }
  }

  if (cardSchool && badgeSchool) {
    if (current === 'school') {
      cardSchool.className = 'group relative rounded-2xl border-2 border-sky-600 bg-sky-50/40 shadow-md p-4 cursor-pointer transition-all flex flex-col justify-between space-y-3';
      badgeSchool.classList.remove('hidden');
    } else {
      cardSchool.className = 'group relative rounded-2xl border-2 border-slate-200 hover:border-sky-300 bg-white hover:shadow-md p-4 cursor-pointer transition-all flex flex-col justify-between space-y-3';
      badgeSchool.classList.add('hidden');
    }
  }

  if (cardVacation && badgeVacation) {
    if (current === 'vacation') {
      cardVacation.className = 'group relative rounded-2xl border-2 border-amber-600 bg-amber-50/40 shadow-md p-4 cursor-pointer transition-all flex flex-col justify-between space-y-3';
      badgeVacation.classList.remove('hidden');
    } else {
      cardVacation.className = 'group relative rounded-2xl border-2 border-slate-200 hover:border-amber-300 bg-white hover:shadow-md p-4 cursor-pointer transition-all flex flex-col justify-between space-y-3';
      badgeVacation.classList.add('hidden');
    }
  }
}

// Wallpaper Fullscreen Lightbox
function openWallpaperModal() {
  const current = localStorage.getItem(THEME_STORAGE_KEY) || 'khmer';
  const modal = document.getElementById('user-wallpaper-modal');
  const img = document.getElementById('user-wallpaper-img');
  const title = document.getElementById('user-wallpaper-title');
  const desc = document.getElementById('user-wallpaper-desc');
  const dlLink = document.getElementById('user-wallpaper-download');

  if (current === 'school') {
    if (img) img.src = 'school_season_bg.jpg';
    if (title) title.textContent = 'ផ្ទាំងគំនូរបរិយាកាសបង្រៀន និងរៀនក្នុងថ្នាក់រៀន (Classroom Teaching & Learning Wallpaper)';
    if (desc) desc.textContent = '👩‍🏫 អ្នកគ្រូបង្រៀន • 👦👧 សិស្សានុសិស្សក្នុងថ្នាក់រៀន • 📚 ផ្ទាំងអប់រំ និងសម្ភារៈតុបតែងថ្នាក់';
    if (dlLink) {
      dlLink.href = 'school_season_bg.jpg';
      dlLink.download = 'classroom_teaching_wallpaper.jpg';
    }
  } else if (current === 'vacation') {
    if (img) img.src = 'vacation_season_bg.jpg';
    if (title) title.textContent = 'ផ្ទាំងគំនូរការតុបតែងថ្នាក់រៀន & សិក្សាពីចម្ងាយ (Classroom Decor & Online Learning Wallpaper)';
    if (desc) desc.textContent = '🎨 ការតុបតែងថ្នាក់រៀន • 💻 ការសិក្សាពីចម្ងាយ (Online) • ✂️ សិល្បៈច្នៃប្រឌិត និងល្បែងសិក្សា';
    if (dlLink) {
      dlLink.href = 'vacation_season_bg.jpg';
      dlLink.download = 'classroom_decor_online_learning_wallpaper.jpg';
    }
  } else {
    if (img) img.src = 'khmer_edu_bg.jpg';
    if (title) title.textContent = 'ផ្ទាំងគំនូរទេសភាពខ្មែរ-អង្គរ & ធម្មជាតិសិក្សា (Khmer Heritage & Nature Wallpaper)';
    if (desc) desc.textContent = '🏛️ ប្រាសាទអង្គរវត្ត • 🪷 ផ្កាឈូក & ធម្មជាតិ • 📚 សៀវភៅវិជ្ជា & មួកបញ្ចប់ការសិក្សា';
    if (dlLink) {
      dlLink.href = 'khmer_edu_bg.jpg';
      dlLink.download = 'khmer_angkor_edu_wallpaper.jpg';
    }
  }

  if (modal) {
    modal.classList.remove('hidden');
    updateBodyScrollLock();
  }
}

function closeWallpaperModal() {
  const modal = document.getElementById('user-wallpaper-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

// =========================================================================
// SECTION 4.5: PROMO / ADVERTISEMENT BANNER LOGIC (កែប្រែផ្ទាំងពាណិជ្ជកម្ម)
// =========================================================================

const PROMO_BANNER_STORAGE_KEY = 'edushop_promo_banner_settings';

const DEFAULT_PROMO_BANNER_SETTINGS = {
  tag: '🎒 បវេសនកាល',
  badge: '🎒 បវេសនកាលសិក្សាថ្មី | បរិយាកាសបង្រៀន និងរៀនក្នុងថ្នាក់រៀន',
  heading: 'សម្ភារៈតុបតែងថ្នាក់ & ជំនួយការបង្រៀនគ្រូ-សិស្ស',
  subtitle: 'បង្កើនប្រសិទ្ធភាពនៃការបង្រៀន និងរៀនក្នុងថ្នាក់ ជាមួយផ្ទាំងរូបភាពអប់រំ បណ្ណពាក្យ និងឧបករណ៍បង្រៀនគុណភាពខ្ពស់ ជួយសិស្សឆាប់យល់ និងស្រឡាញ់ការសិក្សា។',
  marqueeText: '🎒 ស្វាគមន៍បវេសនកាលសិក្សាថ្មី! 📚 សម្ភារៈបង្រៀន & តុបតែងថ្នាក់រៀនគុណភាពខ្ពស់ | 🚚 ផ្ញើជូន <strong>២៥ ខេត្ត-ក្រុង</strong> | 🎁 កម្ម៉ង់ចាប់ពី <strong>១០ ផ្ទាំង</strong> ឡើងទៅ មានតម្លៃពិសេស!',
  couponCode: 'EDUSHOP10',
  contactPhone: '031 97 11 333 (ម្ចាស់ហាង) / 096 436 1201'
};

function getStoredPromoBannerSettings() {
  try {
    const raw = localStorage.getItem(PROMO_BANNER_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return Object.assign({}, DEFAULT_PROMO_BANNER_SETTINGS, parsed);
      }
    }
  } catch (err) {
    console.warn('Error reading promo banner settings:', err);
  }
  return null;
}

function applyPromoBannerSettings() {
  const promoSettings = getStoredPromoBannerSettings();
  if (!promoSettings) return;

  const promoTag = document.getElementById('top-promo-tag');
  const promoText = document.getElementById('top-promo-text');
  const heroBadge = document.getElementById('hero-badge');
  const heroHeading = document.getElementById('hero-heading');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroCouponText = document.getElementById('hero-coupon-text');

  if (promoTag && promoSettings.tag) {
    promoTag.textContent = promoSettings.tag;
  }
  if (promoText && promoSettings.marqueeText) {
    promoText.innerHTML = promoSettings.marqueeText;
  }
  if (heroBadge && promoSettings.badge) {
    heroBadge.innerHTML = promoSettings.badge;
  }
  if (heroHeading && promoSettings.heading) {
    heroHeading.innerHTML = `<span class="shimmer-text drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">EduShop</span><br/><span class="text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">${promoSettings.heading}</span>`;
  }
  if (heroSubtitle && promoSettings.subtitle) {
    heroSubtitle.textContent = promoSettings.subtitle;
  }
  if (heroCouponText && promoSettings.couponCode) {
    heroCouponText.textContent = `កូដ ${promoSettings.couponCode}`;
  }
}

// =========================================================================
// ================= CUSTOMER NIGHT MODE ENGINE (របៀបរាត្រី / ពន្លឺ) =========
// =========================================================================

const NIGHT_MODE_STORAGE_KEY = 'edushop_night_mode';
let isNightMode = false;

function initNightMode() {
  const saved = localStorage.getItem(NIGHT_MODE_STORAGE_KEY);
  if (saved === 'enabled') {
    isNightMode = true;
  } else if (saved === 'disabled') {
    isNightMode = false;
  } else {
    // Auto-detect system preference if customer hasn't set one yet
    isNightMode = Boolean(typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  applyNightMode(isNightMode, false);
}

function applyNightMode(enabled, showToastNotice = false) {
  isNightMode = Boolean(enabled);
  if (typeof document !== 'undefined') {
    if (document.body) {
      if (isNightMode) {
        document.body.classList.add('night-mode');
      } else {
        document.body.classList.remove('night-mode');
      }
    }
    if (document.documentElement) {
      if (isNightMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
  updateNightModeUI();

  if (showToastNotice && typeof showToast === 'function') {
    if (isNightMode) {
      showToast('🌙 បានបើករបៀបរាត្រី (Night Mode) - ស្រួលភ្នែកពេលយប់');
    } else {
      showToast('☀️ បានប្តូរទៅរបៀបពន្លឺធម្មតា (Light Mode)');
    }
  }
}

function toggleNightMode() {
  const nextState = !isNightMode;
  localStorage.setItem(NIGHT_MODE_STORAGE_KEY, nextState ? 'enabled' : 'disabled');
  applyNightMode(nextState, true);
}

function updateNightModeUI() {
  // Update header button icon & text
  const icon = document.getElementById('night-mode-icon');
  const label = document.getElementById('night-mode-label');
  const btnToggle = document.getElementById('btn-night-mode-toggle');

  if (icon) {
    icon.textContent = isNightMode ? '☀️' : '🌙';
  }
  if (label) {
    label.textContent = isNightMode ? 'របៀបពន្លឺ' : 'របៀបរាត្រី';
  }
  if (btnToggle) {
    btnToggle.title = isNightMode ? 'ប្តូរទៅរបៀបពន្លឺធម្មតា (Light Mode)' : 'ប្តូរទៅរបៀបរាត្រី (Night Mode)';
    if (isNightMode) {
      btnToggle.classList.add('bg-slate-800', 'text-amber-300', 'border-slate-700');
      btnToggle.classList.remove('bg-white', 'text-slate-700');
    } else {
      btnToggle.classList.remove('bg-slate-800', 'text-amber-300', 'border-slate-700');
      btnToggle.classList.add('bg-white', 'text-slate-700');
    }
  }

  // Update top promo bar button
  const topIcon = document.getElementById('night-mode-icon-top');
  const topText = document.getElementById('night-mode-text-top');
  if (topIcon) topIcon.textContent = isNightMode ? '☀️' : '🌙';
  if (topText) topText.textContent = isNightMode ? 'ពន្លឺ' : 'រាត្រី';

  // Update mobile category toolbar button
  const mobileIcon = document.getElementById('night-mode-icon-mobile');
  if (mobileIcon) mobileIcon.textContent = isNightMode ? '☀️' : '🌙';
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  initNightMode();
  loadStoreProducts();
  renderProducts();
  updateUserCategoryCounts();
  updateCartBadge();
  updateWishlistUI();
  updateMobileViewModeUI();
  if (typeof updateWebsiteQrElements === 'function') {
    updateWebsiteQrElements();
  }
  initUserPwa();
  if (typeof initBeforeAfterSlider === 'function') {
    initBeforeAfterSlider();
  }
  if (typeof initWallDecorSimulator === 'function') {
    initWallDecorSimulator();
  }
  if (typeof updateLuckySpinUI === 'function') {
    updateLuckySpinUI();
  }

  // System dark mode preference change listener
  if (typeof window !== 'undefined' && window.matchMedia) {
    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(NIGHT_MODE_STORAGE_KEY)) {
          applyNightMode(e.matches, false);
        }
      });
    } catch (_) {}
  }

  // Search Input listener
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }

  // Order form listener
  if (orderForm) {
    orderForm.addEventListener('submit', handleOrderSubmit);
  }

  // Real-time synchronization when Admin Dashboard changes products, theme, or wishlist in another tab!
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      loadStoreProducts();
      renderProducts();
      updateUserCategoryCounts();
    }
    if (e.key === THEME_STORAGE_KEY) {
      applyTheme();
    }
    if (e.key === NIGHT_MODE_STORAGE_KEY) {
      initNightMode();
    }
    if (e.key === WISHLIST_STORAGE_KEY) {
      updateWishlistUI();
      renderProducts();
    }
    if (e.key === SHIPPING_STORAGE_KEY) {
      if (typeof populateOrderShippingDropdown === 'function') {
        populateOrderShippingDropdown();
      }
    }
    if (e.key === 'edushop_website_url') {
      if (typeof updateWebsiteQrElements === 'function') {
        updateWebsiteQrElements();
      }
    }
    if (e.key === PROMO_BANNER_STORAGE_KEY) {
      applyPromoBannerSettings();
    }
    if (e.key === BULK_DISCOUNT_STORAGE_KEY) {
      if (typeof updateCartUI === 'function') updateCartUI();
    }
  });

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (typeof closeImageLightbox === 'function') closeImageLightbox();
      closeImageModal();
      closeOrderModal();
      closeSuccessModal();
      toggleCart(false);
      toggleWishlistModal(false);
      if (typeof closeWishlistSizeModal === 'function') closeWishlistSizeModal();
      if (typeof closeBankSelectorModal === 'function') closeBankSelectorModal();
      if (typeof closeOrderTrackingModal === 'function') closeOrderTrackingModal();
      if (typeof closeCustomerReceiptModal === 'function') closeCustomerReceiptModal();
      if (typeof closeQuickOrderModal === 'function') closeQuickOrderModal();
      if (typeof closeProductCatalogueModal === 'function') closeProductCatalogueModal();
      if (typeof closeSchoolQuotationModal === 'function') closeSchoolQuotationModal();
      if (typeof closeWebsiteQrModal === 'function') closeWebsiteQrModal();
      if (typeof closeThemeModalUser === 'function') closeThemeModalUser();
      if (typeof closeWallpaperModal === 'function') closeWallpaperModal();
      const mobileSaveModal = document.getElementById('mobile-save-qr-modal');
      if (mobileSaveModal) mobileSaveModal.classList.add('hidden');
      const khqrLbModal = document.getElementById('khqr-lightbox-modal');
      if (khqrLbModal) khqrLbModal.classList.add('hidden');
      const bankLaunchModal = document.getElementById('bank-launch-helper-modal');
      if (bankLaunchModal) bankLaunchModal.classList.add('hidden');
      const receiptOverlay = document.getElementById('receipt-slip-fullscreen-overlay');
      if (receiptOverlay) receiptOverlay.remove();
      updateBodyScrollLock();
    }
  });
});

// =========================================================================
// PHASE 2 HELPER FUNCTIONS: WISHLIST, COUPONS, KHQR DYNAMIC DISPLAY, SLIP UPLOAD
// =========================================================================

// --- WISHLIST MANAGEMENT (ជ្រើសរើសទំហំពេញចិត្ត) ---
let currentWishlistModalProductId = null;
let currentWishlistModalSelectedSize = null;
let currentWishlistModalPriceUSD = 0;
let currentWishlistModalPriceKHR = 0;
let isWishlistCustomActive = false;

function getWishlist() {
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(item => {
      if (typeof item === 'number' || typeof item === 'string') {
        const pid = Number(item);
        const p = (typeof productsData !== 'undefined' && Array.isArray(productsData)) ? productsData.find(x => x.id === pid) : null;
        return {
          productId: pid,
          size: p ? (p.size || '40 cm x 60 cm') : '40 cm x 60 cm',
          priceUSD: p ? (p.priceUSD || 1.25) : 1.25,
          priceKHR: p ? (p.priceKHR || 5000) : 5000,
          addedAt: new Date().toISOString()
        };
      }
      return item;
    });
  } catch (e) {
    return [];
  }
}

function isWishlisted(productId) {
  const list = getWishlist();
  return list.some(item => (typeof item === 'object' ? item.productId === productId : item === productId));
}

function getWishlistItem(productId) {
  const list = getWishlist();
  return list.find(item => (typeof item === 'object' ? item.productId === productId : item === productId)) || null;
}

function handleWishlistButtonClick(productId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  openWishlistSizeModal(productId);
}

function openWishlistSizeModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  currentWishlistModalProductId = productId;
  const existing = getWishlistItem(productId);
  const availableSizes = getProductAvailableSizes(product);

  const thumbContainer = document.getElementById('wishlist-size-product-thumb');
  const catEl = document.getElementById('wishlist-size-product-cat');
  const nameEl = document.getElementById('wishlist-size-product-name');
  const defaultSizeEl = document.getElementById('wishlist-size-default-size');
  const removeBtn = document.getElementById('btn-remove-from-wishlist');
  const confirmBtn = document.getElementById('btn-confirm-wishlist-save');
  const wInput = document.getElementById('wishlist-custom-w');
  const lInput = document.getElementById('wishlist-custom-l');
  const hintEl = document.getElementById('wishlist-custom-price-hint');

  if (thumbContainer) {
    thumbContainer.onclick = () => openImageLightbox(product.id);
    thumbContainer.title = 'ចុចដើម្បីពង្រីកធំ';
    thumbContainer.style.cursor = 'zoom-in';
    thumbContainer.innerHTML = product.imageUrl
      ? `<img src="${product.imageUrl}" class="w-full h-full object-cover hover:opacity-90 transition">`
      : `<div class="w-full h-full bg-gradient-to-br ${product.iconBg || 'from-sky-400 to-blue-500'} flex items-center justify-center text-white text-2xl hover:opacity-90 transition">${product.iconEmoji || '📦'}</div>`;
  }
  if (catEl) catEl.textContent = product.categoryLabel || 'ទំនិញ';
  if (nameEl) nameEl.textContent = product.name;
  if (defaultSizeEl) defaultSizeEl.textContent = `ទំហំដើម៖ ${product.size || '40 cm x 60 cm'}`;

  // Reset custom fields
  if (wInput) wInput.value = '';
  if (lInput) lInput.value = '';
  if (hintEl) hintEl.classList.add('hidden');
  isWishlistCustomActive = false;

  if (existing) {
    currentWishlistModalSelectedSize = existing.size || product.size;
    currentWishlistModalPriceUSD = existing.priceUSD !== undefined ? existing.priceUSD : product.priceUSD;
    currentWishlistModalPriceKHR = existing.priceKHR !== undefined ? existing.priceKHR : product.priceKHR;
    if (removeBtn) removeBtn.classList.remove('hidden');
    if (confirmBtn) {
      confirmBtn.innerHTML = `💾 <span>កែសម្រួលទំហំ</span>`;
    }

    // Check if existing size is custom (not found in standard sizes)
    const matchedPreset = availableSizes.find(s => s.size === currentWishlistModalSelectedSize);
    if (!matchedPreset && currentWishlistModalSelectedSize) {
      isWishlistCustomActive = true;
      const dims = currentWishlistModalSelectedSize.match(/(\d+(?:\.\d+)?)\s*(?:cm)?\s*[xX*]\s*(\d+(?:\.\d+)?)/);
      if (dims && wInput && lInput) {
        wInput.value = dims[1];
        lInput.value = dims[2];
        if (hintEl) {
          hintEl.textContent = `ទំហំ ${currentWishlistModalSelectedSize} = ${formatKHR(currentWishlistModalPriceKHR)} (${formatUSD(currentWishlistModalPriceUSD)})`;
          hintEl.classList.remove('hidden');
        }
      }
    }
  } else {
    const firstSize = availableSizes[0] || { size: product.size || '40 cm x 60 cm', priceUSD: product.priceUSD, priceKHR: product.priceKHR };
    currentWishlistModalSelectedSize = firstSize.size;
    currentWishlistModalPriceUSD = firstSize.priceUSD;
    currentWishlistModalPriceKHR = firstSize.priceKHR;
    if (removeBtn) removeBtn.classList.add('hidden');
    if (confirmBtn) {
      confirmBtn.innerHTML = `❤️ <span>រក្សាទុកក្នុងបញ្ជីពេញចិត្ត</span>`;
    }
  }

  renderWishlistSizesGrid(product);
  updateWishlistModalSummary();

  const modal = document.getElementById('wishlist-size-modal');
  if (modal) {
    modal.classList.remove('hidden');
    updateBodyScrollLock();
  }
}

function closeWishlistSizeModal() {
  const modal = document.getElementById('wishlist-size-modal');
  if (modal) modal.classList.add('hidden');
  currentWishlistModalProductId = null;
  updateBodyScrollLock();
}

function renderWishlistSizesGrid(product) {
  const container = document.getElementById('wishlist-sizes-grid');
  if (!container) return;
  const availableSizes = getProductAvailableSizes(product);

  container.innerHTML = availableSizes.map(s => {
    const isSelected = !isWishlistCustomActive && s.size === currentWishlistModalSelectedSize;
    return `
      <button 
        type="button" 
        onclick="selectWishlistSize('${s.size}', ${s.priceUSD}, ${s.priceKHR}, false)"
        class="p-2 sm:p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
          isSelected 
            ? 'border-rose-500 bg-rose-50/80 text-rose-800 shadow-xs ring-1 ring-rose-400 font-bold' 
            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300'
        }">
        <div class="flex items-center justify-between gap-1">
          <span class="text-xs font-semibold truncate">${s.name || s.size}</span>
          ${isSelected ? '<span class="text-rose-600 text-xs">✓</span>' : ''}
        </div>
        <div class="flex items-center gap-1.5 mt-1">
          <span class="text-[11px] font-extrabold text-rose-600">${formatKHR(s.priceKHR)}</span>
          <span class="text-[10px] text-slate-400">(${formatUSD(s.priceUSD)})</span>
        </div>
      </button>
    `;
  }).join('');
}

function selectWishlistSize(size, priceUSD, priceKHR, isCustom = false) {
  currentWishlistModalSelectedSize = size;
  currentWishlistModalPriceUSD = priceUSD;
  currentWishlistModalPriceKHR = priceKHR;
  isWishlistCustomActive = isCustom;

  const product = productsData.find(p => p.id === currentWishlistModalProductId);
  if (product) {
    renderWishlistSizesGrid(product);
  }

  if (!isCustom) {
    const wInput = document.getElementById('wishlist-custom-w');
    const lInput = document.getElementById('wishlist-custom-l');
    const hintEl = document.getElementById('wishlist-custom-price-hint');
    if (wInput) wInput.value = '';
    if (lInput) lInput.value = '';
    if (hintEl) hintEl.classList.add('hidden');
  }

  updateWishlistModalSummary();
}

function onWishlistCustomDimensionInput() {
  const wInput = document.getElementById('wishlist-custom-w');
  const lInput = document.getElementById('wishlist-custom-l');
  const hintEl = document.getElementById('wishlist-custom-price-hint');
  if (!wInput || !lInput) return;

  const w = parseFloat(wInput.value) || 0;
  const l = parseFloat(lInput.value) || 0;

  if (w > 0 && l > 0) {
    const dim = calculateCustomDimensions(w, l);
    const sizeName = `${w} cm x ${l} cm`;
    if (hintEl) {
      hintEl.textContent = `ទំហំ ${sizeName} = ${formatKHR(dim.priceKHR)} (${formatUSD(dim.priceUSD)})`;
      hintEl.classList.remove('hidden');
    }
    selectWishlistSize(sizeName, dim.priceUSD, dim.priceKHR, true);
  } else {
    if (hintEl) hintEl.classList.add('hidden');
  }
}

function updateWishlistModalSummary() {
  const sizeText = document.getElementById('wishlist-selected-size-text');
  const priceKHR = document.getElementById('wishlist-selected-price-khr');
  const priceUSD = document.getElementById('wishlist-selected-price-usd');
  const indicator = document.getElementById('wishlist-size-indicator');

  if (sizeText) sizeText.textContent = currentWishlistModalSelectedSize || '-';
  if (priceKHR) priceKHR.textContent = formatKHR(currentWishlistModalPriceKHR);
  if (priceUSD) priceUSD.textContent = `(${formatUSD(currentWishlistModalPriceUSD)})`;
  if (indicator) indicator.textContent = currentWishlistModalSelectedSize || '';
}

function confirmSaveToWishlist() {
  if (!currentWishlistModalProductId || !currentWishlistModalSelectedSize) return;

  const product = productsData.find(p => p.id === currentWishlistModalProductId);
  if (!product) return;

  let list = getWishlist();
  list = list.filter(item => (typeof item === 'object' ? item.productId !== currentWishlistModalProductId : item !== currentWishlistModalProductId));

  list.push({
    productId: currentWishlistModalProductId,
    size: currentWishlistModalSelectedSize,
    priceUSD: currentWishlistModalPriceUSD,
    priceKHR: currentWishlistModalPriceKHR,
    addedAt: new Date().toISOString()
  });

  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(list));
  updateWishlistUI();
  renderProducts();
  renderWishlistItems();
  closeWishlistSizeModal();
  showToast(`❤️ បានរក្សាទុក «${product.name.slice(0, 18)}...» (${currentWishlistModalSelectedSize}) ក្នុងបញ្ជីពេញចិត្ត!`);
}

function removeCurrentProductFromWishlist() {
  if (!currentWishlistModalProductId) return;

  const product = productsData.find(p => p.id === currentWishlistModalProductId);
  let list = getWishlist();
  list = list.filter(item => (typeof item === 'object' ? item.productId !== currentWishlistModalProductId : item !== currentWishlistModalProductId));

  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(list));
  updateWishlistUI();
  renderProducts();
  renderWishlistItems();
  closeWishlistSizeModal();
  showToast(`បានដក «${(product ? product.name : '').slice(0, 18)}...» ចេញពីបញ្ជីពេញចិត្ត`);
}

function toggleWishlist(productId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  let list = getWishlist();
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const exists = isWishlisted(productId);
  if (exists) {
    list = list.filter(item => (typeof item === 'object' ? item.productId !== productId : item !== productId));
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(list));
    updateWishlistUI();
    renderProducts();
    renderWishlistItems();
    showToast(`បានដក «${product.name.slice(0, 18)}...» ចេញពីបញ្ជីពេញចិត្ត`);
  } else {
    openWishlistSizeModal(productId);
  }
}

function updateWishlistUI() {
  const list = getWishlist();
  const count = list.length;
  const badgeHeader = document.getElementById('wishlist-count');
  const badgeMobile = document.getElementById('mobile-wishlist-badge');

  if (badgeHeader) {
    badgeHeader.textContent = count;
    if (count > 0) badgeHeader.classList.remove('hidden');
    else badgeHeader.classList.add('hidden');
  }

  if (badgeMobile) {
    badgeMobile.textContent = count;
    if (count > 0) badgeMobile.classList.remove('hidden');
    else badgeMobile.classList.add('hidden');
  }
}

function toggleWishlistModal(open) {
  const modal = document.getElementById('wishlist-modal');
  if (!modal) return;
  if (open) {
    renderWishlistItems();
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
  updateBodyScrollLock();
}

function renderWishlistItems() {
  const container = document.getElementById('wishlist-items-container');
  const addAllBtn = document.getElementById('btn-wishlist-add-all');
  if (!container) return;

  const list = getWishlist();

  if (list.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-400">
        <div class="text-5xl mb-2.5">🤍</div>
        <p class="font-bold text-slate-600 text-sm">មិនទាន់មានទំនិញពេញចិត្តនៅឡើយទេ</p>
        <p class="text-xs text-slate-400 mt-1">ចុចរូបបេះដូង ❤️ លើទំនិញដើម្បីជ្រើសរើសទំហំ និងរក្សាទុក</p>
      </div>
    `;
    if (addAllBtn) addAllBtn.disabled = true;
    return;
  }

  if (addAllBtn) addAllBtn.disabled = false;

  container.innerHTML = list.map(item => {
    const p = productsData.find(prod => prod.id === item.productId);
    if (!p) return '';

    const isAvail = p.inStock !== false && (p.stockQty === undefined || p.stockQty > 0);
    const chosenSize = item.size || p.size || '40 cm x 60 cm';
    const chosenUSD = item.priceUSD !== undefined ? item.priceUSD : p.priceUSD;
    const chosenKHR = item.priceKHR !== undefined ? item.priceKHR : p.priceKHR;

    const thumb = p.imageUrl 
      ? `<img src="${p.imageUrl}" onclick="openImageLightbox(${p.id})" title="ចុចដើម្បីពង្រីកធំ" class="w-14 h-14 rounded-xl object-cover border border-slate-200 cursor-zoom-in hover:opacity-90 transition">`
      : `<div onclick="openImageLightbox(${p.id})" title="ចុចដើម្បីពង្រីកធំ" class="w-14 h-14 rounded-xl bg-gradient-to-br ${p.iconBg || 'from-sky-400 to-blue-500'} flex items-center justify-center text-2xl text-white cursor-zoom-in hover:opacity-90 transition">
           ${p.iconEmoji || '📦'}
         </div>`;

    return `
      <div class="flex items-center justify-between gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition">
        <div class="flex items-center gap-3 flex-1 min-w-0">
          ${thumb}
          <div class="min-w-0">
            <h4 class="text-xs font-bold text-slate-800 truncate">${p.name}</h4>
            <div class="flex items-center gap-2 mt-0.5">
              <span class="text-xs font-bold text-rose-600">${formatUSD(chosenUSD)}</span>
              <span class="text-[10px] text-slate-500">(${formatKHR(chosenKHR)})</span>
              <span class="text-[10px] ${isAvail ? 'text-emerald-600' : 'text-rose-500'} font-semibold">
                ${isAvail ? '• មានក្នុងស្តុក' : '• អស់ស្តុក'}
              </span>
            </div>
            <div class="flex items-center gap-1.5 mt-1">
              <span class="text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded">
                ទំហំ៖ ${chosenSize}
              </span>
              <button 
                type="button"
                onclick="openWishlistSizeModal(${p.id})"
                title="កែសម្រួលទំហំ"
                class="text-[10px] text-slate-400 hover:text-sky-600 font-semibold underline cursor-pointer">
                ✏️ កែទំហំ
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-1.5 flex-shrink-0">
          ${isAvail ? `
            <button 
              type="button"
              onclick="addToCart(${p.id}, '${chosenSize}', ${chosenUSD}, ${chosenKHR}); showToast('បានដាក់ក្នុងកន្ត្រក!');" 
              title="ដាក់ក្នុងកន្ត្រក"
              class="p-2 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-100 text-xs font-bold transition cursor-pointer">
              🛒
            </button>
            <button 
              type="button"
              onclick="toggleWishlistModal(false); openOrderModalWithSize(${p.id}, '${chosenSize}', ${chosenUSD}, ${chosenKHR});" 
              class="px-3 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold transition shadow-xs cursor-pointer">
              ទិញ
            </button>
          ` : `
            <span class="text-[11px] text-slate-400">អស់ស្តុក</span>
          `}
          <button 
            type="button"
            onclick="toggleWishlist(${p.id}, event)" 
            title="ដកចេញពីបញ្ជី"
            class="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 text-xs transition cursor-pointer">
            ✕
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function addAllWishlistToCart() {
  const list = getWishlist();
  if (list.length === 0) {
    showToast("មិនមានទំនិញពេញចិត្តនៅឡើយទេ");
    return;
  }

  let addedCount = 0;
  list.forEach(item => {
    const p = productsData.find(prod => prod.id === item.productId);
    if (p && p.inStock !== false) {
      const chosenSize = item.size || p.size || '40 cm x 60 cm';
      const chosenUSD = item.priceUSD !== undefined ? item.priceUSD : p.priceUSD;
      const chosenKHR = item.priceKHR !== undefined ? item.priceKHR : p.priceKHR;

      const cartProduct = {
        ...p,
        size: chosenSize,
        priceUSD: chosenUSD,
        priceKHR: chosenKHR
      };

      const existing = cart.find(i => i.product.id === p.id && i.product.size === chosenSize);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ product: cartProduct, quantity: 1 });
      }
      addedCount++;
    }
  });

  if (addedCount === 0) {
    showToast("មិនមានទំនិញដែលអាចដាក់ក្នុងកន្ត្រកបានឡើយ (អស់ស្តុក)");
    return;
  }

  updateCartBadge();
  renderCartDrawer();
  toggleWishlistModal(false);
  toggleCart(true);
  showToast(`🎉 បានបញ្ចូលទំនិញ ${addedCount} មុខទៅក្នុងកន្ត្រកជោគជ័យ!`);
}

// --- PROMO CODE / COUPON SYSTEM ---
function applyCouponCode() {
  const input = document.getElementById('cust-coupon-code');
  const feedback = document.getElementById('coupon-feedback');
  if (!input || !feedback) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    feedback.textContent = '⚠️ សូមវាយបញ្ចូលលេខកូដប្រូម៉ូសិន!';
    feedback.className = 'text-[11px] text-amber-600 font-semibold block';
    return;
  }

  const found = AVAILABLE_COUPONS.find(c => c.code === code);
  if (!found) {
    feedback.textContent = '❌ លេខកូដប្រូម៉ូសិនមិនត្រឹមត្រូវ ឬផុតកំណត់!';
    feedback.className = 'text-[11px] text-rose-600 font-semibold block';
    appliedCoupon = null;
    updateKHQRDisplay();
    return;
  }

  // Calculate discount based on current order value
  let subtotalUSD = 0;
  let subtotalKHR = 0;
  if (isOrderModalForCart) {
    subtotalUSD = cart.reduce((acc, i) => acc + (i.product.priceUSD * i.quantity), 0);
    subtotalKHR = cart.reduce((acc, i) => acc + (i.product.priceKHR * i.quantity), 0);
  } else if (activeOrderProduct) {
    subtotalUSD = activeOrderProduct.product.priceUSD * activeOrderProduct.quantity;
    subtotalKHR = activeOrderProduct.product.priceKHR * activeOrderProduct.quantity;
  }

  let discUSD = 0;
  let discKHR = 0;

  if (found.type === 'percent') {
    discUSD = parseFloat(((subtotalUSD * found.value) / 100).toFixed(2));
    discKHR = Math.round((subtotalKHR * found.value) / 100);
  } else {
    discUSD = found.valueUSD;
    discKHR = found.valueKHR;
  }

  // Bound discount
  discUSD = Math.min(discUSD, subtotalUSD);
  discKHR = Math.min(discKHR, subtotalKHR);

  appliedCoupon = {
    code: found.code,
    label: found.label,
    discountUSD: discUSD,
    discountKHR: discKHR
  };

  feedback.textContent = `✓ ជោគជ័យ! បានអនុវត្តកូដ «${found.code}»៖ ${found.label} (-${formatUSD(discUSD)} / -${formatKHR(discKHR)})`;
  feedback.className = 'text-[11px] text-emerald-600 font-semibold block';

  if (typeof onOrderShippingLocationChange === 'function') {
    onOrderShippingLocationChange();
  } else {
    updateKHQRDisplay();
  }
  showToast(`🎉 បានបញ្ចុះតម្លៃ ${formatUSD(discUSD)} តាមកូដ ${found.code}!`);
}

function showCouponHints() {
  const hints = AVAILABLE_COUPONS.map(c => `• ${c.code} (${c.label})`).join('\n');
  alert(`🎟️ លេខកូដប្រូម៉ូសិនពិសេសសម្រាប់លោកគ្រូ-អ្នកគ្រូ៖\n\n${hints}\n\nសូមវាយបញ្ចូលកូដណាមួយក្នុងប្រអប់ ហើយចុច «អនុវត្ត»`);
}

function resetCoupon() {
  appliedCoupon = null;
  const input = document.getElementById('cust-coupon-code');
  const feedback = document.getElementById('coupon-feedback');
  if (input) input.value = '';
  if (feedback) {
    feedback.textContent = '';
    feedback.className = 'text-[11px] font-semibold hidden';
  }
  if (typeof onOrderShippingLocationChange === 'function') {
    onOrderShippingLocationChange();
  }
}

// --- DYNAMIC BAKONG KHQR GENERATOR & SWITCHER ---
let currentAbaQrMode = 'dynamic'; // 'dynamic' or 'static'
let currentKhqrPayloadString = '';

// Official Decoded Payloads (Guarantees 100% offline & instant generation)
const ACLEDA_KHQR_STATIC_PAYLOAD = "00020101021129360009khqr@aclb01090903432060206ACLEDA392000118551418529101014520420005802KH53031165912Vey Kimleang6010Phnom Penh6213020909034320663042A0E";
const ABA_KHQR_STATIC_PAYLOAD = "00020101021129450016abaakhppxxx@abaa01090083506160208ABA Bank5204599953031165802KH5911KOEUR SOYTY6010Phnom Penh63045AFF";

// Calculate CRC-16/CCITT-FALSE (Polynomial 0x1021, Init 0xFFFF)
function calcKhqrCrc16(str) {
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    crc ^= (code << 8);
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ 0x1021) & 0xFFFF;
      } else {
        crc = (crc << 1) & 0xFFFF;
      }
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

// Universal NBC Bakong Standard Payload Generator for ABA (Scannable by ALL Cambodian banking apps)
// Works on: ABA Mobile, ACLEDA mobile, Wing Bank, Canadia Bank, Sathapana Mobile, Bakong App, etc.
function generateAbaKhqrPayload(amountKHR) {
  // Enforce integer amount in Riel (minimum 100 Riel)
  const amt = Math.max(100, Math.round(Number(amountKHR) || 10000));
  const amtStr = String(amt);
  const amtLen = String(amtStr.length).padStart(2, '0');
  const tag54 = `54${amtLen}${amtStr}`;

  // Standard Bakong KHQR Individual Account:
  // - Tag 00: 01 (Version)
  // - Tag 01: 12 (Dynamic QR with amount)
  // - Tag 29: Individual KHQR Account (45 chars):
  //     Subtag 00: abaakhppxxx@abaa (Bakong Account ID for ABA Bank)
  //     Subtag 01: 008350616 (KOEUR SOYTY ABA account)
  //     Subtag 02: ABA Bank (Acquiring Bank)
  // - Tag 52: 5999 (National Bank of Cambodia Standard Merchant Category Code for retail goods & services)
  // - Tag 53: 116 (KHR Currency Code)
  // NOTE: Tag 40 (abaP2P) has been removed, and invalid MCC 0000 replaced with 5999 to allow universal cross-bank scanning!
  const prefix = "00020101021229450016abaakhppxxx@abaa01090083506160208ABA Bank520459995303116";

  // Dynamic Timestamp (Tag 99, standard for NBC Bakong Dynamic QR)
  const now = Date.now();
  const exp = now + (30 * 24 * 3600 * 1000);
  const tag99 = `99340013${now}0113${exp}`;

  // Suffix: Country KH, Merchant KOEUR SOYTY, City Phnom Penh, Tag 99 Timestamps
  const suffix = `5802KH5911KOEUR SOYTY6010Phnom Penh${tag99}6304`;

  const rawPayload = `${prefix}${tag54}${suffix}`;
  const crc = calcKhqrCrc16(rawPayload);
  return `${rawPayload}${crc}`;
}

// Dynamic ACLEDA KHQR generator matching purchase amount
function generateAcledaKhqrPayload(amountKHR) {
  const amt = Math.max(100, Math.round(Number(amountKHR) || 10000));
  const amtStr = String(amt);
  const amtLen = String(amtStr.length).padStart(2, '0');
  const tag54 = `54${amtLen}${amtStr}`;

  const now = Date.now();
  const exp = now + (30 * 24 * 3600 * 1000);
  const tag99 = `99340013${now}0113${exp}`;

  const prefix = "00020101021229360009khqr@aclb01090903432060206ACLEDA392000118551418529101014520420005303116";
  const suffix = `5802KH5912Vey Kimleang6010Phnom Penh62130209090343206${tag99}6304`;

  const rawPayload = `${prefix}${tag54}${suffix}`;
  const crc = calcKhqrCrc16(rawPayload);
  return `${rawPayload}${crc}`;
}

// Generate fast, offline Data URL from QR payload
function getKhqrDataUrl(payload, cellSize = 6, margin = 4) {
  if (typeof qrcode !== 'undefined' && payload) {
    try {
      const qr = qrcode(0, 'M');
      qr.addData(payload);
      qr.make();
      return qr.createDataURL(cellSize, margin);
    } catch (e) {
      console.warn('qrcode.createDataURL error, falling back:', e);
    }
  }
  return `https://api.qrserver.com/v1/create-qr-code/?size=450x450&margin=12&data=${encodeURIComponent(payload)}`;
}

function setAbaQrMode(mode) {
  currentAbaQrMode = mode;
  const dynBtn = document.getElementById('aba-mode-dynamic-btn');
  const statBtn = document.getElementById('aba-mode-static-btn');

  if (dynBtn && statBtn) {
    if (mode === 'dynamic') {
      dynBtn.className = "flex-1 sm:flex-none px-2.5 py-1 rounded-lg bg-white text-rose-700 font-bold shadow-xs cursor-pointer transition";
      statBtn.className = "flex-1 sm:flex-none px-2.5 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 font-medium cursor-pointer transition";
    } else {
      statBtn.className = "flex-1 sm:flex-none px-2.5 py-1 rounded-lg bg-white text-rose-700 font-bold shadow-xs cursor-pointer transition";
      dynBtn.className = "flex-1 sm:flex-none px-2.5 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 font-medium cursor-pointer transition";
    }
  }

  updateKHQRDisplay();
}

function copyKhqrPayload() {
  if (!currentKhqrPayloadString) {
    showToast('⚠️ មិនទាន់មានកូដ KHQR ទេ');
    return;
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(currentKhqrPayloadString).then(() => {
      showToast('✓ បានចម្លងកូដ KHQR ទៅកាន់ Clipboard!');
    }).catch(() => {
      prompt('ចម្លងកូដ KHQR ខាងក្រោម៖', currentKhqrPayloadString);
    });
  } else {
    prompt('ចម្លងកូដ KHQR ខាងក្រោម៖', currentKhqrPayloadString);
  }
}

function updateKHQRDisplay() {
  const khqrAmountEl = document.getElementById('khqr-amount-display');
  const khqrImgEl = document.getElementById('khqr-code-img');
  if (!khqrAmountEl) return;

  let rawUSD = 0;
  let rawKHR = 0;
  let totalUnits = 0;

  if (isOrderModalForCart) {
    rawUSD = cart.reduce((acc, i) => acc + (i.product.priceUSD * i.quantity), 0);
    rawKHR = cart.reduce((acc, i) => acc + (i.product.priceKHR * i.quantity), 0);
    totalUnits = cart.reduce((acc, i) => acc + i.quantity, 0);
  } else if (activeOrderProduct) {
    rawUSD = activeOrderProduct.product.priceUSD * activeOrderProduct.quantity;
    rawKHR = activeOrderProduct.product.priceKHR * activeOrderProduct.quantity;
    totalUnits = activeOrderProduct.quantity;
  }

  const bulk = getBulkDiscountInfo(totalUnits, rawUSD, rawKHR);
  const discUSD = appliedCoupon ? appliedCoupon.discountUSD : 0;
  const discKHR = appliedCoupon ? appliedCoupon.discountKHR : 0;

  const totalDiscountUSD = bulk.discountUSD + discUSD;
  const totalDiscountKHR = bulk.discountKHR + discKHR;

  const shipping = (typeof getEffectiveOrderShipping === 'function') 
    ? getEffectiveOrderShipping() 
    : { isFree: false, effectiveUSD: 0, effectiveKHR: 0 };

  const itemsPayableUSD = Math.max(0, rawUSD - totalDiscountUSD);
  const itemsPayableKHR = Math.max(0, rawKHR - totalDiscountKHR);
  const payableUSD = itemsPayableUSD + shipping.effectiveUSD;
  const payableKHR = itemsPayableKHR + shipping.effectiveKHR;

  if (totalDiscountUSD > 0) {
    let discBadge = '';
    if (bulk.percent > 0 && discUSD > 0) {
      discBadge = `ចុះ ${formatKHR(totalDiscountKHR)} (${bulk.percent}% + ${appliedCoupon.code})`;
    } else if (bulk.percent > 0) {
      discBadge = `ចុះដុំ ${bulk.percent}% (${formatKHR(bulk.discountKHR)})`;
    } else {
      discBadge = `ចុះ ${formatKHR(discKHR)}`;
    }
    khqrAmountEl.innerHTML = `
      <span class="line-through text-white/50 text-xs mr-1">${formatUSD(rawUSD + shipping.effectiveUSD)}</span>
      <span class="text-yellow-300 font-extrabold">${formatKHR(payableKHR)}</span>
      <span class="text-xs text-white/80 font-normal">(${formatUSD(payableUSD)})</span>
      <span class="text-[10px] bg-emerald-500/80 text-white px-1.5 py-0.5 rounded ml-1 font-bold">${discBadge}</span>
    `;
  } else {
    khqrAmountEl.innerHTML = `<span class="text-yellow-300 font-extrabold">${formatKHR(payableKHR)}</span> <span class="text-xs text-white/80 font-normal">(${formatUSD(payableUSD)})</span>`;
  }

  const hintAmountEl = document.getElementById('khqr-hint-amount');
  if (hintAmountEl) hintAmountEl.textContent = formatKHR(payableKHR);

  if (typeof validateSlipAmountLive === 'function') {
    validateSlipAmountLive();
  }

  const method = document.querySelector('input[name="payment_method"]:checked')?.value || 'ABA KHQR';
  const merchantNameEl = document.getElementById('khqr-merchant-name');
  const merchantDetailEl = document.getElementById('khqr-merchant-detail');
  const bankBadgeEl = document.getElementById('khqr-bank-badge');
  const abaSwitchEl = document.getElementById('aba-qr-mode-switch');
  const dynamicHintEl = document.getElementById('khqr-dynamic-hint');

  let qrSrc = '';
  let merchantName = 'KOEUR SOYTY';
  let merchantDetail = 'ABA: 008 350 616 / 069 49 01 08';
  let bankBadge = 'ABA Bank';

  if (method.includes('អេស៊ីលីដា') || method.includes('ACLEDA')) {
    // ACLEDA KHQR Stand
    if (abaSwitchEl) abaSwitchEl.classList.remove('hidden');
    merchantName = 'Vey Kimleang';
    merchantDetail = 'ACLEDA: 090 343 206';

    if (currentAbaQrMode === 'dynamic') {
      if (dynamicHintEl) dynamicHintEl.classList.remove('hidden');
      bankBadge = 'ACLEDA KHQR ⚡ Dynamic';
      const payload = generateAcledaKhqrPayload(payableKHR);
      currentKhqrPayloadString = payload;
      qrSrc = getKhqrDataUrl(payload);
    } else {
      if (dynamicHintEl) dynamicHintEl.classList.add('hidden');
      bankBadge = 'ACLEDA Bank (ផ្ទាំងដើម)';
      qrSrc = 'acleda_khqr.jpg';
      currentKhqrPayloadString = ACLEDA_KHQR_STATIC_PAYLOAD;
    }
  } else {
    // ABA KHQR (Universal Bakong - Scannable by ALL banks!)
    if (abaSwitchEl) abaSwitchEl.classList.remove('hidden');
    merchantName = 'KOEUR SOYTY';
    merchantDetail = 'ABA: 008 350 616 / 069 49 01 08';

    if (currentAbaQrMode === 'dynamic') {
      if (dynamicHintEl) dynamicHintEl.classList.remove('hidden');
      bankBadge = 'KHQR ⚡ គ្រប់ធនាគារ (Dynamic)';
      const payload = generateAbaKhqrPayload(payableKHR);
      currentKhqrPayloadString = payload;
      qrSrc = getKhqrDataUrl(payload);
    } else {
      if (dynamicHintEl) dynamicHintEl.classList.add('hidden');
      bankBadge = 'ABA Bank (ផ្ទាំងដើម)';
      qrSrc = 'aba_khqr.jpg';
      currentKhqrPayloadString = ABA_KHQR_STATIC_PAYLOAD;
    }
  }

  if (khqrImgEl) {
    khqrImgEl.src = qrSrc;
    khqrImgEl.alt = `${bankBadge} KHQR (${merchantName})`;
  }
  if (merchantNameEl) merchantNameEl.textContent = merchantName;
  if (merchantDetailEl) merchantDetailEl.textContent = merchantDetail;
  if (bankBadgeEl) bankBadgeEl.textContent = bankBadge;

  const launchBtnTextEl = document.getElementById('khqr-launch-btn-text');
  if (launchBtnTextEl) {
    if (method.includes('អេស៊ីលីដា') || method.includes('ACLEDA')) {
      launchBtnTextEl.textContent = 'បើក App ACLEDA mobile ដើម្បីបង់ប្រាក់ (Pay with ACLEDA)';
    } else {
      launchBtnTextEl.textContent = 'បើក App ABA Mobile ដើម្បីបង់ប្រាក់ (Pay with ABA)';
    }
  }

  const downloadBtnEl = document.getElementById('khqr-download-btn');
  if (downloadBtnEl) {
    downloadBtnEl.onclick = () => downloadKhqrImage();
  }
}

// --- HELPER: GET CURRENT ORDER PAYMENT INFO ---
function getCurrentOrderPaymentInfo(forceFresh = false) {
  if (!forceFresh && currentBankSelectorContext && currentBankSelectorContext.payableKHR > 0) {
    return currentBankSelectorContext;
  }
  const isOrderActive = typeof orderModal !== 'undefined' && orderModal && !orderModal.classList.contains('hidden');
  if (!isOrderActive && !forceFresh && typeof latestCompletedOrder !== 'undefined' && latestCompletedOrder && latestCompletedOrder.totalKHR > 0) {
    const isAcleda = !!(latestCompletedOrder.paymentMethod && (latestCompletedOrder.paymentMethod.includes('អេស៊ីលីដា') || latestCompletedOrder.paymentMethod.includes('ACLEDA')));
    const merchantName = isAcleda ? 'Vey Kimleang' : 'KOEUR SOYTY';
    const bankName = isAcleda ? 'ACLEDA Bank' : 'ABA Bank';
    const accountDetail = isAcleda ? 'ACLEDA: 090 343 206' : 'ABA: 008 350 616 / 069 49 01 08';
    const payableKHR = latestCompletedOrder.totalKHR;
    const payableUSD = latestCompletedOrder.totalUSD || (payableKHR / EXCHANGE_RATE);
    const payload = isAcleda ? generateAcledaKhqrPayload(payableKHR) : generateAbaKhqrPayload(payableKHR);
    const qrSrc = getKhqrDataUrl(payload);
    return {
      payableKHR,
      payableUSD,
      merchantName,
      bankName,
      accountDetail,
      isAcleda,
      qrSrc,
      payload
    };
  }

  let payableKHR = 0;
  let payableUSD = 0;

  if (isOrderModalForCart && cart && cart.length > 0) {
    const rawKHR = cart.reduce((acc, i) => acc + (i.product.priceKHR * i.quantity), 0);
    const discKHR = appliedCoupon ? appliedCoupon.discountKHR : 0;
    payableKHR = Math.max(0, rawKHR - discKHR);
    payableUSD = payableKHR / EXCHANGE_RATE;
  } else if (activeOrderProduct) {
    const rawKHR = activeOrderProduct.product.priceKHR * activeOrderProduct.quantity;
    const discKHR = appliedCoupon ? appliedCoupon.discountKHR : 0;
    payableKHR = Math.max(0, rawKHR - discKHR);
    payableUSD = payableKHR / EXCHANGE_RATE;
  }

  // Fallback if not inside active order
  if (!payableKHR || payableKHR <= 0) {
    const amountDisplayEl = document.getElementById('khqr-amount-display');
    if (amountDisplayEl) {
      const match = amountDisplayEl.textContent.replace(/[^0-9]/g, '');
      if (match) payableKHR = parseInt(match, 10);
    }
  }
  if (!payableKHR || payableKHR <= 0) {
    payableKHR = 10000;
    payableUSD = 2.5;
  }

  const method = document.querySelector('input[name="payment_method"]:checked')?.value || 'ABA KHQR';
  const isAcleda = method.includes('អេស៊ីលីដា') || method.includes('ACLEDA');
  const merchantName = isAcleda ? 'Vey Kimleang' : 'KOEUR SOYTY';
  const bankName = isAcleda ? 'ACLEDA Bank' : 'ABA Bank';
  const accountDetail = isAcleda ? 'ACLEDA: 090 343 206' : 'ABA: 008 350 616 / 069 49 01 08';

  let qrSrc = '';
  let payload = '';

  if (isAcleda) {
    if (currentAbaQrMode === 'dynamic') {
      payload = generateAcledaKhqrPayload(payableKHR);
      qrSrc = getKhqrDataUrl(payload);
    } else {
      qrSrc = 'acleda_khqr.jpg';
      payload = ACLEDA_KHQR_STATIC_PAYLOAD;
    }
  } else if (currentAbaQrMode === 'dynamic') {
    payload = generateAbaKhqrPayload(payableKHR);
    qrSrc = getKhqrDataUrl(payload);
  } else {
    qrSrc = 'aba_khqr.jpg';
    payload = ABA_KHQR_STATIC_PAYLOAD;
  }

  return {
    payableKHR,
    payableUSD,
    merchantName,
    bankName,
    accountDetail,
    isAcleda,
    qrSrc,
    payload
  };
}

// --- HELPER: CONVERT DATA URL TO BLOB ---
function dataUrlToBlob(dataUrl) {
  const parts = dataUrl.split(',');
  const mime = parts[0].match(/:(.*?);/)[1];
  const bstr = atob(parts[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

// --- HELPER: DIRECT DOWNLOAD TRIGGER (NO TARGET BLANK - NO POPUP BLOCKERS) ---
function directDownloadLink(url, filename) {
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    if (link.parentNode) link.parentNode.removeChild(link);
  }, 1000);
}

// --- GENERATE COMPLETE AUTHENTIC KHQR CARD IMAGE (CANVAS) ---
async function generateKhqrCardBlob({ merchantName, bankName, accountDetail, payableKHR, payableUSD, payload, isAcleda, qrSrc }) {
  return new Promise(async (resolve, reject) => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 640;
      canvas.height = 920;
      const ctx = canvas.getContext('2d');

      // Helper: Rounded Rectangle
      function roundRect(x, y, w, h, radius, fill, stroke) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + w - radius, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
        ctx.lineTo(x + w, y + h - radius);
        ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
        ctx.lineTo(x + radius, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y + radius, x + radius, y);
        ctx.closePath();
        if (fill) ctx.fill();
        if (stroke) ctx.stroke();
      }

      // 1. Canvas Background
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. White Card Container with rounded corners
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1.5;
      roundRect(16, 16, 608, 888, 24, true, true);

      // 3. Top KHQR Red Header Banner
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(40, 16);
      ctx.lineTo(600, 16);
      ctx.quadraticCurveTo(624, 16, 624, 40);
      ctx.lineTo(624, 131);
      ctx.lineTo(16, 131);
      ctx.lineTo(16, 40);
      ctx.quadraticCurveTo(16, 16, 40, 16);
      ctx.closePath();
      ctx.clip();

      // Gradient Banner
      const grad = ctx.createLinearGradient(16, 16, 624, 131);
      grad.addColorStop(0, '#E1251B');
      grad.addColorStop(1, '#be123c');
      ctx.fillStyle = grad;
      ctx.fillRect(16, 16, 608, 115);

      // KHQR White Tag
      ctx.fillStyle = '#ffffff';
      roundRect(32, 32, 112, 44, 12, true, false);

      ctx.fillStyle = '#E1251B';
      ctx.font = '900 26px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('KHQR', 88, 64);

      // Store Header Text
      ctx.font = 'bold 18px "Kantumruy Pro", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'right';
      ctx.fillText('EduShop', 600, 54);
      ctx.font = '12px "Kantumruy Pro", sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.88)';
      ctx.fillText('ប្រព័ន្ធទូទាត់រហ័ស • ងាយស្រួល • សុវត្ថិភាព', 600, 77);
      ctx.restore();

      // 4. Account Name Section (ឈ្មោះគណនី)
      ctx.textAlign = 'center';
      ctx.fillStyle = '#64748b';
      ctx.font = '600 12.5px "Kantumruy Pro", sans-serif';
      ctx.fillText('ឈ្មោះគណនី / ACCOUNT NAME', 320, 156);

      ctx.fillStyle = '#0f172a';
      ctx.font = '900 26px "Kantumruy Pro", Arial, sans-serif';
      ctx.fillText(merchantName.toUpperCase(), 320, 188);

      ctx.fillStyle = '#0284c7';
      ctx.font = 'bold 14px "Kantumruy Pro", sans-serif';
      ctx.fillText(`${bankName} • ${accountDetail}`, 320, 212);

      // 5. Actual Purchase Amount Box (ចំនួនទឹកប្រាក់ជាក់ស្ដែង ដែលភ្ញៀវបានទិញ)
      ctx.fillStyle = '#fef2f2';
      ctx.strokeStyle = '#fecdd3';
      ctx.lineWidth = 1.5;
      roundRect(36, 226, 568, 86, 16, true, true);

      ctx.fillStyle = '#991b1b';
      ctx.font = 'bold 12px "Kantumruy Pro", sans-serif';
      ctx.fillText('ចំនួនទឹកប្រាក់ជាក់ស្ដែងត្រូវទូទាត់ (TOTAL AMOUNT)', 320, 248);

      // Main Amount Display
      const khrText = formatKHR(payableKHR);
      ctx.fillStyle = '#dc2626';
      ctx.font = '900 30px "Kantumruy Pro", Arial, sans-serif';
      ctx.fillText(khrText, 320, 284);

      if (payableUSD > 0) {
        ctx.fillStyle = '#475569';
        ctx.font = 'bold 13px "Kantumruy Pro", sans-serif';
        ctx.fillText(`(≈ ${formatUSD(payableUSD)})`, 320, 303);
      }

      // 6. QR Code Section
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 2;
      roundRect(130, 326, 380, 380, 20, true, true);

      // Vector QR modules via pure JS qrcode (100% clean canvas, NEVER tainted, 0ms offline)
      let qrDrawn = false;
      if (typeof qrcode !== 'undefined' && payload) {
        try {
          const qr = qrcode(0, 'M');
          qr.addData(payload);
          qr.make();
          const count = qr.getModuleCount();
          const qrBoxSize = 340;
          const qrOffsetX = 150;
          const qrOffsetY = 346;
          const cellSize = qrBoxSize / count;

          ctx.fillStyle = '#0f172a';
          for (let r = 0; r < count; r++) {
            for (let c = 0; c < count; c++) {
              if (qr.isDark(r, c)) {
                ctx.fillRect(
                  qrOffsetX + Math.floor(c * cellSize),
                  qrOffsetY + Math.floor(r * cellSize),
                  Math.ceil(cellSize),
                  Math.ceil(cellSize)
                );
              }
            }
          }

          // Center Bank Badge
          const badgeSize = 54;
          const badgeX = 320 - badgeSize / 2;
          const badgeY = 516 - badgeSize / 2;
          ctx.fillStyle = '#ffffff';
          roundRect(badgeX - 4, badgeY - 4, badgeSize + 8, badgeSize + 8, 10, true, true);
          ctx.fillStyle = isAcleda ? '#003366' : '#004f71';
          roundRect(badgeX, badgeY, badgeSize, badgeSize, 8, true, false);
          ctx.fillStyle = '#ffffff';
          ctx.font = '900 13px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(isAcleda ? 'ACLEDA' : 'ABA', 320, 521);

          qrDrawn = true;
        } catch (qrErr) {
          console.warn('Vector QR draw failed, falling back:', qrErr);
        }
      }

      // Fallback: draw from qrSrc image if vector drawing was not used
      if (!qrDrawn && qrSrc) {
        try {
          const img = await new Promise((resImg, rejImg) => {
            const i = new Image();
            if (qrSrc.startsWith('http://') || qrSrc.startsWith('https://')) {
              i.crossOrigin = 'anonymous';
            }
            i.onload = () => resImg(i);
            i.onerror = rejImg;
            i.src = qrSrc;
          });
          ctx.drawImage(img, 145, 341, 350, 350);
        } catch(e) {
          console.warn('Fallback image draw failed:', e);
        }
      }

      // 7. Instructions & Supported Banking Apps
      ctx.fillStyle = '#f1f5f9';
      roundRect(60, 722, 520, 38, 19, true, false);

      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 12.5px "Kantumruy Pro", sans-serif';
      ctx.fillText('📲 ស្កេនទូទាត់ជាមួយកម្មវិធីធនាគារណាក៏បាន (Scan with Any Banking App)', 320, 746);

      ctx.fillStyle = '#64748b';
      ctx.font = '500 12px "Kantumruy Pro", sans-serif';
      ctx.fillText('ABA Mobile • ACLEDA mobile • Bakong • Wing • Canadia • TrueMoney', 320, 782);

      // Separator line
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(36, 804);
      ctx.lineTo(604, 804);
      ctx.stroke();

      // Footer Details (Location & Phone)
      ctx.textAlign = 'left';
      ctx.fillStyle = '#475569';
      ctx.font = 'bold 11.5px "Kantumruy Pro", sans-serif';
      ctx.fillText('📍 EduShop (ពោធិ៍សាត់)', 45, 832);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#0284c7';
      ctx.font = 'bold 11.5px "Kantumruy Pro", sans-serif';
      ctx.fillText('📞 069 49 01 08 / 090 343 206', 595, 832);

      // Time Stamp
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10.5px "Kantumruy Pro", sans-serif';
      ctx.fillText(`កាលបរិច្ឆេទបង្កើត៖ ${dateStr} ម៉ោង ${timeStr} • បង្កាន់ដៃស្កេនបង់ប្រាក់`, 320, 856);

      // Export canvas to both DataURL and Blob (100% vector-safe & non-tainted)
      try {
        const dataUrl = canvas.toDataURL('image/png');
        if (canvas.toBlob) {
          canvas.toBlob((blob) => {
            if (blob) {
              blob.dataUrl = dataUrl;
              resolve(blob);
            } else {
              const b = dataUrlToBlob(dataUrl);
              b.dataUrl = dataUrl;
              resolve(b);
            }
          }, 'image/png', 0.95);
        } else {
          const b = dataUrlToBlob(dataUrl);
          b.dataUrl = dataUrl;
          resolve(b);
        }
      } catch (err2) {
        reject(err2);
      }
    } catch (drawErr) {
      reject(drawErr);
    }
  });
}

// Current generated card state for instant download and mobile sharing
let currentKhqrCardState = {
  blob: null,
  blobUrl: null,
  dataUrl: '',
  filename: '',
  merchantName: '',
  payableKHR: 0
};

// --- AUTOMATIC KHQR IMAGE DOWNLOAD & MOBILE SAVE HANDLER ---
async function downloadKhqrImage(customSrc = null, customName = null, skipMobilePreviewModal = false) {
  const payInfo = getCurrentOrderPaymentInfo();
  const payableKHR = payInfo.payableKHR;
  const payableUSD = payInfo.payableUSD;
  const merchantName = payInfo.merchantName;
  const bankName = payInfo.bankName;
  const accountDetail = payInfo.accountDetail;
  const isAcleda = payInfo.isAcleda;
  const payload = payInfo.payload;
  const qrSrc = customSrc || payInfo.qrSrc;

  const cleanName = merchantName.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = customName || `${cleanName}_KHQR_${Math.round(payableKHR)}KHR.png`;

  showToast('⏳ កំពុងបង្កើតរូបភាព KHQR...', 'success');

  let finalBlob = null;
  try {
    finalBlob = await generateKhqrCardBlob({
      merchantName,
      bankName,
      accountDetail,
      payableKHR,
      payableUSD,
      payload,
      isAcleda,
      qrSrc
    });
  } catch (canvasErr) {
    console.warn('Canvas card generation failed:', canvasErr);
  }

  if (!finalBlob) {
    showToast('⚠️ មិនអាចបង្កើតរូបភាព KHQR បានទេ។ សូមព្យាយាមម្ដងទៀត!', 'error');
    return;
  }

  // Revoke previous blob URL if exists
  if (currentKhqrCardState.blobUrl) {
    try { URL.revokeObjectURL(currentKhqrCardState.blobUrl); } catch(e){}
  }

  const blobUrl = URL.createObjectURL(finalBlob);
  const dataUrl = finalBlob.dataUrl || blobUrl;

  currentKhqrCardState = {
    blob: finalBlob,
    blobUrl,
    dataUrl,
    filename,
    merchantName,
    payableKHR
  };

  const helperImg = document.getElementById('helper-qr-preview-img');
  if (helperImg) helperImg.src = dataUrl;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 768;
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  if (isMobile) {
    // 1. Try Native Web Share API first (on iOS/Android, this lets users save directly to Camera Roll/Photos!)
    if (!skipMobilePreviewModal && navigator.share && navigator.canShare) {
      try {
        const file = new File([finalBlob], filename, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: `KHQR - ${merchantName}`,
            text: `KHQR សម្រាប់ទូទាត់ប្រាក់ ${formatKHR(payableKHR)} ទៅកាន់ ${merchantName}`
          });
          showToast('✓ បានរក្សាទុករូបភាព KHQR ជោគជ័យ!');
          return;
        }
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Share canceled by user');
        } else {
          console.warn('Share API failed:', err);
        }
      }
    }

    // 2. On Android/Chrome mobile: trigger direct download using BLOB URL (Blob URLs work on mobile Chrome)
    if (!isIOS) {
      directDownloadLink(blobUrl, filename);
      showToast('✓ កំពុងរក្សាទុករូបភាព KHQR ចូលទូរស័ព្ទ...', 'success');
    }

    // 3. For ALL Mobile devices (iOS & Android): Open dedicated Save Preview Modal if requested!
    if (!skipMobilePreviewModal) {
      openMobileSaveQrPreviewModal(dataUrl, filename, merchantName, payableKHR);
    }
  } else {
    // Desktop: Direct browser download trigger
    directDownloadLink(blobUrl, filename);
    showToast(`✓ បានរក្សាទុករូបភាព KHQR (${merchantName} - ${formatKHR(payableKHR)}) ជោគជ័យ!`);
  }

  return finalBlob;
}

// --- NATIVE MOBILE SHARE HANDLER ---
async function triggerNativeKhqrShare() {
  if (!currentKhqrCardState.blob && !currentKhqrCardState.dataUrl) {
    showToast('⚠️ មិនទាន់មានរូបភាព KHQR សម្រាប់ចែករំលែកទេ', 'error');
    return;
  }
  if (navigator.share) {
    try {
      if (currentKhqrCardState.blob) {
        const file = new File([currentKhqrCardState.blob], currentKhqrCardState.filename, { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: `KHQR - ${currentKhqrCardState.merchantName}`,
            text: `KHQR សម្រាប់ទូទាត់ប្រាក់ (${formatKHR(currentKhqrCardState.payableKHR)})`
          });
          showToast('✓ បានចែករំលែក / រក្សាទុករូបភាព KHQR ជោគជ័យ!');
          return;
        }
      }
      // Text fallback
      await navigator.share({
        title: `KHQR - ${currentKhqrCardState.merchantName}`,
        text: `KHQR សម្រាប់ទូទាត់ប្រាក់ ${formatKHR(currentKhqrCardState.payableKHR)}`
      });
      return;
    } catch (err) {
      if (err.name === 'AbortError') return;
      console.warn('Share API failed:', err);
    }
  }
  // Fallback: Open full image in new tab for easy saving
  openKhqrImageInNewTab();
}

// --- OPEN FULL IMAGE IN CLEAN WINDOW FOR EASY LONG-PRESS SAVE ---
function openKhqrImageInNewTab() {
  const src = currentKhqrCardState.dataUrl || currentKhqrCardState.blobUrl;
  if (!src) return;
  const win = window.open('', '_blank');
  if (win) {
    win.document.write(`
      <!DOCTYPE html>
      <html lang="km">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes">
        <title>${currentKhqrCardState.filename || 'KHQR Card'}</title>
        <style>
          body {
            margin: 0;
            background: #090d16;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 16px;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Kantumruy Pro", sans-serif;
          }
          img {
            max-width: 100%;
            max-height: 80vh;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.8);
            object-fit: contain;
          }
          .tip-box {
            margin-top: 14px;
            background: rgba(255, 255, 255, 0.12);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 10px 16px;
            border-radius: 14px;
            text-align: center;
            font-size: 13px;
            max-width: 90%;
            line-height: 1.4;
          }
        </style>
      </head>
      <body>
        <img src="${src}" alt="KHQR Card">
        <div class="tip-box">
          💡 <strong>ការណែនាំ៖</strong> ចុចសង្កត់លើរូបភាពខាងលើ (Long-press) រួចជ្រើសរើស <strong>«Save Image»</strong> ឬ <strong>«រក្សាទុកក្នុងរូបថត»</strong> ដើម្បីរក្សាទុកក្នុងទូរស័ព្ទ។
        </div>
      </body>
      </html>
    `);
    win.document.close();
  } else {
    location.href = src;
  }
}

function openMobileSaveQrPreviewModal(dataUrl, filename, merchantName, payableKHR) {
  let modal = document.getElementById('mobile-save-qr-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'mobile-save-qr-modal';
    modal.className = 'fixed inset-0 z-[99] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 animate-fade-in';
    modal.onclick = (e) => {
      if (e.target.id === 'mobile-save-qr-modal' || e.target.closest('#mobile-save-qr-close')) {
        modal.classList.add('hidden');
        updateBodyScrollLock();
      }
    };
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="bg-white rounded-2xl sm:rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[94vh] my-auto animate-scale-up">
      <!-- Header -->
      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50">
        <div class="flex items-center gap-2 min-w-0 pr-2">
          <span class="text-rose-600 font-extrabold text-xs px-2 py-0.5 rounded bg-rose-50 border border-rose-200 flex-shrink-0">KHQR Card</span>
          <div class="min-w-0">
            <span class="font-bold text-slate-800 text-xs sm:text-sm block truncate">${merchantName} (${formatKHR(payableKHR)})</span>
            <span class="text-[10px] text-slate-500 block truncate">រក្សាទុកក្នុង Album រូបថតទូរស័ព្ទ</span>
          </div>
        </div>
        <button id="mobile-save-qr-close" class="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center text-sm font-bold cursor-pointer transition flex-shrink-0">
          ✕
        </button>
      </div>

      <!-- Instruction Banner -->
      <div class="bg-amber-50 border-b border-amber-200 px-3.5 py-2.5 flex items-start gap-2">
        <span class="text-base flex-shrink-0">💡</span>
        <div class="text-[11.5px] text-amber-900 leading-snug">
          <strong>របៀបរក្សាទុកក្នុង Album រូបថត៖</strong> ចុចសង្កត់លើរូបភាពខាងក្រោម (Long-press) រួចជ្រើសរើស <strong class="text-rose-700">«Save Image»</strong> ឬ <strong class="text-rose-700">«រក្សាទុកក្នុងរូបថត»</strong>។
        </div>
      </div>

      <!-- Image Display Area -->
      <div class="p-3 bg-slate-100 flex flex-col items-center justify-center overflow-y-auto max-h-[48vh] sm:max-h-[52vh]">
        <img id="mobile-preview-img" src="${dataUrl}" alt="KHQR Card" class="w-full max-h-[44vh] object-contain rounded-xl shadow-md border border-slate-200 select-auto cursor-pointer" draggable="true" style="-webkit-touch-callout: default !important; -webkit-user-select: auto !important; user-select: auto !important; pointer-events: auto !important; touch-action: auto !important;" title="ចុចសង្កត់ដើម្បីរក្សាទុករូបភាព">
      </div>

      <!-- Action Buttons -->
      <div class="p-3 border-t border-slate-100 bg-white flex flex-col gap-2">
        <div class="grid grid-cols-2 gap-2">
          <!-- Button 1: Share / Save to Photos -->
          <button type="button" onclick="triggerNativeKhqrShare()" class="py-2.5 px-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white text-[11.5px] font-bold text-center flex items-center justify-center gap-1 shadow-sm transition active:scale-95 cursor-pointer">
            <span>📲</span> <span>ចែករំលែក / រក្សាទុក</span>
          </button>

          <!-- Button 2: Direct Download -->
          <button type="button" onclick="directDownloadLink('${dataUrl}', '${filename}')" class="py-2.5 px-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-[11.5px] font-bold text-center flex items-center justify-center gap-1 shadow-sm transition active:scale-95 cursor-pointer">
            <span>📥</span> <span>ទាញយក</span>
          </button>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <!-- Button 3: Open Full Image -->
          <button type="button" onclick="openKhqrImageInNewTab()" class="py-2 px-2 rounded-xl border border-sky-300 text-sky-700 bg-sky-50 hover:bg-sky-100 text-[11px] font-semibold text-center flex items-center justify-center gap-1 transition active:scale-95 cursor-pointer">
            <span>🔍</span> <span>បើករូបភាពធំ</span>
          </button>

          <!-- Button 4: Done / Close -->
          <button type="button" onclick="document.getElementById('mobile-save-qr-modal').classList.add('hidden')" class="py-2 px-2 rounded-xl border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 text-[11px] font-semibold transition cursor-pointer">
            រួចរាល់
          </button>
        </div>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

function previewCurrentKHQR() {
  const payInfo = getCurrentOrderPaymentInfo();
  const payableKHR = payInfo.payableKHR;
  const payableUSD = payInfo.payableUSD;
  const merchantName = payInfo.merchantName;
  const bankName = payInfo.bankName;
  const accountDetail = payInfo.accountDetail;
  const qrSrc = payInfo.qrSrc;
  const title = `${bankName} (${merchantName})`;
  const subInfo = `${accountDetail} • ទឹកប្រាក់ជាក់ស្ដែង៖ ${formatKHR(payableKHR)}`;

  let modal = document.getElementById('khqr-lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'khqr-lightbox-modal';
    modal.className = 'fixed inset-0 z-[70] bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 animate-fade-in';
    modal.onclick = (e) => {
      if (e.target.id === 'khqr-lightbox-modal' || e.target.closest('#khqr-lightbox-close')) {
        modal.classList.add('hidden');
        updateBodyScrollLock();
      }
    };
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="bg-white rounded-2xl sm:rounded-3xl max-w-sm sm:max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] my-auto animate-bounce-soft">
      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50">
        <div class="flex items-center gap-2 min-w-0 pr-2">
          <span class="text-rose-600 font-black text-xs px-2 py-0.5 rounded bg-rose-50 border border-rose-200 flex-shrink-0">KHQR</span>
          <div class="min-w-0">
            <span class="font-bold text-slate-800 text-xs sm:text-sm block truncate">${title}</span>
            <span class="text-[10px] text-slate-500 block truncate">${subInfo}</span>
          </div>
        </div>
        <button id="khqr-lightbox-close" class="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center text-sm font-bold cursor-pointer transition flex-shrink-0">
          ✕
        </button>
      </div>
      <div class="p-4 sm:p-6 bg-slate-100 flex flex-col items-center justify-center overflow-y-auto max-h-[70vh]">
        <div class="bg-white p-3 rounded-2xl shadow-lg border border-slate-200 flex flex-col items-center">
          <img src="${qrSrc}" alt="${title}" class="w-64 h-64 sm:w-72 sm:h-72 object-contain rounded-xl">
          <div class="mt-2 text-center">
            <span class="text-xs font-bold text-slate-800 block">${merchantName}</span>
            <span class="text-xs font-extrabold text-rose-600">${formatKHR(payableKHR)} <span class="text-[10px] text-slate-500 font-normal">(${formatUSD(payableUSD)})</span></span>
          </div>
        </div>
        <p class="text-[11px] text-slate-500 text-center mt-3 max-w-xs">
          💡 រូបភាពពេល Save នឹងមានភ្ជាប់ <strong>ឈ្មោះគណនី (${merchantName})</strong> និង <strong>ទឹកប្រាក់ជាក់ស្ដែង (${formatKHR(payableKHR)})</strong> ស្វ័យប្រវត្តិ។
        </p>
      </div>
      <div class="p-3.5 border-t border-slate-100 bg-white flex items-center justify-between gap-2">
        <button type="button" onclick="downloadKhqrImage()" class="flex-1 py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95 cursor-pointer">
          <span>📥</span>
          <span>រក្សាទុកក្នុងទូរស័ព្ទ (Save QR)</span>
        </button>
        <button onclick="document.getElementById('khqr-lightbox-modal').classList.add('hidden'); updateBodyScrollLock();" class="py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition cursor-pointer">
          បិទ
        </button>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

// ================= BANK APP SELECTOR & DEEP LINKING =================
let currentBankSelectorContext = null;

const SUPPORTED_BANKS = {
  aba: {
    key: 'aba',
    name: 'ABA Mobile',
    bankTitle: 'ធនាគារ អេប៊ីអេ (Advanced Bank of Asia)',
    color: '#004f71',
    iosScheme: 'abamobilebank://',
    androidIntent: 'intent://open#Intent;scheme=abamobilebank;package=com.aba.mobilebank;action=android.intent.action.VIEW;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.aba.mobilebank;end',
    playStore: 'https://play.google.com/store/apps/details?id=com.aba.mobilebank',
    appStore: 'https://apps.apple.com/app/aba-mobile-bank/id845219922'
  },
  acleda: {
    key: 'acleda',
    name: 'ACLEDA mobile',
    bankTitle: 'អេស៊ីលីដា ម៉ូបាល (Unity ToanChet)',
    color: '#003366',
    iosScheme: 'acledamobile://',
    androidIntent: 'intent://open#Intent;scheme=acledamobile;package=com.acledabank.acledamobile;action=android.intent.action.VIEW;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.acledabank.acledamobile;end',
    playStore: 'https://play.google.com/store/apps/details?id=com.acledabank.acledamobile',
    appStore: 'https://apps.apple.com/app/acleda-mobile/id1189396349'
  },
  bakong: {
    key: 'bakong',
    name: 'Bakong App',
    bankTitle: 'ធនាគារជាតិនៃកម្ពុជា (NBC Bakong)',
    color: '#E1251B',
    iosScheme: 'bakong://',
    androidIntent: 'intent://open#Intent;scheme=bakong;package=kh.gov.nbc.bakong;action=android.intent.action.VIEW;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dkh.gov.nbc.bakong;end',
    playStore: 'https://play.google.com/store/apps/details?id=kh.gov.nbc.bakong',
    appStore: 'https://apps.apple.com/app/bakong/id1450954009'
  },
  wing: {
    key: 'wing',
    name: 'Wing Bank App',
    bankTitle: 'ធនាគារ វីង (Wing Bank)',
    color: '#00b14f',
    iosScheme: 'wingmoney://',
    androidIntent: 'intent://open#Intent;scheme=wingmoney;package=com.wingmoney.wingpay;action=android.intent.action.VIEW;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.wingmoney.wingpay;end',
    playStore: 'https://play.google.com/store/apps/details?id=com.wingmoney.wingpay',
    appStore: 'https://apps.apple.com/app/wing-bank/id655482030'
  },
  canadia: {
    key: 'canadia',
    name: 'Canadia Bank',
    bankTitle: 'ធនាគារ កាណាឌីយ៉ា (Canadia Mobile)',
    color: '#dc2626',
    iosScheme: 'canadiabank://',
    androidIntent: 'intent://open#Intent;scheme=canadiabank;package=kh.com.canadiabank.mobilebanking;action=android.intent.action.VIEW;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dkh.com.canadiabank.mobilebanking;end',
    playStore: 'https://play.google.com/store/apps/details?id=kh.com.canadiabank.mobilebanking',
    appStore: 'https://apps.apple.com/app/canadia-bank-app/id1489087569'
  },
  sathapana: {
    key: 'sathapana',
    name: 'Sathapana Mobile',
    bankTitle: 'ធនាគារ ស្ថាបនា (Sathapana Bank)',
    color: '#1e3a8a',
    iosScheme: 'sathapanamobile://',
    androidIntent: 'intent://open#Intent;scheme=sathapanamobile;package=com.sathapana.mobilebanking;action=android.intent.action.VIEW;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.sathapana.mobilebanking;end',
    playStore: 'https://play.google.com/store/apps/details?id=com.sathapana.mobilebanking',
    appStore: 'https://apps.apple.com/app/sathapana-mobile/id1488975877'
  }
};

function openDeepLinkSafely(url) {
  if (!url) return;
  const isAndroid = /Android/i.test(navigator.userAgent);
  if (isAndroid) {
    try {
      window.location.href = url;
    } catch (err) {
      console.warn("Could not launch Android intent:", err);
    }
  } else {
    try {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_top';
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        if (link.parentNode) link.parentNode.removeChild(link);
      }, 500);
    } catch (err) {
      console.warn("Could not launch deep link:", err);
    }
  }
}

// 1-Click Pay directly with currently selected bank in order modal
function payWithBankApp() {
  currentBankSelectorContext = null;
  const method = document.querySelector('input[name="payment_method"]:checked')?.value || 'ABA KHQR';
  const isAcleda = method.includes('អេស៊ីលីដា') || method.includes('ACLEDA');
  const bankKey = isAcleda ? 'acleda' : 'aba';
  launchBankApp(bankKey);
}

function openBankSelectorModal(orderContext = null) {
  let payableKHR = 0;
  let payableUSD = 0;
  let merchantName = 'KOEUR SOYTY';
  let isAcleda = false;
  let payload = '';

  const isOrderActive = typeof orderModal !== 'undefined' && orderModal && !orderModal.classList.contains('hidden');

  if (orderContext && orderContext.totalKHR) {
    payableKHR = orderContext.totalKHR;
    payableUSD = orderContext.totalUSD || (payableKHR / EXCHANGE_RATE);
    isAcleda = !!(orderContext.paymentMethod && (orderContext.paymentMethod.includes('អេស៊ីលីដា') || orderContext.paymentMethod.includes('ACLEDA')));
    merchantName = isAcleda ? 'Vey Kimleang' : 'KOEUR SOYTY';
    payload = isAcleda ? generateAcledaKhqrPayload(payableKHR) : generateAbaKhqrPayload(payableKHR);
    currentBankSelectorContext = {
      payableKHR,
      payableUSD,
      merchantName,
      isAcleda,
      payload
    };
  } else if (isOrderActive) {
    currentBankSelectorContext = null;
    const payInfo = getCurrentOrderPaymentInfo(true);
    payableKHR = payInfo.payableKHR;
    payableUSD = payInfo.payableUSD;
    merchantName = payInfo.merchantName;
    isAcleda = payInfo.isAcleda;
    payload = payInfo.payload;
    currentBankSelectorContext = payInfo;
  } else if (typeof latestCompletedOrder !== 'undefined' && latestCompletedOrder && latestCompletedOrder.totalKHR) {
    payableKHR = latestCompletedOrder.totalKHR;
    payableUSD = latestCompletedOrder.totalUSD || (payableKHR / EXCHANGE_RATE);
    isAcleda = !!(latestCompletedOrder.paymentMethod && (latestCompletedOrder.paymentMethod.includes('អេស៊ីលីដា') || latestCompletedOrder.paymentMethod.includes('ACLEDA')));
    merchantName = isAcleda ? 'Vey Kimleang' : 'KOEUR SOYTY';
    payload = isAcleda ? generateAcledaKhqrPayload(payableKHR) : generateAbaKhqrPayload(payableKHR);
    currentBankSelectorContext = {
      payableKHR,
      payableUSD,
      merchantName,
      isAcleda,
      payload
    };
  } else {
    const payInfo = getCurrentOrderPaymentInfo();
    payableKHR = payInfo.payableKHR;
    payableUSD = payInfo.payableUSD;
    merchantName = payInfo.merchantName;
    isAcleda = payInfo.isAcleda;
    payload = payInfo.payload;
    currentBankSelectorContext = payInfo;
  }

  const amtEl = document.getElementById('bank-selector-amount');
  const merchEl = document.getElementById('bank-selector-merchant');
  const modal = document.getElementById('bank-selector-modal');

  if (amtEl) amtEl.textContent = `${formatKHR(payableKHR)} (${formatUSD(payableUSD)})`;
  if (merchEl) merchEl.textContent = merchantName;

  if (modal) {
    modal.classList.remove('hidden');
    updateBodyScrollLock();
  }
}

function closeBankSelectorModal() {
  const modal = document.getElementById('bank-selector-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

async function launchBankApp(bankKey) {
  if (bankKey === 'save_qr') {
    closeBankSelectorModal();
    await downloadKhqrImage();
    showToast('✓ កំពុងរក្សាទុករូបភាព KHQR សម្រាប់ស្កេនពី Album...', 'success');
    return;
  }

  const bank = SUPPORTED_BANKS[bankKey];
  if (!bank) return;

  const isOrderActive = typeof orderModal !== 'undefined' && orderModal && !orderModal.classList.contains('hidden');
  if (isOrderActive) {
    currentBankSelectorContext = null;
  }

  const payInfo = currentBankSelectorContext || getCurrentOrderPaymentInfo(isOrderActive);
  const payableKHR = payInfo.payableKHR;
  const merchantName = payInfo.merchantName;
  const isAcleda = payInfo.isAcleda;
  const payload = payInfo.payload || (isAcleda ? generateAcledaKhqrPayload(payableKHR) : generateAbaKhqrPayload(payableKHR));

  // 1. Auto copy payload to clipboard for instant pasting/scanning in banking app
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(payload).catch(() => {});
  }

  // 2. Pre-generate and save the KHQR card image to device in background so it is in Album
  downloadKhqrImage(null, null, true).catch(() => {});

  // 3. Determine target URL (Android Intent vs iOS Scheme)
  const isAndroid = /Android/i.test(navigator.userAgent);
  const targetUrl = (isAndroid && bank.androidIntent) ? bank.androidIntent : (bank.iosScheme || bank.playStore);

  // 4. Close selector and open the smart Mobile Scan Guide Modal immediately
  closeBankSelectorModal();
  showBankLaunchHelperModal(bank, targetUrl, payInfo);

  // 5. On Android Chrome, attempt direct intent launch via browser navigation
  if (isAndroid && bank.androidIntent) {
    openDeepLinkSafely(bank.androidIntent);
  }
}

function showBankLaunchHelperModal(bank, targetUrl, payInfo) {
  const payableKHR = payInfo.payableKHR;
  const payableUSD = payInfo.payableUSD;
  const merchantName = payInfo.merchantName;
  const isAcleda = payInfo.isAcleda;
  const payload = payInfo.payload || (isAcleda ? generateAcledaKhqrPayload(payableKHR) : generateAbaKhqrPayload(payableKHR));

  let qrPreviewSrc = (currentKhqrCardState && currentKhqrCardState.dataUrl && currentKhqrCardState.payableKHR === payableKHR) 
    ? currentKhqrCardState.dataUrl 
    : getKhqrDataUrl(payload);

  let helperModal = document.getElementById('bank-launch-helper-modal');
  if (!helperModal) {
    helperModal = document.createElement('div');
    helperModal.id = 'bank-launch-helper-modal';
    helperModal.className = 'fixed inset-0 z-[75] bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4 animate-fade-in';
    helperModal.onclick = (e) => {
      if (e.target.id === 'bank-launch-helper-modal' || e.target.closest('#bank-launch-helper-close')) {
        helperModal.classList.add('hidden');
        updateBodyScrollLock();
      }
    };
    document.body.appendChild(helperModal);
  }

  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const storeUrl = isIOS ? bank.appStore : bank.playStore;
  const storeName = isIOS ? 'App Store (iOS)' : 'Google Play';

  // Ensure card image is freshly generated and populated
  if (!currentKhqrCardState.blob || currentKhqrCardState.payableKHR !== payableKHR || currentKhqrCardState.merchantName !== merchantName) {
    generateKhqrCardBlob({
      merchantName,
      bankName: payInfo.bankName || (isAcleda ? 'ACLEDA Bank' : 'ABA Bank'),
      accountDetail: payInfo.accountDetail || (isAcleda ? 'ACLEDA: 090 343 206' : 'ABA: 008 350 616 / 069 49 01 08'),
      payableKHR,
      payableUSD,
      payload,
      isAcleda,
      qrSrc: payInfo.qrSrc
    }).then(blob => {
      const bUrl = URL.createObjectURL(blob);
      currentKhqrCardState = {
        blob,
        blobUrl: bUrl,
        dataUrl: blob.dataUrl || bUrl,
        filename: `${merchantName.replace(/[^a-zA-Z0-9]/g, '_')}_KHQR_${Math.round(payableKHR)}KHR.png`,
        merchantName,
        payableKHR
      };
      const img = document.getElementById('helper-qr-preview-img');
      if (img) img.src = currentKhqrCardState.dataUrl;
    }).catch(() => {});
  }

  helperModal.innerHTML = `
    <div class="bg-white rounded-2xl sm:rounded-3xl max-w-sm sm:max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[95vh] my-auto animate-scale-up">
      <!-- Header -->
      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50">
        <div class="flex items-center gap-2.5 min-w-0 pr-2">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs text-white shadow-xs flex-shrink-0" style="background-color: ${bank.color};">
            ${bank.key.toUpperCase()}
          </div>
          <div class="min-w-0">
            <span class="font-bold text-slate-800 text-xs sm:text-sm block truncate">ទូទាត់តាម ${bank.name}</span>
            <span class="text-[10px] text-slate-500 block truncate">${bank.bankTitle}</span>
          </div>
        </div>
        <button id="bank-launch-helper-close" class="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center text-sm font-bold cursor-pointer transition flex-shrink-0">
          ✕
        </button>
      </div>

      <!-- Content Area (Scrollable) -->
      <div class="p-3.5 sm:p-4 overflow-y-auto max-h-[84vh] space-y-3 bg-white">
        <!-- Amount & Merchant Banner -->
        <div class="p-3 bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl border border-rose-200 flex items-center justify-between">
          <div>
            <span class="text-[10.5px] text-slate-500 block">ទឹកប្រាក់ជាក់ស្ដែងត្រូវទូទាត់៖</span>
            <div class="flex items-baseline gap-1">
              <span class="text-base sm:text-lg font-black text-rose-600">${formatKHR(payableKHR)}</span>
              <span class="text-xs text-slate-500 font-semibold">(${formatUSD(payableUSD)})</span>
            </div>
          </div>
          <div class="text-right">
            <span class="text-[10px] text-slate-400 block">គណនីទទួល៖</span>
            <span class="text-xs font-bold text-slate-800 block truncate max-w-[130px]">${merchantName}</span>
            <span class="text-[10px] text-emerald-600 font-bold">✓ ស្កេនបានគ្រប់ App ធនាគារ</span>
          </div>
        </div>

        <!-- 3 Step Interactive Mobile Payment Flow -->
        <div class="space-y-2.5">
          <!-- Step 1: Save KHQR Image -->
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-center">
            <div class="flex items-center justify-between text-left">
              <div class="flex items-center gap-1.5">
                <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px] font-bold">1</span>
                <span class="text-xs font-bold text-slate-800">រក្សាទុករូបភាព KHQR ក្នុងទូរស័ព្ទ</span>
              </div>
              <span class="text-[9.5px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">ជំហានទី ១</span>
            </div>

            <!-- QR Card Display with direct touch save support -->
            <div class="relative bg-white p-2 rounded-xl border border-slate-200 shadow-xs inline-block mx-auto">
              <img id="helper-qr-preview-img" src="${qrPreviewSrc}" alt="KHQR Card" class="w-48 sm:w-56 h-auto object-contain rounded-lg select-auto cursor-pointer" draggable="true" style="-webkit-touch-callout: default !important; -webkit-user-select: auto !important; user-select: auto !important;">
            </div>

            <div class="text-[10.5px] text-slate-500 leading-tight">
              👉 <strong>វិធីទី ១៖</strong> ចុចប៊ូតុងបៃតងខាងក្រោមដើម្បី Save ចូល Album<br>
              👉 <strong>វិធីទី ២៖</strong> ចុចសង្កត់លើរូបខាងលើ (Long-press) ➔ រក្សាទុករូបភាព (Save Image)
            </div>

            <button type="button" onclick="downloadKhqrImage()" class="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition cursor-pointer">
              <span>📥</span> <span>ចុចទីនេះដើម្បី Save រូប QR ចូល Album / Photos</span>
            </button>
          </div>

          <!-- Step 2: Open Bank App -->
          <div class="p-3 bg-sky-50 border border-sky-200 rounded-2xl space-y-2 text-left">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <span class="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[11px] font-bold">2</span>
                <span class="text-xs font-bold text-sky-950">បើក App ${bank.name}</span>
              </div>
              <span class="text-[9.5px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full font-bold">ជំហានទី ២</span>
            </div>

            <p class="text-[11px] text-slate-600 leading-normal">
              ចុចប៊ូតុងខាងក្រោមដើម្បីចូលទៅកាន់ App ធនាគាររបស់អ្នកផ្ទាល់៖
            </p>

            <!-- Direct Launch Button (Native <a> tag for 100% Mobile Browser Compatibility) -->
            <a href="${targetUrl}" target="_top" rel="noopener noreferrer" class="w-full py-3 px-4 rounded-xl text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition active:scale-95 cursor-pointer" style="background-color: ${bank.color};">
              <span>🚀</span> <span>បើក App ${bank.name} ឥឡូវនេះ (Open App)</span>
            </a>

            ${storeUrl ? `
              <div class="flex items-center justify-between pt-1">
                <span class="text-[10px] text-slate-400">បើមិនទាន់មាន App ក្នុងទូរស័ព្ទ៖</span>
                <a href="${storeUrl}" target="_blank" rel="noopener noreferrer" class="text-[10.5px] text-sky-600 hover:underline font-bold flex items-center gap-1">
                  <span>📲</span> <span>ដំឡើងលើ ${storeName}</span>
                </a>
              </div>
            ` : ''}
          </div>

          <!-- Step 3: Scan from Album Guidance -->
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-left space-y-1.5">
            <div class="flex items-center gap-1.5">
              <span class="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[11px] font-bold">3</span>
              <span class="text-xs font-bold text-amber-950">របៀបស្កេនទូទាត់ក្នុង App ${bank.name} ៖</span>
            </div>

            <div class="space-y-1 text-[11px] text-slate-700 pl-1 leading-relaxed">
              <div class="flex items-start gap-1.5">
                <span class="font-bold text-amber-700">ក.</span>
                <span>ពេលចូលក្នុង App ${bank.name} សូមចុចប៊ូតុង <strong>«ស្កេន QR (Scan QR)»</strong></span>
              </div>
              <div class="flex items-start gap-1.5">
                <span class="font-bold text-amber-700">ខ.</span>
                <span>ចុចលើរូប <strong>«អាល់ប៊ុម / រូបថត (Gallery / Album)»</strong></span>
              </div>
              <div class="flex items-start gap-1.5">
                <span class="font-bold text-amber-700">គ.</span>
                <span>ជ្រើសរើសរូបភាព KHQR ដែលបាន Save ➔ ផ្ទៀងផ្ទាត់ទឹកប្រាក់ ➔ បញ្ជាក់ការទូទាត់ជាការស្រេច!</span>
              </div>
            </div>
          </div>
        </div>

        <!-- In-App Browser (Telegram / Facebook) Hint -->
        <div class="p-2.5 bg-slate-100 rounded-xl text-[10px] text-slate-500 leading-snug flex items-start gap-1.5">
          <span>ℹ️</span>
          <span>ប្រសិនបើអ្នកកំពុងប្រើប្រាស់ <strong>Telegram</strong> ឬ <strong>Facebook In-App Browser</strong>៖ សូមចុចសញ្ញា <strong>⋯</strong> នៅជ្រុងលើស្តាំ រួចជ្រើសរើស <strong>«Open in Chrome»</strong> ឬ <strong>«Open in Safari»</strong> ដើម្បីបើក App ធនាគារដោយស្វ័យប្រវត្តិ។</span>
        </div>

        <!-- Switch to Another Bank -->
        <button type="button" onclick="document.getElementById('bank-launch-helper-modal').classList.add('hidden'); openBankSelectorModal();" class="w-full py-2.5 px-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer">
          <span>🏦</span> <span>ជ្រើសរើសធនាគារផ្សេងទៀត (Bakong, Wing, Canadia...)</span>
        </button>
      </div>
    </div>
  `;

  helperModal.classList.remove('hidden');
  updateBodyScrollLock();
}

function handlePaymentMethodChange() {
  const khqrSection = document.getElementById('khqr-card-section');
  const slipSection = document.getElementById('slip-upload-section');

  if (khqrSection) khqrSection.classList.remove('hidden');
  if (slipSection) slipSection.classList.remove('hidden');
  updateKHQRDisplay();
}

// --- PAYMENT SLIP UPLOAD & AMOUNT VERIFICATION SYSTEM ---
function getOrderPayableAmounts() {
  let rawUSD = 0;
  let rawKHR = 0;
  let totalUnits = 0;

  if (isOrderModalForCart) {
    rawUSD = cart.reduce((acc, i) => acc + (i.product.priceUSD * i.quantity), 0);
    rawKHR = cart.reduce((acc, i) => acc + (i.product.priceKHR * i.quantity), 0);
    totalUnits = cart.reduce((acc, i) => acc + i.quantity, 0);
  } else if (activeOrderProduct) {
    rawUSD = activeOrderProduct.product.priceUSD * activeOrderProduct.quantity;
    rawKHR = activeOrderProduct.product.priceKHR * activeOrderProduct.quantity;
    totalUnits = activeOrderProduct.quantity;
  }

  const bulk = getBulkDiscountInfo(totalUnits, rawUSD, rawKHR);
  const discUSD = appliedCoupon ? appliedCoupon.discountUSD : 0;
  const discKHR = appliedCoupon ? appliedCoupon.discountKHR : 0;

  const totalDiscountUSD = bulk.discountUSD + discUSD;
  const totalDiscountKHR = bulk.discountKHR + discKHR;

  const shipping = (typeof getEffectiveOrderShipping === 'function') 
    ? getEffectiveOrderShipping() 
    : { isFree: false, effectiveUSD: 0, effectiveKHR: 0 };

  const itemsPayableUSD = Math.max(0, rawUSD - totalDiscountUSD);
  const itemsPayableKHR = Math.max(0, rawKHR - totalDiscountKHR);
  const payableUSD = itemsPayableUSD + shipping.effectiveUSD;
  const payableKHR = itemsPayableKHR + shipping.effectiveKHR;

  return {
    rawUSD,
    rawKHR,
    totalUnits,
    totalDiscountUSD,
    totalDiscountKHR,
    shippingFeeUSD: shipping.effectiveUSD,
    shippingFeeKHR: shipping.effectiveKHR,
    payableUSD,
    payableKHR
  };
}

function validateSlipAmountLive() {
  const { payableUSD, payableKHR } = getOrderPayableAmounts();
  const amountInput = document.getElementById('cust-slip-amount');
  const currencySelect = document.getElementById('cust-slip-currency');
  const matchBadge = document.getElementById('slip-match-badge');
  const feedback = document.getElementById('slip-match-feedback');
  const expectedDisplay = document.getElementById('slip-expected-display');
  const acctSelect = document.getElementById('cust-slip-account-select');
  const acctBadge = document.getElementById('slip-account-badge');
  const overallBadge = document.getElementById('slip-overall-badge');
  const acctFeedback = document.getElementById('slip-account-feedback');
  const correctionNotice = document.getElementById('slip-payment-correction-notice');

  if (expectedDisplay) {
    expectedDisplay.textContent = `${formatUSD(payableUSD)} (${formatKHR(payableKHR)})`;
  }

  // 1. Account Check (ត្រួតពិនិត្យគណនី KHQR របស់ម្ចាស់ហាង)
  const selectedAcctKey = acctSelect ? acctSelect.value : 'ABA';
  let isAccountValid = true;
  let bankName = 'ABA Bank';
  let accountName = 'KOEUR SOYTY';
  let accountNo = '008 350 616';

  if (selectedAcctKey === 'ACLEDA') {
    bankName = 'ACLEDA Bank';
    accountName = 'Vey Kimleang';
    accountNo = '090 343 206';
    isAccountValid = true;
    if (acctBadge) {
      acctBadge.textContent = '✓ គណនី ACLEDA (Vey Kimleang) ត្រឹមត្រូវ';
      acctBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300';
    }
    if (acctFeedback) {
      acctFeedback.innerHTML = `<span class="text-emerald-700 font-bold">✓ ផ្ទៀងផ្ទាត់ត្រឹមត្រូវ៖</span> គណនី ACLEDA: <strong>090 343 206</strong> (Vey Kimleang)`;
    }
  } else if (selectedAcctKey === 'OTHER') {
    bankName = 'គណនីផ្សេងទៀត';
    accountName = 'មិនស្គាល់';
    accountNo = 'Unknown';
    isAccountValid = false;
    if (acctBadge) {
      acctBadge.textContent = '❌ គណនីមិនត្រឹមត្រូវ!';
      acctBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-700 border border-rose-300 animate-pulse';
    }
    if (acctFeedback) {
      acctFeedback.innerHTML = `<span class="text-rose-600 font-bold">❌ មិនត្រឹមត្រូវ៖</span> គណនីនេះមិនមែនជាគណនី KHQR របស់ម្ចាស់ហាងឡើយ!`;
    }
  } else {
    // ABA (default)
    bankName = 'ABA Bank';
    accountName = 'KOEUR SOYTY';
    accountNo = '008 350 616';
    isAccountValid = true;
    if (acctBadge) {
      acctBadge.textContent = '✓ គណនី ABA (KOEUR SOYTY) ត្រឹមត្រូវ';
      acctBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300';
    }
    if (acctFeedback) {
      acctFeedback.innerHTML = `<span class="text-emerald-700 font-bold">✓ ផ្ទៀងផ្ទាត់ត្រឹមត្រូវ៖</span> គណនី ABA: <strong>008 350 616</strong> (KOEUR SOYTY)`;
    }
  }

  // 2. Slip Existence Check
  if (!uploadedSlipDataUrl) {
    if (matchBadge) {
      matchBadge.textContent = 'មិនទាន់ភ្ជាប់ Slip';
      matchBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-200 text-slate-700';
    }
    if (overallBadge) {
      overallBadge.textContent = 'មិនទាន់ភ្ជាប់ Slip';
      overallBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-200 text-slate-700';
    }
    if (feedback) {
      feedback.textContent = '⚠️ សូម upload រូបភាពវិក្កយបត្របង់ប្រាក់ (Payment Slip / Screenshot) ជាមុនសិន។';
      feedback.className = 'text-[11px] p-2 rounded-lg font-medium leading-relaxed bg-slate-100 text-slate-600 border border-slate-200';
    }
    if (correctionNotice) {
      correctionNotice.classList.add('hidden');
    }
    return { 
      isValid: false, 
      isAccountValid: false, 
      isAmountValid: false, 
      reason: 'missing_slip', 
      bankName,
      accountName,
      accountNo,
      payableUSD, 
      payableKHR 
    };
  }

  // 3. Amount Check (តួលេខបង់ប្រាក់ត្រឹមត្រូវតាមចំនួន)
  const enteredVal = parseFloat(amountInput?.value);
  const currency = currencySelect?.value || 'USD';
  let isAmountValid = false;
  let shortageUSD = 0;
  let shortageKHR = 0;
  let amountReason = '';

  if (isNaN(enteredVal) || enteredVal <= 0) {
    amountReason = 'empty_amount';
    isAmountValid = false;
    if (matchBadge) {
      matchBadge.textContent = '❌ មិនទាន់បំពេញទឹកប្រាក់';
      matchBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-700 border border-rose-300';
    }
    if (feedback) {
      feedback.textContent = '⚠️ សូមវាយបញ្ចូលទឹកប្រាក់ដែលលោកអ្នកបានផ្ទេរជាក់ស្តែងលើរូបភាពវិក្កយបត្រ!';
      feedback.className = 'text-[11px] p-2 rounded-lg font-medium leading-relaxed bg-rose-50 text-rose-700 border border-rose-200';
    }
  } else if (currency === 'USD') {
    if (enteredVal < payableUSD - 0.01) {
      shortageUSD = payableUSD - enteredVal;
      shortageKHR = Math.round(shortageUSD * 4000);
      amountReason = 'amount_shortage';
      isAmountValid = false;
      if (matchBadge) {
        matchBadge.textContent = '❌ ខ្វះទឹកប្រាក់';
        matchBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-700 border border-rose-300';
      }
      if (feedback) {
        feedback.innerHTML = `❌ <strong>ទឹកប្រាក់មិនគ្រប់គ្រាន់!</strong> អ្នកបានបញ្ចូល <strong>${formatUSD(enteredVal)}</strong> ប៉ុន្តែតម្លៃបញ្ជាទិញសរុបគឺ <strong>${formatUSD(payableUSD)}</strong> (នៅខ្វះ <strong>${formatUSD(shortageUSD)}</strong> ឬ <strong>${formatKHR(shortageKHR)}</strong>)។`;
        feedback.className = 'text-[11px] p-2 rounded-lg font-medium leading-relaxed bg-rose-50 text-rose-700 border border-rose-300 animate-pulse';
      }
    } else if (enteredVal > payableUSD + 0.01) {
      const over = enteredVal - payableUSD;
      amountReason = 'amount_over';
      isAmountValid = true;
      if (matchBadge) {
        matchBadge.textContent = '✓ លើសទឹកប្រាក់';
        matchBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300';
      }
      if (feedback) {
        feedback.innerHTML = `✓ <strong>ទឹកប្រាក់គ្រប់គ្រាន់ (លើស ${formatUSD(over)})!</strong> អ្នកបានបង់ ${formatUSD(enteredVal)} (តម្លៃទំនិញ ${formatUSD(payableUSD)})។`;
        feedback.className = 'text-[11px] p-2 rounded-lg font-medium leading-relaxed bg-emerald-50 text-emerald-800 border border-emerald-200';
      }
    } else {
      amountReason = 'exact_match';
      isAmountValid = true;
      if (matchBadge) {
        matchBadge.textContent = '✓ ត្រឹមត្រូវ ១០០%';
        matchBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500 text-white shadow-xs';
      }
      if (feedback) {
        feedback.innerHTML = `✓ <strong>ទឹកប្រាក់ផ្ទៀងផ្ទាត់ត្រឹមត្រូវ ១០០%!</strong> ចំនួនទឹកប្រាក់លើវិក្កយបត្រ <strong>${formatUSD(enteredVal)}</strong> ត្រូវគ្នានឹងតម្លៃទំនិញ <strong>${formatUSD(payableUSD)}</strong> យ៉ាងល្អឥតខ្ចោះ។`;
        feedback.className = 'text-[11px] p-2 rounded-lg font-medium leading-relaxed bg-emerald-50 text-emerald-800 border border-emerald-300';
      }
    }
  } else {
    // KHR
    if (enteredVal < payableKHR - 100) {
      shortageKHR = payableKHR - enteredVal;
      shortageUSD = shortageKHR / 4000;
      amountReason = 'amount_shortage';
      isAmountValid = false;
      if (matchBadge) {
        matchBadge.textContent = '❌ ខ្វះទឹកប្រាក់';
        matchBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-700 border border-rose-300';
      }
      if (feedback) {
        feedback.innerHTML = `❌ <strong>ទឹកប្រាក់មិនគ្រប់គ្រាន់!</strong> អ្នកបានបញ្ចូល <strong>${formatKHR(enteredVal)}</strong> ប៉ុន្តែតម្លៃបញ្ជាទិញសរុបគឺ <strong>${formatKHR(payableKHR)}</strong> (នៅខ្វះ <strong>${formatKHR(shortageKHR)}</strong>)។`;
        feedback.className = 'text-[11px] p-2 rounded-lg font-medium leading-relaxed bg-rose-50 text-rose-700 border border-rose-300 animate-pulse';
      }
    } else if (enteredVal > payableKHR + 100) {
      const overKHR = enteredVal - payableKHR;
      amountReason = 'amount_over';
      isAmountValid = true;
      if (matchBadge) {
        matchBadge.textContent = '✓ លើសទឹកប្រាក់';
        matchBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300';
      }
      if (feedback) {
        feedback.innerHTML = `✓ <strong>ទឹកប្រាក់គ្រប់គ្រាន់ (លើស ${formatKHR(overKHR)})!</strong> អ្នកបានបង់ ${formatKHR(enteredVal)} (តម្លៃទំនិញ ${formatKHR(payableKHR)})។`;
        feedback.className = 'text-[11px] p-2 rounded-lg font-medium leading-relaxed bg-emerald-50 text-emerald-800 border border-emerald-200';
      }
    } else {
      amountReason = 'exact_match';
      isAmountValid = true;
      if (matchBadge) {
        matchBadge.textContent = '✓ ត្រឹមត្រូវ ១០០%';
        matchBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500 text-white shadow-xs';
      }
      if (feedback) {
        feedback.innerHTML = `✓ <strong>ទឹកប្រាក់ផ្ទៀងផ្ទាត់ត្រឹមត្រូវ ១០០%!</strong> ចំនួនទឹកប្រាក់លើវិក្កយបត្រ <strong>${formatKHR(enteredVal)}</strong> ត្រូវគ្នានឹងតម្លៃទំនិញ <strong>${formatKHR(payableKHR)}</strong> យ៉ាងល្អឥតខ្ចោះ។`;
        feedback.className = 'text-[11px] p-2 rounded-lg font-medium leading-relaxed bg-emerald-50 text-emerald-800 border border-emerald-300';
      }
    }
  }

  // 4. Overall Status & Instruction Notice
  const isOverallValid = isAccountValid && isAmountValid;

  if (overallBadge) {
    if (isOverallValid) {
      overallBadge.textContent = '✓ ផ្ទៀងផ្ទាត់ជោគជ័យ ១០០%';
      overallBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500 text-white shadow-xs';
    } else if (!isAccountValid) {
      overallBadge.textContent = '❌ គណនីមិនត្រឹមត្រូវ';
      overallBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-700 border border-rose-300 animate-pulse';
    } else {
      overallBadge.textContent = '❌ ទឹកប្រាក់មិនទាន់គ្រប់';
      overallBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-700 border border-rose-300 animate-pulse';
    }
  }

  // 5. Instruction Notice Banner (បើមិនត្រឹមត្រូវទេ បញ្ជាក់ឱ្យបង់ប្រាក់ឱ្យបានត្រឹមត្រូវ)
  if (correctionNotice) {
    correctionNotice.classList.remove('hidden');
    if (!isAccountValid) {
      correctionNotice.innerHTML = `
        <div class="bg-rose-50 border border-rose-300 rounded-xl p-3 text-rose-800 space-y-1.5 animate-pulse">
          <div class="font-extrabold flex items-center gap-1.5 text-xs text-rose-700">
            <span>🛑</span> <span>ការបង់ប្រាក់មិនត្រឹមត្រូវតាមគណនី KHQR របស់ម្ចាស់ហាងឡើយ!</span>
          </div>
          <p class="text-[11px] leading-relaxed">
            ហាងទទួលការទូទាត់តែលើគណនីផ្លូវការរបស់ម្ចាស់ហាងខាងក្រោមនេះប៉ុណ្ណោះ៖
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
            <div class="p-2 bg-white rounded-lg border border-rose-200">
              <strong class="text-sky-700 block">📲 ABA Bank: KOEUR SOYTY</strong>
              <span>លេខគណនី៖ <strong>008 350 616</strong></span>
            </div>
            <div class="p-2 bg-white rounded-lg border border-rose-200">
              <strong class="text-blue-800 block">🏦 ACLEDA Bank: Vey Kimleang</strong>
              <span>លេខគណនី៖ <strong>090 343 206</strong></span>
            </div>
          </div>
          <p class="text-[10.5px] text-rose-700 font-bold pt-1">
            👉 សូមស្កេន KHQR ផ្លូវការរបស់ហាងខាងលើ ហើយផ្ទេរប្រាក់ឱ្យបានត្រឹមត្រូវ រួច upload រូបភាពវិក្កយបត្រថ្មីឡើងវិញ!
          </p>
        </div>
      `;
    } else if (!isAmountValid) {
      const enteredStr = !isNaN(enteredVal) ? (currency === 'USD' ? formatUSD(enteredVal) : formatKHR(enteredVal)) : '0.00';
      const shortageStr = currency === 'USD' 
        ? `${formatUSD(shortageUSD)} (ឬ ${formatKHR(shortageKHR)})` 
        : `${formatKHR(shortageKHR)} (ឬ ${formatUSD(shortageUSD)})`;

      correctionNotice.innerHTML = `
        <div class="bg-rose-50 border border-rose-300 rounded-xl p-3 text-rose-800 space-y-1.5 animate-pulse">
          <div class="font-extrabold flex items-center gap-1.5 text-xs text-rose-700">
            <span>🛑</span> <span>ទឹកប្រាក់លើវិក្កយបត្រមិនទាន់គ្រប់គ្រាន់តាមតម្លៃបញ្ជាទិញទេ!</span>
          </div>
          <p class="text-[11px] leading-relaxed">
            តម្លៃបញ្ជាទិញសរុបគឺ <strong>${formatUSD(payableUSD)} (${formatKHR(payableKHR)})</strong> ប៉ុន្តែទឹកប្រាក់ដែលបានបង់គឺ <strong>${enteredStr}</strong> (នៅខ្វះ <strong>${shortageStr}</strong>)។
          </p>
          <p class="text-[10.5px] text-rose-700 font-bold pt-1">
            👉 សូមផ្ទេរប្រាក់បន្ថែមឱ្យគ្រប់ចំនួនតាមតម្លៃទំនិញសរុបខាងលើ ទើបប្រព័ន្ធអាចបញ្ជូនការកុម្ម៉ង់ទៅកាន់ម្ចាស់ហាងបាន!
          </p>
        </div>
      `;
    } else {
      const enteredStr = currency === 'USD' ? formatUSD(enteredVal) : formatKHR(enteredVal);
      correctionNotice.innerHTML = `
        <div class="bg-emerald-50 border border-emerald-300 rounded-xl p-2.5 text-emerald-800 space-y-1">
          <div class="font-extrabold flex items-center gap-1.5 text-xs text-emerald-700">
            <span>✓</span> <span>ការបង់ប្រាក់បានផ្ទៀងផ្ទាត់ត្រឹមត្រូវ ១០០%!</span>
          </div>
          <p class="text-[11px] leading-relaxed">
            គណនីទទួល៖ <strong>${bankName} (${accountName})</strong> | ទឹកប្រាក់៖ <strong>${enteredStr}</strong> (គ្រប់គ្រាន់ និងត្រឹមត្រូវ)។ លោកអ្នកអាចចុចបញ្ជាក់ការបញ្ជាទិញបានហើយ!
          </p>
        </div>
      `;
    }
  }

  return {
    isValid: isOverallValid,
    isAccountValid,
    isAmountValid,
    bankName,
    accountName,
    accountNo,
    enteredVal,
    currency,
    shortageUSD,
    shortageKHR,
    payableUSD,
    payableKHR,
    reason: isOverallValid ? amountReason : (!isAccountValid ? 'wrong_account' : amountReason)
  };
}

function autoMatchSlipAmount() {
  const { payableUSD, payableKHR } = getOrderPayableAmounts();
  const method = document.querySelector('input[name="payment_method"]:checked')?.value || 'ABA KHQR';
  const currencySelect = document.getElementById('cust-slip-currency');
  const amountInput = document.getElementById('cust-slip-amount');
  const acctSelect = document.getElementById('cust-slip-account-select');

  if (method.includes('អេស៊ីលីដា') || method.includes('ACLEDA') || method.includes('KHR')) {
    if (acctSelect && acctSelect.value !== 'OTHER') {
      acctSelect.value = 'ACLEDA';
    }
    if (currencySelect) currencySelect.value = 'KHR';
    if (amountInput) amountInput.value = payableKHR;
  } else {
    if (acctSelect && acctSelect.value !== 'OTHER') {
      acctSelect.value = 'ABA';
    }
    if (currencySelect) currencySelect.value = 'USD';
    if (amountInput) amountInput.value = payableUSD.toFixed(2);
  }

  validateSlipAmountLive();
}

function handleSlipSelected(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    alert("សូមជ្រើសរើសឯកសារជារូបភាព (PNG, JPG, WebP) ប៉ុណ្ណោះ!");
    return;
  }

  if (file.size > 8 * 1024 * 1024) {
    alert("ទំហំរូបភាពធំពេក! សូមជ្រើសរើសរូបភាពក្រោម 8MB");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    uploadedSlipDataUrl = e.target.result;
    const thumb = document.getElementById('slip-thumb');
    const filenameEl = document.getElementById('slip-filename');
    const emptyPreview = document.getElementById('slip-empty-preview');
    const activePreview = document.getElementById('slip-active-preview');
    const verificationBox = document.getElementById('slip-verification-box');
    const acctSelect = document.getElementById('cust-slip-account-select');

    // Inspect filename clues
    const fname = (file.name || '').toLowerCase();
    if (acctSelect) {
      if (fname.includes('acleda') || fname.includes('kimleang') || fname.includes('090343206') || fname.includes('អេស៊ីលីដា')) {
        acctSelect.value = 'ACLEDA';
      } else if (fname.includes('aba') || fname.includes('soyty') || fname.includes('008350616')) {
        acctSelect.value = 'ABA';
      }
    }

    if (thumb) thumb.src = uploadedSlipDataUrl;
    if (filenameEl) {
      const sizeKB = (file.size / 1024).toFixed(1);
      filenameEl.textContent = `${file.name} (${sizeKB} KB)`;
    }
    if (emptyPreview) emptyPreview.classList.add('hidden');
    if (activePreview) activePreview.classList.remove('hidden');
    if (verificationBox) verificationBox.classList.remove('hidden');

    autoMatchSlipAmount();
    showToast("📷 បានភ្ជាប់រូបភាពវិក្កយបត្របង់ប្រាក់ជោគជ័យ! សូមផ្ទៀងផ្ទាត់គណនី និងទឹកប្រាក់។", "success");
  };
  reader.readAsDataURL(file);
}

function removeSlip(event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  uploadedSlipDataUrl = null;
  const input = document.getElementById('cust-slip-input');
  if (input) input.value = '';

  const emptyPreview = document.getElementById('slip-empty-preview');
  const activePreview = document.getElementById('slip-active-preview');
  const verificationBox = document.getElementById('slip-verification-box');
  const amountInput = document.getElementById('cust-slip-amount');

  if (emptyPreview) emptyPreview.classList.remove('hidden');
  if (activePreview) activePreview.classList.add('hidden');
  if (verificationBox) verificationBox.classList.add('hidden');
  if (amountInput) amountInput.value = '';
  const trxInput = document.getElementById('cust-slip-trx-id');
  if (trxInput) trxInput.value = '';
  const correctionNotice = document.getElementById('slip-payment-correction-notice');
  if (correctionNotice) correctionNotice.classList.add('hidden');

  validateSlipAmountLive();
}

// =========================================================================
// PHASE 3 FUNCTIONS: ORDER TRACKING, CUSTOMER RECEIPT & DATE FORMATTERS
// =========================================================================

function formatDateKh(dateStr) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const mins = String(d.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${mins}`;
  } catch (e) {
    return dateStr;
  }
}

function getOrderStatusInfo(status) {
  switch (status) {
    case 'pending':
      return { 
        label: '⏳ បានទទួលបញ្ជាទិញ (រង់ចាំពិនិត្យ)', 
        badgeBg: 'bg-amber-50 text-amber-800 border-amber-300',
        step: 1,
        desc: 'ការបញ្ជាទិញបានបញ្ចូលក្នុងប្រព័ន្ធជោគជ័យ ហាងកំពុងពិនិត្យទិន្នន័យ។'
      };
    case 'processing':
      return { 
        label: '📦 កំពុងរៀបចំទំនិញ / អ៊ុតស្វិត', 
        badgeBg: 'bg-sky-50 text-sky-800 border-sky-300',
        step: 2,
        desc: 'ក្រុមការងារកំពុងរៀបចំ បោះពុម្ព អ៊ុតស្វិត ឬវេចខ្ចប់សម្ភារៈរបស់អ្នក។'
      };
    case 'shipped':
      return { 
        label: '🚚 កំពុងដឹកជញ្ជូន / ផ្ញើតាមឡាន', 
        badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-300',
        step: 3,
        desc: 'ទំនិញត្រូវបានប្រគល់ជូនខាងក្រុមហ៊ុនដឹកជញ្ជូន (VET / J&T / ឡានឈ្នួល)។'
      };
    case 'completed':
      return { 
        label: '✅ បានទទួលជោគជ័យ', 
        badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-300',
        step: 4,
        desc: 'ទំនិញបានទៅដល់ដៃលោកគ្រូ-អ្នកគ្រូរួចរាល់។ សូមអរគុណ!'
      };
    case 'cancelled':
      return { 
        label: '❌ បានបោះបង់ (Cancelled)', 
        badgeBg: 'bg-rose-50 text-rose-800 border-rose-300',
        step: 0,
        desc: 'ការបញ្ជាទិញនេះត្រូវបានបោះបង់ ឬផ្អាកបណ្តោះអាសន្ន។'
      };
    default:
      return { 
        label: '⏳ កំពុងដំណើរការ', 
        badgeBg: 'bg-slate-50 text-slate-800 border-slate-300',
        step: 1,
        desc: 'កំពុងត្រួតពិនិត្យដំណើរការបញ្ជាទិញ។'
      };
  }
}

// --- ORDER TRACKING MODAL LOGIC ---
function openOrderTrackingModal(prefillQuery = '') {
  const modal = document.getElementById('order-tracking-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();

  const input = document.getElementById('tracking-search-input');
  if (input) {
    if (prefillQuery) {
      input.value = prefillQuery;
      searchCustomerOrder();
    } else if (latestCompletedOrder) {
      input.value = latestCompletedOrder.customerPhone || latestCompletedOrder.id;
      searchCustomerOrder();
    }
    input.focus();
  }
}

function closeOrderTrackingModal() {
  const modal = document.getElementById('order-tracking-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function searchCustomerOrder() {
  const input = document.getElementById('tracking-search-input');
  const container = document.getElementById('tracking-result-container');
  if (!input || !container) return;

  const rawQuery = input.value.trim();
  if (!rawQuery) {
    container.innerHTML = `
      <div class="py-8 text-center text-slate-400 text-xs">
        <span class="text-3xl block mb-2">⚠️</span>
        <span class="font-medium">សូមវាយបញ្ចូលលេខទូរស័ព្ទ ឬលេខកូដបញ្ជាទិញ (#ORD...) របស់អ្នក!</span>
      </div>
    `;
    return;
  }

  const cleanDigits = rawQuery.replace(/[\s\-\+]/g, '');
  const cleanId = rawQuery.toLowerCase().replace(/[\s\#]/g, '');

  let orders = [];
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    orders = raw ? JSON.parse(raw) : [];
  } catch (e) {
    orders = [];
  }

  const matched = orders.filter(order => {
    const pDigits = (order.customerPhone || '').replace(/[\s\-\+]/g, '');
    const oId = (order.id || '').toLowerCase().replace(/[\s\#]/g, '');
    const invNo = String(order.invoiceNo || '').toLowerCase();
    const custName = (order.customerName || '').toLowerCase();

    return (cleanDigits && pDigits.includes(cleanDigits)) ||
           oId.includes(cleanId) ||
           invNo.includes(cleanId) ||
           custName.includes(rawQuery.toLowerCase());
  });

  if (matched.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center bg-slate-50 rounded-2xl border border-slate-200">
        <span class="text-4xl block mb-2">🔍</span>
        <h4 class="font-bold text-slate-800 text-sm mb-1">រកមិនឃើញទិន្នន័យនៃការបញ្ជាទិញ</h4>
        <p class="text-xs text-slate-500 mb-3">មិនមានការកុម្ម៉ង់ណាដែលត្រូវនឹង «${rawQuery}» ឡើយ។</p>
        <p class="text-[11px] text-slate-400">សូមពិនិត្យមើលលេខទូរស័ព្ទ ឬឆាតសួរក្រុមការងារតាម Telegram៖ <strong>031 971 1333</strong></p>
      </div>
    `;
    return;
  }

  container.innerHTML = matched.map(order => {
    const st = getOrderStatusInfo(order.status);
    const isCancelled = order.status === 'cancelled';
    const currentStep = st.step;

    const steps = [
      { num: 1, icon: '📝', label: 'ទទួលបញ្ជាទិញ' },
      { num: 2, icon: '📦', label: 'កំពុងរៀបចំ' },
      { num: 3, icon: '🚚', label: 'កំពុងដឹកជញ្ជូន' },
      { num: 4, icon: '✅', label: 'បានទទួល' }
    ];

    const stepperHtml = isCancelled ? `
      <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl text-center text-xs font-bold text-rose-700">
        ⚠️ ការបញ្ជាទិញនេះត្រូវបានបោះបង់ (Cancelled)
      </div>
    ` : `
      <div class="bg-slate-50/80 p-4 rounded-2xl border border-slate-200">
        <div class="flex items-center justify-between mb-4 relative">
          ${steps.map((s, idx) => {
            const isDone = currentStep > s.num;
            const isCurrent = currentStep === s.num;
            let circleClass = 'bg-slate-200 text-slate-400 border border-slate-300';
            if (isDone) circleClass = 'bg-emerald-600 text-white shadow-xs';
            else if (isCurrent) circleClass = 'bg-sky-600 text-white ring-4 ring-sky-100 shadow-md animate-pulse';

            const connectorHtml = idx < steps.length - 1 ? `
              <div class="tracking-connector ${currentStep > s.num ? 'active' : ''}"></div>
            ` : '';

            return `
              <div class="flex items-center ${idx < steps.length - 1 ? 'flex-1' : ''}">
                <div class="flex flex-col items-center">
                  <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm ${circleClass} transition-all">
                    <span>${isDone ? '✓' : s.icon}</span>
                  </div>
                  <span class="text-[10px] sm:text-[11px] font-bold mt-1 text-center ${isCurrent ? 'text-sky-700' : isDone ? 'text-emerald-700' : 'text-slate-400'}">
                    ${s.label}
                  </span>
                </div>
                ${connectorHtml}
              </div>
            `;
          }).join('')}
        </div>
        <p class="text-[11.5px] text-center text-slate-600 font-medium bg-white p-2 rounded-xl border border-slate-100">
          💡 <strong>ដំណាក់កាលបច្ចុប្បន្ន៖</strong> ${st.desc}
        </p>
      </div>
    `;

    const itemsHtml = (order.items || []).map(i => `
      <div class="flex items-center justify-between py-1 text-xs border-b border-slate-100 last:border-0">
        <div class="pr-2">
          <span class="font-bold text-slate-800">${i.name}</span>
          <span class="text-sky-600 block text-[11px]">${i.frameLabel ? i.frameLabel + ' • ' : ''}ទំហំ៖ ${i.size} × ${i.qty}</span>
        </div>
        <span class="font-bold text-slate-700 font-mono">${formatUSD(i.priceUSD)}</span>
      </div>
    `).join('');

    return `
      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-3 p-4">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <div class="flex items-center gap-2">
              <span class="font-mono font-bold text-sky-800 text-xs sm:text-sm">#${order.id}</span>
              <span class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">វិក្កយបត្រ #${order.invoiceNo || '0001'}</span>
            </div>
            <p class="text-[10.5px] text-slate-400 mt-0.5">កាលបរិច្ឆេទ៖ ${formatDateKh(order.createdAt)}</p>
          </div>
          <span class="text-xs font-bold px-3 py-1 rounded-full border shadow-2xs ${st.badgeBg}">
            ${st.label}
          </span>
        </div>

        ${stepperHtml}

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div>
            <span class="text-slate-400 text-[10.5px] block font-medium">អ្នកទទួល៖</span>
            <span class="font-bold text-slate-800">${order.customerName || '-'} (📞 ${order.customerPhone || '-'})</span>
          </div>
          <div>
            <span class="text-slate-400 text-[10.5px] block font-medium">អាសយដ្ឋានដឹកជញ្ជូន៖</span>
            <span class="font-bold text-slate-800">${order.customerAddress || '-'}</span>
          </div>
          ${order.customText ? `
            <div class="sm:col-span-2 text-purple-800 text-[11px] font-semibold bg-purple-50/80 p-1.5 rounded-lg border border-purple-200">
              ✍️ ឈ្មោះលើផ្ទាំង៖ «${order.customText}»
            </div>
          ` : ''}
        </div>

        <div class="space-y-1">
          <span class="text-xs font-bold text-slate-700 block">មុខទំនិញដែលបានកុម្ម៉ង់៖</span>
          <div class="bg-white rounded-xl border border-slate-100 p-2.5 space-y-1">
            ${itemsHtml}
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <div>
            <span class="text-xs text-slate-500 block">តម្លៃសរុប (ទូទាត់តាម ${order.paymentMethod || 'KHQR'})</span>
            <span class="text-sm font-extrabold text-sky-600">${formatUSD(order.totalUSD)} <span class="text-xs text-slate-500 font-normal">(${formatKHR(order.totalKHR)})</span></span>
          </div>

          <div class="flex items-center gap-2">
            <button 
              type="button" 
              onclick="openCustomerReceiptModal('${order.id}')" 
              class="px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition flex items-center gap-1 shadow-2xs cursor-pointer active:scale-95">
              <span>📄</span>
              <span>មើលបង្កាន់ដៃ</span>
            </button>
            <a 
              href="https://t.me/+855964361201" 
              target="_blank" 
              rel="noopener noreferrer" 
              onclick="openShopDirectTelegram(event)" 
              class="px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold transition flex items-center gap-1 shadow-2xs cursor-pointer">
              <span>✈️</span>
              <span>ឆាតសួរ</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- CUSTOMER RECEIPT MODAL LOGIC ---
function openCustomerReceiptModal(orderId = null) {
  let targetOrder = null;
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    const list = raw ? JSON.parse(raw) : [];
    if (orderId) {
      targetOrder = list.find(o => o.id === orderId);
    }
    if (!targetOrder && latestCompletedOrder) {
      targetOrder = latestCompletedOrder;
    }
    if (!targetOrder && list.length > 0) {
      targetOrder = list[0];
    }
  } catch (e) {
    targetOrder = latestCompletedOrder;
  }

  if (!targetOrder) {
    alert("សូមអភ័យទោស! មិនទាន់មានទិន្នន័យការបញ្ជាទិញសម្រាប់ចេញបង្កាន់ដៃនៅឡើយទេ។");
    return;
  }

  const modal = document.getElementById('customer-receipt-modal');
  const printArea = document.getElementById('customer-receipt-printable-area');
  const idEl = document.getElementById('receipt-modal-order-id');

  if (idEl) idEl.textContent = `${targetOrder.id} (#${targetOrder.invoiceNo || '0001'})`;

  if (printArea) {
    const itemsRows = (targetOrder.items || []).map((item, idx) => `
      <tr class="border-b border-slate-100 text-xs">
        <td class="py-2 px-1 text-center font-bold text-slate-500">${idx + 1}</td>
        <td class="py-2 px-2">
          <div class="font-bold text-slate-900">${item.name}</div>
          <div class="text-[10.5px] text-slate-500">${item.frameLabel ? item.frameLabel + ' • ' : ''}ទំហំ៖ ${item.size}</div>
        </td>
        <td class="py-2 px-2 text-center font-bold text-slate-700">${item.qty}</td>
        <td class="py-2 px-2 text-right font-medium text-slate-600 font-mono">${formatUSD(item.priceUSD / item.qty)}</td>
        <td class="py-2 px-2 text-right font-bold text-slate-900 font-mono">${formatUSD(item.priceUSD)}</td>
      </tr>
    `).join('');

    printArea.innerHTML = `
      <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs text-slate-900 space-y-4">
        <!-- Receipt Top Header -->
        <div class="flex items-center justify-between border-b-2 border-slate-900 pb-3">
          <div class="flex items-center gap-2.5">
            <img src="logo.png" alt="EduShop" class="w-10 h-10 object-contain rounded-xl border border-slate-200" />
            <div>
              <h3 class="font-black text-sm text-slate-900 leading-tight">EduShop</h3>
              <p class="text-[10px] text-slate-500 font-medium">សម្ភារៈតុបតែងថ្នាក់ និងបង្រៀនគ្រប់កម្រិត</p>
            </div>
          </div>
          <div class="text-right">
            <span class="inline-block bg-purple-100 text-purple-900 text-[10.5px] font-bold px-2 py-0.5 rounded-full border border-purple-200">
              បង្កាន់ដៃទទួលប្រាក់
            </span>
            <div class="text-[10px] text-slate-500 font-mono mt-0.5 font-bold">#${targetOrder.id}</div>
          </div>
        </div>

        <!-- Store & Order Details -->
        <div class="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div>
            <span class="text-[10px] text-slate-400 block uppercase font-bold">ព័ត៌មានអតិថិជន</span>
            <div class="font-bold text-slate-900 mt-0.5">${targetOrder.customerName || '-'}</div>
            <div class="text-slate-600 text-[11px] font-mono font-medium">📞 ${targetOrder.customerPhone || '-'}</div>
            <div class="text-slate-500 text-[10.5px] leading-tight mt-0.5 truncate">📍 ${targetOrder.customerAddress || '-'}</div>
          </div>
          <div class="text-right">
            <span class="text-[10px] text-slate-400 block uppercase font-bold">កាលបរិច្ឆេទ & វិក្កយបត្រ</span>
            <div class="font-bold text-purple-700 mt-0.5">វិក្កយបត្រ #${targetOrder.invoiceNo || '0001'}</div>
            <div class="text-slate-500 text-[10.5px]">${formatDateKh(targetOrder.createdAt)}</div>
            <div class="text-emerald-700 text-[10.5px] font-bold mt-0.5">💳 ${targetOrder.paymentMethod || 'ABA KHQR'}</div>
          </div>
          ${targetOrder.customText ? `
            <div class="col-span-2 text-purple-800 text-[11px] font-semibold bg-purple-50 p-1.5 rounded-lg border border-purple-200">
              ✍️ ឈ្មោះដាក់លើផ្ទាំង៖ «${targetOrder.customText}»
            </div>
          ` : ''}
        </div>

        <!-- Items Table -->
        <div class="overflow-hidden rounded-xl border border-slate-200">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-100 text-slate-600 text-[10.5px] font-bold uppercase border-b border-slate-200">
                <th class="py-1.5 px-1 text-center w-8">ល.រ</th>
                <th class="py-1.5 px-2">មុខទំនិញ / ទំហំ</th>
                <th class="py-1.5 px-2 text-center w-12">ចំនួន</th>
                <th class="py-1.5 px-2 text-right w-16">តម្លៃ</th>
                <th class="py-1.5 px-2 text-right w-20">សរុប</th>
              </tr>
            </thead>
            <tbody>
              ${itemsRows}
            </tbody>
          </table>
        </div>

        <!-- Price Calculation Summary -->
        <div class="space-y-1 pt-1 text-xs border-t border-slate-100">
          <div class="flex justify-between text-slate-600">
            <span>តម្លៃទំនិញសរុប៖</span>
            <span class="font-mono font-medium">${formatUSD(targetOrder.subtotalUSD || targetOrder.totalUSD)}</span>
          </div>
          ${targetOrder.couponCode && targetOrder.discountUSD ? `
            <div class="flex justify-between text-emerald-600 font-semibold">
              <span>បញ្ចុះតម្លៃ (${targetOrder.couponCode})៖</span>
              <span class="font-mono">-${formatUSD(targetOrder.discountUSD)}</span>
            </div>
          ` : ''}
          ${(targetOrder.shippingLocation || (targetOrder.shippingFeeUSD !== undefined && (targetOrder.shippingFeeUSD > 0 || targetOrder.isFreeShipping))) ? `
            <div class="flex justify-between text-amber-800 font-semibold">
              <span>សេវាដឹកជញ្ជូន (${targetOrder.isHomeDelivery ? '🏠 ដឹកដល់ផ្ទះ - ' : '🏢 ផ្ញើសាខា - '}${targetOrder.shippingLocation || 'ទូទៅ'})${targetOrder.isFreeShipping ? ' (Free)' : ''}៖</span>
              <span class="font-mono">${targetOrder.isFreeShipping ? 'ឥតគិតថ្លៃ ($0.00)' : '+' + formatUSD(targetOrder.shippingFeeUSD || 0)}</span>
            </div>
          ` : ''}
          <div class="flex justify-between text-slate-900 font-black text-sm pt-1.5 border-t border-slate-200">
            <span>ចំនួនទឹកប្រាក់ទូទាត់សរុប៖</span>
            <span class="text-purple-700 font-mono">${formatUSD(targetOrder.totalUSD)}</span>
          </div>
          <div class="flex justify-between text-xs text-slate-500 font-medium">
            <span>គិតជាប្រាក់រៀល៖</span>
            <span class="text-emerald-700 font-bold">${formatKHR(targetOrder.totalKHR)}</span>
          </div>
        </div>

        <!-- Footer / Thank you -->
        <div class="pt-3 border-t border-dashed border-slate-300 text-center space-y-1">
          <div class="text-[11px] font-bold text-slate-800">
            🙏 សូមអរគុណលោកគ្រូ-អ្នកគ្រូ សម្រាប់ការគាំទ្រស្នាដៃអប់រំខ្មែរ!
          </div>
          <p class="text-[10px] text-slate-500">
            ទំនាក់ទំនង៖ 031 97 11 333 (ម្ចាស់ហាង) / 096 436 1201 / 069 490 108 • ទីតាំង៖ ភូមិដំបូក១០០ ឃុំត្នោតជុំ ស្រុកក្រគរ ខេត្តពោធិ៍សាត់
          </p>
        </div>
      </div>
    `;
  }

  if (modal) {
    modal.classList.remove('hidden');
    updateBodyScrollLock();
  }
}

function closeCustomerReceiptModal() {
  const modal = document.getElementById('customer-receipt-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function printCustomerReceipt() {
  const printArea = document.getElementById('customer-receipt-printable-area');
  if (!printArea || !printArea.innerHTML.trim()) {
    showToast('⚠️ មិនមានទិន្នន័យបង្កាន់ដៃសម្រាប់បោះពុម្ពទេ');
    return;
  }

  // Detect In-App browser (Telegram, Facebook, Instagram) where window.print is non-functional
  const ua = navigator.userAgent || '';
  const isInApp = /FBAN|FBAV|Instagram|Telegram|Line|MicroMessenger/i.test(ua);

  if (isInApp) {
    openStandaloneCustomerReceipt();
    return;
  }

  // Add printing CSS class
  document.body.classList.add('printing-receipt');

  let cleanedUp = false;
  const cleanup = () => {
    if (cleanedUp) return;
    cleanedUp = true;
    document.body.classList.remove('printing-receipt');
    window.removeEventListener('afterprint', cleanup);
  };

  // Modern browsers fire afterprint event
  window.addEventListener('afterprint', cleanup);

  // Safety fallback: Mobile Safari & Chrome need 6-8s to complete spooling
  setTimeout(cleanup, 8000);

  setTimeout(() => {
    try {
      if (typeof window.print === 'function') {
        window.print();
      } else {
        cleanup();
        openStandaloneCustomerReceipt();
      }
    } catch (err) {
      console.warn('Direct window.print() failed:', err);
      cleanup();
      openStandaloneCustomerReceipt();
    }
  }, 120);
}

function openStandaloneCustomerReceipt() {
  const printArea = document.getElementById('customer-receipt-printable-area');
  if (!printArea || !printArea.innerHTML.trim()) {
    showToast('⚠️ មិនទាន់មានទិន្នន័យបង្កាន់ដៃទេ');
    return;
  }

  const slipMarkup = printArea.innerHTML;

  const slipHtml = `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>បង្កាន់ដៃទទួលប្រាក់ - EduShop</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      font-family: 'Kantumruy Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f1f5f9;
      color: #0f172a;
      margin: 0;
      padding: 12px;
      -webkit-font-smoothing: antialiased;
    }
    @media print {
      body {
        background: #ffffff !important;
        padding: 0 !important;
      }
      .no-print {
        display: none !important;
      }
      @page {
        margin: 8mm;
        size: auto;
      }
    }
  </style>
</head>
<body class="flex flex-col items-center justify-start min-h-screen py-3 sm:py-6">
  <div class="w-full max-w-lg mx-auto space-y-3">
    
    <!-- Action Toolbar (Hidden during Print) -->
    <div class="no-print bg-white p-3 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between gap-2">
      <button onclick="window.close()" class="px-3.5 py-1.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition cursor-pointer">
        ✕ ត្រឡប់ក្រោយ
      </button>
      <div class="flex items-center gap-2">
        <button onclick="window.print()" class="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer">
          <span>🖨️</span>
          <span>បោះពុម្ព / Save PDF</span>
        </button>
      </div>
    </div>

    <!-- Receipt Container -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      ${slipMarkup}
    </div>

    <!-- Mobile Hint -->
    <div class="no-print p-3 bg-purple-50 text-purple-900 rounded-xl border border-purple-200 text-[11px] text-center space-y-1">
      <div class="font-bold">💡 គន្លឹះសម្រាប់ទូរស័ព្ទដៃ (Mobile Tips)៖</div>
      <div>លោកអ្នកអាចចុច <strong>«បោះពុម្ព / Save PDF»</strong> ឬ <strong>ថតរូបអេក្រង់ (Screenshot)</strong> រក្សាទុកក្នុងទូរស័ព្ទដៃ ឬផ្ញើតាម Telegram បានយ៉ាងងាយស្រួល។</div>
    </div>

  </div>
</body>
</html>`;

  // Try opening in new window/tab
  try {
    const slipWin = window.open('', '_blank');
    if (slipWin) {
      slipWin.document.open();
      slipWin.document.write(slipHtml);
      slipWin.document.close();
      return;
    }
  } catch (e) {
    console.warn('Popup blocked, falling back to overlay', e);
  }

  // Fallback: render full screen overlay in current window if popups are blocked
  openReceiptPrintOverlay(slipMarkup);
}

function closeReceiptPrintOverlay() {
  const overlay = document.getElementById('receipt-slip-fullscreen-overlay');
  if (overlay) overlay.remove();
  updateBodyScrollLock();
}

function openReceiptPrintOverlay(slipMarkup) {
  let overlay = document.getElementById('receipt-slip-fullscreen-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'receipt-slip-fullscreen-overlay';
    overlay.className = 'fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto animate-fade-in';
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = `
    <div class="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col my-auto">
      <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-purple-50">
        <div class="flex items-center gap-2">
          <span class="text-lg">🧾</span>
          <span class="font-bold text-slate-800 text-xs sm:text-sm">បង្កាន់ដៃទទួលប្រាក់</span>
        </div>
        <button onclick="closeReceiptPrintOverlay()" class="w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center text-xs font-bold cursor-pointer">
          ✕
        </button>
      </div>
      <div class="p-3.5 sm:p-5 overflow-y-auto bg-slate-50/50">
        ${slipMarkup}
      </div>
      <div class="p-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-2">
        <button onclick="closeReceiptPrintOverlay()" class="px-3.5 py-1.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition cursor-pointer">
          បិទ
        </button>
        <button onclick="closeReceiptPrintOverlay(); printCustomerReceipt();" class="px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer">
          <span>🖨️</span>
          <span>បោះពុម្ព</span>
        </button>
      </div>
    </div>
  `;
  updateBodyScrollLock();
}

// =========================================================================
// PHASE 4 FUNCTIONS: SCHOOL BULK ORDERS, QUICK ORDER, CATALOGUE & BOT ALERT
// =========================================================================

// --- 1. SCHOOL ORDER TOGGLE & LOGIC ---
function toggleSchoolOrderFields(isChecked) {
  const fields = document.getElementById('school-order-fields');
  if (fields) {
    if (isChecked) {
      fields.classList.remove('hidden');
      // If total items >= 10, suggest bulk coupon
      const totalQty = isOrderModalForCart 
        ? cart.reduce((acc, i) => acc + i.quantity, 0)
        : (activeOrderProduct ? activeOrderProduct.quantity : 1);
      
      if (totalQty >= 10 && (!appliedCoupon || appliedCoupon.code !== 'SCHOOL10')) {
        const couponInput = document.getElementById('cust-coupon-code');
        if (couponInput && !couponInput.value) {
          couponInput.value = 'SCHOOL10';
          applyCouponCode();
        }
      }
    } else {
      fields.classList.add('hidden');
    }
  }

  if (typeof onOrderShippingLocationChange === 'function') {
    onOrderShippingLocationChange();
  }
}

// --- 2. SHOP OWNER TELEGRAM DIRECT CONNECTION & BOT NOTIFICATION ---
let latestOrderTelegramText = '';

function getShopTelegramContact() {
  try {
    const raw = localStorage.getItem(TELEGRAM_BOT_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.ownerContact && parsed.ownerContact.trim()) {
        return parsed.ownerContact.trim();
      }
    }
  } catch (e) {}
  return '0964361201';
}

function getShopTelegramUrl(messageText) {
  const contact = getShopTelegramContact();
  const textParam = messageText ? `?text=${encodeURIComponent(messageText)}` : '';
  if (contact.startsWith('@')) {
    return `https://t.me/${contact.replace(/^@/, '')}${textParam}`;
  }
  const cleanDigits = contact.replace(/[^0-9]/g, '');
  if (cleanDigits.startsWith('855')) {
    return `https://t.me/+${cleanDigits}${textParam}`;
  } else if (cleanDigits.startsWith('0')) {
    return `https://t.me/+855${cleanDigits.replace(/^0/, '')}${textParam}`;
  } else if (/^[a-zA-Z0-9_]+$/.test(contact)) {
    return `https://t.me/${contact}${textParam}`;
  }
  return `https://t.me/+855964361201${textParam}`;
}

// Multi-Platform Robust Telegram Direct Launcher (Mobile App Deep Link + Web Fallback + Clipboard Auto-Sync)
function openShopDirectTelegram(event, customText) {
  if (event) {
    try { event.preventDefault(); } catch (e) {}
    try { event.stopPropagation(); } catch (e) {}
  }
  const text = customText || '';
  if (text && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
  const contact = getShopTelegramContact();
  const cleanPhone = contact.replace(/[^0-9]/g, '');
  const phoneParam = cleanPhone.startsWith('855') ? cleanPhone : (cleanPhone.startsWith('0') ? ('855' + cleanPhone.slice(1)) : ('855' + cleanPhone));
  const deepLink = contact.startsWith('@') 
    ? `tg://resolve?domain=${contact.replace(/^@/, '')}` 
    : `tg://resolve?phone=${phoneParam}`;
  const webUrl = getShopTelegramUrl(text);

  if (typeof showToast === 'function') {
    showToast("✈️ កំពុងភ្ជាប់ទៅកាន់ Telegram (096 436 1201)...", "sky");
  }

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    try {
      window.location.href = text ? `tg://msg_url?url=&text=${encodeURIComponent(text)}` : deepLink;
    } catch (e) {}
  }

  setTimeout(() => {
    window.open(webUrl, '_blank', 'noopener,noreferrer');
  }, 300);
}

// Customer Order Success Modal Telegram Share with Full Details & Auto-Clipboard
function openTelegramOrderShare(event) {
  if (event) {
    try { event.preventDefault(); } catch (e) {}
    try { event.stopPropagation(); } catch (e) {}
  }
  const text = latestOrderTelegramText || '';
  if (text && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      if (typeof showToast === 'function') {
        showToast("📋 បានចម្លងព័ត៌មានកុម្ម៉ង់! កំពុងបើក Telegram...", "emerald");
      }
    }).catch(() => {});
  }
  const webUrl = (typeof getShopTelegramUrl === 'function')
    ? getShopTelegramUrl(text)
    : `https://t.me/+855964361201?text=${encodeURIComponent(text)}`;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    try {
      window.location.href = `tg://msg_url?url=&text=${encodeURIComponent(text)}`;
    } catch (e) {}
  }

  setTimeout(() => {
    window.open(webUrl, '_blank', 'noopener,noreferrer');
  }, 300);
}

if (typeof window !== 'undefined') {
  window.openShopDirectTelegram = openShopDirectTelegram;
  window.openTelegramOrderShare = openTelegramOrderShare;
}

function copyLatestOrderToClipboard() {
  if (!latestOrderTelegramText) {
    showToast("មិនមានព័ត៌មានការកុម្ម៉ង់សម្រាប់ចម្លងទេ", "amber");
    return;
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(latestOrderTelegramText).then(() => {
      showToast("📋 បានចម្លងព័ត៌មានការកុម្ម៉ង់ជោគជ័យ! អ្នកអាច Paste ចូល Telegram បាន", "emerald");
    }).catch(() => {
      showToast("មិនអាចចម្លងដោយស្វ័យប្រវត្តិទេ សូមជ្រើសរើសចម្លងដោយដៃ", "amber");
    });
  } else {
    showToast("📋 បានចម្លងព័ត៌មានការកុម្ម៉ង់", "emerald");
  }
}

function formatTelegramBotHtmlMessage(order) {
  const escapeHtml = (str) => {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  const id = escapeHtml(order.id || 'N/A');
  const name = escapeHtml(order.customerName || 'អតិថិជន');
  const phone = escapeHtml(order.customerPhone || 'មិនមានលេខ');
  const addr = escapeHtml(order.customerAddress || 'មិនបានបញ្ជាក់');

  let html = `🛍️ <b>[ការបញ្ជាទិញថ្មី] ${id}</b>\n`;
  html += `━━━━━━━━━━━━━━━━━━━━\n`;
  html += `👤 <b>អតិថិជន:</b> ${name}\n`;
  html += `📞 <b>លេខទូរស័ព្ទ:</b> <code>${phone}</code>\n`;
  html += `📍 <b>អាសយដ្ឋាន:</b> ${addr}\n`;

  if (order.isSchoolOrder || order.schoolName) {
    html += `🏫 <b>សាលារៀន:</b> ${escapeHtml(order.schoolName || '')}\n`;
    if (order.schoolDirector) {
      html += `👨‍💼 <b>នាយក/អ្នកស្នើ:</b> ${escapeHtml(order.schoolDirector)}\n`;
    }
  }

  if (order.engraveSchool || order.engraveGrade) {
    const engText = `${order.engraveSchool ? 'សាលា៖ ' + escapeHtml(order.engraveSchool) + ' ' : ''}${order.engraveGrade ? 'ថ្នាក់/គ្រូ៖ ' + escapeHtml(order.engraveGrade) : ''}`;
    html += `✍️ <b>ឆ្លាក់ឈ្មោះលើផ្ទាំង:</b> ${engText}\n`;
  } else if (order.customText) {
    html += `🏷️ <b>ឈ្មោះលើផ្ទាំង:</b> ${escapeHtml(order.customText)}\n`;
  }

  html += `💳 <b>ទូទាត់តាម:</b> ${escapeHtml(order.paymentMethod || 'សាច់ប្រាក់/QR')}\n`;
  if (order.note) {
    html += `📝 <b>ចំណាំ:</b> <i>${escapeHtml(order.note)}</i>\n`;
  }

  html += `━━━━━━━━━━━━━━━━━━━━\n`;
  const items = order.items || [];
  const totalQty = items.reduce((s, i) => s + (i.qty || 1), 0);
  html += `📦 <b>មុខទំនិញ (${totalQty} ផ្ទាំង):</b>\n`;

  items.forEach((item, index) => {
    const frame = item.frameLabel ? ` [${escapeHtml(item.frameLabel)}]` : '';
    const size = escapeHtml(item.size || 'Default');
    const price = Number(item.priceUSD || 0).toFixed(2);
    html += `${index + 1}. <b>${escapeHtml(item.name)}</b>${frame}\n`;
    html += `   └ ទំហំ: ${size} | ចំនួន: ${item.qty} | <b>$${price}</b>\n`;
  });

  html += `━━━━━━━━━━━━━━━━━━━━\n`;
  if (order.bulkDiscountPercent > 0) {
    html += `🎁 <b>ចុះថ្លៃទិញដុំ (${order.bulkDiscountPercent}%):</b> -$${Number(order.bulkDiscountUSD || 0).toFixed(2)}\n`;
  }
  if (order.couponCode && order.couponDiscountUSD > 0) {
    html += `🎟️ <b>កូដប្រូម៉ូសិន (${escapeHtml(order.couponCode)}):</b> -$${Number(order.couponDiscountUSD).toFixed(2)}\n`;
  }

  const shipping = order.shipping || {};
  const shipLabel = escapeHtml(shipping.deliveryTypeLabel || (shipping.isHomeDelivery ? 'ដឹកដល់ផ្ទះ' : 'ផ្ញើសាខា'));
  const shipLoc = escapeHtml(shipping.locationName || '');
  if (shipping.isFree) {
    html += `🚚 <b>សេវាដឹក:</b> ${shipLabel} - ${shipLoc} (<b>Free 🎉</b>)\n`;
  } else if (shipping.effectiveUSD !== undefined) {
    html += `🚚 <b>សេវាដឹក:</b> ${shipLabel} - ${shipLoc} (+$${Number(shipping.effectiveUSD).toFixed(2)})\n`;
  }

  const totalUSD = Number(order.totalUSD || 0).toFixed(2);
  const totalKHR = (Number(order.totalUSD || 0) * 4000).toLocaleString();
  html += `💰 <b>ទឹកប្រាក់សរុប:</b> <b>$${totalUSD}</b> (${totalKHR} ៛)\n`;

  if (order.paymentSlip) {
    html += `📷 <i>(មានភ្ជាប់វិក្កយបត្របង់ប្រាក់ Payment Slip)</i>\n`;
  }
  html += `⏰ <i>កាលបរិច្ឆេទ: ${new Date(order.createdAt || Date.now()).toLocaleString('km-KH')}</i>`;

  return html;
}

function sendTelegramBotOrderAlert(order, textMsg) {
  try {
    const raw = localStorage.getItem(TELEGRAM_BOT_STORAGE_KEY);
    if (!raw) return;
    const settings = JSON.parse(raw);
    if (!settings || !settings.botToken || !settings.chatId || settings.enabled === false) return;

    const token = settings.botToken.trim();
    const chatId = settings.chatId.trim();

    // Prepare rich HTML payload
    const htmlMsg = order ? formatTelegramBotHtmlMessage(order) : null;
    const finalMsg = htmlMsg || textMsg;
    const parseMode = htmlMsg ? 'HTML' : undefined;

    // Optional inline action buttons
    const replyMarkup = { inline_keyboard: [] };
    if (order && order.customerPhone) {
      let cleanPhone = String(order.customerPhone).replace(/\D/g, '');
      let intlPhone = cleanPhone;
      if (intlPhone.startsWith('0')) {
        intlPhone = '855' + intlPhone.slice(1);
      } else if (!intlPhone.startsWith('855') && intlPhone.length >= 8) {
        intlPhone = '855' + intlPhone;
      }

      const row = [];
      if (intlPhone) {
        row.push({
          text: "💬 ឆាត Telegram ភ្ញៀវ",
          url: `https://t.me/+${intlPhone}`
        });
      }
      if (row.length > 0) {
        replyMarkup.inline_keyboard.push(row);
      }
    }

    const payload = {
      chat_id: chatId,
      text: finalMsg
    };
    if (parseMode) payload.parse_mode = parseMode;
    if (replyMarkup.inline_keyboard.length > 0) payload.reply_markup = replyMarkup;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(res => {
      if (res.ok) {
        showToast("✓ បានបញ្ជូនដំណឹងទៅ Telegram របស់អ្នកលក់ដោយស្វ័យប្រវត្តិ!", "emerald");
      } else {
        // Fallback to plain text if HTML parsing failed
        if (parseMode) {
          fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: textMsg })
          }).catch(() => {});
        }
      }
    }).catch(err => {
      console.warn("Telegram bot error:", err);
      // Fallback
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: textMsg })
      }).catch(() => {});
    });
  } catch (e) {
    console.warn("Could not dispatch Telegram bot message:", e);
  }
}

// --- 3. QUICK MULTI-ITEM ORDER FORM ---
let quickOrderQuantities = {};

function openQuickOrderModal() {
  const modal = document.getElementById('quick-order-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();

  // Pre-fill existing cart quantities if any
  quickOrderQuantities = {};
  cart.forEach(item => {
    quickOrderQuantities[item.product.id] = (quickOrderQuantities[item.product.id] || 0) + item.quantity;
  });

  const searchInput = document.getElementById('quick-order-search');
  if (searchInput) searchInput.value = '';

  renderQuickOrderTable();
}

function closeQuickOrderModal() {
  const modal = document.getElementById('quick-order-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function renderQuickOrderTable() {
  const listEl = document.getElementById('quick-order-items-list');
  const searchInput = document.getElementById('quick-order-search');
  const matchCountEl = document.getElementById('quick-order-match-count');
  if (!listEl) return;

  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = productsData.filter(p => {
    if (p.inStock === false) return false;
    if (!query) return true;
    return p.name.toLowerCase().includes(query) ||
           (p.categoryLabel && p.categoryLabel.toLowerCase().includes(query)) ||
           (p.size && p.size.toLowerCase().includes(query));
  });

  if (matchCountEl) {
    matchCountEl.textContent = `${filtered.length} មុខទំនិញ`;
  }

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div class="py-12 text-center text-slate-400 text-xs">
        <span class="text-3xl block mb-2">🔍</span>
        <p class="font-bold text-slate-700">រកមិនឃើញទំនិញត្រូវនឹងពាក្យស្វែងរកទេ</p>
      </div>
    `;
    updateQuickOrderTotals();
    return;
  }

  listEl.innerHTML = filtered.map(p => {
    const qty = quickOrderQuantities[p.id] || 0;
    const fInfo = getFrameInfo(p.frameColor);
    const subtotalUSD = p.priceUSD * qty;

    const visualHtml = p.imageUrl ? `
      <img src="${p.imageUrl}" alt="${p.name}" onclick="openImageLightbox(${p.id})" title="ចុចដើម្បីពង្រីកធំ" class="w-12 h-12 rounded-xl object-contain border border-slate-200 bg-white cursor-zoom-in hover:scale-105 transition">
    ` : `
      <div onclick="openImageLightbox(${p.id})" title="ចុចដើម្បីពង្រីកធំ" class="w-12 h-12 rounded-xl bg-gradient-to-br ${p.iconBg || 'from-sky-400 to-blue-500'} flex items-center justify-center text-xl text-white shadow-xs cursor-zoom-in hover:scale-105 transition">
        ${p.iconEmoji || '📦'}
      </div>
    `;

    return `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl border transition-all ${
        qty > 0 ? 'bg-amber-50/60 border-amber-300 shadow-2xs' : 'bg-white border-slate-200 hover:border-slate-300'
      }">
        <!-- Product Thumbnail & Details -->
        <div class="flex items-center gap-3 flex-1 min-w-0">
          ${visualHtml}
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-bold text-slate-900 text-xs sm:text-sm truncate">${p.name}</span>
              ${p.badge ? `<span class="text-[9.5px] px-1.5 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800">${p.badge}</span>` : ''}
              ${p.frameColor && p.frameColor !== 'none' ? `<span class="text-[9.5px] px-1.5 py-0.5 rounded-md font-semibold border ${fInfo.badgeBg}">${fInfo.emoji} ${fInfo.label}</span>` : ''}
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
              <span>ទំហំ៖ <strong class="text-slate-700">${p.size}</strong></span>
              <span>•</span>
              <span class="font-extrabold text-sky-600">${formatUSD(p.priceUSD)}</span>
              <span class="text-[11px] text-slate-400">(${formatKHR(p.priceKHR)})</span>
            </div>
          </div>
        </div>

        <!-- Stepper Controls & Subtotal -->
        <div class="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
          <div class="text-right sm:min-w-[80px]">
            <span class="text-[10px] text-slate-400 block font-medium">សរុប</span>
            <span class="text-xs font-bold ${qty > 0 ? 'text-amber-700 font-mono' : 'text-slate-400'}">
              ${qty > 0 ? formatUSD(subtotalUSD) : '$0.00'}
            </span>
          </div>

          <div class="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
            <button 
              type="button"
              onclick="changeQuickOrderQty(${p.id}, -1)" 
              class="w-7 h-7 rounded-lg bg-white hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center transition shadow-2xs cursor-pointer">
              −
            </button>
            <input 
              type="number" 
              min="0" 
              value="${qty}" 
              onchange="setQuickOrderQty(${p.id}, this.value)"
              class="w-10 text-center bg-transparent text-xs font-bold text-slate-800 focus:outline-none"
            >
            <button 
              type="button"
              onclick="changeQuickOrderQty(${p.id}, 1)" 
              class="w-7 h-7 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm flex items-center justify-center transition shadow-2xs cursor-pointer">
              +
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateQuickOrderTotals();
}

function changeQuickOrderQty(productId, delta) {
  const current = quickOrderQuantities[productId] || 0;
  const next = Math.max(0, current + delta);
  if (next === 0) {
    delete quickOrderQuantities[productId];
  } else {
    quickOrderQuantities[productId] = next;
  }
  renderQuickOrderTable();
}

function setQuickOrderQty(productId, val) {
  const parsed = parseInt(val, 10);
  if (isNaN(parsed) || parsed <= 0) {
    delete quickOrderQuantities[productId];
  } else {
    quickOrderQuantities[productId] = parsed;
  }
  renderQuickOrderTable();
}

function updateQuickOrderTotals() {
  const productIds = Object.keys(quickOrderQuantities);
  let totalItemsCount = productIds.length;
  let totalUnitsCount = 0;
  let totalUSD = 0;
  let totalKHR = 0;

  productIds.forEach(idStr => {
    const id = parseInt(idStr, 10);
    const qty = quickOrderQuantities[id];
    const p = productsData.find(prod => prod.id === id);
    if (p && qty > 0) {
      totalUnitsCount += qty;
      totalUSD += p.priceUSD * qty;
      totalKHR += p.priceKHR * qty;
    }
  });

  const itemsEl = document.getElementById('quick-order-total-items');
  const unitsEl = document.getElementById('quick-order-total-units');
  const priceUSDEl = document.getElementById('quick-order-total-price-usd');
  const priceKHREl = document.getElementById('quick-order-total-price-khr');
  const checkoutBtn = document.getElementById('quick-order-checkout-btn');

  if (itemsEl) itemsEl.textContent = `${totalItemsCount} មុខ`;
  if (unitsEl) unitsEl.textContent = `${totalUnitsCount} ចំនួន`;
  if (priceUSDEl) priceUSDEl.textContent = formatUSD(totalUSD);
  if (priceKHREl) priceKHREl.textContent = `(${formatKHR(totalKHR)})`;

  if (checkoutBtn) {
    checkoutBtn.disabled = totalUnitsCount === 0;
  }
}

function submitQuickOrderToCart() {
  const productIds = Object.keys(quickOrderQuantities);
  if (productIds.length === 0) {
    alert("សូមជ្រើសរើសបរិមាណទំនិញយ៉ាងហោចណាស់ ១ មុខ!");
    return;
  }

  // Merge into cart
  productIds.forEach(idStr => {
    const id = parseInt(idStr, 10);
    const qty = quickOrderQuantities[id];
    const product = productsData.find(p => p.id === id);
    if (product && qty > 0) {
      const existing = cart.find(i => i.product.id === id);
      if (existing) {
        existing.quantity = qty;
      } else {
        cart.push({ product, quantity: qty });
      }
    }
  });

  updateCartBadge();
  closeQuickOrderModal();
  openOrderModalForCart();
}

// --- 4. PRODUCT CATALOGUE MODAL (A4 PRINTABLE) ---
function openProductCatalogueModal() {
  const modal = document.getElementById('product-catalogue-modal');
  const printArea = document.getElementById('catalogue-printable-area');
  if (!modal || !printArea) return;

  const categories = [
    { key: 'decor', title: '🎨 សម្ភារៈតុបតែងថ្នាក់រៀន (Classroom Decoration)', desc: 'ផ្ទាំងបដាស្វាគមន៍, ដើមឈើអំណាន, តារាងព្យញ្ជនៈ និងកាលវិភាគ' },
    { key: 'teaching', title: '📖 សម្ភារៈជំនួយការបង្រៀន (Teaching Aids)', desc: 'បណ្ណពាក្យ, ផ្ទាំងរូបភាពជីវចល, ឧបករណ៍បង្រៀនគណិតវិទ្យា និងអក្សរសាស្ត្រ' },
    { key: 'games', title: '🧩 ល្បែងសិក្សាបណ្ដុះបញ្ញា (Educational Games)', desc: 'ល្បែងផ្គុំរូប, ហ្គេមអក្សរខ្មែរ, និងឧបករណ៍តេស្តកាយសម្បទា' },
    { key: 'combo', title: '🎁 កញ្ចប់ប្រូម៉ូសិនពិសេស (Special Combo Packs)', desc: 'ឈុតសន្សំសំចៃ រៀបចំថ្នាក់រៀនមួយចប់ពេញលេញ' }
  ];

  let catSectionsHtml = categories.map(cat => {
    const items = productsData.filter(p => p.category === cat.key && p.inStock !== false);
    if (items.length === 0) return '';

    const cardsHtml = items.map((p) => {
      const fInfo = getFrameInfo(p.frameColor);
      return `
        <div class="p-3 bg-white rounded-xl border border-slate-200 flex flex-col justify-between space-y-2 shadow-2xs break-inside-avoid">
          <div>
            <div class="flex items-center justify-between gap-1 mb-1">
              <span class="text-[10px] font-mono text-slate-400 font-bold">#${String(p.id).padStart(3, '0')}</span>
              ${p.badge ? `<span class="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-800">${p.badge}</span>` : ''}
            </div>
            <div class="font-bold text-slate-900 text-xs leading-snug line-clamp-2">${p.name}</div>
            <div class="text-[10.5px] text-slate-500 mt-1">
              <span>ទំហំ៖ <strong class="text-slate-700">${p.size}</strong></span>
              ${p.frameColor && p.frameColor !== 'none' ? `<span class="block text-slate-600 font-medium">${fInfo.emoji} ${fInfo.label}</span>` : ''}
            </div>
            ${p.material ? `<div class="text-[9.5px] text-slate-400 mt-0.5 line-clamp-1">សម្ភារៈ៖ ${p.material}</div>` : ''}
          </div>
          <div class="pt-2 border-t border-slate-100 flex items-baseline justify-between">
            <span class="text-xs font-black text-sky-700 font-mono">${formatUSD(p.priceUSD)}</span>
            <span class="text-[10.5px] font-bold text-emerald-700 font-mono">${formatKHR(p.priceKHR)}</span>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="space-y-2 break-inside-avoid">
        <div class="border-b-2 border-sky-600 pb-1 flex items-baseline justify-between">
          <h4 class="font-bold text-sm sm:text-base text-sky-900">${cat.title}</h4>
          <span class="text-[10px] text-slate-500">${cat.desc}</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          ${cardsHtml}
        </div>
      </div>
    `;
  }).join('');

  printArea.innerHTML = `
    <div class="catalogue-page p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6">
      <!-- Catalogue Header -->
      <div class="flex items-center justify-between border-b-2 border-slate-900 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-14 h-14 rounded-2xl bg-white p-1 flex items-center justify-center shadow-md border border-slate-200 overflow-hidden flex-shrink-0">
            <img src="logo.png" alt="EduShop Logo" class="w-full h-full object-contain rounded-xl">
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">EduShop</h2>
            <p class="text-xs font-bold text-sky-700">តារាងតម្លៃ & សៀវភៅកាតាឡុកសម្ភារៈអប់រំ និងតុបតែងថ្នាក់រៀន</p>
            <p class="text-[10.5px] text-slate-500 mt-0.5">ផ្ញើជូន ២៥ រាជធានី-ខេត្ត • ធានាគុណភាពបោះពុម្ព HD អ៊ុតស្វិតការពារទឹក</p>
          </div>
        </div>
        <div class="flex items-center gap-2.5 text-right">
          <div class="bg-sky-50 text-sky-900 border border-sky-200 px-3 py-1.5 rounded-xl text-center hidden sm:block">
            <span class="text-[10px] uppercase font-bold text-sky-600 block">ទំនាក់ទំនងម្ចាស់ហាង (Telegram)</span>
            <span class="font-black text-xs sm:text-sm font-mono text-slate-900">031 97 11 333 / 096 436 1201</span>
          </div>
          <div class="w-14 h-14 bg-white p-1 rounded-xl border border-sky-300 shadow-xs flex-shrink-0" title="ស្កេន QR Telegram (0319711333)">
            <img src="telegram_qr.png" alt="Telegram QR" class="w-full h-full object-contain">
          </div>
        </div>
      </div>

      <!-- Categories Sections -->
      <div class="space-y-6">
        ${catSectionsHtml}
      </div>

      <!-- Bulk Policy & Footer Note -->
      <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2 break-inside-avoid">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="font-bold text-slate-900">🎁 ប្រូម៉ូសិនពិសេសសម្រាប់សាលារៀន (School Bulk Order)៖</span>
          <span class="text-emerald-700 font-bold">បញ្ចុះតម្លៃ ១០% សម្រាប់ការកុម្ម៉ង់ចាប់ពី ១០ ផ្ទាំងឡើង</span>
        </div>
        <p class="text-[10.5px] text-slate-500 leading-relaxed">
          • អាចកំណត់ទំហំផ្ទាល់ខ្លួន (Custom Size) ទទឹងរហូតដល់ 160 cm<br>
          • មានសេវាឆ្លាក់ និងដាក់ឈ្មោះសាលា ឬឈ្មោះគ្រូប្រចាំថ្នាក់ដោយឥតគិតថ្លៃ<br>
          • ទីតាំងហាង៖ ភូមិដំបូក១០០ ឃុំត្នោតជុំ ស្រុកក្រគរ ខេត្តពោធិ៍សាត់ • ម្ចាស់ហាង (Telegram)៖ <strong>031 97 11 333 / 096 436 1201</strong>
        </p>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

function closeProductCatalogueModal() {
  const modal = document.getElementById('product-catalogue-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function printProductCatalogue() {
  const printArea = document.getElementById('catalogue-printable-area');
  if (!printArea || !printArea.innerHTML.trim()) {
    showToast('⚠️ មិនមានទិន្នន័យកាតាឡុកសម្រាប់បោះពុម្ពទេ');
    return;
  }

  document.body.classList.add('printing-catalogue');

  let cleanedUp = false;
  const cleanup = () => {
    if (cleanedUp) return;
    cleanedUp = true;
    document.body.classList.remove('printing-catalogue');
    window.removeEventListener('afterprint', cleanup);
  };

  window.addEventListener('afterprint', cleanup);
  setTimeout(cleanup, 8000);

  setTimeout(() => {
    try {
      window.print();
    } catch (err) {
      console.warn('Catalogue print error:', err);
      cleanup();
    }
  }, 120);
}

// --- 5. SCHOOL OFFICIAL QUOTATION (A4 PRINTABLE) ---
function openSchoolQuotationModal(orderId = null) {
  let targetOrder = null;
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    const list = raw ? JSON.parse(raw) : [];
    if (orderId) {
      targetOrder = list.find(o => o.id === orderId);
    }
    if (!targetOrder && latestCompletedOrder) {
      targetOrder = latestCompletedOrder;
    }
    if (!targetOrder && list.length > 0) {
      targetOrder = list[0];
    }
  } catch (e) {
    targetOrder = latestCompletedOrder;
  }

  // If still no order, construct quotation from current cart
  if (!targetOrder) {
    if (cart.length > 0) {
      const subtotalUSD = cart.reduce((acc, i) => acc + (i.product.priceUSD * i.quantity), 0);
      const subtotalKHR = cart.reduce((acc, i) => acc + (i.product.priceKHR * i.quantity), 0);
      targetOrder = {
        id: 'QT-' + Math.floor(100000 + Math.random() * 900000),
        invoiceNo: '0001',
        customerName: 'គណៈគ្រប់គ្រងសាលារៀន',
        customerPhone: '012 345 678',
        customerAddress: 'សាលារៀន...',
        schoolName: 'សាលារៀន...',
        schoolDirector: 'លោកនាយក...',
        items: cart.map(i => ({
          name: i.product.name,
          size: i.product.size,
          qty: i.quantity,
          priceUSD: i.product.priceUSD * i.quantity,
          image: i.product.imageUrl || i.product.image || ''
        })),
        subtotalUSD,
        subtotalKHR,
        totalUSD: subtotalUSD,
        totalKHR: subtotalKHR,
        createdAt: new Date().toISOString()
      };
    } else {
      alert("សូមជ្រើសរើសទំនិញក្នុងកន្ត្រក ឬជ្រើសរើសការបញ្ជាទិញជាមុនសិនដើម្បីបង្កើតលិខិតសម្រង់តម្លៃ!");
      return;
    }
  }

  const modal = document.getElementById('school-quotation-modal');
  const printArea = document.getElementById('quotation-printable-area');
  if (!modal || !printArea) return;

  const schoolName = targetOrder.schoolName || targetOrder.customerName || 'សាលារៀន';
  const directorName = targetOrder.schoolDirector || 'លោកនាយក / នាយិកា';

  const rowsHtml = (targetOrder.items || []).map((item, idx) => {
    const unitUSD = item.priceUSD / item.qty;
    const unitKHR = unitUSD * 4000;
    const lineTotalKHR = item.priceUSD * 4000;

    return `
      <tr class="border-b border-slate-300 text-xs">
        <td class="py-2 px-1.5 text-center font-bold font-mono">${idx + 1}</td>
        <td class="py-2 px-2.5">
          <div class="font-bold text-slate-900">${item.name}</div>
          <div class="text-[10.5px] text-slate-600">${item.frameLabel ? item.frameLabel + ' • ' : ''}ទំហំ៖ ${item.size}</div>
        </td>
        <td class="py-2 px-2 text-center font-bold font-mono">${item.qty}</td>
        <td class="py-2 px-2 text-right font-medium font-mono">${unitKHR.toLocaleString()} ៛</td>
        <td class="py-2 px-2 text-right font-medium font-mono">${formatUSD(unitUSD)}</td>
        <td class="py-2 px-2 text-right font-bold font-mono text-slate-900">${lineTotalKHR.toLocaleString()} ៛</td>
        <td class="py-2 px-2 text-right font-bold font-mono text-slate-900">${formatUSD(item.priceUSD)}</td>
      </tr>
    `;
  }).join('');

  printArea.innerHTML = `
    <div class="quotation-document p-8 bg-white rounded-2xl border-2 border-slate-900 shadow-xs space-y-6">
      
      <!-- Official Cambodian Header -->
      <div class="text-center space-y-1 border-b-2 border-slate-900 pb-4">
        <h2 class="text-base sm:text-lg font-black text-slate-900 tracking-wide font-serif">ព្រះរាជាណាចក្រកម្ពុជា</h2>
        <h3 class="text-xs sm:text-sm font-bold text-slate-800 tracking-wider">ជាតិ សាសនា ព្រះមហាក្សត្រ</h3>
        <div class="flex justify-center items-center gap-1 my-1">
          <span class="inline-block w-16 h-0.5 bg-slate-900"></span>
          <span class="text-xs">❖</span>
          <span class="inline-block w-16 h-0.5 bg-slate-900"></span>
        </div>
        <h1 class="text-lg sm:text-xl font-black text-slate-900 uppercase pt-2">លិខិតសម្រង់តម្លៃ / QUOTATION</h1>
        <p class="text-[11px] font-mono text-slate-600">លេខ៖ QT-${targetOrder.invoiceNo || '0001'} | កាលបរិច្ឆេទ៖ ${formatDateKh(targetOrder.createdAt)}</p>
      </div>

      <!-- Supplier & Client Information -->
      <div class="grid grid-cols-2 gap-4 text-xs">
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-300 space-y-1">
          <span class="text-[10px] font-bold text-slate-500 uppercase">អ្នកផ្គត់ផ្គង់ (SUPPLIER)</span>
          <div class="font-black text-slate-900 text-sm">EduShop</div>
          <div class="text-[11px] text-slate-700">សម្ភារៈតុបតែងថ្នាក់ និងបង្រៀនគ្រប់កម្រិត</div>
          <div class="text-[11px] text-slate-700">📞 031 97 11 333 (ម្ចាស់ហាង) / 096 436 1201 / 069 490 108</div>
          <div class="text-[10.5px] text-slate-500">📍 ភូមិដំបូក១០០ ឃុំត្នោតជុំ ស្រុកក្រគរ ខេត្តពោធិ៍សាត់</div>
        </div>

        <div class="p-3 bg-amber-50/60 rounded-xl border border-amber-300 space-y-1">
          <span class="text-[10px] font-bold text-amber-800 uppercase">ជូនចំពោះអតិថិជន (CLIENT)</span>
          <div class="font-black text-slate-900 text-sm">${schoolName}</div>
          <div class="text-[11px] text-slate-700">អ្នកស្នើសុំ៖ <strong>${directorName}</strong></div>
          <div class="text-[11px] text-slate-700">📞 ${targetOrder.customerPhone || '-'}</div>
          <div class="text-[10.5px] text-slate-500">📍 ${targetOrder.customerAddress || '-'}</div>
        </div>
      </div>

      <!-- Quotation Items Table -->
      <div class="border border-slate-300 rounded-xl overflow-hidden">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-100 text-slate-700 text-[10.5px] font-bold uppercase border-b border-slate-300">
              <th class="py-2 px-1.5 text-center w-8">ល.រ</th>
              <th class="py-2 px-2.5">បរិយាយមុខទំនិញ / ទំហំ</th>
              <th class="py-2 px-2 text-center w-12">ចំនួន</th>
              <th class="py-2 px-2 text-right w-20">តម្លៃរៀល</th>
              <th class="py-2 px-2 text-right w-16">តម្លៃដុល្លារ</th>
              <th class="py-2 px-2 text-right w-24">សរុបរៀល</th>
              <th class="py-2 px-2 text-right w-20">សរុបដុល្លារ</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
          <tfoot>
            <tr class="bg-slate-50 font-bold text-xs border-t-2 border-slate-300">
              <td colspan="5" class="py-2.5 px-3 text-right">តម្លៃសរុបរួម (Grand Total)៖</td>
              <td class="py-2.5 px-2 text-right font-mono text-emerald-800 text-sm">${(targetOrder.totalUSD * 4000).toLocaleString()} ៛</td>
              <td class="py-2.5 px-2 text-right font-mono text-sky-800 text-sm">${formatUSD(targetOrder.totalUSD)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- Notes & Terms -->
      <div class="text-[11px] text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
        <div class="font-bold text-slate-900">ចំណាំ និងលក្ខខណ្ឌ៖</div>
        <div>• តម្លៃខាងលើរួមបញ្ចូលទាំងការអ៊ុតស្វិតការពារទឹក និងវេចខ្ចប់យ៉ាងមានសុវត្ថិភាព។</div>
        <div>• លិខិតសម្រង់តម្លៃនេះមានសុពលភាពរយៈពេល ៣០ ថ្ងៃ គិតចាប់ពីថ្ងៃចេញលិខិត។</div>
      </div>

      <!-- Signatures Block -->
      <div class="grid grid-cols-2 gap-8 pt-4 text-xs text-center break-inside-avoid">
        <div class="space-y-16">
          <div>
            <span class="font-bold text-slate-800 block">បានឃើញ និងឯកភាព</span>
            <span class="text-[11px] text-slate-500">នាយកសាលា / គណៈគ្រប់គ្រង</span>
          </div>
          <div class="border-t border-dashed border-slate-400 pt-1 w-48 mx-auto text-slate-400 text-[10px]">
            ហត្ថលេខា និងត្រា
          </div>
        </div>

        <div class="space-y-16">
          <div>
            <span class="font-bold text-slate-800 block">អ្នករៀបចំសម្រង់តម្លៃ</span>
            <span class="text-[11px] text-slate-500">EduShop</span>
          </div>
          <div class="border-t border-dashed border-slate-400 pt-1 w-48 mx-auto text-slate-900 font-bold text-[11px]">
            EduShop
          </div>
        </div>
      </div>

    </div>
  `;

  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

function closeSchoolQuotationModal() {
  const modal = document.getElementById('school-quotation-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function printSchoolQuotation() {
  const printArea = document.getElementById('quotation-printable-area');
  if (!printArea || !printArea.innerHTML.trim()) {
    showToast('⚠️ មិនមានទិន្នន័យសម្រង់តម្លៃសម្រាប់បោះពុម្ពទេ');
    return;
  }

  document.body.classList.add('printing-quotation');

  let cleanedUp = false;
  const cleanup = () => {
    if (cleanedUp) return;
    cleanedUp = true;
    document.body.classList.remove('printing-quotation');
    window.removeEventListener('afterprint', cleanup);
  };

  window.addEventListener('afterprint', cleanup);
  setTimeout(cleanup, 8000);

  setTimeout(() => {
    try {
      window.print();
    } catch (err) {
      console.warn('Quotation print error:', err);
      cleanup();
    }
  }, 120);
}

// =========================================================================
// SECTION: SHIPPING FEE & DELIVERY CALCULATION (STOREFRONT INTEGRATION)
// =========================================================================

const SHIPPING_STORAGE_KEY = 'edushop_shipping_settings';

const DEFAULT_SHIPPING_SETTINGS = {
  baseFeeUSD: 1.50,
  baseFeeKHR: 6000,
  deliveryEstimate: '១ ទៅ ២ ថ្ងៃ (24h - 48h)',
  deliveryPartners: 'វីរៈប៊ុនថាំ (VET), ជេ&ធី (J&T), ឡានឈ្នួល',
  homeDeliveryEnabled: true,
  homeDeliveryFeeUSD: 2.00,
  homeDeliveryFeeKHR: 8000,
  homeDeliveryEstimate: '២៤ម៉ោង - ៤៨ម៉ោង (ដឹកដល់មាត់ទ្វារ)',
  homeDeliveryNotes: 'ដឹកជូនដល់មុខផ្ទះ ឬមុខសាលារៀនផ្ទាល់ (Doorstep Delivery)',
  homeDeliveryPartners: 'Grab Express, J&T Doorstep, ភ្នាក់ងារដឹកផ្ទាល់',
  freeShippingEnabled: true,
  freeShippingMinUSD: 20.00,
  freeShippingMinKHR: 80000,
  freeShippingForSchool: true,
  ratesByLocation: [
    { id: 'loc-pp', location: 'រាជធានីភ្នំពេញ', feeUSD: 1.25, feeKHR: 5000, homeFeeUSD: 1.75, homeFeeKHR: 7000, note: 'ដឹកដល់ទីតាំង (Delivery)' },
    { id: 'loc-pursat', location: 'ខេត្តពោធិ៍សាត់ (ក្នុងខេត្ត)', feeUSD: 1.00, feeKHR: 4000, homeFeeUSD: 1.50, homeFeeKHR: 6000, note: 'ទីតាំងហាងផ្ទាល់' },
    { id: 'loc-provinces', location: 'បណ្ដាខេត្តទូទៅ (២៣ ខេត្ត)', feeUSD: 1.50, feeKHR: 6000, homeFeeUSD: 2.50, homeFeeKHR: 10000, note: 'ផ្ញើតាមឡាន / VET / J&T' },
    { id: 'loc-remote', location: 'ខេត្តឆ្ងាយ (រតនគិរី, មណ្ឌលគិរី, ស្ទឹងត្រែង, ព្រះវិហារ)', feeUSD: 2.00, feeKHR: 8000, homeFeeUSD: 3.00, homeFeeKHR: 12000, note: 'តំបន់ដាច់ស្រយាល' }
  ],
  updatedAt: new Date().toISOString()
};

function getShippingSettings() {
  try {
    const raw = localStorage.getItem(SHIPPING_STORAGE_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_SHIPPING_SETTINGS));
    const parsed = JSON.parse(raw);
    const mergedRates = Array.isArray(parsed.ratesByLocation) ? parsed.ratesByLocation.map(r => ({
      ...r,
      homeFeeUSD: (typeof r.homeFeeUSD === 'number') ? r.homeFeeUSD : (typeof r.feeUSD === 'number' ? parseFloat((r.feeUSD + 0.50).toFixed(2)) : 2.00),
      homeFeeKHR: (typeof r.homeFeeKHR === 'number') ? r.homeFeeKHR : Math.round(((typeof r.homeFeeUSD === 'number') ? r.homeFeeUSD : ((r.feeUSD || 1.5) + 0.5)) * 4000)
    })) : DEFAULT_SHIPPING_SETTINGS.ratesByLocation;

    return {
      ...DEFAULT_SHIPPING_SETTINGS,
      ...parsed,
      ratesByLocation: mergedRates
    };
  } catch (e) {
    return JSON.parse(JSON.stringify(DEFAULT_SHIPPING_SETTINGS));
  }
}

function onOrderDeliveryTypeChange() {
  const deliveryType = document.querySelector('input[name="order_delivery_type"]:checked')?.value || 'pickup';
  const isHome = (deliveryType === 'home');
  const homeNoteEl = document.getElementById('order-home-delivery-note');
  if (homeNoteEl) {
    if (isHome) {
      homeNoteEl.classList.remove('hidden');
    } else {
      homeNoteEl.classList.add('hidden');
    }
  }
  populateOrderShippingDropdown();
  updateModalProductSummary();
}

function populateOrderShippingDropdown() {
  const selectEl = document.getElementById('cust-shipping-location');
  if (!selectEl) return;

  const settings = getShippingSettings();
  const deliveryType = document.querySelector('input[name="order_delivery_type"]:checked')?.value || 'pickup';
  const isHome = (deliveryType === 'home');

  // If home delivery is disabled in settings, hide the home radio option
  const homeRadio = document.querySelector('input[name="order_delivery_type"][value="home"]');
  const homeCard = homeRadio?.closest('label');
  if (homeCard) {
    if (settings.homeDeliveryEnabled === false) {
      homeCard.classList.add('hidden');
      const pickupRadio = document.querySelector('input[name="order_delivery_type"][value="pickup"]');
      if (pickupRadio) pickupRadio.checked = true;
    } else {
      homeCard.classList.remove('hidden');
    }
  }

  const rates = Array.isArray(settings.ratesByLocation) && settings.ratesByLocation.length > 0
    ? settings.ratesByLocation
    : [{ 
        id: 'loc-base', 
        location: 'ដឹកជញ្ជូនទូទៅ', 
        feeUSD: settings.baseFeeUSD, 
        feeKHR: settings.baseFeeKHR,
        homeFeeUSD: settings.homeDeliveryFeeUSD,
        homeFeeKHR: settings.homeDeliveryFeeKHR
      }];

  const currentVal = selectEl.value;

  selectEl.innerHTML = rates.map((r, idx) => {
    const feeUsd = typeof r.feeUSD === 'number' ? r.feeUSD : settings.baseFeeUSD;
    const feeKhr = typeof r.feeKHR === 'number' ? r.feeKHR : settings.baseFeeKHR;
    const homeUsd = typeof r.homeFeeUSD === 'number' ? r.homeFeeUSD : (typeof r.feeUSD === 'number' ? parseFloat((r.feeUSD + 0.50).toFixed(2)) : (settings.homeDeliveryFeeUSD ?? 2.00));
    const homeKhr = typeof r.homeFeeKHR === 'number' ? r.homeFeeKHR : Math.round(homeUsd * 4000);

    const displayUsd = isHome ? homeUsd : feeUsd;
    const displayKhr = isHome ? homeKhr : feeKhr;
    const noteTxt = r.note ? ` (${r.note})` : '';

    return `<option value="${r.id || 'loc-' + idx}" 
      data-usd="${feeUsd}" 
      data-khr="${feeKhr}" 
      data-home-usd="${homeUsd}" 
      data-home-khr="${homeKhr}" 
      data-name="${r.location || 'ទូទៅ'}" 
      data-note="${r.note || ''}">
      ${r.location || 'ទីតាំង'} — ${formatUSD(displayUsd)} (${formatKHR(displayKhr)})${noteTxt}
    </option>`;
  }).join('');

  if (currentVal && rates.some(r => (r.id || '') === currentVal)) {
    selectEl.value = currentVal;
  }

  onOrderShippingLocationChange();
}

function getEffectiveOrderShipping() {
  const settings = getShippingSettings();
  const selectEl = document.getElementById('cust-shipping-location');
  const deliveryType = document.querySelector('input[name="order_delivery_type"]:checked')?.value || 'pickup';
  const isHome = (deliveryType === 'home');

  let selectedOption = selectEl?.selectedOptions?.[0];
  let locationName = selectedOption?.getAttribute('data-name') || 'ដឹកជញ្ជូនទូទៅ';

  const fallbackUSD = isHome ? (settings.homeDeliveryFeeUSD ?? 2.00) : (settings.baseFeeUSD ?? 1.50);
  const fallbackKHR = isHome ? (settings.homeDeliveryFeeKHR ?? 8000) : (settings.baseFeeKHR ?? 6000);

  let feeUSD = fallbackUSD;
  let feeKHR = fallbackKHR;

  if (selectedOption) {
    if (isHome) {
      const optHomeUsd = parseFloat(selectedOption.getAttribute('data-home-usd'));
      const optHomeKhr = parseInt(selectedOption.getAttribute('data-home-khr'), 10);
      feeUSD = !isNaN(optHomeUsd) ? optHomeUsd : (parseFloat(selectedOption.getAttribute('data-usd')) || fallbackUSD);
      feeKHR = !isNaN(optHomeKhr) ? optHomeKhr : (parseInt(selectedOption.getAttribute('data-khr'), 10) || fallbackKHR);
    } else {
      feeUSD = parseFloat(selectedOption.getAttribute('data-usd')) || fallbackUSD;
      feeKHR = parseInt(selectedOption.getAttribute('data-khr'), 10) || fallbackKHR;
    }
  }

  // Calculate items subtotal
  let subtotalUSD = 0;
  if (isOrderModalForCart) {
    subtotalUSD = cart.reduce((acc, i) => acc + (i.product.priceUSD * i.quantity), 0);
  } else if (activeOrderProduct) {
    subtotalUSD = activeOrderProduct.product.priceUSD * activeOrderProduct.quantity;
  }

  const isSchoolChecked = document.getElementById('cust-is-school-order')?.checked || false;
  let isFree = false;

  // 1. School order free shipping rule
  if (isSchoolChecked && settings.freeShippingForSchool !== false) {
    isFree = true;
  }

  // 2. Minimum amount free shipping rule
  if (!isFree && settings.freeShippingEnabled !== false && subtotalUSD >= (settings.freeShippingMinUSD ?? 20.00)) {
    isFree = true;
  }

  // 3. Coupon FREESHIP rule
  if (!isFree && appliedCoupon && appliedCoupon.code === 'FREESHIP') {
    isFree = true;
  }

  const estimate = isHome 
    ? (settings.homeDeliveryEstimate || '២៤ម៉ោង - ៤៨ម៉ោង (ដឹកដល់មាត់ទ្វារ)') 
    : (settings.deliveryEstimate || '១ ទៅ ២ ថ្ងៃ (24h - 48h)');
  const partners = isHome 
    ? (settings.homeDeliveryPartners || 'Grab Express, J&T Doorstep, ភ្នាក់ងារដឹកផ្ទាល់') 
    : (settings.deliveryPartners || 'វីរៈប៊ុនថាំ (VET), ជេ&ធី (J&T)');
  const deliveryTypeLabel = isHome ? '🏠 ដឹកជញ្ជូនដល់ផ្ទះ (Home Delivery)' : '🏢 ផ្ញើសាខា/បេនឡាន (Pickup)';

  return {
    deliveryType: deliveryType,
    isHomeDelivery: isHome,
    deliveryTypeLabel: deliveryTypeLabel,
    locationName: locationName,
    feeUSD: feeUSD,
    feeKHR: feeKHR,
    isFree: isFree,
    effectiveUSD: isFree ? 0 : feeUSD,
    effectiveKHR: isFree ? 0 : feeKHR,
    deliveryEstimate: estimate,
    deliveryPartners: partners,
    homeNotes: settings.homeDeliveryNotes || 'ដឹកជូនដល់មុខផ្ទះ ឬមុខសាលារៀនផ្ទាល់ (Doorstep Delivery)'
  };
}

function onOrderShippingLocationChange() {
  const shipping = getEffectiveOrderShipping();
  const estimateBadge = document.getElementById('order-shipping-estimate-badge');
  const feeText = document.getElementById('order-shipping-fee-text');
  const freeTag = document.getElementById('order-free-shipping-tag');

  if (estimateBadge) {
    estimateBadge.textContent = shipping.deliveryEstimate;
  }

  if (freeTag) {
    if (shipping.isFree) {
      freeTag.classList.remove('hidden');
    } else {
      freeTag.classList.add('hidden');
    }
  }

  if (feeText) {
    const typePrefix = shipping.isHomeDelivery ? '🏠 ដឹកដល់ផ្ទះ៖ ' : '🏢 ផ្ញើសាខា៖ ';
    if (shipping.isFree) {
      feeText.innerHTML = `${typePrefix}<strong class="text-emerald-700">ឥតគិតថ្លៃ $0.00 (Free Shipping)</strong>`;
    } else {
      feeText.innerHTML = `${typePrefix}<strong class="text-amber-800">${formatUSD(shipping.feeUSD)} (${formatKHR(shipping.feeKHR)})</strong>`;
    }
  }

  updateKHQRDisplay();
}

// =========================================================================
// ================= STORE WEBSITE QR CODE ENGINE (ស្កេន QR ចូលវេបសាយ) =======
// =========================================================================

const WEBSITE_URL_STORAGE_KEY = 'edushop_website_url';
const STORE_TELEGRAM_URL = 'https://t.me/+855964361201';

let currentWebsiteQrMode = (typeof window !== 'undefined' && window.location && window.location.protocol.startsWith('http') && !window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1')) ? 'website' : 'telegram';

function getStoreWebsiteUrl() {
  const custom = localStorage.getItem(WEBSITE_URL_STORAGE_KEY);
  if (custom && custom.trim() && !custom.includes('edushop-cambodia.com')) {
    return custom.trim();
  }
  if (typeof window !== 'undefined' && window.location) {
    if (window.location.protocol.startsWith('http')) {
      const u = new URL(window.location.href);
      let path = u.pathname;
      if (path.endsWith('admin.html')) {
        path = path.replace('admin.html', 'index.html');
      } else if (path.endsWith('user.html')) {
        path = path.replace('user.html', 'index.html');
      }
      return `${u.origin}${path}`;
    }
  }
  return 'https://soyty123.github.io/webshop/';
}

function getActiveWebsiteQrUrl() {
  if (currentWebsiteQrMode === 'telegram') {
    return STORE_TELEGRAM_URL;
  }
  return getStoreWebsiteUrl();
}

function setWebsiteQrTargetMode(mode) {
  currentWebsiteQrMode = (mode === 'website') ? 'website' : 'telegram';

  const btnTg = document.getElementById('btn-qr-mode-tg');
  const btnWeb = document.getElementById('btn-qr-mode-web');
  if (btnTg && btnWeb) {
    if (currentWebsiteQrMode === 'telegram') {
      btnTg.className = 'flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition bg-white text-sky-700 shadow-xs cursor-pointer flex items-center justify-center gap-1';
      btnWeb.className = 'flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition text-slate-600 hover:text-slate-900 cursor-pointer flex items-center justify-center gap-1';
    } else {
      btnWeb.className = 'flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition bg-white text-sky-700 shadow-xs cursor-pointer flex items-center justify-center gap-1';
      btnTg.className = 'flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition text-slate-600 hover:text-slate-900 cursor-pointer flex items-center justify-center gap-1';
    }
  }

  updateWebsiteQrElements();
}

function getWebsiteQrDataUrl(url, cellSize = 6, margin = 4) {
  if (typeof qrcode !== 'undefined' && url) {
    try {
      const qr = qrcode(0, 'H');
      qr.addData(url);
      qr.make();
      return qr.createDataURL(cellSize, margin);
    } catch (e) {
      try {
        const qrM = qrcode(0, 'M');
        qrM.addData(url);
        qrM.make();
        return qrM.createDataURL(cellSize, margin);
      } catch (e2) {
        console.warn('qrcode error for website URL:', e2);
      }
    }
  }
  return `https://api.qrserver.com/v1/create-qr-code/?size=450x450&margin=12&data=${encodeURIComponent(url || STORE_TELEGRAM_URL)}`;
}

function handleWebsiteQrOpenLink(event) {
  if (currentWebsiteQrMode === 'telegram') {
    openShopDirectTelegram(event);
  } else {
    const activeUrl = getActiveWebsiteQrUrl();
    if (activeUrl) {
      if (event) {
        try { event.preventDefault(); } catch (e) {}
      }
      window.open(activeUrl, '_blank', 'noopener,noreferrer');
    }
  }
}

function updateWebsiteQrElements() {
  const activeUrl = getActiveWebsiteQrUrl();
  const dataUrl = getWebsiteQrDataUrl(activeUrl, 7, 3);

  const modalImg = document.getElementById('website-qr-code-img');
  if (modalImg) modalImg.src = dataUrl;

  const footerImg = document.getElementById('footer-website-qr-img');
  if (footerImg) footerImg.src = dataUrl;

  const openLinkBtn = document.getElementById('website-qr-open-link-btn');
  if (openLinkBtn) {
    openLinkBtn.href = activeUrl;
    const linkText = document.getElementById('website-qr-open-link-text');
    if (linkText) {
      linkText.textContent = (currentWebsiteQrMode === 'telegram')
        ? 'ចុចបើក Telegram ផ្ទាល់ (Open Telegram)'
        : 'ចុចបើកគេហទំព័រផ្ទាល់ (Open Website)';
    }
  }

  const modeBadge = document.getElementById('website-qr-mode-badge');
  if (modeBadge) {
    if (currentWebsiteQrMode === 'telegram') {
      modeBadge.textContent = '💬 ស្កេនចូល Telegram ម្ចាស់ហាង (096 436 1201) 🌟';
    } else {
      modeBadge.textContent = '🌐 ស្កេនចូលគេហទំព័រហាង (Website) 🌟';
    }
  }

  const modeHint = document.getElementById('website-qr-url-mode-hint');
  if (modeHint) {
    if (currentWebsiteQrMode === 'telegram') {
      modeHint.textContent = 'Telegram ហាង (096 436 1201)';
    } else {
      modeHint.textContent = 'តំណភ្ជាប់គេហទំព័រ (Website URL)';
    }
  }

  const urlInput = document.getElementById('website-qr-url-input');
  if (urlInput && document.activeElement !== urlInput) {
    urlInput.value = activeUrl;
  }

  const btnTg = document.getElementById('btn-qr-mode-tg');
  const btnWeb = document.getElementById('btn-qr-mode-web');
  if (btnTg && btnWeb) {
    if (currentWebsiteQrMode === 'telegram') {
      btnTg.className = 'flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition bg-white text-sky-700 shadow-xs cursor-pointer flex items-center justify-center gap-1';
      btnWeb.className = 'flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition text-slate-600 hover:text-slate-900 cursor-pointer flex items-center justify-center gap-1';
    } else {
      btnWeb.className = 'flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition bg-white text-sky-700 shadow-xs cursor-pointer flex items-center justify-center gap-1';
      btnTg.className = 'flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition text-slate-600 hover:text-slate-900 cursor-pointer flex items-center justify-center gap-1';
    }
  }
}

function openWebsiteQrModal(event) {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }
  updateWebsiteQrElements();
  const modal = document.getElementById('website-qr-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  }
  if (typeof updateBodyScrollLock === 'function') {
    updateBodyScrollLock();
  } else {
    document.body.classList.add('modal-open');
  }
}

function closeWebsiteQrModal(event) {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }
  const modal = document.getElementById('website-qr-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }
  if (typeof updateBodyScrollLock === 'function') {
    updateBodyScrollLock();
  } else {
    document.body.classList.remove('modal-open');
  }
}

function openDeviceCameraScanner() {
  const fileInput = document.getElementById('device-camera-qr-input');
  if (fileInput) {
    fileInput.click();
  } else {
    showToast('⚠️ ឧបករណ៍មិនគាំទ្រការបើកកាមេរ៉ាផ្ទាល់');
  }
}

async function handleDeviceCameraScan(event) {
  const file = event?.target?.files?.[0];
  if (!file) return;

  showToast('🔍 កំពុងស្កេនរូបភាព QR Code...');

  try {
    if ('BarcodeDetector' in window) {
      const barcodeDetector = new BarcodeDetector({ formats: ['qr_code'] });
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);
      img.src = objectUrl;
      await img.decode();
      const barcodes = await barcodeDetector.detect(img);
      URL.revokeObjectURL(objectUrl);

      if (barcodes && barcodes.length > 0) {
        const detectedUrl = barcodes[0].rawValue;
        showToast('✓ ស្កេនជោគជ័យ៖ ' + detectedUrl);
        if (detectedUrl.startsWith('http://') || detectedUrl.startsWith('https://')) {
          window.open(detectedUrl, '_blank');
        } else {
          alert('កូដ QR ដែលបានស្កេន៖\n' + detectedUrl);
        }
        return;
      }
    }
    showToast('✓ បានទទួលរូបភាពកាមេរ៉ាជោគជ័យ');
  } catch (err) {
    console.warn('BarcodeDetector error:', err);
    showToast('✓ បានទទួលរូបភាពកាមេរ៉ា');
  } finally {
    if (event.target) event.target.value = '';
  }
}

function handleWebsiteQrUrlInput(val) {
  const trimmed = val.trim();
  if (currentWebsiteQrMode === 'telegram') {
    currentWebsiteQrMode = 'website';
  }
  if (trimmed) {
    localStorage.setItem(WEBSITE_URL_STORAGE_KEY, trimmed);
  } else {
    localStorage.removeItem(WEBSITE_URL_STORAGE_KEY);
  }
  updateWebsiteQrElements();
}

function resetWebsiteUrlToCurrent() {
  localStorage.removeItem(WEBSITE_URL_STORAGE_KEY);
  updateWebsiteQrElements();
  showToast('✓ បានកំណត់តំណភ្ជាប់ទៅកាន់ទំព័របច្ចុប្បន្នវិញ');
}

function copyWebsiteUrlFromModal() {
  const url = getActiveWebsiteQrUrl();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('✓ បានចម្លងតំណភ្ជាប់ជោគជ័យ!');
    }).catch(() => {
      fallbackCopyText(url);
    });
  } else {
    fallbackCopyText(url);
  }
}

function copyWebsiteUrl() {
  copyWebsiteUrlFromModal();
}

function fallbackCopyText(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast('✓ បានចម្លងតំណភ្ជាប់ជោគជ័យ!');
  } catch (e) {
    showToast('⚠️ មិនអាចចម្លងដោយស្វ័យប្រវត្តិ');
  }
  document.body.removeChild(textarea);
}

async function shareWebsiteUrl() {
  const url = getActiveWebsiteQrUrl();
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'EduShop Cambodia - សម្ភារៈអប់រំ និងតុបតែងថ្នាក់រៀន',
        text: 'សូមអញ្ជើញចូលទស្សនាហាងសម្ភារឧបទេសសិក្សា & តុបតែងថ្នាក់រៀន EduShop Cambodia តាមតំណភ្ជាប់នេះ៖',
        url: url
      });
      return;
    } catch (e) {
      if (e.name !== 'AbortError') {
        copyWebsiteUrlFromModal();
      }
      return;
    }
  }
  copyWebsiteUrlFromModal();
}

function drawCanvasRoundRect(ctx, x, y, w, h, radius, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

function downloadWebsiteQrCard() {
  const url = getActiveWebsiteQrUrl();
  const qrDataUrl = getWebsiteQrDataUrl(url, 9, 2);

  const canvas = document.createElement('canvas');
  canvas.width = 750;
  canvas.height = 1050;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Outer decorative borders
  ctx.strokeStyle = '#0284c7';
  ctx.lineWidth = 10;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 3;
  ctx.strokeRect(32, 32, canvas.width - 64, canvas.height - 64);

  // Header Gradient Box
  const grad = ctx.createLinearGradient(45, 45, canvas.width - 90, 200);
  grad.addColorStop(0, '#0284c7');
  grad.addColorStop(0.5, '#2563eb');
  grad.addColorStop(1, '#4f46e5');
  ctx.fillStyle = grad;
  drawCanvasRoundRect(ctx, 45, 45, canvas.width - 90, 185, 24, true, false);

  // Header Text
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.font = 'bold 42px "Kantumruy Pro", "Siemreap", sans-serif';
  ctx.fillText('📚 EduShop Cambodia', canvas.width / 2, 108);

  ctx.fillStyle = '#fef08a';
  ctx.font = 'bold 21px "Kantumruy Pro", "Siemreap", sans-serif';
  ctx.fillText('ហាងលក់សម្ភារឧបទេសសិក្សា & តុបតែងថ្នាក់រៀនបែបខ្មែរ', canvas.width / 2, 150);

  ctx.fillStyle = '#e0f2fe';
  ctx.font = 'bold 16px "Kantumruy Pro", "Siemreap", sans-serif';
  ctx.fillText('✨ OFFICIAL ONLINE STORE • កុម្ម៉ង់ទិញអនឡាញ ✨', canvas.width / 2, 186);

  // Scan Banner
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 27px "Kantumruy Pro", "Siemreap", sans-serif';
  const bannerText = currentWebsiteQrMode === 'telegram' ? '📲 ស្កេន QR Code ចូលឆាត Telegram ហាង' : '📲 ស្កេន QR Code ដើម្បីចូលទស្សនាហាង';
  ctx.fillText(bannerText, canvas.width / 2, 275);

  ctx.fillStyle = '#64748b';
  ctx.font = '17px "Kantumruy Pro", "Siemreap", sans-serif';
  ctx.fillText('បើកកាមេរ៉ាទូរស័ព្ទ (Camera) ឬ App ស្កេន QR ដើម្បីបើកទំព័រភ្លាមៗ', canvas.width / 2, 310);

  // QR Container Box
  ctx.fillStyle = '#f8fafc';
  drawCanvasRoundRect(ctx, 150, 340, 450, 450, 28, true, false);
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 3;
  drawCanvasRoundRect(ctx, 150, 340, 450, 450, 28, false, true);

  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 185, 375, 380, 380);

    // URL below QR
    ctx.fillStyle = '#0284c7';
    ctx.font = 'bold 20px monospace';
    ctx.fillText(url, canvas.width / 2, 825);

    // Divider
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(60, 855);
    ctx.lineTo(canvas.width - 60, 855);
    ctx.stroke();

    // Footer Info
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 22px "Kantumruy Pro", "Siemreap", sans-serif';
    ctx.fillText('👑 ម្ចាស់ហាង (Telegram/ទូរស័ព្ទ)៖ 031 97 11 333  |  096 436 1201', canvas.width / 2, 905);

    ctx.fillStyle = '#475569';
    ctx.font = 'bold 18px "Kantumruy Pro", "Siemreap", sans-serif';
    ctx.fillText('🚚 សេវាដឹកជញ្ជូនរហ័ស ២៥ ខេត្ត-ក្រុង  •  💧 ការពារទឹក ១០០%', canvas.width / 2, 948);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px "Kantumruy Pro", "Siemreap", sans-serif';
    ctx.fillText('📍 ស្រុកក្រគរ ខេត្តពោធិ៍សាត់', canvas.width / 2, 988);

    canvas.toBlob((blob) => {
      if (blob) {
        if (typeof downloadBlob === 'function') {
          downloadBlob(blob, 'edushop_website_qr_stand.png');
        } else {
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'edushop_website_qr_stand.png';
          a.click();
        }
        showToast('✓ បានទាញយកផ្ទាំង QR Code ជោគជ័យ!');
      }
    }, 'image/png');
  };
  img.src = qrDataUrl;
}

function printWebsiteQrStand() {
  const url = getActiveWebsiteQrUrl();
  const qrDataUrl = getWebsiteQrDataUrl(url, 8, 2);
  const printWindow = window.open('', '_blank', 'width=750,height=900');
  if (!printWindow) {
    showToast('⚠️ សូមអនុញ្ញាត pop-up ដើម្បីបោះពុម្ព');
    return;
  }
  const scanHintText = currentWebsiteQrMode === 'telegram' ? '📲 ស្កេន QR Code ចូលឆាត Telegram ហាង' : '📲 ស្កេន QR Code ដើម្បីចូលទស្សនាហាង';
  printWindow.document.write(`<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>EduShop Website QR Stand</title>
  <style>
    body { margin: 0; padding: 20px; font-family: 'Kantumruy Pro', 'Siemreap', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 95vh; background: #f8fafc; }
    .stand-card { width: 480px; background: #fff; border: 4px solid #0284c7; border-radius: 24px; padding: 28px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #0284c7, #4f46e5); color: #fff; border-radius: 16px; padding: 18px; margin-bottom: 16px; }
    .title { font-size: 24px; font-weight: 900; margin: 0; }
    .subtitle { font-size: 13.5px; color: #fef08a; margin-top: 6px; font-weight: bold; }
    .scan-hint { font-size: 16px; font-weight: bold; color: #1e293b; margin: 12px 0 6px; }
    .scan-sub { font-size: 12px; color: #64748b; margin-bottom: 12px; }
    .qr-box { padding: 14px; background: #fff; border: 2px dashed #38bdf8; border-radius: 18px; display: inline-block; margin: 6px 0; }
    .qr-img { width: 250px; height: 250px; display: block; }
    .url-text { font-size: 14px; font-weight: bold; color: #0284c7; font-family: monospace; word-break: break-all; margin: 10px 0; }
    .footer { margin-top: 16px; padding-top: 14px; border-top: 2px solid #e2e8f0; font-size: 12.5px; color: #475569; font-weight: bold; line-height: 1.6; }
    @media print {
      body { background: #fff; padding: 0; }
      .stand-card { box-shadow: none; border-width: 3px; }
    }
  </style>
</head>
<body>
  <div class="stand-card">
    <div class="header">
      <div class="title">📚 EduShop Cambodia</div>
      <div class="subtitle">ហាងលក់សម្ភារឧបទេសសិក្សា & តុបតែងថ្នាក់រៀនបែបខ្មែរ</div>
    </div>
    <div class="scan-hint">${scanHintText}</div>
    <div class="scan-sub">បើកកាមេរ៉ាទូរស័ព្ទ ឬ App ស្កេន QR ដើម្បីបើកទំព័រ</div>
    <div class="qr-box">
      <img class="qr-img" src="${qrDataUrl}" alt="Website QR Code">
    </div>
    <div class="url-text">${url}</div>
    <div class="footer">
      <div>👑 ម្ចាស់ហាង (Telegram/ទូរស័ព្ទ)៖ <strong>031 97 11 333</strong> | <strong>096 436 1201</strong></div>
      <div>🚚 សេវាដឹកជញ្ជូនរហ័ស ២៥ ខេត្ត-ក្រុង • 💧 ការពារទឹក ១០០%</div>
      <div>📍 ស្រុកក្រគរ ខេត្តពោធិ៍សាត់</div>
    </div>
  </div>
  <script>
    window.onload = function() { window.print(); };
  </script>
</body>
</html>`);
  printWindow.document.close();
}

// --- PROGRESSIVE WEB APP (PWA) & OFFLINE ENGINE ---
let deferredPwaPrompt = null;

function initUserPwa() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        console.log('EduShop SW registered:', reg.scope);
      }).catch((err) => {
        console.warn('EduShop SW registration error:', err);
      });
    });
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPwaPrompt = e;
    const btn = document.getElementById('btn-pwa-install-top');
    if (btn) {
      btn.classList.remove('hidden');
    }
  });

  window.addEventListener('appinstalled', () => {
    deferredPwaPrompt = null;
    showToast("🎉 EduShop ត្រូវបានដំឡើងជាកម្មវិធីរួចរាល់!", "emerald");
  });
}

function promptPwaInstall() {
  if (deferredPwaPrompt) {
    deferredPwaPrompt.prompt();
    deferredPwaPrompt.userChoice.then((choiceResult) => {
      if (choiceResult && choiceResult.outcome === 'accepted') {
        showToast("✓ អរគុណសម្រាប់ការដំឡើង EduShop App!", "emerald");
      }
      deferredPwaPrompt = null;
    });
  } else {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIos) {
      openPwaIosModal();
    } else {
      showToast("📲 លោកអ្នកអាច Add to Home Screen ឬ Install App តាម Browser Menu (⋮)", "sky");
    }
  }
}

function openPwaIosModal() {
  const modal = document.getElementById('pwa-ios-modal');
  if (modal) {
    modal.classList.remove('hidden');
    updateBodyScrollLock();
  }
}

function closePwaIosModal() {
  const modal = document.getElementById('pwa-ios-modal');
  if (modal) {
    modal.classList.add('hidden');
    updateBodyScrollLock();
  }
}

// =========================================================================
// BEFORE & AFTER CLASSROOM TRANSFORMATION SLIDER ENGINE
// =========================================================================
function updateBeforeAfterSlider(val) {
  const percent = Math.max(0, Math.min(100, Number(val)));
  const beforeImg = document.getElementById('ba-before-img');
  const handle = document.getElementById('ba-handle');
  
  if (beforeImg) {
    beforeImg.style.clipPath = 'inset(0 ' + (100 - percent) + '% 0 0)';
  }
  if (handle) {
    handle.style.left = percent + '%';
  }
}

function initBeforeAfterSlider() {
  const container = document.getElementById('ba-slider-container');
  const range = document.getElementById('ba-range-slider');
  if (!container || !range) return;

  updateBeforeAfterSlider(range.value || 50);
  if (typeof initWallDecorSimulator === 'function') {
    initWallDecorSimulator();
  }

  function handlePointerPos(clientX) {
    const rect = container.getBoundingClientRect();
    if (rect.width <= 0) return;
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    range.value = Math.round(percent);
    updateBeforeAfterSlider(percent);
  }

  let isDragging = false;
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    handlePointerPos(e.clientX);
  });
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    handlePointerPos(e.clientX);
  });
  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  container.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      handlePointerPos(e.touches[0].clientX);
    }
  }, { passive: true });
  container.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      handlePointerPos(e.touches[0].clientX);
    }
  }, { passive: true });
}

function scrollToPosterCatalog() {
  const target = document.getElementById('search-filter-section') || document.getElementById('products-grid');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const searchIn = document.getElementById('search-input');
    if (searchIn && window.innerWidth >= 768) {
      setTimeout(() => {
        try {
          searchIn.focus({ preventScroll: true });
        } catch (_) {}
      }, 450);
    }
  } else {
    window.scrollTo({ top: 500, behavior: 'smooth' });
  }
}

// =========================================================================
// CLASSROOM WALL DECOR SIMULATOR & POSTER PICKER ENGINE
// Specifically filtered to productsData.filter(p => p.category === 'decor')
// =========================================================================
const WALL_DECOR_STORAGE_KEY = 'edushop_selected_wall_decor';
const WALL_MODE_STORAGE_KEY = 'edushop_wall_preview_mode';

let selectedWallDecorIds = [1, 2, 3, 4];
let isCustomWallMode = true;

const WALL_SLOT_POSITIONS = [
  // Slot 0: Left Wall (Portrait / reading tree or chart)
  {
    style: "top: 13.5%; left: 8.5%; width: 12.5%; height: 36%; transform: perspective(500px) rotateY(12deg);",
    name: "ជញ្ជាំងឆ្វេង"
  },
  // Slot 1: Above Blackboard (Landscape banner / Welcome banner)
  {
    style: "top: 5.5%; left: 24%; width: 24%; height: 16.5%;",
    name: "លើក្តារខៀន"
  },
  // Slot 2: Right of Blackboard (Portrait / Khmer Alphabet)
  {
    style: "top: 12.5%; left: 49%; width: 11%; height: 35%;",
    name: "ស្តាំក្តារខៀន"
  },
  // Slot 3: Upper Right Wall (Landscape or medium / Rules)
  {
    style: "top: 8%; left: 62%; width: 14%; height: 16%;",
    name: "ស្តាំលើ"
  },
  // Slot 4: Right Wall Pillar
  {
    style: "top: 18%; left: 77.5%; width: 8.5%; height: 28%; transform: perspective(500px) rotateY(-8deg);",
    name: "ជញ្ជាំងបង្អួច"
  }
];

function initWallDecorSimulator() {
  try {
    const savedIds = localStorage.getItem(WALL_DECOR_STORAGE_KEY);
    if (savedIds) {
      const parsed = JSON.parse(savedIds);
      if (Array.isArray(parsed) && parsed.length > 0) {
        selectedWallDecorIds = parsed;
      }
    }
    const savedMode = localStorage.getItem(WALL_MODE_STORAGE_KEY);
    if (savedMode === 'showroom') {
      isCustomWallMode = false;
    }
  } catch (_) {}

  renderWallPostersStage();
  updateWallModeUI();
}

function openWallDecorPickerModal() {
  const modal = document.getElementById('wall-decor-picker-modal');
  if (!modal) return;
  renderWallDecorPickerGrid();
  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

function closeWallDecorPickerModal() {
  const modal = document.getElementById('wall-decor-picker-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  updateBodyScrollLock();
}

function renderWallDecorPickerGrid() {
  const grid = document.getElementById('wall-decor-picker-grid');
  const countBadge = document.getElementById('wall-decor-available-count');
  const selectedCountEl = document.getElementById('wall-decor-modal-selected-count');
  const totalPriceEl = document.getElementById('wall-decor-modal-total-price');
  if (!grid) return;

  // STRICT FILTER: category === 'decor' ONLY!
  const decorProducts = productsData.filter(p => p.category === 'decor');
  if (countBadge) {
    countBadge.textContent = `(មាន ${decorProducts.length} ផ្ទាំង)`;
  }

  // Calculate selected total price
  let totalKhr = 0;
  let totalUsd = 0;
  decorProducts.forEach(p => {
    if (selectedWallDecorIds.includes(p.id)) {
      totalKhr += (p.priceKHR || 0);
      totalUsd += (p.priceUSD || 0);
    }
  });

  if (selectedCountEl) {
    selectedCountEl.textContent = selectedWallDecorIds.length;
  }
  if (totalPriceEl) {
    totalPriceEl.textContent = `តម្លៃសរុប៖ ${totalKhr.toLocaleString()} ៛ ($${totalUsd.toFixed(2)})`;
  }

  if (decorProducts.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-8 text-center text-slate-400">
        <p class="text-sm font-semibold">មិនទាន់មានទំនិញក្នុងប្រភេទ «តុបតែងថ្នាក់» នៅឡើយទេ</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = decorProducts.map(p => {
    const isSelected = selectedWallDecorIds.includes(p.id);
    const imgSrc = p.imageUrl || 'poster_welcome.jpg';
    return `
      <div onclick="toggleWallDecorPoster(${p.id})" 
           class="group relative flex items-start gap-3 p-3 rounded-2xl border transition cursor-pointer select-none ${isSelected ? 'bg-amber-400/15 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]' : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 hover:border-slate-600'}">
        <div class="mt-1 flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center border transition ${isSelected ? 'bg-amber-400 border-amber-400 text-slate-950 font-black shadow-sm' : 'border-slate-600 bg-slate-900 text-transparent'}">
          ✓
        </div>
        
        <div class="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-950 flex-shrink-0 border border-slate-700/80 shadow-md">
          <img src="${imgSrc}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          ${isSelected ? `<span class="absolute top-1 right-1 px-1.5 py-0.5 rounded-md bg-amber-400 text-slate-950 font-black text-[9px] shadow">បំពាក់</span>` : ''}
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-1">
            <span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">តុបតែងថ្នាក់</span>
            ${p.badge ? `<span class="px-1.5 py-0.5 rounded-md bg-slate-700 text-slate-200 text-[9px] font-bold">${p.badge}</span>` : ''}
          </div>
          <h4 class="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug group-hover:text-amber-300 transition-colors">
            ${p.name}
          </h4>
          <p class="text-[10px] text-slate-400 mt-1 flex items-center gap-2">
            <span>📏 ${p.size || 'ទំហំស្តង់ដារ'}</span>
          </p>
          <div class="mt-2 flex items-center justify-between">
            <span class="text-xs font-black text-amber-300">
              ${(p.priceKHR || 0).toLocaleString()} ៛ <span class="text-[10px] text-slate-400 font-normal">($${(p.priceUSD || 0).toFixed(2)})</span>
            </span>
            <span class="text-[11px] font-bold ${isSelected ? 'text-amber-400' : 'text-slate-400'}">
              ${isSelected ? '✅ បានជ្រើសរើស' : '+ ចុចជ្រើសរើស'}
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleWallDecorPoster(id) {
  const numId = Number(id);
  const idx = selectedWallDecorIds.indexOf(numId);
  if (idx > -1) {
    selectedWallDecorIds.splice(idx, 1);
  } else {
    selectedWallDecorIds.push(numId);
  }
  try {
    localStorage.setItem(WALL_DECOR_STORAGE_KEY, JSON.stringify(selectedWallDecorIds));
  } catch (_) {}
  renderWallDecorPickerGrid();
  renderWallPostersStage();
}

function selectAllWallDecorPosters() {
  const decorProducts = productsData.filter(p => p.category === 'decor');
  selectedWallDecorIds = decorProducts.map(p => p.id);
  try {
    localStorage.setItem(WALL_DECOR_STORAGE_KEY, JSON.stringify(selectedWallDecorIds));
  } catch (_) {}
  renderWallDecorPickerGrid();
  renderWallPostersStage();
}

function clearAllWallDecorPosters() {
  selectedWallDecorIds = [];
  try {
    localStorage.setItem(WALL_DECOR_STORAGE_KEY, JSON.stringify(selectedWallDecorIds));
  } catch (_) {}
  renderWallDecorPickerGrid();
  renderWallPostersStage();
}

function resetDefaultWallDecorPosters() {
  const decorProducts = productsData.filter(p => p.category === 'decor');
  selectedWallDecorIds = decorProducts.slice(0, 4).map(p => p.id);
  try {
    localStorage.setItem(WALL_DECOR_STORAGE_KEY, JSON.stringify(selectedWallDecorIds));
  } catch (_) {}
  renderWallDecorPickerGrid();
  renderWallPostersStage();
}

function applyWallDecorSelectionToWall() {
  closeWallDecorPickerModal();
  setWallPreviewMode('custom');
  renderWallPostersStage();
  const widget = document.getElementById('classroom-transformation-widget');
  if (widget) {
    widget.scrollIntoView({ behavior: 'smooth', block: 'center' });
    widget.classList.add('ring-2', 'ring-amber-400');
    setTimeout(() => {
      widget.classList.remove('ring-2', 'ring-amber-400');
    }, 1800);
  }
  if (typeof showCustomToast === 'function') {
    showCustomToast(`✨ បានបំពាក់ផ្ទាំងរូបភាពចំនួន ${selectedWallDecorIds.length} ផ្ទាំងលើជញ្ជាំងថ្នាក់រៀន!`, 'success');
  }
}

function addSelectedWallDecorToCart() {
  const decorProducts = productsData.filter(p => p.category === 'decor' && selectedWallDecorIds.includes(p.id));
  if (decorProducts.length === 0) {
    if (typeof showCustomToast === 'function') {
      showCustomToast('⚠️ សូមជ្រើសរើសផ្ទាំងរូបភាពយ៉ាងហោចណាស់ ១ ជាមុនសិន!', 'warning');
    }
    return;
  }

  decorProducts.forEach(product => {
    const cartItem = {
      id: product.id,
      name: product.name,
      category: product.category,
      categoryLabel: product.categoryLabel,
      size: product.size || "40 cm x 60 cm",
      material: product.material,
      priceUSD: product.priceUSD,
      priceKHR: product.priceKHR,
      quantity: 1,
      imageUrl: product.imageUrl || "",
      frameColor: product.frameColor || "none"
    };
    
    const existing = cart.find(it => it.id === product.id && it.size === cartItem.size);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(cartItem);
    }
  });

  saveCart();
  updateCartBadge();
  closeWallDecorPickerModal();
  toggleCart(true);

  if (typeof showCustomToast === 'function') {
    showCustomToast(`🛒 បានបន្ថែមផ្ទាំងតុបតែងថ្នាក់ចំនួន ${decorProducts.length} ចូលកន្ត្រកជោគជ័យ!`, 'success');
  }
}

function renderWallPostersStage() {
  const stage = document.getElementById('ba-wall-posters-stage');
  const countBadge = document.getElementById('ba-selected-count-badge');
  const afterBadge = document.getElementById('ba-after-badge');
  if (!stage) return;

  const decorProducts = productsData.filter(p => p.category === 'decor' && selectedWallDecorIds.includes(p.id));

  if (countBadge) {
    countBadge.textContent = decorProducts.length;
  }
  if (afterBadge) {
    afterBadge.innerHTML = `<span>✨ ក្រោយពេលបំពាក់ (${decorProducts.length} ផ្ទាំង)</span>`;
  }

  if (!isCustomWallMode) {
    stage.classList.add('hidden');
    return;
  }
  stage.classList.remove('hidden');

  if (decorProducts.length === 0) {
    stage.innerHTML = `
      <div class="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-2xs p-4 text-center">
        <div class="p-3 sm:p-4 rounded-2xl bg-slate-900/90 border border-amber-400/60 shadow-2xl max-w-sm">
          <p class="text-xs sm:text-sm font-bold text-amber-300 mb-2">ថ្នាក់រៀនមិនទាន់មានផ្ទាំងរូបភាពតុបតែង</p>
          <button type="button" 
                  onclick="openWallDecorPickerModal()" 
                  class="px-3.5 py-1.5 rounded-xl btn-amber-glow font-black text-xs shadow cursor-pointer active:scale-95">
            🎨 រើសផ្ទាំងរូបភាពឥឡូវនេះ
          </button>
        </div>
      </div>
    `;
    return;
  }

  let html = '';
  WALL_SLOT_POSITIONS.forEach((slot, idx) => {
    if (idx < decorProducts.length) {
      const product = decorProducts[idx];
      const imgSrc = product.imageUrl || 'poster_welcome.jpg';
      const safeName = (product.name || '').replace(/'/g, "\\'");
      html += `
        <div class="wall-poster-slot absolute pointer-events-auto transition-transform duration-300 hover:scale-105 hover:z-30 cursor-pointer group"
             style="${slot.style}"
             onclick="openDirectImageLightbox('${imgSrc}', '${safeName}', 'ផ្ទាំងតុបតែងថ្នាក់រៀន • តម្លៃ៖ ${(product.priceKHR || 0).toLocaleString()} ៛ ($${(product.priceUSD || 0).toFixed(2)})')"
             title="ចុចដើម្បីពង្រីកមើល ${product.name}">
          
          <!-- Wall Nail / Hanging Pin -->
          <div class="absolute -top-1.5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
            <div class="w-2 h-2 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 border border-slate-950 shadow-sm"></div>
          </div>

          <!-- Realistic Framed Poster Card -->
          <div class="w-full h-full rounded-xs sm:rounded-sm overflow-hidden bg-white border-2 border-amber-300/80 shadow-[0_8px_20px_rgba(0,0,0,0.7)] group-hover:border-amber-400 group-hover:shadow-[0_12px_28px_rgba(251,191,36,0.6)] flex flex-col relative transition-all">
            <img src="${imgSrc}" alt="${product.name}" class="w-full h-full object-cover select-none pointer-events-none" />
            
            <!-- Quick Name Tag Overlay on Hover -->
            <div class="absolute bottom-0 inset-x-0 bg-slate-950/90 backdrop-blur-xs px-1 py-0.5 text-[8px] sm:text-[9.5px] text-amber-300 font-bold truncate text-center opacity-0 group-hover:opacity-100 transition-opacity">
              ${product.name}
            </div>
          </div>
        </div>
      `;
    }
  });

  stage.innerHTML = html;
}

function setWallPreviewMode(mode) {
  isCustomWallMode = (mode === 'custom');
  try {
    localStorage.setItem(WALL_MODE_STORAGE_KEY, mode);
  } catch (_) {}

  const btnCustom = document.getElementById('btn-ba-mode-custom');
  const btnShowroom = document.getElementById('btn-ba-mode-showroom');
  const baseImg = document.getElementById('ba-after-base-img');
  const showroomImg = document.getElementById('ba-showroom-base-img');

  if (isCustomWallMode) {
    if (btnCustom) {
      btnCustom.className = "px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow transition flex items-center gap-1.5 cursor-pointer";
    }
    if (btnShowroom) {
      btnShowroom.className = "px-3 py-1.5 rounded-lg text-slate-300 hover:text-white transition flex items-center gap-1.5 cursor-pointer";
    }
    if (baseImg) baseImg.classList.remove('hidden');
    if (showroomImg) showroomImg.classList.add('hidden');
  } else {
    if (btnCustom) {
      btnCustom.className = "px-3 py-1.5 rounded-lg text-slate-300 hover:text-white transition flex items-center gap-1.5 cursor-pointer";
    }
    if (btnShowroom) {
      btnShowroom.className = "px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow transition flex items-center gap-1.5 cursor-pointer";
    }
    if (baseImg) baseImg.classList.add('hidden');
    if (showroomImg) showroomImg.classList.remove('hidden');
  }

  renderWallPostersStage();
}

function updateWallModeUI() {
  setWallPreviewMode(isCustomWallMode ? 'custom' : 'showroom');
}

// ==============================================================================
// 1. DIGITAL STUDENT AWARD CERTIFICATE ENGINE
// ==============================================================================
function openStudentCertificateModal() {
  const modal = document.getElementById('student-certificate-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
  setTimeout(() => {
    renderCertificateCanvas();
  }, 60);
}

function closeStudentCertificateModal() {
  const modal = document.getElementById('student-certificate-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function renderCertificateCanvas() {
  const canvas = document.getElementById('cert-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const studentName = (document.getElementById('cert-student-name')?.value || 'សុខ វិសាល').trim();
  const schoolName = (document.getElementById('cert-school-name')?.value || 'សាលាបឋមសិក្សា វត្តបូព៌').trim();
  const grade = (document.getElementById('cert-grade')?.value || 'ថ្នាក់ទី ៥ក').trim();
  const awardType = document.getElementById('cert-award-type')?.value || 'សិស្សពូកែប្រចាំខែ';
  const certDate = (document.getElementById('cert-date')?.value || 'ថ្ងៃទី ២៨ ខែតុលា ឆ្នាំ២០២៦').trim();
  const teacherName = (document.getElementById('cert-teacher-name')?.value || 'អ្នកគ្រូ គង់ សុភា').trim();

  const w = canvas.width;
  const h = canvas.height;

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#fffdf5');
  grad.addColorStop(0.5, '#ffffff');
  grad.addColorStop(1, '#fff9e6');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Outer Golden Borders
  ctx.save();
  ctx.lineWidth = 12;
  ctx.strokeStyle = '#d97706';
  ctx.strokeRect(10, 10, w - 20, h - 20);

  ctx.lineWidth = 3;
  ctx.strokeStyle = '#f59e0b';
  ctx.strokeRect(22, 22, w - 44, h - 44);

  ctx.lineWidth = 1;
  ctx.strokeStyle = '#fbbf24';
  ctx.strokeRect(28, 28, w - 56, h - 56);

  // Corner Accents
  const corners = [
    [32, 32],
    [w - 32, 32],
    [32, h - 32],
    [w - 32, h - 32]
  ];
  ctx.fillStyle = '#b45309';
  corners.forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  // Top National Motto
  ctx.textAlign = 'center';
  ctx.fillStyle = '#b45309';
  ctx.font = 'bold 13px "Kantumruy Pro", sans-serif';
  ctx.fillText('ព្រះរាជាណាចក្រកម្ពុជា • ជាតិ សាសនា ព្រះមហាក្សត្រ', w / 2, 58);

  ctx.fillStyle = '#0369a1';
  ctx.font = 'bold 16px "Kantumruy Pro", sans-serif';
  ctx.fillText(schoolName, w / 2, 88);

  // Title: ប័ណ្ណសរសើរ
  ctx.fillStyle = '#92400e';
  ctx.font = 'bold 36px "Moul", "Kantumruy Pro", serif';
  ctx.fillText('ប័ណ្ណសរសើរ', w / 2, 140);

  // Decorative Horizontal Ribbon Line
  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w / 2 - 150, 156);
  ctx.lineTo(w / 2 + 150, 156);
  ctx.stroke();

  ctx.fillStyle = '#475569';
  ctx.font = '13px "Kantumruy Pro", sans-serif';
  ctx.fillText('គណៈគ្រប់គ្រងសាលា និងលោកគ្រូ-អ្នកគ្រូ សូមប្រគល់ប័ណ្ណសរសើរនេះជូនចំពោះ៖', w / 2, 192);

  // Student Name (Prominent)
  ctx.fillStyle = '#0f172a';
  ctx.font = '900 30px "Kantumruy Pro", sans-serif';
  ctx.fillText(studentName, w / 2, 240);

  ctx.fillStyle = '#0369a1';
  ctx.font = 'bold 15px "Kantumruy Pro", sans-serif';
  ctx.fillText(`${grade} • ឆ្នាំសិក្សា ២០២៥-២០២៦`, w / 2, 272);

  // Award Reason Ribbon Box
  ctx.fillStyle = '#fef3c7';
  ctx.fillRect(w / 2 - 240, 295, 480, 44);
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(w / 2 - 240, 295, 480, 44);

  ctx.fillStyle = '#b45309';
  ctx.font = 'bold 17px "Kantumruy Pro", sans-serif';
  ctx.fillText(`🏆 ${awardType}`, w / 2, 323);

  ctx.fillStyle = '#64748b';
  ctx.font = 'italic 12px "Kantumruy Pro", sans-serif';
  ctx.fillText('ដើម្បីលើកទឹកចិត្ត និងជាគំរូដ៏ប្រពៃសម្រាប់មិត្តភក្តិក្នុងថ្នាក់រៀន។', w / 2, 368);

  // Seal Badge at bottom left
  const sealX = 125;
  const sealY = 460;
  ctx.fillStyle = '#d97706';
  ctx.beginPath();
  ctx.arc(sealX, sealY, 38, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#fef3c7';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(sealX, sealY, 32, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 10px "Kantumruy Pro", sans-serif';
  ctx.fillText('★ ឆ្នើម ★', sealX, sealY - 7);
  ctx.font = '900 11px "Kantumruy Pro", sans-serif';
  ctx.fillText('EXCELLENCE', sealX, sealY + 8);
  ctx.font = '9px "Kantumruy Pro", sans-serif';
  ctx.fillText('2026', sealX, sealY + 21);

  // Date & Signature at bottom right
  const sigX = w - 165;
  ctx.textAlign = 'center';
  ctx.fillStyle = '#475569';
  ctx.font = '11px "Kantumruy Pro", sans-serif';
  ctx.fillText(certDate, sigX, 432);

  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 12.5px "Kantumruy Pro", sans-serif';
  ctx.fillText('គ្រូបន្ទុកថ្នាក់', sigX, 456);

  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(sigX - 70, 492);
  ctx.lineTo(sigX + 70, 492);
  ctx.stroke();

  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 13px "Kantumruy Pro", sans-serif';
  ctx.fillText(teacherName, sigX, 512);

  ctx.restore();
}

function downloadCertificateImage() {
  const canvas = document.getElementById('cert-canvas');
  if (!canvas) return;
  const studentName = (document.getElementById('cert-student-name')?.value || 'សិស្ស').trim();
  const link = document.createElement('a');
  link.download = `ប័ណ្ណសរសើរ_${studentName.replace(/\s+/g, '_')}.png`;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(`🎉 បានទាញយកប័ណ្ណសរសើរសម្រាប់ «${studentName}» ដោយជោគជ័យ!`);
}

function orderCertificatePrint() {
  const studentName = (document.getElementById('cert-student-name')?.value || 'សិស្ស').trim();

  const certProduct = {
    id: 9901,
    name: `បោះពុម្ពប័ណ្ណសរសើររឹង A4 (300g អ៊ុតផ្លាស្ទិក) - ${studentName}`,
    category: 'teaching',
    categoryLabel: 'ប័ណ្ណសរសើរ',
    size: 'A4 (21 cm × 29.7 cm)',
    priceUSD: 0.75,
    priceKHR: 3000,
    material: 'ក្រដាសរឹង 300g អ៊ុតរលោងការពារទឹក',
    iconEmoji: '🎓',
    iconBg: 'from-amber-400 to-amber-600',
    inStock: true
  };

  const existingIdx = cart.findIndex(i => i.product.id === certProduct.id && i.product.name === certProduct.name);
  if (existingIdx > -1) {
    cart[existingIdx].quantity += 1;
  } else {
    cart.push({ product: certProduct, quantity: 1 });
  }

  closeStudentCertificateModal();
  saveCart();
  renderCartDrawer();
  toggleCart(true);
  showToast(`🎉 បានដាក់ការកម្ម៉ង់បោះពុម្ពប័ណ្ណសរសើរ «${studentName}» ចូលក្នុងកន្ត្រក!`);
}

// ==============================================================================
// 2. SCHOOL CLASSROOM PACKAGE BUDGET CALCULATOR ENGINE
// ==============================================================================
let currentBudgetRooms = 1;
let currentBudgetTier = 'standard'; // 'economy' | 'standard' | 'vip'

function openSchoolBudgetModal() {
  const modal = document.getElementById('school-budget-calculator-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
  calculateSchoolBudget();
}

function closeSchoolBudgetModal() {
  const modal = document.getElementById('school-budget-calculator-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function setBudgetRooms(rooms) {
  currentBudgetRooms = Math.max(1, parseInt(rooms) || 1);
  document.querySelectorAll('.budget-room-btn').forEach(btn => {
    const r = parseInt(btn.getAttribute('data-rooms'));
    if (r === currentBudgetRooms) {
      btn.className = 'budget-room-btn px-3.5 py-1.5 rounded-xl font-bold text-xs bg-sky-600 text-white shadow ring-2 ring-sky-400';
    } else {
      btn.className = 'budget-room-btn px-3.5 py-1.5 rounded-xl font-semibold text-xs bg-slate-800 text-slate-300 hover:bg-slate-700';
    }
  });
  calculateSchoolBudget();
}

function setBudgetTier(tier) {
  currentBudgetTier = tier;
  document.querySelectorAll('.budget-tier-card').forEach(card => {
    const t = card.getAttribute('data-tier');
    if (t === tier) {
      card.className = 'budget-tier-card p-3 rounded-2xl border-2 border-sky-400 bg-sky-950/40 cursor-pointer transition ring-2 ring-sky-400/50';
    } else {
      card.className = 'budget-tier-card p-3 rounded-2xl border border-slate-700 bg-slate-950/50 hover:border-amber-400 cursor-pointer transition';
    }
  });
  calculateSchoolBudget();
}

function calculateSchoolBudget() {
  let postersPerRoom = 4;
  let pricePerRoomUSD = 10;

  if (currentBudgetTier === 'standard') {
    postersPerRoom = 8;
    pricePerRoomUSD = 20;
  } else if (currentBudgetTier === 'vip') {
    postersPerRoom = 14;
    pricePerRoomUSD = 35;
  }

  const totalPosters = currentBudgetRooms * postersPerRoom;
  const baseUSD = currentBudgetRooms * pricePerRoomUSD;
  const baseKHR = baseUSD * EXCHANGE_RATE;

  // Wholesale discount percentage based on room count
  let discPct = 0;
  if (currentBudgetRooms >= 20) discPct = 20;
  else if (currentBudgetRooms >= 10) discPct = 15;
  else if (currentBudgetRooms >= 5) discPct = 10;
  else if (currentBudgetRooms >= 2) discPct = 5;

  const discUSD = parseFloat(((baseUSD * discPct) / 100).toFixed(2));
  const discKHR = Math.round((baseKHR * discPct) / 100);

  const finalUSD = parseFloat((baseUSD - discUSD).toFixed(2));
  const finalKHR = Math.round(baseKHR - discKHR);

  // Update UI Elements
  const roomsText = document.getElementById('calc-rooms-text');
  if (roomsText) roomsText.textContent = `${currentBudgetRooms}`;

  const itemsCountText = document.getElementById('calc-items-count-text');
  if (itemsCountText) itemsCountText.textContent = `${totalPosters} ផ្ទាំង (${currentBudgetRooms} បន្ទប់ × ${postersPerRoom} ផ្ទាំង)`;

  const basePriceEl = document.getElementById('calc-base-price-usd');
  if (basePriceEl) basePriceEl.textContent = `${formatUSD(baseUSD)} (${formatKHR(baseKHR)})`;

  const discPctEl = document.getElementById('calc-discount-percent');
  if (discPctEl) discPctEl.textContent = `${discPct}%`;

  const discValEl = document.getElementById('calc-discount-val');
  if (discValEl) discValEl.textContent = `-${formatUSD(discUSD)} (-${formatKHR(discKHR)})`;

  const finalUsdEl = document.getElementById('calc-final-price-usd');
  if (finalUsdEl) finalUsdEl.textContent = formatUSD(finalUSD);

  const finalKhrEl = document.getElementById('calc-final-price-khr');
  if (finalKhrEl) finalKhrEl.textContent = `(${formatKHR(finalKHR)})`;
}

function sendBudgetProposalTelegram() {
  let postersPerRoom = currentBudgetTier === 'vip' ? 14 : (currentBudgetTier === 'standard' ? 8 : 4);
  let pricePerRoomUSD = currentBudgetTier === 'vip' ? 35 : (currentBudgetTier === 'standard' ? 20 : 10);
  let tierName = currentBudgetTier === 'vip' ? 'ពេញលេញ VIP' : (currentBudgetTier === 'standard' ? 'ស្តង់ដារ' : 'សន្សំសំចៃ');

  const totalPosters = currentBudgetRooms * postersPerRoom;
  const baseUSD = currentBudgetRooms * pricePerRoomUSD;
  let discPct = currentBudgetRooms >= 20 ? 20 : (currentBudgetRooms >= 10 ? 15 : (currentBudgetRooms >= 5 ? 10 : (currentBudgetRooms >= 2 ? 5 : 0)));
  const finalUSD = parseFloat((baseUSD * (1 - discPct / 100)).toFixed(2));
  const finalKHR = Math.round(finalUSD * EXCHANGE_RATE);

  const text = `🏫 សំណើសុំសម្រង់តម្លៃកញ្ចប់តុបតែងសាលារៀន (EduShop KH)\n` +
    `-----------------------------------------\n` +
    `• ចំនួនបន្ទប់រៀន៖ ${currentBudgetRooms} បន្ទប់\n` +
    `• កម្រិតកញ្ចប់៖ ${tierName} (${postersPerRoom} ផ្ទាំង/បន្ទប់)\n` +
    `• សរុបផ្ទាំងរូបភាព៖ ${totalPosters} ផ្ទាំង\n` +
    `• ការបញ្ចុះតម្លៃដុំ៖ ${discPct}%\n` +
    `• សរុបតម្លៃប៉ាន់ស្មាន៖ ${formatUSD(finalUSD)} (${formatKHR(finalKHR)})\n` +
    `• ការដឹកជញ្ជូន៖ ឥតគិតថ្លៃ (Free 25 ខេត្ត-ក្រុង)\n` +
    `• ហ្វ្រីបន្ថែម៖ ប័ណ្ណសរសើរគំរូ និងស្លាកឈ្មោះសាលារៀន\n` +
    `-----------------------------------------\n` +
    `សូមជួយពិនិត្យ និងផ្ដល់ការប្រឹក្សាលម្អិតបន្ថែមជូនខ្ញុំផង! អរគុណ។`;

  window.open(`https://t.me/+855964361201?text=${encodeURIComponent(text)}`, '_blank');
  showToast('📋 បានរៀបចំសារ Telegram រួចរាល់!');
}

function addBudgetPackageToCart() {
  let postersPerRoom = currentBudgetTier === 'vip' ? 14 : (currentBudgetTier === 'standard' ? 8 : 4);
  let pricePerRoomUSD = currentBudgetTier === 'vip' ? 35 : (currentBudgetTier === 'standard' ? 20 : 10);
  let tierName = currentBudgetTier === 'vip' ? 'ពេញលេញ VIP' : (currentBudgetTier === 'standard' ? 'ស្តង់ដារ' : 'សន្សំសំចៃ');

  const packageProduct = {
    id: 9902,
    name: `កញ្ចប់តុបតែងថ្នាក់រៀន ${tierName} (${currentBudgetRooms} បន្ទប់)`,
    category: 'combo',
    categoryLabel: 'ឈុតសាលា',
    size: `ឈុតសរុប ${currentBudgetRooms * postersPerRoom} ផ្ទាំង`,
    priceUSD: pricePerRoomUSD,
    priceKHR: pricePerRoomUSD * EXCHANGE_RATE,
    material: 'ក្រដាសរឹង PP អ៊ុតការពារទឹក ១០០%',
    iconEmoji: '🏫',
    iconBg: 'from-sky-500 to-indigo-600',
    inStock: true
  };

  cart.push({ product: packageProduct, quantity: currentBudgetRooms });
  saveCart();
  closeSchoolBudgetModal();
  renderCartDrawer();
  toggleCart(true);
  showToast(`🎉 បានដាក់កញ្ចប់ ${tierName} (${currentBudgetRooms} បន្ទប់) ចូលកន្ត្រក!`);
}

// ==============================================================================
// 3. REAL CLASSROOM SHOWCASE GALLERY ENGINE
// ==============================================================================
const CLASSROOM_SHOWCASE_DATA = [
  {
    id: 'sr-vatbo',
    province: 'siemreap',
    provinceLabel: 'ខេត្តសៀមរាប',
    schoolName: 'សាលាបឋមសិក្សា វត្តបូព៌',
    grade: 'ថ្នាក់ទី២ និងទី៣',
    teacher: 'អ្នកគ្រូ ចិន្តា',
    image: 'classroom_after_1791457509555.jpg',
    quote: '«បន្ទាប់ពីបិទផ្ទាំង EduShop ថ្នាក់រៀនប្រែជាភ្លឺស្វាង កូនសិស្សចូលចិត្តមើល និងចង្អុលអានជារៀងរាល់ព្រឹក!»',
    rating: 5,
    packageItems: 'ឈុតព្យញ្ជនៈខ្មែរ + ដើមឈើអំណាន + ច្បាប់វិន័យថ្នាក់'
  },
  {
    id: 'pp-tuolkouk',
    province: 'phnompenh',
    provinceLabel: 'រាជធានីភ្នំពេញ',
    schoolName: 'សាលាបឋមសិក្សា ទួលគោក',
    grade: 'ថ្នាក់មត្តេយ្យកម្រិតខ្ពស់',
    teacher: 'អ្នកគ្រូ សុភាព',
    image: 'poster_welcome_1791459565133.jpg',
    quote: '«ពណ៌ដិតស្អាត ក្រដាសក្រាស់អ៊ុតស្វិតការពារទឹកល្អ ក្មេងៗប៉ះមិនរហែក ងាយស្រួលជូតសម្អាតខ្លាំង!»',
    rating: 5,
    packageItems: 'បដាស្វាគមន៍ + រូបភាពសត្វ + រូបរាងធរណីមាត្រ'
  },
  {
    id: 'bb-preahmony',
    province: 'battambang',
    provinceLabel: 'ខេត្តបាត់ដំបង',
    schoolName: 'សាលាបឋមសិក្សា ព្រះមុនីវង្ស',
    grade: 'ថ្នាក់ទី៤',
    teacher: 'លោកគ្រូ ចាន់ថន',
    image: 'poster_reading_tree_1791459585418.jpg',
    quote: '«កូនសិស្សចូលចិត្តដើមឈើអំណានខ្លាំងណាស់ ជួយឱ្យក្មេងៗមានទម្លាប់ស្រឡាញ់សៀវភៅ និងប្រកួតប្រជែងគ្នារៀន។»',
    rating: 5,
    packageItems: 'ឈុតដើមឈើអំណាន + ពាក្យគន្លឹះភាសាខ្មែរ'
  },
  {
    id: 'kc-hunsencity',
    province: 'kampongcham',
    provinceLabel: 'ខេត្តកំពង់ចាម',
    schoolName: 'សាលាបឋមសិក្សា ហ៊ុន សែន កំពង់ចាម',
    grade: 'ថ្នាក់ទី១ ក',
    teacher: 'អ្នកគ្រូ ស្រីមុំ',
    image: 'poster_khmer_alphabet_1791459604731.jpg',
    quote: '«ដឹកជញ្ជូនរហ័ស វេចខ្ចប់មានបំពង់ការពារយ៉ាងត្រឹមត្រូវ មកដល់ខេត្តនៅស្អាតល្អឥតខ្ចោះ!»',
    rating: 5,
    packageItems: 'តារាងព្យញ្ជនៈ ៣៣ តួ + ស្រៈនិស្ស័យ + មេលេខ'
  }
];

let activeShowcaseProvince = 'all';

function openClassroomShowcaseModal() {
  const modal = document.getElementById('classroom-showcase-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
  renderShowcaseGrid(activeShowcaseProvince);
}

function closeClassroomShowcaseModal() {
  const modal = document.getElementById('classroom-showcase-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function filterShowcaseProvince(province) {
  activeShowcaseProvince = province;
  document.querySelectorAll('.showcase-filter-btn').forEach(btn => {
    const prov = btn.getAttribute('data-prov');
    if (prov === province) {
      btn.className = 'showcase-filter-btn px-3 py-1.5 rounded-xl font-bold bg-emerald-600 text-white shadow';
    } else {
      btn.className = 'showcase-filter-btn px-3 py-1.5 rounded-xl font-medium bg-slate-800 text-slate-300 hover:bg-slate-700';
    }
  });
  renderShowcaseGrid(province);
}

function renderShowcaseGrid(province = 'all') {
  const grid = document.getElementById('showcase-grid');
  if (!grid) return;

  const items = province === 'all' 
    ? CLASSROOM_SHOWCASE_DATA 
    : CLASSROOM_SHOWCASE_DATA.filter(item => item.province === province);

  grid.innerHTML = items.map(item => `
    <div class="bg-slate-950/70 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-400/60 transition group flex flex-col justify-between">
      <div>
        <div class="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
          <img src="${item.image}" alt="${item.schoolName}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="absolute top-2 left-2 bg-slate-900/85 backdrop-blur-md text-emerald-400 font-bold text-[10.5px] px-2.5 py-1 rounded-lg border border-emerald-500/30">
            📍 ${item.provinceLabel}
          </div>
          <div class="absolute bottom-2 right-2 bg-slate-900/90 backdrop-blur-md text-amber-300 font-bold text-[10px] px-2 py-0.5 rounded-md">
            ${item.grade}
          </div>
        </div>
        <div class="p-3.5 space-y-2">
          <div class="flex items-center justify-between">
            <h4 class="font-bold text-white text-xs sm:text-sm truncate">${item.schoolName}</h4>
            <span class="text-amber-400 text-xs">⭐⭐⭐⭐⭐</span>
          </div>
          <p class="text-[11px] text-slate-300 italic line-clamp-2">${item.quote}</p>
          <div class="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
            <span>👩‍🏫 ${item.teacher}</span>
            <span class="text-emerald-400 font-semibold truncate max-w-[55%]">📦 ${item.packageItems}</span>
          </div>
        </div>
      </div>
      <div class="p-3.5 pt-0">
        <button type="button" onclick="addShowcasePackageToCart('${item.id}')" class="w-full py-2 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer border border-emerald-500/30">
          <span>🛒</span> <span>ទិញឈុតដូចគ្នានេះ ($12.50)</span>
        </button>
      </div>
    </div>
  `).join('');
}

function addShowcasePackageToCart(showcaseId) {
  const item = CLASSROOM_SHOWCASE_DATA.find(s => s.id === showcaseId);
  if (!item) return;

  const pkgProduct = {
    id: 9903,
    name: `ឈុតតុបតែងពេញនិយម - ${item.schoolName}`,
    category: 'combo',
    categoryLabel: 'ឈុតពេញនិយម',
    size: 'ឈុត ៤ ផ្ទាំងស្ដង់ដារ',
    priceUSD: 12.50,
    priceKHR: 50000,
    material: 'ក្រដាសរឹង PP អ៊ុតការពារទឹក ១០០%',
    iconEmoji: '📸',
    iconBg: 'from-emerald-500 to-teal-600',
    inStock: true
  };

  cart.push({ product: pkgProduct, quantity: 1 });
  saveCart();
  closeClassroomShowcaseModal();
  renderCartDrawer();
  toggleCart(true);
  showToast(`🎉 បានដាក់ «ឈុតតុបតែង - ${item.schoolName}» ចូលកន្ត្រក!`);
}

// ==============================================================================
// 4. FREE TEACHING RESOURCES DOWNLOAD ENGINE
// ==============================================================================
function openFreeResourcesModal() {
  const modal = document.getElementById('free-resources-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

function closeFreeResourcesModal() {
  const modal = document.getElementById('free-resources-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function downloadFreeResource(resourceId) {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 1700;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  // Background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);

  // Border & Header
  ctx.strokeStyle = '#4f46e5';
  ctx.lineWidth = 12;
  ctx.strokeRect(20, 20, w - 40, h - 40);

  ctx.fillStyle = '#1e1b4b';
  ctx.fillRect(20, 20, w - 40, 160);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 30px "Kantumruy Pro", sans-serif';
  ctx.fillText('EDUSHOP KH • ឯកសារជំនួយការបង្រៀនឥតគិតថ្លៃ', w / 2, 75);

  let filename = 'EduShop_FreeResource.png';

  if (resourceId === 'khmer_alphabet_worksheet') {
    filename = 'សន្លឹកកិច្ចការ_ព្យញ្ជនៈខ្មែរ_A4.png';
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 24px "Kantumruy Pro", sans-serif';
    ctx.fillText('សន្លឹកកិច្ចការ៖ ហាត់អាន និងសរសេរព្យញ្ជនៈខ្មែរ ៣៣ តួ', w / 2, 130);

    const consonants = [
      'ក','ខ','គ','ឃ','ង',
      'ច','ឆ','ជ','ឈ','ញ',
      'ដ','ឋ','ឌ','ឍ','ណ',
      'ត','ថ','ទ','ធ','ន',
      'ប','ផ','ព','ភ','ម',
      'យ','រ','ល','វ','ស',
      'ហ','ឡ','អ'
    ];
    const cols = 5;
    const startX = 100;
    const startY = 230;
    const boxW = 190;
    const boxH = 180;
    const pad = 12;

    consonants.forEach((c, idx) => {
      const col = idx % cols;
      const row = Math.floor(idx / cols);
      const x = startX + col * (boxW + pad);
      const y = startY + row * (boxH + pad);

      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(x, y, boxW, boxH);
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, boxW, boxH);

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 64px "Moul", "Kantumruy Pro", sans-serif';
      ctx.fillText(c, x + boxW / 2, y + 85);

      ctx.strokeStyle = '#94a3b8';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(x + 15, y + 125);
      ctx.lineTo(x + boxW - 15, y + 125);
      ctx.moveTo(x + 15, y + 150);
      ctx.lineTo(x + boxW - 15, y + 150);
      ctx.stroke();
      ctx.setLineDash([]);
    });
  } else if (resourceId === 'schedule_template') {
    filename = 'កាលវិភាគប្រចាំសប្ដាហ៍_A4.png';
    ctx.fillStyle = '#a5f3fc';
    ctx.font = 'bold 24px "Kantumruy Pro", sans-serif';
    ctx.fillText('តារាងកាលវិភាគប្រចាំសប្ដាហ៍ • WEEKLY SCHEDULE', w / 2, 130);

    const days = ['ម៉ោង / ថ្ងៃ', 'ចន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហស្បតិ៍', 'សុក្រ', 'សៅរ៍'];
    const cellW = (w - 120) / days.length;
    const cellH = 140;

    days.forEach((day, dIdx) => {
      const x = 60 + dIdx * cellW;
      ctx.fillStyle = dIdx === 0 ? '#e0f2fe' : '#f0f9ff';
      ctx.fillRect(x, 210, cellW, 55);
      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, 210, cellW, 55);

      ctx.fillStyle = '#0369a1';
      ctx.font = 'bold 19px "Kantumruy Pro", sans-serif';
      ctx.fillText(day, x + cellW / 2, 245);
    });

    for (let r = 1; r <= 8; r++) {
      const y = 265 + (r - 1) * cellH;
      for (let c = 0; c < days.length; c++) {
        const x = 60 + c * cellW;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, cellW, cellH);
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x, y, cellW, cellH);

        if (c === 0) {
          ctx.fillStyle = '#475569';
          ctx.font = 'bold 16px "Kantumruy Pro", sans-serif';
          ctx.fillText(`ម៉ោងទី ${r}`, x + cellW / 2, y + 50);
          ctx.font = '13px sans-serif';
          ctx.fillText(`0${6 + r}:00 - 0${7 + r}:00`, x + cellW / 2, y + 85);
        }
      }
    }
  } else if (resourceId === 'multiplication_table') {
    filename = 'តារាងមេលេខនព្វន្ត_A4.png';
    ctx.fillStyle = '#bbf7d0';
    ctx.font = 'bold 24px "Kantumruy Pro", sans-serif';
    ctx.fillText('តារាងមេលេខនព្វន្ត ១ ដល់ ១០ (MULTIPLICATION TABLE)', w / 2, 130);

    const cols = 5;
    const boxW = 200;
    const boxH = 580;
    const startX = 75;

    for (let m = 1; m <= 10; m++) {
      const col = (m - 1) % cols;
      const row = Math.floor((m - 1) / cols);
      const x = startX + col * (boxW + 20);
      const y = 220 + row * (boxH + 30);

      ctx.fillStyle = '#f0fdf4';
      ctx.fillRect(x, y, boxW, boxH);
      ctx.strokeStyle = '#16a34a';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, boxW, boxH);

      ctx.fillStyle = '#15803d';
      ctx.font = 'bold 22px "Kantumruy Pro", sans-serif';
      ctx.fillText(`មេលេខ ${m}`, x + boxW / 2, y + 40);

      for (let i = 1; i <= 10; i++) {
        ctx.fillStyle = '#1e293b';
        ctx.font = '18px "Kantumruy Pro", sans-serif';
        ctx.fillText(`${m} × ${i} = ${m * i}`, x + boxW / 2, y + 80 + (i - 1) * 48);
      }
    }
  } else {
    filename = 'Flashcards_ព្យញ្ជនៈ_A4.png';
    ctx.fillStyle = '#fbcfe8';
    ctx.font = 'bold 24px "Kantumruy Pro", sans-serif';
    ctx.fillText('បណ្ណពាក្យ FLASHCARDS សម្រាប់កាត់លេងល្បែងសិក្សា', w / 2, 130);

    const flashcards = [
      { text: 'ក', sub: 'ក្អែក' }, { text: 'ខ', sub: 'ខោ' }, { text: 'គ', sub: 'គោ' },
      { text: 'ឃ', sub: 'ឃ្មុំ' }, { text: 'ង', sub: 'ងាវ' }, { text: 'ច', sub: 'ចាប' }
    ];

    flashcards.forEach((fc, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const x = 90 + col * 520;
      const y = 230 + row * 430;

      ctx.fillStyle = '#fdf2f8';
      ctx.fillRect(x, y, 480, 400);
      ctx.strokeStyle = '#db2777';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);
      ctx.strokeRect(x, y, 480, 400);
      ctx.setLineDash([]);

      ctx.fillStyle = '#be185d';
      ctx.font = 'bold 110px "Moul", "Kantumruy Pro", sans-serif';
      ctx.fillText(fc.text, x + 240, y + 200);

      ctx.fillStyle = '#831843';
      ctx.font = 'bold 36px "Kantumruy Pro", sans-serif';
      ctx.fillText(fc.sub, x + 240, y + 310);
    });
  }

  // Footer branding
  ctx.fillStyle = '#64748b';
  ctx.font = '14px "Kantumruy Pro", sans-serif';
  ctx.fillText('EduShop KH • ផ្ដល់ជូនដោយឥតគិតថ្លៃសម្រាប់លោកគ្រូ-អ្នកគ្រូ • 👑 ម្ចាស់ហាង: 031 97 11 333 • Telegram: 096 436 1201', w / 2, h - 35);

  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(`📥 បានទាញយកឯកសារ «${filename}» ដោយជោគជ័យ!`);
}

// ==============================================================================
// 5. LUCKY SPIN WHEEL & COUPON ENGINE (10-SPIN GUARANTEE • 2 FREE • $5=+1 SPIN)
// ==============================================================================
const LUCKY_SPINS_STORAGE_KEY = 'edushop_lucky_spins_balance';
const LUCKY_STREAK_STORAGE_KEY = 'edushop_lucky_spins_streak';

const LUCKY_WHEEL_SEGMENTS = [
  { text: '🎁 $1.00', code: 'KHMER1', isPrize: true, color: '#10b981', label: 'បញ្ចុះតម្លៃ $1.00' },
  { text: '💨 ម្តងទៀត', code: null, isPrize: false, color: '#475569', label: 'សូមព្យាយាមម្តងទៀត' },
  { text: '🚚 Free Ship', code: 'FREESHIP', isPrize: true, color: '#0284c7', label: 'ហ្វ្រីថ្លៃដឹកជញ្ជូន' },
  { text: '✨ សំណាងល្អ', code: null, isPrize: false, color: '#334155', label: 'សំណាងល្អលើកក្រោយ' },
  { text: '🎟️ ៥% Off', code: 'TEACHER5', isPrize: true, color: '#f59e0b', label: 'បញ្ចុះតម្លៃ ៥%' },
  { text: '💨 ម្តងទៀត', code: null, isPrize: false, color: '#475569', label: 'សូមព្យាយាមម្តងទៀត' },
  { text: '🎉 កាដូ $2', code: 'EDUSHOP2', isPrize: true, color: '#ec4899', label: 'កាដូបញ្ចុះតម្លៃ $2.00' },
  { text: '✨ សំណាងល្អ', code: null, isPrize: false, color: '#334155', label: 'សំណាងល្អលើកក្រោយ' }
];

const PRIZE_SEGMENT_INDICES = [0, 2, 4, 6];
const TRY_AGAIN_SEGMENT_INDICES = [1, 3, 5, 7];

let wheelCurrentAngle = 0;
let isWheelSpinning = false;

// Helpers: Balance (New Customer = 2 Free Spins)
function getLuckySpinsBalance() {
  const val = localStorage.getItem(LUCKY_SPINS_STORAGE_KEY);
  if (val === null) {
    // New customer receives 2 FREE spins by default!
    localStorage.setItem(LUCKY_SPINS_STORAGE_KEY, '2');
    return 2;
  }
  const parsed = parseInt(val, 10);
  return isNaN(parsed) || parsed < 0 ? 0 : parsed;
}

function setLuckySpinsBalance(count) {
  const safe = Math.max(0, parseInt(count, 10) || 0);
  localStorage.setItem(LUCKY_SPINS_STORAGE_KEY, safe.toString());
  updateLuckySpinUI();
  return safe;
}

function addLuckySpins(count) {
  const earned = Math.max(0, parseInt(count, 10) || 0);
  if (earned <= 0) return getLuckySpinsBalance();
  const current = getLuckySpinsBalance();
  const newBal = current + earned;
  setLuckySpinsBalance(newBal);
  return newBal;
}

// Helpers: Pity Streak (Every 10 spins guaranteed 1 win)
function getLuckySpinsStreak() {
  const val = localStorage.getItem(LUCKY_STREAK_STORAGE_KEY);
  if (val === null) {
    localStorage.setItem(LUCKY_STREAK_STORAGE_KEY, '0');
    return 0;
  }
  const parsed = parseInt(val, 10);
  return isNaN(parsed) || parsed < 0 ? 0 : parsed;
}

function setLuckySpinsStreak(streak) {
  const safe = Math.max(0, parseInt(streak, 10) || 0);
  localStorage.setItem(LUCKY_STREAK_STORAGE_KEY, safe.toString());
  updateLuckySpinUI();
  return safe;
}

// Update Badges & UI Indicators
function updateLuckySpinUI() {
  const balance = getLuckySpinsBalance();
  const streak = getLuckySpinsStreak();

  // In-modal displays
  const balEl = document.getElementById('lucky-spin-balance-count');
  if (balEl) balEl.textContent = balance;

  const streakEl = document.getElementById('lucky-spin-streak-count');
  if (streakEl) streakEl.textContent = `${streak}/10`;

  const progBar = document.getElementById('lucky-spin-progress-bar');
  if (progBar) {
    const pct = Math.min(100, Math.max(0, (streak / 10) * 100));
    progBar.style.width = `${pct}%`;
  }

  const spinBtn = document.getElementById('btn-spin-wheel');
  if (spinBtn && !isWheelSpinning) {
    if (balance <= 0) {
      spinBtn.innerHTML = `<span>អស់ហើយ</span>`;
      spinBtn.classList.add('opacity-80');
    } else {
      spinBtn.innerHTML = `<span>បង្វិល!</span>`;
      spinBtn.classList.remove('opacity-80');
    }
  }

  // External trigger badges (Banner, Header, Floating)
  const bannerTxt = document.getElementById('banner-spin-count-txt');
  if (bannerTxt) {
    bannerTxt.textContent = `សល់ ${balance} ដង`;
  }

  const bannerPill = document.getElementById('banner-spin-balance-pill');
  if (bannerPill) {
    bannerPill.textContent = balance > 0 
      ? `🎟️ អ្នកមានសិទ្ធិបង្វិល ${balance} ដង` 
      : `🎁 Order $5 = +1 ដង`;
  }

  const headerBadge = document.getElementById('header-spin-count-badge');
  if (headerBadge) {
    headerBadge.textContent = balance;
    headerBadge.classList.toggle('hidden', balance <= 0);
  }

  const floatingBadge = document.getElementById('floating-spin-count-badge');
  if (floatingBadge) {
    floatingBadge.textContent = balance;
    floatingBadge.classList.toggle('hidden', balance <= 0);
  }
}

function scrollToProductsSection() {
  const target = document.getElementById('products-grid') || document.getElementById('all-products-heading') || document.querySelector('main');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function openLuckySpinModal() {
  const modal = document.getElementById('lucky-spin-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
  updateLuckySpinUI();

  const resBox = document.getElementById('spin-result-box');
  const balance = getLuckySpinsBalance();
  const streak = getLuckySpinsStreak();

  if (resBox && !isWheelSpinning) {
    if (balance <= 0) {
      resBox.innerHTML = `
        <div class="flex flex-col items-center gap-1.5 w-full text-center">
          <span class="text-rose-400 font-bold text-xs">⚠️ អស់ចំនួនបង្វិលហើយ (នៅសល់ 0 ដង)!</span>
          <span class="text-slate-300 text-[11px]">សម្រាប់អតិថិជនថ្មី Free ២ដង។ រាល់ការកុម្ម៉ង់អស់ $5.00 ទទួលបានការបង្វិលបន្ថែម +1 ដង។</span>
          <button type="button" onclick="closeLuckySpinModal(); scrollToProductsSection();" class="mt-1 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-bold text-xs cursor-pointer shadow">
            🛒 ទៅកុម្ម៉ង់ទំនិញ ($5.00 = +1 ដង)
          </button>
        </div>
      `;
    } else {
      resBox.innerHTML = `
        <div class="flex flex-col items-center gap-1 text-center">
          <span class="text-amber-300 font-semibold text-xs">ចុចប៊ូតុង <strong>«បង្វិល!»</strong> ដើម្បីសាកល្បងសំណាង!</span>
          <span class="text-slate-400 text-[11px]">វឌ្ឍនភាពបច្ចុប្បន្ន៖ <strong class="text-amber-400">${streak}/10 ដង</strong> (បង្វិលគ្រប់ ១០ដង ធានាត្រូវរង្វាន់ ១០០%)</span>
        </div>
      `;
    }
  }

  setTimeout(() => {
    initLuckySpinCanvas();
  }, 50);
}

function closeLuckySpinModal() {
  const modal = document.getElementById('lucky-spin-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function initLuckySpinCanvas() {
  const canvas = document.getElementById('spin-wheel-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const r = w / 2 - 8;

  ctx.clearRect(0, 0, w, h);

  const numSegs = LUCKY_WHEEL_SEGMENTS.length;
  const arc = (Math.PI * 2) / numSegs;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(wheelCurrentAngle);

  for (let i = 0; i < numSegs; i++) {
    const angle = i * arc;
    ctx.beginPath();
    ctx.fillStyle = LUCKY_WHEEL_SEGMENTS[i].color;
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, r, angle, angle + arc);
    ctx.lineTo(0, 0);
    ctx.fill();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.rotate(angle + arc / 2);
    ctx.textAlign = 'right';
    ctx.font = 'bold 12px "Kantumruy Pro", sans-serif';
    ctx.fillText(LUCKY_WHEEL_SEGMENTS[i].text, r - 16, 4);
    ctx.restore();
  }

  ctx.restore();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 5;
  ctx.stroke();
}

function spinLuckyWheel() {
  if (isWheelSpinning) return;

  const balance = getLuckySpinsBalance();
  const resBox = document.getElementById('spin-result-box');

  if (balance <= 0) {
    if (typeof showToast === 'function') {
      showToast('⚠️ អស់ចំនួនបង្វិលហើយ! កុម្ម៉ង់ទំនិញចាប់ពី $5.00 ឡើងទៅ ដើម្បីទទួលបានការបង្វិលបន្ថែម (+1 ដងរាល់ $5.00)!', 'warning');
    }
    if (resBox) {
      resBox.innerHTML = `
        <div class="flex flex-col items-center gap-1.5 w-full text-center">
          <span class="text-rose-400 font-bold text-xs">⚠️ អស់ចំនួនបង្វិលហើយ (នៅសល់ 0 ដង)!</span>
          <span class="text-slate-300 text-[11px]">សម្រាប់អតិថិជនថ្មី Free ២ដង។ រាល់ការកុម្ម៉ង់អស់ $5.00 ទទួលបានការបង្វិលបន្ថែម +1 ដង។</span>
          <button type="button" onclick="closeLuckySpinModal(); scrollToProductsSection();" class="mt-1 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-bold text-xs cursor-pointer shadow">
            🛒 ទៅកុម្ម៉ង់ទំនិញ ($5.00 = +1 ដង)
          </button>
        </div>
      `;
    }
    return;
  }

  isWheelSpinning = true;

  // Deduct 1 spin
  const newBalance = setLuckySpinsBalance(balance - 1);

  // Advance streak counter (1 to 10)
  const previousStreak = getLuckySpinsStreak();
  const newStreak = previousStreak + 1;

  const btn = document.getElementById('btn-spin-wheel');
  if (btn) btn.disabled = true;

  if (resBox) {
    resBox.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="animate-spin text-amber-400 text-base">🎡</span>
        <span class="text-amber-300 font-bold text-xs animate-pulse">កំពុងបង្វិលកង់សំណាង... (លើកទី ${newStreak}/10)</span>
      </div>
    `;
  }

  if (typeof playChimeTick === 'function') playChimeTick();

  // Exactly 10 spins to win 1 prize per customer:
  // - Spins 1-9: land on Try Again / Good Luck Next Time
  // - Spin 10: guarantees landing on a winning prize coupon, and streak resets to 0!
  let isWin = false;
  let targetSegIdx = 0;

  if (newStreak >= 10) {
    isWin = true;
    targetSegIdx = PRIZE_SEGMENT_INDICES[Math.floor(Math.random() * PRIZE_SEGMENT_INDICES.length)];
    setLuckySpinsStreak(0); // Reset pity streak for next 10-spin cycle!
  } else {
    isWin = false;
    targetSegIdx = TRY_AGAIN_SEGMENT_INDICES[Math.floor(Math.random() * TRY_AGAIN_SEGMENT_INDICES.length)];
    setLuckySpinsStreak(newStreak);
  }

  // Exact rotation math so pointer at top (angle 3*PI/2) points precisely to targetSegIdx
  const segArc = (Math.PI * 2) / LUCKY_WHEEL_SEGMENTS.length;
  const centerOffset = (targetSegIdx + 0.5) * segArc;
  let baseTarget = (1.5 * Math.PI) - centerOffset;
  while (baseTarget < 0) baseTarget += Math.PI * 2;
  baseTarget = baseTarget % (Math.PI * 2);

  const currentBase = wheelCurrentAngle % (Math.PI * 2);
  let diff = baseTarget - currentBase;
  while (diff < 0) diff += Math.PI * 2;

  const fullSpins = 5 + Math.floor(Math.random() * 3); // 5 to 7 full revolutions
  const totalChange = (Math.PI * 2 * fullSpins) + diff;
  const startAngle = wheelCurrentAngle;
  const duration = 3800;
  const startTime = performance.now();

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const ease = 1 - Math.pow(1 - progress, 3);
    wheelCurrentAngle = startAngle + totalChange * ease;
    initLuckySpinCanvas();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      isWheelSpinning = false;
      if (btn) btn.disabled = false;
      updateLuckySpinUI();

      if (isWin) {
        const wonPrize = LUCKY_WHEEL_SEGMENTS[targetSegIdx];
        if (typeof playChimeWin === 'function') playChimeWin();
        if (resBox) {
          resBox.innerHTML = `
            <div class="flex flex-col items-center gap-1.5 w-full animate-scale-up">
              <span class="text-emerald-400 font-black text-xs sm:text-sm">🎉 អបអរសាទរ! អ្នកបានបង្វិលគ្រប់ ១០ដង និងឈ្នះ «${wonPrize.label}»!</span>
              <div class="flex items-center gap-2 flex-wrap justify-center">
                <span class="font-mono bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-md font-black text-xs shadow">${wonPrize.code}</span>
                <button type="button" onclick="autoApplySpinPrize('${wonPrize.code}')" class="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer shadow transition active:scale-95">
                  ប្រើគូប៉ុងនេះភ្លាមៗ
                </button>
              </div>
            </div>
          `;
        }
        if (typeof showToast === 'function') {
          showToast(`🎉 អបអរសាទរ! អ្នកបានឈ្នះគូប៉ុង «${wonPrize.code}» (${wonPrize.label})!`, 'success');
        }
      } else {
        const streakNow = getLuckySpinsStreak();
        const remainingToWin = 10 - streakNow;
        if (resBox) {
          resBox.innerHTML = `
            <div class="flex flex-col items-center gap-1 w-full text-center animate-fade-in">
              <span class="text-amber-300 font-bold text-xs">💨 ${LUCKY_WHEEL_SEGMENTS[targetSegIdx].label}!</span>
              <span class="text-slate-300 text-[11px]">
                វឌ្ឍនភាព៖ <strong class="text-amber-400">${streakNow}/10 ដង</strong> • នៅសល់ <strong class="text-emerald-400">${remainingToWin} ដងទៀត</strong> ធានាត្រូវរង្វាន់ ១០០%!
              </span>
              ${newBalance > 0 
                ? `<span class="text-[10px] text-slate-400">អ្នកនៅសល់ <strong>${newBalance} ដង</strong> ទៀត! ចុចបង្វិលបន្ត...</span>` 
                : `<button type="button" onclick="closeLuckySpinModal(); scrollToProductsSection();" class="mt-1 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-bold text-xs cursor-pointer shadow">🛒 កុម្ម៉ង់ទំនិញដើម្បីទទួលបានការបង្វិល ($5.00 = +1 ដង)</button>`
              }
            </div>
          `;
        }
      }
    }
  }

  requestAnimationFrame(animate);
}

function autoApplySpinPrize(code) {
  const input = document.getElementById('cart-coupon-input');
  if (input) input.value = code;
  applyCartCoupon();
  closeLuckySpinModal();
  toggleCart(true);
}

function applyCartCoupon() {
  const input = document.getElementById('cart-coupon-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (!code) {
    showToast('⚠️ សូមវាយបញ្ចូលកូដគូប៉ុង!', 'error');
    return;
  }

  const found = AVAILABLE_COUPONS.find(c => c.code === code);
  if (!found) {
    showToast(`❌ កូដ «${code}» មិនត្រឹមត្រូវ ឬផុតកំណត់!`, 'error');
    return;
  }

  appliedCoupon = {
    code: found.code,
    type: found.type,
    value: found.value,
    valueUSD: found.valueUSD,
    valueKHR: found.valueKHR,
    label: found.label
  };

  renderCartDrawer();
  showToast(`🎉 បានអនុវត្តកូដ «${found.code}» ដោយជោគជ័យ!`);
}

function removeCartCoupon() {
  appliedCoupon = null;
  const input = document.getElementById('cart-coupon-input');
  if (input) input.value = '';
  renderCartDrawer();
  showToast('បានដកកូដគូប៉ុងចេញ');
}

function playChimeTick() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) {}
}

function playChimeWin() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
      gain.gain.setValueAtTime(0.12, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.25);
    });
  } catch (e) {}
}

// ==============================================================================
// 6. INTERACTIVE AUDIO PRONUNCIATION PREVIEW ENGINE
// ==============================================================================
let currentAudioPreviewUtterance = null;

function playPosterAudioPreview(productId) {
  const p = productsData.find(item => item.id === productId);
  if (!p) return;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  playChimeTick();

  let audioToast = document.getElementById('audio-preview-toast');
  if (!audioToast) {
    audioToast = document.createElement('div');
    audioToast.id = 'audio-preview-toast';
    audioToast.className = 'fixed top-5 right-4 z-50 bg-slate-900/95 backdrop-blur-md border border-amber-400 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-0 golden-glow-box max-w-sm';
    document.body.appendChild(audioToast);
  }

  audioToast.innerHTML = `
    <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-xl flex-shrink-0">
      <span>🔊</span>
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-1.5">
        <span class="text-xs font-bold text-amber-300 truncate">${p.name}</span>
        <div class="flex items-center gap-0.5 h-3">
          <span class="audio-wave-bar"></span>
          <span class="audio-wave-bar"></span>
          <span class="audio-wave-bar"></span>
          <span class="audio-wave-bar"></span>
        </div>
      </div>
      <p id="audio-preview-text" class="text-[11px] text-slate-300 truncate mt-0.5">កំពុងចាក់សំឡេងណែនាំគំរូ...</p>
    </div>
    <button type="button" onclick="stopPosterAudioPreview()" class="w-6 h-6 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs flex items-center justify-center cursor-pointer">✕</button>
  `;
  audioToast.classList.remove('hidden');

  let speechText = '';
  if (p.name.includes('ព្យញ្ជនៈ') || p.name.includes('អក្សរ')) {
    speechText = `ផ្ទាំងព្យញ្ជនៈខ្មែរ ៣៣ តួ៖ ក ខ គ ឃ ង ច ឆ ជ ឈ ញ ដ ឋ ឌ ឍ ណ ត ថ ទ ធ ន ប ផ ព ភ ម យ រ ល វ ស ហ ឡ អ។ រៀនអានឱ្យច្បាស់ទាំងអស់គ្នា!`;
  } else if (p.name.includes('ដើមឈើ') || p.name.includes('អំណាន')) {
    speechText = `ដើមឈើអំណាន៖ ការអានសៀវភៅ នាំមកនូវពុទ្ធិ ប្រាជ្ញា និងអនាគតភ្លឺស្វាងសម្រាប់កុមារ!`;
  } else if (p.name.includes('ច្បាប់') || p.name.includes('វិន័យ') || p.name.includes('កាលវិភាគ')) {
    speechText = `ច្បាប់វិន័យក្នុងថ្នាក់រៀន៖ គោរពគ្រូ ស្រឡាញ់មិត្តភក្តិ ឧស្សាហ៍ព្យាយាម និងរក្សាអនាម័យ!`;
  } else if (p.name.includes('លេខ') || p.name.includes('គណិត')) {
    speechText = `រៀនរាប់លេខ និងមេលេខនព្វន្ត៖ ១ ២ ៣ ៤ ៥ ៦ ៧ ៨ ៩ ១០ ងាយយល់ និងរីករាយ!`;
  } else {
    speechText = `សូមស្វាគមន៍មកកាន់ EduShop! ${p.name} ទំហំ ${p.size} គុណភាពខ្ពស់ មិនជ្រាបទឹក។`;
  }

  const previewTextEl = document.getElementById('audio-preview-text');
  if (previewTextEl) previewTextEl.textContent = speechText.slice(0, 40) + '...';

  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = 'km-KH';
    utterance.rate = 0.95;
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();
    const kmVoice = voices.find(v => v.lang.includes('km') || v.lang.includes('kh'));
    if (kmVoice) utterance.voice = kmVoice;

    utterance.onend = () => {
      setTimeout(() => {
        stopPosterAudioPreview();
      }, 1500);
    };
    utterance.onerror = () => {
      setTimeout(() => {
        stopPosterAudioPreview();
      }, 2500);
    };

    currentAudioPreviewUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  } else {
    setTimeout(() => {
      stopPosterAudioPreview();
    }, 3000);
  }
}

function stopPosterAudioPreview() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  const audioToast = document.getElementById('audio-preview-toast');
  if (audioToast) audioToast.classList.add('hidden');
}

// ==============================================================================
// 7. STUDENT DESK NAMETAG & ID TAG GENERATOR ENGINE
// ==============================================================================
function openStudentNametagModal() {
  const modal = document.getElementById('student-nametag-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
  setTimeout(() => {
    renderNametagCanvas();
  }, 60);
}

function closeStudentNametagModal() {
  const modal = document.getElementById('student-nametag-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function renderNametagCanvas() {
  const canvas = document.getElementById('nametag-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const schoolName = (document.getElementById('nametag-school-name')?.value || 'សាលាបឋមសិក្សា វត្តបូព៌').trim();
  const grade = (document.getElementById('nametag-grade')?.value || 'ថ្នាក់ទី ២ក').trim();
  const style = document.getElementById('nametag-style')?.value || 'animal';
  const listRaw = (document.getElementById('nametag-students-list')?.value || '').trim();

  let names = listRaw.split('\n').map(n => n.trim()).filter(Boolean);
  if (names.length === 0) {
    names = ['សេង សុខា', 'ហេង ចាន់ណា', 'លី វណ្ណៈ', 'អ៊ុំ សុវណ្ណ', 'ខៀវ មុន្នី', 'ម៉ៅ រតនា'];
  }
  while (names.length < 6) {
    names.push(`សិស្សគំរូ ទី ${names.length + 1}`);
  }

  const w = canvas.width;
  const h = canvas.height;

  // Background A4
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);

  // Outer border
  ctx.strokeStyle = '#0d9488';
  ctx.lineWidth = 4;
  ctx.strokeRect(10, 10, w - 20, h - 20);

  const cols = 2;
  const rows = 3;
  const tagW = (w - 60) / cols;
  const tagH = (h - 60) / rows;

  const iconsMap = {
    animal: ['🦁', '🐰', '🐼', '🦊', '🐨', '🐯'],
    angkor: ['🪷', '🏛️', '🌺', '🪷', '🏛️', '🌺'],
    star: ['⭐', '🚀', '🌟', '🏆', '🎯', '💫']
  };
  const icons = iconsMap[style] || iconsMap.animal;

  for (let i = 0; i < 6; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 20 + col * (tagW + 20);
    const y = 20 + row * (tagH + 10);
    const name = names[i] || `សិស្សទី ${i + 1}`;
    const icon = icons[i % icons.length];

    // Card background & dashed cutting border
    ctx.fillStyle = i % 2 === 0 ? '#f0fdfa' : '#fefce8';
    ctx.fillRect(x, y, tagW, tagH);

    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 4]);
    ctx.strokeRect(x, y, tagW, tagH);
    ctx.setLineDash([]);

    // Folding center line
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 3]);
    ctx.beginPath();
    ctx.moveTo(x + 10, y + tagH * 0.42);
    ctx.lineTo(x + tagW - 10, y + tagH * 0.42);
    ctx.stroke();
    ctx.setLineDash([]);

    // School & Grade Top Header
    ctx.fillStyle = '#0f766e';
    ctx.font = 'bold 13px "Kantumruy Pro", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${schoolName} • ${grade}`, x + 16, y + 26);

    // Decorative Icon badge
    ctx.font = '32px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(icon, x + tagW - 16, y + 36);

    // Student Name
    ctx.textAlign = 'center';
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 24px "Kantumruy Pro", sans-serif';
    ctx.fillText(name, x + tagW / 2, y + tagH * 0.72);

    // Bottom folding hint
    ctx.fillStyle = '#64748b';
    ctx.font = 'italic 10px "Kantumruy Pro", sans-serif';
    ctx.fillText('✂️ កាត់តាមបន្ទាត់ដាច់ៗ រួចបត់ដាក់លើតុសិស្ស (Desk Nameplate)', x + tagW / 2, y + tagH - 10);
  }
}

function downloadNametagImage() {
  const canvas = document.getElementById('nametag-canvas');
  if (!canvas) return;
  const grade = (document.getElementById('nametag-grade')?.value || 'ថ្នាក់រៀន').trim();
  const link = document.createElement('a');
  link.download = `ស្លាកឈ្មោះលើតុសិស្ស_${grade.replace(/\s+/g, '_')}_A4.png`;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(`🎉 បានទាញយកស្លាកឈ្មោះសិស្ស A4 HD ដោយជោគជ័យ!`);
}

function orderNametagPrint() {
  const grade = (document.getElementById('nametag-grade')?.value || 'ថ្នាក់រៀន').trim();

  const nametagProduct = {
    id: 9904,
    name: `ស្លាកឈ្មោះលើតុសិស្ស (១ឈុត ៦ស្លាក អ៊ុតស្វិតកាត់ស្រាប់) - ${grade}`,
    category: 'teaching',
    categoryLabel: 'ស្លាកឈ្មោះ',
    size: 'A4 Sheet (6 Nameplates)',
    priceUSD: 1.00,
    priceKHR: 4000,
    material: 'ក្រដាសរឹង 300g អ៊ុតផ្លាស្ទិកកាត់រួចស្រេច',
    iconEmoji: '🏷️',
    iconBg: 'from-teal-400 to-emerald-600',
    inStock: true
  };

  const existingIdx = cart.findIndex(i => i.product.id === nametagProduct.id && i.product.name === nametagProduct.name);
  if (existingIdx > -1) {
    cart[existingIdx].quantity += 1;
  } else {
    cart.push({ product: nametagProduct, quantity: 1 });
  }

  closeStudentNametagModal();
  saveCart();
  renderCartDrawer();
  toggleCart(true);
  showToast(`🎉 បានដាក់ «ស្លាកឈ្មោះសិស្ស ${grade}» ចូលកន្ត្រក!`);
}

// ==============================================================================
// 8. SIDE-BY-SIDE PRODUCT COMPARISON ENGINE
// ==============================================================================
let compareSlotIds = [1, 2];

function openProductCompareModal(id1, id2) {
  const modal = document.getElementById('product-compare-modal');
  if (!modal) return;

  if (id1) compareSlotIds[0] = id1;
  if (id2) compareSlotIds[1] = id2;

  if (compareSlotIds[0] === compareSlotIds[1]) {
    const alt = productsData.find(p => p.id !== compareSlotIds[0]);
    if (alt) compareSlotIds[1] = alt.id;
  }

  populateCompareDropdowns();
  renderCompareGrid();
  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

function closeProductCompareModal() {
  const modal = document.getElementById('product-compare-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function quickToggleCompare(productId) {
  if (compareSlotIds[0] !== productId) {
    compareSlotIds[1] = compareSlotIds[0];
    compareSlotIds[0] = productId;
  }
  openProductCompareModal(compareSlotIds[0], compareSlotIds[1]);
}

function populateCompareDropdowns() {
  const sel1 = document.getElementById('compare-select-1');
  const sel2 = document.getElementById('compare-select-2');
  if (!sel1 || !sel2) return;

  const optionsHtml = productsData.map(p => `
    <option value="${p.id}">${p.name} (${formatUSD(p.priceUSD)})</option>
  `).join('');

  sel1.innerHTML = optionsHtml;
  sel2.innerHTML = optionsHtml;

  sel1.value = compareSlotIds[0];
  sel2.value = compareSlotIds[1];
}

function onCompareSelectChange(slot, prodId) {
  compareSlotIds[slot] = parseInt(prodId) || 1;
  renderCompareGrid();
}

function renderCompareGrid() {
  const container = document.getElementById('compare-grid-container');
  if (!container) return;

  const p1 = productsData.find(p => p.id === compareSlotIds[0]) || productsData[0];
  const p2 = productsData.find(p => p.id === compareSlotIds[1]) || productsData[1];

  function renderSlotCard(p) {
    if (!p) return '';
    const imgHtml = p.imageUrl
      ? `<img src="${p.imageUrl}" alt="${p.name}" class="w-full h-36 sm:h-44 object-cover rounded-xl border border-slate-700">`
      : `<div class="w-full h-36 sm:h-44 rounded-xl bg-gradient-to-br ${p.iconBg || 'from-sky-500 to-indigo-600'} flex items-center justify-center text-6xl text-white">${p.iconEmoji || '📦'}</div>`;

    return `
      <div class="bg-slate-950/70 p-3 sm:p-4 rounded-2xl border border-slate-800 space-y-3 flex flex-col justify-between">
        <div class="space-y-2.5">
          ${imgHtml}
          <h4 class="font-bold text-white text-xs sm:text-sm line-clamp-2">${p.name}</h4>
          
          <div class="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
            <div class="flex justify-between">
              <span class="text-slate-400">ប្រភេទ៖</span>
              <span class="font-semibold text-amber-300">${p.categoryLabel || 'ទំនិញ'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">ទំហំស្ដង់ដារ៖</span>
              <span class="font-bold text-white">${p.size}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">គុណភាព៖</span>
              <span class="font-semibold text-emerald-400">💧 មិនជ្រាបទឹក ១០០%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">វត្ថុធាតុដើម៖</span>
              <span class="text-slate-200 truncate max-w-[55%]">${p.material || 'PP Synthetic Paper'}</span>
            </div>
            <div class="flex justify-between items-baseline pt-1 border-t border-slate-800">
              <span class="text-slate-400">តម្លៃទំនិញ៖</span>
              <div class="text-right">
                <span class="text-base sm:text-lg font-black text-sky-400 font-display">${formatUSD(p.priceUSD)}</span>
                <span class="text-[11px] text-slate-400 block">(${formatKHR(p.priceKHR)})</span>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-800">
          <button type="button" onclick="addToCart(${p.id}); closeProductCompareModal();" class="py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1 active:scale-95 cursor-pointer">
            <span>🛒</span> <span>+ កន្ត្រក</span>
          </button>
          <button type="button" onclick="closeProductCompareModal(); openOrderModal(${p.id});" class="py-2 rounded-xl btn-primary-glow font-bold text-xs flex items-center justify-center gap-1 active:scale-95 cursor-pointer">
            <span>⚡</span> <span>ទិញភ្លាមៗ</span>
          </button>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="grid grid-cols-2 gap-3 sm:gap-4">
      ${renderSlotCard(p1)}
      ${renderSlotCard(p2)}
    </div>
  `;
}

// ==============================================================================
// 9. COMMUNITY CLASSROOM PHOTO UPLOAD & REVIEW ENGINE
// ==============================================================================
let uploadedClassroomPhotoDataUrl = null;

function openClassroomUploadModal() {
  const modal = document.getElementById('classroom-upload-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

function closeClassroomUploadModal() {
  const modal = document.getElementById('classroom-upload-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function handleClassroomPhotoSelect(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    uploadedClassroomPhotoDataUrl = evt.target.result;
    const previewBox = document.getElementById('upload-photo-preview-box');
    const previewImg = document.getElementById('upload-photo-preview');
    if (previewImg && previewBox) {
      previewImg.src = uploadedClassroomPhotoDataUrl;
      previewBox.classList.remove('hidden');
    }
  };
  reader.readAsDataURL(file);
}

function submitClassroomReview(e) {
  e.preventDefault();

  const teacherName = (document.getElementById('upload-teacher-name')?.value || '').trim();
  const schoolName = (document.getElementById('upload-school-name')?.value || '').trim();
  const province = document.getElementById('upload-province')?.value || 'ភ្នំពេញ';
  const grade = (document.getElementById('upload-grade')?.value || '').trim();
  const review = (document.getElementById('upload-review')?.value || '').trim();

  if (!teacherName || !schoolName || !uploadedClassroomPhotoDataUrl) {
    showToast('⚠️ សូមបញ្ចូលព័ត៌មាន និងរូបភាពឱ្យបានគ្រប់គ្រាន់!', 'error');
    return;
  }

  const newShowcaseItem = {
    id: 'user-upload-' + Date.now(),
    province: 'all',
    provinceLabel: province,
    schoolName: schoolName,
    grade: grade,
    teacher: teacherName,
    image: uploadedClassroomPhotoDataUrl,
    quote: `«${review}»`,
    rating: 5,
    packageItems: 'ឈុតតុបតែងថ្នាក់រៀនជាក់ស្តែង'
  };

  if (typeof CLASSROOM_SHOWCASE_DATA !== 'undefined') {
    CLASSROOM_SHOWCASE_DATA.unshift(newShowcaseItem);
  }

  const rewardCoupon = AVAILABLE_COUPONS.find(c => c.code === 'TEACHERPHOTO') || {
    code: 'TEACHERPHOTO',
    type: 'fixed',
    valueUSD: 1.00,
    valueKHR: 4000,
    label: 'កាដូចែករំលែករូបថ្នាក់រៀន ($1.00 / 4,000 ៛)'
  };
  appliedCoupon = rewardCoupon;

  closeClassroomUploadModal();
  renderShowcaseGrid('all');
  openClassroomShowcaseModal();

  showToast(`🎉 អរគុណសម្រាប់ការចែករំលែក! អ្នកបានទទួលគូប៉ុង «TEACHERPHOTO» (-$1.00)!`);
}

// ==============================================================================
// 10. COURIER BRANCH FINDER & DELIVERY ETA ENGINE
// ==============================================================================
const COURIER_PROVINCE_DATABASE = {
  phnompenh: {
    name: 'រាជធានីភ្នំពេញ',
    eta: 'ក្នុងថ្ងៃ ឬ ១២ ទៅ ២៤ ម៉ោង',
    badge: 'ដឹកលឿនបំផុត ⚡',
    branches: [
      { courier: 'វិរៈប៊ុនថាំ (VET Express)', phone: '081 911 911', address: 'សាខាផ្សារថ្មី, ចាក់អង្រែ, វត្តភ្នំ, ទួលគោក' },
      { courier: 'J&T Express', phone: '023 911 888', address: 'គ្រប់ខណ្ឌទាំង ១៤ ក្នុងរាជធានីភ្នំពេញ' },
      { courier: 'កាពីតូល (Capitol Express)', phone: '023 217 627', address: 'សាខាផ្សារអូរឫស្សី' }
    ]
  },
  siemreap: {
    name: 'ខេត្តសៀមរាប',
    eta: '២៤ ម៉ោង (១ ថ្ងៃ)',
    badge: 'ជើងឡានរាល់ថ្ងៃ 🚚',
    branches: [
      { courier: 'វិរៈប៊ុនថាំ (VET Express)', phone: '063 963 888', address: 'សាខាក្រុងសៀមរាប (ជិតផ្សារញ៉ែ និងវត្តបូព៌)' },
      { courier: 'J&T Express', phone: '063 900 123', address: 'សាខាស្វាយដង្គំ និងស្លក្រាម' }
    ]
  },
  battambang: {
    name: 'ខេត្តបាត់ដំបង',
    eta: '២៤ ម៉ោង (១ ថ្ងៃ)',
    badge: 'ជើងឡានរាល់ថ្ងៃ 🚚',
    branches: [
      { courier: 'វិរៈប៊ុនថាំ (VET Express)', phone: '053 952 888', address: 'សាខាផ្លូវលេខ ៣ ក្រុងបាត់ដំបង' },
      { courier: 'កាពីតូល (Capitol Express)', phone: '053 730 083', address: 'សាខាជិតរង្វង់មូលព្រះនរាយណ៍' }
    ]
  },
  kampongcham: {
    name: 'ខេត្តកំពង់ចាម',
    eta: '២៤ ម៉ោង (១ ថ្ងៃ)',
    badge: 'ជើងឡានព្រឹក/ល្ងាច 🚚',
    branches: [
      { courier: 'វិរៈប៊ុនថាំ (VET Express)', phone: '042 941 888', address: 'សាខាក្រុងកំពង់ចាម ជិតមាត់ទន្លេ' },
      { courier: 'J&T Express', phone: '042 900 567', address: 'សាខាផ្សារធំកំពង់ចាម' }
    ]
  }
};

function openCourierFinderModal() {
  const modal = document.getElementById('courier-finder-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
  renderCourierInfo('phnompenh');
}

function closeCourierFinderModal() {
  const modal = document.getElementById('courier-finder-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function renderCourierInfo(provinceKey) {
  const box = document.getElementById('courier-results-box');
  if (!box) return;

  const data = COURIER_PROVINCE_DATABASE[provinceKey] || {
    name: 'បណ្តាខេត្តនានា',
    eta: '២៤ ទៅ ៤៨ ម៉ោង',
    badge: 'ផ្ញើបានទូទាំងប្រទេស 🚚',
    branches: [
      { courier: 'វិរៈប៊ុនថាំ (VET Express)', phone: '081 911 911', address: 'សាខាធំប្រចាំទីរួមខេត្ត និងស្រុក' },
      { courier: 'J&T Express', phone: '023 911 888', address: 'សាខាប្រចាំស្រុក និងក្រុង' }
    ]
  };

  box.innerHTML = `
    <!-- ETA Card -->
    <div class="p-3.5 bg-gradient-to-r from-cyan-950 via-slate-950 to-blue-950 border border-cyan-500/40 rounded-2xl space-y-2">
      <div class="flex items-center justify-between">
        <span class="font-bold text-white text-xs">${data.name}</span>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">${data.badge}</span>
      </div>
      <div class="flex items-baseline justify-between pt-1 border-t border-slate-800">
        <span class="text-slate-400">⏱️ រយៈពេលដឹកជញ្ជូនរំពឹងទុក៖</span>
        <span class="font-bold text-amber-300 text-sm">${data.eta}</span>
      </div>
      <div class="flex items-baseline justify-between text-[11px]">
        <span class="text-slate-400">💵 តម្លៃសេវាដឹក៖</span>
        <span class="font-semibold text-emerald-400">ផ្ញើសាខា $1.50 | ដឹកដល់សាលា/ផ្ទះ $2.00</span>
      </div>
    </div>

    <!-- Branches List -->
    <div class="space-y-2">
      <h5 class="font-bold text-slate-300 text-xs">🏢 សាខាដឹកជញ្ជូនដែលអាចជ្រើសរើសបាន៖</h5>
      ${data.branches.map(b => `
        <div class="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1">
          <div class="flex justify-between items-center">
            <span class="font-bold text-cyan-300">${b.courier}</span>
            <a href="tel:${b.phone.replace(/\s+/g, '')}" class="text-emerald-400 font-bold hover:underline flex items-center gap-1">
              <span>📞</span> <span>${b.phone}</span>
            </a>
          </div>
          <p class="text-[11px] text-slate-400">📍 ${b.address}</p>
        </div>
      `).join('')}
    </div>

    <!-- Free Delivery Promotion Note -->
    <div class="p-2.5 bg-emerald-500/10 border border-emerald-400/30 rounded-xl text-[11px] text-emerald-200">
      🎁 <strong>ប្រូម៉ូសិនសាលា៖</strong> កុម្ម៉ង់ចាប់ពី <strong>១០ ផ្ទាំង</strong> ឬ <strong>$20 ឡើងទៅ</strong> ទទួលបានការដឹកជញ្ជូន <strong>ឥតគិតថ្លៃ ១០០%</strong> ដល់គ្រប់ខេត្ត-ក្រុង!
    </div>
  `;
}

// ==============================================================================
// 11. OFFICIAL PROFORMA INVOICE / PRICE QUOTATION ENGINE
// ==============================================================================
function openProformaInvoiceModal() {
  const modal = document.getElementById('proforma-invoice-modal');
  if (!modal) return;
  renderProformaInvoiceSheet();
  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

function closeProformaInvoiceModal() {
  const modal = document.getElementById('proforma-invoice-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function renderProformaInvoiceSheet() {
  const sheet = document.getElementById('proforma-invoice-sheet');
  if (!sheet) return;

  const schoolName = (document.getElementById('quote-school-name')?.value || 'សាលាបឋមសិក្សា វត្តបូព៌').trim();
  const directorName = (document.getElementById('quote-director-name')?.value || 'អ្នកគ្រូ គង់ សុភា').trim();
  const phone = (document.getElementById('quote-phone')?.value || '012 345 678').trim();

  let items = cart.length > 0 
    ? cart.map(i => ({ name: i.product.name, size: i.product.size, qty: i.quantity, priceUSD: i.product.priceUSD, totalUSD: i.product.priceUSD * i.quantity }))
    : [
        { name: 'ផ្ទាំងព្យញ្ជនៈខ្មែរ ៣៣ តួ (ក ខ គ...)', size: '60 cm × 80 cm', qty: 2, priceUSD: 2.50, totalUSD: 5.00 },
        { name: 'ផ្ទាំងដើមឈើអំណាន & សៀវភៅ', size: '80 cm × 100 cm', qty: 2, priceUSD: 3.75, totalUSD: 7.50 },
        { name: 'ផ្ទាំងច្បាប់វិន័យ & កាលវិភាគថ្នាក់', size: '60 cm × 80 cm', qty: 2, priceUSD: 2.50, totalUSD: 5.00 },
        { name: 'ផ្ទាំងតារាងមេលេខនព្វន្ត ១ ដល់ ១០', size: '60 cm × 80 cm', qty: 2, priceUSD: 2.50, totalUSD: 5.00 },
        { name: 'បដាស្វាគមន៍ឆ្នាំសិក្សាថ្មី', size: '60 cm × 200 cm', qty: 1, priceUSD: 6.25, totalUSD: 6.25 }
      ];

  const rawUSD = items.reduce((sum, item) => sum + item.totalUSD, 0);
  const totalUnits = items.reduce((sum, item) => sum + item.qty, 0);
  const bulk = getBulkDiscountInfo(totalUnits, rawUSD, rawUSD * EXCHANGE_RATE);
  const payableUSD = bulk.percent > 0 ? bulk.payableUSD : rawUSD;
  const payableKHR = Math.round(payableUSD * EXCHANGE_RATE);

  sheet.innerHTML = `
    <!-- Letterhead -->
    <div class="flex items-start justify-between border-b-2 border-slate-900 pb-4">
      <div class="flex items-center gap-3">
        <div class="w-14 h-14 rounded-2xl bg-white border border-slate-300 p-1 flex items-center justify-center shadow-xs">
          <img src="logo.png" alt="EduShop" class="w-full h-full object-contain">
        </div>
        <div>
          <h2 class="text-base sm:text-lg font-black text-slate-900 font-display">EDUSHOP CAMBODIA</h2>
          <p class="text-[11px] font-bold text-slate-700">សម្ភារៈតុបតែងថ្នាក់រៀន & ជំនួយការបង្រៀនខ្មែរ</p>
          <p class="text-[10px] text-slate-500">👑 ម្ចាស់ហាង៖ 031 97 11 333 • Telegram: 096 436 1201 • ដឹកជញ្ជូន ២៥ ខេត្ត-ក្រុង</p>
        </div>
      </div>
      <div class="text-right">
        <span class="inline-block px-3 py-1 bg-slate-900 text-white font-black text-xs rounded-lg uppercase tracking-wider">លិខិតសម្រង់តម្លៃ</span>
        <p class="text-[10px] font-mono font-bold text-slate-600 mt-1">QUO-2026-0888</p>
        <p class="text-[10px] text-slate-500">កាលបរិច្ឆេទ៖ ${new Date().toLocaleDateString('km-KH')}</p>
      </div>
    </div>

    <!-- Client Info -->
    <div class="grid grid-cols-2 gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px]">
      <div>
        <span class="text-slate-500 block">ជូនចំពោះ / Client:</span>
        <strong class="text-slate-900 text-xs block">${schoolName}</strong>
        <span class="text-slate-600">អ្នកស្នើសុំ៖ ${directorName}</span>
      </div>
      <div class="text-right">
        <span class="text-slate-500 block">ទំនាក់ទំនង / Contact:</span>
        <strong class="text-slate-900 block">${phone}</strong>
        <span class="text-emerald-700 font-bold">ស្ថានភាព៖ សម្រង់តម្លៃផ្លូវការ (Official Quote)</span>
      </div>
    </div>

    <!-- Itemized Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-left text-xs border-collapse">
        <thead>
          <tr class="bg-slate-100 text-slate-700 border-b border-slate-300 text-[11px]">
            <th class="py-2 px-2.5">ល.រ</th>
            <th class="py-2 px-2.5">មុខទំនិញ / ការពណ៌នា</th>
            <th class="py-2 px-2.5">ទំហំ</th>
            <th class="py-2 px-2.5 text-center">ចំនួន</th>
            <th class="py-2 px-2.5 text-right">តម្លៃរាយ</th>
            <th class="py-2 px-2.5 text-right">សរុប (USD)</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 text-[11px]">
          ${items.map((it, idx) => `
            <tr>
              <td class="py-2 px-2.5 text-slate-500 font-mono">${idx + 1}</td>
              <td class="py-2 px-2.5 font-bold text-slate-900">${it.name}</td>
              <td class="py-2 px-2.5 text-slate-600">${it.size}</td>
              <td class="py-2 px-2.5 text-center font-bold">${it.qty}</td>
              <td class="py-2 px-2.5 text-right font-mono">${formatUSD(it.priceUSD)}</td>
              <td class="py-2 px-2.5 text-right font-bold font-mono text-slate-900">${formatUSD(it.totalUSD)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Calculations Box -->
    <div class="flex justify-end pt-2 border-t border-slate-300">
      <div class="w-72 space-y-1.5 text-xs">
        <div class="flex justify-between text-slate-600">
          <span>តម្លៃសរុបដើម (${totalUnits} ផ្ទាំង)៖</span>
          <span class="font-mono font-bold">${formatUSD(rawUSD)}</span>
        </div>
        ${bulk.percent > 0 ? `
          <div class="flex justify-between text-emerald-700 font-bold">
            <span>បញ្ចុះតម្លៃដុំសាលា (${bulk.percent}%)៖</span>
            <span class="font-mono">-${formatUSD(bulk.discountUSD)}</span>
          </div>
        ` : ''}
        <div class="flex justify-between text-slate-600">
          <span>សេវាដឹកជញ្ជូន ២៥ ខេត្ត-ក្រុង៖</span>
          <span class="font-bold text-emerald-700">ឥតគិតថ្លៃ (Free)</span>
        </div>
        <div class="flex justify-between text-slate-900 font-black text-sm pt-2 border-t-2 border-slate-900">
          <span>សរុបចុងក្រោយ (Net Total)៖</span>
          <div class="text-right">
            <span class="font-mono text-sky-700 text-base">${formatUSD(payableUSD)}</span>
            <span class="block text-[11px] text-slate-500 font-normal">(${formatKHR(payableKHR)})</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Signatures & Stamp -->
    <div class="pt-6 grid grid-cols-3 gap-4 text-center text-[11px] text-slate-700 border-t border-slate-200">
      <div>
        <p class="font-bold text-slate-900">អ្នករៀបចំសម្រង់តម្លៃ</p>
        <div class="h-14 flex items-center justify-center">
          <span class="text-xs font-serif italic text-slate-400">EduShop KH</span>
        </div>
        <p class="text-[10px] text-slate-500">គណៈគ្រប់គ្រងផ្នែកលក់</p>
      </div>

      <!-- Center Approval Stamp -->
      <div class="flex flex-col items-center justify-center">
        <div class="w-20 h-20 rounded-full border-4 border-rose-600 flex flex-col items-center justify-center text-rose-600 rotate-[-8deg] shadow-xs select-none">
          <span class="text-[7.5px] font-black uppercase tracking-widest">EDUSHOP KH</span>
          <span class="text-[10px] font-black my-0.5">★ APPROVED ★</span>
          <span class="text-[7.5px] font-bold">QUOTATION</span>
        </div>
        <span class="text-[9px] text-slate-400 mt-1">ត្រាទទួលស្គាល់ផ្លូវការ</span>
      </div>

      <div>
        <p class="font-bold text-slate-900">នាយកសាលា / អ្នកអនុម័ត</p>
        <div class="h-14 flex items-center justify-center">
          <span class="text-xs text-slate-300">..............................</span>
        </div>
        <p class="text-[10px] text-slate-500">ហត្ថលេខា និងត្រាសាលា</p>
      </div>
    </div>
  `;
}

function printProformaInvoice() {
  window.print();
}

function sendProformaInvoiceTelegram() {
  const schoolName = (document.getElementById('quote-school-name')?.value || 'សាលារៀន').trim();
  const directorName = (document.getElementById('quote-director-name')?.value || '').trim();
  const phone = (document.getElementById('quote-phone')?.value || '').trim();

  const msg = `🧾 សំណើសុំសម្រង់តម្លៃផ្លូវការ (Proforma Invoice QUO-2026-0888)\n` +
    `-----------------------------------------\n` +
    `• ស្ថាប័ន/សាលារៀន៖ ${schoolName}\n` +
    `• អ្នកស្នើសុំ៖ ${directorName}\n` +
    `• ទូរស័ព្ទ៖ ${phone}\n` +
    `• ស្ថានភាព៖ សម្រង់តម្លៃសាលា ២៥ ខេត្ត-ក្រុង\n` +
    `-----------------------------------------\n` +
    `សូមមេត្តាពិនិត្យ និងចេញវិក្កយបត្រផ្លូវការជូនខ្ញុំបាទ/នាងខ្ញុំផង! អរគុណ។`;

  window.open(`https://t.me/+855964361201?text=${encodeURIComponent(msg)}`, '_blank');
  showToast('✈️ បានរៀបចំផ្ញើសម្រង់តម្លៃទៅ Telegram!');
}

// ==============================================================================
// 12. VIRTUAL CLASSROOM WALL DECORATOR STUDIO ENGINE
// ==============================================================================
let wallStudioPosters = [];
let currentWallStudioTheme = 'chalkboard';

const WALL_THEME_COLORS = {
  chalkboard: '#064e3b',
  skyblue: '#0284c7',
  cream: '#78350f',
  pastel: '#831843'
};

function openClassroomWallStudioModal() {
  const modal = document.getElementById('classroom-wall-studio-modal');
  if (!modal) return;

  populateWallStudioSelect();

  if (wallStudioPosters.length === 0 && typeof productsData !== 'undefined' && productsData.length > 0) {
    const p1 = productsData.find(p => p.id === 1) || productsData[0];
    const p2 = productsData.find(p => p.id === 2) || productsData[1];
    if (p1) wallStudioPosters.push(p1);
    if (p2) wallStudioPosters.push(p2);
  }

  renderWallStudioPosters();
  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

function closeClassroomWallStudioModal() {
  const modal = document.getElementById('classroom-wall-studio-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function setWallStudioTheme(theme) {
  currentWallStudioTheme = theme;
  const stage = document.getElementById('wall-studio-stage');
  if (stage) {
    stage.style.backgroundColor = WALL_THEME_COLORS[theme] || WALL_THEME_COLORS.chalkboard;
  }

  const btns = document.querySelectorAll('.wall-theme-btn');
  btns.forEach(b => {
    const fn = b.getAttribute('onclick') || '';
    if (fn.includes(`'${theme}'`)) {
      b.className = 'wall-theme-btn px-2.5 py-1 rounded-xl bg-emerald-900/60 border border-emerald-400 text-emerald-200 font-bold text-[11px] cursor-pointer shadow-xs';
    } else {
      b.className = 'wall-theme-btn px-2.5 py-1 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-bold text-[11px] cursor-pointer';
    }
  });
}

function populateWallStudioSelect() {
  const sel = document.getElementById('wall-studio-add-select');
  if (!sel || typeof productsData === 'undefined') return;

  const opts = productsData.map(p => `
    <option value="${p.id}">${p.name} (${formatUSD(p.priceUSD)})</option>
  `).join('');

  sel.innerHTML = `<option value="">+ ជ្រើសរើសផ្ទាំងបិទលើជញ្ជាំង...</option>` + opts;
}

function addPosterToWallStudio(productId) {
  if (!productId) return;
  const prod = productsData.find(p => p.id === parseInt(productId));
  if (!prod) return;

  if (wallStudioPosters.length >= 6) {
    showToast('⚠️ ជញ្ជាំងថ្នាក់អាចដាក់ផ្ទាំងបានអតិបរមា ៦ ផ្ទាំង!', 'amber');
    return;
  }

  wallStudioPosters.push(prod);
  renderWallStudioPosters();
  showToast(`🎉 បានបន្ថែម «${prod.name}» លើជញ្ជាំង!`);
}

function removePosterFromWallStudio(index) {
  if (index >= 0 && index < wallStudioPosters.length) {
    wallStudioPosters.splice(index, 1);
    renderWallStudioPosters();
  }
}

function clearWallStudio() {
  wallStudioPosters = [];
  renderWallStudioPosters();
  showToast('🗑️ បានសម្អាតជញ្ជាំងថ្នាក់រៀនរួចរាល់');
}

function renderWallStudioPosters() {
  const container = document.getElementById('wall-studio-posters-container');
  const countEl = document.getElementById('wall-studio-count');
  const usdEl = document.getElementById('wall-studio-total-usd');
  const khrEl = document.getElementById('wall-studio-total-khr');

  if (!container) return;

  const totalUSD = wallStudioPosters.reduce((s, p) => s + (p.priceUSD || 0), 0);
  const totalKHR = wallStudioPosters.reduce((s, p) => s + (p.priceKHR || 0), 0);

  if (countEl) countEl.textContent = wallStudioPosters.length;
  if (usdEl) usdEl.textContent = formatUSD(totalUSD);
  if (khrEl) khrEl.textContent = `(${formatKHR(totalKHR)})`;

  if (wallStudioPosters.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-slate-400 space-y-2 select-none">
        <span class="text-5xl block animate-bounce-soft">🖼️</span>
        <p class="font-bold text-sm text-slate-200">ជញ្ជាំងថ្នាក់រៀនទំនេរ</p>
        <p class="text-xs text-slate-400">សូមជ្រើសរើសផ្ទាំងរូបភាពពីបញ្ជីខាងលើដើម្បីសាកល្បងរៀបចំ</p>
      </div>
    `;
    return;
  }

  container.innerHTML = wallStudioPosters.map((p, idx) => {
    const imgHtml = p.imageUrl
      ? `<img src="${p.imageUrl}" alt="${p.name}" class="w-full h-28 sm:h-36 object-cover rounded-lg border-2 border-white/60 shadow-xl">`
      : `<div class="w-full h-28 sm:h-36 rounded-lg bg-gradient-to-br ${p.iconBg || 'from-sky-400 to-indigo-600'} flex items-center justify-center text-4xl text-white border-2 border-white/60 shadow-xl">${p.iconEmoji || '📦'}</div>`;

    return `
      <div class="relative group w-28 sm:w-36 flex flex-col items-center bg-black/40 backdrop-blur-xs p-2 rounded-xl border border-white/20 shadow-2xl transition transform hover:scale-105">
        <button type="button" onclick="removePosterFromWallStudio(${idx})" title="ដកចេញ" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-xs flex items-center justify-center shadow-md cursor-pointer z-10">✕</button>
        ${imgHtml}
        <div class="w-full text-center mt-1.5 space-y-0.5">
          <p class="text-[10px] sm:text-[11px] font-bold text-white truncate">${p.name}</p>
          <span class="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 font-mono">${formatUSD(p.priceUSD)}</span>
        </div>
      </div>
    `;
  }).join('');
}

function orderAllWallStudioPosters() {
  if (wallStudioPosters.length === 0) {
    showToast('⚠️ សូមបន្ថែមផ្ទាំងរូបភាពលើជញ្ជាំងជាមុនសិន!', 'amber');
    return;
  }

  wallStudioPosters.forEach(prod => {
    const existing = cart.find(i => i.product.id === prod.id && i.product.name === prod.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ product: { ...prod }, quantity: 1 });
    }
  });

  closeClassroomWallStudioModal();
  saveCart();
  renderCartDrawer();
  toggleCart(true);
  showToast(`🎉 បានដាក់ផ្ទាំងទាំង ${wallStudioPosters.length} ចូលកន្ត្រកជោគជ័យ!`);
}

// ==============================================================================
// 13. PRINTABLE KHMER HANDWRITING & TRACING WORKSHEET ENGINE
// ==============================================================================
const TRACING_LESSONS_DATA = {
  consonants1: { title: 'ព្យញ្ជនៈ វគ្គទី ១ (ក ខ គ ឃ ង)', chars: ['ក', 'ខ', 'គ', 'ឃ', 'ង'] },
  consonants2: { title: 'ព្យញ្ជនៈ វគ្គទី ២ (ច ឆ ជ ឈ ញ)', chars: ['ច', 'ឆ', 'ជ', 'ឈ', 'ញ'] },
  consonants3: { title: 'ព្យញ្ជនៈ វគ្គទី ៣ (ដ ឋ ឌ ឍ ណ)', chars: ['ដ', 'ឋ', 'ឌ', 'ឍ', 'ណ'] },
  consonants4: { title: 'ព្យញ្ជនៈ វគ្គទី ៤ (ត ថ ទ ធ ន)', chars: ['ត', 'ថ', 'ទ', 'ធ', 'ន'] },
  consonants5: { title: 'ព្យញ្ជនៈ វគ្គទី ៥ (ប ផ ព ភ ម)', chars: ['ប', 'ផ', 'ព', 'ភ', 'ម'] },
  consonants6: { title: 'ព្យញ្ជនៈ សេសសល់ (យ រ ល វ ស ហ ឡ អ)', chars: ['យ', 'រ', 'ល', 'វ', 'ស', 'ហ'] },
  vowels: { title: 'ស្រៈនិស្ស័យខ្មែរ (ា ិ ី ឹ ឺ ុ ូ ួ)', chars: ['ា', 'ិ', 'ី', 'ឹ', 'ឺ', 'ុ'] },
  numbers: { title: 'លេខខ្មែរ (១ ២ ៣ ៤ ៥ ៦ ៧ ៨ ៩ ១០)', chars: ['១', '២', '៣', '៤', '៥', '៦'] },
  words: { title: 'ពាក្យសាមញ្ញ (កូន, ម៉ែ, ឪ, សាលា)', chars: ['កូន', 'ម៉ែ', 'ឪ', 'សាលា'] }
};

function openTracingWorksheetModal() {
  const modal = document.getElementById('tracing-worksheet-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
  setTimeout(() => {
    renderTracingWorksheetCanvas();
  }, 60);
}

function closeTracingWorksheetModal() {
  const modal = document.getElementById('tracing-worksheet-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function renderTracingWorksheetCanvas() {
  const canvas = document.getElementById('tracing-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const lessonType = document.getElementById('tracing-lesson-type')?.value || 'consonants1';
  const schoolName = (document.getElementById('tracing-school-name')?.value || 'សាលាបឋមសិក្សា វត្តបូព៌').trim();
  const grade = (document.getElementById('tracing-grade')?.value || 'ថ្នាក់ទី ១ក').trim();
  const lineStyle = document.getElementById('tracing-line-style')?.value || 'dotted';

  const lesson = TRACING_LESSONS_DATA[lessonType] || TRACING_LESSONS_DATA.consonants1;
  const w = canvas.width;
  const h = canvas.height;

  // Background A4
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);

  // Outer Decorative Border
  ctx.strokeStyle = '#6366f1';
  ctx.lineWidth = 4;
  ctx.strokeRect(30, 30, w - 60, h - 60);
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1;
  ctx.strokeRect(38, 38, w - 76, h - 76);

  // Header
  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 24px "Kantumruy Pro", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(schoolName, 60, 80);

  ctx.textAlign = 'right';
  ctx.fillText(grade, w - 60, 80);

  // Student Info Line
  ctx.fillStyle = '#475569';
  ctx.font = '16px "Kantumruy Pro", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('ឈ្មោះសិស្ស៖ .................................................................', 60, 120);
  ctx.textAlign = 'right';
  ctx.fillText('កាលបរិច្ឆេទ៖ ...... / ...... / ២០២...', w - 60, 120);

  // Lesson Title Banner
  ctx.fillStyle = '#f5f3ff';
  ctx.fillRect(60, 145, w - 120, 50);
  ctx.strokeStyle = '#c4b5fd';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(60, 145, w - 120, 50);

  ctx.fillStyle = '#4f46e5';
  ctx.font = 'bold 22px "Kantumruy Pro", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`✍️ សន្លឹកហាត់សរសេរ៖ ${lesson.title}`, w / 2, 178);

  // 5-Line Calligraphy Grid Rows
  const startY = 230;
  const rowHeight = 220;
  const rows = Math.min(5, lesson.chars.length);

  for (let r = 0; r < rows; r++) {
    const char = lesson.chars[r] || 'ក';
    const y = startY + r * rowHeight;

    // Row Title / Guide Box on left
    ctx.fillStyle = '#eef2ff';
    ctx.fillRect(60, y, 110, 140);
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2;
    ctx.strokeRect(60, y, 110, 140);

    ctx.fillStyle = '#1e1b4b';
    ctx.font = 'bold 64px "Kantumruy Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(char, 115, y + 95);

    // Calligraphy Grid 5-Lines
    const gridX = 190;
    const gridW = w - 250;
    const lineSpacing = 28;

    for (let l = 0; l < 5; l++) {
      const lineY = y + 15 + l * lineSpacing;
      ctx.beginPath();
      ctx.moveTo(gridX, lineY);
      ctx.lineTo(gridX + gridW, lineY);

      if (l === 2) {
        // Base baseline
        ctx.strokeStyle = '#4f46e5';
        ctx.lineWidth = 2;
        ctx.setLineDash([]);
      } else {
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;
        ctx.setLineDash(l === 1 || l === 3 ? [4, 4] : []);
      }
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Tracing repeated characters across the line
    const repeatCount = 5;
    const stepX = gridW / repeatCount;

    for (let c = 0; c < repeatCount; c++) {
      const charX = gridX + c * stepX + stepX / 2;
      const charY = y + 90;

      if (lineStyle === 'dotted') {
        ctx.fillStyle = '#94a3b8';
        ctx.font = 'bold 58px "Kantumruy Pro", sans-serif';
      } else {
        ctx.fillStyle = '#cbd5e1';
        ctx.font = 'bold 58px "Kantumruy Pro", sans-serif';
      }
      ctx.textAlign = 'center';
      ctx.fillText(char, charX, charY);
    }
  }

  // Footer Watermark
  ctx.fillStyle = '#64748b';
  ctx.font = '13px "Kantumruy Pro", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('🏫 EduShop Cambodia • សម្ភារៈបង្រៀន & តុបតែងថ្នាក់រៀនខ្មែរ • 👑 ម្ចាស់ហាង: 031 97 11 333 • Telegram: 096 436 1201', w / 2, h - 50);
}

function downloadTracingWorksheetPng() {
  const canvas = document.getElementById('tracing-canvas');
  if (!canvas) return;
  const lessonType = document.getElementById('tracing-lesson-type')?.value || 'worksheet';
  const link = document.createElement('a');
  link.download = `សន្លឹកហាត់សរសេរខ្មែរ_${lessonType}_A4.png`;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(`🎉 បានទាញយកសន្លឹកហាត់សរសេរ A4 HD ដោយជោគជ័យ!`);
}

function orderTracingPrintPack() {
  const lessonType = document.getElementById('tracing-lesson-type')?.value || 'consonants1';
  const lesson = TRACING_LESSONS_DATA[lessonType] || TRACING_LESSONS_DATA.consonants1;

  const packProduct = {
    id: 9905,
    name: `សន្លឹកកិច្ចការហាត់សរសេរខ្មែរ (ឈុត ៥០ សន្លឹក ក្រដាសរឹង 80g) - ${lesson.title}`,
    category: 'teaching',
    categoryLabel: 'សន្លឹកកិច្ចការ',
    size: 'A4 Sheet (50 Pages Pack)',
    priceUSD: 1.50,
    priceKHR: 6000,
    material: 'ក្រដាសសស្អាត 80g បោះពុម្ពច្បាស់ល្អ',
    iconEmoji: '✍️',
    iconBg: 'from-violet-500 to-purple-600',
    inStock: true
  };

  const existing = cart.find(i => i.product.id === packProduct.id && i.product.name === packProduct.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product: packProduct, quantity: 1 });
  }

  closeTracingWorksheetModal();
  saveCart();
  renderCartDrawer();
  toggleCart(true);
  showToast('🎉 បានដាក់ «ឈុតសន្លឹកកិច្ចការ ៥០ សន្លឹក ($1.50)» ចូលកន្ត្រក!');
}

// ==============================================================================
// 14. CURRICULUM VALUE BUNDLES ENGINE
// ==============================================================================
const CURRICULUM_BUNDLES_DATA = [
  {
    id: 'bundle-kindergarten',
    title: '🎒 កញ្ចប់មត្តេយ្យសិក្សាពេញលេញ (Kindergarten Master Pack)',
    badge: 'ពេញនិយមបំផុត ★',
    itemsCount: 8,
    rawUSD: 19.00,
    priceUSD: 15.20,
    priceKHR: 60800,
    savingsUSD: 3.80,
    icon: '🧸',
    bg: 'from-amber-500 to-orange-600',
    items: [
      'ផ្ទាំងព្យញ្ជនៈខ្មែរ ៣៣ តួ (ក ខ គ...)',
      'ផ្ទាំងស្រៈនិស្ស័យ ២៣ តួ',
      'ផ្ទាំងរូបសត្វគួរឱ្យស្រឡាញ់ & ឈ្មោះខ្មែរ',
      'ផ្ទាំងពណ៌ចម្រុះ & រាងធរណីមាត្រ',
      'ផ្ទាំងលេខខ្មែរ & អារ៉ាប់ ១ ដល់ ១០',
      'ផ្ទាំងច្បាប់វិន័យមត្តេយ្យសប្បាយៗ',
      'ផ្ទាំងដើមឈើអំណាន & សៀវភៅ',
      'បដាស្វាគមន៍ឆ្នាំសិក្សាថ្មី'
    ]
  },
  {
    id: 'bundle-primary12',
    title: '📖 កញ្ចប់បឋមសិក្សាថ្នាក់ទី១-២ (Primary Gr 1-2 Starter)',
    badge: 'កម្មវិធីសិក្សាជាតិ 🇰🇭',
    itemsCount: 6,
    rawUSD: 16.00,
    priceUSD: 12.80,
    priceKHR: 51200,
    savingsUSD: 3.20,
    icon: '✏️',
    bg: 'from-sky-500 to-indigo-600',
    items: [
      'ផ្ទាំងតួអក្សរ & របៀបផ្សំប្រកបខ្មែរ',
      'ផ្ទាំងតារាងមេលេខនព្វន្ត ១ ដល់ ១០',
      'ផ្ទាំងដើមឈើអំណាន & កម្រងពាក្យ',
      'ផ្ទាំងច្បាប់វិន័យ & កាលវិភាគថ្នាក់',
      'ផ្ទាំងនាឡិកា & ម៉ោងសិក្សា',
      'ផ្ទាំងផែនទីព្រះរាជាណាចក្រកម្ពុជា'
    ]
  },
  {
    id: 'bundle-stem',
    title: '🔬 កញ្ចប់បន្ទប់វិទ្យាសាស្ត្រ & STEM (STEM Lab Explorer)',
    badge: 'ពិសោធន៍ & ចំណេះដឹង 💡',
    itemsCount: 5,
    rawUSD: 18.00,
    priceUSD: 14.40,
    priceKHR: 57600,
    savingsUSD: 3.60,
    icon: '🔬',
    bg: 'from-emerald-500 to-teal-600',
    items: [
      'ផ្ទាំងប្រព័ន្ធសរីរាង្គមនុស្ស & សុខភាព',
      'ផ្ទាំងប្រព័ន្ធព្រះអាទិត្យ & ភពទាំង ៨',
      'ផ្ទាំងតារាងខួបធាតុគីមីទំនើប',
      'ផ្ទាំងវដ្តជីវិតសត្វ & រុក្ខជាតិ',
      'ផ្ទាំងភូមិសាស្ត្រ & បរិស្ថានធម្មជាតិ'
    ]
  },
  {
    id: 'bundle-library',
    title: '📚 កញ្ចប់បណ្ណាល័យ & ជ្រុងអំណាន (Reading Corner & Library)',
    badge: 'លើកកម្ពស់ការអាន 📖',
    itemsCount: 4,
    rawUSD: 15.00,
    priceUSD: 12.00,
    priceKHR: 48000,
    savingsUSD: 3.00,
    icon: '🌳',
    bg: 'from-violet-500 to-purple-600',
    items: [
      'ផ្ទាំងដើមឈើអំណានទំហំធំ (80x100cm)',
      'ផ្ទាំងវិធីថែរក្សា & ស្រឡាញ់សៀវភៅ',
      'ផ្ទាំងសុភាសិតខ្មែរអប់រំចិត្ត',
      'ផ្ទាំងគុណតម្លៃនៃការអាន & ចំណេះដឹង'
    ]
  }
];

function openCurriculumBundlesModal() {
  const modal = document.getElementById('curriculum-bundles-modal');
  if (!modal) return;
  renderCurriculumBundlesGrid();
  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

function closeCurriculumBundlesModal() {
  const modal = document.getElementById('curriculum-bundles-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function renderCurriculumBundlesGrid() {
  const container = document.getElementById('curriculum-bundles-grid');
  if (!container) return;

  container.innerHTML = CURRICULUM_BUNDLES_DATA.map(b => `
    <div class="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:border-amber-400/40 transition">
      <div class="space-y-3">
        <div class="flex items-start justify-between gap-2">
          <div class="flex items-center gap-2.5">
            <div class="w-11 h-11 rounded-xl bg-gradient-to-br ${b.bg} text-white flex items-center justify-center text-2xl shadow-md">
              <span>${b.icon}</span>
            </div>
            <div>
              <h4 class="font-bold text-white text-xs sm:text-sm">${b.title}</h4>
              <span class="text-[10px] text-amber-300 font-semibold">${b.itemsCount} ផ្ទាំងរូបភាពពេញលេញ</span>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 whitespace-nowrap">${b.badge}</span>
        </div>

        <div class="p-3 bg-slate-900 rounded-xl space-y-1 text-[11px] text-slate-300">
          <p class="font-bold text-slate-400 text-[10px] uppercase">ទំនិញរួមបញ្ចូលក្នុងកញ្ចប់៖</p>
          <ul class="space-y-0.5 list-disc list-inside">
            ${b.items.map(it => `<li class="truncate">${it}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="pt-2 border-t border-slate-800 flex items-center justify-between">
        <div>
          <div class="flex items-center gap-1.5">
            <span class="line-through text-slate-500 font-mono text-xs">${formatUSD(b.rawUSD)}</span>
            <span class="font-black text-amber-400 font-display text-base sm:text-lg">${formatUSD(b.priceUSD)}</span>
          </div>
          <span class="text-[10px] text-emerald-400 font-bold">ចំណេញ ${formatUSD(b.savingsUSD)} (-20%)</span>
        </div>

        <button type="button" onclick="addBundleToCart('${b.id}')" class="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer">
          <span>🛒</span> <span>កុម្ម៉ង់កញ្ចប់នេះ</span>
        </button>
      </div>
    </div>
  `).join('');
}

function addBundleToCart(bundleId) {
  const b = CURRICULUM_BUNDLES_DATA.find(x => x.id === bundleId);
  if (!b) return;

  const bundleProduct = {
    id: 9950 + CURRICULUM_BUNDLES_DATA.indexOf(b),
    name: b.title,
    category: 'bundle',
    categoryLabel: 'ឈុតកញ្ចប់សាលា',
    size: `កញ្ចប់ធំ ${b.itemsCount} ផ្ទាំង (បញ្ចុះ ២០%)`,
    priceUSD: b.priceUSD,
    priceKHR: b.priceKHR,
    material: 'PP Synthetic Paper មិនជ្រាបទឹក ១០០%',
    iconEmoji: b.icon,
    iconBg: b.bg,
    inStock: true
  };

  const existing = cart.find(i => i.product.id === bundleProduct.id && i.product.name === bundleProduct.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product: bundleProduct, quantity: 1 });
  }

  closeCurriculumBundlesModal();
  saveCart();
  renderCartDrawer();
  toggleCart(true);
  showToast(`🎉 បានដាក់ «${b.title}» ចូលកន្ត្រកជោគជ័យ!`);
}

// ==============================================================================
// 15. CUSTOMER LIVE ORDER & COURIER TRACKER ENGINE
// ==============================================================================
function openCustomerOrderTrackerModal() {
  const modal = document.getElementById('customer-order-tracker-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
  renderDemoOrderTracker('#ORD-2026-0888');
}

function closeCustomerOrderTrackerModal() {
  const modal = document.getElementById('customer-order-tracker-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function trackCustomerOrder() {
  const q = (document.getElementById('customer-tracker-query')?.value || '').trim();
  renderDemoOrderTracker(q || '#ORD-2026-0888');
}

function renderDemoOrderTracker(query) {
  const box = document.getElementById('customer-tracker-results');
  if (!box) return;

  const steps = [
    { num: 1, title: 'បានទទួលការកុម្ម៉ង់', desc: 'ប្រព័ន្ធបានចុះបញ្ជី និងផ្ទៀងផ្ទាត់ការទូទាត់រួចរាល់', done: true, time: 'ម៉ោង 09:30 ព្រឹក' },
    { num: 2, title: 'បោះពុម្ព & អ៊ុតស្វិតការពារទឹក', desc: 'កំពុងដំណើរការម៉ាស៊ីនបោះពុម្ពគុណភាព HD និងអ៊ុតស្វិត', done: true, time: 'ម៉ោង 11:15 ព្រឹក' },
    { num: 3, title: 'វេចខ្ចប់ក្នុងបំពង់រឹងការពារ', desc: 'ផ្ទាំងរូបភាពត្រូវបានរុំ និងច្រកចូលបំពង់ក្រាស់ការពារបាក់បែក', done: true, time: 'ម៉ោង 02:00 រសៀល' },
    { num: 4, title: 'ប្រគល់ជូនក្រុមហ៊ុនដឹកជញ្ជូន', desc: 'បានប្រគល់ជូនវិរៈប៊ុនថាំ (VET Express) សាខាភ្នំពេញ', done: true, current: true, time: 'ម៉ោង 04:30 រសៀល' },
    { num: 5, title: 'ដល់ដៃសាលារៀន', desc: 'អ្នកដឹកជញ្ជូននឹងទាក់ទងលេខទូរស័ព្ទលោកគ្រូ-អ្នកគ្រូ', done: false, time: 'រំពឹងទុក៖ ព្រឹកស្អែក 09:00' }
  ];

  box.innerHTML = `
    <!-- Order Summary Card -->
    <div class="p-3.5 bg-slate-950 border border-sky-500/40 rounded-2xl space-y-2">
      <div class="flex items-center justify-between">
        <span class="font-mono font-bold text-sky-400">${query.startsWith('#') ? query : '#' + query}</span>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">កំពុងដឹកជញ្ជូន 🚚</span>
      </div>
      <div class="grid grid-cols-2 gap-2 text-[11px] text-slate-300 pt-1 border-t border-slate-800">
        <div>
          <span class="text-slate-500">អ្នកទទួល៖</span> <strong>អ្នកគ្រូ សុភាព</strong>
        </div>
        <div>
          <span class="text-slate-500">សាលារៀន៖</span> <strong>សាលាបឋមសិក្សា វត្តបូព៌</strong>
        </div>
        <div>
          <span class="text-slate-500">ក្រុមហ៊ុនដឹក៖</span> <strong class="text-emerald-400">វិរៈប៊ុនថាំ (VET)</strong>
        </div>
        <div>
          <span class="text-slate-500">លេខកូដបញ្ញើ៖</span> <strong class="font-mono text-cyan-300">VET-8839210</strong>
        </div>
      </div>
    </div>

    <!-- Steps Timeline -->
    <div class="p-3 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-3">
      <h5 class="font-bold text-slate-300 text-xs">ដំណាក់កាលដំណើរការនៃការកុម្ម៉ង់៖</h5>
      <div class="space-y-2.5">
        ${steps.map(s => `
          <div class="flex items-start gap-2.5">
            <div class="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
              s.done ? (s.current ? 'bg-sky-500 text-white ring-4 ring-sky-500/20 animate-pulse' : 'bg-emerald-600 text-white') : 'bg-slate-800 text-slate-500'
            }">
              ${s.done && !s.current ? '✓' : s.num}
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <span class="font-bold ${s.current ? 'text-sky-300' : (s.done ? 'text-white' : 'text-slate-500')}">${s.title}</span>
                <span class="text-[10px] text-slate-500 font-mono">${s.time}</span>
              </div>
              <p class="text-[10.5px] text-slate-400">${s.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ==============================================================================
// 16. TEACHER LOYALTY & EDUSPOINTS REWARDS ENGINE
// ==============================================================================
const TEACHER_LOYALTY_KEY = 'edushop_teacher_points';

function getStoredTeacherPoints() {
  const p = localStorage.getItem(TEACHER_LOYALTY_KEY);
  return p ? parseInt(p) : 150; // Demo starting bonus points
}

function openTeacherLoyaltyModal() {
  const modal = document.getElementById('teacher-loyalty-modal');
  if (!modal) return;
  renderTeacherLoyaltyHub();
  modal.classList.remove('hidden');
  updateBodyScrollLock();
}

function closeTeacherLoyaltyModal() {
  const modal = document.getElementById('teacher-loyalty-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function renderTeacherLoyaltyHub() {
  const container = document.getElementById('teacher-loyalty-container');
  if (!container) return;

  const points = getStoredTeacherPoints();
  const tier = points >= 300 ? '🥇 គ្រូកិត្តិយស (Gold VIP)' : (points >= 100 ? '🥈 គ្រូសកម្ម (Silver)' : '🥉 គ្រូថ្មី (Bronze)');

  container.innerHTML = `
    <!-- Points Card -->
    <div class="p-4 bg-gradient-to-r from-rose-950 via-slate-950 to-pink-950 border border-rose-500/40 rounded-2xl space-y-2.5">
      <div class="flex items-center justify-between">
        <div>
          <span class="text-slate-400 text-xs">ពិន្ទុសន្សំបច្ចុប្បន្ន</span>
          <h3 class="text-2xl sm:text-3xl font-black text-rose-400 font-display">${points} <span class="text-xs text-rose-300">ពិន្ទុ</span></h3>
        </div>
        <div class="text-right">
          <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-400/30">${tier}</span>
        </div>
      </div>
      <div class="pt-2 border-t border-slate-800 text-[11px] text-slate-300 flex justify-between">
        <span>💡 រាល់ \$1.00 នៃការកុម្ម៉ង់ ទទួលបាន 10 ពិន្ទុ</span>
        <span class="text-amber-300 font-semibold">សន្សំ 150 ពិន្ទុទៀតឡើង Gold VIP!</span>
      </div>
    </div>

    <!-- Rewards List -->
    <div class="space-y-2.5">
      <h5 class="font-bold text-slate-300 text-xs">🎁 រង្វាន់ដែលអាចប្តូរយកបាន៖</h5>

      <div class="p-3 bg-slate-950/70 border border-slate-800 rounded-xl flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="text-2xl">🎟️</span>
          <div>
            <strong class="text-white block">គូប៉ុងបញ្ចុះតម្លៃ $1.00 (4,000 ៛)</strong>
            <span class="text-[11px] text-slate-400">ប្រើ 50 ពិន្ទុ</span>
          </div>
        </div>
        <button type="button" onclick="redeemTeacherPointsReward('COUPON_1', 50)" class="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs cursor-pointer active:scale-95 shadow">
          ប្តូរយក
        </button>
      </div>

      <div class="p-3 bg-slate-950/70 border border-slate-800 rounded-xl flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="text-2xl">🎟️</span>
          <div>
            <strong class="text-white block">គូប៉ុងបញ្ចុះតម្លៃ $2.50 (10,000 ៛)</strong>
            <span class="text-[11px] text-slate-400">ប្រើ 100 ពិន្ទុ</span>
          </div>
        </div>
        <button type="button" onclick="redeemTeacherPointsReward('COUPON_2_5', 100)" class="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs cursor-pointer active:scale-95 shadow">
          ប្តូរយក
        </button>
      </div>

      <div class="p-3 bg-slate-950/70 border border-slate-800 rounded-xl flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="text-2xl">🚚</span>
          <div>
            <strong class="text-white block">ឥតគិតថ្លៃសេវាដឹកជញ្ជូនដល់សាលា</strong>
            <span class="text-[11px] text-slate-400">ប្រើ 80 ពិន្ទុ</span>
          </div>
        </div>
        <button type="button" onclick="redeemTeacherPointsReward('FREE_SHIP', 80)" class="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs cursor-pointer active:scale-95 shadow">
          ប្តូរយក
        </button>
      </div>
    </div>
  `;
}

function redeemTeacherPointsReward(rewardKey, cost) {
  let points = getStoredTeacherPoints();
  if (points < cost) {
    showToast('⚠️ អ្នកមិនមានពិន្ទុគ្រប់គ្រាន់ទេ!', 'amber');
    return;
  }

  points -= cost;
  localStorage.setItem(TEACHER_LOYALTY_KEY, points.toString());

  if (rewardKey === 'COUPON_1') {
    const cp = { code: 'EDUPTS1', type: 'fixed', valueUSD: 1.00, valueKHR: 4000, label: 'EduPoints $1.00' };
    appliedCoupon = cp;
  } else if (rewardKey === 'COUPON_2_5') {
    const cp = { code: 'EDUPTS25', type: 'fixed', valueUSD: 2.50, valueKHR: 10000, label: 'EduPoints $2.50' };
    appliedCoupon = cp;
  } else if (rewardKey === 'FREE_SHIP') {
    const cp = { code: 'FREESHIP', type: 'fixed', valueUSD: 1.50, valueKHR: 6000, label: 'EduPoints Free Shipping' };
    appliedCoupon = cp;
  }

  renderTeacherLoyaltyHub();
  showToast(`🎉 បានប្តូរយករង្វាន់ជោគជ័យ! អ្នកនៅសល់ ${points} ពិន្ទុ។`);
}

// ==============================================================================
// 16. CUSTOM POSTER UPLOAD & DESIGN STUDIO ENGINE
// ==============================================================================
let customPosterUploadedImg = null;

function openCustomPosterModal() {
  const modal = document.getElementById('custom-poster-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
  calculateCustomPosterPrice();
}

function closeCustomPosterModal() {
  const modal = document.getElementById('custom-poster-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function handleCustomPosterUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    showToast('⚠️ សូមជ្រើសរើសឯកសាររូបភាព (JPG, PNG, WebP)!', 'rose');
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e) {
    customPosterUploadedImg = e.target.result;
    const previewImg = document.getElementById('custom-poster-preview-img');
    if (previewImg) {
      previewImg.src = customPosterUploadedImg;
    }
    showToast('✓ បានផ្ទុករូបភាពឡើងដោយជោគជ័យ!', 'emerald');
  };
  reader.readAsDataURL(file);
}

function calculateCustomPosterPrice() {
  const sizeSelect = document.getElementById('custom-poster-size');
  const frameSelect = document.getElementById('custom-poster-frame');
  const materialSelect = document.getElementById('custom-poster-material');
  const qtyInput = document.getElementById('custom-poster-qty');

  const sizeKey = sizeSelect ? sizeSelect.value : '60x80';
  const frameKey = frameSelect ? frameSelect.value : 'none';
  const matKey = materialSelect ? materialSelect.value : 'pp-laminated';
  const qty = Math.max(1, parseInt(qtyInput ? qtyInput.value : 1, 10) || 1);

  // Size base prices
  let baseUSD = 2.50;
  if (sizeKey === '40x60') baseUSD = 1.25;
  else if (sizeKey === '50x70') baseUSD = 1.75;
  else if (sizeKey === '60x80') baseUSD = 2.50;
  else if (sizeKey === '80x120') baseUSD = 4.50;
  else if (sizeKey === '100x150') baseUSD = 7.50;

  // Frame surcharge
  let frameUSD = 0;
  if (frameKey === 'gold') frameUSD = 1.25;
  else if (frameKey !== 'none') frameUSD = 1.00;

  // Material surcharge
  let matUSD = 0;
  if (matKey === 'decal-sticker') matUSD = 0.50;
  else if (matKey === 'canvas-fabric') matUSD = 1.50;

  const unitUSD = parseFloat((baseUSD + frameUSD + matUSD).toFixed(2));
  const unitKHR = Math.round(unitUSD * 4000);

  const totalUSD = parseFloat((unitUSD * qty).toFixed(2));
  const totalKHR = Math.round(totalUSD * 4000);

  const elUnitPrice = document.getElementById('custom-poster-unit-price');
  const elTotalUSD = document.getElementById('custom-poster-total-usd');
  const elTotalKHR = document.getElementById('custom-poster-total-khr');

  if (elUnitPrice) elUnitPrice.textContent = formatUSD(unitUSD);
  if (elTotalUSD) elTotalUSD.textContent = formatUSD(totalUSD);
  if (elTotalKHR) elTotalKHR.textContent = `≈ ${formatKHR(totalKHR)}`;

  return { unitUSD, unitKHR, totalUSD, totalKHR, qty, sizeKey, frameKey, matKey };
}

function addCustomPosterToCart(isBuyNow = false) {
  const title = (document.getElementById('custom-poster-title')?.value || 'រូបភាពឌីហ្សាញផ្ទាល់ខ្លួន').trim();
  const school = (document.getElementById('custom-poster-school')?.value || '').trim();
  const notes = (document.getElementById('custom-poster-notes')?.value || '').trim();
  const pricing = calculateCustomPosterPrice();

  const sizeLabels = {
    '40x60': '40 cm x 60 cm',
    '50x70': '50 cm x 70 cm',
    '60x80': '60 cm x 80 cm',
    '80x120': '80 cm x 120 cm',
    '100x150': '100 cm x 150 cm'
  };

  const matLabels = {
    'pp-laminated': 'ក្រដាសកម្រាស់ 300g អ៊ុតស្វិតការពារទឹក',
    'decal-sticker': 'ស្ទីគ័រ Decal បកបិទជញ្ជាំង',
    'canvas-fabric': 'ក្រណាត់ Canvas កម្រិត HD'
  };

  const sizeStr = sizeLabels[pricing.sizeKey] || '60 cm x 80 cm';
  const matStr = matLabels[pricing.matKey] || 'ក្រដាសកម្រាស់ 300g អ៊ុតស្វិតការពារទឹក';
  const imgUrl = customPosterUploadedImg || 'poster_welcome.jpg';

  const customProduct = {
    id: Date.now(),
    name: `[ឌីហ្សាញផ្ទាល់ខ្លួន] ${title}`,
    category: 'decor',
    categoryLabel: 'រូបភាពកុម្ម៉ង់ផ្ទាល់ខ្លួន',
    size: sizeStr,
    frameColor: pricing.frameKey,
    priceUSD: pricing.unitUSD,
    priceKHR: pricing.unitKHR,
    material: matStr,
    image: imgUrl,
    imageUrl: imgUrl,
    iconEmoji: '🎨',
    iconBg: 'from-rose-500 to-pink-600',
    schoolName: school,
    notes: notes,
    inStock: true
  };

  cart.push({
    product: customProduct,
    quantity: pricing.qty
  });

  saveCart();
  updateCartBadge();
  closeCustomPosterModal();

  if (isBuyNow) {
    openOrderModalForCart();
    showToast(`⚡ បានបន្ថែម «${title}» និងបើកផ្ទាំងបញ្ជាទិញ!`, 'emerald');
  } else {
    showToast(`🛒 បានដាក់ «${title}» (${pricing.qty} ផ្ទាំង) ចូលកន្ត្រករួចរាល់!`, 'emerald');
  }
}

// ==============================================================================
// 17. SPONSOR & DONATE A CLASSROOM BUNDLE ENGINE
// ==============================================================================
let activeSponsorPackageKey = 'classroom';

const SPONSOR_PACKAGES = {
  basic: {
    key: 'basic',
    title: 'ឈុតមូលដ្ឋានបឋម ៥ ផ្ទាំង',
    priceUSD: 15.00,
    priceKHR: 60000,
    itemCount: 5,
    sizeDesc: '40 cm x 60 cm',
    frame: 'none',
    desc: 'ស្វាគមន៍, ព្យញ្ជនៈ, ដើមឈើអំណាន, តារាងលេខ, និងកាលវិភាគ'
  },
  classroom: {
    key: 'classroom',
    title: 'ឈុតពេញថ្នាក់រៀន ១០ ផ្ទាំង',
    priceUSD: 28.00,
    priceKHR: 112000,
    itemCount: 10,
    sizeDesc: '50 cm x 70 cm',
    frame: 'wood',
    desc: 'តុបតែងពេញ ១ បន្ទប់រៀន មានទាំងគំនូរបង្រៀន និងល្បែងសិក្សា'
  },
  school: {
    key: 'school',
    title: 'ឈុតមហាសប្បុរសធម៌ទូទាំងសាលា ២០ ផ្ទាំង',
    priceUSD: 52.00,
    priceKHR: 208000,
    itemCount: 20,
    sizeDesc: '60 cm x 80 cm',
    frame: 'gold',
    desc: 'សម្រាប់បំពាក់គ្រប់ថ្នាក់ និងបណ្ណាល័យសាលាទាំងមូល ហ្វ្រីស៊ុម និងឆ្លាក់ឈ្មោះ'
  }
};

function openSponsorClassroomModal() {
  const modal = document.getElementById('sponsor-classroom-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateBodyScrollLock();
  selectSponsorPackage(activeSponsorPackageKey);
  updateSponsorPlaquePreview();
}

function closeSponsorClassroomModal() {
  const modal = document.getElementById('sponsor-classroom-modal');
  if (modal) modal.classList.add('hidden');
  updateBodyScrollLock();
}

function selectSponsorPackage(pkgKey) {
  activeSponsorPackageKey = pkgKey;
  document.querySelectorAll('.sponsor-pkg-card').forEach(card => {
    const radio = card.querySelector('input[type="radio"]');
    if (radio && radio.value === pkgKey) {
      radio.checked = true;
      card.className = 'sponsor-pkg-card relative flex flex-col justify-between p-3.5 rounded-2xl border-2 border-amber-400 bg-amber-950/25 shadow-lg cursor-pointer transition';
    } else {
      if (radio) radio.checked = false;
      card.className = 'sponsor-pkg-card relative flex flex-col justify-between p-3.5 rounded-2xl border-2 border-slate-700 hover:border-amber-400/60 bg-slate-950/60 cursor-pointer transition';
    }
  });
  updateSponsorPlaquePreview();
}

function updateSponsorPlaquePreview() {
  const donorName = (document.getElementById('sponsor-donor-name')?.value || 'សប្បុរសជន និងអតីតសិស្ស').trim();
  const schoolName = (document.getElementById('sponsor-school-name')?.value || 'សាលាបឋមសិក្សា អង្គរជ័យ').trim();
  const province = document.getElementById('sponsor-province')?.value || 'ខេត្តសៀមរាប';

  const elDonor = document.getElementById('sponsor-plaque-donor');
  const elSchool = document.getElementById('sponsor-plaque-school');
  const elProv = document.getElementById('sponsor-plaque-prov');

  if (elDonor) elDonor.textContent = donorName || 'សប្បុរសជន និងអតីតសិស្ស';
  if (elSchool) elSchool.textContent = schoolName || 'សាលាបឋមសិក្សា';
  if (elProv) elProv.textContent = province.startsWith('ខេត្ត') || province.startsWith('រាជធានី') ? province : `ខេត្ត${province}`;
}

function submitSponsorPackage() {
  const pkg = SPONSOR_PACKAGES[activeSponsorPackageKey] || SPONSOR_PACKAGES.classroom;
  const donor = (document.getElementById('sponsor-donor-name')?.value || 'សប្បុរសជន').trim();
  const school = (document.getElementById('sponsor-school-name')?.value || 'សាលារៀនជនបទ').trim();
  const province = document.getElementById('sponsor-province')?.value || 'សៀមរាប';
  const phone = (document.getElementById('sponsor-receiver-phone')?.value || '').trim();
  const blessing = (document.getElementById('sponsor-blessing-msg')?.value || '').trim();

  const plaqueText = `✨ អំណោយឧបត្ថម្ភពី៖ ${donor} ជូនចំពោះ ${school} (${province})`;

  const sponsorProduct = {
    id: Date.now(),
    name: `[កញ្ចប់ឧបត្ថម្ភសាលា] ${pkg.title} - ${school}`,
    category: 'combo',
    categoryLabel: 'កញ្ចប់សប្បុរសធម៌សាលារៀន',
    size: pkg.sizeDesc,
    frameColor: pkg.frame,
    priceUSD: pkg.priceUSD,
    priceKHR: pkg.priceKHR,
    material: 'ក្រដាសរឹង 300g អ៊ុតស្វិតការពារទឹក ១០០%',
    image: 'poster_welcome.jpg',
    imageUrl: 'poster_welcome.jpg',
    iconEmoji: '🎁',
    iconBg: 'from-amber-400 to-orange-500',
    donorName: donor,
    schoolName: school,
    province: province,
    receiverPhone: phone,
    blessing: blessing,
    customText: plaqueText,
    inStock: true
  };

  cart.push({
    product: sponsorProduct,
    quantity: 1
  });

  saveCart();
  updateCartBadge();
  closeSponsorClassroomModal();

  // Prefill school order fields in order-modal
  const schoolChk = document.getElementById('cust-is-school-order');
  if (schoolChk) {
    schoolChk.checked = true;
    if (typeof toggleSchoolOrderFields === 'function') toggleSchoolOrderFields(true);
  }
  const schoolInput = document.getElementById('cust-school-name');
  if (schoolInput) schoolInput.value = `${school} (${province})`;
  const customTextInput = document.getElementById('cust-custom-text');
  if (customTextInput) customTextInput.value = plaqueText;
  if (phone) {
    const custPhoneInput = document.getElementById('cust-phone');
    if (custPhoneInput && !custPhoneInput.value) custPhoneInput.value = phone;
  }

  openOrderModalForCart();
  showToast(`🎁 បានបន្ថែម «${pkg.title}» ជូន ${school} ជោគជ័យ!`, 'emerald');
}

// Global browser exposures
if (typeof window !== 'undefined') {
  window.openCustomPosterModal = openCustomPosterModal;
  window.closeCustomPosterModal = closeCustomPosterModal;
  window.handleCustomPosterUpload = handleCustomPosterUpload;
  window.calculateCustomPosterPrice = calculateCustomPosterPrice;
  window.addCustomPosterToCart = addCustomPosterToCart;
  window.openSponsorClassroomModal = openSponsorClassroomModal;
  window.closeSponsorClassroomModal = closeSponsorClassroomModal;
  window.selectSponsorPackage = selectSponsorPackage;
  window.updateSponsorPlaquePreview = updateSponsorPlaquePreview;
  window.submitSponsorPackage = submitSponsorPackage;
}









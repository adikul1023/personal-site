(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[899],{899:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>d});r(43);var n=r(475),s=r(551),i=r(446),a=r.n(i),o=r(579);const c=t=>{let{data:e}=t;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},u=[{title:"Nearest Dollar",subtitle:"2015 BVP Hackathon",image:"/images/projects/nearestdollar.jpg",date:"2015-11-20",desc:"Built for a social impact hackathon. NearestDollar connected to your bank accounts, credit cards, or debit cards and rounded up your purchases to donate the balance to the charity of your choice."},{title:"Harvest",subtitle:"Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon",link:"https://devpost.com/software/harvest",image:"/images/projects/harvest.jpg",date:"2015-09-20",desc:"Won ~ $7000 in prizes for an advanced, low cost monitoring solution for crops. Harvest was designed to catch irrigation leaks, overwatering, and nutrient deficiencies at an affordable price for the developing world."},{title:"Space Potato",subtitle:"A kickstarter funded potato powered weather balloon.",link:"http://www.spacepotato.org",image:"/images/projects/spacepotato.jpg",date:"2015-06-28",desc:"Launched a potato battery powered weather balloon with two cameras and gps transponder. Resulting photos were published in a coffee table book. You can email me for a copy."},{title:"Cat Detector",subtitle:"A convolutional neural network to classify cats! (and dogs)",image:"/images/projects/catdetector.jpg",date:"2015-05-15",desc:"Trained a convolutional neural network to classify between ~ 80 cats breeds. Over 60,000 cats were classified before server bills made the project too expensive to continue hosting."}],d=()=>(0,o.jsx)(s.A,{title:"Projects",description:"Learn about Adi Kulkarni's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(n.N_,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((t=>(0,o.jsx)(c,{data:t},t.title)))]})})},446:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",i="minute",a="hour",o="day",c="week",u="month",d="quarter",h="year",l="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},g=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:g,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+g(n,2,"0")+":"+g(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,u),i=r-s<0,a=e.clone().add(n+(i?-1:1),u);return+(-(n+(r-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:o,D:l,h:a,m:i,s:s,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",y={};y[w]=m;var M="$isDayjsObject",D=function(t){return t instanceof k||!(!t||!t[M])},b=function t(e,r,n){var s;if(!e)return w;if("string"==typeof e){var i=e.toLowerCase();y[i]&&(s=i),r&&(y[i]=r,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;y[o]=e,s=o}return!n&&s&&(w=s),s||!n&&w},j=function(t,e){if(D(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new k(r)},S=v;S.l=b,S.i=D,S.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[M]=!0}var g=m.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match($);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return S},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var r=j(t);return this.startOf(e)<=r&&r<=this.endOf(e)},g.isAfter=function(t,e){return j(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<j(t)},g.$g=function(t,e,r){return S.u(t)?this[e]:this.set(r,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var r=this,n=!!S.u(e)||e,d=S.p(t),f=function(t,e){var s=S.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(o)},$=function(t,e){return S.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},p=this.$W,m=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case h:return n?f(1,0):f(31,11);case u:return n?f(1,m):f(0,m+1);case c:var w=this.$locale().weekStart||0,y=(p<w?p+7:p)-w;return f(n?g-y:g+(6-y),m);case o:case l:return $(v+"Hours",0);case a:return $(v+"Minutes",1);case i:return $(v+"Seconds",2);case s:return $(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var r,c=S.p(t),d="set"+(this.$u?"UTC":""),f=(r={},r[o]=d+"Date",r[l]=d+"Date",r[u]=d+"Month",r[h]=d+"FullYear",r[a]=d+"Hours",r[i]=d+"Minutes",r[s]=d+"Seconds",r[n]=d+"Milliseconds",r)[c],$=c===o?this.$D+(e-this.$W):e;if(c===u||c===h){var p=this.clone().set(l,1);p.$d[f]($),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[S.p(t)]()},g.add=function(n,d){var l,f=this;n=Number(n);var $=S.p(d),p=function(t){var e=j(f);return S.w(e.date(e.date()+Math.round(t*n)),f)};if($===u)return this.set(u,this.$M+n);if($===h)return this.set(h,this.$y+n);if($===o)return p(1);if($===c)return p(7);var m=(l={},l[i]=e,l[a]=r,l[s]=t,l)[$]||1,g=this.$d.getTime()+n*m;return S.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),i=this.$H,a=this.$m,o=this.$M,c=r.weekdays,u=r.months,d=r.meridiem,h=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},l=function(t){return S.s(i%12||12,t,"0")},$=d||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return S.s(e.$y,4,"0");case"M":return o+1;case"MM":return S.s(o+1,2,"0");case"MMM":return h(r.monthsShort,o,u,3);case"MMMM":return h(u,o);case"D":return e.$D;case"DD":return S.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(r.weekdaysMin,e.$W,c,2);case"ddd":return h(r.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(i);case"HH":return S.s(i,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(e.$s);case"ss":return S.s(e.$s,2,"0");case"SSS":return S.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,l,f){var $,p=this,m=S.p(l),g=j(n),v=(g.utcOffset()-this.utcOffset())*e,w=this-g,y=function(){return S.m(p,g)};switch(m){case h:$=y()/12;break;case u:$=y();break;case d:$=y()/3;break;case c:$=(w-v)/6048e5;break;case o:$=(w-v)/864e5;break;case a:$=w/r;break;case i:$=w/e;break;case s:$=w/t;break;default:$=w}return f?$:S.a($)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return y[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=b(t,e,!0);return n&&(r.$L=n),r},g.clone=function(){return S.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),x=k.prototype;return j.prototype=x,[["$ms",n],["$s",s],["$m",i],["$H",a],["$W",o],["$M",u],["$y",h],["$D",l]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,k,j),t.$i=!0),j},j.locale=b,j.isDayjs=D,j.unix=function(t){return j(1e3*t)},j.en=y[w],j.Ls=y,j.p={},j}()}}]);
//# sourceMappingURL=899.edb5af0e.chunk.js.map
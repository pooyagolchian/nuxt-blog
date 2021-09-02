__NUXT_JSONP__("/blog/vue-multiple-theme", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm){return {data:[{article:{slug:"vue-multiple-theme",description:"Recently, I develop a customizable npm package for the color mode in Vue.js with CSS variable.",title:"Vue.js multiple theme with css variable",date:"2021-01-17",author:{name:az,bio:aA,img:aB},toc:[{id:aC,depth:aD,text:aE},{id:aF,depth:aD,text:aG}],body:{type:aH,children:[{type:b,tag:aI,props:{id:aC},children:[{type:b,tag:B,props:{href:"#intro",ariaHidden:af,tabIndex:ag},children:[{type:b,tag:c,props:{className:[ah,ai]},children:[]}]},{type:a,value:aE}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"Recently, I develop a customizable npm package for the color mode in Vue.js with CSS variable. this package helps us to manage the theme mode pretty easily.\nIn this article, I describe the functionality of this component.\nYou would download this package at this "},{type:b,tag:B,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fvue-multiple-themes",rel:[U,V,W],target:X},children:[{type:a,value:"URL"}]},{type:a,value:"."}]},{type:a,value:f},{type:b,tag:aI,props:{id:aF},children:[{type:b,tag:B,props:{href:"#how-to-use-vuejs-multiple-theme-component",ariaHidden:af,tabIndex:ag},children:[{type:b,tag:c,props:{className:[ah,ai]},children:[]}]},{type:a,value:aG}]},{type:a,value:f},{type:b,tag:aJ,props:{},children:[{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Install the package with this command "},{type:b,tag:v,props:{},children:[{type:a,value:"npm i vue-multiple-themes"}]},{type:a,value:" OR "},{type:b,tag:v,props:{},children:[{type:a,value:"yarn add vue-multiple-themes"}]}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Import and register component in your desire place"}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Follow the below steps:"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:H,props:{className:[O]},children:[{type:b,tag:P,props:{className:[Q,"language-javascript"]},children:[{type:b,tag:v,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:a,value:aK},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aj}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aj}]},{type:a,value:"themes\n          "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:"defaultTheme"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"'light'\""}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:"themeColorList"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'light'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'dark'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'sepia'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'black'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'coffee'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'rose'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:"\"\n          "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:"changeThemeOff"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"true\""}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ak}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aj}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aj}]},{type:a,value:"themes"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ak}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ak}]},{type:a,value:aK},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w,al]},children:[{type:a,value:"import"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:b,tag:c,props:{className:[d,aP]},children:[{type:a,value:aQ}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w,al]},children:[{type:a,value:"from"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"vue-multiple-themes\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w,al]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w,al]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n  components"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aP]},children:[{type:a,value:aQ}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ak}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:aJ,props:{},children:[{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"You can override the main CSS in component"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:H,props:{className:[O]},children:[{type:b,tag:P,props:{className:[Q,"language-css"]},children:[{type:b,tag:v,props:{},children:[{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"\u003Cstyle lang=\"css\" "},{type:b,tag:c,props:{className:[d,"combinator"]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"pseudo-class"]},children:[{type:a,value:":root"}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:aR}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:"#555555"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:"\"dark\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:aR}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:aS}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:"\"sepia\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:"#d0bc91"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:"#8a6c44"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:"#5f4938"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:"\"black\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:"#000000"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:aS}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:"\"coffee\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:"#394545"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:"#aab1b3"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:"#e9e5e3"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:"\"rose\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:"#2e1a1e"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:"#bcb8ce"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:"#d5ddef"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,am]},children:[{type:a,value:".app-background"}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"background-color"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,am]},children:[{type:a,value:".app-title"}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,am]},children:[{type:a,value:".app-subtitle"}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"padding-top"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"10"}]},{type:b,tag:c,props:{className:[d,aT]},children:[{type:a,value:aU}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,am]},children:[{type:a,value:".change-theme-box"}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"cursor"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:" pointer"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"font-size"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"20"}]},{type:b,tag:c,props:{className:[d,aT]},children:[{type:a,value:aU}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"font-weight"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:" bold"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"\n\u003C\u002Fstyle\u003E\n\n"}]}]}]},{type:a,value:f}]},dir:aV,path:"\u002Farticles\u002Fvue-multiple-theme",extension:aW,createdAt:ao,updatedAt:ao},prev:{slug:"ssh-tunnel",description:aX,title:"Build poor mans VPN with SSH and Bitvise",date:"2020-05-31",author:{name:az,bio:aA,img:aB},toc:[{id:aY,depth:aZ,text:a_},{id:a$,depth:aZ,text:ba}],body:{type:aH,children:[{type:b,tag:u,props:{},children:[{type:a,value:aX}]},{type:a,value:f},{type:b,tag:T,props:{},children:[{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"SSH"}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Software or CLI to tunnel all internet in your device"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:bb,props:{id:aY},children:[{type:b,tag:B,props:{href:"#configure-the-poor-mans-vpn-tunnel-over-ssh-on-macos-linux",ariaHidden:af,tabIndex:ag},children:[{type:b,tag:c,props:{className:[ah,ai]},children:[]}]},{type:a,value:a_}]},{type:a,value:f},{type:b,tag:T,props:{},children:[{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Install and configuration proxychains4 (Next generation) from "},{type:b,tag:B,props:{href:"https:\u002F\u002Fgithub.com\u002Frofl0r\u002Fproxychains-ng",rel:[U,V,W],target:X},children:[{type:a,value:"github"}]}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Befor this configuration, You must be install "},{type:b,tag:v,props:{},children:[{type:a,value:"gcc and make"}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:H,props:{className:[O]},children:[{type:b,tag:P,props:{className:[ap,Q]},children:[{type:b,tag:v,props:{},children:[{type:a,value:" .\u002Fconfigure --prefix"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:a,value:"\u002Fusr --sysconfdir"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:a,value:"\u002Fetc\n  "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:au}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:bc},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:bd}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:au}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"install"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:bc},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:bd}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:au}]},{type:a,value:" install-config "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:"installs proxychains.conf"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:T,props:{},children:[{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Configure proxychanins4 from "},{type:b,tag:v,props:{},children:[{type:a,value:"\u002Fetc\u002Fproxychains.conf"}]}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Comment Socks4 and add Socks5 like blow:"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:H,props:{className:[O]},children:[{type:b,tag:P,props:{className:[ap,Q]},children:[{type:b,tag:v,props:{},children:[{type:a,value:"socks5 "},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:be}]},{type:a,value:bf},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:av}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:T,props:{start:5},children:[{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"You must be ssh to server like below(for Linux and MasOS):"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:H,props:{className:[O]},children:[{type:b,tag:P,props:{className:[ap,Q]},children:[{type:b,tag:v,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:bg}]},{type:a,value:" -f -N -D "},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:av}]},{type:a,value:" admin@server1.example.com\n"}]}]}]},{type:a,value:f},{type:b,tag:T,props:{start:6},children:[{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"You can check the proxy like "},{type:b,tag:v,props:{},children:[{type:a,value:"curl -I twitter.com"}]}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"I'm wrote bash file to connect and disconnect to ssh in the MacOS. "},{type:b,tag:B,props:{href:"https:\u002F\u002Fgist.github.com\u002Fpooyagolchian\u002F520ee77f22836d92b483f3f8827f8767",rel:[U,V,W],target:X},children:[{type:a,value:"Poor Man's vpn bash script"}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:H,props:{className:[O]},children:[{type:b,tag:P,props:{className:[ap,Q]},children:[{type:b,tag:v,props:{},children:[{type:b,tag:c,props:{className:[d,"shebang","important"]},children:[{type:a,value:"#!\u002Fbin\u002Fsh"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ac,h]},children:[{type:a,value:"NET_SERVICE"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Wi-Fi\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ac,h]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:av}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ac,h]},children:[{type:a,value:"SERVER"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:a,value:"admin@server1.example.com\n"},{type:b,tag:c,props:{className:[d,ac,h]},children:[{type:a,value:bh}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aq}]},{type:a,value:bi},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aq}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:bj}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:as},{type:b,tag:c,props:{className:[d,"environment","constant"]},children:[{type:a,value:"$EUID"}]},{type:a,value:as}]},{type:a,value:" -ne "},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"0"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:bk}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Please run as root!\""}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:"exit"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:bl}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:bj}]},{type:a,value:" pgrep -f "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:"\u002Fdev\u002Fnull\n"},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:bk}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"WELCOME TO POOR MAN'S VPN\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Ssh process in running with pid\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ax}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"kill"}]},{type:a,value:" -9 "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ax}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Kill ssh process with PID\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ax}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"else"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Ssh process not found\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:bl}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:bg}]},{type:a,value:" -D "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:a,value:" -f -C -q -N "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"${SERVER}"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Connect to server\""}]},{type:a,value:"\nnetworksetup -setsocksfirewallproxy "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ay}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:be}]},{type:a,value:bf},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:a,value:"\nnetworksetup -setsocksfirewallproxystate "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ay}]},{type:a,value:" on\n"},{type:b,tag:c,props:{className:[d,ac,h]},children:[{type:a,value:bh}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aq}]},{type:a,value:bi},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aq}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Ssh runs on PORT \""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\" and PID \""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:bm}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\". socks proxy set on Wi-Fi\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"For turn off socks5 proxy run command -\u003E sudo kill -9 \""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:bm}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"; networksetup -setsocksfirewallproxystate \""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\" off\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Change proxychain4 socks5 port sudo sed 's\u002Ffoor\u002Fbar\u002Fg' \u002Fetc\u002Fproxychains.conf\""}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:bb,props:{id:a$},children:[{type:b,tag:B,props:{href:"#configure-the-poor-mans-vpn-tunnel-over-ssh-on-windows-710",ariaHidden:af,tabIndex:ag},children:[{type:b,tag:c,props:{className:[ah,ai]},children:[]}]},{type:a,value:ba}]},{type:a,value:f},{type:b,tag:T,props:{},children:[{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Install "},{type:b,tag:B,props:{href:"https:\u002F\u002Fwww.bitvise.com\u002Fssh-client-download",rel:[U,V,W],target:X},children:[{type:a,value:ad}]},{type:a,value:" and "},{type:b,tag:B,props:{href:"http:\u002F\u002Fwww.mediafire.com\u002Ffile\u002F6fm9v97vnw6qj9y\u002FProxifierPE.zip\u002Ffile",rel:[U,V,W],target:X},children:[{type:a,value:"Proxifier"}]}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Follow image to install and configuration the SSH tunnel on the Windows"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:G,props:{alt:ad,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fssh\u002F1.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:G,props:{alt:ad,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fssh\u002F2.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:G,props:{alt:ad,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fssh\u002F3.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:G,props:{alt:ad,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fssh\u002F4.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:G,props:{alt:ae,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fproxy\u002F1.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:G,props:{alt:ae,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fproxy\u002F2.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:G,props:{alt:ae,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fproxy\u002F3.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:G,props:{alt:ae,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fproxy\u002F4.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:G,props:{alt:ae,src:"\u002Fimg\u002Fcontent\u002Fssh-tunnel\u002Fproxy\u002F5.jpg"},children:[]}]}]},dir:aV,path:"\u002Farticles\u002Fssh-tunnel",extension:aW,createdAt:ao,updatedAt:ao},next:null}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n"," ","variable","operator","\n  ",":",";","string","color","hexcode","li","=","{","}","function","p","code","keyword","\u003E","selector","builtin","class-name","a","[","]","\n\n","echo","img","div","\u003C","--app-subtitle-color","property","number","--app-background-color","--app-title-color","nuxt-content-highlight","pre","line-numbers","\n            ",",","ol","nofollow","noopener","noreferrer","_blank","attribute","attr-name","theme","attr-value","(",")","assign-left","Bitvise","Proxyfier","true",-1,"icon","icon-link","-","\u002F","module","class","var","2021-09-02T17:02:55.030Z","language-bash","`","${PORT}","\"","#ffffff","make","1080","PORT","$PID","${NET_SERVICE}","Pooya Golchian","Frontend developer and DevOps engineer.","\u002Fimg\u002Favatar\u002Fpooya-golchian.jpg","intro",3,"Intro","how-to-use-vuejs-multiple-theme-component","How to use Vue.js multiple theme component","root","h3","ul","template","vue","multiple","\n          ","script","maybe-class-name","VueMultipleThemes","#333333","#dddddd","unit","px","\u002Farticles",".md","When you have a server and you want to have a VPN on the server. You can use this method. The following concepts are required to install.","configure-the-poor-mans-vpn-tunnel-over-ssh-on-macos-linux",2,"Configure The Poor Man's VPN (Tunnel over SSH) on MacOS, Linux","configure-the-poor-mans-vpn-tunnel-over-ssh-on-windows-710","Configure The Poor Man's VPN (Tunnel over SSH) on Windows 7,10","h2","optional","sudo","127.0",".0.1 ","ssh","PID","pgrep -f $","if","then","fi","${PID}")));
(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2],{298:function(t,e,r){var content=r(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("e9cb4d9a",content,!0,{sourceMap:!1})},299:function(t,e,r){"use strict";r(298)},300:function(t,e,r){var n=r(40)(!1);n.push([t.i,".search{border:none;box-shadow:none;border-radius:8px;text-indent:20px;padding:10px;width:100%;border:1px solid var(--app-subtitle-color);background-color:var(--app-background-color);color:var(--app-title-color)}.search:focus{outline:none}.search__container{margin-top:16px;border-radius:8px;border:1px solid var(--app-subtitle-color);padding:16px}.search__container li{border-bottom:1px solid var(--app-subtitle-color);padding-bottom:13px}.search__container li:last-child{border:none}",""]),t.exports=n},301:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(32),r(51),r(133),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),l=(r(299),r(11)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 p-0"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"search w-100",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.articles.length?r("ul",{staticClass:"search__container pt-10"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"mt-10 mb-10"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 d-flex justify-content-start align-items-center flex-column"},[r("div",{staticClass:"d-flex w-100 fs-15"},[t._v(t._s(article.title))]),t._v(" "),r("div",{staticClass:"d-flex w-100 fs-12"},[t._v(t._s(article.date))])])])])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(32),{head:function(){return{title:"CV",meta:[{hid:"description",name:"description",content:"Pooya Golchian CV"}]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).sortBy("date","desc").limit().fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),l=r(11),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row m-0"},[r("div",{staticClass:"col-12 col-sm-12 col-md-5 blog"},[r("div",{staticClass:"col-12 p-0"},[r("app-search-input",{staticClass:"pt-20"})],1),t._v(" "),r("div",{staticClass:"row pb-40"},t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"col-12 col-sm-12 col-md-12 pt-15 pb-15"},[r("NuxtLink",{staticClass:"cp mb-20 link",attrs:{to:{name:"blog-slug",params:{slug:article.slug}},tag:"a"}},[r("div",{staticClass:"w-100"},[r("h2",{staticClass:"app-title fs-19 font-weight-normal pt-10"},[t._v("\n              "+t._s(article.title)+"\n            ")]),t._v(" "),r("div",{staticClass:"app-subtitle fs-13"},[r("span",{staticClass:"lnr lnr-calendar-full pr-5"}),t._v(t._s(t.formatDate(article.date))+"\n            ")]),t._v(" "),r("div",{staticClass:"app-subtitle fs-14 fa-15 pt-10"},[t._v("\n              "+t._s(article.description)+"\n            ")])])])],1)})),0)]),t._v(" "),r("div",{staticClass:"col-12 col-sm-12 col-md-4 info"},[r("div",{staticClass:"row pb-30"},[r("div",{staticClass:"col-12 col-sm-12 col-md-12"},[r("nuxt-link",{attrs:{to:"/about",tag:"div"}},[r("img",{staticClass:"h1-00 w-100 pb-20 pt-20 my-photo cp",attrs:{alt:"",src:"/img/home-img/pooya-golchian.JPG"}})])],1),t._v(" "),r("nuxt-link",{staticClass:"col-12 col-sm-12 col-md-12 d-flex justify-content-center align-items-center flex-column cp",attrs:{to:"/about",tag:"div"}},[r("h1",{staticClass:"fs-18 app-title text-left d-flex flex-1 w-100 font-weight-bold"},[t._v("\n          I'm Pooya Golchian\n        ")]),t._v(" "),r("ul",{staticClass:"p-0 m-0 d-flex justify-content-center align-items-start flex-column flex-1 w-100 app-subtitle"},[r("li",[t._v("Frontend Engineer (Vue.js/React.js)")]),t._v(" "),r("li",[t._v("DevOps Engineer and Linux Server Engineer")]),t._v(" "),r("li",[t._v("Code, Coffee, Crypto")])]),t._v(" "),r("p",{staticClass:"fs-14 app-title pt-10"},[t._v("\n          I was born in Tehran in 1990. When my father bought a computer for our home, I fell in love with it. I start\n          to learned Linux with Ubuntu and Fedora when I was 16 years old. Now, I have a master's degree in computer\n          engineering. I have 10 years' experience in web development. I have been using Javascript for web\n          development. I have 4 years of experience in Vue.js and, Nuxt.js. I worked with React.js too. I have\n          developed lots of web applications with high-tech frameworks. I have experience with PHP, WordPress, Drupal,\n          headless CMS, and JAM STACK architecture. For more information about my professional full-time work, please\n          see my\n          "),r("nuxt-link",{attrs:{to:"/cv"}},[t._v("CV")]),t._v("\n          .\n        ")],1)])],1)]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 col-sm-12 col-md-3 project pb-50"},[r("div",{staticClass:"font-weight-bold app-title pt-10 fs-20 pb-10"},[t._v("Open-Source project")]),t._v(" "),r("a",{staticClass:"app-title d-flex flex-row pt-2 pb-2 fs-14",attrs:{href:"https://www.npmjs.com/package/vue-multiple-themes",target:"_blank"}},[t._v("VUE.js multiple theme color NPM package")]),t._v(" "),r("a",{staticClass:"app-title d-flex flex-row pt-2 pb-2 fs-14",attrs:{href:"https://www.npmjs.com/package/vue-js-star-rating",target:"_blank"}},[t._v("VUE.js icon rating NPM package")]),t._v(" "),r("a",{staticClass:"app-title d-flex flex-row pt-2 pb-2 fs-14",attrs:{href:"https://github.com/pooyagolchian/pooyagolchian.github.io",target:"_blank"}},[t._v("NUXT.js SSG blog")]),t._v(" "),r("a",{staticClass:"app-title d-flex flex-row pt-2 pb-2 fs-14",attrs:{href:"https://github.com/pooyagolchian/memegen",target:"_blank"}},[t._v("Meme\n      generator React.js application")]),t._v(" "),r("a",{staticClass:"app-title d-flex flex-row pt-2 pb-2 fs-14",attrs:{href:"https://www.npmjs.com/package/scss-helper",target:"_blank"}},[t._v("\n      Mini UI SCSS helper, Grid, Typography, etc.\n    ")]),t._v(" "),r("a",{staticClass:"app-title d-flex flex-row pt-2 pb-2 fs-14",attrs:{href:"https://www.npmjs.com/package/vuetify-form-base-ssr",target:"_blank"}},[t._v("\n      Customize Vuetify.js form builder for Nuxt.js for panel.azkivam.com\n    ")]),t._v(" "),r("a",{staticClass:"app-title d-flex flex-row pt-2 pb-2 fs-14",attrs:{href:"https://github.com/pooyagolchian/docker-and-kubernetes-tutorial",target:"_blank"}},[t._v("\n      Docker, Kubernetes | tutorial and cheatsheet\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AppSearchInput:r(301).default})}}]);
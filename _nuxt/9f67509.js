(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{349:function(e,t,r){"use strict";r.r(t);var n=r(8),c=(r(33),r(31),r(154),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=3;break}return t.articles=[],r.abrupt("return");case 3:return r.next=5,t.$content("articles").limit(6).search(e).fetch();case 5:t.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),l=r(18),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-12 p-0"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"search w-100",attrs:{autocomplete:"off",placeholder:"Search Articles"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e._v(" "),e.articles.length?t("ul",{staticClass:"search__container"},e._l(e.articles,(function(article){return t("li",{key:article.slug,staticClass:"mt-10 mb-10"},[t("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 d-flex justify-content-start align-items-center flex-column"},[t("div",{staticClass:"d-flex w-100 fs-15"},[e._v(e._s(article.title))]),e._v(" "),t("div",{staticClass:"d-flex w-100 fs-12"},[e._v(e._s(article.date))])])])])],1)})),0):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);
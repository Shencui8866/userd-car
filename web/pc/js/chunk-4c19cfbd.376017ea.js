(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4c19cfbd"],{"1a86":function(t,s,e){t.exports=e.p+"web/pc/img/Logo.4f8e8d02.svg"},"3e04":function(t,s,e){"use strict";e("4f4c")},"4f4c":function(t,s,e){},"5b89":function(t,s,n){"use strict";n.r(s);var e=[function(){var t=this.$createElement,t=this._self._c||t;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:n("1a86"),alt:""}})])},function(){var t=this,s=t.$createElement,s=t._self._c||s;return s("li",[t._v(" 首页 "),s("div",{staticClass:"line1"})])}],i=n("1da1"),a=(n("96cf"),n("aa2a")),c={methods:{toHome:function(){this.$router.push({name:"Home"})},toNews:function(){this.$router.push({name:"news"})},toBuyCar:function(){this.$router.push({name:"buyCar"})},toSellCar:function(){this.$router.push({name:"sellCar"})},toQueryCar:function(){this.$router.push({name:"queryCar"})},toSubstitution:function(){this.$router.push({name:"substitution"})},toFind:function(){this.$router.push({name:"find"})},getNewsInfo:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.b)({id:e.$route.query.id});case 2:s=t.sent,e.newsInfo=s.info,e.newList=s.list;case 5:case"end":return t.stop()}},t)}))()},newClick:function(t){this.$router.push({name:"newsInfo",query:{id:t.id}})}},created:function(){this.getNewsInfo()},data:function(){return{newsInfo:{},newList:[]}},watch:{$route:function(){this.getNewsInfo()}}},r=(n("3e04"),n("2877")),r=Object(r.a)(c,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"newsInfo"},[i("div",{staticClass:"header"},[i("div",{staticClass:"container"},[e._m(0),i("ul",{staticClass:"nav"},[e._m(1),i("li",{on:{click:e.toBuyCar}},[e._v("我要买车")]),i("li",{on:{click:e.toSellCar}},[e._v("我要卖车")]),i("li",{on:{click:e.toSubstitution}},[e._v("车辆置换")]),i("li",{on:{click:e.toQueryCar}},[e._v("上汽认证二手车查询")]),i("li",{on:{click:e.toFind}},[e._v("认证二手车中心查找")])])])]),i("div",{staticClass:"title-bar"},[i("div",{staticClass:"content"},[i("div",{staticClass:"text"},[i("div",{staticClass:"p1",on:{click:e.toHome}},[e._v("首页")]),i("div",{staticClass:"p2"},[e._v("  >  ")]),i("div",{staticClass:"p3",on:{click:e.toNews}},[e._v("资讯中心")]),i("div",{staticClass:"p2"},[e._v("  >  ")]),i("div",{staticClass:"p3"},[e._v(" "+e._s(e.newsInfo.title)+" ")])]),i("div",{staticClass:"title-text"},[i("p",[e._v(" "+e._s(e.newsInfo.title)+" ")]),i("div",{staticClass:"views"},[i("img",{attrs:{src:n("9864"),alt:""}}),i("div",{staticClass:"peopleNum"},[e._v(e._s(e.newsInfo.read_num))]),i("div",{staticClass:"line"}),i("div",{staticClass:"date"},[e._v(e._s(e._f("filterDate")(e.newsInfo.update_time)))])])])])]),i("div",{staticClass:"main"},[i("div",{staticClass:"content"},[i("div",{staticClass:"htmlInfo",domProps:{innerHTML:e._s(e.newsInfo.message_info)}})])]),i("div",{staticClass:"other-news"},[i("div",{staticClass:"content"},[i("div",{staticClass:"title"},[e._v("相关阅读")]),i("div",{staticClass:"info"},e._l(e.newList,function(s,t){return i("div",{key:t,staticClass:"info-text",on:{click:function(t){return e.newClick(s)}}},[i("div",{staticClass:"text"},[e._v(e._s(s.title))]),i("div",{staticClass:"date"},[e._v(e._s(e._f("filterDate")(s.update_time)))])])}),0)])]),i("footers")],1)},e,!1,null,"6e75ecd2",null);s.default=r.exports},9864:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAPCAYAAADgbT9oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJESURBVHgBlVQ9jGFRFH4Y/yJI/HVXpdCYSGSiQbc6OqohkeyuZlBoV7sqClGiUsm8LSTbCCOKFQWlaLxWIy/+xU/2nM28XfP2mmRO8vLOPffc757znS9XwtyweDxucDqdjyaTKaBUKt2n04lg/Hg88uCP1Wp1rd/vv9RqNY52XkID9Pv9TwCWhqWBecd2ux2z3+/zw+GwBBfwN4Gr1So5n88djUZDmA/YdrvlZDJZMJFIcP8BFwoFt9Vq7cjl8jdVQuvMcrnsXi4XFtd6vT4glUrDkMeI8vj5fB7M5XLjv8BYKbTeAZeIk2ezWSSfz3ev47AOEEKeFQqFgZJ/D/ucDAPBYHCk1WqJuMXD4fAlm83+QN6hzc+hUOjBZrPNi8Xi2Ov1HgwGw6frfKBDBUMNw8Dr0nK5/M1isRAKb0wymayj73K5RmazuYifz+erYmw6ndawQvE5nI/H40lLVSpVmqEbJzhGo5FcVRXAP6qABvya8yRdr9cl2iYOESlAHwbXFeKLxYITfIlEQmhn4cKSDDgb2+32qFgNyBd883a7/Qv4fwHeOKDnZ6/X+zqZTPaVSiWu0+nCYlCUXiqVivxRRaPRIDCo0Y0pU1XhcDieKdLkAeM+Fotxb3QMQ+xQwJEKFrWMa9QwapmmY6ApmMlk/ulYsNfKEZwwHzBsf7VaRQRQNNl1QrPZ5EGbdeBUDZU9iKuiGL/ZbL63Wq1EqVTirjckt05Eo1ECj1EAXrLHu7s7t8An+FgdB2piB4NBnWVZquR+A+d7FjzW4nP4AAAAAElFTkSuQmCC"},aa2a:function(t,s,e){"use strict";e.d(s,"a",function(){return n}),e.d(s,"c",function(){return a}),e.d(s,"b",function(){return c});var i=e("365c"),n=function(t){return Object(i.a)({url:"/message/index",method:"GET",params:t})},a=function(t){return Object(i.a)({url:"/message/list",method:"GET",params:t})},c=function(t){return Object(i.a)({url:"/message/info",method:"GET",params:t})}}}]);
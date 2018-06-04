/*! NutUI v1.2.7 Mon Jun 04 2018 20:06:11 GMT+0800 (CST) */
webpackJsonpnutui([34],{1059:function(t,v,_){(t.exports=_(2)()).push([t.i,".test{background:red}",""])},1160:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",[_("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Filter",desc:"图片懒加载。",showQrCode:!0}}),t._v(" "),_("h5",[t._v("示例")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo1}}),t._v(" "),_("h5",[t._v("Options")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("可选值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("v-nut-lazyload")]),t._v(" "),_("td",[t._v("指令")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("--")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("imgLoading")]),t._v(" "),_("td",[t._v("用于加载loading图片的路径")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("默认自带一张loading")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("distance")]),t._v(" "),_("td",[t._v("提前加载图片距离可视窗口底部的距离")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("不写 默认为30")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("element")]),t._v(" "),_("td",[t._v("用于需要懒加载图片元素的选择")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("不写 默认为'[lazyload]'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("failImg")]),t._v(" "),_("td",[t._v("用于图片请求失败显示的图片")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("不写 默认没有")]),t._v(" "),_("td",[t._v("--")])])])])])}]}},1255:function(t,v,_){var e=_(1059);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);_(3)("3a1c6a67",e,!0,{})},862:function(t,v,_){var e=_(1)(_(956),_(1160),function(t){_(1255)},null,null);t.exports=e.exports},956:function(t,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0});e(_(20)),e(_(174));function e(t){return t&&t.__esModule?t:{default:t}}v.default={data:function(){return{demo1:'<div v-nut-lazyload=\'{\n      "imgLoading":"http://page.jd.com/virtuals/ijipiao/1.3/css/i/loading.gif",\n      "distance":40,\n      "element":"[lazyload]",\n      "failImg":\'url\'\n    }\'>\n  <img data-src="url" lazyload/>\n</div>'}},methods:{}}}});
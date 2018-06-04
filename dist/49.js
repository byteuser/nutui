/*! NutUI v1.2.7 Mon Jun 04 2018 20:06:11 GMT+0800 (CST) */
webpackJsonpnutui([49],{1053:function(t,v,e){(t.exports=e(2)()).push([t.i,"",""])},1154:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("div",[e("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"吸顶条，支持在页面滑动到指定位置时固定在顶部，常用于导航栏和搜索条。",showQrCode:!0}}),t._v(" "),e("h5",[t._v("示例")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo}}),t._v(" "),e("h5",[t._v("Props")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("div",{staticClass:"tbl-wrapper"},[e("table",{staticClass:"u-full-width"},[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("可选值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("fixedTop")]),t._v(" "),e("td",[t._v("定位时距离顶部的位置")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("fixedType")]),t._v(" "),e("td",[t._v("吸顶方式（直接吸顶or消失后再出现吸顶）")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("arrivalEl")]),t._v(" "),e("td",[t._v("吸顶消失的目标元素的id或者class")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("screenNum")]),t._v(" "),e("td",[t._v("吸顶在第几屏显示")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("zIndex")]),t._v(" "),e("td",[t._v("定位元素的层级")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("1001")]),t._v(" "),e("td",[t._v("--")])])])])])}]}},1249:function(t,v,e){var _=e(1053);"string"==typeof _&&(_=[[t.i,_,""]]),_.locals&&(t.exports=_.locals);e(3)("6e62f0fa",_,!0,{})},847:function(t,v,e){var _=e(1)(e(940),e(1154),function(t){e(1249)},null,null);t.exports=_.exports},940:function(t,v,e){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var _,n=e(20);(_=n)&&_.__esModule;v.default={data:function(){return{demo:'<nut-ceilinglamp \n:fixedTop = "0" \n:fixedType = "true" \n:screenNum = "0">\n    <div class="ceildiv">\n        我能自动固定到顶部\n    </div>\n</nut-ceilinglamp>'}}}}});
/*! NutUI v1.2.7 Mon Jun 04 2018 20:06:11 GMT+0800 (CST) */
webpackJsonpnutui([48],{1055:function(e,c,t){(e.exports=t(2)()).push([e.i,".chexkbox-demo .nut-checkbox{display:inline-block;margin-right:5px}",""])},1156:function(e,c){e.exports={render:function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",{staticClass:"chexkbox-demo"},[t("nut-docheader",{attrs:{name:e.$route.name,chName:e.$route.params.chnName,type:"Component",desc:"复选按钮。",showQrCode:!0}}),e._v(" "),t("h5",[e._v("示例")]),e._v(" "),t("h6",[e._v("默认用法")]),e._v(" "),t("nut-checkbox",{attrs:{checked:e.checkbox1},on:{"update:checked":function(c){e.checkbox1=c}}}),e._v(" "),t("div",[e._v("checkbox1: "+e._s(e.checkbox1))]),e._v(" "),t("nut-codebox",{attrs:{code:e.demo1}}),e._v(" "),t("h6",[e._v("点击触发事件")]),e._v(" "),t("nut-checkbox",{attrs:{checked:e.checked},on:{"update:checked":function(c){e.checked=c},change:e.checkboxChange}}),e._v(" "),t("nut-codebox",{attrs:{code:e.demo2}}),e._v(" "),t("nut-codebox",{attrs:{code:"export default {\n    data(){\n        return{\n            checked:false\n        }\n    }\n    methods:{\n        checkboxChange(){\n            alert(this.checked);\n        }\n    }\n}"}}),e._v(" "),t("h6",[e._v("禁用选项")]),e._v(" "),t("nut-checkbox",{attrs:{name:"test2",checked:e.checked2,disabled:!0},on:{"update:checked":function(c){e.checked2=c}}}),e._v(" "),t("nut-checkbox",{attrs:{name:"test2",checked:e.checked2},on:{"update:checked":function(c){e.checked2=c}}}),e._v(" "),t("nut-codebox",{attrs:{code:e.demo3}}),e._v(" "),t("h5",[e._v("Props")]),e._v(" "),e._m(0),e._v(" "),t("h5",[e._v("Events")]),e._v(" "),e._m(1)],1)},staticRenderFns:[function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",{staticClass:"tbl-wrapper"},[t("table",{staticClass:"u-full-width"},[t("thead",[t("tr",[t("th",[e._v("参数")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("类型")]),e._v(" "),t("th",[e._v("默认值")]),e._v(" "),t("th",[e._v("可选值")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("checked.sync")]),e._v(" "),t("td",[e._v("是否选中")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td",[e._v("true/false")])]),e._v(" "),t("tr",[t("td",[e._v("disabled")]),e._v(" "),t("td",[e._v("是否禁用")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td",[e._v("true/false")])])])])])},function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",{staticClass:"tbl-wrapper"},[t("table",{staticClass:"u-full-width"},[t("thead",[t("tr",[t("th",[e._v("事件名")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("回调参数")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("change")]),e._v(" "),t("td",[e._v("选择时触发回调函数")]),e._v(" "),t("td",[e._v("唯一参数为事件对象")])])])])])}]}},1251:function(e,c,t){var n=t(1055);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(3)("91e1e7d8",n,!0,{})},848:function(e,c,t){var n=t(1)(t(941),t(1156),function(e){t(1251)},null,null);e.exports=n.exports},941:function(e,c,t){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default={data:function(){return{demo1:'<nut-checkbox \n:checked.sync="checkbox1"\n></nut-checkbox>',demo2:'<nut-checkbox \n:checked.sync="checked" \n@change="checkboxChange">\n</nut-checkbox>',demo3:'<nut-checkbox \n:checked.sync="checked2" \n:disabled="true">\n</nut-checkbox>\n\n<nut-checkbox \n:checked.sync="checked2">\n</nut-checkbox>',checkbox1:!1,checked:!1,checked2:!1}},methods:{checkboxChange:function(e){alert(this.checked)}}}}});
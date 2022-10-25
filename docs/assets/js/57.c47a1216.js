(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{174:function(t,e,l){"use strict";l.r(e);var s=l(0),c=Object(s.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"小程序组件化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小程序组件化"}},[t._v("#")]),t._v(" 小程序组件化")]),t._v(" "),e("h5",{attrs:{id:"wxml节点信息api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wxml节点信息api"}},[t._v("#")]),t._v(" wxml节点信息API")]),t._v(" "),e("ul",[e("li",[t._v("在小程序中使用"),e("strong",[t._v("wx.createSelectorQuery()"),e("strong",[t._v("获取到")]),t._v("SelectorQuery")]),t._v("对象，这个对象提供了对应的节点操作方法\n"),e("ul",[e("li",[e("strong",[t._v("in(this)")]),t._v("  将节点选区范围指向当前组件，默认只会查找当期页面")]),t._v(" "),e("li",[e("strong",[t._v("select()")]),t._v(" 根据css选择器查询到匹配结果的第一个元素节点，返回的 NodesRef对象实例")]),t._v(" "),e("li",[e("strong",[t._v("selectAll()")]),t._v("  和select一样只不过他可以匹配多个")]),t._v(" "),e("li",[e("strong",[t._v("selectViewport()")]),t._v("   选择显示区域(页面)，可用于获取显示区域的尺寸、滚动位置等信息，返回一个NodesRef对象实例。")]),t._v(" "),e("li",[e("strong",[t._v("exec()")]),t._v("   执行所有的请求，请求结果按请求次序构成数组，在callback的第一个参数中返回。")])])])]),t._v(" "),e("h5",{attrs:{id:"nodesref对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodesref对象"}},[t._v("#")]),t._v(" NodesRef对象")]),t._v(" "),e("p",[t._v("1、 "),e("strong",[t._v("boundingClientRect([callback])")])]),t._v(" "),e("blockquote",[e("p",[t._v("获取节点信息， 返回值相对于显示区域，以像素为单位。\n返回节点的信息有"),e("strong",[t._v("left、right、top、bottom、width、height")]),t._v("  如果提供了callback回调函数，在执行selectQuery的exec方法后，节点信息会在callback中返回")])]),t._v(" "),e("p",[t._v("2、"),e("strong",[t._v("scrollOffset([callback])")])]),t._v(" "),e("blockquote",[e("p",[t._v("获取滚动位置信息，只针对与scroll-view组件以及viewport页面起作用，返回值是"),e("strong",[t._v("scrollLeft、scrollTop")]),t._v("，如果提供了callback回调函数，在执行selectQuery的exec方法后，节点信息会在callback中返回")])]),t._v(" "),e("p",[t._v("3、"),e("strong",[t._v("fields(Object, [callback])")])]),t._v(" "),e("blockquote",[e("p",[t._v("指定获取那些信息 （id, dataset, rect, size, scrollOffset ,  properties=[获取的常规属性名称（注:id class style 除外）], computedStyle=[获取的样式名称]）")])])])}],!1,null,null,null);e.default=c.exports}}]);
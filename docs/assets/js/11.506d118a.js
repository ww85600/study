(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{126:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),s("p",[t._v("webpack 别名可以通过 "),s("code",[t._v(".vuepress/config.js")]),t._v(" 中的 "),s("router-link",{attrs:{to:"/config/#configurewebpack"}},[t._v("configureWebpack")]),t._v(" 进行配置。例如：")],1),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),s("p",[t._v("请注意，你不仅可以在主题组件中使用上述语法，还可以在 markdown 文件中使用上述语法。")]),t._v(" "),t._m(14)])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"静态资源处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态资源处理"}},[this._v("#")]),this._v(" 静态资源处理")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"相对-urls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相对-urls"}},[this._v("#")]),this._v(" 相对 URLs")])},function(){var t=this._self._c;return t("p",[this._v("所有 markdown 文件都会被编译到 Vue 组件中并由 webpack 处理，因此你"),t("strong",[this._v("应该更倾向于")]),this._v("使用相对 URL 引用任意资源：")])},function(){var t=this._self._c;return t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[t("span",{pre:!0,attrs:{class:"token url"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("!")]),this._v("["),t("span",{pre:!0,attrs:{class:"token content"}},[this._v("An image")]),this._v("]("),t("span",{pre:!0,attrs:{class:"token url"}},[this._v("./image.png")]),this._v(")")]),this._v("\n")])])])},function(){var t=this._self._c;return t("p",[this._v("这将和 "),t("code",[this._v("* .vue")]),this._v(" 文件模板中的运作的方式相同。该图片资源将通过 "),t("code",[this._v("url-loader")]),this._v(" 和 "),t("code",[this._v("file-loader")]),this._v(" 进行处理，并被复制到生成的静态构建文件中的合适位置。")])},function(){var t=this._self._c;return t("p",[this._v("另外，你可以使用 "),t("code",[this._v("~")]),this._v(" 前缀来明确指出这是一个 webpack 模块请求，这将允许你使用 webpack 别名或 npm 依赖关系引用文件：")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("Image from alias")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("~@alias/image.png")]),t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("Image from dependency")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("~some-dependency/image.png")]),t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("configureWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("alias")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'@alias'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/some/dir'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"公共文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公共文件"}},[this._v("#")]),this._v(" 公共文件")])},function(){var t=this._self._c;return t("p",[this._v("有时，你可能需要提供静态资源，这些资源并没有在任何 markdown 或主题组件中直接引用 - 例如，favicons 和 PWA 图标。在这种情况下，你可以将它们放在 "),t("code",[this._v(".vuepress/public")]),this._v(" 中，并且它们将被复制到生成目录的根目录。")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"基准-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基准-url"}},[this._v("#")]),this._v(" 基准 URL")])},function(){var t=this,s=t._self._c;return s("p",[t._v("如果你的网站部署到非根 URL，则需要在 "),s("code",[t._v(".vuepress/config.js")]),t._v(" 中设置 "),s("code",[t._v("base")]),t._v(" 选项。例如，如果你打算将你的网站部署到 "),s("code",[t._v("https://foo.github.io/bar/")]),t._v("，那么"),s("code",[t._v("base")]),t._v("应该设置为 "),s("code",[t._v('"/bar/"')]),t._v("（它应该始终以斜杠开始和结束）。")])},function(){var t=this,s=t._self._c;return s("p",[t._v("使用基准 URL，如果你想在 "),s("code",[t._v(".vuepress/public")]),t._v(" 中引用图片，则必须使用像 "),s("code",[t._v("/bar/image.png")]),t._v(" 这样的 URL。但是，如果你有朝一日会决定更改 "),s("code",[t._v("base")]),t._v(" ，这样的路径就显得很脆弱了。为了解决这个问题，VuePress 提供了一个内置的帮助器 "),s("code",[t._v("$withBase")]),t._v("（注入到 Vue 的原型中），它可以生成正确的路径：")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$withBase('/foo.png')"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[this._v("另外，如果设置了 "),t("code",[this._v("base")]),this._v("，它会自动作为前缀拼接到 "),t("code",[this._v(".vuepress/config.js")]),this._v(" 选项中的所有静态资源 URL 中。")])}],!1,null,null,null);s.default=r.exports}}]);
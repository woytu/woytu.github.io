(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{580:function(a,t,s){"use strict";s.r(t);var r=s(1),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mysql常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql常见问题"}},[a._v("#")]),a._v(" MySQL常见问题")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#group-concat"}},[a._v("GROUP_CONCAT")]),s("ul",[s("li",[s("a",{attrs:{href:"#修改默认值大小"}},[a._v("修改默认值大小")])])])]),s("li",[s("a",{attrs:{href:"#自定义函数"}},[a._v("自定义函数")]),s("ul",[s("li",[s("a",{attrs:{href:"#执行自定义函数报错"}},[a._v("执行自定义函数报错")])])])]),s("li",[s("a",{attrs:{href:"#表名未忽略大小写"}},[a._v("表名未忽略大小写")]),s("ul",[s("li",[s("a",{attrs:{href:"#在-mysqld-模块中添加"}},[a._v("在[mysqld]模块中添加")])]),s("li",[s("a",{attrs:{href:"#保存并重启mysql"}},[a._v("保存并重启mysql")])])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"group-concat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#group-concat"}},[a._v("#")]),a._v(" GROUP_CONCAT")]),a._v(" "),s("ul",[s("li",[a._v("使用"),s("code",[a._v("GROUP_CONCAT")]),a._v("出现")])]),a._v(" "),s("blockquote",[s("p",[a._v("Row 147 was cut by GROUP_CONCAT()")])]),a._v(" "),s("ul",[s("li",[a._v("由于MySQL的"),s("code",[a._v("GROUP_CONCAT")]),a._v("有默认大小值，先查询一下")])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" VARIABLES "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("LIKE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'group_concat_max_len'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#或者")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" @"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@global.group_concat_max_len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("ul",[s("li",[a._v("默认值为1024")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Variable_name")]),a._v(" "),s("th",[a._v("Value")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("group_concat_max_len")]),a._v(" "),s("td",[a._v("1024")])])])]),a._v(" "),s("h3",{attrs:{id:"修改默认值大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改默认值大小"}},[a._v("#")]),a._v(" 修改默认值大小")]),a._v(" "),s("ul",[s("li",[a._v("在MySQL配置文件中添加配置")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#-1为最大值或根据实际需求设置长度")]),a._v("\ngroup_concat_max_len "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" -1\n")])])]),s("ul",[s("li",[a._v("如果是生产环境下，不能擅自重启MySQL服务，则可以通过语句设置"),s("code",[a._v("group_concat")]),a._v("的作用范围")])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GLOBAL")]),a._v(" group_concat_max_len"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SESSION")]),a._v(" group_concat_max_len"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"自定义函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义函数"}},[a._v("#")]),a._v(" 自定义函数")]),a._v(" "),s("h3",{attrs:{id:"执行自定义函数报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行自定义函数报错"}},[a._v("#")]),a._v(" 执行自定义函数报错")]),a._v(" "),s("blockquote",[s("p",[s("code",[a._v("This function has none of DETERMINISTIC, NO SQL, or READS SQL DATA in its declaration and binary logging is enabled (you *might* want to use the less safe log_bin_trust_function_creators variable)")])])]),a._v(" "),s("ul",[s("li",[a._v("查看是否开启"),s("code",[a._v("log_bin_trust_function_creators")])])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" VARIABLES "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("LIKE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'log_bin_trust_function_creators'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#或者")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" @"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@global.log_bin_trust_function_creators")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("ul",[s("li",[a._v("默认关闭")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Variable_name")]),a._v(" "),s("th",[a._v("Value")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("log_bin_trust_function_creators")]),a._v(" "),s("td",[a._v("OFF")])])])]),a._v(" "),s("ul",[s("li",[a._v("开启")])]),a._v(" "),s("blockquote",[s("p",[a._v("在MySQL配置文件中"),s("code",[a._v("[mysqld]")]),a._v("节点下加上")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("log_bin_trust_function_creators")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),s("blockquote",[s("p",[a._v("如果是生产环境下，不能擅自重启MySQL服务，则可以通过语句开启，重启后无效")])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GLOBAL")]),a._v(" log_bin_trust_function_creators "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#或者")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GLOBAL")]),a._v(" log_bin_trust_function_creators"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"表名未忽略大小写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表名未忽略大小写"}},[a._v("#")]),a._v(" 表名未忽略大小写")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/my.cnf\n")])])]),s("h3",{attrs:{id:"在-mysqld-模块中添加"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-mysqld-模块中添加"}},[a._v("#")]),a._v(" 在[mysqld]模块中添加")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("lower_case_table_names "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),s("h3",{attrs:{id:"保存并重启mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保存并重启mysql"}},[a._v("#")]),a._v(" 保存并重启mysql")])])}),[],!1,null,null,null);t.default=e.exports}}]);
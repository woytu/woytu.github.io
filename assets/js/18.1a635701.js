(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{546:function(e,t,a){"use strict";a.r(t);var r=a(1),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"idea使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idea使用"}},[e._v("#")]),e._v(" IDEA使用")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#flag"}},[e._v("Flag")])]),a("li",[a("a",{attrs:{href:"#建立多级项目"}},[e._v("建立多级项目")]),a("ul",[a("li",[a("a",{attrs:{href:"#远程debug"}},[e._v("远程Debug")])])])]),a("li",[a("a",{attrs:{href:"#错误解决"}},[e._v("错误解决")]),a("ul",[a("li",[a("a",{attrs:{href:"#idea无限indexing解决方法"}},[e._v("idea无限indexing解决方法")])]),a("li",[a("a",{attrs:{href:"#outofmemoryerror"}},[e._v("OutOfMemoryError")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"flag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flag"}},[e._v("#")]),e._v(" Flag")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/JetBrains",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/JetBrains"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jetbrains.com/products.html#type=ide",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.jetbrains.com/products.html#type=ide"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[e._v("简体中文专题教程 "),a("a",{attrs:{href:"https://github.com/judasn/IntelliJ-IDEA-Tutorial",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/judasn/IntelliJ-IDEA-Tutorial"),a("OutboundLink")],1)])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/XFoOBeTaBwBAsRgadxMLfQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("教育邮箱免费申请JetBrains教育许可证"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.fuocu.cn/archives/jetbrains-crack",target:"_blank",rel:"noopener noreferrer"}},[e._v("JetBrains全系列软件激活教程激活码以及JetBrains系列软件汉化包"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pingfangx/TranslatorX",target:"_blank",rel:"noopener noreferrer"}},[e._v("JetBrains 2019.3系列软件汉化包"),a("OutboundLink")],1)])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.imooc.com/learn/924",target:"_blank",rel:"noopener noreferrer"}},[e._v("IntelliJ IDEA神器使用技巧"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/fly910905/article/details/77868300",target:"_blank",rel:"noopener noreferrer"}},[e._v("IDEA的基本使用：让你的IDEA有飞一般的感觉"),a("OutboundLink")],1)])]),e._v(" "),a("p",[a("strong",[e._v("查看类类图及继承关系")])]),e._v(" "),a("ul",[a("li",[e._v("选中类右键 -> "),a("code",[e._v("Diagram")]),e._v(" -> "),a("code",[e._v("Show Diagram")]),e._v(" "),a("kdb",[e._v("Ctrl")]),e._v("+"),a("kdb",[e._v("Alt")]),e._v("+"),a("kdb",[e._v("Shift")]),e._v("+"),a("kdb",[e._v("U")]),e._v(" "),a("ul",[a("li",[e._v("选中关系图中的名称，点击右键查看实现类 "),a("code",[e._v("Show Implementations")]),e._v(" "),a("kdb",[e._v("Ctrl")]),e._v("+"),a("kdb",[e._v("Alt")]),e._v("+"),a("kdb",[e._v("B")])],1),e._v(" "),a("li",[e._v("选中关系图中的名称，点击右键查看父类 "),a("code",[e._v("Show Parents")]),e._v(" "),a("kdb",[e._v("Ctrl")]),e._v("+"),a("kdb",[e._v("Alt")]),e._v("+"),a("kdb",[e._v("P")])],1)])],1)]),e._v(" "),a("ul",[a("li",[e._v("蓝色实线箭头是指继承关系")]),e._v(" "),a("li",[e._v("绿色虚线箭头是指接口实现关系")])]),e._v(" "),a("details",[a("summary",[a("b",[e._v("展开查看思维导图")])]),e._v(" "),a("img",{attrs:{src:"/images/IDEA使用技巧.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"建立多级项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立多级项目"}},[e._v("#")]),e._v(" 建立多级项目")]),e._v(" "),a("blockquote",[a("p",[e._v("特别说明：每个模块中的顶级包名（java目录下的包名）一定不能一样，否则编译器会把多个模块中的代码编译相互串连。\n如："),a("code",[e._v("src/main/java/com/bajins/demo")]),e._v("这里的"),a("code",[e._v("com/bajins/demo")]),e._v("就是顶级包名，\n应该加上当前项目名"),a("code",[e._v("src/main/java/com/bajins/demo/admin")])])]),e._v(" "),a("p",[a("strong",[e._v("创建顶级项目（根项目）")])]),e._v(" "),a("ol",[a("li",[e._v("点击顶部菜单栏 "),a("code",[e._v("File")]),e._v(" -> "),a("code",[e._v("New")]),e._v(" -> "),a("code",[e._v("Project")]),e._v("（或在欢迎页面点击"),a("code",[e._v("Create New Project")]),e._v("） -> "),a("code",[e._v("Maven")]),e._v("（不要勾选"),a("code",[e._v("Create from archetype")]),e._v("） -> "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("填写 "),a("code",[e._v("Name")]),e._v("（项目名）、"),a("code",[e._v("GroupId")]),e._v("（包名）、"),a("code",[e._v("Artifact")]),e._v("（项目名），点击 "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("打开 "),a("code",[e._v("pom.xml")]),e._v(" ，添加 "),a("code",[e._v("<packaging>pom</packaging>")]),e._v("（聚合工程或传递依赖用），如果有了就不用添加")]),e._v(" "),a("li",[e._v("删除除了 "),a("code",[e._v("pom.xml")]),e._v(" 以外的其他文件和目录（包括"),a("code",[e._v("src")]),e._v("）")])]),e._v(" "),a("p",[a("strong",[e._v("创建子项目（二级项目）")])]),e._v(" "),a("ol",[a("li",[e._v("在顶级项目名上点击"),a("kbd",[e._v("右键")]),e._v("弹出菜单（或点击顶部菜单"),a("code",[e._v("File")]),e._v("） -> "),a("code",[e._v("New")]),e._v(" -> "),a("code",[e._v("Module")]),e._v(" -> "),a("code",[e._v("Maven")]),e._v("（不要勾选"),a("code",[e._v("Create from archetype")]),e._v("） -> "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("填写 "),a("code",[e._v("Name")]),e._v("（项目名）、"),a("code",[e._v("GroupId")]),e._v("（包名）、"),a("code",[e._v("Artifact")]),e._v("（项目名） -> 点击 "),a("code",[e._v("Next")]),e._v(" -> 选择 "),a("code",[e._v("Parent")]),e._v("（上级项目）放在最后操作是因为修改 "),a("code",[e._v("Name")]),e._v(" 时会自动变化")]),e._v(" "),a("li",[e._v("打开 "),a("code",[e._v("pom.xml")]),e._v(" ，添加 "),a("code",[e._v("<packaging>pom</packaging>")]),e._v("（聚合工程或传递依赖用）")]),e._v(" "),a("li",[e._v("删除除了 "),a("code",[e._v("pom.xml")]),e._v(" 以外的其他文件和目录（包括"),a("code",[e._v("src")]),e._v("）")])]),e._v(" "),a("p",[a("strong",[e._v("创建子模块（最后一级项目）")])]),e._v(" "),a("blockquote",[a("p",[e._v("如果还需要创建下级项目，重复创建子项目的操作即可")])]),e._v(" "),a("blockquote",[a("p",[e._v("创建子模块只需要重复创建子项目，但是不要删除任何其他文件和目录，也不要添加"),a("code",[e._v("<packaging>pom</packaging>")])])]),e._v(" "),a("details",[a("summary",{staticStyle:{"font-size":"130%"}},[e._v("展开查看示例结构")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("demo                        # 顶级项目（根项目）\n│  pom.xml\n│  \n├─admin                     # 二级项目\n│  │  pom.xml\n│  │  \n│  ├─admin-api              # 二级项目模块\n│  │  │  pom.xml\n│  │  │  \n│  │  └─src\n│  │      ├─main\n│  │      │  ├─java\n│  │      │  └─resources\n│  │      └─test\n│  │          └─java\n│  └─admin-web              # 二级项目模块\n│      │  pom.xml\n│      │  \n│      └─src\n│          ├─main\n│          │  ├─java\n│          │  └─resources\n│          └─test\n│              └─java\n└─buyer                     # 二级项目\n    │  pom.xml\n    │  \n    ├─shop                  # 三级项目\n    │  │  pom.xml\n    │  │  \n    │  ├─shop-api           # 三级项目模块\n    │  │  │  pom.xml\n    │  │  │  \n    │  │  └─src\n    │  │      ├─main\n    │  │      │  ├─java\n    │  │      │  └─resources\n    │  │      └─test\n    │  │          └─java\n    │  └─shop-client        # 三级项目模块\n    │      │  pom.xml\n    │      │  \n    │      └─src\n    │          ├─main\n    │          │  ├─java\n    │          │  └─resources\n    │          └─test\n    │              └─java\n    └─user                  # 三级项目\n        │  pom.xml\n        │  \n        ├─user-api          # 三级项目模块\n        │  │  pom.xml\n        │  │  \n        │  └─src\n        │      ├─main\n        │      │  ├─java\n        │      │  └─resources\n        │      └─test\n        │          └─java\n        └─user-client       # 三级项目模块\n            │  pom.xml\n            │  \n            └─src\n                ├─main\n                │  ├─java\n                │  └─resources\n                └─test\n                    └─java\n")])])])]),e._v(" "),a("h3",{attrs:{id:"远程debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程debug"}},[e._v("#")]),e._v(" 远程Debug")]),e._v(" "),a("p",[a("strong",[e._v("首先要设置"),a("RouterLink",{attrs:{to:"/Java/JDK工具.html#远程debug参数"}},[e._v("启动JVM远程Debug参数")])],1)]),e._v(" "),a("ul",[a("li",[e._v("点击顶部菜单"),a("code",[e._v("Run")]),e._v("点击"),a("code",[e._v("Edit Configuration")]),e._v("按钮 -> 出现弹窗，点击"),a("code",[e._v("+")]),e._v("按钮，找到"),a("code",[e._v("Remote")]),e._v("选项。")]),e._v(" "),a("li",[e._v("在"),a("code",[e._v("Name")]),e._v("中填入Remote项目名称，在"),a("code",[e._v("Host")]),e._v("中填IP地址，在"),a("code",[e._v("Port")]),e._v("中填端口号，在"),a("code",[e._v("Use Module classpath")]),e._v("选择远程调试的项目module，配置完成后点击OK即可")])]),e._v(" "),a("blockquote",[a("p",[e._v("启动项目时选择刚刚填的Remote项目名称")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/IDEA%E8%BF%9C%E7%A8%8Bdebug%E8%B0%83%E8%AF%95.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"错误解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误解决"}},[e._v("#")]),e._v(" 错误解决")]),e._v(" "),a("h3",{attrs:{id:"idea无限indexing解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idea无限indexing解决方法"}},[e._v("#")]),e._v(" idea无限indexing解决方法")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tengj/IntelliJ-IDEA-Tutorial/blob/newMaster/IntelliJ-IDEA-cache.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("IntelliJ IDEA 缓存和索引介绍和清理方法"),a("OutboundLink")],1)])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/tengj/IntelliJ-IDEA-Tutorial/raw/newMaster/images/xii-a-invalidate-cache-1.jpg",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"outofmemoryerror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outofmemoryerror"}},[e._v("#")]),e._v(" OutOfMemoryError")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v('idea Exception in thread "http-apr-8080-exec-2" java.lang.OutOfMemoryError: PermGen space')])])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("打开顶部菜单"),a("code",[e._v("Run")]),e._v(" -> "),a("code",[e._v("Edit Configurations")]),e._v(" -> 应用名称如"),a("code",[e._v("SpringBoot")]),e._v(" -> "),a("code",[e._v("目标项目")]),e._v(" -> "),a("code",[e._v("Configuration")])])]),e._v(" "),a("li",[a("p",[e._v("在"),a("code",[e._v("Vm options")]),e._v("中输入")])])]),e._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-Xms2048m\n-Xmx2048m\n-XX:MaxPermSize=4096m\n-Drebel.spring_plugin=true\n-Drebel.spring_mvc_plugin=true\n-Drebel.hibernate_plugin=true\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
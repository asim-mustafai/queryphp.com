(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{387:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"变量赋值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量赋值"}},[t._v("#")]),t._v(" 变量赋值")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Testing Is Documentation")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/hunzhiwange/framework/blob/master/tests/View/Compiler/CompilerAssignTest.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests/View/Compiler/CompilerAssignTest.php"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("可以在模板中进行一些变量的赋值，以便于进行后续计算处理。")]),t._v(" "),s("h2",{attrs:{id:"node-版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-版本"}},[t._v("#")]),t._v(" node 版本")]),t._v(" "),s("p",[t._v("assign 标签也是用于页面快捷赋值，这个还是用起来比较方便。")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testBaseUse(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<assign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("helloWorld"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("say hello to the world"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("assign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test.hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$helloWorld")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'say hello to the world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"node-版本-初始化为-null-值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-版本-初始化为-null-值"}},[t._v("#")]),t._v(" node 版本.初始化为 Null 值")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testNode(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<assign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test.hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"node-版本-初始化为指定变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-版本-初始化为指定变量"}},[t._v("#")]),t._v(" node 版本.初始化为指定变量")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testNode2(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<assign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test.hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"node-版本-初始化为函数格式化变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-版本-初始化为函数格式化变量"}},[t._v("#")]),t._v(" node 版本.初始化为函数格式化变量")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testNode3(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<assign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test.hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$hello|md5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("md5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"node-版本-初始化为函数格式化占位变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-版本-初始化为函数格式化占位变量"}},[t._v("#")]),t._v(" node 版本.初始化为函数格式化占位变量")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testNode4(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<assign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test.hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$hello|test=0,1|foo=**"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"js-风格版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-风格版本"}},[t._v("#")]),t._v(" JS 风格版本")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testLet(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<<'eot'\n        {% let foo = 'foo' %}\n        {% let hello = hello . 'foo' %}\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"js-风格版本-初始化值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-风格版本-初始化值"}},[t._v("#")]),t._v(" JS 风格版本.初始化值")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testLet2(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<<'eot'\n        {% let foo 'foo' %}\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"js-风格版本-初始化为-null-值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-风格版本-初始化为-null-值"}},[t._v("#")]),t._v(" JS 风格版本.初始化为 Null 值")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testLet3(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<<'eot'\n        {% let foo %}\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"js-风格版本-初始化为-null-值带上等于符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-风格版本-初始化为-null-值带上等于符"}},[t._v("#")]),t._v(" JS 风格版本.初始化为 Null 值带上等于符")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testLet4(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<<'eot'\n        {% let foo = %}\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
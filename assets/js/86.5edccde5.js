(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{416:function(t,s,a){"use strict";a.r(s);var e=a(12),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"php-标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-标签","aria-hidden":"true"}},[t._v("#")]),t._v(" PHP 标签")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("单元测试即文档")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/hunzhiwange/framework/blob/master/tests/View/Compiler/CompilerPhpTest.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于原始文档 tests/View/Compiler/CompilerPhpTest.php 自动构建"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("PHP 代码可以和标签在模板文件中混合使用，可以在模板文件里面书写任意的 PHP 语句代码 ，包括下面两种方式。")]),t._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("public function testBaseUse(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<php")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("echo 'Hello,world!';"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("php")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        eot;\n\n    $compiled = <<"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Hello,world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),a("h2",{attrs:{id:"原始-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始-php","aria-hidden":"true"}},[t._v("#")]),t._v(" 原始 PHP")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("public function testPhpSelf(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<<'eot'\n        "),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Hello,world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n        eot;\n\n    $compiled = <<"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Hello,world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("不过这种方式来使用 PHP 脚本，这是我们大力推荐的写法，用最原始的 PHP 开发应用是我们共同的追求。")])]),t._v(" "),a("h2",{attrs:{id:"php-内部不能使用标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-内部不能使用标签","aria-hidden":"true"}},[t._v("#")]),t._v(" PHP 内部不能使用标签")]),t._v(" "),a("p",[t._v("PHP 标签或者 PHP 代码里面就不能再使用标签（包括 code 标签和 node 标签），因此下面的几种方式都是无效的：")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("public function testErrorExample(): void\n{\n    $parser = $this->createParser();\n\n    // 错误的写法\n    $source = <<"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<php")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            {if $hello == ''}\n                Yet !\n            {/if}\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("php")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        eot;\n\n    $compiled = <<"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" \n            "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hello")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Yet")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("!")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        eot;\n\n    $this->assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("程序运行结果是抛出致命错误，这种写法是错误的。")])])])},[],!1,null,null,null);s.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{481:function(t,a,s){"use strict";s.r(a);var e=s(12),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"流程控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流程控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 流程控制")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Testing Is Documentation")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/hunzhiwange/framework/blob/master/tests/View/Compiler/CompilerIfTest.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests/View/Compiler/CompilerIfTest.php"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("条件表达式是最基本流程控制语句，这个在任何地方都是相当的实用。")]),t._v(" "),s("h2",{attrs:{id:"code-语法流程控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-语法流程控制","aria-hidden":"true"}},[t._v("#")]),t._v(" Code 语法流程控制")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testBaseUse(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<<'eot'\n        {if $id==1}\n            我的值为1，我为if下的内容。\n        {elseif $id==2}\n            我的值为2，我为elseif下的内容。\n        {else}\n            我的值为{$id}，我不是谁的谁！\n        {/if}\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("我的值为1，我为if下的内容。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elseif")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("我的值为2，我为elseif下的内容。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("我的值为"),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("，我不是谁的谁！")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"code-语法流程控制支持表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-语法流程控制支持表达式","aria-hidden":"true"}},[t._v("#")]),t._v(" Code 语法流程控制支持表达式")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testCodeStyleSupportExpression(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("{if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$a-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("name == 1}\n            a\n        {/if}\n        \n        {if hello::run() == 1}\n            b\n        {/if}\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("a")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("b")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"node-语法流程控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-语法流程控制","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 语法流程控制")]),t._v(" "),s("p",[t._v("条件支持的一些运算符替换语法如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("支持字符")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("替换字符")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("band")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("&")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bxor")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("^")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bor")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("|")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bnot")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("~")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bleft")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("<<")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bright")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v(">>")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("and")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("&&")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("or")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("||")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("not")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("!=")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("dot")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("->")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("nheq")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("!==")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("heq")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("===")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("neq")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("!=")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("eq")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("==")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("egt")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v(">=")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("gt")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v(">")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("elt")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("<=")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("lt")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("<")])])])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testNodeStyle(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("condition")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("($id eq 1) OR ($id gt 100)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("one\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("elseif")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("condition")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$id eq 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("two?\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("other?\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("one")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elseif")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("two?")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("other?")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"node-语法流程控制支持表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-语法流程控制支持表达式","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 语法流程控制支持表达式")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testNodeStyleSupportExpression(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("condition")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$a.name == 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            one\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("condition")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hello::run() == 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            two\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("one")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("two")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"js-语法流程控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-语法流程控制","aria-hidden":"true"}},[t._v("#")]),t._v(" JS 语法流程控制")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testJsStyle(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("length(users)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 0 %}\n        a\n        {% elseif foo.bar > 0 %}\n        b\n        {% else %}\n        c\n        {% /if %}\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$users")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("a")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elseif")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("bar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("b")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("c")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eot;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$this-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);
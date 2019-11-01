(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{476:function(s,t,a){"use strict";a.r(t);var e=a(12),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"开发规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发规范","aria-hidden":"true"}},[s._v("#")]),s._v(" 开发规范")]),s._v(" "),a("p",[a("code",[s._v("QueryPHP")]),s._v(" 遵循 "),a("code",[s._v("PSR-2")]),s._v(" 命名规范和 "),a("code",[s._v("PSR-4")]),s._v(" 自动加载规范。")]),s._v(" "),a("h2",{attrs:{id:"文件和目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件和目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 文件和目录")]),s._v(" "),a("p",[s._v("PSR-4 基础目录使用小写，其它依次使用大驼峰法命名，例如。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/data/codes/queryphp/application/app/Domain/Entity/\n/data/codes/queryphp/application/app/Domain/Entity/Test.php\n")])])]),a("p",[s._v("其中 composer 配置")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('"autoload": {\n    "psr-4": {\n        "App\\\\" : "application/app",\n        "Admin\\\\" : "application/admin",\n        "Common\\\\" : "common"\n    }\n}\n')])])]),a("p",[s._v("不存在类文件，请使用小写目录，其文件也一样:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/data/codes/queryphp/option/\n/data/codes/queryphp/option/app.php\n")])])]),a("h2",{attrs:{id:"统一代码风格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统一代码风格","aria-hidden":"true"}},[s._v("#")]),s._v(" 统一代码风格")]),s._v(" "),a("p",[s._v("为了屏蔽不同用户的不同代码风格习惯，QueryPHP 设置一个统一的代码格式化配置来规范团队的代码风格，这符合 "),a("code",[s._v("PSR-2")]),s._v(" 规范并且可以通过 "),a("code",[s._v("StyleCI")]),s._v(" 规范。")]),s._v(" "),a("h3",{attrs:{id:"手工优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手工优化","aria-hidden":"true"}},[s._v("#")]),s._v(" 手工优化")]),s._v(" "),a("p",[s._v("在使用前您需要安装 "),a("a",{attrs:{href:"http://cs.sensiolabs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("php-cs-fixer"),a("OutboundLink")],1),s._v("，这样子才能够进行下面的工作。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/data/codes/queryphp/.php_cs.dist # 应用\n/data/codes/queryphp/vendor/hunzhiwange/framework/.php_cs.dist # 框架核心包\n")])])]),a("p",[s._v("可以通过下面的方式来格式化代码风格:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$cd /data/codes/queryphp\n$php-cs-fixer fix --config=.php_cs.dist\n")])])]),a("h3",{attrs:{id:"结合-git-hooks-来格式化代码："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结合-git-hooks-来格式化代码：","aria-hidden":"true"}},[s._v("#")]),s._v(" 结合 "),a("code",[s._v("Git")]),s._v(" Hooks 来格式化代码：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/data/codes/queryphp/build/pre-commit.sh\n/data/codes/queryphp/vendor/hunzhiwange/framework/build/pre-commit.sh\n")])])]),a("p",[s._v("应用脚本 "),a("code",[s._v("/data/codes/queryphp/build/pre-commit.sh")])]),s._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("这里脚本也包含一段 JS 的脚本，这个用于格式化 QueryPHP 的通用前端后台的 JS 代码风格，跟 PHP 差不多。")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# check PHP code syntax error and standard with phpcs")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://blog.csdn.net/xsgnzb/article/details/52222366?locationNum=4&fps=1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://blog.csdn.net/ljihe/article/details/80826071")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =================== how to use ====================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ln -s pre-commit.sh ./../.git/hooks/pre-commit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git commit -h")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git commit -n -m 'pass hook' #bypass pre-commit and commit-msg hooks")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ==================== end ==========================")]),s._v("\n\nPROJECT"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-parse --show-toplevel"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROJECT")]),s._v("\nSFILES"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --cached --name-only --diff-filter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ACMR HEAD "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" \\\\.php"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Determine if a file list is passed")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v('"')]),s._v(" -ne 0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),s._v(" 0\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Checking PHP Lint..."')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" FILE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SFILES")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    php -l -d display_errors"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILE")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" 0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Fix the php error before commit."')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),s._v(" 1\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    FILES"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROJECT")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILE")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# format code style")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILES")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Running Code Sniffer..."')]),s._v("\n\n    isCheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" FILE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SFILES")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n        result"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("~/.composer/vendor/bin/php-cs-fixer fix $FILE --config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".php_cs.dist"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v("\n            isCheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILE")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$isCheck")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The file has been automatically formatted."')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for js")]),s._v("\njsfiles"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --cached --name-only --diff-filter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ACM "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.js"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.jsx"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.vue"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.css"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.less"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jsfiles")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),s._v(" 0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Prettify all staged .js files")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jsfiles")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" ./frontend/node_modules/.bin/prettier --config frontend/.prettierrc.js --ignore-path frontend/.prettierignore --write\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add back the modified/prettified files to staging")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jsfiles")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" update-index -g\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n")])])]),a("p",[s._v("核心包脚本 "),a("code",[s._v("/data/codes/queryphp/build/pre-commit.sh")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# check PHP code syntax error and standard with phpcs")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://blog.csdn.net/xsgnzb/article/details/52222366?locationNum=4&fps=1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://blog.csdn.net/ljihe/article/details/80826071")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =================== how to use ====================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ln -s pre-commit.sh ./../.git/hooks/pre-commit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git commit -h")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git commit -n -m 'pass hook' #bypass pre-commit and commit-msg hooks")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ==================== end ==========================")]),s._v("\n\nPROJECT"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-parse --show-toplevel"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROJECT")]),s._v("\nSFILES"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --cached --name-only --diff-filter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ACMR HEAD "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" \\\\.php"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Determine if a file list is passed")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v('"')]),s._v(" -ne 0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),s._v(" 0\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Checking PHP Lint..."')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" FILE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SFILES")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    php -l -d display_errors"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILE")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" 0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Fix the php error before commit."')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),s._v(" 1\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    FILES"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROJECT")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILE")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# format code style")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILES")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Running Code Sniffer..."')]),s._v("\n\n    isCheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" FILE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SFILES")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n        result"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("~/.composer/vendor/bin/php-cs-fixer fix $FILE --config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".php_cs.dist"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v("\n            isCheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILE")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$isCheck")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The file has been automatically formatted."')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" update-index -g\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n")])])]),a("h3",{attrs:{id:"git-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit","aria-hidden":"true"}},[s._v("#")]),s._v(" Git Commit")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git commit -m 'pass hook'\n")])])]),a("p",[s._v("上述脚本就会自动运行帮助你格式化代码,你也可以忽略脚本。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git commit -n -m 'pass hook'\n")])])]),a("p",[s._v("这样子我们再也不需要浪费时间在无意义的代码风格的讨论上了。")])])},[],!1,null,null,null);t.default=n.exports}}]);
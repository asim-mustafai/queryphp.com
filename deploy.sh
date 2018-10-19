#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 拉取 git 仓库
if [ test -d 文件夹名称 ] ; then
echo "文件夹存在！"
else
echo "文件夹不存在！"
fi

# 进入生成的文件夹
cd vuepress

# 如果是发布到自定义域名
echo 'www.queryphp.com' > CNAME

#git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push git@github.com:hunzhiwange/queryphp.com.git gh-pages

cd -

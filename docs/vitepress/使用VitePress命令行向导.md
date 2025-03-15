---
title: 10分钟使用VitePress + 自动部署github pages 建立自己的博客
date: 2024-02-10
tags:
 - 健康
 - 生活方式
categories:
 - 健康生活
sticky: 3
---

# 使用VitePress命令行向导

难度：★★★☆☆

[若木_Wdy](https://juejin.cn/user/712139265545277/posts)

2023-03-233,710阅读3分钟

[VitePress 中文文档地址](https://link.juejin.cn/?target=https%3A%2F%2Fxxy5.com%2Fvitepress-cn%2Fconfig-app.html%23appearance)
[VitePress 英文文档地址](https://link.juejin.cn/?target=https%3A%2F%2Fvitepress.dev%2F)

## 1. github 创建一个仓库，blog

## 2. clone 到本地

## 3. 初始化 VitePress

**注：因我用的pnpm安装，如果大家也想用，先执行 `npm i pnpm -g` 安装一下**



mkdir  myBlog

cd  myBlog



安装需要的依赖,使用`pnpm`将`vitepress`安装为本地依赖。

pnpm add -D vitepress

#### 初始化Vitepress

pnpm vitepress init

```
T  Welcome to VitePress!
|
o  Where should VitePress initialize the config?
|  ./
|
o  Site title:
|  My Awesome Project
|
o  Site description:
|  A VitePress Site
|
o  Theme:
|  Default Theme + Customization
|
o  Use TypeScript for config and theme files?
|  No
|
o  Add VitePress npm scripts to package.json?
|  Yes
|
—  Done! Now run pnpm run docs:dev and start writing.

Tips:
- Since you've chosen to customize the theme, you should also explicitly install vue as a dev dependency.
```

初始化成功后，使用vscode或webstorm打开文件夹，会看到这样一个目录。接下来简单介绍一下每个文件的含义

```
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md 入口文件
└─ package.json

.vitepress，最核心的目录，
theme目录。自定义主题配置，css样式等
config.mjs。最核心的文件，各种配置导航栏、侧边栏、标题什么的都是在这里
node_modules。安装的依赖
api-examples.md和markdown-examples.md。官方给的两个示例
index.md。主页相关
package.json和pnpm-lock.yml。包管理工具需要用的
```

#### 启动项目

```
pnpm run docs:dev
```

打开，看到这个，说明初始化成功

  vitepress v1.6.3

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help



### 二 如何部署[2](https://docs.bugdesigner.cn/docs/Tutorial/vitepress.html#使用github-pages部署)

1. 需要在config.mjs里面配置base，名称为github仓库名称，注意不要忘记改之前的icon

```
base: "/myBlog/"
```

修改package.json, 添加` "packageManager": "pnpm@8.6.12"`, 版本号要与后面yaml中的pnpm版本号一致

```
{
  "devDependencies": {
    "vitepress": "^1.6.3"
  },
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview"
  },
+ "packageManager": "pnpm@8.6.12"
}

```

2.在 github 中创建一个名称为myBlog的仓库

3.在项目中初始化 git

```
git init
```

4.根目录添加.gitignore 文件

```
# Project exclude paths
.idea
.DS_Store
node_modules
/dist

```

5.上传代码

```
git push -u origin master
```

6.选择github actions

7.设置工作流

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/e4520c5976f84075989a7370ad2c883d.png)

重命名并设置deploy脚本[2](https://docs.bugdesigner.cn/docs/Tutorial/vitepress.html#使用github-pages部署)
脚本文件：参考的vitepress官方文档：https://vitepress.dev/guide/deploy#github-pages
**这里发现参考资料里面的node包有问题,换成我们的**

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/33bc9033b5c448759953705559df5472.png)

```

name: Deploy VitePress site to Pages

on:
  push:
    branches: [master]
  workflow_dispatch:
# 设置tokenn访问权限
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - name: Setup pnpm
        uses: pnpm/action-setup@v2 # 安装pnpm并添加到环境变量
        with:
          version: 8.6.12 # 指定需要的 pnpm 版本
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm # 设置缓存
      - name: Setup Pages
        uses: actions/configure-pages@v5  # 在工作流程自动配置GithubPages
      - name: Install dependencies
        run: pnpm install # 安装依赖
      - name: Build with VitePress
        run: |
          pnpm run docs:build # 启动项目
          touch .nojekyll  # 通知githubpages不要使用Jekyll处理这个站点，不知道为啥不生效，就手动搞了
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3  # 上传构建产物
        with:
          path: .vitepress/dist # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }} # 从后续的输出中获取部署后的页面URL
    needs: build    # 在build后面完成
    runs-on: ubuntu-latest  # 运行在最新版本的ubuntu系统上
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment  # 指定id
        uses: actions/deploy-pages@v4 # 将之前的构建产物部署到github pages中

```



![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/29287e1d427840aba685302b147fec05.png)



###### 8.点击确定，耐心等待15秒左右，就可以了，接下来查看我们的域名：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/c7436a384b364d3cb1cd97fc6410a13f.png)





***最后，就部署完毕了***

```json
json代码解读复制代码{
    ...
    "scripts": {
        "docs:dev": "vitepress dev docs",
        "docs:build": "vitepress build docs",
        "docs:serve": "vitepress serve docs"
    },
    ...
}
```

1. 在本地开启服务

   ```
   pnpm docs:dev
   ```

## 4. 配置VitePress

1. 文件结构

   ```arduino
   arduino代码解读复制代码.
   ├─ .github // 部署相关，后面会说
   │  ├─ workflows
   │  │  ├─ deploy.yml
   ├─ docs
   │  ├─ .vitepress
   │  │  ├─ config.js // 打包配置的文件
   │  ├─ articles // 文章的文件夹
   │  │  ├─ javascript-core // JavaScript核心文章
   │  │  └─ ...
   │  ├─ public // 这里可以放入全局文件内容，打包后原样复制到dist
   │  │  ├─ images // 文章中的图片
   └─ package.json
   ```

2. config.js 配置

   以下内容都有注释，大家根据自己情况增减，官方文档也非常清楚

   ```css
   //config.js
   export default {
       title: '码路芽子', // 博客的标题
       description: 'mlyz 的个人博客', // 博客的介绍
       base: '/blog/', // 如果想用 https://mlyz.wdy.github.io/blog/ 访问，那么这句话必填
       themeConfig: {
           logo: "/images/logo.png", // 页面上显示的logo
           nav: [ // 页面右上角的导航
               { text: "vue", link: "/articles/vue/上传素材到COS" },
               { text: "uniapp", link: "/articles/uniapp/一键登录" },
               {
                   text: '博客文档',
                   items: [ // 可以配置成下拉
                       { text: 'JavaScript 核心系列', link: '/articles/javaScript-core/构造函数、原型、原型链' },
                       { text: 'Vue 三方组件库', link: '/articles/libs/VForm3低代码初体验' },
                       { text: '其他', link: '/articles/other/nvm管理node' },
                   ]
               }
           ],
           sidebar: { // 侧边栏，可以分组
               "/articles/vue/": [
                   {
                       text: "基础",
                       items: [
                       ],
                   },
                   {
                       text: "代码段",
                       items: [
                           {
                               text: "上传素材到COS",
                               link: "/articles/vue/上传素材到COS",
                           },
                           {
                               text: "文件下载",
                               link: "/articles/vue/文件下载",
                           },
                       ],
                   },
               ],
               "/articles/uniapp/": [
                   {
                       text: "基础",
                       items: [
                       ],
                   },
                   {
                       text: "代码段",
                       items: [
                           {
                               text: "一键登录",
                               link: "/articles/uniapp/一键登录",
                           }
                       ],
                   },
               ],
               "/articles/javaScript-core/": [
                   {
                       text: "基础",
                       items: [
                       {
                           text: "1. 构造函数、原型、原型链",
                           link: "/articles/javaScript-core/构造函数、原型、原型链",
                       },
                       {
                           text: "2. 执行上下文和执行上下文栈",
                           link: "/articles/javaScript-core/执行上下文和执行上下文栈",
                       },
                       {
                           text: "3. this的指向",
                           link: "/articles/javaScript-core/this的指向",
                       },
                       ],
                   },
                   {
                       text: "进阶",
                       items: [
                       {
                           text: "xx",
                           link: "/xx",
                       },
                       ],
                   },
               ],
               "/articles/libs/": [
                   {
                       items: [
                       {
                           text: "1. VForm3低代码初体验",
                           link: "/articles/libs/VForm3低代码初体验",
                       },
                       ],
                   }
               ],
           },
           socialLinks: [{ icon: "github", link: "https://github.com/mlyz-wdy" }], // 可以连接到 github
       },
   }
   ```

## 5. 上传到 github 自动部署

在 `.github/workflows/deploy.yml` 中

```yaml
yaml代码解读复制代码name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16                              v18.12
      - run: npm i pnpm -g
      - run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

以上内容可以直接复制使用，如果想修改，可以看文档自行修改

1. 在上传到github中，就会自己执行actions ![iShot_2023-03-23_10.17.31.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a1b2eea0193a4249a29f6fcdf1851047~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?) 执行状态可以自行查看

2. 完成之后会在分支中，新增一个分支

   ![iShot_2023-03-23_10.19.11.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0da2de9038684ea989a20dcc7ca9d517~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

3. 在 settings/pages 中更换源为 gh-pages

   ![1679538071539.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7758f5bae283496487657a12bdc5b624~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?) 此时完成了，大家可以看看自己部署的博客了

**我反正用了不止10分钟，毕竟还要研究，但你们看到这么清晰的文章，我觉得10分钟足够了，如果超过了，你们反思一下，我哪里写的不清楚，我改还不行么**

**我觉得你们一定会报错，如果没报错当我没说**

[GitHub Action: The process ‘/usr/bin/git‘ failed with exit code 128](https://juejin.cn/post/7213544005602590780)

在利用 github workflows 自动部署博客的时候出错了

![1679538076974.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5257fa03824b4756a8dba2fdaaa9a26a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

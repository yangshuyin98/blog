---
title: Github Actions
date: 2024-02-10
tags:
 - 健康
 -  - 
categories:
 - 健康生活
sticky: 3
---





# Github Actions + Github Pages 自动发布 Vue3 + Vite 项目

难度：★★★☆☆

> 目的：提交代码，自动触发构建，并发布到 Github Pages 上

> 不详细讲为什么，只讲在怎么做





# 项目准备

1. 先在`github`上准备一个前端项目，我使用`vue3`搭建了一个前端项目，技术栈为：`vue3、vite、element-plus、pinia、vue-router、headlessui、tailwindcss、typescript`

如何搭建可看这篇：[《vue3 + vite + element-plus + tailwindcss + typescript 实战项目》](https://juejin.cn/spost/7346720393425715219)

1. 前端项目情况：只有`main`分支；项目文件如下图，代码[在这](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FMrHzq%2Fvue3-vite-element-plus-tailwindcss-typescript)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/062cd4f6e67043c7bfdf2819a011828e~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=614768&e=png&b=ffffff)

# Github Pages 配置

可以理解为免费的线上服务器，可展示 build 后的前端项目

1. 开启配置

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae8e484735ea46e4993196674e6957af~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=498578&e=png&b=ffffff)![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/676ad4616a0243b2aa3295193906e53c~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=498518&e=png&b=ffffff)

1. 开启配置后，再刷新下页面（没有的话可强刷、关闭重进），可以看到访问地址

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/64e7f68eff21440294bd3394a272f363~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=527774&e=png&b=ffffff)

1. 访问下地址，发现页面是空白的，打开控制台，发现有 html 结构，原因是：会默认加载了该 github 项目下根目录的 index.html 文件

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6121bb80193a4c13ac8ece97de87d515~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=497475&e=png&b=ffffff)

1. 现在去改一下该 github 项目根目录的 index.html 文件，加个点文字，然后提交代码

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c1f782ab4fe444bba73063efa38899c~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=2944&h=456&s=99282&e=png&b=fffefe)
 等个 1、2 分钟，再刷新访问网址，就能看到最新的内容
 ![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6b25e2129c949c78cd7945a85f3fcb7~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=2412&h=1838&s=407190&e=png&b=fefdfd)

1. 至此简单的 github pages 配置完成，可以放只有一个 .html 的在线简历

# Github Actions 配置

可以理解为 CI、CD

入门文档可看这篇：[GitHub Actions 入门教程 - 阮一峰的网络日志](https://link.juejin.cn?target=https%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2019%2F09%2Fgetting-started-with-github-actions.html)

可以配合上面的 Github Pages，实现提交代码，自动构建并发布的效果。

1. 更改`Github Pages`配置，改为`Github Actions`形式

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79df450fef54435a9b8de1074e4ff10f~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=574971&e=png&b=ffffff)

1. 创建`Github Actions`的配置

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86482575beab49f0bee8a8b8770267d1~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=537177&e=png&b=ffffff)

1. 会帮我们生成了一个最基本的配置，然后我们提交到`mian`分支上

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/596d647d1c1640ec82b03b91400c772a~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=752153&e=png&b=ffffff)
 ![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a213dd6e63f4c1faa1656dc51b300c9~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=759069&e=png&b=8d9092)

1. 提交后，我们进入`Actions`下，可看到第一个`workflows`

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/23f33e4a55244b1f92ff2e89851db9c8~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=421696&e=png&b=ffffff)

1. 现在去改一下该 github 项目根目录的 index.html 文件，再加点文字，然后提交代码

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/983b0aa7062d46eeb7c02f53de2fc7ef~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=408329&e=png&b=ffffff)

1. 然后去`Actions`下，看又有了一个`workflow`

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a787476ceef1420fbae4eabfac19f7c2~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=392703&e=png&b=ffffff)

1. 然后等它成功后，访问下该项目的 Github Pages，看到内容也变化了

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aed9f24f4d154641be9707402cae8f52~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1166&h=542&s=30434&e=png&b=ffffff)

1. 至此简单的 github actions 配置完成，结合 github pages 可以放只有一个 .html 的在线简历，实现提交代码自动部署功能（虽然没啥用）

# Vue3 + Vite 项目接入

上面的流程比较简单，真正的项目是需要：提交代码后，触发构建、生成 dist、部署 dist，最终实现页面内容的更新

> 本次项目的线上代码地址：[在这](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FMrHzq%2Fvue3-vite-element-plus-tailwindcss-typescript)

1. 将项目拉取到本地：`git clone xxx`
2. 先在本地跑下构建命令，确定没得问题
3. 更改`vite.config.ts`配置，将打包目录改为 github 项目目录

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e85707e0438143d3889ad31d0c9f2fa0~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=2584&h=1228&s=235092&e=png&b=282a35)

1. 更改`.github/workflows/static.yml`配置，加入打包流程：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b310815f91034115ba0dc80791355f7a~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=2796&h=1574&s=510244&e=png&b=2a2d37)

1. 完整代码如下（pnpm 版）：

```yml
yml 代码解读复制代码# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ['main']

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: 'pnpm'
      - name: Install dependencies
        run: pnpm install
      - name: Build
        run: pnpm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload entire repository
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

1. 完整代码如下（npm 版）：

```yml
yml 代码解读复制代码# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ['main']

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload entire repository
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

1. 提交一下代码，然后去看`Actions`状态

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21d66353fa93427a94e61a52fdf5a593~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=445456&e=png&b=ffffff)

1. 如果觉得频繁跳到 github 麻烦，可以安装 VScode 插件：[GitHub Actions](https://link.juejin.cn?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DGitHub.vscode-github-actions)，然后在 VScode 里面直接看，并且还可点击直接打开网页的`github actions`内

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/943d3599cd1141b5ad8e3cded9d52980~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=2886&h=1732&s=550775&e=png&b=272833)

1. actions 成功后，打开项目的 github pages 访问地址，看看是否对了，已经对了

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d18ec250395043ffb1c612d3ba2d0a40~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=445820&e=png&b=fffefe)

1. 然后点点页面，跳转下路由，都是对的
2. 但是刷新下发现就 404 了，这不是浪费感情吗？

别急，这个原因是前端项目采用了`history`的路由模式，对`github pages`来说，访问`https://mrhzq.github.io/vue3-vite-element-plus-tailwindcss-typescript/about`是访问`/about`目录下的`index.html`

但我们哪有`/about`目录，所以就去找访问目录(我们配的`/dist`)下的`404.html`，没找到就显示官方的 404 页面

# 问题处理

## Github Pages 刷新后，页面 404

> 原因上面一行就有写，不赘述；正确的处理方式是：配置 nginx，将其他路径的访问全部都指向 index.html。但 Github Pages 我们没法这样去处理，所以只能“取巧”

1、前端项目采用`hash`模式，重新触发`actions`后，就完全正常了，但**地址就不好看，看个人选择**。只需改路由就行，然后提交代码，等`actions`成功，就可以任意刷新

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d4d8ebb70a54544ab9191183f951b8a~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=2730&h=1110&s=285541&e=png&b=292b36)

2、在访问目录(我们配的`/dist`)下的创建一个`404.html`，内容跟`index.html`一模一样，这样显示`404.html`时也跟正常显示`index.html`一样

> 我们可以在打包成功了，复制下`index.html`，命名为`404.html`就行

a、`package.json`新增一个`404build`命令，用于生成`404.html`

```json
json 代码解读复制代码{
  // ...
  "scripts": {
    // ...
      
    "404build": "cp dist/index.html dist/404.html"
  },
}
```

b、`.github/workflows/static.yml`新增一个`404Build`步骤

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/60499003a0b94769beda257984222e85~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=2438&h=1308&s=292387&e=png&b=282a35)

```yml
yml 代码解读复制代码- name: 404Build
run: npm run 404build
```

c、提交代码，等`actions`成功，就可以任意刷新

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c53a0a975a8411b8e496995d266c26b~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=551982&e=png&b=ffffff)

## Github Actions 失败处理

失败的，github 会发邮件给你哦

1. 找到失败的

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69e6633656434fbab5aebfbf7090d59c~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=471618&e=png&b=ffffff)

1. 进入详情

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/432a03fc67af4132ba27a340eed378b0~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=375931&e=png&b=ffffff)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f05ea983a1341df9f5eb94203931fa9~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=3024&h=1890&s=441298&e=png&b=262a2f)

### 报错：Supported file patterns: package-lock.json,npm-shrinkwrap.json,yarn.lock

因为我使用的是 pnpm，所以项目中没有 package-lock.json 文件。

处理方式：`npm i`，生成一个`package-lock.json`然后提交代码



作者：前端黄先森
链接：https://juejin.cn/post/7346524071185006611
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

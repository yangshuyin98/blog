---
title: VitePress + Github Pages
date: 2024-02-10
tags:
 - VitePress
 - Github Pages
categories:
 - 健康生活健康生活
sticky: 3
---

# 



# 如何搭建个人博客（详细图解vue3推荐方式VitePress + Github Pages）

# 难度：★★★☆☆

## 如何搭建个人博客（详细图解vue3推荐方式VitePress + Github Pages）

**前言：**

这里将介绍作为一个国内开发者，采取的最推荐的vitepress（vue3推荐方式）的方式进行搭建，这也是当下最流行的方式哦！

先来看看vitepress官网给我们的链接：

[vitepress.dev](https://link.juejin.cn/?target=https%3A%2F%2Fvitepress.dev)

### 1、认识和介绍vitepress

VitePress 由 Vite 和 Vue 驱动的静态站点生成器 简单、强大、快速。就是你想要的现代 SSG 框架！

我们只需要写markdown文档就可以生成好看的博客文章，或者说，你直接写就成为了你的博客文章！

目前官网给我们推荐的方式有以下这几种：

这里我就直接采取了yarn的方式进行构建，下面是我的版本号：

```
node v20.11.0

经测试（Node 18.20.4 运行我们项目也完全没问题）

```

### 2、vitepress搭建和运行

`环境 Node 18 或者Node 20 推荐 `接下来就开始搭建咋们的个人博客



👉 新建一个空白文件夹Nexusnote



cmd打开文件夹开始构建我们的博客

```
yarn init  // 初始化
yarn add -D vitepress //添加vitepress
yarn vitepress init // 用vitepress初始化项目 ，直接一直按
yarn docs:dev //运行
```

这个时候直接浏览器访问`http://localhost:5173/`就可以了！

ok，一个基础的博客已近搭建完了，试了试，前后不过三分钟

看看我们的文档结构：

### 3、vitepress博客配置

配置好了以后，接下来就开始设置砸门自己的博客了

#### 👉设置浏览器标题和博客标题

我的是选择的ts版本的，位于.vitepress=> config.mts 文件里面：

#### 👉设置网站logo

在根目录下面新建一个public=> logo.svg config.mts之中修改`themeConfig`



```
themeConfig: {
    logo: '/logo.svg',
}
```

这就是我的LOGO

#### 👉设置网站标题

- 网站标题可以单独设置

```
 themeConfig: {
    siteTitle:'♥',
 }

```

- 隐藏站点标题 `siteTitle`设置为false即可

```
export default {
  themeConfig: {
    logo: '/my-logo.svg',
    siteTitle: false
  }
}
```

#### 👉设置导航栏

在`themeConfig.nav` 更改导航栏。

其中 `text` 是 nav 中显示文本，而 `link` 是单击文本时的链接。对于链接，将路径设置为不带 `.md` 后缀的实际文件，并且始终以 `/` 开头。

导航链接可以是下拉菜单。只需要替换 `link` 选项，设置 `items` 数组。

```
//js

export default {
  themeConfig: {
     nav: [
      { text: 'Home', link: '/' },
      { text: '掘金链接', link: 'https://juejin.cn/user/1874034273300919' },
      { text: 'Github', link: 'https://github.com/NexusLin' },
      { text: 'About Me', items: [ { text: '介绍和技术栈', link: '/item-1' }, { text: '文章', link: '/item-2' }, { text: '其他', link: '/item-3' } ] }
    ],
  }
}

```

#### 👉设置右侧链接

设置themeConfig=> socialLinks

```
socialLinks: [
  { icon: 'github', link: 'https://github.com/NexusLin'}
],
```

#### 👉开启搜索项

设置themeConfig=> socialLinks

```
search: {
      provider: "local",
 },

```

#### 👉设置页脚

设置themeConfig=> footer

```
 footer: {
  message: "Released under the MIT License.",
  copyright: "Copyright ©林太白",
},
```

#### 👉设置主页

接下来我们根目录下面的`index.md`文件里面

##### 🍎首页的部分设置也非常简单，按照着设置一一对应就可以

分别是标题，描述，下面的按钮，以及再下面的描述部分

这里有一个图形，具体不知道哪里来的，但是非常好

![image.png](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/9322b86dd7c748f88edac126f2c8540a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&x-expires=1742385314&x-signature=3tsRlEGSbKhrZJtO4xFbrPiACP0%3D)

设置主页以后我们的部分就变成了

![image.png](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/9973a8f3a2fd4ef89bbb4cbfad785a31~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&x-expires=1742385314&x-signature=2%2B4aYerJxjaA4LN6JZQmxYPA7Yw%3D)

##### 🍎 也可以添加链接和图片

```
title: Api 
details: Api
icon:
  src: /logo.svg
link: /api-examples
```

##### 🍎 自己在主页再添加markdown文本

#### 👉配置一个新页面

根目录下新建一个TGapi.md文档，然后再index.md之中配置一下

```
在主页index.md=> hero=> actions
  actions:
    - theme: alt
      text: API Examples
      link: /TGapi

```

#### 👉左侧侧边栏配置

在config.mts之中themeConfig=> sidebar 配置左侧的侧边栏部分

```
 sidebar: [
      {
        text: 'TGapi文档',
        items: [
          { text: 'TGapi登陆注册', link: '/item-a' },
          { text: 'Item B', link: '/item-b' },
        ]
      },
       {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ]

```

也就是点击进去的这部分

![image.png](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/bfb9312876964bb8923fda87d760fcff~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&x-expires=1742385314&x-signature=IUY5HudXBE7I9iFd2JaQRZZ64Ng%3D)

##### 🍎 左侧侧边栏折叠

在config.mts之中themeConfig=> sidebar 配置左侧的侧边栏部分=> 设置collapsed:true, 就可以成功折叠展开

```
 {
        collapsed: false,
        text: 'TGapi文档',
        items: [
          { text: 'TGapi登陆注册', link: '/item-a' },
          { text: 'Item B', link: '/item-b' },
        ]
      },

```

#### 👉右侧侧边栏其实就是我们文章的标题

On this page 右侧一直显示一个是官方默认给我们的，其他都是我们自己的

![image.png](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/1f50c8c426fb49f2ba85202151c59be3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&x-expires=1742385314&x-signature=GAr1CvNcSTBx3g4KVeerurLdEak%3D)

### 4、新建页面和自定义页面

#### 👉新建一个页面Hello.vue,在根目录下面存一个Hello.vue文件

然后在主页之中直接引入连接

```
<script setup>
import Hello from './Hello.vue'
</script>

# Docs

This is a .md using a custom component

<Hello />

```

Hello.md内容如下：

```
<template>
	<div class="pagehello">我是vue页面</div>
</template>

<style>
	.pagehello{
		width: 400x;
		height: 400px;
		background: cadetblue;
		color: #fff;
	}
</style>

```

然后我们看看效果

看到这个操作vue文件。岂不是意味着我们可以随便定义我们的网站吗

### 5、自定义主题

vitepress也支持我们自定义自己的主题，接下来我们就自定义一下自己的主题然后看看

在.vitepress=> theme =>  index.ts

在这个里面不仅可以放我们的样式，同时也可以引入我们的组件，vitepress也推荐这种方式

```
import DefaultTheme from 'vitepress/theme'
// import Foo from '../../views/Echarts.vue'
import './tg.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // app.component('foo', Foo)
  }
}
```

`theme/tg.css` (天工开源的缩写)进行样式代码编写

```
/* 该文件配置网站的文字  图标 等等 一系列dom元素的样式文件 */
:root {
  /* 通过配置 自定义颜色 */
  --vp-home-hero-name-color: transparent;
  /* 主页标题文字的颜色  */
  --vp-home-hero-name-background: -webkit-linear-gradient(-45deg, #47caff  50%, #5468ff 50%);;

  /* 主页左侧背景添加渐变光圈 */
  --vp-home-hero-image-background-image: linear-gradient(135deg, #5468ff 10%, #47caff  50%);
  --vp-home-hero-image-filter: blur(100px);


  /* botton按钮 */
  /* --vp-button-brand-border: #81634b; */
  /* 按钮文本颜色 */
  --vp-button-brand-text: #ffffff;
  /* 按钮背景颜色 */
  --vp-button-brand-bg: #5468ff;

/*#00FFEE*/
  /* 鼠标悬停的效果之后的样式 */
  --vp-button-brand-hover-border: #bd34fe;
  --vp-button-brand-hover-text: #fff;
  --vp-button-brand-hover-bg: #bd34fe;

  --vp-button-brand-active-border: #bd34fe;

  /* 主题基色 */
  --vp-c-brand: #bd34fe;
  /* 白色模式 主题基色 */
  --vp-c-brand-light: #bd34fe;
  /* 黑色模式 主题基色 */
  --vp-c-brand-dark: #bd34fe;
}

```

然后看看我们自己自定义的颜色

![image.png](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/f130218e1bb3423a9e2eda68945b893b~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&x-expires=1742385314&x-signature=Z5cTci9a%2B4zRP%2BosQRR43W71RhI%3D)

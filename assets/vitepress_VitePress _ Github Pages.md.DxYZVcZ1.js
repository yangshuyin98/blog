import{_ as s,c as n,o as e,ae as p}from"./chunks/framework.CLNW5JS9.js";const g=JSON.parse('{"title":"VitePress + Github Pages","description":"","frontmatter":{"title":"VitePress + Github Pages","date":"2024-02-10T00:00:00.000Z","tags":["VitePress","Github Pages"],"categories":["健康生活健康生活"],"sticky":3},"headers":[],"relativePath":"vitepress/VitePress + Github Pages.md","filePath":"vitepress/VitePress + Github Pages.md"}'),t={name:"vitepress/VitePress + Github Pages.md"};function i(l,a,o,c,d,r){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1><h1 id="如何搭建个人博客-详细图解vue3推荐方式vitepress-github-pages" tabindex="-1">如何搭建个人博客（详细图解vue3推荐方式VitePress + Github Pages） <a class="header-anchor" href="#如何搭建个人博客-详细图解vue3推荐方式vitepress-github-pages" aria-label="Permalink to &quot;如何搭建个人博客（详细图解vue3推荐方式VitePress + Github Pages）&quot;">​</a></h1><h1 id="难度-★★★☆☆" tabindex="-1">难度：★★★☆☆ <a class="header-anchor" href="#难度-★★★☆☆" aria-label="Permalink to &quot;难度：★★★☆☆&quot;">​</a></h1><h2 id="如何搭建个人博客-详细图解vue3推荐方式vitepress-github-pages-1" tabindex="-1">如何搭建个人博客（详细图解vue3推荐方式VitePress + Github Pages） <a class="header-anchor" href="#如何搭建个人博客-详细图解vue3推荐方式vitepress-github-pages-1" aria-label="Permalink to &quot;如何搭建个人博客（详细图解vue3推荐方式VitePress + Github Pages）&quot;">​</a></h2><p><strong>前言：</strong></p><p>这里将介绍作为一个国内开发者，采取的最推荐的vitepress（vue3推荐方式）的方式进行搭建，这也是当下最流行的方式哦！</p><p>先来看看vitepress官网给我们的链接：</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fvitepress.dev" target="_blank" rel="noreferrer">vitepress.dev</a></p><h3 id="_1、认识和介绍vitepress" tabindex="-1">1、认识和介绍vitepress <a class="header-anchor" href="#_1、认识和介绍vitepress" aria-label="Permalink to &quot;1、认识和介绍vitepress&quot;">​</a></h3><p>VitePress 由 Vite 和 Vue 驱动的静态站点生成器 简单、强大、快速。就是你想要的现代 SSG 框架！</p><p>我们只需要写markdown文档就可以生成好看的博客文章，或者说，你直接写就成为了你的博客文章！</p><p>目前官网给我们推荐的方式有以下这几种：</p><p>这里我就直接采取了yarn的方式进行构建，下面是我的版本号：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>node v20.11.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>经测试（Node 18.20.4 运行我们项目也完全没问题）</span></span></code></pre></div><h3 id="_2、vitepress搭建和运行" tabindex="-1">2、vitepress搭建和运行 <a class="header-anchor" href="#_2、vitepress搭建和运行" aria-label="Permalink to &quot;2、vitepress搭建和运行&quot;">​</a></h3><p><code>环境 Node 18 或者Node 20 推荐 </code>接下来就开始搭建咋们的个人博客</p><p>👉 新建一个空白文件夹Nexusnote</p><p>cmd打开文件夹开始构建我们的博客</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn init  // 初始化</span></span>
<span class="line"><span>yarn add -D vitepress //添加vitepress</span></span>
<span class="line"><span>yarn vitepress init // 用vitepress初始化项目 ，直接一直按</span></span>
<span class="line"><span>yarn docs:dev //运行</span></span></code></pre></div><p>这个时候直接浏览器访问<code>http://localhost:5173/</code>就可以了！</p><p>ok，一个基础的博客已近搭建完了，试了试，前后不过三分钟</p><p>看看我们的文档结构：</p><h3 id="_3、vitepress博客配置" tabindex="-1">3、vitepress博客配置 <a class="header-anchor" href="#_3、vitepress博客配置" aria-label="Permalink to &quot;3、vitepress博客配置&quot;">​</a></h3><p>配置好了以后，接下来就开始设置砸门自己的博客了</p><h4 id="👉设置浏览器标题和博客标题" tabindex="-1">👉设置浏览器标题和博客标题 <a class="header-anchor" href="#👉设置浏览器标题和博客标题" aria-label="Permalink to &quot;👉设置浏览器标题和博客标题&quot;">​</a></h4><p>我的是选择的ts版本的，位于.vitepress=&gt; config.mts 文件里面：</p><h4 id="👉设置网站logo" tabindex="-1">👉设置网站logo <a class="header-anchor" href="#👉设置网站logo" aria-label="Permalink to &quot;👉设置网站logo&quot;">​</a></h4><p>在根目录下面新建一个public=&gt; logo.svg config.mts之中修改<code>themeConfig</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>themeConfig: {</span></span>
<span class="line"><span>    logo: &#39;/logo.svg&#39;,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这就是我的LOGO</p><h4 id="👉设置网站标题" tabindex="-1">👉设置网站标题 <a class="header-anchor" href="#👉设置网站标题" aria-label="Permalink to &quot;👉设置网站标题&quot;">​</a></h4><ul><li>网站标题可以单独设置</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> themeConfig: {</span></span>
<span class="line"><span>    siteTitle:&#39;♥&#39;,</span></span>
<span class="line"><span> }</span></span></code></pre></div><ul><li>隐藏站点标题 <code>siteTitle</code>设置为false即可</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>  themeConfig: {</span></span>
<span class="line"><span>    logo: &#39;/my-logo.svg&#39;,</span></span>
<span class="line"><span>    siteTitle: false</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="👉设置导航栏" tabindex="-1">👉设置导航栏 <a class="header-anchor" href="#👉设置导航栏" aria-label="Permalink to &quot;👉设置导航栏&quot;">​</a></h4><p>在<code>themeConfig.nav</code> 更改导航栏。</p><p>其中 <code>text</code> 是 nav 中显示文本，而 <code>link</code> 是单击文本时的链接。对于链接，将路径设置为不带 <code>.md</code> 后缀的实际文件，并且始终以 <code>/</code> 开头。</p><p>导航链接可以是下拉菜单。只需要替换 <code>link</code> 选项，设置 <code>items</code> 数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  themeConfig: {</span></span>
<span class="line"><span>     nav: [</span></span>
<span class="line"><span>      { text: &#39;Home&#39;, link: &#39;/&#39; },</span></span>
<span class="line"><span>      { text: &#39;掘金链接&#39;, link: &#39;https://juejin.cn/user/1874034273300919&#39; },</span></span>
<span class="line"><span>      { text: &#39;Github&#39;, link: &#39;https://github.com/NexusLin&#39; },</span></span>
<span class="line"><span>      { text: &#39;About Me&#39;, items: [ { text: &#39;介绍和技术栈&#39;, link: &#39;/item-1&#39; }, { text: &#39;文章&#39;, link: &#39;/item-2&#39; }, { text: &#39;其他&#39;, link: &#39;/item-3&#39; } ] }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="👉设置右侧链接" tabindex="-1">👉设置右侧链接 <a class="header-anchor" href="#👉设置右侧链接" aria-label="Permalink to &quot;👉设置右侧链接&quot;">​</a></h4><p>设置themeConfig=&gt; socialLinks</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>socialLinks: [</span></span>
<span class="line"><span>  { icon: &#39;github&#39;, link: &#39;https://github.com/NexusLin&#39;}</span></span>
<span class="line"><span>],</span></span></code></pre></div><h4 id="👉开启搜索项" tabindex="-1">👉开启搜索项 <a class="header-anchor" href="#👉开启搜索项" aria-label="Permalink to &quot;👉开启搜索项&quot;">​</a></h4><p>设置themeConfig=&gt; socialLinks</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>search: {</span></span>
<span class="line"><span>      provider: &quot;local&quot;,</span></span>
<span class="line"><span> },</span></span></code></pre></div><h4 id="👉设置页脚" tabindex="-1">👉设置页脚 <a class="header-anchor" href="#👉设置页脚" aria-label="Permalink to &quot;👉设置页脚&quot;">​</a></h4><p>设置themeConfig=&gt; footer</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> footer: {</span></span>
<span class="line"><span>  message: &quot;Released under the MIT License.&quot;,</span></span>
<span class="line"><span>  copyright: &quot;Copyright ©林太白&quot;,</span></span>
<span class="line"><span>},</span></span></code></pre></div><h4 id="👉设置主页" tabindex="-1">👉设置主页 <a class="header-anchor" href="#👉设置主页" aria-label="Permalink to &quot;👉设置主页&quot;">​</a></h4><p>接下来我们根目录下面的<code>index.md</code>文件里面</p><h5 id="🍎首页的部分设置也非常简单-按照着设置一一对应就可以" tabindex="-1">🍎首页的部分设置也非常简单，按照着设置一一对应就可以 <a class="header-anchor" href="#🍎首页的部分设置也非常简单-按照着设置一一对应就可以" aria-label="Permalink to &quot;🍎首页的部分设置也非常简单，按照着设置一一对应就可以&quot;">​</a></h5><p>分别是标题，描述，下面的按钮，以及再下面的描述部分</p><p>这里有一个图形，具体不知道哪里来的，但是非常好</p><p><img src="https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/9322b86dd7c748f88edac126f2c8540a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&amp;x-expires=1742385314&amp;x-signature=3tsRlEGSbKhrZJtO4xFbrPiACP0%3D" alt="image.png"></p><p>设置主页以后我们的部分就变成了</p><p><img src="https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/9973a8f3a2fd4ef89bbb4cbfad785a31~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&amp;x-expires=1742385314&amp;x-signature=2%2B4aYerJxjaA4LN6JZQmxYPA7Yw%3D" alt="image.png"></p><h5 id="🍎-也可以添加链接和图片" tabindex="-1">🍎 也可以添加链接和图片 <a class="header-anchor" href="#🍎-也可以添加链接和图片" aria-label="Permalink to &quot;🍎 也可以添加链接和图片&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>title: Api </span></span>
<span class="line"><span>details: Api</span></span>
<span class="line"><span>icon:</span></span>
<span class="line"><span>  src: /logo.svg</span></span>
<span class="line"><span>link: /api-examples</span></span></code></pre></div><h5 id="🍎-自己在主页再添加markdown文本" tabindex="-1">🍎 自己在主页再添加markdown文本 <a class="header-anchor" href="#🍎-自己在主页再添加markdown文本" aria-label="Permalink to &quot;🍎 自己在主页再添加markdown文本&quot;">​</a></h5><h4 id="👉配置一个新页面" tabindex="-1">👉配置一个新页面 <a class="header-anchor" href="#👉配置一个新页面" aria-label="Permalink to &quot;👉配置一个新页面&quot;">​</a></h4><p>根目录下新建一个TGapi.md文档，然后再index.md之中配置一下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>在主页index.md=&gt; hero=&gt; actions</span></span>
<span class="line"><span>  actions:</span></span>
<span class="line"><span>    - theme: alt</span></span>
<span class="line"><span>      text: API Examples</span></span>
<span class="line"><span>      link: /TGapi</span></span></code></pre></div><h4 id="👉左侧侧边栏配置" tabindex="-1">👉左侧侧边栏配置 <a class="header-anchor" href="#👉左侧侧边栏配置" aria-label="Permalink to &quot;👉左侧侧边栏配置&quot;">​</a></h4><p>在config.mts之中themeConfig=&gt; sidebar 配置左侧的侧边栏部分</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> sidebar: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        text: &#39;TGapi文档&#39;,</span></span>
<span class="line"><span>        items: [</span></span>
<span class="line"><span>          { text: &#39;TGapi登陆注册&#39;, link: &#39;/item-a&#39; },</span></span>
<span class="line"><span>          { text: &#39;Item B&#39;, link: &#39;/item-b&#39; },</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>       {</span></span>
<span class="line"><span>        text: &#39;Examples&#39;,</span></span>
<span class="line"><span>        items: [</span></span>
<span class="line"><span>          { text: &#39;Markdown Examples&#39;, link: &#39;/markdown-examples&#39; },</span></span>
<span class="line"><span>          { text: &#39;Runtime API Examples&#39;, link: &#39;/api-examples&#39; }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span></code></pre></div><p>也就是点击进去的这部分</p><p><img src="https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/bfb9312876964bb8923fda87d760fcff~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&amp;x-expires=1742385314&amp;x-signature=IUY5HudXBE7I9iFd2JaQRZZ64Ng%3D" alt="image.png"></p><h5 id="🍎-左侧侧边栏折叠" tabindex="-1">🍎 左侧侧边栏折叠 <a class="header-anchor" href="#🍎-左侧侧边栏折叠" aria-label="Permalink to &quot;🍎 左侧侧边栏折叠&quot;">​</a></h5><p>在config.mts之中themeConfig=&gt; sidebar 配置左侧的侧边栏部分=&gt; 设置collapsed:true, 就可以成功折叠展开</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> {</span></span>
<span class="line"><span>        collapsed: false,</span></span>
<span class="line"><span>        text: &#39;TGapi文档&#39;,</span></span>
<span class="line"><span>        items: [</span></span>
<span class="line"><span>          { text: &#39;TGapi登陆注册&#39;, link: &#39;/item-a&#39; },</span></span>
<span class="line"><span>          { text: &#39;Item B&#39;, link: &#39;/item-b&#39; },</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      },</span></span></code></pre></div><h4 id="👉右侧侧边栏其实就是我们文章的标题" tabindex="-1">👉右侧侧边栏其实就是我们文章的标题 <a class="header-anchor" href="#👉右侧侧边栏其实就是我们文章的标题" aria-label="Permalink to &quot;👉右侧侧边栏其实就是我们文章的标题&quot;">​</a></h4><p>On this page 右侧一直显示一个是官方默认给我们的，其他都是我们自己的</p><p><img src="https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/1f50c8c426fb49f2ba85202151c59be3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&amp;x-expires=1742385314&amp;x-signature=GAr1CvNcSTBx3g4KVeerurLdEak%3D" alt="image.png"></p><h3 id="_4、新建页面和自定义页面" tabindex="-1">4、新建页面和自定义页面 <a class="header-anchor" href="#_4、新建页面和自定义页面" aria-label="Permalink to &quot;4、新建页面和自定义页面&quot;">​</a></h3><h4 id="👉新建一个页面hello-vue-在根目录下面存一个hello-vue文件" tabindex="-1">👉新建一个页面Hello.vue,在根目录下面存一个Hello.vue文件 <a class="header-anchor" href="#👉新建一个页面hello-vue-在根目录下面存一个hello-vue文件" aria-label="Permalink to &quot;👉新建一个页面Hello.vue,在根目录下面存一个Hello.vue文件&quot;">​</a></h4><p>然后在主页之中直接引入连接</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import Hello from &#39;./Hello.vue&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Docs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This is a .md using a custom component</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Hello /&gt;</span></span></code></pre></div><p>Hello.md内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>	&lt;div class=&quot;pagehello&quot;&gt;我是vue页面&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>	.pagehello{</span></span>
<span class="line"><span>		width: 400x;</span></span>
<span class="line"><span>		height: 400px;</span></span>
<span class="line"><span>		background: cadetblue;</span></span>
<span class="line"><span>		color: #fff;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>然后我们看看效果</p><p>看到这个操作vue文件。岂不是意味着我们可以随便定义我们的网站吗</p><h3 id="_5、自定义主题" tabindex="-1">5、自定义主题 <a class="header-anchor" href="#_5、自定义主题" aria-label="Permalink to &quot;5、自定义主题&quot;">​</a></h3><p>vitepress也支持我们自定义自己的主题，接下来我们就自定义一下自己的主题然后看看</p><p>在.vitepress=&gt; theme =&gt; index.ts</p><p>在这个里面不仅可以放我们的样式，同时也可以引入我们的组件，vitepress也推荐这种方式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import DefaultTheme from &#39;vitepress/theme&#39;</span></span>
<span class="line"><span>// import Foo from &#39;../../views/Echarts.vue&#39;</span></span>
<span class="line"><span>import &#39;./tg.css&#39;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  extends: DefaultTheme,</span></span>
<span class="line"><span>  enhanceApp({ app }) {</span></span>
<span class="line"><span>    // app.component(&#39;foo&#39;, Foo)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>theme/tg.css</code> (天工开源的缩写)进行样式代码编写</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 该文件配置网站的文字  图标 等等 一系列dom元素的样式文件 */</span></span>
<span class="line"><span>:root {</span></span>
<span class="line"><span>  /* 通过配置 自定义颜色 */</span></span>
<span class="line"><span>  --vp-home-hero-name-color: transparent;</span></span>
<span class="line"><span>  /* 主页标题文字的颜色  */</span></span>
<span class="line"><span>  --vp-home-hero-name-background: -webkit-linear-gradient(-45deg, #47caff  50%, #5468ff 50%);;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 主页左侧背景添加渐变光圈 */</span></span>
<span class="line"><span>  --vp-home-hero-image-background-image: linear-gradient(135deg, #5468ff 10%, #47caff  50%);</span></span>
<span class="line"><span>  --vp-home-hero-image-filter: blur(100px);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* botton按钮 */</span></span>
<span class="line"><span>  /* --vp-button-brand-border: #81634b; */</span></span>
<span class="line"><span>  /* 按钮文本颜色 */</span></span>
<span class="line"><span>  --vp-button-brand-text: #ffffff;</span></span>
<span class="line"><span>  /* 按钮背景颜色 */</span></span>
<span class="line"><span>  --vp-button-brand-bg: #5468ff;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*#00FFEE*/</span></span>
<span class="line"><span>  /* 鼠标悬停的效果之后的样式 */</span></span>
<span class="line"><span>  --vp-button-brand-hover-border: #bd34fe;</span></span>
<span class="line"><span>  --vp-button-brand-hover-text: #fff;</span></span>
<span class="line"><span>  --vp-button-brand-hover-bg: #bd34fe;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --vp-button-brand-active-border: #bd34fe;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 主题基色 */</span></span>
<span class="line"><span>  --vp-c-brand: #bd34fe;</span></span>
<span class="line"><span>  /* 白色模式 主题基色 */</span></span>
<span class="line"><span>  --vp-c-brand-light: #bd34fe;</span></span>
<span class="line"><span>  /* 黑色模式 主题基色 */</span></span>
<span class="line"><span>  --vp-c-brand-dark: #bd34fe;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后看看我们自己自定义的颜色</p><p><img src="https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/f130218e1bb3423a9e2eda68945b893b~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&amp;x-expires=1742385314&amp;x-signature=Z5cTci9a%2B4zRP%2BosQRR43W71RhI%3D" alt="image.png"></p>`,91)]))}const b=s(t,[["render",i]]);export{g as __pageData,b as default};

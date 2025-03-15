import{_ as a,c as n,o as i,ae as p}from"./chunks/framework.CLNW5JS9.js";const d=JSON.parse('{"title":"10分钟使用VitePress + 自动部署github pages 建立自己的博客","description":"","frontmatter":{"title":"10分钟使用VitePress + 自动部署github pages 建立自己的博客","date":"2024-02-10T00:00:00.000Z","tags":["健康","生活方式"],"categories":["健康生活"],"sticky":3},"headers":[],"relativePath":"vitepress/使用VitePress命令行向导.md","filePath":"vitepress/使用VitePress命令行向导.md"}'),l={name:"vitepress/使用VitePress命令行向导.md"};function e(t,s,h,k,E,r){return i(),n("div",null,s[0]||(s[0]=[p(`<h1 id="使用vitepress命令行向导" tabindex="-1">使用VitePress命令行向导 <a class="header-anchor" href="#使用vitepress命令行向导" aria-label="Permalink to &quot;使用VitePress命令行向导&quot;">​</a></h1><p>难度：★★★☆☆</p><p><a href="https://juejin.cn/user/712139265545277/posts" target="_blank" rel="noreferrer">若木_Wdy</a></p><p>2023-03-233,710阅读3分钟</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fxxy5.com%2Fvitepress-cn%2Fconfig-app.html%23appearance" target="_blank" rel="noreferrer">VitePress 中文文档地址</a><a href="https://link.juejin.cn/?target=https%3A%2F%2Fvitepress.dev%2F" target="_blank" rel="noreferrer">VitePress 英文文档地址</a></p><h2 id="_1-github-创建一个仓库-blog" tabindex="-1">1. github 创建一个仓库，blog <a class="header-anchor" href="#_1-github-创建一个仓库-blog" aria-label="Permalink to &quot;1. github 创建一个仓库，blog&quot;">​</a></h2><h2 id="_2-clone-到本地" tabindex="-1">2. clone 到本地 <a class="header-anchor" href="#_2-clone-到本地" aria-label="Permalink to &quot;2. clone 到本地&quot;">​</a></h2><h2 id="_3-初始化-vitepress" tabindex="-1">3. 初始化 VitePress <a class="header-anchor" href="#_3-初始化-vitepress" aria-label="Permalink to &quot;3. 初始化 VitePress&quot;">​</a></h2><p><strong>注：因我用的pnpm安装，如果大家也想用，先执行 <code>npm i pnpm -g</code> 安装一下</strong></p><p>mkdir myBlog</p><p>cd myBlog</p><p>安装需要的依赖,使用<code>pnpm</code>将<code>vitepress</code>安装为本地依赖。</p><p>pnpm add -D vitepress</p><h4 id="初始化vitepress" tabindex="-1">初始化Vitepress <a class="header-anchor" href="#初始化vitepress" aria-label="Permalink to &quot;初始化Vitepress&quot;">​</a></h4><p>pnpm vitepress init</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>T  Welcome to VitePress!</span></span>
<span class="line"><span>|</span></span>
<span class="line"><span>o  Where should VitePress initialize the config?</span></span>
<span class="line"><span>|  ./</span></span>
<span class="line"><span>|</span></span>
<span class="line"><span>o  Site title:</span></span>
<span class="line"><span>|  My Awesome Project</span></span>
<span class="line"><span>|</span></span>
<span class="line"><span>o  Site description:</span></span>
<span class="line"><span>|  A VitePress Site</span></span>
<span class="line"><span>|</span></span>
<span class="line"><span>o  Theme:</span></span>
<span class="line"><span>|  Default Theme + Customization</span></span>
<span class="line"><span>|</span></span>
<span class="line"><span>o  Use TypeScript for config and theme files?</span></span>
<span class="line"><span>|  No</span></span>
<span class="line"><span>|</span></span>
<span class="line"><span>o  Add VitePress npm scripts to package.json?</span></span>
<span class="line"><span>|  Yes</span></span>
<span class="line"><span>|</span></span>
<span class="line"><span>—  Done! Now run pnpm run docs:dev and start writing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Tips:</span></span>
<span class="line"><span>- Since you&#39;ve chosen to customize the theme, you should also explicitly install vue as a dev dependency.</span></span></code></pre></div><p>初始化成功后，使用vscode或webstorm打开文件夹，会看到这样一个目录。接下来简单介绍一下每个文件的含义</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  ├─ api-examples.md</span></span>
<span class="line"><span>│  ├─ markdown-examples.md</span></span>
<span class="line"><span>│  └─ index.md 入口文件</span></span>
<span class="line"><span>└─ package.json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.vitepress，最核心的目录，</span></span>
<span class="line"><span>theme目录。自定义主题配置，css样式等</span></span>
<span class="line"><span>config.mjs。最核心的文件，各种配置导航栏、侧边栏、标题什么的都是在这里</span></span>
<span class="line"><span>node_modules。安装的依赖</span></span>
<span class="line"><span>api-examples.md和markdown-examples.md。官方给的两个示例</span></span>
<span class="line"><span>index.md。主页相关</span></span>
<span class="line"><span>package.json和pnpm-lock.yml。包管理工具需要用的</span></span></code></pre></div><h4 id="启动项目" tabindex="-1">启动项目 <a class="header-anchor" href="#启动项目" aria-label="Permalink to &quot;启动项目&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pnpm run docs:dev</span></span></code></pre></div><p>打开，看到这个，说明初始化成功</p><p>vitepress v1.6.3</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  ➜  Local:   http://localhost:5173/</span></span>
<span class="line"><span>  ➜  Network: use --host to expose</span></span>
<span class="line"><span>  ➜  press h to show help</span></span></code></pre></div><h3 id="二-如何部署2" tabindex="-1">二 如何部署<a href="https://docs.bugdesigner.cn/docs/Tutorial/vitepress.html#%E4%BD%BF%E7%94%A8github-pages%E9%83%A8%E7%BD%B2" target="_blank" rel="noreferrer">2</a> <a class="header-anchor" href="#二-如何部署2" aria-label="Permalink to &quot;二 如何部署[2](https://docs.bugdesigner.cn/docs/Tutorial/vitepress.html#使用github-pages部署)&quot;">​</a></h3><ol><li>需要在config.mjs里面配置base，名称为github仓库名称，注意不要忘记改之前的icon</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>base: &quot;/myBlog/&quot;</span></span></code></pre></div><p>修改package.json, 添加<code> &quot;packageManager&quot;: &quot;pnpm@8.6.12&quot;</code>, 版本号要与后面yaml中的pnpm版本号一致</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span>    &quot;vitepress&quot;: &quot;^1.6.3&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;docs:dev&quot;: &quot;vitepress dev&quot;,</span></span>
<span class="line"><span>    &quot;docs:build&quot;: &quot;vitepress build&quot;,</span></span>
<span class="line"><span>    &quot;docs:preview&quot;: &quot;vitepress preview&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>+ &quot;packageManager&quot;: &quot;pnpm@8.6.12&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>2.在 github 中创建一个名称为myBlog的仓库</p><p>3.在项目中初始化 git</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git init</span></span></code></pre></div><p>4.根目录添加.gitignore 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Project exclude paths</span></span>
<span class="line"><span>.idea</span></span>
<span class="line"><span>.DS_Store</span></span>
<span class="line"><span>node_modules</span></span>
<span class="line"><span>/dist</span></span></code></pre></div><p>5.上传代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git push -u origin master</span></span></code></pre></div><p>6.选择github actions</p><p>7.设置工作流</p><p><img src="https://i-blog.csdnimg.cn/direct/e4520c5976f84075989a7370ad2c883d.png" alt="在这里插入图片描述"></p><p>重命名并设置deploy脚本<a href="https://docs.bugdesigner.cn/docs/Tutorial/vitepress.html#%E4%BD%BF%E7%94%A8github-pages%E9%83%A8%E7%BD%B2" target="_blank" rel="noreferrer">2</a> 脚本文件：参考的vitepress官方文档：<a href="https://vitepress.dev/guide/deploy#github-pages" target="_blank" rel="noreferrer">https://vitepress.dev/guide/deploy#github-pages</a><strong>这里发现参考资料里面的node包有问题,换成我们的</strong></p><p><img src="https://i-blog.csdnimg.cn/direct/33bc9033b5c448759953705559df5472.png" alt="在这里插入图片描述"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>name: Deploy VitePress site to Pages</span></span>
<span class="line"><span></span></span>
<span class="line"><span>on:</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches: [master]</span></span>
<span class="line"><span>  workflow_dispatch:</span></span>
<span class="line"><span># 设置tokenn访问权限</span></span>
<span class="line"><span>permissions:</span></span>
<span class="line"><span>  contents: read</span></span>
<span class="line"><span>  pages: write</span></span>
<span class="line"><span>  id-token: write</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列</span></span>
<span class="line"><span># 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成</span></span>
<span class="line"><span>concurrency:</span></span>
<span class="line"><span>  group: pages</span></span>
<span class="line"><span>  cancel-in-progress: false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jobs:</span></span>
<span class="line"><span>  # 构建工作</span></span>
<span class="line"><span>  build:</span></span>
<span class="line"><span>    runs-on: ubuntu-latest</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      - name: Checkout</span></span>
<span class="line"><span>        uses: actions/checkout@v3</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要</span></span>
<span class="line"><span>      - name: Setup pnpm</span></span>
<span class="line"><span>        uses: pnpm/action-setup@v2 # 安装pnpm并添加到环境变量</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          version: 8.6.12 # 指定需要的 pnpm 版本</span></span>
<span class="line"><span>      - name: Setup Node</span></span>
<span class="line"><span>        uses: actions/setup-node@v3</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          node-version: 18</span></span>
<span class="line"><span>          cache: pnpm # 设置缓存</span></span>
<span class="line"><span>      - name: Setup Pages</span></span>
<span class="line"><span>        uses: actions/configure-pages@v5  # 在工作流程自动配置GithubPages</span></span>
<span class="line"><span>      - name: Install dependencies</span></span>
<span class="line"><span>        run: pnpm install # 安装依赖</span></span>
<span class="line"><span>      - name: Build with VitePress</span></span>
<span class="line"><span>        run: |</span></span>
<span class="line"><span>          pnpm run docs:build # 启动项目</span></span>
<span class="line"><span>          touch .nojekyll  # 通知githubpages不要使用Jekyll处理这个站点，不知道为啥不生效，就手动搞了</span></span>
<span class="line"><span>      - name: Upload artifact</span></span>
<span class="line"><span>        uses: actions/upload-pages-artifact@v3  # 上传构建产物</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          path: .vitepress/dist # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # 部署工作</span></span>
<span class="line"><span>  deploy:</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      name: github-pages</span></span>
<span class="line"><span>      url: \${{ steps.deployment.outputs.page_url }} # 从后续的输出中获取部署后的页面URL</span></span>
<span class="line"><span>    needs: build    # 在build后面完成</span></span>
<span class="line"><span>    runs-on: ubuntu-latest  # 运行在最新版本的ubuntu系统上</span></span>
<span class="line"><span>    name: Deploy</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      - name: Deploy to GitHub Pages</span></span>
<span class="line"><span>        id: deployment  # 指定id</span></span>
<span class="line"><span>        uses: actions/deploy-pages@v4 # 将之前的构建产物部署到github pages中</span></span></code></pre></div><p><img src="https://i-blog.csdnimg.cn/direct/29287e1d427840aba685302b147fec05.png" alt="在这里插入图片描述"></p><h6 id="_8-点击确定-耐心等待15秒左右-就可以了-接下来查看我们的域名" tabindex="-1">8.点击确定，耐心等待15秒左右，就可以了，接下来查看我们的域名： <a class="header-anchor" href="#_8-点击确定-耐心等待15秒左右-就可以了-接下来查看我们的域名" aria-label="Permalink to &quot;8.点击确定，耐心等待15秒左右，就可以了，接下来查看我们的域名：&quot;">​</a></h6><p><img src="https://i-blog.csdnimg.cn/direct/c7436a384b364d3cb1cd97fc6410a13f.png" alt="在这里插入图片描述"></p><p><em><strong>最后，就部署完毕了</strong></em></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">json代码解读复制代码{</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">    ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;docs:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress dev docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;docs:serve&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol><li><p>在本地开启服务</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pnpm docs:dev</span></span></code></pre></div></li></ol><h2 id="_4-配置vitepress" tabindex="-1">4. 配置VitePress <a class="header-anchor" href="#_4-配置vitepress" aria-label="Permalink to &quot;4. 配置VitePress&quot;">​</a></h2><ol><li><p>文件结构</p><div class="language-arduino vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>arduino代码解读复制代码.</span></span>
<span class="line"><span>├─ .github // 部署相关，后面会说</span></span>
<span class="line"><span>│  ├─ workflows</span></span>
<span class="line"><span>│  │  ├─ deploy.yml</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  ├─ config.js // 打包配置的文件</span></span>
<span class="line"><span>│  ├─ articles // 文章的文件夹</span></span>
<span class="line"><span>│  │  ├─ javascript-core // JavaScript核心文章</span></span>
<span class="line"><span>│  │  └─ ...</span></span>
<span class="line"><span>│  ├─ public // 这里可以放入全局文件内容，打包后原样复制到dist</span></span>
<span class="line"><span>│  │  ├─ images // 文章中的图片</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div></li><li><p>config.js 配置</p><p>以下内容都有注释，大家根据自己情况增减，官方文档也非常清楚</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//config</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export default {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;码路芽子&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, // 博客的标题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    description: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mlyz 的个人博客&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, // 博客的介绍</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    base: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/blog/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, // 如果想用 https://mlyz.wdy.github.io/blog/ 访问，那么这句话必填</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        logo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/images/logo.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, // 页面上显示的logo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        nav: [ // 页面右上角的导航</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/articles/vue/上传素材到COS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uniapp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/articles/uniapp/一键登录&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;博客文档&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                items: [ // 可以配置成下拉</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;JavaScript 核心系列&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/articles/javaScript-core/构造函数、原型、原型链&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Vue 三方组件库&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/articles/libs/VForm3低代码初体验&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;其他&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/articles/other/nvm管理node&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sidebar: { // 侧边栏，可以分组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &quot;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">articles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;基础&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;代码段&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                            text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;上传素材到COS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/articles/vue/上传素材到COS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                            text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;文件下载&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/articles/vue/文件下载&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &quot;/articles/uniapp/&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;基础&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;代码段&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                            text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;一键登录&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                            link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/articles/uniapp/一键登录&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &quot;/articles/javaScript-core/&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;基础&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1. 构造函数、原型、原型链&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/articles/javaScript-core/构造函数、原型、原型链&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2. 执行上下文和执行上下文栈&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/articles/javaScript-core/执行上下文和执行上下文栈&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3. this的指向&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/articles/javaScript-core/this的指向&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;进阶&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                        text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/xx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &quot;/articles/libs/&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1. VForm3低代码初体验&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/articles/libs/VForm3低代码初体验&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        socialLinks: [{ icon: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;github&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/mlyz-wdy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }], // 可以连接到 github</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ol><h2 id="_5-上传到-github-自动部署" tabindex="-1">5. 上传到 github 自动部署 <a class="header-anchor" href="#_5-上传到-github-自动部署" aria-label="Permalink to &quot;5. 上传到 github 自动部署&quot;">​</a></h2><p>在 <code>.github/workflows/deploy.yml</code> 中</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">yaml代码解读复制代码name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    branches</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          node-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">16                              v18.12</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm i pnpm -g</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pnpm install --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pnpm docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          github_token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          publish_dir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">docs/.vitepress/dist</span></span></code></pre></div><p>以上内容可以直接复制使用，如果想修改，可以看文档自行修改</p><ol><li><p>在上传到github中，就会自己执行actions <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a1b2eea0193a4249a29f6fcdf1851047~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="iShot_2023-03-23_10.17.31.png"> 执行状态可以自行查看</p></li><li><p>完成之后会在分支中，新增一个分支</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0da2de9038684ea989a20dcc7ca9d517~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="iShot_2023-03-23_10.19.11.png"></p></li><li><p>在 settings/pages 中更换源为 gh-pages</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7758f5bae283496487657a12bdc5b624~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="1679538071539.jpg"> 此时完成了，大家可以看看自己部署的博客了</p></li></ol><p><strong>我反正用了不止10分钟，毕竟还要研究，但你们看到这么清晰的文章，我觉得10分钟足够了，如果超过了，你们反思一下，我哪里写的不清楚，我改还不行么</strong></p><p><strong>我觉得你们一定会报错，如果没报错当我没说</strong></p><p><a href="https://juejin.cn/post/7213544005602590780" target="_blank" rel="noreferrer">GitHub Action: The process ‘/usr/bin/git‘ failed with exit code 128</a></p><p>在利用 github workflows 自动部署博客的时候出错了</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5257fa03824b4756a8dba2fdaaa9a26a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="1679538076974.jpg"></p>`,59)]))}const o=a(l,[["render",e]]);export{d as __pageData,o as default};

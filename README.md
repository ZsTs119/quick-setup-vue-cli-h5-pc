##quick-setup-vue-cli-h5-pc 是什么
一个优化了打包体积即插即用的脚手架，针对 h5 和 pc 场景有分别的命令行启动。针对 axios 对 element 和 vant 的组件使用封装。

##quick-setup-vue-cli-h5-pc 对打包进行哪些优化？

- 利用打包配置 Tree Shaking：移除项目中未使用的代码
- 缩小依赖库的大小查看 package.json 尝试使用缩小版的库类。如：lodash-es 代替 lodsh
- 使用代码压缩插件 compression-webpack-plugin
- 按需加载 polyfill
- 安装 webpack-bundle-analyzer 插件分析打包后的结果--注意要执行 prod 命令才会有打包结果分析
- 动态导入语法 @babel/plugin-syntax-dynamic-import
- cdn 引入文件并在 vue.config.js>configureWebpack>externals 配置全局变量
- 按需加载大型依赖库
- 分割 vendors chunk 模块引用频率、体积等设置更合理的 split chunk,防止重复代码。
- 替换 webpack 默认的压缩插件 terser-webpack-plugin 使用 terser-webpack-plugin
- 开启作用域树结构，减少模块间代码引用 Scope Hoisting

##quick-setup-vue-cli-h5-pc 其他功能

- 项目自带 dev 及 devh5 启动命令行，根据命令行配置的 env 变量自动引入 postcss-px-to-viewport 插件对 h5 自适应
- 项目封装的 axios 也自动根据当前的环境判断使用 element 组件还是 vant 组件
- 项目全局封装了 svg-icon 组件，使用方式将 svg 放到 assets/icons/svg 文件夹里。在直接使用<svg-icon class="svg名"></svg-icon>

##若遇到vue-template-compiler@2.7.16于vue@2.6.14版本不一致，请手动调节版本一致即可

##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

- 邮件(zsts@foxmail.com)

##捐助开发者
在兴趣的驱动下,写一个`免费`的东西，有欣喜，也还有汗水，希望你喜欢我的作品，同时也能支持一下。

##关于作者

```javascript
var ihubo = {
  nickName  : "ZsTs119",
  site : "https://github.com/ZsTs119"
}
```

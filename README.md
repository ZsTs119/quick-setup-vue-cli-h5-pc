
##quick-setup-vue-cli-h5-pc是什么
一个优化了打包体积即插即用的脚手架，针对h5和pc场景有分别的命令行启动。针对axios对element和vant的组件使用封装。
##quick-setup-vue-cli-h5-pc对打包进行哪些优化？

* 利用打包配置Tree Shaking：移除项目中未使用的代码
* 缩小依赖库的大小查看package.json尝试使用缩小版的库类。如：lodash-es 代替lodsh
* 使用代码压缩插 compression-webpack-plugin
* 按需加载polyfill
* 安装webpack-bundle-analyzer插件分析打包后的结果
* 动态导入语法 @babel/plugin-syntax-dynamic-import
* cdn引入文件并在vue.config.js>configureWebpack>externals配置全局变量
* 按需加载大型依赖库
* 分割vendors chunk模块引用频率、体积等设置更合理的 split chunk,防止重复代码。
* 替换webpack默认的压缩插件 terser-webpack-plugin使用terser-webpack-plugin
* 开启作用域树结构，减少模块间代码引用 Scope Hoisting

##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* 邮件(zsts@foxmail.com)

##捐助开发者
在兴趣的驱动下,写一个`免费`的东西，有欣喜，也还有汗水，希望你喜欢我的作品，同时也能支持一下。


##关于作者

```javascript
var ihubo = {
  nickName  : "ZsTs119",
  site : "https://github.com/ZsTs119"
}
```

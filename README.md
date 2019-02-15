# webpack-usage
webpack 基本用法

### 一, 什么是 webpack (4.0+)
#### webpack 可以看做是模块打包机, 它做的事情是: 分析你的项目结构, 找到 JavaScript 模块以及其他的一些浏览器不能 直运行的拓展语言(Scss, TypeScript 等),并将其打包为合适的格式以供浏览器识别使用。
#### 构建就是把源代码转换成发布到线上的可执行 JavaScript、Css、HTML 代码, 包括以下内容:
1. 代码转换: TypeScript 编译成 JavaScript, Scss 编译成 css 等
2. 文件优化: 压缩 JavaScript Css HTML 代码, 压缩合并图片等
3. 代码分割: 提取多个页面的公共代码, 提取首屏不需要执行部分的代码让其异步加载
4. 模块合并: 在采用模块化的项目里会有很多个模块和文件, 需要构建功能把模块分类合并成一个文件
5. 自动刷新: 监听本地源代码的变化, 自动重新构建, 刷新浏览器
6. 代码校验: 在代码被提交到仓库前需要校验代码是否符合规范, 以及单元测试是否通过
7. 自动发布: 更新完代码后, 自动构建出线上发布代码并传输给发布系统
  
#### 构建其实是工程化、自动化思想在前端 开发中的体现, 把一系列流程用代码去实现, 让代码自动化地执行这一系列复杂的流程。构建给前端开发注入了更大的活力, 解放了我们的生产力。
  
### 二, 初始化项目的 package.json
```
  npm init -y
```
### 三, 安装
1. 全局安装 (不推荐)
```
  npm install webpack
```

2. 本地安装
```
  npm install webpack webpack-cli -D
```

### 四, 编译

#### 在 webpack 中所有文件都是模块
- js 模块  模块化(AMD, CMD, es6Module, commonjs)

#### 直接运行 webpack (node 版本8.5+ 支持 npx 命令)
会执行 node_modules 对应的 module bin 下的 webpack.cmd 
```
  npx webpack
```

#### 
### 项目依赖
```
    需要首先安装好node和npm
    npm install

```
### 项目启动
```
    npm run dev
```

### 项目框架
```
    ---app----
    |     |-main.js 入口文件
    |     |-config.json
    |     |-index.tmpl.html
    |     |-.css
    |
    |
    |
    |--public 编译后项目依赖|
    |   |
    |   |-index.html
    |   |-bundle.js
    |   |-style.css
    |
    |
    |
    |--package.json  项目依赖
    |
    |——webpack.config.js  webpack 配置
    |
    |--webpack.production.config.js  webpack 生产环境配置
```
<h2>description:</h2>

React's Server-side Rendering Scheme

React的服务端渲染方案

英文文档：<a href="https://nextjs.org/">next.js</a>	

中文文档：<a href="http://nextjs.frontendx.cn/">next.js</a>	

开始吧：

初始化项目本地目录

npm run init 

 #########开发环境#########

 npm run dev

 #########生产环境#########

 npm run build

 npm start

 #########导出项目到已定义好的静态目录，可以部署到任意静态资源服务器上#####

 npm run export

 -----------------------------------------------------------------------

 <h3>华丽的分界线,pakage.json配置注释</h3>

scripts: {

    "dev": "next",  // 运行开发服务器，并监控源代码，具备hod reload功能 : npm run dev

    "build": "next build", // 以生产模式打包代码

    "start": "next start"  // 启动Next服务器，可以自定义服务器和端口

    "export": "next build && next export -o web",//导出项目到web目录

    "init": "next init" // 初始化项目，创建基础的文件夹和index页面文件

 }

 也可以使用npm run init命令自动生成。
 
 1、npm run dev,http://localhost:3000
 
 2、npm run export,//导出项目到自定义目录中，自定义目录在package.json中配置

 --------------------------------------------------------------------------

 <h3>Next.js 使用指南,配置</h3>

使用指南-基本规则:<a href="http://jartto.wang/2018/05/27/nextjs-1/">配置指南3</a>

使用指南-路由与加载:<a href="http://jartto.wang/2018/06/01/nextjs-2/">配置指南2</a>

使用指南-高级配置:<a href="https://www.colabug.com/3083032.html">配置指南3</a>


 
 

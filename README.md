react-next-exzample

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
 
 

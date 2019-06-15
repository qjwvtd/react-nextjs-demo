/*
 * 2019/06/15
 * auther:qjwvtd
 */
const next = require('next');
const express = require('express');
const config = require('../next.config.js');
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';


const app = next({ dev, config });
const handle = app.getRequestHandler();
app.prepare().then(function(){
	const server = express();
	//设置跨域访问
	server.all('*', function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		res.header("X-Powered-By",' 3.2.1');
		next();
	});
	server.get('*', (req, res) => {
		return handle(req, res);
	});
	//启动
	server.listen(port, function(err){
		if (err) throw err;
		console.log('>server is started on http://' + host + ':' + port);
	});
}).catch(function(e){
	console.error(e.stack);
	process.exit(1);
});
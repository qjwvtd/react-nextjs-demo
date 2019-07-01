import React,{Component} from 'react';
import Head from 'next/head';
import Header from "../components/header";
import fetch from 'isomorphic-unfetch';

/**
 * 测试头部组件
 * */
function HomeHtmlHead(props) {
	return (
		<Head>
			<title>home</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="shortcut icon" type="images/x-icon" href="/static/favicon.ico" />
			<script src="/static/home.js"></script>
		</Head>
	);
}

export default class extends Component{
	static async getInitialProps(context) {
		const {pathname,query,asPath,req,res,jsonPageRes,err} = context;
		// console.log('pathname:'+pathname);
		// console.log('query:'+JSON.stringify(query));
		// console.log('asPath:'+asPath);
		// console.log('req:'+req);
		// console.log('res:'+res);
		// console.log('jsonPageRes:'+jsonPageRes);
		// console.log('err:'+err);
		const result = {
			pathname:`path section of URL`,
			query:`query string section of URL parsed as an object`,
			asPath:`String of the actual path (including the query) shows in the browser`,
			req:`HTTP request object (server only)`,
			res:`HTTP response object (server only)`,
			jsonPageRes:`Fetch Response object (client only)`,
			err:`Error object if any error is encountered during the rendering`
		};
		const arr = [];
		for (const key in result) {
			if (result.hasOwnProperty(key)) {
				arr.push({
					xh:key,
					value:result[key]
				});
			}
		}
		const serviceData = await fetch('https://api.github.com/repos/zeit/next.js');
	    const json = await serviceData.json();

    	return {arr, json };
	}
	render() {
		return (
			<main>
				<HomeHtmlHead />
				<Header />
				<section style={{textAlign:'center'}}>this is home page</section>
				<h3>getInitialProps方法异步获取服务端数据,每个页面只能使用一次，包括如下属性：</h3>	
				<ul>
					{
						this.props.arr.map((item,index) => {
							return <li key={index}>{item.xh} - {item.value}</li>
						})
					}
				</ul>
				<h3>异步获取的服务器数据</h3>
				{JSON.stringify(this.props.json)}	
			</main>
		)
	}
}
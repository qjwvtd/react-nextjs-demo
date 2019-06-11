import React,{Component} from 'react';
import Head from 'next/head';
import Header from "../components/header";

/**
 * 测试头部组件
 * */
class HomeHtmlHead extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="shortcut icon " type="images/x-icon" href="/static/favicon.ico" />
                <script src="/static/home.js"></script>
            </Head>
        );
    }
}

export default class extends Component{
	static async getInitialProps({ req }) {
		const res = {
			pathname:`path section of URL`,
			query:`query string section of URL parsed as an object`,
			asPath:`String of the actual path (including the query) shows in the browser`,
			req:`HTTP request object (server only)`,
			res:`HTTP response object (server only)`,
			jsonPageRes:`Fetch Response object (client only)`,
			err:`Error object if any error is encountered during the rendering`
		};
		const arr = [];
		for (const key in res) {
			if (res.hasOwnProperty(key)) {
				arr.push({
					xh:key,
					value:res[key]
				});
			}
		}
		return { arr };
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
			</main>
		)
	}
}
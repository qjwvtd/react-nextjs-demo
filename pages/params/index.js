import { Component } from "react";
import Header from "../../components/header";
import Head from 'next/head';
import Router from 'next/router';

/**
 * 头部组件
 * */
function ParamsHtmlHead(props) {
	return (
		<Head>
			<title>params</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="shortcut icon " type="images/x-icon" href="/static/favicon.ico" />
			<script src="/static/params.js"></script>
		</Head>
	);
}

class Params extends Component {
    constructor(props){
        super(props);
	}
	handler(){
		Router.push({
			pathname: '/about',
			query: { name: 'xiaojun' }
		});
	}
    render() {
        return (
            <main style={{textAlign:'center'}}>
				<ParamsHtmlHead />
                <Header />
                <section style={{height:'160px'}}>this is Params page</section>
				<section style={{height:'160px'}}>测试页面传参</section>
				<button type="button" onClick={this.handler}>也可以点击传参</button>
            </main>
        );
    }
}

export default Params;
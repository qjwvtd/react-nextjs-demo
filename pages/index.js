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
                <script src="/static/other.js"></script>
            </Head>
        );
    }
}

export default () => (
    <main>
        <HomeHtmlHead />
        <Header />
        <section style={{textAlign:'center'}}>this is home page</section>
    </main>
);
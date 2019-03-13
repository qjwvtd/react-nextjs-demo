import React,{Component} from 'react';
import Link from "next/link";
import Head from 'next/head';
import Header from "../components/header";

/**
 * 测试头部组件
 * */
class HomeHead extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://www.googletagmanager.com/gtag/js?id=UA-134369212-1"></script>
                <script type="text/javascript" src="/static/ga.js"></script>
                <script src="https://adodson.com/hello.js/dist/hello.all.js"></script>
                <script src="https://www.googletagmanager.com/gtag/js?id=UA-134369212-1"></script>
                <script src="/static/oauth.js"></script>
            </Head>
        );
    }
}

export default () => (
    <main>
        <HomeHead />
        <Header />
        <section style={{textAlign:'center'}}>this is home page</section>
    </main>
);
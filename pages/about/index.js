import { Component } from "react";
import Header from "../../components/header";
import Head from 'next/head';

/**
 * 头部组件
 * */
class AboutHtmlHead extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="shortcut icon " type="images/x-icon" href="/static/favicon.ico" />
                <script src="/static/about.js"></script>
            </Head>
        );
    }
}

class AboutPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <main>
				<AboutHtmlHead />
                <Header />
                <section style={{textAlign:'center'}}>this is about page</section>
            </main>
        );
    }
}

export default AboutPage;
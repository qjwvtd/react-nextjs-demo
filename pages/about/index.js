import { Component } from "react";
import Header from "../../components/header";
import Head from 'next/head';

/**
 * 头部组件
 * */
function AboutHtmlHead(props) {
	return (
		<Head>
			<title>about</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="shortcut icon " type="images/x-icon" href="/static/favicon.ico" />
			<script src="/static/about.js"></script>
		</Head>
	);
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
                <section style={{textAlign:'center',height:'320px'}}>this is about page</section>
            </main>
        );
    }
}

export default AboutPage;
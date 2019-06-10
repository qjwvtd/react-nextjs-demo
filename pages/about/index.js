import { Component } from "react";
import Header from "../../components/header";

class AboutPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <main>
                <Header />
                <section style={{textAlign:'center'}}>this is about page</section>
            </main>
        );
    }
}

export default AboutPage;
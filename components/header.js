import React,{Component} from 'react';
import Link from 'next/link';
import './../static/lib.css';


export default class Header extends Component{
    constructor(props){
        super(props);
	}
    render(){
        return (
            <div>
                <ul className="nav">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
					<li><Link href={{ pathname: '/params', query: { name: 'xiaojun' }}} replace><a>Params</a></Link></li>
                </ul>
				<style global jsx>{`
					.nav{
						list-style: none;
						overflow: hidden;
						background: rgba(8, 8, 8, 0.3);
					}
					.nav li{
						float: left;
						width: 120px;
						height: 60px;
						line-height: 60px;
						text-align: center;
					}
				`}</style>	
            </div>
        );
    }
}
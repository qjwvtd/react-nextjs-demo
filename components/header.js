import React,{Component} from 'react';
import Link from 'next/link';


import '../static/header.css';

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
				
            </div>
        );
    }
}
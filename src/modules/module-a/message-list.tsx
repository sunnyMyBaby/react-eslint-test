import React, { Component } from 'react';
import './message-list.css';

interface iProps {
	name: string;
	age: number;
	height?: number;
	[propName: string]: any;
	readonly x: number;
	readonly y: number;
}
class LoginFooter extends Component<iProps> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}

	getLength(something: string | number) {
		if (typeof something === 'string') {
			return something.length;
		}
		const aa = {
			aaa: 11111,
			bbb: 22222,
		};
		console.log(aa);
		return something.toString().length;
	}

	render() {
		const aasdfs = 'asfdsdf';
		console.log(aasdfs);
		return <div className='aaa'>xxxxx</div>;
	}
}
export default LoginFooter;

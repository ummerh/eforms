const React = require('react');
const ReactDOM = require('react-dom');
export class HomeWindow extends React.Component{

	constructor(props){
		super(props);
		this.state = {currTab:""};
	}
	render(){
		return (<div id="homeWin"><h1>Welcome to the cloud-native application demo!</h1></div>);
	}
}
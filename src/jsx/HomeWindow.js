const React = require('react');
const ReactDOM = require('react-dom');
export class HomeWindow extends React.Component{
	constructor(props){
		super(props);
		this.state = {currTab:""};
	}
	render(){
		return (<div id="homeWin">
		<div className="jumbotron">
  			<h1 className="display-4">Hello, welcome to cloud-native demo application!</h1>
			<p className="lead">This is a sample application that shows how to do Single Page Applications and Microservices API services deployed on Azure Kubernetes cluster.</p>
			<hr className="my-4" />
			<p>Application primarily uses spring-boot and ReactJS.</p>			
		</div>
		<hr/>
		<ul className="nav nav-pills" id="myTab" role="tablist">
		  <li className="nav-item">
		    <a className="nav-link active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link" id="tech-tab" data-toggle="tab" href="#tech" role="tab" aria-controls="tech" aria-selected="false">Technologies</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link" id="howto-tab" data-toggle="tab" href="#howto" role="tab" aria-controls="howto" aria-selected="false">How To?</a>
		  </li>
		</ul>
		<div className="tab-content" id="myTabContent">
		  <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab"><p>Overview content goes here</p></div>
		  <div className="tab-pane fade" id="tech" role="tabpanel" aria-labelledby="tech-tab"><p>Tech stack content goes here</p></div>
		  <div className="tab-pane fade" id="howto" role="tabpanel" aria-labelledby="howto-tab"><p>How to content goes here</p></div>
		</div>
		
		</div>);
	}
}
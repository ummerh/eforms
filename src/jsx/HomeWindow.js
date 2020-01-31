const React = require('react');
const ReactDOM = require('react-dom');
export class HomeWindow extends React.Component{
	constructor(props){
		super(props);
		this.state = {currTab:""};
	}
	render(){
		return (
		<div>
		<main role="main">
		<section className="jumbotron text-center">
			<div className="container">
			<h1>Cloud Native Applications - Demo</h1>
			<p className="lead">Cloud-native applications are built from the ground up—optimized for cloud-scale and performance. Typically, designed using microservices architectures, use managed services, and take advantage of continuous delivery to achieve reliability and faster time to market.</p>
			<p>				
				<a href="https://azure.microsoft.com/en-us/overview/cloudnative/" className="btn btn-secondary my-2" target="_blank">More from Azure</a>
			</p>
			<p className="lead text-muted">At its core, microservices is a decomposition technique for overcoming system complexity. It accomplishes this goal by splitting complex systems into multiple independent, narrowly focused services, each with its own isolated business logic and data store. In microservices ­based applications, any function can be scaled and deployed separately. Most of all, several teams can simultaneously work on different modules to enhance the overall system’s time­ to­ market without the risk of stepping on each other. </p>
			<p className="lead text-muted">This application demonstrates capabilities like Single Page Applications, API Services, Stateless Session Management, Auto Scaling, and Continous Rolling Updates. Built using Spring Boot, ReactJS, Redis, Docker, and deployed on Azure Kubernetes Services.</p>
			<hr />
			<h2>Reference Architecture</h2>
			<p><img className="img-fluid" src="images/aks-reference-architecture.svg" type="image/svg+xml"></img></p>
			</div>
		</section>
		<div className="container">
			<div className="row">
			<div className="col-md-4">
				<h2>Features</h2>
				<p>This application aims to convey some of the cloud-native application characteristics that are listed below;</p>

				<p><b>Single Page Applications (SPA)</b>  - is a GUI design paradigm where UI will be delivered as JS components and data loaded on demand through API calls. Modern javascript libraries are supporting a UXI that is pleasant and highly interactive. </p>

				<p><b>Stateless Applications</b> - native cloud applications are developed and improved continuously with frequent release cycles; this pace should not impact the user experience or the scalability. By using stateless design and detached session management, a user request can be handled by any node in the cluster and provides an uninterrupted experience to users.</p>

				<p><b>API</b> based microservices are highly distributed, scalable, domain-centric services delivered as Application Programming Interfaces, typically using technologies like HTTPS and REST. </p>
				<p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
			</div>
			<div className="col-md-4">
				<h2>Technologies</h2>
				<p>
					<ul>
						<li>Java</li>
						<li>NodeJS</li>
						<li>ReactJS</li>
						<li>Spring Boot</li>
						<li>Redis</li>
						<li>Docker</li>
						<li>Kubernetes</li>
					</ul>

				</p>
				<p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
			</div>
			<div className="col-md-4">
				<h2>Instructions</h2>
				<p>
				<ul>
						<li>Setup workspace</li>
						<li>Setup Azure container registry</li>
						<li>Setup Azure Kubernetes Services</li>
						<li>Git clone source code</li>
						<li>mvn clean package</li>
						<li>docker build</li>
						<li>docker tag</li>
						<li>acr login</li>
						<li>docker push</li>
						<li>Docker push to acr</li>
						<li>aks get-credentials</li>						
						<li>kubectl apply</li>
					</ul>
				</p>
				<p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
			</div>
			</div>
			<hr />
		</div>
		</main>
		<footer className="container">
  			<p>Jackson Enterprise Architecture 2019-2020</p>
		</footer>
		</div>
		);
	}
}

class Overview extends React.Component{
	render(){
		return (
		<div className="card mb-4 shadow-sm">
		<svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
		<div className="card-body">
		<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
		<div className="d-flex justify-content-between align-items-center">
			<div className="btn-group">
			<button type="button" className="btn btn-sm btn-outline-secondary">View</button>
			<button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
			</div>
			<small className="text-muted">9 mins</small>
		</div>
		</div>
	</div>);
	}
}
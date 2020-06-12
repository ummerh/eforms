const React = require('react');
const ReactDOM = require('react-dom');
export class KioskHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currTab: "" };
	}
	render() {
		return (
			<div>
				<main role="main">
					<section className="jumbotron text-center">
						<div className="container">
							<h1>Cloud Kiosk - Self Provisioning Cloud Compute</h1>
							<p className="lead">Cloud adoption can present itself as a steep learning curve, and the best way to reduce the friction is to allow simple and secure access to cloud resources for experimentation. Agile teams should be able to self-provision resources and explore features easily, that should enable faster adoption of these new platforms within development teams.</p>
						</div>
					</section>
					<div className="container">
						<div className="row">
							<div>
								<h2>Guiding Principles</h2>
								<ul>
									<li>Simple steps to request cloud resources, adhering to established policies. ​</li>
									<li>A single Azure resource group should map to a team request with an end date. </li>
									<li>Azure operator roles with default members assigned at the subscription level. </li>
									<li>Azure team roles with default permissions assignable at the resource group level.​</li>
									<li>IAM team can assign team level operators at resource group levels. ​</li>
									<li>Governance implemented using Azure Policies and RBAC.​</li>
									<li>Budget limits built into the templated solution. ​</li>
									<li>Whitelist the services using Azure policies.​</li>
									<li>Use Tag policies.​</li>
									<li>Automate.</li>
								</ul>
							</div></div>
					</div>
				</main>
				<footer className="container">
					<p>Jackson Enterprise Architecture 2019-2020</p>
				</footer>
			</div>
		);
	}
}
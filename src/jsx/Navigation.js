const React = require('react');
const ReactDOM = require('react-dom');
export class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currTab: "" };
	}
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="/">E-Forms</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item"><a className="nav-link" href={this.props.path + "/#/app/demo"}>Demo App</a></li>
						<li className="nav-item"><a className="nav-link" href="/kiosk/">Cloud Kiosk</a></li>
						<li className="nav-item dropdown"><a
							className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
							role="button" data-toggle="dropdown" aria-haspopup="true"
							aria-expanded="false"> Session </a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href={this.props.path + "/#/app/session/status"}>Status</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href={this.props.path + "/#/app/session/end"}>End</a>
							</div></li>
						<li className="nav-item"><a className="nav-link disabled" href="#"
							aria-disabled="true">API</a></li>
					</ul>
				</div>
			</nav>);
	}
}
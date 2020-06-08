const React = require('react');
const ReactDOM = require('react-dom');
const HomeWindow = require("./HomeWindow.js").HomeWindow;
const SessionStatus = require("./SessionStatus.js").SessionStatus;
const DemoApp = require("./DemoApp.js").DemoApp;
const ProductListView = require("./ProductListView.js").ProductListView;
const CategoryGridView = require("./CategoryGridView.js").CategoryGridView;
import {
	HashRouter as Router,
	Switch,
	Link,
	Route
} from "react-router-dom";

export class Home extends React.Component {
	render() {
		return (
			<Router>
				<div>
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
								<li className="nav-item"><Link className="nav-link" to="/app/demo">Demo App</Link></li>
								<li className="nav-item dropdown"><a
									className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
									role="button" data-toggle="dropdown" aria-haspopup="true"
									aria-expanded="false"> Session </a>
									<div className="dropdown-menu" aria-labelledby="navbarDropdown">
										<Link className="dropdown-item" to="/app/session/status">Status</Link>
										<div className="dropdown-divider"></div>
										<Link className="dropdown-item" to="/app/session/end">End</Link>
									</div></li>
								<li className="nav-item"><a className="nav-link disabled" href="#"
									aria-disabled="true">API</a></li>
							</ul>
						</div>
					</nav>
					<Switch>
						<Route path="/" exact>
							<HomeWindow />
						</Route>
						<Route path="/app/demo" exact>
							<DemoApp />
						</Route>
						<Route path={`/app/demo/manage/user/:userId`} exact>
							<ProductListView manage="true" />
						</Route>
						<Route path={`/app/demo/shop/customer/:customerId`} exact>
							<CategoryGridView />
						</Route>
						<Route path={`/app/demo/manage/products/:productId`} exact>
							<h5>Product Detail</h5>
						</Route>
						<Route path={`/app/demo/approve/products`} exact>
							<h5>Approve Change Log</h5>
						</Route>
						<Route path={`/app/demo/shop/categories/:categoryId`} exact>
							<h5>Shop category</h5>
						</Route>
						<Route path="/app/session/status" exact>
							<SessionStatus />
						</Route>
						<Route path="/app/session/end" exact>
							<span>
								<br />
								<div className="spinner-border" role="status">
									<span className="sr-only">Pending Implementation...</span>
								</div>
							</span>
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}
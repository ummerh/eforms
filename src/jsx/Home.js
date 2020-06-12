const React = require('react');
const ReactDOM = require('react-dom');
const HomeWindow = require("./HomeWindow.js").HomeWindow;
const SessionStatus = require("./SessionStatus.js").SessionStatus;
const DemoApp = require("./DemoApp.js").DemoApp;
const ProductListView = require("./ProductListView.js").ProductListView;
const ProductDetailView = require("./ProductDetailView.js").ProductDetailView;
const CategoryGridView = require("./CategoryGridView.js").CategoryGridView;
const ProductChangeLogForm = require("./ProductChangeLogForm.js").ProductChangeLogForm;
const ProductChangeLogListView = require("./ProductChangeLogListView.js").ProductChangeLogListView;
const Navigation = require("./Navigation.js").Navigation;

import {
	HashRouter as Router,
	Switch,
	Route
} from "react-router-dom";

export class Home extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation path="." />
					<Switch>
						<Route path="/" exact>
							<HomeWindow />
						</Route>
						<Route path="/app/demo" exact>
							<DemoApp />
						</Route>
						<Route path={`/app/demo/manage/user/:userId`} exact render={(props) => <ProductListView {...props} />} />
						<Route path={`/app/demo/shop/customer/:customerId`} exact render={(props) => <CategoryGridView {...props} />} />
						<Route path={`/app/demo/view/products/:productId`} exact render={(props) => <ProductDetailView {...props} />} />
						<Route path={`/app/demo/edit/products/:productId`} exact render={(props) => <ProductChangeLogForm {...props} />} />
						<Route path={`/app/demo/view/productChangeLog`} exact render={(props) => <ProductChangeLogListView {...props} />} />
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
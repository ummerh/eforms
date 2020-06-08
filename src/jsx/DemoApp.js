const React = require('react');
const ReactDOM = require('react-dom');
const CustomerListView = require("./CustomerListView.js").CustomerListView;
const UserListView = require("./UserListView.js").UserListView;
import {
	HashRouter as Router,
	Switch,
	Link,
	Route
} from "react-router-dom";

export class DemoApp extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (<div>
			<div className="col-lg-6 col-sm-3">
				<h3>Choose an employee or a customer profile from the lists to start the session.</h3>
				<div className="shadow p-3 mb-5 bg-white rounded">Employees.
					<UserListView />
				</div>
				<div className="shadow p-3 mb-5 bg-white rounded">Customers
					<CustomerListView />
				</div>
			</div>
		</div>
		);
	}
}
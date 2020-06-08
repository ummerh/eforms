const React = require('react');
const ReactDOM = require('react-dom');
import {
	HashRouter as Router,
	Switch,
	Link,
	Route
} from "react-router-dom";


export class CustomerListView extends React.Component {

	constructor(props) {
		super(props);
		this.state = { isLoaded: false, customers: [] };
	}

	componentDidMount() {
		fetch("/api/customers")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						customers: result
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}
	render() {
		if (this.state.isLoaded) {
			var userList = this.state.customers.map(function(usr) {
				return (<tr key={usr.customerId}>
					<td scope="row">{usr.shortName}</td>
					<td>{usr.firstName}</td>
					<td>{usr.lastName}</td>
					<td><Link className="btn btn-outline-primary" role="button" to={`/app/demo/shop/customer/${usr.customerId}`} >Shop Products</Link></td>
				</tr>);
			}
			);
			return (
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th scope="col">Customer Name</th>
							<th scope="col">First Name</th>
							<th scope="col">Last Name</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{userList}
					</tbody>
				</table>
			)
		}
		return (
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		);
	}
}
const React = require('react');
const ReactDOM = require('react-dom');

import {
	HashRouter as Router,
	Switch,
	Link,
	Route
} from "react-router-dom";

export class UserListView extends React.Component {

	constructor(props) {
		super(props);
		this.state = { isLoaded: false, users: [] };
	}

	componentDidMount() {
		fetch("/api/users")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						users: result
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
			
			var userList = this.state.users.map(function(usr) {
				var btn = <Link className="btn btn-outline-primary" role="button" to={`/app/demo/manage/user/${usr.userId}`} >Edit Products</Link>
				if(usr.roleName == "Manager"){
					btn = <Link className="btn btn-outline-primary" role="button" to={`/app/demo/approve/products`} >Approve Changes</Link>
				} 
				return (<tr key={usr.userId}>
					<td>{usr.roleName}</td>
					<td>{usr.userName}</td>
					<td>{usr.firstName}</td>
					<td>{usr.lastName}</td>
					<td>{btn}</td>
				</tr>);
			}
			);
			return (
				<div>
					<table className="table table-striped table-hover">
						<thead>
							<tr>
							    <th scope="col">Role</th>
								<th scope="col">Employee Name</th>
								<th scope="col">First Name</th>
								<th scope="col">Last Name</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{userList}
						</tbody>
					</table>
				</div>
			)
		}
		return (
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		);
	}
}
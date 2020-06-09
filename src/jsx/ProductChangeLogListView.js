const React = require('react');
const ReactDOM = require('react-dom');
import {
	HashRouter as Router,
	Switch,
	Link,
	Route
} from "react-router-dom";


export class ProductChangeLogListView extends React.Component {

	constructor(props) {
		super(props);
		this.state = { isLoaded: false, products: [] };
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.name === 'isGoing' ? target.checked : target.value;
		const name = target.id;
		/*let newProd = this.state.product;
		newProd[name] = value;
		this.setState({
			product: newProd
		});*/
	}

	componentDidMount() {
		fetch("/api/productChangeLog")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						products: result
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
			var handleInputChange = this.handleInputChange;
			var userList = this.state.products.map(function(product) {
				return (<tr key={product.productChangeLogId}>
					<td scope="row">{product.productName}</td>
					<td>{product.productDescription}</td>
					<td>{product.unitCost}</td>
					<td>{product.unitType}</td>
					<td>{product.changeStatus}</td>
					<td><div className="form-group">
						<textarea className="form-control" id="approverComment" rows="2" value={product.approverComment} onChange={handleInputChange}></textarea>
					</div></td>
					<td>
						<div className="form-check">
							<input className="form-check-input" type="radio" name="approved" id="approved" value="true" />
							<label className="form-check-label" htmlFor="approved">
								yes
  							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio" name="approved" id="approved" value="false" />
							<label className="form-check-label" htmlFor="approved">
								no
  							</label>
						</div>
					</td>
					<td><button type="button" className="btn btn-sm btn-primary">apply</button></td>
				</tr>);
			}
			);
			return (
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Description</th>
							<th scope="col">Unit Cost ($)</th>
							<th scope="col">Unit Type</th>
							<th scope="col">Status</th>
							<th scope="col">Comment</th>
							<th scope="col">Approve?</th>
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
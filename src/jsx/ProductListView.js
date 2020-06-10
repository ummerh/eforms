const React = require('react');
const ReactDOM = require('react-dom');
import {
	HashRouter as Router,
	Switch,
	Link,
	Route
} from "react-router-dom";


export class ProductListView extends React.Component {

	constructor(props) {
		super(props);
		this.state = { isLoaded: false, products: [] };
	}

	componentDidMount() {
		fetch("/api/products")
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
		var props = this.props;
		if (this.state.isLoaded) {
			var userList = this.state.products.map(function(product) {
				return (<tr key={product.productId}>
					<td scope="row">{product.category.categoryName}</td>
					<td scope="row">{product.productName}</td>
					<td className="w-25">{product.productDescription}</td>
					<td>{product.unitCost}</td>
					<td>{product.unitType}</td>
					<td><Link className="btn btn-outline-primary" role="button" to={`/app/demo/view/products/${product.productId}`} >view</Link>{'\u000A'}<Link className="btn btn-outline-primary" role="button" to={`/app/demo/edit/products/${product.productId}`} >edit</Link></td>
				</tr>);
			}
			);
			return (
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th scope="col">Category</th>
							<th scope="col">Name</th>
							<th scope="col">Description</th>
							<th scope="col">Unit Cost ($)</th>
							<th scope="col">Unit Type</th>
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
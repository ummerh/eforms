const React = require('react');
const ReactDOM = require('react-dom');
import {
	HashRouter as Router,
	Switch,
	Link,
	Route
} from "react-router-dom";


export class ProductDetailView extends React.Component {

	constructor(props) {
		super(props);
		this.state = { isLoaded: false, product: {} };
	}

	componentDidMount() {
		const { productId } = this.props.match.params
		fetch("/api/products/" + productId)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						product: result
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
			return (<div className="col-lg-6">
				<h4>Viewing Product - {this.state.product.productName} </h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Name: {this.state.product.productName}</li>
					<li className="list-group-item">Description: {this.state.product.productDescription}</li>
					<li className="list-group-item">Unit: {this.state.product.unitType}</li>
					<li className="list-group-item">Unit Cost: {this.state.product.unitCost}</li>
				</ul>
				<br />
				<span><img style={{"height":200,"width":200}} src={this.state.product.productImageURL} alt={this.state.product.productImageURL} className="img-thumbnail" /></span>
				<br/><br/>
				<Link className="btn btn-outline-primary" role="button" to={`/app/demo/edit/products/${this.state.product.productId}`} >edit</Link>
			</div>);
		}
		return (
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		);
	}
}
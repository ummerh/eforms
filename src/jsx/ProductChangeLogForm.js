const React = require('react');
const ReactDOM = require('react-dom');
import {
	HashRouter as Router,
	Switch,
	Link,
	Route
} from "react-router-dom";


export class ProductChangeLogForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = { status: "", isLoaded: false, product: {}, changeLog: {} };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitChange = this.submitChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.name === 'isGoing' ? target.checked : target.value;
		const name = target.id;
		let newProd = this.state.product;
		newProd[name] = value;
		this.setState({
			product: newProd, status: "Unsaved changes."
		});
	}
	submitChange(event) {
		fetch("/api/productChangeLog/init", {
			method: 'POST', body: JSON.stringify(this.state.product), headers: {
				'Content-Type': 'application/json'
			},
		})
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						status: "Saved successfully.",
						product: result
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						status: "Save failed.",
						error
					});
				}
			)
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
				<h4>Product Change Request</h4>
				<mark>{this.state.status}</mark>
				<form>
					<div className="form-group">
						<label htmlFor="productName">Product Name</label>
						<input type="text" className="form-control" id="productName" placeholder="product name" value={this.state.product.productName} onChange={this.handleInputChange} />
					</div>
					<div className="form-group">
						<label htmlFor="productDescription">Product Description</label>
						<textarea className="form-control" id="productDescription" rows="3" value={this.state.product.productDescription} onChange={this.handleInputChange}></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="unitType">Unit Type</label>
						<input type="text" className="form-control" id="unitType" placeholder="each" value={this.state.product.unitType} onChange={this.handleInputChange} />
					</div>
					<div className="form-group">
						<label htmlFor="unitCost">Unit Cost</label>
						<input type="number" className="form-control" id="unitCost" placeholder="$0.00" value={this.state.product.unitCost} onChange={this.handleInputChange} />
					</div>
					<div className="form-group">
						<label htmlFor="productImageURL">Product Image URL</label>
						<input type="text" className="form-control" id="productImageURL" placeholder="https://" value={this.state.product.productImageURL} onChange={this.handleInputChange} />
						<img style={{"height":200,"width":200}} src={this.state.product.productImageURL} alt={this.state.product.productImageURL} className="img-thumbnail" />
					</div>
				</form>
				<button type="button" className="btn btn-primary" onClick={this.submitChange} disabled={this.state.status != 'Unsaved changes.'}>Submit</button>
			</div>);
		}
		return (
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		);
	}
}
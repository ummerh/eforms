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
		this.state = { status: "", isLoaded: false, products: [] };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.saveLog = this.saveLog.bind(this);
	}

	handleInputChange(idx, col, event) {
		var log = this.state.products;
		log[idx][col] = event.target.value;
		this.setState({ products: log, status: "Unsaved changes." });
	}
	saveLog(idx) {
		var log = this.state.products;
		var itm = log[idx];
		fetch("/api/productChangeLog/" + itm.productChangeLogId, {
			method: 'PUT', body: JSON.stringify(itm), headers: {
				'Content-Type': 'application/json'
			},
		})
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						status: "Saved successfully."
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
		fetch("/api/productChangeLog/changeStatus/Initiated")
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
			var saveLog = this.saveLog;
			var userList = this.state.products.map(function(product, idx) {
				return (<tr key={product.productChangeLogId}>
					<td scope="row">{product.productName}</td>
					<td className="w-25">{product.productDescription}</td>
					<td>{product.unitCost}</td>
					<td>{product.unitType}</td>
					<td><img style={{ "height": 60, "width": 60 }} src={product.productImageURL} alt={product.productImageURL} className="img-thumbnail" /></td>
					<td>{product.changeStatus}</td>
					<td><div className="form-group">
						<textarea className="form-control" id={'approverComment' + idx} rows="2" value={product.approverComment == null ? "" : product.approverComment} onChange={handleInputChange.bind(null, idx, 'approverComment')} />
					</div></td>
					<td>
						<div className="form-check">
							<input className="form-check-input" type="radio" name="approved" id={'approve' + idx} value="Approved" onChange={handleInputChange.bind(null, idx, 'changeStatus')} />
							<label className="form-check-label" htmlFor={'approve' + idx}>
								yes
  							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio" name="approved" id={'disapprove' + idx} value="Disapproved" onChange={handleInputChange.bind(null, idx, 'changeStatus')} />
							<label className="form-check-label" htmlFor={'disapprove' + idx}>
								no
  							</label>
						</div>
					</td>
					<td><button type="button" className="btn btn-sm btn-primary" onClick={saveLog.bind(null, idx)} >apply</button></td>
				</tr>);
			}
			);
			return (
				<div>
					<mark>{this.state.status}</mark>
					<table className="table table-striped table-hover">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Description</th>
								<th scope="col">Unit Cost ($)</th>
								<th scope="col">Unit Type</th>
								<th scope="col">Image</th>
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
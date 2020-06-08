const React = require('react');
const ReactDOM = require('react-dom');
import {
	HashRouter as Router,
	Switch,
	Link,
	Route
} from "react-router-dom";


export class CategoryGridView extends React.Component {

	constructor(props) {
		super(props);
		this.state = { isLoaded: false, categories: [] };
	}

	componentDidMount() {
		fetch("/api/categories")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						categories: result
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
		var list = this.state.categories.map(function(cat) {
			return (<div className="card col-lg-3" key={cat.categoryId}>
				<img src={cat.categoryImageURL} className="card-img-top" alt={cat.categoryName} />
				<div className="card-body">
					<h5 className="card-title">{cat.categoryName}</h5>
					<p className="card-text">{cat.categoryDescription}</p>
					<Link className="btn btn-outline-primary" role="button" to={`/app/demo/shop/categories/${cat.categoryId}`} >shop</Link>
				</div>
			</div>);
		});
		if (this.state.isLoaded) {
			return (
				<div className="row">
					{list}
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
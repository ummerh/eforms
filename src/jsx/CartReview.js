const React = require('react');
const ReactDOM = require('react-dom');
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route    
  } from "react-router-dom";
export class CartReview extends React.Component{
    constructor(props){
		super(props);
		this.state = {currTab:""};
	}
	render(){       
		return (
            <div className="container">
                        <div className="row">
                            <h3>Review and place order</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-8 order-md-1">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Order summary</span>
                                <span className="badge badge-secondary badge-pill">3</span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Product name</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$12</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Second product</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$8</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Third item</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                    <h6 className="my-0">Promo code</h6>
                                    <small>EXAMPLECODE</small>
                                </div>
                                <span className="text-success">-$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>$20</strong>
                                </li>
                            </ul>
                            </div>
                            <div className="col-md-8 order-md-1">
                                <h4 className="mb-3">Shipping address</h4>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>                                        
                                        <small className="text-muted">John Doe</small><br/>
                                        <small className="text-muted">1234 W Smith Court</small><br/>
                                        <small className="text-muted">OKEMO, MI 48864</small>                                        
                                    </div>
                                    <a href="#">edit</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-8 order-md-1">
                                <h4 className="mb-3">Payment Method</h4>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>                                        
                                        <small className="text-muted">Visa Credit Card</small><br/>
                                        <small className="text-muted">xxxx-xxxx-xxxx-4886</small><br/>
                                        <small className="text-muted">Billing address - same as shipping address</small>                                        
                                    </div>
                                    <a href="#">edit</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-md-8 order-md-1">
                                <hr className="mb-4" />
                                <Link className="btn btn-primary btn-lg btn-block" to="/">Place Order</Link>
                            </div>
                        </div>
                        </div>

        );
	}
}

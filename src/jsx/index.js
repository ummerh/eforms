const React = require('react');
const ReactDOM = require('react-dom');
const HomeWindow = require("./HomeWindow.js").HomeWindow;
const Cart = require("./Cart.js").Cart;
const CartReview = require("./CartReview.js").CartReview;
const SessionStatus = require("./SessionStatus.js").SessionStatus;
import {
    HashRouter as Router,
    Switch,
    Link,
    Route    
  } from "react-router-dom";

class App extends React.Component{
    render(){
        return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">E-Forms</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">                
                <li className="nav-item"><Link className="nav-link" to="/app/cart/checkout">Shopping Cart</Link></li>
                <li className="nav-item dropdown"><a
                    className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                    role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"> Session </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/app/session/status">Status</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/app/session/end">End</Link>
                    </div></li>
                <li className="nav-item"><a className="nav-link disabled" href="#"
                    aria-disabled="true">API</a></li>
            </ul>
        </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <HomeWindow />
          </Route>          
          <Route path="/app/cart/checkout" strict>
            <Cart />
          </Route>
          <Route path="/app/session/status" strict>
            <SessionStatus />
          </Route>
          <Route path="/app/session/end" strict>
            <span>
              <br/>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            </span>
          </Route>
          <Route path="/app/cart/review" strict>
            <CartReview />
          </Route>
        </Switch>
      </div>
    </Router>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("homeContent"));
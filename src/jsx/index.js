const React = require('react');
const ReactDOM = require('react-dom');
const HomeWindow = require("./HomeWindow.js").HomeWindow;
const Demo1 = require("./Demo1.js").Demo1;
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route    
  } from "react-router-dom";

class App extends React.Component{
    render(){
        return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">E-Forms</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><Link className="nav-link" to="/app/home">Home
                        <span className="sr-only">(current)</span>
                </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/app/demo1">Demo1</Link></li>
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
                    aria-disabled="true">Demo2</a></li>
            </ul>
        </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/app/home">
          <h3><HomeWindow /></h3>
          </Route>
          <Route path="/app/demo1">
            <Demo1 />
          </Route>
          <Route path="/app/session/status">
            <h3>Session Staus</h3>
          </Route>
          <Route path="/app/session/end">
            <h3>Session End</h3>
          </Route>
        </Switch>
      </div>
    </Router>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("homeContent"));
const React = require('react');
const ReactDOM = require('react-dom');
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route    
  } from "react-router-dom";

export class Demo1 extends React.Component{
	render(){
		return (            
            <div>
                <h3>Demo 1 home </h3>
                <Router>
                <Link to="/app/demo1/new" >New</Link>
                <Switch>
                    <Route path="/app/demo1/new">
                        <h3>Create a new demo1 component</h3>
                    </Route>
                </Switch>
                </Router>
            </div>
        );
	}
}

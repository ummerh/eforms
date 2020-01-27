
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('react-router');

class HomeWindow extends React.Component{

	constructor(props){
		super(props);
		this.state = {currTab:""};
	}
	render(){
		return (<div id="homeWin"><h1>Welcome to the cloud-native application demo!</h1></div>);
	}
}
class Demo1 extends React.Component{
    render(){
        return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Section1">Section 1</Link>
            </li>
            <li>
              <Link to="/Section2">Section 2</Link>
            </li>
            <li>
              <Link to="/Section3">Section 3</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Section1">
            <HomeWindow />
          </Route>
          <Route path="/Section2">
          <HomeWindow />
          </Route>
          <Route path="/Section3">
          <HomeWindow />
          </Route>
        </Switch>
      </div>
    </Router>
        );
    }
}
ReactDOM.render(<HomeWindow />, document.getElementById("homeContent"));


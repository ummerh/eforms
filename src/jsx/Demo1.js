class Demo1 extends React.Component{
    render(){
        return (
    <ReactRouter.Router>
      <div>
        <nav>
          <ul>
            <li>
              <ReactRouter.Link to="/Section1">Section 1</ReactRouter.Link>
            </li>
            <li>
              <ReactRouter.Link to="/Section2">Section 2</ReactRouter.Link>
            </li>
            <li>
              <ReactRouter.Link to="/Section3">Section 3</ReactRouter.Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <ReactRouter.Switch>
          <ReactRouter.Route path="/Section1">
            <HomeWindow />
          </ReactRouter.Route>
          <ReactRouter.Route path="/Section2">
          <HomeWindow />
          </ReactRouter.Route>
          <ReactRouter.Route path="/Section3">
          <HomeWindow />
          </ReactRouter.Route>
        </ReactRouter.Switch>
      </div>
    </ReactRouter.Router>
        );
    }
}

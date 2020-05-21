const React = require('react');
const ReactDOM = require('react-dom');

export class SessionStatus extends React.Component{

    constructor(props){
        super(props);
        this.state = {isLoaded:false, status:{}};
    }
    
    componentDidMount() {
        fetch("/api/session/status")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                status: result
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
    render(){
        if(this.state.isLoaded){
          return (<table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Creation Time</th>
              <th scope="col">Last Accessed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{this.state.status.id}</td>
              <td>{this.state.status.createdTime}</td>
              <td>{this.state.status.lastAccessedTime}</td>
            </tr>            
          </tbody>
        </table>)          
        }
        return (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
          </div>
          );
    }
}
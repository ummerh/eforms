const React = require('react');
const Navigation = require("./Navigation.js").Navigation;
const KioskHome = require("./KioskHome.js").KioskHome;

import {
	HashRouter as Router,
	Switch,
	Route
} from "react-router-dom";

export class Kiosk extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation path=".." />
					<Switch>
						<Route path="/" exact render={(props) => <KioskHome {...props} />} />
					</Switch>
				</div>
			</Router>
		);
	}
}
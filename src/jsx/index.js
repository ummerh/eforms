const React = require('react');
const ReactDOM = require('react-dom');
const Home = require("./Home.js").Home;
const Kiosk = require("./Kiosk.js").Kiosk;
if (document.getElementById("homeContent")) {
	ReactDOM.render(<Home />, document.getElementById("homeContent"));
}
if (document.getElementById("kioskContent")) {
	ReactDOM.render(<Kiosk />, document.getElementById("kioskContent"));
}
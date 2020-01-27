var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeWindow = function (_React$Component) {
	_inherits(HomeWindow, _React$Component);

	function HomeWindow(props) {
		_classCallCheck(this, HomeWindow);

		var _this = _possibleConstructorReturn(this, (HomeWindow.__proto__ || Object.getPrototypeOf(HomeWindow)).call(this, props));

		_this.state = { currTab: "" };
		return _this;
	}

	_createClass(HomeWindow, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ id: "homeWin" },
				React.createElement(
					"h1",
					null,
					"Welcome to the cloud-native application demo!"
				)
			);
		}
	}]);

	return HomeWindow;
}(React.Component);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo1 = function (_React$Component) {
  _inherits(Demo1, _React$Component);

  function Demo1() {
    _classCallCheck(this, Demo1);

    return _possibleConstructorReturn(this, (Demo1.__proto__ || Object.getPrototypeOf(Demo1)).apply(this, arguments));
  }

  _createClass(Demo1, [{
    key: "render",
    value: function render() {
      return React.createElement(
        ReactRouter.Router,
        null,
        React.createElement(
          "div",
          null,
          React.createElement(
            "nav",
            null,
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                React.createElement(
                  ReactRouter.Link,
                  { to: "/Section1" },
                  "Section 1"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  ReactRouter.Link,
                  { to: "/Section2" },
                  "Section 2"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  ReactRouter.Link,
                  { to: "/Section3" },
                  "Section 3"
                )
              )
            )
          ),
          React.createElement(
            ReactRouter.Switch,
            null,
            React.createElement(
              ReactRouter.Route,
              { path: "/Section1" },
              React.createElement(HomeWindow, null)
            ),
            React.createElement(
              ReactRouter.Route,
              { path: "/Section2" },
              React.createElement(HomeWindow, null)
            ),
            React.createElement(
              ReactRouter.Route,
              { path: "/Section3" },
              React.createElement(HomeWindow, null)
            )
          )
        )
      );
    }
  }]);

  return Demo1;
}(React.Component);
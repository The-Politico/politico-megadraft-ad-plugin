"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017, Jon McClure <jmcclure@politico.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({}, this.props, { width: "24", height: "24", viewBox: "0 0 24 24" }),
        _react2.default.createElement(
          "g",
          { fill: "none", fillRule: "evenodd" },
          _react2.default.createElement("path", { d: "M0 0h24v24H0z" }),
          _react2.default.createElement("path", { fill: "currentColor", d: "m10.304,22.581667l3.713,0l0,-2.68c2.715,-0.657 4.389,-2.542 4.389,-5.045l0,0c0,-2.562 -1.361,-4.131 -4.551,-5.247l0,0c-1.171,-0.426 -2.525,-0.984 -2.525,-1.484l0,0c0,-0.657 0.923,-0.758 1.472,-0.758l0,0c1.605,0 2.632,0.494 3.247,0.789l0,0l0.706,0.338l0.224,-0.744l0.88,-3.309l-0.489,-0.231c-0.651,-0.306 -1.692,-0.689 -3.229,-0.82l0,0l0,-2.224l-3.713,0l0,2.488c-2.578,0.67 -4.167,2.495 -4.167,4.891l0,0c0,3.089 2.607,4.361 4.879,5.127l0,0c1.93,0.651 2.197,1.121 2.197,1.53l0,0c0,0.608 -0.876,0.88 -1.744,0.88l0,0c-1.691,0 -3.097,-0.63 -3.782,-1.006l0,0l-0.732,-0.4l-1.07,4.179l0,0.001l0.439,0.242c0.99,0.548 2.45,0.934 3.856,1.061l0,0l0,2.422z" })
        )
      );
    }
  }]);

  return _default;
}(_react2.default.Component);

exports.default = _default;
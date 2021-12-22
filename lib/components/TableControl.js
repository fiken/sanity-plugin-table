"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@sanity/ui");

var _icons = require("@sanity/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableControl = props => {
  var padding = 3;
  var fontSize = 1;
  var space = 1;
  return /*#__PURE__*/_react.default.createElement(_ui.Inline, {
    space: space
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    fontSize: fontSize,
    padding: padding,
    icon: _icons.AddIcon,
    text: "Create Table",
    tone: "primary",
    mode: "ghost",
    onClick: props.create
  }));
};

var _default = TableControl;
exports.default = _default;
//# sourceMappingURL=TableControl.js.map
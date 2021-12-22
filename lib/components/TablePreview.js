"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _table = _interopRequireDefault(require("./table.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TablePreview = props => {
  return /*#__PURE__*/_react.default.createElement("table", {
    className: _table.default.tablePreview
  }, /*#__PURE__*/_react.default.createElement("tbody", null, props.rows.map((row, i) => /*#__PURE__*/_react.default.createElement("tr", {
    key: row._key
  }, row.cells.map((cell, j) => /*#__PURE__*/_react.default.createElement("td", {
    key: "".concat(row._key, "-").concat(j)
  }, cell))))));
};

var _default = TablePreview;
exports.default = _default;
//# sourceMappingURL=TablePreview.js.map
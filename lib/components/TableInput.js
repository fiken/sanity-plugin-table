"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@sanity/ui");

var _icons = require("@sanity/icons");

var _table = _interopRequireDefault(require("./table.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableInput = props => {
  var _props$rows$;

  var renderRowCell = rowIndex => (cell, cellIndex) => {
    return /*#__PURE__*/_react.default.createElement("td", {
      key: "cell-".concat(rowIndex, "-").concat(cellIndex)
    }, /*#__PURE__*/_react.default.createElement(_ui.TextInput, {
      fontSize: 1,
      padding: 3,
      value: cell,
      onChange: e => props.updateCell(e, rowIndex, cellIndex)
    }));
  };

  var renderRow = (row, rowIndex) => {
    var renderCell = renderRowCell(rowIndex);
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: "row-".concat(rowIndex)
    }, row.cells.map(renderCell), /*#__PURE__*/_react.default.createElement("td", {
      key: rowIndex
    }, /*#__PURE__*/_react.default.createElement(_ui.Box, {
      marginLeft: 1,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
      icon: _icons.RemoveIcon,
      padding: 2,
      onClick: () => props.removeRow(rowIndex),
      mode: "bleed"
    }))));
  };

  return /*#__PURE__*/_react.default.createElement("table", {
    className: _table.default.table
  }, /*#__PURE__*/_react.default.createElement("tbody", null, props.rows.map(renderRow), /*#__PURE__*/_react.default.createElement("tr", null, (((_props$rows$ = props.rows[0]) === null || _props$rows$ === void 0 ? void 0 : _props$rows$.cells) || []).map((_, i) => /*#__PURE__*/_react.default.createElement("td", {
    key: i
  }, /*#__PURE__*/_react.default.createElement(_ui.Box, {
    marginTop: 1,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    icon: _icons.RemoveIcon,
    padding: 2,
    onClick: () => props.removeColumn(i),
    mode: "bleed"
  })))))));
};

var _default = TableInput;
exports.default = _default;
//# sourceMappingURL=TableInput.js.map
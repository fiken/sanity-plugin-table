"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _configTable = _interopRequireDefault(require("config:table"));

var _TableComponent = _interopRequireDefault(require("../TableComponent"));

var _TablePreview = _interopRequireDefault(require("../components/TablePreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Table',
  name: 'table',
  type: 'object',
  fields: [{
    name: 'rows',
    type: 'array',
    of: [{
      type: _configTable.default.rowType
    }]
  }],
  inputComponent: _TableComponent.default,
  preview: {
    select: {
      rows: 'rows'
    },

    prepare(_ref) {
      var rows = _ref.rows;
      return {
        title: 'Table',
        media: /*#__PURE__*/_react.default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 25 25",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.2"
        }, /*#__PURE__*/_react.default.createElement("path", {
          d: "M3 3h18v18H3zM21 9H3M21 15H3M12 3v18"
        })),
        extendedPreview: /*#__PURE__*/_react.default.createElement(_TablePreview.default, {
          rows: rows || []
        })
      };
    }

  }
};
exports.default = _default;
//# sourceMappingURL=table.js.map
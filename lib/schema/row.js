"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _configTable = _interopRequireDefault(require("config:table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Table Row',
  name: _configTable.default.rowType,
  type: 'object',
  fields: [{
    name: 'cells',
    type: 'array',
    of: [{
      type: 'string'
    }]
  }]
};
exports.default = _default;
//# sourceMappingURL=row.js.map
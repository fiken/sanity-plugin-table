"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _uuid = require("@sanity/uuid");
var _default2 = _interopRequireDefault(require("part:@sanity/components/formfields/default"));
var _patchEvent = _interopRequireWildcard(require("part:@sanity/form-builder/patch-event"));
var _configTable = _interopRequireDefault(require("config:table"));
var _TableControl = _interopRequireDefault(require("./components/TableControl"));
var _TableInput = _interopRequireDefault(require("./components/TableInput"));
var _TableMenu = _interopRequireDefault(require("./components/TableMenu"));
var _ui = require("@sanity/ui");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// This probably isn't necessary anymore
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
var TableComponent = props => {
  var _value$rows, _value$rows2, _value$rows3;
  var type = props.type,
    level = props.level,
    value = props.value,
    markers = props.markers,
    onChange = props.onChange;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    dialog = _useState2[0],
    setDialog = _useState2[1];
  var updateValue = value => {
    return onChange(_patchEvent.default.from((0, _patchEvent.set)(value)));
  };
  var resetValue = () => {
    return onChange(_patchEvent.default.from((0, _patchEvent.unset)()));
  };
  var createTable = () => {
    var newValue = {
      rows: [{
        _type: _configTable.default.rowType,
        _key: (0, _uuid.uuid)(),
        cells: ['', '']
      }, {
        _type: _configTable.default.rowType,
        _key: (0, _uuid.uuid)(),
        cells: ['', '']
      }]
    };
    return updateValue(_objectSpread(_objectSpread({}, value || {}), newValue));
  };
  var confirmRemoveTable = () => {
    setDialog({
      type: 'table',
      callback: removeTable
    });
  };
  var removeTable = () => {
    resetValue();
    setDialog(null);
  };
  var addRows = function addRows() {
    var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var newValue = _objectSpread({}, value);
    // Calculate the column count from the first row
    var columnCount = value.rows[0].cells.length;
    for (var i = 0; i < count; i++) {
      // Add as many cells as we have columns
      newValue.rows.push({
        _type: _configTable.default.rowType,
        _key: (0, _uuid.uuid)(),
        cells: Array(columnCount).fill('')
      });
    }
    return updateValue(newValue);
  };
  var addRowAt = function addRowAt() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var newValue = _objectSpread({}, value);
    // Calculate the column count from the first row
    var columnCount = value.rows[0].cells.length;
    newValue.rows.splice(index, 0, {
      _type: _configTable.default.rowType,
      _key: (0, _uuid.uuid)(),
      cells: Array(columnCount).fill('')
    });
    return updateValue(newValue);
  };
  var removeRow = index => {
    var newValue = deepClone(value);
    newValue.rows.splice(index, 1);
    updateValue(newValue);
    setDialog(null);
  };
  var confirmRemoveRow = index => {
    if (value.rows.length <= 1) return confirmRemoveTable();
    return setDialog({
      type: 'row',
      callback: () => removeRow(index)
    });
  };
  var confirmRemoveColumn = index => {
    if (value.rows[0].cells.length <= 1) return confirmRemoveTable();
    return setDialog({
      type: 'column',
      callback: () => removeColumn(index)
    });
  };
  var addColumns = count => {
    var newValue = deepClone(value);
    // Add a cell to each of the rows
    newValue.rows.forEach((_, i) => {
      for (var j = 0; j < count; j++) {
        newValue.rows[i].cells.push('');
      }
    });
    return updateValue(newValue);
  };
  var addColumnAt = index => {
    var newValue = deepClone(value);
    newValue.rows.forEach((_, i) => {
      newValue.rows[i].cells.splice(index, 0, '');
    });
    return updateValue(newValue);
  };
  var removeColumn = index => {
    var newValue = deepClone(value);
    newValue.rows.forEach(row => {
      row.cells.splice(index, 1);
    });
    updateValue(newValue);
    setDialog(null);
  };
  var updateCell = (e, rowIndex, cellIndex) => {
    var newValue = deepClone(value);
    newValue.rows[rowIndex].cells[cellIndex] = e.target.value;
    return updateValue(newValue);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, dialog && /*#__PURE__*/_react.default.createElement(_ui.Dialog, {
    header: "Remove ".concat(dialog.type),
    id: "dialog-remove",
    onClose: () => setDialog(null),
    zOffset: 1000
  }, /*#__PURE__*/_react.default.createElement(_ui.Card, {
    padding: 4
  }, /*#__PURE__*/_react.default.createElement(_ui.Text, null, "Are you sure you want to remove this ", dialog.type, "?"), /*#__PURE__*/_react.default.createElement(_ui.Box, {
    marginTop: 4
  }, /*#__PURE__*/_react.default.createElement(_ui.Inline, {
    space: 1,
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    text: "Cancel",
    mode: "ghost",
    onClick: () => setDialog(null)
  }), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    text: "Confirm",
    tone: "critical",
    onClick: () => dialog.callback()
  }))))), /*#__PURE__*/_react.default.createElement(_ui.Flex, {
    align: "flex-start",
    justify: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_default2.default, {
    label: type.title,
    markers: markers,
    description: type.description,
    level: level,
    __unstable_changeIndicator: false
  }), (value === null || value === void 0 ? void 0 : (_value$rows = value.rows) === null || _value$rows === void 0 ? void 0 : _value$rows.length) && /*#__PURE__*/_react.default.createElement(_TableMenu.default, {
    addColumns: addColumns,
    addColumnAt: addColumnAt,
    addRows: addRows,
    addRowAt: addRowAt,
    remove: confirmRemoveTable,
    placement: "left"
  })), (value === null || value === void 0 ? void 0 : (_value$rows2 = value.rows) === null || _value$rows2 === void 0 ? void 0 : _value$rows2.length) && /*#__PURE__*/_react.default.createElement(_TableInput.default, {
    rows: value.rows,
    removeRow: confirmRemoveRow,
    removeColumn: confirmRemoveColumn,
    updateCell: updateCell
  }), (!value || !(value !== null && value !== void 0 && (_value$rows3 = value.rows) !== null && _value$rows3 !== void 0 && _value$rows3.length)) && /*#__PURE__*/_react.default.createElement(_TableControl.default, {
    create: createTable
  }));
};
var _default = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => /*#__PURE__*/_react.default.createElement(TableComponent, props));
exports.default = _default;
//# sourceMappingURL=TableComponent.js.map
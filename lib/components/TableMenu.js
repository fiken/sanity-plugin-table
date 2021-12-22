"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ui = require("@sanity/ui");

var _icons = require("@sanity/icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TableMenu = props => {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      dialog = _useState2[0],
      setDialog = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      count = _useState4[0],
      setCount = _useState4[1];

  var updateCount = e => {
    setCount(e.currentTarget.value);
  };

  var addRows = () => {
    setDialog({
      type: 'rows',
      callback: count => props.addRows(count)
    });
  };

  var addRowAt = () => {
    setDialog({
      type: 'rows',
      callback: index => props.addRowAt(index)
    });
  };

  var addColumns = () => {
    setDialog({
      type: 'columns',
      callback: count => props.addColumns(count)
    });
  };

  var addColumnsAt = () => {
    setDialog({
      type: 'columns',
      callback: index => props.addColumnAt(index)
    });
  };

  var onConfirm = () => {
    var parsedCount = parseInt(count, 10);

    if (parsedCount < 100) {
      setDialog(null);
      dialog.callback(parsedCount);
      setCount(undefined);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, dialog && /*#__PURE__*/_react.default.createElement(_ui.Dialog, {
    header: "Add ".concat(dialog.type),
    id: "dialog-add",
    onClose: () => setDialog(null),
    zOffset: 1000
  }, /*#__PURE__*/_react.default.createElement(_ui.Card, {
    padding: 4
  }, /*#__PURE__*/_react.default.createElement(_ui.TextInput, {
    style: {
      textAlign: 'left'
    },
    fontSize: 2,
    padding: 3,
    type: "number",
    value: count,
    onChange: updateCount
  }), /*#__PURE__*/_react.default.createElement(_ui.Box, {
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
    onClick: onConfirm
  }))))), /*#__PURE__*/_react.default.createElement(_ui.MenuButton, {
    button: /*#__PURE__*/_react.default.createElement(_ui.Button, {
      icon: _icons.ControlsIcon,
      fontSize: 1,
      padding: 2,
      mode: "ghost"
    }),
    id: "menu-button-example",
    menu: /*#__PURE__*/_react.default.createElement(_ui.Menu, null, /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
      icon: _icons.AddIcon,
      fontSize: 1,
      text: "Add Row(s)",
      onClick: addRows
    }), /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
      icon: _icons.AddIcon,
      fontSize: 1,
      text: "Add Row At Index",
      onClick: addRowAt
    }), /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
      icon: _icons.AddIcon,
      fontSize: 1,
      text: "Add Column(s)",
      onClick: addColumns
    }), /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
      icon: _icons.AddIcon,
      fontSize: 1,
      text: "Add Column At Index",
      onClick: addColumnsAt
    }), /*#__PURE__*/_react.default.createElement(_ui.MenuDivider, null), /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
      icon: _icons.WarningOutlineIcon,
      fontSize: 1,
      text: "Remove",
      tone: "critical",
      onClick: props.remove
    })),
    placement: props.placement
  }));
};

var _default = TableMenu;
exports.default = _default;
//# sourceMappingURL=TableMenu.js.map
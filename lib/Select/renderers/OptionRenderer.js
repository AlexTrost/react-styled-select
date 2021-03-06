(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../partials/SelectOption'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../partials/SelectOption'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SelectOption);
    global.OptionRenderer = mod.exports;
  }
})(this, function (exports, _react, _SelectOption) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _SelectOption2 = _interopRequireDefault(_SelectOption);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (option, index) {
    return _react2.default.createElement(
      _SelectOption2.default,
      {
        id: option.id,
        className: option.className,
        key: index,
        isSelected: option.isSelected,
        'aria-selected': option.isSelected,
        tabIndex: option.tabIndex,
        isFocused: option.isFocused,
        role: 'option',
        'data-select-option': option.value,
        onMouseDown: option.onMouseDown },
      option.label
    );
  };
});
//# sourceMappingURL=OptionRenderer.js.map
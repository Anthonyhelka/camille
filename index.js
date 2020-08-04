"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      size = _ref.size,
      radius = _ref.radius,
      status = _ref.status,
      rest = _objectWithoutProperties(_ref, ["src", "size", "radius", "status"]);

  return /*#__PURE__*/_react["default"].createElement("img", _extends({
    src: src,
    style: {
      width: size,
      height: size,
      borderRadius: radius,
      objectFit: 'cover'
    }
  }, rest));
};

exports.Avatar = Avatar;
Avatar.defaultProps = {
  src: 'https://i.pinimg.com/236x/cd/da/4b/cdda4beceee4594f5bdc0cf505a73d8b--camille-lol-league-of-legends-camille.jpg',
  size: '40px',
  radius: '100px',
  status: 'offline'
};
Avatar.propTypes = {
  src: _propTypes["default"].string,
  size: _propTypes["default"].string,
  radius: _propTypes["default"].string,
  status: _propTypes["default"].oneOf(['online', 'away', 'offline'])
};

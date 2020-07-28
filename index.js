"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Avatar = function Avatar(_ref) {
  var _ref$src = _ref.src,
      src = _ref$src === void 0 ? 'https://i.pinimg.com/236x/cd/da/4b/cdda4beceee4594f5bdc0cf505a73d8b--camille-lol-league-of-legends-camille.jpg' : _ref$src,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '32px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '32px' : _ref$height,
      _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === void 0 ? '100px' : _ref$borderRadius,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'offline' : _ref$status,
      rest = _objectWithoutProperties(_ref, ["src", "width", "height", "borderRadius", "status"]);

  return /*#__PURE__*/_react["default"].createElement("img", _extends({
    src: src,
    style: {
      width: width,
      height: height,
      borderRadius: borderRadius,
      objectFit: 'cover'
    }
  }, rest));
};

exports.Avatar = Avatar;

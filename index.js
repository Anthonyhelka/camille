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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var determineSize = function determineSize(styles, size) {
  switch (size) {
    case 'mini':
      styles.fontSize = '9px';
      styles.padding = '7px 14px';
      break;

    case 'small':
      styles.fontSize = '11px';
      styles.padding = '9px 18px';
      break;

    case 'large':
      styles.fontSize = '15px';
      styles.padding = '13px 26px';
      break;

    case 'massive':
      styles.fontSize = '17px';
      styles.padding = '15px 30px';
      break;

    case 'normal':
    default:
      styles.fontSize = '13px';
      styles.padding = '11px 22px';
      break;
  }
};

var determineColor = function determineColor(styles, color) {
  switch (color) {
    case 'red':
      styles.backgroundColor = '#DB2828';
      break;

    case 'orange':
      styles.backgroundColor = '#F2711C';
      break;

    case 'yellow':
      styles.backgroundColor = '#FBBD08';
      break;

    case 'olive':
      styles.backgroundColor = '#B5CC18';
      break;

    case 'green':
      styles.backgroundColor = '#21BA45';
      break;

    case 'teal':
      styles.backgroundColor = '#00b5AD';
      break;

    case 'blue':
      styles.backgroundColor = '#2185D0';
      break;

    case 'violet':
      styles.backgroundColor = '#6435C9';
      break;

    case 'purple':
      styles.backgroundColor = '#A333C8';
      break;

    case 'pink':
      styles.backgroundColor = '#E03997';
      break;

    case 'brown':
      styles.backgroundColor = '#A5673F';
      break;

    case 'grey':
      styles.backgroundColor = '#767676';
      break;

    case 'black':
      styles.backgroundColor = '#1b1C1D';
      break;

    case 'default':
    default:
      styles.backgroundColor = 'E0E1E2';
      styles.color = '#595959';
      break;
  }
};

var determineCompact = function determineCompact(styles) {
  var arr = styles.padding.split(' ').map(function (item) {
    return item.replace(/\D/g, '') / 2;
  });
  var newPadding = '';
  arr.forEach(function (item) {
    return newPadding += "".concat(item, "px ");
  });
  styles.padding = newPadding;
};

var Button = function Button(_ref) {
  var type = _ref.type,
      size = _ref.size,
      disabled = _ref.disabled,
      compact = _ref.compact,
      color = _ref.color,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["type", "size", "disabled", "compact", "color", "children"]);

  var styles = {
    color: '#FFFFFF',
    backgroundColor: '#E0E1E2',
    //'#2185D0',
    cursor: disabled ? 'default' : 'pointer',
    outline: '0',
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    lineHeight: '14px',
    border: 'none',
    borderRadius: '5px',
    opacity: disabled ? '.45' : '1',
    margin: '5px 5px 5px 5px'
  };
  determineSize(styles, size);
  determineColor(styles, color);
  if (compact) determineCompact(styles);
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    style: styles,
    disabled: disabled
  }, rest), children);
};

exports.Button = Button;
Button.defaultProps = {
  type: 'default',
  size: 'normal',
  disabled: false,
  compact: false,
  color: 'default'
};
Button.propTypes = {
  type: _propTypes["default"].oneOf(['default', 'basic', 'inverted', 'text']),
  size: _propTypes["default"].oneOf(['mini', 'small', 'normal', 'large', 'massive']),
  disabled: _propTypes["default"].bool,
  compact: _propTypes["default"].bool,
  color: _propTypes["default"].oneOf(['default', 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'])
};

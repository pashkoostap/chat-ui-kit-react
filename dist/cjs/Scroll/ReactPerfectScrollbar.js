"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = require("prop-types");
var _perfectScrollbarEsm = _interopRequireDefault(require("./perfect-scrollbar.esm.js"));
var _excluded = ["className", "style", "option", "options", "containerRef", "onScrollY", "onScrollX", "onScrollUp", "onScrollDown", "onScrollLeft", "onScrollRight", "onYReachStart", "onYReachEnd", "onXReachStart", "onXReachEnd", "component", "onSync", "children"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); } // https://github.com/goldenyz/react-perfect-scrollbar/
var handlerNameByEvent = {
  "ps-scroll-y": "onScrollY",
  "ps-scroll-x": "onScrollX",
  "ps-scroll-up": "onScrollUp",
  "ps-scroll-down": "onScrollDown",
  "ps-scroll-left": "onScrollLeft",
  "ps-scroll-right": "onScrollRight",
  "ps-y-reach-start": "onYReachStart",
  "ps-y-reach-end": "onYReachEnd",
  "ps-x-reach-start": "onXReachStart",
  "ps-x-reach-end": "onXReachEnd"
};
Object.freeze(handlerNameByEvent);
var ScrollBar = exports["default"] = /*#__PURE__*/function (_Component) {
  function ScrollBar(props) {
    var _this;
    _classCallCheck(this, ScrollBar);
    _this = _callSuper(this, ScrollBar, [props]);
    _this.handleRef = _this.handleRef.bind(_this);
    _this._handlerByEvent = {};
    return _this;
  }
  _inherits(ScrollBar, _Component);
  return _createClass(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.option) {
        /* eslint-disable-next-line no-console */
        console.warn('react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"');
      }
      this._ps = new _perfectScrollbarEsm["default"](this._container, this.props.options || this.props.option);
      // hook up events
      this._updateEventHook();
      this._updateClassName();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this._updateEventHook(prevProps);
      this.updateScroll();
      if (prevProps.className !== this.props.className) {
        this._updateClassName();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;
      // unhook up evens
      Object.keys(this._handlerByEvent).forEach(function (key) {
        var value = _this2._handlerByEvent[key];
        if (value) {
          _this2._container.removeEventListener(key, value, false);
        }
      });
      this._handlerByEvent = {};
      this._ps.destroy();
      this._ps = null;
    }
  }, {
    key: "_updateEventHook",
    value: function _updateEventHook() {
      var _this3 = this;
      var prevProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // hook up events
      Object.keys(handlerNameByEvent).forEach(function (key) {
        var callback = _this3.props[handlerNameByEvent[key]];
        var prevCallback = prevProps[handlerNameByEvent[key]];
        if (callback !== prevCallback) {
          if (prevCallback) {
            var prevHandler = _this3._handlerByEvent[key];
            _this3._container.removeEventListener(key, prevHandler, false);
            _this3._handlerByEvent[key] = null;
          }
          if (callback) {
            var handler = function handler() {
              return callback(_this3._container);
            };
            _this3._container.addEventListener(key, handler, false);
            _this3._handlerByEvent[key] = handler;
          }
        }
      });
    }
  }, {
    key: "_updateClassName",
    value: function _updateClassName() {
      var className = this.props.className;
      var psClassNames = this._container.className.split(" ").filter(function (name) {
        return name.match(/^ps([-_].+|)$/);
      }).join(" ");
      if (this._container) {
        this._container.className = "scrollbar-container".concat(className ? " ".concat(className) : "").concat(psClassNames ? " ".concat(psClassNames) : "");
      }
    }
  }, {
    key: "updateScroll",
    value: function updateScroll() {
      var onSync = this.props.onSync;
      if (typeof onSync === "function") {
        onSync(this._ps);
      } else {
        this._ps.update();
      }
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this$props$container, _this$props;
      this._container = ref;
      (_this$props$container = (_this$props = this.props).containerRef) === null || _this$props$container === void 0 ? void 0 : _this$props$container.call(_this$props, ref);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        className = _this$props2.className,
        style = _this$props2.style,
        option = _this$props2.option,
        options = _this$props2.options,
        containerRef = _this$props2.containerRef,
        onScrollY = _this$props2.onScrollY,
        onScrollX = _this$props2.onScrollX,
        onScrollUp = _this$props2.onScrollUp,
        onScrollDown = _this$props2.onScrollDown,
        onScrollLeft = _this$props2.onScrollLeft,
        onScrollRight = _this$props2.onScrollRight,
        onYReachStart = _this$props2.onYReachStart,
        onYReachEnd = _this$props2.onYReachEnd,
        onXReachStart = _this$props2.onXReachStart,
        onXReachEnd = _this$props2.onXReachEnd,
        component = _this$props2.component,
        onSync = _this$props2.onSync,
        children = _this$props2.children,
        remainProps = _objectWithoutProperties(_this$props2, _excluded);
      var Comp = typeof component === "undefined" ? "div" : component;
      return /*#__PURE__*/_react["default"].createElement(Comp, _extends({
        style: style,
        ref: this.handleRef
      }, remainProps), children);
    }
  }]);
}(_react.Component);
process.env.NODE_ENV !== "production" ? ScrollBar.propTypes = {
  children: _propTypes.PropTypes.node.isRequired,
  className: _propTypes.PropTypes.string,
  style: _propTypes.PropTypes.object,
  option: _propTypes.PropTypes.object,
  options: _propTypes.PropTypes.object,
  containerRef: _propTypes.PropTypes.func,
  onScrollY: _propTypes.PropTypes.func,
  onScrollX: _propTypes.PropTypes.func,
  onScrollUp: _propTypes.PropTypes.func,
  onScrollDown: _propTypes.PropTypes.func,
  onScrollLeft: _propTypes.PropTypes.func,
  onScrollRight: _propTypes.PropTypes.func,
  onYReachStart: _propTypes.PropTypes.func,
  onYReachEnd: _propTypes.PropTypes.func,
  onXReachStart: _propTypes.PropTypes.func,
  onXReachEnd: _propTypes.PropTypes.func,
  onSync: _propTypes.PropTypes.func,
  component: _propTypes.PropTypes.string
} : void 0;
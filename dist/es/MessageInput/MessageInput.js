function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["fancyScroll", "children", "forwardedRef"],
  _excluded2 = ["value", "onSend", "onChange", "autoFocus", "placeholder", "fancyScroll", "className", "activateAfterChange", "disabled", "sendDisabled", "sendOnReturnDisabled", "attachDisabled", "sendButton", "attachButton", "onAttachClick"];
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component, useRef, useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { noop } from "../utils";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import ContentEditable from "../ContentEditable";
import SendButton from "../Buttons/SendButton";
import AttachmentButton from "../Buttons/AttachmentButton";
import PerfectScrollbar from "../Scroll";

// Because container depends on fancyScroll
// it must be wrapped in additional container
function editorContainer() {
  var Container = /*#__PURE__*/function (_Component) {
    function Container() {
      _classCallCheck(this, Container);
      return _callSuper(this, Container, arguments);
    }
    _inherits(Container, _Component);
    return _createClass(Container, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
          fancyScroll = _this$props.fancyScroll,
          children = _this$props.children,
          forwardedRef = _this$props.forwardedRef,
          rest = _objectWithoutProperties(_this$props, _excluded);
        return /*#__PURE__*/React.createElement(React.Fragment, null, fancyScroll === true && /*#__PURE__*/React.createElement(PerfectScrollbar, _extends({
          ref: function ref(elRef) {
            return forwardedRef.current = elRef;
          }
        }, rest, {
          options: {
            suppressScrollX: true
          }
        }), children), fancyScroll === false && /*#__PURE__*/React.createElement("div", _extends({
          ref: forwardedRef
        }, rest), children));
      }
    }]);
  }(Component);
  return /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(Container, _extends({
      forwardedRef: ref
    }, props));
  });
}
var EditorContainer = editorContainer();
var useControllableState = function useControllableState(value, initialValue) {
  var initial = typeof value !== "undefined" ? value : initialValue;
  var _useState = useState(initial),
    _useState2 = _slicedToArray(_useState, 2),
    stateValue = _useState2[0],
    setStateValue = _useState2[1];
  var effectiveValue = typeof value !== "undefined" ? value : stateValue;
  return [effectiveValue, function (newValue) {
    setStateValue(newValue);
  }];
};
function MessageInputInner(_ref, ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? undefined : _ref$value,
    _ref$onSend = _ref.onSend,
    onSend = _ref$onSend === void 0 ? noop : _ref$onSend,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
    _ref$autoFocus = _ref.autoFocus,
    autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
    _ref$fancyScroll = _ref.fancyScroll,
    fancyScroll = _ref$fancyScroll === void 0 ? true : _ref$fancyScroll,
    className = _ref.className,
    _ref$activateAfterCha = _ref.activateAfterChange,
    activateAfterChange = _ref$activateAfterCha === void 0 ? false : _ref$activateAfterCha,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    sendDisabled = _ref.sendDisabled,
    _ref$sendOnReturnDisa = _ref.sendOnReturnDisabled,
    sendOnReturnDisabled = _ref$sendOnReturnDisa === void 0 ? false : _ref$sendOnReturnDisa,
    _ref$attachDisabled = _ref.attachDisabled,
    attachDisabled = _ref$attachDisabled === void 0 ? false : _ref$attachDisabled,
    _ref$sendButton = _ref.sendButton,
    sendButton = _ref$sendButton === void 0 ? true : _ref$sendButton,
    _ref$attachButton = _ref.attachButton,
    attachButton = _ref$attachButton === void 0 ? true : _ref$attachButton,
    _ref$onAttachClick = _ref.onAttachClick,
    onAttachClick = _ref$onAttachClick === void 0 ? noop : _ref$onAttachClick,
    rest = _objectWithoutProperties(_ref, _excluded2);
  var scrollRef = useRef();
  var msgRef = useRef();
  var _useControllableState = useControllableState(value, ""),
    _useControllableState2 = _slicedToArray(_useControllableState, 2),
    stateValue = _useControllableState2[0],
    setStateValue = _useControllableState2[1];
  var _useControllableState3 = useControllableState(sendDisabled, true),
    _useControllableState4 = _slicedToArray(_useControllableState3, 2),
    stateSendDisabled = _useControllableState4[0],
    setStateSendDisabled = _useControllableState4[1];

  // Public API
  var focus = function focus() {
    if (typeof msgRef.current !== "undefined") {
      msgRef.current.focus();
    }
  };

  // Return object with public Api
  useImperativeHandle(ref, function () {
    return {
      focus: focus
    };
  });

  // Set focus
  useEffect(function () {
    if (autoFocus === true) {
      focus();
    }
  }, []);

  // Update scroll
  useEffect(function () {
    if (typeof scrollRef.current.updateScroll === "function") {
      scrollRef.current.updateScroll();
    }
  });
  var getContent = function getContent() {
    // Direct reference to contenteditable div
    var contentEditableRef = msgRef.current.msgRef.current;
    return [contentEditableRef.textContent, contentEditableRef.innerText, contentEditableRef.cloneNode(true).childNodes];
  };
  var send = function send() {
    if (stateValue.length > 0) {
      // Clear input only when it's uncontrolled mode
      if (value === undefined) {
        setStateValue("");
      }

      // Disable send button only when it's uncontrolled mode
      if (typeof sendDisabled === "undefined") {
        setStateSendDisabled(true);
      }
      var content = getContent();
      onSend(stateValue, content[0], content[1], content[2]);
    }
  };
  var handleKeyPress = function handleKeyPress(evt) {
    if (evt.key === "Enter" && evt.shiftKey === false && sendOnReturnDisabled === false) {
      evt.preventDefault();
      send();
    }
  };
  var handleChange = function handleChange(innerHTML, textContent, innerText) {
    setStateValue(innerHTML);
    if (typeof sendDisabled === "undefined") {
      setStateSendDisabled(textContent.length === 0);
    }
    if (typeof scrollRef.current.updateScroll === "function") {
      scrollRef.current.updateScroll();
    }
    var content = getContent();
    onChange(innerHTML, textContent, innerText, content[2]);
  };
  var cName = "".concat(prefix, "-message-input"),
    ph = typeof placeholder === "string" ? placeholder : "";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: classNames(cName, _defineProperty({}, "".concat(cName, "--disabled"), disabled), className)
  }), attachButton === true && /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__tools")
  }, /*#__PURE__*/React.createElement(AttachmentButton, {
    onClick: onAttachClick,
    disabled: disabled === true || attachDisabled === true
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__content-editor-wrapper")
  }, /*#__PURE__*/React.createElement(EditorContainer, {
    fancyScroll: fancyScroll,
    ref: scrollRef,
    className: "".concat(cName, "__content-editor-container")
  }, /*#__PURE__*/React.createElement(ContentEditable, {
    ref: msgRef,
    className: "".concat(cName, "__content-editor"),
    disabled: disabled,
    placeholder: ph,
    onKeyPress: handleKeyPress,
    onChange: handleChange,
    activateAfterChange: activateAfterChange,
    value: stateValue
  }))), sendButton === true && /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__tools")
  }, /*#__PURE__*/React.createElement(SendButton, {
    onClick: send,
    disabled: disabled === true || stateSendDisabled === true
  })));
}
var MessageInput = /*#__PURE__*/forwardRef(MessageInputInner);
MessageInput.displayName = "MessageInput";
MessageInput.propTypes = {
  /** Value. */
  value: PropTypes.string,
  /** Placeholder. */
  placeholder: PropTypes.string,
  /** A input can show it is currently unable to be interacted with. */
  disabled: PropTypes.bool,
  /** Prevent that the input message is sent on a return press */
  sendOnReturnDisabled: PropTypes.bool,
  /** Send button can be disabled.<br>
   * It's state is tracked by component, but it can be forced */
  sendDisabled: PropTypes.bool,
  /**
   * Fancy scroll
   * This property is set in constructor, and is not changing when component update.
   */
  fancyScroll: PropTypes.bool,
  /**
   * Sets focus element and caret at the end of input<br>
   * when value is changed programmatically (e.g) from button click and element is not active
   */
  activateAfterChange: PropTypes.bool,
  /** Set focus after mount. */
  autoFocus: PropTypes.bool,
  /**
   * onChange handler<br>
   * @param {String} innerHtml
   * @param {String} textContent
   * @param {String} innerText
   * @param {NodeList} nodes
   */
  onChange: PropTypes.func,
  /**
   * onSend handler<br>
   * @param {String} innerHtml
   * @param {String} textContent
   * @param {String} innerText
   * @param {NodeList} nodes
   */
  onSend: PropTypes.func,
  /** Additional classes. */
  className: PropTypes.string,
  /** Show send button */
  sendButton: PropTypes.bool,
  /** Show add attachment button */
  attachButton: PropTypes.bool,
  /** Disable add attachment button */
  attachDisabled: PropTypes.bool,
  /**
   * onAttachClick handler
   */
  onAttachClick: PropTypes.func
};
process.env.NODE_ENV !== "production" ? MessageInputInner.propTypes = MessageInput.propTypes : void 0;
export { MessageInput };
export default MessageInput;
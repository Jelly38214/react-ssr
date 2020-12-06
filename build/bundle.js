/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.App = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./components/Header */ \"./src/components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _store = __webpack_require__(/*! ./components/Header/store */ \"./src/components/Header/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = exports.App = function App(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    (0, _reactRouterConfig.renderRoutes)(props.route.routes)\n  );\n};\n\nApp.loadData = function (store) {\n  return store.dispatch(_store.headerComponentActions.getHeaderInfo());\n};\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Home = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _NotFound = __webpack_require__(/*! ./containers/NotFound */ \"./src/containers/NotFound/index.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  path: '/',\n  component: _App.App,\n  key: 'App',\n  loadData: function loadData(store) {\n    return _App.App.loadData(store);\n  },\n  routes: [{\n    path: '/',\n    component: _Home2.default,\n    exact: true,\n    key: 'home',\n    loadData: function loadData(store) {\n      return _Home2.default.loadData(store);\n    }\n  }, {\n    path: '/login',\n    component: _Login2.default,\n    exact: true,\n    key: 'login'\n  }, {\n    component: _NotFound2.default\n  }]\n}];\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.clientRequest = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar clientRequest = exports.clientRequest = _axios2.default.create({\n  baseURL: '/nodeapi'\n});\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _store = __webpack_require__(/*! ./store */ \"./src/components/Header/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: '/' },\n      'Home'\n    ),\n    _react2.default.createElement('br', null),\n    props.login ? _react2.default.createElement(\n      _react.Fragment,\n      null,\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/login' },\n        '\\u7FFB\\u8BD1\\u5217\\u8868'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'button',\n        { onClick: props.handleLogout },\n        '\\u9000\\u51FA'\n      )\n    ) : _react2.default.createElement(\n      'button',\n      { onClick: props.handleLogin },\n      '\\u767B\\u5F55'\n    )\n  );\n};\n\nvar mapState = function mapState(state) {\n  return { login: state.header.login };\n};\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    handleLogin: function handleLogin() {\n      dispatch(_store.headerComponentActions.login());\n    },\n    handleLogout: function handleLogout() {\n      dispatch(_store.headerComponentActions.logout());\n    }\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(Header);\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getHeaderInfo = exports.logout = exports.login = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar https = __webpack_require__(/*! https */ \"https\");\n\n\nvar changeLogin = function changeLogin(value) {\n  return { type: _constants.CHANGE_LOGIN, value: value };\n};\n\nvar login = exports.login = function login() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/login', { httpsAgent: new https.Agent({ rejectUnauthorized: false }) }).then(function (res) {\n      dispatch(changeLogin(true));\n    });\n  };\n};\n\nvar logout = exports.logout = function logout() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/logout', { httpsAgent: new https.Agent({ rejectUnauthorized: false }) }).then(function (res) {\n      dispatch(changeLogin(false));\n    });\n  };\n};\n\nvar getHeaderInfo = exports.getHeaderInfo = function getHeaderInfo() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/islogin', { httpsAgent: new https.Agent({ rejectUnauthorized: false }) }).then(function (res) {\n      dispatch(changeLogin(res.data.data.isLogin));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/actions.js?");

/***/ }),

/***/ "./src/components/Header/store/constants.js":
/*!**************************************************!*\
  !*** ./src/components/Header/store/constants.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LOGIN = exports.CHANGE_LOGIN = 'changeLogin';\n\n//# sourceURL=webpack:///./src/components/Header/store/constants.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.headerComponentActions = exports.headerReducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/components/Header/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/components/Header/store/actions.js\");\n\nvar headerComponentActions = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.headerReducer = _reducer2.default;\nexports.headerComponentActions = headerComponentActions;\n\n//# sourceURL=webpack:///./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar defaultState = {\n  login: false\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.CHANGE_LOGIN:\n      return _extends({}, state, { login: action.value });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// 同构： 一套在服务端执行一次(生成内容)，客户端执行一次(绑定事件)\n\nvar Home = function Home() {\n  var homeState = (0, _reactRedux.useSelector)(function (state) {\n    return state.home;\n  });\n  var dispatch = (0, _reactRedux.useDispatch)();\n\n  // This hook will not execute on server side.\n  (0, _react.useEffect)(function () {\n    if (!homeState.newsList.length) {\n      dispatch((0, _actions.getHomeList)());\n    }\n  }, []);\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    homeState.newsList.map(function (item) {\n      return _react2.default.createElement(\n        'div',\n        { key: item.menuUrl },\n        item.menuName\n      );\n    }),\n    _react2.default.createElement(\n      'button',\n      { onClick: function onClick() {\n          return alert('click');\n        } },\n      'Click'\n    )\n  );\n};\n\n// This function uses to get route dependency data before server render\nHome.loadData = function (store) {\n  return store.dispatch((0, _actions.getHomeList)());\n};\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getHomeList = exports.changeList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\nvar https = __webpack_require__(/*! https */ \"https\");\nvar changeList = exports.changeList = function changeList(list) {\n  return {\n    type: _constants.CHANGE_LIST,\n    list: list\n  };\n};\n\nvar getHomeList = exports.getHomeList = function getHomeList() {\n  var server = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/menus', { httpsAgent: new https.Agent({ rejectUnauthorized: false }) }).then(function (res) {\n      var list = res.data;\n      dispatch(changeList(list));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/containers/Home/store/constants.js":
/*!************************************************!*\
  !*** ./src/containers/Home/store/constants.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LIST = exports.CHANGE_LIST = 'HOME/CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/containers/Home/store/constants.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\");\n\nObject.keys(_reducer).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _reducer[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.homeReducer = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\nvar defaultState = { name: 'jelly', newsList: [] };\n\nvar homeReducer = exports.homeReducer = function homeReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.CHANGE_LIST:\n      return _extends({}, state, {\n        newsList: action.list\n      });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      null,\n      'Login'\n    )\n  );\n};\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/containers/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/containers/NotFound/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (props) {\n  if (props.staticContext) {\n    props.staticContext.NotFound = true;\n  }\n  return _react2.default.createElement(\n    'div',\n    null,\n    '404, sorry page not found'\n  );\n};\n\n//# sourceURL=webpack:///./src/containers/NotFound/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _httpProxyMiddleware = __webpack_require__(/*! http-proxy-middleware */ \"http-proxy-middleware\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('public'));\napp.use('/nodeapi', (0, _httpProxyMiddleware.createProxyMiddleware)({ target: 'https://cz.droomo.top/mock/5bf3aa57bc19540767dd9451/example', pathRewrite: { '^/nodeapi': '' }, secure: false, changeOrigin: true }));\n\napp.get('*', function (req, res) {\n  var store = (0, _store.getStore)(req);\n  var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);\n\n  // 让matchedRoutes里面的所有的组件，对应的loadData方法执行一次\n  var promises = [];\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) promises.push(item.route.loadData(store));\n  });\n  Promise.all(promises).then(function () {\n    var context = {};\n    var html = (0, _utils.render)(store, _Routes2.default, req, context);\n\n    // 301\n    if (context.action === 'REPLACE') {\n      res.redirect(301, context.action.url);\n    }\n\n    // 404\n    if (context.NotFound) {\n      res.status(404).send(html).end();\n    }\n\n    res.send(html);\n  });\n});\n\nvar server = app.listen(3000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.serverRequest = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar serverRequest = exports.serverRequest = function serverRequest(req) {\n  return _axios2.default.create({\n    baseURL: 'https://cz.droomo.top/mock/5bf3aa57bc19540767dd9451/example',\n    headers: {\n      cookie: req.get('cookie') || ''\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// 在这里，拿到异步数据，并填充到store之中\n// store里面到底填充什么并不知道 ，需要结合当前访问的路径和路由做判断\n// 如果用户访问 / 路径，我们就拿home组件的异步数据\n// 如果用户访问 /login 路径，我们就拿login组件的异步数据\n\n// 根据路由的路径，往store里面加载数据\n\nvar render = exports.render = function render(store, Routes, req, context) {\n\n  var content = _server2.default.renderToString(\n  // keep store unique for every user. \n  _react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: context },\n      _react2.default.createElement(\n        _reactRouterDom.Switch,\n        null,\n        (0, _reactRouterConfig.renderRoutes)(Routes)\n      )\n    )\n  ));\n\n  return '\\n      <html>\\n      <head>\\n        <title>ssr</title> \\n      </head> \\n      <body>\\n        <div id=\"root\">' + content + '</div> \\n        <script>\\n          // \\u6CE8\\u6C34\\n          window.context = {\\n            state: ' + JSON.stringify(store.getState()) + '\\n          } \\n        </script>\\n        <script src=\\'/index.js\\'></script>\\n      </body>\\n      </html> \\n    ';\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.js\");\n\nvar _store2 = __webpack_require__(/*! ../components/Header/store */ \"./src/components/Header/store/index.js\");\n\nvar _request = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request2 = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n  home: _store.homeReducer,\n  header: _store2.headerReducer\n});\n\nvar getStore = exports.getStore = function getStore(req) {\n  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _request.serverRequest)(req))));\n};\n\nvar getClientStore = exports.getClientStore = function getClientStore() {\n  var defaultState = window.context.state;\n  return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.clientRequest)));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-proxy-middleware\");\n\n//# sourceURL=webpack:///external_%22http-proxy-middleware%22?");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"https\");\n\n//# sourceURL=webpack:///external_%22https%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });
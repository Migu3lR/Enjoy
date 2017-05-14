/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "http://138.68.131.182:3002";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = __webpack_require__(4);

var firebase = _interopRequireWildcard(_firebase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const Firebase = firebase.initializeApp({
  apiKey: 'AIzaSyBgPTYEOEdRan943EQJ4PjDoIKJLnah0qA',
  authDomain: 'enjoylife-32afb.firebaseapp.com',
  databaseURL: 'https://enjoylife-32afb.firebaseio.com',
  projectId: 'enjoylife-32afb',
  storageBucket: 'enjoylife-32afb.appspot.com',
  messagingSenderId: '153966974380'
});

exports.default = Firebase;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(1);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _Firebase = __webpack_require__(0);

var _Firebase2 = _interopRequireDefault(_Firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use(_bodyParser2.default.json()); // support json encoded bodies
app.use(_bodyParser2.default.urlencoded({ extended: true })); // support encoded bodies

const Data = _Firebase2.default.database();
const Auth = _Firebase2.default.auth();

const acceso = Auth.signInWithEmailAndPassword('alegraEL_Payments@alegraELPayments.com', 'alegraEL_Payments!"#');

app.post('/payu', (req, res) => {
  const params = req.body;
  console.log(params);

  acceso.then(() => {
    console.log('Login OK.');

    const updates = {};
    updates[`/transacciones/${params.reference_sale}/Estado`] = params.state_pol;
    updates[`/transacciones/${params.reference_sale}/EstadoDet`] = params.response_code_pol;
    updates[`/usuarios/${params.extra1}/transacciones/${params.reference_sale}/Estado`] = params.state_pol;
    updates[`/usuarios/${params.extra1}/transacciones/${params.reference_sale}/EstadoDet`] = params.response_code_pol;

    Data.ref().update(updates);

    Data.ref(`/transacciones/${params.reference_sale}`).on('child_changed', () => {
      res.writeHead(200);
      res.end();
    });
  });

  acceso.catch(() => {
    console.log('Login Error.');
    res.writeHead(400);
    res.end();
  });
});

app.listen(55880);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ })
/******/ ]);
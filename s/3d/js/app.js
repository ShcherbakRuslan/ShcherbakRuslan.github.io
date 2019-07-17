/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([2,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(5);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = __webpack_require__(0);

var _postprocessing = __webpack_require__(1);

var _SelectiveBloomEffect = __webpack_require__(6);

var _SelectiveBloomEffect2 = _interopRequireDefault(_SelectiveBloomEffect);

var _stoneMap = __webpack_require__(7);

var _stoneMap2 = _interopRequireDefault(_stoneMap);

var _stoneTexture = __webpack_require__(8);

var _stoneTexture2 = _interopRequireDefault(_stoneTexture);

var _stoneNormalMap = __webpack_require__(9);

var _stoneNormalMap2 = _interopRequireDefault(_stoneNormalMap);

var _stoneGlow = __webpack_require__(10);

var _stoneGlow2 = _interopRequireDefault(_stoneGlow);

var _utils = __webpack_require__(11);

var _OBJLoader = __webpack_require__(12);

var _OBJLoader2 = _interopRequireDefault(_OBJLoader);

var _letter_x = __webpack_require__(13);

var _letter_x2 = _interopRequireDefault(_letter_x);

var _CameraMouseControl = __webpack_require__(14);

var _CameraMouseControl2 = _interopRequireDefault(_CameraMouseControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import torsionVert from './shaders/torsion.v.glsl';
// import torsionFrag from './shaders/torsion.f.glsl';

var MAIN_COLOR = '#D028C5';
var BACKGROUND_COLOR = '#040507';

var clock = new _three.Clock();

/**
 * * *******************
 * * CORE
 * * *******************
 */
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var Webgl = function () {
  function Webgl(w, h) {
    _classCallCheck(this, Webgl);

    this.meshCount = 0;
    this.meshListeners = [];
    this.renderer = new _three.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(1.6, window.devicePixelRatio) || 1);
    this.renderer.setClearColor(new _three.Color(BACKGROUND_COLOR));
    this.scene = new _three.Scene();
    this.selectiveScene = new _three.Scene();
    this.camera = new _three.PerspectiveCamera(50, w / h, 1, 1000);
    this.camera.position.set(0, 0, 1.5);
    this.camera.lookAt(new _three.Vector3(0, 0, 0));
    this.dom = this.renderer.domElement;

    this._composer = false;
    this._passes = {};
    this.initPostprocessing();

    this.update = this.update.bind(this);
    this.resize = this.resize.bind(this);
    this.resize(w, h); // set render size
  }

  _createClass(Webgl, [{
    key: 'add',
    value: function add(mesh) {
      this.scene.add(mesh);
      if (!mesh.update) return;
      this.meshListeners.push(mesh.update);
      this.meshCount++;
    }
  }, {
    key: 'addSelective',
    value: function addSelective(mesh) {
      this.selectiveScene.add(mesh);
      if (!mesh.update) return;
      this.meshListeners.push(mesh.update);
      this.meshCount++;
    }
  }, {
    key: 'update',
    value: function update() {
      var i = this.meshCount;
      while (--i >= 0) {
        this.meshListeners[i].apply(this, null);
      }
      // this.renderer.render(this.scene, this.camera);
      this._composer.render(clock.getDelta());
    }
  }, {
    key: 'resize',
    value: function resize(w, h) {
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
      this._composer.setSize(w, h);
    }
  }, {
    key: 'initPostprocessing',
    value: function initPostprocessing() {
      this._composer = new _postprocessing.EffectComposer(this.renderer, {
        // stencilBuffer: true,
        // depthTexture: true,
      });

      // TODO add selective bloom effect

      // *********
      // EFFECTS
      // const smaaEffect = new SMAAEffect(assets.get("smaa-search"), assets.get("smaa-area"));
      // smaaEffect.setEdgeDetectionThreshold(0.065);

      var selectiveBloomEffect = new _SelectiveBloomEffect2.default(this.selectiveScene, this.camera, {
        blendFunction: _postprocessing.BlendFunction.NORMAL
      });

      // PASSES
      var renderPass = new _postprocessing.RenderPass(this.scene, this.camera);
      // renderPass.renderToScreen = true;
      this._composer.addPass(renderPass);

      // const pass = new EffectPass(camera, smaaEffect, bloomEffect);
      // const pass = new EffectPass(this.camera, selectiveBloomEffect);
      var pass = new _postprocessing.EffectPass(this.camera);
      pass.renderToScreen = true;
      this._composer.addPass(pass);
    }
  }]);

  return Webgl;
}();

var webgl = new Webgl(windowWidth, windowHeight);
document.body.appendChild(webgl.dom);

/**
 * * *******************
 * * CREATING ZONE
 * * *******************
 */

// Lights
var ambiantLight = new _three.AmbientLight(0xffffff, 1);
webgl.add(ambiantLight);

var directionalLight = new _three.DirectionalLight(0xffffff, 2);
directionalLight.position.set(2, 5, 10);
webgl.add(directionalLight);

var X = function (_Mesh) {
  _inherits(X, _Mesh);

  function X(geometry, material) {
    _classCallCheck(this, X);

    var _this = _possibleConstructorReturn(this, (X.__proto__ || Object.getPrototypeOf(X)).call(this, geometry, material));

    _this.update = _this.update.bind(_this);
    return _this;
  }

  _createClass(X, [{
    key: 'update',
    value: function update() {
      this.rotation.y += 0.01;
    }
  }]);

  return X;
}(_three.Mesh);

// START


exports.default = X;
var ObjLoader = new _OBJLoader2.default();
var loader = new _three.TextureLoader();

ObjLoader.load(_letter_x2.default, function (obj) {
  loader.load(_stoneMap2.default, function (stoneMap) {
    loader.load(_stoneTexture2.default, function (utilMap) {
      loader.load(_stoneNormalMap2.default, function (normalMap) {
        loader.load(_stoneGlow2.default, function (glowMap) {

          // Create the X to render
          var material = new _three.MeshStandardMaterial({
            map: stoneMap,
            roughness: 0.15,
            metalness: 0.9,
            metalnessMap: utilMap,
            roughnessMap: utilMap,
            normalMap: normalMap,
            normalScale: new _three.Vector2(5, 5)
          });
          var x = new X(obj.children[0].geometry, material);
          webgl.add(x);

          // Create the X to have glow render
          var selectiveMaterial = new _three.MeshBasicMaterial({
            map: glowMap
          });
          var xSelective = new X(obj.children[0].geometry, selectiveMaterial);
          webgl.addSelective(xSelective);
        });
      });
    });
  });
});

// CAMERA CONTROLLER
var cameraControl = new _CameraMouseControl2.default(webgl.camera, {
  mouseMove: [-1, 1],
  velocity: [0.1, 0.1]
});

/**
 * * *******************
 * * RESIZE && LOOP
 * * *******************
 */
function onResize() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  webgl.resize(windowWidth, windowHeight);
}
window.addEventListener('resize', onResize);
window.addEventListener('orientationchange', onResize);

function loop() {
  webgl.update();

  // Camera update
  cameraControl.update();

  requestAnimationFrame(loop);
}
loop();

/***/ })
/******/ ]);
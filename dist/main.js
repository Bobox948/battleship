/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./gameboard.js":
/*!**********************!*\
  !*** ./gameboard.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./ship.js\");\n\n\n\nconst Gameboard = (name, length, x, y) => {\n\nlet missed = []\n   \n\nconst ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(name, length, x, y)\n\n  \n\n\n\nconst receiveAttack = (x,y) => {\n\nif (x == ship.x && y == ship.y)\n\n{\n  ship.damage(1)\n  return true\n}\n\nelse if (x == ship.x && y == ship.y+1)\n\n{\n  ship.damage(1)\n  return true\n}\nelse if ((ship.name == 'cruiser' || ship.name == 'submarine') && x == ship.x && y == ship.y+2)\n\n{\n  ship.damage(1)\n  return true\n}\nelse if (ship.name == 'cruiser' && x == ship.x && y == ship.y+3)\n\n{\n  ship.damage(1)\n  return true\n}\n\n\n\nelse\n\n{\n  missed.push({x,y})\n  return missed\n  }\n\n\n\n}\n\n\n    return{missed, receiveAttack, ship};\n\n  };\n  \n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./gameboard.js?");

/***/ }),

/***/ "./player.js":
/*!*******************!*\
  !*** ./player.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n\nconst Player = (name) => {\n    \n \n\n    return { name};\n  };\n  \n  \n  \n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./player.js?");

/***/ }),

/***/ "./ship.js":
/*!*****************!*\
  !*** ./ship.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\n\nconst Ship = (name, length, x, y, health = length,sunk = false) => {\n    \n\n    const damage = x => {\n      return health -= x;\n      };\n    \n    const isSunk = () => {if (health==0)\n    {return sunk = true}\nelse{ return sunk}}\n  \n    return {name, length, health, x, y, damage, isSunk};\n  };\n  \n  \n  \n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard.js */ \"./gameboard.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ship.js */ \"./ship.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player.js */ \"./player.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function() { // making sure the doam is loaded first, after that we can locate elements by ID easily\n\n\n\n\n\nfor (let k=0; k<10; k++){ // for every grid cell, the loop creates a click event listenner that triggers the game function\n\n        document.querySelector(`.c0${[k]}`).addEventListener('click', Attack)\n        document.querySelector(`.d0${[k]}`).addEventListener('click', Attack)\n\n\n   \n}\n\nfor (let i=10; i<100; i++){ // for every grid cell, the loop creates a click event listenner that triggers the game function\n\n    document.querySelector(`.c${[i]}`).addEventListener('click', Attack)\n    document.querySelector(`.d${[i]}`).addEventListener('click', Attack)\n\n\n\n}\n\n\n\nGame()\n\n\n\n\n})\nlet boat;\nlet boat2;\nlet submarine;\nlet submarine2;\nlet cruiser;\nlet cruiser2;\n\nfunction Game(){\n\n    var player = document.querySelector('#name1').value\n\n    const player1 = (0,_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)(player)\n\n\n    // place the ships first randomly\n\n   var random1 = Math.floor(Math.random() * (6 - 0 + 1) + 0)\n   var random2 = Math.floor(Math.random() * (3 - 0 + 1) + 0)\n   var random3 = Math.floor(Math.random() * (7 - 0 + 1) + 0)\n   var random4 = Math.floor(Math.random() * (6 - 4 + 1) + 4)\n   var random5 = Math.floor(Math.random() * (8 - 0 + 1) + 0)\n   var random6 = Math.floor(Math.random() * (9 - 7 + 1) + 7)\n\n\n   \n boat = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)('boat', 4, random2, random1)\n submarine = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)('submarine', 3, random4, random3)\n\ncruiser = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)('cruiser', 2, random6, random5)\n\nvar first = document.querySelector(`.c${random2}${random1}`)\nvar first1 = document.querySelector(`.c${random2}${random1+1}`)\nvar first2 = document.querySelector(`.c${random2}${random1+2}`)\nvar first3 = document.querySelector(`.c${random2}${random1+3}`)\n\nvar second = document.querySelector(`.c${random4}${random3}`)\nvar second1 = document.querySelector(`.c${random4}${random3+1}`)\nvar second2 = document.querySelector(`.c${random4}${random3+2}`)\n\nvar third = document.querySelector(`.c${random6}${random5}`)\nvar third1 = document.querySelector(`.c${random6}${random5+1}`)\n\nfirst.innerHTML = \"B\"\nfirst1.innerHTML = \"B\"\nfirst2.innerHTML = \"B\"\nfirst3.innerHTML = \"B\"\n\nsecond.innerHTML = \"S\"\nsecond1.innerHTML = \"S\"\nsecond2.innerHTML = \"S\"\n\nthird.innerHTML = \"C\"\nthird1.innerHTML = \"C\"\n\n\n\n// player random\n\nvar random7 = Math.floor(Math.random() * (6 - 0 + 1) + 0)\nvar random8 = Math.floor(Math.random() * (3 - 0 + 1) + 0)\nvar random9 = Math.floor(Math.random() * (7 - 0 + 1) + 0)\nvar random10 = Math.floor(Math.random() * (6 - 4 + 1) + 4)\nvar random11 = Math.floor(Math.random() * (8 - 0 + 1) + 0)\nvar random12 = Math.floor(Math.random() * (9 - 7 + 1) + 7)\n\nboat2 = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)('boat', 4, random8, random7)\n submarine2 = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)('submarine', 3, random10, random9)\n\n cruiser2 = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)('cruiser', 2, random12, random11)\nvar first2 = document.querySelector(`.d${random8}${random7}`)\nvar first21 = document.querySelector(`.d${random8}${random7+1}`)\nvar first22 = document.querySelector(`.d${random8}${random7+2}`)\nvar first23 = document.querySelector(`.d${random8}${random7+3}`)\n\nvar second2 = document.querySelector(`.d${random10}${random9}`)\nvar second21 = document.querySelector(`.d${random10}${random9+1}`)\nvar second22 = document.querySelector(`.d${random10}${random9+2}`)\n\nvar third2 = document.querySelector(`.d${random12}${random11}`)\nvar third21 = document.querySelector(`.d${random12}${random11+1}`)\n\nfirst2.innerHTML = \"B.\"\nfirst21.innerHTML = \"B.\"\nfirst22.innerHTML = \"B.\"\nfirst23.innerHTML = \"B.\"\n\nsecond2.innerHTML = \"S.\"\nsecond21.innerHTML = \"S.\"\nsecond22.innerHTML = \"S.\"\n\nthird2.innerHTML = \"C.\"\nthird21.innerHTML = \"C.\"\n\n}\n\nfunction Attack(e){\n\n    \n    var clickval = e.target.innerHTML\n    var clickval2 = e.target.classList.value\n\n\nvar x = parseInt(clickval2.substring(1,2))\nvar y = parseInt(clickval2.substring(2,3))\n\n\nif (clickval === 'B.')\n{\n   // boat2.ship.health = boat2.ship.health-1\n\n   boat2.ship.damage(1);\n   this.innerHTML = 'X'\n   this.style.color = 'red';\n   var random13 = Math.floor(Math.random() * 10)\n    var random14 = Math.floor(Math.random() * 10)\n\n    var shot = document.querySelector(`.c${random13}${random14}`)\n\n    if (shot.innerHTML == 'B')\n   { \n    \n    setTimeout(() => {\n        shot.innerHTML = 'X'\n    shot.style.color = 'red';\n    boat.ship.damage(1)\n       }, 500);\n   }\n    else if (shot.innerHTML == 'S')\n       {\n        setTimeout(() => {\n            shot.innerHTML = 'X'\n        shot.style.color = 'red';\n        submarine.ship.damage(1)\n           }, 500);\n\n\n       }\n    else if (shot.innerHTML == 'C')\n    {\n        setTimeout(() => {\n            shot.innerHTML = 'X'\n        shot.style.color = 'red';\n        cruiser.ship.damage(1)\n           }, 500);\n\n    }\n\n    else if (shot.innerHTML == '.' || shot.innerHTML == 'X')\n{\n    \n    var random13 = Math.floor(Math.random() * 10)\n    var random14 = Math.floor(Math.random() * 10)\n\n    var shot = document.querySelector(`.c${random13}${random14}`)\n\n    if (shot.innerHTML == 'B')\n   { \n    \n    setTimeout(() => {\n        shot.innerHTML = 'X'\n    shot.style.color = 'red';\n    boat.ship.damage(1)\n       }, 500);\n   }\n    else if (shot.innerHTML == 'S')\n       {\n        setTimeout(() => {\n            shot.innerHTML = 'X'\n        shot.style.color = 'red';\n        submarine.ship.damage(1)\n           }, 500);\n\n\n       }\n    else if (shot.innerHTML == 'C')\n    {\n        setTimeout(() => {\n            shot.innerHTML = 'X'\n        shot.style.color = 'red';\n        cruiser.ship.damage(1)\n           }, 500);\n\n\n    }\n\n    else if (shot.innerHTML == 'X')\n\n    { shot.innerHTML='X'}\n\n    else{\n\n        setTimeout(() => {\n            shot.innerHTML = '.'\n       \n           }, 500);    }\n\n        }\n\n    else{\n\n        setTimeout(() => {\n            shot.innerHTML = '.'\n       \n           }, 500);\n    }\n \n\n\n}\n\n\n\nelse if (clickval == 'S.')\n{\n    submarine2.ship.damage(1);\n    this.innerHTML = 'X'\n    this.style.color = 'red';\n\n    var random13 = Math.floor(Math.random() * 10)\n    var random14 = Math.floor(Math.random() * 10)\n\n    var shot = document.querySelector(`.c${random13}${random14}`)\n\n    if (shot.innerHTML == 'B')\n   { \n    \n    setTimeout(() => {\n        shot.innerHTML = 'X'\n    shot.style.color = 'red';\n    boat.ship.damage(1)\n       }, 500);\n   }\n    else if (shot.innerHTML == 'S')\n       {\n        setTimeout(() => {\n            shot.innerHTML = 'X'\n        shot.style.color = 'red';\n        submarine.ship.damage(1)\n           }, 500);\n\n\n       }\n    else if (shot.innerHTML == 'C')\n    {\n        setTimeout(() => {\n            shot.innerHTML = 'X'\n        shot.style.color = 'red';\n        cruiser.ship.damage(1)\n           }, 500);\n\n    }\n    else if (shot.innerHTML == '.' || shot.innerHTML == 'X')\n    {\n        \n        var random13 = Math.floor(Math.random() * 10)\n        var random14 = Math.floor(Math.random() * 10)\n    \n        var shot = document.querySelector(`.c${random13}${random14}`)\n    \n        if (shot.innerHTML == 'B')\n       { \n        \n        setTimeout(() => {\n            shot.innerHTML = 'X'\n        shot.style.color = 'red';\n        boat.ship.damage(1)\n           }, 500);\n       }\n        else if (shot.innerHTML == 'S')\n           {\n            setTimeout(() => {\n                shot.innerHTML = 'X'\n            shot.style.color = 'red';\n            submarine.ship.damage(1)\n               }, 500);\n    \n    \n           }\n        else if (shot.innerHTML == 'C')\n        {\n            setTimeout(() => {\n                shot.innerHTML = 'X'\n            shot.style.color = 'red';\n            cruiser.ship.damage(1)\n               }, 500);\n    \n    \n        }\n    \n        else if (shot.innerHTML == 'X')\n    \n        { shot.innerHTML='X'}\n    \n        else{\n    \n            setTimeout(() => {\n                shot.innerHTML = '.'\n           \n               }, 500);    }\n    \n            }\n    else{\n\n        setTimeout(() => {\n            shot.innerHTML = '.'\n       \n           }, 500);    }\n \n\n\n}\nelse if (clickval == 'C.')\n{\n    cruiser2.ship.damage(1);\n    this.innerHTML = 'X'\n    this.style.color = 'red';\n    var random13 = Math.floor(Math.random() * 10)\n    var random14 = Math.floor(Math.random() * 10)\n\n    var shot = document.querySelector(`.c${random13}${random14}`)\n\n    if (shot.innerHTML == 'B')\n   { \n    \n    setTimeout(() => {\n        shot.innerHTML = 'X'\n    shot.style.color = 'red';\n    boat.ship.damage(1)\n       }, 500);\n   }\n    else if (shot.innerHTML == 'S')\n       {\n        setTimeout(() => {\n            shot.innerHTML = 'X'\n        shot.style.color = 'red';\n        submarine.ship.damage(1)\n           }, 500);\n\n\n       }\n    else if (shot.innerHTML == 'C')\n    {\n        setTimeout(() => {\n            shot.innerHTML = 'X'\n        shot.style.color = 'red';\n        cruiser.ship.damage(1)\n           }, 500);\n\n    }\n    else if (shot.innerHTML == '.' || shot.innerHTML == 'X')\n    {\n        \n        var random13 = Math.floor(Math.random() * 10)\n        var random14 = Math.floor(Math.random() * 10)\n    \n        var shot = document.querySelector(`.c${random13}${random14}`)\n    \n        if (shot.innerHTML == 'B')\n       { \n        \n        setTimeout(() => {\n            shot.innerHTML = 'X'\n        shot.style.color = 'red';\n        boat.ship.damage(1)\n           }, 500);\n       }\n        else if (shot.innerHTML == 'S')\n           {\n            setTimeout(() => {\n                shot.innerHTML = 'X'\n            shot.style.color = 'red';\n            submarine.ship.damage(1)\n               }, 500);\n    \n    \n           }\n        else if (shot.innerHTML == 'C')\n        {\n            setTimeout(() => {\n                shot.innerHTML = 'X'\n            shot.style.color = 'red';\n            cruiser.ship.damage(1)\n               }, 500);\n    \n    \n        }\n    \n        else if (shot.innerHTML == 'X')\n    \n        { shot.innerHTML='X'}\n    \n        else{\n    \n            setTimeout(() => {\n                shot.innerHTML = '.'\n           \n               }, 500);    }\n    \n            }\n    else{\n\n        setTimeout(() => {\n            shot.innerHTML = '.'\n       \n           }, 500);    }\n \n\n\n}\nelse {\n    this.innerHTML = \".\"\n    this.style.color = 'black';\n    var random13 = Math.floor(Math.random() * 10)\n    var random14 = Math.floor(Math.random() * 10)\n\n    var shot = document.querySelector(`.c${random13}${random14}`)\n\n    if (shot.innerHTML == 'B')\n   { \n    \n    setTimeout(() => {\n        shot.innerHTML = 'X'\n    shot.style.color = 'red';\n    boat.ship.damage(1)\n       }, 500);\n   }\n    else if (shot.innerHTML == 'S')\n       {\n        setTimeout(() => {\n            shot.innerHTML = 'X'\n        shot.style.color = 'red';\n        submarine.ship.damage(1)\n           }, 500);\n\n\n       }\n    else if (shot.innerHTML == 'C')\n    {\n        setTimeout(() => {\n            shot.innerHTML = 'X'\n        shot.style.color = 'red';\n        cruiser.ship.damage(1)\n           }, 500);\n\n    }\n    else if (shot.innerHTML == '.' || shot.innerHTML == 'X')\n    {\n        \n        var random13 = Math.floor(Math.random() * 10)\n        var random14 = Math.floor(Math.random() * 10)\n    \n        var shot = document.querySelector(`.c${random13}${random14}`)\n    \n        if (shot.innerHTML == 'B')\n       { \n        \n        setTimeout(() => {\n            shot.innerHTML = 'X'\n        shot.style.color = 'red';\n        boat.ship.damage(1)\n           }, 500);\n       }\n        else if (shot.innerHTML == 'S')\n           {\n            setTimeout(() => {\n                shot.innerHTML = 'X'\n            shot.style.color = 'red';\n            submarine.ship.damage(1)\n               }, 500);\n    \n    \n           }\n        else if (shot.innerHTML == 'C')\n        {\n            setTimeout(() => {\n                shot.innerHTML = 'X'\n            shot.style.color = 'red';\n            cruiser.ship.damage(1)\n               }, 500);\n\n    \n        }\n\n        else if (shot.innerHTML == 'X')\n\n        { shot.innerHTML='X'}\n\n        else{\n\n            setTimeout(() => {\n                shot.innerHTML = '.'\n           \n               }, 500);    }\n     \n    \n    }\n\n    else{\n\n        setTimeout(() => {\n            shot.innerHTML = '.'\n       \n           }, 500);    }\n \n\n}\n\nvar score = document.querySelector('.score')\n\nif (boat2.ship.damage(0) == 0 && submarine2.ship.damage(0) == 0 && cruiser2.ship.damage(0) == 0 )\n{\n\n    setTimeout(() => {\nalert(\"you won\")      }, 500);\n}\nelse if (boat.ship.damage(0) == 0 && submarine.ship.damage(0) == 0 && cruiser.ship.damage(0) == 0)\n\n{\n\nsetTimeout(() => {\n    alert(\"you lost\")  }, 500);\n}\n}\n\n// créer une array shots, et après chaque coup ou miss on push dedans, \n// et après boucle while, tant que les coordonnées random sont dans l'array,\n// on continue à en générer,on peut aussi se servir du missed array de l'objet de préférence\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
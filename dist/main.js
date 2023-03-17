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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./ship.js\");\n // importing the ship factory function to create the ship\n\n\nconst Gameboard = (name, length, x, y) => {\n\nlet missed = [] // reports missed shots by ship\n   \n\nconst ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(name, length, x, y) // calling the ship factory function to create the ship\n\n  \n\nconst receiveAttack = (x,y) => {\n\nif (x == ship.x && y == ship.y) // if the coordinnates received in the arguments are equal to those of ship, then it touches\n\n{\n  ship.damage(1)\n  return true\n}\n\nelse if (x == ship.x && y == ship.y+1) // +1 because the ship is not just one square\n\n{\n  ship.damage(1)\n  return true\n}\nelse if ((ship.name == 'cruiser' || ship.name == 'submarine') && x == ship.x && y == ship.y+2) // only cruisers and submarines are > 2 length\n\n{\n  ship.damage(1)\n  return true\n}\nelse if (ship.name == 'cruiser' && x == ship.x && y == ship.y+3)\n\n{\n  ship.damage(1)\n  return true\n}\n\n\n\nelse\n\n{\n  missed.push({x,y}) // if missed, push to the array to get a track of it\n  return missed\n  }\n\n\n\n}\n\n\n    return{missed, receiveAttack, ship};\n\n  };\n  \n\n\n\n\n\n\n\n\n// module.exports = Gameboard for tests\n\n\n//# sourceURL=webpack:///./gameboard.js?");

/***/ }),

/***/ "./ship.js":
/*!*****************!*\
  !*** ./ship.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\n\nconst Ship = (name, length, x, y, health = length,sunk = false) => {\n    \n\n    const damage = x => { // if damage is taken then the health deacreases by 1\n      return health -= x;\n      };\n    \n    const isSunk = () => {if (health==0) // when health == 0, sunk becomes true (default = false)\n    {return sunk = true}\nelse{ return sunk}}\n  \n    return {name, length, health, x, y, damage, isSunk};\n  };\n  \n  \n  \n\n\n\n\n\n// module.exports = Ship  for tests\n\n\n\n//# sourceURL=webpack:///./ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard.js */ \"./gameboard.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function() { // making sure the doam is loaded first, after that we can locate elements by ID easily\n\n\n\n    document.querySelector('#restart').addEventListener('click', restart)\n\n\nfor (let k=0; k<10; k++){ // for every grid cell, the loop creates a click event listenner that triggers the attack function\n\n        document.querySelector(`.d0${[k]}`).addEventListener('click', Attack)\n\n\n   \n}\n\nfor (let i=10; i<100; i++){ // for every grid cell, the loop creates a click event listenner that triggers the attack function\n\n    document.querySelector(`.d${[i]}`).addEventListener('click', Attack)\n\n\n\n}\n\n\n\nGame() // load by default this function that creates the gameboard\n\n\n\n\n})\nlet boat;\nlet boat2;\nlet submarine;\nlet submarine2;\nlet cruiser;\nlet cruiser2;\n\nfunction Game(){\n\n\n\n    // place the ships first randomly for the player\n\n   var random1 = Math.floor(Math.random() * (6 - 0 + 1) + 0) // I've put limitations here because the length of the boat if 4 for instance so I put a random between 0 and 6, that way it fits\n   var random2 = Math.floor(Math.random() * (3 - 0 + 1) + 0)\n   var random3 = Math.floor(Math.random() * (7 - 0 + 1) + 0) // submarine section\n   var random4 = Math.floor(Math.random() * (6 - 4 + 1) + 4)\n   var random5 = Math.floor(Math.random() * (8 - 0 + 1) + 0) // cruiser section\n   var random6 = Math.floor(Math.random() * (9 - 7 + 1) + 7)\n\n\n   // create the ships by calling the factory function Ship\n boat = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)('boat', 4, random2, random1)\n submarine = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)('submarine', 3, random4, random3)\n\ncruiser = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)('cruiser', 2, random6, random5)\n\nvar first = document.querySelector(`.c${random2}${random1}`)\nvar first1 = document.querySelector(`.c${random2}${random1+1}`)\nvar first2 = document.querySelector(`.c${random2}${random1+2}`)\nvar first3 = document.querySelector(`.c${random2}${random1+3}`)\n\nvar second = document.querySelector(`.c${random4}${random3}`)\nvar second1 = document.querySelector(`.c${random4}${random3+1}`)\nvar second2 = document.querySelector(`.c${random4}${random3+2}`)\n\nvar third = document.querySelector(`.c${random6}${random5}`)\nvar third1 = document.querySelector(`.c${random6}${random5+1}`)\n\nfirst.innerHTML = \"B\" // I've put this in other to allow to know if there is a hit, indeed, in the innerHTML of the location of the hit is eqal to \"B\" then we will know the boat has been touched\nfirst.style.backgroundColor = 'rgb(64,64,64)';\nfirst.style.borderRight = 'rgb(64,64,64)';\nfirst.style.borderLeft = 'rgb(64,64,64)';\n\n\n\nfirst1.innerHTML = \"B\"\nfirst1.style.backgroundColor = 'rgb(64,64,64)';\nfirst1.style.borderRight = 'rgb(64,64,64)';\nfirst1.style.borderLeft = 'rgb(64,64,64)';\n\n\n\n\n\nfirst2.innerHTML = \"B\"\nfirst2.style.backgroundColor = 'rgb(64,64,64)';\n\nfirst2.style.borderRight = 'rgb(64,64,64)';\nfirst2.style.borderLeft = 'rgb(64,64,64)';\n\n\nfirst3.innerHTML = \"B\"\nfirst3.style.backgroundColor = 'rgb(64,64,64)';\nfirst3.style.borderRight = 'rgb(64,64,64)';\nfirst3.style.borderLeft = 'rgb(64,64,64)';\n\n\nsecond.innerHTML = \"S\"\nsecond.style.backgroundColor = 'rgb(64,64,64)';\nsecond.style.borderRight = 'rgb(64,64,64)';\nsecond.style.borderLeft = 'rgb(64,64,64)';\n\nsecond1.innerHTML = \"S\"\nsecond1.style.backgroundColor = 'rgb(64,64,64)';\nsecond1.style.borderRight = 'rgb(64,64,64)';\nsecond1.style.borderLeft = 'rgb(64,64,64)';\n\nsecond2.innerHTML = \"S\"\nsecond2.style.backgroundColor = 'rgb(64,64,64)';\nsecond2.style.borderRight = 'rgb(64,64,64)';\nsecond2.style.borderLeft = 'rgb(64,64,64)';\n\n\nthird.innerHTML = \"C\"\nthird.style.backgroundColor = 'rgb(64,64,64)';\nthird.style.borderRight = 'rgb(64,64,64)';\nthird.style.borderLeft = 'rgb(64,64,64)';\n\nthird1.innerHTML = \"C\"\nthird1.style.backgroundColor = 'rgb(64,64,64)';\nthird1.style.borderRight = 'rgb(64,64,64)';\nthird1.style.borderLeft = 'rgb(64,64,64)';\n\n\n\n\n\n// computer random placement\n\nvar random7 = Math.floor(Math.random() * (6 - 0 + 1) + 0)\nvar random8 = Math.floor(Math.random() * (3 - 0 + 1) + 0)\nvar random9 = Math.floor(Math.random() * (7 - 0 + 1) + 0)\nvar random10 = Math.floor(Math.random() * (6 - 4 + 1) + 4)\nvar random11 = Math.floor(Math.random() * (8 - 0 + 1) + 0)\nvar random12 = Math.floor(Math.random() * (9 - 7 + 1) + 7)\n\nboat2 = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)('boat', 4, random8, random7)\n submarine2 = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)('submarine', 3, random10, random9)\n\n cruiser2 = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)('cruiser', 2, random12, random11)\nvar first2 = document.querySelector(`.d${random8}${random7}`)\nvar first21 = document.querySelector(`.d${random8}${random7+1}`)\nvar first22 = document.querySelector(`.d${random8}${random7+2}`)\nvar first23 = document.querySelector(`.d${random8}${random7+3}`)\n\nvar second2 = document.querySelector(`.d${random10}${random9}`)\nvar second21 = document.querySelector(`.d${random10}${random9+1}`)\nvar second22 = document.querySelector(`.d${random10}${random9+2}`)\n\nvar third2 = document.querySelector(`.d${random12}${random11}`)\nvar third21 = document.querySelector(`.d${random12}${random11+1}`)\n\nfirst2.innerHTML = \"B.\" // different innerHTML from the player, so that the points scored are correctly scored for the right player\nfirst21.innerHTML = \"B.\"\nfirst22.innerHTML = \"B.\"\nfirst23.innerHTML = \"B.\"\n\nsecond2.innerHTML = \"S.\"\nsecond21.innerHTML = \"S.\"\nsecond22.innerHTML = \"S.\"\n\nthird2.innerHTML = \"C.\"\nthird21.innerHTML = \"C.\"\n\n}\n\n\nvar played = [] // this array will store all the already played shots, that way they won't be plays that have been already played\n\nfunction Rdm2(shot){ // this function is triggered if the attack function hits, then it triggers that the computer semi IA knows where to play again, not totally randomly. So I suggest to read first the attack function to understand \n\n  let secondshot = shot.classList.value\n  let onesec = parseInt(secondshot.substring(1,2))\n  let twosec = parseInt(secondshot.substring(2,3))\n  let shot2 = document.querySelector(`.c${onesec}${twosec+1}`) // be default the next hit goes to the right next cell\n\n\nif (document.querySelector(`.c${onesec}${twosec+1}`) == null) // if the next cell doesn't exist (border of the grid) then go to the left direction for the hit\n\n{\n    \n    shot2 = document.querySelector(`.c${onesec}${twosec-1}`)\n}\n\nelse if (document.querySelector(`.c${onesec}${twosec+1}`).innerHTML =='.') // if the next cell has already been targeted, go to the left for the next hit\n\n{shot2 = document.querySelector(`.c${onesec}${twosec-1}`)\n\n}\nelse if (document.querySelector(`.c${onesec}${twosec+1}`).outerHTML == `<img src=\"../fire.png\">`) // if the next cell has already been hit, go to the left\n\n{shot2 = document.querySelector(`.c${onesec}${twosec-1}`)\n\n}\nelse if (document.querySelector(`.c${onesec}${twosec+1}`).innerHTML =='')  // but if the next cell is unknown he goes to the right, we could delete this but that way the IA would be too smart because it would know that there is nothing there so it would go other way\n\n{\n\n shot2 = document.querySelector(`.c${onesec}${twosec+1}`)\n\n}\n\nplayed.push(shot2.classList.value) // we push to the array the coordinates the computer plays, that way he won't play there again\n\n  shot = shot2 // that way when we will call the Rdm2 function again with the shot argument, the reference will be this new cell, that way it goes +1 each time to the right for instance\n\n  \n if (shot2.innerHTML == 'B') // if the computer strikes here we know it's a HIT\n  { \n   \n    setTimeout(() => { // timeout to be a little prettier\n        shot2.outerHTML = `<img src=\"../fire.png\">` // if HIT, then the cell transform to img fire.png\n\n    boat.ship.damage(1); // one damage to the boat ship because the innerHTML is 'B'\n    Rdm2(shot) // since it's a hit, the function triggers again, because when you hit you play again, but this time the shot argument is equal to shot2 variable, see above \"shot = shot2\"\n\n\n      }, 500);\n  }\nelse if (shot2.innerHTML == 'S')\n      {\n       setTimeout(() => {\n        shot2.outerHTML = `<img src=\"../fire.png\">`\n\n       submarine.ship.damage(1);\n       Rdm2(shot)\n\n\n          }, 500);\n\n\n      }\nelse if (shot2.innerHTML == 'C')\n   {\n       setTimeout(() => {\n        shot2.outerHTML = `<img src=\"../fire.png\">`\n\n       cruiser.ship.damage(1);\n       Rdm2(shot)\n\n\n          }, 500);\n\n   }\n\nelse if (shot2.innerHTML == `<img src=\"../fire.png\">`)\n   {       setTimeout(() => {\n\n    shot2.outerHTML = `<img src=\"../fire.png\">` // if it has already been shot, do nothing\n     \n        }, 500);\n\n\n   }\n\nelse if (shot2.innerHTML == '.')\n   {\n    setTimeout(() => {\n\n        shot2.innerHTML = '.' // if it has already been targetted, do nothing\n     \n  \n     }, 500);\n    \n\n   }\n\nelse if (shot2.innerHTML == '')\n   {\n    setTimeout(() => {\n\n        shot2.innerHTML = '.' // if it is empty, signal the miss\n     \n  \n     }, 500);\n\n   }\n\n   \n   if (boat2.ship.damage(0) == 0 && submarine2.ship.damage(0) == 0 && cruiser2.ship.damage(0) == 0 ) // cheking if there is a winner\n   {\n   \n       setTimeout(() => {\n   alert(\"you won\")      }, 500);\n   }\n   else if (boat.ship.damage(0) == 0 && submarine.ship.damage(0) == 0 && cruiser.ship.damage(0) == 0)\n   \n   {\n   \n   setTimeout(() => {\n       alert(\"you lost\")  }, 500);\n   }\n   \n \n    \n\n}\n\nfunction Attack(e){ // the primary attack function\n\n\n    var clickval = e.target.innerHTML // we retrieve the innerHTML of the click\n    var clickval2 = e.target.classList.value // we retrieve the class value of the click\n\n\nvar x = parseInt(clickval2.substring(1,2)) // thanks to the class value we can extract coordinnates, minus the letter, thats why there is a substring, because the grid is made from class 00 to 99, so 99 is x : 9 and y : 9 , 10th cell and 10th row (starting from 0)\nvar y = parseInt(clickval2.substring(2,3))\n\n\nif (clickval === 'B.')  // If the player clicks here we know it's a HIT\n{\n   // boat2.ship.health = boat2.ship.health-1\n   this.innerHTML=\"X\"\n   this.outerHTML = `<img src=\"../fire.png\">`;\n\n   boat2.ship.damage(1);\n   Attack(e) // and then we trigger the function again since we have a hit\n\n  \n}\n\n\n\nelse if (clickval == 'S.')\n{\n    this.innerHTML=\"X\"\n    this.outerHTML = `<img src=\"../fire.png\">`;\n    submarine2.ship.damage(1);\n\n\n    Attack(e)\n\n\n\n}\nelse if (clickval == 'C.')\n{\n    this.innerHTML=\"X\"\n    this.outerHTML = `<img src=\"../fire.png\">`;\n    cruiser2.ship.damage(1);\n\n    \n    Attack(e)\n\n\n\n}\nelse if (clickval == '-') // different innerHTML from the player (which is empty), that way we can't click on on own board and score points\n{\n    this.innerHTML = \".\" // missed obviously\n    this.style.color = 'rgb(64,64,64)';\n   \n    var random13 = Math.floor(Math.random() * 10) // so it's the computer turn because we missed, so computer plays with random play\n    var random14 = Math.floor(Math.random() * 10)\n\n    var cell = 'c'+random13+random14\n\nwhile (played.includes(cell) == true) // while we have already \"randomed\" those coordinates, we roll again until we never played that spot\n{\n\n    random13 = Math.floor(Math.random() * 10)\n    random14 = Math.floor(Math.random() * 10)\n\n     cell = 'c'+random13+random14\n\n}\n\n\n    \n    var shot = document.querySelector(`.c${random13}${random14}`)\n\n    played.push(shot.classList.value) // push to the array the coordinates the computer play so that he won't play them again\n\n\n    if (shot.innerHTML == 'B')\n   { \n    \n    setTimeout(() => {\n        shot.outerHTML = `<img src=\"../fire.png\">`\n    boat.ship.damage(1);\n    Rdm2(shot) // hit so the computer plays again by calling the Rdm2 function\n       }, 500); \n   }\n    else if (shot.innerHTML == 'S')\n       {\n        setTimeout(() => {\n            shot.outerHTML = `<img src=\"../fire.png\">`\n        submarine.ship.damage(1);\n        Rdm2(shot)\n\n           }, 500);\n\n\n       }\n    else if (shot.innerHTML == 'C')\n    {\n        setTimeout(() => {\n            shot.outerHTML = `<img src=\"../fire.png\">`\n        cruiser.ship.damage(1);\n        Rdm2(shot)\n\n           }, 500);\n\n    }\n\n\n    else if (shot.innerHTML == '') // if the computer misses, we score the miss\n{\n        setTimeout(() => {\n            shot.innerHTML = '.'\n       \n           }, 500);    }\n \n\n}\n\n\nif (boat2.ship.damage(0) == 0 && submarine2.ship.damage(0) == 0 && cruiser2.ship.damage(0) == 0 ) // cheking if there is a winner\n{\n\n    setTimeout(() => {\nalert(\"you won\")      }, 500);\n}\nelse if (boat.ship.damage(0) == 0 && submarine.ship.damage(0) == 0 && cruiser.ship.damage(0) == 0)\n\n{\n\nsetTimeout(() => {\n    alert(\"you lost\")  }, 500);\n}\n}\n\n\n\nfunction restart(){\n\n    window.location.reload() // reloads the page to play again with new board\n\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
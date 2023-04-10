/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createContactPage = function() {
  const divContent = document.getElementById('content');
  const divContact = document.createElement('div');
  const divContactInformation = document.createElement('div');

  const infoOwner = document.createElement('h2');
  infoOwner.innerHTML = 'Deezy';
  
  const infoAddress = document.createElement('span');
  infoAddress.innerHTML = '555 Lorem Epsum Rd, Lorem Epsum, CA 55555';

  const infoPhoneNumber = document.createElement('span');
  infoPhoneNumber.innerHTML = '555 555 5555';

  divContactInformation.append(infoOwner, infoAddress, infoPhoneNumber);

  divContact.appendChild(divContactInformation);

  divContent.innerHTML = '';
  divContent.append(divContact);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHomePage = function() {
  const divContent = document.getElementById('content');

  const divIntro = document.createElement('div');

  const imgChocobo = document.createElement('img');
  imgChocobo.id = 'img-chocobo';
  imgChocobo.src = '../src/chocobo.jpg';

  const divIntroStatement = document.createElement('div');
  divIntroStatement.innerHTML = 'Best wings in the business. Served with wingstop ranch!';

  divIntro.append(imgChocobo, divIntroStatement);

  divContent.innerHTML = '';
  divContent.append(divIntro);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const objMenu = {
  siricha: {
    type: 'Siricha',
    img: '../src/pexels-siricha.jpg'
  },
  honey: {
    type: 'Honey Glazed',
    img: '../src/pexels-honey-glazed.jpg'
  },
  hot: {
    type: 'Hot',
    img: '../src/pexels-hot.jpg'
  },
  cajun: {
    type: 'Cajun',
    img: '../src/pexels-cajun.jpg'
  }
}

const createMenuPage = function() {
  const divContent = document.getElementById('content');
  const divMenu = document.createElement('div');
  divMenu.classList.add('menu');

  const h2 = document.createElement('h2');
  h2.innerHTML = 'Menu';

  const ulMenu = document.createElement('ul');

  for (let wingFlavor in objMenu) {
    const chickenWing = objMenu[wingFlavor];

    const listMenuItem = document.createElement('div');
    
    const chickenWingName = document.createElement('h3');
    chickenWingName.innerHTML = chickenWing.type;

    const chickenWingImage = document.createElement('img');
    chickenWingImage.id = `img-${chickenWing.type.toLowerCase()}`;
    chickenWingImage.src = chickenWing.img;

    listMenuItem.append(chickenWingName, chickenWingImage);
    ulMenu.appendChild(listMenuItem);
  }
  divMenu.append(h2, ulMenu);

  divContent.innerHTML = '';
  divContent.append(divMenu);
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const header = function() {
  const headerlinks = ['Home', 'Menu', 'Contact'];

  const headerContent = document.createElement('header');

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Deezy\'s Wings';

  const headerNav = document.createElement('nav');
  const ulHeader = document.createElement('ul');

  for (let i = 0; i < headerlinks.length; i++) {
    const listHeaderItem = document.createElement('li');
    
    const listHeaderButton = document.createElement('button');
    listHeaderButton.innerHTML = headerlinks[i];
  
    listHeaderButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.currentTarget.innerHTML === 'Home') {
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
      } else if (e.currentTarget.innerHTML === 'Menu') {
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])()
      } else if (e.currentTarget.innerHTML === 'Contact') {
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
      }
    });

    listHeaderItem.appendChild(listHeaderButton);
    ulHeader.appendChild(listHeaderItem);
  }
  headerNav.appendChild(ulHeader);
  headerContent.append(h1, headerNav);
  document.querySelector('body').prepend(headerContent);
}

header();
(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQ3RCaEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUNsQjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsK0JBQStCO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsY0FBYzs7Ozs7O1VDbkQ3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDQTtBQUNNOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFjO0FBQ3RCLFFBQVE7QUFDUixRQUFRLGlEQUFjO0FBQ3RCLFFBQVE7QUFDUixRQUFRLG9EQUFpQjtBQUN6QjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3RvcHJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b3ByZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vdG9wcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3ByZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3ByZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcHJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQ29udGFjdFBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGRpdkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGl2Q29udGFjdEluZm9ybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgaW5mb093bmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaW5mb093bmVyLmlubmVySFRNTCA9ICdEZWV6eSc7XG4gIFxuICBjb25zdCBpbmZvQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW5mb0FkZHJlc3MuaW5uZXJIVE1MID0gJzU1NSBMb3JlbSBFcHN1bSBSZCwgTG9yZW0gRXBzdW0sIENBIDU1NTU1JztcblxuICBjb25zdCBpbmZvUGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGluZm9QaG9uZU51bWJlci5pbm5lckhUTUwgPSAnNTU1IDU1NSA1NTU1JztcblxuICBkaXZDb250YWN0SW5mb3JtYXRpb24uYXBwZW5kKGluZm9Pd25lciwgaW5mb0FkZHJlc3MsIGluZm9QaG9uZU51bWJlcik7XG5cbiAgZGl2Q29udGFjdC5hcHBlbmRDaGlsZChkaXZDb250YWN0SW5mb3JtYXRpb24pO1xuXG4gIGRpdkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIGRpdkNvbnRlbnQuYXBwZW5kKGRpdkNvbnRhY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0UGFnZTsiLCJjb25zdCBjcmVhdGVIb21lUGFnZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBkaXZJbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IGltZ0Nob2NvYm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nQ2hvY29iby5pZCA9ICdpbWctY2hvY29ibyc7XG4gIGltZ0Nob2NvYm8uc3JjID0gJy4uL3NyYy9jaG9jb2JvLmpwZyc7XG5cbiAgY29uc3QgZGl2SW50cm9TdGF0ZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2SW50cm9TdGF0ZW1lbnQuaW5uZXJIVE1MID0gJ0Jlc3Qgd2luZ3MgaW4gdGhlIGJ1c2luZXNzLiBTZXJ2ZWQgd2l0aCB3aW5nc3RvcCByYW5jaCEnO1xuXG4gIGRpdkludHJvLmFwcGVuZChpbWdDaG9jb2JvLCBkaXZJbnRyb1N0YXRlbWVudCk7XG5cbiAgZGl2Q29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgZGl2Q29udGVudC5hcHBlbmQoZGl2SW50cm8pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZVBhZ2U7IiwiY29uc3Qgb2JqTWVudSA9IHtcbiAgc2lyaWNoYToge1xuICAgIHR5cGU6ICdTaXJpY2hhJyxcbiAgICBpbWc6ICcuLi9zcmMvcGV4ZWxzLXNpcmljaGEuanBnJ1xuICB9LFxuICBob25leToge1xuICAgIHR5cGU6ICdIb25leSBHbGF6ZWQnLFxuICAgIGltZzogJy4uL3NyYy9wZXhlbHMtaG9uZXktZ2xhemVkLmpwZydcbiAgfSxcbiAgaG90OiB7XG4gICAgdHlwZTogJ0hvdCcsXG4gICAgaW1nOiAnLi4vc3JjL3BleGVscy1ob3QuanBnJ1xuICB9LFxuICBjYWp1bjoge1xuICAgIHR5cGU6ICdDYWp1bicsXG4gICAgaW1nOiAnLi4vc3JjL3BleGVscy1jYWp1bi5qcGcnXG4gIH1cbn1cblxuY29uc3QgY3JlYXRlTWVudVBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGRpdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi5pbm5lckhUTUwgPSAnTWVudSc7XG5cbiAgY29uc3QgdWxNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICBmb3IgKGxldCB3aW5nRmxhdm9yIGluIG9iak1lbnUpIHtcbiAgICBjb25zdCBjaGlja2VuV2luZyA9IG9iak1lbnVbd2luZ0ZsYXZvcl07XG5cbiAgICBjb25zdCBsaXN0TWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBjb25zdCBjaGlja2VuV2luZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNoaWNrZW5XaW5nTmFtZS5pbm5lckhUTUwgPSBjaGlja2VuV2luZy50eXBlO1xuXG4gICAgY29uc3QgY2hpY2tlbldpbmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoaWNrZW5XaW5nSW1hZ2UuaWQgPSBgaW1nLSR7Y2hpY2tlbldpbmcudHlwZS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgY2hpY2tlbldpbmdJbWFnZS5zcmMgPSBjaGlja2VuV2luZy5pbWc7XG5cbiAgICBsaXN0TWVudUl0ZW0uYXBwZW5kKGNoaWNrZW5XaW5nTmFtZSwgY2hpY2tlbldpbmdJbWFnZSk7XG4gICAgdWxNZW51LmFwcGVuZENoaWxkKGxpc3RNZW51SXRlbSk7XG4gIH1cbiAgZGl2TWVudS5hcHBlbmQoaDIsIHVsTWVudSk7XG5cbiAgZGl2Q29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgZGl2Q29udGVudC5hcHBlbmQoZGl2TWVudSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNyZWF0ZU1lbnVQYWdlIGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjcmVhdGVDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGhlYWRlciA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBoZWFkZXJsaW5rcyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcblxuICBjb25zdCBoZWFkZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS5pbm5lckhUTUwgPSAnRGVlenlcXCdzIFdpbmdzJztcblxuICBjb25zdCBoZWFkZXJOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgY29uc3QgdWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaGVhZGVybGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsaXN0SGVhZGVySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgXG4gICAgY29uc3QgbGlzdEhlYWRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxpc3RIZWFkZXJCdXR0b24uaW5uZXJIVE1MID0gaGVhZGVybGlua3NbaV07XG4gIFxuICAgIGxpc3RIZWFkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5pbm5lckhUTUwgPT09ICdIb21lJykge1xuICAgICAgICBjcmVhdGVIb21lUGFnZSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmN1cnJlbnRUYXJnZXQuaW5uZXJIVE1MID09PSAnTWVudScpIHtcbiAgICAgICAgY3JlYXRlTWVudVBhZ2UoKVxuICAgICAgfSBlbHNlIGlmIChlLmN1cnJlbnRUYXJnZXQuaW5uZXJIVE1MID09PSAnQ29udGFjdCcpIHtcbiAgICAgICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxpc3RIZWFkZXJJdGVtLmFwcGVuZENoaWxkKGxpc3RIZWFkZXJCdXR0b24pO1xuICAgIHVsSGVhZGVyLmFwcGVuZENoaWxkKGxpc3RIZWFkZXJJdGVtKTtcbiAgfVxuICBoZWFkZXJOYXYuYXBwZW5kQ2hpbGQodWxIZWFkZXIpO1xuICBoZWFkZXJDb250ZW50LmFwcGVuZChoMSwgaGVhZGVyTmF2KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnByZXBlbmQoaGVhZGVyQ29udGVudCk7XG59XG5cbmhlYWRlcigpO1xuY3JlYXRlSG9tZVBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
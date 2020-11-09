/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/animation-info.js":
/*!**********************************!*\
  !*** ./src/js/animation-info.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 45:0-14 */
/***/ ((module) => {

function animInfo() {
    
    const startHeight = +window.getComputedStyle(document.querySelector('.start')).height.slice(0,-2);
    const blockText = document.querySelector('.about__block-text');
    const blockElements = document.querySelectorAll('.about__block-tools .about__block-element');

    window.addEventListener('scroll', () => {

        const scroll = document.documentElement.scrollTop;
        const scrollShowBlock = scroll + startHeight - 150;

        if (scrollShowBlock >= startHeight) {
            blockText.classList.add('active');

            let time = 150;

            blockElements.forEach((item, index) => {
                time += 150;
                item.classList.add('activeBlock');
                delayblock(time, index, 'add');
            });
        } 

        if (scroll > startHeight * 4) {

            blockText.classList.remove('active');

            let time = 150;

            blockElements.forEach((item, index) => {
                time += 150;
                item.classList.remove('activeBlock');
                delayblock(time, index, 'remove');
            });
        }
    });

    function delayblock(time, index, actions) {
        setTimeout(function() {
            eval(`blockElements[${index}].classList.${actions}('active');`);
        }, time);
    }
}

module.exports = animInfo;

// через скроллтоп сделать приятный скролл
//

// для мобилок отключить удаление анимации 
// поменять на мобилках анимацию элементов

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
window.addEventListener('DOMContentLoaded', () => {

    const animInfo = __webpack_require__(/*! ./animation-info */ "./src/js/animation-info.js");

    animInfo();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
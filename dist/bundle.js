/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/animation-info.js":
/*!**********************************!*\
  !*** ./src/js/animation-info.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 102:0-14 */
/***/ ((module) => {

function animInfo() {
    
    const startHeight = +window.getComputedStyle(document.querySelector('.start')).height.slice(0,-2);
    const blockText = document.querySelector('.about__block-text');
    const blockElements = document.querySelectorAll('.about__block-tools .about__block-element');
    const screenPerson = document.documentElement.clientWidth;
    let counter = 0, postion;

    if (screenPerson > 500) {
        postion = startHeight * 0.8;
    } else {
        postion = startHeight;
    }

     window.addEventListener('scroll', () => {

        if (screenPerson > 640) {
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
        } else {
            const scroll = document.documentElement.scrollTop;

            if (scroll >= startHeight / 2) {

                blockText.classList.add('active');

                if (scroll >= (startHeight * 0.8)) {

                    if (counter == blockElements.length) {
                        return;
                    } else {
                        showElement(scroll, postion, counter);
                    }
                }
             } 
        }
    });

// Эта функция отображает блоки или удаляет их с задержкой 

    function delayblock(time, index, actions) {
        setTimeout(function() {
            eval(`blockElements[${index}].classList.${actions}('active');`);
        }, time);
    }

// Отображает блоки по очередно по каждому вызову
    function* delayBlockMobile() {

        let time = 150;

        for (let i = 0; i < blockElements.length; i++) {
            time += 150;
            blockElements[i].classList.add('activeBlock');
            delayblock(0, i, 'add');
            yield i;
        }
    }

    const generNextElem = delayBlockMobile();

    function nextElem() {
        generNextElem.next();
    }

    function showElement(scroll, pos, coun) {

        if (scroll > pos && counter == coun) {
            nextElem();
            counter++;
            postion += +window.getComputedStyle(document.querySelector('.about__block-element')).height.slice(0,-2);
        }
    }
}


module.exports = animInfo;



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

    window.addEventListener('load', () => {
        
        hideCss('body');
        hideCss('html');
        document.querySelector('body').style.background = 'none';
        document.querySelector('.loader').style.display = 'none';

        const animInfo = __webpack_require__(/*! ./animation-info */ "./src/js/animation-info.js");
        
        animInfo();
    });

    function hideCss(elem) {
        document.querySelector(elem).style.height = 'auto';
        document.querySelector(elem).style.width = 'auto';
        document.querySelector(elem).style.overflow = 'scroll';
    }

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
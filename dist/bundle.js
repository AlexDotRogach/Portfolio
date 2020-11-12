/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/anim-tools.js":
/*!******************************!*\
  !*** ./src/js/anim-tools.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 44:0-14 */
/***/ ((module) => {

function animTools() {

    const skillsBlock = document.querySelectorAll('.skills__block-skills .skills__block-element');
    const blockElemHeight = Math.round(skillsBlock[0].getBoundingClientRect().height);

    let counter = 0, arr = [];

    skillsBlock.forEach((item, index) => {
        let blockElemTop = skillsBlock[index].getBoundingClientRect().top;

        arr.push(blockElemTop);
    });

    arr = arr.map(item => item - +blockElemHeight);

    window.addEventListener('scroll', () => {
        const scroll = document.documentElement.scrollTop;

        arr.forEach((item, index) => {
            controlScroll(scroll, item, index);
        });
    });

    const generNextEl =  showBlock();
    
    function* showBlock() {

        for (let i = 0; i < skillsBlock.length; i++) {
            skillsBlock[i].style.opacity = 1;
            yield i;
        }
    }

    function controlScroll(scr, pos, count) {

        if (scr >= pos && count == counter) {

            generNextEl.next();
            counter++;
        }
    }
}

module.exports = animTools;

/***/ }),

/***/ "./src/js/animation-info.js":
/*!**********************************!*\
  !*** ./src/js/animation-info.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 103:0-14 */
/***/ ((module) => {

function animInfo() {
    
    const startHeight = +window.getComputedStyle(document.querySelector('.start')).height.slice(0,-2);
    const blockText = document.querySelector('.about__block-text');
    const blockElements = document.querySelectorAll('.about__block-tools .about__block-element');
    const screenPerson = document.documentElement.clientWidth;

    let counter = 0;

    if (screenPerson < 640) {
        blockElements.forEach(item => {
            item.classList.add('activeBlock');
            item.style.opacity = 0;
        });
    }

// переменные для мобильной версии анимаций
    const blockElemTop = Math.round(blockElements[0].getBoundingClientRect().top);
    const blockElemHeight = Math.round(blockElements[0].getBoundingClientRect().height);
    
    let scopeAction =  blockElemTop - blockElemHeight * 2;

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
             } 

             if (scroll >= scopeAction) {
                 
                if (counter < blockElements.length) {
                    controlScroll(scroll, scopeAction, counter);
                } else {
                    return;
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

//Генератор следующего элемента в блоке tools

    const generNextEl =  showBlock();
    
    function* showBlock() {

        for (let i = 0; i < blockElements.length; i++) {
            blockElements[i].style.opacity = 1;
            yield i;
        }
    }

// С помощью counter контролирую чтобы блоки не багались
    function controlScroll(scr, pos, count) {

        if (scr >= pos && count == counter) {
            generNextEl.next();
            counter++;
            scopeAction += blockElemHeight * 0.9;
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
    
    const body = document.querySelector('body'), html = document.querySelector('html');

    body.style.cssText = `
        background: none;
        height: auto;
        width: auto;
        overflow: scroll;
    `;

    html.style.cssText = `
        height: 2500px;
        width: auto;
        overflow: inherit;
    `;

    document.querySelector('.loader').style.display = 'none';

    const animInfo = __webpack_require__(/*! ./animation-info */ "./src/js/animation-info.js");
    const animTools = __webpack_require__(/*! ./anim-tools */ "./src/js/anim-tools.js");
    
    animInfo();
    animTools();
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
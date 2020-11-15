/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/anim-tools.js":
/*!******************************!*\
  !*** ./src/js/anim-tools.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

function animTools() {

    const skillsBlock = document.querySelectorAll('.skills__block-skills .skills__block-element');
    const blockElemHeight = Math.round(skillsBlock[0].getBoundingClientRect().height);

    let counter = 0, arr = [];

    skillsBlock.forEach(item => {
        let blockElemTop = item.getBoundingClientRect().top;

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
/***/ ((module) => {

function animInfo() {
    
    const aboutMeElements = document.querySelector('.about__block-info').childNodes;
    const text = aboutMeElements[0];
    const tools = aboutMeElements[1];
    const screenPerson = document.documentElement.clientWidth;

// расстояние для срабатывания анимации
    const distanceText = text.getBoundingClientRect().top - text.getBoundingClientRect().height;
    let arrDistanceTools = [];

// счетчик для регулирование срабатывания по элементам
    let counter = 0;

    tools.childNodes.forEach(item => {
       arrDistanceTools.push(item.getBoundingClientRect().top - item.getBoundingClientRect().height);
    });

    document.addEventListener('scroll', () => {

        const scroll = document.documentElement.scrollTop;

        if (scroll >= distanceText) {
            text.classList.add('active');
        }
        
        if (screenPerson < 640) {
        
            arrDistanceTools.forEach((item, index) => {
                controlScroll(scroll, item, index);
            });
        } else {
            tools.childNodes.forEach((item, index) => {
                controlScroll(scroll, distanceText, index);
            });
        }
    });

    const generNextEl =  showBlock();
    

    function* showBlock() {

        for (let i = 0; i < tools.childNodes.length; i++) {
            tools.childNodes[i].classList.add('active');
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


module.exports = animInfo;



/***/ }),

/***/ "./src/js/portfoliCheck.js":
/*!*********************************!*\
  !*** ./src/js/portfoliCheck.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 52:0-14 */
/***/ ((module) => {

function portfoliCheck() {
    const items = document.querySelectorAll('.portfolio__items .portfolio__item');
    const startValues = [];
    let oneAction = 0;

    items.forEach(item => {
        startValues.push(item.innerHTML);
    });

    items.forEach((item, index) => {

        item.addEventListener('click', () => {
           
            items.forEach(elem => {

                if (elem.innerHTML != startValues[index]) {
                    elem.innerHTML = startValues[index];
                }
            });

           if (item.innerHTML == startValues[index] && oneAction == 0) {

            let link = item.querySelector('a').getAttribute('href'),
                name = item.querySelector('a').getAttribute('name');

                item.innerHTML = '';
            
                item.innerHTML = `
                    <div class="question">
                        <p>Подтвердите переход на ${name}:</p>
                        <button><a href="${link}">Уверен</a></button>
                        <button>Сомневаюсь</button>
                    </div>
                `;

                item.querySelectorAll('.question button').forEach(btn => {
                    btn.addEventListener('click', () => {

                        if (btn.textContent == 'Сомневаюсь') {
                            item.innerHTML = startValues[index];
                            oneAction++;
                        } 
                    });
                });
            }

            oneAction = 0;
        });
    });
}

module.exports = portfoliCheck;

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
        height: auto;
        width: auto;
        overflow: inherit;
    `;

    document.querySelector('.loader').style.display = 'none';

    const animInfo = __webpack_require__(/*! ./animation-info */ "./src/js/animation-info.js");
    const animTools = __webpack_require__(/*! ./anim-tools */ "./src/js/anim-tools.js");
    const portfolioCheck = __webpack_require__(/*! ./portfoliCheck */ "./src/js/portfoliCheck.js");
    
    animInfo();
    animTools();
    portfolioCheck();
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
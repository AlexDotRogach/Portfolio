/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (function() {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./src/js/anim-tools.js":
/*!******************************!*\
  !*** ./src/js/anim-tools.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ (function(module) {

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
/***/ (function(module) {

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
/***/ (function(module) {

function portfoliCheck() {
    const items = document.querySelectorAll('.portfolio__items .portfolio__item');
    const startValues = [];
    let oneAction = 0;

    items.forEach(item => {
        startValues.push(item.innerHTML);
    });

    items.forEach((item, index) => {

        item.addEventListener('click', () => {
        //Убираю активные элементы после нажатия на элемент 
           items.forEach((activeElem, elemIndex) => {
    
                if (activeElem.firstElementChild.classList.contains('question')) {
                    activeElem.innerHTML = startValues[elemIndex];
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

/***/ }),

/***/ "./src/js/price.js":
/*!*************************!*\
  !*** ./src/js/price.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ (function(module) {

function price() {

    animPrice('firstBlock');
    animPrice('secondBlock');

    function animPrice(selector) {
        const elementsPrice = document.querySelectorAll(`.price__${selector}-item`);
        const elementChanging = document.querySelectorAll(`.price__${selector}-item .price__item-decoration`);
        const arrActuation = [];
        let counter = 0;

        elementsPrice.forEach(elem => {

            let newValue = Math.floor(elem.getBoundingClientRect().top - document.documentElement.clientHeight * 0.7);
                arrActuation.push(newValue);
        });

        document.addEventListener('scroll', () => {
            
            const scroll = document.documentElement.scrollTop;


                checkScroll(scroll, arrActuation[counter], elementChanging[counter], counter);
        });
    

        function checkScroll(scroll, actuation, elem, number) {

            if (scroll >= actuation && number == counter) {
                
                elem.style.display = 'none';
                elem.parentNode.style.border = '1px solid black';
                elem.parentNode.style.padding= '15px';
                elem.parentNode.style.borderRadius= '10px';
                counter++;
            } 
            
            if (counter == elementChanging.length) {
                counter = 0;
            }

            if (scroll <= actuation){
                elem.style.display = 'block';
                elem.parentNode.style.border = 'none';
                elem.parentNode.style.padding= '0';
                elem.parentNode.style.borderRadius= '0';
                counter--;

                if (counter < 0) {
                    counter = 0;
                }
            }
        }
    }
}


module.exports = price;

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
!function() {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
__webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");

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
    const price = __webpack_require__(/*! ./price */ "./src/js/price.js");
    
    animInfo();
    animTools();
    portfolioCheck();
    price();
});


}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map
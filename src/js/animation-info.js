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


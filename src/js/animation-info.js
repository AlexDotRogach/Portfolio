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


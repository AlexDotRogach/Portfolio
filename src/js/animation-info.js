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
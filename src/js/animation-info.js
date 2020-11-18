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

export default animInfo;


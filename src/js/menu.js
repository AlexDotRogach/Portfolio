function menu() {
//Анимация по якорям
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        animationTime = 300,
        framesCount = 20;

    anchors.forEach(function(item) {    

        item.addEventListener('click', function(e) {

        e.preventDefault();

        let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

            let scroller = setInterval(function() {

                let scrollBy = coordY / framesCount;

                if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {

                window.scrollBy(0, scrollBy);

                } else {

                window.scrollTo(0, coordY);
                clearInterval(scroller);
                }
            }, animationTime / framesCount);
        });
    });

    const menu = document.querySelector('.menu');
    const elements = document.querySelectorAll('.menu__wrapper .menu__element');
    const btnMenu = document.querySelector('.menu-navigation');
    const btnClose = document.querySelector('.gg-close-o');
    const body = document.querySelector('body');
    const wrapNear = document.querySelector('.wrapper__active-menu');
    let counter = 0;

    btnMenu.addEventListener('click', () => {

        btnClose.style.display = 'none';
        body.style.position = 'fixed';
        menu.style.display = 'block';
        wrapNear.style.display = 'block';

        setTimeout(function() {
            wrapNear.classList.add('activeWrap');
        }, 500);

        const intervalShowElement = setInterval(function() {

            if (counter >= elements.length) {
                clearInterval(intervalShowElement);
                counter = 0;
                generElem = nextElem();
            }

            generElem.next();
        }, 100);

        const btnMenuItems = document.querySelectorAll('.menu a');

        btnMenuItems.forEach(item => {
            
            item.addEventListener('click', () => {
                console.log(item);
                closeMenu();
            });
        });
 
        intervalShowElement();
    
    });

    btnClose.addEventListener('click', () => {
        closeMenu();
    });

    let generElem = nextElem();
    
    function* nextElem() {

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.height = '10vh';
            elements[i].style.marginTop = '15px';
            counter++;
            
            if (i == elements.length - 1) {

                setTimeout(function() {
                    elements.forEach(item => {
                        item.style.margin = 0;
                        btnClose.style.display = 'flex';
                    });
                }, 500);
            }
            
            yield i;
        }
    }

    function closeMenu() {
        menu.style.display = 'none';
        body.style.position = 'inherit';
        wrapNear.classList.remove('activeWrap');
        wrapNear.style.display = 'none';

        elements.forEach(item => {
            item.style.height = 0;
        });
    }
}

export default menu;
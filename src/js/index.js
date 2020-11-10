
    window.addEventListener('load', () => {
        
        hideCss('body');
        hideCss('html');
        document.querySelector('body').style.background = 'none';
        document.querySelector('.loader').style.display = 'none';

        const animInfo = require('./animation-info');
        
        animInfo();
    });

    function hideCss(elem) {
        document.querySelector(elem).style.height = 'auto';
        document.querySelector(elem).style.width = 'auto';
        document.querySelector(elem).style.overflow = 'scroll';
    }

window.addEventListener('load', () => {
    
    const body = document.querySelector('body'), html = document.querySelector('html');

    body.style.cssText = `
        background: none;
        height: auto;
        width: auto;
    `;

    html.style.cssText = `
        height: auto;
        width: auto;
        overflow-y: scroll;
        overflow-x: auto;
    `;

    document.querySelector('.loader').style.display = 'none';
    
    const menu = require('./menu').default;
    const animInfo = require('./animation-info').default;
    const animTools = require('./anim-tools').default;
    const portfolioCheck = require('./portfoliCheck').default;
    const price = require('./price').default;

    menu();
    animInfo();
    animTools();
    portfolioCheck();
    price();
});


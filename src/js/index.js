
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

    const animInfo = require('./animation-info');
    const animTools = require('./anim-tools');
    
    animInfo();
    animTools();
});


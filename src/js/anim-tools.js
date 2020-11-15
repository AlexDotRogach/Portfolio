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
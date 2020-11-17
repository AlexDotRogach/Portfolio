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
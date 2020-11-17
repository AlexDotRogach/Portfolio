function price() {

    animPrice('firstBlock');
    animPrice('secondBlock');

    function animPrice(selector) {
        const elementsPrice = document.querySelectorAll(`.price__${selector}-item`);
        const elementChanging = document.querySelectorAll(`.price__${selector}-item .price__item-decoration`);
        const arrActuation = [];
        let counter = 0;

        elementsPrice.forEach(elem => {

            let newValue = Math.floor(elem.getBoundingClientRect().top - document.documentElement.clientHeight * 0.7);
                arrActuation.push(newValue);
        });

        document.addEventListener('scroll', () => {
            
            const scroll = document.documentElement.scrollTop;


                checkScroll(scroll, arrActuation[counter], elementChanging[counter], counter);
        });
    

        function checkScroll(scroll, actuation, elem, number) {

            if (scroll >= actuation && number == counter) {
                
                elem.style.display = 'none';
                elem.parentNode.style.border = '1px solid black';
                elem.parentNode.style.padding= '15px';
                elem.parentNode.style.borderRadius= '10px';
                counter++;
            } 
            
            if (counter == elementChanging.length) {
                counter = 0;
            }

            if (scroll <= actuation){
                elem.style.display = 'block';
                elem.parentNode.style.border = 'none';
                elem.parentNode.style.padding= '0';
                elem.parentNode.style.borderRadius= '0';
                counter--;

                if (counter < 0) {
                    counter = 0;
                }
            }
        }
    }
}


module.exports = price;
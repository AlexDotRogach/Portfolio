function request() {

    const formSoc = document.querySelector('form');
    const startForm = formSoc.innerHTML;
    const statusImg = ['./icons/loading.svg','./icons/check.svg','./icons/cancel.svg'];

    formSoc.addEventListener('submit', (e) => {

        e.preventDefault();
        const newData = new FormData(formSoc);

        formSoc.innerHTML = '';

        createBlock(formSoc, 'Ожидайте идет отправка', statusImg[0], 'loading');

        fetch('smart.php', {
            method:'POST',
            body: newData
        }).then(data => {
            console.log('done')
            setTimeout(createBlock(formSoc, 'Данные отправлены', statusImg[1], 'loading'), 100);
            setTimeout(function() {
                formSoc.innerHTML = startForm;
                formSoc.style.display = 'grid';
                formSoc.style.flexFlow = 'none';
            }, 1000);

        }).catch(() => {
            setTimeout(createBlock(formSoc, 'Ошибка', statusImg[2], 'loading'), 100);
            setTimeout(function() {
                formSoc.innerHTML = startForm;
                formSoc.style.display = 'grid';
                formSoc.style.flexFlow = 'none';
            }, 1000);
        }).finally(() => {
            formSoc.reset();
        });
    });

    function createBlock(parent ,message, img, state) {
        
        formSoc.style.display = 'flex';
        formSoc.style.flexFlow = 'column nowrap';
        parent.innerHTML = `
            <div class="${state}">
                <span>${message}</span>
                <img src="${img}" alt="alt"></img>
            </div>
        `;
    }
}



export default request;
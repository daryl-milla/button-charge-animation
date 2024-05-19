const button = document.querySelector('.button');
const text = document.querySelector('.text');

    button.addEventListener('click', () => {
        button.classList.add('progress');
        text.innerText = 'Subiendo...';

        setTimeout(() => {
            button.classList.remove('progress');
            text.innerText = 'Completado';
            setTimeout(() => {
                text.innerText = 'Subir Archivo'
            }, 2000);

        }, 7000);
    });
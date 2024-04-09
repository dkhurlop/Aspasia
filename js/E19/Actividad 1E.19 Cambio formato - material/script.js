const botonNegro = document.getElementById('negro');
const botonGris = document.getElementById('gris');
const contentBg = document.querySelector('.content');

botonNegro.addEventListener('click', () => {
    contentBg.style.backgroundColor = 'black';
    contentBg.style.color = 'white';   
    contentBg.style.padding = '15px';
});

botonGris.addEventListener('click', () => {
    contentBg.style.backgroundColor = 'grey';
    contentBg.style.color = 'white';   
    contentBg.style.padding = '15px';
});

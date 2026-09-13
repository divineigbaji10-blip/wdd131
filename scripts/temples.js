const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    menu.textContent = menu.textContent === '☰' ? '✕': '☰';
})
document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified};`
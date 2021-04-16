let a = document.querySelector('.toggler');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const navbar = document.querySelector('.nav');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    navbar.style.display = 'block';
    navbar.style.top = '0';
    openMenu.style.opacity = '0'
}

function close() {
    openMenu.style.opacity = '1'
    navbar.style.top = '-100px'
    navbar.style.display = 'none';
}




// function bos() {
//     document.querySelector('.nav').style.display = 'block';
//     // document.querySelector('.nav').style.marginTop = '200px';
// }

// function orqaga() {
//     document.querySelector('.nav').style.display = 'none';
// }
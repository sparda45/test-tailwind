// nav fixed
window.onscroll = function(){

    const header = document.querySelector('header');
    const fixednav =header.offsetTop;

    if(window.pageYOffset > fixednav){
        header.classList.add('nav-fixed');
    } else{
        header.classList.remove('nav-fixed');
    }

}

// nav
const nav = document.querySelector('#nav');
const NavMenu = document.querySelector('#nav-menu');

nav.addEventListener('click', function(){
    nav.classList.toggle('nav-active');
    NavMenu.classList.toggle('hidden');

});
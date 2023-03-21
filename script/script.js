// nav fixed
window.onscroll = function(){

    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const totop = document.querySelector('#totop');

    if(window.pageYOffset > fixednav){
        header.classList.add('nav-fixed');
        totop.classList.remove('hidden');
        totop.classList.add('flex')
    } else{
        header.classList.remove('nav-fixed');
        totop.classList.add('hidden');
        totop.classList.remove('flex')
    }

}

// nav
const nav = document.querySelector('#nav')
const NavMenu = document.querySelector('#nav-menu');

nav.addEventListener('click', function(){
    nav.classList.toggle('nav-active');
    NavMenu.classList.toggle('hidden');

});

// nav ilang

window.addEventListener('click', function(e){
    if (e.target != nav && e.target != NavMenu ) {
        nav.classList.remove('nav-active');
        NavMenu.classList.add('hidden');
    }


});
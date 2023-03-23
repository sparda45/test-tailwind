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

// darkmode toggle

const darktoggle =  document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darktoggle.addEventListener('click', function(){
    if (darktoggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }
    else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }


});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darktoggle.checked = true;
  } else {
    darktoggle.checked = false;
  }


//toggle active
const navbarNav = document.querySelector('.navbar-nav');

//hamburger onClick
document.querySelector('#hamburger').onclick = () =>{
    navbarNav.classList.toggle('active');
}

//out hamburger = close

const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})
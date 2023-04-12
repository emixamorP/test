const menuHamburger = document.querySelector(".hamb-menu")
const navLinks = document.querySelector(".navlinks")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

/*function changeNavcolor(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbar.classList.remove('navcolor');
    }else{
        navbar.classList.add('navcolor');
    }
}

window.addEventListener('scroll', changeNavcolor)*/
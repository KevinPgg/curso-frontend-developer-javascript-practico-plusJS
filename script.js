const menuRDesk = document.querySelector(".desktop-menu");
const navREmail = document.querySelector(".navbar-email");
const carritoCompraR = document.querySelector(".navbar-shopping-cart");
const menuCategorias= document.querySelector(".menu");
const menuMovil = document.querySelector(".mobile-menu");

navREmail.addEventListener('mousedown',preventDefault)

navREmail.addEventListener("click",toggleDesktopMenu);

menuCategorias.addEventListener("click",function(){
    menuMovil.classList.toggle('inactive');
})




function toggleDesktopMenu(){
    menuRDesk.classList.toggle('inactive');
}

function preventDefault(evt){
    evt.preventDefault()
}

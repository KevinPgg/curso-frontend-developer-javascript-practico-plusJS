const menuRDesk = document.querySelector(".desktop-menu");
const navREmail = document.querySelector(".navbar-email");
const carritoCompraR = document.querySelector(".navbar-shopping-cart");
const menuCategorias= document.querySelector(".menu");
const menuMovil = document.querySelector(".mobile-menu");
const detalleOrden= document.querySelector(".product-detail")

navREmail.addEventListener('mousedown',preventDefault)

navREmail.addEventListener("click",toggleDesktopMenu);


menuCategorias.addEventListener("click",function(){
    menuMovil.classList.toggle('inactive');
})

window.addEventListener('resize',function(){
    if(window.innerWidth > 640){
        menuMovil.classList.add('inactive');
    }
    

});

carritoCompraR.addEventListener('click',toggleShoppingMenu);



function toggleDesktopMenu(){
    menuRDesk.classList.toggle('inactive');
}
function toggleShoppingMenu(){
    if(window.innerHeight<640){
        detalleOrden.classList.toggle('inactive');
    
    }else{
        
    }
}

function preventDefault(evt){
    evt.preventDefault()
}

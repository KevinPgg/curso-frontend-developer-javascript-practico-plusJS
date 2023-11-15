const menuRDesk = document.querySelector(".desktop-menu");
const navREmail = document.querySelector(".navbar-email");
const navLEmail = document.querySelector(".nav-email");
const carritoCompraR = document.querySelector(".navbar-shopping-cart");
const menuCategorias= document.querySelector(".menu");
const menuMovil = document.querySelector(".mobile-menu");
const detalleOrden= document.querySelector(".shopping-cart-detail")
const detalleProducto= document.querySelector('.product-detail');
const detalleProductoCerrar= document.querySelector('.product-detail-close');
const imagenProducto= document.getElementsByClassName('product-card');



navREmail.addEventListener('mousedown',preventDefault)

navREmail.addEventListener("click",function(){
    menuRDesk.classList.toggle('inactive');
    
    detalleOrden.classList.add('inactive')
});


navLEmail.addEventListener('mousedown',preventDefault)

navLEmail.addEventListener("click",function(){
    menuRDesk.classList.toggle('inactive');
});

menuCategorias.addEventListener("click",function(){
    menuMovil.classList.toggle('inactive');
    menuRDesk.classList.add('inactive');
    
})

window.addEventListener('resize',function(){
    if(window.innerWidth > 640){
        menuMovil.classList.add('inactive');
        menuRDesk.classList.add('inactive');
    }
    
});

carritoCompraR.addEventListener('click',function(){
    detalleOrden.classList.toggle('inactive');
    menuRDesk.classList.add('inactive');
});

detalleProductoCerrar.addEventListener('click',function(){
    detalleProducto.style.right='-360px';
})

for(product of imagenProducto){
product.addEventListener('click',function(){
    detalleProducto.style.right= "0px";
    
});
}

window.addEventListener('scroll',function(){
    if(this.window.scrollY==0){
        detalleProducto.style.top = '60.8px';
    } else{
        detalleProducto.style.top = '0px';

    }
});


function preventDefault(evt){
    evt.preventDefault()
}

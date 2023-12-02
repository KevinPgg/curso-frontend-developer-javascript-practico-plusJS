const menuRDesk = document.querySelector(".desktop-menu");
const navREmail = document.querySelector(".navbar-email");
const navLEmail = document.querySelector(".nav-email");
const carritoCompraR = document.querySelector(".navbar-shopping-cart");
const menuCategorias= document.querySelector(".menu");
const menuMovil = document.querySelector(".mobile-menu");
const detalleOrden= document.querySelector(".shopping-cart-detail")

const detalleProductoInfo= document.querySelector('.product-info');

const imagenProducto= document.querySelector('.product-card');
const productContainer= document.querySelector('.cards-container');

const detalleProducto= document.querySelector('.product-detail');
const cerrarProductDetail= document.querySelector('.product-detail-close');
let imagenDetalleProducto= document.querySelector('.product-detail > img:nth-child(2)');
let nombreProductAside= document.querySelector('.product-info p:nth-child(1)');
let precioProductAside= document.querySelector('.product-info p:nth-child(2)');
let productInfoAside= document.querySelector('.product-info p:nth-child(3)');



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


const productsList= [];
productsList.push({
    name:  'bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    info:  'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});
productsList.push({
    name: 'phone',
    price: '320',
    image: 'https://images.pexels.com/photos/7214628/pexels-photo-7214628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info:  'This is a generic phone for practice purposes'
});
productsList.push({
    name: 'laptop',
    price: '400',
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info:  'Laptop brand laptop for practice purposes'
});
productsList.push({
    name: 'quiwi',
    price: '3',
    image: 'https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info:  'quiwi, muy rico, acidito.'
});
productsList.push({
    name: 'coffee',
    price: '3',
    image: 'https://images.pexels.com/photos/948358/pexels-photo-948358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info:  'un cafecito elegante con decoracion a base de expuma de leche'
});
productsList.push({
    name: 'camara',
    price: '300',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info:  'camara fujifilm modelo x-T10'
});

productsList.push({
    name: 'CBD-Drops',
    price: '25',
    image: 'https://images.pexels.com/photos/3259584/pexels-photo-3259584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info:  'aceite de cbd, relajante natural. Libre de THC'
});

productsList.push({
    name: 'Termo',
    price: '20',
    image: 'https://images.pexels.com/photos/19245669/pexels-photo-19245669/free-photo-of-resfriado-nieve-invierno-blanco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info:  'Termo color blanco marca northland ideal para mantener bebidas calientes en temperaturas muy bajas.'
});

productsList.push({
    name: 'Perfume-Gucci-BloomIntense',
    price: '140',
    image: 'https://images.pexels.com/photos/19170040/pexels-photo-19170040/free-photo-of-lujo-floracion-naturaleza-muerta-perfume.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info:  'Perfume con olor a flores calidas, sutil con olor a jazmin, con notas pachulí, almizcle y osmanthus.'
});







function renderListProducts(productList){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.classList.add(product.name);
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);


        const productInfo = document.createElement('div');
        productInfo.classList.add('nav-product-info');

        const productInfoDiv= document.createElement('div');
        const productInfPrice= document.createElement('p');
        productInfPrice.innerText= '$' + product.price;

        const productInfoName= document.createElement('p');
        productInfoName.innerText= product.name;

        productInfoDiv.appendChild(productInfPrice);
        productInfoDiv.appendChild(productInfoName);

        const productInfoFigure= document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        productContainer.appendChild(productCard);


        
        const addClickEvent = function(prod) {
            productImg.addEventListener('click', function(){
                llenarDetalleProducto(prod.name, prod.price, prod.image, prod.info);
                detalleProducto.style.right = '0px';
            });
        };

        addClickEvent(product);
       
        

        cerrarProductDetail.addEventListener('click',function(){
            if(window.innerWidth>640){
                detalleProducto.style.right='-360px';
            }
            else{
                detalleProducto.style.right='-640px';
            }
        });
        

    }
}
function llenarDetalleProducto(nombre, precio, imagen, informacion){
    imagenDetalleProducto.setAttribute('src',imagen);
    productInfoAside.classList.add('product-info');
    precioProductAside.innerText= '$' + precio;
    nombreProductAside.innerText= nombre;
    productInfoAside.innerText= informacion;
    
};



renderListProducts(productsList);

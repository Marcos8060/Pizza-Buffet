// init UI
const ui = new UI;

const totalCartItems = document.querySelector('.totalItemsInCart');

// iterate through the products array
products.forEach((product)=>{
    ui.displayProducts(product.imgSrc,product.title,product.size,product.price,product.id);
})


// add to cart function
let cart = [];

function addToCart(id){
    // check if already in cart
    if(cart.some((item)=> item.id === id)){
        alert('item already in cart')
    }else{
        const item = products.find((product)=> product.id === id);
  
       cart.push({
           ...item,
           numberOfUnits:1,
       })
    }

    updateCart();
}
// update cart
function updateCart(){
    appendItemsInCart();
    getSubToTals();
    showSummary();
}
// get subtotals
function getSubToTals(){
    let totalPrice = 0, totalUnits = 0;
    cart.forEach((item)=>{
        totalPrice += item.price * item.numberOfUnits;
        totalUnits += item.numberOfUnits;
        totalCartItems.innerHTML = totalUnits;
    })
    ui.getSubToTals(totalPrice,totalUnits);
}
// append items in cart
function appendItemsInCart(){
    ui.cartItems.innerHTML = "";
    cart.forEach((item)=>{
        ui.appendItemsInCart(item.imgSrc,item.numberOfUnits,item.price,item.id,item.title,item.size);
    })
}

// show summary
function showSummary(){
    ui.checkout.innerHTML = "";
    cart.forEach((item)=>{
        ui.appendSummary(item.title,item.size);
    });
}

// change number of unit
function changeUnits(action,id){
    cart = cart.map((item)=>{
        let numberOfUnits = item.numberOfUnits;
        if(item.id === id){
            if(action === 'minus' && numberOfUnits > 1){
                numberOfUnits--
            }else if(action === 'plus'){
                numberOfUnits++
            }
        }
        return {
            ...item,
            numberOfUnits,
        }
    })
    updateCart();
}

// delivery functionality
$(document).ready(function(){
    $('#form').submit(function(e){
        e.preventDefault();

        // clear alert
        clearAlert();

        var nameInput = $('input#name').val();
        var locationInput = $('input#location').val();

        if(nameInput && locationInput){
            // create element
            const h5 = document.createElement('h5');
            h5.className = 'alert alert-success';
            h5.appendChild(document.createTextNode(`Thank you ${nameInput}, your order will be delivered to ${locationInput}`));
            const searchContainer = document.querySelector('.searchContainer');
            const search = document.querySelector('.search');
            searchContainer.insertBefore(h5,search);
        }else{
            // create element
            const h5 = document.createElement('h5');
            h5.className = 'alert alert-danger';
            h5.appendChild(document.createTextNode(`Please fill in all the required fields`));
            const searchContainer = document.querySelector('.searchContainer');
            const search = document.querySelector('.search');
            searchContainer.insertBefore(h5,search);
        }

        setTimeout(()=>{
            clearAlert();
        },4000);
        
        $('input#name').val('');
        $('input#location').val('');

    })
})
function clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
        currentAlert.remove();
    }
}
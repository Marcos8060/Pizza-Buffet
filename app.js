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
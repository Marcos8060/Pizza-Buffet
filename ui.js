class UI  {
    constructor(){
        this.showProducts = document.querySelector('.menuItems');
        this.cartItems = document.querySelector('.cartItems');
        this.subTotals = document.querySelector('.subTotals');
        this.checkout = document.querySelector('.checkout');

    }

    displayProducts(img,title,size,price,id){
        this.showProducts.innerHTML += `
                        <div class="col products">
                        <img class="img-fluid" src=${img} alt="pizza">
                        <h2>${title}</h2>
                        <h4>Size: ${size}</h4>
                        <div class="price">
                        <div>
                        <h5 class="font-weight-bold">Price: $${price}</h5>
                        </div>
                        <div>
                        <img style="height: 30px;margin-top: -10px;width: 30px;" src="https://img.icons8.com/fluency/48/000000/star.png"/>4.8 (5.9k Review)
                        </div>
                        </div>
                        <select class="form-select" aria-label="Default select example">
                        <option value="1">Pepperoni</option>
                        <option value="2">Mushroom</option>
                        <option value="3">Bacon</option>
                        </select>
                        <button class="btn2" onClick="addToCart(${id})">Add to cart</button>
                        </div>
                    `
    }
    appendItemsInCart(imgSrc,numberOfUnits,price,id,title,size){
        this.cartItems.innerHTML += `
                        <div class="items d-flex justify-content-between align-items-center underline1">
                        <div>
                        <img class="img-fluid" src=${imgSrc} alt="pizza" style="width: 60px;"><br>
                        <small>${title}</small><br>
                        <small>${size}</small>
                        </div>
                        <div class="units d-flex justify-content-between align-items-center">
                        <img onClick="changeUnits('minus',${id})" src="https://img.icons8.com/ios-glyphs/30/fa314a/minus.png"/>
                        <b style="font-size: 25px;">${numberOfUnits}</b>
                        <img onClick="changeUnits('plus',${id})" src="https://img.icons8.com/ios-glyphs/30/fa314a/plus.png"/>
                        </div>
                        <p class="font-weight-bold">$${price}</p>
                        </div>
                    `
    }
    getSubToTals(totalPrice,totalUnits){
        this.subTotals.innerHTML = `
                        <div class="totals d-flex justify-content-between">
                            <h5>Totals</h5>
                            <h6>${totalUnits} (units)</h6>
                            <h5 class="font-weight-bold">$${totalPrice}</h5>
                        </div>
                    `
    }
    appendSummary(title,size){
        this.checkout.innerHTML += `
                        <div class="col order">
                        <h5>${title}</h5>
                        <p>${size}</p>
                        <p>mushroom</p>
                        </div>
        `
    }
}

//---------- Fonction d'ajout au panier --------//
function addBasket(product){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if (foundProduct != underfined) {
        foundProduct.quantity = 1;
    } else {
        product.quantity = 1;
        basket.push(product);
    }
    saveBasket(basket);
}

//---------- Fonction de retrait du panier -----//
function removeFrmBasket(product){
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id);
    saveBasket(basket);
}

//-------- Fonction de changement de quantité --//
function changeQuantity(product, quantity){
    let basket = getBasket();
    let foundProduct = basket.find(p=> p.id == product.id);
    if (foundProduct != underfined) {
        foundProduct.quantity +- quantity;
        if (foundProduct.quantity <= 0) {
            removeFrmBasket(foundProduct);
        } else {
            saveBasket(basket);
        }
    }
}

//------Fonction de retour du nombre d'article--//
function getNumberProduct(){
    let basket = getBasket();
    let number = 0;
    for (let product of basket) {
        number += product.quantity;
    }
    return number;
}

//-------Fonction prix total du panier ---------//
function getTotalPrice(){
    let basket = getBasket();
    let total = 0;
    for (let product of basket){
        total += product.quantity * product.price;
    }
    return total;
}


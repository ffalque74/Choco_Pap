var number = 0

//---------- Fonction de sauvegarde de panier --//
function saveBasket(basket){
    localStorage.setItem("basket",JSON.stringify(basket));
}

//--------- Fonction récuperation du panier ----//
function getBasket(){
    let basket =(localStorage.getItem("basket"));
    console.log('valeur de basket dans get Basket : ',basket);
    if(basket == null){
        return [];
    }else{
        return JSON.parse(basket);
    }
}

//---------- Fonction d'ajout au panier --------//
function ajoutPanier(panier){

    let basket =(localStorage.getItem("basket"));
    console.log('valeur de panier : ',panier);
    
    
    console.log('valeur de basket : ',basket);
    basket = JSON.parse(basket);
    if(basket == null)
    { basket = [] }
    
    const found = basket.find(elt => elt.id == panier.id);
    if(found != undefined){
        console.log('add')
        found.quantity = found.quantity + 1 ;
        localStorage.setItem("basket",JSON.stringify(basket));
    } else {
    
    
    basket.push(panier);
    localStorage.setItem("basket",JSON.stringify(basket));
}
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
    console.log(number);
}
console.log(number);

//-------Fonction prix total du panier ---------//
function getTotalPrice(){
    let basket = getBasket();
    let total = 0;
    for (let product of basket){
        total += product.quantity * product.price;
    }
    return total;
}


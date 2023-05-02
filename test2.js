

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
function addBasket(produitQte){
    let basket = getBasket();
    console.log('id panier : ',basket.id);
    console.log('id ajouté : ',produitQte.id)
        
        if(basket.id == produitQte.id){
        console.log(basket.quantity)
        produitQte.quantity = produitQte.quantity + basket.quantity;
        saveBasket(produitQte);}
        

        console.log(produitQte);
        
            basket.push(produitQte);
            
    
        
   
    
    
   
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

var els = document.getElementById('panierEssai');
let basket =(localStorage.getItem("basket"));

//els.innerHTML = basket;


//***//**/*/*/*/*///***/ */ */ */

function testPanier(){
    

}
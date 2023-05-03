var number = 0


// //---------- Fonction de sauvegarde de panier --//
// function saveBasket(basket){
//     localStorage.setItem("basket",JSON.stringify(basket));
// }

// //--------- Fonction récuperation du panier ----//
// function getBasket(){
//     let basket =(localStorage.getItem("basket"));
//     console.log('valeur de basket dans get Basket : ',basket);
//     if(basket == null){
//         return [];
//     }else{
//         return JSON.parse(basket);
//     }
// }

//---------- Fonction d'ajout au panier --------//
function ajoutPanier(panier){
    // je recupère le panier existant et le stock dans basket
    let basket =(localStorage.getItem("basket"));
    console.log('valeur de panier : ',panier);
    console.log('valeur de basket : ',basket);
    // je parse la valeur de basket afin d'obtenir à nouveau un tableau
    basket = JSON.parse(basket);
    
    // si le panier renvoi null c'est qu'il est inexistant, donc je creer un vide
    if(basket == null)
    { basket = [] }
    // je recherche dans le panier existant si l'ID que je veux ajouter existe
    // Si oui j'incremente de 1 sa quantité
    const found = basket.find(elt => elt.id == panier.id);
    if(found != undefined){
        console.log('add')
        found.quantity = found.quantity + 1 ;
        localStorage.setItem("basket",JSON.stringify(basket));
    } else {
    // s'il n'existe pas je l'ajoute au panier existant et on l'enregistre
    basket.push(panier);
    localStorage.setItem("basket",JSON.stringify(basket));
}
}
// Fonction permettant d'incremanter la quantité
function fonctiondincrementation(boutonPlus){
    console.log(boutonPlus);
    // je recupère le panier existant et le stock dans basket
    let basket =(localStorage.getItem("basket"));
    // je parse la valeur de basket afin d'obtenir à nouveau un tableau
    basket = JSON.parse(basket);
    console.log('valeur de basket : ',basket);
    const foundPlus = basket.find(elt => elt.id == boutonPlus);
        console.log('add',foundPlus)
        foundPlus.quantity = foundPlus.quantity + 1 ;
        localStorage.setItem("basket",JSON.stringify(basket));
        location.reload();
}
// Fonction permettant de decrementer la quantité
function fonctiondecrementation(boutonMoins){
    console.log(boutonMoins);
    // je recupère le panier existant et le stock dans basket
    let basket =(localStorage.getItem("basket"));
    // je parse la valeur de basket afin d'obtenir à nouveau un tableau
    basket = JSON.parse(basket);
    console.log('valeur de basket : ',basket);
    const foundMoins = basket.find(elt => elt.id == boutonMoins);
        console.log('add',foundMoins)
        foundMoins.quantity = foundMoins.quantity - 1 ;
        if(foundMoins.quantity == 0){
            alert("la quantité est égale à zero")
        }
        localStorage.setItem("basket",JSON.stringify(basket));
        location.reload();
}

// //------Fonction de retour du nombre d'article--//
// function getNumberProduct(){
//     let basket = getBasket();
//     let number = 0;
//     for (let product of basket) {
//         number += product.quantity;
//     }
//     return number;
    
// }
// console.log(number);

// //-------Fonction prix total du panier ---------//
// function getTotalPrice(){
//     let basket = getBasket();
//     let total = 0;
//     for (let product of basket){
//         total += product.quantity * product.price;
//     }
//     return total;
// }


var basket = (localStorage.getItem("basket"));
if(basket == null){
    basket = [],
    localStorage.setItem("basket",JSON.stringify(basket));
}
//console.log(basket);
var injectJs = document.getElementById("affichagePanier");
basket = JSON.parse(basket);
console.log(basket);
injectJs.innerHTML = basket
      .map(
        (basket) => `
    <div id="basketProduit" class="row mb-5 mt-3">
        <div class="col-lg-1"></div>
        <a class="col-lg-2 btn  ms-0 me-0 ps-0 pe-0" onclick="suppressionArticle(${basket.id}) title="cliquez ici pour vous rendre sur Twitter" target="_blank" role="button" id="twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
            </svg>
        </a>
        <div class=col-lg-2>
            <img class="imagePanier" src="${basket.image}" alt="image chocolat ${basket.name} " />
        </div>
        <div id="blocProduit" class="col-lg-4">
            <h2 class="h2 namePanier">${basket.name} </h2>
            <p class="basketPrice">${basket.price.toString().replace(/00/, "")} &euro;
            </p>
            <!--<p>Ref:<br/>${basket.id} </p>-->
        </div>
        <div  class="col-lg-1">
            <div class="flex-centre">
                <button class="bouton-moins" data-id="" onclick="fonctiondecrementation(${basket.id})">-</button>
                <span class="produit-quantite"><strong>&nbsp;${basket.quantity}&nbsp;</strong></span>
                <button class="bouton-plus" data-id="" onclick="fonctiondincrementation(${basket.id})">+</button>
            </div>
        </div>
        <div class="col-lg-1 totalPrice">
            <p class="prix-total-quantite">
                ${basket.quantity * basket.price.toString().replace(/00/, "")} &euro;
            </p>
        </div>
    </div>
    `,
      )
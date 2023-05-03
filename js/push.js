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
        localStorage.setItem("basket",JSON.stringify(basket));
        location.reload();
}
   
    
}

// // Fonction opérationnelle pas de gestion de quantité
// function ajoutPanier(panier){

//     let basket =(localStorage.getItem("basket"));
//     console.log('valeur de panier : ',panier);
    
//     console.log('avant IF ');
//     console.log('valeur de basket : ',basket);
//     if(basket == null)
//     { basket = [] }
   
//     basket = JSON.parse(basket);
    
//     basket.push(panier);
//     localStorage.setItem("basket",JSON.stringify(basket));
// }

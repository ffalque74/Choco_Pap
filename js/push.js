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

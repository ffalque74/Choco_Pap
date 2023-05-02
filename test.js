let addProduit = JSON.parse(localStorage.getItem("basket"));

const panierDisplay = async () => {
   
   if (addProduit){
      await addProduit;
      console.log('addProduit : ', addProduit);
      console.log(addProduit.price);

     els.innerHTML = `

     <div class="row d-flex">
      <p class="col-6"> Produit commandé : ${addProduit.name}</p>
      <p class="col-2"> Quantité commandée : ${addProduit.quantity}</p>
      <p class="col-3"> Prix unitaire : ${addProduit.price}</p>
      
     </div>
     
     
     
     
     
     `;


      
      
      
    
     
      
      
        

     
   }


}
panierDisplay();
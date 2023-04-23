

//-----------------------Variables-------------------------------//

// valeurs initiales des variables de filtrage prix, notes, produits
var pMin = 30;
var pMax = 150;
var nMin = 0;
var nMax = 5;
var all = false;
var blanc = false;
var lait = false;
var noir = false;
var noix = false;
var fruits = false;
var caramel = false;
var liqueur = false;
var checkboxes = document.querySelectorAll("input[type = 'checkbox']");

// -------- Aquisition des changement filtre utilisateu ---------//

// Recupérartion changement valeur select Prix min
function change_valeurPmin() {
    var selectPmin = document.getElementById('pmin-select');
    var choicePmin = selectPmin.selectedIndex;
    var textPmin =  selectPmin.options[choicePmin].value; 
    pMin = parseInt(textPmin);
}
// Recupérartion changement valeur select Prix max
function change_valeurPmax() {
    var selectPmax = document.getElementById('pmax-select');
    var choicePmax = selectPmax.selectedIndex;
    var textPmax =  selectPmax.options[choicePmax].value; 
    pMax = parseInt(textPmax);
}
// Recupérartion changement valeur select Note min
function change_valeurNmin() {
    var selectNmin = document.getElementById('nmin-select');
    var choiceNmin = selectNmin.selectedIndex;
    var textNmin =  selectNmin.options[choiceNmin].value; 
    nMin = parseInt(textNmin);
}
// Recupérartion changement valeur select Note max
function change_valeurNmax() {
    var selectNmax = document.getElementById('nmax-select');
    var choiceNmax = selectNmax.selectedIndex;
    var textNmax =  selectNmax.options[choiceNmax].value; 
    nMax = parseInt(textNmax);
}

// ------Fonctions de vérification des état des checkboxes ----//

// fonction chocolat blanc
function checkfunctionblanc() {
    var checkblanc = document.getElementById("blanc");
    if (checkblanc.checked == true) {
        blanc = true;
    } 
    else {
       blanc = false;
    }
    console.log("blanc",blanc)
}
// fonction chocolat lait
function checkfunctionlait() {
    var check = document.getElementById("lait");
    if (check.checked == true) {
        lait = true;
    } 
    else {
       lait = false;
    }
    console.log("lait",lait)
  }
  // fonction chocolat noir
  function checkfunctionnoir() {
    var check = document.getElementById("noir");
    if (check.checked == true) {
        noir = true;
    } 
    else {
       noir = false;
    }
    console.log("noir",noir)
  }
  // fonction chocolat noix
  function checkfunctionnoix() {
    var check = document.getElementById("noix");
    if (check.checked == true) {
        noix = true;
    } 
    else {
       noix = false;
    }
    console.log("noix",noix)
  }
  // fonction chocolat fruits
  function checkfunctionfruits() {
    var check = document.getElementById("fruits");
    if (check.checked == true) {
        fruits = true;
    } 
    else {
       fruits = false;
    }
    console.log("fruits",fruits)
  }
  // fonction chocolat caramel
  function checkfunctioncaramel() {
    var check = document.getElementById("caramel");
    if (check.checked == true) {
        caramel = true;
    } 
    else {
       caramel = false;
    }
    console.log("caramel",caramel)
  }
  // fonction chocolat liqueur
  function checkfunctionliqueur() {
    var check = document.getElementById("liqueur");
    if (check.checked == true) {
        liqueur = true;
    } 
    else {
       liqueur = false;
    }
    console.log("liqueur",liqueur)
  }
  // fonction chocolat all
  function checkfunctionall() {
    var check = document.getElementById("all");
    if (check.checked == true) {
        all = true;
    } 
    else {
       all = false;
    }
    console.log("all",all)
  }
//-- Fonction de selection de l'ensembles des produits --//
  function tous(){
    document.getElementById('blanc').click();
    document.getElementById('lait').click();
    document.getElementById('noir').click();
    document.getElementById('noix').click();
    document.getElementById('fruits').click();
    document.getElementById('caramel').click();
    document.getElementById('liqueur').click();
  }
  //-----je coche toutes les saes si tous est coché -----//
  function checkAll(myCheckbox){
    if(myCheckbox.checked == true){
        checkboxes.forEach(function(checkbox){
            checkbox.checked = true;
        });
    }
    else{
        checkboxes.forEach(function(checkbox){
            checkbox.checked = false;
        });
    }
  }

//--------------- TEST BOUTON Panier ---------------------------//

let button = document.querySelector('button');
console.log(button);
button.addEventListener('click', actionClick);

  function actionClick() {
    alert('Ok click!');
  }




  //- Section d'affichage avec filtrage des données du tableau --//


function affichage(value) {
    // je charge tout changement au debut de ma fonction des valeurs
    // selectionnée par l'utilisateur
    change_valeurPmin();
    change_valeurPmax();
    change_valeurNmin();
    change_valeurNmax();
    // Je transfere la valeur de value dans controle 
    var controle = value;
 
    console.log("controle",controle);
    console.log("value",value);
    console.log("test de all",all);
    console.log("test de blanc",blanc);

    //------------ Mon tableau avec tout les articles ----------//
    var data = [
        {
          id: 01,
          productName: "Tablette chocolat Noir 150gr",
          category: "noir",
          price: 15,
          notation: 2.2,
          image: "/images/produit8.jpg",
        },
        {
          id: 02,
          productName: "Tablette chocolat Noir 500gr",
          category: "noir",
          price: 45,
          notation: 3.2,
          image: "/images/produit9.jpg",
        },
        {
          id: 03,
          productName: "Tablette chocolat Blanc 150gr",
          category: "blanc",
          price: 15,
          notation: 4.2,
          image: "/images/produit6.jpg",
        },
        {
          id: 04,
          productName: "Tablette chocolat Blanc 500gr",
          category: "blanc",
          price: 45,
          notation: 4.7,
          image: "/images/produit4.jpg",
        },
        {
          id: 05,
          productName: "Tablette chocolat au lait 150gr",
          category: "lait",
          price: 15,
          notation: 4.5,
          image: "/images/produit5.jpg",
        },
        {
          id: 06,
          productName: "Tablette chocolat au lait 500gr",
          category: "lait",
          price: 45,
          notation: 3.5,
          image: "/images/produit10.jpg",
        },
        {
          id: 07,
          productName: "Tablette chocolat aux noix / noisettes 150gr",
          category: "noix",
          price: 15,
          notation: 2.8,
          image: "/images/produit9.jpg",
        },
        {
          id: 08,
          productName: "Tablette chocolat aux noix / noisettes 500gr",
          category: "noix",
          price: 45,
          notation: 3.2,
          image: "/images/produit9.jpg",
        },
        {
          id: 09,
          productName: "Tablette chocolat aux fruits 150gr",
          category: "fruits",
          price: 15,
          notation: 4.2,
          image: "/images/produit1.jpg",
        },
        {
          id: 10,
          productName: "Tablette chocolat aux fruits 500gr",
          category: "fruits",
          price: 45,
          notation: 4.2,
          image: "/images/produit7.jpg",
        },
        {
          id: 11,
          productName: "Tablette chocolat au caramel 150gr",
          category: "caramel",
          price: 15,
          notation: 4.2,
          image: "/images/produit3.jpg",
        },
        {
          id: 12,
          productName: "Tablette chocolat au caramel 500gr",
          category: "caramel",
          price: 45,
          notation: 4.2,
          image: "/images/produit2.jpg",
        },
        {
          id: 13,
          productName: "Tablette chocolat à la liqueur 150gr",
          category: "liqueur",
          price: 15,
          notation: 4,
          image: "/images/produit3.jpg",
        },
        {
          id: 14,
          productName: "Tablette chocolat à la liqueur 500gr",
          category: "liqueur",
          price: 45,
          notation: 5,
          image: "/images/produit8.jpg",
        },
      ]
      //-------- 3 Filtres category / price / notation ------------//

        // Filtrage la categorie je compare la valeur controle 
        // acquise avec le fonction affichage
        // je prend le tableau dataC et le transforme en dataP
        var dataC = data.filter(function(triCat) {
            return (triCat.category == controle);
        });
        
        console.log("valeur de dataC : ",dataC);
        // Filtrage sur le prix min et prix max
        // je prend le tableau dataC et le transforme en dataP
        // j'applique le filtre du prix min et max
        var dataP = dataC.filter(function(triPrix) {
            return ((triPrix.price >= pMin) && (triPrix.price <= pMax));
        });
        console.log("valeur de dataP : ",dataP);
        // Filtrage sur la note min et note max
        // je prend le tableau dataP et le transforme en dataPN
        // j'applique le filtre de la note min et max
        var dataPN = dataP.filter(function(triNote) {
            return ((triNote.notation >= nMin) && (triNote.notation <= nMax));
        });
        console.log("valeur de dataPN : ",dataPN);
        
        



        //------- Creation des cartes dans la Div Products dans le HTML-------//

        // Avec dataPN je vais piocher les cartes selectionnées aprés les 3 filtres
      for (let i of dataPN) {
        //Creation des cartes
        var card = document.createElement("div");
        //on ajoute les classes si besoin
        card.classList.add("card", i.category);
        //on ajoute l'id produit à la carte
        card.setAttribute("id", i.id);
        //Div de l'image
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        //image du produit
        let image = document.createElement("img");
        image.classList.add("image");
        image.setAttribute("src", i.image);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);
        //container
        let container = document.createElement("div");
        container.classList.add("container");
        //nom du produit
        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = i.productName.toUpperCase();
        container.appendChild(name);
        //prix
        let price = document.createElement("h6");
        price.innerText = "Prix : " + i.price + " Euro";
        container.appendChild(price);
        card.appendChild(container);
        document.getElementById("products").appendChild(card);
        //notation
        let notation = document.createElement("h6");
        notation.innerText = "Note : " + i.notation + " / 5";
        container.appendChild(notation);
        card.appendChild(container);
        document.getElementById("products").appendChild(card);
        //Bouton Panier
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("Ajouter au Panier");
        btn.classList.add("ajouterPanier");
        btn.appendChild(t);
        
        container.appendChild(btn);
        card.appendChild(container);
       
        document.getElementById("products").appendChild(card);
       
      }
    
  //selection de toutes les cartes
  let elements = document.querySelectorAll(".card"); 
  //Je fais une boucle à travers toutes les cartes
  // console.log(controle);
  elements.forEach((element) => { 
    //console.log("valeur de value dans la fonction affichage : ",value);
    
    console.log("all dans la fonction d'affichage : ",all);
      //Verification avec la recherche dans les categories
      
    if (element.classList.contains(value)&& (value == "blanc") && (blanc==true)) {
          // on fait disparaitre si la case à cocher est vide
          element.classList.add("hide");
        }
    if (element.classList.contains(value)&& (value == "lait") && (lait==true)) {
        // on fait disparaitre si la case à cocher est vide
        element.classList.add("hide");
        }
    if (element.classList.contains(value)&& (value == "noir") && (noir==true)) {
        // on fait disparaitre si la case à cocher est vide
        element.classList.add("hide");
        }
    if (element.classList.contains(value)&& (value == "noix") && (noix==true)) {
        // on fait disparaitre si la case à cocher est vide
        element.classList.add("hide");
        }
    if (element.classList.contains(value)&& (value == "fruits") && (fruits==true)) {
        // on fait disparaitre si la case à cocher est vide
        element.classList.add("hide");
        }
    if (element.classList.contains(value)&& (value == "caramel") && (caramel==true)) {
        // on fait disparaitre si la case à cocher est vide
        element.classList.add("hide");
        }
    if (element.classList.contains(value)&& (value == "liqueur") && (liqueur==true)) {
        // on fait disparaitre si la case à cocher est vide
        element.classList.add("hide");
        }
       
    })
};
//-------- Media Queries ---------------//

// Apparition du menu categorie en SM
// on clique sur l'éléments pour aficher ses enfants ou les cacher
const categorie = document.querySelector('.categorie');
var selectCPlus = document.querySelector('.cplus');
var selectCMoins = document.querySelector('.cmoins');
var divCases = document.querySelector('.coches')
categorie.addEventListener('click',() => {
    selectCPlus.classList.toggle('hide');selectCMoins.classList.toggle('hide');divCases.classList.toggle('hide');
})
// Apparition du menu Prix en SM
// on clique sur l'éléments pour aficher ses enfants ou les cacher
const Prix = document.querySelector('.prix');
var selectPPlus = document.querySelector('.pplus');
var selectPMoins = document.querySelector('.pmoins');
var divPrix = document.querySelector('.prixSelect')
Prix.addEventListener('click',() => {
    selectPPlus.classList.toggle('hide');selectPMoins.classList.toggle('hide');divPrix.classList.toggle('hide');
})
// Apparition du menu Notes en SM
// on clique sur l'éléments pour aficher ses enfants ou les cacher
const Note = document.querySelector('.notes');
var selectNPlus = document.querySelector('.nplus');
var selectNMoins = document.querySelector('.nmoins');
var divNotes = document.querySelector('.noteSelect')
Note.addEventListener('click',() => {
    selectNPlus.classList.toggle('hide');selectNMoins.classList.toggle('hide');divNotes.classList.toggle('hide');
})
// Media Querie pour cacher lse case à cacher et les select si ecran SM
function cacher(ecran) {
  if (ecran.matches) {
    divNotes.classList.toggle('hide');
    divPrix.classList.toggle('hide');
    divCases.classList.toggle('hide');
  } else {
   divNotes.classList.remove('hide');
   divPrix.classList.remove('hide');
   divCases.classList.remove('hide');
  }
}

var ecran = window.matchMedia("(max-width: 720px)")
cacher(ecran) // Call listener function at run time
ecran.addListener(cacher) // Attach listener function on state changes


  








 
 



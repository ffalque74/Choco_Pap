
//---------------Variables-------------------------------
// valeur initiale des variables de filtrage prix et notes
var pMin = 1;
var pMax = 150;
var nMin = 0;
var nMax = 5;
var tous = false;
var blanc = false;
var lait = false;
var noir = false;
var noix = false;
var fruits = false;
var caramel = false;
var liqueur = false;

//--------------- Datas -------------------------------

var data = [
    {
      productName: "Tablette chocolat Noir 150gr",
      category: "noir",
      price: 15,
      notation: 2.2,
      image: "/images/produit8.jpg",
    },
    {
      productName: "Tablette chocolat Noir 500gr",
      category: "noir",
      price: 45,
      notation: 3.2,
      image: "/images/produit9.jpg",
    },
    {
      productName: "Tablette chocolat Blanc 150gr",
      category: "blanc",
      price: 15,
      notation: 4.2,
      image: "/images/produit6.jpg",
    },
    {
      productName: "Tablette chocolat Blanc 500gr",
      category: "blanc",
      price: 45,
      notation: 4.7,
      image: "/images/produit4.jpg",
    },
    {
      productName: "Tablette chocolat au lait 150gr",
      category: "lait",
      price: 15,
      notation: 4.5,
      image: "/images/produit5.jpg",
    },
    {
      productName: "Tablette chocolat au lait 500gr",
      category: "lait",
      price: 45,
      notation: 3.5,
      image: "/images/produit10.jpg",
    },
    {
      productName: "Tablette chocolat aux noix / noisettes 150gr",
      category: "noix",
      price: 15,
      notation: 2.8,
      image: "/images/produit9.jpg",
    },
    {
      productName: "Tablette chocolat aux noix / noisettes 500gr",
      category: "noix",
      price: 45,
      notation: 3.2,
      image: "/images/produit9.jpg",
    },
    {
      productName: "Tablette chocolat aux fruits 150gr",
      category: "fruits",
      price: 15,
      notation: 4.2,
      image: "/images/produit1.jpg",
    },
    {
      productName: "Tablette chocolat aux fruits 500gr",
      category: "fruits",
      price: 45,
      notation: 4.2,
      image: "/images/produit7.jpg",
    },
    {
      productName: "Tablette chocolat au caramel 150gr",
      category: "caramel",
      price: 15,
      notation: 4.2,
      image: "/images/produit3.jpg",
    },
    {
      productName: "Tablette chocolat au caramel 500gr",
      category: "caramel",
      price: 45,
      notation: 4.2,
      image: "/images/produit2.jpg",
    },
    {
      productName: "Tablette chocolat à la liqueur 150gr",
      category: "liqueur",
      price: 15,
      notation: 4.2,
      image: "/images/produit3.jpg",
    },
    {
      productName: "Tablette chocolat à la liqueur 500gr",
      category: "liqueur",
      price: 45,
      notation: 4.9,
      image: "/images/produit8.jpg",
    },
  ]

//----------- Recupération des valeus selectionnées par l'utilisateur----------
function selections() {
// Récupération valeur Select pMin
var eltpmin = document.getElementById('pmin-select');
		eltpmin.addEventListener('change', function () {
      var pMin = parseInt(this.value);
      console.log("valeur de pMin : ",pMin);
		})
// Récupération valeur Select pMax
var eltpmax = document.getElementById('pmax-select');
		eltpmax.addEventListener('change', function () {
      var pMax = parseInt(this.value);
      console.log("valeur de pMax : ",pMax);
		})
// Récupération valeur Select nMin
var eltnmin = document.getElementById('nmin-select');
		eltnmin.addEventListener('change', function () {
      var nMin = parseInt(this.value);
      console.log("valeur de nMin : ",nMin);
		})
    // Récupération valeur Select nMax
var eltnmax = document.getElementById('nmax-select');
eltnmax.addEventListener('change', function () {
  var nMax = parseInt(this.value);
  console.log("valeur de nMax : ",nMax);
})
}


function filtre(){
// Filtrage sur le prix min et prix max
// je prend le tableau data et le transforme en dataP
// j'applique le filtre du prix min et max
var dataP =  data.filter(function(triPrix) {
    return (triPrix.price >= pMin) && (triPrix.price <= pMax);
});
// Filtrage sur la note min et note max
// je prend le tableau dataP et le transforme en dataPN
// j'applique le filtre de la note min et max
var dataPN =  dataP.filter(function(triNote) {
     (triNote.notation >= nMin) && (triNote.notation <= nMax);
});
}

//-------- Fonctions de verification des état des cases à cocher---------
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
// fonction chocolat tous
function checkfunctiontous() {
  var check = document.getElementById("tous");
  if (check.checked == true) {
      tous = true;
  }
  else {
     tous = false;
  }};
  console.log("tous",tous)


// --------------------- Creation des cartes--------------------------
function cartes(){
for (let i of dataP) {
    //Creation des cartes
    var card = document.createElement("div");
    //on ajoute les classes on masque les images au depart
    card.classList.add("card", i.category, i.price, "hide", "col-lg-14");
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
    btn.appendChild(t);
    container.appendChild(btn);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
}

function change_valeur() {
    var select = document.getElementById('pmin-select');
    var choice = select.selectedIndex;
    var id = select.options[choice].value; 
    var text =  select.options[choice].value; 
    pMin = parseInt(text);
    console.log("change!valeur : ",text);
}







 
 


//paramètre passé pour rechercher la category
function affichage(value) {
   
  //selection de toutes les cartes
  let elements = document.querySelectorAll(".card"); 
  //Je fais une boucle à travers toutes les cartes
  elements.forEach((element) => { 
    console.log("valeur de value dans la fonction affichage : ",value);
    console.log("valeur de pMin : ",pMin);
      //Verification de la recherche dans les categories
      
      
      if (element.classList.contains(value)&& (value == "blanc") && (blanc==false)) {
          //display element based on category
          element.classList.remove("hide");
        }
      if (element.classList.contains(value)&& (value == "blanc") && (blanc==true)) {
          //display element based on category
          element.classList.add("hide");
        }
      if (element.classList.contains(value)&& (value == "lait") && (lait==false)) {
          //display element based on category
          element.classList.remove("hide");
        }
      if (element.classList.contains(value)&& (value == "lait") && (lait==true)) {
          //display element based on category
          element.classList.add("hide");
        }
      if (element.classList.contains(value)&& (value == "noir") && (noir==false)) {
          //display element based on category
          element.classList.remove("hide");
        }
      if (element.classList.contains(value)&& (value == "noir") && (noir==true)) {
          //display element based on category
          element.classList.add("hide");
        }
      if (element.classList.contains(value)&& (value == "noix") && (noix==false)) {
          //display element based on category
          element.classList.remove("hide");
        }
      if (element.classList.contains(value)&& (value == "noix") && (noix==true)) {
          //display element based on category
          element.classList.add("hide");
        }
      if (element.classList.contains(value)&& (value == "fruits") && (fruits==false)) {
          //display element based on category
          element.classList.remove("hide");
        }
      if (element.classList.contains(value)&& (value == "fruits") && (fruits==true)) {
          //display element based on category
          element.classList.add("hide");
        }
      if (element.classList.contains(value)&& (value == "caramel") && (caramel==false)) {
          //display element based on category
          element.classList.remove("hide");
        }
      if (element.classList.contains(value)&& (value == "caramel") && (caramel==true)) {
          //display element based on category
          element.classList.add("hide");
        }
      if (element.classList.contains(value)&& (value == "liqueur") && (liqueur==false)) {
          //display element based on category
          element.classList.remove("hide");
        }
      if (element.classList.contains(value)&& (value == "liqueur") && (liqueur==true)) {
          //display element based on category
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


  
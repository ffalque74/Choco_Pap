var data = [
    {
      productName: "Tablette chocolat Noir 150gr",
      category: "noir",
      price: 15,
      notation: "4,2",
      image: "/images/produit8.jpg",
    },
    {
      productName: "Tablette chocolat Noir 500gr",
      category: "noir",
      price: 45,
      notation: "4,2",
      image: "/images/produit9.jpg",
    },
    {
      productName: "Tablette chocolat Blanc 150gr",
      category: "blanc",
      price: 15,
      notation: "4,2",
      image: "/images/produit6.jpg",
    },
    {
      productName: "Tablette chocolat Blanc 500gr",
      category: "blanc",
      price: 45,
      notation: "4,2",
      image: "/images/produit4.jpg",
    },
    {
      productName: "Tablette chocolat au lait 150gr",
      category: "lait",
      price: 15,
      notation: "4,2",
      image: "/images/produit5.jpg",
    },
    {
      productName: "Tablette chocolat au lait 500gr",
      category: "lait",
      price: 45,
      notation: "4,2",
      image: "/images/produit10.jpg",
    },
    {
      productName: "Tablette chocolat aux noix / noisettes 150gr",
      category: "noix",
      price: 15,
      notation: "4,2",
      image: "/images/produit9.jpg",
    },
    {
      productName: "Tablette chocolat aux noix / noisettes 500gr",
      category: "noix",
      price: 45,
      notation: "4,2",
      image: "/images/produit9.jpg",
    },
    {
      productName: "Tablette chocolat aux fruits 150gr",
      category: "fruits",
      price: 15,
      notation: "4,2",
      image: "/images/produit1.jpg",
    },
    {
      productName: "Tablette chocolat aux fruits 500gr",
      category: "fruits",
      price: 45,
      notation: "4,2",
      image: "/images/produit7.jpg",
    },
    {
      productName: "Tablette chocolat au caramel 150gr",
      category: "caramel",
      price: 15,
      notation: "4,2",
      image: "/images/produit3.jpg",
    },
    {
      productName: "Tablette chocolat au caramel 500gr",
      category: "caramel",
      price: 45,
      notation: "4,2",
      image: "/images/produit2.jpg",
    },
    {
      productName: "Tablette chocolat à la liqueur 150gr",
      category: "liqueur",
      price: 15,
      notation: "4,2",
      image: "/images/produit3.jpg",
    },
    {
      productName: "Tablette chocolat à la liqueur 500gr",
      category: "liqueur",
      price: 45,
      notation: "4,2",
      image: "/images/produit8.jpg",
    },
  ]



 // initialisation de quelques variables
var tous = false;
var blanc = false;
var lait = false;
var noir = false;
var noix = false;
var fruits = false;
var caramel = false;
var liqueur = false;

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


// Boucle de recherche et execution des conditions
for (let i of data) {
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


// Apparition du menu categorie en SM
const categorie = document.querySelector('.categorie');
var selectCPlus = document.querySelector('.cplus');
var selectCMoins = document.querySelector('.cmoins');
var divCases = document.querySelector('.coches')
categorie.addEventListener('click',() => {
    selectCPlus.classList.toggle('hide');selectCMoins.classList.toggle('hide');divCases.classList.toggle('hide');
})
// Apparition du menu Prix en SM
const Prix = document.querySelector('.prix');
var selectPPlus = document.querySelector('.pplus');
var selectPMoins = document.querySelector('.pmoins');
var divPrix = document.querySelector('.prixSelect')
Prix.addEventListener('click',() => {
    selectPPlus.classList.toggle('hide');selectPMoins.classList.toggle('hide');divPrix.classList.toggle('hide');
})
// Apparition du menu Notes en SM
const Note = document.querySelector('.notes');
var selectNPlus = document.querySelector('.nplus');
var selectNMoins = document.querySelector('.nmoins');
var divNotes = document.querySelector('.noteSelect')
Note.addEventListener('click',() => {
    selectNPlus.classList.toggle('hide');selectNMoins.classList.toggle('hide');divNotes.classList.toggle('hide');
})

function myFunction(x) {
  if (x.matches) { // If media query matches
    divNotes.classList.toggle('hide');
    divPrix.classList.toggle('hide');
    divCases.classList.toggle('hide');
  } else {
   divNotes.classList.remove('hide');
   divPrix.classList.remove('hide');
   divCases.classList.remove('hide');
  }
}

var x = window.matchMedia("(max-width: 720px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes






 var pMin = 25;
 console.log(pMin);
 
 


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




  
// Etablissement de la liste des produits aves les différentes catégories
let products = {
    data: [
      {
        productName: "Tablette chocolat Noir 150gr",
        category: "noir",
        price: "15",
        notation: "4,2",
        image: "/images/produit1.jpg",
      },
      {
        productName: "Tablette chocolat Noir 500gr",
        category: "noir",
        price: "45",
        notation: "4,2",
        image: "/images/produit2.jpg",
      },
      {
        productName: "Tablette chocolat Blanc 150gr",
        category: "blanc",
        price: "15",
        notation: "4,2",
        image: "/images/produit1.jpg",
      },
      {
        productName: "Tablette chocolat Blanc 500gr",
        category: "blanc",
        price: "45",
        notation: "4,2",
        image: "/images/produit2.jpg",
      },
      {
        productName: "Tablette chocolat au lait 150gr",
        category: "lait",
        price: "15",
        notation: "4,2",
        image: "/images/produit1.jpg",
      },
      {
        productName: "Tablette chocolat au lait 500gr",
        category: "lait",
        price: "45",
        notation: "4,2",
        image: "/images/produit2.jpg",
      },
      {
        productName: "Tablette chocolat aux noix / noisettes 150gr",
        category: "noix",
        price: "15",
        notation: "4,2",
        image: "/images/produit1.jpg",
      },
      {
        productName: "Tablette chocolat aux noix / noisettes 500gr",
        category: "noix",
        price: "45",
        notation: "4,2",
        image: "/images/produit2.jpg",
      },
      {
        productName: "Tablette chocolat aux fruits 150gr",
        category: "fruits",
        price: "15",
        notation: "4,2",
        image: "/images/produit1.jpg",
      },
      {
        productName: "Tablette chocolat aux fruits 500gr",
        category: "fruits",
        price: "45",
        notation: "4,2",
        image: "/images/produit2.jpg",
      },
      {
        productName: "Tablette chocolat au caramel 150gr",
        category: "caramel",
        price: "15",
        notation: "4,2",
        image: "/images/produit1.jpg",
      },
      {
        productName: "Tablette chocolat au caramel 500gr",
        category: "caramel",
        price: "45",
        notation: "4,2",
        image: "/images/produit2.jpg",
      },
      {
        productName: "Tablette chocolat à la liqueur 150gr",
        category: "liqueur",
        price: "15",
        notation: "4,2",
        image: "/images/produit1.jpg",
      },
      {
        productName: "Tablette chocolat à la liqueur 500gr",
        category: "liqueur",
        price: "45",
        notation: "4,2",
        image: "/images/produit2.jpg",
      },
    ],
  };
/*
// initialisation de quelques variables
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
    var message = document.getElementById("message");
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
}*/

// Boucle de recherche dans les data de products
for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Les cartes doivent avoir une catégorie et doivent rester masqué initialement
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "€" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
    //notation
    let notation = document.createElement("h6");
    notation.innerText = i.notation + " / 5";
    container.appendChild(notation);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}




  //parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".check");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      console.log("valeur de value dans la fonction filterProduct : ",value)
      if (value == "tous") {
        element.classList.remove("hide");
      } else {
        //Verification de la recherche dans les categories
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("tous");
  };
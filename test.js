const data = [
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
    }
  ];


  var elt = document.getElementById('select');
		elt.addEventListener('change', function () {
			console.log('value => '+parseInt(this.value));
		})






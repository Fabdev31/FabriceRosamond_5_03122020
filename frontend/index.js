const productsContainer= document.getElementById("article-furniture");

const headers = new Headers({
  "Content-type": "application/json"
});

fetch('http://localhost:3000/api/furniture')
.then((response) => {
  return response.json();
})
.then((furnitures) => {
  //une boucle for ou on reproduit l'opération pour chaque élément se trouvant à l'adresse indiquée
  for(const furniture of furnitures){
    
    productsContainer.innerHTML += 
    `<div class="card">
    <div class="card-body" id="figures">
        <h5 class="Orimeubles text-center">Ori-ameublement</h5>
        <figure>
          <figcaption>${furniture.name}</figcaption>
          <a href="produit.html?id=${furniture._id}"><img src="${furniture.imageUrl}" 
          width="60" height="60" alt="photo de table en bois design"></a>
          <h3>${furniture.price/100} $</h3>
        </figure>
    </div>
</div>`
  }
});

/*

try {
  //récupérer les photos et les afficher
const figuresId = furniture

console.log(figuresId)

//Dans le DOM afficher insérer et afficher les photos

const image = <img src="${imageUrl}"></img>;*/

/*

/*
.then(function(){
  document
  .querySelector(" .card")
  .innerHTML = furnitures.imageUrl;
})*/

  


/*const furniture = {
  imageUrl : "http://localhost:3000/images/oak_1.jpg",
  name : "Cross Table",
  price: 59900
};

for (let furniture of furnitures) {
  console.log('image' + furniture.imageUrl + furniture.name);
}*/

/*
let furniture = {
  imageUrl : "http://localhost:3000/images/oak_1.jpg",
  name : "Cross Table",
  price: 59900
};


let furniturePicture = new furniture;

let furniture = furniture.imageUrl;

const newElement = document.createElement("figure");
let img = document.querySelector('body').element.appendChild(newElement);
*/


/*var nouvelleimage=document.createElement("IMG");
document.getElementById('ajout').appendChild(body);
document.getElementById('ajout').lastChild.setAttribute('src',mavariable);
*/
/*
function integrerCatalogueProduit(image){
  const catalogueProduit = document.createElement("figure");
  catalogueProduit.innerHTML = '<img src="./JWDP5/images/oak_1.jpg" alt="photo-crosstable"> <img src="./JWDP5/images/oak_2.jpg" alt="photo-coffeetable"> <img src="./JWDP5/images/oak_3.jpg" alt="photo-dinning-table"><img src="./JWDP5/images/oak_4.jpg" alt="photo-bench"><img src="./JWDP5/images/oak_5.jpg" alt="photo-vintage-chair">';
  document.querySelector('body').appendChild(figure)
};
integrerCatalogueProduit('http://localhost:3000/images/oak_3.jpg');*/
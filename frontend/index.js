const productsContainer= document.getElementById("article-furniture");

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
          <h3>${furniture.price / 100} $</h3>
        </figure>
    </div>
    </div>`
  }
}).catch(error=>console.log(error));
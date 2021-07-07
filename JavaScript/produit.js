const headers = new Headers({
  "Content-type": "application/json"
});
//choisir dans les id 
const params = window.location.search;
const id = params.substring(params.indexOf('id=')+3, 28);



//methode fetch avec la valeur de l'id à la fin de l'url
fetch(`http://localhost:3000/api/furniture/${id}`)
.then((response) => {
  return response.json();
})
.then((furniture) => {
  alert(furniture.stringify);
  document
    .getElementById("article-furniture")
    .innerHTML= 
    `<div class="card">
    <div class="card-body" id="figures">
        <h5 class="Orimeubles text-center">Ori-ameublement</h5>
        <figure>
          <figcaption>Nom du Produit : ${furniture.name}</figcaption>
          <a href="produit.html?id=${furniture._id}"><img src="${furniture.imageUrl}" 
          width="60" height="60" alt="photo de table en bois design"></a>
          <h3>Prix : ${furniture.price/1000} $</h3>
          <form>
          <label for="types-de-vernis">
              <select id="choix-vernissage">
                <option value="choix">--choisir le type de vernis--</option>
                <option value="" id="options-vernis"></option>
              </select>
          </label>
          </form>
        </figure>
        <button id="btn-ajouter-article">Ajouter au panier</button>
    </div>
</div>`;
//boucle for pour afficher les options
const optionNombre=furniture.varnish;

const select = document.getElementById("choix-vernissage");
select.innerHTML =`<option value = "choix">--choisir le type de vernis--</option>`

for(let i = 0; i < optionNombre.length; i++){
  select.innerHTML +=`<option value =${i}>${optionNombre[i]}</option>`;
  
}
})

/*document
  .getElementById("options-vernis")
  .innerHTML+=
  `<option value="${i}">${optionNombre[i]}</option>`; 
}*/

//travail sur les options


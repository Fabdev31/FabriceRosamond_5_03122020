const headers = new Headers({
  "Content-type": "application/json"
});
//choisir dans les id 
const params = new URLSearchParams(window.location.search);
const id = params.get("id");



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
          <form id="formulaire-options">
          <label for="types-de-vernis">
              <select id="choix-vernissage">
                <option value="" id="options-vernis"></option>
              </select>
          </label>
          </form>
        </figure>
        <button id="btn-ajouter-article">Ajouter au panier</button>
    </div>
</div>`;

//On pointe d'abord sur les différents types de varnish
const optionNombre=furniture.varnish;

//création d'une constante pour enregistrer là ou on insérera nos éléments
const select = document.getElementById("choix-vernissage");
//insertion des éléments
select.innerHTML =`<option value ="choix">--choisir le type de vernis--</option>`

//boucle for pour afficher les options du produit
for(let i = 0; i < optionNombre.length; i++){
  select.innerHTML +=`<option value =${i} id="choix-vernissage">${optionNombre[i]}</option>`;


//récupération de l'id du formulaire ce sont les données selectionnees par l'utilisateur

  const idFormulaire = document.getElementById("choix-vernissage");
  console.log(idFormulaire);

  //mettre le choix de l'utilisateur dans une variable
 const choixUtilisateur = idFormulaire.value;
 console.log(choixUtilisateur);

 //selection du bouton ajouter article et envoyer le panier
 const boutonAjouterArticle = document.getElementById("btn-ajouter-article");
 console.log(boutonAjouterArticle);
 boutonAjouterArticle.addEventListener("click", (Event)=>{
  Event.preventDefault();
  //Récupération des valeurs du formulaire, soit nom, option du produit etc => c'est un nouvel objet que tu te crées
 })
}
})





//mettre le choix de l'utilisateur dans une variable
//sélection du bouton mettre l'article au panier
//écouter le bouton et envoyer le panier par méthode POST
//récupérer le formulaire



/*document
  .getElementById("options-vernis")
  .innerHTML+=
  `<option value="${i}">${optionNombre[i]}</option>`; 
}*/

//travail sur les options


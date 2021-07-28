const headers = new Headers({
  "Content-type": "application/json"
});
//choisir dans les id 
const params = new URLSearchParams(window.location.search);
const id = params.get("id");


//On pointe d'abord sur les différents types de varnish


//création d'une constante pour enregistrer là ou on insérera nos éléments
const selectVarnish = document.getElementById("choix-vernissage");
let meuble = {};




//methode fetch avec la valeur de l'id à la fin de l'url
fetch(`http://localhost:3000/api/furniture/${id}`)
  .then((response) => {
    return response.json();
  })
  .then((furniture) => {
    meuble = { ...furniture };
    let varnishes = "";
    furniture.varnish.forEach(v => {
      varnishes += `<option value =${v} id="choix-vernissage">${v}</option>`;
    });
    document
    .getElementById("article-furniture")
    .innerHTML =
      `<div class="card">
        <div class="card-body" id="figures">
        <h5 class="Orimeubles text-center">Ori-ameublement</h5>
        <figure>
          <figcaption>Nom du Produit : ${furniture.name}</figcaption>
          <a href="produit.html?id=${furniture._id}"><img src="${furniture.imageUrl}" 
          width="60" height="60" alt="photo de table en bois design"></a>
          <h3>Prix : ${furniture.price / 1000} $</h3>
          <label for="types-de-vernis">
              <select id="choix-vernissage">
              ${varnishes}
              </select>
          </label>
          <div id= "quantiteArticle">
          <select id="quantite">
          <option value ="1"> 1 </option>
          <option value ="2"> 2 </option>
          <option value ="3"> 3 </option>
          <option value ="4"> 4 </option>
          <option value ="5"> 5 </option>
          </select>
          </div>
        </figure>
        <button id="btnAjouterArticle" onclick="ajouterArticle()">Ajouter au panier</button>
    </div>
</div>`;
  });


function ajouterArticle() {
 let isMeubleExistInCart = false;
  let newMeuble = {
    _id: meuble._id,
    name: meuble.name,
    price: meuble.price / 1000,
    imageUrl: meuble.imageUrl,
    vernis: selectVarnish.value,
    quantity: parseInt(quantite.value)
  }
  let panier = JSON.parse(localStorage.getItem('cart'));
  if (panier){
    panier.forEach(meuble=>{
      if(meuble._id == newMeuble._id){
        isMeubleExistInCart=true;
        meuble.quantity=meuble.quantity + newMeuble.quantity; 
      }
    })
    if(!isMeubleExistInCart){
      panier.push(newMeuble);
    }

  } else{
    panier=[];
    panier.push(newMeuble);
  }
  localStorage.setItem('cart', JSON.stringify(panier))
  //alert(`${quantite.value} ${meuble.name} ajoutée au panier`)
  window.location.reload();
 }


/*
dire pour chaque meuble envoyé au panier, rajouter dans un tableau panier   */


/*document.getElementById("btn-ajouter-article").addEventListener("click", function(){
  ajouterArticle(meuble)
  article.append(meuble)
});*/

//localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);



//mettre le choix de l'utilisateur dans une variable
//sélection du bouton mettre l'article au panier
//écouter le bouton et envoyer le panier par méthode POST
//récupérer le formulaire



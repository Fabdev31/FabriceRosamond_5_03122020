const headers = new Headers({
  "Content-type": "application/json"
});
//choisir dans les id 

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

//création d'une constante pour enregistrer là ou on insérera nos éléments
const selectVarnish = document.getElementById("choix-vernissage");
let meuble = {};
//methode fetch avec la valeur de l'id à la fin de l'url
fetch(`http://localhost:3000/api/furniture/${id}`)
  .then((response) => {
    console.log(response)
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
        <div class="bg-light card-body" id="figures">
        <h5 class="Orimeubles text-center">Ori-ameublement</h5>
        <figure>
          <figcaption>Nom du Produit : ${furniture.name}</figcaption>
          <a href="produit.html?id=${furniture._id}"><img src="${furniture.imageUrl}" 
          width="200" height="200" alt="photo de table en bois design"></a>
          <h3>Prix : ${furniture.price / 100} $</h3>
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
    price: meuble.price / 100,
    imageUrl: meuble.imageUrl,
    vernis: selectVarnish.value,
    quantity: parseInt(quantite.value)
  }
  let panier = JSON.parse(localStorage.getItem('cart'));
  if (panier) {
    panier.forEach(meuble => {
      if (meuble._id == newMeuble._id) {
        isMeubleExistInCart = true;
        meuble.quantity = meuble.quantity + newMeuble.quantity;
      }
    })
    if (!isMeubleExistInCart) {
      panier.push(newMeuble);
    }
  } else {
    panier = [];
    panier.push(newMeuble);
  }
  localStorage.setItem('cart', JSON.stringify(panier))
  window.location.reload();
}



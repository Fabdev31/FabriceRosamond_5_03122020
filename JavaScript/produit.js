const headers = new Headers({
  "Content-type": "application/json"
});
//
const params = window.location.search;
const id = params.substring(params.indexOf('id=')+3, 28);

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
          <figcaption>${furniture.name}</figcaption>
          <a href="produit.html?id=${furniture._id}"><img src="${furniture.imageUrl}" 
          width="60" height="60" alt="photo de table en bois design"></a>
          <h3>${furniture.price/1000} $</h3>
        </figure>
    </div>
</div>`
})
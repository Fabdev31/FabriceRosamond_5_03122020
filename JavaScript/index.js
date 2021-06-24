const headers = new Headers({
  "Content-type": "application/json"
});

fetch('http://localhost:3000/api/furniture')
.then((response) => {
  return response.json();
})
.then((furnitures) =>{
  for(const furniture of furnitures){
    console.log(furniture)
  } 
});

function integrerCatalogueProduit(imageUrl, name, price, varnish){
  const catalogueProduit = document.createElement("figure");
  catalogueProduit.textContent = '<img>${imageUrl}<figcaption> ${name}</figcaption><h5>${price}</h5><p class="finition">${varnish}</p>';
  document.querySelector("#figures").appendChild(figure)
}

integrerCatalogueProduit('../JWDP5/images/oak_1.jpg','Table bois design en chêne', 'prix', 'finition' );
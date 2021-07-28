  let panierHtml = document.querySelector("tbody");
  let panier = JSON.parse(localStorage.getItem("cart"));
  if(panier){
    panier.forEach(meuble => {
      panierHtml.innerHTML +=`
      <tr>
      <th scope="row">1</th>
      <td><img src="${meuble.imageUrl}" width="150px" alt=""></td>
      <td>${meuble.name}</td>
      <td>${meuble.price} € </td>
      <td>${meuble.quantity} </td>
      <td><button class="btn btn-danger" onclick="deleteArticle('${meuble._id}')">Supprimer</button></td>
    </tr>`      
    })
    }else if(panier == null){
      panierHtml.innerHTML = "<tr><td colspan=3><h2>Pas d'article dans le panier </h2></td></tr>"
    }

    function showTotal(){
      let panier = JSON.parse(localStorage.getItem("cart"));
    if(panier){
        let sum=0;
        panier.forEach(meuble => {
            sum = sum + meuble.quantity * meuble.price;
        });
        prixTotal.innerHTML=sum;
    }
    }

function deleteArticle(id){
  let panier = JSON.parse(localStorage.getItem("cart"));
  if(panier){
    const newPanier = panier.filter(article=> article._id !== id);
    localStorage.setItem('cart', JSON.stringify(newPanier));
    window.location.reload();
  }
  
}


showTotal();

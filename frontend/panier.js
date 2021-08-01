  let panierHtml = document.querySelector("tbody");
  let panier = JSON.parse(localStorage.getItem("cart"));
  if(panier){
    panier.forEach(meuble => {
      panierHtml.innerHTML +=`
      <tr>
      <th scope="row">1</th>
      <td><img src="${meuble.imageUrl}" width="150px" alt=""></td>
      <td>${meuble.name}</td>
      <td class="">${meuble.price} € </td>
      <td class="bg-light pl-5">${meuble.quantity} </td>
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

let form = document.querySelector("#loginForm");

//Ecouter la modification de l'email
form.email.addEventListener("change", function(){
    validEmail(this);
});

//Ecouter la modification du Prénom
form.firstName.addEventListener("change", function(){
    validFirstName(this);
});

//Ecouter la modification du Nom
form.lastName.addEventListener("change", function(){
    validLastName(this);
});

//Ecouter la modification de l'adresse
form.address.addEventListener("change", function(){
    validAddress(this);
});

//Ecouter la modification de la ville
form.city.addEventListener("change", function(){
    validCity(this);
});

// Ecouter la soumission du formulaire
form.addEventListener("submit", function(e) {
    e.preventDefault();
    if(validEmail(form.email) 
    && validFirstName(form.firstName) && validLastName(form.lastName)
    && validAddress(form.address) && validCity(form.city) && panier.length >0){
      let contact={
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value
      };

      let products=[];
      panier.forEach(meuble =>{
        products.push(meuble._id);
      })
      let customerOrder = JSON.stringify({
        contact,
        products
      })
      // console.log(customerOrder);
      fetch('http://localhost:3000/api/furniture/order',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:customerOrder
      })
        .then((response) => {
          return response.json();
        }).then(serverResponse =>{
          const summaryOrder= {
            orderId : serverResponse.orderId,
            totalPrice : prixTotal.textContent
          }
          localStorage.setItem('summary', JSON.stringify(summaryOrder));
          console.log(serverResponse);
        }) 

        form.submit;
        window.location="confirmation.html";
    }
});

// ******** Validation email******

const validEmail = function(inputEmail) {
    //creation de la regExp pour validation email
        let emailRegexp = new RegExp(
            '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
        );
    
    //Récupération de la balise small
        let small = inputEmail.nextElementSibling;
    //On teste l'expression régulière
        if (emailRegexp.test(inputEmail.value)) {
            small.innerHTML = "Email Valide";
            small.classList.remove('text-danger');
            small.classList.add('text-success');
            return true;
        }
        else {
            small.innerHTML = "Email Non Valide";
            small.classList.remove('text-success');
            small.classList.add('text-danger');
            return false;
        }
    };



// ******** Validation Prénom******

const validFirstName = function(inputFirstName){
let msg;
let valid = false;
//regExp pour validation Prénom
if(
    !/^[A-Z]{1}[a-z'-]+/.test(inputFirstName.value)){
        msg = "Le format du Prénom n'est pas valide";
    }
    //Mot de passe validé
    else{
        msg = 'Le Prénom est validé';
        valid = true;
    }
    

//Récupération de la balise small
let small = inputFirstName.nextElementSibling;

// On teste l'expression régulière
if (valid) {
    small.innerHTML = "Prénom Valide";
    small.classList.remove('text-danger');
    small.classList.add('text-success');
    return true;
}
else {
    small.innerHTML = "Prénom non Valide";
    small.classList.remove('text-success');
    small.classList.add('text-danger');
    return false;
}
};


// ******** Validation Nom******

const validLastName = function(inputLastName){
    let msg;
    let valid=false;
    
    //Au moins 2 caracteres
    
    if(inputLastName.value.length <2){
        msg= 'Le Nom doit contenir au moins 2 caractères';
    }
    
    else if(!/[A-Z]/.test(inputLastName.value)){
        msg= 'Le Nom doit être en majuscule';
    }
    //Tout en Majuscule
    else if(/[a-z]/.test(inputLastName.value)){
        msg= 'Le Nom doit être en lettres capitales';
    }
    // Mot de passe valide
    else{
        msg = 'Le mot de passe est validé';
        valid = true;
    }
    
    //Récupération de la balise small
    let small = inputLastName.nextElementSibling;
    
    // On teste l'expression régulière
    if (valid) {
        small.innerHTML = "Nom Valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }
    else {
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
    };

// ******** Validation Adresse******
const validAddress = function(inputAddress){

    //creation de la regex pour validation du nom de la ville
    //let addressRegexp = new RegExp(
        //"^[1-9]|^[1-9][0-9]|^(100){1}[,][ a-z]+", "g"
   // );
   let msg;
   let valid = false;
   
   if(
    !/^[0-9]+[,][ a-z]+/.test(inputAddress.value)){
        msg = "Le format d'adresse n'est pas valide";
   }
   else {
       msg = "Adresse valide";
       valid = true;
   }
    //Récupération de la balise small
    let small = inputAddress.nextElementSibling;
    
    // On teste l'expression régulière
    if (valid) {
        small.innerHTML = "Adresse Valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }
    else {
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
    };

// ******** Validation Ville******
const validCity = function(inputCity){
    let msg;
    let valid=false;
    
    //Au moins 2 caracteres
    
    if(inputCity.value.length <2){
        msg= 'La ville doit contenir au moins 2 caractères';
    }
     //Tout en Majuscule
     else if(!/[A-Z -']$/.test(inputCity.value)){
        msg= 'Caractères non autorisés';
    }
    // Mot de passe valide
    else{
        msg = 'Le mot de passe est validé';
        valid = true;
    }
    
    //Récupération de la balise small
    let small = inputCity.nextElementSibling;
    
    // On teste l'expression régulière
    if (valid) {
        small.innerHTML = "Nom  de ville Valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }
    else {
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
    };

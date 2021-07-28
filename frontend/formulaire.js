let form = document.querySelector("#loginForm");

//Ecouter la modification de l'email
form.email.addEventListener("change", function(){
    validEmail(this);
});

//Ecouter la modification du password
form.password.addEventListener("change", function(){
    validPassword(this);
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
            small.innerHTML = "Adresse Valide"
            small.classList.remove('text-danger');
            small.classList.add('text-success');
            return true;
        }
        else {
            small.innerHTML = "Adresse Non Valide"
            small.classList.remove('text-success');
            small.classList.add('text-danger');
            return false;
        }
    };

// ******** Validation password******

const validPassword = function(inputPassword) {
    let msg;
    let valid = false;

//Au moins 3 caractères
if(inputPassword.value.length < 3) {
msg=  'Le mot de passe doit contenir au moins 3 caractères';  
} 
// Au moins 1 Maj
else if(!/[A-Z]/.test(inputPassword.value)) {
    msg = 'Le mot de passe doit contenir au moins 1 majuscule';
}

// Au moins 1 min 

else if(!/[a-z]/.test(inputPassword.value)) {
    msg = 'Le mot de passe doit contenir au moins 1 minuscule';
}
// Au moins 1 chiffre 
else if(!/[0-9]/.test(inputPassword.value)) {
    msg = 'Le mot de passe doit contenir au moins 1 chiffre';
}
// Mot de passe Valide 
else{
    msg = 'Le mot de passe est Valide';
    valid = true;
}
//Affichage
//Récupération de la balise small
let small = inputPassword.nextElementSibling;

//On teste l'expression régulière
    if (valid) {
        small.innerHTML = 'Mot de passe Valide';
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

// ******** Validation Prénom******

const validFirstName = function(inputFirstName){
let msg;
let valid=false;

//Au moins 2 caracteres

if(inputFirstName.value.length <2){
    msg= 'Le Prénom doit contenir au moins 2 caractères';
}

//creation de la regex pour validation prenom
let firstNameRegex = new RegExp(
    '^[A-Z][a-z]*$',
);

//Récupération de la balise small
let small = inputFirstName.nextElementSibling;

// On teste l'expression régulière
if (firstNameRegex.test(inputFirstName.value)) {
    small.innerHTML = "Prénom Valide"
    small.classList.remove('text-danger');
    small.classList.add('text-success');
    return true;
}
else {
    small.innerHTML = "Prénom Non Valide"
    small.classList.remove('text-success');
    small.classList.add('text-danger');
    return false;
}
};


// ******** Validation Nom******

const validLasttName = function(inputLastName){
    let msg;
    let valid=false;
    
    //Au moins 2 caracteres
    
    if(inputLastName.value.length <2){
        msg= 'Le Nom doit contenir au moins 2 caractères';
    }
    
    //creation de la regex pour validation du Nom
    let lastNameRegex = new RegExp(
        '^[A-Z][a-z]*$',
    );
    
    //Récupération de la balise small
    let small = inputLastName.nextElementSibling;
    
    // On teste l'expression régulière
    if (lastNameRegex.test(inputLastName.value)) {
        small.innerHTML = "Nom Valide"
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }
    else {
        small.innerHTML = "Nom Non Valide"
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
    };

// ******** Validation Adresse******
const validAddress = function(inputAddress){
    let msg;
    let valid=false;
    
    //Au moins 2 caracteres
    
    if(inputAddress.value.length <2){
        msg= 'La ville doit contenir au moins 2 caractères';
    }
    
    //creation de la regex pour validation du nom de la ville
    let addressRegex = new RegExp(
        '^[A-Z][a-z]*$',
    );
    
    //Récupération de la balise small
    let small = inputAddress.nextElementSibling;
    
    // On teste l'expression régulière
    if (addressRegex.test(inputAddress.value)) {
        small.innerHTML = "Nom  de ville Valide"
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }
    else {
        small.innerHTML = "Nom de ville Non Valide"
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
    
    //creation de la regex pour validation du nom de la ville
    let cityRegex = new RegExp(
        '^[A-Z][a-z]*$',
    );
    
    //Récupération de la balise small
    let small = inputCity.nextElementSibling;
    
    // On teste l'expression régulière
    if (cityRegex.test(inputCity.value)) {
        small.innerHTML = "Nom  de ville Valide"
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }
    else {
        small.innerHTML = "Nom de ville Non Valide"
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
    };
const productNumber = document.getElementById("product-number");
function showQuantity(){
    let panier = JSON.parse(localStorage.getItem("cart"));
    console.log(panier);
    if(panier){
        let sum=0;
        panier.forEach(meuble => {
            sum = sum + meuble.quantity;
        });
        productNumber.textContent=sum;
    
    }
}
showQuantity();

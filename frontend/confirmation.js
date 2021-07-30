let resumeOrder = JSON.parse(localStorage.getItem("summary"));
if(resumeOrder){
    numCommande.textContent=resumeOrder.orderId;
    totalCommande.textContent=resumeOrder.totalPrice;
}
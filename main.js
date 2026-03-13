function getTotal() {

    const ticketPrice = 200;
    const adminFee = 50;

    let quantity = document.getElementById("price").value;

    let subtotal = quantity * ticketPrice;
    let total = subtotal + adminFee;

    document.getElementById("subtotal").value = subtotal;
    document.getElementById("total").value = total;
}

function completeRegistration() {

    let name = document.getElementById("full_name").value;

    alert("thank you" + name + "SEE YOU THERE");
    
    location.reload();
    
}


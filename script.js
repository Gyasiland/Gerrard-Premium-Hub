document.getElementById("orderForm")
.addEventListener("submit",function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const phone =
document.getElementById("phone").value;

const snapUser =
document.getElementById("snapUser").value;

const service =
document.getElementById("service").value;

const notes =
document.getElementById("notes").value;

const message =
`🔥 NEW ORDER 🔥

Name: ${name}

Customer WhatsApp: ${phone}

Snapchat Username: ${snapUser}

Service Ordered: ${service}

Additional Details:
${notes}`;

const whatsappURL =
`https://wa.me/233598371200?text=${encodeURIComponent(message)}`;

window.open(whatsappURL,"_blank");

});
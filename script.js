document.getElementById("orderForm").addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const service = document.getElementById("service").value;
const notes = document.getElementById("notes").value;

const message =
`NEW ORDER

Name: ${name}

Phone: ${phone}

Service: ${service}

Details: ${notes}`;

window.open(
`https://wa.me/233598371200?text=${encodeURIComponent(message)}`,
"_blank"
);

});

var homebutton = document.getElementById("home");

home.onclick = () => {
    location.href = "./index.html";
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

var whatsappb = document.getElementById("whatsappcontact")

whatsappb.onclick = () => {
    location.href = "https://api.whatsapp.com/send?phone=918769069363";
}

var emailb = document.getElementById("emailcontact")

emailb.onclick = () => {
    location.href = action = "mailto:aditsarda4@gmail.com?Subject=Window Zone Inquiry"
    method = "POST"
    enctype = "text/plain";
}
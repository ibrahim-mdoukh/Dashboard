
// dark mood

let btn = document.getElementById("btnDark");

btn.onclick = function(){
    document.body.classList.toggle("dark");
}

// imgProfle .sub-menu-links 

var img = document.getElementById("imgProfile");
var menuLink = document.getElementById("menuLink");
var overlay = document.querySelector(".overlay")
img.addEventListener("click", openMenu)
overlay.addEventListener("click", openMenu)

function openMenu(){
    menuLink.classList.toggle("open-menu");
    overlay.classList.toggle("active");
}

// Notification sub-menu-wrap-g  
// جرس
var graas = document.getElementById("graas");
var notificationMenu = document.getElementById("notificationMenu");
var overlay2 = document.querySelector(".overlay2");
graas.addEventListener("click", opennotificationMenu);
overlay2.addEventListener("click", opennotificationMenu)
function opennotificationMenu(){
    notificationMenu.classList.toggle("open-menu");
    overlay2.classList.toggle("active");
}
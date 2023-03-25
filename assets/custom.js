// JavaScript
window.addEventListener("scroll", function(){
    var nav = document.getElementById("navbarId");
    if(window.pageYOffset > 0){
        nav.classList.add("shadow-nav");
    }else{
        nav.classList.remove("shadow-nav");
    }
});

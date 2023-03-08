var el =  document.getElementById("opacity");
function openNav() {
    document.getElementById("mySidenav").style.left = "0";
    document.getElementById("myCatalog").style.top = "-80%";
    document.getElementById("opacity").style.zIndex = "4";
    document.getElementById("opacity").style.borderColor = "black";
    document.getElementById("opacity").style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-20%";
    document.getElementById("opacity").style.zIndex = "-2";
    document.getElementById("opacity").style.backgroundColor = "rgba(0,0,0,0.0)";
}
function openCat() {
    document.getElementById("myCatalog").style.top = "62px";
    document.getElementById("mySidenav").style.left = "-20%";
    document.getElementById("opacity").style.zIndex = "4";
    document.getElementById("opacity").style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeCat() {
    document.getElementById("myCatalog").style.top = "-80%";
    document.getElementById("opacity").style.zIndex = "-2";
    document.getElementById("opacity").style.backgroundColor = "rgba(0,0,0,0.0)";
}
    
var slideIndex = 1;
showSlides(slideIndex);
      
function prevSlides(n) {
    showSlides(slideIndex += (n - 1));
    document.getElementById("picture1").style.zIndex = "-1";
}

function nextSlides() {
    showSlides(slideIndex + 1);
    document.getElementById("picture1").style.zIndex = "-1";
}
      
function currentSlide(n) {
    showSlides(slideIndex = n);
    document.getElementById("picture1").style.zIndex = "-1";
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    } 
    if (slideIndex < 1) {
        slideIndex = 4
      } 
    slides[slideIndex-1].style.display = "block";
}
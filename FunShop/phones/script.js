var el =  document.getElementById("opacity");
function openNav() {
    document.getElementById("mySidenav").style.left = "0";
    document.getElementById("myCatalog").style.top = "-80%";
    document.getElementById("opacity").style.zIndex = "2";
    document.getElementById("opacity").style.borderColor = "black";
    document.getElementById("opacity").style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-20%";
    document.getElementById("opacity").style.zIndex = "-1";
    document.getElementById("opacity").style.backgroundColor = "white";
}
function openCat() {
    document.getElementById("myCatalog").style.top = "62px";
    document.getElementById("mySidenav").style.left = "-20%";
    document.getElementById("opacity").style.zIndex = "2";
    document.getElementById("opacity").style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeCat() {
    document.getElementById("myCatalog").style.top = "-80%";
    document.getElementById("opacity").style.zIndex = "-1";
    document.getElementById("opacity").style.backgroundColor = "white";
}
function range(){
    var val = $('.range').val();
    $('.range').css({'background':'-webkit-linear-gradient(left, #47ef05 0%, #47ef05'+val+'%, #185600'+val+'%, #185600 100%)'});
}
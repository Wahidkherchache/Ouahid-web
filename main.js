let thehead = document.querySelector(".outher");
let thehadbotton = document.querySelector("#outerlinks");
let clos = document.getElementById("close");
thehadbotton.onclick = function() {
    if(thehead.style.display === "none"){
        thehead.style.display = "block";
    }else{
            thehead.style.display = "none";
    }
}
clos.onclick = function() {
    thehead.style.display = "none";
}

let thehead = document.querySelector(".outher");
let thehadbotton = document.querySelector("#outerlinks");

thehadbotton.onclick = function() {
    if(thehead.style.display === "none"){
        thehead.style.display = "block";
    }else{
            thehead.style.display = "none";
    }
}
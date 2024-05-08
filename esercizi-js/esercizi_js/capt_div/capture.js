"use strict";
let bgWhite = true;
let refreshInterval = 1000;
let interval;

let cDiv = document.getElementById("capture-me");
cDiv.addEventListener("click", function() {
    alert("Hai vinto!");
    refreshInterval /= 2;
    clearInterval(interval);
    interval = setInterval(refresh, refreshInterval);
});

function refresh() {
    let randTop = parseInt(Math.random() * window.innerHeight);
    let randLeft = parseInt(Math.random() * window.innerWidth);
    let body = document.getElementsByTagName("body")[0];

    cDiv.style.marginTop = randTop + "px";
    cDiv.style.marginLeft = randLeft + "px";



    if (bgWhite) {
        body.style.backgroundColor = "black";
        cDiv.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "white";
        cDiv.style.backgroundColor = "black";
    }

    // body.style.backgroundColor =  bgWhite ? "black" : "white";
    bgWhite = !bgWhite;
}

interval = setInterval(refresh, refreshInterval);

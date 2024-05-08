"use strict";

// add an element to the list

let freddyPictures = ['freddy1.jpg', 'freddy2.jpg', 'freddy3.jpg', 'freddy4.jpg'];
let picIndex = 0;
let img = document.querySelectorAll("img")[0];

function changePicture() {
    img.setAttribute("src", freddyPictures[picIndex]);
    picIndex = (picIndex + 1) % freddyPictures.length;
}

function addElement() {
    let otherThings = ["go to the gym", "read a book", "go for a walk", "learn something new"];
    let list = document.getElementById("list");
    let item = document.createElement("li");
    let randomThing = otherThings[Math.floor(Math.random() * otherThings.length)];
    let text = document.createTextNode(randomThing); 
    item.appendChild(text);
    list.appendChild(item);
    changePicture();
}

document.getElementById("what-else").addEventListener("click", addElement);
let divs = document.getElementsByTagName("div");


let color = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
  
document.querySelector("div").addEventListener("click", function () {
            document.querySelector("div").style.background 
                = color[Math.floor(Math.random() * color.length)];
        });

// https://www.geeksforgeeks.org/how-to-change-background-color-of-a-div-on-mouse-move-over-using-javascript/

//  funksjon som endrer farge og størrelse på divs

function changeColor() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.background = "blue";
        divs[i].style.width = "150px";
        divs[i].style.height = "150px";
    }
}

changeColor();
let divs = document.getElementsByTagName("div");


// function changeSizeAndColor() {
//     divs.style.color = "blue";
    
// };

// changeSizeAndColor();

let color = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
  
document.querySelector("div").addEventListener("mouseover", function () {
            document.querySelector("div").style.background 
                = color[Math.floor(Math.random() * color.length)];
        });

// https://www.geeksforgeeks.org/how-to-change-background-color-of-a-div-on-mouse-move-over-using-javascript/

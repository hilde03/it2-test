let divs = document.getElementsByTagName("div");


let color = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
  
document.querySelector("div").addEventListener("click", function () {
            document.querySelector("div").style.background = color[Math.floor(Math.random() * color.length)];
            document.querySelector("div").style.width = 150 + Math.floor(Math.random() * 300) + "px";
            document.querySelector("div").style.height = 150 + Math.floor(Math.random() * 300) + "px";
        });


// https://www.geeksforgeeks.org/how-to-change-background-color-of-a-div-on-mouse-move-over-using-javascript/

// får bare til å endre fargen og størrelsen på den første

// divs.addEventListener("mouseover", function () {
//             divs.style.background = color[Math.floor(Math.random() * color.length)];
//             divs.style.width = 150 + Math.floor(Math.random() * 300) + "px";
//             divs.style.height = 150 + Math.floor(Math.random() * 300) + "px";
//         });


// lagde først funksjonen uten parametere, så derfor den er kommentert ut
// function changeColor() {
    //     for (let i = 0; i < divs.length; i++) {
        //         divs[i].style.background = "blue";
        //         divs[i].style.width = "150px";
        //         divs[i].style.height = "150px";
        //     }
        // }
        
        // changeColor();
        
//  funksjon som endrer farge og størrelse på divs

function changeColor(color, width, height) {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.background = color;
        divs[i].style.width = width;
        divs[i].style.height = height;
    }
}

changeColor("purple", "150px", "150px");

// https://www.codegrepper.com/code-examples/javascript/change+color+of+element+javascript
// https://stackoverflow.com/questions/41929976/change-elements-background-color-in-javascript
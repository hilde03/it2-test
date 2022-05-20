let hddBtn = document.getElementById("hddBtn");
let ssdBtn = document.getElementById("ssdBtn");
let nvmeBtn = document.getElementById("nvmeBtn");

let infoDiv = document.getElementById("infoDiv");

hddBtn.addEventListener("click", function() {
    infoDiv.innerHTML = "lorem ipsum";
    let hddImg = document.createElement("img");
    hddImg.src = "bilder/hdd.png";
    infoDiv.appendChild(hddImg);
});

ssdBtn.addEventListener("click", function() {
    infoDiv.innerHTML = "lorem ipsum";
    let ssdImg = document.createElement("img");
    ssdImg.src = "bilder/ssd.png";
    infoDiv.appendChild(ssdImg);

});

nvmeBtn.addEventListener("click", function() {
    infoDiv.innerHTML = "lorem ipsum";
    let nvmeImg = document.createElement("img");
    nvmeImg.src = "bilder/nvme.png";
    infoDiv.appendChild(nvmeImg);
});

// https://moonbooks.org/Articles/How-to-add-an-image-in-a-HTML-page-using-javascript-/ (for å legge inn bildene)
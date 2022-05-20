let hddDiv = document.getElementById("hddDiv");
let ssdDiv = document.getElementById("ssdDiv");
let nvmeDiv = document.getElementById("nvmeDiv");

let infoDiv = document.getElementById("infoDiv");

hddDiv.addEventListener("click", function() {
    infoDiv.innerHTML = "lorem ipsum";
    let hddImg = document.createElement("img");
    hddImg.src = "bilder/hdd.png";
    infoDiv.appendChild(hddImg);
});

ssdDiv.addEventListener("click", function() {
    infoDiv.innerHTML = "lorem ipsum";
    let ssdImg = document.createElement("img");
    ssdImg.src = "bilder/ssd.png";
    infoDiv.appendChild(ssdImg);

});

nvmeDiv.addEventListener("click", function() {
    infoDiv.innerHTML = "lorem ipsum";
    let nvmeImg = document.createElement("img");
    nvmeImg.src = "bilder/nvme.png";
    infoDiv.appendChild(nvmeImg);
});

// https://moonbooks.org/Articles/How-to-add-an-image-in-a-HTML-page-using-javascript-/ (for å legge inn bildene)
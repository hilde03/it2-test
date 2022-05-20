let hddBtn = document.getElementById("hddBtn");
let ssdBtn = document.getElementById("ssdBtn");
let nvmeBtn = document.getElementById("nvmeBtn");

let infoDiv = document.getElementById("infoDiv");

hddBtn.addEventListener("click", function() {
    infoDiv.innerHTML = "";
    let hddDiv = document.createElement("div");
    infoDiv.appendChild(hddDiv);
    hddDiv.innerHTML = "Harddisk: " + "500 GB";
});

ssdBtn.addEventListener("click", function() {
    infoDiv.innerHTML = "lorem ipsum";
    let ssdImg = document.createElement("img");
    ssdImg.src = "bilder/ssd.png";
    infoDiv.appendChild(ssdImg);

});


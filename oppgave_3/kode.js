let hddDiv = document.getElementById("hddDiv");
let ssdDiv = document.getElementById("ssdDiv");
let nvmeDiv = document.getElementById("nvmeDiv");

let infoDiv = document.getElementById("infoDiv");

hddDiv.addEventListener("click", function() {
    infoDiv.innerHTML = "Platelager (engelsk harddisk, forkortet HD, eller hard disk drive, HDD) er et lagringsmedium for binært kodet informasjon på hurtig roterende platelagerskiver.";
    // https://no.wikipedia.org/wiki/Platelager
    let hddImg = document.createElement("img");
    hddImg.src = "bilder/hdd.png";
    infoDiv.appendChild(hddImg);
});

ssdDiv.addEventListener("click", function() {
    infoDiv.innerHTML = 'SSD (Solid state drive) er et lagringsmedium som benytter flashminne istedenfor mekanisk/magnetiske plater til å lagre data.';
    // https://no.wikipedia.org/wiki/Solid_state_drive
    let ssdImg = document.createElement("img");
    ssdImg.src = "bilder/ssd.png";
    infoDiv.appendChild(ssdImg);
});

nvmeDiv.addEventListener("click", function() {
    infoDiv.innerHTML = "NVMe (nonvolatile memory express) er en ny lagringstilgang og transportprotokoll for flash og neste generasjons solid-state-stasjoner (SSD-er) som leverer den høyeste gjennomstrømningen og raskeste responstidene ennå for alle typer bedriftsarbeidsbelastninger.";
    // https://www.netapp.com/data-storage/nvme/what-is-nvme/
    let nvmeImg = document.createElement("img");
    nvmeImg.src = "bilder/nvme.png";
    infoDiv.appendChild(nvmeImg);
});

// https://moonbooks.org/Articles/How-to-add-an-image-in-a-HTML-page-using-javascript-/ (for å legge inn bildene)


hddDiv.addEventListener("click", changeText);

function changeText() {
    div.innerHTML = "lorem ipsum";
};

// har dønn brukt over en time på å prøve å få koden til å funke uten at jeg skjønte hvorfor den ikke gjorde, så så jeg at jeg hadde glemt å linke til js:(
// så kvaliteten på denne oppgaven blir ikke helt optimal akkurat
// blir så oppgitt:/
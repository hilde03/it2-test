let locationInput = document.getElementById("locationDrop");
let weekInput = document.getElementById("weekInput");
let dayInput = document.getElementById("dayInput");
let rainInput = document.getElementById("rainInput");
let tempHighInput = document.getElementById("tempHighInput");
let tempLowInput = document.getElementById("tempLowInput");
let submitBtn = document.getElementById("submitBtn");

let weather = {
    "navn" : "Verstasjon",
    "versjon" : "1.0", 
    "verdataBergen" : 
    [
        {"id" : "Bergen","veke" : 1,"dag": 1,"nedbørsmengde" :  89, "temperaturHigh" :  8, "temperaturLow" :  4}, 
        {"id" : "Bergen","veke" : 1,"dag": 2,"nedbørsmengde" : 129, "temperaturHigh" :  7, "temperaturLow" :  3}, 
        {"id" : "Bergen","veke" : 1,"dag": 3,"nedbørsmengde" :  33, "temperaturHigh" :  6, "temperaturLow" :  4},
        {"id" : "Bergen","veke" : 1,"dag": 4,"nedbørsmengde" :   2, "temperaturHigh" :  2, "temperaturLow" :  1}, 
        {"id" : "Bergen","veke" : 1,"dag": 5,"nedbørsmengde" :   0, "temperaturHigh" :  1, "temperaturLow" :  0}, 
        {"id" : "Bergen","veke" : 1,"dag": 6,"nedbørsmengde" :   0, "temperaturHigh" :  0, "temperaturLow" : -1},
        {"id" : "Bergen","veke" : 1,"dag": 7,"nedbørsmengde" :   0, "temperaturHigh" : -2, "temperaturLow" : -3}, 
        {"id" : "Bergen","veke" : 2,"dag": 1,"nedbørsmengde" :   0, "temperaturHigh" : -5, "temperaturLow" : -9}, 
            {"id" : "Bergen","veke" : 2,"dag": 2,"nedbørsmengde" :   0, "temperaturHigh" : -2, "temperaturLow" : -3},
            {"id" : "Bergen","veke" : 2,"dag": 3,"nedbørsmengde" :  29, "temperaturHigh" :  5, "temperaturLow" :  3}, 
            {"id" : "Bergen","veke" : 2,"dag": 4,"nedbørsmengde" : 109, "temperaturHigh" :  7, "temperaturLow" :  4}, 
            {"id" : "Bergen","veke" : 2,"dag": 5,"nedbørsmengde" :  32, "temperaturHigh" : 10, "temperaturLow" :  8},
            {"id" : "Bergen","veke" : 2,"dag": 6,"nedbørsmengde" :  44, "temperaturHigh" :  7, "temperaturLow" :  5}, 
            {"id" : "Bergen","veke" : 2,"dag": 7,"nedbørsmengde" : 149, "temperaturHigh" :  8, "temperaturLow" :  2}
            // Mønsteret fortsetter videre her ...
        ],
        "verdataVoss" : 
        [
            {"id" : "Voss","veke" : 1,"dag": 1,"nedbørsmengde" :   0, "temperaturHigh" :  0, "temperaturLow" : -2}, 
            {"id" : "Voss","veke" : 1,"dag": 2,"nedbørsmengde" :   0, "temperaturHigh" : -3, "temperaturLow" : -5}, 
            {"id" : "Voss","veke" : 1,"dag": 3,"nedbørsmengde" :   0, "temperaturHigh" : -7, "temperaturLow" : -9},
            {"id" : "Voss","veke" : 1,"dag": 4,"nedbørsmengde" :   2, "temperaturHigh" :  1, "temperaturLow" : -2}, 
            {"id" : "Voss","veke" : 1,"dag": 5,"nedbørsmengde" :   3, "temperaturHigh" :  2, "temperaturLow" :  1}, 
            {"id" : "Voss","veke" : 1,"dag": 6,"nedbørsmengde" :   5, "temperaturHigh" :  2, "temperaturLow" :  0},
            {"id" : "Voss","veke" : 1,"dag": 7,"nedbørsmengde" :  10, "temperaturHigh" :  4, "temperaturLow" :  2}, 
            {"id" : "Voss","veke" : 2,"dag": 1,"nedbørsmengde" :  20, "temperaturHigh" :  4, "temperaturLow" :  0}, 
            {"id" : "Voss","veke" : 2,"dag": 2,"nedbørsmengde" :  25, "temperaturHigh" :  5, "temperaturLow" :  2},
            {"id" : "Voss","veke" : 2,"dag": 3,"nedbørsmengde" :  66, "temperaturHigh" :  7, "temperaturLow" :  3}, 
            {"id" : "Voss","veke" : 2,"dag": 4,"nedbørsmengde" :  34, "temperaturHigh" :  5, "temperaturLow" :  2}, 
            {"id" : "Voss","veke" : 2,"dag": 5,"nedbørsmengde" :  33, "temperaturHigh" :  4, "temperaturLow" :  1},
            {"id" : "Voss","veke" : 2,"dag": 6,"nedbørsmengde" :  89, "temperaturHigh" :  8, "temperaturLow" :  5}, 
            {"id" : "Voss","veke" : 2,"dag": 7,"nedbørsmengde" : 209, "temperaturHigh" : 12, "temperaturLow" :  9}
            // Mønsteret fortsetter videre her ...
        ] 
    };

    let testData = [];

    let newData = {
        "id" : locationInput.value, "veke": weekInput.value, "dag": dayInput.value, "nedbørsmengde": rainInput.value, "temperaturHigh": tempHighInput.value, "temperaturLow": tempLowInput.value
    };

    submitBtn.addEventListener("click", function() {
        testData.push(newData);
        console.log(testData);
        
        // weather.push(newData);
        // console.log(weather);
        // klarer å logge testDataen, men får ikke til å legge data inn i hoved-arrayen
    });

// funksjon som viser høyeste temperatur fra bergen og voss

function displayHighestTemperature(weather) {
    let max = 0;
    let maxId = "";
    for (let i = 0; i < weather.length; i++) {
        if (weather[i].temperaturHigh > max) {
            max = weather[i].temperaturHigh;
            maxId = weather[i].id;
        }
    }
    console.log("Stedet med høyeste temperatur er " + maxId + " med " + max + " grader.");
}

displayHighestTemperature(weather.verdataBergen);
displayHighestTemperature(weather.verdataVoss);

// funksjon som viser laveste temperatur fra bergen og voss

function displayLowestTemperature(weather) {
    let min = 100;
    let minId = "";
    for (let i = 0; i < weather.length; i++) {
        if (weather[i].temperaturLow < min) {
            min = weather[i].temperaturLow;
            minId = weather[i].id;
        }
    }
    console.log("Stedet med laveste temperatur er " + minId + " med " + min + " grader.");
}

displayLowestTemperature(weather.verdataBergen);
displayLowestTemperature(weather.verdataVoss);
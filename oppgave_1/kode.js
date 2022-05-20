let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let submitBtn = document.getElementById("submitBtn");
let mailOutput = document.getElementById("mailOutput");



// prøver å sjekke om det innehodler æ, å, ø
if (firstNameInput.value === "æ" || lastNameInput.value === "æ") {
    firstNameInput.value = "ae";
    lastNameInput.value = "ae";
} else if (firstNameInput.value === "ø" || lastNameInput.value === "ø") {
    firstNameInput.value = "oe";
    lastNameInput.value = "oe";
} else if (firstNameInput.value === "å" || lastNameInput.value === "å") {
    firstNameInput.value = "aa";
    lastNameInput.value = "aa";
} else if (firstNameInput.value === "@" || lastNameInput.value === "@") {
    alert("@ er ikke lov!");
}
    
// lager mail når man trykker på knappen
submitBtn.addEventListener("click", function() {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let mail = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@it2.no";
    let divBox = document.createElement("div");
    mailOutput.appendChild(divBox);
    divBox.innerHTML = mail;
});





// submitBtn.addEventListener("click", function () {
//     let mail = firstNameInput.value + "." + lastNameInput.value;
//     let divBox = document.createElement("div");
//     let bookEntry = {firstName: firstNameInput.value, lastName: lastNameInput.value};
//     books.push(bookEntry);
//     divBox.innerHTML = mail;
//     mailOutput.appendChild(divBox);
//     firstNameInput.value = "";
//     lastNameInput.value = "";
//     console.log(mail);
// });
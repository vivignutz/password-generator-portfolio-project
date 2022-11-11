//** take the input id="slider" */

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value");
let generatedPassword = document.querySelector("#generated-password");

let containerPassword = document.querySelector("#container-password");
 
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?@€$&#*ß";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {

    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    password.innerHTML = pass;
    containerPassword.classList.remove("hide");
    newPassword = pass; 
}

function copyPassword() {
    alert("Password successfull copied!"); 
    navigator.clipboard.writeText(newPassword);
}



let user = localStorage.getItem("data user");

let objetUser = JSON.parse(user);
const testMail = document.getElementById("email");
testMail.value = objetUser["nom"];
const testPassword = document.getElementById("password");
testPassword.value = objetUser["mdp"];


let email = document.getElementById("email");
let password = document.getElementById("password");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let btn = document.getElementById("form");


btn.addEventListener("submit", validateForm);

function validateForm(e){
    let emailValid = checkIfEmailIsValid();
    let passwordValid = checkIfPasswordIsValid();
    let formValid = emailValid && passwordValid;

    if(formValid == false){
        e.preventDefault();
    }else {
        const date = new Date();
        const myDate = {
            day: date.getDate(),
            month: date.getMonth()+1,
            year: date.getFullYear()
        }

        userDate = localStorage.setItem("user date", JSON.stringify(myDate));

        const myTime = {
            hours: date.getHours(),
            minutes: date.getMinutes()
        }

        userTime = localStorage.setItem("user time", JSON.stringify(myTime));
    }
 }


function checkIfEmailIsValid(){
    if(email.value = testMail.value){
        return true;
    } else{
        emailError.style.display = "block";
        email.style.borderColor = "red";
        return false;
    }
}

function checkIfPasswordIsValid(){
    if(password.value = testPassword.value){
        return true;
    } else {
        passwordError.style.display = "block";
        password.style.borderColor = "red";
        return false;
    }
}
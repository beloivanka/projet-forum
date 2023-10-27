// let user = localStorage.getItem("data user");
// let objetUser = JSON.parse(user);

const date = new Date();
const myDate = {
    day: date.getDate(),
    month: date.getMonth()+1,
    year: date.getFullYear()
}

const myTime = {
    hours: date.getHours(),
    minutes: date.getMinutes()
}


let i = 1; 
let btnAjouter = document.getElementById("btnAjouter");
let voirBtn = document.querySelector(".btn-voir");
let input = document.getElementById("sujetInput");
let messageSection = document.getElementById("message-field");
let ajoutSection = document.getElementById("ajout-container");
let tableauSection = document.getElementById("table-container");
let sujetSection = document.getElementById("sujet-container");
let newMessageSection = document.getElementById("new-message");

let sujet = document.getElementById("sujet");
let comment = document.getElementById("comment");
let auteur = document.getElementById("auteur");

let btnMessage = document.getElementById("btnMessage");
let inputMessage = document.getElementById("message");
let errorMessage = document.getElementById("errorMessage");
let errorMessageAjout = document.getElementById("errorMessageAjout");


btnAjouter.addEventListener("click", ajouter);

function ajouter(e){  
    if (input.value === ""){
        e.preventDefault()
        errorMessageAjout.classList.add("block");
        input.style.borderColor = "red";
    }else {

        const date = new Date();

        let dateCo = date.toLocaleDateString();
        let timeCo = date.toLocaleTimeString();
        
        let div1 = document.createElement("tr");
        div1.id = "div1";
        document.getElementById("div-parent").appendChild(div1);
    
        let numberDiv = document.createElement("td");
        numberDiv.innerHTML = i++;
        div1.appendChild(numberDiv);
        
        let sujetDiv = document.createElement("td");
        sujetDiv.innerHTML = input.value;
        div1.appendChild(sujetDiv);
        
        let dateDiv = document.createElement("td");
        dateDiv.innerHTML = dateCo + " à " + timeCo;
        div1.appendChild(dateDiv);
        
        let nomDiv = document.createElement("td");
        nomDiv.innerHTML = objetUser["identifiant"];
        div1.appendChild(nomDiv);
    
        let btnDiv = document.createElement("button");
        btnDiv.className = "btn-voir";
        btnDiv.innerHTML = "Voir";
        div1.appendChild(btnDiv);
    
        btnDiv.addEventListener("click", voirClick);
    
        function voirClick (){
            messageSection.classList.add("block-message");
            sujetSection.classList.add("block-stretch");
            ajoutSection.classList.add("none");
            tableauSection.classList.add("none");
        
            sujet.innerHTML = input.value;
            comment.innerHTML = dateCo + " à " + timeCo;
            auteur.innerHTML = objetUser["identifiant"];
        
        }
    }

}


btnMessage.addEventListener("click", sendMessage);

function sendMessage (e) {
    if (inputMessage.value === ""){
        e.preventDefault()
        errorMessage.classList.add("block");
        inputMessage.style.borderColor = "red";
    }else{
        newMessageSection.classList.add("block-stretch");

        const date = new Date();
    
        let dateCo = date.toLocaleDateString();
        let timeCo = date.toLocaleTimeString();
    
        let div2 = document.createElement("tr");
        div2.id = "div2";
        document.getElementById("div-parent2").appendChild(div2);
    
        let sujet2Div = document.createElement("td");
        sujet2Div.innerHTML = inputMessage.value;
        div2.appendChild(sujet2Div);
    
        let nom2Div = document.createElement("td");
        nom2Div.innerHTML = objetUser["identifiant"]+ " le " + dateCo + " à " + timeCo;
        div2.appendChild(nom2Div);
    }
}
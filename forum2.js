let user = localStorage.getItem("data user");
let userDate = localStorage.getItem("user date");
let userTime = localStorage.getItem("user time");

let objetUser = JSON.parse(user);
let userDateInfo = JSON.parse(userDate);
let userTimeInfo = JSON.parse(userTime);

let btnAjouter = document.getElementById("btnAjouter");

btnAjouter.addEventListener("click", ajouter);

function ajouter(){   
    let i = 1; 

    let div1 = document.createElement("tr");
    div1.id = "div1";
    document.getElementById("div-parent").appendChild(div1);

    let numberDiv = document.createElement("td");
    numberDiv.innerHTML = i;
    div1.appendChild(numberDiv);
    
    let input = document.getElementById("sujetInput").value;
    sujet = localStorage.setItem("sujet", input);
    sujet2 = localStorage.getItem("sujet");
    
    let sujetDiv = document.createElement("td");
    sujetDiv.innerHTML = sujet2;
    div1.appendChild(sujetDiv);
    
    let dateDiv = document.createElement("td");
    dateDiv.innerHTML = userDateInfo["day"]+"/"+userDateInfo["month"]+"/"+userDateInfo["year"];
    div1.appendChild(dateDiv);
    
    let nomDiv = document.createElement("td");
    nomDiv.innerHTML = objetUser["identifiant"];
    div1.appendChild(nomDiv);


}

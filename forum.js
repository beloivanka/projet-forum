let user = localStorage.getItem("data user");
let userDate = localStorage.getItem("user date");
let userTime = localStorage.getItem("user time");

let objetUser = JSON.parse(user);
let userDateInfo = JSON.parse(userDate);
let userTimeInfo = JSON.parse(userTime);

let name = document.getElementById("name");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let hours = document.getElementById("heures");
let minutes = document.getElementById("minutes");

name.innerHTML = objetUser["identifiant"];
day.innerHTML = userDateInfo["day"]+"/";
month.innerHTML = userDateInfo["month"]+"/";
year.innerHTML = userDateInfo["year"];

hours.innerHTML = userTimeInfo["hours"]+"h";
minutes.innerHTML = userTimeInfo["minutes"];
/*let username;

document.getElementById("mysumbit").onclick = function(){
    username  = document.getElementById("myinput").value;
    document.getElementById("myh1").textContent  =`hello ${username}`
}
*/
const pi=3.14159;
let radius;
let circumference;

document.getElementById("mysumbit").onclick = function(){
    radius = document.getElementById("myinput").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myh3").textContent = circumference + "cm";
}
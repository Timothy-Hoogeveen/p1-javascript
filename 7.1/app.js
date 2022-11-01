let budget = 100;
let product = prompt("hoeveel kost het product?"); 

let par = document.getElementById("paragraaf");

if (budget > product){
console.log("Ik heb genoeg geld");
par.innerText ="Ik heb genoeg geld";
par.style.color = "green";
}
else{
    console.log("Ik heb te weinig geld");
    par.innerText ="Ik heb te weinig geld";
    par.style.color = "red";
    par.style

}

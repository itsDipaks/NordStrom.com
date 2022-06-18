import { navbar } from "../Components/navbar.js";

document.getElementById("navbar").innerHTML =navbar();
let data=JSON.parse(localStorage.getItem("registrationData"))
console.log(data)

if(data!=undefined){
      document.getElementById("name").innerHTML=data.name
      document.getElementById("create").innerHTML=null;

}


import { navbar } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML =navbar();





document.getElementById("purchese").addEventListener("click",purchease)

function purchease(){

      let btn=document.createElement("button")
      btn.innerText="Purchase items"
document.getElementById("rightside").append(btn)
      
}



let data=JSON.parse(localStorage.getItem("registrationData"))
console.log(data)

if(data!=undefined){
      document.getElementById("name").innerText="Your Account"
     
      document.getElementById("create1").innerText=data.name;
      
      document.getElementById("signupanchor").innerText="Welcome";

      document.getElementById("hello").innerText=data.name;



}
document.getElementById("signout").addEventListener("click",function(){
      signoutf()
})
function  signoutf(){
      console.log("dipak")
      window.location.reload()

      
      localStorage.removeItem("login")
      localStorage.removeItem("registrationData")

}


document.getElementById("create1").addEventListener("click",function(){
      window.location.href="signup1.html"
})
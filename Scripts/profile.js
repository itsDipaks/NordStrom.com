

import { navbarall } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML =navbarall();





document.getElementById("purchese").addEventListener("click",purchease)

function purchease(){

      let btn=document.createElement("button")
      btn.innerText="Purchase items"
document.getElementById("rightside").append(btn)
      
}
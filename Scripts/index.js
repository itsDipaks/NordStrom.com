import { navbar } from "../Components/navbar.js";

document.getElementById("navbar").innerHTML =navbar();

var cartsdata = JSON.parse(localStorage.getItem("cartsdata")) || []
function addtocart_fun(el){

    if(cartsdata!=false){
        
        var check = false
        for(var i=0;i<cartsdata.length;i++){
            if(el.name==cartsdata[i].name){
                check = true
                break;
            }
        }
        if(check){
            alert("This item is already added!")
        }
        else{
            cartsdata.push(el)
            localStorage.setItem("cartsdata",JSON.stringify(cartsdata))
            alert("Item added successfully. ")
        }
    }
    else{
        cartsdata.push(el)
        localStorage.setItem("cartsdata",JSON.stringify(cartsdata))
        alert("Item added successfully. ")
    }        
}
     

let data=JSON.parse(localStorage.getItem("registrationData"))
console.log(data)

if(data!=undefined){
      document.getElementById("name").innerText="Your Account"
     
      document.getElementById("create1").innerText=data.name;
      
      document.getElementById("signupanchor").innerText="Welcome";



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
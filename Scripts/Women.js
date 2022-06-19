import { navbar } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML =navbar();


import { footer } from "../Components/footer.js";

document.getElementById("footer").innerHTML =footer();








var mensproductdata = [

      {
          name: "Studio Lite Crop Leggings",
          imageurl: "https://n.nordstrommedia.com/id/sr3/7195dc48-fed4-4985-b420-d3796c656c3a.jpeg?h=365&w=240&dpr=2",
          seller: "Zella",
          price:   4584.59,
          offprice: 2750.75,
          type: "Activewea"
      },
      {
          name: "Aero Shorts",
          imageurl: "https://n.nordstrommedia.com/id/sr3/d38ca1e4-a038-4241-bdce-32fddbb14327.jpeg?h=365&w=240&dpr=2",
          seller: "Zella",
          price: 3250.89 ,
          offprice:3000 ,
          type: "Activewea"
      },
      {
          name: "Gary Jumpsuit",
          imageurl: "https://n.nordstrommedia.com/id/sr3/fbb0dd22-4a9d-4809-960e-ca95201c4a0f.jpeg?h=365&w=240&dpr=2",
          seller: "Sweaty Betty",
          price: 10669.59 ,
          offprice: 8546.20,
          type: "Activewea"
      },
      {
          name: "Performance Joggers",
          imageurl: "https://n.nordstrommedia.com/id/sr3/77b3632c-ef27-4ba5-9a4f-b8d58357e982.jpeg?h=365&w=240&dpr=2",
          seller: "vuori",
          price:   7001,
          offprice:5886 ,
          type: "Activewea"
      },
      {
          name: "Sleeveless Reversible Maxi ",
          imageurl: "https://n.nordstrommedia.com/id/sr3/b1ecf1ab-13f7-43bb-90dd-7e51d3c732fe.jpeg?h=365&w=240&dpr=2",
          seller: "Open Edit",
          price:  2450.67,
          offprice:2305.25 ,
          type: "Activewea"
      },
      {
          name: "Energy Top",
          imageurl: "https://n.nordstrommedia.com/id/sr3/fb6f31b9-0676-470d-ab43-3c4fb2f427cf.jpeg?h=365&w=240&dpr=2",
          seller: "vuori",
          price: 4334.52,
          offprice: 4282.00,
          type: "Activewea"
      },
      {
          name: "Work For It Easy Tank Top",
          imageurl: "https://n.nordstrommedia.com/id/sr3/dfb80eca-5b00-4107-98b1-a0cfceab5b07.jpeg?h=365&w=240&dpr=2",
          seller: "Zella",
          price: 8456.2 ,
          offprice: 7533.0,
          type: "Activewea"
      },
      {
          name: "Elevate High Waist Seamless ",
          imageurl: "https://n.nordstrommedia.com/id/sr3/08a8d5fb-8509-4694-9845-7160001bc41a.jpeg?h=365&w=240&dpr=2",
          seller: "Zella",
          price: 7856.20 ,
          offprice:6587.30 ,
          type: "Activewea"
      },
      {
          name: "Pulse Seamless Sports Bra",
          imageurl: "https://n.nordstrommedia.com/id/sr3/e1e69553-5300-4c05-bf60-119c19653b04.jpeg?h=365&w=240&dpr=2",
          seller: "Zella",
          price:  1258.20,
          offprice: 1120.00,
          type: "Activewea"
      },
      {
          name: "Drew Crewneck Sweatshirt",
          imageurl: "https://n.nordstrommedia.com/id/sr3/4b3d6633-dce7-4f4c-9696-101ba5b16dd7.jpeg?h=365&w=240&dpr=2",
          seller: "Zella",
          price:4583.20  ,
          offprice:2503.20 ,
          type: "Activewea"
      },
      {
          name: "Studio Lite Crop Leggings",
          imageurl: "https://n.nordstrommedia.com/id/sr3/7195dc48-fed4-4985-b420-d3796c656c3a.jpeg?h=365&w=240&dpr=2",
          seller: "Zella",
          price:   4584.59,
          offprice: 2750.75,
          type: "Activewea"
      },
      {
          name: "Aero Shorts",
          imageurl: "https://n.nordstrommedia.com/id/sr3/d38ca1e4-a038-4241-bdce-32fddbb14327.jpeg?h=365&w=240&dpr=2",
          seller: "Zella",
          price: 3250.89 ,
          offprice:3000 ,
          type: "Activewea"
      },
      {
          name: "Gary Jumpsuit",
          imageurl: "https://n.nordstrommedia.com/id/sr3/fbb0dd22-4a9d-4809-960e-ca95201c4a0f.jpeg?h=365&w=240&dpr=2",
          seller: "Sweaty Betty",
          price: 10669.59 ,
          offprice: 8546.20,
          type: "Activewea"
      },
      {
          name: "Performance Joggers",
          imageurl: "https://n.nordstrommedia.com/id/sr3/77b3632c-ef27-4ba5-9a4f-b8d58357e982.jpeg?h=365&w=240&dpr=2",
          seller: "vuori",
          price:   7001,
          offprice:5886 ,
          type: "Activewea"
      },
      {
          name: "Sleeveless Reversible Maxi ",
          imageurl: "https://n.nordstrommedia.com/id/sr3/b1ecf1ab-13f7-43bb-90dd-7e51d3c732fe.jpeg?h=365&w=240&dpr=2",
          seller: "Open Edit",
          price:  2450.67,
          offprice:2305.25 ,
          type: "Activewea"
      },
      {
          name: "Energy Top",
          imageurl: "https://n.nordstrommedia.com/id/sr3/fb6f31b9-0676-470d-ab43-3c4fb2f427cf.jpeg?h=365&w=240&dpr=2",
          seller: "vuori",
          price: 4334.52,
          offprice: 4282.00,
          type: "Activewea"
      },
      {
          name: "Work For It Easy Tank Top",
          imageurl: "https://n.nordstrommedia.com/id/sr3/dfb80eca-5b00-4107-98b1-a0cfceab5b07.jpeg?h=365&w=240&dpr=2",
          seller: "Zella",
          price: 8456.2 ,
          offprice: 7533.0,
          type: "Activewea"
      },
      {
          name: "Elevate High Waist Seamless ",
          imageurl: "https://n.nordstrommedia.com/id/sr3/08a8d5fb-8509-4694-9845-7160001bc41a.jpeg?h=365&w=240&dpr=2",
          seller: "Zella",
          price: 7856.20 ,
          offprice:6587.30 ,
          type: "Activewea"
      },
      {
          name: "Pulse Seamless Sports Bra",
          imageurl: "https://n.nordstrommedia.com/id/sr3/e1e69553-5300-4c05-bf60-119c19653b04.jpeg?h=365&w=240&dpr=2",
          seller: "Zella",
          price:  1258.20,
          offprice: 1120.00,
          type: "Activewea"
      },
      {
          name: "Drew Crewneck Sweatshirt",
          imageurl: "https://n.nordstrommedia.com/id/sr3/4b3d6633-dce7-4f4c-9696-101ba5b16dd7.jpeg?h=365&w=240&dpr=2",
          seller: "Zella",
          price:4583.20  ,
          offprice:2503.20 ,
          type: "Activewea"
      },
      
          ];

          

          let container=document.getElementById("container")
let append=()=>{

      mensproductdata.forEach(function(el){
            let div=document.createElement("div")
            div.setAttribute("id","div")

            let imgdiv=document.createElement("div")
            imgdiv.setAttribute("id","imgdiv")

            let h2=document.createElement("h3")
            h2.innerText=el.name;

            let h4=document.createElement("h4")
            h4.innerText=el.seller;

            let p=document.createElement("p")
            p.innerText="Prize : INR "+el.price;

            let p1=document.createElement("p")
            p1.innerText="Off Prize : "+el.offprice;

            let img=document.createElement("img")
            img.src=el.imageurl

            let btn=document.createElement("button")
            btn.innerText="Add to Cart"
            
            btn.setAttribute("id","btn")
            btn.addEventListener("click",function(){
                addtocart_fun(el)
          })
imgdiv.append(img)
div.append(imgdiv,h2,h4,p1,p,btn)

container.append(div)
      })

           

}
append()

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
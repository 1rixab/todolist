let mainbutton = document.getElementById("btnadd");
let inpt = document.getElementById("inputs");
mainbutton.addEventListener("click",function(){
   
   let mainngrid = document.getElementById("maingrid");
   let creatediv = document.createElement("div");creatediv.id= "childgrid";
   mainngrid.appendChild(creatediv)
   let createtext = document.createElement("p");createtext.id= "childtext";

   creatediv.appendChild(createtext)
   let dataprocess = inpt.value;
   createtext.textContent = "-" + dataprocess
   inpt.value = ""
    let status = document.createElement("button");
    status.id = "childbtn";
    status.textContent = "pending";

    creatediv.appendChild(status);
    
   let dlt = document.createElement("i");dlt.className = "fa-solid fa-trash";
    creatediv.appendChild(dlt);
    
      status.addEventListener("click", function(){
         
      
      status.textContent = "complete"
      status.style.backgroundColor = "green";

    })
   
   
 
})
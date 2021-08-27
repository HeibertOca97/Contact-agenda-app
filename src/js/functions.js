"use strict"; 
const name_c = document.querySelector("input[name=name]"), 
number_c = document.querySelector("input[name=number]"), 
btn_add = document.querySelector("#btn_add"),
btn_delete = document.getElementsByClassName("btn_delete");

btn_add.addEventListener("click", ()=>{
   window.location.href = `add/${name_c.value}/${number_c.value}`;
})

for (let btn of btn_delete) {   
   btn.addEventListener("click", (e)=>{
      if(confirm("Esta seguro de borrar a este contacto!")){
         let _id = e.target.getAttribute("data-id");
         window.location.href = `delete/${_id}`; 
      }
   });
}
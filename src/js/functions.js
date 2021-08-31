"use strict"; 
const name_c = document.querySelector("input[name=name]"), 
number_c = document.querySelector("input[name=number]"), 
form = document.querySelector(".form"),
fr_delete = document.getElementsByClassName("fr_delete");

/*************** 
 * Validations
****************/

const validationInputs = ()=>{
   let permission = true;

    if(!name_c.value){
      name_c.style.borderColor = "var(--error)";
      name_c.nextElementSibling.innerHTML = `<i class="fas fa-info-circle"></i> Required ${name_c.getAttribute("data-name")}`;
      permission = false;
      return permission;
   }
   
   if(!number_c.value){
      number_c.style.borderColor = "var(--error)";
      number_c.nextElementSibling.innerHTML = `<i class="fas fa-info-circle"></i> Required ${number_c.getAttribute("data-name")}`;
      
      permission = false;
      return permission;
   }

   if(number_c.value.length < 10){
      number_c.style.borderColor = "var(--error)";
      number_c.nextElementSibling.innerHTML = `<i class="fas fa-info-circle"></i> Minimum 10 characters`;
      permission = false;
      return permission;
   }

   if(number_c.value.length > 10){
      number_c.style.borderColor = "var(--error)";
      number_c.nextElementSibling.innerHTML = `<i class="fas fa-info-circle"></i> Maximum 10 characters`;
      permission = false;
      return permission;
   }

   if(permission){
      return true;
   }
}


[name_c, number_c].forEach((el)=>{
   el.addEventListener("blur", ()=>{
      if(!el.value){
         el.style.borderColor = "var(--error)";
         el.nextElementSibling.innerHTML = `<i class="fas fa-info-circle"></i> Campo ${el.getAttribute("data-name")} requerido`;
      }else{
         el.style.borderColor = "var(--shadow)";
         el.nextElementSibling.innerHTML = "";
      }
   });
});

number_c.addEventListener("keyup", ()=>{
   if(number_c.value.length < 10){
      number_c.nextElementSibling.innerHTML = `<i class="fas fa-info-circle"></i> Minimum 10 characters`;
      number_c.style.borderColor = "var(--error)"
   }
   
   if(number_c.value.length > 10){
      number_c.nextElementSibling.innerHTML = `<i class="fas fa-info-circle"></i> Maximum 10 characters`;
      number_c.style.borderColor = "var(--error)"
   }

   if(number_c.value.length == 10){
      number_c.nextElementSibling.innerHTML = "";
      number_c.style.borderColor = "var(--error)"
   }
});

/*************** 
 * Actions 
****************/
for (let btn of fr_delete) {   
   btn.addEventListener("submit", (e)=>{
      e.preventDefault();
      if(confirm("Esta seguro de borrar a este contacto!")){
         e.target.submit(); 
      }
   });
}

form.addEventListener("submit", (e)=>{
   e.preventDefault();
   if (validationInputs()) {
      e.target.submit();
   }
});
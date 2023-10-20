const myform = document.getElementById('gform');
const name=document.getElementById("name");
const email=document.getElementById("email");
const subject=document.getElementById('subject');
const message=document.getElementById('message');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
   const errors = [];

   if(subject.value.trim() === ""){
    errors.push("mail required")
   }

   if(errors.length > 0){
    e.preventDefault();
    errorMessage.toggleAttribute('hidden');
    errorMessage.innerHTML = errors.join(', ');
   }

})
//     setErrorFor(name,'name cannot be empty');
// }else{
//     setSuccessFor(name);
// }
 
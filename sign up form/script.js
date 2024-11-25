let signup=document.querySelector('#signup');

let closeup=document.querySelector('#close');

let model=document.getElementById('model');

console.log(signup);
console.log(closeup);
console.log(model);


signup.addEventListener('click',()=> model.classList.add("show-model"));

closeup.addEventListener('click',()=> model.classList.remove("show-model"));
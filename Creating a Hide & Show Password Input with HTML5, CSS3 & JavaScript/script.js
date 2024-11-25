const eye=document.querySelector('#eye');
const input=document.querySelector('input');

eye.addEventListener('click',()=>{
    if(input.type==="password"){
        input.type="text";
    }
    else{
        input.type="password";
    }

})
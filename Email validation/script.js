let input=document.querySelector(".input")


input.addEventListener("keydown",validate);

function validate(){
    let container=document.querySelector(".container")
    let pattren= /^[^]+@[^]+\.[a-z]{2,3}$/;
    
    if(input.value.match(pattren)){
        container.classList.add("valid");
        container.classList.remove('invalid');
    }
    else{
        container.classList.add("invalid");
        container.classList.rempove("valid");
    }


}
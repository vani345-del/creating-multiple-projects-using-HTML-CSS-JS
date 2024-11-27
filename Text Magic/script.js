let text=document.querySelector(".input1");

let result=document.querySelector(".result")

let btns=document.querySelectorAll(".btn")

text.addEventListener('keyup',()=>{
    result.innerHTML=text.value;
})

btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.classList.contains("uppercase")){
            result.innerHTML=result.innerHTML.toUpperCase();
        }
        else if(btn.classList.contains("lowercase")){
            result.innerHTML=result.innerHTML.toLowerCase();
        }
        else if(btn.classList.contains("capitalize")){
            result.innerHTML=result.innerHTML.charAt(0).toUpperCase()+
            result.innerHTML.slice(1).toLowerCase();
        }
        else if(btn.classList.contains("bold")){
            result.style.fontWeight="900";
        }
        else if(btn.classList.contains("underline")){
            result.style.textDecoration="underline";
        }
        else{
            result.style.fontStyle="italic";
        }
    
    })
})


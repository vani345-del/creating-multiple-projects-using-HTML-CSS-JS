const buttons=document.querySelectorAll(".btn")

const body=document.body

buttons.forEach(btn => {
    btn.addEventListener("click",()=>{
        color=btn.value;
        changebackgroundcolor(color);
    })
});


function changebackgroundcolor(color){
   body.className="";
   
   switch(color){
        case "purple"  :
        body.classList.add('purple');
        break;
        case "red"  :
        body.classList.add('red');
        break;
        case "green"  :
        body.classList.add('green');
        break;
        case "blue"  :
        body.classList.add('blue');
        break;
        case "tale"  :
        body.classList.add('tale');
        break;
        case "yellow"  :
        body.classList.add('yellow');
        break;
        default:
            break;

   }
}

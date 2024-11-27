const progress=document.querySelector('#progress')

const prev=document.querySelector('#previous')

const next=document.querySelector('#next')

const circles=document.querySelectorAll('.circle')



 let activeindex=1;  

 next.addEventListener('click',()=>{
    activeindex++;
    if(activeindex>circles.length){
        activeindex=circles.length;
    }
    update();
 });


 prev.addEventListener('click',()=>{
    activeindex--;
    if(activeindex<1){
        activeindex=1;
    }

    update();
 });



function update(){
    circles.forEach((circle,index) => {
        if(index<activeindex){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }
      });

        const actives=document.querySelectorAll('.active');
        progress.style.width=((actives.length-1)/(circles.length-1))*100 +"%";

        if(activeindex===1){
            prev.disabled=true;
        }
        else if(activeindex===circles.length){
            next.disabled=true;
        }
        else{
            prev.disabled=false;
            next.disabled=false;
        }

}

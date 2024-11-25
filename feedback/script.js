//ratings
 const rating=document.querySelectorAll('.rating');
 
 //rating-container

 const ratingscontainer=document.querySelector('.rating-container');

 //sent button
 const sendbutton=document.querySelector('#send');

 const panel=document.querySelector('#panel');

 
let selecetedrating='Satisfied'

ratingscontainer.addEventListener("click",(e)=>{
   if(e.target.parentNode.classList.contains("rating")){
    removeactives();
    e.target.parentNode.classList.add("active");
    selecetedrating=e.target.nextElementSibling.innerHTML;
   }
});

sendbutton.addEventListener("click",()=>{
     panel.innerHTML=`
     <p class="heart">💖</P>
     <strong>"Thank you"</strong>
     <br>
     <strong>Feedback:${selecetedrating}</strong>`;
});


function removeactives(){
   for(let i=0;i<rating.length;i++){
    rating[i].classList.remove("active");
   }
} 

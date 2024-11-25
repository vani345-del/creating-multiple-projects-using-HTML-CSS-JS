let btn=document.querySelector('.btn');

let closebtn=document.querySelector('.close');

let trailer=document.querySelector('.trailer-container');

let video=document.querySelector("video");

btn.addEventListener('click',()=>{
    trailer.classList.remove('active');
})

closebtn.addEventListener('click',()=>{
    trailer.classList.add('active')
    video.pause()
    video.currentTime=0;
})


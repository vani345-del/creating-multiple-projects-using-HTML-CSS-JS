const btn=document.querySelector("#emojii");


const emojis=["😊","😒","😘","😁","😉","😎","😢","😜","😄","😍","😚","🙂","😏","😣","😕","🙃","😖","😞","😲","🤕","🤢","🤮","🤧","😇","🥸","🤥","🫣","🧐","😈","👻","💩","🥶","😵‍💫","😵‍💫","😨","😱"];


btn.addEventListener('mouseover',()=>{
    btn.innerHTML=emojis[Math.floor(Math.random()*emojis.length)]
})




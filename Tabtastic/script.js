function gettab(e1){
    const active=document.querySelector('.active');
    const visibility=document.querySelector('.content-visibility');
    const tabcontent=document.getElementById(e1.href.split('#')[1]);

    active.classList.toggle('active');
    visibility.classList.toggle("content-visibility");
    el.classList.add("acive")
    tabcontent.classList.add("content-visibility");

}
document.addEventListener("click",(e)=>{
    if(e.target.matches(".tab-items a")){
        gettab(e.target);
    }
});
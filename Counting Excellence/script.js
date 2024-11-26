let counter=document.querySelector('.counter');

let increment=document.querySelector('#incre');

let save=document.querySelector('#save');

let entries=document.querySelector('.entries-field');




console.log(counter);
console.log(save);

let count=0;

increment.addEventListener('click',()=>{
    count+=1;
    counter.textContent=count;
});


save.addEventListener('click',()=>{
    let c=count+",";
    entries.textContent+=c;
    counter.textContent=0;
    count=0;
});


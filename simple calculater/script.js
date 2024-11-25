document.getElementById('btn').addEventListener('click',()=>{

    let num1=document.querySelector(".num1").value;
    let num2=document.querySelector(".num2").value;
    let result=document.querySelector('.result');
    let operator=document.querySelector('#seleop').value;

    if(operator=="plue"){
        result.innerHTML=Number(num1)+Number(num2);
    }
    else if(operator=="min"){
        result.innerHTML=Number(num1)-Number(num2);
    }
    else if(operator=="mul"){
        result.innerHTML=Number(num1)*Number(num2);
    }
    else{
        
        result.innerHTML=Number(num1)/Number(num2);
    }

})
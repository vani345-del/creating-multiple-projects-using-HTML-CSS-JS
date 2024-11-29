const searchmeal=async(e)=>{
    e.preventDefault();
    const input=document.querySelector(".input");
    const title=document.querySelector(".title");
    const info=document.querySelector(".info");
    const img=document.querySelector(".img");
    const ingredientoutput=document.querySelector(".ingredients");
    
    const showmealinfo=(meal) =>{
        const { strMeal, strMealThumb, strInstructions }=meal;
        title.textContent= strMeal ;
        info.textContent= strInstructions;
        img.style.backgroundImage= `url(${strMealThumb})`;
        const ingredients=[];
        for(let i=1;i<=20;i++){
            if(meal[`strIngredient${i}`]) {
                ingredients.push(
                  `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
                );
            }
            else{
                break;
            }
        }
        
        const html= `
        <span>${ingredients
          .map((ing) => `<li class="ing">${ing}</li>`)
          .join("")}</span>
        `;
    
        ingredientoutput.innerHtml=html;
    };


    const showalert=()=>{
        alert("meal not found:(");
    };

    const fetchmealdata=async (val) =>{
        const res=await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
        const { meals }=await res.json();
        return meals;

    };
    const val=input.value.trim();
    if(val){
        const meals= await fetchmealdata(val);

        if(!meals){
            showalert();
            return;
        }
        meals.forEach(showmealinfo);
    }
    else{
        alert("please try searching for meal:(");
    }

};




const form=document.querySelector("form");
form.addEventListener("submit",searchmeal);


const magnifier=document.querySelector(".magnifier");
magnifier.addEventListener("click",searchmeal);

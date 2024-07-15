




    /////// Get Ingredients ////

    function getMenuIngredients() {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
            .then(response => response.json())
            .then(data => {
                menue = data.meals; 
                displayIng(menue.slice(0, 20)); 
            })
        
    }

    function displayIng(){
        let cartona = "";
        for (let i = 0; i < 20; i++) {
            cartona += `
            <div class="col-md-3 ">
                    <div ${menue[i].strIngredient}" class="rounded-2 text-center cursor-pointer">
                            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                                 <h3 class="text-center  ">${menue[i].strIngredient}</h3>
                            <p>${menue[i].strDescription}</p>
                    </div>
            </div>
            `
        }
        document.querySelector("#myData").innerHTML = cartona;
    }
    document.getElementById("getIngredientsButton").onclick =getMenuIngredients;
   

    //////////////////////////////////////////////////////////////////

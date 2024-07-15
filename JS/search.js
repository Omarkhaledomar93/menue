



function getMenueSearch() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then(response => response.json())
        .then(data => {
            menue = data.meals;
            displaySearch()
        }

        )
}




function displaySearch() {
    let cartona = ``

    for (let i = 0; i < menue.length; i++) {
        cartona += `
        <div class="col-md-3" >
                <div onclick="getMealDetails('${menue[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${menue[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${menue[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `


    }

    document.querySelector("#myData").innerHTML = cartona;
}

getMenueSearch()

function getSearchForm() {
    let cartona = `
        <input class="form-control w-25 bg-transparent text-center me-5" list="datalistOptions1" id="searchByName" placeholder="Search by name...">
        <input class="form-control w-25 bg-transparent text-center" list="datalistOptions2" id="searchByFirstLetter" placeholder="Search By First Letter...">
    `;

    document.querySelector("#myData").innerHTML = cartona;
}

document.getElementById("search").onclick = getSearchForm;






 /////// Get Areas ////
 function getMenueArea() {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then(response => response.json())
        .then(data => {
            menue = data.meals; 
            displayArea(); 
        })
    
}



function displayArea() {
    let cartona = "";

    for (let i = 0; i < menue.length; i++) {
        cartona += `
        <div class="col-md-3">
                <div ${menue[i].strArea}" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${menue[i].strArea}</h3>
                </div>
        </div>
        `
    }

    document.querySelector("#myData").innerHTML = cartona;

}

document.getElementById("getAreaButton").onclick = getMenueArea;

 //////////////////////////////////////////////////////////////////

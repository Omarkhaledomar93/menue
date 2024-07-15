

    //// Side Bar  /////


   
    $("#sideBar i").on("click", function () {
        const sideBarWidth = $("#sideBar").innerWidth();

        if ($("#sideBar").css("left") == "0px") {
            $("#sideBar").animate({ left: `-${sideBarWidth}px` }, 1000);
            $(".sideBar2").animate({ left: "0px" }, 1000);
            $(".openBtn").removeClass("d-none");
            $(".closeBtn").addClass("d-none")
           
           
          
        } else {
            
            $("#sideBar").animate({ left: "0px" }, 1000);
            $(".sideBar2").animate({ left: `${sideBarWidth}px` }, 1000);
            $(".openBtn").addClass("d-none");
            $(".closeBtn").removeClass("d-none");
        }
    });
    
    ///// API////






    let menue = [];

    function getMenueCategory() {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(response => response.json())
            .then(data => {
                menue = data.categories; 
                displayMenue(); 
            })
        
    }



    function displayMenue() {
        let cartona = "";

        for (let i = 0; i < menue.length; i++) {
            cartona += `
                <div class="col-md-3 w-25  ">
                    <div class="menue-container">
                        <h1 class="rounded-2 ">${menue[i].strCategory}</h1>
                        <img class="w-100" src="${menue[i].strCategoryThumb}" alt="" />
                        <p>${menue[i].strCategoryDescription}</p>
                    </div>
                </div>`;
        }

        document.querySelector("#myData").innerHTML = cartona;
        $(".menue-container").hover(
            function() {
                $(this).find("h1, p").fadeIn(300);
            }, 
            function() {
                $(this).find("h1, p").fadeOut(300);
            }
        );
    }





    document.getElementById("getCategoriesButton").onclick =getMenueCategory;
  





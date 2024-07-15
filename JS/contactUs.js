



function getContactUs(){
    let cartona = ` <form class="row g-3 ">
        <div class="col-md-6">
          <label  for="validationServer01" class="form-label">First name</label>
          <input type="text" class="form-control " id="validationServer01" value="" required >
          
        </div>
        <div class="col-md-6">
          <label for="validationServer02" class="form-label">Email</label>
          <input type="email" class="form-control " id="validationServer02" value="" required>
          
        </div>
        <div class="col-md-6">
          <label for="validationServerUsername" class="form-label">Mobile</label>
          <div class="input-group has-validation">
           <input type="number" class="form-control " id="validationNumber" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
           
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationServer03" class="form-label">Age</label>
          <input type="date" class="form-control " id="validationServer03" aria-describedby="validationServer03Feedback" required>
         
        </div>
        <div class="col-md-6">
            <label for="exampleInputPassword1" class="form-label"></label>
            <input type="password" class="form-control" id="exampleInputPassword1"  placeholder="Password" required>
          <div id="validationServer04Feedback" class="invalid-feedback">
            Please select a valid Password.
          </div>
        </div>
        <div class="col-md-6">
            <label for="exampleInputPassword1" class="form-label"></label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
          <div id="validationServer05Feedback" class="invalid-feedback">
            Please provide a valid Password.
          </div>
        </div>
      
        <div class="col-12  d-flex justify-content-center ">
          <button class="btn btn-outline-danger" type="submit">Submit form</button>
        </div>
      </form>
       `

    document.querySelector("#myData").innerHTML=cartona
}

document.getElementById("contactUSBtn").onclick=getContactUs;
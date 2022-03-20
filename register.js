function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
  var name= document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var password = document.contactForm.password.value;
  var confPassword = document.contactForm.confPassword.value;
  var mobile = document.contactForm.mobile.value;
  var country = document.contactForm.country.value;
  var gender = document.contactForm.gender.value;
  var address = document.contactForm.address.value;
  var pincode = document.contactForm.pincode.value;
  var district = document.contactForm.district.value;
  var state = document.contactForm.state.value;


  // Defining error variables with a default value
    var nameErr = emailErr = passwordErr = confPasswordErr = mobileErr =
    countryErr = genderErr = addressErr = pincodeErr = districtErr = stateErr = true;

    // Validate name
    if(name == "") {
        printError("nameErr", "*Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) == false) {
            printError("nameErr", "*Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if(email == "") {
        printError("emailErr", "*Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) == false) {
            printError("emailErr", "*Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "*Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) == false) {
            printError("mobileErr", "*Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validate country
    if(country == "Select") {
        printError("countryErr", "*Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

    //State validation
    if(state == "Select") {
        printError("stateErr", "*Please enter the state you live in");
    } else {
        printError("stateErr", "");
        stateErr = false;
    }

    //Password validation
    if(password == "") {
        printError("passwordErr", "*Please enter your password");
    } else {
        if (password != confPassword) {
          printError("passwordErr", "*Both passwords dont match");
          passwordErr = true;
        }
        printError("passwordErr", "");
        addressErr = false;
    }

    //Confirm Password validation
    if(confPassword == "") {
        printError("confPasswordErr", "*Please enter your password");
    } else {
        if (password != confPassword) {
          printError("confPasswordErr", "*Both passwords dont match");
          confPasswordErr = true;
        }
        printError("confPasswordErr", "");
        addressErr = false;
    }

    //Address validation
    if(address == "") {
        printError("addressErr", "*Please enter your address");
    } else {
        printError("addressErr", "");
        addressErr = false;
    }

    if(pincode == "") {
        printError("pincodeErr", "*Please enter your pincode");
    } else {
      var regex = /^[1-9]\d{6}$/;
      if(regex.test(mobile) == false) {
          printError("pincodeErr", "*Please enter a valid 6 digit pincode");
      } else{
          printError("pincodeErr", "");
          pincodeErr = false;
      }

    }

    if(district == "") {
        printError("districtErr", "*Please enter your district");
    } else {
        printError("districtErr", "");
        districtErr = false;
    }

    // Validate gender
    if(gender == "") {
        printError("genderErr", "*Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    // var checkboxes = document.getElementsByName("hobbies[]");
    // for(var i=0; i < checkboxes.length; i++) {
    //     if(checkboxes[i].checked) {
    //         // Populate hobbies array with selected values
    //         hobbies.push(checkboxes[i].value);
    //     }
    // }

    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
      // alert(gender);
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n";
        // if(hobbies.length) {
        //     dataPreview += "Hobbies: " + hobbies.join(", ");
        // }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }

}

const form = document.querySelector("form"),

    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),


    claimField = form.querySelector(".claim-field"),
    claimInput = claimField.querySelector(".claim")



function validateUsername() {

    if (claimInput.value == '') {
        // alert("Please input a Value");
        // return false;

        return claimField.classList.add("invalid");
    }
    claimField.classList.remove("invalid");

}

// Email Validtion
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
    }
    emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}


// function createPass() {
//     const passPattern = 8;

//     if (!passInput.value.match(passPattern)) {
//         return passField.classList.add("invalid");
//     }
//     passField.classList.remove("invalid"); 
// }


// function confirmPass() {
//     if (passInput.value !== cPassInput.value || cPassInput.value === "") {
//         return cPassField.classList.add("invalid");
//     }
//     cPassField.classList.remove("invalid");
// }

// Calling Function on Form Submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submitting
    validateUsername();
    checkEmail();

    //calling function on key up
    emailInput.addEventListener("keyup", validateUsername);
    emailInput.addEventListener("keyup", checkEmail);

    if (
        !emailField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
});




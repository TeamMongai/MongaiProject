console.log("register.js, register.js loaded on client!")

$(document).ready(function () {
    $(document).on("click", ".submit", submitRegister);
});

function submitRegister(event) {
    event.preventDefault();
    console.log("register.js: Submit Registration ");
    var email = $('#email').val().trim();
    var password = $('#password').val().trim();
    console.log("register.js, input email and password", email, password);
    var data = {
        email: email,
        password: password
    }
    $.ajax({
        method: "POST",
        url: "/api/register",
        data: data
    }).then(function () {
        console.log("register.js, inside .then");
        if( !validateEmail(email)) { 
            console.log("register.js, Oh noes not an email!")
            
        } else {
            window.location.href = "/loginPage";
        }

        
    })

};

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}
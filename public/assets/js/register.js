console.log("register.js: register.js loaded on client!")

$(document).ready(function () {
    $(document).on("click", ".submit", submitRegister);
});

function submitRegister(event) {
    event.preventDefault();
    console.log("register.js: Submit Registration ");
    var email = $('#email').val().trim();
    var password = $('#password').val().trim();
    console.log("email", email, password);
    var data = {
        email: email,
        password: password
    }
    $.ajax({
        method: "POST",
        url: "/api/register",
        data: data
    }).then(function (err) {
        console.log(err)
    })

};
console.log("login.js is loaded!")

$(document).ready(function () {
    $(document).on("click", ".submit", submitLogin);
});

function submitLogin(event){
    event.preventDefault();
    console.log("login.js, Submit Login ");
    var email = $('#email').val().trim();
    var password = $('#password').val().trim();
    console.log("login.js, input email and password", email, password);
    var data = {
        email: email,
        password: password
    }
    $.ajax({
        method: "POST",
        url: "/api/login",
        data: data
    }).then(function (err) {
        console.log(err)
    })
}
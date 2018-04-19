// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $("#create_account").on("submit", function (event) {
        event.preventDefault();
        var email = $("#email").val()
        var pass = $("#pass").val()
        if (pass == $("#confirmpass").val()) {
            var user = {
                email: email,
                pass: pass
            }
            $.ajax("/api/users/" + email, {
                type: "POST",
                data: user
            }).then(
                function () {
                    location.reload();
                }
            )
        }
    });

    $("#login").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var user = {
            email: $("#email").val(),
            pass: $("#pass").val()
        };

        // Send the POST request.
        $.ajax("/api/login", {
            type: "PUT",
            data: user
        }).then(
            function (res,err) {
            
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-cat").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/cats/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted cat", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

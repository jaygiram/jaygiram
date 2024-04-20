$(function () {
    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // Optionally handle submit errors
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            var $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            $.ajax({
                url: "contact.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                cache: false,
                success: function () {
                    $(this).html("<div class='alert alert-success'>");
                    $(this).find('.alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $(this).find('.alert-success')
                            .append("<strong>Your message has been sent. </strong>");
                    $(this).find('.alert-success')
                            .append('</div>');
                    $('#contactForm').trigger("reset");
                },
                error: function () {
                    $(this).html("<div class='alert alert-danger'>");
                    $(this).find('.alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $(this).find('.alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                    $(this).find('.alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
                },
                complete: function () {
                    var $this = $(this); // Preserve reference to the form
                    setTimeout(function () {
                        $this.prop("disabled", false);
                        $this.html(''); // Clear any messages after timeout
                    }, 1000);
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });

    $('#name').focus(function () {
        $(this).html('');
    });
});

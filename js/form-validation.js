$(function() {
    $("form[name='feedback']").validate({
        rules: {
            firstname: "required",
            email: {
                required: true,
                email: true
            },
            textarea: {
                required: true
            }
        },
        messages: {
            name: {
                required: "",
                firstname: ""
            },
            email: {
                required: "",
                email: ""
            },
            textarea: {
                required: "",
                email: ""
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});



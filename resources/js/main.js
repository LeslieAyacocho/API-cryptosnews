import crypto from './crypto' 
import authModal from './AuthenticationModals';
import news from './news' 
import myAccount from './myAccount';
$(document).ready(function(){

$('.link').on('click', (e) => {
    const link = e.currentTarget.dataset.id;
    console.log(link)

    switch (link) {
        case "crypto":
            crypto();
            break;

        case "news":
            news();
            break;

        case "myacc":
            myAccount();
            break;

        default:
            break;
        }
});



$('#contentpage').append(authModal); 

    // REGISTRATION
// $('#registerForm').validate({
// rules: {
//     name: {required:true},
//     email: {  required:true, email:true },
//     password: { required:true },
// },
// messages: {
//     name: {required:'required',},
//     email: { required:'required'},
//     password: { required:'required'},
// },
//     errorPlacement: function(error, element){
//         error.insertAfter(element)
// },
// submitHandler: function(form,e) {

    $('#registerBtn').on('click', (e) => {
        var data = $('#registerForm').serialize();
        // e.preventDefault();
        $.ajax({
            type: "post",
            url: "/api/auth/register",
            data: data,
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            dataType: "json",
            success: function(data) {
                
                console.log(data);
                $('#registerModal').each(function () {
                $(this).modal('hide');
                });
            },
            error: function(error) {
                console.log('error');
            }
        });

    });



//LOGIN
    // $('#loginForm').validate({
    //     rules: {
    //     lemail: {  required:true, email:true },
    //     lpassword: { required:true },
    //     },
    //     messages: {
    //         lemail: { required:'required', email:'Enter Valid Email'},
    //         lpassword: { required:'required'},
    //     },
    //         errorPlacement: function(error, element){
    //             error.insertAfter(element)
    //     },
    //     submitHandler: function(form,e) {
        $('#loginBtn').on('click', (e) => {
            var data = $('#loginForm').serialize();
            e.preventDefault();
                $.ajax({
                    type: "post",
                    url: "/api/auth/login",
                    data: data,
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    dataType: "json",
                    success: function(data) {
                        
                        console.log(data);
                        window.localStorage.setItem('access_token', data.access_token);
                        
                        var x = document.getElementById("login-btn-nav");
                        if (x.style.display === "none") {
                            x.style.display = "block";
                        } else {
                            x.style.display = "none";
                        }

                        var y = document.getElementById("register-btn-nav");
                        if (y.style.display === "none") {
                            y.style.display = "block";
                        } else {
                            y.style.display = "none";
                        }

                        var z = document.getElementById("myaccount-nav");
                        if (z.style.display === "none") {
                            z.style.display = "block";
                        } else {
                            z.style.display = "none";
                        }

                        $('#loginModal').modal('hide');
                    },
                    error: function(error) {
                        console.log(error);
                        alert('Failed to login. Please Try again');
                    }
                });


        });
        
    //     }
    // });


});



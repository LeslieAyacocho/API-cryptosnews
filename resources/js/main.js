import crypto from './crypto' 
// import auth from './modals/authM'
import authModal from './AuthenticationModals';
import news from './news' 
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
        $('#registerBtn').on('click', (e) => {
            var data = $('#loginForm').serialize();
                $.ajax({
                    type: "post",
                    url: "/api/auth/login",
                    data: data,
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    dataType: "json",
                    success: function(data) {
                        console.log(data);
                        window.localStorage.setItem('access_token', data.access_token);

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



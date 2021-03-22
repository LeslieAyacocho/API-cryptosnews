import crypto from './crypto' 
import authModal from './AuthenticationModals';
import news from './news' 
import myAccount from './myAccount';
$(document).ready(function(){

    
    var x = document.getElementById("login-btn-nav");
    var y = document.getElementById("register-btn-nav");
    var z = document.getElementById("myaccount-nav");
    var a = document.getElementById("logout-nav");

    if (localStorage.getItem('access_token')){
        
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    a.style.display = "block";
    }
    else{
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "none";
        a.style.display = "none";
    }
    

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

        case "logout":
                localStorage.removeItem("access_token");
                location.reload();
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
        e.preventDefault();
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

                    
                        $('#loginModal').modal('hide');
                        location.reload();
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



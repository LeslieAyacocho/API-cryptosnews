import crypto from './crypto' 
$(document).ready(function(){

$('.link').on('click', (e) => {
    const link = e.currentTarget.dataset.id;
    console.log(link)

    switch (link) {
        case "crypto":
            crypto('coins');
            break;

        
        default:
            break;
        }

});



});
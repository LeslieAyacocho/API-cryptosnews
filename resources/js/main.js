import crypto from './crypto' 
import auth from './modals/authM'
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
            news('news');
            break;

        default:
            break;
        }
    });
});

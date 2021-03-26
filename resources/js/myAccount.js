import bookmark from "./bookmark";
import currency from "./currency"
export default function myAccount(){

    let pageContent=`
    <div id= myaccNav>
        <ul class="nav justify-content-center myaccNav">
        <li class="nav-item">
        <a class="nav-link acclink" data-id="crypto" href="#">Cryptocurrency</a>
        </li>
        
        <li class="nav-item">
        <a class="nav-link acclink" data-id="bookmarks" href="#">Bookmarks</a>
        </li>
        </ul>
    </div>
    

    
    <div id="content-account">
    </div>
    `;

    $('#contentpage').html(pageContent);

    $('.acclink').on('click', (e) => {
        var id = localStorage.getItem('user_id');
        const link = e.currentTarget.dataset.id;
        // console.log(link);
        


        $.ajax({
            type: "GET",
            url: "/api/" + link +"/"+ id,
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            },
            dataType: 'json',
    
        success: function (response) {
        switch (link) {
            case "crypto":
                currency(response);
                break;
    
            case "bookmarks":
                bookmark(response);
                
                break;
    
            default:
                break;
            }
        },
        error: function(error) {
            console.log('error');
        }
        });
    });



}

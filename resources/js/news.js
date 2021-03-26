export default function news() {  
    // console.log("This is working.");

    let newsContent=`
    <div class="" id="card-append">
        
    </div>
    `

    $('#contentpage').html(newsContent);
    $.ajax({
            type: 'GET',
            url: 'https://min-api.cryptocompare.com/data/v2/news'+
            '/?api_key=d3fb5e4f2e639187374967645a9ffdd24789d3d1884df5965fc36d5688046429',
            success: function (response) {
                let data = response.Data
                data.forEach(element => {

                    var string = element.body;
                    var length =150;
                    var bodytrimmed = string.substring(0, length);

                $('#card-append').append(`
                <div class="card col"  style="">
                    <img src="${element.imageurl}" class="card-img-top" alt="..."> 
                    <div class="card-body">
                        <h5 class="card-title"><a href="#" target="_blank">${element.title}</a></h5>
                        <p class="card-text">${bodytrimmed}</p>
                        <input type="hidden" id="tags" name="tags" id="${element.tags}">
                    </div>
                    <div class="card-footer">
                    <a href="${element.url}" target="_blank"><button type="button" class="btn" style="background-color:#6930c3; color:#80ffdb">READ MORE</button></a>
                    <span id="bookmark"><i class="fas fa-bookmark bookmarknews" id="bookmarknews" data-id="${element.id}" tabindex="0"></i></span>
                    </div>
                </div>
                `)
			});
            
            $('.bookmarknews').on('click', (e) => {
                
                var newsid = $(e.currentTarget).attr('data-id');
                // console.log(newsid);
                var userid = localStorage.getItem('user_id');

                    let datainput= `
                    <form action="" id="addBookmark">
                    <input type="text" id="news" name="news" value="${newsid}">
                    <input type="text" id="user_id" name="user_id" value="${userid}">
                    </form>
                    `;

                    var data = $(datainput).serialize();
                    // console.log(data);

                    $.ajax({
                        
                        type: "post",
                        url: "/api/Bookmark",
                        data: data,
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                        },
                        dataType: "json",
                        success: function(data) {
                            e.preventDefault();
                            // console.log(data);
                
                        },
                        error: function(error) {
                            alert('Login first to bookmark news')
                        }
                    });

            });
		}
	})
}



export default function bookmark(response){

    // console.log('bookmarks');
    let newsContent=`
    <div id="card-append">
        
    </div>
    `

    $('#content-account').html(newsContent);

    var i = 0;
    var all_news_id = new Array();
    response.forEach(data => {            
        all_news_id[i] = data.news;
        i++;
    });

        $.ajax({
            type: 'GET',
            url: 'https://min-api.cryptocompare.com/data/v2/news'+
            '/?api_key=d3fb5e4f2e639187374967645a9ffdd24789d3d1884df5965fc36d5688046429',
            success: function (response) {
            
                let news = response.Data;

                for(let r=-1; r<all_news_id.length; r++){
                    news.forEach(element => {
                    
                        if (all_news_id[r] == element.id){
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
                                <span id="bookmark"><i class="fas fa-trash-alt del-bookmarknews" id="bookmarknews" data-id="${element.id}" tabindex="0"></i></span>
                                </div>
                            </div>
                            `)
                        }
                });
                }

            },
            error: function(error) {
                console.log('error');
            }
        });



}
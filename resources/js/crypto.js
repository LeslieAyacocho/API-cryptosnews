export default function crypto(type) {  
            console.log("This is working...");
        
            let tableContent=`
            <thead class="">
                <tr>
                
                
                <th>  </th>
                <th>CRYPTOCURRENCY</th>
                <th>PRICE</th>
                <th>MARKET CAP</th>
                
                </tr>
            </thead>
            <tbody id="cryptoCoin">
            </tbody>
            `;

            $('#tableContent').html(tableContent);
            $.ajax({
                type: 'GET',
                url:
                    // 'https://api.coinranking.com/v1/public/coins',
                    'https://api.coinranking.com/v1/public/' + type + '?base=PHP&timePeriod=7d',
                    // coinranking4a54ef6bb07419e96c653461240ac9f9ebe2c2d4db26a7d6
                success: function (response) {
                    let data = response.data
                    
                    console.log(data);
                    
                    var currency = new Intl.NumberFormat();
                    data.coins.forEach(element => {

                        $('#cryptoCoin').append(`
                        <tr class="uuid" data-id="${element.uuid}">
                        <td> ${element.rank}</td>
                        <td>
                            <div class="profilename_wrapper" >
                        
                            <img class="img" src="${element.iconUrl}">
                                <span class="profile_name"> 
                                <a class="currencylink" href="" > ${element.name}</a>
                                <p class="profile_symbol"> ${element.symbol}</p>
                                </span>
                            </div>
                        </td>
                        <td>${data.base.sign} ${ currency.format(element.price)}</td>
                        <td>${data.base.sign} ${currency.format(element.marketCap)}</td>
                    
                        </tr>
                        `)
                    });

                    $( ".uuid" ).on( "click", function(e) {
                        var id = $(e.currentTarget).attr('data-id');
                        alert(id);
                        
                    });
        
                }
            });
        
        

}
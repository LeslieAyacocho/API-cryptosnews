import getHistory from "./getHistory";
import drawAllGraph from "./drawAllGraph";
export default function currency(response){
    

        // console.log(response);

        let tableContent=`
        <div class="table-responsive" id="draggable" class="table-responsive ui-widget-content">
        <table class="table" id="tableContent">
        <thead class="">
        <tr>
        
        
        <th>  </th>
        <th>CRYPTOCURRENCY</th>
        <th>PRICE</th>
        <th>MARKET CAP</th>
        <th>24H</th>
        <th></th>
        
        </tr>
        </thead>
        <tbody id="cryptoCoin">
        </tbody>
        </table></div>
        `;

        $('#content-account').html(tableContent);

        var currency = new Intl.NumberFormat();
        
        var all_coin_history = new Array();
        var all_coin_change = new Array();
        var r=0;
        var i=0;
        var x=-1;
        response.forEach(element => {
            $.ajax({
                method: 'GET',
            url:
                'https://api.coinranking.com/v1/public/coin/'+ element.cryptoid + "?base=PHP",
            success: function (response) {
                // console.log(response.data.coin);
                var coins = response.data;
                
                console.log(coins);
                var coin_history = getHistory(element.id);
                            
                all_coin_history[i] = coin_history;

                i++;
                // coins.forEach(element => {
                    $('#cryptoCoin').append(`
                    <tr class="uuidacc" data-id="${coins.coin.id}" data-bs-toggle="modal">
                    <td> ${coins.coin.rank}</td>
                    <td>
                        <div 
                        class="profilename_wrapper" >
                    <div class="profile_logo">
                        <img class="img" src="${coins.coin.iconUrl}">
                    </div>
                            <span class="profile_name"> 
                            <a class="currencylink" href="#"> ${coins.coin.name}</a>
                            <p class="profile_symbol"> ${coins.coin.symbol}</p>
                            </span>
                        </div>
                    </td>
                    <td>${coins.base.sign} ${currency.format(coins.coin.price)}</td>
                    <td>${coins.base.sign} ${currency.format(coins.coin.marketCap)}</td>
                    <td id="chart_div${r}"></td>
                    <td> <span id="bookmark"><i class="fas fa-trash-alt del-bookmarknews" id="bookmarknews" data-id="${element.id}" tabindex="0"></i></span></td>
                    </tr>
                    `)
                    x++;
                        all_coin_change[x] = coins.coin.change;
                        r++;
                        drawAllGraph(all_coin_history,all_coin_change);
                // });
            

            }
        });
        });



        

        
        // response.forEach(element => {
        //     $('#cryptoCoin').append(`
        //     <tr>
        //     <td>${element.id}</td>
        //     <td>${element.cryptoid}</td>
        //     <td>${element.user_id}</td>
            
        //     <td align='center'><i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#editActor" data-id="${element.id}" id="editActorIcon"></i></td>
        //     <td align='center'><i class="fas fa-trash-alt actorDelete" data-id="${element.id}"></i></td>
    
        //     </tr>
        //     `)
        // });
    
}
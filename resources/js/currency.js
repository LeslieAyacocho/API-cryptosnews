import getHistory from "./getHistory";
import drawAllGraph from "./drawAllGraph";
import showDetailsAcc from "./showDetailsAcc";
import drawGraph from "./drawGraph";
export default function currency(response){


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
        <tbody id="cryptoCoinAcc">
        </tbody>
        </table></div>
        `;

        $('#content-account').html(tableContent);
        $('#content-account').append(showDetailsAcc);

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
                
                // console.log(coins);
                var coin_history = getHistory(element.id);
                            
                all_coin_history[i] = coin_history;

                i++;
                // coins.forEach(element => {
                    $('#cryptoCoinAcc').append(`
                    <tr class="uuidacc" data-id="${coins.coin.id}"  data-bs-toggle="modal" data-bs-target="#showDetailsAcc">
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

        
        $('#showDetailsAcc').on('show.bs.modal', function(e) {
            var each_coin_history = new Array();
            var id = $(e.relatedTarget).attr('data-id');
            
            
            $.ajax({
                method: 'GET',
            url:
                'https://api.coinranking.com/v1/public/coin/'+ id +'/history/24h?base=PHP',
            success: function (response) {

                var historydata = response.data;
                var i = -1;
            historydata.history.forEach(element => {
                i++
                each_coin_history[i]=[element.timestamp,parseFloat(element.price)];
                });
            drawGraph(each_coin_history);
            }
            });

            $.ajax({
                method: 'GET',
            url:
                'https://api.coinranking.com/v1/public/coin/'+id+'?base=PHP',
            success: function (response) {
                let data = response.data
                var change;
                var symbol_id = data.coin.symbol;
                
                
                if(data.coin.change>0){
                    change = '+' + data.coin.change;
                }
                else{
                    change = data.coin.change;
                }
                    let details = `
                    
                    <div class="col-8 col-sm-6" id ="detail"><label>PRICE:</label><br>${data.base.sign} ${ currency.format(parseFloat(data.coin.price))}</div>
                    <div class="col-8 col-sm-6" id ="detail"><label>CHANGE:</label><br>${change}</div>
                    
                    `;
                $('.modal-header').html(`
                <div class="modal-wrapper" >
                    <div class="modal-logo">
                        <img class="img" src="${data.coin.iconUrl}">
                    </div>
                        <span class="modal_coinname"> 
                        <h2> ${data.coin.name}</h2>
                        <p class="modal_coinsymbol"> ${data.coin.symbol}</p>
                        </span>
                </div>
                
                `);
                $('#detail_other').html(details);
                
                $.ajax({
                    type: 'GET',
                    url: 'https://min-api.cryptocompare.com/data/v2/news'+
                    '/?api_key=d3fb5e4f2e639187374967645a9ffdd24789d3d1884df5965fc36d5688046429',
                success: function (response) {

                    console.log(response.Data);
                    var result = response.Data

                    result.forEach(element => {
                        
                        if(element.tags = symbol_id){

                        $('#card-append-acc').append(`
                        <div class="card col"  style="width: 750px;">
                            <img src="${element.imageurl}" class="card-img-top" alt="..." style="width: 750px;"> 
                            <div class="card-body">
                                <h5 class="card-title"><a href="#" target="_blank">${element.title}</a></h5>
                                <p class="card-text">${element.body}</p>
                                <input type="hidden" id="tags" name="tags" id="${element.tags}" >
                            </div>
                            <div class="card-footer">
                            <a href="${element.url}" target="_blank"><button type="button" class="btn" style="background-color:#6930c3; color:#80ffdb">READ MORE</button></a>
                            
                            </div>
                        </div>
                        `)

                        }
                    });
                    

                




                } 
                });



            }
            
            });

            
        });


        
    
}
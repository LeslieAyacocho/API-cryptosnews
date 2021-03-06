import getHistory from "./getHistory";
import drawAllGraph from "./drawAllGraph";
import showDetails from "./showDetails";
import drawGraph from "./drawGraph";

export default function crypto(type) {  
            // console.log("This is working...");


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
            
            </tr>
            </thead>
            <tbody id="cryptoCoin">
            </tbody>
            </table></div>
            `;

            $('#contentpage').html(tableContent);
            $('#contentpage').append(showDetails);

            $.ajax({
                method: 'GET',
                url:
                    'https://api.coinranking.com/v1/public/coins?base=PHP&limit=6',
                success: function (response) {
                    let data = response.data
                    var all_coin_history = new Array();
                    var all_coin_change = new Array();
                    var coin_change;
                    var i = 0;
                    var x = -1;
                    var r= 0;
                    // console.log(data);

                    var currency = new Intl.NumberFormat();
                    data.coins.forEach(element => {

                    var coin_history = getHistory(element.id);
                        
                    all_coin_history[i] = coin_history;

                    i++;
                
                    $('#cryptoCoin').append(`
                    <tr class="uuid" data-id="${element.id}" data-bs-toggle="modal" data-bs-target="#showDetails">
                    <td> ${element.rank}</td>
                    <td>
                        <div 
                        class="profilename_wrapper" >
                    <div class="profile_logo">
                        <img class="img" src="${element.iconUrl}">
                    </div>
                            <span class="profile_name"> 
                            <a class="currencylink" href="#"> ${element.name}</a>
                            <p class="profile_symbol"> ${element.symbol}</p>
                            </span>
                        </div>
                    </td>
                    <td>${data.base.sign} ${ currency.format(element.price)}</td>
                    <td>${data.base.sign} ${currency.format(element.marketCap)}</td>
                
                    <td id="chart_div${r}"></td>
                    
                    
                    </tr>
                    `)
                    x++;
                    all_coin_change[x] = element.change;
                    r++;
                    drawAllGraph(all_coin_history,all_coin_change);
                });

                $('#showDetails').on('show.bs.modal', function(e) {
                    var each_coin_history = new Array();
                    var each_news= new Array();

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
                    }
                    
                    });

                    $('.modal-footer').html(`
                    <button type="submit" class="btn followCoin" style="background-color:#6930c3; color:#80ffdb;" data-id="${id}"><i class="fas fa-plus-circle"></i></button>
                    `);

                    $('.followCoin').on('click', (e) => {
                        var id = $(e.currentTarget).attr('data-id');

                        var cryptoid = $(e.currentTarget).attr('data-id');
                        // console.log(cryptoid);
                        var userid = localStorage.getItem('user_id');

                        let datainput= `
                        <form action="" id="followCrypto">
                        <input type="text" id="cryptoid" name="cryptoid" value="${cryptoid}">
                        <input type="text" id="user_id" name="user_id" value="${userid}">
                        </form>
                        `;

                        var data = $(datainput).serialize();
                        // console.log(data);

                        $.ajax({
                            
                            type: "post",
                            url: "/api/Crypto",
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
                                // console.log('error');
                                alert('Login first to follow')
                            }
                        });
                    });
                });

                }
            });

}
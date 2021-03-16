export default function getHistory(coin_ID) {  
    var coin_history = new Array();

    $.ajax({
        method: 'GET',
        url:
            'https://api.coinranking.com/v1/public/coin/'+ coin_ID +'/history/24h?base=PHP',

        success: function (response) {
        
            var historydata = response.data;

            var i = -1;

            historydata.history.forEach(element => {
                i++
                coin_history[i]=[element.timestamp,parseFloat(element.price)];


            });


        
    } });
return(coin_history);

}






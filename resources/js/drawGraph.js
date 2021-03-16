// import genreModal from "./genreModals";
export default function drawGraph(each_coin_history) {


    // console.log(each_coin_history);


    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('number', 'timestamp');
        data.addColumn('number', 'price');

        data.addRows(each_coin_history);

        var options = {
            legend:{position:'none'},
            hAxis: {
                
                // baselineColor: 'none',
                // textPosition: 'none',
                // gridlines: {
                //     color: 'transparent',
                // }
            },
            vAxis: {
                // baselineColor: 'none',
                // textPosition: 'none',
                // gridlines: {
                //     color: 'transparent',
                    
                // }
            },
            series: {
                0: { color: '#6930c3' }
            },
            lineWidth: 2,
            width:750,
            height:270
            };

        var chart = new google.charts.Line(document.getElementById('detail_chart'));

        chart.draw(data, google.charts.Line.convertOptions(options));
    }


}
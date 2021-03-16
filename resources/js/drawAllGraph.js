export default function drawAllGraph(all_coin_history, all_coin_change){
    // console.log(all_coin_change);

for(let r=0; r<all_coin_history.length; r++){

    
        google.charts.load('current', {
            callback: function () {
            var data = new google.visualization.DataTable();
            data.addColumn('number', 'timestamp');
            data.addColumn('number', 'prices');

            //PASSING CHART DATA IN LOOP
            data.addRows(all_coin_history[r]);

if(all_coin_change[r]<0){
    var options = {
            backgroundColor: { fill:'transparent' },
            legend:{position:'none'},
            hAxis: {
                baselineColor: 'none',
                textPosition: 'none',
                gridlines: {
                    color: 'transparent',
                }
            },
            vAxis: {
                baselineColor: 'none',
                textPosition: 'none',
                gridlines: {
                    color: 'transparent',
                    
                }
            },
            series: {
                0: { color: '#e43a19' }
            },
            lineWidth: 1.5,
            width:100,
            height:80
            };
        }
        else{
            var options = {
                backgroundColor: { fill:'transparent' },
                legend:{position:'none'},
                hAxis: {
                    baselineColor: 'none',
                    textPosition: 'none',
                    gridlines: {
                        color: 'transparent',
                    }
                },
                vAxis: {
                    baselineColor: 'none',
                    textPosition: 'none',
                    gridlines: {
                        color: 'transparent',
                        
                    }
                },
                series: {
                    0: { color: '#30e3ca' },
                },
                lineWidth: 1.5,
                width:100,
                height:80
                };
        }

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'+r));
        chart.draw(data, options);
    if(all_coin_change[r]<0){
        $('#chart_div'+r).append('<label class="change" style="color:#e43a19">'+all_coin_change[r]+'</label>');
    }
    else{
        $('#chart_div'+r).append('<label class="change" style="color:#30e3ca"> +'+all_coin_change[r]+'</label>');
    }
    },
        packages: ['corechart']
        });
    }


    
}

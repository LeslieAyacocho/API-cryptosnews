export default function news(type) {  
    console.log("This is working.");

    let tableContent=`
    <thead class="">
        <tbody id="cryptoNews">
        </tbody>
    </thead>
    `

    $('#tableContent').html(tableContent);
    $.ajax({
            type: 'GET',
            url: 'https://min-api.cryptocompare.com/data/v2/news'+
            '/?api_key=d3fb5e4f2e639187374967645a9ffdd24789d3d1884df5965fc36d5688046429',
            success: function (response) {
                let data = response.Data
                console.log(data);
                data.forEach(element => {
                $('#cryptoNews').append(`
                    <div class="col col-12 col-md-6 col-lg-4 mx-auto"> 
                        <div class="card mx-auto" style="width: 40rem;">
                            <div class="card-header">
                            <h5 class="card-title"><a href="${element.url}"><b>${element.title}</b></a></h5>
                            </div>
                            <img src="${element.imageurl}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">#${element.id}</p>
                                <p class="card-text">tags:${element.tags}</p>
                            </div>
                            <div class="card-body">
                            </div>
                        </div>
                    </div>
                `)
			});
		},
	})
}

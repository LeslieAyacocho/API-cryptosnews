<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>CryptoStock</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Cabin&family=Roboto:wght@900&display=swap" rel="stylesheet"> 

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

    
        
</head> 
<body>

<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
        <a href="#" class="navbar-brand nav-link link" style="color: #80ffdb;" data-id="Movie">CoinStock</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a href="#" class="nav-link link" style="color: #80ffdb;" data-id="crypto">CryptoCurrency Ranking</a>
            </li>
            <li class="nav-item">
            <a href="#" class="nav-link link" style="color: #80ffdb;"data-id="news">News</a>
            </li>
        </ul>

        <!-- <ul class="form-inline my-2 my-lg-0">
            <button type="submit" class="btn  mr-sm-2" data-bs-toggle="modal" data-bs-target="#loginModal">LOGIN</button>
            <button type="submit" class="btn  mr-sm-2" data-bs-toggle="modal" data-bs-target="#registerModal">REGISTER</button>
        </ul> -->
            
        </div>
    </div>
</nav>
        @yield('body')

        <link rel="stylesheet" href="{{ URL::asset('css/main.css')}}" />

        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>   
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        
        <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
        <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
        
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
                integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
        
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
        
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        

        


        <script type="text/javascript" src="{{ URL::asset('js/main.js')}}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/app.js')}}"></script>
            
</body>
</html>
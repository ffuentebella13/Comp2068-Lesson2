//include express pack
const express = require('express');
const app = express();
const https = require('https');
//css
//link.href = 'style.css';

app.get('/',(request, response) =>{
    https.get('https://insult.mattbas.org/api/insult',resp => {
        resp.on('data', chunk => {
            response.send(`
                <http>
                    <head><title>Oh Snap</title></head>
                    <style>
                        body{
                            font-family: "Verdana", Geneva, sans-serif;
                        }
                        h1{  
                            font-size:70px;
                            position: relative;
                            animation: leftToRight 7s 5;      
                            animation-direction: alternate;
                            animation-iteration-count: infinite;
                        }
                        header{
                            background: repeating-linear-gradient( 
                                120deg,
                                #E24C3B,
                                #E24C3B 20px,
                                #FBF3EF 20px,
                                #FBF3EF 40px,
                                #0088E0 40px,
                                #0088E0 60px);
                                height: 10px;
                                width: 100%;
                        }
                        div{
                            margin-top:20%;
                            font-size:28px;
                            color:#fefe;
                            position: relative;
                            animation: animations 6s 5;
                            animation-direction: alternate-reverse;
                            animation-iteration-count: infinite;
                            width: 90%;
                            height:80px;
                        }
                        @keyframes animations {
                            0%   {background: #355C7D; left: 0px; top: 0px;}
                            25%  {background: #6C5B7B; left: 200px; top: 0px;}
                            50%  {background: #C06C84; left: 200px; top: 200px;}
                            75%  {background: #F67280; left: 0px; top: 200px;}
                            100% {background: #F67280; left: 0px; top: 0px;}
                          }
                          @keyframes leftToRight {
                            0%   {color: #355C7D; left: 0%; top: 0px;}
                            100%  {color: #6C5B7B; left: 75%; top: 0px;}
                          }
                          
                    </style>
                    <body>            
                        <header>
                            <h1>Oh Snap!</h1>
                        </header>
                        <div>
                          <p>
                            ${chunk.toString()}!
                          </p>
                        </div>
                    </body>
                </http>
            `);
        });
    });
});

app.listen(process.env.PORT || 3000);
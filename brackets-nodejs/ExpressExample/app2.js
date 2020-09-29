var express = require('express');
http = require('http');

var app = express();
app.use(function(req, res,next){
    console.log('첫 번째 미들웨에서 요청을 처리함.');

    res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8'});
    res.end('<h1>Express is result of respond about server.</h1>');
});

http.createServer(app).listen(3006, function(){
    console.log('Express server starts at 3006 port.');
});
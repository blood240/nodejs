var http = require('http');

//웹 서버 객체를 만든다.
var sever = http.createServer();

//웹 서버를 시작하여 3000번 포트에서 대기합니다.
var port = 3000;
sever.listen(port, function(){
    console.log('웹 서버가 시작되었습니다. : %d', port);
});
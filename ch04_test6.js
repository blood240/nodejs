
var fs = require('fs');

//파일을 비동기식 으로읽어 들입니다.
fs.readFile('./package.json', 'utf8', function(err, data) {
    //읽어들인 data를 출력한다.
    console.log(data);
});

console.log('프로젝트 폴더 안의 패키지 제이슨  파일을 읽도록 요청했습니다.123');
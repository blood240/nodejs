var url =require('url');

//object make the adrres string
var curURL = url.parse('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=steve+jobs&oquery=steve+jobs&tqi=U2UPfsp0JywssS%2F6QeGssssstKG-381231');

//string make the URL object
var curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.log(curURL);

// require divide the paramiter
var querystring = require('querystring');
var parm = querystring.parse(curURL.query);

console.log('요청 파라미터 중 쿼리의 값 : %s', parm.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(parm));
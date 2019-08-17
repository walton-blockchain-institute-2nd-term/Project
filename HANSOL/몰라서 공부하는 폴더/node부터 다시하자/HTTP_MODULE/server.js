var http = require('http'); // http 프로토콜을 쓰기위함인건가?
var fs = require('fs');
var url = require('url');

// 서버를 생성
http.createServer( function (request, response){
    // URL 뒤에있는 디렉토링/ 파일이름 을 파싱해 낸다
    var pathname = url.parse(request.url).pathname;
    console.log("Request for"+pathname+ "received.");

    // 들어온 파일 이름(경로 이름?)이 비어있으면 /index.html 로 가게 설정
    if (pathname=="/"){
        pathname = "/index.html";
    }

    // 파일(경로) 읽기
    // substr은 뭐하는 함수지 ?
    fs.readFile(pathname.substr(1), function(err, data){
        if (err) {
            console.log(err);
            // 페이지를 찾을 수 없음 404 ERROR
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            // 페이지를 찾을 수 있음 200
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }
        // response 종료
        response.end();
    })
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
var http = require("http");

var port = process.env.PORT || 80;

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.end("<h1 align='center'>Heyyo v2 :)</h1>");
}).listen(port);

console.log('Server running at http://127.0.0.1:'+port);
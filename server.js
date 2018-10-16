var http = require("http");

var port = process.env.PORT || 80;

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   // Send the response body as "Hello World"
   response.end("<h1 align='center'>Heyyo v3 :)</h1>");
}).listen(port);

// Console will print the message
console.log('Server running at http://127.0.0.1:'+port);
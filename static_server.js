var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (request, response) {
    var q = url.parse(request.url, true);
    var filename = '.' + q.pathname;

    // Read file
    fs.readFile(filename, function (err, data) {
        // Send error response
        if (err) {
            response.writeHead(404, {'Content-Type' : 'text/html'});
            return res.end('404 Not Found');
        }

        //Send response with file static content
        response.writeHead(200, {'Content-Tyoe' : 'text/htnl'});
        response.send(data);
        return response.end();
    });
}).listen(8000);

console.log('Server is running on http://localhost:8000');

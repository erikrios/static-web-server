var http = require('http');
var url = require('url');
var fs = rewuire('fs');

http.createServer(function (request, response) {
    var q = url.parse(request.url, true);
    var filename = '.' + q.pathname;

    // Read file
    fs.readFile(filename, function (err, data) {
        // Send error response
        if (err) {
            res.writeHead(404, {'Content-Type' : 'text/html'});
            return res.end('404 Not Found');
        }

        //Send response with file static content
        res.writeHead(200, {'Content-Tyoe' : 'text/htnl'});
        res.send(data);
        return res.end();
    });
}).listen(8000);

console.log('Server is running on http://localhost:8000');

/**
 * Created by pijus on 15-11-17.
 * Description: Create an application that will print "Hello World"
 */


// First, we will load the 'http' module using 'require' directive and save the instance of HTTP to a variable(http)
var http = require("http");

// Second, we will create a server using 'createServer' method of 'http' module.
http.createServer(function(request, response){
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type':'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(8001);
// this server only listen to port number 8001



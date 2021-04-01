const http = require('http');

// create a server with http
const server = http.createServer(function(req, res) {
    //Headers
    //Headers are extra info about req and res 
    // Headers Include Content-Type, status
    //Content type tell the browser what to expect
    // Status is status for Clients

    // Headers 
    //res.writeHead(200, {'content-Type': 'text/plain'})
    // res.writeHead(200, {'content-Type': 'application/json'})
    res.writeHead(200, {'content-Type': 'text/html'})

    // Sending a response
    // res.end('Hello World')
    // res.end(`
    //     {
    //         "name": "Babatunde",
    //         "College": "Unilag",
    //         "Occupation": "Backend dev" 
    //     }
    // `);

    res.end(`
        <html>
            <body>
                <h1>Zuri Training</h1>
                <p> Welcome to the best training in Nigeria</h1>
            </body>
        </html>
    `)

});

//Create a port

server.listen(4000, 'localhost')


console.log("Yes, You have a created a server");
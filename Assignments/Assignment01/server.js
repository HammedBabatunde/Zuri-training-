const http = require('http');

const server = http.createServer(function(req, res) {
    // res.writeHead(200, {'content-Type': 'text/html'})

    // res.writeHead(200,{'content-Type': 'application/json'})
    res.writeHead(200,{'content-Type': 'html'})

    res.end(`
    <html>
      <body>
        <h1>Zuri Training</h1>
        <p> Welcome to the best training in Nigeria</h1>
     </body>
    </html>
    `);
});

//Create a port

server.listen(4000, 'localhost');


console.log("Yes, You have a created a server");
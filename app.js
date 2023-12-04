const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 8080

function renderHTML(path, res) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: File Not Found');
        } else {
            res.write(data)
        }
        res.end()
    });
}

const server = http.createServer(function(req, res) {
    var q = url.parse(req.url, true);

    res.writeHead(200, {'Content-Type': 'text/html'});

    switch(q.pathname) {
        case '/':
            renderHTML('./index.html', res);
            break;
        case '/cs212':
            renderHTML('./public/cs212/lab/7/index.html', res);
            break;
        default:
            res.writeHead(404)
            res.write('Route not defined');
            res.end();
    }

})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})

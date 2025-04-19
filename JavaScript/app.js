const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write();
        res.end();
    } else {

    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> Kaku ka page </title></head>');
    res.write('<body> <h1>THIS IS THE RESPONSE FROM THE SERVER</h1> </body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);
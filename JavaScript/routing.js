const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    console.log('url:', url);
    console.log('method:', method);

    if(url === '/'){
        fs.readFile('../pages/homepage.html', (err, data) => {
            if (err) {
              res.writeHead(500, {'Content-Type': 'text/plain'});
              res.end('Internal Server Error');
              return;
            }
      
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data); // <- Sends the full HTML page at once
          });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html>');
        res.write('<head><title> Kaku ka page </title></head>');
        res.write('<body bgcolor="pink"> <h1>THIS IS THE MESAAGE</h1> </body>');
        res.write('</html>');
        return res.end();
    } 
    
}

module.exports = requestHandler;


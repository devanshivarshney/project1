const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    console.log('url:', url);
    console.log('method:', method);

    if(url === '/'){
        fs.readFile('../pages/index.html', (err, data) => {
            if (err) {
              res.writeHead(500, {'Content-Type': 'text/plain'});
              res.end('Internal Server Error');
              return;
            }
      
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data); // <- Sends the full HTML page at once
          });
    } else if(url === '/pages/accessories.html'){
        fs.readFile('../pages/accessories.html', (err, data) => {
            if (err) {
              res.writeHead(500, {'Content-Type': 'text/plain'});
              res.end('Internal Server Error');
              return;
            }
      
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data); // <- Sends the full HTML page at once
          });
    } else if(url === '/pages/clothes.html'){
        fs.readFile('../pages/clothes.html', (err, data) => {
            if (err) {
              res.writeHead(500, {'Content-Type': 'text/plain'});
              res.end('Internal Server Error');
              return;
            }
      
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data); // <- Sends the full HTML page at once
          });
    } else if(url === '/pages/food.html'){
        fs.readFile('../pages/food.html', (err, data) => {
            if (err) {
              res.writeHead(500, {'Content-Type': 'text/plain'});
              res.end('Internal Server Error');
              return;
            }
      
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data); // <- Sends the full HTML page at once
          });
    } else if(url === '/pages/toys.html'){
        fs.readFile('../pages/toys.html', (err, data) => {
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


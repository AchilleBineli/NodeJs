const fs = require('fs');


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    const headerHtml = '<header><title>User home page</title></header>';
    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write(headerHtml);
       
        res.write('<body>');
        res.write('<h1>Welcome to the users homepage!!!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button>Add Name</button></input></form>');
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write(headerHtml);
        res.write('<body>');
        res.write('<li>User1</li><li>User2</li><li>User3</li>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url == '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.status = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write(headerHtml);
    res.write('<body><h1>Bienvenue dans la page des usagers!!!</h1></body>');
    res.write('</html>');
    res.end()
}


exports.handler = requestHandler;
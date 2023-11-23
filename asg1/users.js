const fs = require('fs');

const reqHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<title><body>"Welcome to this web page"</body></title>');
        res.write('</html>');
        res.end();
    }
    if (url === '/users')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<title><body>"Welcome to this web page"</body></title>');
        res.write('</html>');
        res.end();
    }
};

exports.handler = reqHandler;
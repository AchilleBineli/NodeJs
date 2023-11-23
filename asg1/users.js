const fs = require('fs');

const reqHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/')
    {
        res.write('<title><body>"Welcome to this web page"</body></title>');

    }
};

exports.handler = reqHandler;
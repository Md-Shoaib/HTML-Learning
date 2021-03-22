// To make the server the code begins as-
const http = require('http');
const fs = require('fs');
// Now we will make random localhost and port to listen as follows-
const hostname = '127.0.0.1';
const port = '3000';

// Now to get the requests of different pages, we make their files and read them as follows-
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contact = fs.readFileSync('./contact.html');


// We will now create a server and gives it an arrow function as follows-
const server = http.createServer((req, res) => {

    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (url == '/') {
        res.end(home);

    } else if (url == '/about') {
        res.end(about);

    } else if (url == '/services') {
        res.end(services);

    } else if (url == '/contact') {
        res.end(contact);

    } else {
        res.statusCode = 404;
        res.end("<h1> 404 Not Found </h1>")
    }

    // res.end('Hello World');
});
// And finally, we will make the port to listen-
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

// We will now make 4 different files like index.html, about.html, services.html, and contact.html. In index.html file, we will some basic HTML and serve the following file back in index.js as follows-

// Backend is all about serving the files. The primary task in the backend is to serve the files according to the requests of the user. 

// Now we will make a new server and see how to serve it according to the user’s request.

const http = require('http');
const fs = require('fs');
// Now we will write the line of code to read a file
const fileContent = fs.readFileSync('34_boxShadowTextShadow.html')
// The final step is to make the server and serve the file
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(fileContent);
});
// Till now we have made the server and now we will make this server listen on its port. Suppose we want to make it listen to port 80
server.listen(80, '127.0.0.1', () => {
    console.log("Listening on port 80");
});

// The reason for listening to the server at port 80 was, we do not have to explicitly write anything else in the URL. For example, if we have taken 8000, then we have to explicitly write it on the URL to get the request back.
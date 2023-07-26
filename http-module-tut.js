// http module tutorial 

const http = require('http');

// req - request by an end-user
// res - response sent

const server = http.createServer((req, res)=>{
    if (req.url == '/'){
        res.end("Welcome to the first http page!");
        // serving the page requested by the user
    }
    else if (req.url == '/about'){
        res.end('This is the about page.');
    }
    else{
        res.end(`
     <h1>404 Error</h1>
     <p>The page you requested is not found</p>
    `)}
    // if a page requested is not found
});

server.listen(5000); // mention the port that the page is listening in
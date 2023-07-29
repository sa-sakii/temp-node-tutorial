const http = require('http');
const { readFileSync } = require('fs');

// read and get all files 
const homePage = readFileSync('./PROJECT-GYM/index.html');
const homeStyles = readFileSync('./PROJECT-GYM/style.css');
const homeLogo = readFileSync('./PROJECT-GYM/logo.jpg');
const homeBackGrnd = readFileSync('./PROJECT-GYM/homebg.jpg');

// create a server 
const server = http.createServer((req, res)=>{
    const url = req.url;  // serving multiple resources 
    if (url == '/'){
        res.writeHead(200, {'content-type':'text/html'})   
        res.write(homePage)
        res.end()
    }
    else if (url == '/style.css'){
        res.writeHead(200, {'content-type':'text/css'})   
        res.write(homeStyles)
        res.end()
    }
    else if (url == '/homebg.jpg'){
        res.writeHead(200, {'content-type':'image/jpg'})   
        res.write(homeBackGrnd)
        res.end()
    }
    else if (url == '/logo.jpg'){
        res.writeHead(200, {'content-type':'image/jpg'})   
        res.write(homeLogo)
        res.end()
    }            
    else if (url == '/about'){
        res.writeHead(200, {'content-type':'text/html'})   
        res.write('<h1>About page</h1>')
        res.end()
    }

    else{
        // if resource not found   
        res.writeHead(404, {'content-type':'text/html'})   
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})

server.listen(5000)
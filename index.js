import http from 'node:http';
import homePage from './home.js';
const server = http.createServer((req, res) => {
  console.log(req.url);      
    if(req.url==='/')
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homePage);   
    }         
});
server.listen(8080);
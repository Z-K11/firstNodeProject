import http from 'node:http';
const server = http.createServer((req, res) => {
  console.log(req.url);      
    if(req.url==='/')
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(home);   
    }         
});
server.listen(8080);
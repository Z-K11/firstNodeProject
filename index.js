import http from 'node:http';
import homePage from './home.js';
import aboutPage from './about.js';
import contactPage from './contact.js';
import notFound from './notFound.js';
const server = http.createServer((req, res) => {
  console.log(req.url);      
    if(req.url==='/')
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homePage);   
    }         
    else if(req.url==='/about')
    {
      res.writeHead(200,{"content-type":'text/html'});
      res.write(aboutPage);
      res.end();
    }
    else if(req.url==='/contact')
    {
      res.writeHead(200,{"content-type":'text/html'});
      res.end(contactPage);
    }
    else
    {
      res.writeHead(404,{"content-type":'text/html'});
      res.end(notFound);
    }
});
server.listen(8080);
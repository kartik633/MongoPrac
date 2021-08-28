const { Console } = require('console');
const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{


  res.setHeader('Content-Type','text/html')
  console.log(res.url);

  if(req.url == '/')
  {
    res.statusCode = 200;
    res.end('<h1> This is a Website created by Kartik </h1> <p> This is the learning phase site created by Kartik </p>');
  }
  else if(req.url == '/about')
  {
    res.statusCode = 200;
    res.end('<h1> Kartik About </h1> <p> CSE from SRM </p>');
  }
  else if(req.url == '/hello')
  {
    res.statusCode = 200;
    const data = fs.readFileSync('index.html');
    res.end(data.toString());
  }
  else
  {
    res.statusCode = 404;
    res.end('<h1> Not Found </h1> <p> The page you are finding is not their </p>');
  }
})

server.listen(port,()=>{
  console.log('Server is listening on port ${port}');
});

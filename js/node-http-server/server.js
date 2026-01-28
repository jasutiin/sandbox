import http from 'http';

const PORT = 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  console.log('received req');
  console.log(`${req.url}`);
  console.log(`${req.method}`);

  if (req.method == 'GET' && req.url == `/`) {
    console.log('hey');
    try {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('root');
    } catch (error) {
      console.log(error);
      res.end('lol');
    }
  }

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method == 'POST' && req.url == '/hey') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const reqBody = JSON.parse(body);
        console.log(reqBody);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hey');
      } catch (err) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('invalid JSON');
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`created server and listening on port ${PORT}`);
});

// in terminal, do curl http://localhost:8080/ to make a simple GET request to this server
// with the POST request lwk i just used Postman lol

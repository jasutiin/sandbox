to run:

1. run server first by doing `node server.js`
2. in another terminal, do `node client.js`

should print in the server terminal what you sent from the client

**findings**

- express abstracts away A LOT of the http logic. with node, you have to treat these requests as chunks of data being sent across the network, but with express it waits until the whole request has been processed so all you have to do is use `.json()`
- client sends preflight requests first before the actual request, so the request method that the server receives is `OPTIONS`. the server needs to handle this
- CORS lol ^
- if server is sending back `text/plain` Content-Type, then the client has to treat it as text by using `.text()` instead of `.json()`
- double check if filters are applied in the browser debug console. i was so confused for a sec why the response was returning 200 in the network tab, but there were no logs in console

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const WebSocket = require('ws');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const nextPort = 3000; // Port for Next.js server
const wsPort = 4000; // Separate port for WebSocket server

const app = next({ dev, hostname, port: nextPort });
const handle = app.getRequestHandler();

const wss = new WebSocket.Server({ port: wsPort }); // Setup WebSocket server on a different port
let clients = [];

wss.on('connection', function(socket, req) {
    const ip = req.socket.remoteAddress; // Get IP address from the request
    clients.push({ socket, ip });

    // Send data about all connected clients
    broadcast({
        type: 'update',
        count: clients.length,
        clients: clients.map(client => client.ip) // Send IP addresses
    });

    socket.on('close', () => {
        // Remove the closed connection from the clients array
        clients = clients.filter(client => client.socket !== socket);
        broadcast({
            type: 'update',
            count: clients.length,
            clients: clients.map(client => client.ip) // Update IP addresses
        });
    });
});

function broadcast(data) {
    clients.forEach(({ socket }) => {
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify(data));
        }
    });
}

app.prepare().then(() => {
  const server = createServer((req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === '/a') {
        app.render(req, res, '/a', query);
      } else if (pathname === '/b') {
        app.render(req, res, '/b', query);
      } else {
        handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  });

  server.listen(nextPort, () => {
    console.log(`> Ready on http://${hostname}:${nextPort}`);
  });
});

console.log(`WebSocket server is running on ws://${hostname}:${wsPort}`);

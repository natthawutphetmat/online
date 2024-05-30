const WebSocket = require('ws');
const PORT = 3001;
const wss = new WebSocket.Server({ port: PORT });

let clients = [];

wss.on('connection', function(socket, req) {
    const ip = req.socket.remoteAddress; // รับ IP address
    clients.push({ socket, ip });

    // ส่งข้อมูลของทุก clients
    broadcast({
        type: 'update',
        count: clients.length,
        clients: clients.map(client => client.ip) // ส่ง IP addresses
    });

    socket.on('close', () => {
        clients = clients.filter(client => client.socket !== socket);
        broadcast({
            type: 'update',
            count: clients.length,
            clients: clients.map(client => client.ip) // อัพเดท IP addresses
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

console.log(`WebSocket server is running on ws://localhost:${PORT}`);

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Servir archivos estáticos (como el index.html)
app.use(express.static(path.join(__dirname)));

const players = {};

wss.on('connection', (ws) => {
    const playerId = Math.random().toString(36).substring(7);
    console.log(`Jugador conectado: ${playerId}`);

    players[playerId] = { x: 0, y: 0, health: 100 };

    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            if (data.type === 'move') {
                players[playerId].x = data.x;
                players[playerId].y = data.y;
                
                const update = JSON.stringify({ type: 'state', players });
                wss.clients.forEach(client => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(update);
                    }
                });
            }
        } catch (e) {
            console.error('Error procesando mensaje:', e);
        }
    });

    ws.on('close', () => {
        console.log(`Jugador desconectado: ${playerId}`);
        delete players[playerId];
    });
});

server.listen(3000, () => {
    console.log('Servidor web y WebSocket corriendo en http://localhost:3000');
});

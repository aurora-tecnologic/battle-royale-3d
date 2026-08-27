const { CombatSystem } = require('../systems/CombatSystem');
const { ExtractionSystem } = require('../systems/ExtractionSystem');

class WebSocketServer {
    constructor(wss, gameState, roomManager) {
        this.wss = wss;
        this.gameState = gameState;
        this.roomManager = roomManager;
        this.combatSystem = new CombatSystem(gameState);
        this.extractionSystem = new ExtractionSystem(gameState);
        this.clients = new Map();
    }

    handleConnection(ws) {
        console.log('Conexión WebSocket establecida');

        ws.on('message', (message) => {
            try {
                const data = JSON.parse(message);
                this.handleMessage(ws, data);
            } catch (e) {
                console.error('Error procesando mensaje:', e);
            }
        });

        ws.on('close', () => {
            const playerId = this.clients.get(ws);
            if (playerId) {
                this.clients.delete(ws);
            }
        });
    }

    handleMessage(ws, data) {
        if (data.type === 'register') {
            this.gameState.registerPlayer(data.payload.username, data.payload.displayName, data.payload.whatsapp)
                .then(player => {
                    this.clients.set(ws, player.id);
                    ws.send(JSON.stringify({ type: 'register_success', payload: { player: player.getStats() } }));
                });
        }
    }
}

module.exports = { WebSocketServer };

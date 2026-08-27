class WhatsAppBridge {
    constructor(gameState) {
        this.gameState = gameState;
    }
    async initialize() {
        console.log('📱 WhatsApp Bridge inicializado (Modo simulado)');
    }
    async handleMessage(phone, msg) {
        return "Comando recibido";
    }
}
module.exports = { WhatsAppBridge };

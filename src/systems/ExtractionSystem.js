class ExtractionSystem {
    constructor(gameState) {
        this.gameState = gameState;
        this.extractionRange = 3;
        this.extractionCooldown = 30;
    }

    extract(player, terminal) {
        if (!terminal.isActive) {
            throw new Error('Terminal en enfriamiento');
        }
        const secured = player.secureWealth();
        terminal.isActive = false;
        terminal.cooldown = this.extractionCooldown;
        return {
            success: true,
            secured: secured,
            message: `Riqueza asegurada: +${secured.coins} monedas`
        };
    }
}

module.exports = { ExtractionSystem };

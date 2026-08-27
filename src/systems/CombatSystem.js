class CombatSystem {
    constructor(gameState) {
        this.gameState = gameState;
    }

    processShot(player, room) {
        if (!player.isAlive) return null;
        return {
            shot: { damage: 25 },
            hit: null
        };
    }
}

module.exports = { CombatSystem };

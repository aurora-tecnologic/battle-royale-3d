class Room {
    constructor(code, mode, hostId) {
        this.code = code;
        this.mode = mode;
        this.hostId = hostId;
        this.players = new Map();
        this.bots = new Map();
        this.loot = new Map();
        this.maxPlayers = 60;
        this.isActive = false;
    }

    addPlayer(player) {
        player.currentRoom = this.code;
        this.players.set(player.id, player);
    }

    removePlayer(playerId) {
        const player = this.players.get(playerId);
        if (player) {
            player.currentRoom = null;
            this.players.delete(playerId);
        }
    }

    getState() {
        return {
            code: this.code,
            mode: this.mode,
            playerCount: this.players.size,
            isActive: this.isActive
        };
    }
}

module.exports = { Room };

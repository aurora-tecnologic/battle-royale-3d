class Player {
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.displayName = data.displayName;
        this.whatsapp = data.whatsapp;
        this.coins = data.coins || 0;
        this.gems = data.gems || 0;
        this.securedCoins = data.securedCoins || 0;
        this.securedGems = data.securedGems || 0;
        this.wins = data.wins || 0;
        this.kills = data.kills || 0;
        this.matchesPlayed = data.matchesPlayed || 0;
        this.health = 100;
        this.shield = 50;
        this.position = { x: 0, y: 110, z: 0 };
        this.rotation = { x: 0, y: 0, z: 0 };
        this.isAlive = true;
        this.currentRoom = null;
    }

    takeDamage(amount) {
        if (!this.isAlive) return;
        if (this.shield > 0) {
            const shieldDamage = Math.min(this.shield, amount);
            this.shield -= shieldDamage;
            amount -= shieldDamage;
        }
        if (amount > 0) {
            this.health -= amount;
        }
        if (this.health <= 0) {
            this.health = 0;
            this.isAlive = false;
        }
        return { health: this.health, shield: this.shield, alive: this.isAlive };
    }

    secureWealth() {
        this.securedCoins += this.coins;
        this.securedGems += this.gems;
        const secured = { coins: this.coins, gems: this.gems };
        this.coins = 0;
        this.gems = 0;
        return secured;
    }

    updatePosition(position, rotation) {
        this.position = position;
        this.rotation = rotation;
    }

    respawn() {
        this.health = 100;
        this.shield = 50;
        this.isAlive = true;
        this.position = { x: 0, y: 110, z: 0 };
    }

    getStats() {
        return {
            id: this.id,
            displayName: this.displayName,
            coins: this.coins,
            gems: this.gems,
            wins: this.wins,
            kills: this.kills
        };
    }
}

module.exports = { Player };

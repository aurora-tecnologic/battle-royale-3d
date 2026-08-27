class Bot {
    constructor(name, room) {
        this.id = `bot_${Date.now()}_${Math.random()}`;
        this.name = name;
        this.room = room;
        this.type = Math.random() > 0.5 ? 'soldier' : 'ninja';
        this.health = 100;
        this.shield = 30;
        this.isAlive = true;
        this.position = { x: 0, y: 0, z: 0 };
        this.rotation = { x: 0, y: 0, z: 0 };
        this.detectionRange = 45;
        this.attackRange = 30;
        this.fireRate = 1.5;
        this.lastShot = 0;
        this.state = 'patrol';
        this.target = null;
        this.patrolTarget = null;
        this.moveSpeed = 5;
        this.runSpeed = 8;
    }

    spawnInMap() {
        this.position = {
            x: (Math.random() - 0.5) * 400,
            y: 0,
            z: (Math.random() - 0.5) * 400
        };
        this.generatePatrolTarget();
    }

    update(deltaTime) {
        if (!this.isAlive) return;
        this.lastShot += deltaTime;
    }

    generatePatrolTarget() {
        this.patrolTarget = {
            x: (Math.random() - 0.5) * 400,
            z: (Math.random() - 0.5) * 400
        };
    }
}

module.exports = { Bot };

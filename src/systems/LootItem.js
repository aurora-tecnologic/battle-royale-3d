class LootItem {
    constructor(lootType, position) {
        this.id = `loot_${Date.now()}_${Math.random().toString(36).substring(7)}`;
        this.type = lootType.type;
        this.value = lootType.value;
        this.color = lootType.color;
        this.position = position;
    }
}

module.exports = { LootItem };

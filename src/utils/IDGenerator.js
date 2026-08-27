class IDGenerator {
    static generatePlayerId() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < 3; i++) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        const digits = Math.floor(10000 + Math.random() * 90000);
        return `${result}${digits}`;
    }

    static generateRoomCode() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
}

module.exports = { IDGenerator };

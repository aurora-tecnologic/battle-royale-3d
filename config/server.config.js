module.exports = {
    server: {
        port: process.env.PORT || 3000
    },
    database: {
        url: process.env.MONGODB_URL || 'mongodb://localhost:27017/battle_royale'
    }
};

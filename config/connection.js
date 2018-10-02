module.exports = {
    //Connection: 'mongodb://localhost:27017/inventory'
    Connection: MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/inventory"
}
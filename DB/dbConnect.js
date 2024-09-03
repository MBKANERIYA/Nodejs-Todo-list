let mongoose = require("mongoose")

module.exports.dbConnect = async () => {
    await mongoose.connect(process.env.DB_URL)
    console.log(`SERVER CONNECTED WITH ${process.env.DB_URL}`);
}
let mongoose = require("mongoose")

let todoSchema = new mongoose.Schema({
    task: {},
    status: {},
    deadline: {}
})

let todo = mongoose.model("todoSchema", todoSchema)
module.exports = todo   
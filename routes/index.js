let express = require("express")
let todoRoute = require("./todo.routes")

let routes = express.Router()
routes.use("/todo", todoRoute)
module.exports = routes;
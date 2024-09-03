let express = require("express")
const validate = require("../middleware/validation")
const { schemaValidation } = require("../validation.js")
const { todoController } = require("../conterollers/index.js")

let route = express.Router()

route.post("/create", validate(schemaValidation), todoController.addTodo)
route.get("/get", todoController.getTodo)
route.delete("/delete/:id", todoController.deleteTodo)
route.put("/update/:id", todoController.updateTodo)
route.get("/get/:id", todoController.viewTodo)

module.exports = route
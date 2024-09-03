const { todosSchema } = require("../models");

module.exports.createTodo = (body) => {
    return todosSchema.create(body)
}
module.exports.getAllTodos = () => {
    return todosSchema.find()
}
module.exports.findByIdAndDelete = (id) => {
    return todosSchema.findByIdAndDelete(id)
}
module.exports.findByIdAndUpdate = (id, body) => {
    return todosSchema.findByIdAndUpdate(id, body)
}
module.exports.findById = (id) => {
    return todosSchema.findById(id)
}
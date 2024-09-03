const { todoServices } = require("../services")

module.exports.addTodo = async (req, res) => {

    try {
        let body = req.body
        let todo = await todoServices.createTodo(body)
        res.status(201).json({
            message: "TODO CREATE SUCCESSFULY",
            todo
        })
    } catch (err) {
        res.status(404).json({ err: err.message })
    }
}
module.exports.getTodo = async (req, res) => {
    try {
        let todo = await todoServices.getAllTodos()
        res.status(200).json({
            message: "GET ALL TODOS SUCCESSFULLY",
            todo
        })

    } catch (err) {
        res.status(404).json({ err: err.message })
    }
}
module.exports.deleteTodo = async (req, res) => {
    try {
        let { id } = req.params
        let todo = await todoServices.findByIdAndDelete(id)
        res.status(200).json({
            message: "DELETE TODO SUCCESSFULLY",
            todo
        })
    } catch (err) {
        res.status(404).json({ err: err.message })
    }
}
module.exports.updateTodo = async (req, res) => {
    try {
        let { id } = req.params
        let body = req.body
        let newBody = {
            id,
            ...body
        }

        let todo = await todoServices.findByIdAndUpdate(id, body)
        res.status(201).json({
            message: "TODO UPDATED SUCCESSFULLY",
            newBody
        })
    } catch (err) {
        res.status(404).json({ err: err.message })

    }
}
module.exports.viewTodo = async (req, res) => {
    try {
        let { id } = req.params

        let todo = await todoServices.findById(id)
        res.status(200).json({
            message: "TODO UPDATED SUCCESSFULLY",
            todo
        })
    } catch (err) {
        res.status(404).json({ err: err.message })
    }
}
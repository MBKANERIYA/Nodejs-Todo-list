let joi = require("joi")

let schema = {
    body: joi.object().keys({
        task: joi.string().required(),
        status: joi.string().required().trim(),
        deadline: joi.string().required()
    })
}
module.exports = schema
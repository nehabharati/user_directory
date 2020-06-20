const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema
const UsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = User = mongoose.model('user', UsersSchema)
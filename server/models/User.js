const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true, 
        unique: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    firstName: {
        type: String, 
        required: true, 
    },
    lastName: {
        type: String, 
        required: true
    }
})

UserSchema.plugin(uniqueValidator);
const User = mongoose.model("Users", UserSchema);
module.exports = User;
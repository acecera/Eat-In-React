const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    directions: {
        type: String, 
        required: true, 
        unique: true
    }, 
    ingredients: {
        type: String, 
        required: true, 
        unique: true
    }, 
    count: {
        type: String, 
        required: true,
        unique: true
    }
})

const Recipe = mongoose.model("Recipes", RecipeSchema);
module.exports = Recipe;
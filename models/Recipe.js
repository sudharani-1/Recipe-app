const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  cookingTime: { type: Number, required: true }, // in minutes
  servings: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);

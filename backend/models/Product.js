const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  categoryId: Number,
  stock: Number
})

module.exports = mongoose.model("Product", ProductSchema)
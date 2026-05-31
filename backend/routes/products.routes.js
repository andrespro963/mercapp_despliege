const router = require("express").Router()
const Product = require("../models/Product")

router.get("/", async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

router.get("/:id", async (req, res) => {
  const product = await Product.findOne({ id: req.params.id })
  if (!product) return res.status(404).json({ message: "Producto no encontrado" })
  res.json(product)
})

router.post("/", async (req, res) => {
  const newProduct = new Product(req.body)
  await newProduct.save()
  res.status(201).json(newProduct)
})

router.put("/:id", async (req, res) => {
  const product = await Product.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true }
  )
  res.json(product)
})

router.delete("/:id", async (req, res) => {
  await Product.findOneAndDelete({ id: req.params.id })
  res.json({ message: "Producto eliminado" })
})

module.exports = router
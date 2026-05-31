const router = require("express").Router()
const Product = require("../models/Product")

// GET TODOS
router.get("/", async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

// GET POR ID
router.get("/:id", async (req, res) => {
  const product = await Product.findOne({ id: req.params.id })

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" })
  }

  res.json(product)
})

// POST
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body)
  await newProduct.save()
  res.status(201).json(newProduct)
})

// PUT
router.put("/:id", async (req, res) => {
  const product = await Product.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true }
  )

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" })
  }

  res.json(product)
})

// DELETE
router.delete("/:id", async (req, res) => {
  const product = await Product.findOneAndDelete({ id: req.params.id })

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" })
  }

  res.json({ message: "Producto eliminado" })
})

module.exports = router
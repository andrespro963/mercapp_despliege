const router = require("express").Router()
const Product = require("../models/Product")

router.get("/", async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: "Error servidor" })
  }
})

router.get("/:id", async (req, res) => {
  const product = await Product.findOne({ id: req.params.id })

  if (!product) {
    return res.status(404).json({ message: "No encontrado" })
  }

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
  res.json({ message: "Eliminado" })
})

module.exports = router
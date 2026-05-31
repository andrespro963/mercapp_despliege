const express = require("express")
const router = express.Router()

const { products } = require("../data/db")

router.get("/", (req, res) => {
  res.json(products)
})

router.get("/:id", (req, res) => {

  const id = parseInt(req.params.id)

  const product = products.find(p => p.id === id)

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado"
    })
  }

  res.json(product)
})

// POST
router.post("/", (req, res) => {

  const newProduct = req.body

  if (!newProduct.name || !newProduct.price) {
    return res.status(400).json({
      message: "Nombre y precio son obligatorios"
    })
  }

  newProduct.id = products.length + 1

  products.push(newProduct)

  res.status(201).json(newProduct)
})

// PUT
router.put("/:id", (req, res) => {

  const id = parseInt(req.params.id)

  const index = products.findIndex(p => p.id === id)

  if (index === -1) {
    return res.status(404).json({
      message: "Producto no encontrado"
    })
  }

  products[index] = {
    ...products[index],
    ...req.body
  }

  res.json(products[index])
})

// DELETE
router.delete("/:id", (req, res) => {

  const id = parseInt(req.params.id)

  const index = products.findIndex(p => p.id === id)

  if (index === -1) {
    return res.status(404).json({
      message: "Producto no encontrado"
    })
  }

  products.splice(index, 1)

  res.json({
    message: "Producto eliminado"
  })
})

module.exports = router
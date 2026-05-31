const router = require("express").Router()
const Category = require("../models/Category")

router.get("/", async (req, res) => {
  const categories = await Category.find()
  res.json(categories)
})

router.get("/:id", async (req, res) => {
  const category = await Category.findOne({ id: req.params.id })
  if (!category) return res.status(404).json({ message: "Categoría no encontrada" })
  res.json(category)
})

router.post("/", async (req, res) => {
  const newCategory = new Category(req.body)
  await newCategory.save()
  res.status(201).json(newCategory)
})

module.exports = router
require("dotenv").config()
const mongoose = require("mongoose")

// 🔹 Datos (tu mockData convertido)
const categories = [
  { id: 1, name: "Tecnología" },
  { id: 2, name: "Hogar" },
  { id: 3, name: "Deportes" }
]

const products = [
  {
    id: 1,
    name: "Iphone",
    description: "Iphone 17 pro max",
    price: 1450,
    imageUrl: "/images/iphone17.webp",
    categoryId: 1,
    stock: 5
  },
  {
    id: 2,
    name: "Mesa",
    description: "Mesa familiar",
    price: 450,
    imageUrl: "/images/mesa.webp",
    categoryId: 1,
    stock: 10
  },
  {
    id: 3,
    name: "Raqueta",
    description: "Raqueta de tennis",
    price: 150,
    imageUrl: "/images/raqueta.jpg",
    categoryId: 3,
    stock: 7
  }
]

// 🔹 Esquemas simples (sin modelos separados aún)
const categorySchema = new mongoose.Schema({
  id: Number,
  name: String
})

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  categoryId: Number,
  stock: Number
})

const Category = mongoose.model("Category", categorySchema)
const Product = mongoose.model("Product", productSchema)

// 🔹 Conexión + inserción
const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)

    console.log("🔥 Conectado a MongoDB")

    // limpiar colecciones
    await Category.deleteMany()
    await Product.deleteMany()

    // insertar datos
    await Category.insertMany(categories)
    await Product.insertMany(products)

    console.log("✅ Datos insertados correctamente")

    process.exit()
  } catch (error) {
    console.error("❌ Error:", error)
    process.exit(1)
  }
}

seedDB()
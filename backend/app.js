require('dns').setServers(['8.8.8.8', '1.1.1.1'])
require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const connectDB = require("./data/db")

const app = express()

// Conexión a MongoDB Atlas
connectDB()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// Rutas
app.use("/api/products", require("./routes/products.routes"))

// Ruta 404
app.use((req, res) => {
  res.status(404).json({
    message: "Ruta no encontrada"
  })
})

// PUERTO DINÁMICO (REQUISITO DEL CURSO)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})
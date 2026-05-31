require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const connectDB = require("./data/db")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// Routes
app.use("/api/products", require("./routes/products.routes"))
app.use("/api/categories", require("./routes/categories.routes"))

// Health check (IMPORTANTE PARA RAILWAY)
app.get("/health", (req, res) => {
  res.json({ status: "ok" })
})

// Mongo connection protegida
connectDB().catch(err => {
  console.error("Mongo error:", err)
})

// PORT dinámico
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto", PORT)
})
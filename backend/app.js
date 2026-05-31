const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use(
  "/api/products",
  require("./routes/products.routes")
)

app.use((req, res) => {
  res.status(404).json({
    message: "Ruta no encontrada"
  })
})

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000")
})
const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI no definida")
    }

    await mongoose.connect(process.env.MONGODB_URI)

    console.log("MongoDB conectado")
  } catch (error) {
    console.error("Error MongoDB:", error.message)
    throw error
  }
}

module.exports = connectDB
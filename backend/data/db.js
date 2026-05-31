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

module.exports = {
  products,
  categories
}
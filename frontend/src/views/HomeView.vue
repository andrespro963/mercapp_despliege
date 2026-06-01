<script setup>

import { ref, computed } from "vue"

import { useProducts } from "../composables/useProducts"
import { useCategories } from "../composables/useCategories"
import { useCart } from "../composables/useCart"

import ProductCard from "../components/ProductCard.vue"

const { products, loading, error } = useProducts()
const { categories } = useCategories()
const { cart, addToCart } = useCart()

const search = ref("")
const selectedCategory = ref("")

const deleteProduct = async (id) => {
  try {
    const API_URL = import.meta.env.VITE_API_URL

    await fetch(`${API_URL}/api/products/${id}`, {
      method: "DELETE"
    })

    location.reload()
  } catch (err) {
    console.log(err)
  }
}

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.value.toLowerCase())

    const matchesCategory =
      !selectedCategory.value ||
      product.categoryId == selectedCategory.value

    return matchesSearch && matchesCategory
  })
})
</script>

<template>
  <div class="hero">
    <h1>MercApp</h1>
    <p>Tu tienda online moderna</p>
  </div>

  <h2>Carrito: {{ cart.length }}</h2>

  <input
    v-model="search"
    placeholder="Buscar producto..."
  />

  <select v-model="selectedCategory">
    <option value="">Todas las categorías</option>

    <option
      v-for="category in categories"
      :key="category.id"
      :value="category.id"
    >
      {{ category.name }}
    </option>
  </select>

  <p v-if="loading">Cargando productos...</p>
  <p v-if="error">{{ error }}</p>

  <div class="products">
    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart(product)"
      @delete-product="deleteProduct(product.id)"
    />
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 60px 20px;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: bold;
  color: #111;
  letter-spacing: 2px;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
}

.products {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

input, select {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
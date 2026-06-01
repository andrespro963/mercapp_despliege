import { ref, onMounted } from "vue"

export function useProducts() {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const API_URL = import.meta.env.VITE_API_URL

  const fetchProducts = async () => {
    loading.value = true

    try {
      const response = await fetch(
        `${API_URL}/api/products`
      )

      if (!response.ok) {
        throw new Error("No se pudieron cargar los productos")
      }

      products.value = await response.json()

    } catch (err) {
      error.value = err.message

    } finally {
      loading.value = false
    }
  }

  onMounted(fetchProducts)

  return {
    products,
    loading,
    error
  }
}
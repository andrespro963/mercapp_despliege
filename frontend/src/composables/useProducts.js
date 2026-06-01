import { ref, onMounted } from "vue"

export function useProducts() {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchProducts = async () => {
    loading.value = true
    error.value = null

    try {
      const API_URL = import.meta.env.VITE_API_URL

      console.log("API:", API_URL)

      const response = await fetch(`${API_URL}/api/products`)

      if (!response.ok) {
        throw new Error(`Error ${response.status}`)
      }

      products.value = await response.json()

    } catch (err) {
      console.error(err)
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
import { ref, onMounted } from "vue"

export function useProducts() {

  const products = ref([])

  const loading = ref(false)

  const error = ref(null)

  const fetchProducts = async () => {

    loading.value = true

    try {

      const response = await fetch(
        "http://localhost:3000/api/products"
      )

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
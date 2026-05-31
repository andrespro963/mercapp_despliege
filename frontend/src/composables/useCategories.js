import { ref, onMounted } from "vue"

export function useCategories() {

  const categories = ref([])

  const loading = ref(false)

  const error = ref(null)

  const fetchCategories = async () => {

    loading.value = true

    try {

      const response = await fetch(
        "http://localhost:3000/api/categories"
      )

      categories.value = await response.json()

    } catch (err) {

      error.value = err.message

    } finally {

      loading.value = false

    }

  }

  onMounted(fetchCategories)

  return {
    categories,
    loading,
    error
  }

}
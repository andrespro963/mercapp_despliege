<script setup>

import {
  ref,
  onMounted
} from "vue"

import { useRoute } from "vue-router"

const route = useRoute()

const product = ref(null)

const loading = ref(false)

const error = ref(null)

const fetchProduct = async () => {

  loading.value = true

  try {

    const response = await fetch(

      `http://localhost:3000/api/products/${route.params.id}`

    )

    product.value =
      await response.json()

  } catch (err) {

    error.value = err.message

  } finally {

    loading.value = false

  }

}

onMounted(fetchProduct)

</script>

<template>

  <p v-if="loading">
    Cargando...
  </p>

  <p v-if="error">
    {{ error }}
  </p>

  <div v-if="product">

    <img
      :src="product.imageUrl"
      width="300"
    >

    <h1>
      {{ product.name }}
    </h1>

    <p>
      {{ product.description }}
    </p>

    <h2>
      ${{ product.price }}
    </h2>

  </div>

</template>
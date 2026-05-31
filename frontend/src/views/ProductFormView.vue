<script setup>

import {
  reactive,
  ref
} from "vue"

import { useRouter }
from "vue-router"

const router = useRouter()

const error = ref("")

const form = reactive({

  name: "",

  description: "",

  price: 0,

  imageUrl: "",

  categoryId: "",

  stock: 0

})

const saveProduct = async () => {

  error.value = ""

  // Validaciones

  if (!form.name) {

    error.value =
      "Nombre obligatorio"

    return

  }

  if (form.price <= 0) {

    error.value =
      "Precio inválido"

    return

  }

  if (!form.categoryId) {

    error.value =
      "Seleccione categoría"

    return

  }

  try {

    const response =
      await fetch(

        "http://localhost:3000/api/products",

        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json"

          },

          body: JSON.stringify(form)

        }

      )

    if (!response.ok) {

      throw new Error(
        "Error al guardar"
      )

    }

    alert("Producto creado")

    router.push("/")

  } catch (err) {

    error.value =
      err.message

  }

}

</script>

<template>

  <h1>
    Nuevo Producto
  </h1>

  <p v-if="error">
    {{ error }}
  </p>

  <form @submit.prevent="saveProduct">

    <input
      v-model="form.name"
      placeholder="Nombre"
    >

    <br><br>

    <textarea
      v-model="form.description"
      placeholder="Descripción"
    />

    <br><br>

    <input
      type="number"
      v-model="form.price"
      placeholder="Precio"
    >

    <br><br>

    <input
      v-model="form.imageUrl"
      placeholder="URL imagen"
    >

    <br><br>

    <input
      type="number"
      v-model="form.categoryId"
      placeholder="Categoría"
    >

    <br><br>

    <input
      type="number"
      v-model="form.stock"
      placeholder="Stock"
    >

    <br><br>

    <button>
      Guardar
    </button>

  </form>

</template>
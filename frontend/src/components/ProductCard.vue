<script setup>

defineProps({
  product: Object
})

const emit = defineEmits([
  "add-to-cart",
  "delete-product"
])

const addToCart = () => {

  emit("add-to-cart")

}

</script>

<template>

  <div class="card">

    <img
      :src="product.imageUrl"
      class="image"
    >

    <h3>
      {{ product.name }}
    </h3>

    <p>
      {{ product.description }}
    </p>

    <p class="price">
      ${{ product.price }}
    </p>

    <button @click="addToCart">
      Añadir al carrito
    </button>

    <br><br>

<RouterLink
  :to="`/product/${product.id}`"
>

  Ver detalle

  <br><br>



</RouterLink>

  </div>

</template>

<style scoped>

.card {

  border: 1px solid #ccc;
  padding: 15px;
  width: 230px;
  border-radius: 10px;

}

.image {

  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;

}

.price {

  font-weight: bold;

}

button {

  background: black;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

}

</style>
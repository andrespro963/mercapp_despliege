<script setup>

import {
  useCart
} from "../composables/useCart"

const {

  cart,

  total,

  removeFromCart

} = useCart()

</script>

<template>

  <h1>
    Carrito
  </h1>

  <div
    v-if="cart.length === 0"
  >

    <p>
      El carrito está vacío
    </p>

  </div>

  <div
    v-else
  >

    <div
      class="item"
      v-for="item in cart"
      :key="item.id"
    >

      <img
        :src="item.imageUrl"
        width="120"
      >

      <div>

        <h3>
          {{ item.name }}
        </h3>

        <p>
          Cantidad:
          {{ item.quantity }}
        </p>

        <p>
          Precio:
          ${{ item.price }}
        </p>

        <button
          @click="removeFromCart(item.id)"
        >

          Eliminar

        </button>

      </div>

    </div>

    <h2>
      Total:
      ${{ total }}
    </h2>

  </div>

</template>

<style scoped>

.item {

  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;

}

button {

  background: crimson;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;

}

</style>
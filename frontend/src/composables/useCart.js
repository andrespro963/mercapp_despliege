import {
  ref,
  computed,
  watch
} from "vue"

// localStorage

const storedCart = JSON.parse(
  localStorage.getItem("cart")
)

const cart = ref(
  storedCart || []
)

// Total calculado

const total = computed(() => {

  return cart.value.reduce(
    (acc, item) => {

      return (
        acc +
        item.price * item.quantity
      )

    },
    0
  )

})

// Guardar automáticamente

watch(
  cart,
  () => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart.value)
    )

  },
  {
    deep: true
  }
)

export function useCart() {

  const addToCart = (product) => {

    const existingProduct =
      cart.value.find(
        item => item.id === product.id
      )

    if (existingProduct) {

      existingProduct.quantity++

    } else {

      cart.value.push({

        ...product,

        quantity: 1

      })

    }

  }

  const removeFromCart = (id) => {

    cart.value =
      cart.value.filter(
        item => item.id !== id
      )

  }

  return {

    cart,

    total,

    addToCart,

    removeFromCart

  }

}
<template>

  <nav>

    <RouterLink to="/">
      Inicio
    </RouterLink>

    |

    <RouterLink to="/cart">
      Carrito
    </RouterLink>

    |

    <RouterLink to="/about">
      Acerca de
    </RouterLink>

    |

<RouterLink to="/product/new">
  Nuevo Producto
</RouterLink>

  </nav>

  <hr>

  <Suspense>

    <template #default>

      <RouterView />

    </template>

    <template #fallback>

      <p>
        Cargando...
      </p>

    </template>

  </Suspense>

</template>
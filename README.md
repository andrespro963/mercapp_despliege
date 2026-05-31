# MercApp

This template should help get you started developing with Vue 3 in Vite.

## Datos del estudiante
  - Andres Procel
  - aprocelb@uest.ups.edu.ec
## Funcionalidades implementadas 
 -La aplicación MercApp es una tienda virtual sencilla donde los usuarios pueden visualizar un catálogo de productos, buscar artículos por nombre, filtrarlos por categorías y revisar información detallada de cada producto. Tiene un carrito de compras que permite agregar o eliminar productos, calcular automáticamente el total y mantener la información guardada incluso al cerrar el navegador. El sistema incluye formularios para crear y editar productos con validaciones básicas para evitar errores en los datos ingresados. La aplicación cuenta con navegación entre páginas sin recargar el sitio, manejo de errores, carga optimizada de vistas y una conexión completa con un API REST que administra productos y categorías de forma dinámica.
## Instrucciones básicas de uso
Al iniciar la aplicación se mostrará la página principal con el catálogo de productos disponibles.
Utilizar el buscador para encontrar productos por nombre o descripción.
Seleccionar una categoría en el filtro para mostrar únicamente los productos relacionados.
Presionar el botón “Ver detalle” para visualizar información completa de un producto.
Hacer clic en “Añadir al carrito” para agregar productos al carrito de compras.
Acceder a la sección “Carrito” desde el menú superior para visualizar los productos agregados, sus cantidades y el total acumulado.
Usar el botón “Eliminar” para quitar productos del carrito.
Ingresar a “Nuevo Producto” para registrar nuevos artículos mediante el formulario.

## Tecnologías utilizadas

Frontend:
- Vite
- JavaScript
- CSS

Backend:
- Node.js
- Express

Base de datos:
- MongoDB Atlas

---

## Instalación

Clonar repositorio:

```bash
git clone URL_DEL_REPOSITORIO
cd mercapp
```

---

## Backend

Entrar:

```bash
cd backend
```

Instalar:

```bash
npm install
```

Ejecutar:

```bash
npm run dev
```

Servidor:

```txt
http://localhost:3000
```

---

## Frontend

Entrar:

```bash
cd frontend
```

Instalar:

```bash
npm install
```

Ejecutar:

```bash
npm run dev
```

Aplicación:

```txt
http://localhost:5173
```

---

## Variables de entorno

Backend:
- PORT
- MONGODB_URI
- JWT_SECRET

Frontend:
- VITE_API_URL

---

## Despliegue

Frontend:
Netlify

Backend:
Render / Railway

Base de datos:
MongoDB Atlas
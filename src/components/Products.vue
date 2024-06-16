<template>
  <div class="container">
    <h1 class="my-4">Product List</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="product in products" :key="product.id">
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>${{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>
            <button @click="updateStock(product)" class="btn btn-primary btn-sm">Update Stock</button>
          </td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
// export default {
//   name: 'ProductsList',
//   props: {
//     // products: {
//     //   type: Array,
//     //   required: true,
//     // },
//   },
//   methods: {
//     updateStock(product) {
//       const newStock = parseInt(prompt(`Enter new stock quantity for ${product.name}:`));
//       if (!isNaN(newStock)) {
//         product.stock = newStock;
//       } else {
//         alert('Please enter a valid number.');
//       }
//     },
//   },
// };
</script>

<style>
/* Add custom styles as needed */
</style>

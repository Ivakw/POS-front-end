<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Product List</h2>
      <button class="btn btn-primary" @click="showAddProductModal">Add New Product</button>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>
            <img :src="product.image" alt="Product Image" class="img-thumbnail" style="width: 50px; height: 50px;">
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>${{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>
            <button class="btn btn-warning btn-sm" @click="editProduct(product)">Edit</button>
            <button class="btn btn-danger btn-sm" @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add Product Modal -->
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">Add New Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addProduct">
              <div class="mb-3">
                <label for="productName" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="productName" v-model="newProduct.name" required>
              </div>
              <div class="mb-3">
                <label for="productDescription" class="form-label">Product Description</label>
                <input type="text" class="form-control" id="productDescription" v-model="newProduct.description" required>
              </div>
              <div class="mb-3">
                <label for="productPrice" class="form-label">Product Price</label>
                <input type="number" class="form-control" id="productPrice" v-model="newProduct.price" required>
              </div>
              <div class="mb-3">
                <label for="productStock" class="form-label">Stock Quantity</label>
                <input type="number" class="form-control" id="productStock" v-model="newProduct.stock" required>
              </div>
              <div class="mb-3">
                <label for="productImage" class="form-label">Product Image URL</label>
                <input type="text" class="form-control" id="productImage" v-model="newProduct.image" required>
              </div>
              <button type="submit" class="btn btn-primary">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
/* Add custom styles as needed */
</style>
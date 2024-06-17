<template>
     <nav id="sidebar" class="sidebar">
        <div class="position-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link class="nav-link active" to="/dashboard">
                <i class="bi bi-person-circle" style="font-size: 1rem;"></i> Dashboard
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#" >
                Orders
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">
                Products
                </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">
                Customers
                </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">
                Reports
                </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">
                Integrations
                </router-link>
            </li>
          </ul>
        </div>
      </nav>
</template>
<style scoped>
#sidebar {
  height: 100vh;
  position: fixed;
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
  width:15%;
  padding:0px 10px;
}
</style>

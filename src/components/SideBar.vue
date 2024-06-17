<template>
     <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
        <div class="position-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link class="nav-link active" to="/dashboard">
                Dashboard
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
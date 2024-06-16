<template>
  <div class="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
    <div class="card p-4 shadow-sm" style="max-width: 400px;min-width:200px;">
      <div class="card-body">
        <div class="text-center mb-4">
          <i class="bi bi-person-circle" style="font-size: 3rem;"></i>
          <h5 class="card-title mt-2">Login</h5>
        </div>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="loginParams.email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="loginParams.password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {loginRequest, changeType } from './../services/authService';
import './../Interfaces/loginParams';

import { useRouter } from 'vue-router';
import AuthModule  from './../store/modules/AuthModule';
const router = useRouter();

const store = AuthModule()
const loginParams = ref<loginParams>({email:'',password:''});
const error = ref<string>('');
const iconType = ref<string>('pi pi-eye');
const passwordType = ref<string>('password');

const handleLogin = async() => {
    let result = await loginRequest(loginParams.value,store,router);
    error.value = result;    
    }
const passwordTypeChange = () =>{
     let result =changeType(passwordType.value,iconType.value);
        passwordType.value = result.passwordType;
        iconType.value = result.iconType;
}

</script>
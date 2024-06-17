<template>
    <TopMenuBar />
    <div class="d-flex justify-content-between">
        <div class="">
                <SideBar />
        </div>
        <div class="flex-grow-1">
                <router-view />
        </div>
    </div>
   
</template>
<script setup lang="ts" >
import SideBar from './../components/SideBar.vue'
import TopMenuBar  from './../components/TopMenuBar.vue';
</script>
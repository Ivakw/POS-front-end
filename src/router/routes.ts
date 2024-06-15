import login from './../auth/login.vue';
import dashboard from './../pages/dashboard.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
   {  
        path: '/', 
        name:'login',
        component: login 
    },
    {  
        path: '/dashboard', 
        name:'dashboard',
        component: dashboard,
        meta: { requiresAuth: true },
    },
]

export default routes;
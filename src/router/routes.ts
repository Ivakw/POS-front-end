import login from './../auth/login.vue';
import BasicLayout from '../pages/BasicLayout.vue';
import dashboard from '../components/dashboard.vue';
// import products from './../components/Products.vue'


const routes=[
   {  
        path: '/login', 
        name:'login',
        component: login 
    },
    {  
        path: '/', 
        name:'BasicLayout',
        component: BasicLayout,
        meta: { requiresAuth: true },
        children: [
            {
              path: '/dashboard',
              component: dashboard,
            },
            // {
            //   path: '/products',
            //   component: products,
            // },
          ],
    },
]

export default routes;
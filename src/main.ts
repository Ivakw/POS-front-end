import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router/router';
import 'primeicons/primeicons.css';
import { createPinia } from 'pinia'


const app = createApp(App)
const pinia = createPinia();
app.use(PrimeVue);
app.use(router);
app.use(pinia);
app.mount('#app');
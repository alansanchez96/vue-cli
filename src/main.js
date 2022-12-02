import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import storage from './storage'

axios.defaults.baseURL = 'https://api-portfolio-alansan.up.railway.app/';

const token = localStorage.getItem('access_token');

if(token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

createApp(App)
    .use(storage)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app')

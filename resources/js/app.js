import { createApp } from 'vue'
import App from './App.vue'
//import instance from './plugins/axios'
import axios from 'axios'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$isPtBr = true;
app.use(router);
//app.use(instance);
app.mount('#app')
import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router.js";
import Toast from 'vue-toast-notification';

createApp(App)
.use(router)
.use(Toast)
.mount('#app')



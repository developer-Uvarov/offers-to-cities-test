import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import VueTheMask from 'vue-the-mask'
import vClickOutside from "click-outside-vue3"
import '@/assets/tailwind.css'


createApp(App)
    .use(store)
    .use(VueTheMask)
    .use(vClickOutside)
    .mount('#app')

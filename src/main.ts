import {createApp} from 'vue'
import {createPinia} from "pinia";
import elementPlus from "element-plus"

import {router} from "./router";

import App from './views/Home.vue'
import "element-plus/dist/index.css"
import './main.css'


const app = createApp(App);
app.use(createPinia())
app.use(router)
app.use(elementPlus)
app.mount('#app')

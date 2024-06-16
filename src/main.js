// import './assets/main.css'
import './assets/css/bootstrap.min.css'
import './assets/css/tiny-slider.css'
import './assets/css/style.css'
import './assets/js/bootstrap.bundle.min.js'
import './assets/js/tiny-slider.js'
import './assets/js/custom.js'
import store from  './store/index.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

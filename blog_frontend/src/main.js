import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext'

// import 'primevue/resources/themes/lara-dark-blue/theme.css'       //theme
// import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.use(store)

app.component('InputText', InputText)

app.mount('#app')

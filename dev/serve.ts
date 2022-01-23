import { createApp } from 'vue';
import App from './serve.vue';
import VueBasicAlert from '@/entry.esm'

const app = createApp(App);

app.use(VueBasicAlert)

app.mount('#app');

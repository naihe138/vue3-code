import { createApp } from "vue";
import App from "./event.vue";
// import App from "./lifecycle.vue";
console.log('====================================');
console.log(App);
console.log('====================================');
const root = document.getElementById('app');
createApp(App).mount(root)

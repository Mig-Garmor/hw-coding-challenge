import { createApp } from "vue";
import App from "./App.vue";
import "./tailwind.css";

// Import Vue Toastify
import Vue3Toastify from "vue3-toastify";

import "vue3-toastify/dist/index.css"; // Import the CSS for Toastify

createApp(App)
  .use(Vue3Toastify, {
    autoClose: 2000,
  })
  .mount("#app");

import { createApp } from 'vue';
import { inject } from '@vercel/analytics';
import { setScrollSmoother } from '@/plugins/gsap.js';
import { i18n } from '@/plugins/i18n.js';
import App from '@/App.vue';
import '@/main.css';

inject();

createApp(App).use(i18n).mount('#app');

setScrollSmoother();

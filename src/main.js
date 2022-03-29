import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import ListSelection from './pages/ListSelection.vue';
import CustomSelection from './pages/CustomSelection.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ListSelection,
    },
    {
      path: '/custom',
      component: CustomSelection,
    },
  ],
});
app.use(router);
app.mount('#app');

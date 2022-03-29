import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import ListSelection from './pages/ListSelection.vue';

const app = createApp(App);
app.mount('#app');
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ListSelection,
    },
  ],
});
app.use(router);

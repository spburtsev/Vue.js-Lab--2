import { createApp } from 'vue';
import { createRouter, createHistory } from 'vue-router';
import App from './App.vue';
import ListSelection from './pages/ListSelection.vue';

const app = createApp(App);
app.mount('#app');
const router = createRouter({
  history: createHistory(),
  routes: [
    {
      path: '/',
      component: ListSelection,
    },
  ],
});
app.use(router);

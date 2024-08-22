import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/Main.vue';
import HomePage from '../views/Home.vue';
import AboutPage from '../views/About.vue';
import ContactPage from '../views/Contact.vue';
import ChatPage from '../views/Chat.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/chat',
    name: 'Chat',
    component: ChatPage
  }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
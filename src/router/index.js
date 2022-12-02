import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login';
import Posts from '../components/Posts';
import Home from '../components/Home';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
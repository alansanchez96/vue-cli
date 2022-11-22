import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login';
import Estudiantes from '../components/Estudiantes';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/estudiantes',
        name: 'Estudiantes',
        component: Estudiantes
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
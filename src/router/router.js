import { createRouter, createWebHistory } from "vue-router";
import Todo from "../components/Todo.vue";
import About from "../components/About.vue";
import Practices from "../components/Practices.vue";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import axios from 'axios';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/todo',
        name: 'todo',
        component: Todo,
        meta: { requiresAuth: true }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: { requiresAuth: true }
    },
    {
        path: '/practice',
        name: 'practice',
        component: Practices,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            middleware: "guest",
            title: `Login`
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

 
router.beforeEach(async (to, from, next) => {
    // Check if the route requires authentication
    if (to.meta.requiresAuth) {
        // Check if token exists in local storage
        const token = localStorage.getItem('token');
        if (!token) {
            // Redirect to login page if token does not exist
            next('/login');
        } else {
            try {
                // Validate token
                const response = await axios.post('http://example-app.test/api/validate-token', { token });
                // Token is valid, proceed to route
                next();
            } catch (error) {
                // Token is invalid, redirect to login page
                localStorage.removeItem('token');
                next('/login');
            }
        }
    } else {
        // Proceed to route
        next();
    }
});

export default router;

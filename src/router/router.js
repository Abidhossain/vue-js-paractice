import {createRouter, createWebHistory} from "vue-router";
import Todo from "../components/Todo.vue";
import About from "../components/About.vue";
import Practices from "../components/Practices.vue";
import Home from "../components/Home.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/todo',
        name: 'todo',
        component: Todo
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/practice',
        name: 'practice',
        component: Practices
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
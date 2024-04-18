import {createRouter, createWebHistory} from "vue-router";
import Todo from "../components/Todo.vue";
import About from "../components/About.vue";

const routes = [
    {
        path: '/',
        name: 'todo',
        component: Todo
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
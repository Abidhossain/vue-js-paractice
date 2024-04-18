<script setup>
import {ref, computed, reactive, watch} from "vue";
import TodoItem from "./TodoItem.vue";

const todos = ref([
  {
    id: 1,
    title: 'Vue js Course',
    completed: true
  },
  {
    id: 2,
    title: 'Aws Course',
    completed: true
  },
  {
    id: 3,
    title: 'Data Science Course',
    completed: false
  },
])

const title = ref('')

const addTodo = () => {
  if (title.value === '') {
    return alert('Please fill the input')
  }
  todos.value.push({
    id: todos.value.length + 1,
    title: title.value,
    completed: false
  })
  title.value = ''
}

const countTotalTodo = computed(() => {
  return todos.value.length
})

const countCompletedTodo = computed(() => {
  return todos.value.filter((item) => item.completed).length
})

const handleCheckboxComplete = (item) => {
  todos.value.filter((todo) => {
    if (todo.id === item.id)
      todo.completed = !todo.completed
  })
}

const removeTodoItem = (index) => {
  todos.value.splice(index, 1)
}

const form = reactive({
  age: 0
})

setInterval(() => {
  form.age++
}, 1000)
watch(() => form.age, (newValue) => {
  console.log(newValue)
})
</script>


<template>
  <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16 border p-6 space-y-6">
    <h1 class="text-2xl uppercase font-bold text-gray-700">To Do List <span v-if="todos.length">({{
        countCompletedTodo
      }} /{{ countTotalTodo }})</span></h1>
    <form @submit.prevent="addTodo">
      <div class="flex items-center border-b-2  border-teal-500 py-2">
        <input class="border-none focus:outline-none w-full text-gray-700" type="text" placeholder="Add a task"
               v-model="title">
        <button type="submit"
                class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-4 text-sm hover:bg-teal-700 text-white py-1 px-2 rounded">
          Add
        </button>
      </div>
    </form>
    <ul>
      <li v-for="(todo,index) in todos" :key="todo.id" v-if="todos.length">
        <TodoItem
            :index="index"
            :todo="todo"
            @checkComplete="handleCheckboxComplete"
            @delete="removeTodoItem"
        />
      </li>
      <li v-else>No data found</li>
    </ul>
  </div>
</template>
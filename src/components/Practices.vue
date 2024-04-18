<script setup>
import {ref, reactive, computed} from 'vue'

const categories = ref(['One', 'Two', 'Three', 'Four'])
const products = ref([
  {name: 'Mango', category: 'One'},
  {name: 'Banana', category: 'One'},
  {name: 'Earbuds', category: 'Three'},
  {name: 'Keyboard', category: 'Two'},
])

// const selectedCategory = ref('One')
//
// const filteredProducts = computed(() => {
//   return products.value.filter((product) => product.category === selectedCategory.value)
// })


const form = reactive({
  name: '',
  category: ''
})
const addProduct = () => {
  if (form.name === '') {
    return alert('Please enter product name')
  }
  products.value.push({
    name: form.name,
    category: form.category
  })
  form.category = ''
  form.name = ''
}

let firstName = ref('')
let lastName = ref('')

const fullName = computed(() => {
  let fullName = `${firstName.value} ${lastName.value}`
  return fullName;
})

const setFirstName = computed({
  get: () => firstName.value.toUpperCase(),
  set: value => {
    firstName.value = value.toUpperCase()
  }
})

</script>
<template>
  <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16 border p-6 space-y-6">
    <h1 class="text-2xl uppercase font-bold text-gray-700">Test Purpose</h1>

    <!-- Form for filtering and adding products -->
    <form class="" @submit.prevent="addProduct">
      <div class="flex items-center border-b-2 border-teal-500 py-2">
        <select class="border-none focus:outline-none w-full" v-model="form.category">
          <option v-for="(category, index) in categories" :key="index">{{ category }}</option>
        </select>
      </div>
      <input class="border-none focus:outline-none w-full text-gray-700 py-2 pb-5" type="text"
             placeholder="Product name" v-model="form.name">
      <button type="submit" class="flex-shrink-0 bg-teal-500 w-full text-white py-2 px-2 rounded">Add</button>
    </form>

    <!-- Product list displayed in cards grid-wise -->
    <div class="grid grid-cols-2 gap-4">
      <template v-for="(product, index) in products" :key="index">
        <div class="bg-gray-100 border rounded-lg p-4">
          <h2 class="text-xl font-bold">{{ product.name }}</h2>
          <p class="text-gray-600">{{ product.category }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

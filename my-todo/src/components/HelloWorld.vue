<script setup>
import {ref, computed} from 'vue'

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

const products = ref([
  {name: 'Mango', category: 'fruit'},
  {name: 'Banana', category: 'fruit'},
  {name: 'Earbuds', category: 'gadgets'},
  {name: 'Keyboard', category: 'gadgets'},
])

const selectedCategory = ref('fruit')

const filteredProducts = computed(() => {
    return products.value.filter((product) => product.category === selectedCategory.value)
})

</script>

<template>

  <ul>
    <li v-for="product in filteredProducts">{{ product.name }} / {{ product.category }}</li>
  </ul>
  <!--  <input type="text" v-model="setFirstName">-->
  <!--  <input type="text" v-model="lastName">-->

  <!--  {{ setFirstName }} -> {{ firstName}}-->

    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>

</template>

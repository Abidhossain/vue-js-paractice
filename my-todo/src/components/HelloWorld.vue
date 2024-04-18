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
  set: value => { firstName.value = value.toUpperCase() }
})

</script>

<template>
  <input type="text" v-model="setFirstName">
  <input type="text" v-model="lastName">

  {{ setFirstName }} -> {{ firstName}}

</template>
